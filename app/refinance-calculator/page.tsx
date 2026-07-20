"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

interface RefinanceResult {
  currentBalance: number;
  currentRate: number;
  remainingTermYears: number;
  newRate: number;
  newTermYears: number;
  closingCosts: number;
  addClosingToLoan: boolean;

  currentMonthlyPayment: number;
  newMonthlyPayment: number;
  newLoanAmount: number;

  monthlySavings: number;
  breakEvenMonths: number | null;
  currentTotalInterest: number;
  newTotalInterest: number;
  interestSavings: number;

  status: "positive" | "negative" | "neutral";
  message: string;
}

const fmtCurr = (v: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Math.round(v));

const parseFormattedNumber = (str: string): number => {
  if (!str) return 0;
  const cleaned = str.replace(/,/g, "").replace(/[^0-9.]/g, "");
  return parseFloat(cleaned) || 0;
};

const CITY_DEFAULTS: Record<string, { balance: number; currentRate: number; remainingTerm: number; newRate: number; newTerm: number; closingCosts: number }> = {
  Phoenix: { balance: 250000, currentRate: 7.8, remainingTerm: 28, newRate: 6.8, newTerm: 25, closingCosts: 2510 },
  Tucson: { balance: 200000, currentRate: 7.6, remainingTerm: 27, newRate: 6.7, newTerm: 25, closingCosts: 2515 },
  Mesa: { balance: 275000, currentRate: 7.9, remainingTerm: 29, newRate: 6.9, newTerm: 25, closingCosts: 2530 },
  Chandler: { balance: 300000, currentRate: 7.7, remainingTerm: 28, newRate: 6.8, newTerm: 25, closingCosts: 2545 },
  Gilbert: { balance: 280000, currentRate: 7.8, remainingTerm: 28, newRate: 6.8, newTerm: 25, closingCosts: 2560 },
  Glendale: { balance: 240000, currentRate: 7.7, remainingTerm: 27, newRate: 6.7, newTerm: 25, closingCosts: 2575 },
  Scottsdale: { balance: 400000, currentRate: 7.5, remainingTerm: 27, newRate: 6.7, newTerm: 25, closingCosts: 2590 },
  Peoria: { balance: 260000, currentRate: 7.6, remainingTerm: 28, newRate: 6.7, newTerm: 25, closingCosts: 2400 },
  Tempe: { balance: 270000, currentRate: 7.8, remainingTerm: 28, newRate: 6.8, newTerm: 25, closingCosts: 2415 },
  Surprise: { balance: 250000, currentRate: 7.7, remainingTerm: 28, newRate: 6.7, newTerm: 25, closingCosts: 2430 },
  Goodyear: { balance: 280000, currentRate: 7.8, remainingTerm: 28, newRate: 6.8, newTerm: 25, closingCosts: 2445 },
  Buckeye: { balance: 240000, currentRate: 7.7, remainingTerm: 27, newRate: 6.7, newTerm: 25, closingCosts: 2460 },
  "San Tan Valley": { balance: 260000, currentRate: 7.8, remainingTerm: 28, newRate: 6.8, newTerm: 25, closingCosts: 2475 },
  Yuma: { balance: 190000, currentRate: 7.5, remainingTerm: 26, newRate: 6.6, newTerm: 25, closingCosts: 2490 },
  Avondale: { balance: 230000, currentRate: 7.7, remainingTerm: 27, newRate: 6.7, newTerm: 25, closingCosts: 2505 },
  Flagstaff: { balance: 350000, currentRate: 7.6, remainingTerm: 28, newRate: 6.7, newTerm: 25, closingCosts: 2685 },
  "Queen Creek": { balance: 310000, currentRate: 7.8, remainingTerm: 28, newRate: 6.8, newTerm: 25, closingCosts: 2565 },
  Maricopa: { balance: 220000, currentRate: 7.7, remainingTerm: 27, newRate: 6.7, newTerm: 25, closingCosts: 2510 },
  "Casas Adobes": { balance: 210000, currentRate: 7.6, remainingTerm: 27, newRate: 6.6, newTerm: 25, closingCosts: 2650 },
  "Casa Grande": { balance: 200000, currentRate: 7.7, remainingTerm: 27, newRate: 6.7, newTerm: 25, closingCosts: 2675 },
  "Lake Havasu City": { balance: 240000, currentRate: 7.5, remainingTerm: 26, newRate: 6.6, newTerm: 25, closingCosts: 2690 },
  Marana: { balance: 260000, currentRate: 7.6, remainingTerm: 27, newRate: 6.7, newTerm: 25, closingCosts: 2685 },
  "Catalina Foothills": { balance: 380000, currentRate: 7.4, remainingTerm: 27, newRate: 6.5, newTerm: 25, closingCosts: 2685 },
  "Prescott Valley": { balance: 250000, currentRate: 7.6, remainingTerm: 27, newRate: 6.7, newTerm: 25, closingCosts: 2685 },
  "Oro Valley": { balance: 290000, currentRate: 7.5, remainingTerm: 27, newRate: 6.6, newTerm: 25, closingCosts: 2684 },
  "City Not Listed": { balance: 250000, currentRate: 7.7, remainingTerm: 28, newRate: 6.7, newTerm: 25, closingCosts: 2500 }
};

const ARIZONA_CITIES = Object.keys(CITY_DEFAULTS);

function calcMonthlyPayment(principal: number, annualRatePct: number, termYears: number): number {
  if (principal <= 0 || termYears <= 0) return 0;
  const r = annualRatePct / 100 / 12;
  const n = termYears * 12;
  if (r === 0) return principal / n;
  const factor = Math.pow(1 + r, n);
  return (principal * r * factor) / (factor - 1);
}

function calculateRefinance(
  currentBalance: number,
  currentRate: number,
  remainingTermYears: number,
  newRate: number,
  newTermYears: number,
  closingCosts: number,
  addClosingToLoan: boolean
): RefinanceResult {
  const bal = Math.max(0, currentBalance);
  const curR = Math.max(0, currentRate);
  const curT = Math.max(1, remainingTermYears);
  const newR = Math.max(0, newRate);
  const newT = Math.max(1, newTermYears);
  const cc = Math.max(0, closingCosts);

  const currentMonthlyPayment = calcMonthlyPayment(bal, curR, curT);
  const newLoanAmount = addClosingToLoan ? bal + cc : bal;
  const newMonthlyPayment = calcMonthlyPayment(newLoanAmount, newR, newT);

  const monthlySavings = currentMonthlyPayment - newMonthlyPayment;

  let breakEvenMonths: number | null = null;
  if (cc === 0) {
    breakEvenMonths = 0;
  } else if (monthlySavings > 0) {
    breakEvenMonths = Math.ceil(cc / monthlySavings);
  }

  const currentTotalScheduled = currentMonthlyPayment * (curT * 12);
  const currentTotalInterest = Math.max(0, currentTotalScheduled - bal);

  const newTotalScheduled = newMonthlyPayment * (newT * 12);
  const newTotalInterest = Math.max(0, newTotalScheduled - newLoanAmount);

  const interestSavings = currentTotalInterest - newTotalInterest;

  let status: RefinanceResult["status"] = "neutral";
  let message = "";

  if (monthlySavings > 0) {
    status = "positive";
    message = `Refinancing will save you ${fmtCurr(monthlySavings)} per month! Your break-even point to recoup ${fmtCurr(cc)} in closing costs is approx ${breakEvenMonths} month(s).`;
  } else if (monthlySavings < 0) {
    status = "negative";
    message = `Your new monthly payment would be ${fmtCurr(Math.abs(monthlySavings))} higher than your current payment. Consider extending your loan term or looking for a lower interest rate.`;
  } else {
    status = "neutral";
    message = "Your monthly payment will remain approximately the same.";
  }

  return {
    currentBalance: bal,
    currentRate: curR,
    remainingTermYears: curT,
    newRate: newR,
    newTermYears: newT,
    closingCosts: cc,
    addClosingToLoan,
    currentMonthlyPayment,
    newMonthlyPayment,
    newLoanAmount,
    monthlySavings,
    breakEvenMonths,
    currentTotalInterest,
    newTotalInterest,
    interestSavings,
    status,
    message
  };
}

export default function RefinanceCalculatorPage() {
  const [selectedCity, setSelectedCity] = useState("Phoenix");
  const [currentBalanceStr, setCurrentBalanceStr] = useState("250,000");
  const [currentRateStr, setCurrentRateStr] = useState("7.8");
  const [remainingTermStr, setRemainingTermStr] = useState("28");

  const [newRateStr, setNewRateStr] = useState("6.8");
  const [newTermStr, setNewTermStr] = useState("25");
  const [closingCostsStr, setClosingCostsStr] = useState("2,510");

  const [addClosingToLoan, setAddClosingToLoan] = useState(false);

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    const defaults = CITY_DEFAULTS[city] || CITY_DEFAULTS.Phoenix;
    setCurrentBalanceStr(defaults.balance.toLocaleString("en-US"));
    setCurrentRateStr(defaults.currentRate.toString());
    setRemainingTermStr(defaults.remainingTerm.toString());
    setNewRateStr(defaults.newRate.toString());
    setNewTermStr(defaults.newTerm.toString());
    setClosingCostsStr(defaults.closingCosts.toLocaleString("en-US"));
  };

  const result = useMemo(() => {
    return calculateRefinance(
      parseFormattedNumber(currentBalanceStr),
      parseFormattedNumber(currentRateStr),
      parseFormattedNumber(remainingTermStr),
      parseFormattedNumber(newRateStr),
      parseFormattedNumber(newTermStr),
      parseFormattedNumber(closingCostsStr),
      addClosingToLoan
    );
  }, [currentBalanceStr, currentRateStr, remainingTermStr, newRateStr, newTermStr, closingCostsStr, addClosingToLoan]);

  const doughnutData = useMemo(() => {
    const total = result.currentMonthlyPayment + result.newMonthlyPayment;
    if (total <= 0) return { curPct: 50, newPct: 50 };
    return {
      curPct: parseFloat(((result.currentMonthlyPayment / total) * 100).toFixed(1)),
      newPct: parseFloat(((result.newMonthlyPayment / total) * 100).toFixed(1))
    };
  }, [result]);

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] font-sans text-[#32353C]">
      <Navbar />

      <main className="flex-grow pb-16">
        <section className="w-full bg-[#052316] text-white py-14 lg:py-16 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-2 font-sans">
              ARIZONA MORTGAGE TOOLS
            </span>
            <h1 className="text-white text-[34px] lg:text-[46px] font-playfair font-normal leading-[1.2] mb-4">
              Refinance Calculator for Arizona
            </h1>
            <p className="text-[#c8c8b8] text-[14.5px] lg:text-[16px] leading-[1.6] max-w-2xl mx-auto font-sans">
              Calculate your monthly savings, break-even point, and overall interest reduction when refinancing your mortgage in Arizona.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 lg:px-8 mt-8">
          <div className="bg-white rounded-2xl border border-[#e0e0e0] shadow-sm p-6 lg:p-10 space-y-8">
            
            <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <label htmlFor="citySelect" className="text-[15px] font-semibold text-[#32353C] block mb-1">
                  Select Your Arizona City
                </label>
                <p className="text-[#666] text-[13px]">
                  Loads localized average loan terms and closing cost estimates for your area.
                </p>
              </div>
              <select
                id="citySelect"
                value={selectedCity}
                onChange={(e) => handleCityChange(e.target.value)}
                className="h-[45px] px-4 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-semibold text-[#32353C] focus:outline-none focus:border-[#4CAF50] cursor-pointer md:w-64"
              >
                {ARIZONA_CITIES.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-8 space-y-6">
                
                <div className="bg-white rounded-xl border border-[#e0e0e0] p-6 shadow-sm">
                  <h3 className="text-[17px] font-semibold text-[#32353C] pb-3 mb-5 border-b border-[#f0f0f0]">
                    Current Loan Details
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <label htmlFor="currentBalance" className="text-[13.5px] font-medium text-[#32353C]">
                          Current Balance ($)
                        </label>
                        <div className="relative group cursor-help">
                          <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                            ?
                          </span>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                            Enter the remaining balance on your current mortgage.
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                          $
                        </span>
                        <input
                          type="text"
                          id="currentBalance"
                          value={currentBalanceStr}
                          onChange={(e) => {
                            const val = e.target.value.replace(/[^0-9]/g, "");
                            setCurrentBalanceStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                          }}
                          className="w-full h-[45px] pl-8 pr-3 bg-white border border-[#e0e0e0] rounded-md text-[14.5px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <label htmlFor="currentRate" className="text-[13.5px] font-medium text-[#32353C]">
                          Current Rate (%)
                        </label>
                        <div className="relative group cursor-help">
                          <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                            ?
                          </span>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                            Your existing annual interest rate percentage.
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          id="currentRate"
                          value={currentRateStr}
                          onChange={(e) => {
                            let val = e.target.value.replace(/[^0-9.]/g, "");
                            const parts = val.split(".");
                            if (parts.length > 2) val = parts[0] + "." + parts.slice(1).join("");
                            setCurrentRateStr(val);
                          }}
                          className="w-full h-[45px] pl-3 pr-8 bg-white border border-[#e0e0e0] rounded-md text-[14.5px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] text-right"
                        />
                        <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                          %
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <label htmlFor="remainingTerm" className="text-[13.5px] font-medium text-[#32353C]">
                          Remaining Term (Yrs)
                        </label>
                        <div className="relative group cursor-help">
                          <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                            ?
                          </span>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                            Number of years remaining on your current loan.
                          </div>
                        </div>
                      </div>
                      <input
                        type="number"
                        id="remainingTerm"
                        value={remainingTermStr}
                        onChange={(e) => setRemainingTermStr(e.target.value)}
                        className="w-full h-[45px] px-3 bg-white border border-[#e0e0e0] rounded-md text-[14.5px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-[#e0e0e0] p-6 shadow-sm">
                  <h3 className="text-[17px] font-semibold text-[#32353C] pb-3 mb-5 border-b border-[#f0f0f0]">
                    New Refinance Loan Details
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <label htmlFor="newRate" className="text-[13.5px] font-medium text-[#32353C]">
                          New Rate (%)
                        </label>
                        <div className="relative group cursor-help">
                          <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                            ?
                          </span>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                            The new interest rate offered for refinancing.
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          id="newRate"
                          value={newRateStr}
                          onChange={(e) => {
                            let val = e.target.value.replace(/[^0-9.]/g, "");
                            const parts = val.split(".");
                            if (parts.length > 2) val = parts[0] + "." + parts.slice(1).join("");
                            setNewRateStr(val);
                          }}
                          className="w-full h-[45px] pl-3 pr-8 bg-white border border-[#e0e0e0] rounded-md text-[14.5px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] text-right"
                        />
                        <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                          %
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <label htmlFor="newTerm" className="text-[13.5px] font-medium text-[#32353C]">
                          New Term (Yrs)
                        </label>
                        <div className="relative group cursor-help">
                          <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                            ?
                          </span>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                            Choose length for the new mortgage term (e.g. 30, 25, 20, 15).
                          </div>
                        </div>
                      </div>
                      <select
                        id="newTerm"
                        value={newTermStr}
                        onChange={(e) => setNewTermStr(e.target.value)}
                        className="w-full h-[45px] px-3 bg-white border border-[#e0e0e0] rounded-md text-[14.5px] text-[#32353C] focus:outline-none focus:border-[#4CAF50] cursor-pointer"
                      >
                        <option value="30">30 Years</option>
                        <option value="25">25 Years</option>
                        <option value="20">20 Years</option>
                        <option value="15">15 Years</option>
                        <option value="10">10 Years</option>
                      </select>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <label htmlFor="closingCosts" className="text-[13.5px] font-medium text-[#32353C]">
                          Closing Costs ($)
                        </label>
                        <div className="relative group cursor-help">
                          <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                            ?
                          </span>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-52 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                            Estimated closing costs for refinancing (lender fees, title, etc.).
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                          $
                        </span>
                        <input
                          type="text"
                          id="closingCosts"
                          value={closingCostsStr}
                          onChange={(e) => {
                            const val = e.target.value.replace(/[^0-9]/g, "");
                            setClosingCostsStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                          }}
                          className="w-full h-[45px] pl-8 pr-3 bg-white border border-[#e0e0e0] rounded-md text-[14.5px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 p-3.5 bg-[#f8f9fa] border border-[#e0e0e0] rounded-lg flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="addClosingToLoan"
                      checked={addClosingToLoan}
                      onChange={(e) => setAddClosingToLoan(e.target.checked)}
                      className="w-4 h-4 text-[#4CAF50] accent-[#4CAF50] rounded cursor-pointer"
                    />
                    <label htmlFor="addClosingToLoan" className="text-[13.5px] font-medium text-[#32353C] cursor-pointer">
                      Add closing costs ({fmtCurr(parseFormattedNumber(closingCostsStr))}) to new loan amount
                    </label>
                  </div>
                </div>

              </div>

              <div className="lg:col-span-4 bg-white rounded-xl border border-[#e0e0e0] p-6 shadow-sm flex flex-col items-center justify-center text-center h-full">
                <h3 className="text-[16px] font-semibold text-[#32353C] mb-4">
                  Monthly Payment Comparison
                </h3>

                <div className="relative w-44 h-44 my-2 flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                    <circle cx="100" cy="100" r="70" fill="none" stroke="#e0e0e0" strokeWidth="18" />
                    <circle
                      cx="100"
                      cy="100"
                      r="70"
                      fill="none"
                      stroke="#90A4AE"
                      strokeWidth="18"
                      strokeDasharray={`${(2 * Math.PI * 70 * doughnutData.curPct) / 100} ${2 * Math.PI * 70}`}
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="70"
                      fill="none"
                      stroke="#4CAF50"
                      strokeWidth="18"
                      strokeDasharray={`${(2 * Math.PI * 70 * doughnutData.newPct) / 100} ${2 * Math.PI * 70}`}
                      strokeDashoffset={`-${(2 * Math.PI * 70 * doughnutData.curPct) / 100}`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[11px] uppercase tracking-wider text-[#888] font-semibold">New Payment</span>
                    <span className="text-[17px] font-bold text-[#4CAF50]">
                      {fmtCurr(result.newMonthlyPayment)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-[12.5px] pt-3 w-full">
                  <div className="flex justify-between items-center px-2 py-1 bg-[#f8f9fa] rounded">
                    <span className="text-[#666]">Current Payment:</span>
                    <span className="font-semibold text-[#32353C]">{fmtCurr(result.currentMonthlyPayment)}</span>
                  </div>
                  <div className="flex justify-between items-center px-2 py-1 bg-emerald-50 rounded">
                    <span className="text-[#666]">New Payment:</span>
                    <span className="font-semibold text-[#4CAF50]">{fmtCurr(result.newMonthlyPayment)}</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        <section className="max-w-6xl mx-auto px-4 lg:px-8 mt-10 space-y-8 animate-fadeIn">
          <div className="bg-white rounded-2xl border border-[#e0e0e0] shadow-sm p-6 lg:p-10">
            
            <h2 className="text-[24px] font-semibold text-[#32353C] pb-4 mb-8 border-b-2 border-[#f0f0f0]">
              Refinance Results
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl p-5 text-center">
                <span className="text-[13px] text-[#666] font-medium block mb-1">Monthly Savings</span>
                <div className={`text-[26px] font-bold ${result.monthlySavings > 0 ? "text-[#4CAF50]" : "text-red-500"}`}>
                  {result.monthlySavings >= 0 ? fmtCurr(result.monthlySavings) : `-${fmtCurr(Math.abs(result.monthlySavings))}`}
                </div>
                <span className="text-[12px] text-[#888] block mt-1">Reduction in your monthly mortgage payment</span>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl p-5 text-center">
                <span className="text-[13px] text-[#666] font-medium block mb-1">Break-Even Point</span>
                <div className="text-[26px] font-bold text-[#32353C]">
                  {result.breakEvenMonths !== null ? `${result.breakEvenMonths} mo${result.breakEvenMonths === 1 ? "" : "s"}` : "N/A"}
                </div>
                <span className="text-[12px] text-[#888] block mt-1">Time needed to recover refinancing closing costs</span>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl p-5 text-center">
                <span className="text-[13px] text-[#666] font-medium block mb-1">Total Interest Savings</span>
                <div className={`text-[26px] font-bold ${result.interestSavings >= 0 ? "text-[#4CAF50]" : "text-red-500"}`}>
                  {fmtCurr(result.interestSavings)}
                </div>
                <span className="text-[12px] text-[#888] block mt-1">Total reduction in interest payments over loan term</span>
              </div>
            </div>

            {/* Current vs New Loan Comparison Table */}
            <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl p-6 mb-8">
              <h3 className="text-[17px] font-semibold text-[#32353C] mb-4">
                Current Loan vs. Refinanced Loan Comparison
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[14px]">
                  <thead>
                    <tr className="border-b border-[#e0e0e0] text-[#666]">
                      <th className="py-2.5 px-3 font-semibold">Details</th>
                      <th className="py-2.5 px-3 font-semibold">Current Loan</th>
                      <th className="py-2.5 px-3 font-semibold text-[#4CAF50]">New Refinanced Loan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e0e0e0]">
                    <tr>
                      <td className="py-3 px-3 font-medium text-[#32353C]">Loan Balance</td>
                      <td className="py-3 px-3 text-[#666]">{fmtCurr(result.currentBalance)}</td>
                      <td className="py-3 px-3 text-[#4CAF50] font-bold">{fmtCurr(result.newLoanAmount)}</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium text-[#32353C]">Interest Rate</td>
                      <td className="py-3 px-3 text-[#666]">{result.currentRate}%</td>
                      <td className="py-3 px-3 text-[#4CAF50] font-bold">{result.newRate}%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium text-[#32353C]">Loan Term</td>
                      <td className="py-3 px-3 text-[#666]">{result.remainingTermYears} Years Remaining</td>
                      <td className="py-3 px-3 text-[#4CAF50] font-bold">{result.newTermYears} Years New</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium text-[#32353C]">Monthly Payment</td>
                      <td className="py-3 px-3 text-[#666]">{fmtCurr(result.currentMonthlyPayment)}</td>
                      <td className="py-3 px-3 text-[#4CAF50] font-bold">{fmtCurr(result.newMonthlyPayment)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className={`p-5 rounded-xl border text-[14.5px] leading-relaxed ${
              result.status === "positive"
                ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                : result.status === "negative"
                ? "bg-amber-50 border-amber-200 text-amber-900"
                : "bg-gray-50 border-gray-200 text-gray-800"
            }`}>
              {result.message}
            </div>

            {/* Methodology & Refinance Guide Section */}
            <div className="mt-12 bg-[#f8f9fa] border border-[#e0e0e0] rounded-2xl p-6 lg:p-8 space-y-4 text-[13.5px] leading-relaxed text-[#555]">
              <h4 className="text-[16px] font-bold text-[#32353C] border-b border-[#e0e0e0] pb-2">
                Calculation Methodology &amp; Refinancing Guidelines
              </h4>
              <p>
                <strong>Understanding Refinance Break-Even:</strong> Refinancing typically involves upfront closing costs (lender appraisal, title insurance, recording fees). The break-even point calculates the exact number of months required for your monthly payment savings to cover those initial closing costs.
              </p>
              <div className="space-y-2 pt-1">
                <p><strong>• Monthly Savings:</strong> Current Monthly Payment minus New Monthly Payment.</p>
                <p><strong>• Break-Even Calculation:</strong> Total Closing Costs divided by Monthly Savings.</p>
                <p><strong>• Financed Closing Costs:</strong> Checking the "Add closing costs to new loan amount" option increases your new loan balance, avoiding upfront out-of-pocket cash requirements.</p>
              </div>
            </div>

            <div className="mt-12 bg-[#052316] rounded-2xl p-6 lg:p-8 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-[20px] font-bold mb-1 font-playfair">Ready to refinance your Arizona mortgage?</h4>
                <p className="text-[#c8c8b8] text-[14px]">
                  Get custom rate quotes and check your exact closing cost options with our team.
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

      </main>

      <Footer />
    </div>
  );
}
