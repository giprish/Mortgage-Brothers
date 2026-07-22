import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata("/who-qualifies-for-a-reverse-mortgage-understanding-eligibility-in-requirements/");

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
