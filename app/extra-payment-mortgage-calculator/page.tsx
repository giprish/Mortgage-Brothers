"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { InteractivePieChart, BasicPaymentOverTimeChart } from "../component/InteractiveCharts";

// ─── Helper Functions ───────────────────────────────────────────────────────
const parseCurrency = (val: string | number): number => {
  if (!val) return 0;
  const clean = val.toString().replace(/[^0-9.]/g, "");
  return parseFloat(clean) || 0;
};

const formatCurrency = (num: number): string => {
  return "$" + Number(num).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

function calculateMonthlyPayment(principal: number, annualRatePct: number, years: number): number {
  const monthlyRate = annualRatePct / 100 / 12;
  const n = years * 12;
  if (monthlyRate === 0) return principal / n;
  const factor = Math.pow(1 + monthlyRate, n);
  return (principal * monthlyRate * factor) / (factor - 1);
}

// ─── Amortization & Simulation ──────────────────────────────────────────────
interface AmortizationRow {
  month: number;
  principalPaid: number;
  interestPaid: number;
  remainingBalance: number;
  standardBalance: number;
}

interface TermComparison {
  termYears: number;
  monthlyPayment: number;
  totalInterest: number;
  interestSavings: number;
  yearsSaved: number;
}

export default function ExtraPaymentMortgageCalculatorPage() {
  // Inputs
  const [loanAmountStr, setLoanAmountStr] = useState("250,000");
  const [interestRateStr, setInterestRateStr] = useState("4.5");
  const [loanTerm, setLoanTerm] = useState(30);

  // Extra Payments
  const [extraMonthlyStr, setExtraMonthlyStr] = useState("100");
  const [lumpSumStr, setLumpSumStr] = useState("2,000");
  const [lumpSumMonthStr, setLumpSumMonthStr] = useState("12");

  // Presets State
  const [activePreset, setActivePreset] = useState<"minimal" | "moderate" | "aggressive" | "custom">("minimal");

  // New Payoff Date State
  const [userPayoffDate, setUserPayoffDate] = useState<string>("");

  const applyPreset = (preset: "minimal" | "moderate" | "aggressive") => {
    setActivePreset(preset);
    if (preset === "minimal") {
      setExtraMonthlyStr("100");
      setLumpSumStr("2,000");
      setLumpSumMonthStr("12");
    } else if (preset === "moderate") {
      setExtraMonthlyStr("200");
      setLumpSumStr("5,000");
      setLumpSumMonthStr("12");
    } else if (preset === "aggressive") {
      setExtraMonthlyStr("500");
      setLumpSumStr("10,000");
      setLumpSumMonthStr("12");
    }
  };

  // Calculations
  const calcResult = useMemo(() => {
    const loanAmount = parseCurrency(loanAmountStr);
    const annualRate = parseFloat(interestRateStr) || 0;
    const years = loanTerm;
    const extraMonthly = parseCurrency(extraMonthlyStr);
    let lumpSum = parseCurrency(lumpSumStr);
    let lumpSumMonth = parseInt(lumpSumMonthStr, 10);

    if (isNaN(lumpSumMonth) || lumpSumMonth <= 0) {
      lumpSumMonth = 0;
      lumpSum = 0;
    }

    const totalMonths = years * 12;
    const monthlyRate = annualRate / 100 / 12;
    const standardPayment = calculateMonthlyPayment(loanAmount, annualRate, years);

    // Standard Schedule Baseline (Exact azmortgagebrothers.com calculation loop)
    let stdBalance = loanAmount;
    let standardTotalInterest = 0;
    const standardBalances: number[] = [loanAmount];

    for (let m = 1; m <= totalMonths; m++) {
      if (stdBalance <= 0) {
        standardBalances.push(0);
        continue;
      }
      const interest = stdBalance * monthlyRate;
      standardTotalInterest += interest;
      let principal = standardPayment - interest;
      if (principal > stdBalance) principal = stdBalance;
      stdBalance = Math.max(0, stdBalance - principal);
      standardBalances.push(stdBalance);
    }

    // Schedule With Extra Payments
    let balance = loanAmount;
    let totalInterestExtra = 0;
    let payoffMonth = 0;
    const schedule: AmortizationRow[] = [];

    for (let m = 1; m <= totalMonths && balance > 0; m++) {
      payoffMonth = m;
      const interest = balance * monthlyRate;
      let principal = standardPayment - interest;
      if (principal < 0) principal = 0;

      // Add extra payments
      let extraThisMonth = extraMonthly;
      if (m === lumpSumMonth && lumpSum > 0) {
        extraThisMonth += lumpSum;
      }

      let totalPrincipal = principal + extraThisMonth;
      if (totalPrincipal > balance) {
        totalPrincipal = balance;
        balance = 0;
      } else {
        balance -= totalPrincipal;
      }

      totalInterestExtra += interest;

      schedule.push({
        month: m,
        principalPaid: totalPrincipal,
        interestPaid: interest,
        remainingBalance: Math.max(0, balance),
        standardBalance: standardBalances[m] || 0,
      });
    }

    const interestSavings = Math.max(0, standardTotalInterest - totalInterestExtra);
    const monthsSaved = Math.max(0, totalMonths - payoffMonth);
    const yearsSaved = monthsSaved / 12;
    const totalExtraPaid = extraMonthly * payoffMonth + (lumpSum > 0 && lumpSumMonth > 0 ? lumpSum : 0);

    // Auto-calculate default New Payoff Date
    const today = new Date();
    const payoffDate = new Date(today.getFullYear(), today.getMonth() + payoffMonth, today.getDate());
    const payoffDateISO = payoffDate.toISOString().split("T")[0];

    // Term Comparisons
    const termOptions = [15, 20, 30].filter((t) => t !== years);
    const termComparisons: TermComparison[] = termOptions.map((t) => {
      const stdPay = calculateMonthlyPayment(loanAmount, annualRate, t);
      const tMonths = t * 12;
      let bal = loanAmount;
      let tInterest = 0;
      let tPayoffMonth = 0;

      for (let m = 1; m <= tMonths && bal > 0; m++) {
        tPayoffMonth = m;
        const intr = bal * monthlyRate;
        let prn = stdPay - intr;
        if (prn < 0) prn = 0;

        let extra = extraMonthly;
        if (m === lumpSumMonth && lumpSum > 0) extra += lumpSum;
        let totPrn = prn + extra;

        if (totPrn > bal) {
          totPrn = bal;
          bal = 0;
        } else {
          bal -= totPrn;
        }
        tInterest += intr;
      }

      const sav = (stdPay * tMonths) - tInterest;
      const ySaved = Math.max(0, tMonths - tPayoffMonth) / 12;

      return {
        termYears: t,
        monthlyPayment: stdPay,
        totalInterest: tInterest,
        interestSavings: sav,
        yearsSaved: ySaved,
      };
    });

    return {
      loanAmount,
      annualRate,
      years,
      standardPayment,
      standardTotalInterest,
      totalInterestExtra,
      interestSavings,
      payoffMonth,
      monthsSaved,
      yearsSaved,
      totalExtraPaid,
      payoffDateISO,
      schedule,
      termComparisons,
    };
  }, [loanAmountStr, interestRateStr, loanTerm, extraMonthlyStr, lumpSumStr, lumpSumMonthStr]);

  // Keep New Payoff Date Picker synced if user hasn't overridden
  useEffect(() => {
    setUserPayoffDate(calcResult.payoffDateISO);
  }, [calcResult.payoffDateISO]);

  // Handler when user picks a date from the date picker
  const handlePayoffDateChange = (dateStr: string) => {
    setUserPayoffDate(dateStr);
    if (!dateStr) return;

    const selected = new Date(dateStr);
    const today = new Date();
    const months = (selected.getFullYear() - today.getFullYear()) * 12 + (selected.getMonth() - today.getMonth());

    if (months > 0) {
      setLumpSumMonthStr(months.toString());
      setActivePreset("custom");
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7f0] text-[#32353C] font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-[#052316] text-white pt-[110px] lg:pt-[130px] pb-16 lg:pb-20 px-4 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-2 font-sans">
            ARIZONA MORTGAGE TOOLS
          </span>
          <h1 className="text-[32px] md:text-[46px] font-bold mb-4 tracking-tight font-playfair">
            Extra Payment Mortgage Calculator
          </h1>
          <p className="text-[#c8c8b8] text-[15px] md:text-[17px] max-w-3xl mx-auto leading-relaxed font-sans">
            See how much time and money you can save by adding extra monthly payments or a one-time lump sum payment to your mortgage.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 lg:px-8 mt-8 pb-20">
        <div className="bg-white rounded-2xl border border-[#e0e0e0] shadow-sm p-6 lg:p-10 space-y-10">
          
          {/* 1. Base Loan Inputs */}
          <div>
            <h3 className="text-[20px] font-bold text-[#32353C] pb-3 mb-6 border-b border-[#e0e0e0]">
              Mortgage Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <label htmlFor="loan-amount" className="text-[14px] font-medium text-[#32353C]">
                    Loan Amount ($)
                  </label>
                  <div className="relative group cursor-help">
                    <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                      Enter your current or initial loan balance.
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">$</span>
                  <input
                    type="text"
                    id="loan-amount"
                    value={loanAmountStr}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      setLoanAmountStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                    }}
                    placeholder="Enter loan amount"
                    className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <label htmlFor="interest-rate" className="text-[14px] font-medium text-[#32353C]">
                    Interest Rate (%)
                  </label>
                  <div className="relative group cursor-help">
                    <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                      Enter your annual mortgage interest rate.
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="interest-rate"
                    value={interestRateStr}
                    onChange={(e) => setInterestRateStr(e.target.value)}
                    placeholder="Enter interest rate"
                    className="w-full h-[45px] pl-3.5 pr-8 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] text-right"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">%</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <label htmlFor="loan-term" className="text-[14px] font-medium text-[#32353C]">
                    Loan Term
                  </label>
                  <div className="relative group cursor-help">
                    <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-52 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                      Select mortgage duration.
                    </div>
                  </div>
                </div>
                <select
                  id="loan-term"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(parseInt(e.target.value, 10))}
                  className="w-full h-[45px] px-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] cursor-pointer"
                >
                  <option value={30}>30 Years</option>
                  <option value={20}>20 Years</option>
                  <option value={15}>15 Years</option>
                  <option value={10}>10 Years</option>
                </select>
              </div>
            </div>
          </div>

          {/* 2. Preset Quick Scenarios Buttons */}
          <div>
            <label className="text-[14px] font-bold text-[#32353C] block mb-3">
              Quick Payoff Scenarios
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => applyPreset("minimal")}
                className={`py-3 px-4 rounded-xl border font-bold text-[14px] transition-all cursor-pointer ${
                  activePreset === "minimal"
                    ? "bg-[#052316] text-white border-[#052316] shadow-md"
                    : "bg-[#faf7f0] text-[#32353C] border-[#e0e0e0] hover:bg-[#f0ece1]"
                }`}
              >
                Minimal Extra
                <span className="block text-[11.5px] font-normal opacity-80 mt-0.5">+$100/mo &amp; $2,000 lump sum at Mo 12</span>
              </button>

              <button
                type="button"
                onClick={() => applyPreset("moderate")}
                className={`py-3 px-4 rounded-xl border font-bold text-[14px] transition-all cursor-pointer ${
                  activePreset === "moderate"
                    ? "bg-[#052316] text-white border-[#052316] shadow-md"
                    : "bg-[#faf7f0] text-[#32353C] border-[#e0e0e0] hover:bg-[#f0ece1]"
                }`}
              >
                Moderate Extra
                <span className="block text-[11.5px] font-normal opacity-80 mt-0.5">+$200/mo &amp; $5,000 lump sum at Mo 12</span>
              </button>

              <button
                type="button"
                onClick={() => applyPreset("aggressive")}
                className={`py-3 px-4 rounded-xl border font-bold text-[14px] transition-all cursor-pointer ${
                  activePreset === "aggressive"
                    ? "bg-[#052316] text-white border-[#052316] shadow-md"
                    : "bg-[#faf7f0] text-[#32353C] border-[#e0e0e0] hover:bg-[#f0ece1]"
                }`}
              >
                Aggressive Payoff
                <span className="block text-[11.5px] font-normal opacity-80 mt-0.5">+$500/mo &amp; $10,000 lump sum at Mo 12</span>
              </button>
            </div>
          </div>

          {/* 3. Extra Payments & Payment Distribution Side-by-Side */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
            
            {/* Left Box: Extra Payments Inputs */}
            <div className="lg:col-span-7 bg-[#faf7f0]/60 p-6 rounded-xl border border-[#e0e0e0] space-y-5">
              <h3 className="text-[18px] font-bold text-[#32353C] border-b border-[#e0e0e0] pb-2">
                Extra Payments
              </h3>

              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <label htmlFor="extra-monthly" className="text-[14px] font-medium text-[#32353C]">
                    Additional Monthly Payment ($)
                  </label>
                  <div className="relative group cursor-help">
                    <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                      Extra amount added to each monthly payment.
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">$</span>
                  <input
                    type="text"
                    id="extra-monthly"
                    value={extraMonthlyStr}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      setExtraMonthlyStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      setActivePreset("custom");
                    }}
                    placeholder="Enter extra monthly payment"
                    className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <label htmlFor="lump-sum" className="text-[14px] font-medium text-[#32353C]">
                    Lump Sum Payment ($)
                  </label>
                  <div className="relative group cursor-help">
                    <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                      One-time extra payment (e.g. bonus or tax refund).
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">$</span>
                  <input
                    type="text"
                    id="lump-sum"
                    value={lumpSumStr}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      setLumpSumStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      setActivePreset("custom");
                    }}
                    placeholder="Enter lump sum amount"
                    className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <label htmlFor="lump-sum-month" className="text-[14px] font-medium text-[#32353C]">
                    Lump Sum Payment Month
                  </label>
                  <div className="relative group cursor-help">
                    <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                      Month number when lump sum is applied (e.g. 12 = after 1 year).
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  id="lump-sum-month"
                  value={lumpSumMonthStr}
                  onChange={(e) => {
                    setLumpSumMonthStr(e.target.value);
                    setActivePreset("custom");
                  }}
                  placeholder="Enter month number"
                  className="w-full h-[45px] px-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                />
              </div>
            </div>

            {/* Right Box: Donut Chart Payment Distribution */}
            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-[#e0e0e0] shadow-sm flex flex-col items-center justify-center text-center">
              <InteractivePieChart
                title="Payment Distribution"
                donut={true}
                centerTextTitle="Monthly Total"
                centerTextSub={formatCurrency(calcResult.standardPayment + parseCurrency(extraMonthlyStr))}
                dataItems={[
                  { label: "Regular Payment", value: calcResult.standardPayment, color: "#4CAF50" },
                  { label: "Extra Payment", value: parseCurrency(extraMonthlyStr), color: "#FF9800" },
                ]}
              />
            </div>

          </div>

          {/* 4. Results Section: New Payoff Date, Savings, & Line Chart */}
          <div className="pt-6 border-t border-[#f0f0f0] space-y-8 animate-fadeIn">
            <h3 className="text-[22px] font-bold text-[#32353C]">Your Loan Summary</h3>

            {/* 3 Result Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: New Payoff Date Picker */}
              <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl p-5 shadow-sm flex flex-col justify-between">
                <h4 className="text-[15px] font-bold text-[#4CAF50] mb-2">New Payoff Date</h4>
                <input
                  type="date"
                  id="new-payoff-date"
                  value={userPayoffDate}
                  onChange={(e) => handlePayoffDateChange(e.target.value)}
                  className="w-full h-[42px] px-3 bg-white border border-[#e0e0e0] rounded-md text-[14.5px] font-bold text-[#32353C] focus:outline-none focus:border-[#4CAF50] cursor-pointer"
                />
                <span className="text-[11.5px] text-[#888] mt-2 block">
                  Select a target payoff date to auto-calculate required timeline.
                </span>
              </div>

              {/* Card 2: Interest Savings */}
              <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl p-5 shadow-sm flex flex-col justify-between">
                <h4 className="text-[15px] font-bold text-[#4CAF50] mb-2">Interest Savings ($)</h4>
                <span className="text-[24px] font-bold text-[#3fb364]">
                  {formatCurrency(calcResult.interestSavings)}
                </span>
                <span className="text-[11.5px] text-[#888] mt-2 block">
                  Total interest eliminated by extra payments.
                </span>
              </div>

              {/* Card 3: Total Savings */}
              <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl p-5 shadow-sm flex flex-col justify-between">
                <h4 className="text-[15px] font-bold text-[#4CAF50] mb-2">Total Savings ($)</h4>
                <span className="text-[24px] font-bold text-[#FF9800]">
                  {formatCurrency(calcResult.interestSavings)}
                </span>
                <span className="text-[11.5px] text-[#888] mt-2 block">
                  Combined financial benefit over standard loan term.
                </span>
              </div>

            </div>

            {/* Savings Breakdown Info Card */}
            <div className="bg-[#052316] text-white rounded-xl p-5 lg:p-6 shadow-md grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <span className="text-[11px] text-[#3fb364] font-bold uppercase tracking-wider block mb-1">Years Saved</span>
                <span className="text-[22px] font-bold text-white">{calcResult.yearsSaved.toFixed(1)} Yrs</span>
              </div>
              <div>
                <span className="text-[11px] text-[#3fb364] font-bold uppercase tracking-wider block mb-1">Months Saved</span>
                <span className="text-[22px] font-bold text-white">{calcResult.monthsSaved} Mos</span>
              </div>
              <div>
                <span className="text-[11px] text-[#3fb364] font-bold uppercase tracking-wider block mb-1">Interest Saved</span>
                <span className="text-[22px] font-bold text-[#FF9800]">{formatCurrency(calcResult.interestSavings)}</span>
              </div>
              <div>
                <span className="text-[11px] text-[#3fb364] font-bold uppercase tracking-wider block mb-1">Total Extra Paid</span>
                <span className="text-[22px] font-bold text-white">{formatCurrency(calcResult.totalExtraPaid)}</span>
              </div>
            </div>

            {/* Line Chart Designed Like Basic Mortgage Calculator */}
            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm">
              <h3 className="text-[#052316] text-[18px] md:text-[20px] font-bold mb-4 pb-3 border-b border-[#f0ece1]">
                Payment Comparison (Balance Over Time)
              </h3>
              <BasicPaymentOverTimeChart schedule={calcResult.schedule.map((r) => ({
                paymentNum: r.month,
                principal: r.principalPaid,
                interest: r.interestPaid,
                endBalance: r.remainingBalance,
              }))} />
            </div>

          </div>

          {/* 5. Compare Different Loan Terms */}
          <div className="pt-6 border-t border-[#f0f0f0] space-y-4">
            <h3 className="text-[20px] font-bold text-[#32353C]">Compare Different Loan Terms</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {calcResult.termComparisons.map((row) => (
                <div key={row.termYears} className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl p-5 shadow-sm space-y-3">
                  <h4 className="text-[16px] font-bold text-[#4CAF50] border-b border-[#e0e0e0] pb-2">
                    {row.termYears} Year Term
                  </h4>
                  <div className="flex justify-between text-[13.5px]">
                    <span className="text-[#666]">Monthly Payment:</span>
                    <span className="font-bold text-[#32353C]">{formatCurrency(row.monthlyPayment)}</span>
                  </div>
                  <div className="flex justify-between text-[13.5px]">
                    <span className="text-[#666]">Total Interest:</span>
                    <span className="font-semibold text-[#32353C]">{formatCurrency(row.totalInterest)}</span>
                  </div>
                  <div className="flex justify-between text-[13.5px]">
                    <span className="text-[#666]">Interest Savings:</span>
                    <span className="font-bold text-[#FF9800]">{formatCurrency(row.interestSavings)}</span>
                  </div>
                  <div className="flex justify-between text-[13.5px] pt-1 border-t border-[#e0e0e0]">
                    <span className="text-[#666]">Years Saved:</span>
                    <span className="font-bold text-[#4CAF50]">{row.yearsSaved.toFixed(1)} Years</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Amortization Schedule Table */}
          <div className="pt-6 border-t border-[#f0f0f0] space-y-4">
            <h3 className="text-[20px] font-bold text-[#32353C]">Amortization Schedule</h3>
            <div className="overflow-x-auto rounded-xl border border-[#e0e0e0] shadow-sm max-h-[400px]">
              <table className="w-full text-left border-collapse text-[13.5px]">
                <thead className="sticky top-0 bg-[#052316] text-white z-10">
                  <tr>
                    <th className="py-3 px-4 font-semibold">Month</th>
                    <th className="py-3 px-4 font-semibold">Principal Paid</th>
                    <th className="py-3 px-4 font-semibold">Interest Paid</th>
                    <th className="py-3 px-4 font-semibold">Remaining Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {calcResult.schedule.map((row, idx) => (
                    <tr key={row.month} className={idx % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"}>
                      <td className="py-2.5 px-4 font-bold text-[#32353C]">{row.month}</td>
                      <td className="py-2.5 px-4 text-[#3fb364] font-semibold">{formatCurrency(row.principalPaid)}</td>
                      <td className="py-2.5 px-4 text-[#FF9800]">{formatCurrency(row.interestPaid)}</td>
                      <td className="py-2.5 px-4 font-bold text-[#32353C]">{formatCurrency(row.remainingBalance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
