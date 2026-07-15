"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

interface ScenarioResult {
  scenarioName: string;
  homePrice: number;
  loanAmount: number;
  monthlyPI: number;
  propertyTax: number;
  homeownersInsurance: number;
  monthlyPMI: number;
  totalHousingPayment: number;
  existingDebts: number;
  totalMonthlyDebt: number;
  resultingDTI: number;
  targetDTI: number;
  downPaymentPct: number;
}

const emptyResult = (name: string, dti: number, debts: number): ScenarioResult => ({
  scenarioName: name,
  homePrice: 0,
  loanAmount: 0,
  monthlyPI: 0,
  propertyTax: 0,
  homeownersInsurance: 0,
  monthlyPMI: 0,
  totalHousingPayment: 0,
  existingDebts: debts,
  totalMonthlyDebt: debts,
  resultingDTI: 0,
  targetDTI: dti,
  downPaymentPct: 0,
});

export default function MortgageAffordabilityCalculatorPage() {
  const [grossIncome, setGrossIncome] = useState<string>("8000");
  const [incomePeriod, setIncomePeriod] = useState<"monthly" | "annual">("monthly");
  const [debts, setDebts] = useState<string>("500");
  const [downPayment, setDownPayment] = useState<string>("20000");
  const [interestRate, setInterestRate] = useState<string>("6.5");
  const [loanTerm, setLoanTerm] = useState<string>("30");

  const [propertyTaxType, setPropertyTaxType] = useState<"fixed" | "percent">("percent");
  const [propertyTaxVal, setPropertyTaxVal] = useState<string>("1.25");
  const [insuranceType, setInsuranceType] = useState<"fixed" | "percent">("percent");
  const [insuranceVal, setInsuranceVal] = useState<string>("0.35");
  const [pmiType, setPmiType] = useState<"fixed" | "percent" | "none">("percent");
  const [pmiVal, setPmiVal] = useState<string>("0.5");

  const [results, setResults] = useState<{
    conservative: ScenarioResult;
    moderate: ScenarioResult;
    aggressive: ScenarioResult;
  } | null>(null);

  const [selectedDtiTab, setSelectedDtiTab] = useState<"conservative" | "moderate" | "aggressive">("aggressive");
  const [showResults, setShowResults] = useState(false);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(val);

  const solveScenario = useCallback(
    (
      scenarioName: string,
      targetDtiRatio: number,
      monthlyIncome: number,
      extDebts: number,
      dp: number,
      rate: number,
      termYears: number,
      taxType: string,
      taxVal: number,
      insType: string,
      insVal: number,
      pType: string,
      pVal: number
    ): ScenarioResult => {
      const numPayments = termYears * 12;
      const monthlyRate = rate / 100 / 12;
      const maxTotalDebt = monthlyIncome * targetDtiRatio;
      const maxHousingPayment = Math.max(0, maxTotalDebt - extDebts);

      if (monthlyIncome <= 0 || maxHousingPayment <= 0) {
        return emptyResult(scenarioName, targetDtiRatio * 100, extDebts);
      }

      let H = dp + maxHousingPayment * 120;
      let H_prev = 0;
      let loanAmount = 0;
      let monthlyPI = 0;
      let propertyTax = 0;
      let monthlyIns = 0;
      let monthlyPMI = 0;

      for (let i = 0; i < 100; i++) {
        H_prev = H;
        propertyTax = taxType === "percent" ? (H * (taxVal / 100)) / 12 : Math.max(0, taxVal);
        monthlyIns = insType === "percent" ? (H * (insVal / 100)) / 12 : Math.max(0, insVal);
        loanAmount = Math.max(0, H - dp);
        const dpPct = H > 0 ? (dp / H) * 100 : 0;

        if (dpPct < 20 && pType !== "none") {
          monthlyPMI = pType === "percent" ? (loanAmount * (pVal / 100)) / 12 : Math.max(0, pVal);
        } else {
          monthlyPMI = 0;
        }

        monthlyPI = Math.max(0, maxHousingPayment - propertyTax - monthlyIns - monthlyPMI);

        if (monthlyPI <= 0) {
          loanAmount = 0;
        } else {
          loanAmount = monthlyRate === 0
            ? monthlyPI * numPayments
            : monthlyPI * (1 - Math.pow(1 + monthlyRate, -numPayments)) / monthlyRate;
        }

        H = loanAmount + dp;
        if (Math.abs(H - H_prev) < 0.005) break;
      }

      if (monthlyPI <= 0 || loanAmount <= 0) {
        return emptyResult(scenarioName, targetDtiRatio * 100, extDebts);
      }

      const totalHousing = monthlyPI + propertyTax + monthlyIns + monthlyPMI;
      const totalDebt = extDebts + totalHousing;
      const resultingDTI = monthlyIncome > 0 ? (totalDebt / monthlyIncome) * 100 : 0;
      const dpPctFinal = H > 0 ? (dp / H) * 100 : 0;

      return { scenarioName, homePrice: H, loanAmount, monthlyPI, propertyTax, homeownersInsurance: monthlyIns, monthlyPMI, totalHousingPayment: totalHousing, existingDebts: extDebts, totalMonthlyDebt: totalDebt, resultingDTI, targetDTI: targetDtiRatio * 100, downPaymentPct: dpPctFinal };
    },
    []
  );

  const handleCalculate = () => {
    const rawIncome = parseFloat(grossIncome) || 0;
    const monthlyIncome = incomePeriod === "annual" ? rawIncome / 12 : rawIncome;
    const extDebts = Math.max(0, parseFloat(debts) || 0);
    const dp = Math.max(0, parseFloat(downPayment) || 0);
    const rate = Math.max(0, parseFloat(interestRate) || 0);
    let termYears = Math.round(parseFloat(loanTerm) || 30);
    if (termYears < 1) termYears = 1;
    if (termYears > 30) termYears = 30;

    const taxVal = parseFloat(propertyTaxVal) || 0;
    const insVal = parseFloat(insuranceVal) || 0;
    const pVal = parseFloat(pmiVal) || 0;

    const conservative = solveScenario("Conservative", 0.30, monthlyIncome, extDebts, dp, rate, termYears, propertyTaxType, taxVal, insuranceType, insVal, pmiType, pVal);
    const moderate = solveScenario("Moderate", 0.40, monthlyIncome, extDebts, dp, rate, termYears, propertyTaxType, taxVal, insuranceType, insVal, pmiType, pVal);
    const aggressive = solveScenario("Aggressive", 0.48, monthlyIncome, extDebts, dp, rate, termYears, propertyTaxType, taxVal, insuranceType, insVal, pmiType, pVal);

    setResults({ conservative, moderate, aggressive });
    setShowResults(true);

    setTimeout(() => {
      document.getElementById("affordability-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const primaryResult = results
    ? selectedDtiTab === "conservative"
      ? results.conservative
      : selectedDtiTab === "moderate"
        ? results.moderate
        : results.aggressive
    : null;

  const maxScenarioHomePrice = results
    ? Math.max(results.conservative.homePrice, results.moderate.homePrice, results.aggressive.homePrice, 1)
    : 1;

  const barPercent = (val: number, max: number) => (max <= 0 ? 0 : Math.min(100, (val / max) * 100));

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />
      <main className="flex-grow">
        {/* Banner */}
        <section className="w-full bg-[#052316] text-white py-16 lg:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5 opacity-40"></div>
            <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5 opacity-40"></div>
          </div>
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3 font-sans">MORTGAGE TOOLS</span>
            <h1 className="text-white text-[38px] lg:text-[52px] font-playfair font-normal leading-[1.15] mb-6">
              Mortgage Affordability Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Enter your financial details below, then hit &ldquo;Calculate&rdquo; to discover how much home you can afford under three different risk scenarios.
            </p>
          </div>
        </section>

        {/* Inputs */}
        <section className="py-12 px-6 lg:px-10 max-w-5xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-6">
              <h3 className="text-[#052316] text-[18px] font-bold pb-3 border-b border-[#e8e0d0]/40">1. Financial Profile</h3>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[#052316] text-[14px] font-semibold">Gross Income</label>
                  <div className="flex bg-[#fcf9f3] border border-[#e8e0d0] rounded-lg p-0.5 text-[12px] font-semibold font-sans">
                    <button onClick={() => setIncomePeriod("monthly")} className={`px-3 py-1 rounded-md transition-all cursor-pointer ${incomePeriod === "monthly" ? "bg-[#052316] text-white shadow-sm" : "text-[#4e5b4e]"}`}>Monthly</button>
                    <button onClick={() => setIncomePeriod("annual")} className={`px-3 py-1 rounded-md transition-all cursor-pointer ${incomePeriod === "annual" ? "bg-[#052316] text-white shadow-sm" : "text-[#4e5b4e]"}`}>Annual</button>
                  </div>
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888] text-[15px] font-semibold">$</span>
                  <input type="number" value={grossIncome} onChange={(e) => setGrossIncome(e.target.value)}
                    className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-4 text-[15px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30 focus:border-[#3fb364]"
                    placeholder="e.g. 8000" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[#052316] text-[14px] font-semibold">Monthly Debts</label>
                  <span className="text-[#a89a70] text-[11px] font-medium uppercase tracking-wider font-sans">Auto, Credit Cards, Student Loans</span>
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888] text-[15px] font-semibold">$</span>
                  <input type="number" value={debts} onChange={(e) => setDebts(e.target.value)}
                    className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-4 text-[15px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30 focus:border-[#3fb364]"
                    placeholder="e.g. 500" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="text-[#052316] text-[14px] font-semibold block mb-2">Down Payment ($)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888] text-[15px] font-semibold">$</span>
                    <input type="number" value={downPayment} onChange={(e) => setDownPayment(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-4 text-[15px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30 focus:border-[#3fb364]" />
                  </div>
                </div>
                <div>
                  <label className="text-[#052316] text-[14px] font-semibold block mb-2">Interest Rate (%)</label>
                  <div className="relative">
                    <input type="number" step="0.125" value={interestRate} onChange={(e) => setInterestRate(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 px-4 text-[15px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30 focus:border-[#3fb364]" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888] text-[15px] font-semibold">%</span>
                  </div>
                </div>
                <div>
                  <label className="text-[#052316] text-[14px] font-semibold block mb-2">Loan Term (Years)</label>
                  <input type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)}
                    className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 px-4 text-[15px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30 focus:border-[#3fb364]" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-6">
              <h3 className="text-[#052316] text-[18px] font-bold pb-3 border-b border-[#e8e0d0]/40">2. Escrow & PMI Assumptions</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div>
                  <label className="text-[#052316] text-[14px] font-semibold block mb-1">Property Tax</label>
                  <p className="text-[12px] text-[#888]">Annual percentage of home value or fixed monthly amount.</p>
                </div>
                <div className="flex items-center gap-3">
                  <select value={propertyTaxType} onChange={(e) => setPropertyTaxType(e.target.value as "fixed" | "percent")}
                    className="bg-white border border-[#e8e0d0] rounded-xl p-3 text-[14px] font-semibold text-[#052316] focus:outline-none cursor-pointer">
                    <option value="percent">Annual %</option>
                    <option value="fixed">Monthly $</option>
                  </select>
                  <div className="relative flex-grow">
                    <input type="number" step="0.01" value={propertyTaxVal} onChange={(e) => setPropertyTaxVal(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-4 text-[14px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30 focus:border-[#3fb364]" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888] text-[14px]">{propertyTaxType === "percent" ? "%" : "$"}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div>
                  <label className="text-[#052316] text-[14px] font-semibold block mb-1">Homeowners Insurance</label>
                  <p className="text-[12px] text-[#888]">Annual percentage of home value or fixed monthly amount.</p>
                </div>
                <div className="flex items-center gap-3">
                  <select value={insuranceType} onChange={(e) => setInsuranceType(e.target.value as "fixed" | "percent")}
                    className="bg-white border border-[#e8e0d0] rounded-xl p-3 text-[14px] font-semibold text-[#052316] focus:outline-none cursor-pointer">
                    <option value="percent">Annual %</option>
                    <option value="fixed">Monthly $</option>
                  </select>
                  <div className="relative flex-grow">
                    <input type="number" step="0.01" value={insuranceVal} onChange={(e) => setInsuranceVal(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-4 text-[14px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30 focus:border-[#3fb364]" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888] text-[14px]">{insuranceType === "percent" ? "%" : "$"}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div>
                  <label className="text-[#052316] text-[14px] font-semibold block mb-1">PMI (Private Mortgage Insurance)</label>
                  <p className="text-[12px] text-[#888]">Required if down payment is less than 20%.</p>
                </div>
                <div className="flex items-center gap-3">
                  <select value={pmiType} onChange={(e) => setPmiType(e.target.value as "fixed" | "percent" | "none")}
                    className="bg-white border border-[#e8e0d0] rounded-xl p-3 text-[14px] font-semibold text-[#052316] focus:outline-none cursor-pointer">
                    <option value="percent">Annual %</option>
                    <option value="fixed">Monthly $</option>
                    <option value="none">No PMI</option>
                  </select>
                  {pmiType !== "none" && (
                    <div className="relative flex-grow">
                      <input type="number" step="0.01" value={pmiVal} onChange={(e) => setPmiVal(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-4 text-[14px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30 focus:border-[#3fb364]" />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888] text-[14px]">{pmiType === "percent" ? "%" : "$"}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <button onClick={handleCalculate}
              className="w-full bg-[#3fb364] hover:bg-[#349b55] active:scale-[0.98] text-white text-[17px] font-bold py-4.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="10" y2="10" /><line x1="12" y1="10" x2="14" y2="10" /><line x1="8" y1="14" x2="10" y2="14" /><line x1="12" y1="14" x2="14" y2="14" /><line x1="8" y1="18" x2="10" y2="18" /><line x1="12" y1="18" x2="16" y2="18" />
              </svg>
              Calculate My Affordability
            </button>
          </div>
        </section>

        {/* Results */}
        {showResults && results && primaryResult && (
          <section id="affordability-results" className="pb-16 px-6 lg:px-10 max-w-7xl mx-auto animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm">
                  <h3 className="text-[#052316] text-[18px] font-bold mb-6 pb-3 border-b border-[#e8e0d0]/40 font-sans">Affordability Scenarios Comparison</h3>
                  <div className="flex flex-col gap-6">
                    <div>
                      <div className="flex items-center justify-between text-[13.5px] font-bold mb-2">
                        <span className="text-[#888] uppercase tracking-wide">Conservative (30% DTI)</span>
                        <span className="text-[#052316]">{formatCurrency(results.conservative.homePrice)}</span>
                      </div>
                      <div className="w-full h-3.5 rounded-full bg-[#fcf9f3] border border-[#e8e0d0]/40 overflow-hidden">
                        <div className="h-full bg-yellow-500 rounded-full transition-all duration-700 ease-out" style={{ width: `${barPercent(results.conservative.homePrice, maxScenarioHomePrice)}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-[13.5px] font-bold mb-2">
                        <span className="text-[#888] uppercase tracking-wide">Moderate (40% DTI)</span>
                        <span className="text-[#052316]">{formatCurrency(results.moderate.homePrice)}</span>
                      </div>
                      <div className="w-full h-3.5 rounded-full bg-[#fcf9f3] border border-[#e8e0d0]/40 overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full transition-all duration-700 ease-out" style={{ width: `${barPercent(results.moderate.homePrice, maxScenarioHomePrice)}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-[13.5px] font-bold mb-2">
                        <span className="text-[#888] uppercase tracking-wide">Aggressive (48% DTI)</span>
                        <span className="text-[#052316]">{formatCurrency(results.aggressive.homePrice)}</span>
                      </div>
                      <div className="w-full h-3.5 rounded-full bg-[#fcf9f3] border border-[#e8e0d0]/40 overflow-hidden">
                        <div className="h-full bg-[#3fb364] rounded-full transition-all duration-700 ease-out" style={{ width: `${barPercent(results.aggressive.homePrice, maxScenarioHomePrice)}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-[#e8e0d0]/40 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-3">
                      <span className="text-yellow-600 text-[18px] font-bold">30%</span>
                    </div>
                    <h4 className="text-[#052316] text-[14px] font-bold mb-1.5 font-sans">Conservative</h4>
                    <p className="text-[12.5px] text-[#888] leading-relaxed">Safest budget limit. Provides maximum protection against income changes and unexpected expenses.</p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-[#e8e0d0]/40 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-3">
                      <span className="text-blue-600 text-[18px] font-bold">40%</span>
                    </div>
                    <h4 className="text-[#052316] text-[14px] font-bold mb-1.5 font-sans">Moderate</h4>
                    <p className="text-[12.5px] text-[#888] leading-relaxed">Standard boundary for most conventional lenders. Balanced approach between comfort and purchasing power.</p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-[#e8e0d0]/40 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-[#3fb364]/10 flex items-center justify-center mb-3">
                      <span className="text-[#3fb364] text-[18px] font-bold">48%</span>
                    </div>
                    <h4 className="text-[#052316] text-[14px] font-bold mb-1.5 font-sans">Aggressive</h4>
                    <p className="text-[12.5px] text-[#888] leading-relaxed">Upper threshold allowed by automated underwriting systems like Fannie Mae&apos;s Desktop Underwriter.</p>
                  </div>
                </div>

                <div className="bg-[#052316] rounded-3xl p-6 lg:p-8 text-white relative overflow-hidden shadow-md">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -bottom-20 -right-20 w-[200px] h-[200px] rounded-full border border-white/5 opacity-40"></div>
                  </div>
                  <div className="relative z-10 font-sans">
                    <h4 className="text-[18px] font-bold mb-2">Ready for a verified pre-approval?</h4>
                    <p className="text-[#c8c8b8] text-[13.5px] leading-relaxed mb-5">Skip the estimates. Get a fully underwritten pre-approval from the Knoell team &mdash; typically closed in just 24 days.</p>
                    <Link href="/#get-pre-approved" className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all shadow-md">
                      Start Pre-Approval <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-white border border-[#e8e0d0]/60 rounded-2xl p-1.5 flex gap-1 shadow-sm font-sans">
                  <button onClick={() => setSelectedDtiTab("conservative")} className={`flex-1 py-3 text-[13px] font-bold rounded-xl transition-all cursor-pointer ${selectedDtiTab === "conservative" ? "bg-yellow-500 text-white shadow-sm" : "text-[#4e5b4e] hover:bg-[#fcf9f3]"}`}>30% DTI</button>
                  <button onClick={() => setSelectedDtiTab("moderate")} className={`flex-1 py-3 text-[13px] font-bold rounded-xl transition-all cursor-pointer ${selectedDtiTab === "moderate" ? "bg-blue-500 text-white shadow-sm" : "text-[#4e5b4e] hover:bg-[#fcf9f3]"}`}>40% DTI</button>
                  <button onClick={() => setSelectedDtiTab("aggressive")} className={`flex-1 py-3 text-[13px] font-bold rounded-xl transition-all cursor-pointer ${selectedDtiTab === "aggressive" ? "bg-[#3fb364] text-white shadow-sm" : "text-[#4e5b4e] hover:bg-[#fcf9f3]"}`}>48% DTI</button>
                </div>

                <div className="bg-[#faf7f0] border border-[#e8e0d0]/60 rounded-3xl p-6 lg:p-8 shadow-md flex flex-col font-sans">
                  <span className="text-[#a89a70] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">MAXIMUM AFFORDABLE HOME PRICE</span>
                  <h2 className="text-[#052316] text-[40px] lg:text-[48px] font-bold leading-none tracking-tight mb-6">{formatCurrency(primaryResult.homePrice)}</h2>

                  <div className="flex flex-col gap-3 pb-5 border-b border-[#e8e0d0]/60 mb-5">
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-[#888]">Maximum Loan Financed</span>
                      <span className="text-[#052316] font-bold">{formatCurrency(primaryResult.loanAmount)}</span>
                    </div>
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-[#888]">Down Payment Applied</span>
                      <span className="text-[#052316] font-bold">{formatCurrency(parseFloat(downPayment) || 0)}</span>
                    </div>
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-[#888]">Down Payment %</span>
                      <span className="text-[#052316] font-bold">{primaryResult.downPaymentPct.toFixed(2)}%</span>
                    </div>
                  </div>

                  <span className="text-[#a89a70] text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">MONTHLY PAYMENT BREAKDOWN</span>
                  <div className="flex flex-col gap-3 pb-5 border-b border-[#e8e0d0]/60 mb-5">
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-[#888]">Principal & Interest</span>
                      <span className="text-[#052316] font-bold">{formatCurrency(primaryResult.monthlyPI)}</span>
                    </div>
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-[#888]">Property Taxes</span>
                      <span className="text-[#052316] font-bold">{formatCurrency(primaryResult.propertyTax)}</span>
                    </div>
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-[#888]">Homeowners Insurance</span>
                      <span className="text-[#052316] font-bold">{formatCurrency(primaryResult.homeownersInsurance)}</span>
                    </div>
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-[#888]">PMI</span>
                      <span className="text-[#052316] font-bold">{formatCurrency(primaryResult.monthlyPMI)}</span>
                    </div>
                    <div className="flex items-center justify-between text-[15px] font-bold text-[#052316] pt-1.5 border-t border-[#e8e0d0]/40">
                      <span>Total Housing Payment</span>
                      <span>{formatCurrency(primaryResult.totalHousingPayment)}</span>
                    </div>
                  </div>

                  <span className="text-[#a89a70] text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">DEBT-TO-INCOME ANALYSIS</span>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-[#888]">Other Monthly Debts</span>
                      <span className="text-[#052316] font-bold">{formatCurrency(primaryResult.existingDebts)}</span>
                    </div>
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-[#888]">Total Monthly Obligations</span>
                      <span className="text-[#052316] font-bold">{formatCurrency(primaryResult.totalMonthlyDebt)}</span>
                    </div>
                    <div className="flex items-center justify-between text-[15px] font-bold pt-1.5 border-t border-[#e8e0d0]/40">
                      <span className="text-[#052316]">Resulting DTI</span>
                      <span className="text-[#3fb364]">{primaryResult.resultingDTI.toFixed(2)}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Placeholder */}
        {!showResults && (
          <section className="pb-16 px-6 lg:px-10 max-w-3xl mx-auto text-center font-sans">
            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-10 lg:p-14 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-[#3fb364]/10 flex items-center justify-center mx-auto mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="10" y2="10" /><line x1="12" y1="10" x2="14" y2="10" /><line x1="8" y1="14" x2="10" y2="14" /><line x1="12" y1="14" x2="14" y2="14" /><line x1="8" y1="18" x2="10" y2="18" /><line x1="12" y1="18" x2="16" y2="18" />
                </svg>
              </div>
              <h3 className="text-[#052316] text-[20px] font-bold mb-2">Enter Your Details Above</h3>
              <p className="text-[#888] text-[14.5px] leading-relaxed max-w-md mx-auto">
                Fill in your financial information, then click <strong>&ldquo;Calculate My Affordability&rdquo;</strong> to see your maximum home price under three DTI scenarios.
              </p>
            </div>
          </section>
        )}
      </main>

      <style jsx>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeInUp 0.5s ease-out both; }
      `}</style>
      <Footer />
    </div>
  );
}
