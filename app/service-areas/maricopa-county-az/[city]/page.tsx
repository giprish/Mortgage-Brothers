import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeoMetadata } from "@/lib/seo";
import { getCityData, getCitySlugsForCounty } from "@/lib/cityData";
import CityPageClient from "./CityPageClient";

type Props = {
  params: Promise<{ city: string }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getCitySlugsForCounty("maricopa-county-az").map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  return getSeoMetadata(`/service-areas/maricopa-county-az/${city}/`);
}

export default async function Page({ params }: Props) {
  const { city } = await params;
  if (!getCityData("maricopa-county-az", city)) {
    notFound();
  }
  return <CityPageClient />;
}
