const https = require("https");
const fs = require("fs");
const path = require("path");

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          fetchText(res.headers.location).then(resolve).catch(reject);
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
      })
      .on("error", reject);
  });
}

function fetchBuf(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "Mozilla/5.0", Accept: "image/*,*/*" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          fetchBuf(res.headers.location).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode !== 200) return reject(new Error(url + " " + res.statusCode));
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      })
      .on("error", reject);
  });
}

(async () => {
  const html = await fetchText("https://azmortgagebrothers.com/sell-my-house-fast-arizona/");
  fs.writeFileSync(path.join(__dirname, "sell-my-house-page.html"), html);
  const urls = [...html.matchAll(/https:\/\/azmortgagebrothers\.com\/wp-content\/uploads\/[^"'\\\s)]+/g)].map((m) => m[0]);
  const uniq = [...new Set(urls)];
  console.log("found", uniq.length);
  uniq.slice(0, 40).forEach((u) => console.log(u));

  const candidates = uniq.filter((u) =>
    /sell|cash|house|couple|home-sell|options|review|kitchen|hero|banner/i.test(u)
  );
  console.log("\ncandidates:");
  candidates.forEach((u) => console.log(u));

  // also look for background-image urls in inline style
  const bgs = [...html.matchAll(/background(?:-image)?\s*:\s*url\(([^)]+)\)/gi)].map((m) => m[1].replace(/['"]/g, ""));
  console.log("\nbgs:");
  [...new Set(bgs)].slice(0, 20).forEach((u) => console.log(u));
})();
