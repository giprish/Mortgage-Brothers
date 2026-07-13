"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
// import PreApprovedForm from "../component/PreApprovedForm";

// Reviews dataset matching the user screenshots
const reviewsData = [
  {
    id: "rev-1",
    stars: 5,
    quote: "They shopped our loan to a dozen lenders and saved us real money. Closed in three weeks flat.",
    name: "Maria & Luis G.",
    location: "Gilbert, AZ",
    category: "Buyers",
  },
  {
    id: "rev-2",
    stars: 5,
    quote: "As a veteran, my VA loan felt complicated until Thomas walked me through it. Zero down, zero stress.",
    name: "Darnell W.",
    location: "Mesa, AZ",
    category: "Veterans",
  },
  {
    id: "rev-3",
    stars: 5,
    quote: "Self-employed and figured I'd get turned down everywhere. Eddie found a lender who got it. Grateful.",
    name: "Priya S.",
    location: "Scottsdale, AZ",
    category: "Buyers",
  },
  {
    id: "rev-4",
    stars: 5,
    quote: "Walked me through my VA benefits like family. Zero down, zero confusion, and quick to close.",
    name: "Michael B.",
    location: "Tucson, AZ",
    category: "Veterans",
  },
  {
    id: "rev-5",
    stars: 5,
    quote: "Refinanced and cut our payment — the whole process took less time than I expected.",
    name: "Karen T.",
    location: "Chandler, AZ",
    category: "Refinance",
  },
  {
    id: "rev-6",
    stars: 5,
    quote: "Straightforward refinance, no upsell, just honest numbers from the first call.",
    name: "Tom H.",
    location: "Flagstaff, AZ",
    category: "Refinance",
  },
  {
    id: "rev-7",
    stars: 5,
    quote: "First home, first time doing any of this — they explained every step without ever talking down to us.",
    name: "The Alvarez Family",
    location: "Tempe, AZ",
    category: "Buyers",
  },
  {
    id: "rev-8",
    stars: 5,
    quote: "Fast pre-approvals and constant updates — my clients never wonder what's happening.",
    name: "James R.",
    location: "Keller Williams, Scottsdale",
    category: "Agents",
  },
  {
    id: "rev-9",
    stars: 5,
    quote: "My go-to lending partner for over a decade. Always reliable, always on time.",
    name: "Sandra P.",
    location: "HomeSmart, Phoenix",
    category: "Agents",
  },
];

const categories = ["All", "Buyers", "Veterans", "Refinance", "Agents"];

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter reviews based on selection
  const filteredReviews = selectedCategory === "All"
    ? reviewsData
    : reviewsData.filter(rev => rev.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        
        {/* Hero Summary Header */}
        <section className="w-full bg-brand-green-deep text-white py-16 lg:py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none"></div>
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5 pointer-events-none"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            {/* Badge */}
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
              REVIEWS
            </p>

            {/* Stars Summary */}
            <div className="flex items-center gap-3 mb-6 bg-black/10 px-5 py-2.5 rounded-full border border-white/5">
              <span className="text-[36px] lg:text-[44px] font-bold tracking-tight leading-none text-white">
                4.9<span className="text-brand-green-accent text-[18px] lg:text-[22px] font-medium">/5</span>
              </span>
              <div className="flex text-[#b89a5a] gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6">
              What Arizona says about us
            </h1>

            {/* Subtitle */}
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Real feedback from buyers, veterans, refinancers, and the agents who refer us.
            </p>
          </div>
        </section>

        {/* Filter & Listing Section */}
        <section className="w-full py-12 lg:py-16">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            
            {/* Centered Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
              {categories.map((cat) => {
                const isActive = cat === selectedCategory;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-[13px] font-semibold px-6 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#3fb364] border-[#3fb364] text-white shadow-md font-semibold"
                        : "bg-white border-[#e8e0d0] text-brand-green-deep hover:border-[#3fb364] hover:text-[#3fb364]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredReviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-[#faf7f0] rounded-2xl p-6 lg:p-7 border border-[#e8e0d0]/40 shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#1a3a1a]/5 hover:border-brand-green-accent/30 active:scale-[0.98] active:translate-y-0 cursor-pointer transition-all duration-300"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex text-[#b89a5a] gap-0.5 mb-4">
                      {[...Array(rev.stars)].map((_, idx) => (
                        <svg key={idx} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-brand-green-deep text-[15px] leading-[1.65] font-medium mb-6">
                      &ldquo;{rev.quote}&rdquo;
                    </p>
                  </div>

                  {/* Footer metadata */}
                  <div className="flex items-end justify-between border-t border-[#e8e0d0]/40 pt-4 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-brand-green-deep text-[13px] font-bold leading-tight">
                        {rev.name}
                      </span>
                      <span className="text-[#6b7c5b] text-[11px] mt-0.5">
                        {rev.location}
                      </span>
                    </div>

                    {/* Badge Category */}
                    <span className="bg-[#e2edd8] border border-[#d2e2c2] text-[#2d5a2d] text-[9px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full">
                      {rev.category}
                    </span>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Ready to write your own story CTA Section */}
        <section className="w-full bg-[#052316] text-white py-16 lg:py-20 text-center relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5 pointer-events-none opacity-40"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <h2 className="text-white text-[30px] lg:text-[38px] font-playfair font-normal leading-tight mb-4">
              {"Ready to write your own story?"}
            </h2>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.7] max-w-xl mx-auto mb-8">
              Join the Arizona families who found a better way to finance their home.
            </p>
            <Link
              href="/#get-pre-approved"
              className="btn-primary hover:shadow-brand-green-accent/20 group"
            >
              Get Pre-Approved
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
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </section>

      </main>

      {/* <PreApprovedForm /> */}
      <Footer />
    </div>
  );
}
