import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import PillarPostPage from "../pillar-post/page";

export const metadata: Metadata = getSeoMetadata("/pillar-posts/");

/** Alias of /pillar-post/ with its own canonical metadata */
export default PillarPostPage;
