import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata(
  "/how-does-my-car-loan-payment-affect-my-mortgage/"
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
