import { existsSync, readdirSync, statSync } from "fs";
import { join, relative, sep } from "path";
import { COMPANY } from "@/lib/company";
import {
  FALLBACK_SITE_URL,
  resolveSiteUrlFromHeaders,
} from "@/lib/site-url";
import {
  countyMap,
  getCountyCitiesDetails,
  slugify,
} from "@/lib/cityData";
import { normalizePathname, seoMetadata, toTrailingSlashPath } from "@/lib/seo";
import eddiePosts from "@/lib/eddie-knoell-posts.json";

export { FALLBACK_SITE_URL };

const XML_STYLESHEET_PI =
  '<?xml-stylesheet type="text/xsl" href="/main-sitemap.xsl"?>';

export type SitemapKind = "pages" | "posts" | "categories" | "authors";

export type SitemapUrlEntry = {
  loc: string;
  lastmod?: string;
};

type AuthorPost = {
  title: string;
  href: string;
  date: string;
  excerpt: string;
};

/** Paths that redirect, duplicate, or should not be crawled. */
const EXCLUDED_PATHS = new Set([
  "/thank-you",
  "/term-condition",
  "/loan-programs",
  "/loan-programs-detail",
  "/arizona-directory-2",
  "/down-payment-calculator-1",
  "/pillar-posts",
  "/resources",
  "/resources/videos",
  "/resources/mortgage-basics",
  "/service-areas/maricopa-county-az-2",
]);

/**
 * Pages that exist as routes but are missing from seo-metadata.json.
 * Bundled so they still appear on Vercel, where `app/` is not on disk.
 */
const EXTRA_PAGE_PATHS = ["/privacy-policy", "/terms-of-use"];

const FALLBACK_AUTHOR_PATHS = ["/author/eddie-knoell"];

const CHILD_SITEMAPS = [
  "post-sitemap.xml",
  "page-sitemap.xml",
  "category-sitemap.xml",
  "author-sitemap.xml",
  "local-sitemap.xml",
] as const;

export type ChildSitemapName = (typeof CHILD_SITEMAPS)[number];

/** Origin of the deployment actually serving this request. */
export function resolveSiteUrl(request: Request): string {
  return resolveSiteUrlFromHeaders(request.headers);
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function absoluteUrl(siteUrl: string, pathname: string): string {
  const path = toTrailingSlashPath(pathname);
  if (path === "/") return `${siteUrl}/`;
  return `${siteUrl}${path}`;
}

function isExcludedPath(pathname: string): boolean {
  const path = normalizePathname(pathname);
  if (EXCLUDED_PATHS.has(path)) return true;
  if (path.startsWith("/resources/mortgage-basics/")) return true;
  if (path.startsWith("/areas-we-serve")) return true;
  return false;
}

/** Parse display dates like "Jun 25, 2026" into YYYY-MM-DD when possible. */
export function parseDisplayDate(value: string | undefined): string | undefined {
  if (!value?.trim()) return undefined;
  const parsed = Date.parse(value);
  if (Number.isNaN(parsed)) return undefined;
  return new Date(parsed).toISOString().slice(0, 10);
}

function discoverStaticPagePaths(appDir: string): string[] {
  const results: string[] = [];

  function walk(dir: string) {
    let entries: string[];
    try {
      entries = readdirSync(dir);
    } catch {
      return;
    }

    for (const entry of entries) {
      if (entry === "component" || entry === "api" || entry.startsWith(".")) {
        continue;
      }

      const fullPath = join(dir, entry);
      let stats;
      try {
        stats = statSync(fullPath);
      } catch {
        continue;
      }

      if (stats.isDirectory()) {
        // Skip dynamic segments and private folders
        if (entry.startsWith("[") || entry.startsWith("_")) continue;
        // Unwrap route groups: (group)/page.tsx → /
        walk(fullPath);
        continue;
      }

      if (entry !== "page.tsx" && entry !== "page.ts" && entry !== "page.jsx" && entry !== "page.js") {
        continue;
      }

      const rel = relative(appDir, dir);
      if (!rel || rel === ".") {
        results.push("/");
        continue;
      }

      const segments = rel.split(sep).filter((segment) => {
        // Drop route-group folders like (marketing)
        return !(segment.startsWith("(") && segment.endsWith(")"));
      });

      if (segments.some((segment) => segment.startsWith("["))) continue;

      results.push(`/${segments.join("/")}`);
    }
  }

  walk(appDir);
  return results;
}

function getServiceAreaCityPaths(): string[] {
  const fromCounties = Object.keys(countyMap).flatMap((countySlug) =>
    getCountyCitiesDetails(countySlug).map(
      (city) => `/service-areas/${countySlug}/${slugify(city.name)}`,
    ),
  );

  const fromSeo: string[] = [];
  for (const rawPath of Object.keys(seoMetadata)) {
    const path = normalizePathname(rawPath);
    const parts = path.split("/").filter(Boolean);
    if (parts.length !== 3) continue;
    if (parts[0] !== "service-areas") continue;
    if (!countyMap[parts[1]]) continue;
    fromSeo.push(path);
  }

  return dedupePaths([...fromCounties, ...fromSeo]);
}

/** Catalog pages from bundled SEO JSON — available in serverless runtimes. */
function getSeoPagePaths(): string[] {
  return Object.entries(seoMetadata)
    .filter(([, entry]) => !entry.section || entry.section === "pages")
    .map(([path]) => normalizePathname(path));
}

function getPostPathSet(): Map<string, string | undefined> {
  const posts = new Map<string, string | undefined>();

  for (const post of eddiePosts as AuthorPost[]) {
    const path = normalizePathname(post.href);
    posts.set(path, parseDisplayDate(post.date));
  }

  for (const [path, entry] of Object.entries(seoMetadata)) {
    if (entry.section === "posts") {
      const normalized = normalizePathname(path);
      if (!posts.has(normalized)) {
        posts.set(normalized, undefined);
      }
    }
  }

  return posts;
}

function getCategoryPaths(): string[] {
  return Object.entries(seoMetadata)
    .filter(([, entry]) => entry.section === "cats")
    .map(([path]) => normalizePathname(path))
    .filter((path) => !isExcludedPath(path));
}

function getAuthorPaths(appDir: string): string[] {
  const discovered: string[] = [];
  const authorDir = join(appDir, "author");
  if (existsSync(authorDir)) {
    for (const slug of readdirSync(authorDir)) {
      if (slug.startsWith("[")) continue;
      if (existsSync(join(authorDir, slug, "page.tsx"))) {
        discovered.push(`/author/${slug}`);
      }
    }
  }

  return dedupePaths([...discovered, ...FALLBACK_AUTHOR_PATHS]);
}

function dedupePaths(paths: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const raw of paths) {
    const path = normalizePathname(raw);
    if (seen.has(path)) continue;
    seen.add(path);
    out.push(path);
  }
  return out;
}

export function collectSitemapEntries(
  siteUrl: string,
): Record<SitemapKind, SitemapUrlEntry[]> {
  const appDir = join(process.cwd(), "app");
  const postMap = getPostPathSet();
  const categorySet = new Set(getCategoryPaths());
  const authorPaths = getAuthorPaths(appDir);
  const authorSet = new Set(authorPaths.map(normalizePathname));

  // `app/` is present in local/dev but not in Vercel serverless bundles, so
  // filesystem discovery is merged with bundled SEO/city/extra catalogs.
  const staticPaths = discoverStaticPagePaths(appDir);
  const cityPaths = getServiceAreaCityPaths();
  const seoPagePaths = getSeoPagePaths();

  const pagePaths = dedupePaths([
    ...staticPaths,
    ...seoPagePaths,
    ...cityPaths,
    ...EXTRA_PAGE_PATHS,
  ]).filter((path) => {
    if (isExcludedPath(path)) return false;
    if (postMap.has(path)) return false;
    if (categorySet.has(path)) return false;
    if (authorSet.has(path)) return false;
    return true;
  });

  const posts: SitemapUrlEntry[] = [...postMap.entries()]
    .filter(([path]) => !isExcludedPath(path))
    .map(([path, lastmod]) => ({
      loc: absoluteUrl(siteUrl, path),
      ...(lastmod ? { lastmod } : {}),
    }))
    .sort((a, b) => a.loc.localeCompare(b.loc));

  const categories: SitemapUrlEntry[] = [...categorySet]
    .map((path) => ({ loc: absoluteUrl(siteUrl, path) }))
    .sort((a, b) => a.loc.localeCompare(b.loc));

  const authors: SitemapUrlEntry[] = authorPaths
    .filter((path) => !isExcludedPath(path))
    .map((path) => ({ loc: absoluteUrl(siteUrl, path) }))
    .sort((a, b) => a.loc.localeCompare(b.loc));

  const pages: SitemapUrlEntry[] = pagePaths
    .map((path) => ({ loc: absoluteUrl(siteUrl, path) }))
    .sort((a, b) => a.loc.localeCompare(b.loc));

  return { pages, posts, categories, authors };
}

export function buildUrlSetXml(entries: SitemapUrlEntry[]): string {
  const urls = entries
    .map((entry) => {
      const lastmod = entry.lastmod
        ? `\n\t\t<lastmod>${escapeXml(entry.lastmod)}</lastmod>`
        : "";
      return `\t<url>\n\t\t<loc>${escapeXml(entry.loc)}</loc>${lastmod}\n\t</url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n${XML_STYLESHEET_PI}\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function buildSitemapIndexXml(
  siteUrl: string,
  lastmods: Partial<Record<ChildSitemapName, string>> = {},
): string {
  const today = new Date().toISOString().slice(0, 10);
  const items = CHILD_SITEMAPS.map((name) => {
    const lastmod = lastmods[name] ?? today;
    return `\t<sitemap>\n\t\t<loc>${escapeXml(`${siteUrl}/${name}`)}</loc>\n\t\t<lastmod>${escapeXml(lastmod)}</lastmod>\n\t</sitemap>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n${XML_STYLESHEET_PI}\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>\n`;
}

export function buildLocalSitemapXml(siteUrl: string): string {
  const today = new Date().toISOString().slice(0, 10);
  return buildUrlSetXml([
    {
      loc: `${siteUrl}/locations.kml`,
      lastmod: today,
    },
  ]);
}

export function buildLocationsKml(siteUrl: string): string {
  const lat = 33.547046;
  const lng = -112.046049;
  const placemarkName = `${COMPANY.brandName}`;
  const placemarkDescription = `${COMPANY.brandName} — Simplifying Mortgages in Phoenix, Scottsdale & Mesa`;
  const placemarkAddress = `${COMPANY.addressLine1} ${COMPANY.city}, ${COMPANY.state} ${COMPANY.postalCode}, US`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2" xmlns:atom="http://www.w3.org/2005/Atom">
\t<Document>
\t\t<name>Locations for ${escapeXml(placemarkName)}</name>
\t\t<open>1</open>
\t\t<Folder>
\t\t\t<atom:link href="${escapeXml(siteUrl)}" />
\t\t\t<Placemark>
\t\t\t\t<name><![CDATA[${placemarkName}]]></name>
\t\t\t\t<description><![CDATA[${placemarkDescription}]]></description>
\t\t\t\t<address><![CDATA[${placemarkAddress}]]></address>
\t\t\t\t<phoneNumber><![CDATA[${COMPANY.phoneDisplay}]]></phoneNumber>
\t\t\t\t<atom:link href="${escapeXml(siteUrl)}"/>
\t\t\t\t<LookAt>
\t\t\t\t\t<latitude>${lat}</latitude>
\t\t\t\t\t<longitude>${lng}</longitude>
\t\t\t\t\t<altitude>0</altitude>
\t\t\t\t\t<range></range>
\t\t\t\t\t<tilt>0</tilt>
\t\t\t\t</LookAt>
\t\t\t\t<Point>
\t\t\t\t\t<coordinates>${lng},${lat}</coordinates>
\t\t\t\t</Point>
\t\t\t</Placemark>
\t\t</Folder>
\t</Document>
</kml>
`;
}

export function xmlResponse(body: string, contentType = "application/xml; charset=utf-8"): Response {
  return new Response(body, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

/** Newest lastmod among entries, or today. */
export function newestLastmod(entries: SitemapUrlEntry[]): string {
  const dates = entries
    .map((entry) => entry.lastmod)
    .filter((value): value is string => Boolean(value))
    .sort();
  return dates.at(-1) ?? new Date().toISOString().slice(0, 10);
}

export { CHILD_SITEMAPS, EXCLUDED_PATHS };
