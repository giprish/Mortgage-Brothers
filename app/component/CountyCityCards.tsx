import Link from "next/link";
import { slugify } from "@/lib/cityData";

export type CountyCityCardItem = {
  name: string;
  /** Preferred description field used by most county pages. */
  description?: string;
  /** Alternate field used by getCountyCitiesDetails(). */
  desc?: string;
  /** Optional canonical slug; falls back to slugify(name). */
  slug?: string;
};

function LocationPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-brand-green-accent flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function CountyCityCards({
  countySlug,
  cities,
}: {
  countySlug: string;
  cities: CountyCityCardItem[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {cities.map((city) => {
        const citySlug = city.slug || slugify(city.name);
        const description = city.description || city.desc || "";

        return (
          <Link
            key={citySlug}
            href={`/service-areas/${countySlug}/${citySlug}/`}
            className="bg-[#faf7f0] rounded-2xl p-6 lg:p-7 border border-[#e8e0d0]/50 shadow-sm flex flex-col hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#1a3a1a]/5 hover:border-brand-green-accent/30 active:scale-[0.98] active:translate-y-0 cursor-pointer transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-4 text-brand-green-deep">
              <LocationPinIcon />
              <h3 className="text-[17px] font-bold tracking-tight">{city.name}</h3>
            </div>
            {description ? (
              <p className="text-brand-text-muted text-[13.5px] lg:text-[14px] leading-relaxed">
                {description}
              </p>
            ) : null}
          </Link>
        );
      })}
    </div>
  );
}
