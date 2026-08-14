import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pillar Posts | Arizona Mortgage Brothers",
  description:
    "In-depth Arizona mortgage guides and pillar resources from Arizona Mortgage Brothers.",
  alternates: { canonical: "/blog/" },
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
