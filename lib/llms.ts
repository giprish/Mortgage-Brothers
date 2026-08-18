import { COMPANY } from "@/lib/company";
import eddiePosts from "@/lib/eddie-knoell-posts.json";
import { OG_SITE_NAME, getSeoEntry, normalizePathname } from "@/lib/seo";
import {
  collectSitemapEntries,
  type SitemapUrlEntry,
} from "@/lib/sitemap";

/** Rank Math site summary from the live azmortgagebrothers.com/llms.txt. */
const SITE_SUMMARY =
  "We provide expert mortgage services in Arizona, specializing in reverse mortgages, home purchases, and conventional loans. Located in Phoenix, we offer personalized solutions tailored to local needs. Visit us for trusted advice and competitive rates.";

type PostMeta = {
  title: string;
  excerpt: string;
};

function getPostMetaMap(): Map<string, PostMeta> {
  const map = new Map<string, PostMeta>();
  for (const post of eddiePosts as { title: string; href: string; excerpt: string }[]) {
    map.set(normalizePathname(post.href), {
      title: post.title,
      excerpt: post.excerpt,
    });
  }
  return map;
}

function pathnameFromLoc(siteUrl: string, loc: string): string {
  const origin = siteUrl.replace(/\/+$/, "");
  if (loc.startsWith(origin)) {
    return normalizePathname(loc.slice(origin.length) || "/");
  }
  try {
    return normalizePathname(new URL(loc).pathname);
  } catch {
    return normalizePathname(loc);
  }
}

function cleanText(value: string): string {
  return value
    .replace(/&nbsp;|&#160;|\u00a0/gi, " ")
    .replace(/&#038;|&amp;/g, "&")
    .replace(/&#8211;/g, "–")
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function stripSiteSuffix(title: string): string {
  return title
    .replace(
      /\s*[-–—|]\s*Arizona Home Loans(?:\s*\|\s*The Mortgage Brothers)?\s*$/i,
      "",
    )
    .replace(/\s*\|\s*The Mortgage Brothers\s*$/i, "")
    .replace(/\s*\|\s*Arizona Mortgage Brothers\s*$/i, "")
    .trim();
}

function humanizePath(pathname: string): string {
  if (pathname === "/") return COMPANY.brandName;
  const last = pathname.split("/").filter(Boolean).at(-1) ?? pathname;
  return last
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function escapeMdLinkText(value: string): string {
  return value.replace(/[[\]]/g, "\\$&");
}

function entryTitle(pathname: string, posts: Map<string, PostMeta>): string {
  const post = posts.get(pathname);
  if (post?.title) return cleanText(post.title);

  const seo = getSeoEntry(pathname);
  if (seo?.title) return stripSiteSuffix(cleanText(seo.title));

  return humanizePath(pathname);
}

function entryDescription(
  pathname: string,
  posts: Map<string, PostMeta>,
): string {
  const seo = getSeoEntry(pathname);
  if (seo?.description) return cleanText(seo.description);

  const post = posts.get(pathname);
  if (post?.excerpt) return cleanText(post.excerpt);

  return "";
}

function formatSection(
  siteUrl: string,
  heading: string,
  entries: SitemapUrlEntry[],
  posts: Map<string, PostMeta>,
): string {
  const lines = entries.map((entry) => {
    const path = pathnameFromLoc(siteUrl, entry.loc);
    const title = escapeMdLinkText(entryTitle(path, posts));
    const description = entryDescription(path, posts);
    if (description) return `- [${title}](${entry.loc}): ${description}`;
    return `- [${title}](${entry.loc})`;
  });

  return `## ${heading}\n${lines.join("\n")}`;
}

/**
 * Rank Math–style llms.txt: site summary plus crawlable posts and pages.
 * URLs follow the request origin, same as sitemap.xml / robots.txt.
 */
export function buildLlmsTxt(siteUrl: string): string {
  const origin = siteUrl.replace(/\/+$/, "");
  const { pages, posts, categories } = collectSitemapEntries(origin);
  const postLookup = getPostMetaMap();

  const pageEntries = [...pages, ...categories].sort((a, b) =>
    a.loc.localeCompare(b.loc),
  );

  return [
    "This is an llms.txt file designed to help LLMs better understand and index this website.",
    "",
    `# ${OG_SITE_NAME}`,
    "",
    `> ${SITE_SUMMARY}`,
    "",
    `${COMPANY.brandName} (${COMPANY.legalName}) is an independent mortgage broker in ${COMPANY.city}, Arizona. ${COMPANY.nmlsDisplay}. Phone ${COMPANY.phoneDisplay}. ${COMPANY.addressFull}.`,
    "",
    "## Sitemaps",
    `- [XML Sitemap](${origin}/sitemap.xml): Includes all crawlable and indexable pages.`,
    "",
    formatSection(origin, "Posts", posts, postLookup),
    "",
    formatSection(origin, "Pages", pageEntries, postLookup),
    "",
  ].join("\n");
}
