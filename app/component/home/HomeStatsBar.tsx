import React from "react";
import { COMPANY } from "@/lib/company";

const HomeStatsBar = () => {
  return (
    <section className="no-content-visibility w-full bg-transparent px-4 sm:px-6 lg:px-8 pb-4 pt-0 -mt-14 sm:-mt-16 lg:-mt-[72px] relative z-20">
      <div className="max-w-6xl mx-auto bg-[#031d12] border border-[#0d3f28] rounded-2xl p-5 sm:p-6 lg:p-8 shadow-2xl text-white">
        
        {/* Desktop Layout: 5 columns in a single row */}
        <div className="hidden md:grid grid-cols-5 gap-4 divide-x divide-[#0e422b] items-center">
          
          {/* Main 5.0 Score Column */}
          <div className="flex items-center gap-3.5 pr-2">
            <span className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-none">
              5.0
            </span>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-xs lg:text-sm text-white leading-tight">
                Rated 5 / 5
              </span>
              <span className="text-[11px] lg:text-xs text-[#b8d4b8] leading-tight mt-0.5">
                from 500+ verified Arizona homeowners
              </span>
              <div className="flex text-[#f5c518] gap-0.5 mt-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Google */}
          <a
            href={COMPANY.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 pl-4 hover:opacity-90 transition-opacity"
            aria-label="5.0 Google reviews"
          >
            <div className="w-8 h-8 rounded-full bg-[#083321] flex items-center justify-center text-[#3fb364] font-bold text-sm shrink-0 border border-[#144f33]">
              G
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base lg:text-lg text-white leading-none">
                5.0
              </span>
              <span className="text-[11px] lg:text-xs text-[#b8d4b8] font-medium mt-0.5">
                Google
              </span>
            </div>
          </a>

          {/* Facebook (matches live) */}
          <a
            href={COMPANY.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 pl-4 hover:opacity-90 transition-opacity"
            aria-label="5.0 Facebook reviews"
          >
            <div className="w-8 h-8 rounded-full bg-[#083321] flex items-center justify-center text-[#3fb364] font-bold text-sm shrink-0 border border-[#144f33]">
              f
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base lg:text-lg text-white leading-none">
                5.0
              </span>
              <span className="text-[11px] lg:text-xs text-[#b8d4b8] font-medium mt-0.5">
                Facebook
              </span>
            </div>
          </a>

          {/* Others */}
          <div className="flex items-center justify-center gap-3 pl-4">
            <div className="w-8 h-8 rounded-full bg-[#083321] flex items-center justify-center text-[#3fb364] font-bold text-sm shrink-0 border border-[#144f33]">
              O
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base lg:text-lg text-white leading-none">
                5.0
              </span>
              <span className="text-[11px] lg:text-xs text-[#b8d4b8] font-medium mt-0.5">
                Others
              </span>
            </div>
          </div>

          {/* BBB */}
          <div className="flex items-center justify-center gap-3 pl-4">
            <div className="w-8 h-8 rounded-full bg-[#083321] flex items-center justify-center text-[#3fb364] shrink-0 border border-[#144f33]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base lg:text-lg text-white leading-none">
                A+
              </span>
              <span className="text-[11px] lg:text-xs text-[#b8d4b8] font-medium mt-0.5">
                BBB
              </span>
            </div>
          </div>

        </div>

        {/* Mobile Layout (under md screen width) */}
        <div className="flex flex-col md:hidden gap-4 divide-y divide-[#0e422b]">
          {/* Top overall score (Centered on mobile) */}
          <div className="flex items-center gap-4 pb-3 justify-center sm:justify-start">
            <span className="text-5xl font-bold text-white tracking-tight leading-none">
              5.0
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-white leading-tight">
                Rated 5 / 5
              </span>
              <span className="text-xs text-[#b8d4b8] leading-tight mt-0.5">
                from 500+ verified Arizona homeowners
              </span>
              <div className="flex text-[#f5c518] gap-0.5 mt-1.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom 4 badges in a clean 2x2 grid */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 pt-3 max-w-[280px] sm:max-w-[320px] mx-auto w-full">
            
            {/* Google */}
            <a
              href={COMPANY.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
              aria-label="5.0 Google reviews"
            >
              <div className="w-8 h-8 rounded-full bg-[#083321] flex items-center justify-center text-[#3fb364] font-bold text-xs shrink-0 border border-[#144f33]">
                G
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base text-white leading-none">5.0</span>
                <span className="text-[11px] text-[#b8d4b8] font-medium mt-0.5">Google</span>
              </div>
            </a>

            {/* Facebook */}
            <a
              href={COMPANY.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
              aria-label="5.0 Facebook reviews"
            >
              <div className="w-8 h-8 rounded-full bg-[#083321] flex items-center justify-center text-[#3fb364] font-bold text-xs shrink-0 border border-[#144f33]">
                f
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base text-white leading-none">5.0</span>
                <span className="text-[11px] text-[#b8d4b8] font-medium mt-0.5">Facebook</span>
              </div>
            </a>

            {/* Others */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#083321] flex items-center justify-center text-[#3fb364] font-bold text-xs shrink-0 border border-[#144f33]">
                O
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base text-white leading-none">5.0</span>
                <span className="text-[11px] text-[#b8d4b8] font-medium mt-0.5">Others</span>
              </div>
            </div>

            {/* BBB */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#083321] flex items-center justify-center text-[#3fb364] shrink-0 border border-[#144f33]">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base text-white leading-none">A+</span>
                <span className="text-[11px] text-[#b8d4b8] font-medium mt-0.5">BBB</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeStatsBar;
