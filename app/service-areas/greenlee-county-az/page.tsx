import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import FaqAccordion from "../../component/FaqAccordion";

import React from "react";
import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import HeroCtaButtons from "../../component/HeroCtaButtons";
import CountyCityCards from "../../component/CountyCityCards";

export const metadata: Metadata = getSeoMetadata("/service-areas/greenlee-county-az/");

const cities = [
  { name: "Clifton", description: "As Greenlee County's seat in a dramatic mountain canyon, Clifton offers historic character and affordable home loans." },
  { name: "Duncan", description: "Agricultural community in the Gila River Valley providing quiet rural home buyer options." },
  { name: "Morenci", description: "Famous copper mining community with local housing and home financing solutions." }
];

export default function GreenleeCountyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />
      <main className="flex-grow pt-[64px] sm:pt-[72px]">
        <section className="w-full bg-brand-green-deep text-white py-12 sm:py-14 lg:py-16 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 text-[13px] font-medium text-[#c8c8b8] mb-5">
              <Link href="/service-areas/" className="text-[#b8d4b8] hover:text-white transition-colors duration-200">Areas We Serve</Link>
              <span className="text-white/40">&gt;</span>
              <span className="text-white font-semibold">Greenlee County</span>
            </div>
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">SOUTHERN ARIZONA - GREENLEE</p>
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">Your trusted Greenlee County mortgage broker.</h1>
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">From Clifton to Morenci — 3 communities, one team that knows every one of them.</p>
            <HeroCtaButtons className="mb-4" />
          </div>
        </section>

        <section className="w-full py-14 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-10">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">Greenlee County mortgage services</h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px]">Select your city below for local mortgage expertise.</p>
            </div>
            <CountyCityCards countySlug="greenlee-county-az" cities={cities} />
          </div>
        </section>

        <section className="w-full py-14 sm:py-16 lg:py-20 bg-white border-t border-[#e8e0d0]/40">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-6">Home Loans in Greenlee County, Arizona</h2>
            <div className="text-brand-text-muted text-[15px] space-y-4">
              <p>Greenlee County is one of Arizona&apos;s most tight-knit communities. When you need a Greenlee County mortgage with straightforward guidance and no runaround, Mortgage Brothers delivers.</p>
              <p>Greenlee County is Arizona&apos;s smallest and least-populated county, nestled in the mountains of eastern Arizona along the New Mexico border. The county is dominated by the massive Morenci copper mine — one of the largest open-pit copper mines in the world — and the charming historic town of Clifton along the San Francisco River. Greenlee offers extremely affordable real estate and a close-knit community feel for buyers who want true small-town Arizona living.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Major Cities:</strong> Clifton, Morenci, Duncan, York</li>
                <li><strong>2026 Conforming Loan Limit:</strong> $832,750</li>
                <li><strong>2026 FHA Loan Limit:</strong> $541,287</li>
                <li><strong>Popular Communities:</strong> York, Metcalf, Franklin, Virden, Sheldon</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full py-14 sm:py-16 lg:py-20 bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto px-6">
            <FaqAccordion
              title="Frequently Asked Questions"
              items={[
                {
                  q: "What mortgage loan options are available in Greenlee County, AZ?",
                  a: "Mortgage Brothers LLC provides a comprehensive suite of home loan programs throughout Greenlee County. Our options include Conventional, FHA, VA, and Jumbo loans, as well as refinancing, private money lending, and reverse mortgages."
                },
                {
                  q: "What is the 2026 FHA loan limit for Greenlee County?",
                  a: "For 2026, the FHA loan limit for a single-family residence in Greenlee County is $541,287. These loan limits provide an accessible path to homeownership for first-time buyers and those seeking lower down payment requirements in Eastern Arizona."
                },
                {
                  q: "Do you provide mortgages for rural homes and acreage properties in Greenlee County?",
                  a: "Yes, we specialize in financing for a variety of property types. Whether you are looking for a home in the close-knit mining community of Morenci or seeking rural landscapes and acreage properties in Duncan, we have flexible loan options to fit your needs."
                },
                {
                  q: "What is the 2026 Conventional loan limit in Greenlee County, Arizona?",
                  a: "The 2026 baseline conforming (Conventional) loan limit for a single-unit property in Greenlee County is $832,750. If you are purchasing a property that exceeds this amount, we offer competitive Jumbo loan programs."
                },
                {
                  q: "How fast can I get pre-approved for a home in Greenlee County?",
                  a: "Our streamlined digital pre-approval process takes as little as 3 minutes to start and has zero impact on your credit score. After submitting your financial documents, we typically provide a formal pre-approval letter within 4 to 8 hours."
                },
                {
                  q: "Which cities and towns in Greenlee County do you serve?",
                  a: "As licensed Arizona mortgage brokers, we serve all communities across Greenlee County. Our most popular local markets include Clifton (the county seat), Morenci, and Duncan."
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