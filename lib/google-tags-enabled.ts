/** True only when NEXT_PUBLIC_ENABLE_GOOGLE_TAGS is exactly "true". */
export function isGoogleTagsEnabled(): boolean {
  return process.env.NEXT_PUBLIC_ENABLE_GOOGLE_TAGS === "true";
}
