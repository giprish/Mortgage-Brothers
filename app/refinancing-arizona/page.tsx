"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function RefinancingArizonaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What options are available for refinancing a home in Arizona?",
      a: "Option include Rate-and-Term Refinance (to lower monthly payments), Cash-Out Refinance (to access home equity), and Streamline Refinance (for FHA/VA borrowers)."
    },
    {
      q: "When is the right time to refinance in Arizona?",
      a: "Refinancing makes sense if you can lower your interest rate by 0.5% or more, shorten your loan term, eliminate monthly mortgage insurance (PMI), or consolidate high-interest debt."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        <section className="relative w-full bg-[#052316] text-white pt-[110px] lg:pt-[130px] pb-16 lg:pb-24 px-6 lg:px-12 overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-block bg-[#3fb364]/20 border border-[#3fb364]/40 text-[#3fb364] text-[12px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                MORTGAGE REFINANCE SOLUTIONS
              </span>
              <h1 className="text-[34px] sm:text-[44px] lg:text-[54px] font-bold font-playfair leading-[1.15] text-white">
                Refinancing Home Loans in Arizona
              </h1>
              <p className="text-[#c8c8b8] text-[16px] lg:text-[18px] leading-relaxed max-w-2xl">
                Lower your monthly mortgage payment, tap into equity cash, or drop monthly PMI with custom Arizona mortgage refinancing options.
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link href="/refinance-calculator/" className="bg-[#3fb364] hover:bg-[#359854] text-white text-[16px] font-bold px-8 py-4 rounded-full transition-all shadow-lg">
                  CALCULATE REFINANCE SAVINGS →
                </Link>
                <a href="tel:4805356200" className="border border-white/30 hover:border-white text-white text-[15px] font-semibold px-6 py-4 rounded-full transition-all hover:bg-white/10">
                  Call (480) 535-6200
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-white/15 bg-[#0a2e1d] p-6 text-left">
                <h3 className="text-[22px] font-bold text-white mb-3 font-playfair">Refinance Benefits</h3>
                <ul className="space-y-3 text-[14.5px] text-[#c8c8b8]">
                  <li>✓ Rate &amp; Term Refinancing</li>
                  <li>✓ Cash-Out Home Equity Refinance</li>
                  <li>✓ FHA &amp; VA Streamline Refinance</li>
                  <li>✓ PMI Cancellation Solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-white text-left max-w-4xl mx-auto space-y-6">
          <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
            Maximize Your Savings with Arizona Mortgage Refinancing
          </h2>
          <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
            Whether you want to lower your interest rate, switch from an ARM to a fixed-rate loan, or extract cash for home improvements, AZ Mortgage Brothers finds the right loan strategy for your goals.
          </p>
        </section>

        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-[#052316] text-[28px] font-bold font-playfair text-center">Refinancing FAQ</h2>
            <div className="space-y-4 text-left">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-[#e0e0e0] rounded-2xl overflow-hidden shadow-sm">
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

        <section className="py-16 bg-[#052316] text-white text-center">
          <h2 className="text-[28px] font-bold font-playfair mb-4">Calculate Your Arizona Refinance Savings</h2>
          <Link href="/refinance-calculator/" className="bg-[#3fb364] text-white font-bold px-8 py-4 rounded-full inline-block">CALCULATE REFINANCE SAVINGS →</Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
