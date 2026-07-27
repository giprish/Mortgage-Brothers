import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/buying-or-selling-personal-property-with-your-home-sale-must-watch-this-first/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
