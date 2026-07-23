import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="w-full bg-[#052316] relative overflow-hidden min-h-[600px] lg:min-h-[720px] xl:min-h-[800px] bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/home/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
      }}
    >
      {/* Dark overlay for text readability — stronger on left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#052316]/95 via-[#052316]/75 to-[#052316]/25 lg:to-transparent" />
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[480px] h-[480px] rounded-full bg-[#3fb364]/15 blur-[110px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-[130px] pb-16 lg:pt-[150px] lg:pb-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1 max-w-xl text-center lg:text-left">
            <h1 className="text-white text-[40px] sm:text-[48px] lg:text-[56px] font-bold leading-[1.08] mb-4 tracking-tight">
              Home Loans Made Simple
            </h1>

            <h2 className="text-white text-[22px] sm:text-[26px] lg:text-[28px] font-semibold leading-snug mb-5">
              Trusted Mortgage Experts in Arizona
            </h2>

            <p className="text-[#d4dcd0] text-[16px] lg:text-[17px] leading-[1.7] mb-9 max-w-md mx-auto lg:mx-0">
              At The Mortgage Brothers, we simplify the mortgage process for families across Arizona
            </p>

            <div className="flex flex-col items-center lg:items-start gap-3">
              <Link
                href="/#get-pre-approved"
                className="inline-flex items-center gap-2.5 bg-[#3fb364] hover:bg-[#349b55] text-white text-[16px] font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#3fb364]/35"
              >
                Start my preapproval
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </Link>
              <span className="text-white/70 text-[13px] font-medium">
                3 min / no credit impact
              </span>
            </div>
          </div>

          {/* Spacer so background brothers photo remains visible on desktop */}
          <div className="hidden lg:block flex-1 max-w-[480px] min-h-[420px]" aria-hidden />
        </div>
      </div>
    </section>
  );
};

export default Hero;
