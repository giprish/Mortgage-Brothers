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
  mipPaid: number;
  remainingBalance: number;
}

interface FhaCalcResult {
  baseLoanAmount: number;
  upfrontMIP: number;
  totalLoanAmount: number;
  annualMIPRate: number;
  ltvRatio: number;

  monthlyPI: number;
  monthlyMIPFirstMonth: number;
  totalMonthlyFirstMonth: number;

  schedule: AmortizationRow[];
}

// ─── FHA Loan Limit Table (2026) ──────────────────────────────────────────────

interface FhaLimit {
  singleFamily: number;
  duplex: number;
  triplex: number;
  fourplex: number;
}

const FLOOR_LIMITS: FhaLimit = {
  singleFamily: 541287,
  duplex: 693050,
  triplex: 837700,
  fourplex: 1041125,
};

const ELEVATED_LIMITS: Record<string, FhaLimit> = {
  Maricopa: {
    singleFamily: 557750,
    duplex: 714100,
    triplex: 863300,
    fourplex: 1073000,
  },
  Pinal: {
    singleFamily: 557750,
    duplex: 714100,
    triplex: 863300,
    fourplex: 1073000,
  },
  Coconino: {
    singleFamily: 609500,
    duplex: 780400,
    triplex: 943200,
    fourplex: 1172500,
  },
};

function getFhaLoanLimit(county: string, propertyType: string): number {
  const limits = ELEVATED_LIMITS[county] || FLOOR_LIMITS;
  if (propertyType === "duplex") return limits.duplex;
  if (propertyType === "triplex") return limits.triplex;
  if (propertyType === "fourplex") return limits.fourplex;
  return limits.singleFamily;
}

const ARIZONA_COUNTIES = [
  "Maricopa", "Pima", "Pinal", "Apache", "Cochise", "Coconino", "Gila", "Graham",
  "Greenlee", "La Paz", "Mohave", "Navajo", "Santa Cruz", "Yavapai", "Yuma"
];

// Helper to format currency
const fmt = (v: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Math.round(v));

// ─── FHA MIP Rate Lookup ──────────────────────────────────────────────────────

function getFhaMipRate(termYears: number, ltv: number, baseLoanAmount: number): number {
  if (baseLoanAmount <= 726200) {
    if (termYears > 15) {
      if (ltv <= 90.0) return 0.50;
      if (ltv <= 95.0) return 0.55;
      return 0.75;
    } else {
      if (ltv <= 90.0) return 0.15;
      return 0.40;
    }
  } else {
    if (termYears > 15) {
      if (ltv <= 90.0) return 0.70;
      if (ltv <= 95.0) return 0.70;
      return 0.75;
    } else {
      if (ltv <= 78.0) return 0.15;
      if (ltv <= 90.0) return 0.40;
      return 0.65;
    }
  }
}

// ─── Core Calculations Solver ─────────────────────────────────────────────────

function solveFhaPayments(
  homePrice: number,
  dpAmt: number,
  interestRate: number,
  loanTerm: number,
  limit: number
): FhaCalcResult {
  const baseLoanAmount = Math.max(0, homePrice - dpAmt);
  const upfrontMIP = baseLoanAmount * 0.0175;
  const totalLoanAmount = baseLoanAmount + upfrontMIP;
  const ltvRatio = homePrice > 0 ? (baseLoanAmount / homePrice) * 100 : 0;

  const annualMIPRate = getFhaMipRate(loanTerm, ltvRatio, baseLoanAmount);
  const monthlyMIPRate = annualMIPRate / 100 / 12;

  // Monthly Principal & Interest on Base Loan Amount
  const r = interestRate / 100 / 12;
  const n = loanTerm * 12;
  let monthlyPI = 0;

  if (baseLoanAmount > 0 && n > 0) {
    if (r === 0) {
      monthlyPI = baseLoanAmount / n;
    } else {
      const factor = Math.pow(1 + r, n);
      monthlyPI = (baseLoanAmount * r * factor) / (factor - 1);
    }
  }

  // Month 1 MIP calculation
  const monthlyMIPFirstMonth = baseLoanAmount * monthlyMIPRate;
  const totalMonthlyFirstMonth = monthlyPI + monthlyMIPFirstMonth;

  // Build Amortization schedule
  const schedule: AmortizationRow[] = [];
  let balance = baseLoanAmount;

  for (let month = 1; month <= n; month++) {
    const interestThisMonth = balance * r;
    let principalThisMonth = monthlyPI - interestThisMonth;
    const mipThisMonth = balance * monthlyMIPRate;

    if (principalThisMonth >= balance || month === n) {
      principalThisMonth = balance;
      balance = 0;
    } else {
      balance = balance - principalThisMonth;
    }

    schedule.push({
      month,
      principalPaid: principalThisMonth,
      interestPaid: interestThisMonth,
      mipPaid: mipThisMonth,
      remainingBalance: balance
    });
  }

  return {
    baseLoanAmount,
    upfrontMIP,
    totalLoanAmount,
    annualMIPRate,
    ltvRatio: parseFloat(ltvRatio.toFixed(2)),
    monthlyPI,
    monthlyMIPFirstMonth,
    totalMonthlyFirstMonth,
    schedule
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function FhaLoanCalculatorPage() {
  const [county, setCounty] = useState("Maricopa");
  const [propertyType, setPropertyType] = useState("singleFamily");

  const [homePrice, setHomePrice] = useState("350000");
  const [dpVal, setDpVal] = useState("12250");
  const [dpPct, setDpPct] = useState("3.5");
  const [lastDpMode, setLastDpMode] = useState<"amt" | "pct">("pct");
  const [interestRate, setInterestRate] = useState("6.25");
  const [loanTerm, setLoanTerm] = useState("30");

  const [result, setResult] = useState<FhaCalcResult | null>(null);
  const [validationMsg, setValidationMsg] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 24;

  const currentLimit = getFhaLoanLimit(county, propertyType);

  // Sync actions
  const handleHomePriceChange = (val: string) => {
    setHomePrice(val);
    const hp = parseFloat(val) || 0;
    if (hp > 0) {
      if (lastDpMode === "pct") {
        setDpVal(String(Math.round(hp * (parseFloat(dpPct) || 0) / 100)));
      } else {
        setDpPct(((parseFloat(dpVal) || 0) / hp * 100).toFixed(2));
      }
    }
  };

  const handleDpAmtChange = (val: string) => {
    setDpVal(val); setLastDpMode("amt");
    const hp = parseFloat(homePrice) || 0;
    if (hp > 0) setDpPct(((parseFloat(val) || 0) / hp * 100).toFixed(4));
  };

  const handleDpPctChange = (val: string) => {
    setDpPct(val); setLastDpMode("pct");
    const hp = parseFloat(homePrice) || 0;
    if (hp > 0) setDpVal(String(Math.round(hp * (parseFloat(val) || 0) / 100)));
  };

  // Perform Calculation
  const handleCalculate = () => {
    const hp = parseFloat(homePrice) || 0;
    if (hp <= 0) return;

    const rate = parseFloat(interestRate) || 0;
    let term = Math.round(parseFloat(loanTerm) || 30);
    term = Math.max(1, Math.min(30, term));

    // Dynamic down payment minimums
    const standardMin = hp * 0.035;
    const limitBasedMin = Math.max(0, hp - currentLimit);
    const minRequiredDp = Math.max(standardMin, limitBasedMin);

    const maxAllowedDp = hp * 0.90;

    let finalDp = lastDpMode === "pct"
      ? hp * (parseFloat(dpPct) || 0) / 100
      : parseFloat(dpVal) || 0;

    let warning = "";
    if (finalDp < minRequiredDp) {
      finalDp = minRequiredDp;
      setDpVal(String(Math.round(minRequiredDp)));
      setDpPct(((minRequiredDp / hp) * 100).toFixed(2));
      
      if (limitBasedMin > standardMin) {
        warning = `⚠️ Down payment adjusted to FHA loan limit requirements for this county/property-type.`;
      } else {
        warning = `⚠️ Down payment adjusted to FHA's 3.5% minimum required down payment.`;
      }
    } else if (finalDp > maxAllowedDp) {
      finalDp = maxAllowedDp;
      setDpVal(String(Math.round(maxAllowedDp)));
      setDpPct("90.00");
      warning = `⚠️ Down payment capped at the FHA maximum of 90.00% of purchase price.`;
    }

    setValidationMsg(warning);

    const r = solveFhaPayments(hp, finalDp, rate, term, currentLimit);
    setResult(r);
    setCurrentPage(0);

    setTimeout(() => {
      document.getElementById("calc-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  // Donut split percents
  const getDonutSplit = (r: FhaCalcResult) => {
    const total = r.totalMonthlyFirstMonth;
    if (total <= 0) return { pi: "0", mip: "0" };
    return {
      pi: ((r.monthlyPI / total) * 100).toFixed(1),
      mip: ((r.monthlyMIPFirstMonth / total) * 100).toFixed(1)
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
            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3 font-sans">MORTGAGE TOOLS</span>
            <h1 className="text-white text-[38px] lg:text-[52px] font-playfair font-normal leading-[1.15] mb-6">
              FHA Loan Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Check FHA loan limits by Arizona county and calculate your minimum down payment, monthly MIP, and total monthly outlays.
            </p>
          </div>
        </section>

        {/* Inputs */}
        <section className="py-12 px-6 lg:px-10 max-w-6xl mx-auto font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left box: Property Details */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-5">
                <h3 className="text-[#052316] text-[17px] font-bold pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#052316]" /> Property Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Arizona County</label>
                    <select value={county} onChange={(e) => setCounty(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3 text-[14px] font-bold text-[#052316] focus:outline-none cursor-pointer">
                      {ARIZONA_COUNTIES.map((c) => (
                        <option key={c} value={c}>{c} County</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Property Type</label>
                    <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3 text-[14px] font-bold text-[#052316] focus:outline-none cursor-pointer">
                      <option value="singleFamily">Single Family (1 Unit)</option>
                      <option value="duplex">Duplex (2 Units)</option>
                      <option value="triplex">Triplex (3 Units)</option>
                      <option value="fourplex">Fourplex (4 Units)</option>
                    </select>
                  </div>
                </div>

                <div className="bg-[#faf7f0] rounded-2xl p-4 border border-[#e8e0d0]/40 mt-1.5 text-center">
                  <span className="text-[10px] text-[#a89a70] tracking-wider uppercase font-bold">FHA Loan Limit (2026)</span>
                  <p className="text-[22px] font-bold text-[#052316] mt-0.5">{fmt(currentLimit)}</p>
                </div>
              </div>
            </div>

            {/* Right box: Loan details */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-5">
                <h3 className="text-[#052316] text-[17px] font-bold pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3fb364]" /> Loan Basics
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Home Price ($)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={homePrice} onChange={(e) => handleHomePriceChange(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 pl-7 pr-3 text-[14px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Down Payment</label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative">
                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[12px]">$</span>
                        <input type="number" value={dpVal} onChange={(e) => handleDpAmtChange(e.target.value)} onFocus={() => setLastDpMode("amt")}
                          className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 pl-5 pr-1 text-[13px] font-bold text-[#052316] focus:outline-none" />
                      </div>
                      <div className="relative">
                        <input type="number" step="0.01" value={dpPct} onChange={(e) => handleDpPctChange(e.target.value)} onFocus={() => setLastDpMode("pct")}
                          className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-2 text-[13px] font-bold text-[#052316] focus:outline-none" />
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[12px]">%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5 font-sans">Interest Rate (%)</label>
                    <div className="relative">
                      <input type="number" step="0.001" value={interestRate} onChange={(e) => setInterestRate(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3 text-[14px] font-bold text-[#052316] focus:outline-none" />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[13px]">%</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Loan Term</label>
                    <select value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3 text-[14px] font-bold text-[#052316] focus:outline-none cursor-pointer">
                      <option value="30">30 Years</option>
                      <option value="25">25 Years</option>
                      <option value="20">20 Years</option>
                      <option value="15">15 Years</option>
                      <option value="10">10 Years</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Calculate CTA */}
          <div className="mt-8 font-sans">
            <button onClick={handleCalculate}
              className="w-full bg-[#3fb364] hover:bg-[#349b55] active:scale-[0.98] text-white text-[16.5px] font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              Calculate FHA Loan Scenarios
            </button>
          </div>
        </section>

        {/* Results output section */}
        {result && (
          <section id="calc-results" className="pb-16 px-6 lg:px-10 max-w-6xl mx-auto space-y-8 animate-fadeUp font-sans">
            
            {/* Validation warning banner */}
            {validationMsg && (
              <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-3xl p-5 text-[13px] font-semibold leading-relaxed">
                {validationMsg}
              </div>
            )}

            {/* Primary output summary cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-[#052316] text-white border border-[#052316] rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[#3fb364] text-[10.5px] font-bold tracking-wider uppercase">Initial Monthly Payment</span>
                  <h2 className="text-[34px] font-bold mt-1.5">{fmt(result.totalMonthlyFirstMonth)}</h2>
                </div>
                <p className="text-[12.5px] text-[#c8c8b8] mt-3 pt-2.5 border-t border-white/10">Base P&I plus first month MIP.</p>
              </div>

              <div className="bg-white border border-[#e8e0d0]/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[#a89a70] text-[10.5px] font-bold tracking-wider uppercase">Base Loan Amount</span>
                  <h2 className="text-[34px] font-bold mt-1.5 text-[#052316]">{fmt(result.baseLoanAmount)}</h2>
                </div>
                <p className="text-[12.5px] text-[#888] mt-3 pt-2.5 border-t border-[#e8e0d0]/30">Excluding upfront mortgage insurance.</p>
              </div>

              <div className="bg-white border border-[#e8e0d0]/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[#a89a70] text-[10.5px] font-bold tracking-wider uppercase">Total Loan Financed</span>
                  <h2 className="text-[34px] font-bold mt-1.5 text-[#052316]">{fmt(result.totalLoanAmount)}</h2>
                </div>
                <p className="text-[12.5px] text-[#888] mt-3 pt-2.5 border-t border-[#e8e0d0]/30">Includes 1.75% upfront MIP financed.</p>
              </div>
            </div>

            {/* Split Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left: Summary list */}
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-[#052316] text-[16px] font-bold mb-4 pb-3 border-b border-[#e8e0d0]/40 font-sans">FHA Loan Summary</h3>
                  <div className="flex flex-col gap-3 text-[13.5px]">
                    <div className="flex justify-between border-b border-[#e8e0d0]/20 pb-2">
                      <span className="text-[#888]">Base Loan Amount</span>
                      <span className="text-[#052316] font-bold">{fmt(result.baseLoanAmount)}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#e8e0d0]/20 pb-2">
                      <span className="text-[#888] font-sans">Upfront MIP (1.75%)</span>
                      <span className="text-[#052316] font-bold">{fmt(result.upfrontMIP)}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#e8e0d0]/20 pb-2">
                      <span className="text-[#888]">Total Loan Amount (Financed)</span>
                      <span className="text-[#052316] font-bold">{fmt(result.totalLoanAmount)}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#e8e0d0]/20 pb-2">
                      <span className="text-[#888]">LTV Ratio</span>
                      <span className="text-[#052316] font-bold">{result.ltvRatio}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#888] font-sans">Annual MIP Rate</span>
                      <span className="text-[#3fb364] font-bold">{result.annualMIPRate.toFixed(2)}%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#faf7f0] rounded-2xl p-4 border border-[#e8e0d0]/40 mt-5 flex justify-between font-bold text-[#052316] text-[14.5px]">
                  <span>Initial Month 1 Payment</span>
                  <span>{fmt(result.totalMonthlyFirstMonth)}/mo</span>
                </div>
              </div>

              {/* Right: Donut chart */}
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm flex flex-col justify-between items-center text-center">
                <div className="w-full text-left">
                  <h3 className="text-[#052316] text-[16px] font-bold pb-3 border-b border-[#e8e0d0]/40 font-sans">Monthly payment split</h3>
                </div>

                <div className="relative w-40 h-40 my-6">
                  <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                    <circle cx="100" cy="100" r="70" fill="none" stroke="#fcf9f3" strokeWidth="16" />
                    {/* Principal & Interest segment */}
                    <circle cx="100" cy="100" r="70" fill="none" stroke="#052316" strokeWidth="16"
                      strokeDasharray={`${2 * Math.PI * 70 * (parseFloat(getDonutSplit(result).pi) / 100)} ${2 * Math.PI * 70}`} />
                    {/* MIP segment */}
                    <circle cx="100" cy="100" r="70" fill="none" stroke="#3fb364" strokeWidth="16"
                      strokeDasharray={`${2 * Math.PI * 70 * (parseFloat(getDonutSplit(result).mip) / 100)} ${2 * Math.PI * 70}`}
                      strokeDashoffset={`-{2 * Math.PI * 70 * (parseFloat(getDonutSplit(result).pi) / 100)}`} />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#888]">Monthly</span>
                    <span className="text-[15.5px] font-bold text-[#052316]">{fmt(result.totalMonthlyFirstMonth)}</span>
                  </div>
                </div>

                <div className="flex gap-6 text-[12px] font-sans pt-1">
                  <div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 rounded bg-[#052316]" /> <span>P&I ({getDonutSplit(result).pi}%)</span></div>
                  <div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 rounded bg-[#3fb364]" /> <span>FHA MIP ({getDonutSplit(result).mip}%)</span></div>
                </div>
              </div>
            </div>

            {/* Amortization schedule table */}
            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 shadow-sm overflow-hidden font-sans">
              <div className="px-7 py-5 border-b border-[#e8e0d0]/40 flex justify-between items-center">
                <div>
                  <h3 className="text-[#052316] text-[16.5px] font-bold">FHA Amortization Schedule</h3>
                  <p className="text-[#888] text-[12px] mt-0.5">Month-by-month payoff schedule, including monthly MIP reduction.</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-[12.5px]">
                  <thead>
                    <tr className="bg-[#052316] text-white">
                      {["Month", "Principal Paid", "Interest Paid", "MIP Paid", "Remaining Balance"].map((h) => (
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
                        <td className="py-2.5 px-4 text-red-500">{fmt(row.mipPaid)}</td>
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
                  <h4 className="text-[18px] font-bold mb-1">Looking to apply for an FHA loan?</h4>
                  <p className="text-[#c8c8b8] text-[13.5px]">Get in touch with the Knoell team for a complete review of your FHA loan options.</p>
                </div>
                <Link href="/#get-pre-approved"
                  className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all shadow-md whitespace-nowrap">
                  Connect With Us →
                </Link>
              </div>
            </div>

          </section>
        )}

        {/* Placeholder */}
        {!result && (
          <section className="pb-16 px-6 lg:px-10 max-w-3xl mx-auto text-center font-sans">
            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-10 lg:p-14 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-[#3fb364]/10 flex items-center justify-center mx-auto mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="3" x2="9" y2="21" />
                </svg>
              </div>
              <h3 className="text-[#052316] text-[20px] font-bold mb-2">Check FHA Limits & Payments</h3>
              <p className="text-[#888] text-[14.5px] leading-relaxed max-w-md mx-auto font-sans">
                Fill in your home details and pricing expectations, then click <strong>&ldquo;Calculate FHA Loan Scenarios&rdquo;</strong> to view detailed metrics.
              </p>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
