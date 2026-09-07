import { resolveSiteUrl } from "@/lib/sitemap";

/**
 * Match live WordPress robots rules; Sitemap stays host-aware
 * (stage vs production), same as sitemap.xml / llms.txt.
 */
export function GET(request: Request) {
  const siteUrl = resolveSiteUrl(request);
  const body = `User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php

Disallow: /blog.php?*
Disallow: /author/*
Disallow: */feed/

Sitemap: ${siteUrl}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
