import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = getSeoMetadata("/mortgage-for-good-credit/");

export default function Page() {
  return <PageClient />;
}
