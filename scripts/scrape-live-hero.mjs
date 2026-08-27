#!/usr/bin/env node
/**
 * Scrape hero H1 + subheading from live city pages (sequential curl).
 * Keys from lib/liveCityPageContent.ts; output tmp/live-hero.json
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const CONTENT_PATH = join(ROOT, "lib", "liveCityPageContent.ts");
const OUT_PATH = join(ROOT, "tmp", "live-hero.json");
const LIVE_ORIGIN = "https://azmortgagebrothers.com";
const DELAY_MS = 1500;

function extractKeys(ts) {
  const re = /"([^"]+\/[^"]+)":\s*\{/g;
  const keys = [];
  let m;
  while ((m = re.exec(ts)) !== null) keys.push(m[1]);
  return keys;
}

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
  return html.replace(/<[^>]+>/g, "");
}

function parseHero(html) {
  const h1Re = /<h1[^>]*>([\s\S]*?)<\/h1>/i;
  const h2Re = /<h2[^>]*>([\s\S]*?)<\/h2>/i;

  const h1Match = html.match(h1Re);
  if (!h1Match) throw new Error("H1 not found");

  const afterH1 = html.slice(h1Match.index + h1Match[0].length);
  const h2Match = afterH1.match(h2Re);
  if (!h2Match) throw new Error("Hero subheading (H2) not found");

  return {
    heroTitle: normalize(stripTags(h1Match[1])),
    heroDescription: normalize(stripTags(h2Match[1])),
  };
}

function fetchHtml(url) {
  return execSync(
    `curl -sL -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" "${url}"`,
    { encoding: "utf8", maxBuffer: 10 * 1024 * 1024 },
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
  const ts = readFileSync(CONTENT_PATH, "utf8");
  const keys = extractKeys(ts);
  const existing = loadPartial();
  const done = new Map(
    (existing?.results ?? [])
      .filter((r) => r.heroTitle && !r.error)
      .map((r) => [r.key, r]),
  );

  console.log(`Scraping ${keys.length} cities (${done.size} already done)…`);

  const results = keys.map((key) => done.get(key) ?? { key });

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (done.has(key)) {
      console.log(`  SKIP ${key}`);
      continue;
    }

    const url = `${LIVE_ORIGIN}/service-areas/${key}/`;
    try {
      const html = fetchHtml(url);
      if (html.includes("sgcaptcha") || html.length < 500) {
        throw new Error("Captcha or empty response");
      }
      const hero = parseHero(html);
      results[i] = { key, ...hero };
      console.log(`  OK   ${key}`);
    } catch (err) {
      results[i] = { key, error: String(err.message || err) };
      console.log(`  FAIL ${key}: ${err.message || err}`);
    }

    writeFileSync(OUT_PATH, JSON.stringify({ results }, null, 2) + "\n");
    if (i < keys.length - 1) await sleep(DELAY_MS);
  }

  const ok = results.filter((r) => r.heroTitle).length;
  const fail = results.filter((r) => r.error).length;
  console.log(`\nWrote ${OUT_PATH}`);
  console.log(`Success: ${ok}, Failed: ${fail}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
