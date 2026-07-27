const fs = require("fs");
const path = require("path");
const dir = __dirname;
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json"))) {
  const p = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
  const html = p.content.rendered;
  const yt =
    (html.match(/youtu\.be\/([\w-]+)/) || html.match(/embed\/([\w-]+)/) || [])[1];
  const faqs = [];
  const re = /"name"\s*:\s*"([^"]+)"[\s\S]*?"text"\s*:\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(html))) {
    faqs.push({ q: m[1], a: m[2].replace(/\\"/g, '"').replace(/\\n/g, " ") });
  }
  const h2 = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((x) =>
    x[1].replace(/<[^>]+>/g, "").trim()
  );
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, "\n")
    .replace(/&nbsp;/g, " ")
    .replace(/&rsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  fs.writeFileSync(path.join(dir, f.replace(".json", ".txt")), text);
  console.log("\n====", f);
  console.log("title", p.title.rendered);
  console.log("yt", yt);
  console.log("h2", h2);
  console.log("faqs", faqs.length);
  faqs.forEach((x, i) => console.log(i + 1, x.q));
  fs.writeFileSync(
    path.join(dir, f.replace(".json", "-meta.json")),
    JSON.stringify({ title: p.title.rendered, yt, h2, faqs }, null, 2)
  );
}
