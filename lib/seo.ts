import type { Metadata } from "next";
import seoMetadataJson from "./seo-metadata.json";

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

function ensureAbsoluteTrailingSlashUrl(url: string | undefined): string | undefined {
  if (!url) return undefined;
  try {
    const u = new URL(url);
    // Do not alter asset URLs (files with extensions)
    if (/\.[a-z0-9]{2,5}$/i.test(u.pathname)) return url;
    if (!u.pathname.endsWith("/")) {
      u.pathname = `${u.pathname}/`;
    }
    return u.toString();
  } catch {
    return url;
  }
}

export function getSeoEntry(pathname: string): SeoEntry | undefined {
  const path = normalizePathname(pathname);
  const aliased = PATH_ALIASES[path] ?? path;
  return seoMetadata[aliased] ?? seoMetadata[path];
}

export function getSeoMetadata(pathname: string): Metadata {
  const entry = getSeoEntry(pathname);
  if (!entry) {
    return {};
  }

  const canonicalPath = toTrailingSlashPath(pathname);
  const canonicalUrl =
    ensureAbsoluteTrailingSlashUrl(entry.openGraph?.url) ??
    ensureAbsoluteTrailingSlashUrl(entry.sourceUrl) ??
    `https://azmortgagebrothers.com${canonicalPath === "/" ? "/" : canonicalPath}`;

  const metadata: Metadata = {
    alternates: {
      canonical: canonicalUrl,
    },
  };
  if (entry.title) metadata.title = entry.title;
  if (entry.description) metadata.description = entry.description;

  if (entry.openGraph) {
    const og = entry.openGraph;
    const ogUrl = ensureAbsoluteTrailingSlashUrl(og.url) ?? canonicalUrl;
    metadata.openGraph = {
      ...(og.title ? { title: og.title } : {}),
      ...(og.description ? { description: og.description } : {}),
      url: ogUrl,
      ...(og.type
        ? { type: og.type as "website" | "article" | "profile" | "book" }
        : {}),
      ...(og.image ? { images: [{ url: og.image }] } : {}),
    };
  }

  if (entry.twitter) {
    const tw = entry.twitter;
    metadata.twitter = {
      ...(tw.card
        ? { card: tw.card as "summary" | "summary_large_image" | "player" | "app" }
        : {}),
      ...(tw.title ? { title: tw.title } : {}),
      ...(tw.description ? { description: tw.description } : {}),
      ...(tw.image ? { images: [tw.image] } : {}),
    };
  }

  return metadata;
}

/** Homepage defaults used by the root layout. */
export const homeSeoMetadata: Metadata = getSeoMetadata("/");
