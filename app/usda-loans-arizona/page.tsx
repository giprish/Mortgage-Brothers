"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import LoanProgramHero from "../component/LoanProgramHero";

export default function UsdaLoansPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What areas in Arizona qualify for a USDA loan?",
      a: "USDA loans are available in designated rural and many suburban areas outside the major Phoenix and Tucson metro cores. Towns like Maricopa, Casa Grande, Buckeye fringe, and much of rural Arizona are eligible. We can check any specific address against the USDA eligibility map for you.",
    },
    {
      q: "Do USDA loans really require $0 down?",
      a: "Yes. USDA Rural Development loans offer 100% financing, meaning eligible buyers can purchase a home with no down payment at all.",
    },
    {
      q: "Are there income limits for USDA loans?",
      a: "Yes. USDA loans are designed for low-to-moderate income households, so your total household income must fall below the limit set for your Arizona county and household size.",
    },
    {
      q: "What credit score do I need for a USDA loan?",
      a: "Most lenders look for a credit score of 640 or higher for streamlined approval, though lower scores may still qualify with manual underwriting and strong compensating factors.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        <LoanProgramHero
          title="USDA Home Loans in Arizona"
          subtitle="Buy a home in eligible rural and suburban Arizona with zero down payment, competitive fixed rates, and reduced mortgage insurance through the USDA Rural Development program."
        />

        <section className="loan-section bg-white">
          <div className="loan-section-inner max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-6 text-left">
                <span className="inline-block bg-[#3fb364]/10 border border-[#3fb364]/30 text-[#3fb364] text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  100% Rural Financing
                </span>
                <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                  Zero-Down Homeownership in Rural Arizona
                </h2>
                <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                  Backed by the U.S. Department of Agriculture, USDA loans make homeownership possible for low-to-moderate income families in eligible communities across Arizona. With no down payment required and reduced insurance costs, it&apos;s one of the most affordable ways to buy. AZ Mortgage Brothers will confirm your address eligibility and shop lenders to find your best USDA rate.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-[#e8e0d0]/70 bg-[#fcf9f3] p-6 text-left shadow-sm">
                  <h3 className="text-[22px] font-bold text-[#052316] mb-3 font-playfair">USDA Loan Highlights</h3>
                  <ul className="space-y-3 text-[14.5px] text-[#4e5b4e]">
                    <li>✓ 100% financing — $0 down payment</li>
                    <li>✓ Lower mortgage insurance than FHA</li>
                    <li>✓ Competitive 30-year fixed rates</li>
                    <li>✓ Gift funds allowed for closing costs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="loan-section bg-[#fcf9f3]">
          <div className="loan-section-inner max-w-5xl mx-auto loan-section-stack">
            <h2 className="text-[#052316] text-[28px] lg:text-[34px] font-bold font-playfair text-center">
              Who a USDA loan is built for
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/50 shadow-sm">
                <h3 className="text-[#052316] text-[16px] font-bold mb-2">Rural &amp; suburban buyers</h3>
                <p className="text-[#4e5b4e] text-[13px] leading-[1.6]">
                  Purchasing in an eligible Arizona community outside the major metro cores.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/50 shadow-sm">
                <h3 className="text-[#052316] text-[16px] font-bold mb-2">Limited savings</h3>
                <p className="text-[#4e5b4e] text-[13px] leading-[1.6]">
                  No down payment needed, so you can buy without years of saving.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/50 shadow-sm">
                <h3 className="text-[#052316] text-[16px] font-bold mb-2">Moderate income households</h3>
                <p className="text-[#4e5b4e] text-[13px] leading-[1.6]">
                  Household income within the USDA limit for your county and family size.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="loan-section bg-white">
          <div className="loan-section-inner max-w-4xl mx-auto loan-section-stack">
            <h2 className="text-[#052316] text-[28px] font-bold font-playfair text-center">USDA Loans FAQ</h2>
            <div className="space-y-4 text-left">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-[#052316]"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#3fb364] font-bold">{openFaq === idx ? "−" : "+"}</span>
                  </button>
                  {openFaq === idx && <div className="px-6 pb-6 text-[#4e5b4e] border-t pt-4">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="loan-section bg-[#052316] text-white text-center">
          <h2 className="text-[28px] font-bold font-playfair mb-4">See If Your Arizona Home Qualifies for USDA</h2>
          <Link href="/#get-pre-approved" data-preapproval="true" className="btn-primary">
            Start My Pre-Approval
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
