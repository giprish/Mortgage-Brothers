import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/arizona-real-estate-capital-gains-is-back/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
