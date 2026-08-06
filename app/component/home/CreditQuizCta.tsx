import React from "react";
import Link from "next/link";

const CreditQuizCta = () => {
  return (
    <section className="w-full bg-[#08271B] py-14 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-0 w-[380px] h-[380px] rounded-full bg-[#3fb364]/10 blur-[100px]" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <p className="text-[#b89a5a] text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
          Know Before You Apply
        </p>
        <h2
          className="font-playfair text-white text-[28px] lg:text-[40px] font-normal leading-tight mb-5"
          
        >
          Is Your Credit Score Ready for Homeownership?
        </h2>
        <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.7] max-w-xl mx-auto mb-8">
          Your credit score is the gateway to mortgage approval and better rates. Discover where
          you stand and how it impacts your home buying journey.
        </p>
        <Link
          href="/credit-score-quiz/"
          className="btn-primary duration-200 shadow-lg shadow-[#3fb364]/20"
        >
          Take The Quiz
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default CreditQuizCta;
