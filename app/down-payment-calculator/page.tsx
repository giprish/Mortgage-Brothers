"use client";

import React, { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import SliderInput from "../component/SliderInput";

// ─── Down Payment Calculator Specification Lookup Tables ─────────────────────

function getTaxDefault(homePrice: number): { amount: number; rate: number } {
  let amount = 7518;
  if (homePrice <= 100000) amount = 1000;
  else if (homePrice <= 150000) amount = 1065;
  else if (homePrice <= 200000) amount = 1134;
  else if (homePrice <= 250000) amount = 1208;
  else if (homePrice <= 300000) amount = 1286;
  else if (homePrice <= 350000) amount = 1370;
  else if (homePrice <= 400000) amount = 1459;
  else if (homePrice <= 450000) amount = 1554;
  else if (homePrice <= 500000) amount = 1756;
  else if (homePrice <= 550000) amount = 1984;
  else if (homePrice <= 600000) amount = 2242;
  else if (homePrice <= 650000) amount = 2534;
  else if (homePrice <= 700000) amount = 2863;
  else if (homePrice <= 750000) amount = 3149;
  else if (homePrice <= 800000) amount = 3370;
  else if (homePrice <= 850000) amount = 3606;
  else if (homePrice <= 900000) amount = 3858;
  else if (homePrice <= 950000) amount = 4128;
  else if (homePrice <= 1000000) amount = 4417;
  else if (homePrice <= 1050000) amount = 4638;
  else if (homePrice <= 1100000) amount = 4870;
  else if (homePrice <= 1150000) amount = 5114;
  else if (homePrice <= 1200000) amount = 5267;
  else if (homePrice <= 1250000) amount = 5425;
  else if (homePrice <= 1300000) amount = 5588;
  else if (homePrice <= 1350000) amount = 5755;
  else if (homePrice <= 1400000) amount = 5928;
  else if (homePrice <= 1450000) amount = 6047;
  else if (homePrice <= 1500000) amount = 6167;
  else if (homePrice <= 1550000) amount = 6291;
  else if (homePrice <= 1600000) amount = 6417;
  else if (homePrice <= 1650000) amount = 6545;
  else if (homePrice <= 1700000) amount = 6676;
  else if (homePrice <= 1750000) amount = 6809;
  else if (homePrice <= 1800000) amount = 6946;
  else if (homePrice <= 1850000) amount = 7084;
  else if (homePrice <= 1900000) amount = 7226;
  else if (homePrice <= 1950000) amount = 7371;

  const rate = homePrice > 0 ? (amount / homePrice) * 100 : 0;
  return { amount, rate: parseFloat(rate.toFixed(2)) };
}

function getHomeInsuranceDefault(homePrice: number): number {
  if (homePrice <= 100000) return 1000;
  if (homePrice <= 150000) return 1040;
  if (homePrice <= 200000) return 1082;
  if (homePrice <= 250000) return 1125;
  if (homePrice <= 300000) return 1170;
  if (homePrice <= 350000) return 1217;
  if (homePrice <= 400000) return 1265;
  if (homePrice <= 450000) return 1316;
  if (homePrice <= 500000) return 1369;
  if (homePrice <= 550000) return 1423;
  if (homePrice <= 600000) return 1480;
  if (homePrice <= 650000) return 1539;
  if (homePrice <= 700000) return 1601;
  if (homePrice <= 750000) return 1665;
  if (homePrice <= 800000) return 1732;
  if (homePrice <= 850000) return 1801;
  if (homePrice <= 900000) return 1873;
  if (homePrice <= 950000) return 1948;
  if (homePrice <= 1000000) return 2026;
  if (homePrice <= 1050000) return 2107;
  if (homePrice <= 1100000) return 2191;
  if (homePrice <= 1150000) return 2279;
  if (homePrice <= 1200000) return 2370;
  if (homePrice <= 1250000) return 2465;
  if (homePrice <= 1300000) return 2563;
  if (homePrice <= 1350000) return 2666;
  if (homePrice <= 1400000) return 2772;
  if (homePrice <= 1450000) return 2883;
  if (homePrice <= 1500000) return 2999;
  if (homePrice <= 1550000) return 3119;
  if (homePrice <= 1600000) return 3243;
  if (homePrice <= 1650000) return 3373;
  if (homePrice <= 1700000) return 3508;
  if (homePrice <= 1750000) return 3648;
  if (homePrice <= 1800000) return 3794;
  if (homePrice <= 1850000) return 3946;
  if (homePrice <= 1900000) return 4104;
  if (homePrice <= 1950000) return 4268;
  return 4439;
}

function getClosingCostsDefault(homePrice: number): number {
  if (homePrice <= 100000) return 3100;
  if (homePrice <= 150000) return 3178;
  if (homePrice <= 200000) return 3257;
  if (homePrice <= 250000) return 3338;
  if (homePrice <= 300000) return 3422;
  if (homePrice <= 350000) return 3507;
  if (homePrice <= 400000) return 3595;
  if (homePrice <= 450000) return 3685;
  if (homePrice <= 500000) return 3777;
  if (homePrice <= 550000) return 3871;
  if (homePrice <= 600000) return 3968;
  if (homePrice <= 650000) return 4067;
  if (homePrice <= 700000) return 4169;
  if (homePrice <= 750000) return 4273;
  if (homePrice <= 800000) return 4359;
  if (homePrice <= 850000) return 4446;
  if (homePrice <= 900000) return 4535;
  if (homePrice <= 950000) return 4626;
  if (homePrice <= 1000000) return 4718;
  if (homePrice <= 1050000) return 4765;
  if (homePrice <= 1100000) return 4813;
  if (homePrice <= 1150000) return 4861;
  if (homePrice <= 1200000) return 4910;
  if (homePrice <= 1250000) return 4959;
  if (homePrice <= 1300000) return 5008;
  if (homePrice <= 1350000) return 5059;
  if (homePrice <= 1400000) return 5109;
  if (homePrice <= 1450000) return 5160;
  if (homePrice <= 1500000) return 5212;
  if (homePrice <= 1550000) return 5264;
  if (homePrice <= 1600000) return 5317;
  if (homePrice <= 1650000) return 5370;
  if (homePrice <= 1700000) return 5423;
  if (homePrice <= 1750000) return 5478;
  if (homePrice <= 1800000) return 5532;
  if (homePrice <= 1850000) return 5588;
  if (homePrice <= 1900000) return 5644;
  if (homePrice <= 1950000) return 5700;
  return 6500;
}

// PMI Rates (Row mapping: Excellent, Good/Very Good, Fair/Good, Poor, High Risk)
// Cols: 3-4.99% down, 5-9.99%, 10-14.99%, 15-19.99%
const PMI_RATES = {
  excellent: [0.30, 0.19, 0.15, 0.10], // 760+
  good: [0.48, 0.33, 0.24, 0.13],      // 720-759 (Using 740-759 row per specification midpoint)
  fair: [1.02, 0.75, 0.52, 0.23],      // 680-719 (Using 680-699 row per specification)
  poor: [1.20, 0.89, 0.61, 0.26],      // 620-679 (Using 620-639 row per specification)
  highRisk: [1.56, 1.17, 0.79, 0.33]  // Below 620
};

function getAnnualPMIRate(creditScoreBand: string, dpPct: number): number {
  let rateArr = PMI_RATES.excellent;
  if (creditScoreBand === "720-759") rateArr = PMI_RATES.good;
  else if (creditScoreBand === "680-719") rateArr = PMI_RATES.fair;
  else if (creditScoreBand === "620-679") rateArr = PMI_RATES.poor;
  else if (creditScoreBand === "below-620") rateArr = PMI_RATES.highRisk;

  if (dpPct < 5.0) return rateArr[0];
  if (dpPct < 10.0) return rateArr[1];
  if (dpPct < 15.0) return rateArr[2];
  return rateArr[3];
}

function getFHAMIPRate(termYears: number, ltv: number, loanAmount: number): number {
  if (loanAmount <= 726200) {
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

function getVAFeeRate(dpPct: number): number {
  if (dpPct < 5.0) return 2.15;
  if (dpPct < 10.0) return 1.50;
  return 1.25;
}

// ─── Interfaces ───

interface DownPaymentResult {
  requiredSavings: number;
  downPaymentAmt: number;
  closingCosts: number;
  loanAmount: number;
  monthlyPI: number;
  monthlyTax: number;
  monthlyIns: number;
  monthlyHOA: number;
  monthlyFee: number;
  totalMonthly: number;
  housingCostRatio: number;
  dtiRatio: number;
}

const fmt = (v: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Math.round(v));

// ─── Core Solver ──────────────────────────────────────────────────────────────

function solvePayments(
  homePrice: number,
  dpAmt: number,
  dpPct: number,
  annualIncome: number,
  monthlyDebts: number,
  creditScore: string,
  loanType: string,
  interestRate: number,
  loanTerm: number,
  taxAmountManual: number,
  insManual: number,
  hoaManual: number
): DownPaymentResult {
  const loanAmount = Math.max(0, homePrice - dpAmt);
  const termMonths = loanTerm * 12;
  const monthlyRate = interestRate / 100 / 12;

  // Principal & Interest
  let monthlyPI = 0;
  if (loanAmount > 0 && termMonths > 0) {
    if (monthlyRate === 0) {
      monthlyPI = loanAmount / termMonths;
    } else {
      const factor = Math.pow(1 + monthlyRate, termMonths);
      monthlyPI = (loanAmount * monthlyRate * factor) / (factor - 1);
    }
  }

  // Monthly tax
  const monthlyTax = taxAmountManual / 12;

  // Monthly Ins
  const monthlyIns = insManual / 12;

  const monthlyHOA = hoaManual;

  // Monthly Fee / PMI / MIP
  let monthlyFee = 0;
  const ltv = homePrice > 0 ? (loanAmount / homePrice) * 100 : 0;

  if (loanType === "conventional") {
    if (dpPct < 20.0) {
      const pmiRate = getAnnualPMIRate(creditScore, dpPct);
      monthlyFee = (loanAmount * (pmiRate / 100)) / 12;
    }
  } else if (loanType === "fha") {
    const mipRate = getFHAMIPRate(loanTerm, ltv, loanAmount);
    monthlyFee = (loanAmount * (mipRate / 100)) / 12;
  } else if (loanType === "usda") {
    monthlyFee = (loanAmount * 0.0035) / 12;
  }

  const totalMonthly = monthlyPI + monthlyTax + monthlyIns + monthlyHOA + monthlyFee;

  // Ratios
  const monthlyIncome = annualIncome > 0 ? annualIncome / 12 : 1;
  const housingCostRatio = (totalMonthly / monthlyIncome) * 100;
  const dtiRatio = ((totalMonthly + monthlyDebts) / monthlyIncome) * 100;

  const closingCosts = getClosingCostsDefault(homePrice);
  const requiredSavings = dpAmt + closingCosts;

  return {
    requiredSavings,
    downPaymentAmt: dpAmt,
    closingCosts,
    loanAmount,
    monthlyPI,
    monthlyTax,
    monthlyIns,
    monthlyHOA,
    monthlyFee,
    totalMonthly,
    housingCostRatio: parseFloat(housingCostRatio.toFixed(2)),
    dtiRatio: parseFloat(dtiRatio.toFixed(2)),
  };
}

const CITY_DEFAULTS: Record<string, { price: number; downPayment: number; tax: number; insurance: number; rate: number }> = {
  Phoenix: { price: 400000, downPayment: 80000, tax: 1700, insurance: 1200, rate: 6.5 },
  Tucson: { price: 350000, downPayment: 70000, tax: 1800, insurance: 1100, rate: 6.5 },
  Mesa: { price: 400000, downPayment: 80000, tax: 1700, insurance: 1200, rate: 6.5 },
  Chandler: { price: 500000, downPayment: 100000, tax: 2100, insurance: 1400, rate: 6.5 },
  Gilbert: { price: 475000, downPayment: 95000, tax: 2000, insurance: 1350, rate: 6.5 },
  Glendale: { price: 425000, downPayment: 85000, tax: 1800, insurance: 1250, rate: 6.5 },
  Scottsdale: { price: 750000, downPayment: 150000, tax: 3200, insurance: 1800, rate: 6.8 },
  Peoria: { price: 425000, downPayment: 85000, tax: 1800, insurance: 1250, rate: 6.5 },
  Tempe: { price: 450000, downPayment: 90000, tax: 1900, insurance: 1300, rate: 6.5 },
  Surprise: { price: 400000, downPayment: 80000, tax: 1700, insurance: 1200, rate: 6.5 },
  Goodyear: { price: 425000, downPayment: 85000, tax: 1800, insurance: 1250, rate: 6.5 },
  Buckeye: { price: 400000, downPayment: 80000, tax: 1700, insurance: 1200, rate: 6.5 },
  "San Tan Valley": { price: 375000, downPayment: 75000, tax: 1790, insurance: 1150, rate: 6.5 },
  Yuma: { price: 300000, downPayment: 60000, tax: 1830, insurance: 1050, rate: 6.5 },
  Avondale: { price: 400000, downPayment: 80000, tax: 1700, insurance: 1200, rate: 6.5 },
  Flagstaff: { price: 500000, downPayment: 100000, tax: 1680, insurance: 1400, rate: 6.5 },
  "Queen Creek": { price: 450000, downPayment: 90000, tax: 1900, insurance: 1300, rate: 6.5 },
  Maricopa: { price: 350000, downPayment: 70000, tax: 1700, insurance: 1100, rate: 6.5 },
  "Casas Adobes": { price: 375000, downPayment: 75000, tax: 1800, insurance: 1150, rate: 6.5 },
  "Casa Grande": { price: 300000, downPayment: 60000, tax: 1790, insurance: 1050, rate: 6.5 },
  "Lake Havasu City": { price: 350000, downPayment: 70000, tax: 1770, insurance: 1100, rate: 6.5 },
  Marana: { price: 375000, downPayment: 75000, tax: 1800, insurance: 1150, rate: 6.5 },
  "Catalina Foothills": { price: 450000, downPayment: 90000, tax: 1900, insurance: 1300, rate: 6.5 },
  "Prescott Valley": { price: 350000, downPayment: 70000, tax: 1820, insurance: 1100, rate: 6.5 },
  "Oro Valley": { price: 400000, downPayment: 80000, tax: 1800, insurance: 1200, rate: 6.5 },
  "City Not Listed": { price: 400000, downPayment: 80000, tax: 1700, insurance: 1200, rate: 6.5 }
};

const ARIZONA_CITIES = Object.keys(CITY_DEFAULTS);

export default function DownPaymentCalculatorPage() {
  const [selectedCity, setSelectedCity] = useState("Phoenix");
  const [homePrice, setHomePrice] = useState(400000);
  const [annualIncome, setAnnualIncome] = useState(100000);
  const [monthlyDebts, setMonthlyDebts] = useState(500);
  const [creditScore, setCreditScore] = useState("720-759");
  const [loanType, setLoanType] = useState("conventional");
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const [dpVal, setDpVal] = useState(80000);

  const [taxAmountManual, setTaxAmountManual] = useState(1700);
  const [insManual, setInsManual] = useState(1200);
  const [hoa, setHoa] = useState(0);

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    const defaults = CITY_DEFAULTS[city] || CITY_DEFAULTS.Phoenix;
    setHomePrice(defaults.price);
    setDpVal(defaults.downPayment);
    setTaxAmountManual(defaults.tax);
    setInsManual(defaults.insurance);
    setInterestRate(defaults.rate);
  };

  // Sync inputs
  const handleHomePriceChange = (val: number) => {
    setHomePrice(val);
    // Auto-clamp down payment to new max (100% of home price)
    if (val > 0 && dpVal > val) {
      setDpVal(val);
    }
  };

  const handleDpAmtChange = (val: number) => {
    // Clamp to max 100% of home price
    const maxVal = homePrice;
    const clampedVal = Math.min(val, maxVal);
    setDpVal(clampedVal);
  };

  // Auto-calculate result
  const result = useMemo<DownPaymentResult | null>(() => {
    const hp = homePrice;
    if (hp <= 0) return null;

    let dpAmt = dpVal;
    dpAmt = Math.max(0, Math.min(dpAmt, hp));
    const dpPct = hp > 0 ? (dpAmt / hp) * 100 : 0;

    const income = annualIncome;
    const debts = monthlyDebts;
    const rate = interestRate;
    const term = Math.round(loanTerm || 30);
    const hoaVal = hoa;

    return solvePayments(hp, dpAmt, dpPct, income, debts, creditScore, loanType, rate, term, taxAmountManual, insManual, hoaVal);
  }, [homePrice, dpVal, annualIncome, monthlyDebts, creditScore, loanType, interestRate, loanTerm, taxAmountManual, insManual, hoa]);

  // Validation Warnings
  const getMinDpRequirement = () => {
    if (loanType === "conventional") return { pct: 3, label: "3%" };
    if (loanType === "fha") return { pct: 3.5, label: "3.5%" };
    return { pct: 0, label: "0%" };
  };

  const minDp = getMinDpRequirement();
  const currentDpPctNum = homePrice > 0 ? (dpVal / homePrice) * 100 : 0;
  const isBelowMinDp = currentDpPctNum < minDp.pct;
  const requiredMinAmt = homePrice * (minDp.pct / 100);

  // Recommendations and insights
  const largestShareText = (r: DownPaymentResult) => {
    const shares = [
      { name: "Principal & Interest", val: r.monthlyPI },
      { name: "Property Tax", val: r.monthlyTax },
      { name: "Insurance", val: r.monthlyIns },
      { name: "PMI/MIP Fee", val: r.monthlyFee },
      { name: "HOA", val: r.monthlyHOA }
    ];
    shares.sort((a, b) => b.val - a.val);
    const pct = ((shares[0].val / r.totalMonthly) * 100).toFixed(1);
    return `${shares[0].name} occupies the largest share of your monthly payment at ${pct}%.`;
  };

  // Donut chart path values
  const getDonutPaths = (r: DownPaymentResult) => {
    const segments = [
      { val: r.monthlyPI, color: "#052316" },
      { val: r.monthlyTax, color: "#b89a5a" },
      { val: r.monthlyIns, color: "#3fb364" },
      { val: r.monthlyFee, color: "#000" },
      { val: r.monthlyHOA, color: "#aaa" }
    ].filter(s => s.val > 0);

    const total = segments.reduce((sum, s) => sum + s.val, 0);
    if (total <= 0) return [];

    let cumPercent = 0;
    return segments.map(s => {
      const pct = s.val / total;
      const startAngle = cumPercent * 2 * Math.PI - Math.PI / 2;
      cumPercent += pct;
      const endAngle = cumPercent * 2 * Math.PI - Math.PI / 2;

      const x1 = 100 + 70 * Math.cos(startAngle);
      const y1 = 100 + 70 * Math.sin(startAngle);
      const x2 = 100 + 70 * Math.cos(endAngle);
      const y2 = 100 + 70 * Math.sin(endAngle);

      const largeArc = pct > 0.5 ? 1 : 0;
      return {
        d: `M ${x1} ${y1} A 70 70 0 ${largeArc} 1 ${x2} ${y2}`,
        color: s.color,
        pct: (pct * 100).toFixed(1)
      };
    });
  };

  // Scenario check list
  const getScenarioRows = () => {
    const hp = homePrice;
    const income = annualIncome;
    const debts = monthlyDebts;
    const rate = interestRate;
    const term = Math.round(loanTerm || 30);
    const hoaVal = hoa;

    let checkpoints = [3, 5, 10, 15, 20, 25];
    if (loanType === "fha") checkpoints = [3.5, 5, 10, 15];
    if (loanType === "va" || loanType === "usda") checkpoints = [0, 5, 10];

    return checkpoints.map(pct => {
      const dp = hp * (pct / 100);
      const r = solvePayments(hp, dp, pct, income, debts, creditScore, loanType, rate, term, taxAmountManual, insManual, hoaVal);
      return {
        pct,
        dp,
        loan: r.loanAmount,
        monthly: r.totalMonthly
      };
    });
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
              Down Payment Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Determine your required upfront savings, monthly mortgage expenses, and program eligibility depending on your target down payment size.
            </p>
          </div>
        </section>

        {/* Inputs */}
        <section className="py-12 px-6 lg:px-10 max-w-6xl mx-auto font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Box: Property Information & Financial Profile */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              {/* PROPERTY INFORMATION */}
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-6">
                <h3 className="text-[#052316] text-[17px] font-bold pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#052316]" /> Property Information
                </h3>
                
                <div>
                  <label className="text-[#052316] text-[14px] font-semibold block mb-2">Select Your Arizona City</label>
                  <select
                    value={selectedCity}
                    onChange={(e) => handleCityChange(e.target.value)}
                    className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3.5 text-[14px] font-bold text-[#052316] focus:outline-none cursor-pointer"
                  >
                    {ARIZONA_CITIES.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <SliderInput
                  label="Home Price"
                  value={homePrice}
                  min={50000}
                  max={2000000}
                  step={1000}
                  prefix="$"
                  onChange={handleHomePriceChange}
                />
              </div>

              {/* FINANCIAL PROFILE */}
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-6">
                <h3 className="text-[#052316] text-[17px] font-bold pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#b89a5a]" /> Financial Profile
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <SliderInput
                    label="Annual Income"
                    value={annualIncome}
                    min={0}
                    max={500000}
                    step={1000}
                    prefix="$"
                    onChange={setAnnualIncome}
                  />
                  <SliderInput
                    label="Monthly Debt Payments"
                    value={monthlyDebts}
                    min={0}
                    max={20000}
                    step={100}
                    prefix="$"
                    onChange={setMonthlyDebts}
                  />
                </div>

                <div>
                  <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Credit Score Range</label>
                  <select value={creditScore} onChange={(e) => setCreditScore(e.target.value)}
                    className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3 text-[14px] font-bold text-[#052316] focus:outline-none cursor-pointer">
                    <option value="760+">760+ (Excellent)</option>
                    <option value="720-759">720–759 (Good to Very Good)</option>
                    <option value="680-719">680–719 (Fair to Good)</option>
                    <option value="620-679">620–679 (Poor to below Fair)</option>
                    <option value="below-620">Below 620 (High Risk)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right Box: Loan Details, Down Payment & Additional Costs */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              {/* LOAN DETAILS */}
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-6">
                <h3 className="text-[#052316] text-[17px] font-bold pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3fb364]" /> Loan Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Loan Type</label>
                    <select value={loanType} onChange={(e) => setLoanType(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-2.5 text-[13.5px] font-bold text-[#052316] focus:outline-none cursor-pointer">
                      <option value="conventional">Conventional</option>
                      <option value="fha">FHA Loan</option>
                      <option value="va">VA Loan</option>
                      <option value="usda">USDA Loan</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Loan Term</label>
                    <select value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3 text-[14px] font-bold text-[#052316] focus:outline-none cursor-pointer">
                      <option value={30}>30 Years</option>
                      <option value={25}>25 Years</option>
                      <option value={20}>20 Years</option>
                      <option value={15}>15 Years</option>
                      <option value={10}>10 Years</option>
                    </select>
                  </div>
                </div>

                <SliderInput
                  label="Interest Rate"
                  value={interestRate}
                  min={0}
                  max={15}
                  step={0.125}
                  suffix="%"
                  onChange={setInterestRate}
                />
              </div>

              {/* DOWN PAYMENT */}
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-6">
                <h3 className="text-[#052316] text-[17px] font-bold pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3fb364]" /> Down Payment
                </h3>

                <SliderInput
                  label="Down Payment ($)"
                  value={dpVal}
                  min={0}
                  max={homePrice}
                  step={1000}
                  prefix="$"
                  onChange={handleDpAmtChange}
                />

                {/* Validation warning below inputs */}
                {isBelowMinDp && (
                  <div className="mt-3 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-xl p-3 text-[12.5px] font-medium leading-relaxed">
                    ⚠️ Down payment does not meet program minimum specifications for <strong>{loanType.toUpperCase()}</strong>:
                    <br />Minimum required is <strong>{minDp.label}</strong> (approximately <strong>{fmt(requiredMinAmt)}</strong>).
                  </div>
                )}
              </div>

              {/* ADDITIONAL COSTS */}
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-6">
                <h3 className="text-[#052316] text-[17px] font-bold pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#b89a5a]" /> Additional Costs
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Property Tax ($/yr)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={taxAmountManual} onChange={(e) => setTaxAmountManual(parseFloat(e.target.value) || 0)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-3 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Home Insurance ($/yr)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={insManual} onChange={(e) => setInsManual(parseFloat(e.target.value) || 0)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-3 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">HOA Dues ($/mo)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={hoa} onChange={(e) => setHoa(parseFloat(e.target.value) || 0)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-3 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        {result && (
          <section id="calc-results" className="pb-16 px-6 lg:px-10 max-w-6xl mx-auto space-y-8 animate-fadeUp">
            
            {/* Primary outputs panels */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-[#052316] text-white border border-[#052316] rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[#3fb364] text-[10.5px] font-bold tracking-wider uppercase">Required Cash Savings</span>
                  <h2 className="text-[34px] font-bold tracking-tight leading-none mt-1.5">{fmt(result.requiredSavings)}</h2>
                </div>
                <p className="text-[12.5px] text-[#c8c8b8] mt-3 pt-2.5 border-t border-white/10">Includes Down Payment and estimated closing costs.</p>
              </div>

              <div className="bg-white border border-[#e8e0d0]/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[#a89a70] text-[10.5px] font-bold tracking-wider uppercase">Total Monthly Payment</span>
                  <h2 className="text-[34px] font-bold tracking-tight leading-none mt-1.5 text-[#052316]">{fmt(result.totalMonthly)}</h2>
                </div>
                <p className="text-[12.5px] text-[#888] mt-3 pt-2.5 border-t border-[#e8e0d0]/30">Full payment including taxes, insurance, HOA & fees.</p>
              </div>

              <div className="bg-white border border-[#e8e0d0]/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[#a89a70] text-[10.5px] font-bold tracking-wider uppercase">Financed Loan Amount</span>
                  <h2 className="text-[34px] font-bold tracking-tight leading-none mt-1.5 text-[#052316]">{fmt(result.loanAmount)}</h2>
                </div>
                <p className="text-[12.5px] text-[#888] mt-3 pt-2.5 border-t border-[#e8e0d0]/30">Remaining principal balance amortized.</p>
              </div>
            </div>

            {/* Split Breakdown section — chart left, cards right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Visual chart & Insights (LEFT) */}
              <div className="space-y-6">
                
                {/* SVG Donut Chart */}
                <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm text-center">
                  <h3 className="text-[#052316] text-[16px] font-bold mb-5 pb-3 border-b border-[#e8e0d0]/40 text-left">Monthly Distribution</h3>
                  
                  <div className="relative w-44 h-44 mx-auto mb-6">
                    <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                      <circle cx="100" cy="100" r="70" fill="none" stroke="#fcf9f3" strokeWidth="16" />
                      {getDonutPaths(result).map((p, idx) => (
                        <path key={idx} d={p.d} fill="none" stroke={p.color} strokeWidth="16" strokeLinecap="round" />
                      ))}
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#888]">Total</span>
                      <span className="text-[17px] font-bold text-[#052316]">{fmt(result.totalMonthly)}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-[12px] text-left pt-2 font-sans">
                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#052316]" /> <span>Principal & Interest ({((result.monthlyPI / result.totalMonthly) * 100).toFixed(1)}%)</span></div>
                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#b89a5a]" /> <span>Property Taxes ({((result.monthlyTax / result.totalMonthly) * 100).toFixed(1)}%)</span></div>
                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#3fb364]" /> <span>Home Insurance ({((result.monthlyIns / result.totalMonthly) * 100).toFixed(1)}%)</span></div>
                    {result.monthlyFee > 0 && <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#000]" /> <span>PMI/MIP Fee ({((result.monthlyFee / result.totalMonthly) * 100).toFixed(1)}%)</span></div>}
                    {result.monthlyHOA > 0 && <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#aaa]" /> <span>HOA Dues ({((result.monthlyHOA / result.totalMonthly) * 100).toFixed(1)}%)</span></div>}
                  </div>
                </div>

                {/* Key Insights & Recommendations */}
                <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm space-y-4 text-[13.5px] leading-relaxed text-[#555]">
                  <h3 className="text-[#052316] text-[16px] font-bold pb-2 border-b border-[#e8e0d0]/40">Key Insights</h3>
                  
                  <div>
                    <h4 className="text-[#052316] font-bold text-[13px] mb-1 font-sans">Monthly Payment Breakdown</h4>
                    <p>{largestShareText(result)}</p>
                  </div>

                  <div>
                    <h4 className="text-[#052316] font-bold text-[13px] mb-1 font-sans">Affordability Analysis</h4>
                    <p>
                      Housing Cost Ratio (Front-end): <strong>{result.housingCostRatio}%</strong> (Limit 40%)
                      <br />DTI Ratio (Back-end): <strong>{result.dtiRatio}%</strong> (Limit 48%)
                      <br />
                      {result.housingCostRatio <= 40 && result.dtiRatio <= 48
                        ? "✅ Both debt ratios fall safely within target guidelines."
                        : result.housingCostRatio > 40 && result.dtiRatio > 48
                          ? "⚠️ Caution: Both housing expense and total debt ratios exceed recommended thresholds."
                          : "⚠️ Warning: One of your debt-to-income ratios is currently over recommended guidelines."}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#052316] font-bold text-[13px] mb-1 font-sans">Recommendations</h4>
                    <ul className="list-disc pl-4 space-y-1 mt-1 font-sans text-[13px]">
                      {loanType === "conventional" && currentDpPctNum < 20 && (
                        <li>Increasing your down payment to <strong>20% ({fmt(homePrice * 0.2)})</strong> will eliminate the monthly PMI, saving you <strong>{fmt(result.monthlyFee)}/mo</strong>.</li>
                      )}
                      {result.dtiRatio > 48 && (
                        <li>Consider reducing recurring monthly debts or increasing down payment to reduce mortgage balance and lower DTI ratio.</li>
                      )}
                      {result.requiredSavings > 0 && (
                        <li>Ensure you have additional emergency reserves in savings after closing.</li>
                      )}
                    </ul>
                  </div>
                </div>

              </div>

              {/* Cost breakdown cards (RIGHT) */}
              <div className="space-y-6">
                
                {/* Initial costs */}
                <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm">
                  <h3 className="text-[#052316] text-[16px] font-bold mb-4 pb-3 border-b border-[#e8e0d0]/40">Upfront Savings Breakdown</h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between text-[13.5px]">
                      <span className="text-[#888]">Target Down Payment ({currentDpPctNum.toFixed(1)}%)</span>
                      <span className="text-[#052316] font-bold">{fmt(result.downPaymentAmt)}</span>
                    </div>
                    <div className="flex justify-between text-[13.5px] py-1 border-t border-[#e8e0d0]/20 mt-1">
                      <span className="text-[#888]">Estimated Closing Costs (Lookup table)</span>
                      <span className="text-[#052316] font-bold">{fmt(result.closingCosts)}</span>
                    </div>
                    <div className="flex justify-between text-[14.5px] pt-3.5 border-t border-[#e8e0d0]/40 mt-1 font-bold text-[#052316]">
                      <span>Required Savings</span>
                      <span>{fmt(result.requiredSavings)}</span>
                    </div>
                  </div>
                </div>

                {/* Monthly payments breakdown list */}
                <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm">
                  <h3 className="text-[#052316] text-[16px] font-bold mb-4 pb-3 border-b border-[#e8e0d0]/40">Monthly Payment Breakdown</h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between text-[13.5px]">
                      <span className="text-[#888]">Principal & Interest</span>
                      <span className="text-[#052316] font-bold">{fmt(result.monthlyPI)}</span>
                    </div>
                    <div className="flex justify-between text-[13.5px]">
                      <span className="text-[#888]">Property Taxes</span>
                      <span className="text-[#052316] font-bold">{fmt(result.monthlyTax)}</span>
                    </div>
                    <div className="flex justify-between text-[13.5px]">
                      <span className="text-[#888]">Home Insurance</span>
                      <span className="text-[#052316] font-bold">{fmt(result.monthlyIns)}</span>
                    </div>
                    {result.monthlyFee > 0 && (
                      <div className="flex justify-between text-[13.5px]">
                        <span className="text-[#888] font-bold">{loanType.toUpperCase()} PMI/MIP Fee</span>
                        <span className="text-red-500 font-bold">{fmt(result.monthlyFee)}</span>
                      </div>
                    )}
                    {result.monthlyHOA > 0 && (
                      <div className="flex justify-between text-[13.5px]">
                        <span className="text-[#888]">HOA Dues</span>
                        <span className="text-[#052316] font-bold">{fmt(result.monthlyHOA)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-[14.5px] pt-3.5 border-t border-[#e8e0d0]/40 mt-1 font-bold text-[#052316]">
                      <span>Total Monthly Cost</span>
                      <span>{fmt(result.totalMonthly)}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Down Payment Scenarios Comparison Table */}
            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 shadow-sm overflow-hidden font-sans">
              <div className="px-7 py-5 border-b border-[#e8e0d0]/40">
                <h3 className="text-[#052316] text-[16px] font-bold">Down Payment Scenarios Comparison</h3>
                <p className="text-[#888] text-[12.5px] mt-0.5">Holding price, rate, and credit score constant.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-[12.5px]">
                  <thead>
                    <tr className="bg-[#052316] text-white">
                      {["Down %", "Down Payment ($)", "Financed Loan Amount", "Estimated Monthly Payment"].map((h) => (
                        <th key={h} className="py-3 px-4 text-left font-semibold whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {getScenarioRows().map((row) => (
                      <tr key={row.pct} className={Math.abs(row.pct - currentDpPctNum) < 0.1 ? "bg-[#3fb364]/10 font-bold" : "hover:bg-[#faf7f0] border-b border-[#e8e0d0]/20"}>
                        <td className="py-3 px-4 text-[#052316]">{row.pct}%</td>
                        <td className="py-3 px-4 text-[#052316]">{fmt(row.dp)}</td>
                        <td className="py-3 px-4 text-[#052316]">{fmt(row.loan)}</td>
                        <td className="py-3 px-4 text-[#052316]">{fmt(row.monthly)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#052316] rounded-3xl p-6 lg:p-8 text-white shadow-md relative overflow-hidden">
              <div className="absolute -bottom-16 -right-16 w-[200px] h-[200px] rounded-full border border-white/5 opacity-40" />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-sans">
                <div>
                  <h4 className="text-[18px] font-bold mb-1">Ready to purchase?</h4>
                  <p className="text-[#c8c8b8] text-[13.5px]">Get a fully qualified pre-approval letter for your target loan type today.</p>
                </div>
                <Link href="/#get-pre-approved"
                  className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all shadow-md whitespace-nowrap">
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
