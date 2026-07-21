"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function JumboLoansPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What qualifies as a Jumbo loan in Arizona?",
      a: "A jumbo loan is any mortgage that exceeds the FHFA conventional conforming loan limit ($766,550+ in most Arizona counties). Jumbo financing is common in high-end markets like Paradise Valley, Scottsdale, and North Phoenix."
    },
    {
      q: "What down payment is required for a Jumbo loan?",
      a: "Jumbo down payment requirements typically range from 10% to 20%, depending on the loan amount, credit score, and property type."
    },
    {
      q: "What credit score is required for Jumbo financing?",
      a: "Most jumbo lenders require a minimum credit score of 680 to 720+, along with documented asset reserves."
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
                LUXURY PROPERTY FINANCING
              </span>
              <h1 className="text-[34px] sm:text-[44px] lg:text-[54px] font-bold font-playfair leading-[1.15] text-white">
                Jumbo Loans in Arizona
              </h1>
              <p className="text-[#c8c8b8] text-[16px] lg:text-[18px] leading-relaxed max-w-2xl">
                Finance high-value luxury real estate in Paradise Valley, Scottsdale, and across Arizona with competitive jumbo rates and flexible reserve requirements.
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link href="/#get-pre-approved" className="bg-[#3fb364] hover:bg-[#359854] text-white text-[16px] font-bold px-8 py-4 rounded-full transition-all shadow-lg">
                  GET PRE-APPROVED NOW →
                </Link>
                <a href="tel:4805356200" className="border border-white/30 hover:border-white text-white text-[15px] font-semibold px-6 py-4 rounded-full transition-all hover:bg-white/10">
                  Call (480) 535-6200
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-white/15 bg-[#0a2e1d] p-6 text-left">
                <h3 className="text-[22px] font-bold text-white mb-3 font-playfair">Jumbo Loan Terms</h3>
                <ul className="space-y-3 text-[14.5px] text-[#c8c8b8]">
                  <li>✓ Financing up to $3M+</li>
                  <li>✓ Down payments as low as 10%</li>
                  <li>✓ Fixed and adjustable-rate options</li>
                  <li>✓ Tailored underwriting for high-net-worth buyers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto space-y-6 text-left">
            <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
              Competitive Financing for Luxury Arizona Estates
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
              When buying a luxury home, Jumbo mortgages provide access to loan amounts beyond standard conforming limits. AZ Mortgage Brothers shops multiple wholesale lenders to offer competitive jumbo interest rates and seamless closing timelines.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-[#052316] text-[28px] font-bold font-playfair text-center">Jumbo Loans FAQ</h2>
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
          <h2 className="text-[28px] font-bold font-playfair mb-4">Ready to Finance Your Arizona Luxury Property?</h2>
          <Link href="/#get-pre-approved" className="bg-[#3fb364] text-white font-bold px-8 py-4 rounded-full inline-block">GET PRE-APPROVED NOW →</Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
