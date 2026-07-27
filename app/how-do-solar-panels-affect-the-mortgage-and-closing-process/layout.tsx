import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/how-do-solar-panels-affect-the-mortgage-and-closing-process/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
