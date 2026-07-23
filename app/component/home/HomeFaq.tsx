"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const faqs = [
  {
    question: "What's the advantage of working with a mortgage broker instead of a bank?",
    answer:
      "As brokers, we can shop around multiple lenders to find you the best deal. We're not limited to one bank's products and can often find creative solutions for unique circumstances. We ask 'Where can we get this loan approved?' instead of 'Can we approve this loan?'",
  },
  {
    question: "What loan options are available for first-time buyers in Gilbert?",
    answer:
      "FHA loans and local programs for first-time buyers are great options. We'll guide you through the process and find the best fit.",
  },
  {
    question: "How does refinancing work in Mesa?",
    answer:
      "Refinancing replaces your current mortgage with a new one, often with better terms. It's a great way to save money on your Arizona home loan.",
  },
];

const HomeFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#fcf9f3] py-20 lg:py-28 border-t border-[#e8e0d0]/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/home/faq-brothers.jpg"
              alt="The Mortgage Brothers answering client questions"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Accordion */}
          <div className="order-1 lg:order-2">
            <p className="text-[#b89a5a] text-[12px] font-semibold tracking-[0.14em] uppercase mb-3">
              FAQ
            </p>
            <h2
              className="text-[#08271B] text-[30px] lg:text-[36px] font-normal leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Answers to Your Arizona Mortgage Questions
            </h2>

            <div className="flex flex-col gap-3 mb-8">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.question}
                    className="bg-white border border-[#e8e0d0]/70 rounded-xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 cursor-pointer"
                    >
                      <span className="text-[#08271B] text-[15px] font-semibold">
                        {faq.question}
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
                      <div className="px-5 pb-5 -mt-1">
                        <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[14.5px] font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
            >
              Speak with an Expert
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
