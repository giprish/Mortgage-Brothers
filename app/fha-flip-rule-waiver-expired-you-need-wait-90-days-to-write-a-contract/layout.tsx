import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/fha-flip-rule-waiver-expired-you-need-wait-90-days-to-write-a-contract/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
