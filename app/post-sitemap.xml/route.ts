import {
  buildUrlSetXml,
  collectSitemapEntries,
  xmlResponse,
} from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  const { posts } = collectSitemapEntries();
  return xmlResponse(buildUrlSetXml(posts));
}
