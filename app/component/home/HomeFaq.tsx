import React from "react";
import Image from "next/image";
import Link from "next/link";
import AccordionItem from "./AccordionItem";

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
  return (
    <section className="w-full bg-[#fcf9f3] py-14 sm:py-20 lg:py-24 border-t border-[#e8e0d0]/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/home/faq-brothers.jpg"
              alt="The Mortgage Brothers answering client questions"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Accordion */}
          <div className="order-1 lg:order-2">
            <p className="text-[#6b5420] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
              FAQ
            </p>
            <h2 className="font-playfair text-[#08271B] text-[28px] lg:text-[40px] font-normal leading-tight mb-8">
              Frequently Asked Questions
            </h2>

            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.question} faq={faq} index={i} defaultOpen={i === 0} />
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