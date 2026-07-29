import {
  buildSitemapIndexXml,
  collectSitemapEntries,
  newestLastmod,
  xmlResponse,
} from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  const { pages, posts, categories, authors } = collectSitemapEntries();
  const today = new Date().toISOString().slice(0, 10);

  const xml = buildSitemapIndexXml({
    "post-sitemap.xml": newestLastmod(posts),
    "page-sitemap.xml": newestLastmod(pages),
    "category-sitemap.xml": newestLastmod(categories),
    "author-sitemap.xml": newestLastmod(authors),
    "local-sitemap.xml": today,
  });

  return xmlResponse(xml);
}
