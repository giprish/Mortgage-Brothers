import Link from "next/link";
import {
  SHARED_EXPLORE_CALCULATORS,
  type ExploreCalculatorItem,
} from "@/lib/calculatorPageContent";

export type ExploreCalculatorsGridProps = {
  title: string;
  intro: string;
  /** Defaults to the shared live 10-calculator list. */
  items?: ExploreCalculatorItem[];
};

function CalculatorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3fb364"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="4" y="2" width="16" height="20" rx="2" fill="#eaf3e3" />
      <path d="M8 6h8M8 10h3M8 14h8M8 18h5" />
    </svg>
  );
}

export default function ExploreCalculatorsGrid({
  title,
  intro,
  items = SHARED_EXPLORE_CALCULATORS,
}: ExploreCalculatorsGridProps) {
  return (
    <section className="w-full bg-[#fcf9f3] border-t border-[#e8e0d0]/40">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-14 lg:py-16">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-[#052316] text-[26px] sm:text-[30px] lg:text-[34px] font-playfair font-normal leading-tight mb-4">
            {title}
          </h2>
          <div className="h-1 w-12 rounded-full bg-[#3fb364] mx-auto mb-5" aria-hidden />
          <p className="text-[#4e5b4e] text-[14px] sm:text-[15px] leading-[1.75] max-w-3xl mx-auto">
            {intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {items.map((item) => (
            <article
              key={item.href}
              className="flex gap-4 items-start min-w-0"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#3fb364]/20 flex items-center justify-center shrink-0 shadow-sm">
                <CalculatorIcon />
              </div>
              <div className="min-w-0">
                <h3 className="text-[15px] sm:text-[16px] font-bold leading-snug mb-2">
                  <Link
                    href={item.href}
                    prefetch={false}
                    className="text-[#3fb364] hover:text-[#2d8545] transition-colors"
                  >
                    {item.title}
                  </Link>
                </h3>
                <ul className="space-y-1.5 text-[#4e5b4e] text-[13px] sm:text-[14px] leading-[1.6] list-disc pl-4 marker:text-[#3fb364]/70">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
