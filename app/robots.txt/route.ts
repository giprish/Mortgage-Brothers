import { resolveSiteUrl } from "@/lib/sitemap";

/**
 * Allow indexing of real content; block thin/duplicate alias routes
 * that are already excluded from the sitemap.
 */
export function GET(request: Request) {
  const siteUrl = resolveSiteUrl(request);
  const body = `User-agent: *
Disallow:

Sitemap: https://azmortgage.vercel.app/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
