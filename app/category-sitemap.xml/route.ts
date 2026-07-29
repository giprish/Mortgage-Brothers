import {
  buildUrlSetXml,
  collectSitemapEntries,
  xmlResponse,
} from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  const { categories } = collectSitemapEntries();
  return xmlResponse(buildUrlSetXml(categories));
}
