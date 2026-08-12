import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ category: string }>;
};

const RESOURCE_CATEGORIES = [
  "mortgage-basics",
  "fha-loans",
  "real-estate-mortgages",
  "specialty-loans",
  "homeownership-tips",
  "process-guidance",
] as const;

export function generateStaticParams() {
  return RESOURCE_CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const slug = category.replace(/\/$/, "");
  return getSeoMetadata(`/resources/${slug}/`);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
