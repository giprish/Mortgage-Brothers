import {
  buildGlobalGraph,
  type JsonLdObject,
} from "@/lib/seo/structured-data";

type JsonLdProps = {
  data?: JsonLdObject | JsonLdObject[];
};

/**
 * Renders one or more JSON-LD script tags.
 * When `data` is omitted, emits the sitewide Organization + WebSite graph.
 */
export default function JsonLd({ data }: JsonLdProps) {
  const payload = data ?? buildGlobalGraph();
  const blocks = Array.isArray(payload) ? payload : [payload];

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
