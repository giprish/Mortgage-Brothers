const fs = require("fs");
const path = require("path");
const files = [
  "conventional-home-loans-arizona",
  "fha-home-loans-arizona",
  "fha-streamline-refinance-arizona",
  "first-time-home-buyer-arizona-guide",
  "jumbo-loans-arizona",
  "private-money-lender-arizona",
  "refinancing-arizona",
  "reverse-mortgage-arizona",
  "reverse-mortgage-home-purchase-arizona",
  "va-loans-arizona",
];
for (const s of files) {
  const t = fs.readFileSync(path.join(__dirname, "loan-" + s + ".txt"), "utf8");
  const m = t.match(/background_image="(https:\/\/[^"]+)"/);
  const meta = JSON.parse(fs.readFileSync(path.join(__dirname, "loan-" + s + "-meta.json"), "utf8"));
  console.log(s);
  console.log("  bg:", m ? m[1] : "none");
  console.log("  meta:", meta.imgUrl || meta.image || meta.imgName || JSON.stringify(meta).slice(0, 200));
}
