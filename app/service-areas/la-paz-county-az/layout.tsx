import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata("/service-areas/la-paz-county-az");

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
