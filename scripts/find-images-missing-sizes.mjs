import fs from "fs";
import path from "path";

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === "node_modules" || ent.name === ".next") continue;
      walk(p, files);
    } else if (ent.name.endsWith(".tsx")) {
      files.push(p);
    }
  }
  return files;
}

const missing = [];
for (const f of walk("app")) {
  const c = fs.readFileSync(f, "utf8");
  if (!c.includes("<Image")) continue;
  const re = /<Image\b([\s\S]*?)(?:\/>|>)/g;
  let m;
  while ((m = re.exec(c))) {
    const attrs = m[1];
    if (!/\bsizes=/.test(attrs)) {
      missing.push(`${f}: ${attrs.replace(/\s+/g, " ").trim().slice(0, 140)}`);
    }
  }
}
console.log(missing.length ? missing.join("\n") : "none");
