import {
  buildUrlSetXml,
  collectSitemapEntries,
  xmlResponse,
} from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  const { authors } = collectSitemapEntries();
  return xmlResponse(buildUrlSetXml(authors));
}
