import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/how-fast-is-too-fast-to-close-a-mortgage-loan-to-purchase-a-house/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
