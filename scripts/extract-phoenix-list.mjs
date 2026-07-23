import fs from "fs";

const data = fs.readFileSync("scripts/phoenix-videos-cache.html", "utf8");
const embeds2 = [
  ...data.matchAll(
    /title="([^"]*)"[^>]*(?:data-src|src)="https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/gi
  ),
];

function decode(s) {
  return s
    .replace(/&amp;apos;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

const seen = new Set();
const videos = [];
for (const x of embeds2) {
  const id = x[2];
  if (seen.has(id)) continue;
  seen.add(id);
  videos.push({ title: decode(x[1]), youtubeId: id });
}

console.log(JSON.stringify(videos, null, 2));
console.log("COUNT", videos.length);
