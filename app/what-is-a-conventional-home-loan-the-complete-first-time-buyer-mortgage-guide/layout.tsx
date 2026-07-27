import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/what-is-a-conventional-home-loan-the-complete-first-time-buyer-mortgage-guide/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
