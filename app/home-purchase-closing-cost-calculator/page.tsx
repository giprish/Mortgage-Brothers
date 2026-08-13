import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = getSeoMetadata("/home-purchase-closing-cost-calculator/");

export default function Page() {
  return <PageClient />;
}
