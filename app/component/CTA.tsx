import React from "react";
import HeroCtaButtons from "./HeroCtaButtons";

export type CTAProps = {
  /** Small uppercase label above the heading. */
  eyebrow?: string;
  /** Main heading. */
  title?: string;
  /** Supporting copy under the heading. Pass `""` to hide. */
  description?: string;
  primaryLabel?: string | null;
  secondaryLabel?: string | null;
};

const DEFAULT_EYEBROW = "READY WHEN YOU ARE";
const DEFAULT_TITLE = "Let's get you home.";
const DEFAULT_DESCRIPTION =
  "Start your pre-approval in about three minutes. No cost, no obligation, no impact to your credit.";

/** Dark forest-green “Ready when you are” CTA with preapproval + broker buttons. */
export default function CTA({
  eyebrow = DEFAULT_EYEBROW,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  primaryLabel,
  secondaryLabel,
}: CTAProps) {
  return (
    <section className="w-full bg-[#052316] text-white py-14 sm:py-16 lg:py-20 text-center relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5 pointer-events-none opacity-40" />
        <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none opacity-40" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        {eyebrow ? (
          <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.15em] uppercase mb-4">
            {eyebrow}
          </p>
        ) : null}

        <h2 className="text-white text-[32px] lg:text-[44px] font-playfair font-normal leading-tight mb-4">
          {title}
        </h2>

        {description ? (
          <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.7] max-w-xl mx-auto mb-8">
            {description}
          </p>
        ) : null}

        <HeroCtaButtons
          {...(primaryLabel !== undefined ? { primaryLabel } : {})}
          {...(secondaryLabel !== undefined ? { secondaryLabel } : {})}
        />
      </div>
    </section>
  );
}
