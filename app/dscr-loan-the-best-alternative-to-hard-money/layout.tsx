import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/dscr-loan-the-best-alternative-to-hard-money/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
