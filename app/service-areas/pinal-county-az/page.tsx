import FaqAccordion from "../../component/FaqAccordion";

import React from "react";
import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import HeroCtaButtons from "../../component/HeroCtaButtons";

const cities = [
  {
    name: "Casa Grande",
    description: "Positioned between Phoenix and Tucson, Casa Grande offers fast-growing residential developments and affordable home financing."
  },
  {
    name: "Maricopa",
    description: "Popular commuter city with modern master-planned communities, great parks, and flexible first-time buyer loan programs."
  },
  {
    name: "San Tan Valley",
    description: "Rapidly expanding East Valley suburban area featuring new home construction and low down payment mortgage choices."
  },
  {
    name: "Florence",
    description: "As Pinal County's seat, Florence combines rich historic heritage with growing affordable residential choices."
  },
  {
    name: "Coolidge",
    description: "Agricultural and manufacturing hub offering accessible home loan options and USDA rural financing availability."
  },
  {
    name: "Eloy",
    description: "Conveniently located along I-10, Eloy provides affordable housing options for buyers and refinancers."
  },
  {
    name: "Apache Junction",
    description: "Nestled at the base of the Superstition Mountains with affordable home choices and equestrian properties."
  },
  {
    name: "Superior",
    description: "Historic mining town nestled in the mountains with unique small-town charm and affordable home loans."
  },
  {
    name: "Kearny",
    description: "Scenic Gila River Valley town offering peaceful small-town living and competitive home loan rates."
  },
  {
    name: "Mammoth",
    description: "Quiet desert community in southern Pinal County offering affordable single-family home financing."
  }
];

export default function PinalCountyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow pt-[64px] sm:pt-[72px]">
        {/* Hero Section */}
        <section className="w-full bg-brand-green-deep text-white py-16 lg:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5 pointer-events-none opacity-40"></div>
            <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none opacity-40"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            {/* Breadcrumb inside Pine Green Section */}
            <div className="flex items-center justify-center gap-2 text-[13px] font-medium text-[#c8c8b8] mb-5">
              <Link href="/service-areas/" className="hover:text-[#3fb364] transition-colors duration-200">
                Areas We Serve
              </Link>
              <span className="text-[#3fb364]/60">&gt;</span>
              <span className="text-white font-semibold">Pinal County</span>
            </div>

            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
              MAJOR COUNTIES - PINAL
            </p>

            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">
              Your trusted Pinal County mortgage broker.
            </h1>

            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">
              From San Tan Valley to Casa Grande — 10 communities, one team that knows every one of them.
            </p>

            <HeroCtaButtons className="mb-4" />

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
                Pinal County mortgage services
              </h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px]">
                Select your city below for local mortgage expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cities.map((city, index) => (
                <Link
                  key={index}
                  href={`/service-areas/pinal-county-az/${city.name.toLowerCase().replace(/\./g, "").replace(/\s+/g, "-")}/`}
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
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-6">Home Loans in Pinal County, Arizona</h2>
            <div className="text-brand-text-muted text-[15px] space-y-4">
              <p>Pinal County is one of the fastest-growing counties in the United States, and it is easy to see why. With more affordable home prices than neighboring Maricopa County, a strong sense of community, and easy access to both Phoenix and Tucson, Pinal County attracts first-time buyers, growing families, and retirees alike.</p>
              <p>At Mortgage Brothers, we have been helping Arizona homebuyers navigate the mortgage process for 25+ years. We know Pinal County — from the master-planned neighborhoods of San Tan Valley and Queen Creek to the historic charm of Casa Grande and Florence. Let us help you find the right loan for your next chapter.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>County Population:</strong> Approximately 500,000 residents</li>
                <li><strong>Major Cities:</strong> San Tan Valley, Queen Creek, Casa Grande, Coolidge, Florence, Apache Junction, Eloy, Maricopa</li>
                <li><strong>2026 Conforming Loan Limit:</strong> $832,750</li>
                <li><strong>2026 FHA Loan Limit:</strong> $557,750</li>
                <li><strong>Popular Communities:</strong> Gold Canyon, Arizona City, Magma Ranch, Anthem at Merrill Ranch, Stanfield, Picacho</li>
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
                  q: "What home loan programs are available to Pinal County homebuyers?",
                  a: "Pinal County buyers have access to the full range of mortgage programs including Conventional, FHA, VA (for eligible veterans), Jumbo, FHA Streamline Refinance, First-Time Homebuyer programs, Reverse Mortgage (for homeowners 62+), and Refinancing. The best program depends on your credit score, down payment, and financial goals. Our team can walk you through all your options at no cost."
                },
                {
                  q: "What is the conforming loan limit in Pinal County for 2026?",
                  a: "The 2026 conforming loan limit for Pinal County is $832,750 - the same baseline limit that applies across all Arizona counties. This is the maximum loan amount eligible for conventional financing backed by Fannie Mae or Freddie Mac. If your loan exceeds this amount, you will need a jumbo loan."
                },
                {
                  q: "What is the FHA loan limit in Pinal County for 2026?",
                  a: "The 2026 FHA loan limit for Pinal County is $557,750. This means you can finance a home up to that purchase price using an FHA loan with as little as 3.5% down (with a 580+ credit score). FHA loans are a popular choice in Pinal County because of the flexible credit requirements and low down payment."
                },
                {
                  q: "Why are so many people moving to Pinal County?",
                  a: "Pinal County has become one of the top relocation destinations in the country, largely because of more affordable home prices compared to Maricopa County, newer master-planned communities, excellent schools, and shorter commute times to both Phoenix and Tucson. Cities like San Tan Valley, Queen Creek, and Casa Grande offer a great quality of life without the higher price tag of the Phoenix metro core."
                },
                {
                  q: "How much do I need for a down payment on a Pinal County home?",
                  a: "It depends on the loan type. FHA loans require as little as 3.5% down. Conventional loans can go as low as 3%-5% for qualified buyers. VA loans require zero down payment for eligible veterans. We also work with down payment assistance programs that may help reduce your out-of-pocket costs."
                },
                {
                  q: "How long does it take to close on a home in Pinal County?",
                  a: "Most purchase transactions close in 21 to 30 days when all documentation is submitted promptly. Our team is known for fast, smooth closings - we will keep you informed every step of the way so there are no surprises at the closing table."
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
              Ready to start your Pinal County home journey?
            </h2>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.7] max-w-xl mx-auto mb-8">
              Let&apos;s find the perfect mortgage solution for your Pinal County home.
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