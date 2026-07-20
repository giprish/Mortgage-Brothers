"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import SliderInput from "../component/SliderInput";

export default function CalculatorsPage() {
  const [homePrice, setHomePrice] = useState(425000);
  const [downPaymentPct, setDownPaymentPct] = useState(10);
  const [interestRate, setInterestRate] = useState(6.75);
  const [loanTerm, setLoanTerm] = useState(30);

  const calculations = useMemo(() => {
    const downPaymentAmt = homePrice * (downPaymentPct / 100);
    const loanAmount = homePrice - downPaymentAmt;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    let monthlyPayment = 0;
    if (monthlyRate > 0 && numPayments > 0) {
      monthlyPayment =
        (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
        (Math.pow(1 + monthlyRate, numPayments) - 1);
    } else if (numPayments > 0) {
      monthlyPayment = loanAmount / numPayments;
    }

    const totalPaid = monthlyPayment * numPayments;
    const totalInterest = totalPaid - loanAmount;
    const principalPct = loanAmount > 0 ? (loanAmount / totalPaid) * 100 : 50;

    return { downPaymentAmt, loanAmount, monthlyPayment, totalInterest, principalPct };
  }, [homePrice, downPaymentPct, interestRate, loanTerm]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        <section
          className="w-full bg-brand-green-deep text-white py-20 lg:py-28 text-center relative overflow-hidden bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/mortgage-calculators.jpg')", backgroundSize: "cover", backgroundPosition: "center top" }}
        >
          <div className="absolute inset-0 bg-[#08271B]/75 z-0"></div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none"></div>
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5 pointer-events-none"></div>
          </div>
          <div className="max-w-4xl mx-auto px-6 relative z-20">
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">MORTGAGE CALCULATOR</p>
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6">
              Know your numbers before you shop.
            </h1>
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Adjust the sliders or type directly into the fields to see your estimated monthly payment instantly.
            </p>
          </div>
        </section>

        <section className="w-full py-12 lg:py-16 -mt-25 relative z-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="bg-white rounded-3xl shadow-xl border border-[#e8e0d0]/40 p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                <div className="flex flex-col gap-8">
                  <SliderInput label="Home Price" value={homePrice} min={50000} max={2000000} step={1000} prefix="$"
                    onChange={(v) => setHomePrice(v)} formatValue={(v) => formatCurrency(v)} />

                  <div>
                    <label className="text-[#32353C] text-[14px] font-medium block mb-2">Down Payment (%)</label>
                    <div className="relative w-full">
                      <input
                        type="number"
                        value={downPaymentPct}
                        onChange={(e) => setDownPaymentPct(Math.min(50, Math.max(0, Number(e.target.value))))}
                        className="w-full h-[45px] bg-white border border-[#e0e0e0] rounded-md pl-3.5 pr-8 text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                      />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#666] font-medium text-[14px] pointer-events-none">%</span>
                    </div>
                  </div>

                  <SliderInput label="Interest Rate" value={interestRate} min={0} max={15} step={0.125} suffix="%"
                    onChange={(v) => setInterestRate(v)} />

                  <div>
                    <label className="text-[#052316] text-[14px] font-semibold block mb-3">Loan Term</label>
                    <div className="flex gap-3">
                      <button onClick={() => setLoanTerm(15)}
                        className={`flex-1 py-2.5 text-[14px] font-semibold rounded-lg border-2 transition-all duration-200 cursor-pointer ${loanTerm === 15 ? "bg-brand-green-deep text-white border-brand-green-deep shadow-md" : "bg-white text-brand-green-deep border-[#e8e0d0] hover:border-brand-green-deep"}`}>
                        15 years
                      </button>
                      <button onClick={() => setLoanTerm(30)}
                        className={`flex-1 py-2.5 text-[14px] font-semibold rounded-lg border-2 transition-all duration-200 cursor-pointer ${loanTerm === 30 ? "bg-brand-green-deep text-white border-brand-green-deep shadow-md" : "bg-white text-brand-green-deep border-[#e8e0d0] hover:border-brand-green-deep"}`}>
                        30 years
                      </button>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#e8e0d0]/40">
                    <p className="text-[13px] text-[#888] mb-3">Want a detailed breakdown with full amortization schedule?</p>
                    <Link href="/basic-mortgage-payment-calculator"
                      className="inline-flex items-center gap-2 bg-[#052316] hover:bg-[#0a3d26] text-white text-[13px] font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm">
                      Open Full Calculator →
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col items-start bg-[#faf7f0] rounded-2xl p-6 lg:p-8">
                  <span className="text-brand-green-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-2">
                    ESTIMATED MONTHLY PAYMENT
                  </span>
                  <h2 className="text-brand-green-deep text-[42px] lg:text-[52px] font-bold tracking-tight leading-none mb-1">
                    {formatCurrency(Math.round(calculations.monthlyPayment))}
                    <span className="text-[18px] lg:text-[22px] font-medium text-brand-text-muted">/mo</span>
                  </h2>

                  <div className="w-full h-[8px] rounded-full bg-[#d4d4d4] mt-5 mb-3 overflow-hidden">
                    <div className="h-full bg-brand-green-accent rounded-full transition-all duration-300"
                      style={{ width: `${calculations.principalPct}%` }}></div>
                  </div>

                  <div className="flex items-center gap-5 mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-brand-green-accent"></div>
                      <span className="text-brand-text-muted text-[12px] font-medium">Principal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-[#d4d4d4]"></div>
                      <span className="text-brand-text-muted text-[12px] font-medium">Interest</span>
                    </div>
                  </div>

                  <div className="w-full flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-[#e8e0d0]/40 pb-3">
                      <span className="text-brand-text-muted text-[14px]">Loan amount</span>
                      <span className="text-brand-green-deep text-[14px] font-bold">{formatCurrency(calculations.loanAmount)}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#e8e0d0]/40 pb-3">
                      <span className="text-brand-text-muted text-[14px]">Down payment</span>
                      <span className="text-brand-green-deep text-[14px] font-bold">{formatCurrency(calculations.downPaymentAmt)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-brand-text-muted text-[14px]">Total interest paid</span>
                      <span className="text-brand-green-deep text-[14px] font-bold">{formatCurrency(Math.round(calculations.totalInterest))}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-[#b89a5a] text-[12px] mt-6 italic">
              Estimate only — actual payment varies with taxes, insurance, HOA dues, and final lender terms.
            </p>
          </div>
        </section>

        <section className="w-full py-12 lg:py-16">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <div className="bg-brand-green-deep rounded-3xl p-10 lg:p-14 text-center shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -bottom-24 -left-24 w-[280px] h-[280px] rounded-full border border-white/5 pointer-events-none opacity-40"></div>
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-white text-[26px] lg:text-[32px] font-playfair font-normal leading-tight mb-4">
                  Ready to see real numbers?
                </h2>
                <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.7] max-w-lg mx-auto mb-8">
                  A pre-approval gives you a verified figure, not just an estimate.
                </p>
                <Link href="/#get-pre-approved" className="btn-primary hover:shadow-brand-green-accent/20 group">
                  Get Pre-Approved
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform duration-200">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
