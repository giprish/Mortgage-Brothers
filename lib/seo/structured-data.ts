import { COMPANY, LOAN_OFFICERS } from "@/lib/company";
import {
  canonicalUrl,
  getSeoEntry,
  normalizePathname,
  OG_SITE_NAME,
  toTrailingSlashPath,
} from "@/lib/seo";
import liveOrganization from "@/lib/seo/live-organization.json";
import { HOMEPAGE_VIDEO, LOAN_PROGRAM_VIDEOS } from "@/lib/seo/loan-videos";
import { getConfiguredSiteUrl } from "@/lib/site-url";

export type JsonLdObject = Record<string, unknown>;

export type FaqQa = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type BlogPostingInput = {
  pathname: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  authorName?: string;
  authorPath?: string;
  articleSection?: string;
  keywords?: string | string[];
};

export type GlobalGraphOptions = {
  pathname?: string;
  siteUrl?: string;
};

const LIVE_ORIGIN = "https://azmortgagebrothers.com";

/** Live WP paths that differ on Next.js. */
const LIVE_PATH_ALIASES: Record<string, string> = {
  "/mortgage-glossary": "/glossary/",
  "/mortgage-glossary/": "/glossary/",
  "/first-time-homebuyer-guide": "/first-time-home-buyer-arizona-guide/",
  "/first-time-homebuyer-guide/": "/first-time-home-buyer-arizona-guide/",
};

const MONTHS: Record<string, string> = {
  january: "01",
  february: "02",
  march: "03",
  april: "04",
  may: "05",
  june: "06",
  july: "07",
  august: "08",
  september: "09",
  october: "10",
  november: "11",
  december: "12",
};

/** Convert display labels like "May 12, 2026" to ISO date (YYYY-MM-DD). */
export function parseDisplayDateToIso(dateLabel: string): string | undefined {
  const trimmed = dateLabel.trim();
  if (/^\d{4}-\d{2}-\d{2}/.test(trimmed)) return trimmed.slice(0, 10);

  const match = trimmed.match(
    /^([A-Za-z]+)\s+(\d{1,2}),\s+(\d{4})$/,
  );
  if (!match) return undefined;

  const month = MONTHS[match[1].toLowerCase()];
  if (!month) return undefined;

  const day = match[2].padStart(2, "0");
  return `${match[3]}-${month}-${day}`;
}

export function organizationId(siteUrl = getConfiguredSiteUrl()): string {
  return `${siteUrl}/#organization`;
}

export function websiteId(siteUrl = getConfiguredSiteUrl()): string {
  return `${siteUrl}/#website`;
}

export function placeId(siteUrl = getConfiguredSiteUrl()): string {
  return `${siteUrl}/#place`;
}

export function absoluteUrl(pathOrUrl: string, siteUrl = getConfiguredSiteUrl()): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${siteUrl}${path}`;
}

function pageUrl(pathname: string, siteUrl: string): string {
  const origin = siteUrl.replace(/\/+$/, "");
  const path = toTrailingSlashPath(pathname);
  return path === "/" ? `${origin}/` : `${origin}${path}`;
}

/**
 * Rewrite live site URLs to the current deployment origin.
 * Leaves `/wp-content/` media on the production WordPress CDN.
 */
export function rewriteLiveSiteUrls<T>(value: T, siteUrl: string): T {
  const origin = siteUrl.replace(/\/+$/, "");

  const walk = (node: unknown): unknown => {
    if (typeof node === "string") {
      if (node.includes("/wp-content/")) return node;
      if (!node.startsWith(LIVE_ORIGIN)) return node;

      const rest = node.slice(LIVE_ORIGIN.length) || "/";
      const hashIndex = rest.indexOf("#");
      const pathPart = hashIndex >= 0 ? rest.slice(0, hashIndex) : rest;
      const hash = hashIndex >= 0 ? rest.slice(hashIndex) : "";
      const aliased =
        LIVE_PATH_ALIASES[pathPart] ??
        LIVE_PATH_ALIASES[pathPart.replace(/\/+$/, "")] ??
        pathPart;
      const normalized =
        aliased === "/"
          ? "/"
          : aliased.endsWith("/")
            ? aliased
            : `${aliased}/`;
      return `${origin}${normalized === "/" ? "/" : normalized}${hash}`;
    }
    if (Array.isArray(node)) return node.map(walk);
    if (node && typeof node === "object") {
      const out: Record<string, unknown> = {};
      for (const [key, child] of Object.entries(node)) {
        out[key] = walk(child);
      }
      return out;
    }
    return node;
  };

  return walk(value) as T;
}

/** Full live homepage Organization block (reviews, products, articles, HowTo). */
export function buildRichOrganizationSchema(
  siteUrl = getConfiguredSiteUrl(),
): JsonLdObject {
  const origin = siteUrl.replace(/\/+$/, "");
  const schema = rewriteLiveSiteUrls(
    structuredClone(liveOrganization) as JsonLdObject,
    origin,
  );

  schema.url = origin;
  schema.name = COMPANY.brandName;
  schema.legalName = COMPANY.legalName;
  schema.telephone = COMPANY.phoneDisplay;
  // Keep social + map pin in sync with footer / COMPANY (not Instagram-only drift).
  schema.sameAs = [...COMPANY.sameAs];
  schema.geo = {
    "@type": "GeoCoordinates",
    latitude: COMPANY.geo.latitude,
    longitude: COMPANY.geo.longitude,
  };
  if (typeof schema.email !== "string") {
    schema.email = COMPANY.email;
  }

  // Mortgages are not shippable goods — strip e-commerce shipping/return fields.
  const mortgageProducts = schema.mortgageProducts;
  if (
    mortgageProducts &&
    typeof mortgageProducts === "object" &&
    !Array.isArray(mortgageProducts)
  ) {
    const list = (mortgageProducts as JsonLdObject).itemListElement;
    if (Array.isArray(list)) {
      for (const item of list) {
        if (!item || typeof item !== "object" || Array.isArray(item)) continue;
        const offers = (item as JsonLdObject).offers;
        const offerList = Array.isArray(offers)
          ? offers
          : offers && typeof offers === "object"
            ? [offers]
            : [];
        for (const offer of offerList) {
          if (!offer || typeof offer !== "object" || Array.isArray(offer)) continue;
          delete (offer as JsonLdObject).shippingDetails;
          delete (offer as JsonLdObject).hasMerchantReturnPolicy;
        }
      }
    }
  }

  return schema;
}

/** Slim publisher org used inside the Yoast-style @graph. */
export function buildOrganizationSchema(
  siteUrl = getConfiguredSiteUrl(),
): JsonLdObject {
  return {
    "@type": ["Organization", "LocalBusiness", "FinancialService", "MortgageBroker"],
    "@id": organizationId(siteUrl),
    name: COMPANY.brandName,
    legalName: COMPANY.legalName,
    url: siteUrl,
    sameAs: [...COMPANY.sameAs, COMPANY.nmlsConsumerAccessUrl],
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.streetAddress,
      addressLocality: COMPANY.city,
      addressRegion: "Arizona",
      postalCode: COMPANY.postalCode,
      addressCountry: "US",
    },
    logo: absoluteUrl(COMPANY.logoSrc, siteUrl),
    image: absoluteUrl(COMPANY.imageSrc, siteUrl),
    telephone: COMPANY.phoneTel,
    priceRange: "$$",
    description:
      "Explore mortgage options with Mortgage Brothers LLC. Get personalized advice and competitive rates for home loans in Arizona. Contact us today!",
  };
}

export function buildPlaceSchema(siteUrl = getConfiguredSiteUrl()): JsonLdObject {
  return {
    "@type": "Place",
    "@id": placeId(siteUrl),
    geo: {
      "@type": "GeoCoordinates",
      latitude: String(COMPANY.geo.latitude),
      longitude: String(COMPANY.geo.longitude),
    },
    hasMap: COMPANY.addressMapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.streetAddress,
      addressLocality: COMPANY.city,
      addressRegion: "Arizona",
      postalCode: COMPANY.postalCode,
      addressCountry: "US",
    },
  };
}

export function buildWebSiteSchema(siteUrl = getConfiguredSiteUrl()): JsonLdObject {
  return {
    "@type": "WebSite",
    "@id": websiteId(siteUrl),
    url: siteUrl,
    name: COMPANY.brandName,
    publisher: { "@id": organizationId(siteUrl) },
    inLanguage: "en-US",
  };
}

function pageEntityType(pathname: string): string {
  const path = normalizePathname(pathname);
  if (path === "/about-us") return "AboutPage";
  if (path === "/contact-us") return "ContactPage";
  return "WebPage";
}

function buildImageObject(pathname: string, siteUrl: string): JsonLdObject {
  const url = pageUrl(pathname, siteUrl);
  const seo = getSeoEntry(pathname);
  const image = absoluteUrl(
    seo?.openGraph?.image || COMPANY.imageSrc,
    siteUrl,
  );
  return {
    "@type": "ImageObject",
    "@id": `${url}#primaryimage`,
    url: image,
    contentUrl: image,
    caption: seo?.title || OG_SITE_NAME,
    inLanguage: "en-US",
  };
}

function buildPageEntity(pathname: string, siteUrl: string): JsonLdObject {
  const url = pageUrl(pathname, siteUrl);
  const seo = getSeoEntry(pathname);
  const title =
    (typeof seo?.title === "string" && seo.title) ||
    (typeof seo?.openGraph?.title === "string" && seo.openGraph.title) ||
    OG_SITE_NAME;
  const description =
    (typeof seo?.description === "string" && seo.description) ||
    (typeof seo?.openGraph?.description === "string" &&
      seo.openGraph.description) ||
    undefined;

  return {
    "@type": pageEntityType(pathname),
    "@id": `${url}#webpage`,
    url,
    name: title,
    ...(description ? { description } : {}),
    isPartOf: { "@id": websiteId(siteUrl) },
    about: { "@id": organizationId(siteUrl) },
    primaryImageOfPage: { "@id": `${url}#primaryimage` },
    inLanguage: "en-US",
  };
}

function buildHomepageVideo(siteUrl: string): JsonLdObject {
  const origin = siteUrl.replace(/\/+$/, "");
  const webpageId = `${origin}/#webpage`;
  return {
    ...HOMEPAGE_VIDEO,
    "@id": `${origin}/#schema-video`,
    isPartOf: { "@id": webpageId },
    publisher: { "@id": organizationId(origin) },
    mainEntityOfPage: { "@id": webpageId },
  };
}

export function buildVideoObjectSchema(
  pathname: string,
  siteUrl = getConfiguredSiteUrl(),
): JsonLdObject | null {
  const path = toTrailingSlashPath(pathname);
  const video = LOAN_PROGRAM_VIDEOS[path];
  if (!video) return null;
  return {
    "@context": "https://schema.org",
    ...video,
  };
}

/**
 * Yoast/Rank-Math style @graph for every page.
 * Pathname drives WebPage vs AboutPage vs ContactPage and homepage VideoObject.
 */
export function buildGlobalGraph(
  siteUrlOrOptions?: string | GlobalGraphOptions,
  maybeOptions?: GlobalGraphOptions,
): JsonLdObject {
  const options: GlobalGraphOptions =
    typeof siteUrlOrOptions === "string"
      ? { siteUrl: siteUrlOrOptions, ...(maybeOptions || {}) }
      : siteUrlOrOptions || {};
  const siteUrl = (options.siteUrl || getConfiguredSiteUrl()).replace(
    /\/+$/,
    "",
  );
  const pathname = options.pathname || "/";

  const graph: JsonLdObject[] = [
    buildPlaceSchema(siteUrl),
    buildOrganizationSchema(siteUrl),
    buildWebSiteSchema(siteUrl),
    buildImageObject(pathname, siteUrl),
    buildPageEntity(pathname, siteUrl),
  ];

  if (normalizePathname(pathname) === "/") {
    graph.push(buildHomepageVideo(siteUrl));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

/**
 * All JSON-LD documents for the root layout:
 * 1) Yoast-style @graph (every page)
 * 2) Live rich Organization with products / offers / reviews (homepage only)
 */
export function buildGlobalJsonLdDocuments(
  options: GlobalGraphOptions = {},
): JsonLdObject[] {
  const siteUrl = (options.siteUrl || getConfiguredSiteUrl()).replace(
    /\/+$/,
    "",
  );
  const pathname = options.pathname || "/";
  const documents: JsonLdObject[] = [
    buildGlobalGraph({ siteUrl, pathname }),
  ];

  // Match live: Product / Offer / Review blob only on the homepage.
  if (normalizePathname(pathname) === "/") {
    documents.push({
      "@context": "https://schema.org",
      ...buildRichOrganizationSchema(siteUrl),
    });
  }

  return documents;
}


export function buildFaqPageSchema(faqs: FaqQa[]): JsonLdObject | null {
  const entities = faqs
    .map((faq) => ({
      question: faq.question?.trim() ?? "",
      answer: faq.answer?.trim() ?? "",
    }))
    .filter((faq) => faq.question && faq.answer);

  if (entities.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entities.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Accepts either `{ question, answer }` or FaqAccordion-style `{ q, a: string }`. */
export function normalizeFaqs(
  items: Array<{ question?: string; answer?: string; q?: string; a?: string }>,
): FaqQa[] {
  return items
    .map((item) => ({
      question: (item.question ?? item.q ?? "").trim(),
      answer: (item.answer ?? (typeof item.a === "string" ? item.a : "")).trim(),
    }))
    .filter((item) => item.question && item.answer);
}

export function buildBreadcrumbListSchema(
  items: BreadcrumbItem[],
  siteUrl = getConfiguredSiteUrl(),
): JsonLdObject | null {
  if (items.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(toTrailingSlashPath(item.path), siteUrl),
    })),
  };
}

export function buildPersonSchema(options?: {
  name?: string;
  path?: string;
  jobTitle?: string;
  description?: string;
}): JsonLdObject {
  const name = options?.name ?? LOAN_OFFICERS.eddie.name;
  const path = options?.path ?? LOAN_OFFICERS.eddie.authorPath;
  const siteUrl = getConfiguredSiteUrl();

  return {
    "@type": "Person",
    "@id": canonicalUrl(path),
    name,
    url: canonicalUrl(path),
    ...(options?.jobTitle ? { jobTitle: options.jobTitle } : {}),
    ...(options?.description ? { description: options.description } : {}),
    worksFor: { "@id": organizationId(siteUrl) },
  };
}

export function buildBlogPostingSchema(input: BlogPostingInput): JsonLdObject {
  const siteUrl = getConfiguredSiteUrl();
  const pageUrl = canonicalUrl(input.pathname);
  const authorName = input.authorName ?? LOAN_OFFICERS.eddie.name;
  const authorPath = input.authorPath ?? LOAN_OFFICERS.eddie.authorPath;
  const authorId = canonicalUrl(authorPath);
  const dateModified = input.dateModified ?? input.datePublished;

  const seoImage = input.image ?? getSeoEntry(input.pathname)?.openGraph?.image;
  const imageUrl = seoImage ? absoluteUrl(seoImage, siteUrl) : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${pageUrl}#article`,
    headline: input.headline,
    name: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified,
    ...(input.articleSection ? { articleSection: input.articleSection } : {}),
    ...(input.keywords ? { keywords: input.keywords } : {}),
    author: {
      "@type": "Person",
      "@id": authorId,
      name: authorName,
      url: authorId,
    },
    publisher: { "@id": organizationId(siteUrl) },
    ...(imageUrl ? { image: imageUrl } : {}),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
    },
    isPartOf: { "@id": websiteId(siteUrl) },
    inLanguage: "en-US",
  };
}

/**
 * Convenience for article pages: BlogPosting (+ optional FAQ + breadcrumbs)
 * as a single `@graph` when multiple schemas are present.
 */
export function buildArticleSchemas(options: {
  blog: BlogPostingInput;
  faqs?: FaqQa[];
  breadcrumbs?: BreadcrumbItem[];
}): JsonLdObject[] {
  const schemas: JsonLdObject[] = [buildBlogPostingSchema(options.blog)];

  if (options.faqs?.length) {
    const faq = buildFaqPageSchema(options.faqs);
    if (faq) schemas.push(faq);
  }

  if (options.breadcrumbs?.length) {
    const crumbs = buildBreadcrumbListSchema(options.breadcrumbs);
    if (crumbs) schemas.push(crumbs);
  }

  return schemas;
}
