import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import CityPageClient from "./CityPageClient";

type Props = {
  params: Promise<{ county: string; city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { county, city } = await params;
  return getSeoMetadata(`/service-areas/${county}/${city}`);
}

export default function Page() {
  return <CityPageClient />;
}
