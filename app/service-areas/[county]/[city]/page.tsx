import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeoMetadata } from "@/lib/seo";
import {
  getAllCountyCityParams,
  getCityData,
} from "@/lib/cityData";
import JsonLd from "@/app/component/JsonLd";
import {
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
} from "@/lib/seo/structured-data";
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
  const cityData = getCityData(county, city);
  if (!cityData) {
    notFound();
  }

  const pathname = `/service-areas/${county}/${city}/`;
  const schemas = [
    buildBreadcrumbListSchema([
      { name: "Areas We Serve", path: "/service-areas/" },
      {
        name: cityData.countyName,
        path: `/service-areas/${cityData.countySlug}/`,
      },
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
