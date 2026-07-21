"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { InteractiveLineChart } from "../component/InteractiveCharts";

// ─── Arizona Counties Tax Schedule ──────────────────────────────────────────
const ARIZONA_COUNTY_TAXES: Record<string, { label: string; tax: number }> = {
  maricopa: { label: "Maricopa County", tax: 1700 },
  apache: { label: "Apache County", tax: 1650 },
  cochise: { label: "Cochise County", tax: 1750 },
  coconino: { label: "Coconino County", tax: 1680 },
  gila: { label: "Gila County", tax: 1720 },
  graham: { label: "Graham County", tax: 1730 },
  greenlee: { label: "Greenlee County", tax: 1740 },
  la_paz: { label: "La Paz County", tax: 1760 },
  mohave: { label: "Mohave County", tax: 1770 },
  navajo: { label: "Navajo County", tax: 1780 },
  pima: { label: "Pima County", tax: 1800 },
  pinal: { label: "Pinal County", tax: 1790 },
  santa_cruz: { label: "Santa Cruz County", tax: 1810 },
  yavapai: { label: "Yavapai County", tax: 1820 },
  yuma: { label: "Yuma County", tax: 1830 },
};

// ─── Helper Functions ───────────────────────────────────────────────────────
const parseCurrency = (val: string | number): number => {
  if (!val) return 0;
  const clean = val.toString().replace(/[^0-9.]/g, "");
  return parseFloat(clean) || 0;
};

const formatCurrency = (num: number): string => {
  return "$" + Number(num).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

function calculateMortgagePayment(principal: number, annualRatePct: number, years: number): number {
  const monthlyRate = annualRatePct / 100 / 12;
  const n = years * 12;
  if (monthlyRate === 0) return principal / n;
  return (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
}

function generateAmortization(principal: number, annualRatePct: number, years: number, months: number) {
  const schedule = [];
  const monthlyRate = annualRatePct / 100 / 12;
  const payment = calculateMortgagePayment(principal, annualRatePct, years);
  let balance = principal;
  for (let i = 0; i < months; i++) {
    const interest = balance * monthlyRate;
    const principalPaid = payment - interest;
    balance -= principalPaid;
    schedule.push({ interest, principalPaid, balance: Math.max(0, balance) });
  }
  return schedule;
}

function calculateClosingCosts(homePrice: number, loanAmount: number): number {
  const originationFee = 1000 + 95;
  const appraisalFee = 650;
  const recordingFee = 75;

  let titleInsuranceFee = 1200;
  if (loanAmount <= 300000) titleInsuranceFee = 895;
  else if (loanAmount <= 500000) titleInsuranceFee = 1000;

  let titleEscrowFee = 800;
  if (homePrice <= 350000) titleEscrowFee = 610;
  else if (homePrice <= 500000) titleEscrowFee = 700;

  return originationFee + appraisalFee + titleInsuranceFee + titleEscrowFee + recordingFee;
}

// ─── Main Component ─────────────────────────────────────────────────────────
export default function RentVsBuyCalculatorPage() {
  // Renting Inputs
  const [monthlyRentStr, setMonthlyRentStr] = useState("1,500");
  const [rentIncreaseStr, setRentIncreaseStr] = useState("3.0");

  // Assumptions Inputs
  const [investmentRateStr, setInvestmentRateStr] = useState("5.0");
  const [taxRateStr, setTaxRateStr] = useState("18.0");

  // Buying Inputs
  const [homePriceStr, setHomePriceStr] = useState("350,000");
  const [downPaymentStr, setDownPaymentStr] = useState("70,000");
  const [downPaymentPercentStr, setDownPaymentPercentStr] = useState("20.0");
  const [interestRateStr, setInterestRateStr] = useState("6.5");
  const [loanTerm, setLoanTerm] = useState(30);
  const [selectedCounty, setSelectedCounty] = useState("maricopa");
  const [propertyTaxStr, setPropertyTaxStr] = useState("1,700");

  const [appreciationRateStr, setAppreciationRateStr] = useState("4.0");
  const [timeframeStr, setTimeframeStr] = useState("10");
  const [maintenanceCostStr, setMaintenanceCostStr] = useState("150");

  // Synchronize Down Payment Amount & Percent
  const handleHomePriceChange = (valStr: string) => {
    const rawVal = valStr.replace(/[^0-9]/g, "");
    const price = rawVal ? parseInt(rawVal, 10) : 0;
    setHomePriceStr(price ? price.toLocaleString("en-US") : "");

    const pct = parseCurrency(downPaymentPercentStr);
    if (price > 0 && pct > 0) {
      const amt = (price * pct) / 100;
      setDownPaymentStr(amt ? Math.round(amt).toLocaleString("en-US") : "0");
    }
  };

  const handleDownPaymentAmountChange = (valStr: string) => {
    const rawVal = valStr.replace(/[^0-9]/g, "");
    const amt = rawVal ? parseInt(rawVal, 10) : 0;
    setDownPaymentStr(amt ? amt.toLocaleString("en-US") : "");

    const price = parseCurrency(homePriceStr);
    if (price > 0) {
      const pct = ((amt / price) * 100).toFixed(1);
      setDownPaymentPercentStr(pct);
    }
  };

  const handleDownPaymentPercentChange = (valStr: string) => {
    setDownPaymentPercentStr(valStr);
    const pct = parseFloat(valStr) || 0;
    const price = parseCurrency(homePriceStr);
    if (price > 0) {
      const amt = (price * pct) / 100;
      setDownPaymentStr(amt ? Math.round(amt).toLocaleString("en-US") : "0");
    }
  };

  const handleCountyChange = (countyKey: string) => {
    setSelectedCounty(countyKey);
    const countyData = ARIZONA_COUNTY_TAXES[countyKey];
    if (countyData) {
      setPropertyTaxStr(countyData.tax.toLocaleString("en-US"));
    }
  };

  // ─── Perform Calculations ─────────────────────────────────────────────────
  const calcResults = useMemo(() => {
    const monthlyRent = parseCurrency(monthlyRentStr);
    const rentIncrease = (parseFloat(rentIncreaseStr) || 0) / 100;
    const homePrice = parseCurrency(homePriceStr);
    const downPayment = parseCurrency(downPaymentStr);
    const interestRate = parseFloat(interestRateStr) || 0;
    const annualTax = parseCurrency(propertyTaxStr);
    const appreciationRate = (parseFloat(appreciationRateStr) || 0) / 100;
    const investmentRate = (parseFloat(investmentRateStr) || 0) / 100;
    const taxRate = (parseFloat(taxRateStr) || 0) / 100;
    const years = Math.max(1, parseInt(timeframeStr, 10) || 10);
    const monthlyMaintenance = parseCurrency(maintenanceCostStr);

    const loanAmount = Math.max(0, homePrice - downPayment);
    const monthlyMortgage = calculateMortgagePayment(loanAmount, interestRate, loanTerm);
    const closingCosts = calculateClosingCosts(homePrice, loanAmount);
    const upfrontCosts = downPayment + closingCosts;

    // Amortization schedule
    const schedule = generateAmortization(loanAmount, interestRate, loanTerm, years * 12);
    const totalInterest = schedule.reduce((sum, m) => sum + m.interest, 0);
    const totalPropertyTax = annualTax * years;
    const taxBenefit = (totalInterest + totalPropertyTax) * taxRate;

    const totalMortgageCost = monthlyMortgage * 12 * years;
    const totalMaintenanceCost = monthlyMaintenance * 12 * years;

    const futureHomePrice = homePrice * Math.pow(1 + appreciationRate, years);
    const remainingBalance = schedule.length > 0 ? schedule[schedule.length - 1].balance : 0;
    const equityGain = futureHomePrice - remainingBalance;

    const opportunityCost = upfrontCosts * (Math.pow(1 + investmentRate, years) - 1);
    const totalOutlay = upfrontCosts + totalMortgageCost + totalPropertyTax + totalMaintenanceCost;
    const effectiveBuyingCost = totalOutlay - equityGain - taxBenefit + opportunityCost;

    // Total renting cost
    let totalRentingCost = 0;
    let currentRent = monthlyRent;
    for (let y = 0; y < years; y++) {
      totalRentingCost += currentRent * 12;
      currentRent *= 1 + rentIncrease;
    }

    // Monthly Buying breakdown
    const monthlyTax = annualTax / 12;
    const totalMonthlyBuying = monthlyMortgage + monthlyTax + monthlyMaintenance;
    const monthlyDifference = totalMonthlyBuying - monthlyRent;

    // Net Savings
    const netSavings = totalRentingCost - effectiveBuyingCost;

    // Break-even point calculation
    let breakEvenYear = 0;
    let accRent = 0;
    let accBuy = upfrontCosts;
    let curRent = monthlyRent;

    for (let yr = 1; yr <= years; yr++) {
      accRent += curRent * 12;
      curRent *= 1 + rentIncrease;

      const yrMortgage = monthlyMortgage * 12;
      const yrTax = monthlyTax * 12;
      const yrMaint = monthlyMaintenance * 12;
      const yrHomeVal = homePrice * Math.pow(1 + appreciationRate, yr);
      const yrEquity = yrHomeVal - homePrice;
      const yrTaxBen = (yrMortgage * 0.3 + yrTax) * taxRate;

      accBuy += yrMortgage + yrTax + yrMaint - yrTaxBen - yrEquity;

      if (accBuy < accRent) {
        breakEvenYear = yr;
        break;
      }
    }

    // Yearly chart series
    const yearlyRentData: number[] = [];
    const yearlyBuyData: number[] = [];
    const labels: string[] = [];

    let chartRentAcc = 0;
    let chartCurRent = monthlyRent;
    let chartBuyAcc = upfrontCosts;

    for (let yr = 0; yr <= years; yr++) {
      labels.push(`Year ${yr}`);
      if (yr === 0) {
        yearlyRentData.push(0);
        yearlyBuyData.push(upfrontCosts);
      } else {
        chartRentAcc += chartCurRent * 12;
        chartCurRent *= 1 + rentIncrease;

        const yrHomeVal = homePrice * Math.pow(1 + appreciationRate, yr);
        const yrRemBal = yr <= schedule.length / 12 ? schedule[yr * 12 - 1]?.balance || 0 : 0;
        const yrEq = yrHomeVal - yrRemBal;
        const yrInterest = schedule.slice((yr - 1) * 12, yr * 12).reduce((s, m) => s + m.interest, 0);
        const yrTaxBen = (yrInterest + annualTax) * taxRate;

        chartBuyAcc += monthlyMortgage * 12 + annualTax + monthlyMaintenance * 12;

        yearlyRentData.push(chartRentAcc);
        yearlyBuyData.push(Math.max(0, chartBuyAcc - yrEq - yrTaxBen));
      }
    }

    return {
      monthlyRent,
      monthlyMortgage,
      monthlyTax,
      monthlyMaintenance,
      totalMonthlyBuying,
      monthlyDifference,
      downPayment,
      closingCosts,
      upfrontCosts,
      effectiveBuyingCost,
      totalRentingCost,
      netSavings,
      breakEvenYear,
      futureHomePrice,
      futureHomeValue: futureHomePrice,
      equityBuilt: futureHomePrice - remainingBalance,
      taxBenefits: taxBenefit,
      yearlyRentData,
      yearlyBuyData,
      labels,
    };
  }, [
    monthlyRentStr,
    rentIncreaseStr,
    homePriceStr,
    downPaymentStr,
    interestRateStr,
    loanTerm,
    propertyTaxStr,
    appreciationRateStr,
    investmentRateStr,
    taxRateStr,
    timeframeStr,
    maintenanceCostStr,
  ]);

  return (
    <div className="min-h-screen bg-[#faf7f0] text-[#32353C] font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-[#052316] text-white pt-12 pb-16 px-4 lg:px-8 mt-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-[32px] md:text-[44px] font-bold mb-3 tracking-tight font-playfair">
            Rent Vs Buy Calculator
          </h1>
          <p className="text-[#c8c8b8] text-[15px] md:text-[17px] max-w-3xl mx-auto leading-relaxed">
            Evaluate whether renting or buying a home in Arizona makes better financial sense based on long-term costs, equity growth, property appreciation, and tax benefits.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 lg:px-8 -mt-8 pb-20">
        <div className="bg-white rounded-2xl border border-[#e0e0e0] shadow-sm p-6 lg:p-10 space-y-10">

          {/* Top Row: Renting Inputs & Assumptions Side-by-Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Box 1: Renting Inputs */}
            <div className="bg-[#faf7f0]/60 p-5 rounded-xl border border-[#e0e0e0]">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#e0e0e0]">
                <h3 className="text-[19px] font-bold text-[#32353C]">Renting Inputs</h3>
                <div className="relative group cursor-help">
                  <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                    Enter your current renting details.
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <label htmlFor="monthly-rent" className="text-[14px] font-medium text-[#32353C]">
                      Monthly Rent ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-52 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Enter your current monthly rent payment.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">$</span>
                    <input
                      type="text"
                      id="monthly-rent"
                      value={monthlyRentStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setMonthlyRentStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      placeholder="Monthly Rent"
                      className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <label htmlFor="rent-increase" className="text-[14px] font-medium text-[#32353C]">
                      Annual Rent Increase Rate (%)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Default is 3.0% per year.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="rent-increase"
                      value={rentIncreaseStr}
                      onChange={(e) => setRentIncreaseStr(e.target.value)}
                      placeholder="Rent Increase (%)"
                      className="w-full h-[45px] pl-3.5 pr-8 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] text-right"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2: Assumptions */}
            <div className="bg-[#faf7f0]/60 p-5 rounded-xl border border-[#e0e0e0]">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#e0e0e0]">
                <h3 className="text-[19px] font-bold text-[#32353C]">Assumptions</h3>
                <div className="relative group cursor-help">
                  <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                    Financial assumptions for calculations.
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <label htmlFor="investment-rate" className="text-[14px] font-medium text-[#32353C]">
                      Investment Return Rate (% annually)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Used for opportunity cost of down payment &amp; closing costs (default 5.0%).
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="investment-rate"
                      value={investmentRateStr}
                      onChange={(e) => setInvestmentRateStr(e.target.value)}
                      placeholder="Investment Return Rate"
                      className="w-full h-[45px] pl-3.5 pr-8 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] text-right"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">%</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <label htmlFor="tax-rate" className="text-[14px] font-medium text-[#32353C]">
                      Federal Tax Rate (%)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Default tax rate used for mortgage interest &amp; other deductions (default 18.0%).
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="tax-rate"
                      value={taxRateStr}
                      onChange={(e) => setTaxRateStr(e.target.value)}
                      placeholder="Tax Rate"
                      className="w-full h-[45px] pl-3.5 pr-8 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] text-right"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">%</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Box 3: Buying Inputs Section */}
          <div className="pt-4 border-t border-[#f0f0f0]">
            <div className="flex items-center gap-2 pb-3 mb-6 border-b border-[#f0f0f0]">
              <h3 className="text-[20px] font-bold text-[#32353C]">Buying Inputs</h3>
              <div className="relative group cursor-help">
                <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                  Enter your potential home purchase details.
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-5">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="home-price" className="text-[14px] font-medium text-[#32353C]">
                      Home Price ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        The purchase price of your home.
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
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Enter down payment amount or percentage (minimum 3%).
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <input
                        type="text"
                        id="down-payment"
                        value={downPaymentStr}
                        onChange={(e) => handleDownPaymentAmountChange(e.target.value)}
                        placeholder="Amount ($)"
                        className="w-full h-[45px] pl-3.5 pr-8 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                      />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">$</span>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        id="down-payment-percent"
                        value={downPaymentPercentStr}
                        onChange={(e) => handleDownPaymentPercentChange(e.target.value)}
                        placeholder="Percentage (%)"
                        className="w-full h-[45px] pl-3.5 pr-8 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] text-right"
                      />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">%</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <label htmlFor="interest-rate" className="text-[14px] font-medium text-[#32353C]">
                        Interest Rate (%)
                      </label>
                      <div className="relative group cursor-help">
                        <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-44 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                          Annual mortgage interest rate.
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
                        className="w-full h-[45px] pl-3.5 pr-8 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] text-right"
                      />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">%</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <label htmlFor="loan-term" className="text-[14px] font-medium text-[#32353C]">
                        Loan Term (Years)
                      </label>
                      <div className="relative group cursor-help">
                        <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                          Select mortgage duration.
                        </div>
                      </div>
                    </div>
                    <select
                      id="loan-term"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(parseInt(e.target.value, 10))}
                      className="w-full h-[45px] px-3 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] cursor-pointer"
                    >
                      <option value={30}>30 Years</option>
                      <option value={20}>20 Years</option>
                      <option value={15}>15 Years</option>
                      <option value={10}>10 Years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="county-select" className="text-[14px] font-medium text-[#32353C]">
                      County (Arizona)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Select your county to auto-set annual property taxes.
                      </div>
                    </div>
                  </div>
                  <select
                    id="county-select"
                    value={selectedCounty}
                    onChange={(e) => handleCountyChange(e.target.value)}
                    className="w-full h-[45px] px-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] cursor-pointer"
                  >
                    {Object.entries(ARIZONA_COUNTY_TAXES).map(([key, data]) => (
                      <option key={key} value={key}>
                        {data.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="property-tax" className="text-[14px] font-medium text-[#32353C]">
                      Annual Property Taxes ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Auto-populates from county selection; override if needed.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">$</span>
                    <input
                      type="text"
                      id="property-tax"
                      value={propertyTaxStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setPropertyTaxStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      placeholder="Property Taxes"
                      className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-5">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="appreciation-rate" className="text-[14px] font-medium text-[#32353C]">
                      Home Appreciation (% annually)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Default is 4.0% per year.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="appreciation-rate"
                      value={appreciationRateStr}
                      onChange={(e) => setAppreciationRateStr(e.target.value)}
                      placeholder="Appreciation Rate"
                      className="w-full h-[45px] pl-3.5 pr-8 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] text-right"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">%</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="buying-investment-rate" className="text-[14px] font-medium text-[#32353C]">
                      Investment Return (% annually)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Used for opportunity cost of down payment &amp; closing costs (default 5.0%).
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="buying-investment-rate"
                      value={investmentRateStr}
                      onChange={(e) => setInvestmentRateStr(e.target.value)}
                      placeholder="Investment Return Rate"
                      className="w-full h-[45px] pl-3.5 pr-8 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] text-right"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">%</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="buying-tax-rate" className="text-[14px] font-medium text-[#32353C]">
                      Federal Tax Rate (%)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Default tax rate used for mortgage interest &amp; other deductions (default 18.0%).
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="buying-tax-rate"
                      value={taxRateStr}
                      onChange={(e) => setTaxRateStr(e.target.value)}
                      placeholder="Tax Rate"
                      className="w-full h-[45px] pl-3.5 pr-8 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] text-right"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">%</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="timeframe" className="text-[14px] font-medium text-[#32353C]">
                      Comparison Timeframe (Years)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-52 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Number of years for the comparison analysis.
                      </div>
                    </div>
                  </div>
                  <input
                    type="number"
                    id="timeframe"
                    value={timeframeStr}
                    onChange={(e) => setTimeframeStr(e.target.value)}
                    placeholder="Timeframe (Years)"
                    className="w-full h-[45px] px-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="maintenance-cost" className="text-[14px] font-medium text-[#32353C]">
                      Monthly Maintenance ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">?</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Include HOA fees and home maintenance expenses.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">$</span>
                    <input
                      type="text"
                      id="maintenance-cost"
                      value={maintenanceCostStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setMaintenanceCostStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      placeholder="Maintenance Costs"
                      className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="pt-6 border-t border-[#f0f0f0] space-y-8 animate-fadeIn">
            <h2 className="text-[24px] font-semibold text-[#32353C] pb-3 border-b-2 border-[#f0f0f0]">
              Rent vs. Buy Results &amp; Analysis
            </h2>

            {/* Financial Summary Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left Column: Current Costs & Investment */}
              <div className="space-y-6">
                <h3 className="text-[18px] font-bold text-[#4CAF50] pb-2 border-b border-[#e0e0e0]">
                  Current Costs &amp; Investment
                </h3>

                {/* Monthly Cost Comparison */}
                <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl p-5 space-y-4 shadow-sm">
                  <h4 className="text-[15px] font-semibold text-[#32353C]">Monthly Cost Comparison</h4>
                  
                  <div className="flex justify-between items-center text-[14px] py-1 border-b border-[#e0e0e0]/60">
                    <span className="text-[#666]">Current Monthly Rent:</span>
                    <span className="font-bold text-[#32353C]">{formatCurrency(calcResults.monthlyRent)}</span>
                  </div>

                  <div className="pt-1">
                    <span className="text-[13.5px] font-medium text-[#666] block mb-2">Monthly Payment if Buying:</span>
                    <div className="grid grid-cols-3 gap-2 text-center bg-white p-3 rounded-lg border border-[#e0e0e0]">
                      <div>
                        <span className="text-[15px] font-bold text-[#4CAF50] block">{formatCurrency(calcResults.monthlyMortgage)}</span>
                        <span className="text-[11px] text-[#888] font-semibold uppercase">Mortgage</span>
                      </div>
                      <div>
                        <span className="text-[15px] font-bold text-[#32353C] block">{formatCurrency(calcResults.monthlyTax)}</span>
                        <span className="text-[11px] text-[#888] font-semibold uppercase">Tax</span>
                      </div>
                      <div>
                        <span className="text-[15px] font-bold text-[#32353C] block">{formatCurrency(parseCurrency(maintenanceCostStr))}</span>
                        <span className="text-[11px] text-[#888] font-semibold uppercase">Maintenance</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[15px] pt-3 border-t-2 border-[#e0e0e0] font-bold">
                    <span className="text-[#32353C]">Monthly Difference:</span>
                    <span className={calcResults.monthlyDifference > 0 ? "text-[#FF9800]" : "text-[#4CAF50]"}>
                      {formatCurrency(Math.abs(calcResults.monthlyDifference))}
                    </span>
                  </div>
                  <p className="text-[12.5px] text-[#666] italic">
                    {calcResults.monthlyDifference > 0
                      ? `Buying costs ${formatCurrency(calcResults.monthlyDifference)} more per month initially.`
                      : `Buying costs ${formatCurrency(Math.abs(calcResults.monthlyDifference))} less per month initially.`}
                  </p>
                </div>

                {/* Required Investment */}
                <div className="bg-white border border-[#e0e0e0] rounded-xl p-5 space-y-3 shadow-sm">
                  <h4 className="text-[15px] font-semibold text-[#32353C] pb-2 border-b border-[#f0f0f0]">Required Upfront Investment</h4>
                  <div className="flex justify-between text-[14px]">
                    <span className="text-[#666]">Down Payment ({downPaymentPercentStr}%):</span>
                    <span className="font-semibold text-[#32353C]">{formatCurrency(calcResults.downPayment)}</span>
                  </div>
                  <div className="flex justify-between text-[14px]">
                    <span className="text-[#666]">Estimated Closing Costs:</span>
                    <span className="font-semibold text-[#32353C]">{formatCurrency(calcResults.closingCosts)}</span>
                  </div>
                  <div className="flex justify-between text-[15px] pt-2 border-t border-[#f0f0f0] font-bold text-[#32353C]">
                    <span>Total Upfront Cash Required:</span>
                    <span className="text-[#4CAF50]">{formatCurrency(calcResults.upfrontCosts)}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Long-term Analysis */}
              <div className="space-y-6">
                <h3 className="text-[18px] font-bold text-[#4CAF50] pb-2 border-b border-[#e0e0e0]">
                  Long-term Analysis ({timeframeStr} Years)
                </h3>

                {/* Total Costs & Savings */}
                <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl p-5 space-y-4 shadow-sm">
                  <h4 className="text-[15px] font-semibold text-[#32353C]">Break-Even &amp; Net Savings</h4>
                  
                  <div className="flex justify-between items-center text-[14px] py-1 border-b border-[#e0e0e0]/60">
                    <span className="text-[#666]">Break-even Point:</span>
                    <span className="font-bold text-[#4CAF50] text-[16px]">
                      {calcResults.breakEvenYear > 0 ? `${calcResults.breakEvenYear} Years` : `After ${timeframeStr}+ Years`}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-[15px] pt-2 border-t-2 border-[#e0e0e0] font-bold">
                    <span className="text-[#32353C]">Total Savings:</span>
                    <span className={calcResults.netSavings >= 0 ? "text-[#4CAF50] text-[18px]" : "text-[#FF9800] text-[18px]"}>
                      {formatCurrency(Math.abs(calcResults.netSavings))}
                    </span>
                  </div>
                  <p className="text-[12.5px] text-[#666] italic">
                    {calcResults.netSavings >= 0
                      ? `Buying is financially advantageous: you save ${formatCurrency(calcResults.netSavings)} over ${timeframeStr} years.`
                      : `Renting is financially advantageous: you save ${formatCurrency(Math.abs(calcResults.netSavings))} over ${timeframeStr} years.`}
                  </p>
                </div>

                {/* Property Value & Benefits */}
                <div className="bg-white border border-[#e0e0e0] rounded-xl p-5 space-y-3 shadow-sm">
                  <h4 className="text-[15px] font-semibold text-[#32353C] pb-2 border-b border-[#f0f0f0]">Property Value &amp; Financial Benefits</h4>
                  <div className="flex justify-between text-[14px]">
                    <span className="text-[#666]">Future Home Value ({appreciationRateStr}% app/yr):</span>
                    <span className="font-semibold text-[#32353C]">{formatCurrency(calcResults.futureHomeValue)}</span>
                  </div>
                  <div className="flex justify-between text-[14px]">
                    <span className="text-[#666]">Equity Built:</span>
                    <span className="font-semibold text-[#4CAF50]">{formatCurrency(calcResults.equityBuilt)}</span>
                  </div>
                  <div className="flex justify-between text-[14px]">
                    <span className="text-[#666]">Estimated Tax Benefits:</span>
                    <span className="font-semibold text-[#32353C]">{formatCurrency(calcResults.taxBenefits)}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Interactive Cumulative Cost Line Chart */}
            <div className="pt-6">
              <InteractiveLineChart
                title="Cumulative Costs Over Time (Rent vs. Buy)"
                xTitle="Timeframe (Years)"
                yTitle="Cumulative Expense ($)"
                labels={calcResults.labels}
                series={[
                  {
                    label: "Total Renting Cost",
                    data: calcResults.yearlyRentData,
                    color: "#e11d48",
                  },
                  {
                    label: "Effective Buying Cost",
                    data: calcResults.yearlyBuyData,
                    color: "#4CAF50",
                  },
                ]}
              />
            </div>

            {/* Recommendations Section */}
            <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-2xl p-6 lg:p-8 space-y-6">
              <h3 className="text-[20px] font-bold text-[#32353C] border-b border-[#e0e0e0] pb-3">
                Recommendations &amp; Financial Insights
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Financial Analysis & Risk Assessment */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[16px] font-bold text-[#4CAF50] mb-3">Financial Analysis</h4>
                    <ul className="list-disc pl-5 space-y-2 text-[13.5px] text-[#555] leading-relaxed">
                      {calcResults.netSavings >= 0 ? (
                        <>
                          <li>Buying is financially advantageous: you&apos;ll save <strong>{formatCurrency(calcResults.netSavings)}</strong> over <strong>{timeframeStr} years</strong>.</li>
                          <li>Break-even point: <strong>{calcResults.breakEvenYear > 0 ? `${calcResults.breakEvenYear} years` : `Within ${timeframeStr} years`}</strong>, after which buying becomes more profitable.</li>
                        </>
                      ) : (
                        <>
                          <li>Renting is financially advantageous: you&apos;ll save <strong>{formatCurrency(Math.abs(calcResults.netSavings))}</strong> over <strong>{timeframeStr} years</strong>.</li>
                          <li>You would need to stay in the home longer than <strong>{timeframeStr} years</strong> to make buying beneficial under these assumptions.</li>
                        </>
                      )}
                      <li>Monthly housing costs will <strong>{calcResults.monthlyDifference > 0 ? "increase" : "decrease"}</strong> by <strong>{formatCurrency(Math.abs(calcResults.monthlyDifference))}</strong> if you buy.</li>
                      <li>Your down payment of <strong>{downPaymentPercentStr}%</strong> {parseCurrency(downPaymentStr) >= parseCurrency(homePriceStr) * 0.2 ? "meets the recommended 20% threshold" : "is below 20%, which may require mortgage insurance (PMI)"}.</li>
                      <li>Total initial monthly buying cost (mortgage + taxes + maintenance): <strong>{formatCurrency(calcResults.totalMonthlyBuying)}</strong>.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[16px] font-bold text-[#FF9800] mb-3">Risk Assessment</h4>
                    <ul className="list-disc pl-5 space-y-2 text-[13.5px] text-[#555] leading-relaxed">
                      {parseFloat(appreciationRateStr) < 2.0 && (
                        <li>Your assumed appreciation rate of {appreciationRateStr}% is conservative. Consider local market trends in {ARIZONA_COUNTY_TAXES[selectedCounty]?.label || "Arizona"}.</li>
                      )}
                      {parseCurrency(downPaymentPercentStr) < 20 && (
                        <li>Your down payment of {downPaymentPercentStr}% is below 20%. Ensure budget planning includes private mortgage insurance.</li>
                      )}
                      <li>Annual property taxes of <strong>{formatCurrency(parseCurrency(propertyTaxStr))}</strong> in {ARIZONA_COUNTY_TAXES[selectedCounty]?.label || "Arizona"} should be budgeted annually.</li>
                      <li>Annual maintenance costs of <strong>{formatCurrency(parseCurrency(maintenanceCostStr) * 12)}</strong> should be reserved for unexpected repairs.</li>
                    </ul>
                  </div>
                </div>

                {/* Right Column: Next Steps & CTA */}
                <div className="bg-white border border-[#e0e0e0] rounded-xl p-6 shadow-sm flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-[16px] font-bold text-[#32353C] mb-3">Next Steps</h4>
                    <p className="text-[13.5px] text-[#555] mb-3">Based on our analysis of your situation, here are recommended steps to move forward:</p>
                    <ul className="list-disc pl-5 space-y-2 text-[13.5px] text-[#555] leading-relaxed">
                      <li>Review your current monthly budget and savings reserves.</li>
                      <li>Get a verified pre-approval to lock in accurate interest rates for your location.</li>
                      <li>Explore down payment assistance programs available in Arizona.</li>
                    </ul>
                  </div>

                  <div className="bg-[#052316] text-white rounded-xl p-5 text-center mt-4">
                    <p className="text-[13.5px] text-[#c8c8b8] mb-3">
                      Ready to take the next step? Get personalized advice from AZ Mortgage Brothers experts.
                    </p>
                    <Link
                      href="/contact-us"
                      className="inline-block bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-bold px-6 py-3 rounded-full transition-all shadow"
                    >
                      Get Expert Advice →
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
