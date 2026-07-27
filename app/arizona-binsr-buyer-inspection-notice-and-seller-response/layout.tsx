import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/arizona-binsr-buyer-inspection-notice-and-seller-response/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
