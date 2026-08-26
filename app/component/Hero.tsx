import React from "react";
import HeroCtaButtons from "./HeroCtaButtons";

const Hero = () => {
  return (
    <section className="no-content-visibility w-full bg-[#052316] relative overflow-hidden pt-20 pb-20 sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28">
      {/* Subtle concentric circles background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full border border-white/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] rounded-full border border-white/5" />
      </div>

      {/* Radial soft lighting — hidden on mobile to reduce paint cost */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#3fb364]/15 blur-3xl hidden sm:block" aria-hidden />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Rating Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-[#08311f]/90 border border-[#144f33] rounded-full px-3.5 py-1.5 mb-6 shadow-sm">
          <div className="flex items-center gap-1 text-[#f5c518] text-sm" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
            5.0 rating
          </span>
          <span className="bg-[#2d8545] text-white text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full ml-1">
            500+ reviews
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.12] mb-3 tracking-tight">
          Home Loans Made Simple
        </h1>

        {/* Subtitle */}
        <h2 className="text-[#6bcf84] text-xl sm:text-2xl lg:text-3xl font-medium mb-4">
          Trusted Mortgage Experts in Arizona
        </h2>

        {/* Paragraph */}
        {/* Supporting copy kept short so H1 remains the LCP element on mobile */}
        <p className="text-[#cbdad2] text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-7 font-normal">
          Independent brokers. Dozens of lenders. Banks compete for you.
        </p>

        {/* CTAs — shared canonical buttons */}
        <HeroCtaButtons className="mb-6 sm:mb-7" />

        {/* Trust micro-stats — stacked on small screens, spaced row from sm up */}
        <ul className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 text-[#b8d4b8] text-xs sm:text-sm font-medium max-w-3xl mx-auto">
          <li className="sm:px-4 lg:px-6 text-center leading-snug">
            3 min · no credit impact
          </li>
          <li
            className="hidden sm:block w-px h-3.5 bg-[#b8d4b8]/35 shrink-0"
            aria-hidden
          />
          <li className="sm:px-4 lg:px-6 text-center leading-snug">
            5000+ Families Helped Across Arizona
          </li>
          <li
            className="hidden sm:block w-px h-3.5 bg-[#b8d4b8]/35 shrink-0"
            aria-hidden
          />
          <li className="sm:px-4 lg:px-6 text-center leading-snug">
            Average Closing Time: 25 Days
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
