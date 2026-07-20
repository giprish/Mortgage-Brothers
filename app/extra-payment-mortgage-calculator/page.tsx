"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { InteractivePieChart, InteractiveAmortizationChart } from "../component/InteractiveCharts";

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
  totalSavings: number;
  monthsSaved: number;

  schedule: AmortizationRow[];
  comparisons: TermComparisonRow[];
}

const fmtCurr = (v: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Math.round(v));

const parseFormattedNumber = (str: string): number => {
  if (!str) return 0;
  const cleaned = str.replace(/,/g, "").replace(/[^0-9.]/g, "");
  return parseFloat(cleaned) || 0;
};

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

  let standardPayment = 0;
  if (p > 0 && n > 0) {
    if (r === 0) {
      standardPayment = p / n;
    } else {
      const factor = Math.pow(1 + r, n);
      standardPayment = (p * r * factor) / (factor - 1);
    }
  }

  const standardTotalInterest = Math.max(0, standardPayment * n - p);
  const standardTotalPaid = p + standardTotalInterest;

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

    let extraThisMonth = addMonthly;
    if (month === lumpSumMonth && lumpSumMonth > 0) {
      extraThisMonth += lumpSum;
    }

    let totalPrincipalThisMonth = regularPrincipalThisMonth + extraThisMonth;

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
      remainingBalance: Math.max(0, balance)
    });
  }

  const extraTotalInterest = totalInterestPaidExtra;
  const extraTotalPaid = p + extraTotalInterest;
  const interestSavings = Math.max(0, standardTotalInterest - extraTotalInterest);
  const totalSavings = interestSavings;
  const monthsSaved = Math.max(0, n - month);

  const termOptions = [30, 20, 15, 10];
  const comparisons = termOptions.map((tYr) => {
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
    const tStdInterest = Math.max(0, tStdPmt * tN - p);

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
    totalSavings,
    monthsSaved,
    schedule,
    comparisons
  };
}

function getNewPayoffDate(months: number): string {
  const date = new Date();
  date.setMonth(date.getMonth() + months);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function ExtraPaymentMortgageCalculator() {
  const [loanAmountStr, setLoanAmountStr] = useState("250,000");
  const [interestRateStr, setInterestRateStr] = useState("4.5");
  const [termYears, setTermYears] = useState(30);

  const [activePreset, setActivePreset] = useState<"minimal" | "moderate" | "aggressive">("minimal");
  const [addMonthlyStr, setAddMonthlyStr] = useState("100");
  const [lumpSumStr, setLumpSumStr] = useState("2,000");
  const [lumpSumMonthStr, setLumpSumMonthStr] = useState("12");

  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 12;

  const loanAmount = useMemo(() => parseFormattedNumber(loanAmountStr), [loanAmountStr]);
  const interestRate = useMemo(() => parseFormattedNumber(interestRateStr), [interestRateStr]);
  const addMonthly = useMemo(() => parseFormattedNumber(addMonthlyStr), [addMonthlyStr]);
  const lumpSum = useMemo(() => parseFormattedNumber(lumpSumStr), [lumpSumStr]);
  const lumpSumMonth = useMemo(() => parseInt(lumpSumMonthStr, 10) || 0, [lumpSumMonthStr]);

  const calcResult = useMemo(() => {
    if (!loanAmount || loanAmount <= 0) return null;
    return runAmortizationSimulation(loanAmount, interestRate, termYears, addMonthly, lumpSum, lumpSumMonth);
  }, [loanAmount, interestRate, termYears, addMonthly, lumpSum, lumpSumMonth]);

  useEffect(() => {
    setCurrentPage(0);
  }, [calcResult]);

  const applyPreset = (preset: "minimal" | "moderate" | "aggressive") => {
    setActivePreset(preset);
    if (preset === "minimal") {
      setAddMonthlyStr("100");
      setLumpSumStr("2,000");
      setLumpSumMonthStr("12");
    } else if (preset === "moderate") {
      setAddMonthlyStr("200");
      setLumpSumStr("5,000");
      setLumpSumMonthStr("12");
    } else {
      setAddMonthlyStr("500");
      setLumpSumStr("10,000");
      setLumpSumMonthStr("12");
    }
  };

  const donutSplit = useMemo(() => {
    if (!calcResult || calcResult.standardPayment <= 0) {
      return { regularPct: 80, extraPct: 20 };
    }
    const reg = calcResult.standardPayment;
    const extra = addMonthly;
    const total = reg + extra;
    if (total <= 0) return { regularPct: 100, extraPct: 0 };
    return {
      regularPct: parseFloat(((reg / total) * 100).toFixed(1)),
      extraPct: parseFloat(((extra / total) * 100).toFixed(1))
    };
  }, [calcResult, addMonthly]);

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] font-sans text-[#32353C]">
      <Navbar />

      <main className="flex-grow pb-16">
        <section className="w-full bg-[#052316] text-white py-14 lg:py-16 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-2 font-sans">
              MORTGAGE TOOLS
            </span>
            <h1 className="text-white text-[34px] lg:text-[46px] font-playfair font-normal leading-[1.2] mb-4">
              Extra Payment Mortgage Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[14.5px] lg:text-[16px] leading-[1.6] max-w-2xl mx-auto font-sans">
              See how adding extra monthly payments or one-time lump sums can shorten your loan term and save thousands in interest.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 lg:px-8 mt-8">
          <div className="bg-white rounded-2xl border border-[#e0e0e0] shadow-sm p-6 lg:p-10 space-y-8">
            
            <div>
              <h3 className="text-[18px] font-semibold text-[#32353C] pb-3 mb-6 border-b border-[#f0f0f0]">
                Loan Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="loanAmount" className="text-[14px] font-medium text-[#32353C]">
                      Original Loan Amount ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-52 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Enter the total amount you want to borrow for your mortgage.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                      $
                    </span>
                    <input
                      type="text"
                      id="loanAmount"
                      value={loanAmountStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setLoanAmountStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="interestRate" className="text-[14px] font-medium text-[#32353C]">
                      Interest Rate (%)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Enter your annual interest rate (e.g. 4.5).
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="interestRate"
                      value={interestRateStr}
                      onChange={(e) => {
                        let val = e.target.value.replace(/[^0-9.]/g, "");
                        const parts = val.split(".");
                        if (parts.length > 2) val = parts[0] + "." + parts.slice(1).join("");
                        setInterestRateStr(val);
                      }}
                      className="w-full h-[45px] pl-3.5 pr-8 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] text-right"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                      %
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="loanTerm" className="text-[14px] font-medium text-[#32353C]">
                      Loan Term
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-52 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Select the length of your mortgage in years.
                      </div>
                    </div>
                  </div>
                  <select
                    id="loanTerm"
                    value={termYears}
                    onChange={(e) => setTermYears(parseInt(e.target.value, 10))}
                    className="w-full h-[45px] px-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] text-[#32353C] focus:outline-none focus:border-[#4CAF50] cursor-pointer"
                  >
                    <option value={30}>30 Years</option>
                    <option value={20}>20 Years</option>
                    <option value={15}>15 Years</option>
                    <option value={10}>10 Years</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[14px] font-semibold text-[#666] uppercase tracking-wider mb-3 font-sans">
                Quick Scenarios
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => applyPreset("minimal")}
                  className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                    activePreset === "minimal"
                      ? "bg-[#4CAF50] text-white border-[#4CAF50] font-semibold shadow-sm"
                      : "bg-white text-[#4CAF50] border-[#4CAF50] hover:bg-[#4CAF50]/10 font-medium"
                  }`}
                >
                  <span className="block text-[15px]">Minimal Extra</span>
                  <span className="text-[11.5px] opacity-85 block mt-0.5">
                    Add $100/mo + $2,000 lump sum (Month 12)
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => applyPreset("moderate")}
                  className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                    activePreset === "moderate"
                      ? "bg-[#4CAF50] text-white border-[#4CAF50] font-semibold shadow-sm"
                      : "bg-white text-[#4CAF50] border-[#4CAF50] hover:bg-[#4CAF50]/10 font-medium"
                  }`}
                >
                  <span className="block text-[15px]">Moderate Extra</span>
                  <span className="text-[11.5px] opacity-85 block mt-0.5">
                    Add $200/mo + $5,000 lump sum (Month 12)
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => applyPreset("aggressive")}
                  className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                    activePreset === "aggressive"
                      ? "bg-[#4CAF50] text-white border-[#4CAF50] font-semibold shadow-sm"
                      : "bg-white text-[#4CAF50] border-[#4CAF50] hover:bg-[#4CAF50]/10 font-medium"
                  }`}
                >
                  <span className="block text-[15px]">Aggressive Payoff</span>
                  <span className="text-[11.5px] opacity-85 block mt-0.5">
                    Add $500/mo + $10,000 lump sum (Month 12)
                  </span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start pt-4 border-t border-[#f0f0f0]">
              <div className="space-y-5">
                <h3 className="text-[18px] font-semibold text-[#32353C] pb-3 border-b border-[#f0f0f0]">
                  Extra Payments
                </h3>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="extraMonthly" className="text-[14px] font-medium text-[#32353C]">
                      Additional Monthly Payment ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Enter extra amount to add to each monthly payment.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                      $
                    </span>
                    <input
                      type="text"
                      id="extraMonthly"
                      value={addMonthlyStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setAddMonthlyStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="lumpSum" className="text-[14px] font-medium text-[#32353C]">
                      Lump Sum Payment ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Enter a one-time extra payment amount (from bonus or savings).
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                      $
                    </span>
                    <input
                      type="text"
                      id="lumpSum"
                      value={lumpSumStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setLumpSumStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="lumpSumMonth" className="text-[14px] font-medium text-[#32353C]">
                      Lump Sum Payment Month
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Month number when the lump sum is applied (e.g. 12 = 1st year).
                      </div>
                    </div>
                  </div>
                  <input
                    type="number"
                    id="lumpSumMonth"
                    value={lumpSumMonthStr}
                    min="0"
                    max={termYears * 12}
                    onChange={(e) => setLumpSumMonthStr(e.target.value)}
                    className="w-full h-[45px] px-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                  />
                </div>
              </div>

              <div className="bg-[#f8f9fa] rounded-xl border border-[#e0e0e0] p-6 flex flex-col items-center justify-center h-full text-center">
                <InteractivePieChart
                  title="Payment Distribution"
                  donut={true}
                  centerTextTitle="Monthly Total"
                  centerTextSub={calcResult ? fmtCurr(calcResult.standardPayment + addMonthly) : "$0"}
                  dataItems={[
                    { label: "Regular Payment", value: calcResult ? calcResult.standardPayment : 0, color: "#4CAF50" },
                    { label: "Extra Payment", value: addMonthly, color: "#FF9800" },
                  ]}
                />
              </div>

            </div>

          </div>
        </div>

        {calcResult && (
          <section className="max-w-6xl mx-auto px-4 lg:px-8 mt-10 space-y-8 animate-fadeIn font-sans">
            <div className="bg-white rounded-2xl border border-[#e0e0e0] shadow-sm p-6 lg:p-10">
              
              <h2 className="text-[24px] font-semibold text-[#32353C] pb-4 mb-8 border-b-2 border-[#f0f0f0]">
                Your Loan Summary
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl p-5 text-center">
                  <span className="text-[13px] text-[#666] font-medium block mb-1">New Payoff Date</span>
                  <div className="text-[24px] font-bold text-[#4CAF50]">
                    {getNewPayoffDate(calcResult.extraPayoffMonths)}
                  </div>
                  <span className="text-[12px] text-[#888] block mt-1">
                    Saved {Math.floor(calcResult.monthsSaved / 12)} yrs {calcResult.monthsSaved % 12} mos compared to standard term
                  </span>
                </div>

                <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl p-5 text-center">
                  <span className="text-[13px] text-[#666] font-medium block mb-1">Interest Savings ($)</span>
                  <div className="text-[24px] font-bold text-[#4CAF50]">
                    {fmtCurr(calcResult.interestSavings)}
                  </div>
                  <span className="text-[12px] text-[#888] block mt-1">Total interest reduction over life of loan</span>
                </div>

                <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl p-5 text-center">
                  <span className="text-[13px] text-[#666] font-medium block mb-1">Total Savings ($)</span>
                  <div className="text-[24px] font-bold text-[#4CAF50]">
                    {fmtCurr(calcResult.totalSavings)}
                  </div>
                  <span className="text-[12px] text-[#888] block mt-1">Net mortgage savings achieved</span>
                </div>
              </div>

              {/* Baseline vs Extra Payment Comparison Table */}
              <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl p-6 mb-10">
                <h3 className="text-[17px] font-semibold text-[#32353C] mb-4">
                  Standard vs. Extra Payment Comparison
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[14px]">
                    <thead>
                      <tr className="border-b border-[#e0e0e0] text-[#666]">
                        <th className="py-2.5 px-3 font-semibold">Metric</th>
                        <th className="py-2.5 px-3 font-semibold">Standard Schedule</th>
                        <th className="py-2.5 px-3 font-semibold text-[#4CAF50]">With Extra Payments</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e0e0e0]">
                      <tr>
                        <td className="py-3 px-3 font-medium text-[#32353C]">Monthly Payment</td>
                        <td className="py-3 px-3 text-[#666]">{fmtCurr(calcResult.standardPayment)}</td>
                        <td className="py-3 px-3 text-[#4CAF50] font-bold">{fmtCurr(calcResult.standardPayment + addMonthly)}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-medium text-[#32353C]">Payoff Timeline</td>
                        <td className="py-3 px-3 text-[#666]">{calcResult.standardPayoffMonths} months ({termYears} yrs)</td>
                        <td className="py-3 px-3 text-[#4CAF50] font-bold">{calcResult.extraPayoffMonths} months ({Math.floor(calcResult.extraPayoffMonths / 12)} yrs {calcResult.extraPayoffMonths % 12} mos)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-medium text-[#32353C]">Total Interest Paid</td>
                        <td className="py-3 px-3 text-[#666]">{fmtCurr(calcResult.standardTotalInterest)}</td>
                        <td className="py-3 px-3 text-[#4CAF50] font-bold">{fmtCurr(calcResult.extraTotalInterest)}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-medium text-[#32353C]">Total Amount Paid</td>
                        <td className="py-3 px-3 text-[#666]">{fmtCurr(calcResult.standardTotalPaid)}</td>
                        <td className="py-3 px-3 text-[#4CAF50] font-bold">{fmtCurr(calcResult.extraTotalPaid)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-[18px] font-semibold text-[#32353C] mb-6">
                  Compare Different Loan Terms
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {calcResult.comparisons.map((row) => (
                    <div key={row.termYears} className="bg-white border border-[#e0e0e0] rounded-xl p-5 shadow-sm space-y-3">
                      <h4 className="text-[16px] font-bold text-[#4CAF50] pb-2 border-b border-[#f0f0f0]">
                        {row.termYears} Year Term
                      </h4>
                      <div className="text-[13px] space-y-2 text-[#32353C]">
                        <div className="flex justify-between">
                          <span className="text-[#666]">Base Payment:</span>
                          <span className="font-semibold">{fmtCurr(row.standardPayment)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#666]">New Payoff:</span>
                          <span className="font-semibold">{Math.floor(row.payoffTimeMonths / 12)}y {row.payoffTimeMonths % 12}m</span>
                        </div>
                        <div className="flex justify-between pt-1 border-t border-[#f0f0f0] font-bold">
                          <span className="text-[#666]">Interest Saved:</span>
                          <span className="text-[#4CAF50]">{fmtCurr(row.interestSavings)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <InteractiveAmortizationChart
                  title="Accelerated Amortization & Balance Progression Over Time"
                  schedule={calcResult.schedule.map((row) => ({
                    month: row.month,
                    principalPaid: row.principalPaid,
                    interestPaid: row.interestPaid,
                    remainingBalance: row.remainingBalance,
                  }))}
                />
              </div>

              <div className="mt-12">
                <div className="flex justify-between items-center pb-4 mb-4 border-b border-[#f0f0f0]">
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#32353C]">Amortization Schedule</h3>
                    <p className="text-[#888] text-[13px]">
                      Month-by-month payoff schedule including extra principal payments.
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto border border-[#e0e0e0] rounded-xl shadow-sm">
                  <table className="w-full text-left text-[13.5px] border-collapse">
                    <thead>
                      <tr className="bg-[#4CAF50] text-white font-medium">
                        <th className="py-3 px-4">Month</th>
                        <th className="py-3 px-4">Principal Paid</th>
                        <th className="py-3 px-4">Interest Paid</th>
                        <th className="py-3 px-4">Remaining Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {calcResult.schedule
                        .slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage)
                        .map((row, idx) => (
                          <tr
                            key={row.month}
                            className={idx % 2 === 0 ? "bg-white" : "bg-[#f8f9fa] hover:bg-[#f0f4f7]"}
                          >
                            <td className="py-3 px-4 font-semibold text-[#32353C]">Month {row.month}</td>
                            <td className="py-3 px-4 font-semibold text-[#4CAF50]">{fmtCurr(row.principalPaid)}</td>
                            <td className="py-3 px-4 font-medium text-[#FF9800]">{fmtCurr(row.interestPaid)}</td>
                            <td className="py-3 px-4 font-semibold text-[#32353C]">{fmtCurr(row.remainingBalance)}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                {Math.ceil(calcResult.schedule.length / rowsPerPage) > 1 && (
                  <div className="flex items-center justify-between pt-4">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                      disabled={currentPage === 0}
                      className="px-4 py-2 text-[13px] font-semibold bg-[#32353C] text-white rounded-lg disabled:opacity-30 cursor-pointer disabled:cursor-default"
                    >
                      ← Previous
                    </button>
                    <span className="text-[13px] text-[#666] font-medium">
                      Page {currentPage + 1} of {Math.ceil(calcResult.schedule.length / rowsPerPage)}
                    </span>
                    <button
                      onClick={() =>
                        setCurrentPage((p) =>
                          Math.min(Math.ceil(calcResult.schedule.length / rowsPerPage) - 1, p + 1)
                        )
                      }
                      disabled={currentPage === Math.ceil(calcResult.schedule.length / rowsPerPage) - 1}
                      className="px-4 py-2 text-[13px] font-semibold bg-[#32353C] text-white rounded-lg disabled:opacity-30 cursor-pointer disabled:cursor-default"
                    >
                      Next →
                    </button>
                  </div>
                )}
              </div>

              {/* Methodology & Disclaimer Section */}
              <div className="mt-12 bg-[#f8f9fa] border border-[#e0e0e0] rounded-2xl p-6 lg:p-8 space-y-4 text-[13.5px] leading-relaxed text-[#555]">
                <h4 className="text-[16px] font-bold text-[#32353C] border-b border-[#e0e0e0] pb-2">
                  Calculation Methodology &amp; Extra Payment Benefits
                </h4>
                <p>
                  <strong>How Extra Payments Work:</strong> Adding extra principal payments reduces your loan balance faster. Because interest is calculated monthly on the remaining balance, every extra dollar paid directly lowers future interest charges, accelerating your payoff timeline without changing your mandatory monthly obligation.
                </p>
                <div className="space-y-2 pt-1">
                  <p><strong>• Additional Monthly Payment:</strong> Regular extra contributions added to your monthly mortgage check.</p>
                  <p><strong>• Lump Sum Payment:</strong> One-time windfalls (tax refunds, annual bonuses) applied directly to principal at a specific month.</p>
                  <p><strong>• Recalculation Note:</strong> Prepayment penalties are rare on standard Arizona residential mortgages. Always verify with your servicer that extra payments are allocated to principal.</p>
                </div>
              </div>

              <div className="mt-12 bg-[#052316] rounded-2xl p-6 lg:p-8 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-[20px] font-bold mb-1 font-playfair">Want to evaluate your mortgage payoff strategy?</h4>
                  <p className="text-[#c8c8b8] text-[14px]">
                    Speak with our mortgage advisors to review refinancing or custom extra payment options.
                  </p>
                </div>
                <Link
                  href="/#get-pre-approved"
                  className="bg-[#4CAF50] hover:bg-[#45a049] text-white text-[15px] font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow whitespace-nowrap cursor-pointer"
                >
                  Connect With Us →
                </Link>
              </div>

            </div>
          </section>
        )}

      </main>

      <Footer />
    </div>
  );
}
