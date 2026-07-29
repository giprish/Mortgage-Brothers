import { COMPANY } from "@/lib/company";

const FALLBACK_SITE_URL = COMPANY.siteUrl;

function firstCommaSeparatedValue(value: string | null): string | undefined {
  if (!value) return undefined;
  return value.split(",")[0]?.trim();
}

/**
 * Resolve the externally-visible site origin for the current request.
 *
 * Uses proxy headers when present (Vercel / reverse-proxies), and falls back to
 * `COMPANY.siteUrl` when host/proto headers are not available (e.g. build-time).
 */
export function resolveSiteUrlFromHeaders(headers: Headers): string {
  const forwardedHost = firstCommaSeparatedValue(headers.get("x-forwarded-host"));
  const host = forwardedHost ?? firstCommaSeparatedValue(headers.get("host"));

  if (!host) return FALLBACK_SITE_URL;

  const forwardedProto = firstCommaSeparatedValue(headers.get("x-forwarded-proto"));
  const proto =
    forwardedProto ??
    (host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https");

  return `${proto}://${host}`;
}

export function resolveSiteUrl(request: Request): string {
  return resolveSiteUrlFromHeaders(request.headers);
}

export { FALLBACK_SITE_URL };

