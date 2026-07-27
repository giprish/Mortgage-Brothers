import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/what-is-an-example-of-a-mortgage-recast/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
