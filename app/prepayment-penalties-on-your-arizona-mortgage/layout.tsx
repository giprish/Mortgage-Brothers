import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/prepayment-penalties-on-your-arizona-mortgage/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
