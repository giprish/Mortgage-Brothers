"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function UsdaLoansPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What areas in Arizona qualify for a USDA loan?",
      a: "USDA loans are available in designated rural and many suburban areas outside the major Phoenix and Tucson metro cores. Towns like Maricopa, Casa Grande, Buckeye fringe, and much of rural Arizona are eligible. We can check any specific address against the USDA eligibility map for you."
    },
    {
      q: "Do USDA loans really require $0 down?",
      a: "Yes. USDA Rural Development loans offer 100% financing, meaning eligible buyers can purchase a home with no down payment at all."
    },
    {
      q: "Are there income limits for USDA loans?",
      a: "Yes. USDA loans are designed for low-to-moderate income households, so your total household income must fall below the limit set for your Arizona county and household size."
    },
    {
      q: "What credit score do I need for a USDA loan?",
      a: "Most lenders look for a credit score of 640 or higher for streamlined approval, though lower scores may still qualify with manual underwriting and strong compensating factors."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative w-full bg-[#052316] text-white pt-[110px] lg:pt-[130px] pb-16 lg:pb-24 px-6 lg:px-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3fb364]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-block bg-[#3fb364]/20 border border-[#3fb364]/40 text-[#3fb364] text-[12px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                100% RURAL FINANCING
              </span>
              <h1 className="text-[34px] sm:text-[44px] lg:text-[54px] font-bold font-playfair leading-[1.15] text-white">
                USDA Home Loans in Arizona
              </h1>
              <p className="text-[#c8c8b8] text-[16px] lg:text-[18px] leading-relaxed max-w-2xl">
                Buy a home in eligible rural and suburban Arizona with zero down payment, competitive fixed rates, and reduced mortgage insurance through the USDA Rural Development program.
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link href="/#get-pre-approved" className="bg-[#3fb364] hover:bg-[#359854] text-white text-[16px] font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  GET PRE-APPROVED NOW →
                </Link>
                <a href="tel:4805356200" className="border border-white/30 hover:border-white text-white text-[15px] font-semibold px-6 py-4 rounded-full transition-all hover:bg-white/10">
                  Call (480) 535-6200
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-white/15 bg-[#0a2e1d] p-6 text-left">
                <h3 className="text-[22px] font-bold text-white mb-3 font-playfair">USDA Loan Highlights</h3>
                <ul className="space-y-3 text-[14.5px] text-[#c8c8b8]">
                  <li>✓ 100% financing — $0 down payment</li>
                  <li>✓ Lower mortgage insurance than FHA</li>
                  <li>✓ Competitive 30-year fixed rates</li>
                  <li>✓ Gift funds allowed for closing costs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto space-y-6 text-left">
            <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
              Zero-Down Homeownership in Rural Arizona
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
              Backed by the U.S. Department of Agriculture, USDA loans make homeownership possible for low-to-moderate income families in eligible communities across Arizona. With no down payment required and reduced insurance costs, it&apos;s one of the most affordable ways to buy. AZ Mortgage Brothers will confirm your address eligibility and shop lenders to find your best USDA rate.
            </p>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[#052316] text-[28px] lg:text-[34px] font-bold font-playfair text-center mb-12">
              Who a USDA loan is built for
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/50 shadow-sm">
                <h3 className="text-[#052316] text-[16px] font-bold mb-2">Rural &amp; suburban buyers</h3>
                <p className="text-[#4e5b4e] text-[13px] leading-[1.6]">
                  Purchasing in an eligible Arizona community outside the major metro cores.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/50 shadow-sm">
                <h3 className="text-[#052316] text-[16px] font-bold mb-2">Limited savings</h3>
                <p className="text-[#4e5b4e] text-[13px] leading-[1.6]">
                  No down payment needed, so you can buy without years of saving.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/50 shadow-sm">
                <h3 className="text-[#052316] text-[16px] font-bold mb-2">Moderate income households</h3>
                <p className="text-[#4e5b4e] text-[13px] leading-[1.6]">
                  Household income within the USDA limit for your county and family size.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-[#052316] text-[28px] font-bold font-playfair text-center">USDA Loans FAQ</h2>
            <div className="space-y-4 text-left">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl overflow-hidden shadow-sm">
                  <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-[#052316]">
                    <span>{faq.q}</span>
                    <span className="text-[#3fb364] font-bold">{openFaq === idx ? "−" : "+"}</span>
                  </button>
                  {openFaq === idx && <div className="px-6 pb-6 text-[#4e5b4e] border-t pt-4">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#052316] text-white text-center">
          <h2 className="text-[28px] font-bold font-playfair mb-4">See If Your Arizona Home Qualifies for USDA</h2>
          <Link href="/#get-pre-approved" className="bg-[#3fb364] text-white font-bold px-8 py-4 rounded-full inline-block">GET PRE-APPROVED NOW →</Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
