#!/usr/bin/env node
/** Apply WebFetch markdown batch from tmp/hero-batch.json into live-hero.json */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { parseHeroMarkdown, mergeResults } from "./merge-live-hero.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const batchPath = join(ROOT, "tmp", "hero-batch.json");
const items = JSON.parse(readFileSync(batchPath, "utf8"));
const updates = items.map(({ key, markdown }) => {
  try {
    return { key, ...parseHeroMarkdown(markdown) };
  } catch (e) {
    return { key, error: String(e.message || e) };
  }
});
const stats = mergeResults(updates);
console.log(JSON.stringify(stats, null, 2));
