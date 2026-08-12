import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

/** Alias of /blog/ — noindex duplicate, point canonical to blog. */
export const metadata: Metadata = {
  ...getSeoMetadata("/blog/"),
  alternates: { canonical: "/blog/" },
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
