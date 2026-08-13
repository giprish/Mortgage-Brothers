import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import PageClient from "../down-payment-calculator/PageClient";

export const metadata: Metadata = getSeoMetadata("/down-payment-calculator-1/");

export default function Page() {
  return <PageClient />;
}
