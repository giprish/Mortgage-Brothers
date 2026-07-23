import fs from "fs";

const data = fs.readFileSync("scripts/phoenix-videos-cache.html", "utf8");
const embeds = [
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
for (const x of embeds) {
  const youtubeId = x[2];
  if (seen.has(youtubeId)) continue;
  seen.add(youtubeId);
  videos.push({
    id: `phoenix-${String(videos.length + 1).padStart(2, "0")}`,
    title: decode(x[1]),
    youtubeId,
  });
}

const ts = `import type { VideoItem } from "./videos-data";

/** Full Phoenix Market & Real Estate Updates library from the live site. */
export const PHOENIX_MARKET_FULL_VIDEOS: VideoItem[] = ${JSON.stringify(videos, null, 2)};
`;

fs.writeFileSync(
  "app/videos/phoenix-market-videos.ts",
  ts.replace(/"id"/g, "id").replace(/"title"/g, "title").replace(/"youtubeId"/g, "youtubeId")
);
// Keep valid JSON-style TS (quoted keys are fine)
fs.writeFileSync(
  "app/videos/phoenix-market-videos.ts",
  `import type { VideoItem } from "./videos-data";

/** Full Phoenix Market & Real Estate Updates library from the live site. */
export const PHOENIX_MARKET_FULL_VIDEOS: VideoItem[] = ${JSON.stringify(videos, null, 2)};
`
);

console.log("wrote", videos.length, "videos");
