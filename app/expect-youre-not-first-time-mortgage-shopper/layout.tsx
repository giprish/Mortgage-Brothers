import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/expect-youre-not-first-time-mortgage-shopper/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
