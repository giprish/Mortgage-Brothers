import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/arizona-mortgage-rates-and-the-interest-deduction/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
