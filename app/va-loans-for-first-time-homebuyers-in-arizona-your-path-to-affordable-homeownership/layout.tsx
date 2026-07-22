import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata("/va-loans-for-first-time-homebuyers-in-arizona-your-path-to-affordable-homeownership/");

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
