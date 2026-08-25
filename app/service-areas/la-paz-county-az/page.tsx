import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import JsonLd from "@/app/component/JsonLd";
import { buildFaqPageSchema, normalizeFaqs } from "@/lib/seo/structured-data";
import FaqAccordion from "../../component/FaqAccordion";

import React from "react";
import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import HeroCtaButtons from "../../component/HeroCtaButtons";
import CountyCityCards from "../../component/CountyCityCards";
import MortgageSolutionsGrid from "../../component/MortgageSolutionsGrid";

export const metadata: Metadata = getSeoMetadata("/service-areas/la-paz-county-az/");

const cities = [
  { name: "Parker", description: "As La Paz County's seat on the Colorado River, Parker offers water recreation, resort homes, and home loans." },
  { name: "Quartzsite", description: "Famous winter snowbird haven and rockhounding capital offering affordable desert living." },
  { name: "Salome", description: "McMullen Valley desert community providing quiet rural home financing options." },
  { name: "Bouse", description: "Historic desert community offering peaceful rural living and accessible home loans." }
];

const countyFaqs = [
  {
    q: "What home loan programs are available to La Paz County homebuyers?",
    a: "La Paz County buyers have access to the full range of mortgage programs including Conventional, FHA, VA (for eligible veterans), Jumbo, FHA Streamline Refinance, First-Time Homebuyer programs, Reverse Mortgage (for homeowners 62+), and Refinancing. Our team can walk you through all your options at no cost."
  },
  {
    q: "What is the conforming loan limit in La Paz County for 2026?",
    a: "The 2026 conforming loan limit for La Paz County is $832,750 – the same baseline limit that applies across all Arizona counties. If your loan exceeds this amount, you will need a jumbo loan."
  },
  {
    q: "What is the FHA loan limit in La Paz County for 2026?",
    a: "The 2026 FHA loan limit for La Paz County is $541,287. This means you can finance a home up to that purchase price using an FHA loan with as little as 3.5% down (with a 580+ credit score)."
  },
  {
    q: "Why are people buying homes in La Paz County?",
    a: "La Paz County attracts retirees and snowbirds looking for warm winters and affordable homes along the Colorado River. Parker offers waterfront living at a fraction of the cost of larger markets. Quartzsite draws a large seasonal population each winter. For buyers seeking affordable, low-key living in a warm climate, La Paz County is hard to beat."
  },
  {
    q: "How much do I need for a down payment on a La Paz County home?",
    a: "FHA loans require as little as 3.5% down. Conventional loans can go as low as 3%-5% for qualified buyers. VA loans require zero down payment for eligible veterans. We also work with down payment assistance programs. Contact us to find out which programs you qualify for."
  },
  {
    q: "How long does it take to close on a home in La Paz County?",
    a: "Most purchase transactions close in 21 to 30 days when all documentation is submitted promptly. Our team is known for fast, smooth closings with no surprises at the closing table."
  }
];

const faqJsonLd = buildFaqPageSchema(normalizeFaqs(countyFaqs));

export default function LaPazCountyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      
      {faqJsonLd ? <JsonLd data={faqJsonLd} /> : null}
      <Navbar />
      <main className="flex-grow pt-[64px] sm:pt-[72px]">
        <section className="w-full bg-brand-green-deep text-white py-12 sm:py-14 lg:py-16 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 text-[13px] font-medium text-[#c8c8b8] mb-5">
              <Link href="/service-areas/" className="text-[#b8d4b8] hover:text-white transition-colors duration-200">Areas We Serve</Link>
              <span className="text-white/40">&gt;</span>
              <span className="text-white font-semibold">La Paz County</span>
            </div>
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">WESTERN ARIZONA - LA PAZ</p>
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">Your trusted La Paz County mortgage broker.</h1>
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">From Parker to Quartzsite — 4 communities, one team that knows every one of them.</p>
            <HeroCtaButtons className="mb-4" />
          </div>
        </section>

        <section className="w-full py-14 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-10">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">La Paz County mortgage services</h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px]">Select your city below for local mortgage expertise.</p>
            </div>
            <CountyCityCards countySlug="la-paz-county-az" cities={cities} />
          </div>
        </section>

        <section className="w-full py-14 sm:py-16 lg:py-20 bg-white border-t border-[#e8e0d0]/40">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-6">Home Loans in La Paz County, Arizona</h2>
            <div className="text-brand-text-muted text-[15px] space-y-4">
              <p>La Paz County has one of Arizona&apos;s most distinct real estate markets. For a Parker AZ mortgage with personal service and 25+ years of local lending experience, Mortgage Brothers is your team.</p>
              <p>La Paz County is one of Arizona&apos;s smallest and most rural counties, stretching along the Colorado River in the far west of the state. Parker is the county seat and offers affordable waterfront living along the river, while Quartzsite is famous for its winter snowbird season and massive gem and mineral shows. La Paz County attracts retirees, outdoor enthusiasts, and buyers seeking some of the most affordable real estate in Arizona.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Major Cities:</strong> Parker, Quartzsite, Salome, Wenden, Bouse</li>
                <li><strong>2026 Conforming Loan Limit:</strong> $832,750</li>
                <li><strong>2026 FHA Loan Limit:</strong> $541,287</li>
                <li><strong>Popular Communities:</strong> Vicksburg, Brenda, Poston, Alamo Lake area, Wenden, Aguila, Salome</li>
              </ul>
            </div>
          </div>
        </section>

        <MortgageSolutionsGrid placeName="La Paz County" />

        <section className="w-full py-14 sm:py-16 lg:py-20 bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto px-6">
            <FaqAccordion
              title="Frequently Asked Questions"
              items={countyFaqs}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}