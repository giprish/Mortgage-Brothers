import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/arizona-real-estate-trends-in-2026-predicting-mortgage-rates-for-the-coming-year/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
