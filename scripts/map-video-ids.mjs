import fs from "fs";

const html = fs.readFileSync("scripts/videos-page-cache.html", "utf8");
const titles = [];
const tre = /<(?:h2|h3)[^>]*>([^<]{10,200})<\/(?:h2|h3)>/gi;
let m;
while ((m = tre.exec(html))) {
  titles.push({ t: m[1].replace(/\s+/g, " ").trim(), i: m.index });
}
const ids = [];
const ire =
  /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/|ytimg\.com\/vi\/)([a-zA-Z0-9_-]{11})/g;
while ((m = ire.exec(html))) ids.push({ id: m[1], i: m.index });

const mapped = titles.map((title) => {
  const near = ids.find((x) => x.i > title.i && x.i < title.i + 8000);
  // also search backward a bit (id may appear before title in card)
  const before = [...ids].reverse().find((x) => x.i < title.i && title.i - x.i < 2500);
  return { title: title.t, after: near?.id || null, before: before?.id || null };
});

console.log(JSON.stringify(mapped, null, 2));
