import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = getSeoMetadata("/service-areas/maricopa-county-az-2/");

export default function Page() {
  return <PageClient />;
}
