import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/how-does-a-mortgage-apr-work-and-what-does-it-mean/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
