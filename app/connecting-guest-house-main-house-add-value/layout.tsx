import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata("/connecting-guest-house-main-house-add-value/");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
