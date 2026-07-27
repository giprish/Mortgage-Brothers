import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/get-part-income-commission-can-use-qualify-loan/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
