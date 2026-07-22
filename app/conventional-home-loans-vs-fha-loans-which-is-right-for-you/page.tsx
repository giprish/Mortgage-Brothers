"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function ConventionalVsFhaLoansPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow pt-[72px]">
        {/* Article Hero Banner */}
        <section className="bg-[#052316] text-white py-16 px-6 lg:px-10 relative overflow-hidden text-center">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-center justify-center gap-2 text-[#8da684] text-[13px] font-semibold mb-6">
              <Link href="/blog/" className="hover:text-white transition-colors">
                Blog
              </Link>
              <span>&gt;</span>
              <span className="text-[#3fb364]">Arizona Mortgage Insights</span>
            </div>

            <h1
              className="text-[32px] sm:text-[42px] lg:text-[50px] font-bold leading-tight mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Conventional Home Loans vs. FHA Loans: Which Is Right for You?
            </h1>

            <div className="flex items-center justify-center gap-4 text-[14px] text-[#c8c8b8]">
              <span>By <strong className="text-white">Eddie Knoell</strong></span>
              <span>•</span>
              <span>Jun 20, 2026</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </div>
        </section>

        {/* Article Content Body */}
        <article className="max-w-4xl mx-auto px-6 py-12 lg:py-16 text-[#1a3a1a]">
          
          {/* Section 1: Introduction */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-4 font-playfair border-b border-[#e8e0d0] pb-3">
              The Arizona Home Loan Dilemma
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Buying a home in Arizona is exciting—but it can also feel overwhelming when it comes to choosing the right mortgage.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Take Emma, a first-time buyer in Phoenix. She’s saved some money but isn’t sure if a <Link href="/conventional-home-loans-arizona/" className="text-[#3fb364] font-semibold underline">Conventional home loan</Link> or an <Link href="/fha-loans/" className="text-[#3fb364] font-semibold underline">FHA loan</Link> makes more sense. Her friend Carlos, upgrading to a bigger home in Gilbert with excellent credit, is leaning Conventional.
            </p>

            <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl my-6">
              <p className="text-[16px] font-bold text-[#052316]">
                👉 &quot;Should I go with a Conventional Loan or an FHA Loan?&quot;
              </p>
              <p className="text-[14.5px] text-[#3a4a3a] mt-1">
                This guide breaks it down clearly—so you’ll know which option fits your situation best.
              </p>
            </div>
          </section>

          {/* Section 2: What Is Conventional */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-4 font-playfair border-b border-[#e8e0d0] pb-3">
              What Is a Conventional Loan?
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              A <strong>Conventional loan</strong> is a mortgage not backed by the government. Instead, it’s offered by private lenders such as banks, credit unions, or mortgage companies, usually following <strong>Fannie Mae</strong> and <strong>Freddie Mac</strong> guidelines.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[15px] leading-[1.7] text-[#3a4a3a] mb-6">
              <li><strong>Down payments:</strong> as low as 3% (though 20% is ideal to avoid mortgage insurance).</li>
              <li><strong>Credit requirements:</strong> generally 620+, with 700+ for the best rates.</li>
              <li><strong>Private Mortgage Insurance (PMI):</strong> required with less than 20% down, but removable once you hit 20% equity.</li>
              <li><strong>Loan limits:</strong> up to $1,041,125 in most Arizona counties for 2026.</li>
              <li><strong>Flexibility:</strong> works for primary homes, second homes, or investment properties.</li>
            </ul>
            <p className="text-[15px] font-semibold text-[#052316]">
              👉 <strong>Best for:</strong> Buyers with strong credit and stable income who want flexibility and lower long-term costs.
            </p>
          </section>

          {/* Section 3: What Is FHA */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-4 font-playfair border-b border-[#e8e0d0] pb-3">
              What Is an FHA Loan?
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              An <strong>FHA loan</strong> is backed by the Federal Housing Administration, designed to help more people—especially first-time buyers—qualify for a mortgage.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[15px] leading-[1.7] text-[#3a4a3a] mb-6">
              <li><strong>Down payment:</strong> as low as 3.5% with a 580 credit score.</li>
              <li><strong>Lower credit tolerance:</strong> 580 minimum credit score required.</li>
              <li><strong>Mortgage Insurance Premium (MIP):</strong> required, and often stays for the life of the loan if you put less than 10% down.</li>
              <li><strong>Loan limits:</strong> $557,750 in Maricopa County and $541,287 in Pima County.</li>
              <li><strong>Forgiving credit history:</strong> more lenient with bankruptcy, foreclosure, and debt-to-income ratios.</li>
            </ul>
            <p className="text-[15px] font-semibold text-[#052316]">
              👉 <strong>Best for:</strong> First-time buyers or those with lower credit scores and smaller down payments.
            </p>
          </section>

          {/* Side by Side Comparison Table */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-5 font-playfair border-b border-[#e8e0d0] pb-3">
              Side-by-Side Rate &amp; Rule Comparison
            </h2>

            <div className="overflow-x-auto my-6 border border-[#e8e0d0] rounded-xl shadow-sm bg-white">
              <table className="w-full text-left text-[14px]">
                <thead className="bg-[#052316] text-white">
                  <tr>
                    <th className="p-4 font-semibold">Feature</th>
                    <th className="p-4 font-semibold">Conventional Loan</th>
                    <th className="p-4 font-semibold">FHA Loan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8e0d0]">
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">Minimum Down Payment</td>
                    <td className="p-4">3%</td>
                    <td className="p-4">3.5%</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">Credit Score Requirement</td>
                    <td className="p-4">620+</td>
                    <td className="p-4">580+</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">Mortgage Insurance</td>
                    <td className="p-4">PMI until 20% equity</td>
                    <td className="p-4">MIP (usually for life of loan)</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">Loan Limits (Maricopa, 2026)</td>
                    <td className="p-4">$1,041,125</td>
                    <td className="p-4">$557,750</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">Interest Rates</td>
                    <td className="p-4">Lower with strong credit</td>
                    <td className="p-4">Competitive, but offset by MIP</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">Property Types</td>
                    <td className="p-4">Primary, second home, investment</td>
                    <td className="p-4">Primary residence only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Affordability Example */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-4 font-playfair border-b border-[#e8e0d0] pb-3">
              Affordability Example: Phoenix Home Purchase
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Let’s compare a <strong>$350,000</strong> home in Phoenix using FHA and Conventional financing:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-white border border-[#e8e0d0] p-6 rounded-2xl shadow-sm">
                <h3 className="text-[#052316] text-[18px] font-bold mb-3">FHA Loan (3.5% Down)</h3>
                <ul className="space-y-1.5 text-[14px] text-[#3a4a3a]">
                  <li>Down Payment: <strong>$12,250</strong></li>
                  <li>Loan Amount: <strong>$337,750</strong></li>
                  <li>Interest Rate: <strong>6.5%</strong></li>
                  <li>P&amp;I Payment: <strong>~$2,134</strong></li>
                  <li>MIP: <strong>~$155/mo</strong></li>
                  <li>Taxes &amp; Insurance: <strong>~$417/mo</strong></li>
                  <li className="pt-2 border-t text-[#052316] font-bold text-[15px]">Total Monthly: ~$2,706</li>
                </ul>
              </div>

              <div className="bg-white border border-[#e8e0d0] p-6 rounded-2xl shadow-sm">
                <h3 className="text-[#052316] text-[18px] font-bold mb-3">Conventional (5% Down)</h3>
                <ul className="space-y-1.5 text-[14px] text-[#3a4a3a]">
                  <li>Down Payment: <strong>$17,500</strong></li>
                  <li>Loan Amount: <strong>$332,500</strong></li>
                  <li>Interest Rate: <strong>6.25%</strong></li>
                  <li>P&amp;I Payment: <strong>~$2,047</strong></li>
                  <li>PMI (removable): <strong>~$185/mo</strong></li>
                  <li>Taxes &amp; Insurance: <strong>~$417/mo</strong></li>
                  <li className="pt-2 border-t text-[#052316] font-bold text-[15px]">Total Monthly: ~$2,649</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Frequently Asked Questions */}
          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-6 font-playfair border-b border-[#e8e0d0] pb-3">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Is an FHA loan better than a Conventional loan?",
                  a: "Neither is universally 'better'. FHA is easier to qualify for with smaller down payments and lower credit scores. Conventional is better if you have a 620+ credit score and want to drop mortgage insurance once you hit 20% equity."
                },
                {
                  q: "Can I convert an FHA loan to a Conventional loan later?",
                  a: "Yes! Many homeowners start with an FHA loan and later refinance into a Conventional loan once their credit score improves or home value rises to eliminate MIP."
                },
                {
                  q: "Which loan has lower monthly payments in Arizona?",
                  a: "Initial payments may be lower on Conventional if you put 20% down (no PMI). FHA interest rates are competitive, but MIP adds to monthly cost."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-[#e8e0d0] rounded-xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 font-bold text-[#052316] text-[16px] flex items-center justify-between hover:bg-[#f9f7f2] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#3fb364] text-[20px] font-bold">
                      {openFaqIndex === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openFaqIndex === idx && (
                    <div className="p-5 pt-0 text-[14.5px] leading-relaxed text-[#4a5568] border-t border-[#f0e8db] bg-[#faf8f4]">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CTA Consultation Banner */}
          <div className="bg-[#052316] text-white rounded-2xl p-8 text-center mt-12 shadow-xl">
            <h3 className="text-[24px] font-bold mb-3 font-playfair">
              Get Your Free Arizona Loan Comparison
            </h3>
            <p className="text-[#c8c8b8] text-[15px] max-w-xl mx-auto mb-6 leading-relaxed">
              Let the Mortgage Brothers team run the exact numbers for your situation with no fee or obligation.
            </p>
            <Link
              href="/#get-pre-approved"
              className="inline-block bg-[#3fb364] hover:bg-[#2d9e4f] text-white font-bold text-[15px] px-8 py-3.5 rounded-xl shadow-md transition-colors"
            >
              Get Your Free Consultation
            </Link>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
