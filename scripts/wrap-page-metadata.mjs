/**
 * Wraps client page.tsx files so they can export unique SEO metadata.
 * - Renames page.tsx → PageClient.tsx (keeps "use client")
 * - Writes a server page.tsx with getSeoMetadata(pathname)
 *
 * Skips: already-wrapped pages, dynamic generateMetadata routes, page.tsx that already exports metadata.
 */
import { mkdirSync, readFileSync, writeFileSync, renameSync, existsSync, readdirSync, statSync } from "fs";
import { join, relative, dirname, sep } from "path";

const APP = join(process.cwd(), "app");
const DRY = process.argv.includes("--dry");

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === "component" || name === "components") continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (name === "page.tsx") out.push(p);
  }
  return out;
}

function fileToPathname(file) {
  let rel = relative(APP, dirname(file)).split(sep).join("/");
  if (!rel || rel === ".") return "/";
  // Skip dynamic segments that need generateMetadata — handle separately if static enough
  if (rel.includes("[")) return null;
  return `/${rel}/`;
}

function isClientPage(src) {
  return /^\s*["']use client["']/.test(src);
}

function hasMetadata(src) {
  return (
    /export\s+const\s+metadata\b/.test(src) ||
    /export\s+async\s+function\s+generateMetadata\b/.test(src) ||
    /export\s+function\s+generateMetadata\b/.test(src)
  );
}

const pages = walk(APP);
let wrapped = 0;
let skipped = 0;
let serverMeta = 0;

for (const file of pages) {
  const src = readFileSync(file, "utf8");
  const pathname = fileToPathname(file);
  if (!pathname) {
    skipped++;
    continue;
  }
  if (hasMetadata(src)) {
    skipped++;
    continue;
  }

  const clientPath = join(dirname(file), "PageClient.tsx");
  if (existsSync(clientPath)) {
    skipped++;
    continue;
  }

  if (isClientPage(src)) {
    const serverPage = `import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = getSeoMetadata(${JSON.stringify(pathname)});

export default function Page() {
  return <PageClient />;
}
`;
    console.log(`${DRY ? "[dry] " : ""}wrap client ${pathname}`);
    if (!DRY) {
      renameSync(file, clientPath);
      writeFileSync(file, serverPage, "utf8");
    }
    wrapped++;
    continue;
  }

  // Server component page without metadata — inject export
  const importLine = `import type { Metadata } from "next";\nimport { getSeoMetadata } from "@/lib/seo";\n`;
  const metaLine = `\nexport const metadata: Metadata = getSeoMetadata(${JSON.stringify(pathname)});\n`;
  let next = src;
  if (!next.includes('from "next"') && !next.includes("from 'next'")) {
    // prepend imports after any existing imports block start
    next = importLine + next;
  } else if (!next.includes("getSeoMetadata")) {
    // add getSeoMetadata import near top
    next = `import { getSeoMetadata } from "@/lib/seo";\n` + next;
    if (!/import\s+type\s+\{\s*Metadata\s*\}/.test(next)) {
      next = `import type { Metadata } from "next";\n` + next;
    }
  }
  if (!hasMetadata(next)) {
    // Insert metadata after imports
    const lines = next.split("\n");
    let insertAt = 0;
    for (let i = 0; i < lines.length; i++) {
      if (/^import\b/.test(lines[i]) || /^\s*$/.test(lines[i]) || /^\/\*/.test(lines[i]) || /^\/\//.test(lines[i])) {
        insertAt = i + 1;
        continue;
      }
      break;
    }
    lines.splice(insertAt, 0, `export const metadata: Metadata = getSeoMetadata(${JSON.stringify(pathname)});`, "");
    next = lines.join("\n");
  }

  console.log(`${DRY ? "[dry] " : ""}add meta server ${pathname}`);
  if (!DRY) writeFileSync(file, next, "utf8");
  serverMeta++;
}

console.log(JSON.stringify({ wrapped, serverMeta, skipped, total: pages.length }, null, 2));
