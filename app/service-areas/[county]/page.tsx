import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import CountyPageClient from "./CountyPageClient";

type Props = {
  params: Promise<{ county: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { county } = await params;
  return getSeoMetadata(`/service-areas/${county}`);
}

export default function Page() {
  return <CountyPageClient />;
}
