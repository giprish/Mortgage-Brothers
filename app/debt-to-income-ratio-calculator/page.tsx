"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

// ─── Interfaces ──────────────────────────────────────────────────────────────

interface DtiResult {
  monthlyGrossIncome: number;
  monthlyHousingExpenses: number;
  otherMonthlyDebts: number;
  frontEndDti: number | null; // null if income is 0
  backEndDti: number | null;  // null if income is 0
  excessDebt: number;         // Amount to reduce to get back-end DTI to 48%
}

// ─── Calculation Solver ────────────────────────────────────────────────────────

function solveDti(
  primaryIncome: number,
  additionalIncome: number,
  mortgagePayment: number,
  propertyTaxes: number,
  homeInsurance: number,
  hoaFees: number,
  carLoans: number,
  creditCards: number,
  studentLoans: number,
  otherDebts: number
): DtiResult {
  const monthlyGrossIncome = Math.max(0, primaryIncome + additionalIncome);
  const monthlyHousingExpenses = Math.max(0, mortgagePayment + propertyTaxes + homeInsurance + hoaFees);
  const otherMonthlyDebts = Math.max(0, carLoans + creditCards + studentLoans + otherDebts);

  let frontEndDti: number | null = null;
  let backEndDti: number | null = null;
  let excessDebt = 0;

  if (monthlyGrossIncome > 0) {
    frontEndDti = (monthlyHousingExpenses / monthlyGrossIncome) * 100;
    backEndDti = ((monthlyHousingExpenses + otherMonthlyDebts) / monthlyGrossIncome) * 100;
    
    if (backEndDti > 48) {
      excessDebt = (monthlyHousingExpenses + otherMonthlyDebts) - (monthlyGrossIncome * 0.48);
    }
  }

  return {
    monthlyGrossIncome,
    monthlyHousingExpenses,
    otherMonthlyDebts,
    frontEndDti,
    backEndDti,
    excessDebt: Math.max(0, Math.round(excessDebt))
  };
}

// Helper to format currency
const fmt = (v: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Math.round(v));

// ─── Recommendation Bands lookup ──────────────────────────────────────────────

function getDtiBand(backEndDti: number | null): { title: string; desc: string; colorClass: string; barColor: string } {
  if (backEndDti === null) {
    return {
      title: "Not Calculable",
      desc: "Please enter your monthly income to get qualifying guidance.",
      colorClass: "text-[#888] bg-gray-50 border-gray-200",
      barColor: "bg-gray-400"
    };
  }

  if (backEndDti <= 36.00) {
    return {
      title: "Excellent position",
      desc: "Likely to qualify for most conventional, FHA, and VA loan programs at standard terms and the best available pricing.",
      colorClass: "text-green-800 bg-green-50 border-green-200",
      barColor: "bg-[#3fb364]"
    };
  }
  if (backEndDti <= 43.00) {
    return {
      title: "Good position",
      desc: "Typically still qualifies for conventional and FHA financing; some conventional programs allow ratios in this range with strong compensating factors (credit score, reserves, down payment).",
      colorClass: "text-[#052316] bg-[#faf7f0] border-[#e8e0d0]",
      barColor: "bg-[#b89a5a]"
    };
  }
  if (backEndDti <= 50.00) {
    return {
      title: "Qualifies with compensating factors",
      desc: "FHA and VA loans may accept ratios in this range with strong compensating factors (residual income, cash reserves, minimal payment shock, high credit score); conventional financing becomes harder to obtain without an automated-underwriting approval.",
      colorClass: "text-amber-800 bg-amber-50 border-amber-200",
      barColor: "bg-amber-500"
    };
  }
  return {
    title: "Likely does not meet standard program limits",
    desc: "Most loan programs cap back-end DTI at or near 50%; qualification at this level generally requires significant compensating factors or is unlikely without reducing debt or increasing income.",
    colorClass: "text-red-800 bg-red-50 border-red-200",
    barColor: "bg-red-600"
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function DtiCalculatorPage() {
  // Income State
  const [primaryIncome, setPrimaryIncome] = useState("6000");
  const [additionalIncome, setAdditionalIncome] = useState("1000");

  // Housing Expense State
  const [mortgagePayment, setMortgagePayment] = useState("1500");
  const [propertyTaxes, setPropertyTaxes] = useState("200");
  const [homeInsurance, setHomeInsurance] = useState("100");
  const [hoaFees, setHoaFees] = useState("0");

  // Other Monthly Debts State
  const [carLoans, setCarLoans] = useState("350");
  const [creditCards, setCreditCards] = useState("150");
  const [studentLoans, setStudentLoans] = useState("0");
  const [otherDebts, setOtherDebts] = useState("0");

  // Result State
  const [result, setResult] = useState<DtiResult | null>(null);

  const handleCalculate = () => {
    const pInc = Math.max(0, parseFloat(primaryIncome) || 0);
    const aInc = Math.max(0, parseFloat(additionalIncome) || 0);

    const mort = Math.max(0, parseFloat(mortgagePayment) || 0);
    const tax = Math.max(0, parseFloat(propertyTaxes) || 0);
    const ins = Math.max(0, parseFloat(homeInsurance) || 0);
    const hoaVal = Math.max(0, parseFloat(hoaFees) || 0);

    const car = Math.max(0, parseFloat(carLoans) || 0);
    const cc = Math.max(0, parseFloat(creditCards) || 0);
    const student = Math.max(0, parseFloat(studentLoans) || 0);
    const other = Math.max(0, parseFloat(otherDebts) || 0);

    const r = solveDti(pInc, aInc, mort, tax, ins, hoaVal, car, cc, student, other);
    setResult(r);

    setTimeout(() => {
      document.getElementById("dti-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const getNarrativeGuidance = (r: DtiResult) => {
    if (r.frontEndDti === null || r.backEndDti === null) return [];

    const recommendations: string[] = [];

    // Front-End check
    if (r.frontEndDti > 40) {
      recommendations.push(`⚠️ Your Front-End DTI of ${r.frontEndDti.toFixed(2)}% exceeds the 40% guideline. Housing costs alone occupy a large portion of your monthly income.`);
    } else if (r.frontEndDti >= 38) {
      recommendations.push(`ℹ️ Your Front-End DTI of ${r.frontEndDti.toFixed(2)}% is very close (within 2%) to the 40% guideline boundary.`);
    } else {
      recommendations.push(`✅ Your housing expenses are well within standard parameters (${r.frontEndDti.toFixed(2)}% vs 40% target).`);
    }

    // Back-End check
    if (r.backEndDti > 48) {
      recommendations.push(`⚠️ Your Back-End DTI of ${r.backEndDti.toFixed(2)}% exceeds the 48% guideline limit.`);
      recommendations.push(`💡 To bring your back-end ratio back down to exactly 48.00%, you need to reduce other monthly debts or housing costs by approximately ${fmt(r.excessDebt)} per month.`);
    } else if (r.backEndDti >= 46) {
      recommendations.push(`ℹ️ Your Back-End DTI of ${r.backEndDti.toFixed(2)}% is approaching the 48% guideline boundary (within 2%).`);
    } else {
      recommendations.push(`✅ Your total debt obligations are well balanced (${r.backEndDti.toFixed(2)}% vs 48% guideline).`);
    }

    // Borderline checks / Headroom
    if (r.frontEndDti < 38 && r.backEndDti < 46) {
      recommendations.push("🎉 Excellent positioning! Both of your debt-to-income ratios have healthy headroom, putting you in a strong qualification state.");
    } else if (r.frontEndDti > 40 && r.backEndDti <= 48) {
      recommendations.push("💡 Note: While your overall debt profile is within limits, your housing costs specifically are the primary limiting factor.");
    }

    return recommendations;
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3] font-sans">
      <Navbar />
      <main className="flex-grow">

        {/* Hero */}
        <section className="w-full bg-[#052316] text-white py-16 lg:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5 opacity-40" />
            <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5 opacity-40" />
          </div>
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3 font-sans">MORTGAGE TOOLS</span>
            <h1 className="text-white text-[38px] lg:text-[52px] font-playfair font-normal leading-[1.15] mb-6">
              Debt-to-Income (DTI) Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Analyze your front-end (housing) and back-end (total obligation) DTI ratios to evaluate your purchasing qualification status.
            </p>
          </div>
        </section>

        {/* Inputs */}
        <section className="py-12 px-6 lg:px-10 max-w-6xl mx-auto font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Monthly Income & Housing */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              {/* MONTHLY INCOME */}
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-5">
                <h3 className="text-[#052316] text-[17px] font-bold pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#052316]" /> Monthly Income
                </h3>

                <div>
                  <label className="text-[#052316] text-[13px] font-semibold block mb-1.5 font-sans">Primary Job Income (gross $/mo)</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                    <input type="number" value={primaryIncome} onChange={(e) => setPrimaryIncome(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-3 text-[14.5px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30" />
                  </div>
                </div>

                <div>
                  <label className="text-[#052316] text-[13px] font-semibold block mb-1.5 font-sans">Additional Income ($/mo)</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                    <input type="number" value={additionalIncome} onChange={(e) => setAdditionalIncome(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-3 text-[14.5px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30" />
                  </div>
                </div>
              </div>

              {/* MONTHLY HOUSING EXPENSES */}
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-5">
                <h3 className="text-[#052316] text-[17px] font-bold pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#b89a5a]" /> Monthly Housing Expenses
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Mortgage P&I ($)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={mortgagePayment} onChange={(e) => setMortgagePayment(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 pl-7 pr-3 text-[14px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Property Taxes ($)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={propertyTaxes} onChange={(e) => setPropertyTaxes(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 pl-7 pr-3 text-[14px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5 font-sans font-sans font-sans font-sans">Homeowners Ins ($)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={homeInsurance} onChange={(e) => setHomeInsurance(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 pl-7 pr-3 text-[14px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">HOA Fees ($)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={hoaFees} onChange={(e) => setHoaFees(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 pl-7 pr-3 text-[14px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Other Monthly Debts */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-5">
                <h3 className="text-[#052316] text-[17px] font-bold pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3fb364]" /> Other Monthly Obligations
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Car Loans/Leases ($)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={carLoans} onChange={(e) => setCarLoans(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 pl-7 pr-3 text-[14px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5 font-sans font-sans font-sans">Credit Card Min ($)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={creditCards} onChange={(e) => setCreditCards(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 pl-7 pr-3 text-[14px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5 font-sans font-sans">Student Loans ($)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={studentLoans} onChange={(e) => setStudentLoans(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 pl-7 pr-3 text-[14px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Other Debts ($)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={otherDebts} onChange={(e) => setOtherDebts(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 pl-7 pr-3 text-[14px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Calculate button */}
          <div className="mt-8 font-sans">
            <button onClick={handleCalculate}
              className="w-full bg-[#3fb364] hover:bg-[#349b55] active:scale-[0.98] text-white text-[16.5px] font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="10" y2="10" /><line x1="12" y1="10" x2="14" y2="10" /><line x1="8" y1="14" x2="10" y2="14" /><line x1="12" y1="14" x2="14" y2="14" /><line x1="8" y1="18" x2="10" y2="18" /><line x1="12" y1="18" x2="16" y2="18" />
              </svg>
              Calculate Debt-to-Income Ratios
            </button>
          </div>
        </section>

        {/* Results output section */}
        {result && (
          <section id="dti-results" className="pb-16 px-6 lg:px-10 max-w-5xl mx-auto space-y-8 animate-fadeUp">
            
            {/* Primary dials/bars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Front-End Dial */}
              <div className="bg-white border border-[#e8e0d0]/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between items-center text-center">
                <div>
                  <span className="text-[#a89a70] text-[10.5px] font-bold tracking-wider uppercase">Front-End DTI Ratio</span>
                  <h2 className="text-[44px] font-bold mt-1 text-[#052316]">
                    {result.frontEndDti !== null ? `${result.frontEndDti.toFixed(2)}%` : "N/A"}
                  </h2>
                </div>
                
                {/* Horizontal Progress Bar representation */}
                <div className="w-full bg-[#fcf9f3] border border-[#e8e0d0]/40 h-4 rounded-full mt-4 overflow-hidden relative">
                  {result.frontEndDti !== null && (
                    <div className={`h-full rounded-full transition-all duration-700 ${result.frontEndDti > 40 ? "bg-red-500" : result.frontEndDti >= 38 ? "bg-amber-500" : "bg-[#3fb364]"}`}
                      style={{ width: `${Math.min(100, result.frontEndDti)}%` }} />
                  )}
                  {/* Guideline line marker at 40% */}
                  <div className="absolute top-0 bottom-0 w-0.5 bg-[#052316] opacity-35" style={{ left: "40%" }} />
                </div>
                <div className="flex justify-between w-full text-[11px] text-[#888] mt-1.5 font-sans">
                  <span>0%</span>
                  <span className="font-bold text-[#052316]">Limit: 40%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Back-End Dial */}
              <div className="bg-white border border-[#e8e0d0]/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between items-center text-center">
                <div>
                  <span className="text-[#a89a70] text-[10.5px] font-bold tracking-wider uppercase">Back-End DTI Ratio</span>
                  <h2 className="text-[44px] font-bold mt-1 text-[#052316]">
                    {result.backEndDti !== null ? `${result.backEndDti.toFixed(2)}%` : "N/A"}
                  </h2>
                </div>

                <div className="w-full bg-[#fcf9f3] border border-[#e8e0d0]/40 h-4 rounded-full mt-4 overflow-hidden relative">
                  {result.backEndDti !== null && (
                    <div className={`h-full rounded-full transition-all duration-700 ${result.backEndDti > 48 ? "bg-red-500" : result.backEndDti >= 46 ? "bg-amber-500" : "bg-[#3fb364]"}`}
                      style={{ width: `${Math.min(100, result.backEndDti)}%` }} />
                  )}
                  {/* Guideline line marker at 48% */}
                  <div className="absolute top-0 bottom-0 w-0.5 bg-[#052316] opacity-35" style={{ left: "48%" }} />
                </div>
                <div className="flex justify-between w-full text-[11px] text-[#888] mt-1.5 font-sans">
                  <span>0%</span>
                  <span className="font-bold text-[#052316]">Limit: 48%</span>
                  <span>100%</span>
                </div>
              </div>

            </div>

            {/* Recommendations Band (Section 4) */}
            <div className={`rounded-3xl p-6 border shadow-sm ${getDtiBand(result.backEndDti).colorClass}`}>
              <h3 className="text-[17px] font-bold mb-1.5 font-sans">
                Loan Options Status: {getDtiBand(result.backEndDti).title}
              </h3>
              <p className="text-[13.5px] leading-relaxed font-sans">{getDtiBand(result.backEndDti).desc}</p>
            </div>

            {/* Narrative Guidance List (Section 4.1) */}
            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm space-y-4">
              <h3 className="text-[#052316] text-[16px] font-bold pb-2.5 border-b border-[#e8e0d0]/40">Additional Recommendations</h3>
              <div className="flex flex-col gap-3 font-sans text-[13.5px] leading-relaxed text-[#4e5b4e]">
                {getNarrativeGuidance(result).map((rec, index) => (
                  <p key={index}>{rec}</p>
                ))}
              </div>
            </div>

            {/* Income vs Debts Overview panels */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center font-sans">
              <div className="bg-[#faf7f0] rounded-2xl p-4 border border-[#e8e0d0]/40">
                <p className="text-[11px] text-[#a89a70] font-bold uppercase tracking-wide mb-1 font-sans">Monthly Gross Income</p>
                <p className="text-[20px] font-bold text-[#052316]">{fmt(result.monthlyGrossIncome)}</p>
              </div>
              <div className="bg-[#faf7f0] rounded-2xl p-4 border border-[#e8e0d0]/40">
                <p className="text-[11px] text-[#a89a70] font-bold uppercase tracking-wide mb-1 font-sans">Monthly Housing Expenses</p>
                <p className="text-[20px] font-bold text-[#052316]">{fmt(result.monthlyHousingExpenses)}</p>
              </div>
              <div className="bg-[#faf7f0] rounded-2xl p-4 border border-[#e8e0d0]/40">
                <p className="text-[11px] text-[#a89a70] font-bold uppercase tracking-wide mb-1 font-sans font-sans">Other Monthly Debts</p>
                <p className="text-[20px] font-bold text-[#052316]">{fmt(result.otherMonthlyDebts)}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#052316] rounded-3xl p-6 lg:p-8 text-white shadow-md relative overflow-hidden">
              <div className="absolute -bottom-16 -right-16 w-[200px] h-[200px] rounded-full border border-white/5 opacity-40" />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-sans">
                <div>
                  <h4 className="text-[18px] font-bold mb-1">Ready for the next step?</h4>
                  <p className="text-[#c8c8b8] text-[13.5px]">Get in touch with the Knoell team for a complete mortgage consultation.</p>
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
                  <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="10" y2="10" /><line x1="12" y1="10" x2="14" y2="10" /><line x1="8" y1="14" x2="10" y2="14" /><line x1="12" y1="14" x2="14" y2="14" /><line x1="8" y1="18" x2="10" y2="18" /><line x1="12" y1="18" x2="16" y2="18" />
                </svg>
              </div>
              <h3 className="text-[#052316] text-[20px] font-bold mb-2">Check Your Debt-to-Income Ratios</h3>
              <p className="text-[#888] text-[14.5px] leading-relaxed max-w-md mx-auto font-sans">
                Fill in your gross income and recurring debts above, then click <strong>&ldquo;Calculate Debt-to-Income Ratios&rdquo;</strong> to view detailed loan options.
              </p>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
