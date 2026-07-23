import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/videos/phoenix-market-and-real-estate-updates/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
