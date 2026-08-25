import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import JsonLd from "@/app/component/JsonLd";
import {
  buildFaqPageSchema,
  buildVideoObjectSchema,
} from "@/lib/seo/structured-data";
import { faqSchemaItems } from "./faqs";
import PageClient from "./PageClient";

export const metadata: Metadata = getSeoMetadata("/va-loans-arizona/");

const faqJsonLd = buildFaqPageSchema(faqSchemaItems);
const videoJsonLd = buildVideoObjectSchema("/va-loans-arizona/");

export default function Page() {
  return (
    <>
      {faqJsonLd ? <JsonLd data={faqJsonLd} /> : null}
      {videoJsonLd ? <JsonLd data={videoJsonLd} /> : null}
      <PageClient />
    </>
  );
}
