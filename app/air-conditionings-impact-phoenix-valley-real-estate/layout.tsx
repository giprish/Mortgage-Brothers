import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/air-conditionings-impact-phoenix-valley-real-estate/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
