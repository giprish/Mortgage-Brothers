#!/usr/bin/env node
/**
 * Re-fetch exact <title>, description, Open Graph, and Twitter meta from live
 * azmortgagebrothers.com for every entry in lib/seo-metadata.json.
 *
 * Uses direct HTTP (no Firecrawl). Preserves route keys and section; overwrites
 * title/description/openGraph/twitter/sourceUrl from live HTML.
 *
 * Usage: node scripts/refresh-live-seo-meta.mjs
 */
import { writeFileSync, readFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_PATH = join(ROOT, "lib", "seo-metadata.json");
const REPORT_PATH = join(ROOT, "scripts", "seo-live-meta-refresh-report.json");
const LIVE_ORIGIN = "https://azmortgagebrothers.com";
const CONCURRENCY = 8;
const UA =
  "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";

function pathnameFromUrl(url) {
  try {
    const u = new URL(url);
    let path = u.pathname.replace(/\/+$/, "");
    return path === "" ? "/" : path;
  } catch {
    return null;
  }
}

function liveUrlForPath(pathname) {
  const path = pathname === "/" ? "/" : `${pathname.replace(/\/+$/, "")}/`;
  return `${LIVE_ORIGIN}${path === "/" ? "/" : path}`;
}

function decodeEntities(str) {
  if (!str) return str;
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) =>
      String.fromCharCode(parseInt(n, 16)),
    );
}

function attrMeta(html, { name, property }) {
  const key = name ? "name" : "property";
  const val = name || property;
  const escaped = val.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const patterns = [
    new RegExp(
      `<meta[^>]+${key}=["']${escaped}["'][^>]+content=["']([^"']*)["']`,
      "i",
    ),
    new RegExp(
      `<meta[^>]+content=["']([^"']*)["'][^>]+${key}=["']${escaped}["']`,
      "i",
    ),
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m) return decodeEntities(m[1].trim());
  }
  return undefined;
}

function pickMeta(html, sourceUrl, section) {
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch
    ? decodeEntities(titleMatch[1].replace(/\s+/g, " ").trim())
    : undefined;

  const description = attrMeta(html, { name: "description" });
  const ogTitle = attrMeta(html, { property: "og:title" }) || title;
  const ogDescription =
    attrMeta(html, { property: "og:description" }) || description;
  const ogImage =
    attrMeta(html, { property: "og:image" }) ||
    attrMeta(html, { property: "og:image:secure_url" });
  const ogUrl = attrMeta(html, { property: "og:url" }) || sourceUrl;
  const ogType = attrMeta(html, { property: "og:type" });

  const twitterCard = attrMeta(html, { name: "twitter:card" });
  const twitterTitle =
    attrMeta(html, { name: "twitter:title" }) || ogTitle;
  const twitterDescription =
    attrMeta(html, { name: "twitter:description" }) || ogDescription;
  const twitterImage =
    attrMeta(html, { name: "twitter:image" }) || ogImage;

  const clean = (obj) => {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      if (v) out[k] = v;
    }
    return Object.keys(out).length ? out : undefined;
  };

  return {
    section,
    sourceUrl,
    title,
    description,
    openGraph: clean({
      title: ogTitle,
      description: ogDescription,
      image: ogImage,
      url: ogUrl,
      type: ogType,
    }),
    twitter: clean({
      card: twitterCard,
      title: twitterTitle,
      description: twitterDescription,
      image: twitterImage,
    }),
  };
}

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": UA, Accept: "text/html" },
    redirect: "follow",
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }
  return { html: await res.text(), finalUrl: res.url };
}

async function mapPool(items, limit, fn) {
  const results = new Array(items.length);
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await fn(items[idx], idx);
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, () => worker()),
  );
  return results;
}

async function main() {
  const existing = JSON.parse(readFileSync(OUT_PATH, "utf8"));
  const entries = Object.entries(existing);

  // Deduplicate fetches by live URL (multiple routes can share one WP page).
  const urlToKeys = new Map();
  for (const [pathname, entry] of entries) {
    let url = entry.sourceUrl;
    if (!url || !url.includes("azmortgagebrothers.com")) {
      url = liveUrlForPath(pathname);
    } else {
      // Normalize host to live origin; keep pathname from sourceUrl.
      const p = pathnameFromUrl(url);
      url = liveUrlForPath(p || pathname);
    }
    if (!urlToKeys.has(url)) urlToKeys.set(url, []);
    urlToKeys.get(url).push(pathname);
  }

  const urls = [...urlToKeys.keys()];
  console.log(
    `Refreshing ${entries.length} route keys from ${urls.length} live URLs…`,
  );

  const byUrl = new Map();
  const failures = [];

  await mapPool(urls, CONCURRENCY, async (url, idx) => {
    process.stdout.write(`[${idx + 1}/${urls.length}] ${url}\n`);
    try {
      const { html, finalUrl } = await fetchHtml(url);
      const sampleKey = urlToKeys.get(url)[0];
      const section = existing[sampleKey]?.section || "pages";
      byUrl.set(url, pickMeta(html, finalUrl || url, section));
    } catch (e) {
      failures.push({ url, error: String(e) });
      console.error(`  FAIL ${url}: ${e}`);
    }
  });

  const registry = { ...existing };
  let updated = 0;
  let unchanged = 0;
  const changedPaths = [];

  for (const [url, keys] of urlToKeys.entries()) {
    const scraped = byUrl.get(url);
    if (!scraped) continue;
    for (const pathname of keys) {
      const prev = existing[pathname] || {};
      const next = {
        ...scraped,
        section: prev.section || scraped.section,
        // Keep the live WP source URL we scraped (not stage).
        sourceUrl: scraped.sourceUrl,
      };
      const prevCore = JSON.stringify({
        title: prev.title,
        description: prev.description,
        openGraph: prev.openGraph,
        twitter: prev.twitter,
      });
      const nextCore = JSON.stringify({
        title: next.title,
        description: next.description,
        openGraph: next.openGraph,
        twitter: next.twitter,
      });
      if (prevCore !== nextCore) {
        updated++;
        changedPaths.push({
          pathname,
          fromTitle: prev.title,
          toTitle: next.title,
        });
      } else {
        unchanged++;
      }
      registry[pathname] = next;
    }
  }

  mkdirSync(join(ROOT, "lib"), { recursive: true });
  writeFileSync(OUT_PATH, JSON.stringify(registry, null, 2) + "\n");
  writeFileSync(
    REPORT_PATH,
    JSON.stringify(
      {
        scrapedAt: new Date().toISOString(),
        routeKeys: entries.length,
        liveUrls: urls.length,
        updated,
        unchanged,
        failures,
        changedPaths,
        homepage: registry["/"],
        ogSiteNameSample: null,
      },
      null,
      2,
    ) + "\n",
  );

  console.log(`\nWrote ${OUT_PATH}`);
  console.log(`Updated ${updated}, unchanged ${unchanged}, failures ${failures.length}`);
  console.log(`Report → ${REPORT_PATH}`);
  console.log(`Homepage title: ${registry["/"]?.title}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
