import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ category: string; article: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, article } = await params;
  const path = `/resources/${category}/${article}/`;
  return getSeoMetadata(path);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
