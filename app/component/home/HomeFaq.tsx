import React from "react";
import Image from "next/image";
import Link from "next/link";
import { homeFaqs } from "./homeFaqs";

/**
 * Zero client JS — native details/summary keeps the same accordion UX
 * without shipping AccordionItem hydration cost on every homepage visit.
 */
const HomeFaq = () => {
  return (
    <section className="w-full bg-[#fcf9f3] py-14 sm:py-20 lg:py-24 border-t border-[#e8e0d0]/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="order-2 lg:order-1 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl lg:sticky lg:top-24">
            <Image
              src="/home/faq-brothers.jpg"
              alt="The Mortgage Brothers answering client questions"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-[#6b5420] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
              FAQ
            </p>
            <h2 className="font-playfair text-[#08271B] text-[28px] lg:text-[40px] font-normal leading-tight mb-8">
              Frequently Asked Questions
            </h2>

            <div className="flex flex-col gap-3">
              {homeFaqs.map((faq, i) => (
                <details
                  key={faq.question}
                  className="group border border-[#e8e0d0]/60 rounded-2xl overflow-hidden bg-white"
                  open={i === 0}
                >
                  <summary className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#f9f6f0] transition-colors duration-200 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-[#08271B] text-[15.5px] font-semibold leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[#08271B]/5 group-open:bg-[#3fb364] group-open:rotate-180 transition-all duration-[250ms] ease-out"
                      aria-hidden
                    >
                      <svg
                        className="w-4 h-4 text-[#08271B] group-open:text-white transition-colors duration-[250ms] ease-out"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </summary>
                  <div
                    id={`faq-answer-${i}`}
                    className="max-h-0 opacity-0 overflow-hidden transition-all duration-[250ms] ease-out group-open:max-h-[420px] group-open:opacity-100"
                  >
                    <p className="px-6 pt-4 pb-5 text-[#4e5b4e] text-[14.5px] leading-relaxed border-t border-[#e8e0d0]/40">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/faq/"
                className="inline-flex items-center gap-2 text-[#246d39] hover:text-[#1f5c30] font-semibold text-[14.5px] transition-colors duration-200 min-h-[44px] py-2"
              >
                View All FAQs
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
