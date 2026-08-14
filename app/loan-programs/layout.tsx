import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

/** Alias of /mortgage-loan-programs-arizona/ — keep unique metadata (not homepage). */
export const metadata: Metadata = {
  ...getSeoMetadata("/mortgage-loan-programs-arizona/"),
  alternates: { canonical: "/mortgage-loan-programs-arizona/" },
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
