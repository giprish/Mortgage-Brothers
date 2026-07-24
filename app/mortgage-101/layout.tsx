import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata("/mortgage-101/");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
