"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

// ─── Types ────────────────────────────────────────────────────────────────────

interface RefinanceResult {
  currentBalance: number;
  currentAnnualRate: number;
  currentMonthlyRate: number;
  currentTermYears: number;
  currentNumPayments: number;
  newAnnualRate: number;
  newMonthlyRate: number;
  newTermYears: number;
  newNumPayments: number;
  closingCosts: number;
  closingCostsFinanced: boolean;
  cashOutAmount: number;
  newLoanAmount: number;
  currentMonthlyPayment: number;
  newMonthlyPayment: number;
  paymentOnOriginalBalance: number;
  paymentOnFinancedCosts: number;
  paymentOnCashOut: number;
  monthlySavings: number;
  paymentChangeStatus: "decrease" | "same" | "increase";
  breakEvenNumerator: number;
  breakEvenMonthsRaw: number | null;
  breakEvenMonthsDisplay: number | null;
  breakEvenStatus: "immediate" | "finite" | "no_savings" | "negative_savings" | "no_costs";
  currentTotalScheduled: number;
  currentTotalInterest: number;
  newTotalScheduled: number;
  newTotalInterest: number;
  totalInterestSavings: number;
  interestChangeStatus: "decrease" | "same" | "increase";
  netCashAtClosing: number;
}

// ─── Core Calculations ────────────────────────────────────────────────────────

function calcPayment(principal: number, monthlyRate: number, numPayments: number): number {
  if (principal <= 0 || numPayments <= 0) return 0;
  if (monthlyRate === 0) return principal / numPayments;
  const factor = Math.pow(1 + monthlyRate, numPayments);
  return (principal * monthlyRate * factor) / (factor - 1);
}

function paymentPerDollar(monthlyRate: number, numPayments: number): number {
  if (numPayments <= 0) return 0;
  if (monthlyRate === 0) return 1 / numPayments;
  return monthlyRate / (1 - Math.pow(1 + monthlyRate, -numPayments));
}

function normalizeTerm(val: number): number {
  let t = Math.round(val);
  if (t < 1) t = 1;
  if (t > 30) t = 30;
  return t;
}

function guardZero(v: number): number {
  return Math.abs(v) < 0.005 ? 0 : v;
}

function calculateRefinance(
  currentBalance: number,
  currentRatePct: number,
  currentTermRaw: number,
  newRatePct: number,
  newTermRaw: number,
  closingCosts: number,
  costsFinanced: boolean,
  cashOut: number
): RefinanceResult {
  const bal = Math.max(0, currentBalance);
  const curRate = Math.max(0, currentRatePct);
  const newRate = Math.max(0, newRatePct);
  const curTerm = normalizeTerm(currentTermRaw);
  const newTerm = normalizeTerm(newTermRaw);
  const curN = curTerm * 12;
  const newN = newTerm * 12;
  const cc = Math.max(0, closingCosts);
  const co = Math.max(0, cashOut);

  const curMonthlyRate = curRate / 100 / 12;
  const newMonthlyRate = newRate / 100 / 12;

  const currentPayment = calcPayment(bal, curMonthlyRate, curN);
  const financedCosts = costsFinanced ? cc : 0;
  const newLoanAmount = bal + financedCosts + co;
  const newPayment = calcPayment(newLoanAmount, newMonthlyRate, newN);

  const ppd = paymentPerDollar(newMonthlyRate, newN);
  const paymentOnOrigBal = bal * ppd;
  const paymentOnFinCosts = financedCosts * ppd;
  const paymentOnCashOut = co * ppd;

  const monthlySavings = guardZero(currentPayment - newPayment);

  let breakEvenStatus: RefinanceResult["breakEvenStatus"];
  let breakEvenRaw: number | null = null;
  let breakEvenDisplay: number | null = null;

  if (cc === 0) {
    breakEvenStatus = "no_costs";
    breakEvenDisplay = 0;
  } else if (monthlySavings <= 0) {
    breakEvenStatus = monthlySavings === 0 ? "no_savings" : "negative_savings";
  } else {
    breakEvenRaw = cc / monthlySavings;
    breakEvenDisplay = Math.ceil(breakEvenRaw);
    breakEvenStatus = breakEvenDisplay === 0 ? "immediate" : "finite";
  }

  const curTotalScheduled = currentPayment * curN;
  const curTotalInterest = guardZero(curTotalScheduled - bal);
  const newTotalScheduled = newPayment * newN;
  const newTotalInterest = guardZero(newTotalScheduled - newLoanAmount);
  const totalIntSavings = guardZero(curTotalInterest - newTotalInterest);

  const netCash = costsFinanced ? co : co - cc;

  const paymentChangeStatus: RefinanceResult["paymentChangeStatus"] =
    monthlySavings > 0 ? "decrease" : monthlySavings < 0 ? "increase" : "same";
  const interestChangeStatus: RefinanceResult["interestChangeStatus"] =
    totalIntSavings > 0 ? "decrease" : totalIntSavings < 0 ? "increase" : "same";

  return {
    currentBalance: bal, currentAnnualRate: curRate, currentMonthlyRate: curMonthlyRate, currentTermYears: curTerm, currentNumPayments: curN,
    newAnnualRate: newRate, newMonthlyRate: newMonthlyRate, newTermYears: newTerm, newNumPayments: newN,
    closingCosts: cc, closingCostsFinanced: costsFinanced, cashOutAmount: co, newLoanAmount,
    currentMonthlyPayment: currentPayment, newMonthlyPayment: newPayment,
    paymentOnOriginalBalance: paymentOnOrigBal, paymentOnFinancedCosts: paymentOnFinCosts, paymentOnCashOut: paymentOnCashOut,
    monthlySavings, paymentChangeStatus, breakEvenNumerator: cc, breakEvenMonthsRaw: breakEvenRaw, breakEvenMonthsDisplay: breakEvenDisplay, breakEvenStatus,
    currentTotalScheduled: curTotalScheduled, currentTotalInterest: curTotalInterest,
    newTotalScheduled: newTotalScheduled, newTotalInterest: newTotalInterest, totalInterestSavings: totalIntSavings, interestChangeStatus,
    netCashAtClosing: netCash
  };
}

const fmtWhole = (v: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Math.round(v));

const fmt2 = (v: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(v);

// ─── Component ────────────────────────────────────────────────────────────────

export default function RefinanceCalculatorPage() {
  const [currentBalance, setCurrentBalance] = useState("300000");
  const [currentRate, setCurrentRate] = useState("7.00");
  const [currentTerm, setCurrentTerm] = useState("30");
  const [newRate, setNewRate] = useState("6.00");
  const [newTerm, setNewTerm] = useState("30");
  const [closingCosts, setClosingCosts] = useState("5000");
  const [costsFinanced, setCostsFinanced] = useState(false);
  const [cashOut, setCashOut] = useState("0");

  const [result, setResult] = useState<RefinanceResult | null>(null);

  const handleCalculate = useCallback(() => {
    const bal = parseFloat(currentBalance);
    if (!isFinite(bal) || bal <= 0) return;
    const cRate = parseFloat(currentRate);
    if (!isFinite(cRate) || cRate < 0) return;
    const nRate = parseFloat(newRate);
    if (!isFinite(nRate) || nRate < 0) return;
    const cTerm = parseFloat(currentTerm) || 30;
    const nTerm = parseFloat(newTerm) || 30;
    const cc = parseFloat(closingCosts) || 0;
    if (cc < 0) return;
    const co = parseFloat(cashOut) || 0;
    if (co < 0) return;

    const r = calculateRefinance(bal, cRate, cTerm, nRate, nTerm, cc, costsFinanced, co);
    setResult(r);

    setTimeout(() => {
      document.getElementById("refi-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }, [currentBalance, currentRate, currentTerm, newRate, newTerm, closingCosts, costsFinanced, cashOut]);

  const termOpts = [10, 15, 20, 25, 30];

  const breakEvenText = (r: RefinanceResult) => {
    switch (r.breakEvenStatus) {
      case "no_costs": return "Immediate (no costs)";
      case "immediate": return "Immediate";
      case "finite": return `${r.breakEvenMonthsDisplay} months (~${(r.breakEvenMonthsDisplay! / 12).toFixed(1)} years)`;
      case "no_savings": return "N/A — no monthly savings";
      case "negative_savings": return "N/A — payment increases";
      default: return "N/A";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="w-full text-white py-20 lg:py-28 text-center relative overflow-hidden bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/mortgage-calculators.jpg')", backgroundPosition: "center top" }}>
          <div className="absolute inset-0 bg-[#08271B]/80 z-0" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5" />
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5" />
          </div>
          <div className="max-w-4xl mx-auto px-6 relative z-20">
            <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase mb-4 font-sans">MORTGAGE TOOLS</p>
            <h1 className="text-white text-[36px] lg:text-[52px] font-playfair font-normal leading-[1.1] mb-5">
              Refinance Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Compare your current mortgage with a proposed refinance. See your monthly savings, break-even point, and total interest impact — including optional cash-out.
            </p>
          </div>
        </section>

        {/* Form Inputs */}
        <section className="py-12 px-6 lg:px-10 max-w-5xl mx-auto">
          <div className="flex flex-col gap-6 font-sans">
            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-6">
              <h3 className="text-[#052316] text-[18px] font-bold pb-3 border-b border-[#e8e0d0]/40 font-sans">1. Current Mortgage</h3>

              <div>
                <label className="text-[#052316] text-[14px] font-semibold block mb-2">Current Loan Balance</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888] font-semibold">$</span>
                  <input type="number" value={currentBalance} onChange={(e) => setCurrentBalance(e.target.value)}
                    className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-4 text-[15px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30 focus:border-[#3fb364]"
                    placeholder="e.g. 300000" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-[#052316] text-[14px] font-semibold block mb-2">Current Interest Rate</label>
                  <div className="relative">
                    <input type="number" step="0.125" value={currentRate} onChange={(e) => setCurrentRate(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 px-4 text-[15px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30 focus:border-[#3fb364]" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888] font-semibold">%</span>
                  </div>
                </div>
                <div>
                  <label className="text-[#052316] text-[14px] font-semibold block mb-2">Remaining Term</label>
                  <div className="flex gap-2 flex-wrap">
                    {termOpts.map((yr) => (
                      <button key={yr} onClick={() => setCurrentTerm(String(yr))}
                        className={`px-3.5 py-2.5 text-[13px] font-bold rounded-xl border-2 transition-all cursor-pointer ${currentTerm === String(yr) ? "bg-[#052316] text-white border-[#052316] shadow-sm" : "bg-white text-[#052316] border-[#e8e0d0] hover:border-[#052316]"}`}>
                        {yr} yr
                      </button>
                    ))}
                    <div className="relative flex-grow min-w-[70px]">
                      <input type="number" value={currentTerm} onChange={(e) => setCurrentTerm(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-2.5 px-3 text-[13px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30 focus:border-[#3fb364]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-6">
              <h3 className="text-[#052316] text-[18px] font-bold pb-3 border-b border-[#e8e0d0]/40 font-sans">2. Proposed Refinance</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-[#052316] text-[14px] font-semibold block mb-2">New Interest Rate</label>
                  <div className="relative">
                    <input type="number" step="0.125" value={newRate} onChange={(e) => setNewRate(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 px-4 text-[15px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30 focus:border-[#3fb364]" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888] font-semibold">%</span>
                  </div>
                </div>
                <div>
                  <label className="text-[#052316] text-[14px] font-semibold block mb-2">New Loan Term</label>
                  <div className="flex gap-2 flex-wrap">
                    {termOpts.map((yr) => (
                      <button key={yr} onClick={() => setNewTerm(String(yr))}
                        className={`px-3.5 py-2.5 text-[13px] font-bold rounded-xl border-2 transition-all cursor-pointer ${newTerm === String(yr) ? "bg-[#052316] text-white border-[#052316] shadow-sm" : "bg-white text-[#052316] border-[#e8e0d0] hover:border-[#052316]"}`}>
                        {yr} yr
                      </button>
                    ))}
                    <div className="relative flex-grow min-w-[70px]">
                      <input type="number" value={newTerm} onChange={(e) => setNewTerm(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-2.5 px-3 text-[13px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30 focus:border-[#3fb364]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-6">
              <h3 className="text-[#052316] text-[18px] font-bold pb-3 border-b border-[#e8e0d0]/40 font-sans">3. Closing Costs & Cash-Out</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-[#052316] text-[14px] font-semibold block mb-2">Closing Costs</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888] font-semibold">$</span>
                    <input type="number" value={closingCosts} onChange={(e) => setClosingCosts(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-4 text-[15px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30 focus:border-[#3fb364]"
                      placeholder="e.g. 5000" />
                  </div>
                  <div className="mt-3 flex bg-[#fcf9f3] border border-[#e8e0d0] rounded-lg p-0.5 text-[12px] font-semibold w-fit">
                    <button onClick={() => setCostsFinanced(false)} className={`px-4 py-1.5 rounded-md transition-all cursor-pointer ${!costsFinanced ? "bg-[#052316] text-white shadow-sm" : "text-[#4e5b4e]"}`}>Pay Out of Pocket</button>
                    <button onClick={() => setCostsFinanced(true)} className={`px-4 py-1.5 rounded-md transition-all cursor-pointer ${costsFinanced ? "bg-[#052316] text-white shadow-sm" : "text-[#4e5b4e]"}`}>Add to Loan</button>
                  </div>
                </div>
                <div>
                  <label className="text-[#052316] text-[14px] font-semibold block mb-2">Cash-Out Amount <span className="text-[#a89a70] font-normal text-[12px]">(optional)</span></label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888] font-semibold">$</span>
                    <input type="number" value={cashOut} onChange={(e) => setCashOut(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-4 text-[15px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30 focus:border-[#3fb364]"
                      placeholder="0" />
                  </div>
                  <p className="text-[11px] text-[#a89a70] mt-1.5 italic">Cash received at closing, always added to new loan.</p>
                </div>
              </div>
            </div>

            <button onClick={handleCalculate}
              className="w-full bg-[#3fb364] hover:bg-[#349b55] active:scale-[0.98] text-white text-[17px] font-bold py-4.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
              </svg>
              Calculate Refinance Savings
            </button>
          </div>
        </section>

        {/* Results Placeholder */}
        {!result && (
          <section className="pb-16 px-6 max-w-2xl mx-auto text-center font-sans">
            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-10 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-[#3fb364]/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                </svg>
              </div>
              <h3 className="text-[#052316] text-[18px] font-bold mb-2">Enter Your Refinance Details</h3>
              <p className="text-[#888] text-[14px] leading-relaxed">
                Fill in your current and proposed mortgage details, then click <strong>&ldquo;Calculate Refinance Savings&rdquo;</strong> to see your full comparison.
              </p>
            </div>
          </section>
        )}

        {/* Results */}
        {result && (
          <section id="refi-results" className="pb-16 px-6 lg:px-10 max-w-7xl mx-auto space-y-8 animate-fadeUp">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-sans">
              <div className={`rounded-3xl p-6 shadow-sm border ${result.paymentChangeStatus === "increase" ? "bg-red-50 border-red-200 text-red-900" : "bg-[#052316] border-[#052316] text-white"}`}>
                <p className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${result.paymentChangeStatus === "increase" ? "text-red-400" : "text-[#3fb364]"}`}>{result.paymentChangeStatus === "increase" ? "Monthly Increase" : "Monthly Savings"}</p>
                <p className="text-[36px] font-bold leading-tight">{fmtWhole(Math.abs(result.monthlySavings))}</p>
                <p className="text-[13px] mt-1 opacity-80">{result.paymentChangeStatus === "decrease" ? "per month lower payment" : result.paymentChangeStatus === "increase" ? "per month higher payment" : "no change in payment"}</p>
              </div>

              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm font-sans">
                <p className="text-[#a89a70] text-[11px] font-bold uppercase tracking-wider mb-1">Break-Even Point</p>
                <p className="text-[#052316] text-[28px] font-bold leading-tight">{result.breakEvenStatus === "finite" ? `${result.breakEvenMonthsDisplay} months` : "N/A"}</p>
                <p className="text-[#888] text-[13px] mt-1">{breakEvenText(result)}</p>
              </div>

              <div className={`rounded-3xl p-6 shadow-sm border ${result.interestChangeStatus === "increase" ? "bg-red-50 border-red-200 text-red-900" : "bg-white border-[#e8e0d0]/60 text-[#052316]"}`}>
                <p className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${result.interestChangeStatus === "increase" ? "text-red-400" : "text-[#a89a70]"}`}>{result.interestChangeStatus === "increase" ? "Additional Interest" : "Total Interest Savings"}</p>
                <p className={`text-[28px] font-bold leading-tight ${result.interestChangeStatus === "increase" ? "text-red-600" : "text-[#3fb364]"}`}>{fmtWhole(Math.abs(result.totalInterestSavings))}</p>
                <p className="text-[13px] mt-1 opacity-80">{result.interestChangeStatus === "decrease" ? "less interest over loan life" : result.interestChangeStatus === "increase" ? "more interest over loan life" : "no change in total interest"}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-sans">
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm">
                <h3 className="text-[#052316] text-[16px] font-bold mb-5 pb-3 border-b border-[#e8e0d0]/40 font-sans">Monthly Payment Comparison</h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="flex items-center justify-between text-[13.5px] mb-2">
                      <span className="text-[#888]">Current Payment</span>
                      <span className="text-[#052316] font-bold">{fmt2(result.currentMonthlyPayment)}</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-[#fcf9f3] border border-[#e8e0d0]/40 overflow-hidden">
                      <div className="h-full bg-[#b89a5a] rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(100, (result.currentMonthlyPayment / Math.max(result.currentMonthlyPayment, result.newMonthlyPayment)) * 100)}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-[13.5px] mb-2">
                      <span className="text-[#888]">New Payment</span>
                      <span className="text-[#052316] font-bold">{fmt2(result.newMonthlyPayment)}</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-[#fcf9f3] border border-[#e8e0d0]/40 overflow-hidden">
                      <div className="h-full bg-[#3fb364] rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(100, (result.newMonthlyPayment / Math.max(result.currentMonthlyPayment, result.newMonthlyPayment)) * 100)}%` }} />
                    </div>
                  </div>

                  {(result.paymentOnFinancedCosts > 0 || result.paymentOnCashOut > 0) && (
                    <div className="pt-3 border-t border-[#e8e0d0]/30 text-[13px]">
                      <p className="text-[11px] text-[#a89a70] font-bold uppercase tracking-wide mb-2">New Payment Breakdown</p>
                      <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between"><span className="text-[#888]">On original balance</span><span className="text-[#052316] font-medium">{fmt2(result.paymentOnOriginalBalance)}</span></div>
                        {result.paymentOnFinancedCosts > 0 && <div className="flex justify-between"><span className="text-[#888]">On financed closing costs</span><span className="text-[#052316] font-medium">{fmt2(result.paymentOnFinancedCosts)}</span></div>}
                        {result.paymentOnCashOut > 0 && <div className="flex justify-between"><span className="text-[#888]">On cash-out</span><span className="text-[#052316] font-medium">{fmt2(result.paymentOnCashOut)}</span></div>}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm">
                <h3 className="text-[#052316] text-[16px] font-bold mb-5 pb-3 border-b border-[#e8e0d0]/40 font-sans">Loan Balance Comparison</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Current Loan Balance", value: fmt2(result.currentBalance) },
                    ...(result.closingCostsFinanced && result.closingCosts > 0 ? [{ label: "+ Financed Closing Costs", value: fmt2(result.closingCosts) }] : []),
                    ...(result.cashOutAmount > 0 ? [{ label: "+ Cash-Out Amount", value: fmt2(result.cashOutAmount) }] : []),
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between text-[13.5px] py-2 border-b border-[#e8e0d0]/30">
                      <span className="text-[#888]">{row.label}</span>
                      <span className="text-[#052316] font-bold">{row.value}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between text-[15px] font-bold py-2 bg-[#fcf9f3] rounded-xl px-4 mt-1">
                    <span className="text-[#052316]">New Loan Amount</span>
                    <span className="text-[#052316]">{fmt2(result.newLoanAmount)}</span>
                  </div>
                </div>

                {result.cashOutAmount > 0 && (
                  <div className="mt-5 pt-4 border-t border-[#e8e0d0]/40 text-[13.5px]">
                    <p className="text-[11px] text-[#a89a70] font-bold uppercase tracking-wide mb-2 font-sans">Cash-Out Summary</p>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between"><span className="text-[#888]">Cash-Out Proceeds</span><span className="text-[#052316] font-bold">{fmt2(result.cashOutAmount)}</span></div>
                      {!result.closingCostsFinanced && result.closingCosts > 0 && <div className="flex justify-between"><span className="text-[#888]">Less Out-of-Pocket Costs</span><span className="text-red-500 font-bold">-{fmt2(result.closingCosts)}</span></div>}
                      <div className="flex justify-between pt-1.5 border-t border-[#e8e0d0]/30 font-bold"><span className="text-[#052316]">Net Cash at Closing</span><span className="text-[#3fb364]">{fmt2(result.netCashAtClosing)}</span></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-[#faf7f0] rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm font-sans">
              <h3 className="text-[#052316] text-[16px] font-bold mb-5 pb-3 border-b border-[#e8e0d0]/40 font-sans">Total Interest Comparison</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Current Total Interest", sublabel: `${result.currentTermYears}yr @ ${result.currentAnnualRate}%`, value: fmtWhole(result.currentTotalInterest) },
                  { label: "New Total Interest", sublabel: `${result.newTermYears}yr @ ${result.newAnnualRate}%`, value: fmtWhole(result.newTotalInterest) },
                  { label: "Current Total Payments", sublabel: `${result.currentNumPayments} payments`, value: fmtWhole(result.currentTotalScheduled) },
                  { label: "New Total Payments", sublabel: `${result.newNumPayments} payments`, value: fmtWhole(result.newTotalScheduled) },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-2xl p-4 border border-[#e8e0d0]/40">
                    <p className="text-[11px] text-[#a89a70] font-bold uppercase tracking-wide mb-0.5">{item.label}</p>
                    <p className="text-[10.5px] text-[#888] mb-1.5">{item.sublabel}</p>
                    <p className="text-[20px] font-bold text-[#052316]">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className={`mt-4 rounded-2xl p-4 flex items-center justify-between ${result.interestChangeStatus === "increase" ? "bg-red-500" : "bg-[#052316]"}`}>
                <p className="text-white text-[13px] font-bold uppercase tracking-wide">{result.interestChangeStatus === "increase" ? "Additional Interest Cost" : "Total Interest Savings"}</p>
                <p className="text-white text-[22px] font-bold">{fmtWhole(Math.abs(result.totalInterestSavings))}</p>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
