"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function PrivateMoneyLendersArticlePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow pt-[72px]">
        {/* Article Hero Banner */}
        <section className="bg-[#052316] text-white py-16 px-6 lg:px-10 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-center justify-center gap-2 text-[#8da684] text-[13px] font-semibold mb-6">
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>&gt;</span>
              <span className="text-[#3fb364]">Arizona Mortgage Insights</span>
            </div>

            <span className="bg-[#103020] border border-[#205030] text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full inline-block mb-4">
              INVESTOR GUIDE · 2026
            </span>

            <h1
              className="text-[32px] sm:text-[42px] lg:text-[50px] font-bold leading-tight mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Top 7 Reasons Arizona Investment Home Buyers Choose Private Money Lenders
            </h1>

            <div className="flex items-center justify-center gap-4 text-[14px] text-[#c8c8b8]">
              <span>By <strong className="text-white">Eddie Knoell</strong> (Senior Loan Officer)</span>
              <span>•</span>
              <span>Jun 15, 2026</span>
              <span>•</span>
              <span>14 min read</span>
            </div>
          </div>
        </section>

        {/* Article Body Container */}
        <article className="max-w-4xl mx-auto px-6 py-12 lg:py-16 text-[#1a3a1a]">
          
          {/* Executive Summary */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-4 font-playfair border-b border-[#e8e0d0] pb-3">
              1. Executive Summary
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              In Arizona’s fast-moving real estate market, real estate investors, fix-and-flippers, and portfolio builders frequently turn to <strong>private money lenders</strong> (often called hard money lenders) instead of traditional banks. In competitive markets like Phoenix, Scottsdale, Mesa, and Glendale, waiting 30 to 45 days for a conventional bank approval often means losing a high-equity property to a competing investor.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-6">
              Private money loans leverage the property’s current and After-Repair Value (ARV) as primary security, enabling funding in as little as 7 to 10 days. Below are the top 7 reasons Arizona investment home buyers utilize private financing.
            </p>

            <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl my-6">
              <p className="text-[15px] font-semibold text-[#052316] leading-relaxed">
                <strong>Key Takeaway:</strong> Private money is about leverage, speed, and opportunity cost. Paying a slightly higher interest rate for 6 to 12 months is far better than losing a $60,000 profit margin on an off-market deal.
              </p>
            </div>
          </section>

          {/* Reason 1: Lightning Fast Funding */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 font-playfair">
              2. Reason #1: Lightning-Fast Closings (7 to 10 Days)
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Traditional bank loans require income verification, personal tax returns, W-2s, and length debt-to-income reviews that take 30+ days. Private lenders focus on the asset, allowing title search and appraisal to happen within a week.
            </p>
          </section>

          {/* Reason 2: Asset-Based Underwriting */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 font-playfair">
              3. Reason #2: Asset-Based Underwriting (No Tax Return Delays)
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Self-employed investors often write off business expenses, reducing tax-return income on paper. Private money underwriting evaluates the property&apos;s Loan-to-Value (LTV) and After-Repair Value (ARV) rather than personal tax filings.
            </p>
          </section>

          {/* Reason 3: Financing Renovations */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 font-playfair">
              4. Reason #3: Ability to Finance Rehab &amp; Repair Costs
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Conventional mortgages will not fund homes with major structural, roof, or plumbing issues. Private money lenders fund up to 100% of the rehab costs in draw schedules as work completes.
            </p>
          </section>

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-5 font-playfair border-b border-[#e8e0d0] pb-3">
              Private Money vs. Traditional Bank Loan Comparison
            </h2>

            <div className="overflow-x-auto my-6 border border-[#e8e0d0] rounded-xl shadow-sm bg-white">
              <table className="w-full text-left text-[14px]">
                <thead className="bg-[#052316] text-white">
                  <tr>
                    <th className="p-4 font-semibold">Feature</th>
                    <th className="p-4 font-semibold">Private Money Lender</th>
                    <th className="p-4 font-semibold">Traditional Bank Loan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8e0d0]">
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">Closing Speed</td>
                    <td className="p-4 text-emerald-700 font-bold">7 to 10 Days</td>
                    <td className="p-4">30 to 45 Days</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">Underwriting Focus</td>
                    <td className="p-4">Property LTV &amp; ARV</td>
                    <td className="p-4">Tax Returns &amp; DTI</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">Property Condition</td>
                    <td className="p-4">Distressed / As-Is allowed</td>
                    <td className="p-4">Must meet strict habitable standards</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">Rehab Funding</td>
                    <td className="p-4">Yes (Draw Schedules)</td>
                    <td className="p-4">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Reasons 4 to 7 */}
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="text-[#052316] text-[24px] font-bold mb-3 font-playfair">5. Reason #4: Winning Competitive Bids Against Cash Buyers</h2>
              <p className="text-[15px] leading-[1.8] text-[#3a4a3a]">Presenting a 7-day closing timeline with waived financing contingencies allows your offer to compete directly with all-cash buyers.</p>
            </div>
            <div>
              <h2 className="text-[#052316] text-[24px] font-bold mb-3 font-playfair">6. Reason #5: Flexible Repayment Terms &amp; Interest-Only Payments</h2>
              <p className="text-[15px] leading-[1.8] text-[#3a4a3a]">During the renovation phase, interest-only payments minimize monthly overhead until the home is sold or refinanced.</p>
            </div>
            <div>
              <h2 className="text-[#052316] text-[24px] font-bold mb-3 font-playfair">7. Reason #6: Scalability for Portfolio Growth</h2>
              <p className="text-[15px] leading-[1.8] text-[#3a4a3a]">Conventional lenders cap investors at 10 residential mortgages. Private money lenders have no loan quantity limits.</p>
            </div>
            <div>
              <h2 className="text-[#052316] text-[24px] font-bold mb-3 font-playfair">8. Reason #7: Local Arizona Market Relationships</h2>
              <p className="text-[#3a4a3a] text-[15px]">Working with a local Arizona broker means instant access to local appraisers, title officers, and fast funding draws.</p>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] font-bold mb-6 font-playfair border-b border-[#e8e0d0] pb-3">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What interest rates do private money lenders charge in Arizona?", a: "Private money rates typically range from 9% to 12% depending on experience, LTV, and loan duration." },
                { q: "Can I refinance out of a private money loan?", a: "Yes! Many investors use DSCR or conventional long-term loans once renovation is complete." }
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
            <h3 className="text-[24px] font-bold mb-3 font-playfair">Explore Private Money Solutions</h3>
            <p className="text-[#c8c8b8] text-[15px] max-w-xl mx-auto mb-6">Contact our Arizona mortgage team to discuss terms for your next deal.</p>
            <Link href="/private-money-lender-arizona" className="inline-block bg-[#3fb364] hover:bg-[#2d9e4f] text-white font-bold text-[15px] px-8 py-3.5 rounded-xl transition-colors">
              Learn More About Private Money
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
