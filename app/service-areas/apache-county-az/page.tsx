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
import { getCountyCitiesDetails } from "../../../lib/cityData";

export const metadata: Metadata = getSeoMetadata("/service-areas/apache-county-az/");

const cities = getCountyCitiesDetails("apache-county-az");

const countyFaqs = [
  {
    q: "What home loan programs are available to Apache County homebuyers?",
    a: "Apache County buyers have access to the full range of mortgage programs including Conventional, FHA, VA (for eligible veterans), Jumbo, FHA Streamline Refinance, First-Time Homebuyer programs, Reverse Mortgage (for homeowners 62+), and Refinancing. Our team can walk you through all your options at no cost."
  },
  {
    q: "What is the conforming loan limit in Apache County for 2026?",
    a: "The 2026 conforming loan limit for Apache County is $832,750 – the same baseline limit that applies across all Arizona counties. This is the maximum loan amount eligible for conventional financing backed by Fannie Mae or Freddie Mac. If your loan exceeds this amount, you will need a jumbo loan."
  },
  {
    q: "What is the FHA loan limit in Apache County for 2026?",
    a: "The 2026 FHA loan limit for Apache County is $541,287. This means you can finance a home up to that purchase price using an FHA loan with as little as 3.5% down (with a 580+ credit score). FHA loans are a popular option in Apache County given the more affordable home prices throughout the White Mountains region."
  },
  {
    q: "Why are people buying homes in Apache County?",
    a: "Apache County attracts buyers who love the outdoors and want a quieter lifestyle in the White Mountains of eastern Arizona. Snowflake and Eagar offer affordable family neighborhoods, while Greer and Alpine draw buyers looking for cabin retreats and vacation properties. The area offers four seasons, excellent fishing and hiking, and a strong sense of community."
  },
  {
    q: "How much do I need for a down payment on an Apache County home?",
    a: "FHA loans require as little as 3.5% down. Conventional loans can go as low as 3%-5% for qualified buyers. VA loans require zero down payment for eligible veterans. We also work with down payment assistance programs. Contact us to find out which programs you qualify for."
  },
  {
    q: "How long does it take to close on a home in Apache County?",
    a: "Most purchase transactions close in 21 to 30 days when all documentation is submitted promptly. Our team is known for fast, smooth closings with no surprises at the closing table."
  }
];

const faqJsonLd = buildFaqPageSchema(normalizeFaqs(countyFaqs));

export default function ApacheCountyPage() {
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
              <span className="text-white font-semibold">Apache County</span>
            </div>
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">NORTHERN ARIZONA - APACHE</p>
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">Your trusted Apache County mortgage broker.</h1>
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">From St. Johns to Alpine — {cities.length} communities, one team that knows every one of them.</p>
            <HeroCtaButtons className="mb-4" />
          </div>
        </section>

        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">Apache County mortgage services</h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px]">Select your city below for local mortgage expertise.</p>
            </div>
            <CountyCityCards countySlug="apache-county-az" cities={cities} />
          </div>
        </section>

        <section className="w-full py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-6">Home Loans in Apache County, Arizona</h2>
            <div className="text-brand-text-muted text-[15px] space-y-4">
              <p>Whether you are buying in the White Mountains around Eagar and Springerville or in the historic community of St. Johns, Mortgage Brothers is here to make your Apache County home loan straightforward and stress-free.</p>
              <p>Apache County is Arizona&apos;s northeasternmost county, a vast stretch of high desert and alpine forest that includes the White Mountains, part of the Navajo Nation, and the striking red rock canyons of Canyon de Chelly. With small-town communities, wide-open spaces, and some of the most affordable real estate in the state, Apache County attracts buyers seeking a quiet, scenic pace of life. At Mortgage Brothers, we have been helping Arizona homebuyers navigate the mortgage process for 25+ years — from first-time purchases in Springerville to refinances in St. Johns.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Major Cities:</strong> St. Johns, Eagar, Springerville, Chinle, Window Rock</li>
                <li><strong>2026 Conforming Loan Limit:</strong> $832,750</li>
                <li><strong>2026 FHA Loan Limit:</strong> $541,287</li>
                <li><strong>Popular Communities:</strong> Greer, McNary, Sanders, Ganado, Rock Point, Teec Nos Pos, Saint Michaels</li>
              </ul>
            </div>
          </div>
        </section>

        <MortgageSolutionsGrid placeName="Apache County" />

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