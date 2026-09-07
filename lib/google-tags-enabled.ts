/**
 * True only when NEXT_PUBLIC_ENABLE_GOOGLE_TAGS is exactly "true".
 * Production go-live flag: enables Google tags/verification and sitewide index/follow.
 */
export function isGoogleTagsEnabled(): boolean {
  return process.env.NEXT_PUBLIC_ENABLE_GOOGLE_TAGS === "true";
}
