import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = getSeoMetadata("/videos/video-podcast-for-the-mortgage-brothers-show/");

export default function Page() {
  return <PageClient />;
}
