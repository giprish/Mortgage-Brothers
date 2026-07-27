import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/lsu-forms-loan-status-updates-and-what-you-need-to-know/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
