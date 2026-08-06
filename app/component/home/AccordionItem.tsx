"use client";

import React, { useState } from "react";

type Faq = { question: string; answer: string };

export default function AccordionItem({
  faq,
  index,
  defaultOpen,
}: {
  faq: Faq;
  index: number;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <div className="border border-[#e8e0d0]/60 rounded-2xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-[#f9f6f0] transition-colors duration-200 cursor-pointer"
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="text-[#08271B] text-[15.5px] font-semibold leading-snug">
          {faq.question}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            open
              ? "bg-[#3fb364] rotate-180"
              : "bg-[#08271B]/5"
          }`}
          aria-hidden
        >
          <svg
            className={`w-4 h-4 transition-colors ${open ? "text-white" : "text-[#08271B]"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        hidden={!open}
        className="px-6 pb-5 bg-white"
      >
        <p className="text-[#4e5b4e] text-[14.5px] leading-[1.75]">{faq.answer}</p>
      </div>
    </div>
  );
}
