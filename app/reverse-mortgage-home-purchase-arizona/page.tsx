import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = getSeoMetadata("/reverse-mortgage-home-purchase-arizona/");

export default function Page() {
  return <PageClient />;
}
