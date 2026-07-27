import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/what-are-closing-costs-on-a-home-purchase/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
