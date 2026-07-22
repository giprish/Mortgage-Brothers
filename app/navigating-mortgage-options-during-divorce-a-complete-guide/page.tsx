"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function DivorceMortgageArticlePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow pt-[72px]">
        {/* Hero */}
        <section className="bg-[#052316] text-white py-16 px-6 lg:px-10 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-center justify-center gap-2 text-[#8da684] text-[13px] font-semibold mb-6">
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>&gt;</span>
              <span className="text-[#3fb364]">Arizona Mortgage Insights</span>
            </div>

            <span className="bg-[#103020] border border-[#205030] text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full inline-block mb-4">
              COMMUNITY PROPERTY GUIDE
            </span>

            <h1
              className="text-[32px] sm:text-[42px] lg:text-[50px] font-bold leading-tight mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Navigating Mortgage Options During Divorce: A Complete Guide for Arizona Homeowners
            </h1>

            <div className="flex items-center justify-center gap-4 text-[14px] text-[#c8c8b8]">
              <span>By <strong className="text-white">Eddie Knoell</strong></span>
              <span>•</span>
              <span>May 20, 2026</span>
              <span>•</span>
              <span>13 min read</span>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <article className="max-w-4xl mx-auto px-6 py-12 lg:py-16 text-[#1a3a1a]">
          
          {/* Summary */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-4 font-playfair border-b border-[#e8e0d0] pb-3">
              1. Understanding Arizona Community Property Laws
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Arizona is a <strong>community property state</strong>. Real estate acquired during marriage is generally owned equally (50/50) by both spouses, regardless of whose income was used to pay the mortgage or whose name appears on the deed.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              During a dissolution of marriage, deciding what to do with the marital home requires evaluating mortgage liabilities, equity division, and long-term affordability.
            </p>
          </section>

          {/* Primary Paths */}
          <section className="mb-12 border-t border-[#e8e0d0] pt-8">
            <h2 className="text-[#052316] text-[26px] font-bold mb-6 font-playfair">
              2. The 3 Primary Paths for the Marital Home
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-[#e8e0d0] p-6 rounded-2xl shadow-sm">
                <h3 className="text-[#052316] text-[20px] font-bold mb-2">Path 1: Refinance Equity Buyout</h3>
                <p className="text-[#3a4a3a] text-[15px] leading-relaxed mb-3">One spouse keeps the house, refinances the existing mortgage into their sole name, and cashes out equity to pay the departing spouse their 50% share.</p>
                <span className="text-[13px] font-bold text-[#3fb364]">Requires: Single-income qualification &amp; sufficient equity</span>
              </div>

              <div className="bg-white border border-[#e8e0d0] p-6 rounded-2xl shadow-sm">
                <h3 className="text-[#052316] text-[20px] font-bold mb-2">Path 2: Sell the Property &amp; Divide Net Cash</h3>
                <p className="text-[#3a4a3a] text-[15px] leading-relaxed mb-3">List the home on the MLS or sell to a cash buyer. Escrow pays off the existing mortgage and disburses net proceeds according to the divorce settlement decree.</p>
                <span className="text-[13px] font-bold text-[#3fb364]">Requires: Agreement from both spouses to sell</span>
              </div>

              <div className="bg-white border border-[#e8e0d0] p-6 rounded-2xl shadow-sm">
                <h3 className="text-[#052316] text-[20px] font-bold mb-2">Path 3: Co-Ownership (Temporary Deferred Sale)</h3>
                <p className="text-[#3a4a3a] text-[15px] leading-relaxed">Both spouses maintain joint ownership for a set timeframe (e.g. until minor children graduate high school), then execute a sale or buyout.</p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] font-bold mb-6 font-playfair border-b border-[#e8e0d0] pb-3">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Does a quitclaim deed remove my responsibility for the mortgage?", a: "NO! A quitclaim deed removes your name from property TITLE, but leaves you 100% liable for the MORTGAGE debt until refinanced or paid off." },
                { q: "Can alimony or child support count as income for a buyout refinance?", a: "Yes, provided there is a documented court order and at least 6 months of consistent receipt history." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-[#e8e0d0] rounded-xl overflow-hidden shadow-sm">
                  <button onClick={() => toggleFaq(idx)} className="w-full text-left p-5 font-bold text-[#052316] text-[16px] flex justify-between hover:bg-[#f9f7f2]">
                    <span>{faq.q}</span>
                    <span className="text-[#3fb364] font-bold">{openFaqIndex === idx ? "−" : "+"}</span>
                  </button>
                  {openFaqIndex === idx && <div className="p-5 pt-0 text-[14.5px] text-[#4a5568] border-t border-[#f0e8db] bg-[#faf8f4]">{faq.a}</div>}
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-[#052316] text-white rounded-2xl p-8 text-center mt-12 shadow-xl">
            <h3 className="text-[24px] font-bold mb-3 font-playfair">Confidential Mortgage Guidance During Divorce</h3>
            <p className="text-[#c8c8b8] text-[15px] max-w-xl mx-auto mb-6">Contact our Arizona mortgage team to evaluate buyout refinances and equity splits.</p>
            <Link href="/refinancing-arizona" className="inline-block bg-[#3fb364] hover:bg-[#2d9e4f] text-white font-bold text-[15px] px-8 py-3.5 rounded-xl transition-colors">
              Explore Refinance Buyouts
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
