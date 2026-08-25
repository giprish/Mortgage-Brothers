import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import { LOAN_OFFICERS } from "@/lib/company";
import JsonLd from "@/app/component/JsonLd";
import { buildPersonSchema } from "@/lib/seo/structured-data";
import PageClient from "./PageClient";

export const metadata: Metadata = getSeoMetadata("/author/thomas-knoell/");

const personJsonLd = {
  "@context": "https://schema.org",
  ...buildPersonSchema({
    name: LOAN_OFFICERS.thomas.name,
    path: LOAN_OFFICERS.thomas.authorPath,
    jobTitle: LOAN_OFFICERS.thomas.title,
    description:
      "Senior Loan Officer and Co-Founder of Mortgage Brothers LLC in Phoenix, Arizona.",
  }),
};

export default function Page() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <PageClient />
    </>
  );
}
