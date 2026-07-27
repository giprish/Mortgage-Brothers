import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/understanding-amortization-chart/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
