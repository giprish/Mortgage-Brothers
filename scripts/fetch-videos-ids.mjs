import fs from "fs";
import https from "https";

const url = "https://azmortgagebrothers.com/videos/";
https.get(url, (res) => {
  let data = "";
  res.on("data", (c) => (data += c));
  res.on("end", () => {
    const ids = new Set();
    const re = /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/|ytimg\.com\/vi\/)([a-zA-Z0-9_-]{11})/g;
    let m;
    while ((m = re.exec(data))) ids.add(m[1]);
    const imgs = [...data.matchAll(/https:\/\/azmortgagebrothers\.com\/wp-content\/uploads\/[^"'\\\s>]+\.(?:jpg|jpeg|png|webp)/gi)].map((x) => x[0]);
    console.log("IDS", [...ids]);
    console.log("IMGS", [...new Set(imgs)].slice(0, 25));
    console.log("LEN", data.length);
    fs.writeFileSync("scripts/videos-page-cache.html", data.slice(0, 500000));
  });
}).on("error", (e) => console.error(e));
