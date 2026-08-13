/**
 * Find and report page.tsx files where metadata was injected mid-import.
 */
import { readFileSync, readdirSync, statSync, writeFileSync } from "fs";
import { join } from "path";

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (name === "page.tsx") out.push(p);
  }
  return out;
}

const bad = [];
for (const file of walk("app")) {
  const src = readFileSync(file, "utf8");
  if (/import\s*\{[\s\S]*?export const metadata[\s\S]*?\}\s*from/.test(src)) {
    bad.push(file);
  }
}

console.log("broken count", bad.length);
for (const f of bad) console.log(f);
writeFileSync("lighthouse-reports/broken-meta-pages.txt", bad.join("\n") + "\n");
