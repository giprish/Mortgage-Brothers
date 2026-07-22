"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function JumboLoanArticlePage() {
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
              <span className="text-[#3fb364]">Arizona Mortgage Insights</span>
            </div>

            <span className="bg-[#103020] border border-[#205030] text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full inline-block mb-4">
              LUXURY FINANCING · 2026
            </span>

            <h1
              className="text-[32px] sm:text-[42px] lg:text-[50px] font-bold leading-tight mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Is a Jumbo Loan? Everything You Need to Know Before Applying in Arizona
            </h1>

            <div className="flex items-center justify-center gap-4 text-[14px] text-[#c8c8b8]">
              <span>By <strong className="text-white">Eddie Knoell</strong></span>
              <span>•</span>
              <span>May 12, 2026</span>
              <span>•</span>
              <span>11 min read</span>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <article className="max-w-4xl mx-auto px-6 py-12 lg:py-16 text-[#1a3a1a]">
          
          {/* Summary */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-4 font-playfair border-b border-[#e8e0d0] pb-3">
              1. Understanding Jumbo Loans in Arizona
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              A <strong>Jumbo loan</strong> is a non-conforming mortgage that exceeds the Federal Housing Finance Agency (FHFA) conforming loan limit. In 2026, the standard conforming loan limit for single-family homes in Maricopa County and most Arizona counties is <strong>$1,041,125</strong>.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              If your mortgage amount exceeds $1,041,125 when purchasing luxury real estate in Scottsdale, Paradise Valley, Arcadia, Silverleaf, or North Phoenix, you will require a Jumbo mortgage.
            </p>
          </section>

          {/* Requirements Table */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] font-bold mb-5 font-playfair border-b border-[#e8e0d0] pb-3">
              Jumbo vs. Conforming Qualification Breakdown
            </h2>

            <div className="overflow-x-auto my-6 border border-[#e8e0d0] rounded-xl shadow-sm bg-white">
              <table className="w-full text-left text-[14px]">
                <thead className="bg-[#052316] text-white">
                  <tr>
                    <th className="p-4 font-semibold">Factor</th>
                    <th className="p-4 font-semibold">Conforming Loan</th>
                    <th className="p-4 font-semibold">Jumbo Loan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8e0d0]">
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">2026 Loan Limit</td>
                    <td className="p-4">Up to $1,041,125</td>
                    <td className="p-4 font-bold text-emerald-700">Above $1,041,125 (Up to $3M+)</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">Minimum Credit Score</td>
                    <td className="p-4">620</td>
                    <td className="p-4">700 to 740+</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">Down Payment</td>
                    <td className="p-4">3% to 5%</td>
                    <td className="p-4">10% to 20%</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">Reserve Requirements</td>
                    <td className="p-4">0 to 2 Months</td>
                    <td className="p-4">6 to 12 Months Liquid Reserves</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] font-bold mb-6 font-playfair border-b border-[#e8e0d0] pb-3">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Are Jumbo loan interest rates higher than conventional rates?", a: "Not always! In recent market cycles, Jumbo interest rates have often been comparable to or even slightly lower than conventional rates for buyers with 740+ credit scores." },
                { q: "What count as liquid reserves for a Jumbo loan?", a: "Checking/savings accounts, stocks, mutual funds, vested 401(k)/IRA balances, and liquid money market funds." }
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
            <h3 className="text-[24px] font-bold mb-3 font-playfair">Apply for a Custom Arizona Jumbo Loan</h3>
            <p className="text-[#c8c8b8] text-[15px] max-w-xl mx-auto mb-6">Connect with our luxury home financing team for custom rates and terms.</p>
            <Link href="/jumbo-loans-arizona/" className="inline-block bg-[#3fb364] hover:bg-[#2d9e4f] text-white font-bold text-[15px] px-8 py-3.5 rounded-xl transition-colors">
              Explore Arizona Jumbo Loans
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
