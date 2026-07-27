import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/what-you-need-to-know-about-the-arizona-prequalification-form/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
