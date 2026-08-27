import React from "react";
import type {
  CalculatorFeature,
  CalculatorFeatureIcon,
} from "@/lib/calculatorPageContent";
import { renderInlineLinks } from "@/lib/renderInlineLinks";

export type CalculatorExplainerProps = {
  title: string;
  paragraphs: string[];
  features: CalculatorFeature[];
};

function FeatureIcon({ icon }: { icon: CalculatorFeatureIcon }) {
  const className = "w-7 h-7 text-[#3fb364] shrink-0";

  switch (icon) {
    case "compare":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M4 7h16M4 12h10M4 17h14" strokeLinecap="round" />
          <circle cx="18" cy="12" r="2" fill="currentColor" stroke="none" />
          <circle cx="10" cy="7" r="2" fill="currentColor" stroke="none" />
          <circle cx="14" cy="17" r="2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "savings":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M12 3v18M12 3a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4Z" strokeLinecap="round" />
          <path d="M8 21h8" strokeLinecap="round" />
        </svg>
      );
    case "breakeven":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M4 18V6M4 18h16M8 14l3-3 3 2 4-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "cashout":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M4 18 12 6l8 12" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 14h8" strokeLinecap="round" />
        </svg>
      );
    case "payment":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M7 10h4M7 14h8" strokeLinecap="round" />
        </svg>
      );
    case "amortization":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M5 19V5M5 19h14M9 15l3-3 3 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "affordability":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M3 11 12 4l9 7v8a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8Z" strokeLinejoin="round" />
        </svg>
      );
    case "budget":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M12 3v18M7 8h10M7 12h7M7 16h10" strokeLinecap="round" />
        </svg>
      );
    case "time":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" strokeLinecap="round" />
        </svg>
      );
    case "mip":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M4 18h16M6 14h12M8 10h8M10 6h4" strokeLinecap="round" />
        </svg>
      );
    case "limits":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M4 6h16M4 12h10M4 18h14" strokeLinecap="round" />
          <path d="M18 10v4" strokeLinecap="round" />
        </svg>
      );
    case "downpayment":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M12 3 4 10v9h16v-9L12 3Z" strokeLinejoin="round" />
          <path d="M9 19v-6h6v6" strokeLinejoin="round" />
        </svg>
      );
    case "info":
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 10v6M12 8h.01" strokeLinecap="round" />
        </svg>
      );
  }
}

export default function CalculatorExplainer({
  title,
  paragraphs,
  features,
}: CalculatorExplainerProps) {
  return (
    <section className="w-full bg-white border-b border-[#e8e0d0]/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-10 lg:gap-14 items-start">
          <div className="min-w-0">
            <h2 className="text-[#052316] text-[26px] sm:text-[30px] lg:text-[34px] font-playfair font-normal leading-tight mb-4">
              {title}
            </h2>
            <div className="h-1 w-12 rounded-full bg-[#3fb364] mb-6" aria-hidden />
            <div className="space-y-4">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-[#4e5b4e] text-[14px] sm:text-[15px] leading-[1.75]"
                >
                  {renderInlineLinks(paragraph)}
                </p>
              ))}
            </div>
          </div>

          <ul className="space-y-6 sm:space-y-7 min-w-0">
            {features.map((feature) => (
              <li key={feature.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#eaf3e3] flex items-center justify-center shrink-0">
                  <FeatureIcon icon={feature.icon} />
                </div>
                <div className="min-w-0 pt-0.5">
                  <h3 className="text-[#3fb364] text-[15px] sm:text-[16px] font-bold leading-snug mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-[#4e5b4e] text-[13.5px] sm:text-[14px] leading-[1.65]">
                    {renderInlineLinks(feature.description)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
