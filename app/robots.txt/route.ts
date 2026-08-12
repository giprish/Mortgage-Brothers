import { resolveSiteUrl } from "@/lib/sitemap";

/**
 * Allow indexing of real content; block thin/duplicate alias routes
 * that are already excluded from the sitemap.
 */
export function GET(request: Request) {
  const siteUrl = resolveSiteUrl(request);
  const body = `User-agent: *
Disallow: /thank-you
Disallow: /term-condition
Disallow: /loan-programs-detail
Disallow: /loan-programs/
Disallow: /pillar-posts/
Disallow: /down-payment-calculator-1/
Disallow: /arizona-directory-2/
Disallow: /service-areas/maricopa-county-az-2/
Disallow: /fha-loans
Disallow: /resources/videos
Disallow: /resources/mortgage-basics

Sitemap: ${siteUrl}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
