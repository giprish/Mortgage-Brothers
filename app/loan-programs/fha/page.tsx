"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const faqs = [
  {
    question: "How much do I really need to put down?",
    answer: "3.5% of the purchase price if your credit score is 580 or higher. On a $400,000 home that's $14,000 — and it can be a gift from family."
  },
  {
    question: "What's the lowest credit score you'll consider?",
    answer: "FHA allows scores down to 500 with 10% down, and 580 with 3.5% down. We'll look at the whole picture, not just the number."
  },
  {
    question: "What is MIP and how long does it last?",
    answer: "Mortgage Insurance Premium protects the lender. There's a one-time upfront premium plus an annual premium paid monthly. On most FHA loans it stays for the life of the loan, but you can refinance out of it later."
  },
  {
    question: "Can I use an FHA loan for an investment property?",
    answer: "No — FHA loans are for primary residences only. You can buy a 2-4 unit property and live in one unit, though."
  },
  {
    question: "Is an FHA or conventional loan better for me?",
    answer: "It depends on your credit and down payment. We'll run both side by side so you can see the real monthly and long-term cost of each."
  },
  {
    question: "How fast can I close?",
    answer: "Most of our FHA purchases close in roughly 25 days once you're under contract, assuming documents come back promptly."
  }
];

export default function FhaLoanPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Section 1: Hero Section */}
        <section className="bg-[#052316] text-white py-16 px-6 lg:px-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left side info */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-[#8da684] text-[12px] font-semibold mb-6">
                <Link href="/mortgage-loan-programs-arizona" className="hover:text-white transition-colors">Loan Programs</Link>
                <span>&gt;</span>
                <span className="text-[#3fb364]">FHA Home Loans</span>
              </div>

              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                GOVERNMENT-BACKED LOAN
              </span>

              <h1 className="text-white text-[38px] lg:text-[54px] font-playfair font-normal leading-[1.15] mb-6">
                FHA Home Loans in Arizona
              </h1>

              <p className="text-[#c8c8b8] text-[15px] lg:text-[16.5px] leading-[1.7] max-w-xl mb-8">
                Backed by the Federal Housing Administration, FHA loans are built for buyers who have solid income but a smaller down payment or a credit history that&apos;s still on the mend. It&apos;s one of the most accessible paths to owning a home in Arizona.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#get-pre-approved"
                  className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg"
                >
                  Get Pre-Approved &rarr;
                </Link>
                <Link
                  href="/calculators"
                  className="border border-white/20 hover:border-white text-white text-[14px] font-semibold px-6 py-3 rounded-full transition-all duration-200"
                >
                  Estimate my payment
                </Link>
              </div>
            </div>

            {/* Right side stats widget */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#08271b] border border-white/5 rounded-3xl p-8 flex flex-col gap-6 shadow-lg">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-[#3fb364] text-[24px] lg:text-[28px] font-bold">3.5%</span>
                  <span className="text-[#c8c8b8] text-[13px] text-right font-medium">Minimum down<br />payment</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-[#3fb364] text-[24px] lg:text-[28px] font-bold">580</span>
                  <span className="text-[#c8c8b8] text-[13px] text-right font-medium">Minimum credit<br />score</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#3fb364] text-[24px] lg:text-[28px] font-bold">100%</span>
                  <span className="text-[#c8c8b8] text-[13px] text-right font-medium">Gift-eligible down<br />payment</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Who an FHA loan is built for */}
        <section className="py-20 px-6 lg:px-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#b89a5a] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
              IS THIS YOU?
            </span>
            <h2 className="text-[#052316] text-[28px] lg:text-[34px] font-playfair font-normal">
              Who an FHA loan is built for
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/50 shadow-sm flex flex-col items-start">
              <div className="w-10 h-10 rounded-lg bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center mb-5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.685 0-5.3.232-7.843.682V21M12 9.75v6.5" />
                </svg>
              </div>
              <h3 className="text-[#052316] text-[16px] font-bold mb-2">First-time buyers</h3>
              <p className="text-[#4e5b4e] text-[13px] leading-[1.6]">
                No prior ownership history needed, and the low down payment keeps your cash-to-close manageable.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/50 shadow-sm flex flex-col items-start">
              <div className="w-10 h-10 rounded-lg bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center mb-5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003 6v12a2.25 2.25 0 003 2.25z" />
                </svg>
              </div>
              <h3 className="text-[#052316] text-[16px] font-bold mb-2">Rebuilding credit</h3>
              <p className="text-[#4e5b4e] text-[13px] leading-[1.6]">
                Approvals possible with scores as low as 580 — sometimes lower with compensating factors.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/50 shadow-sm flex flex-col items-start">
              <div className="w-10 h-10 rounded-lg bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center mb-5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
                </svg>
              </div>
              <h3 className="text-[#052316] text-[16px] font-bold mb-2">Limited savings</h3>
              <p className="text-[#4e5b4e] text-[13px] leading-[1.6]">
                Your entire down payment can come from a documented gift from family.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: What you get with an FHA loan */}
        <section className="py-16 px-6 lg:px-10 max-w-5xl mx-auto border-t border-[#e8e0d0]/40">
          <div className="mb-12">
            <h2 className="text-[#052316] text-[26px] lg:text-[32px] font-playfair font-normal mb-3">
              What you get with an FHA loan
            </h2>
            <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed">
              The features that make FHA one of the most flexible ways to buy a home in Arizona.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - 3.5% down */}
            <div className="bg-white border border-[#e8e0d0]/50 p-6 rounded-2xl flex flex-col items-start">
              <div className="text-[#3fb364] text-[20px] font-bold mb-3">%</div>
              <h3 className="text-[#052316] text-[15px] font-bold mb-2">3.5% down</h3>
              <p className="text-[#4e5b4e] text-[12.5px] leading-[1.55]">
                Put down as little as 3.5% of the purchase price on a qualifying home.
              </p>
            </div>

            {/* Card 2 - Flexible credit */}
            <div className="bg-white border border-[#e8e0d0]/50 p-6 rounded-2xl flex flex-col items-start">
              <div className="text-[#3fb364] mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641l-.318 1.249.001-.001z" />
                </svg>
              </div>
              <h3 className="text-[#052316] text-[15px] font-bold mb-2">Flexible credit</h3>
              <p className="text-[#4e5b4e] text-[12.5px] leading-[1.55]">
                Lower score thresholds than conventional financing, with common-sense underwriting.
              </p>
            </div>

            {/* Card 3 - Government-backed */}
            <div className="bg-white border border-[#e8e0d0]/50 p-6 rounded-2xl flex flex-col items-start">
              <div className="text-[#3fb364] mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-[#052316] text-[15px] font-bold mb-2">Government-backed</h3>
              <p className="text-[#4e5b4e] text-[12.5px] leading-[1.55]">
                FHA insurance lets lenders offer competitive rates with more forgiving terms.
              </p>
            </div>

            {/* Card 4 - Gift funds */}
            <div className="bg-white border border-[#e8e0d0]/50 p-6 rounded-2xl flex flex-col items-start">
              <div className="text-[#3fb364] mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h17.25" />
                </svg>
              </div>
              <h3 className="text-[#052316] text-[15px] font-bold mb-2">Gift funds allowed</h3>
              <p className="text-[#4e5b4e] text-[12.5px] leading-[1.55]">
                100% of your down payment and closing costs can be gifted by an eligible donor.
              </p>
            </div>

            {/* Card 5 - Assumable loan */}
            <div className="bg-white border border-[#e8e0d0]/50 p-6 rounded-2xl flex flex-col items-start">
              <div className="text-[#3fb364] mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h3 className="text-[#052316] text-[15px] font-bold mb-2">Assumable loan</h3>
              <p className="text-[#4e5b4e] text-[12.5px] leading-[1.55]">
                A future buyer may be able to take over your FHA rate — a real edge if rates climb.
              </p>
            </div>

            {/* Card 6 - Easy to refinance */}
            <div className="bg-white border border-[#e8e0d0]/50 p-6 rounded-2xl flex flex-col items-start">
              <div className="text-[#3fb364] mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-9 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M10.5 12l-3 3m3-3l3 3" />
                </svg>
              </div>
              <h3 className="text-[#052316] text-[15px] font-bold mb-2">Easy to refinance</h3>
              <p className="text-[#4e5b4e] text-[12.5px] leading-[1.55]">
                FHA Streamline lets you lower your rate later with no appraisal or income docs.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Two Qualification and Payment Cards */}
        <section className="py-12 px-6 lg:px-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Card: What you'll need to qualify */}
            <div className="md:col-span-7 bg-[#faf7f0] border border-[#e8e0d0]/60 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-[#052316] text-[18px] font-bold mb-6">
                  What you&apos;ll need to qualify
                </h3>
                <ul className="flex flex-col gap-4 text-[13.5px] text-[#4e5b4e]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#3fb364] mt-0.5 font-bold">✓</span>
                    <span>Minimum 3.5% down with a 580+ credit score (10% down for 500-579)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#3fb364] mt-0.5 font-bold">✓</span>
                    <span>Steady, documented two-year employment history</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#3fb364] mt-0.5 font-bold">✓</span>
                    <span>Debt-to-income ratio generally under 43% (higher with strong factors)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#3fb364] mt-0.5 font-bold">✓</span>
                    <span>The home must be your primary residence</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#3fb364] mt-0.5 font-bold">✓</span>
                    <span>Property must meet FHA minimum property standards</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#3fb364] mt-0.5 font-bold">✓</span>
                    <span>Mortgage insurance premium (MIP) required — upfront and annual</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Card: EXAMPLE PAYMENT */}
            <div className="md:col-span-5 bg-[#052316] border border-white/5 text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 8px, transparent 8px, transparent 16px)" }}></div>
              
              <div className="relative z-10">
                <span className="text-[#b89a5a] text-[10px] font-bold tracking-widest uppercase block mb-1">
                  EXAMPLE PAYMENT
                </span>
                <span className="text-[#8da684] text-[13px] block mb-6">
                  $400,000 home · 3.5% down · 30-yr fixed
                </span>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-white text-[42px] font-bold">$2,610</span>
                  <span className="text-[#c8c8b8] text-[14px]">/mo</span>
                </div>
                <p className="text-[#c8c8b8] text-[12.5px] leading-relaxed mb-8">
                  Estimate includes principal, interest & MIP. Taxes and insurance vary by county.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10">
                <Link
                  href="/calculators"
                  className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[13.5px] font-bold py-3 px-6 rounded-xl text-center flex items-center justify-center gap-1.5 transition-all duration-200"
                >
                  Run your numbers
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Section 5: Roadmap (How it works) */}
        <section className="py-20 px-6 lg:px-10 max-w-5xl mx-auto border-t border-[#e8e0d0]/40">
          <div className="text-center mb-16">
            <span className="text-[#b89a5a] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
              HOW IT WORKS
            </span>
            <h2 className="text-[#052316] text-[28px] lg:text-[34px] font-playfair font-normal">
              Your FHA loan, step by step
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white border border-[#e8e0d0]/50 p-6 rounded-2xl shadow-sm flex flex-col justify-between min-h-[160px]">
              <div>
                <span className="text-[#3fb364] text-[11px] font-bold block mb-3">01</span>
                <h3 className="text-[#052316] text-[15px] font-bold mb-2">Quick pre-approval</h3>
                <p className="text-[#4e5b4e] text-[12.5px] leading-relaxed">
                  A 15-minute call and a soft credit check tell us exactly what you qualify for.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-[#e8e0d0]/50 p-6 rounded-2xl shadow-sm flex flex-col justify-between min-h-[160px]">
              <div>
                <span className="text-[#3fb364] text-[11px] font-bold block mb-3">02</span>
                <h3 className="text-[#052316] text-[15px] font-bold mb-2">Find your home</h3>
                <p className="text-[#4e5b4e] text-[12.5px] leading-relaxed">
                  Shop with confidence and a pre-approval letter sellers take seriously.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-[#e8e0d0]/50 p-6 rounded-2xl shadow-sm flex flex-col justify-between min-h-[160px]">
              <div>
                <span className="text-[#3fb364] text-[11px] font-bold block mb-3">03</span>
                <h3 className="text-[#052316] text-[15px] font-bold mb-2">We shop lenders</h3>
                <p className="text-[#4e5b4e] text-[12.5px] leading-relaxed">
                  As brokers, we put your FHA file in front of multiple lenders and compare offers.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-[#e8e0d0]/50 p-6 rounded-2xl shadow-sm flex flex-col justify-between min-h-[160px]">
              <div>
                <span className="text-[#3fb364] text-[11px] font-bold block mb-3">04</span>
                <h3 className="text-[#052316] text-[15px] font-bold mb-2">Close & get keys</h3>
                <p className="text-[#4e5b4e] text-[12.5px] leading-relaxed">
                  We manage appraisal, underwriting, and signing — most files close in about 25 days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ section */}
        <section className="py-20 px-6 lg:px-10 max-w-5xl mx-auto border-t border-[#e8e0d0]/40">
          <div className="mb-12">
            <h2 className="text-[#052316] text-[28px] lg:text-[34px] font-playfair font-normal">
              FHA loan questions, answered
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#e8e0d0]/50 pb-6 flex flex-col gap-2">
                <h3 className="text-[#052316] text-[15.5px] font-bold">
                  {faq.question}
                </h3>
                <p className="text-[#4e5b4e] text-[13.5px] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Compare with other programs */}
        <section className="py-16 px-6 lg:px-10 max-w-5xl mx-auto border-t border-[#e8e0d0]/40">
          <div className="mb-8">
            <h2 className="text-[#052316] text-[20px] font-playfair font-normal">
              Compare with other programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-[#e8e0d0]/50 p-6 rounded-2xl flex flex-col justify-between min-h-[150px] shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#052316]/5 text-[#3fb364] flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12" />
                  </svg>
                </div>
                <h4 className="text-[#052316] text-[14.5px] font-bold mb-2">Conventional Loans</h4>
                <p className="text-[#4e5b4e] text-[12px] leading-relaxed">
                  Often cheaper long-term for stronger credit and larger down payments.
                </p>
              </div>
              <Link href="/mortgage-loan-programs-arizona" className="text-[#3fb364] hover:text-[#2d5a2d] text-[12px] font-semibold mt-4 block">
                View program &rarr;
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#e8e0d0]/50 p-6 rounded-2xl flex flex-col justify-between min-h-[150px] shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#052316]/5 text-[#3fb364] flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                  </svg>
                </div>
                <h4 className="text-[#052316] text-[14.5px] font-bold mb-2">VA Loans</h4>
                <p className="text-[#4e5b4e] text-[12px] leading-relaxed">
                  $0 down and no monthly mortgage insurance for eligible veterans.
                </p>
              </div>
              <Link href="/mortgage-loan-programs-arizona" className="text-[#3fb364] hover:text-[#2d5a2d] text-[12px] font-semibold mt-4 block">
                View program &rarr;
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#e8e0d0]/50 p-6 rounded-2xl flex flex-col justify-between min-h-[150px] shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#052316]/5 text-[#3fb364] flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662" />
                  </svg>
                </div>
                <h4 className="text-[#052316] text-[14.5px] font-bold mb-2">FHA Streamline Refinance</h4>
                <p className="text-[#4e5b4e] text-[12px] leading-relaxed">
                  Already have an FHA loan? Lower your rate later with minimal paperwork.
                </p>
              </div>
              <Link href="/mortgage-loan-programs-arizona" className="text-[#3fb364] hover:text-[#2d5a2d] text-[12px] font-semibold mt-4 block">
                View program &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Section 8: Bottom Banner */}
        <section className="bg-[#052316] text-white py-16 text-center border-t border-white/10">
          <div className="max-w-2xl mx-auto px-6 flex flex-col items-center">
            <span className="text-[#b89a5a] text-[10px] font-bold tracking-[0.15em] uppercase block mb-3">
              READY WHEN YOU ARE
            </span>
            <h2 className="text-white text-[28px] lg:text-[34px] font-playfair font-normal leading-tight mb-3">
              See what you qualify for.
            </h2>
            <p className="text-[#c8c8b8] text-[14px] leading-[1.65] max-w-lg mb-8">
              A quick, no-obligation pre-approval takes about 15 minutes and won&apos;t affect your credit score.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#get-pre-approved"
                className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-semibold px-6 py-3 rounded-full transition-all duration-200"
              >
                Get Pre-Approved &rarr;
              </Link>
              <Link
                href="/contact-us"
                className="border border-white/20 hover:border-white text-white text-[14px] font-semibold px-6 py-3 rounded-full transition-all duration-200"
              >
                Talk to a Broker
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
