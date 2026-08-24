import { COMPANY, LOAN_OFFICERS } from "@/lib/company";
import { canonicalUrl, getSeoEntry, toTrailingSlashPath } from "@/lib/seo";
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

export function absoluteUrl(pathOrUrl: string, siteUrl = getConfiguredSiteUrl()): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${siteUrl}${path}`;
}

export function buildOrganizationSchema(
  siteUrl = getConfiguredSiteUrl(),
): JsonLdObject {
  return {
    "@type": ["MortgageBroker", "LocalBusiness", "FinancialService"],
    "@id": organizationId(siteUrl),
    name: COMPANY.brandName,
    legalName: COMPANY.legalName,
    url: siteUrl,
    telephone: COMPANY.phoneTel,
    email: COMPANY.email,
    image: absoluteUrl(COMPANY.imageSrc, siteUrl),
    logo: absoluteUrl(COMPANY.logoSrc, siteUrl),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.streetAddress,
      addressLocality: COMPANY.city,
      addressRegion: COMPANY.state,
      postalCode: COMPANY.postalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.geo.latitude,
      longitude: COMPANY.geo.longitude,
    },
    areaServed: {
      "@type": "State",
      name: "Arizona",
    },
    identifier: [
      {
        "@type": "PropertyValue",
        name: "NMLS",
        value: COMPANY.nmls,
      },
      {
        "@type": "PropertyValue",
        name: "Arizona Mortgage Broker License",
        value: COMPANY.azLicense,
      },
    ],
    sameAs: [...COMPANY.sameAs, COMPANY.nmlsConsumerAccessUrl],
    employee: [
      {
        "@type": "Person",
        "@id": canonicalUrl(LOAN_OFFICERS.eddie.authorPath),
        name: LOAN_OFFICERS.eddie.name,
        jobTitle: LOAN_OFFICERS.eddie.title,
        identifier: LOAN_OFFICERS.eddie.nmlsDisplay,
      },
      {
        "@type": "Person",
        name: LOAN_OFFICERS.thomas.name,
        jobTitle: LOAN_OFFICERS.thomas.title,
        identifier: LOAN_OFFICERS.thomas.nmlsDisplay,
      },
    ],
  };
}

export function buildWebSiteSchema(siteUrl = getConfiguredSiteUrl()): JsonLdObject {
  return {
    "@type": "WebSite",
    "@id": websiteId(siteUrl),
    url: siteUrl,
    name: COMPANY.siteName,
    publisher: { "@id": organizationId(siteUrl) },
    inLanguage: "en-US",
  };
}

/** Global graph for the root layout (organization + website). */
export function buildGlobalGraph(siteUrl = getConfiguredSiteUrl()): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@graph": [buildOrganizationSchema(siteUrl), buildWebSiteSchema(siteUrl)],
  };
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
