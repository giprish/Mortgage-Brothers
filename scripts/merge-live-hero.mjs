#!/usr/bin/env node
/** Merge hero scrape results into tmp/live-hero.json */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const CONTENT_PATH = join(ROOT, "lib", "liveCityPageContent.ts");
const OUT_PATH = join(ROOT, "tmp", "live-hero.json");

function extractKeys(ts) {
  const re = /"([^"]+\/[^"]+)":\s*\{/g;
  const keys = [];
  let m;
  while ((m = re.exec(ts)) !== null) keys.push(m[1]);
  return keys;
}

function normalize(text) {
  return text
    .replace(/[\u2018\u2019\u201A\u201B]/g, "'")
    .replace(/[\u201C\u201D\u201E\u201F]/g, '"')
    .replace(/[\u2010\u2011\u2012\u2013\u2014\u2015\u2212\uFE58\uFE63\uFF0D]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

export function parseHeroMarkdown(markdown) {
  const lines = markdown.split("\n");
  let heroTitle;
  let heroDescription;
  for (const line of lines) {
    const trimmed = line.trim();
    if (!heroTitle && trimmed.startsWith("# ") && !trimmed.startsWith("## ")) {
      heroTitle = normalize(trimmed.slice(2));
      continue;
    }
    if (heroTitle && !heroDescription && trimmed.startsWith("## ")) {
      heroDescription = normalize(trimmed.slice(3));
      break;
    }
  }
  if (!heroTitle) throw new Error("H1 not found");
  if (!heroDescription) throw new Error("Hero subheading not found");
  return { heroTitle, heroDescription };
}

export function mergeResults(updates) {
  const ts = readFileSync(CONTENT_PATH, "utf8");
  const keys = extractKeys(ts);
  let existing = { results: [] };
  try {
    existing = JSON.parse(readFileSync(OUT_PATH, "utf8"));
  } catch {}

  const byKey = new Map(existing.results.map((r) => [r.key, r]));
  for (const u of updates) byKey.set(u.key, u);

  const results = keys.map(
    (key) => byKey.get(key) ?? { key, error: "Not scraped yet" },
  );
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, JSON.stringify({ results }, null, 2) + "\n");
  const ok = results.filter((r) => r.heroTitle).length;
  console.log(`Merged ${updates.length} updates → ${ok}/${keys.length} complete`);
  return { ok, total: keys.length, missing: results.filter((r) => !r.heroTitle).map((r) => r.key) };
}

if (process.argv[1]?.endsWith("merge-live-hero.mjs")) {
  const updates = JSON.parse(process.argv[2] || "[]");
  const stats = mergeResults(updates);
  if (stats.missing.length) console.log("Missing:", stats.missing.join(", "));
}
