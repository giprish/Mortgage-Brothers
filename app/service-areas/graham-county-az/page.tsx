"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const cities = [
  { name: "Safford", description: "As Graham County's seat in the Gila Valley, Safford offers vibrant agriculture, Mount Graham views, and home loans." },
  { name: "Thatcher", description: "Home to Eastern Arizona College with family neighborhoods, top schools, and competitive loan rates." },
  { name: "Pima", description: "Historic agricultural town in the Gila Valley offering spacious rural home options." }
];

export default function GrahamCountyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />
      <main className="flex-grow pt-[72px]">
        <section className="w-full bg-brand-green-deep text-white py-16 lg:py-20 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            {/* Breadcrumb inside Pine Green Section */}
            <div className="flex items-center justify-center gap-2 text-[13px] font-medium text-[#c8c8b8] mb-5">
              <Link href="/service-areas" className="hover:text-[#3fb364] transition-colors duration-200">Areas We Serve</Link>
              <span className="text-[#3fb364]/60">&gt;</span>
              <span className="text-white font-semibold">Graham County</span>
            </div>
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">SOUTHERN ARIZONA - GRAHAM</p>
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">Your trusted Graham County mortgage broker.</h1>
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">From Safford to Thatcher — 3 communities, one team that knows every one of them.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-4">
              <Link href="/#get-pre-approved" className="w-full sm:w-auto btn-primary hover:shadow-brand-green-accent/20 group">
                Start My Pre-Approval
              </Link>
              <Link href="/about#talk-to-broker" className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-white/30 hover:border-white/60 text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all duration-200">
                Talk to a Broker
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">Graham County mortgage services</h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px]">Select your city below for local mortgage expertise.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cities.map((city, index) => (
                <Link key={index} href={`/service-areas/graham-county-az/${city.name.toLowerCase().replace(/\./g, "").replace(/\s+/g, "-")}`} className="bg-[#faf7f0] rounded-2xl p-6 lg:p-7 border border-[#e8e0d0]/50 shadow-sm flex flex-col hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4 text-brand-green-deep">
                    <h3 className="text-[17px] font-bold tracking-tight">{city.name}</h3>
                  </div>
                  <p className="text-brand-text-muted text-[13.5px] lg:text-[14px] leading-relaxed">{city.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
