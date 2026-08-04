"use client";
import FaqAccordion from "../../component/FaqAccordion";

import React from "react";
import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const cities = [
  {
    name: "Flagstaff",
    description: "As Coconino County's seat, Flagstaff offers pine forests, mountain vistas, university energy, and custom home financing."
  },
  {
    name: "Sedona",
    description: "Iconic red rock vistas with luxury real estate, vacation properties, and tailored jumbo mortgage options."
  },
  {
    name: "Williams",
    description: "Gateway to the Grand Canyon with mountain town heritage, pine forests, and competitive home loan rates."
  },
  {
    name: "Page",
    description: "Located near Lake Powell and Horseshoe Bend, offering tourism-driven real estate and residential financing."
  },
  {
    name: "Fredonia",
    description: "Northern border community with small-town quiet living and accessible home mortgage programs."
  },
  {
    name: "Tusayan",
    description: "Grand Canyon South Rim community providing housing solutions for local workforce and residents."
  }
];

export default function CoconinoCountyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow pt-[64px] sm:pt-[72px]">
        {/* Hero Section */}
        <section className="w-full bg-brand-green-deep text-white py-16 lg:py-20 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            {/* Breadcrumb inside Pine Green Section */}
            <div className="flex items-center justify-center gap-2 text-[13px] font-medium text-[#c8c8b8] mb-5">
              <Link href="/service-areas/" className="hover:text-[#3fb364] transition-colors duration-200">
                Areas We Serve
              </Link>
              <span className="text-[#3fb364]/60">&gt;</span>
              <span className="text-white font-semibold">Coconino County</span>
            </div>

            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
              NORTHERN ARIZONA - COCONINO
            </p>

            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">
              Your trusted Coconino County mortgage broker.
            </h1>

            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">
              From Flagstaff to Lake Powell — 6 communities, one team that knows every one of them.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-4">
              <Link
                href="/#get-pre-approved"
                className="w-full sm:w-auto btn-primary hover:shadow-brand-green-accent/20 group"
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
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/about/#talk-to-broker"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-white/30 hover:border-white/60 text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all duration-200"
              >
                Talk to a Broker
              </Link>
            </div>

            <p className="text-[#8a9a7a] text-[12px] font-medium">
              3 min - no credit impact
            </p>
          </div>
        </section>

        {/* Cities Grid Section */}
        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">
                Coconino County mortgage services
              </h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px]">
                Select your city below for local mortgage expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cities.map((city, index) => (
                <Link
                  key={index}
                  href={`/service-areas/coconino-county-az/${city.name.toLowerCase().replace(/\./g, "").replace(/\s+/g, "-")}/`}
                  className="bg-[#faf7f0] rounded-2xl p-6 lg:p-7 border border-[#e8e0d0]/50 shadow-sm flex flex-col hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#1a3a1a]/5 hover:border-brand-green-accent/30 active:scale-[0.98] active:translate-y-0 cursor-pointer transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-4 text-brand-green-deep">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-green-accent flex-shrink-0"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <h3 className="text-[17px] font-bold tracking-tight">
                      {city.name}
                    </h3>
                  </div>

                  <p className="text-brand-text-muted text-[13.5px] lg:text-[14px] leading-relaxed">
                    {city.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-6">Home Loans in Coconino County, Arizona</h2>
            <div className="text-brand-text-muted text-[15px] space-y-4">
              <p>Coconino County is the second-largest county in the contiguous United States and one of Arizona&apos;s most diverse — spanning from the world-famous red rocks of Sedona to the ponderosa pine forests of Flagstaff and the dramatic canyon country near Page and Lake Powell. It attracts first-time buyers putting down roots in Flagstaff, retirees seeking the peace of mountain living, and investors drawn by Sedona&apos;s thriving vacation rental market.</p>
              <p>At Mortgage Brothers, we have helped Arizona homebuyers navigate the mortgage process for 25+ years. Whether you are buying your first home in Flagstaff, a property near Sedona, or a rural parcel near Williams, we know Coconino County and can find the right loan for you.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Major Cities:</strong> Flagstaff, Sedona (shared with Yavapai), Williams, Page, Tusayan, Kachina Village, Bellemont, Doney Park</li>
                <li><strong>2026 Conforming Loan Limit:</strong> $832,750</li>
                <li><strong>2026 FHA Loan Limit:</strong> $609,500</li>
                <li><strong>Popular Communities:</strong> Munds Park, Forest Lakes, Happy Jack, Mormon Lake, Parks, Valle, Doney Park</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto px-6">
            <FaqAccordion
              title="Frequently Asked Questions"
              items={[
                {
                  q: "What home loan programs are available to Coconino County homebuyers?",
                  a: "Coconino County buyers have access to the full range of mortgage programs including Conventional, FHA, VA (for eligible veterans), Jumbo, FHA Streamline Refinance, First-Time Homebuyer programs, Reverse Mortgage (for homeowners 62+), and Refinancing. Our team can walk you through all your options at no cost."
                },
                {
                  q: "What is the conforming loan limit in Coconino County for 2026?",
                  a: "The 2026 conforming loan limit for Coconino County is $832,750 – the same baseline limit that applies across all Arizona counties. If your loan exceeds this amount, you will need a jumbo loan."
                },
                {
                  q: "What is the FHA loan limit in Coconino County for 2026?",
                  a: "The 2026 FHA loan limit for Coconino County is $609,500 – one of the highest FHA limits in Arizona, reflecting the stronger home values in markets like Flagstaff and Sedona. This means you can finance a home up to that purchase price with as little as 3.5% down (with a 580+ credit score)."
                },
                {
                  q: "Why are people buying homes in Coconino County?",
                  a: "Flagstaff draws remote workers and families who love the four seasons and outdoor lifestyle. Sedona attracts buyers seeking luxury homes and investment properties with strong vacation rental demand. Williams, Page, and the more rural communities appeal to buyers looking for space, privacy, and lower price points."
                },
                {
                  q: "How much do I need for a down payment on a Coconino County home?",
                  a: "FHA loans require as little as 3.5% down. Conventional loans can go as low as 3%-5% for qualified buyers. VA loans require zero down payment for eligible veterans. We also work with down payment assistance programs. Contact us to find out which programs you qualify for."
                },
                {
                  q: "How long does it take to close on a home in Coconino County?",
                  a: "Most purchase transactions close in 21 to 30 days when all documentation is submitted promptly. Our team is known for fast, smooth closings with no surprises at the closing table."
                }
              ]}
            />
          </div>
        </section>
        {/* Bottom CTA section */}
        <section className="w-full bg-[#052316] text-white py-16 lg:py-24 text-center relative overflow-hidden border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.15em] uppercase mb-4">
              READY WHEN YOU ARE
            </p>
            <h2 className="text-white text-[32px] lg:text-[44px] font-playfair font-normal leading-tight mb-4">
              Ready to start your Coconino County home journey?
            </h2>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.7] max-w-xl mx-auto mb-8">
              Let&apos;s find the perfect mortgage solution for your Coconino County home.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href="/#get-pre-approved"
                className="w-full sm:w-auto btn-primary hover:shadow-brand-green-accent/20 group"
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
              <a
                href="tel:6025352171"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-white/30 hover:border-white/60 text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all duration-200 gap-2"
              >
                (602) 535-2171
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}