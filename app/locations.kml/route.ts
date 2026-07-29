import {
  buildLocationsKml,
  resolveSiteUrl,
  xmlResponse,
} from "@/lib/sitemap";

export function GET(request: Request) {
  const siteUrl = resolveSiteUrl(request);
  return xmlResponse(
    buildLocationsKml(siteUrl),
    "application/vnd.google-earth.kml+xml; charset=utf-8",
  );
}
