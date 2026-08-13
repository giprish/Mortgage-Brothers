import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = getSeoMetadata("/author/eddie-knoell/");

export default function Page() {
  return <PageClient />;
}
