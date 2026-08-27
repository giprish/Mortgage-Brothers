#!/usr/bin/env node
/** Build complete tmp/live-hero.json from scraped hero data map */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { parseHeroMarkdown, mergeResults } from "./merge-live-hero.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DATA_PATH = join(ROOT, "tmp", "hero-scrape-data.json");

const data = JSON.parse(readFileSync(DATA_PATH, "utf8"));
const updates = data.map(({ key, markdown }) => {
  try {
    return { key, ...parseHeroMarkdown(markdown) };
  } catch (e) {
    return { key, error: String(e.message) };
  }
});

const stats = mergeResults(updates);
console.log(`Built ${stats.ok}/${stats.total} entries`);
if (stats.missing.length) {
  console.error("Missing:", stats.missing);
  process.exit(1);
}
