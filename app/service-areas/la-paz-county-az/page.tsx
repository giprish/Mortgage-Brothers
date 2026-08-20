import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import FaqAccordion from "../../component/FaqAccordion";

import React from "react";
import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import HeroCtaButtons from "../../component/HeroCtaButtons";

export const metadata: Metadata = getSeoMetadata("/service-areas/la-paz-county-az/");

const cities = [
  { name: "Parker", description: "As La Paz County's seat on the Colorado River, Parker offers water recreation, resort homes, and home loans." },
  { name: "Quartzsite", description: "Famous winter snowbird haven and rockhounding capital offering affordable desert living." },
  { name: "Salome", description: "McMullen Valley desert community providing quiet rural home financing options." },
  { name: "Bouse", description: "Historic desert community offering peaceful rural living and accessible home loans." }
];

export default function LaPazCountyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
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
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">From Parker to Quartzsite â€” 4 communities, one team that knows every one of them.</p>
            <HeroCtaButtons className="mb-4" />
          </div>
        </section>

        <section className="w-full py-14 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-10">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">La Paz County mortgage services</h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px]">Select your city below for local mortgage expertise.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cities.map((city, index) => (
                <Link key={index} href={`/service-areas/la-paz-county-az/${city.name.toLowerCase().replace(/\./g, "").replace(/\s+/g, "-")}/`} className="bg-[#faf7f0] rounded-2xl p-6 lg:p-7 border border-[#e8e0d0]/50 shadow-sm flex flex-col hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4 text-brand-green-deep">
                    <h3 className="text-[17px] font-bold tracking-tight">{city.name}</h3>
                  </div>
                  <p className="text-brand-text-muted text-[13.5px] lg:text-[14px] leading-relaxed">{city.description}</p>
                </Link>
              ))}
            </div>
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

        <section className="w-full py-14 sm:py-16 lg:py-20 bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto px-6">
            <FaqAccordion
              title="Frequently Asked Questions"
              items={[
                {
                  q: "What mortgage loan options are available in La Paz County, AZ?",
                  a: "Mortgage Brothers LLC provides a comprehensive range of home loan programs throughout La Paz County. Our offerings include Conventional, FHA, VA, and Jumbo loans, as well as refinancing and reverse mortgages tailored for primary residences and seasonal homes."
                },
                {
                  q: "What is the 2026 FHA loan limit for La Paz County?",
                  a: "For 2026, the FHA loan limit for a single-family residence in La Paz County is $541,287. These accessible loan limits provide great options for first-time homebuyers looking to settle in Western Arizona with lower down payment requirements."
                },
                {
                  q: "Do you provide mortgages for vacation homes near the Colorado River?",
                  a: "Yes, we specialize in financing for secondary residences and vacation properties. Whether you are looking for a riverside home in Parker or exploring residential communities in Quartzsite, we have Conventional and Jumbo loan programs designed for seasonal and vacation homebuyers."
                },
                {
                  q: "What is the 2026 Conventional loan limit in La Paz County, Arizona?",
                  a: "The 2026 baseline conforming (Conventional) loan limit for a single-unit property in La Paz County is $832,750. For property purchases that exceed this baseline, we offer competitive Jumbo mortgage products."
                },
                {
                  q: "How fast can I get pre-approved for a home in La Paz County?",
                  a: "Our streamlined digital pre-approval process takes as little as 3 minutes to begin, with absolutely no impact on your credit score. Once your financial documents are submitted, we work quickly to provide you with a formal pre-approval letter so you can shop with confidence."
                },
                {
                  q: "Which cities in La Paz County do you serve?",
                  a: "As licensed Arizona mortgage brokers, we serve all communities within La Paz County. Our most popular local markets include Parker, the county seat along the Colorado River, and Quartzsite, known for its unique desert landscapes and seasonal residential communities."
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