import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/how-to-calculate-how-much-pmi-mortgage-insurance-will-be/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
