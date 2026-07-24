import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata("/credit-score-quiz/");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
