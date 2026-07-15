"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

// ─── Types & Interfaces ──────────────────────────────────────────────────────

interface YearlyData {
  year: number;
  rent: number;
  homeValue: number;
  remainingBalance: number;
  pmiPaid: number;
  interestPaid: number;
  taxBenefit: number;
  cumulativeBuyingCost: number;
  cumulativeRentingCost: number;
  equity: number;
}

interface RentVsBuyResult {
  // Primary Metrics
  monthlyRent: number;
  monthlyBuyingTotal: number;
  monthlyDifference: number;
  totalSavings: number; // Renting cost minus buying cost
  breakEvenYear: number | string; // Numeric or string like "Not within N years"
  futureHomeValue: number;
  equityBuilt: number;
  taxBenefits: number;

  // Cost Summaries
  totalCostRenting: number;
  totalCostBuying: number;

  // Down Payment / Closing Cost Breakdown
  downPaymentAmt: number;
  closingCostsAmt: number;

  // Monthly Breakdown
  monthlyMortgagePI: number;
  monthlyPMI: number;
  monthlyTax: number;
  monthlyMaintenance: number;
  monthlyHOA: number;
  monthlyInsurance: number;

  // Detail Series
  yearlySeries: YearlyData[];
}

// ─── Closing Cost Default Table (Arizona Schedule) ──────────────────────────

const CLOSING_COSTS_SCHEDULE = [
  { limit: 100000, cost: 3100 },
  { limit: 150000, cost: 3178 },
  { limit: 200001, cost: 3257 },
  { limit: 250001, cost: 3338 },
  { limit: 300001, cost: 3422 },
  { limit: 350001, cost: 3507 },
  { limit: 400001, cost: 3595 },
  { limit: 450001, cost: 3685 },
  { limit: 500001, cost: 3685 }, // Wait, the spec table has a couple offsets, let's copy the spec table exactly:
];

// Let's implement the lookup function exactly as specified:
function getDefaultClosingCosts(homePrice: number): number {
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
  return 6500; // Above 1,950,000 up to 10,000,000 uses 6,500
}

const ARIZONA_COUNTIES = [
  "Maricopa", "Apache", "Cochise", "Coconino", "Gila", "Graham", "Greenlee",
  "La Paz", "Mohave", "Navajo", "Pima", "Pinal", "Santa Cruz", "Yavapai", "Yuma"
];

// Helper to format currency
const fmt = (v: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Math.round(v));

// ─── Calculator Logic Engine ─────────────────────────────────────────────────

function runRentVsBuyCalc(
  // Renting
  monthlyRent: number,
  rentIncreasePct: number,
  rentersInsAnnual: number,
  securityDeposit: number,
  // Shared
  investmentReturnPct: number,
  taxRatePct: number,
  // Buying
  homePrice: number,
  downPaymentAmt: number,
  closingCosts: number,
  interestRatePct: number,
  loanTermYears: number,
  propertyTaxAnnual: number,
  homeAppreciationPct: number,
  homeInsAnnual: number,
  maintenanceMonthly: number,
  hoaMonthly: number,
  comparisonYears: number
): RentVsBuyResult {
  // 1. Amortization parameters
  const loanAmt = Math.max(0, homePrice - downPaymentAmt);
  const monthlyRate = interestRatePct / 100 / 12;
  const totalMonths = loanTermYears * 12;

  // Monthly Principal & Interest Payment
  let monthlyPI = 0;
  if (loanAmt > 0 && totalMonths > 0) {
    if (monthlyRate === 0) {
      monthlyPI = loanAmt / totalMonths;
    } else {
      const factor = Math.pow(1 + monthlyRate, totalMonths);
      monthlyPI = (loanAmt * monthlyRate * factor) / (factor - 1);
    }
  }

  // Initial PMI check
  const downPct = homePrice > 0 ? (downPaymentAmt / homePrice) * 100 : 0;
  let pmiRemovedGlobally = downPct >= 20;

  // Loop outputs
  const yearlySeries: YearlyData[] = [];
  let cumBuyingCost = 0;
  let cumRentingCost = 0;
  let totalPMIPaid = 0;
  let totalInterestPaid = 0;
  let totalTaxBenefits = 0;
  let totalRentPaid = 0;

  // Month-by-month tracking for mortgage amortization
  let balance = loanAmt;

  // Iteration Loop: Year 1 to ComparisonTimeframe
  for (let year = 1; year <= comparisonYears; year++) {
    // 1. Rent for year i
    const currentMonthlyRent = monthlyRent * Math.pow(1 + rentIncreasePct / 100, year - 1);
    const rentPaidThisYear = currentMonthlyRent * 12;
    totalRentPaid += rentPaidThisYear;

    // 2. Home Value at end of year i
    const homeValueAtYearEnd = homePrice * Math.pow(1 + homeAppreciationPct / 100, year);
    const homeValueAtYearStart = homePrice * Math.pow(1 + homeAppreciationPct / 100, year - 1);

    // 3. Balance at start of year i
    const startBalanceOfYear = balance;

    // Month-by-month loop for the year to get interest/principal and remaining balance
    let interestPaidThisYear = 0;
    let pmiPaidThisYear = 0;

    for (let month = 1; month <= 12; month++) {
      const currentN = (year - 1) * 12 + month;

      // Amortization calculation
      if (currentN <= totalMonths && balance > 0) {
        const interestMonth = balance * monthlyRate;
        let principalMonth = monthlyPI - interestMonth;
        if (principalMonth >= balance) {
          principalMonth = balance;
          balance = 0;
        } else {
          balance = balance - principalMonth;
        }
        interestPaidThisYear += interestMonth;
      } else {
        balance = 0;
      }
    }

    // Recalculate PMI annually based on starting balance of that year
    // PMI is automatically removed if Starting Balance / Starting Home Value <= 0.80
    if (!pmiRemovedGlobally) {
      if (startBalanceOfYear / homeValueAtYearStart <= 0.80) {
        pmiRemovedGlobally = true;
      }
    }

    if (!pmiRemovedGlobally) {
      // Monthly PMI = (Remaining Balance * 0.55%) / 12
      const annualPMI = startBalanceOfYear * 0.0055;
      pmiPaidThisYear = annualPMI;
    } else {
      pmiPaidThisYear = 0;
    }

    totalPMIPaid += pmiPaidThisYear;
    totalInterestPaid += interestPaidThisYear;

    // 4. Tax benefits
    const taxBenefitThisYear = (interestPaidThisYear + propertyTaxAnnual) * (taxRatePct / 100);
    totalTaxBenefits += taxBenefitThisYear;

    // 5. Cumulative costs through year i
    // BUYING cumulative cost
    cumBuyingCost =
      downPaymentAmt +
      closingCosts +
      (monthlyPI * 12 * Math.min(year, loanTermYears)) +
      totalPMIPaid +
      (propertyTaxAnnual * year) +
      (maintenanceMonthly * 12 * year) +
      (hoaMonthly * 12 * year) +
      (homeInsAnnual * year) -
      (homeValueAtYearEnd - homePrice) -
      totalTaxBenefits;

    // RENTING cumulative cost
    const rate = investmentReturnPct / 100;
    const dpCcGrowth = (downPaymentAmt + closingCosts) * (Math.pow(1 + rate, year) - 1);
    const sdGrowth = securityDeposit * (Math.pow(1 + rate, year) - 1);

    cumRentingCost =
      totalRentPaid +
      (rentersInsAnnual * year) +
      sdGrowth -
      dpCcGrowth; // Subtract the gain renter gets from investing DP + CC

    yearlySeries.push({
      year,
      rent: rentPaidThisYear,
      homeValue: homeValueAtYearEnd,
      remainingBalance: balance,
      pmiPaid: pmiPaidThisYear,
      interestPaid: interestPaidThisYear,
      taxBenefit: taxBenefitThisYear,
      cumulativeBuyingCost: cumBuyingCost,
      cumulativeRentingCost: cumRentingCost,
      equity: Math.max(0, homeValueAtYearEnd - balance),
    });
  }

  // Break-even determination
  let breakEvenYear: number | string = "Not within " + comparisonYears + " years";
  for (let i = 0; i < yearlySeries.length; i++) {
    const d = yearlySeries[i];
    if (d.cumulativeBuyingCost < d.cumulativeRentingCost) {
      if (i === 0) {
        breakEvenYear = 1;
      } else {
        const prev = yearlySeries[i - 1];
        const denom = (d.cumulativeBuyingCost - prev.cumulativeBuyingCost) - (d.cumulativeRentingCost - prev.cumulativeRentingCost);
        if (Math.abs(denom) > 0.001) {
          const interp = i + (prev.cumulativeRentingCost - prev.cumulativeBuyingCost) / denom;
          breakEvenYear = Math.max(0.1, Math.min(comparisonYears, parseFloat(interp.toFixed(1))));
        } else {
          breakEvenYear = i + 1;
        }
      }
      break;
    }
  }

  // End values
  const lastYear = yearlySeries[yearlySeries.length - 1];
  const finalHomeValue = lastYear.homeValue;
  const finalEquity = lastYear.equity;

  // Component breakdown for Year 1 monthly payment
  const initialPMI = pmiRemovedGlobally ? 0 : (loanAmt * 0.0055) / 12;
  const initialMonthlyBuyingTotal =
    monthlyPI +
    initialPMI +
    (propertyTaxAnnual / 12) +
    maintenanceMonthly +
    hoaMonthly +
    (homeInsAnnual / 12);

  return {
    monthlyRent,
    monthlyBuyingTotal: initialMonthlyBuyingTotal,
    monthlyDifference: initialMonthlyBuyingTotal - monthlyRent,
    totalSavings: lastYear.cumulativeRentingCost - lastYear.cumulativeBuyingCost,
    breakEvenYear,
    futureHomeValue: finalHomeValue,
    equityBuilt: finalEquity,
    taxBenefits: totalTaxBenefits,
    totalCostRenting: lastYear.cumulativeRentingCost,
    totalCostBuying: lastYear.cumulativeBuyingCost,
    downPaymentAmt,
    closingCostsAmt: closingCosts,
    monthlyMortgagePI: monthlyPI,
    monthlyPMI: initialPMI,
    monthlyTax: propertyTaxAnnual / 12,
    monthlyMaintenance: maintenanceMonthly,
    monthlyHOA: hoaMonthly,
    monthlyInsurance: homeInsAnnual / 12,
    yearlySeries,
  };
}

// ─── SVG Cumulative Cost Line Chart ──────────────────────────────────────────

function CostComparisonChart({ series, breakEven }: { series: YearlyData[]; breakEven: number | string }) {
  if (series.length === 0) return null;

  const W = 600, H = 220, pad = { left: 65, right: 15, top: 15, bottom: 30 };
  const chartW = W - pad.left - pad.right;
  const chartH = H - pad.top - pad.bottom;

  // Find max value in both series
  const allCosts = series.flatMap(d => [d.cumulativeBuyingCost, d.cumulativeRentingCost]);
  const minCost = Math.min(...allCosts, 0);
  const maxCost = Math.max(...allCosts, 1000);
  const costRange = maxCost - minCost;

  const getX = (index: number) => pad.left + (index / (series.length - 1)) * chartW;
  const getY = (val: number) => pad.top + chartH - ((val - minCost) / costRange) * chartH;

  const buyingPoints = series.map((d, i) => `${getX(i)},${getY(d.cumulativeBuyingCost)}`).join(" ");
  const rentingPoints = series.map((d, i) => `${getX(i)},${getY(d.cumulativeRentingCost)}`).join(" ");

  // Draw vertical line at break-even if within timeframe
  let breakEvenX = -999;
  const beNum = typeof breakEven === "number" ? breakEven : 0;
  if (beNum >= 1 && beNum <= series.length) {
    breakEvenX = pad.left + ((beNum - 1) / (series.length - 1)) * chartW;
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="none">
      {/* Grid Lines */}
      {[0, 0.25, 0.5, 0.75, 1].map((p, idx) => {
        const y = pad.top + chartH * p;
        const val = maxCost - (idx * costRange) / 4;
        return (
          <g key={idx}>
            <line x1={pad.left} y1={y} x2={W - pad.right} y2={y} stroke="#e8e0d0" strokeWidth="1" strokeDasharray="4 4" />
            <text x={pad.left - 6} y={y + 3} textAnchor="end" fontSize="9" fill="#888">{fmt(val)}</text>
          </g>
        );
      })}

      {/* Break-even vertical line */}
      {breakEvenX > 0 && beNum >= 1 && (
        <g>
          <line x1={breakEvenX} y1={pad.top} x2={breakEvenX} y2={pad.top + chartH} stroke="#b89a5a" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx={breakEvenX} cy={getY(series[Math.floor(beNum - 1)].cumulativeBuyingCost)} r="5" fill="#b89a5a" />
          <text x={breakEvenX + 6} y={pad.top + 15} fontSize="9.5" fontWeight="bold" fill="#b89a5a">Break-Even ({beNum} yrs)</text>
        </g>
      )}

      {/* Lines */}
      <polyline points={buyingPoints} fill="none" stroke="#3fb364" strokeWidth="3" strokeLinecap="round" />
      <polyline points={rentingPoints} fill="none" stroke="#052316" strokeWidth="3" strokeLinecap="round" />

      {/* X Axis Labels */}
      <line x1={pad.left} y1={pad.top + chartH} x2={W - pad.right} y2={pad.top + chartH} stroke="#052316" strokeWidth="1.5" />
      <text x={pad.left} y={H - 8} fontSize="9.5" fill="#888">Year 1</text>
      <text x={pad.left + chartW / 2} y={H - 8} textAnchor="middle" fontSize="9.5" fill="#888">Year {Math.round(series.length / 2)}</text>
      <text x={W - pad.right} y={H - 8} textAnchor="end" fontSize="9.5" fill="#888">Year {series.length}</text>
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function RentVsBuyCalculator() {
  // ── Inputs State ──
  // Renting
  const [rent, setRent] = useState("2000");
  const [rentIncrease, setRentIncrease] = useState("3");
  const [rentersIns, setRentersIns] = useState("180");
  const [securityDeposit, setSecurityDeposit] = useState("2000");
  const [hasCustomDeposit, setHasCustomDeposit] = useState(false);

  // Assumptions
  const [returnRate, setReturnRate] = useState("6");
  const [taxRate, setTaxRate] = useState("18");

  // Buying
  const [homePrice, setHomePrice] = useState("400000");
  const [downPaymentVal, setDownPaymentVal] = useState("80000");
  const [downPaymentPct, setDownPaymentPct] = useState("20");
  const [lastDpMode, setLastDpMode] = useState<"amt" | "pct">("pct");
  const [closingCosts, setClosingCosts] = useState("3595");
  const [hasCustomClosing, setHasCustomClosing] = useState(false);
  const [interestRate, setInterestRate] = useState("6.75");
  const [loanTerm, setLoanTerm] = useState("30");
  const [county, setCounty] = useState("Maricopa");
  const [taxes, setTaxes] = useState("2400"); // Property Tax
  const [appreciation, setAppreciation] = useState("4");
  const [homeIns, setHomeIns] = useState("1400"); // 0.35% default of 400k
  const [hasCustomHomeIns, setHasCustomHomeIns] = useState(false);
  const [maintenance, setMaintenance] = useState("333"); // 1% of 400k / 12 default
  const [hasCustomMaintenance, setHasCustomMaintenance] = useState(false);
  const [hoa, setHoa] = useState("0");
  const [comparisonPeriod, setComparisonPeriod] = useState("30");

  // Calculations Results
  const [result, setResult] = useState<RentVsBuyResult | null>(null);

  // ── Sync Actions ──

  const handleMonthlyRentChange = (val: string) => {
    setRent(val);
    const rAmt = parseFloat(val) || 0;
    if (!hasCustomDeposit) {
      setSecurityDeposit(String(Math.round(rAmt)));
    }
  };

  const handleSecurityDepositChange = (val: string) => {
    setSecurityDeposit(val);
    setHasCustomDeposit(true);
  };

  const handleHomePriceChange = (val: string) => {
    setHomePrice(val);
    const hp = parseFloat(val) || 0;

    // down payment sync
    if (hp > 0) {
      if (lastDpMode === "pct") {
        const pct = parseFloat(downPaymentPct) || 0;
        setDownPaymentVal(String(Math.round(hp * pct / 100)));
      } else {
        const amt = parseFloat(downPaymentVal) || 0;
        setDownPaymentPct((amt / hp * 100).toFixed(2));
      }

      // closing costs default sync
      if (!hasCustomClosing) {
        setClosingCosts(String(getDefaultClosingCosts(hp)));
      }

      // home insurance default sync
      if (!hasCustomHomeIns) {
        setHomeIns(String(Math.round(hp * 0.0035)));
      }

      // maintenance default sync
      if (!hasCustomMaintenance) {
        setMaintenance(String(Math.round(hp * 0.01 / 12)));
      }
    }
  };

  const handleDpAmtChange = (val: string) => {
    setDownPaymentVal(val);
    setLastDpMode("amt");
    const hp = parseFloat(homePrice) || 0;
    const amt = parseFloat(val) || 0;
    if (hp > 0) {
      setDownPaymentPct((amt / hp * 100).toFixed(4));
    }
  };

  const handleDpPctChange = (val: string) => {
    setDownPaymentPct(val);
    setLastDpMode("pct");
    const hp = parseFloat(homePrice) || 0;
    const pct = parseFloat(val) || 0;
    if (hp > 0) {
      setDownPaymentVal(String(Math.round(hp * pct / 100)));
    }
  };

  const handleClosingCostsChange = (val: string) => {
    setClosingCosts(val);
    setHasCustomClosing(true);
  };

  const handleHomeInsChange = (val: string) => {
    setHomeIns(val);
    setHasCustomHomeIns(true);
  };

  const handleMaintenanceChange = (val: string) => {
    setMaintenance(val);
    setHasCustomMaintenance(true);
  };

  // ── Calculation Action ──

  const handleCalculate = useCallback(() => {
    // Basic inputs
    const rRent = Math.max(1, parseFloat(rent) || 0);
    const rInc = Math.max(0, Math.min(20, parseFloat(rentIncrease) || 0));
    const rIns = Math.max(0, parseFloat(rentersIns) || 0);
    const rSec = Math.max(0, parseFloat(securityDeposit) || 0);

    const shareReturn = Math.max(0, Math.min(20, parseFloat(returnRate) || 0));
    const shareTax = Math.max(0, Math.min(50, parseFloat(taxRate) || 0));

    const hp = Math.max(10000, parseFloat(homePrice) || 0);

    // Down payment floor enforcement: 3% of Home Price
    let dpVal = lastDpMode === "pct"
      ? hp * (parseFloat(downPaymentPct) || 0) / 100
      : parseFloat(downPaymentVal) || 0;
    const dpFloor = hp * 0.03;
    if (dpVal < dpFloor) {
      dpVal = dpFloor;
      setDownPaymentVal(String(Math.round(dpFloor)));
      setDownPaymentPct("3.00");
    }
    dpVal = Math.min(dpVal, hp);

    const cc = Math.max(0, parseFloat(closingCosts) || 0);
    const rate = Math.max(0.1, Math.min(20, parseFloat(interestRate) || 0));

    // Loan term logic
    let term = Math.round(parseFloat(loanTerm) || 30);
    if (term < 1) term = 1;
    if (term > 30) term = 30;

    const propTax = Math.max(0, parseFloat(taxes) || 0);
    const appPct = Math.max(-10, Math.min(15, parseFloat(appreciation) || 0));
    const ins = Math.max(0, parseFloat(homeIns) || 0);
    const maint = Math.max(0, parseFloat(maintenance) || 0);
    const hFees = Math.max(0, parseFloat(hoa) || 0);

    // Comparison period logic
    let compYears = Math.round(parseFloat(comparisonPeriod) || 30);
    if (compYears < 1) compYears = 1;
    if (compYears > 30) compYears = 30;

    const r = runRentVsBuyCalc(
      rRent, rInc, rIns, rSec,
      shareReturn, shareTax,
      hp, dpVal, cc, rate, term,
      propTax, appPct, ins, maint, hFees,
      compYears
    );

    setResult(r);

    setTimeout(() => {
      document.getElementById("rent-vs-buy-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }, [rent, rentIncrease, rentersIns, securityDeposit, returnRate, taxRate, homePrice, downPaymentVal, downPaymentPct, lastDpMode, closingCosts, interestRate, loanTerm, taxes, appreciation, homeIns, maintenance, hoa, comparisonPeriod]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Banner Section */}
        <section className="w-full bg-[#052316] text-white py-16 lg:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5 opacity-40" />
            <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5 opacity-40" />
          </div>
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
              MORTGAGE TOOLS
            </span>
            <h1 className="text-white text-[38px] lg:text-[52px] font-playfair font-normal leading-[1.15] mb-6">
              Rent vs. Buy Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Compare the total lifetime cost of renting a property versus buying a home over a specified comparison timeframe.
            </p>
          </div>
        </section>

        {/* Form Inputs */}
        <section className="py-12 px-6 lg:px-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left: Renting & Assumptions Column */}
            <div className="lg:col-span-6 flex flex-col gap-6">

              {/* RENTING INPUTS */}
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-6">
                <h3 className="text-[#052316] text-[17px] font-bold pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#052316]" />
                  Renting Assumptions
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Monthly Rent ($)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={rent} onChange={(e) => handleMonthlyRentChange(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 pl-7 pr-3 text-[14px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Annual Rent Increase (%)</label>
                    <div className="relative">
                      <input type="number" step="0.1" value={rentIncrease} onChange={(e) => setRentIncrease(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3.5 text-[14px] font-bold text-[#052316] focus:outline-none" />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">%</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Renter&apos;s Insurance ($/yr)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={rentersIns} onChange={(e) => setRentersIns(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 pl-7 pr-3 text-[14px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Security Deposit ($)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={securityDeposit} onChange={(e) => handleSecurityDepositChange(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 pl-7 pr-3 text-[14px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* SHARED ASSUMPTIONS */}
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-6">
                <h3 className="text-[#052316] text-[17px] font-bold pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#b89a5a]" />
                  Shared Financial Assumptions
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5 font-sans">Investment Return Rate (%)</label>
                    <div className="relative">
                      <input type="number" step="0.1" value={returnRate} onChange={(e) => setReturnRate(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3.5 text-[14px] font-bold text-[#052316] focus:outline-none" />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">%</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Federal Tax Rate (%)</label>
                    <div className="relative">
                      <input type="number" step="1" value={taxRate} onChange={(e) => setTaxRate(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3.5 text-[14px] font-bold text-[#052316] focus:outline-none" />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Comparison Timeframe</label>
                  <div className="relative">
                    <input type="number" value={comparisonPeriod} onChange={(e) => setComparisonPeriod(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3.5 text-[14px] font-bold text-[#052316] focus:outline-none" />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Buying Column */}
            <div className="lg:col-span-6 flex flex-col gap-6">

              {/* BUYING INPUTS */}
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-6">
                <h3 className="text-[#052316] text-[17px] font-bold pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3fb364]" />
                  Buying Assumptions
                </h3>

                {/* Home Price */}
                <div>
                  <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Home Price ($)</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                    <input type="number" value={homePrice} onChange={(e) => handleHomePriceChange(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 pl-7 pr-3 text-[14px] font-bold text-[#052316] focus:outline-none" />
                  </div>
                </div>

                {/* Down Payment Dual Mode */}
                <div>
                  <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Down Payment</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={downPaymentVal} onChange={(e) => handleDpAmtChange(e.target.value)} onFocus={() => setLastDpMode("amt")}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 pl-7 pr-3 text-[14px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                    <div className="relative">
                      <input type="number" step="0.01" value={downPaymentPct} onChange={(e) => handleDpPctChange(e.target.value)} onFocus={() => setLastDpMode("pct")}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3.5 text-[14px] font-bold text-[#052316] focus:outline-none" />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">%</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#a89a70] italic block mt-1">Min 3% Down Payment required</span>
                </div>

                {/* Closing Costs & Rate */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5 font-sans">Closing Costs ($)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={closingCosts} onChange={(e) => handleClosingCostsChange(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 pl-7 pr-3 text-[14px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Interest Rate (%)</label>
                    <div className="relative">
                      <input type="number" step="0.05" value={interestRate} onChange={(e) => setInterestRate(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3.5 text-[14px] font-bold text-[#052316] focus:outline-none" />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">%</span>
                    </div>
                  </div>
                </div>

                {/* Term & County */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Loan Term (years)</label>
                    <input type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3.5 text-[14px] font-bold text-[#052316] focus:outline-none" />
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">County (Arizona)</label>
                    <select value={county} onChange={(e) => setCounty(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3 text-[14px] font-bold text-[#052316] focus:outline-none cursor-pointer">
                      {ARIZONA_COUNTIES.map((c) => (
                        <option key={c} value={c}>{c} County</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Taxes & Appreciation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Annual Property Taxes ($/yr)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={taxes} onChange={(e) => setTaxes(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 pl-7 pr-3 text-[14px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5 font-sans">Home Appreciation (%)</label>
                    <div className="relative">
                      <input type="number" step="0.1" value={appreciation} onChange={(e) => setAppreciation(e.target.value)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3.5 text-[14px] font-bold text-[#052316] focus:outline-none" />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">%</span>
                    </div>
                  </div>
                </div>

                {/* Insurance, Maintenance, HOA */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5 font-sans">Annual Home Ins ($)</label>
                    <input type="number" value={homeIns} onChange={(e) => handleHomeInsChange(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3 text-[14px] font-bold text-[#052316] focus:outline-none" />
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5 font-sans">Maintenance ($/mo)</label>
                    <input type="number" value={maintenance} onChange={(e) => handleMaintenanceChange(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3 text-[14px] font-bold text-[#052316] focus:outline-none" />
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">HOA Fees ($/mo)</label>
                    <input type="number" value={hoa} onChange={(e) => setHoa(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3 text-[14px] font-bold text-[#052316] focus:outline-none" />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Calculate CTA */}
          <div className="mt-8">
            <button onClick={handleCalculate}
              className="w-full bg-[#3fb364] hover:bg-[#349b55] active:scale-[0.98] text-white text-[16.5px] font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
              </svg>
              Compare Renting vs. Buying Costs
            </button>
          </div>
        </section>

        {/* Placeholder if not calculated */}
        {!result && (
          <section className="pb-16 px-6 max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-10 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-[#3fb364]/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h3 className="text-[#052316] text-[18px] font-bold mb-2">Compare Renting vs. Buying</h3>
              <p className="text-[#888] text-[14px] leading-relaxed">
                Fill in your rental budget and target home price above, then click <strong>&ldquo;Compare Renting vs. Buying Costs&rdquo;</strong> to view detailed break-even projections.
              </p>
            </div>
          </section>
        )}

        {/* ── RESULTS SECTION ─────────────────────────────────────────────────── */}
        {result && (
          <section id="rent-vs-buy-results" className="pb-16 px-6 lg:px-10 max-w-6xl mx-auto space-y-8 animate-fadeUp">

            {/* 3 Main Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

              {/* Total Savings Card */}
              <div className={`rounded-3xl p-6 shadow-sm border ${result.totalSavings >= 0 ? "bg-[#052316] text-white border-[#052316]" : "bg-red-50 text-red-900 border-red-200"}`}>
                <p className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${result.totalSavings >= 0 ? "text-[#3fb364]" : "text-red-500"}`}>
                  {result.totalSavings >= 0 ? "Buying Saves You" : "Renting Saves You"}
                </p>
                <p className="text-[34px] font-bold leading-tight">
                  {fmt(Math.abs(result.totalSavings))}
                </p>
                <p className={`text-[13px] mt-1 ${result.totalSavings >= 0 ? "text-[#c8c8b8]" : "text-red-700"}`}>
                  over the {comparisonPeriod} year comparison period
                </p>
              </div>

              {/* Break-Even Year Card */}
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm">
                <p className="text-[#a89a70] text-[11px] font-bold uppercase tracking-wider mb-1">Break-Even Point</p>
                <p className="text-[#052316] text-[34px] font-bold leading-tight">
                  {typeof result.breakEvenYear === "number" ? `${result.breakEvenYear} years` : "N/A"}
                </p>
                <p className="text-[#888] text-[13px] mt-1">
                  {typeof result.breakEvenYear === "number"
                    ? `Buying becomes cheaper than renting in Year ${Math.ceil(parseFloat(String(result.breakEvenYear)))}`
                    : "Renting is cheaper than buying throughout"}
                </p>
              </div>

              {/* Monthly Cost Comparison Summary */}
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm">
                <p className="text-[#a89a70] text-[11px] font-bold uppercase tracking-wider mb-1">Monthly Cost Difference</p>
                <p className={`text-[34px] font-bold leading-tight ${result.monthlyDifference >= 0 ? "text-[#b89a5a]" : "text-[#3fb364]"}`}>
                  {fmt(Math.abs(result.monthlyDifference))}
                </p>
                <p className="text-[#888] text-[13px] mt-1">
                  {result.monthlyDifference >= 0 ? "Buying costs more monthly" : "Renting costs more monthly"}
                </p>
              </div>
            </div>

            {/* Split Comparison Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Renting Overview */}
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="text-[#052316] text-[16px] font-bold mb-4 pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#052316]" />
                    Renting Costs
                  </h4>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between text-[13.5px] py-1 border-b border-[#e8e0d0]/20">
                      <span className="text-[#888]">Monthly Rent</span>
                      <span className="text-[#052316] font-bold">{fmt(result.monthlyRent)}/mo</span>
                    </div>
                    <div className="flex justify-between text-[13.5px] py-1 border-b border-[#e8e0d0]/20">
                      <span className="text-[#888]">Renter&apos;s Insurance</span>
                      <span className="text-[#052316] font-bold">{fmt(parseFloat(rentersIns) || 0)}/yr</span>
                    </div>
                    <div className="flex justify-between text-[13.5px] py-1 border-b border-[#e8e0d0]/20">
                      <span className="text-[#888]">Refundable Security Deposit</span>
                      <span className="text-[#052316] font-bold">{fmt(parseFloat(securityDeposit) || 0)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#e8e0d0]/40 bg-[#faf7f0] rounded-2xl p-4">
                  <p className="text-[11px] text-[#a89a70] font-bold uppercase tracking-wider mb-2">Total Renting Cost Summary ({comparisonPeriod} yrs)</p>
                  <div className="flex justify-between text-[14px] font-bold text-[#052316]">
                    <span>Lifetime Renting Costs</span>
                    <span>{fmt(result.totalCostRenting)}</span>
                  </div>
                </div>
              </div>

              {/* Buying Overview */}
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="text-[#052316] text-[16px] font-bold mb-4 pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3fb364]" />
                    Buying Costs
                  </h4>
                  <div className="flex flex-col gap-2.5 text-[13.5px]">
                    <div className="flex justify-between py-1 border-b border-[#e8e0d0]/20">
                      <span className="text-[#888]">Monthly Mortgage (P&I)</span>
                      <span className="text-[#052316] font-bold">{fmt(result.monthlyMortgagePI)}/mo</span>
                    </div>
                    {result.monthlyPMI > 0 && (
                      <div className="flex justify-between py-1 border-b border-[#e8e0d0]/20">
                        <span className="text-[#888]">Monthly PMI (recalculated)</span>
                        <span className="text-[#052316] font-bold">{fmt(result.monthlyPMI)}/mo</span>
                      </div>
                    )}
                    <div className="flex justify-between py-1 border-b border-[#e8e0d0]/20">
                      <span className="text-[#888]">Monthly Property Taxes</span>
                      <span className="text-[#052316] font-bold">{fmt(result.monthlyTax)}/mo</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#e8e0d0]/20">
                      <span className="text-[#888]">Monthly Maintenance</span>
                      <span className="text-[#052316] font-bold">{fmt(result.monthlyMaintenance)}/mo</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#e8e0d0]/20">
                      <span className="text-[#888]">Monthly HOA Fees</span>
                      <span className="text-[#052316] font-bold">{fmt(result.monthlyHOA)}/mo</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#e8e0d0]/20">
                      <span className="text-[#888]">Monthly Home Insurance</span>
                      <span className="text-[#052316] font-bold">{fmt(result.monthlyInsurance)}/mo</span>
                    </div>
                    <div className="flex justify-between py-1.5 bg-[#fcf9f3] rounded-lg px-2 mt-1 font-bold text-[#052316]">
                      <span>Total Initial Monthly Payment</span>
                      <span>{fmt(result.monthlyBuyingTotal)}/mo</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#e8e0d0]/40 bg-[#faf7f0] rounded-2xl p-4">
                  <p className="text-[11px] text-[#a89a70] font-bold uppercase tracking-wider mb-2">Total Buying Cost Summary ({comparisonPeriod} yrs)</p>
                  <div className="flex justify-between text-[14px] font-bold text-[#052316]">
                    <span>Lifetime Buying Costs</span>
                    <span>{fmt(result.totalCostBuying)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Line Chart comparison */}
            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm">
              <h3 className="text-[#052316] text-[16px] font-bold mb-2 pb-3 border-b border-[#e8e0d0]/40">Cumulative Cost Comparison Over Time</h3>
              <div className="flex items-center gap-5 mt-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-1 bg-[#3fb364]" />
                  <span className="text-[11.5px] text-[#888]">Cumulative Buying Cost</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-1 bg-[#052316]" />
                  <span className="text-[11.5px] text-[#888]">Cumulative Renting Cost</span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <CostComparisonChart series={result.yearlySeries} breakEven={result.breakEvenYear} />
              </div>
            </div>

            {/* Buying Wealth Benefits */}
            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm">
              <h3 className="text-[#052316] text-[16px] font-bold mb-4 pb-3 border-b border-[#e8e0d0]/40">Long-term Equity & Net Benefit</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
                <div className="bg-[#fcf9f3] rounded-2xl p-4 border border-[#e8e0d0]/40">
                  <p className="text-[11px] text-[#a89a70] font-bold uppercase tracking-wide mb-1 font-sans">Future Home Value</p>
                  <p className="text-[20px] font-bold text-[#052316]">{fmt(result.futureHomeValue)}</p>
                  <p className="text-[11px] text-[#888] mt-1">Appreciated over {comparisonPeriod} yrs</p>
                </div>
                <div className="bg-[#fcf9f3] rounded-2xl p-4 border border-[#e8e0d0]/40">
                  <p className="text-[11px] text-[#a89a70] font-bold uppercase tracking-wide mb-1 font-sans">Equity Built</p>
                  <p className="text-[20px] font-bold text-[#052316]">{fmt(result.equityBuilt)}</p>
                  <p className="text-[11px] text-[#888] mt-1">Value minus loan balance</p>
                </div>
                <div className="bg-[#fcf9f3] rounded-2xl p-4 border border-[#e8e0d0]/40">
                  <p className="text-[11px] text-[#a89a70] font-bold uppercase tracking-wide mb-1 font-sans">Tax Benefits</p>
                  <p className="text-[20px] font-bold text-[#3fb364]">{fmt(result.taxBenefits)}</p>
                  <p className="text-[11px] text-[#888] mt-1">Interest & Property tax deductions</p>
                </div>
              </div>
            </div>

            {/* Year-by-Year Table */}
            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 shadow-sm overflow-hidden">
              <div className="px-7 py-5 border-b border-[#e8e0d0]/40">
                <h3 className="text-[#052316] text-[16px] font-bold">Year-by-Year Cost Projections</h3>
                <p className="text-[#888] text-[12.5px] mt-0.5">Rent increases and home appreciation compounded annually.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-[12.5px]">
                  <thead>
                    <tr className="bg-[#052316] text-white">
                      {["Year", "Rent Paid", "Home Value", "Loan Bal", "PMI", "Interest", "Tax Benefit", "Cum. Buying", "Cum. Renting"].map((h) => (
                        <th key={h} className="py-3 px-4 text-left font-semibold whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {result.yearlySeries.map((row, idx) => (
                      <tr key={row.year} className={idx % 2 === 0 ? "bg-white" : "bg-[#faf7f0]"}>
                        <td className="py-2.5 px-4 text-[#888] font-bold">{row.year}</td>
                        <td className="py-2.5 px-4 text-[#052316]">{fmt(row.rent)}</td>
                        <td className="py-2.5 px-4 text-[#052316]">{fmt(row.homeValue)}</td>
                        <td className="py-2.5 px-4 text-[#052316]">{fmt(row.remainingBalance)}</td>
                        <td className="py-2.5 px-4 text-red-500">{row.pmiPaid > 0 ? fmt(row.pmiPaid) : "$0"}</td>
                        <td className="py-2.5 px-4 text-[#b89a5a]">{fmt(row.interestPaid)}</td>
                        <td className="py-2.5 px-4 text-[#3fb364]">{fmt(row.taxBenefit)}</td>
                        <td className="py-2.5 px-4 text-[#052316] font-bold">{fmt(row.cumulativeBuyingCost)}</td>
                        <td className="py-2.5 px-4 text-[#052316] font-bold">{fmt(row.cumulativeRentingCost)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#052316] rounded-3xl p-6 lg:p-8 text-white shadow-md relative overflow-hidden">
              <div className="absolute -bottom-16 -right-16 w-[200px] h-[200px] rounded-full border border-white/5 opacity-40" />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h4 className="text-[18px] font-bold mb-1 font-sans">Thinking about buying or renting in Arizona?</h4>
                  <p className="text-[#c8c8b8] text-[13.5px]">Connect with the Knoell team to evaluate your budget and get pre-approved.</p>
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
