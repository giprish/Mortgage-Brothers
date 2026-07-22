/**
 * Add trailing slashes to internal page URLs across the codebase.
 * Skips static assets and external/non-page URLs.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TARGET_DIRS = ["app", "lib", "components", "src"].map((d) =>
  path.join(ROOT, d)
);
// next.config.ts handled manually (dynamic :path* segments)
const EXTRA_FILES = [path.join(ROOT, "middleware.ts")].filter((f) =>
  fs.existsSync(f)
);

const ASSET_EXT =
  /\.(?:jpg|jpeg|png|gif|webp|svg|ico|css|js|mjs|cjs|map|woff2?|ttf|eot|otf|pdf|xml|json|txt|mp4|webm|mp3|wav|zip|csv|avif|bmp|md)$/i;

const SITE_HOSTS = [
  "https://azmortgagebrothers.com",
  "http://azmortgagebrothers.com",
  "https://www.azmortgagebrothers.com",
  "http://www.azmortgagebrothers.com",
];

function isAssetPath(pathname) {
  const clean = pathname.split(/[?#]/)[0];
  return ASSET_EXT.test(clean);
}

/**
 * Ensure a path-like string has a trailing slash before ? or #.
 * Leaves "/", hash-only, assets, and empty alone.
 */
function withTrailingSlash(raw) {
  if (!raw || raw === "/") return raw;
  if (raw.startsWith("#") || raw.startsWith("?") || raw.startsWith("mailto:") || raw.startsWith("tel:")) {
    return raw;
  }

  // Absolute site URL
  for (const host of SITE_HOSTS) {
    if (raw === host || raw === `${host}/`) return `${host}/`;
    if (raw.startsWith(host + "/")) {
      const rest = raw.slice(host.length);
      return host + withTrailingSlash(rest);
    }
  }

  // Other absolute URLs — leave alone
  if (/^https?:\/\//i.test(raw)) return raw;

  if (!raw.startsWith("/")) return raw;
  if (isAssetPath(raw)) return raw;

  let pathPart = raw;
  let suffix = "";
  const q = raw.indexOf("?");
  const h = raw.indexOf("#");
  let cut = -1;
  if (q >= 0 && h >= 0) cut = Math.min(q, h);
  else if (q >= 0) cut = q;
  else if (h >= 0) cut = h;
  if (cut >= 0) {
    pathPart = raw.slice(0, cut);
    suffix = raw.slice(cut);
  }

  if (pathPart === "/" || pathPart === "") return raw;
  if (!pathPart.endsWith("/")) pathPart += "/";
  // Ensure /path/#hash not /path#hash (already handled by inserting / before suffix if path ends with /)
  return pathPart + suffix;
}

function processContent(content, filePath) {
  let out = content;
  let changes = 0;

  // 1) Quoted string literals that look like paths: "/foo", '/foo', "/foo#bar"
  out = out.replace(/(["'])(\/(?:[^"'\\]|\\.)*?)\1/g, (full, quote, inner) => {
    // Skip CSS url() contexts handled separately; skip obvious non-paths
    if (inner.includes("${")) return full;
    if (!inner.startsWith("/")) return full;
    // Skip if this is clearly a file path asset
    const next = withTrailingSlash(inner);
    if (next === inner) return full;
    changes++;
    return quote + next + quote;
  });

  // 2) Template literals that are pure path builders (no nested templates)
  //    Match `...` containing only /path/${expr} style without nested `
  out = out.replace(/`(\/(?:[^`$\\]|\\.|\$\{[^}]*\})*)`/g, (full, inner) => {
    if (isAssetPath(inner.replace(/\$\{[^}]*\}/g, "x"))) return full;

    // Absolute external in template — rare
    if (/^https?:\/\//i.test(inner)) {
      const next = withTrailingSlash(inner);
      if (next === inner) return full;
      changes++;
      return "`" + next + "`";
    }

    // Split off # or ? that are outside ${}
    // Simpler approach: if ends with }, add / before closing; if has # after }, put / before #
    let pathTpl = inner;
    let suffix = "";

    // Find last # or ? that is NOT inside ${...}
    let depth = 0;
    let cut = -1;
    for (let i = 0; i < inner.length; i++) {
      if (inner[i] === "$" && inner[i + 1] === "{") {
        depth++;
        i++;
        continue;
      }
      if (inner[i] === "}" && depth > 0) {
        depth--;
        continue;
      }
      if (depth === 0 && (inner[i] === "#" || inner[i] === "?")) {
        cut = i;
        break;
      }
    }
    if (cut >= 0) {
      pathTpl = inner.slice(0, cut);
      suffix = inner.slice(cut);
    }

    if (pathTpl === "/" || pathTpl === "") return full;
    if (pathTpl.endsWith("/")) {
      const next = pathTpl + suffix;
      if (next === inner) return full;
      changes++;
      return "`" + next + "`";
    }

    // Don't slash if last char of pathTpl suggests incomplete (ends mid-expression) — OK
    const next = pathTpl + "/" + suffix;
    if (next === inner) return full;
    changes++;
    return "`" + next + "`";
  });

  // 3) url('/asset') — revert if we wrongly slashed assets inside url()
  out = out.replace(/url\(\s*(['"])(\/[^'")]+)\1\s*\)/g, (full, quote, inner) => {
    if (isAssetPath(inner)) {
      // Ensure no trailing slash on assets
      const cleaned = inner.replace(/\/+(?=[?#]|$)/, (m, offset, str) => {
        // only strip trailing slash before end/?/#
        return "";
      });
      // Simpler: strip trailing slash from path part of assets
      let p = inner;
      let s = "";
      const qi = Math.min(
        ...[inner.indexOf("?"), inner.indexOf("#")].filter((i) => i >= 0),
        Infinity
      );
      if (qi !== Infinity) {
        p = inner.slice(0, qi);
        s = inner.slice(qi);
      }
      if (p.endsWith("/") && isAssetPath(p.slice(0, -1))) {
        changes++;
        return `url(${quote}${p.slice(0, -1)}${s}${quote})`;
      }
      return `url(${quote}${inner}${quote})`;
    }
    return full;
  });

  if (changes > 0) {
    console.log(`${path.relative(ROOT, filePath)}: ${changes} replacements`);
  }
  return { out, changes };
}

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (
      entry.name === "node_modules" ||
      entry.name === ".next" ||
      entry.name === "public" ||
      entry.name === "scripts"
    ) {
      continue;
    }
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(tsx|ts|jsx|js|mjs|cjs|mdx)$/.test(entry.name)) files.push(full);
  }
  return files;
}

function main() {
  const files = [
    ...TARGET_DIRS.flatMap((d) => walk(d)),
    ...EXTRA_FILES,
  ];
  const unique = [...new Set(files)];
  let total = 0;
  let touched = 0;

  for (const file of unique) {
    const content = fs.readFileSync(file, "utf8");
    const { out, changes } = processContent(content, file);
    if (changes > 0 && out !== content) {
      fs.writeFileSync(file, out, "utf8");
      touched++;
      total += changes;
    }
  }

  console.log(`\nDone. ${touched} files, ${total} replacements.`);
}

main();
