import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/how-to-skip-2-payments-on-your-mortgage/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
