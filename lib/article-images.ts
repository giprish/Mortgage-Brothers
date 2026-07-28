import articleImages from "./article-images.json";

const imageMap = articleImages as Record<string, string>;

/** Resolve a local article card/hero image path from an article href. */
export function getArticleImage(href?: string | null): string | null {
  if (!href) return null;
  const normalized = href.startsWith("/") ? href : `/${href}`;
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  const withoutSlash = withSlash.replace(/\/$/, "") || "/";
  return imageMap[withSlash] || imageMap[withoutSlash] || null;
}
