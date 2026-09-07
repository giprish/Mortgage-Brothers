import pageTestimonialsJson from "@/lib/seo/page-testimonials.json";

export type PageTestimonial = {
  author: string;
  reviewBody: string;
  ratingValue?: string | number;
};

/** Visible city-page review widget (matches CityPageClient). */
export const CITY_REVIEW_WIDGET = {
  ratingValue: "5",
  bestRating: "5",
  worstRating: "1",
  reviewCount: "450",
  reviews: [
    {
      author: "T",
      reviewBody: "Mortgage Brothers were great through the whole process.",
      ratingValue: "5",
    },
    {
      author: "EH",
      reviewBody:
        "Mortgage Brothers are a really great company, they help you with everything and make it easy.",
      ratingValue: "5",
    },
    {
      author: "J",
      reviewBody:
        "Eddie and the team have helped me with several mortgages over the years.",
      ratingValue: "5",
    },
  ] satisfies PageTestimonial[],
} as const;

/** Pathname (trailing slash) → testimonials shown via CountyTestimonials. */
export const PAGE_TESTIMONIALS = pageTestimonialsJson as Record<
  string,
  PageTestimonial[]
>;

export function getPageTestimonials(
  pathname: string,
): PageTestimonial[] | undefined {
  const path =
    !pathname || pathname === "/"
      ? "/"
      : pathname.endsWith("/")
        ? pathname
        : `${pathname}/`;
  const normalized = path === "//" ? "/" : path;
  return PAGE_TESTIMONIALS[normalized];
}

/** `/service-areas/{county}/{city}/` city detail pages. */
export function isServiceAreaCityPath(pathname: string): boolean {
  const parts = pathname.split("/").filter(Boolean);
  return parts.length === 3 && parts[0] === "service-areas";
}
