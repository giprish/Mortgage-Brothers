import FaqAccordion from "../../component/FaqAccordion";

import React from "react";
import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import HeroCtaButtons from "../../component/HeroCtaButtons";

const cities = [
  { name: "Yuma", description: "As Yuma County's seat and Sunniest City in the World, Yuma offers thriving agriculture, military bases, and home loans." },
  { name: "San Luis", description: "Fast-growing border city with expanding residential developments and low down payment home loans." },
  { name: "Somerton", description: "Culturally rich community in the fertile Yuma Valley with family housing choices." },
  { name: "Wellton", description: "Agricultural community along I-8 with quiet small-town charm and affordable home loans." }
];

export default function YumaCountyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />
      <main className="flex-grow pt-[64px] sm:pt-[72px]">
        <section className="w-full bg-brand-green-deep text-white py-16 lg:py-20 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            {/* Breadcrumb inside Pine Green Section */}
            <div className="flex items-center justify-center gap-2 text-[13px] font-medium text-[#c8c8b8] mb-5">
              <Link href="/service-areas/" className="hover:text-[#3fb364] transition-colors duration-200">Areas We Serve</Link>
              <span className="text-[#3fb364]/60">&gt;</span>
              <span className="text-white font-semibold">Yuma County</span>
            </div>
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">WESTERN ARIZONA - YUMA</p>
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">Your trusted Yuma County mortgage broker.</h1>
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">From Yuma to San Luis — 4 communities, one team that knows every one of them.</p>
            <HeroCtaButtons className="mb-4" />
          </div>
        </section>

        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">Yuma County mortgage services</h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px]">Select your city below for local mortgage expertise.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cities.map((city, index) => (
                <Link key={index} href={`/service-areas/yuma-county-az/${city.name.toLowerCase().replace(/\./g, "").replace(/\s+/g, "-")}/`} className="bg-[#faf7f0] rounded-2xl p-6 lg:p-7 border border-[#e8e0d0]/50 shadow-sm flex flex-col hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
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
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-6">Home Loans in Yuma County, Arizona</h2>
            <div className="text-brand-text-muted text-[15px] space-y-4">
              <p>Yuma County is located in the far southwest corner of Arizona at the junction of the Colorado River and the California and Mexico borders. Yuma is one of the sunniest cities on Earth and a major agricultural hub, while also serving as home to Marine Corps Air Station Yuma. The county attracts military families, retirees, snowbirds, and buyers looking for affordable homes in a warm, sunny climate.</p>
              <p>At Mortgage Brothers, we have been helping Arizona homebuyers navigate the mortgage process for 25+ years. As your local Yuma mortgage broker, we serve military families, retirees, and homebuyers across the county with competitive rates, fast closings, and personalized guidance.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Major Cities:</strong> Yuma, San Luis, Somerton, Wellton, Dateland</li>
                <li><strong>2026 Conforming Loan Limit:</strong> $832,750</li>
                <li><strong>2026 FHA Loan Limit:</strong> $541,287</li>
                <li><strong>Popular Communities:</strong> Fortuna Foothills, Yuma Foothills, Avenue B and C, Ligurta, Dome Valley, Gadsden</li>
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
                  q: "What home loan programs are available to Yuma County homebuyers?",
                  a: "Yuma County buyers have access to the full range of mortgage programs including Conventional, FHA, VA (for eligible veterans), Jumbo, FHA Streamline Refinance, First-Time Homebuyer programs, Reverse Mortgage (for homeowners 62+), and Refinancing. Our team can walk you through all your options at no cost."
                },
                {
                  q: "What is the conforming loan limit in Yuma County for 2026?",
                  a: "The 2026 conforming loan limit for Yuma County is $832,750 - the same baseline limit that applies across all Arizona counties. If your loan exceeds this amount, you will need a jumbo loan."
                },
                {
                  q: "What is the FHA loan limit in Yuma County for 2026?",
                  a: "The 2026 FHA loan limit for Yuma County is $541,287. This means you can finance a home up to that purchase price using an FHA loan with as little as 3.5% down (with a 580+ credit score)."
                },
                {
                  q: "Why are people buying homes in Yuma County?",
                  a: "Yuma County attracts military families stationed at MCAS Yuma, retirees and snowbirds seeking warm winters at an affordable price, and buyers looking for a low cost of living close to California and Mexico. Yuma offers some of the most affordable home prices among Arizona&apos;s larger cities, making it a strong value for buyers on a budget."
                },
                {
                  q: "How much do I need for a down payment on a Yuma County home?",
                  a: "FHA loans require as little as 3.5% down. Conventional loans can go as low as 3%-5% for qualified buyers. VA loans require zero down payment for eligible veterans. We also work with down payment assistance programs. Contact us to find out which programs you qualify for."
                },
                {
                  q: "How long does it take to close on a home in Yuma County?",
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
              Ready to start your Yuma County home journey?
            </h2>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.7] max-w-xl mx-auto mb-8">
              Let&apos;s find the perfect mortgage solution for your Yuma County home.
            </p>
            <HeroCtaButtons />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}