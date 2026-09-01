#!/usr/bin/env node
/**
 * Compare article-body links on live vs staging for migration audit.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { homedir } from "node:os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const LIVE_ORIGIN = "https://azmortgagebrothers.com";
const FIRECRAWL_API = "https://api.firecrawl.dev/v1";
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

const SKIP_ROUTES = new Set([
  "/how-does-a-mortgage-apr-work-and-what-does-it-mean/", // investopedia fixed
  "/mortgage-payoff-higher-than-mortgage-balance/", // law insider fixed
  "/conventional-home-loans-vs-fha-loans-which-is-right-for-you/", // maps fixed
  "/va-loans-for-first-time-homebuyers-in-arizona-your-path-to-affordable-homeownership/", // maps fixed
  "/getting-a-mortgage-with-employment-gaps/", // conventional loan in progress
]);

function getApiKey() {
  if (process.env.FIRECRAWL_API_KEY) return process.env.FIRECRAWL_API_KEY;
  try {
    const mcp = JSON.parse(readFileSync(join(homedir(), ".cursor", "mcp.json"), "utf8"));
    return mcp?.mcpServers?.firecrawl?.env?.FIRECRAWL_API_KEY;
  } catch {
    return null;
  }
}

function slugFromRoute(route) {
  return route.replace(/^\/|\/$/g, "");
}

function stagingFileForRoute(route) {
  const slug = slugFromRoute(route);
  const dir = join(ROOT, "app", slug);
  const pageClient = join(dir, "PageClient.tsx");
  const page = join(dir, "page.tsx");
  if (existsSync(pageClient)) return pageClient;
  if (existsSync(page)) return page;
  return null;
}

function normalizeHref(href) {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:"))
    return null;
  try {
    let url = href.trim();
    if (url.startsWith("//")) url = "https:" + url;
    if (url.startsWith("/")) {
      return url.endsWith("/") ? url : url + "/";
    }
    const u = new URL(url);
    if (u.hostname.replace(/^www\./, "") === "azmortgagebrothers.com") {
      let p = u.pathname;
      if (!p.endsWith("/")) p += "/";
      return p;
    }
    // external - strip tracking params for comparison
    u.search = "";
    u.hash = "";
    return u.toString();
  } catch {
    return href;
  }
}

function stripHtml(s) {
  return s
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function extractLinksFromHtml(html) {
  const links = [];
  const re = /<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const href = normalizeHref(m[1]);
    if (!href) continue;
    const text = stripHtml(m[2]);
    if (!text || text.length > 200) continue;
    // skip social/share/nav patterns
    if (/^(facebook|twitter|linkedin|share|read more)$/i.test(text)) continue;
    links.push({ href, text, rawHref: m[1] });
  }
  return links;
}

function extractArticleHtml(rawHtml) {
  // WP entry content
  const patterns = [
    /<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<(?:footer|aside|div class="post-navigation)/i,
    /<article[^>]*>([\s\S]*?)<\/article>/i,
    /<main[^>]*>([\s\S]*?)<\/main>/i,
  ];
  for (const p of patterns) {
    const m = rawHtml.match(p);
    if (m?.[1] && m[1].length > 500) return m[1];
  }
  return rawHtml;
}

function stagingHasHref(source, href) {
  const norm = normalizeHref(href);
  if (!norm) return true;
  if (norm.startsWith("/")) {
    const variants = [norm, norm.replace(/\/$/, ""), `{COMPANY.addressMapsUrl}`];
    return variants.some((v) => source.includes(`href="${v}"`) || source.includes(`href={\`${v}\`}`) || source.includes(`href={'${v}'}`));
  }
  // external
  const base = norm.replace(/\/$/, "");
  return (
    source.includes(norm) ||
    source.includes(base) ||
    source.includes(encodeURI(norm)) ||
    source.includes(norm.replace("https://", "http://"))
  );
}

function extractStagingHrefs(source) {
  const hrefs = new Set();
  for (const m of source.matchAll(/href=["']([^"']+)["']/g)) {
    const n = normalizeHref(m[1]);
    if (n) hrefs.add(n);
  }
  for (const m of source.matchAll(/href=\{[`'"]([^`'"]+)[`'"]\}/g)) {
    const n = normalizeHref(m[1]);
    if (n) hrefs.add(n);
  }
  if (source.includes("COMPANY.addressMapsUrl")) {
    hrefs.add("https://www.google.com/maps?cid=3674746044086552790");
  }
  return hrefs;
}

async function scrapeLive(url, apiKey) {
  const res = await fetch(`${FIRECRAWL_API}/scrape`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url,
      formats: ["rawHtml"],
      onlyMainContent: true,
      maxAge: 172800000,
    }),
  });
  const data = await res.json();
  if (!data.success) throw new Error(JSON.stringify(data));
  return data.data?.rawHtml || data.data?.html || "";
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.error("No FIRECRAWL_API_KEY");
    process.exit(1);
  }

  const results = [];
  const startIdx = Number(process.env.START_IDX || 0);
  const endIdx = process.env.END_IDX ? Number(process.env.END_IDX) : ROUTES.length;

  for (let i = startIdx; i < endIdx && i < ROUTES.length; i++) {
    const route = ROUTES[i];
    const slug = slugFromRoute(route);
    const liveUrl = LIVE_ORIGIN + route;
    const stagingFile = stagingFileForRoute(route);

    console.error(`[${i + 1}/${ROUTES.length}] ${route}`);

    const entry = {
      route,
      stagingFile: stagingFile ? stagingFile.replace(ROOT + "/", "") : null,
      missing: [],
      error: null,
      skipped: SKIP_ROUTES.has(route),
    };

    if (!stagingFile) {
      entry.error = "staging file not found";
      results.push(entry);
      continue;
    }

    if (SKIP_ROUTES.has(route)) {
      results.push(entry);
      continue;
    }

    try {
      const rawHtml = await scrapeLive(liveUrl, apiKey);
      const articleHtml = extractArticleHtml(rawHtml);
      const liveLinks = extractLinksFromHtml(articleHtml);
      const source = readFileSync(stagingFile, "utf8");
      const stagingHrefs = extractStagingHrefs(source);

      // Dedupe live links by href+text
      const seen = new Set();
      for (const link of liveLinks) {
        const key = link.href + "|" + link.text.toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);

        // skip author/category/archive links in WP
        if (link.href.startsWith("/author/")) continue;
        if (link.href.startsWith("/category/")) continue;
        if (link.href === "/contact-us/" && link.text.toLowerCase().includes("contact")) {
          // often in CTA blocks - check if staging has contact link anywhere
        }

        if (!stagingHasHref(source, link.href)) {
          entry.missing.push({
            href: link.href,
            rawHref: link.rawHref,
            text: link.text,
          });
        }
      }

      entry.liveLinkCount = liveLinks.length;
      entry.stagingHrefCount = stagingHrefs.size;
    } catch (e) {
      entry.error = String(e.message || e);
      if (entry.error.includes("Rate limit")) {
        console.error("Rate limited, waiting 65s...");
        await sleep(65000);
        i--;
        continue;
      }
    }

    results.push(entry);
    await sleep(1200); // avoid rate limits
  }

  writeFileSync(OUT, JSON.stringify(results, null, 2));
  console.error(`Wrote ${OUT}`);

  let totalMissing = 0;
  for (const r of results) {
    if (r.missing?.length) {
      totalMissing += r.missing.length;
      console.log(`\n${r.route} (${r.missing.length} missing)`);
      for (const m of r.missing) {
        console.log(`  - [${m.text}] → ${m.href}`);
      }
    }
  }
  console.log(`\nTotal missing: ${totalMissing} across ${results.filter((r) => r.missing?.length).length} routes`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
