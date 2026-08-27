#!/usr/bin/env node
/**
 * Scrape explainer, explore, and contact sections from live calculator pages.
 * Output: tmp/live-calculator-content.json
 */
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_PATH = join(ROOT, "tmp", "live-calculator-content.json");
const LIVE_ORIGIN = "https://azmortgagebrothers.com";
const DELAY_MS = 1500;

const CALCULATOR_PATHS = [
  "/basic-mortgage-payment-calculator/",
  "/mortgage-affordability-calculator/",
  "/refinance-calculator/",
  "/rent-vs-buy-calculator/",
  "/extra-payment-mortgage-calculator/",
  "/fha-loan-calculator/",
  "/va-loan-calculator/",
  "/down-payment-calculator/",
  "/debt-to-income-ratio-calculator/",
  "/home-purchase-closing-cost-calculator/",
];

function decodeHtmlEntities(text) {
  return text
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) =>
      String.fromCharCode(parseInt(h, 16)),
    )
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function normalize(text) {
  return decodeHtmlEntities(text)
    .replace(/[\u2018\u2019\u201A\u201B]/g, "'")
    .replace(/[\u201C\u201D\u201E\u201F]/g, '"')
    .replace(/[\u2010\u2011\u2012\u2013\u2014\u2015\u2212\uFE58\uFE63\uFF0D]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function stripTags(html) {
  return normalize(html.replace(/<[^>]+>/g, " "));
}

function extractLinks(html) {
  const links = [];
  const re = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    links.push({ href: m[1], text: stripTags(m[2]) });
  }
  return links;
}

function sliceBetween(html, startRe, endRe) {
  const start = html.search(startRe);
  if (start === -1) return "";
  const rest = html.slice(start);
  const end = rest.search(endRe);
  return end === -1 ? rest : rest.slice(0, end);
}

function parseExplainer(html) {
  const heroEnd = html.search(/<h2[^>]*>[\s\S]*?Calculator Tool/i);
  const block = heroEnd === -1 ? html : html.slice(0, heroEnd);
  const h2Matches = [...block.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)];
  if (h2Matches.length < 2) return null;

  const explainerH2 = h2Matches[1];
  const title = stripTags(explainerH2[1]);
  const startIdx = explainerH2.index + explainerH2[0].length;
  const endIdx = block.search(/<h2[^>]*>[\s\S]*?Calculator Tool/i);
  const section =
    endIdx === -1 ? block.slice(startIdx) : block.slice(startIdx, endIdx);

  const paragraphs = [];
  for (const m of section.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)) {
    const text = stripTags(m[1]);
    if (text.length > 40) paragraphs.push(text);
  }

  const features = [];
  const h3Matches = [...section.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)];
  for (const h3 of h3Matches) {
    const featTitle = stripTags(h3[1]);
    const after = section.slice(h3.index + h3[0].length);
    const pMatch = after.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
    features.push({
      title: featTitle,
      description: pMatch ? stripTags(pMatch[1]) : "",
    });
  }

  return {
    title,
    paragraphs: paragraphs.slice(0, 2),
    features,
    links: extractLinks(section),
  };
}

function parseExplore(html) {
  const block = sliceBetween(
    html,
    /<h2[^>]*>\s*Explore/i,
    /<h2[^>]*>\s*(Contact|Get|Speak)/i,
  );
  if (!block) return null;

  const h2 = block.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const title = h2 ? stripTags(h2[1]) : "";

  const introMatch = block.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  const intro = introMatch ? stripTags(introMatch[1]) : "";

  const items = [];
  for (const h3 of block.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)) {
    const itemTitle = stripTags(h3[1]);
    const after = block.slice(h3.index + h3[0].length);
    const bullets = [];
    for (const li of after.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)) {
      const text = stripTags(li[1]);
      if (text) bullets.push(text);
      if (bullets.length >= 2) break;
    }
    if (bullets.length >= 2) {
      items.push({ title: itemTitle, bullets: bullets.slice(0, 2) });
    }
  }

  return { title, intro, items, links: extractLinks(block) };
}

function parseContact(html) {
  const block = sliceBetween(
    html,
    /<h2[^>]*>\s*(Contact|Get|Speak)/i,
    /<footer/i,
  );
  if (!block) return null;

  const h2 = block.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const title = h2 ? stripTags(h2[1]) : "";

  const paragraphs = [];
  for (const m of block.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)) {
    const text = stripTags(m[1]);
    if (text.length > 40) paragraphs.push(text);
  }

  return {
    title,
    description: paragraphs[0] ?? "",
    links: extractLinks(block),
  };
}

function fetchHtml(url) {
  return execSync(
    `curl -sL -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" "${url}"`,
    { encoding: "utf8", maxBuffer: 15 * 1024 * 1024 },
  );
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function loadPartial() {
  if (!existsSync(OUT_PATH)) return null;
  try {
    return JSON.parse(readFileSync(OUT_PATH, "utf8"));
  } catch {
    return null;
  }
}

async function main() {
  mkdirSync(join(ROOT, "tmp"), { recursive: true });

  const existing = loadPartial();
  const done = new Map(
    (existing?.results ?? [])
      .filter((r) => r.explainer && !r.error)
      .map((r) => [r.path, r]),
  );

  console.log(
    `Scraping ${CALCULATOR_PATHS.length} calculators (${done.size} already done)…`,
  );

  const results = CALCULATOR_PATHS.map(
    (path) => done.get(path) ?? { path },
  );

  for (let i = 0; i < CALCULATOR_PATHS.length; i++) {
    const path = CALCULATOR_PATHS[i];
    if (done.has(path)) {
      console.log(`  SKIP ${path}`);
      continue;
    }

    const url = `${LIVE_ORIGIN}${path}`;
    try {
      const html = fetchHtml(url);
      if (html.includes("sgcaptcha") || html.length < 500) {
        throw new Error("Captcha or empty response");
      }

      const explainer = parseExplainer(html);
      const explore = parseExplore(html);
      const contact = parseContact(html);

      if (!explainer) throw new Error("Explainer section not found");
      if (!explore) throw new Error("Explore section not found");
      if (!contact) throw new Error("Contact section not found");

      results[i] = { path, explainer, explore, contact };
      console.log(`  OK   ${path}`);
    } catch (err) {
      results[i] = { path, error: String(err.message || err) };
      console.log(`  FAIL ${path}: ${err.message || err}`);
    }

    writeFileSync(OUT_PATH, JSON.stringify({ results }, null, 2) + "\n");
    if (i < CALCULATOR_PATHS.length - 1) await sleep(DELAY_MS);
  }

  const ok = results.filter((r) => r.explainer).length;
  const fail = results.filter((r) => r.error).length;
  console.log(`\nWrote ${OUT_PATH}`);
  console.log(`Success: ${ok}, Failed: ${fail}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
