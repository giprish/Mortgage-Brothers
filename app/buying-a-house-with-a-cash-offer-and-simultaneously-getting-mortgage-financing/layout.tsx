import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/buying-a-house-with-a-cash-offer-and-simultaneously-getting-mortgage-financing/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
