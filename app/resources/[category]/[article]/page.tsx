import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

type Props = {
  params: Promise<{ category: string; article: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, article } = await params;
  return getSeoMetadata(`/resources/${category}/${article}/`);
}

export default function Page() {
  return <PageClient />;
}
