import {
  buildLocalSitemapXml,
  resolveSiteUrl,
  xmlResponse,
} from "@/lib/sitemap";

export function GET(request: Request) {
  const siteUrl = resolveSiteUrl(request);
  return xmlResponse(buildLocalSitemapXml(siteUrl));
}
