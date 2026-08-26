import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import { getServiceAreasDirectory } from "@/lib/cityData";
import PageClient from "./PageClient";

export const metadata: Metadata = getSeoMetadata("/service-areas/");

export default function Page() {
  const cities = getServiceAreasDirectory();
  return <PageClient cities={cities} />;
}
