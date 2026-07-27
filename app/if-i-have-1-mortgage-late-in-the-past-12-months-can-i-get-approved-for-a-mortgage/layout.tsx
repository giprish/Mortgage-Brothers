import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/if-i-have-1-mortgage-late-in-the-past-12-months-can-i-get-approved-for-a-mortgage/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
