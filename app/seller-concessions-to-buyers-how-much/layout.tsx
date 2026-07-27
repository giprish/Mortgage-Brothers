import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata("/seller-concessions-to-buyers-how-much/");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
