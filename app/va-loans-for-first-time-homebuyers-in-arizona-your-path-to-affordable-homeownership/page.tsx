import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = getSeoMetadata("/va-loans-for-first-time-homebuyers-in-arizona-your-path-to-affordable-homeownership/");

export default function Page() {
  return <PageClient />;
}
