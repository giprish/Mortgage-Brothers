#!/usr/bin/env node
/**
 * Scrapes title, description, Open Graph, and Twitter meta from Done URLs
 * via Firecrawl (site has SoftGarden captcha that blocks direct fetch).
 *
 * Default: incremental — only scrape Done URLs missing from lib/seo-metadata.json,
 * then merge results into the existing registry (preserves non-sheet entries).
 *
 * Full refresh: node scripts/scrape-seo-meta.mjs --full
 *   Re-scrapes every Done URL and rewrites the registry from Done URLs only
 *   (extra non-sheet keys are dropped).
 */
import { writeFileSync, mkdirSync, readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { homedir } from "node:os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_PATH = join(ROOT, "lib", "seo-metadata.json");
const SHEET_CSV =
  "https://docs.google.com/spreadsheets/d/1AV11mP_IJzh5BLSQtIJvmYnLTn6b76Lx/export?format=csv&gid=1530173043";
const FIRECRAWL_API = "https://api.firecrawl.dev/v1";
const FULL_REFRESH = process.argv.includes("--full");

function getApiKey() {
  if (process.env.FIRECRAWL_API_KEY) return process.env.FIRECRAWL_API_KEY;
  try {
    const mcp = JSON.parse(
      readFileSync(join(homedir(), ".cursor", "mcp.json"), "utf8"),
    );
    return mcp?.mcpServers?.firecrawl?.env?.FIRECRAWL_API_KEY;
  } catch {
    return null;
  }
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];
    if (inQuotes) {
      if (ch === '"' && next === '"') {
        cell += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        cell += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      row.push(cell);
      cell = "";
    } else if (ch === "\n" || (ch === "\r" && next === "\n")) {
      if (ch === "\r") i++;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else if (ch !== "\r") {
      cell += ch;
    }
  }
  if (cell.length || row.length) {
    row.push(cell);
    rows.push(row);
  }
  return rows;
}

function pathnameFromUrl(url) {
  try {
    const u = new URL(url);
    let path = u.pathname.replace(/\/+$/, "");
    return path === "" ? "/" : path;
  } catch {
    return null;
  }
}

function getDoneUrls(rows) {
  let section = "pages";
  const urls = [];
  for (const r of rows) {
    if (!r?.length) continue;
    if (r[0] === "S.No" && r[1]?.includes("Post")) {
      section = "posts";
      continue;
    }
    if (r[0] === "S.No" && r[1]?.includes("Category")) {
      section = "cats";
      continue;
    }
    if (r[0] === "S.No" && r[1]?.includes("Author")) {
      section = "authors";
      continue;
    }
    if (r[0] === "S.No") continue;
    if (!/^\d+$/.test(r[0] ?? "")) continue;
    const status = (r[2] ?? "").trim().toLowerCase();
    if (status !== "done") continue;
    const url = (r[1] ?? "").trim();
    if (!url.startsWith("http")) continue;
    const pathname = pathnameFromUrl(url);
    if (!pathname) continue;
    urls.push({ section, url, pathname });
  }
  return urls;
}

function pickMeta(metadata = {}, sourceUrl, section) {
  const title =
    metadata.title || metadata.ogTitle || metadata["og:title"] || undefined;
  const description =
    metadata.description ||
    metadata.ogDescription ||
    metadata["og:description"] ||
    undefined;

  const ogTitle = metadata.ogTitle || metadata["og:title"] || title;
  const ogDescription =
    metadata.ogDescription || metadata["og:description"] || description;
  const ogImage =
    metadata.ogImage ||
    metadata["og:image"] ||
    metadata["og:image:secure_url"] ||
    undefined;
  const ogUrl = metadata.ogUrl || metadata["og:url"] || sourceUrl;
  const ogType = metadata["og:type"] || metadata.ogType || undefined;

  const twitterCard =
    metadata["twitter:card"] || metadata.twitterCard || undefined;
  const twitterTitle =
    metadata["twitter:title"] || metadata.twitterTitle || ogTitle;
  const twitterDescription =
    metadata["twitter:description"] ||
    metadata.twitterDescription ||
    ogDescription;
  const twitterImage =
    metadata["twitter:image"] || metadata.twitterImage || ogImage;

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

async function batchScrape(apiKey, urls) {
  const startRes = await fetch(`${FIRECRAWL_API}/batch/scrape`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      urls,
      formats: ["markdown"],
      onlyMainContent: false,
      timeout: 60000,
    }),
  });
  const startBody = await startRes.json();
  if (!startRes.ok || !startBody.success) {
    throw new Error(`batch/scrape start failed: ${JSON.stringify(startBody)}`);
  }

  const id = startBody.id;
  console.log(`Batch scrape started: ${id}`);

  for (;;) {
    await new Promise((r) => setTimeout(r, 4000));
    const statusRes = await fetch(`${FIRECRAWL_API}/batch/scrape/${id}`, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    const status = await statusRes.json();
    const completed = status.completed ?? 0;
    const total = status.total ?? urls.length;
    console.log(`  status=${status.status} ${completed}/${total}`);
    if (status.status === "completed") return status;
    if (status.status === "failed") {
      throw new Error(`batch scrape failed: ${JSON.stringify(status)}`);
    }
  }
}

async function scrapeOne(apiKey, url) {
  const res = await fetch(`${FIRECRAWL_API}/scrape`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url,
      formats: ["markdown"],
      onlyMainContent: false,
    }),
  });
  const body = await res.json();
  if (!res.ok || !body.success) {
    throw new Error(JSON.stringify(body));
  }
  return body.data?.metadata ?? {};
}

function loadExistingRegistry() {
  if (!existsSync(OUT_PATH)) return {};
  try {
    return JSON.parse(readFileSync(OUT_PATH, "utf8"));
  } catch {
    return {};
  }
}

async function scrapeTargets(apiKey, targets) {
  const CHUNK = 40;
  const byUrl = new Map();
  const failures = [];

  for (let i = 0; i < targets.length; i += CHUNK) {
    const chunk = targets.slice(i, i + CHUNK);
    console.log(
      `\nBatch ${Math.floor(i / CHUNK) + 1}: URLs ${i + 1}-${i + chunk.length}`,
    );
    try {
      const result = await batchScrape(
        apiKey,
        chunk.map((d) => d.url),
      );
      const data = result.data ?? [];
      for (const item of data) {
        const sourceUrl =
          item.metadata?.sourceURL ||
          item.metadata?.url ||
          item.url ||
          undefined;
        if (!sourceUrl) continue;
        const pathname = pathnameFromUrl(sourceUrl);
        const match =
          chunk.find((d) => d.pathname === pathname) ||
          chunk.find((d) => sourceUrl.startsWith(d.url.replace(/\/$/, "")));
        if (!match) {
          if (pathname) {
            byUrl.set(pathname, pickMeta(item.metadata, sourceUrl, "unknown"));
          }
          continue;
        }
        byUrl.set(
          match.pathname,
          pickMeta(item.metadata, match.url, match.section),
        );
      }
    } catch (err) {
      console.error(`Batch failed, falling back to single scrapes: ${err}`);
      for (const item of chunk) {
        try {
          process.stdout.write(`  scrape ${item.pathname}\n`);
          const metadata = await scrapeOne(apiKey, item.url);
          byUrl.set(
            item.pathname,
            pickMeta(metadata, item.url, item.section),
          );
          await new Promise((r) => setTimeout(r, 200));
        } catch (e) {
          failures.push({
            pathname: item.pathname,
            url: item.url,
            error: String(e),
          });
          console.error(`  FAIL ${item.pathname}: ${e}`);
        }
      }
    }
  }

  for (const item of targets) {
    if (byUrl.has(item.pathname)) continue;
    try {
      console.log(`Retry missing: ${item.pathname}`);
      const metadata = await scrapeOne(apiKey, item.url);
      byUrl.set(item.pathname, pickMeta(metadata, item.url, item.section));
    } catch (e) {
      failures.push({
        pathname: item.pathname,
        url: item.url,
        error: String(e),
      });
    }
  }

  return { byUrl, failures };
}

async function main() {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.error("FIRECRAWL_API_KEY not found");
    process.exit(1);
  }

  console.log("Fetching sheet CSV…");
  const csvText = await (await fetch(SHEET_CSV)).text();
  const done = getDoneUrls(parseCsv(csvText));
  const existing = loadExistingRegistry();
  const existingCount = Object.keys(existing).length;

  const targets = FULL_REFRESH
    ? done
    : done.filter((d) => !existing[d.pathname]);

  console.log(
    FULL_REFRESH
      ? `Full refresh: scraping all ${done.length} Done URLs…`
      : `Incremental: ${targets.length} missing of ${done.length} Done URLs (registry has ${existingCount})…`,
  );

  if (targets.length === 0) {
    console.log("Nothing to scrape. Registry already covers all Done URLs.");
    return;
  }

  const { byUrl, failures } = await scrapeTargets(apiKey, targets);

  let registry;
  if (FULL_REFRESH) {
    registry = {};
    for (const item of done) {
      if (byUrl.has(item.pathname)) {
        registry[item.pathname] = byUrl.get(item.pathname);
      }
    }
  } else {
    registry = { ...existing };
    for (const [pathname, entry] of byUrl.entries()) {
      registry[pathname] = entry;
    }
  }

  mkdirSync(join(ROOT, "lib"), { recursive: true });
  writeFileSync(OUT_PATH, JSON.stringify(registry, null, 2) + "\n");

  const reportPath = join(ROOT, "scripts", "seo-scrape-report.json");
  writeFileSync(
    reportPath,
    JSON.stringify(
      {
        scrapedAt: new Date().toISOString(),
        mode: FULL_REFRESH ? "full" : "incremental",
        doneTotal: done.length,
        scraped: targets.length,
        success: [...byUrl.keys()].filter((k) =>
          targets.some((t) => t.pathname === k),
        ).length,
        registrySize: Object.keys(registry).length,
        failures,
        stillMissing: done
          .filter((d) => !registry[d.pathname])
          .map((d) => d.pathname),
      },
      null,
      2,
    ) + "\n",
  );

  console.log(
    `\nWrote ${Object.keys(registry).length} registry entries → ${OUT_PATH}`,
  );
  console.log(
    `Scraped ${targets.length}; failures: ${failures.length} (see ${reportPath})`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
