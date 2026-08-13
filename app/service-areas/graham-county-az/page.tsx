import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import FaqAccordion from "../../component/FaqAccordion";

import React from "react";
import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import HeroCtaButtons from "../../component/HeroCtaButtons";

export const metadata: Metadata = getSeoMetadata("/service-areas/graham-county-az/");

const cities = [
  { name: "Safford", description: "As Graham County's seat in the Gila Valley, Safford offers vibrant agriculture, Mount Graham views, and home loans." },
  { name: "Thatcher", description: "Home to Eastern Arizona College with family neighborhoods, top schools, and competitive loan rates." },
  { name: "Pima", description: "Historic agricultural town in the Gila Valley offering spacious rural home options." }
];

export default function GrahamCountyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />
      <main className="flex-grow pt-[64px] sm:pt-[72px]">
        <section className="w-full bg-brand-green-deep text-white py-16 lg:py-20 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            {/* Breadcrumb inside Pine Green Section */}
            <div className="flex items-center justify-center gap-2 text-[13px] font-medium text-[#c8c8b8] mb-5">
              <Link href="/service-areas/" className="text-[#b8d4b8] hover:text-white transition-colors duration-200">Areas We Serve</Link>
              <span className="text-white/40">&gt;</span>
              <span className="text-white font-semibold">Graham County</span>
            </div>
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">SOUTHERN ARIZONA - GRAHAM</p>
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">Your trusted Graham County mortgage broker.</h1>
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">From Safford to Thatcher — 3 communities, one team that knows every one of them.</p>
            <HeroCtaButtons className="mb-4" />
          </div>
        </section>

        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">Graham County mortgage services</h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px]">Select your city below for local mortgage expertise.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cities.map((city, index) => (
                <Link key={index} href={`/service-areas/graham-county-az/${city.name.toLowerCase().replace(/\./g, "").replace(/\s+/g, "-")}/`} className="bg-[#faf7f0] rounded-2xl p-6 lg:p-7 border border-[#e8e0d0]/50 shadow-sm flex flex-col hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4 text-brand-green-deep">
                    <h3 className="text-[17px] font-bold tracking-tight">{city.name}</h3>
                  </div>
                  <p className="text-brand-text-muted text-[13.5px] lg:text-[14px] leading-relaxed">{city.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-6">Home Loans in Graham County, Arizona</h2>
            <div className="text-brand-text-muted text-[15px] space-y-4">
              <p>Safford and the Gila Valley are growing, and so is the demand for home financing. For a Safford AZ mortgage with competitive rates and real local expertise, call Mortgage Brothers.</p>
              <p>Graham County sits in the Gila River valley of southeastern Arizona, anchored by the twin communities of Safford and Thatcher. Known for its agricultural heritage, hot springs, and access to Mount Graham — one of Arizona&apos;s sky islands — Graham County offers affordable home prices, a strong sense of community, and a slower pace of life that appeals to families and retirees alike.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Major Cities:</strong> Safford, Thatcher, Pima, Pomerene, Bylas</li>
                <li><strong>2026 Conforming Loan Limit:</strong> $832,750</li>
                <li><strong>2026 FHA Loan Limit:</strong> $541,287</li>
                <li><strong>Popular Communities:</strong> Eden, Central, Artesia, Stockton, Fort Thomas, Bonita, Sanchez</li>
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
                  q: "What home loan programs are available to Graham County homebuyers?",
                  a: "Graham County buyers have access to the full range of mortgage programs including Conventional, FHA, VA (for eligible veterans), Jumbo, FHA Streamline Refinance, First-Time Homebuyer programs, Reverse Mortgage (for homeowners 62+), and Refinancing. Our team can walk you through all your options at no cost."
                },
                {
                  q: "What is the conforming loan limit in Graham County for 2026?",
                  a: "The 2026 conforming loan limit for Graham County is $832,750 – the same baseline limit that applies across all Arizona counties. If your loan exceeds this amount, you will need a jumbo loan."
                },
                {
                  q: "What is the FHA loan limit in Graham County for 2026?",
                  a: "The 2026 FHA loan limit for Graham County is $541,287. This means you can finance a home up to that purchase price using an FHA loan with as little as 3.5% down (with a 580+ credit score)."
                },
                {
                  q: "Why are people buying homes in Graham County?",
                  a: "Graham County attracts buyers looking for affordable family homes in a community-oriented setting. Safford and Thatcher offer good schools, local amenities, and home prices well below the state average. The area is also popular with retirees who enjoy the natural hot springs, outdoor recreation, and mild climate of the Gila Valley."
                },
                {
                  q: "How much do I need for a down payment on a Graham County home?",
                  a: "FHA loans require as little as 3.5% down. Conventional loans can go as low as 3%-5% for qualified buyers. VA loans require zero down payment for eligible veterans. We also work with down payment assistance programs. Contact us to find out which programs you qualify for."
                },
                {
                  q: "How long does it take to close on a home in Graham County?",
                  a: "Most purchase transactions close in 21 to 30 days when all documentation is submitted promptly. Our team is known for fast, smooth closings with no surprises at the closing table."
                }
              ]}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}