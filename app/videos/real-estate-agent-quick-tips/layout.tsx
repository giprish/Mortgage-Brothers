import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/videos/real-estate-agent-quick-tips/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
