import { chromium } from "playwright";
import { writeFileSync } from "fs";

const routes = [
  "yavapai-county-az/jerome",
  "coconino-county-az/page",
  "coconino-county-az/doney-park",
  "gila-county-az/miami",
  "gila-county-az/star-valley",
  "coconino-county-az/mountainaire",
  "maricopa-county-az/scottsdale",
  "maricopa-county-az/mesa",
  "gila-county-az/christopher-creek",
  "gila-county-az/washington-park",
  "apache-county-az/alpine",
  "navajo-county-az/show-low",
  "navajo-county-az/pinetop",
  "navajo-county-az/holbrook",
  "navajo-county-az/taylor",
  "pima-county-az/tucson",
  "pima-county-az/sahuarita",
  "pima-county-az/vail",
  "mohave-county-az/kingman",
  "mohave-county-az/colorado-city",
  "la-paz-county-az/parker",
  "la-paz-county-az/quartzsite",
  "greenlee-county-az/clifton",
  "graham-county-az/thatcher",
  "yuma-county-az/san-luis",
  "santa-cruz-county-az/santa-cruz",
];

function parseLivePage(text) {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const idx = (needle) => lines.findIndex((l) => l.includes(needle));
  const h1Line = lines.find((l) => /Mortgages? –|Mortgage Experts|Mortgage –/i.test(l) && l.length < 120) || "";
  const heroDescIdx = lines.indexOf(h1Line) + 1;
  const heroDescription = lines[heroDescIdx]?.includes("preapproval") ? "" : lines[heroDescIdx] || "";

  const introTitle = lines.find((l) => /Mortgage Brokers|Mortgage Brokers|Mortgage Lenders/i.test(l) && l.length < 100) || "";
  const communitiesTitle = lines.find((l) => /Popular .* (Communities|Areas) We Serve/i.test(l)) || "";
  const communitiesCtaLabel = lines.find((l) => /Talk to a .* Loan Expert/i.test(l))?.replace(/\s*→\s*$/, "") || "";
  const mortgageSolutionsTitle = lines.find((l) => /Explore Our .* Mortgage/i.test(l)) || "";
  const mortgageSolutionsIntro = lines.find((l) => /Comprehensive mortgage programs/i.test(l)) || "";

  const introStart = lines.findIndex((l) => l === introTitle);
  const long1 = introStart >= 0 ? lines[introStart + 1] : "";
  const long2 = introStart >= 0 ? lines[introStart + 2] : "";

  const whyTitle = lines.find((l) => /Why Choose Us/i.test(l)) || "";
  const ctaTitle = lines.find((l) => /Ready to Secure|Ready to Start/i.test(l)) || "";
  const guidanceTitle = lines.find((l) => /Trusted .* (Guidance|Lenders|Mortgage)/i.test(l) && !l.includes("Frequently")) || "";
  const expectTitle = lines.find((l) => /What Sets Our|What You Can Expect|With Us, You Can Expect/i.test(l)) || "";
  const getInTouchTitle = lines.find((l) => /^Our .* Mortgage Services$/i.test(l)) || "";

  const faqTitle = lines.find((l) => /Frequently Asked Questions/i.test(l)) || "";

  // Communities blurbs between communities intro and talk to expert
  const commStart = lines.findIndex((l) => l === communitiesTitle);
  const commEnd = lines.findIndex((l) => /Talk to a .* Loan Expert/i.test(l));
  const communities = [];
  if (commStart >= 0 && commEnd > commStart) {
    const section = lines.slice(commStart, commEnd);
    for (let i = 0; i < section.length; i++) {
      const line = section[i];
      if (line === "MOST POPULAR" || line === "LOCAL EXPERTISE" || line.includes("diverse communities")) continue;
      if (line.length > 3 && line.length < 60 && !line.startsWith("Popular") && section[i + 1] && section[i + 1].length > 40) {
        communities.push({ title: line, description: section[i + 1] });
        i++;
      }
    }
  }

  return {
    heroTitle: h1Line,
    heroDescription,
    introTitle,
    longDescriptions: [long1, long2].filter(Boolean),
    communitiesTitle,
    communities,
    whyChooseTitle: whyTitle,
    mortgageSolutionsTitle,
    mortgageSolutionsIntro,
    ctaTitle,
    guidanceTitle,
    expectTitle,
    getInTouchTitle,
    faqTitle,
    communitiesCtaLabel,
    faqEyebrow: text.includes("OUR FAQ") ? "OUR FAQ'S" : undefined,
    heroClientRating: text.includes("4.9/5") ? "4.9/5" : undefined,
  };
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const results = {};

for (const route of routes) {
  const url = `https://azmortgagebrothers.com/service-areas/${route}/`;
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(4000);
    if (!page.url().includes(route.split("/").pop())) {
      results[route] = { error: "captcha", url: page.url() };
      continue;
    }
    const text = await page.evaluate(() => document.body?.innerText || "");
    results[route] = parseLivePage(text);
  } catch (e) {
    results[route] = { error: String(e) };
  }
  console.log("done", route);
}

await browser.close();
writeFileSync("scripts/city-live-fields.json", JSON.stringify(results, null, 2));
console.log("wrote scripts/city-live-fields.json");
