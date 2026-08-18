import { buildLlmsTxt } from "@/lib/llms";
import { resolveSiteUrl } from "@/lib/sitemap";

export function GET(request: Request) {
  const siteUrl = resolveSiteUrl(request);
  const body = buildLlmsTxt(siteUrl);

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
