"use client";

import { useMemo, useState, type ReactNode } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { InteractiveLineChart } from "../component/InteractiveCharts";

/* ============================================================
   DESIGN TOKENS (ported from the original stylesheet, contrast
   adjusted per the studio's field-styling standard)
============================================================ */
const C = {
  ink: "#1c2a17",
  inkSoft: "#4b5748",
  paper: "#faf9f5",
  card: "#ffffff",
  line: "#e4e1d6",
  green: "#3a7d1e",
  greenDeep: "#2c5f16",
  greenPale: "#eaf3e3",
  gold: "#b8863a",
  goldPale: "#f7ecd9",
  rent: "#3d5a80",
  rentPale: "#e7edf4",
  danger: "#a3402f",
};
const SERIF = '"Source Serif 4", Georgia, serif';
const SANS = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
const MONO = "'Roboto Mono', monospace";

const fieldBg = "#eef1ea";
const fieldBorder = "#c3ccbb";
// A reddish tint for the "Renting" side of the comparison hero (kept local to that
// section so it doesn't affect the rent color used in the chart/legend elsewhere).
const RENT_RED = "#b3413a";
const RENT_RED_PALE = "#f7e6e3";

/* ============================================================
   TYPES
============================================================ */
type LoanProgram = "conventional" | "fha" | "va";

interface CalcState {
  monthlyRent: number;
  rentIncreasePct: number;
  rentersInsurance: number;
  securityDeposit: number;
  homePrice: number;
  loanProgram: LoanProgram;
  creditScore: number;
  vaFirstUse: boolean;
  vaExempt: boolean;
  downPaymentPercent: number;
  closingCosts: number;
  ccAuto: boolean;
  interestRate: number;
  loanTermRaw: number;
  annualPropertyTaxes: number;
  appreciationPct: number;
  homeInsurance: number;
  monthlyMaintenance: number;
  hoaFees: number;
  investReturnPct: number;
  taxRatePct: number;
  timeframeRaw: number;
}

interface YearRow {
  year: number;
  rentYear: number;
  homeValue: number;
  balance: number;
  equity: number;
  interestYear: number;
  miYear: number;
  cumBuyingCost: number;
  cumRentingCost: number;
}

/* ============================================================
   LOOKUP TABLES / RATE LOGIC (ported 1:1)
============================================================ */
const titleEscrowTable: number[][] = [
  [200000, 450], [300000, 530], [400000, 610], [500000, 690], [600000, 770],
  [700000, 850], [800000, 930], [900000, 1010], [1000000, 1090], [1100000, 1170],
  [1200000, 1250], [1300000, 1330], [1400000, 1410], [1500000, 1490], [1600000, 1570],
  [1700000, 1650], [1800000, 1730], [1900000, 1810], [2000000, 1890], [2100000, 1970],
  [2200000, 2050], [2300000, 2130], [2400000, 2210], [2500000, 2290], [2600000, 2370],
  [2700000, 2450], [2800000, 2530], [2900000, 2610], [3000000, 2690],
];
const titleInsuranceTable: number[][] = [
  [200000, 770], [300000, 895], [400000, 1020], [500000, 1145], [600000, 1270],
  [700000, 1395], [800000, 1520], [900000, 1645], [1000000, 1770], [1100000, 1895],
  [1200000, 2020], [1300000, 2145], [1400000, 2270], [1500000, 2395], [1600000, 2520],
  [1700000, 2645], [1800000, 2770], [1900000, 2895], [2000000, 3020], [2100000, 3145],
  [2200000, 3270], [2300000, 3395], [2400000, 3520], [2500000, 3645], [2600000, 3770],
  [2700000, 3895], [2800000, 4020], [2900000, 4145], [3000000, 4270],
];
const CC_FIXED_FEES = { origination: 1000, appraisal: 650, creditReport: 95, recording: 75 };

function lookupBandTable(table: number[][], value: number): number {
  for (const [upTo, val] of table) {
    if (value <= upTo) return val;
  }
  return table[table.length - 1][1];
}
function defaultClosingCosts(homePrice: number, loanAmount: number): number {
  const escrow = lookupBandTable(titleEscrowTable, homePrice);
  const titleIns = lookupBandTable(titleInsuranceTable, loanAmount);
  return escrow + titleIns + CC_FIXED_FEES.origination + CC_FIXED_FEES.appraisal +
    CC_FIXED_FEES.creditReport + CC_FIXED_FEES.recording;
}

const propertyTaxTable: number[][] = [
  [100000, 1000], [150000, 1065], [200000, 1134], [250000, 1208], [300000, 1286],
  [350000, 1370], [400000, 1459], [450000, 1554], [500000, 1756], [550000, 1984],
  [600000, 2242], [650000, 2534], [700000, 2863], [750000, 3149], [800000, 3370],
  [850000, 3606], [900000, 3858], [950000, 4128], [1000000, 4417], [1050000, 4638],
  [1100000, 4870], [1150000, 5114], [1200000, 5267], [1250000, 5425], [1300000, 5588],
  [1350000, 5755], [1400000, 5928], [1450000, 6047], [1500000, 6167], [1550000, 6291],
  [1600000, 6417], [1650000, 6545], [1700000, 6676], [1750000, 6809], [1800000, 6946],
  [1850000, 7084], [1900000, 7226], [1950000, 7371], [10000000, 7518],
];
function defaultAnnualPropertyTax(homePrice: number): number { return lookupBandTable(propertyTaxTable, homePrice); }

const PMI_TABLE: Record<number, number[]> = {
  760: [0.30, 0.19, 0.15, 0.10],
  740: [0.48, 0.33, 0.24, 0.13],
  720: [0.66, 0.47, 0.33, 0.17],
  700: [0.84, 0.61, 0.42, 0.20],
  680: [1.02, 0.75, 0.52, 0.23],
  660: [1.20, 0.89, 0.61, 0.26],
  640: [1.38, 1.03, 0.70, 0.30],
  620: [1.56, 1.17, 0.79, 0.33], // also used as the floor for any score below 620
};
function creditScoreBand(score: number): number {
  if (score >= 760) return 760;
  if (score >= 740) return 740;
  if (score >= 720) return 720;
  if (score >= 700) return 700;
  if (score >= 680) return 680;
  if (score >= 660) return 660;
  if (score >= 640) return 640;
  return 620;
}
function creditScoreLabel(score: number): string {
  if (score >= 760) return "Excellent";
  if (score >= 740) return "Very Good";
  if (score >= 720) return "Good";
  if (score >= 700) return "Fair to Good";
  if (score >= 680) return "Fair";
  if (score >= 660) return "Below Fair";
  if (score >= 640) return "Poor";
  return "High Risk";
}
function getConventionalPMIRate(creditScore: number, ltvPct: number): number {
  const downPct = 100 - ltvPct;
  const row = PMI_TABLE[creditScoreBand(creditScore)];
  let ratePct;
  if (downPct < 5) ratePct = row[0];
  else if (downPct < 10) ratePct = row[1];
  else if (downPct < 15) ratePct = row[2];
  else ratePct = row[3];
  return ratePct / 100;
}

const FHA_UFMIP_RATE = 0.0175;
function getFhaAnnualMipRate(ltvPct: number, termYears: number): number {
  if (termYears > 15) return ltvPct > 95 ? 0.0055 : 0.0050;
  return ltvPct > 90 ? 0.0040 : 0.0015;
}
function fhaMipRemovalYear(ltvPct: number): number { return ltvPct > 90 ? Infinity : 11; }

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

/* ============================================================
   HELPERS
============================================================ */
function toNumber(str: string): number {
  if (typeof str !== "string") return NaN;
  const cleaned = str.replace(/[^0-9.\-]/g, "");
  if (cleaned === "" || cleaned === "-") return NaN;
  return parseFloat(cleaned);
}
function fmtMoney(n: number, decimals = 0): string {
  if (!isFinite(n)) n = 0;
  return n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}
function fmtSignedMoney(n: number): string {
  const sign = n < 0 ? "-" : "";
  return sign + "$" + fmtMoney(Math.abs(n));
}
function roundHalfUp(x: number): number { return Math.floor(x + 0.5); }
function clampTerm(raw: number): number {
  if (!isFinite(raw)) return 30;
  let t = roundHalfUp(raw);
  if (t < 1) t = 1;
  if (t > 30) t = 30;
  return t;
}

/* ============================================================
   CORE CALCULATION (ported 1:1 from the spec)
============================================================ */
function compute(s: CalcState) {
  const homePrice = Math.max(10000, isFinite(s.homePrice) ? s.homePrice : 10000);
  const program: LoanProgram = s.loanProgram || "conventional";
  const floorPct = minDownPaymentPct(program);

  let dpPct = isFinite(s.downPaymentPercent) ? s.downPaymentPercent : 20;
  dpPct = Math.max(floorPct, Math.min(100, dpPct));
  const downPayment = homePrice * dpPct / 100;
  const baseLoanAmount = Math.max(0, homePrice - downPayment);

  const autoClosingCosts = defaultClosingCosts(homePrice, baseLoanAmount);
  const cc = s.ccAuto ? autoClosingCosts : Math.max(0, isFinite(s.closingCosts) ? s.closingCosts : autoClosingCosts);
  const monthlyRent = Math.max(1, isFinite(s.monthlyRent) ? s.monthlyRent : 1);
  const rentIncreaseRate = Math.max(0, Math.min(0.20, (isFinite(s.rentIncreasePct) ? s.rentIncreasePct : 3) / 100));
  const rentersInsurance = Math.max(0, isFinite(s.rentersInsurance) ? s.rentersInsurance : 180);
  const secDep = isFinite(s.securityDeposit) ? Math.max(0, s.securityDeposit) : monthlyRent;

  const investReturn = Math.max(0, Math.min(0.20, (isFinite(s.investReturnPct) ? s.investReturnPct : 6) / 100));
  const taxRate = Math.max(0, Math.min(0.50, (isFinite(s.taxRatePct) ? s.taxRatePct : 18) / 100));

  const interestRate = Math.max(0.1, Math.min(20, isFinite(s.interestRate) ? s.interestRate : 6.5));
  const c = interestRate / 100 / 12;
  const loanTermYears = clampTerm(s.loanTermRaw);
  const n = loanTermYears * 12;

  const annualPropertyTaxes = Math.max(0, isFinite(s.annualPropertyTaxes) ? s.annualPropertyTaxes : 0);
  const appreciationRate = Math.max(-0.10, Math.min(0.15, (isFinite(s.appreciationPct) ? s.appreciationPct : 4) / 100));
  const homeIns = isFinite(s.homeInsurance) ? Math.max(0, s.homeInsurance) : homePrice * 0.0035;
  const maint = isFinite(s.monthlyMaintenance) ? Math.max(0, s.monthlyMaintenance) : (homePrice * 0.01) / 12;
  const hoaFees = Math.max(0, isFinite(s.hoaFees) ? s.hoaFees : 0);

  const timeframe = clampTerm(s.timeframeRaw);
  const originalLtvPct = homePrice > 0 ? (baseLoanAmount / homePrice * 100) : 0;

  let upfrontFee = 0;
  let upfrontFeeLabel: string | null = null;
  if (program === "fha") {
    upfrontFee = baseLoanAmount * FHA_UFMIP_RATE;
    upfrontFeeLabel = "FHA Upfront MIP";
  } else if (program === "va" && !s.vaExempt) {
    const feeRate = getVaFundingFeeRate(dpPct, !!s.vaFirstUse);
    upfrontFee = baseLoanAmount * feeRate;
    upfrontFeeLabel = "VA Funding Fee";
  }
  const loanAmount = baseLoanAmount + upfrontFee;

  let monthlyPI: number;
  if (c === 0) { monthlyPI = loanAmount / n; }
  else { const f = Math.pow(1 + c, n); monthlyPI = loanAmount * (c * f) / (f - 1); }

  const monthlyBalances: number[] = [loanAmount];
  const monthlyInterest: number[] = [];
  let bal = loanAmount;
  for (let m = 1; m <= n; m++) {
    const ip = bal * c;
    let pay = monthlyPI, pp = pay - ip;
    if (m === n) { pp = bal; pay = pp + ip; }
    if (pp > bal) { pp = bal; pay = pp + ip; }
    let eb = bal - pp;
    if (eb < 0) eb = 0;
    if (m === n) eb = 0;
    monthlyInterest.push(ip);
    bal = eb;
    monthlyBalances.push(bal);
  }

  let miAnnualRate = 0, miAppliesAtStart = false, miLifeOfLoan = false;
  let miRemovalYear: number | null = null;
  if (program === "conventional") {
    miAppliesAtStart = dpPct < 20;
    if (miAppliesAtStart) {
      const creditScore = isFinite(s.creditScore) ? s.creditScore : 740;
      miAnnualRate = getConventionalPMIRate(creditScore, originalLtvPct);
    }
  } else if (program === "fha") {
    miAppliesAtStart = true;
    miAnnualRate = getFhaAnnualMipRate(originalLtvPct, loanTermYears);
    const cutoff = fhaMipRemovalYear(originalLtvPct);
    if (cutoff === Infinity) { miLifeOfLoan = true; } else { miRemovalYear = cutoff; }
  }

  let miRemoved = !miAppliesAtStart;
  const yearData: YearRow[] = [];
  let cumMonthlyPayments = 0, cumInterest = 0, cumTaxBenefit = 0, cumRentPaid = 0;

  for (let i = 1; i <= timeframe; i++) {
    const rentYear = monthlyRent * Math.pow(1 + rentIncreaseRate, i - 1) * 12;
    cumRentPaid += rentYear;

    const homeValue_i = homePrice * Math.pow(1 + appreciationRate, i);
    const monthsElapsed = Math.min(i * 12, n);
    const balance_i = (i * 12 >= n) ? 0 : monthlyBalances[monthsElapsed];
    const balance_startOfYear = monthlyBalances[Math.min((i - 1) * 12, monthlyBalances.length - 1)];

    let interestYear = 0;
    if ((i - 1) * 12 < n) {
      const startM = (i - 1) * 12 + 1, endM = Math.min(i * 12, n);
      for (let m = startM; m <= endM; m++) interestYear += monthlyInterest[m - 1];
    }
    cumInterest += interestYear;

    let miYear = 0;
    if (!miRemoved && (i - 1) * 12 < n) {
      if (program === "conventional") {
        const homeValue_startOfYear = homePrice * Math.pow(1 + appreciationRate, i - 1);
        const ltvStart = balance_startOfYear / homeValue_startOfYear;
        if (ltvStart > 0.80) { miYear = balance_startOfYear * miAnnualRate; }
        else { miRemoved = true; }
      } else if (program === "fha") {
        if (miLifeOfLoan || i <= (miRemovalYear ?? Infinity)) { miYear = balance_startOfYear * miAnnualRate; }
        else { miRemoved = true; }
      }
    }
    if (program === "conventional" && !miRemoved && homeValue_i > 0 && (balance_i / homeValue_i) <= 0.80) {
      miRemoved = true;
    }

    const mortgagePaymentsYear = ((i - 1) * 12 < n) ? (monthlyPI * (Math.min(i * 12, n) - (i - 1) * 12)) : 0;
    cumMonthlyPayments += mortgagePaymentsYear + miYear;

    const taxBenefitYear = (interestYear + annualPropertyTaxes) * taxRate;
    cumTaxBenefit += taxBenefitYear;

    const cumBuyingCost =
      downPayment + cc + upfrontFee
      + cumMonthlyPayments
      + (annualPropertyTaxes * i)
      + (maint * 12 * i)
      + (hoaFees * 12 * i)
      + (homeIns * i)
      - (homeValue_i - homePrice)
      - cumTaxBenefit;

    const principalDPCC = downPayment + cc;
    const oppCostGrowthDPCC = principalDPCC * Math.pow(1 + investReturn, i) - principalDPCC;
    const secDepOppCost = secDep * Math.pow(1 + investReturn, i) - secDep;

    const cumRentingCost =
      cumRentPaid
      + (rentersInsurance * i)
      - oppCostGrowthDPCC
      + secDepOppCost;

    yearData.push({
      year: i, rentYear, homeValue: homeValue_i, balance: balance_i,
      equity: homeValue_i - balance_i,
      interestYear, miYear, cumBuyingCost, cumRentingCost,
    });
  }

  const last = yearData[yearData.length - 1];

  let breakEvenYear: number | null = null;
  let breakEvenInterp: number | null = null;
  for (let idx = 0; idx < yearData.length; idx++) {
    if (yearData[idx].cumBuyingCost < yearData[idx].cumRentingCost) {
      breakEvenYear = yearData[idx].year;
      if (idx > 0) {
        const prev = yearData[idx - 1], cur = yearData[idx];
        const denom = (cur.cumBuyingCost - prev.cumBuyingCost) - (cur.cumRentingCost - prev.cumRentingCost);
        if (denom !== 0) { breakEvenInterp = prev.year + (prev.cumRentingCost - prev.cumBuyingCost) / denom; }
      } else { breakEvenInterp = 1; }
      break;
    }
  }

  const monthlyPropertyTax = annualPropertyTaxes / 12;
  const monthlyMI0 = miAppliesAtStart ? (baseLoanAmount * miAnnualRate) / 12 : 0;
  const monthlyPaymentIfBuying = monthlyPI + monthlyMI0 + monthlyPropertyTax + maint + hoaFees + homeIns / 12;
  const monthlyDifference = monthlyPaymentIfBuying - monthlyRent;

  return {
    homePrice, downPayment, dpPct, floorPct, closingCosts: cc, autoClosingCosts, monthlyRent, securityDeposit: secDep,
    homeInsurance: homeIns, monthlyMaintenance: maint,
    program, baseLoanAmount, upfrontFee, upfrontFeeLabel, loanAmount, loanTermYears,
    monthlyPI, monthlyMI0, monthlyPropertyTax, hoaFees,
    miAppliesAtStart, miAnnualRate,
    monthlyPaymentIfBuying, monthlyDifference, timeframe,
    futureHomeValue: last.homeValue, equityBuilt: last.equity,
    totalTaxBenefits: cumTaxBenefit,
    totalCostBuying: last.cumBuyingCost, totalCostRenting: last.cumRentingCost,
    totalSavings: last.cumRentingCost - last.cumBuyingCost,
    breakEvenYear, breakEvenInterp, yearData,
  };
}

/* ============================================================
   UI PRIMITIVES
============================================================ */
function Field({ label, hint, children }: { label: ReactNode; hint?: ReactNode; children: ReactNode }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", fontSize: 11.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".05em", color: C.inkSoft, marginBottom: 7 }}>
        {label}
      </label>
      {children}
      {hint && <div style={{ fontSize: 11, color: C.inkSoft, marginTop: 5, fontWeight: 400 }}>{hint}</div>}
    </div>
  );
}
const baseInput: React.CSSProperties = {
  width: "100%",
  border: `1.5px solid ${fieldBorder}`,
  borderRadius: 8,
  fontFamily: MONO,
  fontSize: 14,
  fontWeight: 500,
  color: C.ink,
  background: fieldBg,
  outline: "none",
  boxSizing: "border-box",
  boxShadow: "inset 0 1px 2px rgba(28,42,23,0.06)",
};
function MoneyInput({ value, onChange, onBlur }: { value: string; onChange: (v: string) => void; onBlur?: () => void }) {
  return (
    <div style={{ position: "relative" }}>
      <span style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: C.inkSoft, fontWeight: 600, fontSize: 13, pointerEvents: "none" }}>$</span>
      <input className="dpc-input" style={{ ...baseInput, padding: "9px 12px 9px 24px" }} inputMode="decimal" value={value}
        onChange={(e) => onChange(e.target.value)} onBlur={onBlur} />
    </div>
  );
}
function RateInput({ value, onChange, onBlur }: { value: string; onChange: (v: string) => void; onBlur?: () => void }) {
  return (
    <div style={{ position: "relative" }}>
      <input className="dpc-input" style={{ ...baseInput, padding: "9px 24px 9px 12px" }} inputMode="decimal" value={value}
        onChange={(e) => onChange(e.target.value)} onBlur={onBlur} />
      <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", color: C.inkSoft, fontWeight: 600, fontSize: 13, pointerEvents: "none" }}>%</span>
    </div>
  );
}
function MiniSlider({ min, max, step, value, onChange }: { min: number; max: number; step: number; value: number; onChange: (v: number) => void }) {
  const safe = isFinite(value) ? Math.min(max, Math.max(min, value)) : min;
  return (
    <input type="range" min={min} max={max} step={step} value={safe}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      style={{ WebkitAppearance: "none", width: "100%", height: 4, borderRadius: 2, background: C.line, marginTop: 9, accentColor: C.green }} />
  );
}
function Accordion({ title, chipColor, chipBg, open, onToggle, children }: { title: ReactNode; chipColor: string; chipBg: string; open: boolean; onToggle: () => void; children: ReactNode }) {
  return (
    <div style={{ borderBottom: `1px solid ${C.line}` }}>
      <div onClick={onToggle} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 22px", cursor: "pointer", userSelect: "none" }}>
        <h3 style={{ fontFamily: SERIF, fontSize: 15, fontWeight: 600, margin: 0, color: C.ink, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".05em", fontWeight: 700, padding: "2px 7px", borderRadius: 5, background: chipBg, color: chipColor }}>{title}</span>
        </h3>
        <span style={{ transition: "transform .15s ease", color: C.inkSoft, fontSize: 12, transform: open ? "none" : "rotate(-90deg)" }}>▼</span>
      </div>
      {open && <div style={{ padding: "0 22px 20px" }}>{children}</div>}
    </div>
  );
}
function BreakEvenBar({ breakEvenYear, timeframe }: { breakEvenYear: number | null; timeframe: number }) {
  const scaleMax = Math.max(timeframe, breakEvenYear || 0);
  const pctOf = (v: number) => Math.min(100, Math.max(0, (v / scaleMax) * 100));
  const breakEvenPct = breakEvenYear ? pctOf(breakEvenYear) : null;

  return (
    <div style={{ position: "relative", height: 8, borderRadius: 99, marginTop: 16, marginBottom: 18, background: C.goldPale, border: `1px solid ${C.line}`, overflow: "hidden" }}>
      {breakEvenPct !== null && (
        <>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${breakEvenPct}%`, background: C.gold }} />
          <div style={{ position: "absolute", left: `${breakEvenPct}%`, top: 0, bottom: 0, right: 0, background: C.green }} />
          <div style={{ position: "absolute", left: `${breakEvenPct}%`, top: -14, transform: "translateX(-50%)", textAlign: "center" }}>
            <div style={{ fontSize: 9.5, fontFamily: MONO, fontWeight: 700, color: C.greenDeep, whiteSpace: "nowrap" }}>Break-even</div>
            <div style={{ width: 2, height: 20, background: C.greenDeep, margin: "1px auto 0" }} />
          </div>
        </>
      )}
      {breakEvenPct === null && (
        <div style={{ position: "absolute", inset: 0, background: C.gold }} />
      )}
      <div style={{ position: "absolute", left: `${pctOf(timeframe)}%`, top: -2, transform: "translate(-100%, -100%)", textAlign: "center" }}>
        <div style={{ fontSize: 10.5, fontFamily: MONO, fontWeight: 700, color: C.ink, background: "#fff", border: `1.5px solid ${C.ink}`, borderRadius: 6, padding: "1px 5px", whiteSpace: "nowrap" }}>
          Year {timeframe}
        </div>
      </div>
    </div>
  );
}

function MilestoneStat({ label, value, note, highlight }: { label: string; value: ReactNode; note: ReactNode; highlight?: boolean }) {
  return (
    <div style={{
      background: highlight ? C.greenDeep : "#fff",
      border: `1px solid ${highlight ? C.greenDeep : "#cfe0c2"}`,
      borderRadius: 8,
      padding: "7px 10px",
    }}>
      <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".04em", fontWeight: 700, color: highlight ? "#eaf3e3" : C.inkSoft, marginBottom: 2 }}>{label}</div>
      <div style={{ fontFamily: MONO, fontWeight: 700, fontSize: 13, color: highlight ? "#fff" : C.greenDeep, marginBottom: 1 }}>{value}</div>
      <div style={{ fontSize: 10, color: highlight ? "#dcead0" : C.inkSoft, lineHeight: 1.3 }}>{note}</div>
    </div>
  );
}

function StatBox({ label, value, sub, color }: { label: string; value: ReactNode; sub?: ReactNode; color?: string }) {
  return (
    <div style={{ background: "#ffffff", border: `1.5px solid #c9d2c2`, borderRadius: 8, padding: 14, boxShadow: "0 1px 3px rgba(28,42,23,0.08)" }}>
      <div style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: ".04em", color: C.ink, fontWeight: 700, marginBottom: 6 }}>{label}</div>
      <div style={{ fontFamily: MONO, fontSize: 18, fontWeight: 700, color: color || C.ink }}>{value}</div>
      {sub && <div style={{ fontSize: 10.5, color: C.inkSoft, marginTop: 3 }}>{sub}</div>}
    </div>
  );
}

function InsightsPanel({ groups, nextSteps }: { groups: { title: string; color: string; bullets: string[] }[]; nextSteps: string[] }) {
  return (
    <div style={{ background: "#f7f8f5", border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(28,42,23,0.06), 0 6px 20px rgba(28,42,23,0.05)", padding: 22, marginBottom: 20 }}>
      <h2 style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 600, margin: "0 0 12px", color: C.ink }}>Recommendations & Key Insights</h2>
      <div style={{ borderBottom: `1px solid ${C.line}`, marginBottom: 16 }} />
      <div className="insights-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 20, alignItems: "start" }}>
        <div>
          {groups.map((g) => (
            <div key={g.title} style={{ marginBottom: 16 }}>
              <h4 style={{ fontSize: 13.5, fontWeight: 700, margin: "0 0 8px", color: g.color }}>{g.title}</h4>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                {g.bullets.map((b, i) => (
                  <li key={i} style={{ fontSize: 13, color: C.ink, marginBottom: 6, lineHeight: 1.5 }}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ background: "#fff", border: `1px solid ${C.line}`, borderRadius: 8, padding: 16 }}>
          <h4 style={{ fontSize: 13.5, fontWeight: 700, margin: "0 0 4px", color: C.ink }}>Next Steps</h4>
          <p style={{ fontSize: 12, color: C.inkSoft, margin: "0 0 10px" }}>Based on your scenario, here's what we'd suggest next:</p>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            {nextSteps.map((s, i) => (
              <li key={i} style={{ fontSize: 13, color: C.ink, marginBottom: 6, lineHeight: 1.5 }}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
      <style>{`@media (max-width: 640px) { .insights-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */
export default function RentVsBuyCalculator() {
  // Renting
  const [monthlyRentText, setMonthlyRentText] = useState("2,000");
  const [rentIncreaseText, setRentIncreaseText] = useState("3");
  const [rentersInsText, setRentersInsText] = useState("180");
  const [securityDepositText, setSecurityDepositText] = useState("2,000");
  const [secDepAuto, setSecDepAuto] = useState(true);

  // Buying
  const [homePriceText, setHomePriceText] = useState("400,000");
  const [loanProgram, setLoanProgram] = useState<LoanProgram>("conventional");
  const [creditScoreText, setCreditScoreText] = useState("720");
  const creditScoreRaw = parseInt(creditScoreText, 10);
  const creditScore = isFinite(creditScoreRaw) ? Math.min(850, Math.max(600, creditScoreRaw)) : 720;
  const [vaFirstUse, setVaFirstUse] = useState(true);
  const [vaExempt, setVaExempt] = useState(false);

  const [dpMode, setDpMode] = useState<"pct" | "amt">("pct");
  const [dpPercentText, setDpPercentText] = useState("3");
  const [dpAmountText, setDpAmountText] = useState("12,000");

  const [closingCostsText, setClosingCostsText] = useState("3,595");
  const [ccAuto, setCcAuto] = useState(true);

  const [interestRateText, setInterestRateText] = useState("6.5");
  const [loanTermRaw, setLoanTermRaw] = useState(30);

  const [annualPropertyTaxesText, setAnnualPropertyTaxesText] = useState("1,459");
  const [taxAuto, setTaxAuto] = useState(true);
  const [appreciationText, setAppreciationText] = useState("4");

  const [homeInsuranceText, setHomeInsuranceText] = useState("1,400");
  const [homeInsAuto, setHomeInsAuto] = useState(true);

  const [monthlyMaintenanceText, setMonthlyMaintenanceText] = useState("333");
  const [maintAuto, setMaintAuto] = useState(true);

  const [hoaText, setHoaText] = useState("0");

  // Assumptions
  const [investReturnText, setInvestReturnText] = useState("6");
  const [taxRateText, setTaxRateText] = useState("18");
  const [timeframeRaw, setTimeframeRaw] = useState(30);

  const [openSections, setOpenSections] = useState({ renting: true, buying: true, assumptions: false });
  const [showYearly, setShowYearly] = useState(false);

  const homePrice = toNumber(homePriceText);
  const floorPct = minDownPaymentPct(loanProgram);

  /* ---- down payment / home-price cross-sync ---- */
  function applyPercent(rawPct: number) {
    let pct = isFinite(rawPct) ? rawPct : floorPct;
    pct = Math.max(floorPct, Math.min(100, pct));
    setDpPercentText((Math.round(pct * 10) / 10).toString());
    const amt = (isFinite(homePrice) && homePrice > 0) ? homePrice * pct / 100 : 0;
    setDpAmountText(fmtMoney(amt));
  }
  function onDpPercentChange(text: string) {
    // keep the raw typed text as-is (no clamping mid-keystroke, so clearing
    // the field to type a new number doesn't snap back to the minimum)
    setDpMode("pct");
    setDpPercentText(text);
    const pctVal = toNumber(text);
    const amt = (isFinite(homePrice) && homePrice > 0 && isFinite(pctVal)) ? homePrice * pctVal / 100 : 0;
    setDpAmountText(fmtMoney(amt));
  }
  function onDpPercentBlur() {
    // normalize / clamp only once typing is done
    applyPercent(toNumber(dpPercentText));
  }
  function onDpSliderChange(v: number) {
    setDpMode("pct");
    applyPercent(v);
  }
  function onDpAmountChange(text: string) {
    setDpMode("amt");
    setDpAmountText(text);
    let amt = toNumber(text);
    if (!isFinite(amt)) amt = 0;
    amt = Math.max(0, (isFinite(homePrice) && homePrice > 0) ? Math.min(homePrice, amt) : 0);
    const pct = (isFinite(homePrice) && homePrice > 0) ? Math.max(floorPct, Math.min(100, amt / homePrice * 100)) : 20;
    setDpPercentText((Math.round(pct * 10) / 10).toString());
  }
  function onHomePriceChange(text: string) {
    setHomePriceText(text);
    const newPrice = toNumber(text);
    if (taxAuto) setAnnualPropertyTaxesText(fmtMoney(defaultAnnualPropertyTax(isFinite(newPrice) ? newPrice : 0)));
    if (homeInsAuto) setHomeInsuranceText(fmtMoney(Math.round((isFinite(newPrice) ? newPrice : 0) * 0.0035)));
    if (maintAuto) setMonthlyMaintenanceText(fmtMoney(Math.round(((isFinite(newPrice) ? newPrice : 0) * 0.01) / 12)));
    if (dpMode === "pct") {
      const pct = toNumber(dpPercentText);
      const amt = (isFinite(newPrice) && isFinite(pct)) ? newPrice * pct / 100 : 0;
      setDpAmountText(fmtMoney(amt));
    } else {
      const amt = toNumber(dpAmountText);
      const pct = (isFinite(newPrice) && newPrice > 0 && isFinite(amt)) ? Math.max(floorPct, Math.min(100, amt / newPrice * 100)) : 20;
      setDpPercentText((Math.round(pct * 10) / 10).toString());
    }
  }
  function onLoanProgramChange(program: string) {
    setLoanProgram(program as LoanProgram);
    const newFloor = minDownPaymentPct(program);
    const pct = toNumber(dpPercentText);
    if (!isFinite(pct) || pct < newFloor) {
      const amt = (isFinite(homePrice) && homePrice > 0) ? homePrice * newFloor / 100 : 0;
      setDpPercentText(newFloor.toString());
      setDpAmountText(fmtMoney(amt));
    }
  }

  /* ---- assemble numeric state for compute() ---- */
  const stateObj: CalcState = {
    monthlyRent: toNumber(monthlyRentText),
    rentIncreasePct: toNumber(rentIncreaseText),
    rentersInsurance: toNumber(rentersInsText),
    securityDeposit: toNumber(securityDepositText),
    homePrice,
    loanProgram,
    creditScore,
    vaFirstUse, vaExempt,
    downPaymentPercent: toNumber(dpPercentText),
    closingCosts: toNumber(closingCostsText),
    ccAuto,
    interestRate: toNumber(interestRateText),
    loanTermRaw,
    annualPropertyTaxes: toNumber(annualPropertyTaxesText),
    appreciationPct: toNumber(appreciationText),
    homeInsurance: toNumber(homeInsuranceText),
    monthlyMaintenance: toNumber(monthlyMaintenanceText),
    hoaFees: toNumber(hoaText),
    investReturnPct: toNumber(investReturnText),
    taxRatePct: toNumber(taxRateText),
    timeframeRaw,
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const res = useMemo(() => compute(stateObj), Object.values(stateObj));

  // keep auto closing-cost field in sync with the display (read-only-ish reflection)
  const closingCostsDisplay = ccAuto ? fmtMoney(res.autoClosingCosts) : closingCostsText;

  const loanTermYears = res.loanTermYears;
  const timeframe = res.timeframe;

  const rvbInsights = useMemo(() => {
    const financial: string[] = [];
    if (res.totalSavings >= 0) {
      financial.push(`Buying is financially advantageous: you'll save ${fmtMoney(res.totalSavings)} over ${res.timeframe} years.`);
    } else {
      financial.push(`Renting is financially advantageous: you'll save ${fmtMoney(Math.abs(res.totalSavings))} over ${res.timeframe} years.`);
    }
    if (res.breakEvenYear) {
      financial.push(`Break-even point: ${(res.breakEvenInterp ? res.breakEvenInterp.toFixed(1) : res.breakEvenYear)} years, after which buying becomes more profitable.`);
    } else {
      financial.push(`Buying doesn't break even with renting within your ${res.timeframe}-year timeframe.`);
    }
    financial.push(`Monthly housing costs will ${res.monthlyDifference >= 0 ? "increase" : "decrease"} by ${fmtMoney(Math.abs(res.monthlyDifference))} if you buy.`);
    financial.push(`Your down payment of ${res.dpPct.toFixed(1)}% ${res.dpPct >= 20 ? "meets" : "is below"} the recommended 20% threshold${res.dpPct >= 20 ? "" : " to avoid mortgage insurance"}.`);
    financial.push(`Total initial monthly buying cost (mortgage + taxes + maintenance): ${fmtMoney(res.monthlyPI + res.monthlyPropertyTax + res.monthlyMaintenance)}.`);

    const risk: string[] = [];
    risk.push(`Annual property taxes of ${fmtMoney(res.monthlyPropertyTax * 12)} in Arizona should be budgeted annually.`);
    risk.push(`Annual maintenance costs of ${fmtMoney(res.monthlyMaintenance * 12)} should be reserved for unexpected repairs.`);
    if (res.miAppliesAtStart) {
      risk.push(`${res.program === "fha" ? "FHA MIP" : "PMI"} of ${fmtMoney(res.monthlyMI0)}/mo is included in your payment until it's removed.`);
    }
    if (res.upfrontFeeLabel && res.upfrontFee > 0) {
      risk.push(`${res.upfrontFeeLabel} of ${fmtMoney(res.upfrontFee)} is financed into your loan, increasing your loan balance.`);
    }

    const nextSteps: string[] = ["Review your current monthly budget and savings reserves."];
    nextSteps.push("Get a verified pre-approval to lock in accurate interest rates for your location.");
    if (res.dpPct < 20) {
      nextSteps.push("Explore down payment assistance programs available in Arizona.");
    }
    nextSteps.push("Contact a Mortgage Brothers loan officer to review the recommended options and confirm eligibility.");

    return { financial, risk, nextSteps };
  }, [res]);

  return (
    <div className="flex flex-col min-h-screen" style={{ background: C.paper }}>
      <Navbar />
      <main className="flex-grow" style={{ color: C.ink, fontFamily: SANS, fontSize: 15, lineHeight: 1.5 }}>
        {/* Hero */}
        <section className="w-full text-white py-20 lg:py-28 text-center relative overflow-hidden bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/mortgage-calculators.jpg')", backgroundPosition: "center top" }}>
          <div className="absolute inset-0 bg-[#08271B]/80 z-0" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5" />
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5" />
          </div>
          <div className="max-w-4xl mx-auto px-6 relative z-20">
            <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase mb-4 font-sans">MORTGAGE TOOLS</p>
            <h1 className="text-white text-[36px] lg:text-[52px] font-playfair font-normal leading-[1.1] mb-5">
              Rent vs. Buy Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Compare the true long-term cost of renting versus owning a home in Arizona.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: 1220, margin: "0 auto", padding: "32px 20px 64px" }}>
          {/* Break-Even Milestone — bold, high-visibility centerpiece, full width at the very top */}
          <div style={{
            background: `linear-gradient(135deg, ${C.greenPale} 0%, #ffffff 55%)`,
            border: `2px solid ${C.green}`,
            borderRadius: 12,
            padding: "16px 20px 18px",
            marginBottom: 18,
            boxShadow: "0 4px 18px rgba(58,125,30,0.12)",
          }}>
            <h2 style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 700, margin: "0 0 2px", color: C.greenDeep }}>Break-Even Milestone</h2>
            <p style={{ fontSize: 12, color: C.inkSoft, margin: "0 0 10px" }}>
              {res.breakEvenYear
                ? `Buying becomes cheaper than renting after year ${res.breakEvenInterp ? res.breakEvenInterp.toFixed(1) : res.breakEvenYear}, within your ${res.timeframe}-year timeframe.`
                : `Renting stays cheaper than buying across your entire ${res.timeframe}-year timeframe.`}
            </p>

            <BreakEvenBar breakEvenYear={res.breakEvenInterp || res.breakEvenYear} timeframe={res.timeframe} />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10, marginTop: 12 }}>
              <MilestoneStat
                label="Break-Even Point"
                value={res.breakEvenYear ? `Year ${(res.breakEvenInterp ? res.breakEvenInterp.toFixed(1) : res.breakEvenYear)}` : "Not reached"}
                note={res.breakEvenYear ? "buying overtakes renting" : `still renting-favorable at year ${res.timeframe}`}
                highlight={!!res.breakEvenYear}
              />
              <MilestoneStat
                label={res.totalSavings >= 0 ? "Buying Saves" : "Renting Saves"}
                value={fmtMoney(Math.abs(res.totalSavings))}
                note={`over ${res.timeframe} years`}
                highlight={res.totalSavings >= 0}
              />
              <MilestoneStat label="Equity Built" value={fmtMoney(res.equityBuilt)} note={`by year ${res.timeframe}`} />
            </div>
          </div>

          <div className="rvb-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 24, alignItems: "start" }}>
            {/* ============ INPUT PANEL ============ */}
            <div className="rvb-sticky-panel" style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(28,42,23,0.06), 0 6px 20px rgba(28,42,23,0.05)", padding: 0, overflow: "hidden" }}>
              <Accordion title="Renting" chipColor={C.rent} chipBg={C.rentPale} open={openSections.renting}
                onToggle={() => setOpenSections((o) => ({ ...o, renting: !o.renting }))}>
                <Field label="Monthly Rent">
                  <MoneyInput value={monthlyRentText}
                    onChange={(v) => {
                      setMonthlyRentText(v);
                      if (secDepAuto) { const rr = toNumber(v); if (isFinite(rr)) setSecurityDepositText(fmtMoney(rr)); }
                    }}
                    onBlur={() => { const n = toNumber(monthlyRentText); if (isFinite(n)) setMonthlyRentText(fmtMoney(n)); }} />
                  <MiniSlider min={0} max={10000} step={50} value={toNumber(monthlyRentText)}
                    onChange={(v) => {
                      setMonthlyRentText(fmtMoney(v));
                      if (secDepAuto) setSecurityDepositText(fmtMoney(v));
                    }} />
                </Field>
                <Field label="Annual Rent Increase">
                  <RateInput value={rentIncreaseText} onChange={setRentIncreaseText} />
                </Field>
                <Field label={<>Renter&apos;s Insurance <span style={{ fontWeight: 400, textTransform: "none" }}>/ yr</span></>}>
                  <MoneyInput value={rentersInsText} onChange={setRentersInsText}
                    onBlur={() => { const n = toNumber(rentersInsText); if (isFinite(n)) setRentersInsText(fmtMoney(n)); }} />
                </Field>
                <Field label="Security Deposit" hint={secDepAuto ? "Defaults to 1× monthly rent — edit to override." : "Manually set — editing Monthly Rent will no longer change this."}>
                  <MoneyInput value={securityDepositText}
                    onChange={(v) => { setSecDepAuto(false); setSecurityDepositText(v); }}
                    onBlur={() => { const n = toNumber(securityDepositText); if (isFinite(n)) setSecurityDepositText(fmtMoney(n)); }} />
                  <MiniSlider min={0} max={10000} step={50} value={toNumber(securityDepositText)}
                    onChange={(v) => { setSecDepAuto(false); setSecurityDepositText(fmtMoney(v)); }} />
                </Field>
              </Accordion>

              <Accordion title="Buying" chipColor={C.greenDeep} chipBg={C.greenPale} open={openSections.buying}
                onToggle={() => setOpenSections((o) => ({ ...o, buying: !o.buying }))}>
                <Field label="Home Price">
                  <MoneyInput value={homePriceText} onChange={onHomePriceChange}
                    onBlur={() => { const n = toNumber(homePriceText); if (isFinite(n)) setHomePriceText(fmtMoney(n)); }} />
                  <MiniSlider min={50000} max={2000000} step={5000} value={toNumber(homePriceText)}
                    onChange={(v) => onHomePriceChange(fmtMoney(v))} />
                </Field>
                <Field label="Loan Program">
                  <select className="dpc-input" style={{ ...baseInput, padding: "9px 12px", fontFamily: SANS, fontWeight: 500 }}
                    value={loanProgram} onChange={(e) => onLoanProgramChange(e.target.value)}>
                    <option value="conventional">Conventional</option>
                    <option value="fha">FHA</option>
                    <option value="va">VA</option>
                  </select>
                </Field>
                {loanProgram !== "va" && (
                  <Field label="Credit Score" hint="Used to estimate mortgage insurance (PMI for Conventional, MIP for FHA).">
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <input className="dpc-input" style={{ ...baseInput, width: 84, flex: "0 0 84px", textAlign: "center", padding: "9px 12px" }}
                        inputMode="numeric" value={creditScoreText}
                        onChange={(e) => setCreditScoreText(e.target.value)}
                        onBlur={() => setCreditScoreText(String(creditScore))} />
                      <span style={{ fontSize: 12.5, color: C.inkSoft }}>({creditScoreLabel(creditScore)})</span>
                    </div>
                    <MiniSlider min={600} max={850} step={1} value={creditScore} onChange={(v) => setCreditScoreText(String(Math.round(v)))} />
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5, fontFamily: MONO, color: C.inkSoft, marginTop: 2 }}>
                      <span>600</span><span>850</span>
                    </div>
                  </Field>
                )}
                {loanProgram === "va" && (
                  <Field label="VA Funding Fee">
                    <label style={{ display: "flex", alignItems: "center", gap: 7, textTransform: "none", fontWeight: 500, fontSize: 13, color: C.ink, marginBottom: 8 }}>
                      <input type="checkbox" checked={vaFirstUse} onChange={(e) => setVaFirstUse(e.target.checked)} style={{ width: 15, height: 15 }} />
                      First use of VA loan benefit
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: 7, textTransform: "none", fontWeight: 500, fontSize: 13, color: C.ink }}>
                      <input type="checkbox" checked={vaExempt} onChange={(e) => setVaExempt(e.target.checked)} style={{ width: 15, height: 15 }} />
                      Exempt from funding fee (service-connected disability)
                    </label>
                  </Field>
                )}
                <Field label={<>Down Payment <span style={{ fontWeight: 400, textTransform: "none" }}>({floorPct === 0 ? "no minimum" : floorPct + "% min"})</span></>}>
                  <div style={{ display: "flex", gap: 9 }}>
                    <div style={{ flex: 1.4 }}><MoneyInput value={dpAmountText} onChange={onDpAmountChange}
                      onBlur={() => { const n = toNumber(dpAmountText); if (isFinite(n)) setDpAmountText(fmtMoney(n)); }} /></div>
                    <div style={{ flex: 1, position: "relative" }}>
                      <input className="dpc-input" style={{ ...baseInput, padding: "9px 20px 9px 12px" }} inputMode="decimal" value={dpPercentText}
                        onChange={(e) => onDpPercentChange(e.target.value)} onBlur={onDpPercentBlur} />
                      <span style={{ position: "absolute", right: 9, top: "50%", transform: "translateY(-50%)", color: C.inkSoft, fontSize: 12, pointerEvents: "none" }}>%</span>
                    </div>
                  </div>
                  <MiniSlider min={floorPct} max={100} step={0.5} value={toNumber(dpPercentText)} onChange={onDpSliderChange} />
                </Field>
                <Field label="Estimated Mortgage Insurance">
                  <div style={{ fontSize: 11.5, color: C.inkSoft, background: C.paper, border: `1px dashed ${C.line}`, borderRadius: 7, padding: "9px 11px", lineHeight: 1.5 }}>
                    {res.program === "va"
                      ? "VA loans don't require monthly mortgage insurance."
                      : !res.miAppliesAtStart
                      ? "Down payment is 20%+ — no mortgage insurance required."
                      : res.program === "conventional"
                      ? `Estimated PMI: $${fmtMoney(res.monthlyMI0)}/mo (rate ~${(res.miAnnualRate * 100).toFixed(2)}%/yr), based on credit score and down payment. Removed once the loan balance reaches 80% of home value.`
                      : `Estimated FHA annual MIP: $${fmtMoney(res.monthlyMI0)}/mo (rate ~${(res.miAnnualRate * 100).toFixed(2)}%/yr).`}
                  </div>
                </Field>
                <Field label="Closing Costs" hint={ccAuto ? "Auto-estimated from Arizona's closing cost schedule — edit to override." : "Manually overridden — will not update if home price changes."}>
                  <MoneyInput value={closingCostsDisplay}
                    onChange={(v) => { setCcAuto(false); setClosingCostsText(v); }}
                    onBlur={() => { const n = toNumber(closingCostsText); if (isFinite(n)) setClosingCostsText(fmtMoney(n)); }} />
                </Field>
                <Field label="Interest Rate">
                  <RateInput value={interestRateText} onChange={setInterestRateText}
                    onBlur={() => { const n = toNumber(interestRateText); if (isFinite(n)) setInterestRateText(n.toString()); }} />
                  <MiniSlider min={0.1} max={15} step={0.125} value={toNumber(interestRateText)} onChange={(v) => setInterestRateText(v.toString())} />
                </Field>
                <Field label="Loan Term">
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <input type="range" min={1} max={30} step={1} value={loanTermRaw}
                      onChange={(e) => setLoanTermRaw(parseFloat(e.target.value))}
                      style={{ WebkitAppearance: "none", flex: 1, height: 4, borderRadius: 2, background: C.line, accentColor: C.green }} />
                    <div style={{ minWidth: 58, textAlign: "center", background: C.greenPale, color: C.greenDeep, fontFamily: MONO, fontWeight: 600, fontSize: 13, padding: "6px 7px", borderRadius: 7, border: "1px solid #d3e5c6" }}>
                      {loanTermYears} {loanTermYears === 1 ? "yr" : "yrs"}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 6, marginTop: 9, flexWrap: "wrap" }}>
                    {[10, 15, 20, 30].map((t) => (
                      <button key={t} onClick={() => setLoanTermRaw(t)}
                        style={{
                          fontFamily: SANS, fontSize: 11.5, fontWeight: 600, padding: "5px 9px", borderRadius: 6,
                          border: `1px solid ${clampTerm(loanTermRaw) === t ? C.green : C.line}`,
                          background: clampTerm(loanTermRaw) === t ? C.green : "#fff",
                          color: clampTerm(loanTermRaw) === t ? "#fff" : C.inkSoft, cursor: "pointer",
                        }}>
                        {t} yr
                      </button>
                    ))}
                  </div>
                </Field>
                <Field label="Annual Property Taxes" hint={taxAuto ? "Auto-estimated from Arizona's property tax schedule — edit to override." : "Manually overridden — will not update if home price changes."}>
                  <MoneyInput value={annualPropertyTaxesText}
                    onChange={(v) => { setTaxAuto(false); setAnnualPropertyTaxesText(v); }}
                    onBlur={() => { const n = toNumber(annualPropertyTaxesText); if (isFinite(n)) setAnnualPropertyTaxesText(fmtMoney(n)); }} />
                </Field>
                <Field label={<>Home Appreciation <span style={{ fontWeight: 400, textTransform: "none" }}>/ yr</span></>}>
                  <RateInput value={appreciationText} onChange={setAppreciationText} />
                </Field>
                <Field label={<>Home Insurance <span style={{ fontWeight: 400, textTransform: "none" }}>/ yr</span></>} hint={homeInsAuto ? "Defaults to 0.35% of home price — edit to override." : "Manually overridden — will not update if home price changes."}>
                  <MoneyInput value={homeInsuranceText}
                    onChange={(v) => { setHomeInsAuto(false); setHomeInsuranceText(v); }}
                    onBlur={() => { const n = toNumber(homeInsuranceText); if (isFinite(n)) setHomeInsuranceText(fmtMoney(Math.round(n))); }} />
                </Field>
                <Field label="Monthly Maintenance" hint={maintAuto ? "Defaults to 1% of home price / year — edit to override." : "Manually overridden — will not update if home price changes."}>
                  <MoneyInput value={monthlyMaintenanceText}
                    onChange={(v) => { setMaintAuto(false); setMonthlyMaintenanceText(v); }}
                    onBlur={() => { const n = toNumber(monthlyMaintenanceText); if (isFinite(n)) setMonthlyMaintenanceText(fmtMoney(Math.round(n))); }} />
                </Field>
                <Field label={<>HOA Fees <span style={{ fontWeight: 400, textTransform: "none" }}>/ mo</span></>}>
                  <MoneyInput value={hoaText} onChange={setHoaText}
                    onBlur={() => { const n = toNumber(hoaText); if (isFinite(n)) setHoaText(fmtMoney(n)); }} />
                </Field>
              </Accordion>

              <Accordion title="Assumptions" chipColor={C.gold} chipBg={C.goldPale} open={openSections.assumptions}
                onToggle={() => setOpenSections((o) => ({ ...o, assumptions: !o.assumptions }))}>
                <Field label={<>Investment Return Rate <span style={{ fontWeight: 400, textTransform: "none" }}>/ yr</span></>} hint="Return the down payment & closing costs would earn if invested instead.">
                  <RateInput value={investReturnText} onChange={setInvestReturnText} />
                </Field>
                <Field label="Federal Tax Rate" hint="Assumes itemized deductions every year.">
                  <RateInput value={taxRateText} onChange={setTaxRateText} />
                </Field>
                <Field label="Comparison Timeframe">
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <input type="range" min={1} max={30} step={1} value={timeframeRaw}
                      onChange={(e) => setTimeframeRaw(parseFloat(e.target.value))}
                      style={{ WebkitAppearance: "none", flex: 1, height: 4, borderRadius: 2, background: C.line, accentColor: C.green }} />
                    <div style={{ minWidth: 58, textAlign: "center", background: C.greenPale, color: C.greenDeep, fontFamily: MONO, fontWeight: 600, fontSize: 13, padding: "6px 7px", borderRadius: 7, border: "1px solid #d3e5c6" }}>
                      {timeframe} {timeframe === 1 ? "yr" : "yrs"}
                    </div>
                  </div>
                </Field>
              </Accordion>
            </div>

            {/* ============ RESULTS ============ */}
            <div>
              <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(28,42,23,0.06), 0 6px 20px rgba(28,42,23,0.05)", padding: 22, marginBottom: 20 }}>
                <div className="rvb-hero" style={{
                  position: "relative",
                  display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 18,
                  padding: "20px",
                  marginBottom: 18,
                  borderRadius: 12,
                  border: `2px solid ${res.monthlyDifference < 0 ? C.green : RENT_RED}`,
                  background: `linear-gradient(90deg, ${RENT_RED_PALE} 0%, #ffffff 48%, #ffffff 52%, ${C.greenPale} 100%)`,
                  boxShadow: `0 4px 16px ${res.monthlyDifference < 0 ? "rgba(58,125,30,0.14)" : "rgba(163,64,47,0.16)"}`,
                }}>
                  <div>
                    <div style={{ fontSize: 11.5, textTransform: "uppercase", letterSpacing: ".05em", color: RENT_RED, fontWeight: 700, marginBottom: 6 }}>Renting / Month</div>
                    <div style={{ fontFamily: SERIF, fontSize: 38, fontWeight: 700, lineHeight: 1, color: RENT_RED }}>${fmtMoney(res.monthlyRent)}</div>
                  </div>
                  <div style={{
                    fontFamily: MONO, fontSize: 22, fontWeight: 700, color: "#fff",
                    background: `linear-gradient(135deg, ${RENT_RED}, ${C.green})`,
                    width: 80, height: 80, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 4px 14px rgba(28,42,23,0.3)", flexShrink: 0,
                  }}>vs</div>
                  <div>
                    <div style={{ fontSize: 11.5, textTransform: "uppercase", letterSpacing: ".05em", color: C.greenDeep, fontWeight: 700, marginBottom: 6 }}>Buying / Month</div>
                    <div style={{ fontFamily: SERIF, fontSize: 38, fontWeight: 700, lineHeight: 1, color: C.greenDeep }}>
                      ${fmtMoney(Math.floor(res.monthlyPaymentIfBuying))}
                      <sup style={{ fontSize: 14, fontWeight: 500, color: C.inkSoft, marginLeft: 3 }}>.{Math.round((res.monthlyPaymentIfBuying % 1) * 100).toString().padStart(2, "0")}</sup>
                    </div>
                    {res.upfrontFeeLabel && res.upfrontFee > 0 && (
                      <div style={{ fontSize: 11, color: C.inkSoft, marginTop: 10 }}>
                        {res.upfrontFeeLabel} of ${fmtMoney(res.upfrontFee)} is financed into the loan by default (loan amount: ${fmtMoney(res.loanAmount)}).
                      </div>
                    )}
                  </div>
                </div>

                <div className="rvb-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
                  <StatBox label="Break-even Point" color={C.greenDeep}
                    value={res.breakEvenYear ? `${(res.breakEvenInterp ? res.breakEvenInterp.toFixed(1) : res.breakEvenYear)} yrs` : `Not within ${res.timeframe} yrs`} />
                  <StatBox label="Total Savings" value={`${res.totalSavings >= 0 ? "" : "-"}$${fmtMoney(Math.abs(res.totalSavings))}`}
                    sub={(res.totalSavings >= 0 ? "Buying saves this much" : "Renting saves this much") + ` over ${res.timeframe} yrs`} />
                  <StatBox label="Future Home Value" color={C.gold} value={`$${fmtMoney(res.futureHomeValue)}`} />
                  <StatBox label="Equity Built" color={C.greenDeep} value={`$${fmtMoney(res.equityBuilt)}`} />
                </div>
              </div>

              <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(28,42,23,0.06), 0 6px 20px rgba(28,42,23,0.05)", padding: 22, marginBottom: 20 }}>
                <h2 style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 600, margin: "0 0 16px" }}>Cumulative Cost Over Time</h2>
                <InteractiveLineChart
                  labels={res.yearData.map((y) => String(y.year))}
                  series={[
                    { label: "Cumulative Renting Cost", data: res.yearData.map((y) => Math.round(y.cumRentingCost)), color: C.rent },
                    { label: "Cumulative Buying Cost", data: res.yearData.map((y) => Math.round(y.cumBuyingCost)), color: C.green },
                  ]}
                  xTitle="Year"
                  yTitle="Cumulative Cost ($)"
                />
                {res.breakEvenYear && (
                  <p style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 10 }}>
                    Break-even occurs around year {res.breakEvenInterp ? res.breakEvenInterp.toFixed(1) : res.breakEvenYear}, where the buying line drops below the renting line.
                  </p>
                )}
              </div>

              <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(28,42,23,0.06), 0 6px 20px rgba(28,42,23,0.05)", padding: 22 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
                  <h2 style={{ margin: 0, fontFamily: SERIF, fontSize: 16, fontWeight: 600 }}>Year-by-Year Detail</h2>
                  <button onClick={() => setShowYearly((v) => !v)}
                    style={{ fontSize: 13, fontWeight: 600, color: C.greenDeep, background: C.greenPale, border: "1px solid #d3e5c6", borderRadius: 7, padding: "7px 14px", cursor: "pointer" }}>
                    {showYearly ? "Hide year-by-year table" : "Show year-by-year table"}
                  </button>
                </div>
                {showYearly && (
                  <div style={{ maxHeight: 420, overflowY: "auto", marginTop: 14, border: `1px solid ${C.line}`, borderRadius: 8 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5, fontFamily: MONO }}>
                      <thead>
                        <tr>
                          {["Year", "Home Value", "Loan Balance", "Equity", "Cumulative Buying Cost", "Cumulative Renting Cost"].map((h, i) => (
                            <th key={h} style={{ position: "sticky", top: 0, background: C.ink, color: "#fff", fontFamily: SANS, fontWeight: 600, textAlign: i === 0 ? "left" : "right", padding: "9px 10px", fontSize: 10.5, textTransform: "uppercase", letterSpacing: ".03em" }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {res.yearData.map((y, idx) => (
                          <tr key={y.year} style={{ background: res.breakEvenYear === y.year ? C.greenPale : (idx % 2 === 1 ? "#fafaf8" : "transparent"), fontWeight: res.breakEvenYear === y.year ? 700 : 400 }}>
                            <td style={{ textAlign: "left", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, color: C.inkSoft }}>{y.year}</td>
                            <td style={{ textAlign: "right", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, whiteSpace: "nowrap" }}>${fmtMoney(y.homeValue)}</td>
                            <td style={{ textAlign: "right", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, whiteSpace: "nowrap" }}>${fmtMoney(y.balance)}</td>
                            <td style={{ textAlign: "right", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, whiteSpace: "nowrap" }}>${fmtMoney(y.equity)}</td>
                            <td style={{ textAlign: "right", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, whiteSpace: "nowrap" }}>{fmtSignedMoney(y.cumBuyingCost)}</td>
                            <td style={{ textAlign: "right", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, whiteSpace: "nowrap" }}>{fmtSignedMoney(y.cumRentingCost)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                <p style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 16, lineHeight: 1.5 }}>
                  Estimates are for comparison purposes only and assume itemized federal tax deductions every year, a fixed investment return, and steady annual compounding of rent and appreciation. Actual results will vary with market conditions, loan terms, and personal tax circumstances. Contact Mortgage Brothers LLC for a personalized quote.
                </p>
              </div>

              {/* Insights — last section, below all charts/tables */}
              <InsightsPanel
                groups={[
                  { title: "Financial Analysis", color: C.greenDeep, bullets: rvbInsights.financial },
                  { title: "Risk Assessment", color: C.gold, bullets: rvbInsights.risk },
                ]}
                nextSteps={rvbInsights.nextSteps}
              />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 760px) {
            .rvb-layout { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 640px) {
            .rvb-hero { grid-template-columns: 1fr !important; text-align: left; }
          }
          @media (max-width: 760px) {
            .rvb-stats { grid-template-columns: repeat(2,1fr) !important; }
          }
          .dpc-input { transition: border-color .15s, box-shadow .15s, background .15s; }
          .dpc-input:hover { border-color: #a9b59c; }
          .dpc-input:focus { background: #ffffff; border-color: ${C.green}; box-shadow: 0 0 0 3px ${C.greenPale}; }
        `}</style>
      </main>
      <Footer />
    </div>
  );
}
