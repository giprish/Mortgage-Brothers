import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata("/what-is-a-jumbo-loan-everything-you-need-to-know-before-applying");

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
