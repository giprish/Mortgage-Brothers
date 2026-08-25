import { headers } from "next/headers";
import {
  buildGlobalJsonLdDocuments,
  type JsonLdObject,
} from "@/lib/seo/structured-data";
import { getConfiguredSiteUrl } from "@/lib/site-url";

type JsonLdProps = {
  data?: JsonLdObject | JsonLdObject[];
};

/**
 * Renders one or more JSON-LD script tags.
 * When `data` is omitted, emits the sitewide Yoast-style graph + rich Organization.
 */
export default async function JsonLd({ data }: JsonLdProps) {
  let blocks: JsonLdObject[];

  if (data) {
    blocks = Array.isArray(data) ? data : [data];
  } else {
    const headerStore = await headers();
    const pathname = headerStore.get("x-pathname") || "/";
    blocks = buildGlobalJsonLdDocuments({
      pathname,
      siteUrl: getConfiguredSiteUrl(),
    });
  }

  return (
    <>
      {blocks.map((block, index) => (
        <script
          // Stable enough for static schema payloads; index is intentional.
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
