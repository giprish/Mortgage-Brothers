import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/when-is-a-mortgage-payment-actually-considered-late/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
