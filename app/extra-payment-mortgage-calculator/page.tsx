"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

// ─── Interfaces ──────────────────────────────────────────────────────────────

interface AmortizationRow {
  month: number;
  principalPaid: number;
  interestPaid: number;
  remainingBalance: number;
}

interface TermComparisonRow {
  termYears: number;
  standardPayment: number;
  payoffTimeMonths: number;
  totalInterestPaid: number;
  interestSavings: number;
}

interface ExtraCalcResult {
  standardPayment: number;
  standardTotalInterest: number;
  standardTotalPaid: number;
  standardPayoffMonths: number;

  extraPayoffMonths: number;
  extraTotalInterest: number;
  extraTotalPaid: number;
  interestSavings: number;
  monthsSaved: number;

  schedule: AmortizationRow[];
  comparisons: TermComparisonRow[];
}

// Helper to format currency
const fmt = (v: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Math.round(v));

// ─── Simulation Engine ────────────────────────────────────────────────────────

function runAmortizationSimulation(
  loanAmount: number,
  interestRate: number,
  termYears: number,
  addMonthly: number,
  lumpSum: number,
  lumpSumMonth: number
): ExtraCalcResult {
  const p = Math.max(0, loanAmount);
  const r = interestRate / 100 / 12;
  const n = termYears * 12;

  // 1. Standard baseline calculation
  let standardPayment = 0;
  if (p > 0 && n > 0) {
    if (r === 0) {
      standardPayment = p / n;
    } else {
      const factor = Math.pow(1 + r, n);
      standardPayment = (p * r * factor) / (factor - 1);
    }
  }

  const standardTotalInterest = Math.max(0, (standardPayment * n) - p);
  const standardTotalPaid = p + standardTotalInterest;

  // 2. Extra payment simulation
  let balance = p;
  let month = 0;
  let totalInterestPaidExtra = 0;
  const schedule: AmortizationRow[] = [];

  while (balance > 0 && month < n) {
    month++;
    const interestThisMonth = balance * r;
    let regularPrincipalThisMonth = standardPayment - interestThisMonth;

    if (regularPrincipalThisMonth < 0) {
      regularPrincipalThisMonth = 0;
    }

    // Determine extra principal
    let extraThisMonth = addMonthly;
    if (month === lumpSumMonth && lumpSumMonth > 0) {
      extraThisMonth += lumpSum;
    }

    let totalPrincipalThisMonth = regularPrincipalThisMonth + extraThisMonth;

    // Final guard
    if (totalPrincipalThisMonth >= balance) {
      totalPrincipalThisMonth = balance;
      balance = 0;
    } else {
      balance = balance - totalPrincipalThisMonth;
    }

    totalInterestPaidExtra += interestThisMonth;

    schedule.push({
      month,
      principalPaid: totalPrincipalThisMonth,
      interestPaid: interestThisMonth,
      remainingBalance: balance
    });
  }

  const extraTotalInterest = totalInterestPaidExtra;
  const extraTotalPaid = p + extraTotalInterest;
  const interestSavings = Math.max(0, standardTotalInterest - extraTotalInterest);
  const monthsSaved = Math.max(0, n - month);

  // 3. Term comparison table calculations (10, 15, 20, 30 years)
  const termOptions = [10, 15, 20, 30];
  const comparisons = termOptions.map(tYr => {
    const tN = tYr * 12;
    let tStdPmt = 0;
    if (p > 0 && tN > 0) {
      if (r === 0) {
        tStdPmt = p / tN;
      } else {
        const factor = Math.pow(1 + r, tN);
        tStdPmt = (p * r * factor) / (factor - 1);
      }
    }
    const tStdInterest = Math.max(0, (tStdPmt * tN) - p);

    // Simulate for this term option
    let tBal = p;
    let tMonth = 0;
    let tInterestPaid = 0;

    while (tBal > 0 && tMonth < tN) {
      tMonth++;
      const tInterest = tBal * r;
      let tRegularPrincipal = tStdPmt - tInterest;
      if (tRegularPrincipal < 0) tRegularPrincipal = 0;

      let tExtra = addMonthly;
      if (tMonth === lumpSumMonth && lumpSumMonth > 0) {
        tExtra += lumpSum;
      }

      let tTotalPrincipal = tRegularPrincipal + tExtra;
      if (tTotalPrincipal >= tBal) {
        tTotalPrincipal = tBal;
        tBal = 0;
      } else {
        tBal = tBal - tTotalPrincipal;
      }
      tInterestPaid += tInterest;
    }

    return {
      termYears: tYr,
      standardPayment: tStdPmt,
      payoffTimeMonths: tMonth,
      totalInterestPaid: tInterestPaid,
      interestSavings: Math.max(0, tStdInterest - tInterestPaid)
    };
  });

  return {
    standardPayment,
    standardTotalInterest,
    standardTotalPaid,
    standardPayoffMonths: n,
    extraPayoffMonths: month,
    extraTotalInterest,
    extraTotalPaid,
    interestSavings,
    monthsSaved,
    schedule,
    comparisons
  };
}

// Helper to convert months into Years & Months string
function formatMonthsSaved(totalMonths: number): string {
  if (totalMonths <= 0) return "0 months";
  const yrs = Math.floor(totalMonths / 12);
  const mos = totalMonths % 12;
  if (yrs > 0 && mos > 0) return `${yrs} yr${yrs > 1 ? "s" : ""}, ${mos} mo${mos > 1 ? "s" : ""}`;
  if (yrs > 0) return `${yrs} year${yrs > 1 ? "s" : ""}`;
  return `${mos} month${mos > 1 ? "s" : ""}`;
}

// Helper to calculate new payoff date based on start date
function getNewPayoffDate(months: number): string {
  const date = new Date();
  date.setMonth(date.getMonth() + months);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ExtraPaymentMortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState("250000");
  const [interestRate, setInterestRate] = useState("4.5");
  const [termYears, setTermYears] = useState("30");

  const [addMonthly, setAddMonthly] = useState("200");
  const [lumpSum, setLumpSum] = useState("5000");
  const [lumpSumMonth, setLumpSumMonth] = useState("12");

  const [result, setResult] = useState<ExtraCalcResult | null>(null);

  // Pagination for amortization table
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 24;

  const handleCalculate = () => {
    const p = parseFloat(loanAmount) || 0;
    if (p <= 0) return;
    const rate = parseFloat(interestRate) || 0;
    let tYr = Math.round(parseFloat(termYears) || 30);
    tYr = Math.max(1, Math.min(30, tYr));

    const extraM = Math.max(0, parseFloat(addMonthly) || 0);
    const lump = Math.max(0, parseFloat(lumpSum) || 0);
    const lumpM = Math.max(0, parseInt(lumpSumMonth) || 0);

    const r = runAmortizationSimulation(p, rate, tYr, extraM, lump, lumpM);
    setResult(r);
    setCurrentPage(0);

    setTimeout(() => {
      document.getElementById("calc-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const applyPreset = (preset: "minimal" | "moderate" | "aggressive") => {
    if (preset === "minimal") {
      setAddMonthly("100");
      setLumpSum("2000");
      setLumpSumMonth("12");
    } else if (preset === "moderate") {
      setAddMonthly("200");
      setLumpSum("5000");
      setLumpSumMonth("12");
    } else {
      setAddMonthly("500");
      setLumpSum("10000");
      setLumpSumMonth("12");
    }
  };

  // Payment donut split
  const getDonutSplitPct = (r: ExtraCalcResult) => {
    const extraVal = parseFloat(addMonthly) || 0;
    const total = r.standardPayment + extraVal;
    if (total <= 0) return { standard: "100.0", extra: "0.0" };
    return {
      standard: ((r.standardPayment / total) * 100).toFixed(1),
      extra: ((extraVal / total) * 100).toFixed(1)
    };
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3] font-sans">
      <Navbar />
      <main className="flex-grow">

        {/* Hero Section */}
        <section className="w-full bg-[#052316] text-white py-16 lg:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5 opacity-40" />
            <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5 opacity-40" />
          </div>
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">MORTGAGE TOOLS</span>
            <h1 className="text-white text-[38px] lg:text-[52px] font-playfair font-normal leading-[1.15] mb-6">
              Extra Payment Mortgage Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Simulate the payoff speed and interest savings of your mortgage by planning additional monthly payments or a one-time lump sum.
            </p>
          </div>
        </section>

        {/* Inputs */}
        <section className="py-12 px-6 lg:px-10 max-w-6xl mx-auto font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left box: Loan details */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-6">
                <h3 className="text-[#052316] text-[17px] font-bold pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#052316]" /> Loan Basics
                </h3>

                <div>
                  <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5 font-sans">Original Loan Amount ($)</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                    <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-3 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5 font-sans">Interest Rate (%)</label>
                    <div className="relative">
                      <input type="number" step="0.001" value={interestRate} onChange={(e) => setInterestRate(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 px-3.5 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">%</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Loan Term</label>
                    <select value={termYears} onChange={(e) => setTermYears(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 px-3 text-[14px] font-bold text-[#052316] focus:outline-none cursor-pointer">
                      <option value="30">30 Years</option>
                      <option value="20">20 Years</option>
                      <option value="15">15 Years</option>
                      <option value="10">10 Years</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Quick Fill presets */}
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-4">
                <h3 className="text-[#052316] text-[16px] font-bold pb-2 border-b border-[#e8e0d0]/40">Quick-Fill Extra Payment Presets</h3>
                <div className="grid grid-cols-3 gap-3">
                  <button onClick={() => applyPreset("minimal")}
                    className="py-3 px-2 bg-[#fcf9f3] hover:bg-[#052316] hover:text-white border border-[#e8e0d0]/60 rounded-xl text-[12.5px] font-bold transition-all text-[#052316] cursor-pointer">
                    Minimal
                  </button>
                  <button onClick={() => applyPreset("moderate")}
                    className="py-3 px-2 bg-[#fcf9f3] hover:bg-[#052316] hover:text-white border border-[#e8e0d0]/60 rounded-xl text-[12.5px] font-bold transition-all text-[#052316] cursor-pointer">
                    Moderate
                  </button>
                  <button onClick={() => applyPreset("aggressive")}
                    className="py-3 px-2 bg-[#fcf9f3] hover:bg-[#052316] hover:text-white border border-[#e8e0d0]/60 rounded-xl text-[12.5px] font-bold transition-all text-[#052316] cursor-pointer">
                    Aggressive
                  </button>
                </div>
              </div>
            </div>

            {/* Right box: Extra Payments fields */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-6">
                <h3 className="text-[#052316] text-[17px] font-bold pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3fb364]" /> Extra Payments Planned
                </h3>

                <div>
                  <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5 font-sans">Additional Monthly Payment ($/mo)</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                    <input type="number" value={addMonthly} onChange={(e) => setAddMonthly(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-3 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">One-Time Lump Sum ($)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={lumpSum} onChange={(e) => setLumpSum(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 pl-7 pr-3 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Apply in Month #</label>
                    <input type="number" value={lumpSumMonth} onChange={(e) => setLumpSumMonth(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3.5 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                  </div>
                </div>
                <span className="text-[11.5px] text-[#a89a70] italic block -mt-2">
                  *If Month is set to 0, the Lump Sum dollar amount is ignored entirely.
                </span>
              </div>
            </div>
          </div>

          {/* Calculate button */}
          <div className="mt-8 font-sans">
            <button onClick={handleCalculate}
              className="w-full bg-[#3fb364] hover:bg-[#349b55] active:scale-[0.98] text-white text-[16.5px] font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              Calculate Payoff Savings
            </button>
          </div>
        </section>

        {/* Results output panels */}
        {result && (
          <section id="calc-results" className="pb-16 px-6 lg:px-10 max-w-6xl mx-auto space-y-8 animate-fadeUp font-sans">
            
            {/* Top 3 summary panels */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-[#052316] text-white rounded-3xl p-6 shadow-sm border border-[#052316] flex flex-col justify-between">
                <div>
                  <span className="text-[#3fb364] text-[10.5px] font-bold tracking-wider uppercase">Interest Savings</span>
                  <h2 className="text-[34px] font-bold mt-1.5">{fmt(result.interestSavings)}</h2>
                </div>
                <p className="text-[12.5px] text-[#c8c8b8] mt-3 pt-2.5 border-t border-white/10">Reduced lifetime interest cost.</p>
              </div>

              <div className="bg-white border border-[#e8e0d0]/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[#a89a70] text-[10.5px] font-bold tracking-wider uppercase">Time Saved</span>
                  <h2 className="text-[30px] font-bold mt-2 text-[#052316] leading-tight">
                    {formatMonthsSaved(result.monthsSaved)}
                  </h2>
                </div>
                <p className="text-[12.5px] text-[#888] mt-3 pt-2.5 border-t border-[#e8e0d0]/30">
                  Paid off in {Math.floor(result.extraPayoffMonths / 12)} years, {result.extraPayoffMonths % 12} months.
                </p>
              </div>

              <div className="bg-white border border-[#e8e0d0]/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[#a89a70] text-[10.5px] font-bold tracking-wider uppercase">New Payoff Date</span>
                  <h2 className="text-[34px] font-bold mt-1.5 text-[#052316]">{getNewPayoffDate(result.extraPayoffMonths)}</h2>
                </div>
                <p className="text-[12.5px] text-[#888] mt-3 pt-2.5 border-t border-[#e8e0d0]/30">Estimated calendar payoff timeline.</p>
              </div>
            </div>

            {/* Split Comparison details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Payment comparison table */}
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm">
                <h3 className="text-[#052316] text-[16px] font-bold mb-4 pb-3 border-b border-[#e8e0d0]/40 font-sans">Payment Comparison</h3>
                
                <div className="overflow-x-auto text-[13px]">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#e8e0d0]/60">
                        <th className="py-2.5 font-bold text-[#052316]">Detail</th>
                        <th className="py-2.5 font-bold text-[#888]">Standard Schedule</th>
                        <th className="py-2.5 font-bold text-[#3fb364]">With Extra Payments</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#e8e0d0]/20">
                        <td className="py-3 text-[#052316] font-semibold">Monthly Outlay</td>
                        <td className="py-3 text-[#052316]">{fmt(result.standardPayment)}</td>
                        <td className="py-3 text-[#052316] font-bold">
                          {fmt(result.standardPayment + (parseFloat(addMonthly) || 0))}
                          {parseFloat(lumpSum) > 0 && parseInt(lumpSumMonth) > 0 && (
                            <span className="text-[10.5px] text-[#a89a70] font-normal block">
                              (+{fmt(parseFloat(lumpSum))} in Mo {lumpSumMonth})
                            </span>
                          )}
                        </td>
                      </tr>
                      <tr className="border-b border-[#e8e0d0]/20">
                        <td className="py-3 text-[#052316] font-semibold">Total Payoff Months</td>
                        <td className="py-3 text-[#052316]">{result.standardPayoffMonths} months</td>
                        <td className="py-3 text-[#3fb364] font-bold">{result.extraPayoffMonths} months</td>
                      </tr>
                      <tr className="border-b border-[#e8e0d0]/20">
                        <td className="py-3 text-[#052316] font-semibold">Total Interest Paid</td>
                        <td className="py-3 text-[#052316]">{fmt(result.standardTotalInterest)}</td>
                        <td className="py-3 text-[#052316] font-bold">{fmt(result.extraTotalInterest)}</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-[#052316] font-semibold">Total Amount Paid</td>
                        <td className="py-3 text-[#052316]">{fmt(result.standardTotalPaid)}</td>
                        <td className="py-3 text-[#052316] font-bold">{fmt(result.extraTotalPaid)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Payment distribution chart */}
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm flex flex-col justify-between items-center text-center">
                <div className="w-full text-left">
                  <h3 className="text-[#052316] text-[16px] font-bold pb-3 border-b border-[#e8e0d0]/40 font-sans">Payment Allocation (Recurring)</h3>
                </div>

                <div className="relative w-40 h-40 my-6">
                  <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                    <circle cx="100" cy="100" r="70" fill="none" stroke="#fcf9f3" strokeWidth="16" />
                    {/* Standard regular payment segment */}
                    <circle cx="100" cy="100" r="70" fill="none" stroke="#052316" strokeWidth="16"
                      strokeDasharray={`${2 * Math.PI * 70 * (parseFloat(getDonutSplitPct(result).standard) / 100)} ${2 * Math.PI * 70}`} />
                    {/* Extra payment segment */}
                    <circle cx="100" cy="100" r="70" fill="none" stroke="#3fb364" strokeWidth="16"
                      strokeDasharray={`${2 * Math.PI * 70 * (parseFloat(getDonutSplitPct(result).extra) / 100)} ${2 * Math.PI * 70}`}
                      strokeDashoffset={`-${2 * Math.PI * 70 * (parseFloat(getDonutSplitPct(result).standard) / 100)}`} />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#888]">Monthly Outlay</span>
                    <span className="text-[15.5px] font-bold text-[#052316]">{fmt(result.standardPayment + (parseFloat(addMonthly) || 0))}</span>
                  </div>
                </div>

                <div className="flex gap-6 text-[12px] font-sans pt-1">
                  <div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 rounded bg-[#052316]" /> <span>Regular Payment ({getDonutSplitPct(result).standard}%)</span></div>
                  <div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 rounded bg-[#3fb364]" /> <span>Extra Payment ({getDonutSplitPct(result).extra}%)</span></div>
                </div>
              </div>
            </div>

            {/* Compare different loan terms table (Section 8) */}
            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 shadow-sm overflow-hidden font-sans">
              <div className="px-7 py-5 border-b border-[#e8e0d0]/40">
                <h3 className="text-[#052316] text-[16px] font-bold">Compare Different Loan Terms</h3>
                <p className="text-[#888] text-[12.5px] mt-0.5">Holding loan amount, interest rate, and extra payments constant.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-[12.5px]">
                  <thead>
                    <tr className="bg-[#052316] text-white">
                      {["Term (Years)", "Standard Payment", "Payoff Timeline (With Extra)", "Interest Paid (With Extra)", "Interest Savings vs. Standard"].map((h) => (
                        <th key={h} className="py-3 px-4 text-left font-semibold whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {result.comparisons.map((row) => (
                      <tr key={row.termYears} className={row.termYears === parseInt(termYears) ? "bg-[#3fb364]/10 font-bold" : "hover:bg-[#faf7f0] border-b border-[#e8e0d0]/20"}>
                        <td className="py-3 px-4 text-[#052316]">{row.termYears} Years</td>
                        <td className="py-3 px-4 text-[#052316]">{fmt(row.standardPayment)}</td>
                        <td className="py-3 px-4 text-[#052316]">{Math.floor(row.payoffTimeMonths / 12)} yrs, {row.payoffTimeMonths % 12} mos</td>
                        <td className="py-3 px-4 text-[#052316]">{fmt(row.totalInterestPaid)}</td>
                        <td className="py-3 px-4 text-[#3fb364] font-bold">{fmt(row.interestSavings)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Amortization schedule table */}
            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 shadow-sm overflow-hidden font-sans">
              <div className="px-7 py-5 border-b border-[#e8e0d0]/40 flex justify-between items-center">
                <div>
                  <h3 className="text-[#052316] text-[16.5px] font-bold">Amortization Schedule (With Extra Payments)</h3>
                  <p className="text-[#888] text-[12px] mt-0.5">Month-by-month payoff projection schedule.</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-[12.5px]">
                  <thead>
                    <tr className="bg-[#052316] text-white">
                      {["Month", "Principal Paid", "Interest Paid", "Remaining Balance"].map((h) => (
                        <th key={h} className="py-3 px-4 text-left font-semibold whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {result.schedule.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage).map((row) => (
                      <tr key={row.month} className={row.month % 2 === 0 ? "bg-white" : "bg-[#faf7f0]"}>
                        <td className="py-2.5 px-4 text-[#888] font-bold">Month {row.month}</td>
                        <td className="py-2.5 px-4 text-[#3fb364] font-bold">{fmt(row.principalPaid)}</td>
                        <td className="py-2.5 px-4 text-[#b89a5a]">{fmt(row.interestPaid)}</td>
                        <td className="py-2.5 px-4 text-[#052316]">{fmt(row.remainingBalance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Pagination */}
              {Math.ceil(result.schedule.length / rowsPerPage) > 1 && (
                <div className="flex items-center justify-between px-7 py-4 border-t border-[#e8e0d0]/40">
                  <button onClick={() => setCurrentPage((p) => Math.max(0, p - 1))} disabled={currentPage === 0}
                    className="px-4 py-2 text-[13px] font-bold bg-[#052316] text-white rounded-xl disabled:opacity-40 cursor-pointer disabled:cursor-default">
                    ← Prev
                  </button>
                  <span className="text-[13px] text-[#888]">Page {currentPage + 1} of {Math.ceil(result.schedule.length / rowsPerPage)}</span>
                  <button onClick={() => setCurrentPage((p) => Math.min(Math.ceil(result.schedule.length / rowsPerPage) - 1, p + 1))}
                    disabled={currentPage === Math.ceil(result.schedule.length / rowsPerPage) - 1}
                    className="px-4 py-2 text-[13px] font-bold bg-[#052316] text-white rounded-xl disabled:opacity-40 cursor-pointer disabled:cursor-default">
                    Next →
                  </button>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="bg-[#052316] rounded-3xl p-6 lg:p-8 text-white shadow-md relative overflow-hidden">
              <div className="absolute -bottom-16 -right-16 w-[200px] h-[200px] rounded-full border border-white/5 opacity-40" />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-sans">
                <div>
                  <h4 className="text-[18px] font-bold mb-1">Looking to buy or refinance in Arizona?</h4>
                  <p className="text-[#c8c8b8] text-[13.5px]">Get in touch with the Knoell team for a complete review of your loan scenarios.</p>
                </div>
                <Link href="/#get-pre-approved"
                  className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all shadow-md whitespace-nowrap">
                  Connect With Us →
                </Link>
              </div>
            </div>

          </section>
        )}

        {/* Placeholder if not calculated */}
        {!result && (
          <section className="pb-16 px-6 lg:px-10 max-w-3xl mx-auto text-center font-sans">
            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-10 lg:p-14 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-[#3fb364]/10 flex items-center justify-center mx-auto mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3 className="text-[#052316] text-[20px] font-bold mb-2">Simulate Payoff Savings</h3>
              <p className="text-[#888] text-[14.5px] leading-relaxed max-w-md mx-auto font-sans">
                Fill in your mortgage amount and extra payment expectations, then click <strong>&ldquo;Calculate Payoff Savings&rdquo;</strong> to view detailed metrics.
              </p>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
