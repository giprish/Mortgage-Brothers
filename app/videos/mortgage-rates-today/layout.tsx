import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata("/videos/mortgage-rates-today/");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
