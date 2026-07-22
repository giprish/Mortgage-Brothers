import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata("/conventional-home-loans-vs-fha-loans-which-is-right-for-you/");

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
