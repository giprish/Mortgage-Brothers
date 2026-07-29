import {
  buildUrlSetXml,
  collectSitemapEntries,
  xmlResponse,
} from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  const { pages } = collectSitemapEntries();
  return xmlResponse(buildUrlSetXml(pages));
}
