import {
  buildUrlSetXml,
  collectSitemapEntries,
  resolveSiteUrl,
  xmlResponse,
} from "@/lib/sitemap";

export function GET(request: Request) {
  const siteUrl = resolveSiteUrl(request);
  const { categories } = collectSitemapEntries(siteUrl);
  return xmlResponse(buildUrlSetXml(categories));
}
