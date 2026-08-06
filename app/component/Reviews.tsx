import React from "react";
import Link from "next/link";

const reviewsData = [
  {
    quote:
      "Eddie and Thomas made our first purchase painless. They shopped our loan and got us a rate our bank couldn't touch. Closed in under three weeks.",
    initials: "JR",
    name: "Jordan R.",
    subtitle: "Phoenix · First-time buyer",
  },
  {
    quote:
      "I was quoted one rate elsewhere and the Mortgage Brothers beat it without the runaround. Straight answers every single step.",
    initials: "MP",
    name: "Maria P.",
    subtitle: "Gilbert · Refinance",
  },
  {
    quote:
      "As a realtor I send every buyer here. On-time closings, real communication, and my clients always feel taken care of.",
    initials: "DK",
    name: "David K.",
    subtitle: "Scottsdale · Agent partner",
  },
];

const Reviews = () => {
  return (
    <section className="no-content-visibility w-full bg-[#faf9f6] pt-6 pb-16 sm:pt-10 sm:pb-20 border-t border-b border-slate-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviewsData.map((rev) => (
            <div
              key={rev.name}
              className="bg-white rounded-2xl p-7 lg:p-8 shadow-sm border border-slate-100/80 flex flex-col justify-between hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* 5 Yellow Stars */}
                <div className="flex gap-1 text-[#f5a623] mb-5" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed mb-6 font-normal">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div>
                {/* Divider Line */}
                <div className="border-t border-slate-100 mb-5" />

                {/* Author Details Row */}
                <div className="flex items-center gap-3.5">
                  {/* Dark green circle avatar with white initials */}
                  <div className="w-11 h-11 rounded-full bg-[#052316] text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-inner tracking-wider">
                    {rev.initials}
                  </div>

                  {/* Name and location/buyer type */}
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="font-bold text-slate-900 text-sm sm:text-[15px] leading-snug">
                      {rev.name}
                    </span>
                    <span className="text-xs text-slate-500 font-medium truncate mt-0.5">
                      {rev.subtitle}
                    </span>
                  </div>

                  {/* Verified badge (Green circle with white checkmark) */}
                  <div className="w-5 h-5 rounded-full bg-[#3fb364] flex items-center justify-center text-white shrink-0 ml-auto" title="Verified Customer">
                    <svg className="w-3 h-3 stroke-current stroke-[3] fill-none" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Client Reviews Link */}
        <div className="text-center mt-12">
          <Link
            href="/client-mortgage-reviews/"
            className="inline-flex items-center gap-2 text-[#052316] hover:text-[#3fb364] font-semibold text-sm transition-colors duration-200"
          >
            <span>Read More Verified Arizona Client Reviews</span>
            <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Reviews;