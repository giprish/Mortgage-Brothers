import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = getSeoMetadata("/how-to-sell-my-house-fast-in-arizona/");

export default function Page() {
  return <PageClient />;
}
