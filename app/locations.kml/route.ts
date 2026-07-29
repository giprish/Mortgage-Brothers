import { buildLocationsKml, xmlResponse } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  return xmlResponse(
    buildLocationsKml(),
    "application/vnd.google-earth.kml+xml; charset=utf-8",
  );
}
