const fs = require("fs");
const path = require("path");

const seo = JSON.parse(fs.readFileSync("lib/seo-metadata.json", "utf8"));
const homeDir = path.join("public", "home");
fs.mkdirSync(homeDir, { recursive: true });

const existing = new Set(
  fs.readdirSync(homeDir).map((f) => f.toLowerCase())
);

const map = {};
for (const [key, entry] of Object.entries(seo)) {
  const imgUrl =
    entry?.openGraph?.image ||
    entry?.twitter?.image ||
    null;
  if (!imgUrl || !imgUrl.includes("uploads")) continue;
  const slug = key.replace(/^\//, "").replace(/\/$/, "");
  const file = path.basename(new URL(imgUrl).pathname);
  map[slug] = {
    href: key.endsWith("/") ? key : key + "/",
    imgUrl,
    file,
    local: "/home/" + file,
    exists: existing.has(file.toLowerCase()),
  };
}

fs.writeFileSync(
  "tmp-wp-articles/slug-image-map.json",
  JSON.stringify(map, null, 2)
);

const missing = Object.values(map).filter((m) => !m.exists);
console.log("mapped", Object.keys(map).length, "missing", missing.length);
console.log(missing.slice(0, 20).map((m) => m.file));
