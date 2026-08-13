import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = getSeoMetadata("/videos/important-mortgage-home-loan-topics/");

export default function Page() {
  return <PageClient />;
}
