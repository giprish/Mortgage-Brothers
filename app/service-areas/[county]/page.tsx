import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeoMetadata } from "@/lib/seo";
import {
  getAllCountySlugs,
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

export default async function Page({ params }: Props) {
  const { county } = await params;
  if (!getCountyName(county)) {
    notFound();
  }
  return <CountyPageClient />;
}
