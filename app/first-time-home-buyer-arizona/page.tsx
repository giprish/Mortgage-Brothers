"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function FirstTimeHomeBuyerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Who qualifies as a first-time homebuyer in Arizona?",
      a: "An individual who has not owned a principal residence during the 3-year period ending on the date of purchase of the property qualifies as a first-time homebuyer under most state and federal loan programs."
    },
    {
      q: "What down payment assistance programs are available in Arizona?",
      a: "Arizona offers state and county programs such as Home Plus, Pathway to Purchase, and Access DPA which provide 3% to 5% down payment assistance grants or soft second mortgages."
    },
    {
      q: "What is the minimum credit score for first-time buyers?",
      a: "First-time buyers can qualify with a credit score as low as 580 for FHA loans (or 620 for conventional 3% down programs)."
    },
    {
      q: "Can gift funds be used for the down payment?",
      a: "Yes! 100% of your down payment and closing costs can be funded via gift funds from family members or qualified non-profit organizations."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative w-full bg-[#052316] text-white pt-[110px] lg:pt-[130px] pb-16 lg:pb-24 px-6 lg:px-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3fb364]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-block bg-[#3fb364]/20 border border-[#3fb364]/40 text-[#3fb364] text-[12px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                FIRST-TIME BUYER PROGRAM
              </span>

              <h1 className="text-[34px] sm:text-[44px] lg:text-[54px] font-bold font-playfair leading-[1.15] text-white">
                First-Time Home Buyer Loans in Arizona
              </h1>

              <p className="text-[#c8c8b8] text-[16px] lg:text-[18px] leading-relaxed max-w-2xl">
                Unlock low down payment options (starting at 3%), down payment assistance grants, and step-by-step guidance tailored for Arizona first-time homebuyers.
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

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#0a2e1d] p-6 sm:p-8 text-left">
                <div className="w-12 h-12 rounded-2xl bg-[#3fb364]/20 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>

                <h3 className="text-[22px] font-bold text-white mb-3 font-playfair">
                  First-Time Buyer Advantages
                </h3>
                <ul className="space-y-3 text-[14.5px] text-[#c8c8b8]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#3fb364] font-bold text-[16px]">✓</span>
                    <span>As little as 3% down payment required</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#3fb364] font-bold text-[16px]">✓</span>
                    <span>Arizona Down Payment Assistance grants available</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#3fb364] font-bold text-[16px]">✓</span>
                    <span>Gift funds allowed for 100% of down payment</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#3fb364] font-bold text-[16px]">✓</span>
                    <span>Flexible credit requirements &amp; personalized coaching</span>
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

        {/* HIGHLIGHTS BAR */}
        <div className="w-full bg-[#03170e] text-[#c8c8b8] border-y border-white/10 py-4 px-6">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-around gap-6 text-[14px] font-medium">
            <div className="flex items-center gap-2">
              <span className="text-[#3fb364]">🎁</span>
              <span>Down Payment Assistance Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#3fb364]">⚡</span>
              <span>Fast 24-Hour Pre-Approval</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#3fb364]">🏡</span>
              <span>3% Down Conventional &amp; 3.5% FHA</span>
            </div>
          </div>
        </div>

        {/* DETAILS SECTION */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase">
                STEP-BY-STEP HOMEOWNERSHIP
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair leading-tight">
                Navigating Your First Home Purchase in Arizona
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Buying your first home can feel intimidating, but with the right team, it is one of the most rewarding financial milestones of your life. AZ Mortgage Brothers simplifies the process from pre-approval to closing day.
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
                First-Time Buyer Checklist
              </h3>
              <div className="space-y-3.5 text-[14px] text-[#32353C]">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3fb364]/15 text-[#3fb364] flex items-center justify-center font-bold text-[12px] mt-0.5">✓</div>
                  <span><strong>Get Pre-Approved:</strong> Know your exact budget before shopping</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3fb364]/15 text-[#3fb364] flex items-center justify-center font-bold text-[12px] mt-0.5">✓</div>
                  <span><strong>Review Assistance Grants:</strong> See if you qualify for AZ Home Plus</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3fb364]/15 text-[#3fb364] flex items-center justify-center font-bold text-[12px] mt-0.5">✓</div>
                  <span><strong>Calculate Total Payment:</strong> Principal, Interest, Taxes &amp; Insurance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BANNER */}
        <section className="w-full bg-[#3fb364] text-white py-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-[36px] lg:text-[44px] font-extrabold leading-none">3%</div>
              <div className="text-[12px] lg:text-[13px] font-bold uppercase tracking-wider mt-1 opacity-90">Minimum Down</div>
            </div>
            <div>
              <div className="text-[36px] lg:text-[44px] font-extrabold leading-none">580+</div>
              <div className="text-[12px] lg:text-[13px] font-bold uppercase tracking-wider mt-1 opacity-90">Min Credit Score</div>
            </div>
            <div>
              <div className="text-[36px] lg:text-[44px] font-extrabold leading-none">100%</div>
              <div className="text-[12px] lg:text-[13px] font-bold uppercase tracking-wider mt-1 opacity-90">Gift Funds Allowed</div>
            </div>
            <div>
              <div className="text-[36px] lg:text-[44px] font-extrabold leading-none">$0</div>
              <div className="text-[12px] lg:text-[13px] font-bold uppercase tracking-wider mt-1 opacity-90">Pre-Approval Fee</div>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                First-Time Buyer FAQ
              </h2>
            </div>

            <div className="space-y-4 text-left">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-[#e0e0e0] rounded-2xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-[#052316] text-[16px] focus:outline-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#3fb364] text-[20px] ml-4 font-bold">{openFaq === idx ? "−" : "+"}</span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-[#4e5b4e] text-[14.5px] leading-relaxed border-t border-[#f0f0f0] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-[#052316] text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-[28px] lg:text-[40px] font-bold font-playfair">
              Ready to Buy Your First Home in Arizona?
            </h2>
            <p className="text-[#c8c8b8] text-[16px] max-w-2xl mx-auto leading-relaxed">
              Contact AZ Mortgage Brothers today for clear answers, personalized rate quotes, and local guidance.
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
