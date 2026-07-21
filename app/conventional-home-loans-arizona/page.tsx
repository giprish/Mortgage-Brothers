"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function ConventionalHomeLoansPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What credit score do I need for a conventional loan in Arizona?",
      a: "Most lenders require a minimum credit score of 620 for a conventional mortgage in Arizona. However, higher credit scores (740+) typically secure lower interest rates and cheaper private mortgage insurance (PMI) premiums."
    },
    {
      q: "How much down payment is required for a conventional loan?",
      a: "First-time homebuyers in Arizona can put down as little as 3% on a conventional loan. Standard buyers typically put down 5% to 20%. If you put down 20% or more, you avoid private mortgage insurance (PMI) altogether."
    },
    {
      q: "When does Private Mortgage Insurance (PMI) drop off a conventional loan?",
      a: "Unlike FHA loans which require MIP for the life of the loan, conventional PMI automatically terminates once your loan balance reaches 78% of the original property value, or you can request cancellation once you reach 80% LTV equity."
    },
    {
      q: "What is the conventional conforming loan limit in Arizona?",
      a: "Conforming loan limits are set annually by the FHFA. For single-family homes in Arizona, conforming limits start at $766,550+ and can be higher in designated high-cost counties."
    },
    {
      q: "Can I buy a second home or investment property with a conventional loan?",
      a: "Yes! Conventional loans are the primary financing option for second homes and non-owner-occupied investment properties in Arizona, with down payment requirements starting at 10% for second homes and 15%-20% for investments."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* ════════════════════════════════════════════════════════════
            HERO SECTION
        ════════════════════════════════════════════════════════════ */}
        <section className="relative w-full bg-[#052316] text-white pt-[110px] lg:pt-[130px] pb-16 lg:pb-24 px-6 lg:px-12 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3fb364]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-block bg-[#3fb364]/20 border border-[#3fb364]/40 text-[#3fb364] text-[12px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                ARIZONA MORTGAGE SOLUTIONS
              </span>

              <h1 className="text-[34px] sm:text-[44px] lg:text-[54px] font-bold font-playfair leading-[1.15] text-white">
                Conventional Home Loans in Arizona
              </h1>

              <p className="text-[#c8c8b8] text-[16px] lg:text-[18px] leading-relaxed max-w-2xl">
                Find competitive rates, flexible down payment options as low as 3%, and local Arizona mortgage expertise tailored to your home purchase or refinance.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/#get-pre-approved"
                  className="bg-[#3fb364] hover:bg-[#359854] text-white text-[16px] font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  GET PRE-APPROVED NOW →
                </Link>
                <a
                  href="tel:4805356200"
                  className="border border-white/30 hover:border-white text-white text-[15px] font-semibold px-6 py-4 rounded-full transition-all hover:bg-white/10"
                >
                  Call (480) 535-6200
                </a>
              </div>
            </div>

            {/* Right Card / Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#0a2e1d] p-6 sm:p-8 text-left">
                <div className="w-12 h-12 rounded-2xl bg-[#3fb364]/20 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.5">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>

                <h3 className="text-[22px] font-bold text-white mb-3 font-playfair">
                  Why Choose Conventional in Arizona?
                </h3>
                <ul className="space-y-3 text-[14.5px] text-[#c8c8b8]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#3fb364] font-bold text-[16px]">✓</span>
                    <span>Down payments starting at just 3% for qualified buyers</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#3fb364] font-bold text-[16px]">✓</span>
                    <span>No upfront mortgage insurance premiums required</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#3fb364] font-bold text-[16px]">✓</span>
                    <span>PMI automatically cancels at 20% home equity</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#3fb364] font-bold text-[16px]">✓</span>
                    <span>Available for primary homes, 2nd homes &amp; investments</span>
                  </li>
                </ul>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-[13px] text-[#8da684]">
                  <span>AZ Mortgage Brothers</span>
                  <span className="font-semibold text-[#3fb364]">NMLS #1661360</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            FEATURE HIGHLIGHTS ANCHOR BAR
        ════════════════════════════════════════════════════════════ */}
        <div className="w-full bg-[#03170e] text-[#c8c8b8] border-y border-white/10 py-4 px-6">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-around gap-6 text-[14px] font-medium">
            <div className="flex items-center gap-2">
              <span className="text-[#3fb364]">🔑</span>
              <span>Low Down Payments (3% - 5%)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#3fb364]">⚡</span>
              <span>Same-Day Pre-Approval</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#3fb364]">📊</span>
              <span>Wholesale Local Rates</span>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════
            SECTION 2 — WHAT IS A CONVENTIONAL LOAN?
        ════════════════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase">
                UNDERSTANDING CONVENTIONAL FINANCING
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair leading-tight">
                What is a Conventional Home Loan in Arizona?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                A conventional loan is a mortgage that is not directly insured or guaranteed by a government agency such as the FHA, VA, or USDA. Instead, conventional loans follow rules established by Fannie Mae and Freddie Mac (the government-sponsored enterprises that purchase loans from lenders).
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Because conventional mortgages offer maximum flexibility with property types, loan terms (10 to 30 years), and mortgage insurance elimination, they remain the most popular choice for Arizona homebuyers with solid credit histories.
              </p>

              <div className="pt-2">
                <Link
                  href="/#get-pre-approved"
                  className="inline-block bg-[#052316] hover:bg-[#0a3a24] text-white font-bold px-7 py-3.5 rounded-full transition-all shadow"
                >
                  GET PRE-APPROVED NOW →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#fcf9f3] border border-[#e0e0e0] rounded-3xl p-7 text-left space-y-4 shadow-sm">
              <h3 className="text-[19px] font-bold text-[#052316] font-playfair border-b border-[#e0e0e0] pb-3">
                Key Conventional Loan Features
              </h3>
              <div className="space-y-3.5 text-[14px] text-[#32353C]">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3fb364]/15 text-[#3fb364] flex items-center justify-center font-bold text-[12px] mt-0.5">✓</div>
                  <span><strong>3% Down Payment</strong> available for first-time home buyers</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3fb364]/15 text-[#3fb364] flex items-center justify-center font-bold text-[12px] mt-0.5">✓</div>
                  <span><strong>Minimum 620 Credit Score</strong> requirement for qualification</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3fb364]/15 text-[#3fb364] flex items-center justify-center font-bold text-[12px] mt-0.5">✓</div>
                  <span><strong>No Upfront MIP</strong> fee required at closing</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3fb364]/15 text-[#3fb364] flex items-center justify-center font-bold text-[12px] mt-0.5">✓</div>
                  <span><strong>Cancelable PMI</strong> when equity reaches 20% (80% LTV)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3fb364]/15 text-[#3fb364] flex items-center justify-center font-bold text-[12px] mt-0.5">✓</div>
                  <span><strong>Flexible Terms</strong> including 30, 25, 20, and 15-year fixed rates</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 3 — STATS BANNER
        ════════════════════════════════════════════════════════════ */}
        <section className="w-full bg-[#3fb364] text-white py-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-[36px] lg:text-[44px] font-extrabold leading-none">3%</div>
              <div className="text-[12px] lg:text-[13px] font-bold uppercase tracking-wider mt-1 opacity-90">Min Down Payment</div>
            </div>
            <div>
              <div className="text-[36px] lg:text-[44px] font-extrabold leading-none">620</div>
              <div className="text-[12px] lg:text-[13px] font-bold uppercase tracking-wider mt-1 opacity-90">Min Credit Score</div>
            </div>
            <div>
              <div className="text-[36px] lg:text-[44px] font-extrabold leading-none">$766K+</div>
              <div className="text-[12px] lg:text-[13px] font-bold uppercase tracking-wider mt-1 opacity-90">Conforming Limit</div>
            </div>
            <div>
              <div className="text-[36px] lg:text-[44px] font-extrabold leading-none">0%</div>
              <div className="text-[12px] lg:text-[13px] font-bold uppercase tracking-wider mt-1 opacity-90">PMI at 80% LTV</div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 4 — KEY BENEFITS (GRID)
        ════════════════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-24 px-6 lg:px-12 bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div>
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                BENEFITS OF CONVENTIONAL LOANS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Why Arizona Buyers Prefer Conventional Mortgages
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {[
                {
                  title: "Low Down Payment Options",
                  desc: "Qualified first-time buyers can put down as little as 3%, while repeat buyers can secure financing with 5% down."
                },
                {
                  title: "No Upfront Mortgage Insurance",
                  desc: "Unlike FHA or USDA loans, conventional loans do not charge a 1.75% upfront mortgage insurance fee."
                },
                {
                  title: "Automatic PMI Elimination",
                  desc: "Once you build 20% equity in your Arizona home, private mortgage insurance (PMI) drops off, lowering your monthly bill."
                },
                {
                  title: "All Property Types Covered",
                  desc: "Finance primary residences, vacation/second homes, and residential income investment properties with competitive rates."
                },
                {
                  title: "Higher Conforming Limits",
                  desc: "Borrow up to conforming limits ($766,550+) without needing higher interest rate jumbo loan financing."
                },
                {
                  title: "Flexible Loan Structures",
                  desc: "Choose between 15-year, 20-year, and 30-year fixed terms, or adjustable-rate options to fit your budget."
                }
              ].map((b, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e0e0e0] hover:border-[#3fb364] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center font-bold text-[18px] mb-4 group-hover:bg-[#3fb364] group-hover:text-white transition-colors">
                    {idx + 1}
                  </div>
                  <h3 className="text-[17px] font-bold text-[#052316] mb-2 font-playfair">{b.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/#get-pre-approved"
                className="bg-[#3fb364] hover:bg-[#359854] text-white font-bold text-[16px] px-8 py-4 rounded-full transition-all shadow-md inline-block"
              >
                GET PRE-APPROVED NOW →
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 5 — CONVENTIONAL VS FHA COMPARISON
        ════════════════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                LOAN COMPARISON
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Conventional vs. FHA Loans in Arizona
              </h2>
            </div>

            <div className="overflow-x-auto border border-[#e0e0e0] rounded-2xl shadow-sm">
              <table className="w-full text-left text-[14px] border-collapse">
                <thead>
                  <tr className="bg-[#052316] text-white">
                    <th className="py-4 px-6 font-semibold">Feature</th>
                    <th className="py-4 px-6 font-semibold">Conventional Loan</th>
                    <th className="py-4 px-6 font-semibold">FHA Loan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e0e0e0] bg-white">
                  <tr>
                    <td className="py-3.5 px-6 font-bold text-[#052316]">Minimum Down Payment</td>
                    <td className="py-3.5 px-6 font-medium text-[#3fb364]">3% (First-Time) / 5%</td>
                    <td className="py-3.5 px-6">3.5%</td>
                  </tr>
                  <tr className="bg-[#fcf9f3]">
                    <td className="py-3.5 px-6 font-bold text-[#052316]">Minimum Credit Score</td>
                    <td className="py-3.5 px-6">620+</td>
                    <td className="py-3.5 px-6 text-[#3fb364]">580+</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-bold text-[#052316]">Upfront Mortgage Insurance</td>
                    <td className="py-3.5 px-6 font-medium text-[#3fb364]">None (0%)</td>
                    <td className="py-3.5 px-6">1.75% of Base Loan</td>
                  </tr>
                  <tr className="bg-[#fcf9f3]">
                    <td className="py-3.5 px-6 font-bold text-[#052316]">PMI Cancellation</td>
                    <td className="py-3.5 px-6 font-medium text-[#3fb364]">Ends at 20% Equity (80% LTV)</td>
                    <td className="py-3.5 px-6">Lifetime of Loan (if &lt;10% down)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-bold text-[#052316]">Property Types</td>
                    <td className="py-3.5 px-6 font-medium text-[#3fb364]">Primary, 2nd Home &amp; Investment</td>
                    <td className="py-3.5 px-6">Primary Residence Only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 6 — FAQ ACCORDION
        ════════════════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Conventional Loans FAQ
              </h2>
            </div>

            <div className="space-y-4 text-left">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e0e0e0] rounded-2xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-[#052316] text-[16px] focus:outline-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#3fb364] text-[20px] ml-4 font-bold">
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </button>

                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-[#4e5b4e] text-[14.5px] leading-relaxed border-t border-[#f0f0f0] pt-4 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 7 — CTA BANNER & PRE-APPROVAL
        ════════════════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-[#052316] text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-[28px] lg:text-[40px] font-bold font-playfair">
              Ready to Lock in Your Arizona Conventional Rate?
            </h2>
            <p className="text-[#c8c8b8] text-[16px] max-w-2xl mx-auto leading-relaxed">
              Connect with AZ Mortgage Brothers today. We evaluate options across wholesale lenders to deliver competitive rates and smooth, on-time closings.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/#get-pre-approved"
                className="bg-[#3fb364] hover:bg-[#359854] text-white font-bold text-[16px] px-8 py-4 rounded-full transition-all shadow-lg"
              >
                GET PRE-APPROVED NOW →
              </Link>
              <a
                href="tel:4805356200"
                className="border border-white/30 hover:border-white text-white font-semibold text-[15px] px-7 py-4 rounded-full transition-all hover:bg-white/10"
              >
                Call (480) 535-6200
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
