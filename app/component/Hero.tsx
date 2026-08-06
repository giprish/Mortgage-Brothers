import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="no-content-visibility w-full bg-[#052316] relative overflow-hidden pt-20 pb-20 sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28">
      {/* Subtle concentric circles background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full border border-white/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] rounded-full border border-white/5" />
      </div>

      {/* Radial soft lighting effect */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#3fb364]/15 blur-[120px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Rating Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-[#08311f]/90 border border-[#144f33] rounded-full px-3.5 py-1.5 mb-6 shadow-sm">
          <div className="flex items-center gap-1 text-[#f5c518] text-sm">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
            4.9 rating
          </span>
          <span className="bg-[#3fb364] text-[#052316] text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full ml-1">
            500+ reviews
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-playfair font-normal leading-[1.12] mb-3 tracking-tight">
          Home Loans Made Simple
        </h1>

        {/* Subtitle */}
        <h2 className="text-[#3fb364] text-xl sm:text-2xl lg:text-3xl font-playfair font-medium mb-4">
          Trusted Mortgage Experts in Arizona
        </h2>

        {/* Paragraph */}
        <p className="text-[#cbdad2] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-7 font-normal">
          We&apos;re independent brokers who shop your scenario across dozens of lenders — so banks compete for your business, not the other way around.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-3">
          <Link
            href="/#get-pre-approved"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-base font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-[#3fb364]/30 hover:scale-[1.02]"
          >
            <span>Start my preapproval</span>
            <svg
              className="w-4 h-4 stroke-current fill-none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

          <a
            href="tel:6027301565"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white text-base font-medium px-6 py-3.5 rounded-full transition-all duration-200"
          >
            <svg
              className="w-4 h-4 text-[#3fb364]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>Talk to a broker</span>
          </a>
        </div>

        {/* Micro text */}
        <p className="text-[#8fae9d] text-xs sm:text-sm font-medium">
          3 min · no credit impact
        </p>
      </div>
    </section>
  );
};

export default Hero;

