import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/videos/important-mortgage-home-loan-topics/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
