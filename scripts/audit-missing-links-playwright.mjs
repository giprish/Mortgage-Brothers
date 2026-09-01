#!/usr/bin/env node
import { chromium } from "playwright";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const LIVE_ORIGIN = "https://azmortgagebrothers.com";
const OUT = join(__dirname, "missing-links-audit.json");

const ROUTES = [
  "/how-to-sell-my-house-fast-in-arizona/",
  "/conventional-home-loans-vs-fha-loans-which-is-right-for-you/",
  "/when-is-a-mortgage-payment-actually-considered-late/",
  "/how-to-calculate-how-much-pmi-mortgage-insurance-will-be/",
  "/understanding-amortization-chart/",
  "/what-if-my-spouse-dies-and-im-not-on-the-mortgage/",
  "/what-are-mortgage-trigger-leads/",
  "/how-does-a-mortgage-apr-work-and-what-does-it-mean/",
  "/what-are-closing-costs-on-a-home-purchase/",
  "/mortgage-payoff-higher-than-mortgage-balance/",
  "/getting-a-mortgage-with-employment-gaps/",
  "/better-getting-mortgage-couple-vs-single-applicant/",
  "/can-i-relocate-and-get-a-mortgage-while-working-remotely-out-of-state/",
  "/dscr-loan-the-best-alternative-to-hard-money/",
  "/arizona-binsr-buyer-inspection-notice-and-seller-response/",
  "/what-you-need-to-know-about-the-arizona-prequalification-form/",
  "/arizona-mortgage-rates-and-the-interest-deduction/",
  "/prepayment-penalties-on-your-arizona-mortgage/",
  "/buying-down-your-arizona-interest-rate/",
  "/arizona-second-mortgages/",
  "/arizona-real-estate-capital-gains-is-back/",
  "/delayed-financing-how-to-get-cashout-without-waiting-6-months-seasoning/",
  "/what-is-an-example-of-a-mortgage-recast/",
  "/buying-a-house-with-a-cash-offer-and-simultaneously-getting-mortgage-financing/",
  "/how-does-my-car-loan-payment-affect-my-mortgage/",
  "/grossing-up-your-income-what-does-that-mean/",
  "/can-i-get-a-3rd-mortgage/",
  "/how-fast-is-too-fast-to-close-a-mortgage-loan-to-purchase-a-house/",
  "/what-is-the-difference-between-aan-arizona-condo-and-arizona-townhome/",
  "/detached-guest-home-casita-appraisal-issues/",
  "/difference-between-owner-occupied-second-home-and-investment-property/",
  "/buying-or-selling-personal-property-with-your-home-sale-must-watch-this-first/",
  "/how-to-skip-2-payments-on-your-mortgage/",
  "/put-bow-fha-loan-gift-guide/",
  "/lsu-forms-loan-status-updates-and-what-you-need-to-know/",
  "/how-do-solar-panels-affect-the-mortgage-and-closing-process/",
  "/get-part-income-commission-can-use-qualify-loan/",
  "/how-to-count-commissions-and-bonuses-and-tips/",
  "/who-can-and-cannot-be-on-title-when-you-get-a-mortgage/",
  "/is-the-mortgage-interest-tax-deduction-really-a-big-deal/",
  "/how-high-will-a-lender-allow-your-deductible-to-be/",
  "/arizona-vacation-and-investment-home-mortgages/",
  "/if-i-have-1-mortgage-late-in-the-past-12-months-can-i-get-approved-for-a-mortgage/",
  "/what-is-a-conventional-home-loan-the-complete-first-time-buyer-mortgage-guide/",
  "/arizona-real-estate-trends-in-2026-predicting-mortgage-rates-for-the-coming-year/",
  "/what-is-a-jumbo-loan-everything-you-need-to-know-before-applying/",
  "/va-loans-for-first-time-homebuyers-in-arizona-your-path-to-affordable-homeownership/",
  "/how-to-get-a-mortgage-in-arizona-with-fair-or-improving-credit/",
  "/glossary/",
  "/the-broker-advantage/",
  "/arizona-refinance-process/",
  "/arizona-home-buying-process/",
  "/arizona-mortgage-approval-process/",
  "/arizona-mortgage-closing-process/",
  "/arizona-mortgage-payments/",
  "/can-i-simply-payoff-credit-cards-to-qualify-for-a-mortgage/",
  "/air-conditionings-impact-phoenix-valley-real-estate/",
  "/canceling-your-fha-mip-is-easier-than-you-think/",
  "/arizona-mortgage-basics/",
  "/arizona-mortgage-closing-costs/",
  "/navigating-mortgage-options-during-divorce-a-complete-guide/",
  "/top-7-reasons-arizona-investment-home-buyers-choose-private-money-lenders/",
  "/who-qualifies-for-a-reverse-mortgage-understanding-eligibility-requirements/",
  "/connecting-guest-house-main-house-add-value/",
  "/how-a-rapid-rescore-can-help-to-get-qualified-for-a-mortgage/",
  "/why-use-an-arizona-mortgage-broker/",
  "/arizona-understanding-your-credit/",
  "/seller-concessions-to-buyers-how-much/",
  "/ultimate-guide-first-mortgage/",
  "/expect-youre-not-first-time-mortgage-shopper/",
  "/fha-flip-rule-waiver-expired-you-need-wait-90-days-to-write-a-contract/",
  "/is-homeownership-hereditary/",
  "/mortgage-101/",
  "/mortgage-rates-tool-arizona/",
  "/assumable-mortgage/",
];

function slugFromRoute(route) {
  return route.replace(/^\/|\/$/g, "");
}

function stagingFileForRoute(route) {
  const slug = slugFromRoute(route);
  const dir = join(ROOT, "app", slug);
  if (existsSync(join(dir, "PageClient.tsx"))) return join(dir, "PageClient.tsx");
  if (existsSync(join(dir, "page.tsx"))) return join(dir, "page.tsx");
  return null;
}

function normalizeHref(href) {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return null;
  try {
    let url = href.trim();
    if (url.startsWith("//")) url = "https:" + url;
    if (url.startsWith("/")) return url.endsWith("/") ? url : url + "/";
    const u = new URL(url);
    if (u.hostname.replace(/^www\./, "") === "azmortgagebrothers.com") {
      let p = u.pathname;
      if (!p.endsWith("/")) p += "/";
      return p;
    }
    u.search = "";
    u.hash = "";
    return u.toString();
  } catch {
    return href;
  }
}

function stagingHasHref(source, href) {
  const norm = normalizeHref(href);
  if (!norm) return true;
  if (norm.startsWith("/")) {
    const variants = [norm, norm.replace(/\/$/, "")];
    return variants.some((v) => source.includes(`href="${v}"`) || source.includes(`href={\`${v}\`}`));
  }
  const base = norm.replace(/\/$/, "");
  return source.includes(norm) || source.includes(base);
}

async function extractArticleLinks(page) {
  return page.evaluate(() => {
    const root =
      document.querySelector(".entry-content") ||
      document.querySelector("article .elementor-widget-theme-post-content") ||
      document.querySelector("article") ||
      document.querySelector("main");
    if (!root) return [];
    return [...root.querySelectorAll("a[href]")].map((a) => ({
      href: a.getAttribute("href"),
      text: (a.textContent || "").replace(/\s+/g, " ").trim(),
    }));
  });
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();
  const results = [];

  for (let i = 0; i < ROUTES.length; i++) {
    const route = ROUTES[i];
    const stagingFile = stagingFileForRoute(route);
    const entry = { route, stagingFile: stagingFile?.replace(ROOT + "/", ""), missing: [], error: null };
    console.error(`[${i + 1}/${ROUTES.length}] ${route}`);

    if (!stagingFile) {
      entry.error = "staging file not found";
      results.push(entry);
      continue;
    }

    try {
      await page.goto(LIVE_ORIGIN + route, { waitUntil: "domcontentloaded", timeout: 60000 });
      await page.waitForTimeout(2000);
      const liveLinks = await extractArticleLinks(page);
      const source = readFileSync(stagingFile, "utf8");
      const seen = new Set();
      for (const link of liveLinks) {
        const href = normalizeHref(link.href);
        if (!href || !link.text) continue;
        if (href.startsWith("/author/") || href.startsWith("/category/")) continue;
        const key = href + "|" + link.text.toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);
        if (!stagingHasHref(source, href)) {
          entry.missing.push({ href, text: link.text, rawHref: link.href });
        }
      }
    } catch (e) {
      entry.error = String(e.message || e);
    }
    results.push(entry);
  }

  await browser.close();
  writeFileSync(OUT, JSON.stringify(results, null, 2));

  let total = 0;
  for (const r of results) {
    if (r.missing?.length) {
      total += r.missing.length;
      console.log(`\n${r.route} (${r.missing.length})`);
      for (const m of r.missing) console.log(`  [${m.text}] → ${m.href}`);
    }
  }
  console.log(`\nTotal missing: ${total} across ${results.filter((r) => r.missing?.length).length} routes`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
