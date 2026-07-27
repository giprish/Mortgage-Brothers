import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/what-are-mortgage-trigger-leads/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
