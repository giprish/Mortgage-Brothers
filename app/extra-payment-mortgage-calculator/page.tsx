import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = getSeoMetadata("/extra-payment-mortgage-calculator/");

export default function Page() {
  return <PageClient />;
}
