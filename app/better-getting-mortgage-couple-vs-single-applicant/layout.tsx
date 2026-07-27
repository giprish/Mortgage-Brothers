import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/better-getting-mortgage-couple-vs-single-applicant/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

