const fs = require("fs");
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
  const t = fs.readFileSync("tmp-wp-articles/loan-" + s + ".txt", "utf8");
  const titles = [...t.matchAll(/et_pb_heading title="([^"]+)"/g)].map((m) => m[1]).slice(0, 3);
  console.log("==" + s);
  titles.forEach((x) => console.log(" - " + x.slice(0, 140)));
}
