import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata("/top-7-reasons-arizona-investment-home-buyers-choose-private-money-lenders");

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
