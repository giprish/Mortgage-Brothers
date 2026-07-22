"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function ImprovingCreditArticlePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow pt-[72px]">
        {/* Article Hero */}
        <section className="bg-[#052316] text-white py-16 px-6 lg:px-10 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-center justify-center gap-2 text-[#8da684] text-[13px] font-semibold mb-6">
              <Link href="/blog/" className="hover:text-white transition-colors">Blog</Link>
              <span>&gt;</span>
              <span className="text-[#3fb364]">Arizona Mortgage Insights</span>
            </div>

            <span className="bg-[#103020] border border-[#205030] text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full inline-block mb-4">
              CREDIT GUIDE · 2026
            </span>

            <h1
              className="text-[32px] sm:text-[42px] lg:text-[50px] font-bold leading-tight mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              How to Get a Mortgage in Arizona with Fair or Improving Credit
            </h1>

            <div className="flex items-center justify-center gap-4 text-[14px] text-[#c8c8b8]">
              <span>By <strong className="text-white">Eddie Knoell</strong></span>
              <span>•</span>
              <span>Jun 10, 2026</span>
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
              1. Executive Summary
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Having a credit score in the <strong>580 to 660 range</strong> does not disqualify you from owning a home in Arizona. While conventional lenders reserve their lowest interest rates for scores above 740, programs like FHA loans, rapid rescoring, and Down Payment Assistance (DPA) enable thousands of Arizona buyers with fair credit to buy homes every year.
            </p>
            <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl my-6">
              <p className="text-[15px] font-semibold text-[#052316] leading-relaxed">
                <strong>Good News:</strong> FHA loans allow a 3.5% down payment with credit scores as low as 580. Rapid rescoring can boost your score by 20–40 points in under 7 days.
              </p>
            </div>
          </section>

          {/* Program Breakdown */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-5 font-playfair border-b border-[#e8e0d0] pb-3">
              Credit Score Requirements by Loan Type in Arizona
            </h2>

            <div className="overflow-x-auto my-6 border border-[#e8e0d0] rounded-xl shadow-sm bg-white">
              <table className="w-full text-left text-[14px]">
                <thead className="bg-[#052316] text-white">
                  <tr>
                    <th className="p-4 font-semibold">Loan Program</th>
                    <th className="p-4 font-semibold">Minimum Credit Score</th>
                    <th className="p-4 font-semibold">Down Payment</th>
                    <th className="p-4 font-semibold">Credit Flexibility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8e0d0]">
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">FHA Loan</td>
                    <td className="p-4 text-emerald-700 font-bold">580</td>
                    <td className="p-4">3.5%</td>
                    <td className="p-4">High (past collections &amp; medical debt ok)</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">VA Loan</td>
                    <td className="p-4">580 - 620</td>
                    <td className="p-4 text-emerald-700 font-bold">0%</td>
                    <td className="p-4">High for military veterans &amp; active duty</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">Conventional Loan</td>
                    <td className="p-4">620</td>
                    <td className="p-4">3%</td>
                    <td className="p-4">Moderate (best rates at 700+)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Actionable Steps */}
          <section className="mb-12 space-y-6">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-4 font-playfair border-b border-[#e8e0d0] pb-3">
              Action Plan to Improve Your Odds
            </h2>
            <div>
              <h3 className="text-[#052316] text-[20px] font-bold mb-2">1. Utilize Rapid Rescoring</h3>
              <p className="text-[#3a4a3a] text-[15px] leading-relaxed">A mortgage broker can submit proof of paid-off credit card balances directly to the bureaus, updating your score in days instead of months.</p>
            </div>
            <div>
              <h3 className="text-[#052316] text-[20px] font-bold mb-2">2. Pay Credit Card Balances Below 30% Utilization</h3>
              <p className="text-[#3a4a3a] text-[15px] leading-relaxed">Credit utilization accounts for 30% of your total score. Paying card balances below 30% (ideally 10%) yields fast score boosts.</p>
            </div>
            <div>
              <h3 className="text-[#052316] text-[20px] font-bold mb-2">3. Do Not Open New Credit Cards Before Applying</h3>
              <p className="text-[#3a4a3a] text-[15px] leading-relaxed">Avoid financing cars or opening store cards within 6 months of mortgage pre-approval.</p>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] font-bold mb-6 font-playfair border-b border-[#e8e0d0] pb-3">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Can I get a mortgage in Arizona with a 600 credit score?", a: "Yes! FHA loans permit credit scores as low as 580 with 3.5% down." },
                { q: "How fast can rapid rescoring raise my credit score?", a: "Rapid rescoring takes roughly 3 to 7 business days once proof of payoff is provided." }
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
            <h3 className="text-[24px] font-bold mb-3 font-playfair">Analyze Your Credit &amp; Mortgage Options</h3>
            <p className="text-[#c8c8b8] text-[15px] max-w-xl mx-auto mb-6">Let our Arizona team review your credit and guide you to pre-approval.</p>
            <Link href="/#get-pre-approved" className="inline-block bg-[#3fb364] hover:bg-[#2d9e4f] text-white font-bold text-[15px] px-8 py-3.5 rounded-xl transition-colors">
              Get Pre-Approved Today
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
