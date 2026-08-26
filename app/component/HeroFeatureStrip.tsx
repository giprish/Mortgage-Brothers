import React from "react";

export type HeroFeatureItem = {
  text: string;
  /** Optional custom icon. Defaults to a circular green checkmark. */
  icon?: React.ReactNode;
};

type HeroFeatureStripProps = {
  /** Typically three short benefit lines shown under the loan-program hero. */
  items: Array<string | HeroFeatureItem>;
  className?: string;
};

const DefaultCheckIcon = () => (
  <svg
    className="w-5 h-5 text-[#3fb364] shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

function normalizeItem(item: string | HeroFeatureItem): HeroFeatureItem {
  return typeof item === "string" ? { text: item } : item;
}

/**
 * Light feature / trust strip under LoanProgramHero.
 * Mobile-first: stacked list on small screens, 3-column row from `md` up.
 */
export default function HeroFeatureStrip({
  items,
  className,
}: HeroFeatureStripProps) {
  const normalized = items.map(normalizeItem);

  return (
    <section
      className={`w-full bg-[#eeeff4] border-b border-[#e0e2e8] loan-strip${
        className ? ` ${className}` : ""
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
        {normalized.map((item) => (
          <div key={item.text} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
              {item.icon ?? <DefaultCheckIcon />}
            </div>
            <h3 className="text-[#333333] text-[15px] sm:text-[16px] font-semibold leading-snug">
              {item.text}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
