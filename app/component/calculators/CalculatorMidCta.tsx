import Link from "next/link";
import type { CalculatorMidCtaContent } from "@/lib/calculatorPageContent";

export type CalculatorMidCtaProps = CalculatorMidCtaContent;

/**
 * Green mid-page CTA band — sits above the explore-calculators grid (live pattern).
 * Mobile-first: stacked, centered copy + full-width button on small screens.
 */
export default function CalculatorMidCta({
  title,
  description,
  ctaLabel,
  ctaHref = "#get-pre-approved",
}: CalculatorMidCtaProps) {
  return (
    <section className="w-full bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12">
        <div
          className="rounded-2xl text-center shadow-md px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12"
          style={{ backgroundColor: "#548206", color: "#ffffff" }}
        >
          <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] font-bold leading-tight mb-3 sm:mb-4 text-white">
            {title}
          </h2>
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.7] max-w-2xl mx-auto mb-6 sm:mb-8 text-white/95">
            {description}
          </p>
          <Link
            href={ctaHref}
            prefetch={false}
            data-preapproval={ctaHref === "#get-pre-approved" ? "true" : undefined}
            className="inline-flex items-center justify-center min-h-11 w-full sm:w-auto px-7 sm:px-8 py-3 rounded-md border-2 border-white bg-transparent text-white text-[14px] sm:text-[15px] font-bold hover:bg-white/10 transition-colors"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
