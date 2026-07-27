import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/what-if-my-spouse-dies-and-im-not-on-the-mortgage/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
