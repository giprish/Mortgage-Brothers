import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata("/first-time-home-buyer-arizona-guide");

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
