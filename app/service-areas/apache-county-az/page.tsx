import FaqAccordion from "../../component/FaqAccordion";

import React from "react";
import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const cities = [
  { name: "St. Johns", description: "As Apache County's seat, St. Johns offers quiet small-town living, agriculture, and affordable home loans." },
  { name: "Eagar", description: "Located at the foot of the White Mountains, Eagar offers mountain air, outdoor recreation, and residential loans." },
  { name: "Springerville", description: "White Mountains community featuring scenic vistas, rural lifestyle, and flexible mortgage programs." },
  { name: "Chinle", description: "Gateway to Canyon de Chelly National Monument with unique community housing options." },
  { name: "Window Rock", description: "Capital of the Navajo Nation offering local residential financing guidance." }
];

export default function ApacheCountyPage() {
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
              <span className="text-white font-semibold">Apache County</span>
            </div>
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">NORTHERN ARIZONA - APACHE</p>
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">Your trusted Apache County mortgage broker.</h1>
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">From St. Johns to Eagar — 5 communities, one team that knows every one of them.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-4">
              <Link href="/#get-pre-approved" className="w-full sm:w-auto btn-primary hover:shadow-brand-green-accent/20 group">
                Start My Pre-Approval
              </Link>
              <Link href="tel:+16025352171" className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-white/30 hover:border-white/60 text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all duration-200">
                Talk to a Broker
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">Apache County mortgage services</h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px]">Select your city below for local mortgage expertise.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cities.map((city, index) => (
                <Link key={index} href={`/service-areas/apache-county-az/${city.name.toLowerCase().replace(/\./g, "").replace(/\s+/g, "-")}/`} className="bg-[#faf7f0] rounded-2xl p-6 lg:p-7 border border-[#e8e0d0]/50 shadow-sm flex flex-col hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
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

        <section className="w-full py-16 bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto px-6">
            <FaqAccordion
              title="Frequently Asked Questions"
              items={[
                {
                  q: "What types of mortgage loans are available in Apache County, AZ?",
                  a: "AZ Mortgage Brothers offers a comprehensive range of mortgage products in Apache County, including Conventional, FHA, VA, USDA, and Jumbo loans, as well as refinancing options for current homeowners."
                },
                {
                  q: "What is the FHA loan limit for Apache County in 2026?",
                  a: "For 2026, the FHA loan limit for a single-family home in Apache County is $541,287. These limits are updated annually and vary depending on the property type (e.g., duplex, triplex, or fourplex)."
                },
                {
                  q: "How fast can I get a mortgage pre-approval?",
                  a: "AZ Mortgage Brothers provides a streamlined pre-approval process, often delivering a pre-approval letter within a few hours after receiving your completed application and necessary financial documentation."
                },
                {
                  q: "What is the minimum credit score required for a mortgage in Apache County?",
                  a: "Credit score requirements depend on the loan program. Generally, FHA loans may be available for scores as low as 580, while Conventional loans typically require a minimum score of 620."
                },
                {
                  q: "Does AZ Mortgage Brothers offer down payment assistance in Apache County?",
                  a: "Yes, we work with various programs that offer down payment assistance to eligible homebuyers in Apache County, helping to make homeownership more accessible for first-time buyers and those with limited savings."
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