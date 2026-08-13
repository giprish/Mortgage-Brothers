import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = getSeoMetadata("/videos/reverse-mortgage/");

export default function Page() {
  return <PageClient />;
}
