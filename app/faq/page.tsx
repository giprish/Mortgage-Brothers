import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import JsonLd from "@/app/component/JsonLd";
import { buildFaqPageSchema } from "@/lib/seo/structured-data";
import { faqSchemaItems } from "./faqSchemaData";
import PageClient from "./PageClient";

export const metadata: Metadata = getSeoMetadata("/faq/");

const faqJsonLd = buildFaqPageSchema([...faqSchemaItems]);

export default function Page() {
  return (
    <>
      {faqJsonLd ? <JsonLd data={faqJsonLd} /> : null}
      <PageClient />
    </>
  );
}
