const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const outDir = path.join(__dirname, "..", "public", "home");

const downloads = [
  {
    url: "https://azmortgagebrothers.com/wp-content/uploads/2025/01/conventional-home-loans-in-arizona.jpg",
    file: "loan-hero-conventional.jpg",
  },
  {
    url: "https://azmortgagebrothers.com/wp-content/uploads/2025/01/fha-home-loans-in-arizona.jpg",
    file: "loan-hero-fha.jpg",
  },
  {
    url: "https://azmortgagebrothers.com/wp-content/uploads/2025/01/fha-streamline-refinance-in-arizona.jpg",
    file: "loan-hero-fha-streamline.jpg",
  },
  {
    url: "https://azmortgagebrothers.com/wp-content/uploads/2025/01/guide-for-the-first-time-home-buyer-in-arizona.jpg",
    file: "loan-hero-first-time.jpg",
  },
  {
    url: "https://azmortgagebrothers.com/wp-content/uploads/2025/01/jumbo-loans-in-arizona.jpg",
    file: "loan-hero-jumbo.jpg",
  },
  {
    url: "https://azmortgagebrothers.com/wp-content/uploads/2025/01/private-money-and-portfolio-loans.jpg",
    file: "loan-hero-private-money.jpg",
  },
  {
    url: "https://azmortgagebrothers.com/wp-content/uploads/2025/01/mortgage-refinancing-in-arizona.jpg",
    file: "loan-hero-refinancing.jpg",
  },
  {
    url: "https://azmortgagebrothers.com/wp-content/uploads/2025/01/reverse-mortgage-arizona.jpg",
    file: "loan-hero-reverse.jpg",
  },
  {
    url: "https://azmortgagebrothers.com/wp-content/uploads/2025/01/reverse-mortgage-for-home-purchase.jpg",
    file: "loan-hero-reverse-purchase.jpg",
  },
  {
    url: "https://azmortgagebrothers.com/wp-content/uploads/2025/01/va-loans-in-arizona.jpg",
    file: "loan-hero-va.jpg",
  },
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith("https") ? https : http;
    const req = mod.get(
      url,
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          Accept: "image/*,*/*",
        },
      },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          fetchUrl(res.headers.location).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(url + " -> " + res.statusCode));
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      }
    );
    req.on("error", reject);
  });
}

(async () => {
  for (const d of downloads) {
    try {
      const buf = await fetchUrl(d.url);
      const dest = path.join(outDir, d.file);
      fs.writeFileSync(dest, buf);
      console.log("OK", d.file, buf.length);
    } catch (e) {
      console.log("FAIL", d.file, e.message);
    }
  }
})();
