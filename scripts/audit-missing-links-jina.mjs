#!/usr/bin/env node
/**
 * Compare article-body links on live (via Jina reader) vs staging.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const LIVE_ORIGIN = "https://azmortgagebrothers.com";
const OUT = join(__dirname, "missing-links-audit-jina.json");

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
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:"))
    return null;
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
    u.hash = "";
    return u.toString();
  } catch {
    return href;
  }
}

function extractMarkdownLinks(md, route) {
  const links = [];
  const routeSlug = slugFromRoute(route);
  // [text](url)
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let m;
  while ((m = re.exec(md)) !== null) {
    const text = m[1].replace(/\*\*/g, "").trim();
    const href = normalizeHref(m[2]);
    if (!href || !text) continue;
    if (text.length > 200) continue;
    // skip TOC anchor links on same page
    if (href.startsWith("/") && href.includes(`/${routeSlug}/#`)) continue;
    if (href.startsWith(`/${routeSlug}/#`)) continue;
    if (/^video \d+$/i.test(text)) continue;
    if (/^(facebook|twitter|linkedin|share)$/i.test(text)) continue;
    links.push({ href, text, rawHref: m[2] });
  }
  return links;
}

function trimToArticleBody(md) {
  const start = md.indexOf("Markdown Content:");
  let body = start >= 0 ? md.slice(start + "Markdown Content:".length) : md;
  const transcriptIdx = body.search(/\n## \*?\*?Transcript of the Mortgage Brothers Podcast/i);
  if (transcriptIdx > 0) body = body.slice(0, transcriptIdx);
  const tailIdx = body.search(/\n## Tailored Mortgage Solutions/i);
  if (tailIdx > 0) body = body.slice(0, tailIdx);
  const categoriesIdx = body.search(/\nCategories\n/i);
  if (categoriesIdx > 0) body = body.slice(0, categoriesIdx);
  return body;
}

function stagingHasHref(source, href) {
  const norm = normalizeHref(href);
  if (!norm) return true;
  if (norm.startsWith("/")) {
    const variants = [norm, norm.replace(/\/$/, "")];
    return variants.some(
      (v) =>
        source.includes(`href="${v}"`) ||
        source.includes(`href={\`${v}\`}`) ||
        source.includes(`href={'${v}'}`)
    );
  }
  const base = norm.replace(/\/$/, "").split("#")[0];
  const noHash = norm.split("#")[0];
  if (source.includes("COMPANY.addressMapsUrl") && base.includes("google.com/maps")) return true;
  return (
    source.includes(norm) ||
    source.includes(noHash) ||
    source.includes(base) ||
    source.includes(encodeURI(norm))
  );
}

async function fetchLiveMarkdown(route) {
  const url = `${LIVE_ORIGIN}${route}`;
  const res = await fetch(`https://r.jina.ai/${url}`, {
    headers: { Accept: "text/plain" },
  });
  if (!res.ok) throw new Error(`Jina ${res.status} for ${route}`);
  return res.text();
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const results = [];
  const startIdx = Number(process.env.START_IDX || 0);
  const endIdx = process.env.END_IDX ? Number(process.env.END_IDX) : ROUTES.length;

  for (let i = startIdx; i < endIdx && i < ROUTES.length; i++) {
    const route = ROUTES[i];
    const stagingFile = stagingFileForRoute(route);
    const entry = {
      route,
      index: i + 1,
      stagingFile: stagingFile ? stagingFile.replace(ROOT + "/", "") : null,
      missing: [],
      error: null,
    };
    console.error(`[${i + 1}/${ROUTES.length}] ${route}`);

    if (!stagingFile) {
      entry.error = "staging file not found";
      results.push(entry);
      continue;
    }

    try {
      const md = await fetchLiveMarkdown(route);
      const body = trimToArticleBody(md);
      const liveLinks = extractMarkdownLinks(body, route);
      const source = readFileSync(stagingFile, "utf8");
      const seen = new Set();
      for (const link of liveLinks) {
        const key = link.href + "|" + link.text.toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);
        if (link.href.startsWith("/author/") || link.href.startsWith("/category/")) continue;
        if (!stagingHasHref(source, link.href)) {
          entry.missing.push({ href: link.href, text: link.text, rawHref: link.rawHref });
        }
      }
      entry.liveLinkCount = liveLinks.length;
    } catch (e) {
      entry.error = String(e.message || e);
    }
    results.push(entry);
    await sleep(400);
  }

  writeFileSync(OUT, JSON.stringify(results, null, 2));

  let total = 0;
  for (const r of results) {
    if (r.missing?.length) {
      total += r.missing.length;
      console.log(`\n${r.index}. ${r.route} (${r.missing.length} missing)`);
      for (const m of r.missing) console.log(`  [${m.text}] → ${m.href}`);
    }
  }
  console.log(
    `\nTotal missing: ${total} across ${results.filter((r) => r.missing?.length).length} routes`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
