import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata("/home-purchase-closing-cost-calculator");

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
