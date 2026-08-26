import React from "react";

export type FaqItem = {
  q: string;
  a: React.ReactNode;
};

type FaqAccordionProps = {
  items: FaqItem[];
  title?: string;
};

/**
 * Zero-JS FAQ accordion (native details/summary) — no client bundle cost.
 */
export default function FaqAccordion({ items, title }: FaqAccordionProps) {
  return (
    <div className="mb-8">
      {title && (
        <h2 className="font-playfair text-[#052316] text-[24px] lg:text-[32px] font-bold mb-6">
          {title}
        </h2>
      )}
      <div className="space-y-3">
        {items.map((item, idx) => (
          <details
            key={idx}
            className="group border border-[#e8e0d0]/70 rounded-xl overflow-hidden bg-white"
          >
            <summary className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 cursor-pointer hover:bg-[#fcf9f3] transition-colors list-none [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3fb364]">
              <span className="text-[#052316] text-[15px] font-bold leading-snug">
                {item.q}
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#3fb364] shrink-0 transition-transform duration-[250ms] ease-out group-open:rotate-180"
                aria-hidden
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </summary>
            <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-[250ms] ease-out group-open:max-h-[520px] group-open:opacity-100">
              <div className="px-5 pb-5 border-t border-[#e8e0d0]/50 text-[#4e5b4e] text-[14.5px] leading-relaxed pt-4">
                {item.a}
              </div>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
