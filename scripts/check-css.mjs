import { readdirSync, readFileSync, statSync } from "fs";
import { join } from "path";

const dir = ".next/static/chunks";
const files = readdirSync(dir)
  .filter((x) => x.endsWith(".css"))
  .map((x) => ({ x, s: statSync(join(dir, x)).size }))
  .sort((a, b) => b.s - a.s);

const f = files[0];
const c = readFileSync(join(dir, f.x), "utf8");
console.log(f.x, f.s);
console.log("hasAttr", c.includes('[class*="text-[#3fb364]"]'));
console.log("has246", c.includes("#246d39"));
console.log("has6bImp", c.includes("#6bcf84") && c.includes("!important"));
const idx = c.indexOf('[class*="text-[#3fb364]"]');
console.log("idx", idx);
if (idx >= 0) console.log(c.slice(idx, idx + 220));
