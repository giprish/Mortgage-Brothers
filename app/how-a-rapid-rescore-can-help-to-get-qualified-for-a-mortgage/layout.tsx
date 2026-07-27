import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/how-a-rapid-rescore-can-help-to-get-qualified-for-a-mortgage/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
