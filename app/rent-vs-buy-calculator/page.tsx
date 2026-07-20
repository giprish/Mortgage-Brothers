"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import SliderInput from "../component/SliderInput";

// ─── Types ────────────────────────────────────────────────────────────────────

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
  monthlyRent: number;
  monthlyBuyingTotal: number;
  monthlyDifference: number;
  totalSavings: number;
  breakEvenYear: number | string;
  futureHomeValue: number;
  equityBuilt: number;
  taxBenefits: number;
  totalCostRenting: number;
  totalCostBuying: number;
  downPaymentAmt: number;
  closingCostsAmt: number;
  monthlyMortgagePI: number;
  monthlyPMI: number;
  monthlyTax: number;
  monthlyMaintenance: number;
  monthlyHOA: number;
  monthlyInsurance: number;
  yearlySeries: YearlyData[];
  loanProgram: string;
  upfrontFee: number;
  upfrontFeeLabel: string | null;
  miAppliesAtStart: boolean;
  miAnnualRate: number;
}

// Arizona closing cost schedule (Title Escrow Fee by Home Price)
const titleEscrowTable: [number, number][] = [
  [200000, 450], [300000, 530], [400000, 610], [500000, 690], [600000, 770],
  [700000, 850], [800000, 930], [900000, 1010], [1000000, 1090], [1100000, 1170],
  [1200000, 1250], [1300000, 1330], [1400000, 1410], [1500000, 1490], [1600000, 1570],
  [1700000, 1650], [1800000, 1730], [1900000, 1810], [2000000, 1890], [2100000, 1970],
  [2200000, 2050], [2300000, 2130], [2400000, 2210], [2500000, 2290], [2600000, 2370],
  [2700000, 2450], [2800000, 2530], [2900000, 2610], [3000000, 2690]
];

// Title Insurance Fee by Loan Amount
const titleInsuranceTable: [number, number][] = [
  [200000, 770], [300000, 895], [400000, 1020], [500000, 1145], [600000, 1270],
  [700000, 1395], [800000, 1520], [900000, 1645], [1000000, 1770], [1100000, 1895],
  [1200000, 2020], [1300000, 2145], [1400000, 2270], [1500000, 2395], [1600000, 2520],
  [1700000, 2645], [1800000, 2770], [1900000, 2895], [2000000, 3020], [2100000, 3145],
  [2200000, 3270], [2300000, 3395], [2400000, 3520], [2500000, 3645], [2600000, 3770],
  [2700000, 3895], [2800000, 4020], [2900000, 4145], [3000000, 4270]
];

const CC_FIXED_FEES = { origination: 1000, appraisal: 650, creditReport: 95, recording: 75 };

function lookupBandTable(table: [number, number][], value: number): number {
  for (const [upTo, val] of table) {
    if (value <= upTo) return val;
  }
  return table[table.length - 1][1];
}

function getDefaultClosingCosts(homePrice: number, loanAmount: number): number {
  const escrow = lookupBandTable(titleEscrowTable, homePrice);
  const titleIns = lookupBandTable(titleInsuranceTable, loanAmount);
  return escrow + titleIns + CC_FIXED_FEES.origination + CC_FIXED_FEES.appraisal +
         CC_FIXED_FEES.creditReport + CC_FIXED_FEES.recording;
}

// Arizona Property Tax Schedule by Home Price
const propertyTaxTable: [number, number][] = [
  [100000, 1000], [150000, 1065], [200000, 1134], [250000, 1208], [300000, 1286],
  [350000, 1370], [400000, 1459], [450000, 1554], [500000, 1756], [550000, 1984],
  [600000, 2242], [650000, 2534], [700000, 2863], [750000, 3149], [800000, 3370],
  [850000, 3606], [900000, 3858], [950000, 4128], [1000000, 4417], [1050000, 4638],
  [1100000, 4870], [1150000, 5114], [1200000, 5267], [1250000, 5425], [1300000, 5588],
  [1350000, 5755], [1400000, 5928], [1450000, 6047], [1500000, 6167], [1550000, 6291],
  [1600000, 6417], [1650000, 6545], [1700000, 6676], [1750000, 6809], [1800000, 6946],
  [1850000, 7084], [1900000, 7226], [1950000, 7371], [10000000, 7518]
];

function getDefaultAnnualPropertyTax(homePrice: number): number {
  return lookupBandTable(propertyTaxTable, homePrice);
}

// Conventional PMI rate table (annual %, by credit score band x down-payment tier)
const PMI_TABLE: Record<number, number[]> = {
  760: [0.30, 0.19, 0.15, 0.10],
  720: [0.48, 0.33, 0.24, 0.13],
  680: [1.02, 0.75, 0.52, 0.23],
  620: [1.56, 1.17, 0.79, 0.33],
  0: [1.56, 1.17, 0.79, 0.33]
};

function creditScoreBand(score: number): number {
  if (score >= 760) return 760;
  if (score >= 720) return 720;
  if (score >= 680) return 680;
  if (score >= 620) return 620;
  return 0;
}

function getConventionalPMIRate(creditScore: number, ltvPct: number): number {
  const downPct = 100 - ltvPct;
  const row = PMI_TABLE[creditScoreBand(creditScore)];
  let ratePct: number;
  if (downPct < 5) ratePct = row[0];
  else if (downPct < 10) ratePct = row[1];
  else if (downPct < 15) ratePct = row[2];
  else ratePct = row[3];
  return ratePct / 100;
}

// FHA MIP
const FHA_UFMIP_RATE = 0.0175;

function getFhaAnnualMipRate(ltvPct: number, termYears: number): number {
  if (termYears > 15) {
    return ltvPct > 95 ? 0.0055 : 0.0050;
  }
  return ltvPct > 90 ? 0.0040 : 0.0015;
}

function fhaMipRemovalYear(ltvPct: number): number {
  return ltvPct > 90 ? Infinity : 11;
}

// VA Funding Fee (2023+ schedule)
function getVaFundingFeeRate(dpPct: number, firstUse: boolean): number {
  if (firstUse) {
    if (dpPct < 5) return 0.0215;
    if (dpPct < 10) return 0.0150;
    return 0.0125;
  } else {
    if (dpPct < 5) return 0.0330;
    if (dpPct < 10) return 0.0150;
    return 0.0125;
  }
}

function minDownPaymentPct(program: string): number {
  if (program === "va") return 0;
  if (program === "fha") return 3.5;
  return 3;
}

const ARIZONA_COUNTIES = [
  "Maricopa", "Apache", "Cochise", "Coconino", "Gila", "Graham", "Greenlee",
  "La Paz", "Mohave", "Navajo", "Pima", "Pinal", "Santa Cruz", "Yavapai", "Yuma"
];

const fmt = (v: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Math.round(v));

// ─── Calculator Core ──────────────────────────────────────────────────────────

function runRentVsBuyCalc(
  monthlyRent: number, rentIncreasePct: number, rentersInsAnnual: number, securityDeposit: number,
  investmentReturnPct: number, taxRatePct: number,
  homePrice: number, downPaymentAmt: number, closingCosts: number, interestRatePct: number, loanTermYears: number,
  propertyTaxAnnual: number, homeAppreciationPct: number, homeInsAnnual: number, maintenanceMonthly: number, hoaMonthly: number,
  comparisonYears: number,
  loanProgram: string, creditScore: number, vaFirstUse: boolean, vaExempt: boolean
): RentVsBuyResult {
  const homePriceVal = Math.max(10000, homePrice);
  const floorPct = minDownPaymentPct(loanProgram);
  let dpPct = homePriceVal > 0 ? (downPaymentAmt / homePriceVal) * 100 : 20;
  dpPct = Math.max(floorPct, Math.min(100, dpPct));
  const downPayment = homePriceVal * dpPct / 100;
  const baseLoanAmount = Math.max(0, homePriceVal - downPayment);

  // Program-specific upfront fee (financed into the loan)
  let upfrontFee = 0;
  let upfrontFeeLabel: string | null = null;
  if (loanProgram === "fha") {
    upfrontFee = baseLoanAmount * FHA_UFMIP_RATE;
    upfrontFeeLabel = "FHA Upfront MIP";
  } else if (loanProgram === "va" && !vaExempt) {
    const feeRate = getVaFundingFeeRate(dpPct, vaFirstUse);
    upfrontFee = baseLoanAmount * feeRate;
    upfrontFeeLabel = "VA Funding Fee";
  }
  const loanAmt = baseLoanAmount + upfrontFee;

  const monthlyRate = interestRatePct / 100 / 12;
  const totalMonths = loanTermYears * 12;

  let monthlyPI = 0;
  if (loanAmt > 0 && totalMonths > 0) {
    if (monthlyRate === 0) {
      monthlyPI = loanAmt / totalMonths;
    } else {
      const factor = Math.pow(1 + monthlyRate, totalMonths);
      monthlyPI = (loanAmt * monthlyRate * factor) / (factor - 1);
    }
  }

  const originalLtvPct = homePriceVal > 0 ? (baseLoanAmount / homePriceVal * 100) : 0;

  // Recurring mortgage insurance setup
  let miAnnualRate = 0;
  let miAppliesAtStart = false;
  let miRemovalYear: number | null = null;
  let miLifeOfLoan = false;

  if (loanProgram === "conventional") {
    miAppliesAtStart = dpPct < 20;
    if (miAppliesAtStart) {
      miAnnualRate = getConventionalPMIRate(creditScore, originalLtvPct);
    }
  } else if (loanProgram === "fha") {
    miAppliesAtStart = true;
    miAnnualRate = getFhaAnnualMipRate(originalLtvPct, loanTermYears);
    const cutoff = fhaMipRemovalYear(originalLtvPct);
    if (cutoff === Infinity) { miLifeOfLoan = true; } else { miRemovalYear = cutoff; }
  }
  // VA: no recurring mortgage insurance ever

  let miRemoved = !miAppliesAtStart;

  const yearlySeries: YearlyData[] = [];
  let cumBuyingCost = 0;
  let cumRentingCost = 0;
  let totalPMIPaid = 0;
  let totalInterestPaid = 0;
  let totalTaxBenefits = 0;
  let totalRentPaid = 0;
  let balance = loanAmt;

  for (let year = 1; year <= comparisonYears; year++) {
    const currentMonthlyRent = monthlyRent * Math.pow(1 + rentIncreasePct / 100, year - 1);
    const rentPaidThisYear = currentMonthlyRent * 12;
    totalRentPaid += rentPaidThisYear;

    const homeValueAtYearEnd = homePriceVal * Math.pow(1 + homeAppreciationPct / 100, year);
    const homeValueAtYearStart = homePriceVal * Math.pow(1 + homeAppreciationPct / 100, year - 1);
    const startBalanceOfYear = balance;

    let interestPaidThisYear = 0;
    let pmiPaidThisYear = 0;

    for (let month = 1; month <= 12; month++) {
      const currentN = (year - 1) * 12 + month;
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

    if (!miRemoved && (year - 1) * 12 < totalMonths) {
      if (loanProgram === "conventional") {
        const homeValue_startOfYear = homePriceVal * Math.pow(1 + homeAppreciationPct / 100, year - 1);
        const ltvStart = startBalanceOfYear / homeValue_startOfYear;
        if (ltvStart > 0.80) { pmiPaidThisYear = startBalanceOfYear * miAnnualRate; }
        else { miRemoved = true; }
      } else if (loanProgram === "fha") {
        if (miLifeOfLoan || (miRemovalYear !== null && year <= miRemovalYear)) {
          pmiPaidThisYear = startBalanceOfYear * miAnnualRate;
        } else {
          miRemoved = true;
        }
      }
    }

    if (loanProgram === "conventional" && !miRemoved && homeValueAtYearEnd > 0 && (balance / homeValueAtYearEnd) <= 0.80) {
      miRemoved = true;
    }

    totalPMIPaid += pmiPaidThisYear;
    totalInterestPaid += interestPaidThisYear;

    const taxBenefitThisYear = (interestPaidThisYear + propertyTaxAnnual) * (taxRatePct / 100);
    totalTaxBenefits += taxBenefitThisYear;

    cumBuyingCost =
      downPayment + closingCosts + upfrontFee +
      (monthlyPI * 12 * Math.min(year, loanTermYears)) +
      totalPMIPaid + (propertyTaxAnnual * year) +
      (maintenanceMonthly * 12 * year) + (hoaMonthly * 12 * year) +
      (homeInsAnnual * year) - (homeValueAtYearEnd - homePriceVal) - totalTaxBenefits;

    const rate = investmentReturnPct / 100;
    const dpCcGrowth = (downPayment + closingCosts) * (Math.pow(1 + rate, year) - 1);
    const sdGrowth = securityDeposit * (Math.pow(1 + rate, year) - 1);

    cumRentingCost = totalRentPaid + (rentersInsAnnual * year) + sdGrowth - dpCcGrowth;

    yearlySeries.push({
      year, rent: rentPaidThisYear, homeValue: homeValueAtYearEnd, remainingBalance: balance,
      pmiPaid: pmiPaidThisYear, interestPaid: interestPaidThisYear, taxBenefit: taxBenefitThisYear,
      cumulativeBuyingCost: cumBuyingCost, cumulativeRentingCost: cumRentingCost, equity: Math.max(0, homeValueAtYearEnd - balance)
    });
  }

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

  const lastYear = yearlySeries[yearlySeries.length - 1];
  const initialPMI = miAppliesAtStart ? (baseLoanAmount * miAnnualRate) / 12 : 0;
  const initialMonthlyBuyingTotal = monthlyPI + initialPMI + (propertyTaxAnnual / 12) + maintenanceMonthly + hoaMonthly + (homeInsAnnual / 12);

  return {
    monthlyRent, monthlyBuyingTotal: initialMonthlyBuyingTotal, monthlyDifference: initialMonthlyBuyingTotal - monthlyRent,
    totalSavings: lastYear.cumulativeRentingCost - lastYear.cumulativeBuyingCost, breakEvenYear, futureHomeValue: lastYear.homeValue,
    equityBuilt: lastYear.equity, taxBenefits: totalTaxBenefits, totalCostRenting: lastYear.cumulativeRentingCost,
    totalCostBuying: lastYear.cumulativeBuyingCost, downPaymentAmt: downPayment, closingCostsAmt: closingCosts,
    monthlyMortgagePI: monthlyPI, monthlyPMI: initialPMI, monthlyTax: propertyTaxAnnual / 12, monthlyMaintenance: maintenanceMonthly,
    monthlyHOA: hoaMonthly, monthlyInsurance: homeInsAnnual / 12, yearlySeries,
    loanProgram, upfrontFee, upfrontFeeLabel, miAppliesAtStart, miAnnualRate
  };
}

// ─── SVG Chart ────────────────────────────────────────────────────────────────

function CostComparisonChart({ series, breakEven }: { series: YearlyData[]; breakEven: number | string }) {
  if (series.length === 0) return null;
  const W = 600, H = 220, pad = { left: 65, right: 15, top: 15, bottom: 30 };
  const chartW = W - pad.left - pad.right;
  const chartH = H - pad.top - pad.bottom;
  const allCosts = series.flatMap(d => [d.cumulativeBuyingCost, d.cumulativeRentingCost]);
  const minCost = Math.min(...allCosts, 0);
  const maxCost = Math.max(...allCosts, 1000);
  const costRange = maxCost - minCost;
  const getX = (index: number) => pad.left + (index / (series.length - 1)) * chartW;
  const getY = (val: number) => pad.top + chartH - ((val - minCost) / costRange) * chartH;
  const buyingPoints = series.map((d, i) => `${getX(i)},${getY(d.cumulativeBuyingCost)}`).join(" ");
  const rentingPoints = series.map((d, i) => `${getX(i)},${getY(d.cumulativeRentingCost)}`).join(" ");

  let breakEvenX = -999;
  const beNum = typeof breakEven === "number" ? breakEven : 0;
  if (beNum >= 1 && beNum <= series.length) {
    breakEvenX = pad.left + ((beNum - 1) / (series.length - 1)) * chartW;
  }
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="none">
      {[0, 0.25, 0.5, 0.75, 1].map((p, idx) => {
        const y = pad.top + chartH * p;
        return (
          <g key={idx}>
            <line x1={pad.left} y1={y} x2={W - pad.right} y2={y} stroke="#e8e0d0" strokeWidth="1" strokeDasharray="4 4" />
            <text x={pad.left - 6} y={y + 3} textAnchor="end" fontSize="9" fill="#888">{fmt(maxCost - (idx * costRange) / 4)}</text>
          </g>
        );
      })}
      {breakEvenX > 0 && beNum >= 1 && (
        <g>
          <line x1={breakEvenX} y1={pad.top} x2={breakEvenX} y2={pad.top + chartH} stroke="#b89a5a" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx={breakEvenX} cy={getY(series[Math.floor(beNum - 1)].cumulativeBuyingCost)} r="5" fill="#b89a5a" />
          <text x={breakEvenX + 6} y={pad.top + 15} fontSize="9.5" fontWeight="bold" fill="#b89a5a">Break-Even ({beNum} yrs)</text>
        </g>
      )}
      <polyline points={buyingPoints} fill="none" stroke="#3fb364" strokeWidth="3" strokeLinecap="round" />
      <polyline points={rentingPoints} fill="none" stroke="#052316" strokeWidth="3" strokeLinecap="round" />
      <line x1={pad.left} y1={pad.top + chartH} x2={W - pad.right} y2={pad.top + chartH} stroke="#052316" strokeWidth="1.5" />
      <text x={pad.left} y={H - 8} fontSize="9.5" fill="#888">Year 1</text>
      <text x={W - pad.right} y={H - 8} textAnchor="end" fontSize="9.5" fill="#888">Year {series.length}</text>
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function RentVsBuyCalculatorPage() {
  const [rent, setRent] = useState(2000);
  const [rentIncrease, setRentIncrease] = useState(3);
  const [rentersIns, setRentersIns] = useState(180);
  const [securityDeposit, setSecurityDeposit] = useState(2000);
  const [hasCustomDeposit, setHasCustomDeposit] = useState(false);

  const [returnRate, setReturnRate] = useState(6);
  const [taxRate, setTaxRate] = useState(18);

  const [homePrice, setHomePrice] = useState(400000);
  const [downPaymentVal, setDownPaymentVal] = useState(80000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [lastDpMode, setLastDpMode] = useState<"amt" | "pct">("pct");
  const [closingCosts, setClosingCosts] = useState(getDefaultClosingCosts(400000, 320000));
  const [hasCustomClosing, setHasCustomClosing] = useState(false);
  const [interestRate, setInterestRate] = useState(6.75);
  const [loanTerm, setLoanTerm] = useState(30);
  const [county, setCounty] = useState("Maricopa");
  const [taxes, setTaxes] = useState(getDefaultAnnualPropertyTax(400000));
  const [hasCustomTaxes, setHasCustomTaxes] = useState(false);
  const [appreciation, setAppreciation] = useState(4);
  const [homeIns, setHomeIns] = useState(Math.round(400000 * 0.0035));
  const [hasCustomHomeIns, setHasCustomHomeIns] = useState(false);
  const [maintenance, setMaintenance] = useState(Math.round(400000 * 0.01 / 12));
  const [hasCustomMaintenance, setHasCustomMaintenance] = useState(false);
  const [hoa, setHoa] = useState(0);
  const [comparisonPeriod, setComparisonPeriod] = useState(30);
  const [loanProgram, setLoanProgram] = useState("conventional");
  const [creditScore, setCreditScore] = useState(740);
  const [vaFirstUse, setVaFirstUse] = useState(true);
  const [vaExempt, setVaExempt] = useState(false);

  const handleMonthlyRentChange = (val: number) => {
    setRent(val);
    if (!hasCustomDeposit) setSecurityDeposit(Math.round(val));
  };

  const handleHomePriceChange = (val: number) => {
    setHomePrice(val);
    if (val > 0) {
      if (lastDpMode === "pct") {
        setDownPaymentVal(Math.round(val * downPaymentPct / 100));
      } else {
        setDownPaymentPct(parseFloat((downPaymentVal / val * 100).toFixed(4)));
      }
      const loanAmt = Math.max(0, val - (lastDpMode === "pct" ? val * downPaymentPct / 100 : downPaymentVal));
      if (!hasCustomClosing) setClosingCosts(getDefaultClosingCosts(val, loanAmt));
      if (!hasCustomTaxes) setTaxes(getDefaultAnnualPropertyTax(val));
      if (!hasCustomHomeIns) setHomeIns(Math.round(val * 0.0035));
      if (!hasCustomMaintenance) setMaintenance(Math.round(val * 0.01 / 12));
    }
  };

  const handleDpAmtChange = (val: number) => {
    setDownPaymentVal(val); setLastDpMode("amt");
    if (homePrice > 0) setDownPaymentPct(parseFloat((val / homePrice * 100).toFixed(4)));
  };

  const handleDpPctChange = (val: number) => {
    setDownPaymentPct(val); setLastDpMode("pct");
    if (homePrice > 0) setDownPaymentVal(Math.round(homePrice * val / 100));
  };

  const handleClosingCostsChange = (val: number) => {
    setClosingCosts(val);
    setHasCustomClosing(true);
  };

  const handleTaxesChange = (val: number) => {
    setTaxes(val);
    setHasCustomTaxes(true);
  };

  const handleHomeInsChange = (val: number) => {
    setHomeIns(val);
    setHasCustomHomeIns(true);
  };

  const handleMaintenanceChange = (val: number) => {
    setMaintenance(val);
    setHasCustomMaintenance(true);
  };

  const result = useMemo<RentVsBuyResult | null>(() => {
    const rRent = Math.max(1, rent);
    const rInc = Math.max(0, Math.min(20, rentIncrease));
    const rIns = Math.max(0, rentersIns);
    const rSec = Math.max(0, securityDeposit);
    const shareReturn = Math.max(0, Math.min(20, returnRate));
    const shareTax = Math.max(0, Math.min(50, taxRate));
    const hp = Math.max(10000, homePrice);

    let dpVal = lastDpMode === "pct" ? hp * downPaymentPct / 100 : downPaymentVal;
    const dpFloor = hp * 0.03;
    if (dpVal < dpFloor) dpVal = dpFloor;
    dpVal = Math.min(dpVal, hp);

    const cc = Math.max(0, closingCosts);
    const rate = Math.max(0.1, Math.min(20, interestRate));
    let term = Math.round(loanTerm);
    if (term < 1) term = 1;
    if (term > 30) term = 30;

    const propTax = Math.max(0, taxes);
    const appPct = Math.max(-10, Math.min(15, appreciation));
    const ins = Math.max(0, homeIns);
    const maint = Math.max(0, maintenance);
    const hFees = Math.max(0, hoa);
    let compYears = Math.round(comparisonPeriod);
    if (compYears < 1) compYears = 1;
    if (compYears > 30) compYears = 30;

    return runRentVsBuyCalc(rRent, rInc, rIns, rSec, shareReturn, shareTax, hp, dpVal, cc, rate, term, propTax, appPct, ins, maint, hFees, compYears, loanProgram, creditScore, vaFirstUse, vaExempt);
  }, [rent, rentIncrease, rentersIns, securityDeposit, returnRate, taxRate, homePrice, downPaymentVal, downPaymentPct, lastDpMode, closingCosts, interestRate, loanTerm, taxes, appreciation, homeIns, maintenance, hoa, comparisonPeriod, loanProgram, creditScore, vaFirstUse, vaExempt]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />
      <main className="flex-grow">
        {/* Banner */}
        <section className="w-full bg-[#052316] text-white py-16 lg:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5 opacity-40" />
            <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5 opacity-40" />
          </div>
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3 font-sans">MORTGAGE TOOLS</span>
            <h1 className="text-white text-[38px] lg:text-[52px] font-playfair font-normal leading-[1.15] mb-6">
              Rent vs. Buy Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Compare the total lifetime cost of renting a property versus buying a home over a specified comparison timeframe.
            </p>
          </div>
        </section>

        {/* Inputs */}
        <section className="py-12 px-6 lg:px-10 max-w-6xl mx-auto font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-6">
                <h3 className="text-[#052316] text-[17px] font-bold pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2 font-sans">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#052316]" /> Renting Assumptions
                </h3>
                <div>
                  <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Monthly Rent</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                    <input type="number" value={rent} onChange={(e) => handleMonthlyRentChange(parseFloat(e.target.value) || 0)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-3 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Annual Rent Increase</label>
                  <div className="relative">
                    <input type="number" value={rentIncrease} onChange={(e) => setRentIncrease(parseFloat(e.target.value) || 0)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-3 pr-8 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">%</span>
                  </div>
                </div>
                <div>
                  <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Renter&apos;s Insurance ($/yr)</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                    <input type="number" value={rentersIns} onChange={(e) => setRentersIns(parseFloat(e.target.value) || 0)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-3 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Security Deposit</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                    <input type="number" value={securityDeposit} onChange={(e) => setSecurityDeposit(parseFloat(e.target.value) || 0)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-3 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-6">
                <h3 className="text-[#052316] text-[17px] font-bold pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2 font-sans">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#b89a5a]" /> Shared Financial Assumptions
                </h3>
                <div>
                  <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Investment Return Rate</label>
                  <div className="relative">
                    <input type="number" value={returnRate} onChange={(e) => setReturnRate(parseFloat(e.target.value) || 0)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-3 pr-8 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">%</span>
                  </div>
                </div>
                <div>
                  <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Federal Tax Rate</label>
                  <div className="relative">
                    <input type="number" value={taxRate} onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-3 pr-8 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">%</span>
                  </div>
                </div>
                <div>
                  <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Comparison Timeframe</label>
                  <input type="number" value={comparisonPeriod} onChange={(e) => setComparisonPeriod(parseFloat(e.target.value) || 30)}
                    className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 px-3 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-6 font-sans">
                <h3 className="text-[#052316] text-[17px] font-bold pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2 font-sans">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3fb364]" /> Buying Assumptions
                </h3>
                <div>
                  <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Home Price</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                    <input type="number" value={homePrice} onChange={(e) => handleHomePriceChange(parseFloat(e.target.value) || 0)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-3 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Loan Program</label>
                  <select value={loanProgram} onChange={(e) => setLoanProgram(e.target.value)}
                    className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3 text-[14px] font-bold text-[#052316] focus:outline-none cursor-pointer">
                    <option value="conventional">Conventional</option>
                    <option value="fha">FHA</option>
                    <option value="va">VA</option>
                  </select>
                </div>
                {loanProgram !== "va" && (
                  <div>
                    <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Credit Score</label>
                    <input type="number" value={creditScore} onChange={(e) => setCreditScore(parseFloat(e.target.value) || 740)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3 text-[14px] font-bold text-[#052316] focus:outline-none" />
                    <p className="text-[11px] text-[#888] mt-1">Used to estimate {loanProgram === "fha" ? "MIP" : "PMI"} rate.</p>
                  </div>
                )}
                {loanProgram === "va" && (
                  <div className="bg-[#fcf9f3] rounded-xl p-4 border border-[#e8e0d0]/40">
                    <label className="text-[#052316] text-[13.5px] font-semibold block mb-2">VA Funding Fee Options</label>
                    <label className="flex items-center gap-2 text-[13px] text-[#052316] mb-2">
                      <input type="checkbox" checked={vaFirstUse} onChange={(e) => setVaFirstUse(e.target.checked)} className="w-4 h-4" />
                      First use of VA loan benefit
                    </label>
                    <label className="flex items-center gap-2 text-[13px] text-[#052316]">
                      <input type="checkbox" checked={vaExempt} onChange={(e) => setVaExempt(e.target.checked)} className="w-4 h-4" />
                      Exempt from funding fee (service-connected disability)
                    </label>
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Down Payment ($)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={downPaymentVal} onChange={(e) => handleDpAmtChange(parseFloat(e.target.value) || 0)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-3 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Down Payment (%)</label>
                    <div className="relative">
                      <input type="number" value={downPaymentPct} onChange={(e) => handleDpPctChange(parseFloat(e.target.value) || 0)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-3 pr-8 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">%</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Closing Costs</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={closingCosts} onChange={(e) => handleClosingCostsChange(parseFloat(e.target.value) || 0)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-3 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Interest Rate</label>
                    <div className="relative">
                      <input type="number" value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-3 pr-8 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">%</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
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
                  <div><label className="text-[#052316] text-[13px] font-semibold block mb-1.5 font-sans">County</label><select value={county} onChange={(e) => setCounty(e.target.value)} className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3 text-[14px] font-bold text-[#052316] focus:outline-none">{ARIZONA_COUNTIES.map(c => <option key={c} value={c}>{c} County</option>)}</select></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
                  <div>
                    <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Annual Taxes</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={taxes} onChange={(e) => handleTaxesChange(parseFloat(e.target.value) || 0)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-3 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Home Appreciation</label>
                    <div className="relative">
                      <input type="number" value={appreciation} onChange={(e) => setAppreciation(parseFloat(e.target.value) || 0)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-3 pr-8 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">%</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans">
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Annual Home Ins</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={homeIns} onChange={(e) => handleHomeInsChange(parseFloat(e.target.value) || 0)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-3 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Maintenance ($/mo)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888] font-bold text-[14px]">$</span>
                      <input type="number" value={maintenance} onChange={(e) => handleMaintenanceChange(parseFloat(e.target.value) || 0)}
                        className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-3 text-[14.5px] font-bold text-[#052316] focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">HOA ($/mo)</label>
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
          <section id="rent-vs-buy-results" className="pb-16 px-6 lg:px-10 max-w-6xl mx-auto space-y-8 animate-fadeUp font-sans">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className={`rounded-3xl p-6 shadow-sm border ${result.totalSavings >= 0 ? "bg-[#052316] text-white border-[#052316]" : "bg-red-50 text-red-900 border-red-200"}`}>
                <p className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${result.totalSavings >= 0 ? "text-[#3fb364]" : "text-red-500"}`}>{result.totalSavings >= 0 ? "Buying Saves You" : "Renting Saves You"}</p>
                <p className="text-[34px] font-bold leading-tight">{fmt(Math.abs(result.totalSavings))}</p>
                <p className="text-[13px] mt-1 opacity-80">over the {comparisonPeriod} year comparison period</p>
              </div>

              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm">
                <p className="text-[#a89a70] text-[11px] font-bold uppercase tracking-wider mb-1">Break-Even Point</p>
                <p className="text-[#052316] text-[34px] font-bold leading-tight">{typeof result.breakEvenYear === "number" ? `${result.breakEvenYear} years` : "N/A"}</p>
                <p className="text-[#888] text-[13px] mt-1">{typeof result.breakEvenYear === "number" ? `Buying becomes cheaper than renting in Year ${Math.ceil(parseFloat(String(result.breakEvenYear)))}` : "Renting is cheaper than buying throughout"}</p>
              </div>

              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm">
                <p className="text-[#a89a70] text-[11px] font-bold uppercase tracking-wider mb-1">Monthly Cost Difference</p>
                <p className={`text-[34px] font-bold leading-tight ${result.monthlyDifference >= 0 ? "text-[#b89a5a]" : "text-[#3fb364]"}`}>{fmt(Math.abs(result.monthlyDifference))}</p>
                <p className="text-[#888] text-[13px] mt-1">{result.monthlyDifference >= 0 ? "Buying costs more monthly" : "Renting costs more monthly"}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-sans">
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="text-[#052316] text-[16px] font-bold mb-4 pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2 font-sans"><span className="w-2.5 h-2.5 rounded-full bg-[#052316]" /> Renting Costs</h4>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between text-[13.5px] py-1 border-b border-[#e8e0d0]/20"><span className="text-[#888]">Monthly Rent</span><span className="text-[#052316] font-bold">{fmt(result.monthlyRent)}/mo</span></div>
                    <div className="flex justify-between text-[13.5px] py-1 border-b border-[#e8e0d0]/20"><span className="text-[#888]">Renter&apos;s Insurance</span><span className="text-[#052316] font-bold">{fmt(rentersIns)}/yr</span></div>
                    <div className="flex justify-between text-[13.5px] py-1 border-b border-[#e8e0d0]/20"><span className="text-[#888]">Refundable Security Deposit</span><span className="text-[#052316] font-bold">{fmt(securityDeposit)}</span></div>
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-[#e8e0d0]/40 bg-[#faf7f0] rounded-2xl p-4"><div className="flex justify-between text-[14px] font-bold text-[#052316]"><span>Lifetime Renting Costs</span><span>{fmt(result.totalCostRenting)}</span></div></div>
              </div>

              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm flex flex-col justify-between font-sans">
                <div>
                  <h4 className="text-[#052316] text-[16px] font-bold mb-4 pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2 font-sans"><span className="w-2.5 h-2.5 rounded-full bg-[#3fb364]" /> Buying Costs</h4>
                  <div className="flex flex-col gap-2.5 text-[13.5px]">
                    <div className="flex justify-between py-1 border-b border-[#e8e0d0]/20"><span className="text-[#888]">Monthly Mortgage (P&I)</span><span className="text-[#052316] font-bold">{fmt(result.monthlyMortgagePI)}/mo</span></div>
                    {result.monthlyPMI > 0 && <div className="flex justify-between py-1 border-b border-[#e8e0d0]/20"><span className="text-[#888]">Monthly {result.loanProgram === "fha" ? "MIP" : "PMI"} {result.miAnnualRate > 0 ? `(${(result.miAnnualRate * 100).toFixed(2)}%/yr)` : ""}</span><span className="text-[#052316] font-bold">{fmt(result.monthlyPMI)}/mo</span></div>}
                    <div className="flex justify-between py-1 border-b border-[#e8e0d0]/20"><span className="text-[#888]">Monthly Property Taxes</span><span className="text-[#052316] font-bold">{fmt(result.monthlyTax)}/mo</span></div>
                    <div className="flex justify-between py-1 border-b border-[#e8e0d0]/20"><span className="text-[#888]">Monthly Maintenance</span><span className="text-[#052316] font-bold">{fmt(result.monthlyMaintenance)}/mo</span></div>
                    <div className="flex justify-between py-1 border-b border-[#e8e0d0]/20"><span className="text-[#888]">Monthly HOA Fees</span><span className="text-[#052316] font-bold">{fmt(result.monthlyHOA)}/mo</span></div>
                    <div className="flex justify-between py-1 border-b border-[#e8e0d0]/20"><span className="text-[#888]">Monthly Home Insurance</span><span className="text-[#052316] font-bold">{fmt(result.monthlyInsurance)}/mo</span></div>
                    <div className="flex justify-between py-1.5 bg-[#fcf9f3] rounded-lg px-2 mt-1 font-bold text-[#052316]"><span>Total Initial Monthly Payment</span><span>{fmt(result.monthlyBuyingTotal)}/mo</span></div>
                  </div>
                  {result.loanProgram === "va" && (
                    <p className="text-[11px] text-[#888] mt-3 italic">VA loans don't require monthly mortgage insurance.</p>
                  )}
                  {result.loanProgram === "conventional" && !result.miAppliesAtStart && (
                    <p className="text-[11px] text-[#888] mt-3 italic">Down payment is 20%+ — no mortgage insurance required.</p>
                  )}
                  {result.loanProgram === "conventional" && result.miAppliesAtStart && (
                    <p className="text-[11px] text-[#888] mt-3 italic">Estimated PMI based on credit score and down payment. Removed once loan balance reaches 80% of home value.</p>
                  )}
                  {result.loanProgram === "fha" && (
                    <p className="text-[11px] text-[#888] mt-3 italic">FHA annual MIP applies. Removal depends on original LTV and loan term.</p>
                  )}
                  {result.upfrontFeeLabel && result.upfrontFee > 0 && (
                    <p className="text-[11px] text-[#a89a70] mt-2 font-semibold">{result.upfrontFeeLabel} of {fmt(result.upfrontFee)} is financed into the loan.</p>
                  )}
                </div>
                <div className="mt-6 pt-5 border-t border-[#e8e0d0]/40 bg-[#faf7f0] rounded-2xl p-4"><div className="flex justify-between text-[14px] font-bold text-[#052316]"><span>Lifetime Buying Costs</span><span>{fmt(result.totalCostBuying)}</span></div></div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm">
              <h3 className="text-[#052316] text-[16px] font-bold mb-2 pb-3 border-b border-[#e8e0d0]/40 font-sans">Cumulative Cost Comparison Over Time</h3>
              <div className="overflow-x-auto">
                <CostComparisonChart series={result.yearlySeries} breakEven={result.breakEvenYear} />
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm font-sans text-center">
              <h3 className="text-[#052316] text-[16px] font-bold mb-4 pb-3 border-b border-[#e8e0d0]/40 font-sans">Long-term Equity & Net Benefit</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-[#fcf9f3] rounded-2xl p-4 border border-[#e8e0d0]/40"><p className="text-[11px] text-[#a89a70] font-bold uppercase tracking-wide mb-1 font-sans">Future Home Value</p><p className="text-[20px] font-bold text-[#052316]">{fmt(result.futureHomeValue)}</p></div>
                <div className="bg-[#fcf9f3] rounded-2xl p-4 border border-[#e8e0d0]/40"><p className="text-[11px] text-[#a89a70] font-bold uppercase tracking-wide mb-1 font-sans">Equity Built</p><p className="text-[20px] font-bold text-[#052316]">{fmt(result.equityBuilt)}</p></div>
                <div className="bg-[#fcf9f3] rounded-2xl p-4 border border-[#e8e0d0]/40"><p className="text-[11px] text-[#a89a70] font-bold uppercase tracking-wide mb-1 font-sans font-sans">Tax Benefits</p><p className="text-[20px] font-bold text-[#3fb364]">{fmt(result.taxBenefits)}</p></div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
