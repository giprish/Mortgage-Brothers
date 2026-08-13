/**
 * Move `export const metadata` to sit after the last import statement.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
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

let fixed = 0;
for (const file of walk("app")) {
  let src = readFileSync(file, "utf8");
  const metaMatch = src.match(/^export const metadata: Metadata = getSeoMetadata\([^)]+\);\r?\n/m);
  if (!metaMatch) continue;

  const metaLine = metaMatch[0].trimEnd() + "\n";
  // Remove all occurrences of this meta export
  const without = src.replace(/^export const metadata: Metadata = getSeoMetadata\([^)]+\);\r?\n+/gm, "");

  // Find end of import block
  const lines = without.split(/\r?\n/);
  let lastImport = -1;
  let inMulti = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (inMulti) {
      if (/\}\s*from\s+['"]/.test(line) || /from\s+['"][^'"]+['"]\s*;?\s*$/.test(line)) {
        inMulti = false;
        lastImport = i;
      }
      continue;
    }
    if (/^import\b/.test(line)) {
      if (/\{[^}]*$/.test(line) && !/from\s+['"]/.test(line)) {
        inMulti = true;
      } else {
        lastImport = i;
      }
    }
  }

  if (lastImport < 0) continue;

  // Check if meta was originally between imports (imports after meta position in original)
  const origLines = src.split(/\r?\n/);
  const metaIdx = origLines.findIndex((l) => l.startsWith("export const metadata: Metadata = getSeoMetadata"));
  const importAfter = origLines.slice(metaIdx + 1).some((l) => /^import\b/.test(l));
  if (!importAfter && metaIdx > lastImport) continue; // already fine

  lines.splice(lastImport + 1, 0, "", metaLine.trimEnd(), "");
  const next = lines.join("\n").replace(/\n{3,}/g, "\n\n");
  if (next !== src) {
    writeFileSync(file, next, "utf8");
    fixed++;
    console.log("fixed", file);
  }
}
console.log("fixed count", fixed);
