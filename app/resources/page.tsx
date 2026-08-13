import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import BlogPage from "../blog/page";

export const metadata: Metadata = getSeoMetadata("/resources/");

export default BlogPage;
