import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = getSeoMetadata("/navigating-mortgage-options-during-divorce-a-complete-guide/");

export default function Page() {
  return <PageClient />;
}
