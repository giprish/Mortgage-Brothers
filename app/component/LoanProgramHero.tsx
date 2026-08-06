import Link from "next/link";

type LoanProgramHeroProps = {
  title: string;
  subtitle: string;
  /** @deprecated Unused — kept optional for older call sites */
  imageSrc?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  note?: string;
};

/**
 * Shared page hero — solid brand-green-deep bg, centered Playfair title.
 * Renders both primary action ("Start My Pre-Approval") and phone call action ("Talk to a Broker").
 */
export default function LoanProgramHero({
  title,
  subtitle,
  ctaLabel = "Start My Pre-Approval",
  ctaHref = "/#get-pre-approved",
  secondaryCtaLabel = "Talk to a Broker",
  secondaryCtaHref = "tel:+16025352171",
  note = "3 min - no credit impact",
}: LoanProgramHeroProps) {
  const hasCta = Boolean(ctaLabel);
  const hasSecondaryCta = Boolean(secondaryCtaLabel);
  const hasNote = Boolean(note);
  const hasFooter = hasCta || hasSecondaryCta || hasNote;

  return (
    <>
      {/* Reserves space for the fixed navbar so hero padding is not mixed with nav height */}
      <div className="h-[64px] sm:h-[72px] bg-[#08271B]" aria-hidden />

      <section className="w-full bg-brand-green-deep text-white py-10 sm:py-12 lg:py-14 text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <div className="absolute -bottom-36 -left-36 w-[min(360px,90vw)] h-[360px] rounded-full border border-white/5 opacity-40" />
          <div className="absolute -top-36 -right-36 w-[min(400px,90vw)] h-[400px] rounded-full border border-white/5 opacity-40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center min-w-0">
          <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-4 sm:mb-5 max-w-3xl mx-auto text-center break-words">
            {title}
          </h1>

          <p
            className={`text-brand-text-light text-[15px] lg:text-[16px] leading-[1.7] max-w-2xl mx-auto text-center ${
              hasFooter ? "mb-8" : "mb-0"
            }`}
          >
            {subtitle}
          </p>

          {hasCta || hasSecondaryCta ? (
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto ${hasNote ? "mb-4" : "mb-0"}`}>
              {hasCta && (
                <Link
                  href={ctaHref}
                  data-preapproval="true"
                  className="w-full sm:w-auto btn-primary group"
                >
                  {ctaLabel} →
                </Link>
              )}

              {hasSecondaryCta && (
                <a
                  href={secondaryCtaHref}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-[15px] font-semibold px-7 py-3.5 rounded-full border border-white/20 transition-all"
                >
                  {secondaryCtaLabel}
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
                    aria-hidden
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </a>
              )}
            </div>
          ) : null}

          {hasNote ? (
            <p className="text-[#8a9a7a] text-[12px] font-medium text-center">{note}</p>
          ) : null}
        </div>
      </section>
    </>
  );
}
