import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...getSeoMetadata("/down-payment-calculator/"),
  alternates: { canonical: "/down-payment-calculator/" },
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
