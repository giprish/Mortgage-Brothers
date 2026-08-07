"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import LoanProgramHero from "../component/LoanProgramHero";

export default function SelfEmployedMortgagePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is a Bank Statement Mortgage for self-employed buyers?",
      a: "Bank Statement Mortgages allow self-employed business owners, freelancers, and entrepreneurs to qualify for a home loan using 12 to 24 months of personal or business bank statement deposits instead of tax returns.",
    },
    {
      q: "Why do tax returns make it hard for business owners to get a mortgage?",
      a: "Business owners often take legal tax write-offs and deductions, which lowers their taxable net income on tax returns. Non-QM bank statement loans look at real cash deposits instead of taxable net income.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        <LoanProgramHero
          title="Self-Employed Mortgages in Arizona"
          subtitle="Qualify for a home loan using 12 to 24 months of bank statement cash deposits — no tax returns required for business owners and entrepreneurs."
        />

        <section className="loan-section bg-white">
          <div className="loan-section-inner max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-6 text-left">
                <span className="inline-block bg-[#3fb364]/10 border border-[#3fb364]/30 text-[#3fb364] text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  Non-QM &amp; Bank Statement Loans
                </span>
                <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                  Mortgage Solutions Built for Entrepreneurs
                </h2>
                <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                  Standard mortgage underwriting often penalizes business owners who maximize legal tax deductions. Our Bank Statement and Non-QM loan programs evaluate your real monthly cash flow so you can purchase or refinance your Arizona property with ease.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-[#e8e0d0]/70 bg-[#fcf9f3] p-6 text-left shadow-sm">
                  <h3 className="text-[22px] font-bold text-[#052316] mb-3 font-playfair">Self-Employed Loan Benefits</h3>
                  <ul className="space-y-3 text-[14.5px] text-[#4e5b4e]">
                    <li>✓ 12 or 24-Month Bank Statement loans</li>
                    <li>✓ No tax returns or P&amp;L paperwork needed</li>
                    <li>✓ Up to 90% LTV financing available</li>
                    <li>✓ Ideal for 1099, LLC, &amp; S-Corp owners</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="loan-section bg-[#fcf9f3]">
          <div className="loan-section-inner max-w-4xl mx-auto loan-section-stack">
            <h2 className="text-[#052316] text-[28px] font-bold font-playfair text-center">Self-Employed Mortgage FAQ</h2>
            <div className="space-y-4 text-left">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-[#e0e0e0] rounded-2xl overflow-hidden shadow-sm">
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
          <h2 className="text-[28px] font-bold font-playfair mb-4">Get Pre-Approved with Your Bank Statements</h2>
          <Link href="/#get-pre-approved" data-preapproval="true" className="btn-primary">
            Start My Pre-Approval
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
