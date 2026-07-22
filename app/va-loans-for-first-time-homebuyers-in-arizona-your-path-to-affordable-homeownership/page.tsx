"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function VaLoansArticlePage() {
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
              <Link href="/blog/" className="hover:text-white transition-colors">Blog</Link>
              <span>&gt;</span>
              <span className="text-[#3fb364]">Process Guidance</span>
            </div>

            <span className="bg-[#103020] border border-[#205030] text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full inline-block mb-4">
              VA HOME LOANS · 2026
            </span>

            <h1
              className="text-[32px] sm:text-[42px] lg:text-[50px] font-bold leading-tight mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              VA Loans for First-Time Homebuyers in Arizona: Your Path to Homeownership
            </h1>

            <div className="flex items-center justify-center gap-4 text-[14px] text-[#c8c8b8]">
              <span>By <strong className="text-white">Eddie Knoell</strong></span>
              <span>•</span>
              <span>May 28, 2026</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <article className="max-w-4xl mx-auto px-6 py-12 lg:py-16 text-[#1a3a1a]">
          
          {/* Executive Summary */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-4 font-playfair border-b border-[#e8e0d0] pb-3">
              1. The VA Loan Advantage in Arizona
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              For military veterans, active-duty service members, and eligible surviving spouses in Arizona, a <strong>VA loan</strong> is arguably the single best mortgage product available in the market. Backed by the U.S. Department of Veterans Affairs, VA loans allow eligible buyers to purchase a home with <strong>0% down payment</strong> and <strong>no monthly private mortgage insurance (PMI)</strong>.
            </p>
            <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl my-6">
              <p className="text-[15px] font-semibold text-[#052316] leading-relaxed">
                <strong>Monthly Savings:</strong> Skipping PMI saves typical Arizona VA buyers $150 to $350 per month compared to conventional loans with less than 20% down.
              </p>
            </div>
          </section>

          {/* Key VA Loan Benefits */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-5 font-playfair border-b border-[#e8e0d0] pb-3">
              2. Top Benefits for Arizona First-Time Buyers
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-[#e8e0d0] p-6 rounded-2xl shadow-sm">
                <h3 className="text-[#052316] text-[20px] font-bold mb-2">1. 100% Financing ($0 Down Payment)</h3>
                <p className="text-[#3a4a3a] text-[15px] leading-relaxed">Purchase your home without draining your savings for a down payment.</p>
              </div>
              <div className="bg-white border border-[#e8e0d0] p-6 rounded-2xl shadow-sm">
                <h3 className="text-[#052316] text-[20px] font-bold mb-2">2. Zero Monthly Mortgage Insurance</h3>
                <p className="text-[#3a4a3a] text-[15px] leading-relaxed">Unlike FHA (which charges lifetime MIP) or Conventional (PMI), VA loans require zero monthly mortgage insurance fees.</p>
              </div>
              <div className="bg-white border border-[#e8e0d0] p-6 rounded-2xl shadow-sm">
                <h3 className="text-[#052316] text-[20px] font-bold mb-2">3. Competitive Interest Rates &amp; Flexible Credit</h3>
                <p className="text-[#3a4a3a] text-[15px] leading-relaxed">Because the federal government guarantees a portion of the loan, interest rates are typically lower than conventional benchmarks.</p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] font-bold mb-6 font-playfair border-b border-[#e8e0d0] pb-3">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Is there a maximum loan limit on VA loans in Arizona?", a: "For veterans with full entitlement, there is NO maximum VA loan limit for 0% down financing!" },
                { q: "What is the VA funding fee?", a: "The VA funding fee is a one-time fee that helps sustain the program. It can be rolled directly into your loan amount, or waived if you have a service-connected disability rating." }
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
            <h3 className="text-[24px] font-bold mb-3 font-playfair">Get Pre-Approved for an Arizona VA Loan</h3>
            <p className="text-[#c8c8b8] text-[15px] max-w-xl mx-auto mb-6">Our military-specialized mortgage team will pull your Certificate of Eligibility (COE) for free.</p>
            <Link href="/va-loans-arizona/" className="inline-block bg-[#3fb364] hover:bg-[#2d9e4f] text-white font-bold text-[15px] px-8 py-3.5 rounded-xl transition-colors">
              Explore VA Loan Programs
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
