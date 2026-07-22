import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata("/how-to-get-a-mortgage-in-arizona-with-fair-or-improving-credit/");

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
