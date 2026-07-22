import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import CityPageClient from "./CityPageClient";

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  return getSeoMetadata(`/service-areas/maricopa-county-az/${city}`);
}

export default function Page() {
  return <CityPageClient />;
}
