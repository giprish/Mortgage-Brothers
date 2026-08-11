import HeroCtaButtons from "./HeroCtaButtons";

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
  ctaLabel = "Start my preapproval",
  ctaHref = "/#get-pre-approved",
  secondaryCtaLabel = "Talk to a broker",
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
            <HeroCtaButtons
              primaryLabel={hasCta ? ctaLabel : null}
              primaryHref={ctaHref}
              secondaryLabel={hasSecondaryCta ? secondaryCtaLabel : null}
              secondaryHref={secondaryCtaHref}
            />
          ) : null}

          {hasNote ? (
            <p className="text-[#8a9a7a] text-[12px] font-medium text-center mt-3">{note}</p>
          ) : null}
        </div>
      </section>
    </>
  );
}
