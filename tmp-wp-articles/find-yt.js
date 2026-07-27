const fs = require("fs");
for (const f of [
  "arizona-mortgage-rates-and-the-interest-deduction.json",
  "prepayment-penalties-on-your-arizona-mortgage.json",
  "what-you-need-to-know-about-the-arizona-prequalification-form.json",
]) {
  const h = JSON.parse(fs.readFileSync(f, "utf8")).content.rendered;
  const idxs = [];
  const lower = h.toLowerCase();
  let i = 0;
  while ((i = lower.indexOf("youtu", i)) !== -1) {
    idxs.push(h.slice(i, i + 80));
    i += 5;
  }
  console.log(f, idxs);
}
