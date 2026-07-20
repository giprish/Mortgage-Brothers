"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { InteractivePieChart } from "../component/InteractiveCharts";

// ─── Arizona City / County Configuration ────────────────────────────────────
interface CityConfig {
  county: string;
  taxRate: number;
  recordingFee: number;
  propertyTax: number;
}

const CITY_CONFIGS: Record<string, CityConfig> = {
  // Phoenix Metro Area
  phoenix: { county: "Maricopa County", taxRate: 0.72, recordingFee: 85, propertyTax: 1700 },
  mesa: { county: "Maricopa County", taxRate: 0.72, recordingFee: 85, propertyTax: 1700 },
  chandler: { county: "Maricopa County", taxRate: 0.72, recordingFee: 85, propertyTax: 1700 },
  scottsdale: { county: "Maricopa County", taxRate: 0.72, recordingFee: 85, propertyTax: 1700 },
  gilbert: { county: "Maricopa County", taxRate: 0.72, recordingFee: 85, propertyTax: 1700 },
  glendale: { county: "Maricopa County", taxRate: 0.72, recordingFee: 85, propertyTax: 1700 },
  tempe: { county: "Maricopa County", taxRate: 0.72, recordingFee: 0, propertyTax: 1700 },
  peoria: { county: "Maricopa County", taxRate: 0.72, recordingFee: -15, propertyTax: 1700 },
  surprise: { county: "Maricopa County", taxRate: 0.72, recordingFee: 15, propertyTax: 1700 },
  goodyear: { county: "Maricopa County", taxRate: 0.72, recordingFee: 30, propertyTax: 1700 },
  buckeye: { county: "Maricopa County", taxRate: 0.72, recordingFee: 45, propertyTax: 1700 },
  avondale: { county: "Maricopa County", taxRate: 0.72, recordingFee: 85, propertyTax: 1700 },
  queen_creek: { county: "Maricopa County", taxRate: 0.72, recordingFee: 85, propertyTax: 1700 },
  maricopa: { county: "Maricopa County", taxRate: 0.72, recordingFee: 85, propertyTax: 1700 },
  paradise_valley: { county: "Maricopa County", taxRate: 0.72, recordingFee: 85, propertyTax: 1700 },
  apache_junction: { county: "Maricopa County", taxRate: 0.72, recordingFee: 85, propertyTax: 1700 },
  // Tucson Area
  tucson: { county: "Pima County", taxRate: 0.84, recordingFee: 85, propertyTax: 1800 },
  marana: { county: "Pima County", taxRate: 0.84, recordingFee: 85, propertyTax: 1800 },
  oro_valley: { county: "Pima County", taxRate: 0.84, recordingFee: 85, propertyTax: 1800 },
  // Other Arizona Cities
  san_tan_valley: { county: "Pinal County", taxRate: 0.81, recordingFee: 60, propertyTax: 1790 },
  yuma: { county: "Yuma County", taxRate: 0.86, recordingFee: 75, propertyTax: 1830 },
  flagstaff: { county: "Coconino County", taxRate: 0.68, recordingFee: 85, propertyTax: 1680 },
  lake_havasu: { county: "Mohave County", taxRate: 0.77, recordingFee: 85, propertyTax: 1770 },
  casa_grande: { county: "Pinal County", taxRate: 0.81, recordingFee: 85, propertyTax: 1790 },
  sierra_vista: { county: "Cochise County", taxRate: 0.80, recordingFee: 85, propertyTax: 1750 },
  bullhead_city: { county: "Mohave County", taxRate: 0.77, recordingFee: 85, propertyTax: 1770 },
  prescott: { county: "Yavapai County", taxRate: 0.82, recordingFee: 85, propertyTax: 1820 },
};

// Program Closing Cost Fees
const PROGRAM_FEES: Record<string, number> = {
  conventional: 0,
  fha: 75,
  va: 200,
  usda: 50,
};

// Helper Functions
const parseCurrency = (val: string | number): number => {
  if (!val) return 0;
  const clean = val.toString().replace(/[^0-9.]/g, "");
  return parseFloat(clean) || 0;
};

const formatCurrency = (num: number): string => {
  return "$" + Number(num).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

function calculateMortgagePayment(loanAmount: number, annualRatePct: number, years: number): number {
  const monthlyRate = annualRatePct / 100 / 12;
  const n = years * 12;
  if (monthlyRate === 0) return loanAmount / n;
  return (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
}

function calculateClosingCosts(homePrice: number, loanAmount: number, locationKey: string, loanType: string): number {
  const originationFee = 1000;
  const creditReportFee = 95;
  const appraisalFee = 650;
  const programFee = PROGRAM_FEES[loanType] || 0;

  let titleInsuranceFee = 1200;
  if (loanAmount <= 300000) titleInsuranceFee = 895;
  else if (loanAmount <= 500000) titleInsuranceFee = 1000;

  let titleEscrowFee = 800;
  if (homePrice <= 350000) titleEscrowFee = 610;
  else if (homePrice <= 500000) titleEscrowFee = 700;

  const cityConf = CITY_CONFIGS[locationKey] || CITY_CONFIGS["phoenix"];
  const recordingFee = 75 + cityConf.recordingFee;

  return originationFee + programFee + creditReportFee + appraisalFee + titleInsuranceFee + titleEscrowFee + recordingFee;
}

export default function DownPaymentCalculatorPage() {
  // Group 1: Property Information
  const [homePriceStr, setHomePriceStr] = useState("400,000");
  const [locationKey, setLocationKey] = useState("phoenix");

  // Group 2: Financial Profile
  const [annualIncomeStr, setAnnualIncomeStr] = useState("120,000");
  const [monthlyDebtStr, setMonthlyDebtStr] = useState("500");
  const [creditScore, setCreditScore] = useState("760");

  // Group 3: Loan Details
  const [loanType, setLoanType] = useState("conventional");
  const [interestRateStr, setInterestRateStr] = useState("4.5");
  const [loanTerm, setLoanTerm] = useState(30);

  // Group 4: Down Payment
  const [downDollarStr, setDownDollarStr] = useState("40,000");
  const [downPercentStr, setDownPercentStr] = useState("10");

  // Group 5: Additional Costs
  const [propertyTaxRateStr, setPropertyTaxRateStr] = useState("0.72");
  const [annualInsuranceStr, setAnnualInsuranceStr] = useState("1,200");
  const [monthlyHOAStr, setMonthlyHOAStr] = useState("0");

  // Location Selector Handler
  const handleLocationChange = (loc: string) => {
    setLocationKey(loc);
    const conf = CITY_CONFIGS[loc];
    if (conf) {
      setPropertyTaxRateStr(conf.taxRate.toString());
    }
  };

  // Synchronize Down Payment Amount & Percent
  const handleHomePriceChange = (valStr: string) => {
    const rawVal = valStr.replace(/[^0-9]/g, "");
    const price = rawVal ? parseInt(rawVal, 10) : 0;
    setHomePriceStr(price ? price.toLocaleString("en-US") : "");

    const pct = parseFloat(downPercentStr) || 0;
    if (price > 0 && pct >= 0) {
      const dollar = Math.round((price * pct) / 100);
      setDownDollarStr(dollar.toLocaleString("en-US"));
    }
  };

  const handleDownDollarChange = (valStr: string) => {
    const rawVal = valStr.replace(/[^0-9]/g, "");
    const dollar = rawVal ? parseInt(rawVal, 10) : 0;
    setDownDollarStr(dollar ? dollar.toLocaleString("en-US") : "");

    const price = parseCurrency(homePriceStr);
    if (price > 0) {
      const pct = ((dollar / price) * 100).toFixed(1);
      setDownPercentStr(pct);
    }
  };

  const handleDownPercentChange = (valStr: string) => {
    setDownPercentStr(valStr);
    const pct = parseFloat(valStr) || 0;
    const price = parseCurrency(homePriceStr);
    if (price > 0) {
      const dollar = Math.round((price * pct) / 100);
      setDownDollarStr(dollar ? dollar.toLocaleString("en-US") : "0");
    }
  };

  const handleLoanTypeChange = (type: string) => {
    setLoanType(type);
    const price = parseCurrency(homePriceStr);
    let defaultPct = 20;
    if (type === "fha") defaultPct = 3.5;
    else if (type === "va" || type === "usda") defaultPct = 0;

    setDownPercentStr(defaultPct.toString());
    if (price > 0) {
      const dollar = Math.round((price * defaultPct) / 100);
      setDownDollarStr(dollar ? dollar.toLocaleString("en-US") : "0");
    }
  };

  // ─── Perform Calculations ─────────────────────────────────────────────────
  const calcResult = useMemo(() => {
    const homePrice = parseCurrency(homePriceStr);
    const downDollar = parseCurrency(downDollarStr);
    const downPercent = parseFloat(downPercentStr) || 0;
    const annualIncome = parseCurrency(annualIncomeStr);
    const monthlyDebt = parseCurrency(monthlyDebtStr);
    const interestRate = parseFloat(interestRateStr) || 0;
    const propertyTaxRate = parseFloat(propertyTaxRateStr) || 0;
    const annualInsurance = parseCurrency(annualInsuranceStr);
    const monthlyHOA = parseCurrency(monthlyHOAStr);

    const loanAmount = Math.max(0, homePrice - downDollar);
    const closingCosts = calculateClosingCosts(homePrice, loanAmount, locationKey, loanType);
    const requiredSavings = downDollar + closingCosts;

    // Monthly Mortgage Principal & Interest
    const monthlyPI = calculateMortgagePayment(loanAmount, interestRate, loanTerm);

    // Monthly Property Tax
    const monthlyTax = (homePrice * (propertyTaxRate / 100)) / 12;

    // Monthly Homeowners Insurance
    const monthlyInsurance = annualInsurance / 12;

    // Monthly PMI / MIP
    let monthlyPMI = 0;
    if (loanType === "conventional" && downPercent < 20) {
      const pmiRate = 0.005; // 0.5% annual PMI rate default
      monthlyPMI = (loanAmount * pmiRate) / 12;
    } else if (loanType === "fha") {
      const mipRate = 0.0055; // FHA annual MIP
      monthlyPMI = (loanAmount * mipRate) / 12;
    }

    const totalMonthlyPayment = monthlyPI + monthlyTax + monthlyInsurance + monthlyPMI + monthlyHOA;

    // Affordability Metrics
    const monthlyIncome = annualIncome / 12;
    const housingRatio = monthlyIncome > 0 ? (totalMonthlyPayment / monthlyIncome) * 100 : 0;
    const dtiRatio = monthlyIncome > 0 ? ((totalMonthlyPayment + monthlyDebt) / monthlyIncome) * 100 : 0;

    return {
      homePrice,
      downDollar,
      downPercent,
      loanAmount,
      closingCosts,
      requiredSavings,
      interestRate,
      loanTerm,
      monthlyPI,
      monthlyTax,
      monthlyInsurance,
      monthlyHOA,
      monthlyPMI,
      totalMonthlyPayment,
      monthlyIncome,
      housingRatio,
      dtiRatio,
    };
  }, [
    homePriceStr,
    downDollarStr,
    downPercentStr,
    annualIncomeStr,
    monthlyDebtStr,
    interestRateStr,
    loanTerm,
    locationKey,
    loanType,
    propertyTaxRateStr,
    annualInsuranceStr,
    monthlyHOAStr,
  ]);

  // ─── Scenarios Table Data ────────────────────────────────────────────────
  const scenarios = useMemo(() => {
    const homePrice = parseCurrency(homePriceStr);
    const interestRate = parseFloat(interestRateStr) || 0;
    const propertyTaxRate = parseFloat(propertyTaxRateStr) || 0;
    const annualInsurance = parseCurrency(annualInsuranceStr);
    const monthlyHOA = parseCurrency(monthlyHOAStr);

    const list = [
      { downPercent: 0, label: "0% (No Down Payment)" },
      { downPercent: 3, label: "3% (Minimum)" },
      { downPercent: 5, label: "5% Down" },
      { downPercent: 10, label: "10% Down" },
      { downPercent: 15, label: "15% Down" },
      { downPercent: 20, label: "20% Down (Recommended)" },
      { downPercent: 25, label: "25% Down" },
    ];

    return list.map((s) => {
      const downAmt = (homePrice * s.downPercent) / 100;
      const loanAmt = Math.max(0, homePrice - downAmt);
      const pi = calculateMortgagePayment(loanAmt, interestRate, loanTerm);
      const tax = (homePrice * (propertyTaxRate / 100)) / 12;
      const ins = annualInsurance / 12;
      let pmi = 0;
      if (s.downPercent < 20) {
        pmi = (loanAmt * 0.005) / 12;
      }
      const total = pi + tax + ins + pmi + monthlyHOA;

      return {
        ...s,
        downAmt,
        loanAmt,
        totalMonthly: total,
      };
    });
  }, [homePriceStr, interestRateStr, loanTerm, propertyTaxRateStr, annualInsuranceStr, monthlyHOAStr]);

  return (
    <div className="min-h-screen bg-[#faf7f0] text-[#32353C] font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-[#052316] text-white pt-12 pb-16 px-4 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-[32px] md:text-[44px] font-bold mb-3 tracking-tight font-playfair">
            Down Payment Calculator
          </h1>
          <p className="text-[#c8c8b8] text-[15px] md:text-[17px] max-w-3xl mx-auto leading-relaxed">
            Calculate your down payment requirements, total upfront cash needed, monthly payment breakdown, PMI costs, and affordability ratios for buying a home in Arizona.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 lg:px-8 -mt-8 pb-20">
        <div className="bg-white rounded-2xl border border-[#e0e0e0] shadow-sm p-6 lg:p-10 space-y-10">
          <h3 className="text-[22px] font-bold text-[#32353C] pb-3 border-b border-[#e0e0e0]">
            Enter Your Details
          </h3>

          {/* Form Inputs Grid (3 Groups Top, 2 Groups Bottom) */}
          <div className="space-y-8">
            
            {/* Top Row: Groups 1, 2, 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Group 1: Property Information */}
              <div className="bg-[#f8f9fa] p-5 rounded-xl border border-[#e0e0e0] space-y-4">
                <h4 className="text-[16px] font-bold text-[#4CAF50] border-b border-[#e0e0e0] pb-2">
                  Property Information
                </h4>
                
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <label htmlFor="home-price" className="text-[13.5px] font-medium text-[#32353C]">Home Price ($)</label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[10px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Total purchase price agreed upon for the home.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">$</span>
                    <input
                      type="text"
                      id="home-price"
                      value={homePriceStr}
                      onChange={(e) => handleHomePriceChange(e.target.value)}
                      placeholder="Home Price"
                      className="w-full h-[42px] pl-8 pr-3 bg-white border border-[#e0e0e0] rounded-md text-[14.5px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <label htmlFor="location" className="text-[13.5px] font-medium text-[#32353C]">Location (Arizona)</label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[10px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-52 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Select your city to calculate location-specific recording fees &amp; property taxes.
                      </div>
                    </div>
                  </div>
                  <select
                    id="location"
                    value={locationKey}
                    onChange={(e) => handleLocationChange(e.target.value)}
                    className="w-full h-[42px] px-3 bg-white border border-[#e0e0e0] rounded-md text-[14px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] cursor-pointer"
                  >
                    <optgroup label="Phoenix Metro Area">
                      <option value="phoenix">Phoenix</option>
                      <option value="mesa">Mesa</option>
                      <option value="chandler">Chandler</option>
                      <option value="scottsdale">Scottsdale</option>
                      <option value="gilbert">Gilbert</option>
                      <option value="glendale">Glendale</option>
                      <option value="tempe">Tempe</option>
                      <option value="peoria">Peoria</option>
                      <option value="surprise">Surprise</option>
                      <option value="goodyear">Goodyear</option>
                      <option value="buckeye">Buckeye</option>
                      <option value="avondale">Avondale</option>
                      <option value="queen_creek">Queen Creek</option>
                      <option value="maricopa">Maricopa</option>
                      <option value="paradise_valley">Paradise Valley</option>
                      <option value="apache_junction">Apache Junction</option>
                    </optgroup>
                    <optgroup label="Tucson Area">
                      <option value="tucson">Tucson</option>
                      <option value="marana">Marana</option>
                      <option value="oro_valley">Oro Valley</option>
                    </optgroup>
                    <optgroup label="Other Arizona Cities">
                      <option value="san_tan_valley">San Tan Valley</option>
                      <option value="yuma">Yuma</option>
                      <option value="flagstaff">Flagstaff</option>
                      <option value="lake_havasu">Lake Havasu City</option>
                      <option value="casa_grande">Casa Grande</option>
                      <option value="sierra_vista">Sierra Vista</option>
                      <option value="bullhead_city">Bullhead City</option>
                      <option value="prescott">Prescott</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Group 2: Financial Profile */}
              <div className="bg-[#f8f9fa] p-5 rounded-xl border border-[#e0e0e0] space-y-4">
                <h4 className="text-[16px] font-bold text-[#4CAF50] border-b border-[#e0e0e0] pb-2">
                  Financial Profile
                </h4>

                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <label htmlFor="annual-income" className="text-[13.5px] font-medium text-[#32353C]">Annual Income ($)</label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[10px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Total annual household income before taxes.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">$</span>
                    <input
                      type="text"
                      id="annual-income"
                      value={annualIncomeStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setAnnualIncomeStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      placeholder="Annual Income"
                      className="w-full h-[42px] pl-8 pr-3 bg-white border border-[#e0e0e0] rounded-md text-[14.5px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <label htmlFor="monthly-debt" className="text-[13.5px] font-medium text-[#32353C]">Monthly Debt Payments ($)</label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[10px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Total monthly debt payments (car, student loans, credit cards).
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">$</span>
                    <input
                      type="text"
                      id="monthly-debt"
                      value={monthlyDebtStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setMonthlyDebtStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      placeholder="Monthly Debt"
                      className="w-full h-[42px] pl-8 pr-3 bg-white border border-[#e0e0e0] rounded-md text-[14.5px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <label htmlFor="credit-score" className="text-[13.5px] font-medium text-[#32353C]">Credit Score Range</label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[10px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-52 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Select your credit score range.
                      </div>
                    </div>
                  </div>
                  <select
                    id="credit-score"
                    value={creditScore}
                    onChange={(e) => setCreditScore(e.target.value)}
                    className="w-full h-[42px] px-3 bg-white border border-[#e0e0e0] rounded-md text-[14px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] cursor-pointer"
                  >
                    <option value="760">760+ (Excellent)</option>
                    <option value="720">720-759 (Good to Very Good)</option>
                    <option value="680">680-719 (Fair to Good)</option>
                    <option value="620">620-679 (Poor to below Fair)</option>
                    <option value="619">Below 620 (High Risk)</option>
                  </select>
                </div>
              </div>

              {/* Group 3: Loan Details */}
              <div className="bg-[#f8f9fa] p-5 rounded-xl border border-[#e0e0e0] space-y-4">
                <h4 className="text-[16px] font-bold text-[#4CAF50] border-b border-[#e0e0e0] pb-2">
                  Loan Details
                </h4>

                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <label htmlFor="loan-type" className="text-[13.5px] font-medium text-[#32353C]">Loan Type</label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[10px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-52 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Select mortgage type. Different loans have different down payment rules.
                      </div>
                    </div>
                  </div>
                  <select
                    id="loan-type"
                    value={loanType}
                    onChange={(e) => handleLoanTypeChange(e.target.value)}
                    className="w-full h-[42px] px-3 bg-white border border-[#e0e0e0] rounded-md text-[14px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] cursor-pointer"
                  >
                    <option value="conventional">Conventional Loan</option>
                    <option value="fha">FHA Loan</option>
                    <option value="va">VA Loan</option>
                    <option value="usda">USDA Loan</option>
                  </select>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <label htmlFor="interest-rate" className="text-[13.5px] font-medium text-[#32353C]">Interest Rate (%)</label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[10px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Annual interest rate for your loan.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="interest-rate"
                      value={interestRateStr}
                      onChange={(e) => setInterestRateStr(e.target.value)}
                      placeholder="Interest Rate"
                      className="w-full h-[42px] pl-3.5 pr-8 bg-white border border-[#e0e0e0] rounded-md text-[14.5px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] text-right"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">%</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <label htmlFor="loan-term" className="text-[13.5px] font-medium text-[#32353C]">Loan Term (Years)</label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[10px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Length of your loan in years.
                      </div>
                    </div>
                  </div>
                  <select
                    id="loan-term"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(parseInt(e.target.value, 10))}
                    className="w-full h-[42px] px-3 bg-white border border-[#e0e0e0] rounded-md text-[14px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] cursor-pointer"
                  >
                    <option value={30}>30 Years</option>
                    <option value={20}>20 Years</option>
                    <option value={15}>15 Years</option>
                    <option value={10}>10 Years</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Bottom Row: Groups 4 & 5 Side-by-Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* Group 4: Down Payment */}
              <div className="bg-[#f8f9fa] p-5 rounded-xl border border-[#e0e0e0] space-y-4">
                <h4 className="text-[16px] font-bold text-[#4CAF50] border-b border-[#e0e0e0] pb-2">
                  Down Payment
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <label htmlFor="down-dollar" className="text-[13px] font-medium text-[#32353C]">Down Payment ($)</label>
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666] text-[13px] font-medium pointer-events-none">$</span>
                      <input
                        type="text"
                        id="down-dollar"
                        value={downDollarStr}
                        onChange={(e) => handleDownDollarChange(e.target.value)}
                        placeholder="Amount"
                        className="w-full h-[42px] pl-7 pr-2.5 bg-white border border-[#e0e0e0] rounded-md text-[14px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <label htmlFor="down-percent" className="text-[13px] font-medium text-[#32353C]">Down Payment (%)</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        id="down-percent"
                        value={downPercentStr}
                        onChange={(e) => handleDownPercentChange(e.target.value)}
                        placeholder="Percent"
                        className="w-full h-[42px] pl-2.5 pr-7 bg-white border border-[#e0e0e0] rounded-md text-[14px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] text-right"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] text-[13px] font-medium pointer-events-none">%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-lg border border-[#e0e0e0]">
                  <h5 className="text-[13px] font-bold text-[#32353C] mb-1.5">Selected Loan Type Details:</h5>
                  <div className="text-[12.5px] text-[#666] leading-relaxed">
                    {loanType === "conventional" && (
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Minimum down payment: 3-5%</li>
                        <li>20% down payment avoids PMI</li>
                        <li>Flexible terms available</li>
                        <li>Good credit score recommended</li>
                      </ul>
                    )}
                    {loanType === "fha" && (
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Minimum down payment: 3.5%</li>
                        <li>Lower credit score requirements</li>
                        <li>Requires MIP (Mortgage Insurance Premium)</li>
                        <li>Great for first-time buyers</li>
                      </ul>
                    )}
                    {loanType === "va" && (
                      <ul className="list-disc pl-4 space-y-1">
                        <li>No down payment required ($0 down)</li>
                        <li>No monthly PMI required</li>
                        <li>Must be eligible veteran/service member</li>
                        <li>VA funding fee may apply</li>
                      </ul>
                    )}
                    {loanType === "usda" && (
                      <ul className="list-disc pl-4 space-y-1">
                        <li>No down payment required ($0 down)</li>
                        <li>Must be in eligible rural area</li>
                        <li>Income limits apply</li>
                        <li>USDA guarantee fee required</li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              {/* Group 5: Additional Costs */}
              <div className="bg-[#f8f9fa] p-5 rounded-xl border border-[#e0e0e0] space-y-4">
                <h4 className="text-[16px] font-bold text-[#4CAF50] border-b border-[#e0e0e0] pb-2">
                  Additional Costs
                </h4>

                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <label htmlFor="property-tax" className="text-[13.5px] font-medium text-[#32353C]">Property Tax Rate (%)</label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[10px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Annual property tax rate for selected area.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="property-tax"
                      value={propertyTaxRateStr}
                      onChange={(e) => setPropertyTaxRateStr(e.target.value)}
                      placeholder="Property Tax Rate"
                      className="w-full h-[42px] pl-3.5 pr-8 bg-white border border-[#e0e0e0] rounded-md text-[14.5px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] text-right"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">%</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <label htmlFor="insurance" className="text-[13.5px] font-medium text-[#32353C]">Annual Home Insurance ($)</label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[10px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-52 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Estimated annual cost of homeowners insurance.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">$</span>
                    <input
                      type="text"
                      id="insurance"
                      value={annualInsuranceStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setAnnualInsuranceStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      placeholder="Annual Insurance"
                      className="w-full h-[42px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[14.5px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <label htmlFor="hoa" className="text-[13.5px] font-medium text-[#32353C]">Monthly HOA Fees ($)</label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[10px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Monthly HOA dues if applicable.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">$</span>
                    <input
                      type="text"
                      id="hoa"
                      value={monthlyHOAStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setMonthlyHOAStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      placeholder="Monthly HOA"
                      className="w-full h-[42px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[14.5px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Results Section */}
          <div className="pt-6 border-t border-[#f0f0f0] space-y-8 animate-fadeIn">
            <h3 className="text-[22px] font-bold text-[#32353C]">Your Results</h3>

            {/* Results Grid (4 Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Initial Costs */}
              <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl p-5 space-y-3 shadow-sm">
                <h4 className="text-[15px] font-bold text-[#4CAF50] border-b border-[#e0e0e0] pb-2">Initial Costs</h4>
                <div className="flex justify-between text-[13.5px]">
                  <span className="text-[#666]">Required Savings:</span>
                  <span className="font-bold text-[#32353C]">{formatCurrency(calcResult.requiredSavings)}</span>
                </div>
                <div className="flex justify-between text-[13.5px]">
                  <span className="text-[#666]">Down Payment:</span>
                  <span className="font-semibold text-[#32353C]">{formatCurrency(calcResult.downDollar)}</span>
                </div>
                <div className="flex justify-between text-[13.5px]">
                  <span className="text-[#666]">Estimated Closing Costs:</span>
                  <span className="font-semibold text-[#32353C]">{formatCurrency(calcResult.closingCosts)}</span>
                </div>
              </div>

              {/* Card 2: Loan Details */}
              <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl p-5 space-y-3 shadow-sm">
                <h4 className="text-[15px] font-bold text-[#4CAF50] border-b border-[#e0e0e0] pb-2">Loan Details</h4>
                <div className="flex justify-between text-[13.5px]">
                  <span className="text-[#666]">Total Loan Amount:</span>
                  <span className="font-bold text-[#32353C]">{formatCurrency(calcResult.loanAmount)}</span>
                </div>
                <div className="flex justify-between text-[13.5px]">
                  <span className="text-[#666]">Interest Rate:</span>
                  <span className="font-semibold text-[#32353C]">{calcResult.interestRate}%</span>
                </div>
                <div className="flex justify-between text-[13.5px]">
                  <span className="text-[#666]">Loan Term:</span>
                  <span className="font-semibold text-[#32353C]">{calcResult.loanTerm} Years</span>
                </div>
              </div>

              {/* Card 3: Monthly Payments */}
              <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl p-5 space-y-2.5 shadow-sm">
                <h4 className="text-[15px] font-bold text-[#4CAF50] border-b border-[#e0e0e0] pb-2">Monthly Payments</h4>
                <div className="flex justify-between text-[13px]">
                  <span className="text-[#666]">Principal &amp; Interest:</span>
                  <span className="font-medium text-[#32353C]">{formatCurrency(calcResult.monthlyPI)}</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-[#666]">Property Tax:</span>
                  <span className="font-medium text-[#32353C]">{formatCurrency(calcResult.monthlyTax)}</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-[#666]">Insurance:</span>
                  <span className="font-medium text-[#32353C]">{formatCurrency(calcResult.monthlyInsurance)}</span>
                </div>
                {calcResult.monthlyHOA > 0 && (
                  <div className="flex justify-between text-[13px]">
                    <span className="text-[#666]">HOA Dues:</span>
                    <span className="font-medium text-[#32353C]">{formatCurrency(calcResult.monthlyHOA)}</span>
                  </div>
                )}
                {calcResult.monthlyPMI > 0 && (
                  <div className="flex justify-between text-[13px]">
                    <span className="text-[#666]">PMI / MIP:</span>
                    <span className="font-medium text-[#FF9800]">{formatCurrency(calcResult.monthlyPMI)}</span>
                  </div>
                )}
                <div className="flex justify-between text-[14px] pt-2 border-t border-[#e0e0e0] font-bold text-[#32353C]">
                  <span>Total Monthly Payment:</span>
                  <span className="text-[#4CAF50]">{formatCurrency(calcResult.totalMonthlyPayment)}</span>
                </div>
              </div>

              {/* Card 4: Affordability Metrics */}
              <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl p-5 space-y-3 shadow-sm">
                <h4 className="text-[15px] font-bold text-[#4CAF50] border-b border-[#e0e0e0] pb-2">Affordability Metrics</h4>
                <div className="flex justify-between text-[13.5px]">
                  <span className="text-[#666]">Housing Cost Ratio:</span>
                  <span className={`font-bold ${calcResult.housingRatio > 30 ? "text-[#FF9800]" : "text-[#4CAF50]"}`}>
                    {calcResult.housingRatio.toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between text-[13.5px]">
                  <span className="text-[#666]">Debt-to-Income (DTI):</span>
                  <span className={`font-bold ${calcResult.dtiRatio > 43 ? "text-[#FF9800]" : "text-[#4CAF50]"}`}>
                    {calcResult.dtiRatio.toFixed(1)}%
                  </span>
                </div>
                <p className="text-[11.5px] text-[#666] italic pt-1">
                  {calcResult.dtiRatio > 43
                    ? "DTI exceeds standard 43% guideline. Consider larger down payment or lower debt."
                    : "Ratios are within standard qualifying guidelines."}
                </p>
              </div>

            </div>

            {/* Visual Representation & Key Insights */}
            <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-2xl p-6 lg:p-8 space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Donut Chart */}
                <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-[#e0e0e0] shadow-sm flex flex-col items-center justify-center">
                  <InteractivePieChart
                    title="Monthly Payment Distribution"
                    donut={true}
                    centerTextTitle="Monthly Total"
                    centerTextSub={formatCurrency(calcResult.totalMonthlyPayment)}
                    dataItems={[
                      { label: "Principal & Interest", value: calcResult.monthlyPI, color: "#6ca220" },
                      { label: "Property Tax", value: calcResult.monthlyTax, color: "#4a4a4a" },
                      { label: "Insurance", value: calcResult.monthlyInsurance, color: "#64B5F6" },
                      { label: "PMI / MIP", value: calcResult.monthlyPMI, color: "#BA68C8" },
                      { label: "HOA Dues", value: calcResult.monthlyHOA, color: "#FF9800" },
                    ]}
                  />
                </div>

                {/* Key Insights */}
                <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-[#e0e0e0] shadow-sm space-y-5">
                  <h4 className="text-[18px] font-bold text-[#32353C] border-b border-[#e0e0e0] pb-2">
                    Key Insights &amp; Recommendations
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-[14px] font-bold text-[#4CAF50] mb-2">Monthly Payment Breakdown</h5>
                      <ul className="space-y-1.5 text-[13px] text-[#555]">
                        <li className="flex justify-between">
                          <span>Principal &amp; Interest:</span>
                          <span className="font-semibold text-[#32353C]">{formatCurrency(calcResult.monthlyPI)}</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Property Tax:</span>
                          <span className="font-semibold text-[#32353C]">{formatCurrency(calcResult.monthlyTax)}</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Insurance:</span>
                          <span className="font-semibold text-[#32353C]">{formatCurrency(calcResult.monthlyInsurance)}</span>
                        </li>
                        {calcResult.monthlyPMI > 0 && (
                          <li className="flex justify-between">
                            <span>PMI / MIP:</span>
                            <span className="font-semibold text-[#FF9800]">{formatCurrency(calcResult.monthlyPMI)}</span>
                          </li>
                        )}
                        <li className="flex justify-between pt-1 border-t border-[#f0f0f0] font-bold text-[#32353C]">
                          <span>Total Monthly Payment:</span>
                          <span>{formatCurrency(calcResult.totalMonthlyPayment)}</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-[14px] font-bold text-[#4CAF50] mb-2">Recommendations</h5>
                      <ul className="list-disc pl-4 space-y-1.5 text-[12.5px] text-[#555] leading-relaxed">
                        {calcResult.monthlyPMI > 0 && (
                          <li>Increase down payment to 20% to eliminate monthly PMI ({formatCurrency(calcResult.monthlyPMI)}/mo).</li>
                        )}
                        <li>Down payment of {calcResult.downPercent}% requires {formatCurrency(calcResult.downDollar)} upfront.</li>
                        <li>Total closing costs estimated at {formatCurrency(calcResult.closingCosts)}.</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Down Payment Scenarios Comparison Table */}
            <div className="pt-4">
              <h3 className="text-[20px] font-bold text-[#4CAF50] mb-4">
                Down Payment Scenarios Comparison
              </h3>
              <div className="overflow-x-auto rounded-xl border border-[#e0e0e0] shadow-sm">
                <table className="w-full text-left border-collapse text-[13.5px]">
                  <thead>
                    <tr className="bg-[#052316] text-white">
                      <th className="py-3 px-4 font-semibold">Down %</th>
                      <th className="py-3 px-4 font-semibold">Down Payment ($)</th>
                      <th className="py-3 px-4 font-semibold">Loan Amount ($)</th>
                      <th className="py-3 px-4 font-semibold">Total Monthly Payment ($)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scenarios.map((scen, idx) => (
                      <tr
                        key={scen.downPercent}
                        className={idx % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"}
                      >
                        <td className="py-3 px-4 font-bold text-[#32353C]">{scen.label}</td>
                        <td className="py-3 px-4 text-[#32353C] font-semibold">{formatCurrency(scen.downAmt)}</td>
                        <td className="py-3 px-4 text-[#32353C]">{formatCurrency(scen.loanAmt)}</td>
                        <td className="py-3 px-4 font-bold text-[#4CAF50]">{formatCurrency(scen.totalMonthly)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
