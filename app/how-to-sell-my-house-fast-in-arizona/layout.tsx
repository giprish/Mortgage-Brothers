import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata("/how-to-sell-my-house-fast-in-arizona");

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
