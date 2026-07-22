import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata("/reverse-mortgage-home-purchase-arizona/");

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
