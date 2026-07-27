import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata("/arizona-mortgage-closing-costs/");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
