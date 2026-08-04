"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const cities = [
  { name: "Sierra Vista", description: "Cochise County's commercial center and home to Fort Huachuca, offering top VA home loan choices." },
  { name: "Douglas", description: "Border community with rich history, international commerce, and affordable home buyer options." },
  { name: "Bisbee", description: "As Cochise County's seat, Bisbee is famed for Victorian architecture, arts scene, and hillside homes." },
  { name: "Benson", description: "Gateway to Kartchner Caverns with low down payment home options along the San Pedro River." },
  { name: "Willcox", description: "Heart of Arizona wine country and agriculture offering USDA rural loans and quiet country homes." },
  { name: "Tombstone", description: "Historic Old West town providing unique small-town property financing." },
  { name: "Huachuca City", description: "Neighboring Sierra Vista and Fort Huachuca with accessible military and civilian home financing." }
];

export default function CochiseCountyPage() {
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
              <span className="text-white font-semibold">Cochise County</span>
            </div>
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">SOUTHERN ARIZONA - COCHISE</p>
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">Your trusted Cochise County mortgage broker.</h1>
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">From Sierra Vista to Bisbee — 7 communities, one team that knows every one of them.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-4">
              <Link href="/#get-pre-approved" className="w-full sm:w-auto btn-primary hover:shadow-brand-green-accent/20 group">
                Start My Pre-Approval
              </Link>
              <Link href="/about/#talk-to-broker" className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-white/30 hover:border-white/60 text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all duration-200">
                Talk to a Broker
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">Cochise County mortgage services</h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px]">Select your city below for local mortgage expertise.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cities.map((city, index) => (
                <Link key={index} href={`/service-areas/cochise-county-az/${city.name.toLowerCase().replace(/\./g, "").replace(/\s+/g, "-")}/`} className="bg-[#faf7f0] rounded-2xl p-6 lg:p-7 border border-[#e8e0d0]/50 shadow-sm flex flex-col hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
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
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-6">Home Loans in Cochise County, Arizona</h2>
            <div className="text-brand-text-muted text-[15px] space-y-4">
              <p>Sierra Vista families and Fort Huachuca military members have trusted Mortgage Brothers as their Sierra Vista mortgage broker for over 25 years. We serve buyers across all of Cochise County.</p>
              <p>Cochise County sits in the southeast corner of Arizona along the Mexican border, home to a rich blend of history, culture, and natural beauty. From the military community of Sierra Vista and Fort Huachuca to the Victorian-era mining town of Bisbee and the legendary Tombstone, Cochise County offers a unique mix of affordable real estate, wide-open landscapes, and small-town community.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Major Cities:</strong> Sierra Vista, Bisbee, Tombstone, Douglas, Willcox, Benson</li>
                <li><strong>2026 Conforming Loan Limit:</strong> $832,750</li>
                <li><strong>2026 FHA Loan Limit:</strong> $541,287</li>
                <li><strong>Popular Communities:</strong> Palominas, Sunsites, Pearce, Elfrida, Naco, Portal, McNeal, Pirtleville</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8e0d0]/50">
                <h3 className="text-[17px] font-bold text-brand-green-deep mb-2">What mortgage loan options are available in Cochise County, AZ?</h3>
                <p className="text-brand-text-muted text-[15px]">AZ Mortgage Brothers provides a full suite of home loan solutions throughout Cochise County, including Conventional, FHA, VA, and Jumbo loans. We also offer private money lending, refinancing, and reverse mortgages for primary residences and investment properties.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8e0d0]/50">
                <h3 className="text-[17px] font-bold text-brand-green-deep mb-2">Do you offer VA loans for military personnel moving to Sierra Vista?</h3>
                <p className="text-brand-text-muted text-[15px]">Yes, we proudly support military families relocating to the Fort Huachuca area in Sierra Vista. We offer competitive VA home loans, which often provide zero down payment options and excellent rates for eligible veterans and active-duty service members.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8e0d0]/50">
                <h3 className="text-[17px] font-bold text-brand-green-deep mb-2">What is the 2026 FHA loan limit for Cochise County?</h3>
                <p className="text-brand-text-muted text-[15px]">For 2026, the FHA loan limit for a single-family residence in Cochise County is $541,287. This makes FHA loans highly accessible for first-time homebuyers and families looking for lower down payment requirements in Southeastern Arizona.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8e0d0]/50">
                <h3 className="text-[17px] font-bold text-brand-green-deep mb-2">What is the 2026 Conventional loan limit in Cochise County, Arizona?</h3>
                <p className="text-brand-text-muted text-[15px]">The 2026 baseline conforming (Conventional) loan limit for a single-unit property in Cochise County is $832,750. For loan amounts exceeding this limit, we offer robust Jumbo loan programs.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8e0d0]/50">
                <h3 className="text-[17px] font-bold text-brand-green-deep mb-2">How quickly can I get pre-approved for a home in Cochise County?</h3>
                <p className="text-brand-text-muted text-[15px]">Our fast, streamlined digital pre-approval process takes as little as 3 minutes to begin and does not impact your credit score. Once your financial documents are submitted, you can typically expect a formal pre-approval letter in a matter of hours.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8e0d0]/50">
                <h3 className="text-[17px] font-bold text-brand-green-deep mb-2">Which cities in Cochise County does AZ Mortgage Brothers serve?</h3>
                <p className="text-brand-text-muted text-[15px]">We serve all major cities and rural communities across Cochise County, including Sierra Vista, Bisbee, Tombstone, and Douglas. We help buyers finance everything from historic mining town properties to new residential developments.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}