import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/how-high-will-a-lender-allow-your-deductible-to-be/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
