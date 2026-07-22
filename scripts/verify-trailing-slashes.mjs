import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ASSET =
  /\.(?:jpg|jpeg|png|gif|webp|svg|ico|css|js|mjs|map|woff2?|ttf|eot|otf|pdf|xml|json|txt|mp4|webm|mp3|wav|zip|csv|avif)$/i;

function walk(dir, files = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".next", "public", "scripts"].includes(e.name)) continue;
    const f = path.join(dir, e.name);
    if (e.isDirectory()) walk(f, files);
    else if (/\.(tsx|ts|jsx|js)$/.test(e.name)) files.push(f);
  }
  return files;
}

const files = [...walk(path.join(ROOT, "app")), ...walk(path.join(ROOT, "lib"))];
const missing = [];

function pathBeforeQueryHash(u) {
  let depth = 0;
  for (let i = 0; i < u.length; i++) {
    if (u[i] === "$" && u[i + 1] === "{") {
      depth++;
      i++;
      continue;
    }
    if (u[i] === "}" && depth) {
      depth--;
      continue;
    }
    if (depth === 0 && (u[i] === "#" || u[i] === "?")) return u.slice(0, i);
  }
  return u;
}

for (const file of files) {
  const c = fs.readFileSync(file, "utf8");
  const rel = path.relative(ROOT, file);

  for (const m of c.matchAll(/href=["'](\/[^"']*)["']/g)) {
    const u = m[1];
    if (u === "/" || u.startsWith("/#") || u.startsWith("/?")) continue;
    const p = u.split(/[?#]/)[0];
    if (ASSET.test(p)) continue;
    if (!p.endsWith("/")) missing.push(`${rel} => ${u}`);
  }

  for (const m of c.matchAll(/href=\{`(\/[^`]*?)`\}/g)) {
    const u = m[1];
    if (u === "/" || u.startsWith("/#") || u.startsWith("/?")) continue;
    const stripped = u.replace(/\$\{[^}]*\}/g, "x");
    if (ASSET.test(stripped.split(/[?#]/)[0])) continue;
    const p = pathBeforeQueryHash(u);
    if (!p.endsWith("/")) missing.push(`${rel} => \`${u}\``);
  }

  for (const m of c.matchAll(/(?:let |const |)\s*(?:href|linkHref)\s*=\s*["'](\/[^"']*)["']/g)) {
    const u = m[1];
    if (u === "/" || u.startsWith("/#") || u.startsWith("/?")) continue;
    const p = u.split(/[?#]/)[0];
    if (ASSET.test(p)) continue;
    if (!p.endsWith("/")) missing.push(`${rel} assign => ${u}`);
  }

  for (const m of c.matchAll(/(?:const|let)\s+href\s*=\s*`(\/[^`]*?)`/g)) {
    const u = m[1];
    const p = pathBeforeQueryHash(u);
    if (!p.endsWith("/") && p !== "/") missing.push(`${rel} tpl assign => \`${u}\``);
  }
}

console.log("MISSING COUNT", missing.length);
console.log(missing.join("\n"));
