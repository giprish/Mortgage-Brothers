#!/usr/bin/env node
/**
 * Validates sitemap collection coverage and category separation.
 * Run: npm run validate:sitemap
 */
import { createRequire } from "module";
import { existsSync, readdirSync, readFileSync, statSync } from "fs";
import { dirname, join, relative, sep } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const require = createRequire(import.meta.url);

const seoMetadata = require("../lib/seo-metadata.json");
const eddiePosts = require("../lib/eddie-knoell-posts.json");

function normalizePathname(pathname) {
  if (!pathname || pathname === "/") return "/";
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

const EXCLUDED = new Set([
  "/thank-you",
  "/term-condition",
  "/fha-loans",
  "/loan-programs-detail",
  "/arizona-directory-2",
  "/down-payment-calculator-1",
  "/pillar-posts",
  "/resources",
  "/resources/videos",
  "/resources/mortgage-basics",
  "/service-areas/maricopa-county-az-2",
]);

const RAW_CITIES = {
  "maricopa-county-az": [
    "Phoenix", "Scottsdale", "Mesa", "Chandler", "Gilbert", "Glendale", "Tempe", "Peoria",
    "Surprise", "Goodyear", "Avondale", "Buckeye", "Queen Creek", "Fountain Hills",
    "Paradise Valley", "Cave Creek", "Carefree", "Anthem", "Sun City", "Sun City West",
    "Litchfield Park", "Wickenburg", "Apache Junction", "Guadalupe", "El Mirage",
    "Tolleson", "Youngtown", "Gila Bend",
  ],
  "pima-county-az": [
    "Tucson", "Oro Valley", "Marana", "Sahuarita", "Vail", "Green Valley",
    "Catalina Foothills", "South Tucson",
  ],
  "pinal-county-az": [
    "Casa Grande", "Maricopa", "San Tan Valley", "Florence", "Coolidge", "Eloy",
    "Apache Junction", "Superior", "Kearny", "Mammoth",
  ],
  "yavapai-county-az": [
    "Prescott", "Prescott Valley", "Sedona", "Cottonwood", "Chino Valley", "Camp Verde",
    "Dewey-Humboldt", "Clarkdale", "Jerome",
  ],
  "coconino-county-az": ["Flagstaff", "Sedona", "Williams", "Page", "Fredonia", "Tusayan"],
  "navajo-county-az": [
    "Show Low", "Pinetop-Lakeside", "Holbrook", "Taylor", "Snowflake", "Winslow",
  ],
  "apache-county-az": ["St. Johns", "Eagar", "Springerville", "Chinle", "Window Rock"],
  "gila-county-az": ["Payson", "Globe", "Miami", "Star Valley", "Hayden"],
  "cochise-county-az": [
    "Sierra Vista", "Douglas", "Bisbee", "Benson", "Willcox", "Tombstone", "Huachuca City",
  ],
  "graham-county-az": ["Safford", "Thatcher", "Pima"],
  "greenlee-county-az": ["Clifton", "Duncan", "Morenci"],
  "santa-cruz-county-az": ["Nogales", "Rio Rico", "Tubac", "Patagonia"],
  "mohave-county-az": [
    "Lake Havasu City", "Kingman", "Bullhead City", "Fort Mohave", "Golden Valley",
    "Colorado City",
  ],
  "la-paz-county-az": ["Parker", "Quartzsite", "Salome", "Bouse"],
  "yuma-county-az": ["Yuma", "San Luis", "Somerton", "Wellton"],
};

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function discoverStaticPagePaths(appDir) {
  const results = [];
  function walk(dir) {
    let entries;
    try {
      entries = readdirSync(dir);
    } catch {
      return;
    }
    for (const entry of entries) {
      if (entry === "component" || entry === "api" || entry.startsWith(".")) continue;
      const fullPath = join(dir, entry);
      let stats;
      try {
        stats = statSync(fullPath);
      } catch {
        continue;
      }
      if (stats.isDirectory()) {
        if (entry.startsWith("[") || entry.startsWith("_")) continue;
        walk(fullPath);
        continue;
      }
      if (!/^page\.(tsx|ts|jsx|js)$/.test(entry)) continue;
      const rel = relative(appDir, dir);
      if (!rel || rel === ".") {
        results.push("/");
        continue;
      }
      const segments = rel
        .split(sep)
        .filter((s) => !(s.startsWith("(") && s.endsWith(")")));
      if (segments.some((s) => s.startsWith("["))) continue;
      results.push(`/${segments.join("/")}`);
    }
  }
  walk(appDir);
  return results;
}

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

function ok(message) {
  console.log(`OK: ${message}`);
}

const appDir = join(root, "app");
const staticPaths = discoverStaticPagePaths(appDir).map(normalizePathname);

const postPaths = new Set(eddiePosts.map((p) => normalizePathname(p.href)));
for (const [path, entry] of Object.entries(seoMetadata)) {
  if (entry.section === "posts") postPaths.add(normalizePathname(path));
}

const categoryPaths = new Set(
  Object.entries(seoMetadata)
    .filter(([, e]) => e.section === "cats")
    .map(([p]) => normalizePathname(p))
    .filter((p) => !EXCLUDED.has(p)),
);

const authorDir = join(appDir, "author");
const authorPaths = existsSync(authorDir)
  ? readdirSync(authorDir)
      .filter((slug) => existsSync(join(authorDir, slug, "page.tsx")))
      .map((slug) => `/author/${slug}`)
  : [];

const cityPaths = Object.entries(RAW_CITIES).flatMap(([county, cities]) =>
  cities.map((c) => `/service-areas/${county}/${slugify(c)}`),
);

const allPageCandidates = [...new Set([...staticPaths, ...cityPaths])].filter((p) => {
  if (EXCLUDED.has(p)) return false;
  if (postPaths.has(p)) return false;
  if (categoryPaths.has(p)) return false;
  if (authorPaths.includes(p)) return false;
  return true;
});

if (postPaths.size < 70) fail(`expected ~75 posts, got ${postPaths.size}`);
else ok(`posts: ${postPaths.size}`);

if (categoryPaths.size < 10) fail(`expected ~10 categories, got ${categoryPaths.size}`);
else ok(`categories: ${categoryPaths.size}`);

if (cityPaths.length !== 108) fail(`expected 108 cities, got ${cityPaths.length}`);
else ok(`service-area cities: ${cityPaths.length}`);

if (allPageCandidates.length < 100) {
  fail(`expected 100+ pages, got ${allPageCandidates.length}`);
} else {
  ok(`pages (after classification): ${allPageCandidates.length}`);
}

if (authorPaths.length < 1) fail("expected at least one author path");
else ok(`authors: ${authorPaths.join(", ")}`);

for (const p of postPaths) {
  if (categoryPaths.has(p)) fail(`post also in categories: ${p}`);
}
for (const p of categoryPaths) {
  if (allPageCandidates.includes(p)) fail(`category also in pages: ${p}`);
}
ok("no post/category/page overlap");

for (const excluded of EXCLUDED) {
  if (allPageCandidates.includes(excluded)) {
    fail(`excluded path in pages: ${excluded}`);
  }
}
if (allPageCandidates.includes("/fha-loans")) fail("redirect /fha-loans in pages");
if (categoryPaths.has("/fha-loans")) fail("redirect /fha-loans in categories");
ok("excluded redirect/duplicate paths absent");

const requiredRoutes = [
  "app/sitemap.xml/route.ts",
  "app/page-sitemap.xml/route.ts",
  "app/post-sitemap.xml/route.ts",
  "app/category-sitemap.xml/route.ts",
  "app/author-sitemap.xml/route.ts",
  "app/local-sitemap.xml/route.ts",
  "app/locations.kml/route.ts",
  "app/main-sitemap.xsl/route.ts",
  "app/robots.txt/route.ts",
  "lib/sitemap.ts",
];
for (const file of requiredRoutes) {
  if (!existsSync(join(root, file))) fail(`missing ${file}`);
}
ok("all sitemap route files present");

const robotsRoute = readFileSync(join(root, "app/robots.txt/route.ts"), "utf8");
if (!robotsRoute.includes("Sitemap: ${siteUrl}/sitemap.xml")) {
  fail("robots.txt route missing host-aware Sitemap directive");
}
if (/Disallow:\s*\/author/.test(robotsRoute)) {
  fail("robots.txt still disallows /author");
}
ok("robots.txt route points at sitemap.xml and allows all");

if (process.exitCode) {
  console.error("\nSitemap validation failed.");
  process.exit(1);
}
console.log("\nSitemap validation passed.");
