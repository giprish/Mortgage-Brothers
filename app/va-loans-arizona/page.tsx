"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function VaLoansPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Who qualifies for a VA loan in Arizona?",
      a: "Active-duty service members, veterans, National Guard/Reserve members, and eligible surviving spouses who meet service requirements qualify for VA loan benefits."
    },
    {
      q: "Is a down payment required on a VA loan?",
      a: "No! VA loans offer 0% down payment financing for eligible military borrowers with full entitlement."
    },
    {
      q: "Do VA loans require monthly mortgage insurance (PMI)?",
      a: "No! VA loans do not charge monthly PMI, which saves military buyers hundreds of dollars per month compared to FHA or conventional loans."
    },
    {
      q: "What is the VA Funding Fee?",
      a: "The VA Funding Fee is a one-time fee set by the government that helps sustain the VA loan program. It can be rolled into your total loan amount or waived completely for veterans with service-connected disability ratings."
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
                MILITARY BENEFIT LOAN
              </span>

              <h1 className="text-[34px] sm:text-[44px] lg:text-[54px] font-bold font-playfair leading-[1.15] text-white">
                VA Home Loans in Arizona
              </h1>

              <p className="text-[#c8c8b8] text-[16px] lg:text-[18px] leading-relaxed max-w-2xl">
                Honoring veterans and active duty military with 0% down payment, $0 monthly PMI, competitive interest rates, and dedicated local guidance.
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
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>

                <h3 className="text-[22px] font-bold text-white mb-3 font-playfair">
                  VA Loan Highlights
                </h3>
                <ul className="space-y-3 text-[14.5px] text-[#c8c8b8]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#3fb364] font-bold text-[16px]">✓</span>
                    <span>$0 Down Payment required</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#3fb364] font-bold text-[16px]">✓</span>
                    <span>$0 Monthly PMI (Private Mortgage Insurance)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#3fb364] font-bold text-[16px]">✓</span>
                    <span>Competitive interest rates below conventional averages</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#3fb364] font-bold text-[16px]">✓</span>
                    <span>VA Funding Fee waived for disabled veterans</span>
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
              <span className="text-[#3fb364]">🇺🇸</span>
              <span>0% Down Payment Financing</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#3fb364]">🛡️</span>
              <span>No Monthly Mortgage Insurance</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#3fb364]">⚡</span>
              <span>Fast COE Certificate Retrieval</span>
            </div>
          </div>
        </div>

        {/* DETAILS SECTION */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase">
                HONORING VETERANS &amp; MILITARY
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair leading-tight">
                Why VA Loans are the Top Choice for Military Families
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Created in 1944 by the U.S. government, VA loans provide active-duty military service members, veterans, and military spouses with unbeatable home financing terms. AZ Mortgage Brothers handles Certificate of Eligibility (COE) retrieval on your behalf.
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
                VA Loan Eligibility
              </h3>
              <div className="space-y-3.5 text-[14px] text-[#32353C]">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3fb364]/15 text-[#3fb364] flex items-center justify-center font-bold text-[12px] mt-0.5">✓</div>
                  <span><strong>Active Duty:</strong> 90 consecutive days of active service</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3fb364]/15 text-[#3fb364] flex items-center justify-center font-bold text-[12px] mt-0.5">✓</div>
                  <span><strong>Veterans:</strong> 90 days wartime or 181 days peacetime service</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3fb364]/15 text-[#3fb364] flex items-center justify-center font-bold text-[12px] mt-0.5">✓</div>
                  <span><strong>Guard / Reserves:</strong> 6 years of service</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BANNER */}
        <section className="w-full bg-[#3fb364] text-white py-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-[36px] lg:text-[44px] font-extrabold leading-none">0%</div>
              <div className="text-[12px] lg:text-[13px] font-bold uppercase tracking-wider mt-1 opacity-90">Down Payment</div>
            </div>
            <div>
              <div className="text-[36px] lg:text-[44px] font-extrabold leading-none">$0</div>
              <div className="text-[12px] lg:text-[13px] font-bold uppercase tracking-wider mt-1 opacity-90">Monthly PMI</div>
            </div>
            <div>
              <div className="text-[36px] lg:text-[44px] font-extrabold leading-none">580+</div>
              <div className="text-[12px] lg:text-[13px] font-bold uppercase tracking-wider mt-1 opacity-90">Min Credit Score</div>
            </div>
            <div>
              <div className="text-[36px] lg:text-[44px] font-extrabold leading-none">100%</div>
              <div className="text-[12px] lg:text-[13px] font-bold uppercase tracking-wider mt-1 opacity-90">COE Assistance</div>
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
                VA Loans FAQ
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
              Ready to Use Your VA Home Loan Benefits?
            </h2>
            <p className="text-[#c8c8b8] text-[16px] max-w-2xl mx-auto leading-relaxed">
              Connect with AZ Mortgage Brothers to retrieve your COE and start your 0% down VA pre-approval.
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
