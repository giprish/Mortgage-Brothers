import {
  buildSitemapIndexXml,
  collectSitemapEntries,
  newestLastmod,
  resolveSiteUrl,
  xmlResponse,
} from "@/lib/sitemap";

export function GET(request: Request) {
  const siteUrl = resolveSiteUrl(request);
  const { pages, posts, categories, authors } = collectSitemapEntries(siteUrl);
  const today = new Date().toISOString().slice(0, 10);

  const xml = buildSitemapIndexXml(siteUrl, {
    "post-sitemap.xml": newestLastmod(posts),
    "page-sitemap.xml": newestLastmod(pages),
    "category-sitemap.xml": newestLastmod(categories),
    "author-sitemap.xml": newestLastmod(authors),
    "local-sitemap.xml": today,
  });

  return xmlResponse(xml);
}
