import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeoMetadata } from "@/lib/seo";
import { getCityData, getCitySlugsForCounty } from "@/lib/cityData";
import JsonLd from "@/app/component/JsonLd";
import {
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
} from "@/lib/seo/structured-data";
import CityPageClient from "../../[county]/[city]/CityPageClient";

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
  const cityData = getCityData("maricopa-county-az", city);
  if (!cityData) {
    notFound();
  }

  const pathname = `/service-areas/maricopa-county-az/${city}/`;
  const schemas = [
    buildBreadcrumbListSchema([
      { name: "Areas We Serve", path: "/service-areas/" },
      { name: "Maricopa County", path: "/service-areas/maricopa-county-az/" },
      { name: cityData.name, path: pathname },
    ]),
    buildFaqPageSchema(cityData.faqs),
  ].flatMap((schema) => (schema ? [schema] : []));

  return (
    <>
      {schemas.length > 0 ? <JsonLd data={schemas} /> : null}
      <CityPageClient cityData={cityData} />
    </>
  );
}
