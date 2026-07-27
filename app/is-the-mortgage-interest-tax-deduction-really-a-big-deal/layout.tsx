import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/is-the-mortgage-interest-tax-deduction-really-a-big-deal/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
