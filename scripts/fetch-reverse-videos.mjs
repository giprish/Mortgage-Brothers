import https from "https";
import fs from "fs";

const url = "https://azmortgagebrothers.com/videos/reverse-mortgage/";

https
  .get(url, (res) => {
    let data = "";
    res.on("data", (c) => (data += c));
    res.on("end", () => {
      fs.writeFileSync("scripts/reverse-videos-cache.html", data);

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
          id: `reverse-${String(videos.length + 1).padStart(2, "0")}`,
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

      // subtitle near h1
      const h1Idx = data.search(/<h1[^>]*>/i);
      const afterH1 = data.slice(h1Idx, h1Idx + 2500);
      const sub =
        afterH1.match(
          /<(?:p|h2|h3|div)[^>]*class="[^"]*"[^>]*>([^<]{40,300})<\/(?:p|h2|h3|div)>/i
        )?.[1] || desc;

      fs.writeFileSync(
        "app/videos/reverse-mortgage-videos.ts",
        `import type { VideoItem } from "./videos-data";

/** Full Reverse Mortgage video library from the live site. */
export const REVERSE_MORTGAGE_FULL_VIDEOS: VideoItem[] = ${JSON.stringify(videos, null, 2)};
`
      );

      console.log("TITLE", title);
      console.log("DESC", desc);
      console.log("H1", h1);
      console.log("SUB", sub?.replace(/\s+/g, " ").trim());
      console.log("COUNT", videos.length);
      console.log(JSON.stringify(videos.slice(0, 5), null, 2));
    });
  })
  .on("error", console.error);
