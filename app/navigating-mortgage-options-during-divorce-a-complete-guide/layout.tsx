import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata("/navigating-mortgage-options-during-divorce-a-complete-guide");

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
