import React from "react";
import Link from "next/link";
import { CAREER_PATH_INTRO, CAREER_PATH_STEPS } from "@/lib/careerPathSteps";

const stepIconClass =
  "mt-0.5 flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-[#3fb364] text-white text-[15px] sm:text-[16px] font-bold";

export type CareerApplicationPathProps = {
  /** Section background — live career pages use white; job hub uses beige. */
  variant?: "white" | "beige";
  ctaHref?: string;
  ctaLabel?: string;
};

export default function CareerApplicationPath({
  variant = "white",
  ctaHref = "#career-application-form",
  ctaLabel = "Start Your Application",
}: CareerApplicationPathProps) {
  const sectionClass =
    variant === "beige"
      ? "w-full bg-[#f5f0e8] py-16 lg:py-24 border-y border-[#e8e0d0]/50"
      : "w-full bg-white py-16 lg:py-24";

  const ctaClass =
    "inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all";

  return (
    <section className={sectionClass}>
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-[#08271B] text-[30px] lg:text-[40px] font-normal font-playfair leading-tight mb-5">
            Your Path to Joining Our Team
          </h2>
          <div
            className="mx-auto h-0.5 w-12 rounded-full bg-[#3fb364] mb-6"
            aria-hidden
          />
          <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
            {CAREER_PATH_INTRO}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:gap-y-12 mb-12">
          {CAREER_PATH_STEPS.map((step, index) => (
            <div key={step.title} className="flex items-start gap-3 min-w-0">
              <span className={stepIconClass} aria-hidden>
                {index + 1}
              </span>
              <div className="min-w-0">
                <h3 className="text-[#08271B] text-[17px] sm:text-[18px] font-bold mb-3">
                  {step.title}
                </h3>
                <ul className="list-disc pl-5 space-y-1.5 text-[#4e5b4e] text-[14px] sm:text-[14.5px] leading-relaxed marker:text-[#4e5b4e]">
                  {step.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          {ctaHref.startsWith("/") ? (
            <Link href={ctaHref} className={ctaClass}>
              {ctaLabel}
            </Link>
          ) : (
            <a
              href={ctaHref}
              className={ctaClass}
              {...(ctaHref.includes("career-application") ? { "data-career": "true" } : {})}
            >
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
