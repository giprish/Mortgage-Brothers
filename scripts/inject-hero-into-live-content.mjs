#!/usr/bin/env node
/** Inject heroTitle + heroDescription from tmp/live-hero.json into lib/liveCityPageContent.ts */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT_PATH = join(ROOT, "lib", "liveCityPageContent.ts");
const HERO_PATH = join(ROOT, "tmp", "live-hero.json");

function normalizeBrand(text) {
  return text
    .replace(/\bAZ Mortgage Brothers\b/g, "Mortgage Brothers LLC")
    .replace(/\bMortgage Brothers\b(?! LLC)/g, "Mortgage Brothers LLC");
}

function tsString(value) {
  return JSON.stringify(normalizeBrand(value));
}

const hero = JSON.parse(readFileSync(HERO_PATH, "utf8"));
const byKey = new Map(
  hero.results.filter((r) => r.heroTitle && r.heroDescription).map((r) => [r.key, r]),
);

let content = readFileSync(CONTENT_PATH, "utf8");

if (!content.includes("heroTitle")) {
  content = content.replace(
    /export type LiveCityPageContent = \{/,
    `export type LiveCityPageContent = {
  heroTitle?: string;
  heroDescription?: string;`,
  );
}

const keyRe = /"([^"]+\/[^"]+)":\s*\{/g;
let match;
let injected = 0;
let missing = [];

while ((match = keyRe.exec(content)) !== null) {
  const key = match[1];
  const entry = byKey.get(key);
  if (!entry) {
    missing.push(key);
    continue;
  }

  const blockStart = match.index + match[0].length;
  const slice = content.slice(blockStart, blockStart + 400);
  if (/^\s*heroTitle:/m.test(slice)) {
    content = content.replace(
      new RegExp(
        `("${key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}":\\s*\\{)[\\s\\S]*?(\\n\\s*heroTitle:\\s*)[^,\\n]+(,\\s*\\n\\s*heroDescription:\\s*)[^,\\n]+`,
      ),
      `$1$2${tsString(entry.heroTitle)}$3${tsString(entry.heroDescription)}`,
    );
    injected++;
    continue;
  }

  const insert = `\n    heroTitle: ${tsString(entry.heroTitle)},\n    heroDescription: ${tsString(entry.heroDescription)},`;
  content = content.slice(0, blockStart) + insert + content.slice(blockStart);
  keyRe.lastIndex = blockStart + insert.length;
  injected++;
}

writeFileSync(CONTENT_PATH, content);
console.log(`Injected hero for ${injected} cities`);
if (missing.length) console.log("Missing hero data:", missing.join(", "));
