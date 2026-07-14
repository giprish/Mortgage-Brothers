"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";

const neighborhoodPills = [
  "Arcadia",
  "Central Corridor",
  "Ahwatukee",
  "Desert Ridge",
  "Downtown",
  "Laveen",
  "North Phoenix",
  "Roosevelt Row"
];

const loanPrograms = [
  {
    title: "First-Time Buyer",
    description: "Down-payment assistance and 3% down options for Phoenix's entry-level buyers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.685 0-5.3.232-7.843.682V21M12 9.75v6.5" />
      </svg>
    )
  },
  {
    title: "Conventional",
    description: "Competitive fixed and adjustable rates for Phoenix move-up and repeat buyers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    )
  },
  {
    title: "FHA",
    description: "Flexible credit and 3.5% down for Phoenix's first-time and rebuilding buyers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    )
  },
  {
    title: "Refinance",
    description: "Tap equity or lower your rate on your existing Phoenix home.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    )
  }
];

export default function PhoenixPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Section 1: Hero Section */}
        <section className="bg-[#052316] text-white py-16 px-6 lg:px-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Intro */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-[#8da684] text-[12px] font-semibold mb-6">
                <Link href="/areas-we-serve" className="hover:text-white transition-colors">Areas We Serve</Link>
                <span>&gt;</span>
                <Link href="/areas-we-serve/maricopa-county" className="hover:text-white transition-colors">Maricopa County</Link>
                <span>&gt;</span>
                <span className="text-[#3fb364]">Phoenix</span>
              </div>

              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                HOME LOANS IN PHOENIX, AZ
              </span>
              
              <h1 className="text-white text-[38px] lg:text-[54px] font-playfair font-normal leading-[1.15] mb-6">
                Your Phoenix mortgage, handled locally.
              </h1>

              <p className="text-[#c8c8b8] text-[15px] lg:text-[16.5px] leading-[1.7] max-w-xl mb-8">
                Arizona&apos;s capital and largest city — a dynamic market of historic neighborhoods, new-build suburbs, and everything in between.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#get-pre-approved"
                  className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg"
                >
                  Get Pre-Approved &rarr;
                </Link>
                <Link
                  href="/contact"
                  className="border border-white/20 hover:border-white text-white text-[14px] font-semibold px-6 py-3 rounded-full transition-all duration-200"
                >
                  Talk to a Broker
                </Link>
              </div>
            </div>

            {/* Right Column: Skyline Slot & Stats */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Skyline Card */}
              <div className="bg-[#08271b] border border-white/5 rounded-3xl h-[240px] relative overflow-hidden flex flex-col items-center justify-center text-center p-6 shadow-lg group">
                {/* Diagonal stripes */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 8px, transparent 8px, transparent 16px)" }}></div>
                
                {/* Gradient block for silhouette look */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent z-0"></div>
                
                {/* Mountain peak styling placeholder */}
                <div className="absolute bottom-0 w-64 h-16 bg-[#041a12] rounded-t-full blur-[2px] opacity-60 translate-y-6"></div>
                <div className="absolute bottom-0 w-80 h-20 bg-[#062419] rounded-t-full blur-[1px] opacity-40 translate-y-10 translate-x-12"></div>
                
                <span className="text-[#b89a5a] text-[11px] font-bold tracking-[0.25em] uppercase relative z-10 mb-2">
                  Phoenix SKYLINE
                </span>
                <span className="text-[#8da684] text-[13px] relative z-10">
                  Camelback Mountain & Valley Views
                </span>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#08271b] border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center shadow-md">
                  <span className="text-white text-[18px] lg:text-[20px] font-bold block mb-1">
                    $438K
                  </span>
                  <span className="text-[#8da684] text-[10px] uppercase tracking-wider leading-tight">
                    Median home price
                  </span>
                </div>
                <div className="bg-[#08271b] border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center shadow-md">
                  <span className="text-white text-[18px] lg:text-[20px] font-bold block mb-1">
                    42
                  </span>
                  <span className="text-[#8da684] text-[10px] uppercase tracking-wider leading-tight">
                    Avg. days on market
                  </span>
                </div>
                <div className="bg-[#08271b] border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center shadow-md">
                  <span className="text-white text-[18px] lg:text-[20px] font-bold block mb-1">
                    24 days
                  </span>
                  <span className="text-[#8da684] text-[10px] uppercase tracking-wider leading-tight">
                    Our avg. close time
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Loan Programs */}
        <section className="py-20 px-6 lg:px-10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#052316] text-[28px] lg:text-[34px] font-playfair font-normal mb-4">
              Loan programs that fit Phoenix buyers
            </h2>
            <p className="text-[#4e5b4e] text-[14.5px] lg:text-[15.5px] max-w-xl mx-auto leading-[1.65]">
              From first condos downtown to luxury homes in the foothills, we match Phoenix buyers to the right program — and shop it across 30+ lenders so you don&apos;t overpay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanPrograms.map((program) => (
              <div key={program.title} className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/50 shadow-sm flex flex-col items-start hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center mb-4 flex-shrink-0">
                  {program.icon}
                </div>
                <h3 className="text-[#052316] text-[16px] font-bold mb-2">
                  {program.title}
                </h3>
                <p className="text-[#4e5b4e] text-[13px] leading-[1.6]">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Neighborhoods & Local Broker Card */}
        <section className="pb-20 px-6 lg:px-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            {/* Neighborhoods card */}
            <div className="md:col-span-7 bg-[#faf7f0] border border-[#e8e0d0]/60 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-[#052316] text-[18px] font-bold mb-5">
                  Neighborhoods we serve in Phoenix
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {neighborhoodPills.map((pill) => (
                    <span
                      key={pill}
                      className="bg-white border border-[#e8e0d0] text-[#1a3a1a] text-[13px] font-medium px-4 py-1.5 rounded-full shadow-sm"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Local Broker Card */}
            <div className="md:col-span-5 bg-[#052316] border border-white/5 text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 8px, transparent 8px, transparent 16px)" }}></div>
              
              <div className="relative z-10">
                <span className="text-[#b89a5a] text-[10px] font-bold tracking-widest uppercase block mb-3">
                  LOCAL, NOT A CALL CENTER
                </span>
                <p className="text-[#c8c8b8] text-[13.5px] leading-[1.65] mb-8">
                  Three generations in Phoenix real estate means we know Phoenix appraisers, timelines, and neighborhoods first-hand — and you talk to the same broker start to finish.
                </p>
              </div>

              <div className="flex items-center gap-3 relative z-10 border-t border-white/10 pt-4">
                <div className="w-9 h-9 rounded-full bg-[#3fb364]/20 border border-[#3fb364]/40 flex items-center justify-center text-[#3fb364] font-bold text-[13px]">
                  EK
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-white text-[13px] font-bold">Eddie & Thomas Knoell</span>
                  <span className="text-[#8da684] text-[11px]">Your Phoenix loan officers</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 4: Bottom Banner */}
        <section className="bg-[#052316] text-white py-16 text-center border-t border-white/10">
          <div className="max-w-xl mx-auto px-6">
            <h2 className="text-white text-[26px] lg:text-[32px] font-playfair font-normal leading-tight mb-3">
              Buying or refinancing in Phoenix?
            </h2>
            <p className="text-[#c8c8b8] text-[14px] leading-[1.6] mb-8">
              Start your pre-approval in about three minutes — no cost, no obligation.
            </p>
            <Link
              href="/#get-pre-approved"
              className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-semibold px-6 py-3.5 rounded-full inline-block transition-all shadow-md shadow-[#3fb364]/10"
            >
              Get Pre-Approved &rarr;
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
