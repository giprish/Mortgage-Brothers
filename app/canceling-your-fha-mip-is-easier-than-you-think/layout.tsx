import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/canceling-your-fha-mip-is-easier-than-you-think/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
