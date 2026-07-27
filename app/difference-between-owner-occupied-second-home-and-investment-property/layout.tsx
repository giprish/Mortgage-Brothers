import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/difference-between-owner-occupied-second-home-and-investment-property/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
