import React from "react";

const CTA = () => {
  return (
    <section className="w-full bg-[#1a3a1a] relative overflow-hidden py-20 lg:py-28">
      {/* Decorative background circles */}
      <div className="absolute -bottom-36 -left-36 w-[400px] h-[400px] rounded-full border border-white/10 pointer-events-none"></div>
      <div className="absolute -top-36 -right-36 w-[450px] h-[450px] rounded-full border border-white/10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Subtitle */}
        <p className="text-[#b89a5a] text-[12px] font-semibold tracking-[0.14em] uppercase mb-4">
          READY WHEN YOU ARE
        </p>

        {/* Heading */}
        <h2
          className="text-white text-[38px] lg:text-[50px] font-normal leading-[1.15] mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Let&apos;s get you home.
        </h2>

        {/* Description */}
        <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.7] max-w-xl mx-auto mb-10">
          Start your pre-approval in about three minutes. No cost, no obligation, no impact to your credit.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#get-pre-approved"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all duration-250 shadow-lg shadow-[#3fb364]/20 hover:shadow-[#3fb364]/40"
          >
            Start My Pre-Approval
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href="#ask-question"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-white/30 hover:border-white/60 text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all duration-200"
          >
            Ask a Question
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
