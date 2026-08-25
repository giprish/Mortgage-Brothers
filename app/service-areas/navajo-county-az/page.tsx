import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import FaqAccordion from "../../component/FaqAccordion";

import React from "react";
import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import HeroCtaButtons from "../../component/HeroCtaButtons";
import CountyCityCards from "../../component/CountyCityCards";
import MortgageSolutionsGrid from "../../component/MortgageSolutionsGrid";

export const metadata: Metadata = getSeoMetadata("/service-areas/navajo-county-az/");

const cities = [
  { name: "Show Low", description: "Commercial hub of the White Mountains offering cool pine forest living, cabin retreats, and home loans." },
  { name: "Pinetop-Lakeside", description: "Resort town in the White Mountains featuring golf communities, mountain cabins, and second-home financing." },
  { name: "Pinetop", description: "White Mountains community with pine-forest homes, cabins, and competitive mortgage rates." },
  { name: "Holbrook", description: "As Navajo County's seat along historic Route 66, Holbrook offers affordable small-town home purchase options." },
  { name: "Taylor", description: "Family-centered White Mountain area town with ranch properties and flexible home loan choices." },
  { name: "Snowflake", description: "Historic pioneer heritage town offering family neighborhoods, acreage, and competitive mortgage rates." },
  { name: "Winslow", description: "Famous Route 66 community offering affordable housing options and first-time buyer financing." }
];

export default function NavajoCountyPage() {
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
              <span className="text-white font-semibold">Navajo County</span>
            </div>
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">NORTHERN ARIZONA - NAVAJO</p>
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">Your trusted Navajo County mortgage broker.</h1>
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">From Show Low to Winslow — 7 communities, one team that knows every one of them.</p>
            <HeroCtaButtons className="mb-4" />
          </div>
        </section>

        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">Navajo County mortgage services</h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px]">Select your city below for local mortgage expertise.</p>
            </div>
            <CountyCityCards countySlug="navajo-county-az" cities={cities} />
          </div>
        </section>

        <section className="w-full py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-6">Home Loans in Navajo County, Arizona</h2>
            <div className="text-brand-text-muted text-[15px] space-y-4">
              <p>Mortgage Brothers is the Show Low mortgage broker that Navajo County homebuyers rely on — from Pinetop-Lakeside to Holbrook to Snowflake, we know this market and we are here to help.</p>
              <p>Navajo County spans a dramatic stretch of Arizona from the Colorado Plateau to the White Mountains. It is home to a mix of small towns and communities that attract buyers seeking mountain living, outdoor recreation, and more affordable prices than the Phoenix metro. Show Low and Pinetop-Lakeside are especially popular with Valley residents looking to escape the summer heat, while Holbrook and Winslow offer some of the most affordable homes in the state.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Major Cities:</strong> Show Low, Pinetop-Lakeside, Holbrook, Winslow, Taylor, Snowflake</li>
                <li><strong>2026 Conforming Loan Limit:</strong> $832,750</li>
                <li><strong>2026 FHA Loan Limit:</strong> $541,287</li>
                <li><strong>Popular Communities:</strong> Linden, Lakeside, Clay Springs, Pinedale, Joseph City, Sun Valley, Woodruff</li>
              </ul>
            </div>
          </div>
        </section>

        <MortgageSolutionsGrid placeName="Navajo County" />

        <section className="w-full py-16 bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto px-6">
            <FaqAccordion
              title="Frequently Asked Questions"
              items={
              [
                {
                  q: "What home loan programs are available to Navajo County homebuyers?",
                  a: "Navajo County buyers have access to the full range of mortgage programs including Conventional, FHA, VA (for eligible veterans), Jumbo, FHA Streamline Refinance, First-Time Homebuyer programs, Reverse Mortgage (for homeowners 62+), and Refinancing. Our team can walk you through all your options at no cost."
                },
                {
                  q: "What is the conforming loan limit in Navajo County for 2026?",
                  a: "The 2026 conforming loan limit for Navajo County is $832,750 – the same baseline limit that applies across all Arizona counties. If your loan exceeds this amount, you will need a jumbo loan."
                },
                {
                  q: "What is the FHA loan limit in Navajo County for 2026?",
                  a: "The 2026 FHA loan limit for Navajo County is $541,287. This means you can finance a home up to that purchase price using an FHA loan with as little as 3.5% down (with a 580+ credit score)."
                },
                {
                  q: "Why are people buying homes in Navajo County?",
                  a: "Navajo County attracts buyers who want cooler temperatures, mountain scenery, and a quieter pace of life. Show Low and Pinetop are popular with Phoenix-area families as second homes or permanent relocations, while Holbrook and Winslow offer very affordable primary home options."
                },
                {
                  q: "How much do I need for a down payment on a Navajo County home?",
                  a: "FHA loans require as little as 3.5% down. Conventional loans can go as low as 3%-5% for qualified buyers. VA loans require zero down payment for eligible veterans. We also work with down payment assistance programs. Contact us to find out which programs you qualify for."
                },
                {
                  q: "How long does it take to close on a home in Navajo County?",
                  a: "Most purchase transactions close in 21 to 30 days when all documentation is submitted promptly. Our team is known for fast, smooth closings with no surprises at the closing table."
                }
              ]
            }
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}