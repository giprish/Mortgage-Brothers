import Link from "next/link";

type HeroCtaButtonsProps = {
  className?: string;
  primaryLabel?: string | null;
  primaryHref?: string;
  secondaryLabel?: string | null;
  secondaryHref?: string;
};

/**
 * Canonical hero CTAs — same on every page (matches homepage hero):
 * Start my preapproval (solid green + arrow)
 * Talk to a broker (outline + green phone icon)
 */
export default function HeroCtaButtons({
  className = "",
  primaryLabel = "Start my preapproval",
  primaryHref = "/#get-pre-approved",
  secondaryLabel = "Talk to a broker",
  secondaryHref = "tel:+16025352171",
}: HeroCtaButtonsProps) {
  const showPrimary = Boolean(primaryLabel);
  const showSecondary = Boolean(secondaryLabel);
  if (!showPrimary && !showSecondary) return null;

  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto ${className}`.trim()}
    >
      {showPrimary ? (
        <Link
          href={primaryHref}
          data-preapproval="true"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2f8f4f] hover:bg-[#277a42] text-white text-base font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-[#3fb364]/30 hover:scale-[1.02]"
        >
          <span>{primaryLabel}</span>
          <svg
            className="w-4 h-4 stroke-current fill-none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      ) : null}
      {showSecondary ? (
        <a
          href={secondaryHref}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white text-base font-medium px-6 py-3.5 rounded-full transition-all duration-200"
        >
          <svg
            className="w-4 h-4 text-[#3fb364]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>{secondaryLabel}</span>
        </a>
      ) : null}
    </div>
  );
}
