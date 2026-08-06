"use client";

import React, { useState } from "react";

export type FaqItem = {
  q: string;
  a: React.ReactNode;
};

type FaqAccordionProps = {
  items: FaqItem[];
  title?: string;
};

/**
 * Click-to-expand FAQ accordion used across all article/blog pages.
 */
export default function FaqAccordion({ items, title }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {title && (
        <h2
          className="font-playfair text-[#052316] text-[24px] lg:text-[32px] font-bold mb-6"
          
        >
          {title}
        </h2>
      )}
      <div className="space-y-3">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          const panelId = `faq-panel-${idx}`;
          const buttonId = `faq-button-${idx}`;
          return (
            <div
              key={idx}
              className="border border-[#e8e0d0]/70 rounded-xl overflow-hidden bg-white"
            >
              <button
                type="button"
                id={buttonId}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 cursor-pointer hover:bg-[#fcf9f3] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3fb364]"
              >
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
                  className={`text-[#3fb364] shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="px-5 pb-5 border-t border-[#e8e0d0]/50"
                >
                  <div className="text-[#4e5b4e] text-[14.5px] leading-relaxed pt-4">
                    {item.a}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}