import Link from "next/link";

type LoanProgramHeroProps = {
  title: string;
  subtitle: string;
  /** @deprecated Unused — kept optional for older call sites */
  imageSrc?: string;
  ctaLabel?: string;
  ctaHref?: string;
  note?: string;
};

/**
 * Shared page hero — solid brand-green-deep bg, centered Playfair title, btn-primary CTA.
 */
export default function LoanProgramHero({
  title,
  subtitle,
  ctaLabel = "Start My Pre-Approval",
  ctaHref = "/#get-pre-approved",
  note = "3 min - no credit impact",
}: LoanProgramHeroProps) {
  return (
    <section className="w-full bg-brand-green-deep text-white py-16 lg:py-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5 opacity-40" />
        <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5 opacity-40" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center pt-[56px] lg:pt-[40px]">
        <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">
          {title}
        </h1>

        <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>

        {ctaLabel ? (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-4">
            <Link
              href={ctaHref}
              className="w-full sm:w-auto btn-primary hover:shadow-brand-green-accent/20 group"
            >
              {ctaLabel}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-0.5 transition-transform duration-200"
                aria-hidden
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        ) : null}

        {note ? (
          <p className="text-[#8a9a7a] text-[12px] font-medium">{note}</p>
        ) : null}
      </div>
    </section>
  );
}
