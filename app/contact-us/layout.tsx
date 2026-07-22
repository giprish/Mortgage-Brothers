import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata("/contact-us/");

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
