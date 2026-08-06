import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const slug = category.replace(/\/$/, "");
  const path = `/resources/${slug}/`;
  return getSeoMetadata(path);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
