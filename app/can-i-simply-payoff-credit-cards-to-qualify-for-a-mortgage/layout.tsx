import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/can-i-simply-payoff-credit-cards-to-qualify-for-a-mortgage/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
