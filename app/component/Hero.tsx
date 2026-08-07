import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="no-content-visibility w-full bg-[#052316] relative overflow-hidden pt-[64px] sm:pt-[72px]">
      {/* Soft green glow behind text */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-[55%] h-full bg-[radial-gradient(ellipse_at_top_left,_rgba(63,179,100,0.18)_0%,_transparent_55%)]"
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-center py-12 sm:py-14 lg:py-16">
          {/* Left — content */}
          <div className="flex flex-col items-start text-left order-2 lg:order-1">
            <h1 className="text-white text-[36px] sm:text-[44px] lg:text-[52px] font-bold leading-[1.12] mb-3 tracking-tight">
              Home Loans Made Simple
            </h1>

            <h2 className="text-white text-[18px] sm:text-[22px] lg:text-[24px] font-medium mb-4 leading-snug">
              Trusted Mortgage Experts in Arizona
            </h2>

            <p className="text-[#d5e0d8] text-[15px] sm:text-[16px] leading-relaxed max-w-md mb-7">
              At The Mortgage Brothers, we simplify the mortgage process for families across Arizona
            </p>

            <Link
              href="/#get-pre-approved"
              className="inline-flex items-center justify-center gap-2.5 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] sm:text-[16px] font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-[#3fb364]/25 hover:scale-[1.02]"
            >
              <span>Start my preapproval</span>
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20" aria-hidden>
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
            </Link>

            <p className="text-[#8fae9d] text-[12px] sm:text-[13px] font-medium mt-3">
              3 min / no credit impact
            </p>
          </div>

          {/* Right — smaller fixed photo (full image visible) */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-[280px] sm:w-[340px] lg:w-[400px] aspect-[690/481] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#03170e]">
              <Image
                src="/home/arizona-mortgage-brothers-thomas-eddie-knoell.png"
                alt="Eddie and Thomas Knoell — The Mortgage Brothers"
                fill
                priority
                sizes="400px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
