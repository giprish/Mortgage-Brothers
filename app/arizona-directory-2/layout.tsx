import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata("/arizona-directory-2/");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
