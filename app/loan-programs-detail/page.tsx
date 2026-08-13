import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = getSeoMetadata("/loan-programs-detail/");

export default function Page() {
  return <PageClient />;
}
