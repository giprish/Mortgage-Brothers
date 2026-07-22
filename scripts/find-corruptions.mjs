import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function walk(dir, files = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".next", "public", "scripts"].includes(e.name)) continue;
    const f = path.join(dir, e.name);
    if (e.isDirectory()) walk(f, files);
    else if (/\.(tsx|ts|jsx|js)$/.test(e.name)) files.push(f);
  }
  return files;
}

const bad = [];
for (const file of [...walk(path.join(ROOT, "app")), ...walk(path.join(ROOT, "lib"))]) {
  const c = fs.readFileSync(file, "utf8");
  for (const m of c.matchAll(/(className|style|id|srcSet)=\/["'`]/g)) {
    bad.push(`${path.relative(ROOT, file)}: ${m[0]}`);
  }
  // also catch =/"something"
  for (const m of c.matchAll(/=\/["'][^"']*["']/g)) {
    bad.push(`${path.relative(ROOT, file)}: ${m[0]}`);
  }
}
console.log(bad.length ? bad.join("\n") : "No attribute corruptions found");
