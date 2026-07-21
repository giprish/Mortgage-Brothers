"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function ReverseMortgagePurchasePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is HECM for Purchase (Reverse Mortgage for Purchase)?",
      a: "HECM for Purchase allows seniors age 62+ to buy a new primary residence in Arizona using a reverse mortgage, eliminating monthly mortgage payments from day one."
    },
    {
      q: "How much down payment is required when purchasing with a Reverse Mortgage?",
      a: "Borrowers typically put down 40% to 50% of the purchase price from their own funds/sale of previous home, and the reverse mortgage finances the rest with $0 required monthly payments."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        <section className="relative w-full bg-[#052316] text-white py-16 lg:py-24 px-6 lg:px-12 overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-block bg-[#3fb364]/20 border border-[#3fb364]/40 text-[#3fb364] text-[12px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                HECM FOR PURCHASE
              </span>
              <h1 className="text-[34px] sm:text-[44px] lg:text-[54px] font-bold font-playfair leading-[1.15] text-white">
                Reverse Mortgage Home Purchase in Arizona
              </h1>
              <p className="text-[#c8c8b8] text-[16px] lg:text-[18px] leading-relaxed max-w-2xl">
                Buy your dream Arizona retirement home without ever making a monthly mortgage payment using HECM for Purchase.
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link href="/#get-pre-approved" className="bg-[#3fb364] hover:bg-[#359854] text-white text-[16px] font-bold px-8 py-4 rounded-full transition-all shadow-lg">
                  LEARN MORE NOW →
                </Link>
                <a href="tel:4805356200" className="border border-white/30 hover:border-white text-white text-[15px] font-semibold px-6 py-4 rounded-full transition-all hover:bg-white/10">
                  Call (480) 535-6200
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-white/15 bg-[#0a2e1d] p-6 text-left">
                <h3 className="text-[22px] font-bold text-white mb-3 font-playfair">HECM Purchase Benefits</h3>
                <ul className="space-y-3 text-[14.5px] text-[#c8c8b8]">
                  <li>✓ Buy a home with $0 monthly mortgage payments</li>
                  <li>✓ Increase purchasing power for retirement home</li>
                  <li>✓ Retain home title &amp; ownership</li>
                  <li>✓ FHA-backed government protections</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-white text-left max-w-4xl mx-auto space-y-6">
          <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
            Purchase a Home in Arizona with Zero Monthly Payments
          </h2>
          <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
            The HECM for Purchase program allows seniors age 62+ to relocate, downsize, or buy a new primary home in Arizona while preserving cash and eliminating monthly mortgage payments.
          </p>
        </section>

        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-[#052316] text-[28px] font-bold font-playfair text-center">HECM Purchase FAQ</h2>
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
          <h2 className="text-[28px] font-bold font-playfair mb-4">Explore HECM for Purchase Options</h2>
          <Link href="/#get-pre-approved" className="bg-[#3fb364] text-white font-bold px-8 py-4 rounded-full inline-block">REQUEST CONSULTATION →</Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
