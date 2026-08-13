import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeoMetadata } from "@/lib/seo";
import {
  getAllCountySlugs,
  getCountyCitiesDetails,
  getCountyName,
} from "@/lib/cityData";
import CountyPageClient from "./CountyPageClient";

type Props = {
  params: Promise<{ county: string }>;
};

export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllCountySlugs().map((county) => ({ county }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { county } = await params;
  return getSeoMetadata(`/service-areas/${county}/`);
}

const regionMap: Record<string, string> = {
  "maricopa-county-az": "Greater Phoenix",
  "pima-county-az": "Southern Arizona",
  "pinal-county-az": "Greater Phoenix",
  "yavapai-county-az": "Northern Arizona",
  "coconino-county-az": "Northern Arizona",
  "navajo-county-az": "Northern Arizona",
  "apache-county-az": "Northern Arizona",
  "gila-county-az": "Northern Arizona",
  "cochise-county-az": "Southern Arizona",
  "graham-county-az": "Southern Arizona",
  "greenlee-county-az": "Southern Arizona",
  "santa-cruz-county-az": "Southern Arizona",
  "mohave-county-az": "Western Arizona",
  "la-paz-county-az": "Western Arizona",
  "yuma-county-az": "Western Arizona",
};

export default async function Page({ params }: Props) {
  const { county } = await params;
  const countyName = getCountyName(county);
  if (!countyName) {
    notFound();
  }
  const cityDetails = getCountyCitiesDetails(county);
  return (
    <CountyPageClient
      countySlug={county}
      countyName={countyName}
      region={regionMap[county] || ""}
      cityDetails={cityDetails}
    />
  );
}
