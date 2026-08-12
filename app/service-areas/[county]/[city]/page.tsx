import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeoMetadata } from "@/lib/seo";
import {
  getAllCountyCityParams,
  getCityData,
} from "@/lib/cityData";
import CityPageClient from "./CityPageClient";

type Props = {
  params: Promise<{ county: string; city: string }>;
};

export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllCountyCityParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { county, city } = await params;
  return getSeoMetadata(`/service-areas/${county}/${city}/`);
}

export default async function Page({ params }: Props) {
  const { county, city } = await params;
  if (!getCityData(county, city)) {
    notFound();
  }
  return <CityPageClient />;
}
