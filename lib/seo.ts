import type { Metadata } from "next";
import { getConfiguredSiteUrl } from "@/lib/site-url";
import seoMetadataJson from "./seo-metadata.json";

/** Rank Math site-wide tags from azmortgagebrothers.com */
export const OG_SITE_NAME = "Arizona Home Loans | The Mortgage Brothers";
export const OG_LOCALE = "en_US";
export const TWITTER_HANDLE = "@azmortgagebros";

export type SeoEntry = {
  section?: string;
  sourceUrl?: string;
  title?: string;
  description?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    image?: string;
  };
};

/** Live WP pathname → Next.js pathname aliases when slugs differ. */
const PATH_ALIASES: Record<string, string> = {
  // Next typo/extra "in" vs live WP slug
  "/who-qualifies-for-a-reverse-mortgage-understanding-eligibility-in-requirements":
    "/who-qualifies-for-a-reverse-mortgage-understanding-eligibility-requirements",
  // Live WP 301s this slug to the guide
  "/first-time-home-buyer-arizona": "/first-time-home-buyer-arizona-guide",
};

export const seoMetadata = seoMetadataJson as Record<string, SeoEntry>;

/** Normalize to a lookup key without a trailing slash (except root `/`). */
export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

/** Public page URL path always ends with `/` (except root stays `/`). */
export function toTrailingSlashPath(pathname: string): string {
  const path = normalizePathname(pathname);
  if (path === "/") return "/";
  return `${path}/`;
}

/** Absolute canonical / og:url for the current deployment origin. */
export function canonicalUrl(pathname: string): string {
  const origin = getConfiguredSiteUrl();
  const path = toTrailingSlashPath(pathname);
  if (path === "/") return `${origin}/`;
  return `${origin}${path}`;
}

export function getSeoEntry(pathname: string): SeoEntry | undefined {
  const path = normalizePathname(pathname);
  const aliased = PATH_ALIASES[path] ?? path;
  const direct = seoMetadata[aliased] ?? seoMetadata[path];
  if (direct) return direct;

  // /resources/{category}/{article} → live root article slug
  const resourceArticle = path.match(/^\/resources\/[^/]+\/([^/]+)$/);
  if (resourceArticle) {
    const fallback = seoMetadata[`/${resourceArticle[1]}`];
    if (fallback) return fallback;
  }

  // /resources/{category} → live category slug
  const resourceCat = path.match(/^\/resources\/([^/]+)$/);
  if (resourceCat) {
    const fallback = seoMetadata[`/${resourceCat[1]}`];
    if (fallback) return fallback;
  }

  return undefined;
}

export function getSeoMetadata(pathname: string): Metadata {
  const canonicalPath = toTrailingSlashPath(pathname);

  const metadata: Metadata = {
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      siteName: OG_SITE_NAME,
      locale: OG_LOCALE,
      url: canonicalPath,
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
    },
  };

  const entry = getSeoEntry(pathname);
  if (!entry) {
    return metadata;
  }

  if (entry.title) metadata.title = entry.title;
  if (typeof entry.description === "string") {
    metadata.description = entry.description;
  }

  if (entry.openGraph) {
    const og = entry.openGraph;
    metadata.openGraph = {
      siteName: OG_SITE_NAME,
      locale: OG_LOCALE,
      ...(og.title ? { title: og.title } : {}),
      ...(typeof og.description === "string"
        ? { description: og.description }
        : {}),
      url: canonicalPath,
      ...(og.type
        ? { type: og.type as "website" | "article" | "profile" | "book" }
        : {}),
      ...(og.image
        ? { images: [{ url: og.image, width: 1200, height: 630 }] }
        : {}),
    };
  }

  if (entry.twitter) {
    const tw = entry.twitter;
    metadata.twitter = {
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      card:
        (tw.card as "summary" | "summary_large_image" | "player" | "app") ||
        "summary_large_image",
      ...(tw.title ? { title: tw.title } : {}),
      ...(typeof tw.description === "string"
        ? { description: tw.description }
        : {}),
      ...(tw.image ? { images: [tw.image] } : {}),
    };
  }

  return metadata;
}

/** Homepage defaults used by the root layout. */
export const homeSeoMetadata: Metadata = getSeoMetadata("/");
