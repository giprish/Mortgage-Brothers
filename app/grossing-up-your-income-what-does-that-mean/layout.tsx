import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/grossing-up-your-income-what-does-that-mean/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
