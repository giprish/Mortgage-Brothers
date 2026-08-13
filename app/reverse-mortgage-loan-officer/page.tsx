import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = getSeoMetadata("/reverse-mortgage-loan-officer/");

export default function Page() {
  return <PageClient />;
}
