"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

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
        <section className="w-full bg-brand-green-deep text-white py-16 lg:py-20 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            {/* Breadcrumb inside Pine Green Section */}
            <div className="flex items-center justify-center gap-2 text-[13px] font-medium text-[#c8c8b8] mb-5">
              <Link href="/service-areas/" className="hover:text-[#3fb364] transition-colors duration-200">Areas We Serve</Link>
              <span className="text-[#3fb364]/60">&gt;</span>
              <span className="text-white font-semibold">La Paz County</span>
            </div>
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">WESTERN ARIZONA - LA PAZ</p>
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">Your trusted La Paz County mortgage broker.</h1>
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">From Parker to Quartzsite — 4 communities, one team that knows every one of them.</p>
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

        <section className="w-full py-16 bg-white">
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

        <section className="w-full py-16 bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8e0d0]/50">
                <h3 className="text-[17px] font-bold text-brand-green-deep mb-2">What mortgage loan options are available in La Paz County, AZ?</h3>
                <p className="text-brand-text-muted text-[15px]">AZ Mortgage Brothers provides a comprehensive range of home loan programs throughout La Paz County. Our offerings include Conventional, FHA, VA, and Jumbo loans, as well as refinancing and reverse mortgages tailored for primary residences and seasonal homes.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8e0d0]/50">
                <h3 className="text-[17px] font-bold text-brand-green-deep mb-2">What is the 2026 FHA loan limit for La Paz County?</h3>
                <p className="text-brand-text-muted text-[15px]">For 2026, the FHA loan limit for a single-family residence in La Paz County is $541,287. These accessible loan limits provide great options for first-time homebuyers looking to settle in Western Arizona with lower down payment requirements.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8e0d0]/50">
                <h3 className="text-[17px] font-bold text-brand-green-deep mb-2">Do you provide mortgages for vacation homes near the Colorado River?</h3>
                <p className="text-brand-text-muted text-[15px]">Yes, we specialize in financing for secondary residences and vacation properties. Whether you are looking for a riverside home in Parker or exploring residential communities in Quartzsite, we have Conventional and Jumbo loan programs designed for seasonal and vacation homebuyers.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8e0d0]/50">
                <h3 className="text-[17px] font-bold text-brand-green-deep mb-2">What is the 2026 Conventional loan limit in La Paz County, Arizona?</h3>
                <p className="text-brand-text-muted text-[15px]">The 2026 baseline conforming (Conventional) loan limit for a single-unit property in La Paz County is $832,750. For property purchases that exceed this baseline, we offer competitive Jumbo mortgage products.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8e0d0]/50">
                <h3 className="text-[17px] font-bold text-brand-green-deep mb-2">How fast can I get pre-approved for a home in La Paz County?</h3>
                <p className="text-brand-text-muted text-[15px]">Our streamlined digital pre-approval process takes as little as 3 minutes to begin, with absolutely no impact on your credit score. Once your financial documents are submitted, we work quickly to provide you with a formal pre-approval letter so you can shop with confidence.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8e0d0]/50">
                <h3 className="text-[17px] font-bold text-brand-green-deep mb-2">Which cities in La Paz County do you serve?</h3>
                <p className="text-brand-text-muted text-[15px]">As licensed Arizona mortgage brokers, we serve all communities within La Paz County. Our most popular local markets include Parker, the county seat along the Colorado River, and Quartzsite, known for its unique desert landscapes and seasonal residential communities.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}