#!/usr/bin/env node
/**
 * Compare JSON-LD @type inventories on live vs staging.
 *
 *   node scripts/compare-jsonld.mjs
 *   node scripts/compare-jsonld.mjs --all
 *
 * Default: representative paths (homepage + key templates).
 * --all: union of both sitemaps (capped).
 */
const LIVE = process.env.LIVE_ORIGIN || "https://azmortgagebrothers.com";
const STAGE = process.env.STAGE_ORIGIN || "https://azmortgage.vercel.app";
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

const SAMPLE_PATHS = [
  "/",
  "/about-us/",
  "/contact-us/",
  "/faq/",
  "/conventional-home-loans-arizona/",
  "/fha-home-loans-arizona/",
  "/va-loans-arizona/",
  "/arizona-mortgage-closing-process/",
  "/basic-mortgage-payment-calculator/",
  "/service-areas/maricopa-county-az/",
  "/videos/",
  "/blog/",
];

const LD_RE =
  /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

function toSlash(pathname) {
  const path = normalizePath(pathname);
  return path === "/" ? "/" : `${path}/`;
}

function walkTypes(value, counts) {
  if (Array.isArray(value)) {
    for (const item of value) walkTypes(item, counts);
    return;
  }
  if (!value || typeof value !== "object") return;
  const raw = value["@type"];
  if (raw) {
    const names = Array.isArray(raw) ? raw : [raw];
    for (const name of names) {
      if (typeof name === "string") {
        counts[name] = (counts[name] || 0) + 1;
      }
    }
  }
  for (const child of Object.values(value)) walkTypes(child, counts);
}

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: { "user-agent": UA, accept: "text/html" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

function extractTypeCounts(html) {
  const counts = {};
  let match;
  const re = new RegExp(LD_RE.source, "gi");
  while ((match = re.exec(html))) {
    const raw = match[1].replace(/[\u0000-\u001f]/g, " ");
    try {
      walkTypes(JSON.parse(raw), counts);
    } catch {
      counts["PARSE_ERROR"] = (counts["PARSE_ERROR"] || 0) + 1;
    }
  }
  return counts;
}

async function sitemapPaths(origin) {
  const paths = new Set();
  const roots = [`${origin}/sitemap.xml`, `${origin}/sitemap-0.xml`];
  for (const sitemapUrl of roots) {
    try {
      const xml = await fetchHtml(sitemapUrl);
      const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
      for (const loc of locs) {
        if (loc.endsWith(".xml") && !loc.includes(origin)) continue;
        if (loc.endsWith(".xml")) {
          try {
            const child = await fetchHtml(loc);
            for (const m of child.matchAll(/<loc>([^<]+)<\/loc>/g)) {
              try {
                paths.add(toSlash(new URL(m[1]).pathname));
              } catch {
                /* skip */
              }
            }
          } catch {
            /* skip nested */
          }
          continue;
        }
        try {
          paths.add(toSlash(new URL(loc).pathname));
        } catch {
          /* skip */
        }
      }
    } catch {
      /* sitemap missing */
    }
  }
  return paths;
}

function formatCounts(counts) {
  return Object.keys(counts)
    .sort()
    .map((k) => `${k}:${counts[k]}`)
    .join(", ");
}

function missingOnStage(live, stage) {
  const keys = new Set([...Object.keys(live), ...Object.keys(stage)]);
  const missing = [];
  for (const key of [...keys].sort()) {
    if ((live[key] || 0) > 0 && !stage[key]) missing.push(key);
  }
  return missing;
}

async function typesFor(origin, path) {
  const url = `${origin.replace(/\/+$/, "")}${path === "/" ? "/" : path}`;
  const html = await fetchHtml(url);
  return extractTypeCounts(html);
}

async function main() {
  const all = process.argv.includes("--all");
  let paths = SAMPLE_PATHS.map(toSlash);
  if (all) {
    const [livePaths, stagePaths] = await Promise.all([
      sitemapPaths(LIVE),
      sitemapPaths(STAGE),
    ]);
    const union = new Set([...livePaths, ...stagePaths, ...paths]);
    paths = [...union].sort();
    const cap = Number(process.env.JSONLD_LIMIT || 80);
    if (paths.length > cap) paths = paths.slice(0, cap);
  }

  console.log(`Live:  ${LIVE}`);
  console.log(`Stage: ${STAGE}`);
  console.log(`Paths: ${paths.length}${all ? " (--all)" : " (sample)"}\n`);
  console.log(
    [
      "path".padEnd(52),
      "missing on stage".padEnd(48),
      "live highlights",
    ].join(" | "),
  );
  console.log("-".repeat(140));

  for (const path of paths) {
    let liveCounts = {};
    let stageCounts = {};
    let error = "";
    try {
      liveCounts = await typesFor(LIVE, path);
    } catch (e) {
      error += `live:${e.message} `;
    }
    try {
      stageCounts = await typesFor(STAGE, path);
    } catch (e) {
      error += `stage:${e.message}`;
    }
    const missing = missingOnStage(liveCounts, stageCounts);
    const highlightKeys = [
      "Organization",
      "LocalBusiness",
      "Product",
      "Offer",
      "Review",
      "Article",
      "VideoObject",
      "FAQPage",
      "BlogPosting",
      "WebPage",
      "SearchAction",
    ];
    const highlights = highlightKeys
      .filter((k) => liveCounts[k])
      .map((k) => `${k}:${liveCounts[k]}`)
      .join(" ");
    console.log(
      [
        path.slice(0, 52).padEnd(52),
        (error || missing.join(", ") || "—").slice(0, 48).padEnd(48),
        highlights || formatCounts(liveCounts).slice(0, 40),
      ].join(" | "),
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
