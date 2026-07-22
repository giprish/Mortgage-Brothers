"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function ReverseMortgageEligibilityArticlePage() {
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
              RETIREMENT GUIDE · 2026
            </span>

            <h1
              className="text-[32px] sm:text-[42px] lg:text-[50px] font-bold leading-tight mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Who Qualifies for a Reverse Mortgage? Understanding Eligibility in Arizona
            </h1>

            <div className="flex items-center justify-center gap-4 text-[14px] text-[#c8c8b8]">
              <span>By <strong className="text-white">Eddie Knoell</strong></span>
              <span>•</span>
              <span>Jun 5, 2026</span>
              <span>•</span>
              <span>13 min read</span>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <article className="max-w-4xl mx-auto px-6 py-12 lg:py-16 text-[#1a3a1a]">
          
          {/* Executive Summary */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-4 font-playfair border-b border-[#e8e0d0] pb-3">
              1. What Is an Arizona Reverse Mortgage (HECM)?
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              A <strong>Home Equity Conversion Mortgage (HECM)</strong> is an FHA-insured reverse mortgage designed specifically for homeowners <strong>62 years of age or older</strong>. Unlike a traditional mortgage where you make monthly payments to a lender, a reverse mortgage allows you to convert a portion of your home equity into tax-free cash without requiring monthly mortgage payments.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              You retain 100% ownership of your title and property. The loan only becomes due when the last remaining borrower passes away, moves permanently out of the home, or sells the property.
            </p>

            <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl my-6">
              <p className="text-[15px] font-semibold text-[#052316] leading-relaxed">
                <strong>Crucial Rule:</strong> Borrowers are still responsible for paying property taxes, homeowners insurance, and maintaining the home.
              </p>
            </div>
          </section>

          {/* Qualification Checklist */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-5 font-playfair border-b border-[#e8e0d0] pb-3">
              2. Core Reverse Mortgage Qualification Rules
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-[#e8e0d0] p-6 rounded-2xl shadow-sm">
                <h3 className="text-[#052316] text-[20px] font-bold mb-2">Rule 1: Borrower Age (Minimum 62 Years Old)</h3>
                <p className="text-[#3a4a3a] text-[15px] leading-relaxed">At least one spouse/borrower on title must be 62 or older. Non-borrowing spouses under 62 receive legal protections that allow them to remain in the home tax/insurance-compliant.</p>
              </div>

              <div className="bg-white border border-[#e8e0d0] p-6 rounded-2xl shadow-sm">
                <h3 className="text-[#052316] text-[20px] font-bold mb-2">Rule 2: Primary Residence Requirement</h3>
                <p className="text-[#3a4a3a] text-[15px] leading-relaxed">The property must be your primary residence where you live for more than 6 months per year. Vacation homes and rentals do not qualify.</p>
              </div>

              <div className="bg-white border border-[#e8e0d0] p-6 rounded-2xl shadow-sm">
                <h3 className="text-[#052316] text-[20px] font-bold mb-2">Rule 3: Sufficient Home Equity (Typically 50%+)</h3>
                <p className="text-[#3a4a3a] text-[15px] leading-relaxed">You must either own your home free and clear or have a low enough existing mortgage balance that can be paid off at closing using HECM funds.</p>
              </div>

              <div className="bg-white border border-[#e8e0d0] p-6 rounded-2xl shadow-sm">
                <h3 className="text-[#052316] text-[20px] font-bold mb-2">Rule 4: Mandatory Independent Counseling</h3>
                <p className="text-[#3a4a3a] text-[15px] leading-relaxed">HUD mandates that all prospective reverse mortgage borrowers complete an independent session with a HUD-approved counselor to ensure full understanding.</p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] font-bold mb-6 font-playfair border-b border-[#e8e0d0] pb-3">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Does the bank take ownership of my home with a reverse mortgage?", a: "No! You retain full title and ownership of your property." },
                { q: "What happens to my heirs when I pass away?", a: "Your heirs can choose to sell the property, pay off the reverse mortgage balance, and keep 100% of the remaining equity." }
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
            <h3 className="text-[24px] font-bold mb-3 font-playfair">Explore Arizona Reverse Mortgages</h3>
            <p className="text-[#c8c8b8] text-[15px] max-w-xl mx-auto mb-6">See how much equity you can access with our Arizona Reverse Mortgage experts.</p>
            <Link href="/reverse-mortgage-arizona" className="inline-block bg-[#3fb364] hover:bg-[#2d9e4f] text-white font-bold text-[15px] px-8 py-3.5 rounded-xl transition-colors">
              View Reverse Mortgage Guide
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
