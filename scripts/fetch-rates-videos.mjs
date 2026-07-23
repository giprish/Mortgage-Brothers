import https from "https";
import fs from "fs";

const url = "https://azmortgagebrothers.com/videos/mortgage-rates-today/";

https
  .get(url, (res) => {
    let data = "";
    res.on("data", (c) => (data += c));
    res.on("end", () => {
      function decode(s) {
        return s
          .replace(/&amp;apos;/g, "'")
          .replace(/&apos;/g, "'")
          .replace(/&#039;/g, "'")
          .replace(/&amp;/g, "&")
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'");
      }

      const embeds = [
        ...data.matchAll(
          /title="([^"]*)"[^>]*(?:data-src|src)="https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/gi
        ),
      ];

      const seen = new Set();
      const videos = [];
      for (const x of embeds) {
        const youtubeId = x[2];
        if (seen.has(youtubeId)) continue;
        seen.add(youtubeId);
        videos.push({
          id: `rates-${String(videos.length + 1).padStart(2, "0")}`,
          title: decode(x[1]),
          youtubeId,
        });
      }

      const title = data.match(/<title>([^<]+)<\/title>/i)?.[1] || "";
      const desc =
        data.match(
          /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i
        )?.[1] || "";
      const h1 = data.match(/<h1[^>]*>([^<]+)<\/h1>/i)?.[1] || "";

      fs.writeFileSync(
        "app/videos/mortgage-rates-today-videos.ts",
        `import type { VideoItem } from "./videos-data";

/** Full Mortgage Rates Today video library from the live site. */
export const MORTGAGE_RATES_TODAY_FULL_VIDEOS: VideoItem[] = ${JSON.stringify(videos, null, 2)};
`
      );

      console.log("TITLE", title);
      console.log("DESC", desc);
      console.log("H1", h1);
      console.log("COUNT", videos.length);
      console.log(JSON.stringify(videos, null, 2));
    });
  })
  .on("error", console.error);
