"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function PrivateMoneyLenderPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is Private Money / Hard Money Lending in Arizona?",
      a: "Private Money Lending provides short-term, asset-backed financing for real estate investors, fix-and-flip projects, and property acquisition when traditional bank approval timeline is too slow."
    },
    {
      q: "How fast can a Private Money loan close?",
      a: "Private Money loans can close in as little as 5 to 10 business days because underwriting focuses on property equity and exit strategy rather than lengthy income verification."
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
                REAL ESTATE INVESTOR FINANCING
              </span>
              <h1 className="text-[34px] sm:text-[44px] lg:text-[54px] font-bold font-playfair leading-[1.15] text-white">
                Private Money Loans in Arizona
              </h1>
              <p className="text-[#c8c8b8] text-[16px] lg:text-[18px] leading-relaxed max-w-2xl">
                Fast, asset-backed private capital for real estate investors, fix-and-flip acquisitions, and commercial property investments across Arizona.
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link href="/#get-pre-approved" className="bg-[#3fb364] hover:bg-[#359854] text-white text-[16px] font-bold px-8 py-4 rounded-full transition-all shadow-lg">
                  APPLY FOR FUNDING →
                </Link>
                <a href="tel:4805356200" className="border border-white/30 hover:border-white text-white text-[15px] font-semibold px-6 py-4 rounded-full transition-all hover:bg-white/10">
                  Call (480) 535-6200
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-white/15 bg-[#0a2e1d] p-6 text-left">
                <h3 className="text-[22px] font-bold text-white mb-3 font-playfair">Private Capital Advantages</h3>
                <ul className="space-y-3 text-[14.5px] text-[#c8c8b8]">
                  <li>✓ Fast 5 to 10-day funding timelines</li>
                  <li>✓ Fix-and-Flip &amp; BRRRR strategy financing</li>
                  <li>✓ Asset-based qualification focus</li>
                  <li>✓ Flexible term lengths &amp; interest-only payments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-white text-left max-w-4xl mx-auto space-y-6">
          <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
            Fast Private Funding for Arizona Real Estate Investors
          </h2>
          <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
            When timing is critical for real estate opportunities in Maricopa County or across Arizona, Private Money loans provide capital rapidly so you can beat cash offers and secure profitable deals.
          </p>
        </section>

        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-[#052316] text-[28px] font-bold font-playfair text-center">Private Money FAQ</h2>
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
          <h2 className="text-[28px] font-bold font-playfair mb-4">Request Private Loan Capital Today</h2>
          <Link href="/#get-pre-approved" className="bg-[#3fb364] text-white font-bold px-8 py-4 rounded-full inline-block">APPLY FOR FUNDING →</Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
