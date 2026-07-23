import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/videos/video-podcast-for-the-mortgage-brothers-show/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
