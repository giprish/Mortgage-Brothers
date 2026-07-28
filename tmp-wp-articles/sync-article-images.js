const fs = require("fs");
const path = require("path");

const seo = JSON.parse(fs.readFileSync("lib/seo-metadata.json", "utf8"));
const homeDir = path.join("public", "home");
fs.mkdirSync(homeDir, { recursive: true });

const existingFiles = fs.readdirSync(homeDir);
const existingLower = new Map(existingFiles.map((f) => [f.toLowerCase(), f]));

const map = {};

async function download(url, dest) {
  const res = await fetch(url, { headers: { "user-agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(res.status + " " + url);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return buf.length;
}

(async () => {
  for (const [key, entry] of Object.entries(seo)) {
    const imgUrl = entry?.openGraph?.image || entry?.twitter?.image || null;
    if (!imgUrl || typeof imgUrl !== "string" || !imgUrl.includes("/uploads/")) continue;

    let file;
    try {
      file = path.basename(new URL(imgUrl).pathname);
    } catch {
      continue;
    }
    if (!file || file === "/") continue;

    const href = key.endsWith("/") ? key : key + "/";
    const localName = existingLower.get(file.toLowerCase()) || file;
    const dest = path.join(homeDir, localName);

    if (!existingLower.has(file.toLowerCase())) {
      try {
        // Prefer full-size URL (strip -400x250 etc for download of full if available)
        const fullUrl = imgUrl.replace(/-\d+x\d+(\.[a-zA-Z0-9]+)$/, "$1");
        let size;
        try {
          size = await download(fullUrl, dest);
          file = path.basename(new URL(fullUrl).pathname);
        } catch {
          size = await download(imgUrl, dest);
        }
        existingLower.set(file.toLowerCase(), file);
        console.log("dl", file, size);
      } catch (e) {
        console.log("FAIL", file, e.message);
        continue;
      }
    }

    const finalName = existingLower.get(file.toLowerCase()) || file;
    map[href] = "/home/" + finalName;
    // also without trailing slash key variants
    map[href.replace(/\/$/, "")] = "/home/" + finalName;
  }

  fs.writeFileSync("lib/article-images.json", JSON.stringify(map, null, 2));
  console.log("wrote lib/article-images.json", Object.keys(map).length / 2, "articles");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
