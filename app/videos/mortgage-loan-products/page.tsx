import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = getSeoMetadata("/videos/mortgage-loan-products/");

export default function Page() {
  return <PageClient />;
}
