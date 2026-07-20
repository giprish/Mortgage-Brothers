"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { InteractivePieChart, InteractiveAmortizationChart } from "../component/InteractiveCharts";

interface AmortizationRow {
  period: number;
  label: string;
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
  monthlyMIP: number;
  totalMonthly: number;
  monthlyInterest: number;
  monthlyPrincipal: number;
  schedule: AmortizationRow[];
}

interface CountyLimits {
  single: number;
  duplex: number;
  triplex: number;
  fourplex: number;
}

const COUNTY_LIMITS: Record<string, CountyLimits> = {
  coconino: { single: 609500, duplex: 780250, triplex: 943150, fourplex: 1172150 },
  maricopa: { single: 557750, duplex: 714000, triplex: 863100, fourplex: 1072600 },
  pinal: { single: 557750, duplex: 714000, triplex: 863100, fourplex: 1072600 },
  apache: { single: 541287, duplex: 693050, triplex: 837700, fourplex: 1041125 },
  cochise: { single: 541287, duplex: 693050, triplex: 837700, fourplex: 1041125 },
  gila: { single: 541287, duplex: 693050, triplex: 837700, fourplex: 1041125 },
  graham: { single: 541287, duplex: 693050, triplex: 837700, fourplex: 1041125 },
  greenlee: { single: 541287, duplex: 693050, triplex: 837700, fourplex: 1041125 },
  la_paz: { single: 541287, duplex: 693050, triplex: 837700, fourplex: 1041125 },
  mohave: { single: 541287, duplex: 693050, triplex: 837700, fourplex: 1041125 },
  navajo: { single: 541287, duplex: 693050, triplex: 837700, fourplex: 1041125 },
  pima: { single: 541287, duplex: 693050, triplex: 837700, fourplex: 1041125 },
  santa_cruz: { single: 541287, duplex: 693050, triplex: 837700, fourplex: 1041125 },
  yavapai: { single: 541287, duplex: 693050, triplex: 837700, fourplex: 1041125 },
  yuma: { single: 541287, duplex: 693050, triplex: 837700, fourplex: 1041125 }
};

const ARIZONA_COUNTIES = [
  { id: "maricopa", label: "Maricopa" },
  { id: "pima", label: "Pima" },
  { id: "pinal", label: "Pinal" },
  { id: "apache", label: "Apache" },
  { id: "cochise", label: "Cochise" },
  { id: "coconino", label: "Coconino" },
  { id: "gila", label: "Gila" },
  { id: "graham", label: "Graham" },
  { id: "greenlee", label: "Greenlee" },
  { id: "la_paz", label: "La Paz" },
  { id: "mohave", label: "Mohave" },
  { id: "navajo", label: "Navajo" },
  { id: "santa_cruz", label: "Santa Cruz" },
  { id: "yavapai", label: "Yavapai" },
  { id: "yuma", label: "Yuma" }
];

function calculateMIPRate(loanTerm: number, ltv: number): number {
  if (loanTerm > 15) {
    if (ltv <= 95) return 0.80;
    return 0.85;
  } else {
    if (ltv <= 90) return 0.45;
    return 0.70;
  }
}

const fmtCurr = (v: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(Math.round(v));

const parseFormattedNumber = (str: string): number => {
  if (!str) return 0;
  const cleaned = str.replace(/,/g, "").replace(/[^0-9.]/g, "");
  return parseFloat(cleaned) || 0;
};

const formatInputNumber = (val: number | string): string => {
  if (val === "" || val === null || val === undefined) return "";
  const num = typeof val === "number" ? val : parseFormattedNumber(val);
  if (isNaN(num) || num === 0) return "";
  return num.toLocaleString("en-US");
};

export default function FhaLoanCalculatorPage() {
  const [county, setCounty] = useState("maricopa");
  const [propertyType, setPropertyType] = useState<"single" | "duplex" | "triplex" | "fourplex">("single");

  const [homePriceStr, setHomePriceStr] = useState("350,000");
  const [dpAmountStr, setDpAmountStr] = useState("12,250");
  const [dpPercentStr, setDpPercentStr] = useState("3.5");

  const [interestRateStr, setInterestRateStr] = useState("6.25");
  const [loanTerm, setLoanTerm] = useState(30);

  const [, setPropertyConfirmed] = useState(true);
  const [hasCalculated, setHasCalculated] = useState(true);
  const [propertyNotification, setPropertyNotification] = useState("");
  const [loanNotification, setLoanNotification] = useState("");
  const [dpWarning, setDpWarning] = useState("");

  const [scheduleViewMode, setScheduleViewMode] = useState<"annual" | "monthly">("annual");
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 12;

  const currentLimit = useMemo(() => {
    const limits = COUNTY_LIMITS[county] || COUNTY_LIMITS.maricopa;
    return limits[propertyType];
  }, [county, propertyType]);

  const homePrice = useMemo(() => parseFormattedNumber(homePriceStr), [homePriceStr]);
  const dpAmount = useMemo(() => parseFormattedNumber(dpAmountStr), [dpAmountStr]);

  const handleHomePriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    if (!val) {
      setHomePriceStr("");
      setDpAmountStr("");
      setDpPercentStr("3.5");
      return;
    }
    const num = parseInt(val, 10);
    setHomePriceStr(num.toLocaleString("en-US"));

    const pct = parseFormattedNumber(dpPercentStr) || 3.5;
    const newDpAmt = Math.round((num * pct) / 100);
    setDpAmountStr(newDpAmt.toLocaleString("en-US"));
  };

  const handleDpAmountInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    if (!val) {
      setDpAmountStr("");
      setDpPercentStr("");
      return;
    }
    const num = parseInt(val, 10);
    setDpAmountStr(num.toLocaleString("en-US"));

    if (homePrice > 0) {
      const pct = ((num / homePrice) * 100).toFixed(2);
      setDpPercentStr(pct);
    }
  };

  const handleDpPercentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/[^0-9.]/g, "");
    const parts = val.split(".");
    if (parts.length > 2) val = parts[0] + "." + parts.slice(1).join("");
    setDpPercentStr(val);

    const pct = parseFloat(val) || 0;
    if (homePrice > 0 && pct >= 0) {
      const newDpAmt = Math.round((homePrice * pct) / 100);
      setDpAmountStr(newDpAmt.toLocaleString("en-US"));
    }
  };

  const handleInterestRateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/[^0-9.]/g, "");
    const parts = val.split(".");
    if (parts.length > 2) val = parts[0] + "." + parts.slice(1).join("");
    setInterestRateStr(val);
  };

  const handleConfirmPropertyDetails = () => {
    setPropertyConfirmed(true);
    const countyObj = ARIZONA_COUNTIES.find((c) => c.id === county);
    setPropertyNotification(`Property details confirmed: ${countyObj?.label} County (${propertyType.toUpperCase()}) Limit is ${fmtCurr(currentLimit)}.`);
    setTimeout(() => setPropertyNotification(""), 5000);

    const loanDetailsEl = document.getElementById("loanDetailsSection");
    if (loanDetailsEl) {
      loanDetailsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCalculateFhaLoan = () => {
    if (!homePrice || homePrice <= 0) {
      setLoanNotification("Please enter a valid Home Price to calculate.");
      return;
    }
    setLoanNotification("");
    setHasCalculated(true);

    const resultsEl = document.getElementById("resultsSection");
    if (resultsEl) {
      resultsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const calcResult = useMemo<FhaCalcResult | null>(() => {
    const hp = homePrice;
    if (!hp || hp <= 0) return null;

    let dp = dpAmount;
    const rate = parseFormattedNumber(interestRateStr) || 0;
    const term = loanTerm;

    const minStandardDp = Math.round(hp * 0.035);
    const minLimitDp = Math.max(0, hp - currentLimit);
    const minRequiredDp = Math.max(minStandardDp, minLimitDp);

    let warningText = "";
    if (dp < minRequiredDp) {
      dp = minRequiredDp;
      if (minLimitDp > minStandardDp) {
        warningText = `⚠️ Down payment increased to $${minLimitDp.toLocaleString()} so loan amount does not exceed the ${fmtCurr(currentLimit)} FHA limit for ${county.toUpperCase()}.`;
      } else {
        warningText = `⚠️ FHA loans require a minimum of 3.5% down payment ($${minStandardDp.toLocaleString()}).`;
      }
    }
    setDpWarning(warningText);

    const baseLoanAmount = Math.max(0, hp - dp);
    const upfrontMIP = baseLoanAmount * 0.0175;
    const totalLoanAmount = baseLoanAmount + upfrontMIP;
    const ltvRatio = (baseLoanAmount / hp) * 100;

    const annualMIPRate = calculateMIPRate(term, ltvRatio);
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = term * 12;

    let monthlyPI = 0;
    if (totalLoanAmount > 0 && numberOfPayments > 0) {
      if (monthlyRate === 0) {
        monthlyPI = totalLoanAmount / numberOfPayments;
      } else {
        const factor = Math.pow(1 + monthlyRate, numberOfPayments);
        monthlyPI = (totalLoanAmount * monthlyRate * factor) / (factor - 1);
      }
    }

    const monthlyMIP = (baseLoanAmount * (annualMIPRate / 100)) / 12;
    const totalMonthly = monthlyPI + monthlyMIP;

    const firstMonthInterest = totalLoanAmount * monthlyRate;
    const firstMonthPrincipal = monthlyPI - firstMonthInterest;

    const schedule: AmortizationRow[] = [];
    let balance = totalLoanAmount;

    if (scheduleViewMode === "annual") {
      let accumPrincipal = 0;
      let accumInterest = 0;
      let accumMIP = 0;

      for (let m = 1; m <= numberOfPayments; m++) {
        const interestPaid = balance * monthlyRate;
        let principalPaid = monthlyPI - interestPaid;
        const mipPaid = (baseLoanAmount * (annualMIPRate / 100)) / 12;

        if (principalPaid >= balance || m === numberOfPayments) {
          principalPaid = balance;
          balance = 0;
        } else {
          balance -= principalPaid;
        }

        accumPrincipal += principalPaid;
        accumInterest += interestPaid;
        accumMIP += mipPaid;

        if (m % 12 === 0 || m === numberOfPayments) {
          const yearNum = Math.ceil(m / 12);
          schedule.push({
            period: yearNum,
            label: `Year ${yearNum}`,
            principalPaid: accumPrincipal,
            interestPaid: accumInterest,
            mipPaid: accumMIP,
            remainingBalance: Math.max(0, balance)
          });
          accumPrincipal = 0;
          accumInterest = 0;
          accumMIP = 0;
        }
      }
    } else {
      for (let m = 1; m <= numberOfPayments; m++) {
        const interestPaid = balance * monthlyRate;
        let principalPaid = monthlyPI - interestPaid;
        const mipPaid = (baseLoanAmount * (annualMIPRate / 100)) / 12;

        if (principalPaid >= balance || m === numberOfPayments) {
          principalPaid = balance;
          balance = 0;
        } else {
          balance -= principalPaid;
        }

        schedule.push({
          period: m,
          label: `Month ${m}`,
          principalPaid,
          interestPaid,
          mipPaid,
          remainingBalance: Math.max(0, balance)
        });
      }
    }

    return {
      baseLoanAmount,
      upfrontMIP,
      totalLoanAmount,
      annualMIPRate,
      ltvRatio: parseFloat(ltvRatio.toFixed(2)),
      monthlyPI,
      monthlyMIP,
      totalMonthly,
      monthlyInterest: firstMonthInterest,
      monthlyPrincipal: firstMonthPrincipal,
      schedule
    };
  }, [homePrice, dpAmount, interestRateStr, loanTerm, currentLimit, county, scheduleViewMode]);

  useEffect(() => {
    setCurrentPage(0);
  }, [scheduleViewMode, calcResult]);

  const donutData = useMemo(() => {
    if (!calcResult || calcResult.totalMonthly <= 0) {
      return { pPct: 50, iPct: 35, mipPct: 15 };
    }
    const total = calcResult.totalMonthly;
    const p = (calcResult.monthlyPrincipal / total) * 100;
    const i = (calcResult.monthlyInterest / total) * 100;
    const mip = (calcResult.monthlyMIP / total) * 100;
    return {
      pPct: parseFloat(p.toFixed(1)),
      iPct: parseFloat(i.toFixed(1)),
      mipPct: parseFloat(mip.toFixed(1))
    };
  }, [calcResult]);

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
              FHA Loan Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[14.5px] lg:text-[16px] leading-[1.6] max-w-2xl mx-auto font-sans">
              Estimate your monthly FHA mortgage payment with upfront &amp; annual MIP, factor in Arizona county FHA loan limits, and calculate minimum down payments.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 lg:px-8 mt-8">
          <div className="bg-white rounded-2xl border border-[#e0e0e0] shadow-sm p-6 lg:p-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              
              <div className="bg-[#ffffff] rounded-xl border border-[#e0e0e0] p-6 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-[18px] font-semibold text-[#32353C] pb-4 mb-6 border-b border-[#f0f0f0]">
                    Property Details
                  </h3>

                  <div className="flex flex-col gap-6">
                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <label htmlFor="countySelect" className="text-[14px] font-medium text-[#32353C]">
                          Arizona Counties
                        </label>
                        <div className="relative group cursor-help">
                          <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                            ?
                          </span>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                            Select your county to see the FHA loan limit.
                          </div>
                        </div>
                      </div>
                      <select
                        id="countySelect"
                        value={county}
                        onChange={(e) => setCounty(e.target.value)}
                        className="w-full h-[45px] px-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] text-[#32353C] focus:outline-none focus:border-[#4CAF50] cursor-pointer"
                      >
                        {ARIZONA_COUNTIES.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <label htmlFor="propertyType" className="text-[14px] font-medium text-[#32353C]">
                          Property Type
                        </label>
                        <div className="relative group cursor-help">
                          <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                            ?
                          </span>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                            Select your property type to see the FHA loan limit.
                          </div>
                        </div>
                      </div>
                      <select
                        id="propertyType"
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value as any)}
                        className="w-full h-[45px] px-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] text-[#32353C] focus:outline-none focus:border-[#4CAF50] cursor-pointer"
                      >
                        <option value="single">Single Family</option>
                        <option value="duplex">Duplex</option>
                        <option value="triplex">Triplex</option>
                        <option value="fourplex">Fourplex</option>
                      </select>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <label htmlFor="loanLimit" className="text-[14px] font-medium text-[#32353C]">
                          FHA Loan Limit
                        </label>
                        <div className="relative group cursor-help">
                          <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                            ?
                          </span>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                            Maximum loan amount for the selected county and property type. Values updated for 2026.
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                          $
                        </span>
                        <input
                          type="text"
                          id="loanLimit"
                          value={formatInputNumber(currentLimit)}
                          readOnly
                          className="w-full h-[45px] pl-8 pr-3.5 bg-[#f8f9fa] border border-[#e0e0e0] rounded-md text-[15px] font-bold text-[#32353C] focus:outline-none cursor-default"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  {propertyNotification && (
                    <div className="mb-3 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded text-[13px] text-center font-medium animate-fadeIn">
                      {propertyNotification}
                    </div>
                  )}
                  <button
                    onClick={handleConfirmPropertyDetails}
                    className="w-full h-[45px] bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium text-[16px] rounded-md transition-all duration-200 cursor-pointer shadow-sm active:translate-y-0.5"
                  >
                    Confirm Property Details
                  </button>
                </div>
              </div>

              <div id="loanDetailsSection" className="bg-[#ffffff] rounded-xl border border-[#e0e0e0] p-6 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-[18px] font-semibold text-[#32353C] pb-4 mb-6 border-b border-[#f0f0f0]">
                    Loan Details
                  </h3>

                  <div className="flex flex-col gap-6">
                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <label htmlFor="homePrice" className="text-[14px] font-medium text-[#32353C]">
                          Home Price
                        </label>
                        <div className="relative group cursor-help">
                          <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                            ?
                          </span>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                            The purchase price of the home. If it exceeds the FHA loan limit, you&apos;ll need a larger down payment.
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                          $
                        </span>
                        <input
                          type="text"
                          id="homePrice"
                          value={homePriceStr}
                          onChange={handleHomePriceInput}
                          placeholder="Enter home price"
                          className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <label className="text-[14px] font-medium text-[#32353C]">
                          Down Payment
                        </label>
                        <div className="relative group cursor-help">
                          <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                            ?
                          </span>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                            Minimum 3.5% required for FHA. If home price exceeds loan limit, additional down payment is required.
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                            $
                          </span>
                          <input
                            type="text"
                            id="downPaymentAmount"
                            value={dpAmountStr}
                            onChange={handleDpAmountInput}
                            placeholder="Amount"
                            className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                          />
                        </div>
                        <div className="relative">
                          <input
                            type="text"
                            id="downPaymentPercent"
                            value={dpPercentStr}
                            onChange={handleDpPercentInput}
                            placeholder="Percentage"
                            className="w-full h-[45px] pl-3.5 pr-8 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] text-right"
                          />
                          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                            %
                          </span>
                        </div>
                      </div>

                      {dpWarning && (
                        <div className="mt-2 p-2.5 bg-amber-50 border border-amber-200 text-amber-900 rounded text-[12px]">
                          {dpWarning}
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="flex items-center gap-1.5 mb-2">
                          <label htmlFor="interestRate" className="text-[14px] font-medium text-[#32353C]">
                            Interest Rate
                          </label>
                          <div className="relative group cursor-help">
                            <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                              ?
                            </span>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-44 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                              Enter interest rate.
                            </div>
                          </div>
                        </div>
                        <div className="relative">
                          <input
                            type="text"
                            id="interestRate"
                            value={interestRateStr}
                            onChange={handleInterestRateInput}
                            placeholder="Enter rate"
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
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-44 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                              Choose your loan term.
                            </div>
                          </div>
                        </div>
                        <select
                          id="loanTerm"
                          value={loanTerm}
                          onChange={(e) => setLoanTerm(parseInt(e.target.value, 10))}
                          className="w-full h-[45px] px-3 bg-white border border-[#e0e0e0] rounded-md text-[15px] text-[#32353C] focus:outline-none focus:border-[#4CAF50] cursor-pointer"
                        >
                          <option value={30}>30 Years</option>
                          <option value={25}>25 Years</option>
                          <option value={20}>20 Years</option>
                          <option value={15}>15 Years</option>
                          <option value={10}>10 Years</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  {loanNotification && (
                    <div className="mb-3 p-3 bg-red-50 border border-red-200 text-red-700 rounded text-[13px] text-center font-medium animate-fadeIn">
                      {loanNotification}
                    </div>
                  )}
                  <button
                    onClick={handleCalculateFhaLoan}
                    className="w-full h-[45px] bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium text-[16px] rounded-md transition-all duration-200 cursor-pointer shadow-sm active:translate-y-0.5"
                  >
                    Calculate FHA Loan
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

        {hasCalculated && calcResult && (
          <section id="resultsSection" className="max-w-6xl mx-auto px-4 lg:px-8 mt-10 space-y-8 animate-fadeIn">
            <div className="bg-white rounded-2xl border border-[#e0e0e0] shadow-sm p-6 lg:p-10">
              
              <h2 className="text-[24px] font-semibold text-[#32353C] pb-4 mb-8 border-b-2 border-[#f0f0f0]">
                Loan Analysis
              </h2>

              {/* 3 Result Cards with Text Descriptions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                <div className="bg-[#052316] text-white border border-[#052316] rounded-2xl p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[#3fb364] text-[11px] font-bold tracking-wider uppercase">Initial Monthly Payment</span>
                    <div className="text-[30px] font-bold mt-1">{fmtCurr(calcResult.totalMonthly)}</div>
                  </div>
                  <p className="text-[12.5px] text-[#c8c8b8] mt-3 pt-2.5 border-t border-white/10">
                    Base P&amp;I plus first month MIP.
                  </p>
                </div>

                <div className="bg-white border border-[#e0e0e0] rounded-2xl p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[#888] text-[11px] font-bold tracking-wider uppercase">Base Loan Amount</span>
                    <div className="text-[30px] font-bold mt-1 text-[#32353C]">{fmtCurr(calcResult.baseLoanAmount)}</div>
                  </div>
                  <p className="text-[12.5px] text-[#888] mt-3 pt-2.5 border-t border-[#e0e0e0]/40">
                    Excluding upfront mortgage insurance.
                  </p>
                </div>

                <div className="bg-white border border-[#e0e0e0] rounded-2xl p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[#888] text-[11px] font-bold tracking-wider uppercase">Total Loan Financed</span>
                    <div className="text-[30px] font-bold mt-1 text-[#32353C]">{fmtCurr(calcResult.totalLoanAmount)}</div>
                  </div>
                  <p className="text-[12.5px] text-[#888] mt-3 pt-2.5 border-t border-[#e0e0e0]/40">
                    Includes 1.75% upfront MIP financed.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                
                <div className="bg-white rounded-xl border border-[#e0e0e0] p-6 shadow-sm flex flex-col justify-between">
                  <h3 className="text-[18px] font-semibold text-[#32353C] pb-3 mb-4 border-b border-[#f0f0f0]">
                    Monthly Payment Breakdown
                  </h3>

                  <div className="space-y-3.5 text-[14.5px]">
                    <div className="flex justify-between items-center py-1.5 border-b border-[#f5f5f5]">
                      <span className="text-[#666] font-medium">Principal &amp; Interest</span>
                      <span className="font-semibold text-[#32353C]">{fmtCurr(calcResult.monthlyPI)}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-[#f5f5f5]">
                      <span className="text-[#666] font-medium">Monthly MIP</span>
                      <span className="font-semibold text-[#32353C]">{fmtCurr(calcResult.monthlyMIP)}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t-2 border-[#f0f0f0]">
                      <span className="text-[#32353C] font-semibold text-[16px]">Total Monthly Payment</span>
                      <span className="text-[#4CAF50] font-bold text-[20px]">{fmtCurr(calcResult.totalMonthly)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-[#e0e0e0] p-6 shadow-sm flex flex-col justify-between">
                  <h3 className="text-[18px] font-semibold text-[#32353C] pb-3 mb-4 border-b border-[#f0f0f0]">
                    Loan Summary
                  </h3>

                  <div className="space-y-3 text-[14px]">
                    <div className="flex justify-between items-center py-1 border-b border-[#f5f5f5]">
                      <span className="text-[#666] font-medium">Base Loan Amount</span>
                      <span className="font-semibold text-[#32353C]">{fmtCurr(calcResult.baseLoanAmount)}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-[#f5f5f5]">
                      <span className="text-[#666] font-medium">Upfront MIP (1.75%)</span>
                      <span className="font-semibold text-[#32353C]">{fmtCurr(calcResult.upfrontMIP)}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-[#f5f5f5]">
                      <span className="text-[#666] font-medium">Total Loan Amount</span>
                      <span className="font-semibold text-[#32353C]">{fmtCurr(calcResult.totalLoanAmount)}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-[#f5f5f5]">
                      <span className="text-[#666] font-medium">Annual MIP Rate</span>
                      <span className="font-semibold text-[#4CAF50]">{calcResult.annualMIPRate.toFixed(2)}%</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-[#666] font-medium">LTV Ratio</span>
                      <span className="font-semibold text-[#32353C]">{calcResult.ltvRatio}%</span>
                    </div>
                  </div>
                </div>

              </div>

              <div className="mt-10">
                <h3 className="text-[18px] font-semibold text-[#32353C] mb-6">
                  Loan Analysis Charts
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white border border-[#e0e0e0] rounded-xl p-6 shadow-sm flex flex-col items-center justify-between">
                    <InteractivePieChart
                      title="Payment Components"
                      donut={true}
                      centerTextTitle="Monthly"
                      centerTextSub={fmtCurr(calcResult.totalMonthly)}
                      dataItems={[
                        { label: "Principal", value: calcResult.monthlyPI * 0.4, color: "#6ca220" },
                        { label: "Interest", value: calcResult.monthlyPI * 0.6, color: "#FF9800" },
                        { label: "Monthly MIP", value: calcResult.monthlyMIP, color: "#2196F3" },
                      ]}
                    />
                  </div>

                  <div className="bg-white border border-[#e0e0e0] rounded-xl p-6 shadow-sm flex flex-col justify-between">
                    <InteractiveAmortizationChart
                      title="Amortization & Balance Progression Over Time"
                      schedule={calcResult.schedule.map((row) => ({
                        month: row.period,
                        principalPaid: row.principalPaid,
                        interestPaid: row.interestPaid,
                        remainingBalance: row.remainingBalance,
                      }))}
                    />

                    <div className="mt-4 pt-4 border-t border-[#f0f0f0]">
                      <h4 className="text-[15px] font-semibold text-[#32353C] mb-3">Amortization Summary</h4>
                      {(() => {
                        const totalPayments = calcResult.monthlyPI * loanTerm * 12;
                        const totalInterest = totalPayments - calcResult.totalLoanAmount;
                        const totalMIP = calcResult.monthlyMIP * loanTerm * 12;
                        const grandTotal = totalPayments + totalMIP;

                        return (
                          <div className="space-y-2 text-[13.5px]">
                            <div className="flex justify-between py-1 border-b border-[#f5f5f5]">
                              <span className="text-[#666]">Total Principal Financed</span>
                              <span className="font-semibold text-[#32353C]">{fmtCurr(calcResult.totalLoanAmount)}</span>
                            </div>
                            <div className="flex justify-between py-1 border-b border-[#f5f5f5]">
                              <span className="text-[#666]">Total Interest Paid</span>
                              <span className="font-semibold text-[#FF9800]">{fmtCurr(totalInterest)}</span>
                            </div>
                            <div className="flex justify-between py-1 border-b border-[#f5f5f5]">
                              <span className="text-[#666]">Total MIP Paid</span>
                              <span className="font-semibold text-[#2196F3]">{fmtCurr(totalMIP)}</span>
                            </div>
                            <div className="flex justify-between py-1.5 border-t border-[#f0f0f0] font-bold">
                              <span className="text-[#32353C]">Total Amount Paid ({loanTerm} Yrs)</span>
                              <span className="text-[#32353C] text-[15px]">{fmtCurr(grandTotal)}</span>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-4 border-b border-[#f0f0f0] gap-3">
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#32353C]">Payment Over Time</h3>
                    <p className="text-[#888] text-[13px]">
                      Detailed payoff schedule including principal reduction, interest, and MIP.
                    </p>
                  </div>

                  <div className="flex items-center bg-[#f8f9fa] border border-[#e0e0e0] rounded-lg p-1">
                    <button
                      onClick={() => setScheduleViewMode("annual")}
                      className={`px-3 py-1.5 text-[13px] font-semibold rounded-md transition-all cursor-pointer ${
                        scheduleViewMode === "annual"
                          ? "bg-[#4CAF50] text-white shadow-sm"
                          : "text-[#666] hover:text-[#32353C]"
                      }`}
                    >
                      Annual Schedule
                    </button>
                    <button
                      onClick={() => setScheduleViewMode("monthly")}
                      className={`px-3 py-1.5 text-[13px] font-semibold rounded-md transition-all cursor-pointer ${
                        scheduleViewMode === "monthly"
                          ? "bg-[#4CAF50] text-white shadow-sm"
                          : "text-[#666] hover:text-[#32353C]"
                      }`}
                    >
                      Monthly Schedule
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto border border-[#e0e0e0] rounded-xl shadow-sm">
                  <table className="w-full text-left text-[13.5px] border-collapse">
                    <thead>
                      <tr className="text-white font-medium">
                        <th className="py-3 px-4 bg-[#90A4AE]">Period</th>
                        <th className="py-3 px-4 bg-[#6ca220]">Principal</th>
                        <th className="py-3 px-4 bg-[#FF9800]">Interest</th>
                        <th className="py-3 px-4 bg-[#2196F3]">MIP</th>
                        <th className="py-3 px-4 bg-[#607D8B]">Remaining Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {calcResult.schedule
                        .slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage)
                        .map((row, idx) => (
                          <tr
                            key={row.label}
                            className={idx % 2 === 0 ? "bg-white" : "bg-[#f8f9fa] hover:bg-[#f0f4f7]"}
                          >
                            <td className="py-3 px-4 font-semibold text-[#32353C]">{row.label}</td>
                            <td className="py-3 px-4 font-semibold text-[#6ca220]">{fmtCurr(row.principalPaid)}</td>
                            <td className="py-3 px-4 font-medium text-[#FF9800]">{fmtCurr(row.interestPaid)}</td>
                            <td className="py-3 px-4 font-medium text-[#2196F3]">{fmtCurr(row.mipPaid)}</td>
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

              {/* Calculation Methodology & Disclaimer Section */}
              <div className="mt-12 bg-[#f8f9fa] border border-[#e0e0e0] rounded-2xl p-6 lg:p-8 space-y-4 text-[13.5px] leading-relaxed text-[#555]">
                <h4 className="text-[16px] font-bold text-[#32353C] border-b border-[#e0e0e0] pb-2">
                  Calculation Methodology &amp; FHA Guidelines
                </h4>
                <p>
                  <strong>Disclaimer:</strong> This FHA loan calculator provides estimates only and does not include property taxes, homeowners insurance, HOA fees, or closing costs. Results may vary based on your specific financial situation and current FHA guidelines.
                </p>
                <div className="space-y-2 pt-1">
                  <p><strong>• Upfront MIP (UFMIP):</strong> Standard FHA loans require a 1.75% upfront mortgage insurance premium, which is financed directly into your total loan amount.</p>
                  <p><strong>• Annual MIP:</strong> Annual mortgage insurance premium ranges from 0.45% to 0.85% based on loan term and loan-to-value (LTV) ratio. For standard 30-year loans with down payments under 5%, the annual MIP is 0.85%.</p>
                  <p><strong>• FHA Loan Limits:</strong> Maximum loan amounts vary by county and property type (Single Family vs Multi-Unit). If your purchase price exceeds the county limit, an increased down payment is required to keep the financed balance within limits.</p>
                </div>
              </div>

              <div className="mt-12 bg-[#052316] rounded-2xl p-6 lg:p-8 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-[20px] font-bold mb-1 font-playfair">Ready to apply for an FHA loan in Arizona?</h4>
                  <p className="text-[#c8c8b8] text-[14px]">
                    Contact our mortgage specialists to get pre-approved and lock in your rate.
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
