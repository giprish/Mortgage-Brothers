"use client";
// @ts-nocheck

import { useMemo, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

/* ============================================================
   COLORS (ported 1:1 from the original stylesheet)
============================================================ */
const C = {
  ink: "#1b2a1f",
  inkSoft: "#4a5a4d",
  paper: "#faf9f5",
  panel: "#ffffff",
  line: "#dfe3dc",
  greenDeep: "#2c5e1a",
  green: "#3a7d1e",
  greenBright: "#6ca220",
  greenWash: "#eef4e6",
  amber: "#9a6b12",
  amberWash: "#fbf1dd",
  red: "#a3372b",
  redWash: "#faeae8",
};
const SERIF = '"Source Serif 4", Georgia, "Times New Roman", serif';
const SANS = '-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif';
const MONO = '"IBM Plex Mono", "SFMono-Regular", Menlo, Consolas, monospace';

/* ============================================================
   LOOKUP TABLES (Section 3 of spec)
============================================================ */
const PROPERTY_TAX_TABLE = [
  [100000, 1000], [150000, 1065], [200000, 1134], [250000, 1208], [300000, 1286],
  [350000, 1370], [400000, 1459], [450000, 1554], [500000, 1756], [550000, 1984],
  [600000, 2242], [650000, 2534], [700000, 2863], [750000, 3149], [800000, 3370],
  [850000, 3606], [900000, 3858], [950000, 4128], [1000000, 4417], [1050000, 4638],
  [1100000, 4870], [1150000, 5114], [1200000, 5267], [1250000, 5425], [1300000, 5588],
  [1350000, 5755], [1400000, 5928], [1450000, 6047], [1500000, 6167], [1550000, 6291],
  [1600000, 6417], [1650000, 6545], [1700000, 6676], [1750000, 6809], [1800000, 6946],
  [1850000, 7084], [1900000, 7226], [1950000, 7371], [10000000, 7518],
];
const INSURANCE_TABLE = [
  [100000, 1000], [150000, 1040], [200000, 1082], [250000, 1125], [300000, 1170],
  [350000, 1217], [400000, 1265], [450000, 1316], [500000, 1369], [550000, 1423],
  [600000, 1480], [650000, 1539], [700000, 1601], [750000, 1665], [800000, 1732],
  [850000, 1801], [900000, 1873], [950000, 1948], [1000000, 2026], [1050000, 2107],
  [1100000, 2191], [1150000, 2279], [1200000, 2370], [1250000, 2465], [1300000, 2563],
  [1350000, 2666], [1400000, 2772], [1450000, 2883], [1500000, 2999], [1550000, 3119],
  [1600000, 3243], [1650000, 3373], [1700000, 3508], [1750000, 3648], [1800000, 3794],
  [1850000, 3946], [1900000, 4104], [1950000, 4268], [10000000, 4439],
];
const CLOSING_COST_TABLE = [
  [100000, 3100], [150000, 3178], [200000, 3257], [250000, 3338], [300000, 3422],
  [350000, 3507], [400000, 3595], [450000, 3685], [500000, 3777], [550000, 3871],
  [600000, 3968], [650000, 4067], [700000, 4169], [750000, 4273], [800000, 4359],
  [850000, 4446], [900000, 4535], [950000, 4626], [1000000, 4718], [1050000, 4765],
  [1100000, 4813], [1150000, 4861], [1200000, 4910], [1250000, 4959], [1300000, 5008],
  [1350000, 5059], [1400000, 5109], [1450000, 5160], [1500000, 5212], [1550000, 5264],
  [1600000, 5317], [1650000, 5370], [1700000, 5423], [1750000, 5478], [1800000, 5532],
  [1850000, 5588], [1900000, 5644], [1950000, 5700], [10000000, 6500],
];

function lookupTable(table, price) {
  for (const [upTo, val] of table) {
    if (price <= upTo) return val;
  }
  return table[table.length - 1][1];
}

const PMI_TABLE = {
  760: [0.30, 0.19, 0.15, 0.10],
  740: [0.48, 0.33, 0.24, 0.13],
  720: [0.66, 0.47, 0.33, 0.17],
  700: [0.84, 0.61, 0.42, 0.20],
  680: [1.02, 0.75, 0.52, 0.23],
  660: [1.20, 0.89, 0.61, 0.26],
  640: [1.38, 1.03, 0.70, 0.30],
  620: [1.56, 1.17, 0.79, 0.33], // also used as the floor for any score below 620
};
function creditScoreBand(score) {
  if (score >= 760) return 760;
  if (score >= 740) return 740;
  if (score >= 720) return 720;
  if (score >= 700) return 700;
  if (score >= 680) return 680;
  if (score >= 660) return 660;
  if (score >= 640) return 640;
  return 620;
}
function creditScoreLabel(score) {
  if (score >= 760) return "Excellent";
  if (score >= 740) return "Very Good";
  if (score >= 720) return "Good";
  if (score >= 700) return "Fair to Good";
  if (score >= 680) return "Fair";
  if (score >= 660) return "Below Fair";
  if (score >= 640) return "Poor";
  return "High Risk";
}
function pmiRate(creditScore, downPct) {
  if (downPct >= 20) return 0;
  const row = PMI_TABLE[creditScoreBand(creditScore)];
  if (downPct < 5) return row[0];
  if (downPct < 10) return row[1];
  if (downPct < 15) return row[2];
  return row[3];
}

const FHA_UFMIP_RATE = 0.0175;
function fhaAnnualMipRate(loanAmount, ltv, termYears) {
  const highBalance = loanAmount > 726200;
  if (!highBalance) {
    if (termYears > 15) {
      if (ltv <= 90) return 0.50;
      if (ltv <= 95) return 0.50;
      return 0.55;
    } else {
      if (ltv <= 90) return 0.15;
      return 0.40;
    }
  } else {
    if (termYears > 15) {
      if (ltv <= 90) return 0.70;
      if (ltv <= 95) return 0.70;
      return 0.75;
    } else {
      if (ltv <= 78) return 0.15;
      if (ltv <= 90) return 0.40;
      return 0.65;
    }
  }
}

function vaFundingFeeRate(downPct) {
  if (downPct < 5) return 2.15;
  if (downPct < 10) return 1.50;
  return 1.25;
}

const USDA_UPFRONT_RATE = 1.00;
const USDA_ANNUAL_RATE = 0.35;
const LOAN_MIN = { conventional: 3, fha: 3.5, va: 0, usda: 0 };
const SCENARIO_CHECKPOINTS = {
  conventional: [3, 5, 10, 15, 20, 25],
  fha: [3.5, 5, 10, 15],
  va: [0, 5, 10],
  usda: [0, 5, 10],
};

/* ============================================================
   HELPERS
============================================================ */
function parseNum(str) {
  if (typeof str !== "string") return 0;
  const n = parseFloat(str.replace(/[^0-9.\-]/g, ""));
  return isNaN(n) ? 0 : n;
}
function fmtMoney(n, decimals = 0) {
  if (!isFinite(n)) n = 0;
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}
function fmtPct(n, decimals = 2) {
  if (!isFinite(n)) n = 0;
  return n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + "%";
}
function round2(n) { return Math.round(n * 100) / 100; }
function normalizeTerm(raw) {
  let n = parseFloat(raw);
  if (isNaN(n)) n = 30;
  n = Math.round(n);
  if (n < 1) n = 1;
  if (n > 30) n = 30;
  return n;
}
function computeMonthlyPI(loanAmount, annualRatePct, termYears) {
  const n = termYears * 12;
  const r = (annualRatePct / 100) / 12;
  if (annualRatePct === 0) return loanAmount / n;
  const factor = Math.pow(1 + r, n);
  return (loanAmount * (r * factor)) / (factor - 1);
}
function computeScenario(homePrice, downPct, interestRate, termYears, loanType, creditScore) {
  const downDollar = homePrice * (downPct / 100);
  const loanAmount = homePrice - downDollar;
  const ltv = homePrice > 0 ? (loanAmount / homePrice) * 100 : 0;
  const pi = computeMonthlyPI(loanAmount, interestRate, termYears);

  let monthlyMI = 0, upfrontFee = 0, miLabel = "PMI";
  if (loanType === "conventional") {
    const rate = pmiRate(creditScore, downPct);
    monthlyMI = (loanAmount * (rate / 100)) / 12;
    miLabel = "PMI";
  } else if (loanType === "fha") {
    upfrontFee = loanAmount * FHA_UFMIP_RATE;
    const rate = fhaAnnualMipRate(loanAmount, ltv, termYears);
    monthlyMI = (loanAmount * (rate / 100)) / 12;
    miLabel = "MIP";
  } else if (loanType === "va") {
    const rate = vaFundingFeeRate(downPct);
    upfrontFee = loanAmount * (rate / 100);
    monthlyMI = 0;
    miLabel = "VA Funding Fee (one-time)";
  } else if (loanType === "usda") {
    upfrontFee = loanAmount * (USDA_UPFRONT_RATE / 100);
    monthlyMI = (loanAmount * (USDA_ANNUAL_RATE / 100)) / 12;
    miLabel = "USDA Annual Fee";
  }
  return { downDollar, loanAmount, ltv, pi, monthlyMI, upfrontFee, miLabel };
}
function setRatioStatus(ratio, threshold) {
  return ratio <= threshold ? "pass" : ratio <= threshold + 2 ? "warn" : "fail";
}
const STATUS_COLOR = { pass: C.greenDeep, warn: C.amber, fail: C.red };
const STATUS_BG = { pass: C.greenWash, warn: C.amberWash, fail: C.redWash };

const LOAN_TYPE_NOTES = {
  conventional: "Minimum down payment: 3% for qualified buyers. 20% down avoids monthly PMI.",
  fha: "Minimum down payment: 3.5% (credit score 580+). Upfront MIP of 1.75% plus an annual MIP applies to all FHA loans.",
  va: "Minimum down payment: 0% for eligible veterans. A one-time VA funding fee applies in place of monthly mortgage insurance. Rates shown assume first-time use of VA loan benefits.",
  usda: "Minimum down payment: 0% for eligible rural properties. A 1.00% upfront guarantee fee and 0.35% annual fee apply in place of PMI.",
};

/* ============================================================
   SMALL UI PRIMITIVES
============================================================ */
function Field({ label, hint, children, error }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: C.ink, marginBottom: 5 }}>
        {label}
      </label>
      {children}
      {hint && <div style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 4 }}>{hint}</div>}
      {error && <div style={{ fontSize: 11.5, marginTop: 4, fontWeight: 600, color: C.amber }}>{error}</div>}
    </div>
  );
}
const inputStyle = {
  width: "100%",
  padding: "9px 11px",
  border: `1.5px solid #c3ccbb`,
  borderRadius: 7,
  fontFamily: SANS,
  fontSize: 14.5,
  color: C.ink,
  background: "#eef1ea",
  outline: "none",
  boxSizing: "border-box",
  boxShadow: "inset 0 1px 2px rgba(27,42,31,0.06)",
};
function Panel({ number, title, children }) {
  return (
    <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 10, padding: "20px 22px 22px", marginBottom: 18 }}>
      <h2 style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 600, margin: "0 0 14px", color: C.greenDeep, display: "flex", alignItems: "center", gap: 8 }}>
        {number && (
          <span style={{ fontFamily: MONO, fontSize: 11, color: "#fff", background: C.greenBright, width: 20, height: 20, borderRadius: 5, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {number}
          </span>
        )}
        {title}
      </h2>
      {children}
    </div>
  );
}
function ResultLine({ label, value, total, id }) {
  return (
    <div
      style={{
        display: "flex", justifyContent: "space-between", alignItems: "baseline",
        padding: total ? "10px 0 0" : "7px 0",
        borderTop: total ? `2px solid ${C.green}` : "none",
        borderBottom: total ? "none" : `1px dashed ${C.line}`,
        marginTop: total ? 4 : 0,
        fontSize: total ? 16 : 14,
      }}
    >
      <span style={{ color: C.inkSoft }}>{label}</span>
      <span style={{ fontWeight: 700, fontVariantNumeric: "tabular-nums", color: total ? C.greenDeep : C.ink, fontSize: total ? 18 : 14 }}>
        {value}
      </span>
    </div>
  );
}

function SliderRow({ min, max, step, value, onChange, minLabel, maxLabel }) {
  const safeValue = isFinite(value) ? Math.min(max, Math.max(min, value)) : min;
  return (
    <div style={{ marginTop: 8 }}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={safeValue}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        style={{ width: "100%", accentColor: C.greenBright, display: "block" }}
      />
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5, fontFamily: MONO, color: C.inkSoft, marginTop: 2 }}>
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

function InsightsPanel({ groups, nextSteps }) {
  return (
    <div style={{ background: "#f7f8f5", border: `1px solid ${C.line}`, borderRadius: 10, padding: "20px 22px 22px", marginBottom: 18 }}>
      <h3 style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 600, margin: "0 0 12px", color: C.ink }}>Recommendations & Key Insights</h3>
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
function DownPaymentCalculator() {
  // Property / financial profile
  const [homePriceText, setHomePriceText] = useState("500,000");
  const [annualIncomeText, setAnnualIncomeText] = useState("95,000");
  const [monthlyDebtText, setMonthlyDebtText] = useState("400");
  const [creditScoreText, setCreditScoreText] = useState("760");
  const creditScoreRaw = parseInt(creditScoreText, 10);
  const creditScore = isFinite(creditScoreRaw) ? Math.min(850, Math.max(600, creditScoreRaw)) : 720;

  // Loan details
  const [loanType, setLoanType] = useState("conventional");
  const [interestRateText, setInterestRateText] = useState("6.500");
  const [loanTerm, setLoanTerm] = useState(30);

  // Down payment
  const [downPaymentDollarText, setDownPaymentDollarText] = useState("15,000");
  const [downPaymentPercentText, setDownPaymentPercentText] = useState("3.00");

  // Additional costs
  const [propertyTaxRateText, setPropertyTaxRateText] = useState("");
  const [homeInsuranceText, setHomeInsuranceText] = useState("");
  const [hoaFeesText, setHoaFeesText] = useState("0");
  const [monthlySavingsText, setMonthlySavingsText] = useState("500");

  const homePrice = parseNum(homePriceText);
  const annualIncome = parseNum(annualIncomeText);
  const monthlyDebt = parseNum(monthlyDebtText);
  const interestRate = parseNum(interestRateText);
  const downPaymentDollar = parseNum(downPaymentDollarText);
  const hoaFees = parseNum(hoaFeesText);
  const propertyTaxManual = propertyTaxRateText.trim() === "" ? null : parseNum(propertyTaxRateText);
  const insuranceManual = homeInsuranceText.trim() === "" ? null : parseNum(homeInsuranceText);

  const taxDefaultDollar = lookupTable(PROPERTY_TAX_TABLE, homePrice);
  const taxDefaultRate = homePrice > 0 ? round2((taxDefaultDollar / homePrice) * 100) : 0;
  const insDefault = lookupTable(INSURANCE_TABLE, homePrice);

  /* ---- Down payment $ / % bidirectional sync ---- */
  function onHomePriceChange(text) {
    setHomePriceText(text);
    const newPrice = parseNum(text);
    const dollarVal = parseNum(downPaymentDollarText);
    const newPct = newPrice > 0 ? (dollarVal / newPrice) * 100 : 0;
    setDownPaymentPercentText(round2(newPct).toFixed(2));
  }
  function onDownPaymentDollarChange(text) {
    setDownPaymentDollarText(text);
    let dp = parseNum(text);
    if (dp > homePrice) dp = homePrice;
    if (dp < 0) dp = 0;
    const pct = homePrice > 0 ? (dp / homePrice) * 100 : 0;
    setDownPaymentPercentText(round2(pct).toFixed(2));
  }
  function onDownPaymentPercentChange(text) {
    let pctVal = parseNum(text);
    if (pctVal > 100) pctVal = 100;
    if (pctVal < 0) pctVal = 0;
    setDownPaymentPercentText(text);
    const dp = Math.round(homePrice * (pctVal / 100));
    setDownPaymentDollarText(dp.toLocaleString("en-US"));
  }

  const downPct = homePrice > 0 ? (downPaymentDollar / homePrice) * 100 : 0;
  const min = LOAN_MIN[loanType];

  const scenario = useMemo(
    () => computeScenario(homePrice, downPct, interestRate, loanTerm, loanType, creditScore),
    [homePrice, downPct, interestRate, loanTerm, loanType, creditScore]
  );

  const taxAnnual = propertyTaxManual !== null ? homePrice * (propertyTaxManual / 100) : lookupTable(PROPERTY_TAX_TABLE, homePrice);
  const insAnnual = insuranceManual !== null ? insuranceManual : lookupTable(INSURANCE_TABLE, homePrice);
  const monthlyTax = taxAnnual / 12;
  const monthlyIns = insAnnual / 12;
  const monthlyHoa = hoaFees;
  const totalMonthly = scenario.pi + monthlyTax + monthlyIns + monthlyHoa + scenario.monthlyMI;
  const closingCosts = lookupTable(CLOSING_COST_TABLE, homePrice);
  const requiredSavings = downPaymentDollar + closingCosts;

  /* ---- Time to reach a 20% down payment ---- */
  const monthlySavings = parseNum(monthlySavingsText);
  const target20Dollar = homePrice * 0.20;
  const requiredAt20 = target20Dollar + closingCosts;
  const savingsShortfall = Math.max(0, requiredAt20 - downPaymentDollar);
  const alreadyAt20 = downPct >= 20 || savingsShortfall <= 0;
  const monthsToReach20 = monthlySavings > 0 ? Math.ceil(savingsShortfall / monthlySavings) : null;

  const monthlyIncome = annualIncome / 12;
  const frontRatio = monthlyIncome > 0 ? (totalMonthly / monthlyIncome) * 100 : 0;
  const backRatio = monthlyIncome > 0 ? ((totalMonthly + monthlyDebt) / monthlyIncome) * 100 : 0;
  const frontStatus = setRatioStatus(frontRatio, 40);
  const backStatus = setRatioStatus(backRatio, 48);

  const miLabelDisplay = scenario.miLabel === "VA Funding Fee (one-time)" ? "Mortgage Insurance" : scenario.miLabel;

  let upfrontFeeLabel = "Upfront Fee (financed)";
  if (loanType === "fha") upfrontFeeLabel = "Upfront MIP (1.75%, financed)";
  if (loanType === "va") upfrontFeeLabel = "VA Funding Fee (financed)";
  if (loanType === "usda") upfrontFeeLabel = "USDA Guarantee Fee (financed)";

  /* ---- Donut chart segments ---- */
  const chart = useMemo(() => {
    const segments = [
      { label: "Principal & Interest", value: scenario.pi, color: "#2c5e1a" },
      { label: "Property Tax", value: monthlyTax, color: "#6ca220" },
      { label: "Insurance", value: monthlyIns, color: "#a8c96b" },
      { label: "HOA", value: monthlyHoa, color: "#d9c26b" },
      { label: scenario.miLabel, value: scenario.monthlyMI, color: "#a3372b" },
    ].filter((s) => s.value > 0.005);
    const total = totalMonthly || 1;
    let raw = segments.map((s) => (s.value / total) * 100);
    let rounded = raw.map((r) => Math.round(r * 10) / 10);
    let diff = Math.round((100 - rounded.reduce((a, b) => a + b, 0)) * 10) / 10;
    if (Math.abs(diff) >= 0.05 && rounded.length) {
      const maxIdx = rounded.indexOf(Math.max(...rounded));
      rounded[maxIdx] = Math.round((rounded[maxIdx] + diff) * 10) / 10;
    }
    const R = 60, CX = 75, CY = 75, STROKE = 22;
    const circumference = 2 * Math.PI * R;
    let offsetAcc = 0;
    const arcs = segments.map((s, i) => {
      const frac = raw[i] / 100;
      const len = frac * circumference;
      const arc = { ...s, len, dashOffset: -offsetAcc, pct: rounded[i] };
      offsetAcc += len;
      return arc;
    });
    return { arcs, R, CX, CY, STROKE, circumference };
  }, [scenario, monthlyTax, monthlyIns, monthlyHoa, totalMonthly]);

  /* ---- Insights ---- */
  const insights = useMemo(() => {
    const components = [
      { label: "principal & interest", value: scenario.pi },
      { label: "property tax", value: monthlyTax },
      { label: "insurance", value: monthlyIns },
      { label: "HOA", value: monthlyHoa },
      { label: scenario.miLabel.toLowerCase(), value: scenario.monthlyMI },
    ];
    const largest = components.reduce((a, b) => (b.value > a.value ? b : a));
    const largestPct = totalMonthly > 0 ? (largest.value / totalMonthly) * 100 : 0;

    const financial = [
      `Your ${largest.label} makes up the largest share of your monthly payment at ${fmtPct(largestPct, 1)} (${fmtMoney(largest.value)}/mo) of your ${fmtMoney(totalMonthly)} total.`,
      `Housing Cost Ratio is ${fmtPct(frontRatio)} against a 40% guideline (${frontStatus === "pass" ? "within guideline" : frontStatus === "warn" ? "borderline" : "above guideline"}).`,
      `Debt-to-Income Ratio is ${fmtPct(backRatio)} against a 48% guideline (${backStatus === "pass" ? "within guideline" : backStatus === "warn" ? "borderline" : "above guideline"}).`,
    ];
    if (alreadyAt20) {
      financial.push("You've already reached the 20% down payment threshold, so PMI won't apply on a conventional loan.");
    } else {
      financial.push(`A 20% down payment on this home would be ${fmtMoney(target20Dollar)} (${fmtMoney(requiredAt20)} including estimated closing costs) — you're currently ${fmtMoney(savingsShortfall)} short of that.`);
      if (monthlySavings > 0) {
        financial.push(`At your current savings rate, you're ${monthsToReach20} ${monthsToReach20 === 1 ? "month" : "months"} away from a 20% down payment.`);
      }
    }
    if (loanType === "conventional" && downPct < 25) {
      financial.push("Conventional loans typically see their best interest rate pricing at 25% down or more — worth asking your loan officer how much rate improvement that could mean for you.");
    }

    const risk = [];
    if (downPct < min) {
      risk.push(`Your down payment is below the ${fmtPct(min, 1)} minimum typically required for a ${loanType.toUpperCase()} loan.`);
    }
    if (scenario.monthlyMI > 0) {
      risk.push(`${scenario.miLabel} of ${fmtMoney(scenario.monthlyMI)}/mo is included in your payment and should be budgeted as an ongoing cost.`);
    }
    if (frontStatus !== "pass" || backStatus !== "pass") {
      risk.push("Your affordability ratios are outside standard guidelines — this may affect loan approval or your comfortable budget.");
    }
    risk.push(`Annual property taxes of ${fmtMoney(taxAnnual)} should be budgeted for annually.`);
    risk.push(`Annual homeowners insurance of ${fmtMoney(insAnnual)} should be reserved for as well.`);

    const nextSteps = [
      "Review your current monthly budget and savings reserves.",
      "Get a verified pre-approval to lock in accurate rates for your scenario.",
    ];
    if (loanType === "conventional" && downPct < 20 && downPct >= min) {
      nextSteps.push(`Ask about down payment assistance programs — increasing your down payment to 20% would eliminate your ${fmtMoney(scenario.monthlyMI)}/mo PMI.`);
    } else {
      nextSteps.push("Explore down payment assistance programs available in Arizona, if applicable.");
    }
    nextSteps.push("Contact a Mortgage Brothers loan officer to review your options and confirm eligibility.");

    return { financial, risk, nextSteps };
  }, [scenario, monthlyTax, monthlyIns, monthlyHoa, totalMonthly, downPct, min, loanType, frontStatus, backStatus, frontRatio, backRatio, taxAnnual, insAnnual, alreadyAt20, monthlySavings, monthsToReach20, target20Dollar, requiredAt20, savingsShortfall]);

  /* ---- Scenario comparison table ---- */
  const scenarioRows = useMemo(() => {
    const checkpoints = SCENARIO_CHECKPOINTS[loanType];
    let closest = checkpoints[0], closestDiff = Infinity;
    checkpoints.forEach((cp) => {
      const diff = Math.abs(cp - downPct);
      if (diff < closestDiff) { closestDiff = diff; closest = cp; }
    });
    return checkpoints.map((pct) => {
      const s = computeScenario(homePrice, pct, interestRate, loanTerm, loanType, creditScore);
      const monthly = s.pi + taxAnnual / 12 + insAnnual / 12 + hoaFees + s.monthlyMI;
      return { pct, downDollar: s.downDollar, loanAmount: s.loanAmount, monthly, isCurrent: pct === closest };
    });
  }, [loanType, downPct, homePrice, interestRate, loanTerm, creditScore, taxAnnual, insAnnual, hoaFees]);

  return (
    <div style={{ background: C.paper, color: C.ink, fontFamily: SANS, fontSize: 15, lineHeight: 1.5, padding: "28px 16px 80px", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 22, paddingBottom: 18, borderBottom: `2px solid ${C.green}` }}>
          <h1 style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 28, margin: 0, color: C.greenDeep, letterSpacing: "-0.01em" }}>
            Down Payment Calculator
          </h1>
          <span style={{ fontFamily: MONO, fontSize: 11, textTransform: "uppercase", letterSpacing: ".08em", color: C.inkSoft, background: C.greenWash, border: `1px solid ${C.line}`, padding: "5px 10px", borderRadius: 99 }}>
            Arizona · Mortgage Brothers
          </span>
        </div>

        {/* Down Payment Milestones — bold, high-visibility centerpiece, full width at the very top */}
        <div style={{
          background: `linear-gradient(135deg, ${C.greenWash} 0%, #ffffff 55%)`,
          border: `2px solid ${C.greenBright}`,
          borderRadius: 12,
          padding: "16px 20px 18px",
          marginBottom: 18,
          boxShadow: "0 4px 18px rgba(58,125,30,0.12)",
        }}>
          <h3 style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 700, margin: "0 0 2px", color: C.greenDeep }}>Down Payment Milestones</h3>
          <p style={{ fontSize: 12, color: C.inkSoft, margin: "0 0 10px" }}>
            Where your {fmtPct(downPct)} down payment stands against the key thresholds for a {loanType.toUpperCase()} loan.
          </p>

          <MilestoneBar loanType={loanType} min={min} downPct={downPct} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10, marginTop: 12, marginBottom: 12 }}>
            <MilestoneStat label={`${loanType.toUpperCase()} Minimum`} value={fmtPct(min, 1)} note="lowest down payment allowed" />
            <MilestoneStat label="20% Down" value="No PMI" note="eliminates monthly mortgage insurance on Conventional" highlight={downPct >= 20} />
            {loanType === "conventional" && (
              <MilestoneStat label="25%+ Down" value="Best Rates" note="Conventional pricing typically improves at this tier" highlight={downPct >= 25} />
            )}
          </div>

        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}
          className="dpc-grid"
        >
          {/* ============ INPUT COLUMN ============ */}
          <div>
            <Panel number={1} title="Your Down Payment Savings">
              <p style={{ fontSize: 13, color: C.inkSoft, margin: "-6px 0 14px", lineHeight: 1.5 }}>
                How much have you saved for your down payment?
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <Field label="Amount Saved ($)">
                  <input className="dpc-input" style={inputStyle} inputMode="numeric" value={downPaymentDollarText}
                    onChange={(e) => onDownPaymentDollarChange(e.target.value)}
                    onBlur={() => setDownPaymentDollarText(downPaymentDollar.toLocaleString("en-US"))} />
                </Field>
                <Field label="As % of Home Price">
                  <input className="dpc-input" style={inputStyle} inputMode="decimal" value={downPaymentPercentText}
                    onChange={(e) => onDownPaymentPercentChange(e.target.value)} />
                </Field>
              </div>
              <SliderRow min={0} max={100} step={0.5} value={downPct}
                onChange={(v) => onDownPaymentPercentChange(String(v))}
                minLabel="0%" maxLabel="100%" />
              {downPct < min && (
                <div style={{ fontSize: 11.5, marginTop: 4, fontWeight: 600, color: C.amber }}>
                  Below the {loanType.toUpperCase()} minimum of {fmtPct(min, 1)} ({fmtMoney(homePrice * (min / 100))}). Results below use your entered amount.
                </div>
              )}
              <div style={{ marginTop: 14 }}>
                <Field label="Monthly Savings Amount ($)" hint="How much you're setting aside per month toward this purchase.">
                  <input className="dpc-input" style={inputStyle} inputMode="numeric" value={monthlySavingsText}
                    onChange={(e) => setMonthlySavingsText(e.target.value)}
                    onBlur={() => setMonthlySavingsText(monthlySavings.toLocaleString("en-US"))} />
                </Field>
              </div>
            </Panel>

            <Panel number={2} title="Property Information">
              <Field label="Home Price ($)" hint="Total purchase price agreed with the seller.">
                <input className="dpc-input" style={inputStyle} inputMode="numeric" value={homePriceText}
                  onChange={(e) => onHomePriceChange(e.target.value)}
                  onBlur={() => setHomePriceText(homePrice.toLocaleString("en-US"))} />
                <SliderRow min={50000} max={2000000} step={5000} value={homePrice}
                  onChange={(v) => onHomePriceChange(String(v))}
                  minLabel="$50k" maxLabel="$2M" />
              </Field>
            </Panel>

            <Panel number={3} title="Financial Profile">
              <Field label="Annual Income ($)" hint="Tip: click into the field and use the ↑/↓ arrow keys to adjust by $1,000.">
                <input className="dpc-input" style={inputStyle} inputMode="numeric" value={annualIncomeText}
                  onChange={(e) => setAnnualIncomeText(e.target.value)}
                  onBlur={() => setAnnualIncomeText(annualIncome.toLocaleString("en-US"))}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                      e.preventDefault();
                      const delta = e.key === "ArrowUp" ? 1000 : -1000;
                      const next = Math.max(0, annualIncome + delta);
                      setAnnualIncomeText(next.toLocaleString("en-US"));
                    }
                  }} />
                <SliderRow min={0} max={500000} step={1000} value={annualIncome}
                  onChange={(v) => setAnnualIncomeText(Math.round(v).toLocaleString("en-US"))}
                  minLabel="$0" maxLabel="$500k" />
              </Field>
              <Field label="Monthly Debt Payments ($)" hint="Excludes your future housing payment.">
                <input className="dpc-input" style={inputStyle} inputMode="numeric" value={monthlyDebtText}
                  onChange={(e) => setMonthlyDebtText(e.target.value)}
                  onBlur={() => setMonthlyDebtText(monthlyDebt.toLocaleString("en-US"))} />
                <SliderRow min={0} max={5000} step={25} value={monthlyDebt}
                  onChange={(v) => setMonthlyDebtText(Math.round(v).toLocaleString("en-US"))}
                  minLabel="$0" maxLabel="$5k" />
              </Field>
              <Field label="Credit Score">
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <input className="dpc-input" style={{ ...inputStyle, width: 84, flex: "0 0 84px", textAlign: "center" }}
                    inputMode="numeric" value={creditScoreText}
                    onChange={(e) => setCreditScoreText(e.target.value)}
                    onBlur={() => setCreditScoreText(String(creditScore))} />
                  <span style={{ fontSize: 12.5, color: C.inkSoft }}>({creditScoreLabel(creditScore)})</span>
                </div>
                <SliderRow min={600} max={850} step={1} value={creditScore}
                  onChange={(v) => setCreditScoreText(String(Math.round(v)))}
                  minLabel="600" maxLabel="850" />
              </Field>
            </Panel>

            <Panel number={4} title="Loan Details">
              <Field label="Loan Type">
                <select className="dpc-input" style={inputStyle} value={loanType} onChange={(e) => setLoanType(e.target.value)}>
                  <option value="conventional">Conventional Loan</option>
                  <option value="fha">FHA Loan</option>
                  <option value="va">VA Loan</option>
                  <option value="usda">USDA Loan</option>
                </select>
              </Field>
              <div style={{ background: C.greenWash, border: "1px solid #cfe0c2", borderRadius: 8, padding: "10px 12px", fontSize: 12.5, color: C.greenDeep, marginTop: -2, marginBottom: 14 }}>
                {LOAN_TYPE_NOTES[loanType]}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <Field label="Interest Rate (%)">
                  <input className="dpc-input" style={inputStyle} inputMode="decimal" value={interestRateText}
                    onChange={(e) => setInterestRateText(e.target.value)}
                    onBlur={() => setInterestRateText(interestRate.toFixed(3))} />
                  <SliderRow min={2} max={12} step={0.125} value={interestRate}
                    onChange={(v) => setInterestRateText(v.toFixed(3))}
                    minLabel="2%" maxLabel="12%" />
                </Field>
                <Field label="Loan Term (Years)">
                  <input className="dpc-input" style={inputStyle} type="number" min={1} max={30} step={1} value={loanTerm}
                    onChange={(e) => setLoanTerm(normalizeTerm(e.target.value))} />
                </Field>
              </div>
              <div style={{ fontFamily: MONO, fontWeight: 700, color: C.greenDeep, fontSize: 14, marginTop: 6 }}>
                {loanTerm}-year term · {loanTerm * 12} monthly payments
              </div>
            </Panel>

            <Panel number={5} title="Additional Costs">
              <Field label="Property Tax Rate (%)" hint={`Default for this home price: ${fmtPct(taxDefaultRate)} (${fmtMoney(taxDefaultDollar)}/yr)`}>
                <input className="dpc-input" style={inputStyle} inputMode="decimal" placeholder="Auto-estimated from home price"
                  value={propertyTaxRateText} onChange={(e) => setPropertyTaxRateText(e.target.value)} />
              </Field>
              <Field label="Annual Home Insurance ($)" hint={`Default for this home price: ${fmtMoney(insDefault)}/yr`}>
                <input className="dpc-input" style={inputStyle} inputMode="numeric" placeholder="Auto-estimated from home price"
                  value={homeInsuranceText} onChange={(e) => setHomeInsuranceText(e.target.value)} />
              </Field>
              <Field label="Monthly HOA Fees ($)">
                <input className="dpc-input" style={inputStyle} inputMode="numeric" value={hoaFeesText}
                  onChange={(e) => setHoaFeesText(e.target.value)}
                  onBlur={() => setHoaFeesText(hoaFees.toLocaleString("en-US"))} />
              </Field>
            </Panel>
          </div>

          {/* ============ RESULTS COLUMN ============ */}
          <div>
            <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 10, padding: "20px 22px 22px", marginBottom: 18 }}>
              <h2 style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 600, margin: "0 0 14px", color: C.greenDeep }}>Your Results</h2>

              <div style={{ marginBottom: 16 }}>
                <h3 style={{ fontFamily: MONO, fontSize: 11, textTransform: "uppercase", letterSpacing: ".07em", color: C.inkSoft, margin: "0 0 8px" }}>Initial Costs</h3>
                <ResultLine label="Required Savings" value={fmtMoney(requiredSavings)} />
                <ResultLine label="Down Payment" value={`${fmtMoney(downPaymentDollar)} (${fmtPct(downPct)})`} />
                <ResultLine label="Estimated Closing Costs" value={fmtMoney(closingCosts)} />
                {scenario.upfrontFee > 0 && <ResultLine label={upfrontFeeLabel} value={fmtMoney(scenario.upfrontFee)} />}
              </div>

              <div style={{ marginBottom: 16 }}>
                <h3 style={{ fontFamily: MONO, fontSize: 11, textTransform: "uppercase", letterSpacing: ".07em", color: C.inkSoft, margin: "0 0 8px" }}>Loan Details</h3>
                <ResultLine label="Total Loan Amount" value={fmtMoney(scenario.loanAmount)} />
                <ResultLine label="Interest Rate" value={fmtPct(interestRate, 3)} />
                <ResultLine label="Loan Term" value={`${loanTerm} years`} />
                <ResultLine label="Loan-to-Value (LTV)" value={fmtPct(scenario.ltv)} />
              </div>

              <div style={{ marginBottom: 16 }}>
                <h3 style={{ fontFamily: MONO, fontSize: 11, textTransform: "uppercase", letterSpacing: ".07em", color: C.inkSoft, margin: "0 0 8px" }}>Monthly Payments</h3>
                <ResultLine label="Principal & Interest" value={fmtMoney(scenario.pi)} />
                <ResultLine label="Property Tax" value={fmtMoney(monthlyTax)} />
                <ResultLine label="Insurance" value={fmtMoney(monthlyIns)} />
                <ResultLine label="HOA" value={fmtMoney(monthlyHoa)} />
                <ResultLine label={miLabelDisplay} value={fmtMoney(scenario.monthlyMI)} />
                <ResultLine label="Total Monthly Payment" value={fmtMoney(totalMonthly)} total />
              </div>

              <div>
                <h3 style={{ fontFamily: MONO, fontSize: 11, textTransform: "uppercase", letterSpacing: ".07em", color: C.inkSoft, margin: "0 0 8px" }}>Affordability Metrics</h3>
                <RatioLine label="Housing Cost Ratio (Front-End)" ratio={frontRatio} threshold={40} status={frontStatus} />
                <div style={{ height: 12 }} />
                <RatioLine label="Debt-to-Income Ratio (Back-End)" ratio={backRatio} threshold={48} status={backStatus} />
              </div>
            </div>

            {/* Scenario table — the centerpiece of this calculator */}
            <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 10, padding: "20px 22px 22px", marginBottom: 18 }}>
              <h3 style={{ fontFamily: MONO, fontSize: 11, textTransform: "uppercase", letterSpacing: ".07em", color: C.inkSoft, margin: "0 0 12px" }}>Down Payment Scenarios Comparison</h3>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr>
                    {["Down %", "Down Payment ($)", "Loan Amount ($)", "Monthly Payment ($)"].map((h, i) => (
                      <th key={h} style={{ textAlign: i === 0 ? "left" : "right", fontFamily: MONO, fontSize: 10.5, textTransform: "uppercase", letterSpacing: ".04em", color: C.inkSoft, padding: "6px 8px", borderBottom: `2px solid ${C.line}` }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {scenarioRows.map((r) => (
                    <tr key={r.pct} style={{ background: r.isCurrent ? C.greenWash : "transparent", fontWeight: r.isCurrent ? 700 : 400 }}>
                      <td style={{ textAlign: "left", padding: "7px 8px", borderBottom: `1px solid ${C.line}`, fontVariantNumeric: "tabular-nums" }}>{fmtPct(r.pct, 2)}</td>
                      <td style={{ textAlign: "right", padding: "7px 8px", borderBottom: `1px solid ${C.line}`, fontVariantNumeric: "tabular-nums" }}>{fmtMoney(r.downDollar)}</td>
                      <td style={{ textAlign: "right", padding: "7px 8px", borderBottom: `1px solid ${C.line}`, fontVariantNumeric: "tabular-nums" }}>{fmtMoney(r.loanAmount)}</td>
                      <td style={{ textAlign: "right", padding: "7px 8px", borderBottom: `1px solid ${C.line}`, fontVariantNumeric: "tabular-nums" }}>{fmtMoney(r.monthly)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Donut chart */}
            <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 10, padding: "20px 22px 22px", marginBottom: 18 }}>
              <h3 style={{ fontFamily: MONO, fontSize: 11, textTransform: "uppercase", letterSpacing: ".07em", color: C.inkSoft, margin: "0 0 12px" }}>Monthly Payment Distribution</h3>
              <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                <svg width={150} height={150} viewBox="0 0 150 150">
                  {chart.arcs.map((a, i) => (
                    <circle key={i} cx={chart.CX} cy={chart.CY} r={chart.R} fill="none" stroke={a.color} strokeWidth={chart.STROKE}
                      strokeDasharray={`${a.len} ${chart.circumference - a.len}`} strokeDashoffset={a.dashOffset}
                      transform={`rotate(-90 ${chart.CX} ${chart.CY})`} />
                  ))}
                  <circle cx={chart.CX} cy={chart.CY} r={chart.R - chart.STROKE / 2 - 4} fill={C.panel} />
                  <text x={chart.CX} y={chart.CY - 3} textAnchor="middle" fontSize={15} fontWeight={700} fill={C.ink} fontFamily={SANS}>{fmtMoney(totalMonthly)}</text>
                  <text x={chart.CX} y={chart.CY + 14} textAnchor="middle" fontSize={9.5} fill={C.inkSoft} fontFamily={SANS}>per month</text>
                </svg>
                <div style={{ flex: 1, minWidth: 160 }}>
                  {chart.arcs.map((a, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, padding: "4px 0" }}>
                      <span style={{ width: 10, height: 10, borderRadius: 3, flexShrink: 0, background: a.color }} />
                      <span>{a.label}</span>
                      <span style={{ marginLeft: "auto", fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{a.pct.toFixed(1)}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Insights — last section, below all charts/tables */}
            <InsightsPanel
              groups={[
                { title: "Financial Analysis", color: C.greenDeep, bullets: insights.financial },
                { title: "Risk Assessment", color: C.amber, bullets: insights.risk },
              ]}
              nextSteps={insights.nextSteps}
            />

            <p style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 18, lineHeight: 1.5 }}>
              This calculator is provided for informational purposes only and should not be considered financial advice. The calculations are estimates based on the information you provide and may not reflect your actual down payment requirements. Results are intended as a guide to help with your home buying planning.
            </p>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .dpc-grid { grid-template-columns: 1fr !important; }
        }
        .dpc-input {
          transition: border-color .15s, box-shadow .15s, background .15s;
        }
        .dpc-input:hover {
          border-color: #a9b59c;
        }
        .dpc-input:focus {
          background: #ffffff;
          border-color: ${C.greenBright};
          box-shadow: 0 0 0 3px ${C.greenWash};
        }
      `}</style>
    </div>
  );
}

function Badge({ status }) {
  const text = status === "pass" ? "within guideline" : status === "warn" ? "borderline" : "above guideline";
  return (
    <span style={{ display: "inline-block", fontFamily: MONO, fontSize: 10.5, textTransform: "uppercase", letterSpacing: ".05em", padding: "2px 7px", borderRadius: 99, marginLeft: 6, background: STATUS_BG[status], color: STATUS_COLOR[status] }}>
      {text}
    </span>
  );
}
function RatioLine({ label, ratio, threshold, status }) {
  const pct = Math.min(100, (ratio / threshold) * 100);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: 14 }}>
        <span style={{ color: C.inkSoft }}>{label}</span>
        <span style={{ fontWeight: 700, color: STATUS_COLOR[status] }}>{fmtPct(ratio)} (limit {threshold}%)</span>
      </div>
      <div style={{ height: 6, background: C.line, borderRadius: 4, overflow: "hidden", marginTop: 4 }}>
        <div style={{ height: "100%", borderRadius: 4, width: `${pct}%`, background: STATUS_COLOR[status] === C.greenDeep ? C.greenBright : STATUS_COLOR[status] }} />
      </div>
    </div>
  );
}

function MilestoneBar({ loanType, min, downPct }) {
  const showBestRate = loanType === "conventional";
  const scaleMax = Math.max(30, downPct + 5);
  const pctOf = (v) => Math.min(100, Math.max(0, (v / scaleMax) * 100));

  const markers = [
    { value: min, label: "Min", color: C.amber },
    { value: 20, label: "20%", color: C.green },
  ];
  if (showBestRate) markers.push({ value: 25, label: "25%", color: C.greenDeep });

  return (
    <div>
      <div style={{ position: "relative", height: 8, background: "#fff", border: `1px solid #cfe0c2`, borderRadius: 99, marginTop: 16, marginBottom: 18 }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${pctOf(downPct)}%`, background: C.greenBright, borderRadius: 99, transition: "width .2s" }} />
        {markers.map((m) => (
          <div key={m.label} style={{ position: "absolute", left: `${pctOf(m.value)}%`, top: -14, transform: "translateX(-50%)", textAlign: "center" }}>
            <div style={{ fontSize: 9.5, fontFamily: MONO, fontWeight: 700, color: m.color, whiteSpace: "nowrap" }}>{m.label}</div>
            <div style={{ width: 2, height: 20, background: m.color, margin: "1px auto 0" }} />
          </div>
        ))}
        <div style={{ position: "absolute", left: `${pctOf(downPct)}%`, top: -2, transform: "translate(-50%, -100%)", textAlign: "center" }}>
          <div style={{ fontSize: 10.5, fontFamily: MONO, fontWeight: 700, color: C.ink, background: "#fff", border: `1.5px solid ${C.ink}`, borderRadius: 6, padding: "1px 5px", whiteSpace: "nowrap" }}>
            You: {fmtPct(downPct)}
          </div>
        </div>
      </div>
    </div>
  );
}

function MilestoneStat({ label, value, note, highlight }) {
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

function CompactLine({ label, value, emphasize }) {
  return (
    <div style={{ padding: "4px 0" }}>
      <div style={{ fontSize: 11, color: C.inkSoft }}>{label}</div>
      <div style={{ fontFamily: MONO, fontWeight: 700, fontSize: emphasize ? 16 : 13.5, color: emphasize ? C.greenDeep : C.ink }}>{value}</div>
    </div>
  );
}

export default function DownPaymentCalculator1Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[72px]">
        <DownPaymentCalculator />
      </main>
      <Footer />
    </div>
  );
}
