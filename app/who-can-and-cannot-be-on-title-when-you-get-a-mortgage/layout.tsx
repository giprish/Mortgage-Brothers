import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/who-can-and-cannot-be-on-title-when-you-get-a-mortgage/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
