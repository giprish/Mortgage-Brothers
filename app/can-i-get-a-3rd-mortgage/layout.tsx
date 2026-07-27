import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata("/can-i-get-a-3rd-mortgage/");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
