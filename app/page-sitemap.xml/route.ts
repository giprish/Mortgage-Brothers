import {
  buildUrlSetXml,
  collectSitemapEntries,
  resolveSiteUrl,
  xmlResponse,
} from "@/lib/sitemap";

export function GET(request: Request) {
  const siteUrl = resolveSiteUrl(request);
  const { pages } = collectSitemapEntries(siteUrl);
  return xmlResponse(buildUrlSetXml(pages));
}
