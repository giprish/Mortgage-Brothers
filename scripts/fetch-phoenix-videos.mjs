import https from "https";
import fs from "fs";

const url =
  "https://azmortgagebrothers.com/videos/phoenix-market-and-real-estate-updates/";

https
  .get(url, (res) => {
    let data = "";
    res.on("data", (c) => (data += c));
    res.on("end", () => {
      fs.writeFileSync("scripts/phoenix-videos-cache.html", data);
      const titles = [];
      const tre = /<(?:h2|h3)[^>]*>([^<]{8,220})<\/(?:h2|h3)>/gi;
      let m;
      while ((m = tre.exec(data))) {
        titles.push({ t: m[1].replace(/\s+/g, " ").trim(), i: m.index });
      }
      const ids = [];
      const ire =
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/|ytimg\.com\/vi\/)([a-zA-Z0-9_-]{11})/g;
      while ((m = ire.exec(data))) ids.push({ id: m[1], i: m.index });

      // Pair each unique embed title from iframe title attrs
      const iframeTitles = [
        ...data.matchAll(
          /title="([^"]+)"[^>]*(?:data-src|src)="https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]{11})|(?:data-src|src)="https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]{11})"[^>]*title="([^"]+)"/gi
        ),
      ].map((x) => ({
        title: (x[1] || x[4] || "").trim(),
        id: x[2] || x[3],
      }));

      // Simpler: iframe blocks
      const embeds = [
        ...data.matchAll(
          /(?:data-src|src)="https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]{11})[^"]*"[^>]*(?:title="([^"]*)")?/gi
        ),
      ];
      const embeds2 = [
        ...data.matchAll(
          /title="([^"]*)"[^>]*(?:data-src|src)="https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/gi
        ),
      ];

      console.log("UNIQUE IDS", [...new Set(ids.map((x) => x.id))]);
      console.log(
        "IFRAME TITLES",
        embeds2.map((x) => ({ title: x[1], id: x[2] }))
      );
      console.log(
        "EMBEDS",
        embeds.map((x) => ({ id: x[1], title: x[2] || null }))
      );
      console.log(
        "H2/H3",
        titles.map((t) => t.t).filter((t) => !/Inside Mortgage|Home Loans|Specialty|Refinancing|Basic|Comparison|Specialized|Major|Northern|Southern|Western/i.test(t))
      );

      // meta description
      const desc = data.match(
        /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i
      );
      const title = data.match(/<title>([^<]+)<\/title>/i);
      console.log("TITLE", title?.[1]);
      console.log("DESC", desc?.[1]);
    });
  })
  .on("error", console.error);
