/**
 * Match live WordPress robots rules.
 */
export function GET() {
  const body = `User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php

Disallow: /blog.php?*
Disallow: */feed/

Sitemap: https://azmortgagebrothers.com/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
