import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/what-is-the-difference-between-aan-arizona-condo-and-arizona-townhome/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
