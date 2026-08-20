import type { Metadata } from "next";
import {
  OG_LOCALE,
  OG_SITE_NAME,
  TWITTER_HANDLE,
  canonicalUrl,
} from "@/lib/seo";

const blogCanonical = canonicalUrl("/blog/");

export const metadata: Metadata = {
  title: "Pillar Posts | Mortgage Brothers LLC",
  description:
    "In-depth Arizona mortgage guides and pillar resources from Mortgage Brothers LLC.",
  alternates: { canonical: blogCanonical },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Pillar Posts | Mortgage Brothers LLC",
    description:
      "In-depth Arizona mortgage guides and pillar resources from Mortgage Brothers LLC.",
    siteName: OG_SITE_NAME,
    locale: OG_LOCALE,
    url: blogCanonical,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pillar Posts | Mortgage Brothers LLC",
    description:
      "In-depth Arizona mortgage guides and pillar resources from Mortgage Brothers LLC.",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
