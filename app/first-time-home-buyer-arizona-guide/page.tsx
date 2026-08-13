import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = getSeoMetadata("/first-time-home-buyer-arizona-guide/");

export default function Page() {
  return <PageClient />;
}
