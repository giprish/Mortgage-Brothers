import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/can-i-relocate-and-get-a-mortgage-while-working-remotely-out-of-state/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
