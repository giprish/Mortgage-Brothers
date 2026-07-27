import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/delayed-financing-how-to-get-cashout-without-waiting-6-months-seasoning/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
