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

export const metadata: Metadata = getSeoMetadata("/service-areas/gila-county-az/");

const cities = [
  { name: "Payson", description: "Popular Rim Country retreat nestled in the Mogollon Rim pine forests with mountain home financing options." },
  { name: "Globe", description: "As Gila County's seat, Globe features historic copper mining heritage, hillside homes, and home loans." },
  { name: "Miami", description: "Historic mining town neighboring Globe with affordable character housing and competitive rates." },
  { name: "Star Valley", description: "Rim Country community bordering Payson with mountain views and spacious property financing." },
  { name: "Hayden", description: "Small Gila River valley town offering quiet rural residential home financing." },
  { name: "Pine", description: "Mogollon Rim mountain town with cabins, second homes, and pine-forest property financing." },
  { name: "Strawberry", description: "Neighboring Pine along the Rim with cabin retreats and mountain home loan options." },
  { name: "Christopher Creek", description: "Rim Country community east of Payson with creek-side cabins and recreational home financing." },
  { name: "Forest Lakes", description: "High-country pine community with cabin and vacation-home mortgage options near the Mogollon Rim." },
  { name: "Kohls Ranch", description: "Payson-area Rim Country neighborhood with mountain cabins and recreational property loans." },
  { name: "Washington Park", description: "Quiet Rim Country community with forested lots and mountain home financing." },
  { name: "Whispering Pines", description: "Pine-forest neighborhood near Payson offering cabin and primary-home mortgage options." }
];

const countyFaqs = [
  {
    q: "What home loan programs are available to Gila County homebuyers?",
    a: "Gila County buyers have access to the full range of mortgage programs including Conventional, FHA, VA (for eligible veterans), Jumbo, FHA Streamline Refinance, First-Time Homebuyer programs, Reverse Mortgage (for homeowners 62+), and Refinancing. Our team can walk you through all your options at no cost."
  },
  {
    q: "What is the conforming loan limit in Gila County for 2026?",
    a: "The 2026 conforming loan limit for Gila County is $832,750 – the same baseline limit that applies across all Arizona counties. This is the maximum loan amount eligible for conventional financing backed by Fannie Mae or Freddie Mac. If your loan exceeds this amount, you will need a jumbo loan."
  },
  {
    q: "What is the FHA loan limit in Gila County for 2026?",
    a: "The 2026 FHA loan limit for Gila County is $541,287. This means you can finance a home up to that purchase price using an FHA loan with as little as 3.5% down (with a 580+ credit score). FHA loans are a great option in Gila County given the more affordable home prices throughout Payson, Globe, and surrounding communities."
  },
  {
    q: "Why are people buying homes in Gila County?",
    a: "Gila County attracts buyers who want the beauty of Arizona without the heat and congestion of the Valley. Payson and the Rim Country area are especially popular with Phoenix-area residents looking for a cooler mountain retreat or a full-time relocation. Globe and Miami offer some of the most affordable home prices in Arizona with a strong sense of history and community."
  },
  {
    q: "How much do I need for a down payment on a Gila County home?",
    a: "FHA loans require as little as 3.5% down. Conventional loans can go as low as 3%-5% for qualified buyers. VA loans require zero down payment for eligible veterans. We also work with down payment assistance programs. Contact us to find out which programs you qualify for."
  },
  {
    q: "How long does it take to close on a home in Gila County?",
    a: "Most purchase transactions close in 21 to 30 days when all documentation is submitted promptly. Our team is known for fast, smooth closings with no surprises at the closing table."
  }
];

const faqJsonLd = buildFaqPageSchema(normalizeFaqs(countyFaqs));

export default function GilaCountyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      
      {faqJsonLd ? <JsonLd data={faqJsonLd} /> : null}
      <Navbar />
      <main className="flex-grow pt-[64px] sm:pt-[72px]">
        <section className="w-full bg-brand-green-deep text-white py-16 lg:py-20 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            {/* Breadcrumb inside Pine Green Section */}
            <div className="flex items-center justify-center gap-2 text-[13px] font-medium text-[#c8c8b8] mb-5">
              <Link href="/service-areas/" className="text-[#b8d4b8] hover:text-white transition-colors duration-200">Areas We Serve</Link>
              <span className="text-white/40">&gt;</span>
              <span className="text-white font-semibold">Gila County</span>
            </div>
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">NORTHERN ARIZONA - GILA</p>
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">Your trusted Gila County mortgage broker.</h1>
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">From Payson to Globe — 12 communities, one team that knows every one of them.</p>
            <HeroCtaButtons className="mb-4" />
          </div>
        </section>

        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">Gila County mortgage services</h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px]">Select your city below for local mortgage expertise.</p>
            </div>
            <CountyCityCards countySlug="gila-county-az" cities={cities} />
          </div>
        </section>

        <section className="w-full py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-6">Home Loans in Gila County, Arizona</h2>
            <div className="text-brand-text-muted text-[15px] space-y-4">
              <p>Buying a home in Payson or the Rim Country? As your local Payson mortgage broker, Mortgage Brothers knows Gila County real estate inside and out.</p>
              <p>Gila County is Arizona&apos;s Rim Country — a stunning stretch of pine forests, mountain towns, and scenic rivers that draws buyers looking for a quieter pace of life without sacrificing community. From the mountain hub of Payson to the historic mining towns of Globe and Miami, Gila County offers some of the most affordable and picturesque real estate in the state.</p>
              <p>At Mortgage Brothers, we have been helping Arizona homebuyers navigate the mortgage process for 25+ years. Whether you are buying a primary home in Payson, a cabin near Strawberry or Pine, or refinancing in Globe, we know Gila County and can find the right loan for you.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Major Cities:</strong> Payson, Globe, Miami, Star Valley, Strawberry, Pine, Christopher Creek, Kohls Ranch</li>
                <li><strong>2026 Conforming Loan Limit:</strong> $832,750</li>
                <li><strong>2026 FHA Loan Limit:</strong> $541,287</li>
                <li><strong>Popular Communities:</strong> Washington Park, Whispering Pines, Beaver Valley, Tonto Village, Punkin Center, Young</li>
              </ul>
            </div>
          </div>
        </section>

        <MortgageSolutionsGrid placeName="Gila County" />

        <section className="w-full py-16 bg-[#fcf9f3]">
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