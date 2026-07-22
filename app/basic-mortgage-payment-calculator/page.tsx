"use client";

import { useMemo, useState, type ReactNode } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { InteractivePieChart, BasicPaymentOverTimeChart } from "../component/InteractiveCharts";

/* ============================================================
   DESIGN TOKENS (matches the suite's Rent vs. Buy / basic-calc
   palette, with the studio's field-contrast standard applied)
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
  slate: "#5b6b72",
  slatePale: "#e8edf0",
  danger: "#a3402f",
};
const SERIF = '"Source Serif 4", Georgia, serif';
const SANS = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
const MONO = "'Roboto Mono', monospace";

const fieldBg = "#eef1ea";
const fieldBorder = "#c3ccbb";

/* ============================================================
   TYPES
============================================================ */
type DpMode = "pct" | "amt";

interface CalcState {
  homePrice: number;
  dpMode: DpMode;
  dpAmount: number;
  dpPercent: number;
  rate: number;
  termRaw: number;
}

interface ScheduleRow {
  n: number;
  beginningBalance: number;
  paymentAmount: number;
  principalPaid: number;
  interestPaid: number;
  endingBalance: number;
  cumulativePrincipal: number;
  cumulativeInterest: number;
}

interface CalcErrors {
  homePrice?: boolean;
  rate?: boolean;
  dp?: boolean;
}

interface CalcResult {
  valid: boolean;
  errors: CalcErrors;
  homePrice: number;
  dpAmount: number;
  dpPercent: number;
  loanAmount: number;
  termYears: number;
  numPayments: number;
  monthlyPayment: number;
  firstMonthPrincipal: number;
  firstMonthInterest: number;
  totalPrincipal: number;
  totalInterest: number;
  totalPayments: number;
  overallCost: number;
  schedule: ScheduleRow[];
  rate: number;
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
function fmtMoneyFull(n: number): string {
  if (!isFinite(n)) n = 0;
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
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
   PROPERTY TAX / INSURANCE / PMI TABLES (ported from the Down
   Payment Calculator, so estimates match across the suite)
============================================================ */
const PROPERTY_TAX_TABLE: number[][] = [
  [100000, 1000], [150000, 1065], [200000, 1134], [250000, 1208], [300000, 1286],
  [350000, 1370], [400000, 1459], [450000, 1554], [500000, 1756], [550000, 1984],
  [600000, 2242], [650000, 2534], [700000, 2863], [750000, 3149], [800000, 3370],
  [850000, 3606], [900000, 3858], [950000, 4128], [1000000, 4417], [1050000, 4638],
  [1100000, 4870], [1150000, 5114], [1200000, 5267], [1250000, 5425], [1300000, 5588],
  [1350000, 5755], [1400000, 5928], [1450000, 6047], [1500000, 6167], [1550000, 6291],
  [1600000, 6417], [1650000, 6545], [1700000, 6676], [1750000, 6809], [1800000, 6946],
  [1850000, 7084], [1900000, 7226], [1950000, 7371], [10000000, 7518],
];
const INSURANCE_TABLE: number[][] = [
  [100000, 1000], [150000, 1040], [200000, 1082], [250000, 1125], [300000, 1170],
  [350000, 1217], [400000, 1265], [450000, 1316], [500000, 1369], [550000, 1423],
  [600000, 1480], [650000, 1539], [700000, 1601], [750000, 1665], [800000, 1732],
  [850000, 1801], [900000, 1873], [950000, 1948], [1000000, 2026], [1050000, 2107],
  [1100000, 2191], [1150000, 2279], [1200000, 2370], [1250000, 2465], [1300000, 2563],
  [1350000, 2666], [1400000, 2772], [1450000, 2883], [1500000, 2999], [1550000, 3119],
  [1600000, 3243], [1650000, 3373], [1700000, 3508], [1750000, 3648], [1800000, 3794],
  [1850000, 3946], [1900000, 4104], [1950000, 4268], [10000000, 4439],
];
function lookupBandTable(table: number[][], value: number): number {
  for (const [upTo, val] of table) {
    if (value <= upTo) return val;
  }
  return table[table.length - 1][1];
}
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
function pmiRate(creditScore: number, downPct: number): number {
  if (downPct >= 20) return 0;
  const row = PMI_TABLE[creditScoreBand(creditScore)];
  if (downPct < 5) return row[0];
  if (downPct < 10) return row[1];
  if (downPct < 15) return row[2];
  return row[3];
}

/* ============================================================
   CORE CALCULATION (ported 1:1)
============================================================ */
function compute(s: CalcState): CalcResult {
  const errors: CalcErrors = {};
  let valid = true;

  let homePrice = s.homePrice;
  if (!isFinite(homePrice) || homePrice <= 0) {
    valid = false;
    errors.homePrice = true;
    homePrice = 0;
  }

  let dpAmount: number;
  let dpPercent: number;
  if (s.dpMode === "pct") {
    let pct = s.dpPercent;
    if (!isFinite(pct)) pct = 0;
    pct = Math.max(0, Math.min(100, pct));
    dpAmount = homePrice * pct / 100;
    dpPercent = pct;
  } else {
    let amt = s.dpAmount;
    if (!isFinite(amt)) amt = 0;
    amt = Math.max(0, homePrice > 0 ? Math.min(homePrice, amt) : 0);
    dpAmount = amt;
    dpPercent = homePrice > 0 ? (amt / homePrice * 100) : 0;
  }

  let rate = s.rate;
  if (!isFinite(rate) || rate < 0) {
    valid = false;
    errors.rate = true;
    rate = 0;
  }

  const termYears = clampTerm(s.termRaw);
  const n = termYears * 12;
  const r = rate / 100 / 12;

  const loanAmount = Math.max(0, homePrice - dpAmount);

  let monthlyPayment: number;
  if (loanAmount === 0) { monthlyPayment = 0; }
  else if (r === 0) { monthlyPayment = loanAmount / n; }
  else { const factor = Math.pow(1 + r, n); monthlyPayment = loanAmount * (r * factor) / (factor - 1); }

  const firstMonthInterest = loanAmount > 0 ? loanAmount * r : 0;
  const firstMonthPrincipal = loanAmount > 0 ? (monthlyPayment - firstMonthInterest) : 0;

  const schedule: ScheduleRow[] = [];
  let balance = loanAmount;
  let cumPrincipal = 0, cumInterest = 0;
  let totalInterest = 0, totalPayments = 0;

  if (loanAmount > 0) {
    for (let i = 1; i <= n; i++) {
      const beginningBalance = balance;
      const interestPaid = beginningBalance * r;
      let paymentAmount: number, principalPaid: number;

      if (i === n) {
        principalPaid = beginningBalance;
        paymentAmount = principalPaid + interestPaid;
      } else {
        paymentAmount = monthlyPayment;
        principalPaid = paymentAmount - interestPaid;
        if (principalPaid > beginningBalance) {
          principalPaid = beginningBalance;
          paymentAmount = principalPaid + interestPaid;
        }
      }

      let endingBalance = beginningBalance - principalPaid;
      if (endingBalance < 0) endingBalance = 0;
      if (i === n) endingBalance = 0;

      cumPrincipal += principalPaid;
      cumInterest += interestPaid;
      totalInterest += interestPaid;
      totalPayments += paymentAmount;

      schedule.push({
        n: i, beginningBalance, paymentAmount, principalPaid, interestPaid,
        endingBalance, cumulativePrincipal: cumPrincipal, cumulativeInterest: cumInterest,
      });

      balance = endingBalance;
    }
  }

  const overallCost = dpAmount + totalPayments;

  if (dpAmount > homePrice + 0.001 && homePrice > 0) {
    errors.dp = true;
  }

  return {
    valid,
    errors,
    homePrice,
    dpAmount,
    dpPercent,
    loanAmount,
    termYears,
    numPayments: n,
    monthlyPayment,
    firstMonthPrincipal,
    firstMonthInterest,
    totalPrincipal: cumPrincipal,
    totalInterest,
    totalPayments,
    overallCost,
    schedule,
    rate,
  };
}

/* ============================================================
   UI PRIMITIVES
============================================================ */
function Field({ label, children, error, hint }: { label: string; children: ReactNode; error?: string | null; hint?: string }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={{ display: "block", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".05em", color: C.inkSoft, marginBottom: 7 }}>
        {label}
      </label>
      {children}
      {hint && <div style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 6 }}>{hint}</div>}
      {error && <div style={{ fontSize: 12, color: C.danger, marginTop: 6 }}>{error}</div>}
    </div>
  );
}
const baseInput: React.CSSProperties = {
  width: "100%",
  border: `1.5px solid ${fieldBorder}`,
  borderRadius: 8,
  fontFamily: MONO,
  fontSize: 15,
  fontWeight: 500,
  color: C.ink,
  background: fieldBg,
  outline: "none",
  boxSizing: "border-box",
  boxShadow: "inset 0 1px 2px rgba(28,42,23,0.06)",
};
function MoneyInput({ value, onChange, onBlur }: { value: string; onChange: (v: string) => void; onBlur: () => void }) {
  return (
    <div style={{ position: "relative" }}>
      <span style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: C.inkSoft, fontWeight: 600, fontSize: 14, pointerEvents: "none" }}>$</span>
      <input className="dpc-input" style={{ ...baseInput, padding: "10px 12px 10px 26px" }} inputMode="decimal" value={value}
        onChange={(e) => onChange(e.target.value)} onBlur={onBlur} />
    </div>
  );
}
function RateInput({ value, onChange, onBlur }: { value: string; onChange: (v: string) => void; onBlur: () => void }) {
  return (
    <div style={{ position: "relative" }}>
      <input className="dpc-input" style={{ ...baseInput, padding: "10px 26px 10px 12px" }} inputMode="decimal" value={value}
        onChange={(e) => onChange(e.target.value)} onBlur={onBlur} />
      <span style={{ position: "absolute", right: 11, top: "50%", transform: "translateY(-50%)", color: C.inkSoft, fontWeight: 600, fontSize: 14, pointerEvents: "none" }}>%</span>
    </div>
  );
}
function MiniSlider({ min, max, step, value, onChange }: { min: number; max: number; step: number; value: number; onChange: (v: number) => void }) {
  const safe = isFinite(value) ? Math.min(max, Math.max(min, value)) : min;
  return (
    <input type="range" min={min} max={max} step={step} value={safe}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      style={{ WebkitAppearance: "none", width: "100%", height: 4, borderRadius: 2, background: C.line, marginTop: 10, accentColor: C.green }} />
  );
}
function StatBox({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div style={{ background: C.paper, border: `1px solid ${C.line}`, borderRadius: 8, padding: "14px 14px" }}>
      <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".04em", color: C.inkSoft, fontWeight: 600, marginBottom: 6 }}>{label}</div>
      <div style={{ fontFamily: MONO, fontSize: 17, fontWeight: 600, color: color || C.ink }}>{value}</div>
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
export default function BasicMortgageCalculator() {
  const [homePriceText, setHomePriceText] = useState("400,000");
  const [dpMode, setDpMode] = useState<DpMode>("pct");
  const [dpAmountText, setDpAmountText] = useState("80,000");
  const [dpPercentText, setDpPercentText] = useState("20");
  const [rateText, setRateText] = useState("6.5");
  const [termRaw, setTermRaw] = useState(30);
  const [showAmort, setShowAmort] = useState(false);
  const [creditScoreText, setCreditScoreText] = useState("760");
  const [includeExtras, setIncludeExtras] = useState(false);
  const [propertyTaxRateText, setPropertyTaxRateText] = useState("");
  const [homeInsuranceText, setHomeInsuranceText] = useState("");

  const homePrice = toNumber(homePriceText);

  /* ---- down payment cross-sync ---- */
  function applyPercent(rawPct: number) {
    let pct = isFinite(rawPct) ? rawPct : 0;
    pct = Math.max(0, Math.min(100, pct));
    setDpPercentText((Math.round(pct * 10) / 10).toString());
    const amt = (isFinite(homePrice) && homePrice > 0) ? homePrice * pct / 100 : 0;
    setDpAmountText(fmtMoney(amt));
  }
  function onDpPercentChange(text: string) {
    setDpMode("pct");
    setDpPercentText(text);
    const pctVal = toNumber(text);
    const amt = (isFinite(homePrice) && homePrice > 0 && isFinite(pctVal)) ? homePrice * pctVal / 100 : 0;
    setDpAmountText(fmtMoney(amt));
  }
  function onDpPercentBlur() { applyPercent(toNumber(dpPercentText)); }
  function onDpSliderChange(v: number) { setDpMode("pct"); applyPercent(v); }
  function onDpAmountChange(text: string) {
    setDpMode("amt");
    setDpAmountText(text);
    let amt = toNumber(text);
    if (!isFinite(amt)) amt = 0;
    amt = Math.max(0, (isFinite(homePrice) && homePrice > 0) ? Math.min(homePrice, amt) : 0);
    const pct = (isFinite(homePrice) && homePrice > 0) ? Math.max(0, Math.min(100, amt / homePrice * 100)) : 0;
    setDpPercentText((Math.round(pct * 10) / 10).toString());
  }
  function onHomePriceChange(text: string) {
    setHomePriceText(text);
    const newPrice = toNumber(text);
    if (dpMode === "pct") {
      const pct = toNumber(dpPercentText);
      const amt = (isFinite(newPrice) && isFinite(pct)) ? newPrice * pct / 100 : 0;
      setDpAmountText(fmtMoney(amt));
    } else {
      const amt = toNumber(dpAmountText);
      const pct = (isFinite(newPrice) && newPrice > 0 && isFinite(amt)) ? Math.max(0, Math.min(100, amt / newPrice * 100)) : 0;
      setDpPercentText((Math.round(pct * 10) / 10).toString());
    }
  }

  const stateObj: CalcState = {
    homePrice,
    dpMode,
    dpAmount: toNumber(dpAmountText),
    dpPercent: toNumber(dpPercentText),
    rate: toNumber(rateText),
    termRaw,
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const res = useMemo(() => compute(stateObj), Object.values(stateObj));
  const termYears = res.termYears;

  const creditScoreRaw = parseInt(creditScoreText, 10);
  const creditScore = isFinite(creditScoreRaw) ? Math.min(850, Math.max(600, creditScoreRaw)) : 760;

  const taxDefaultDollar = lookupBandTable(PROPERTY_TAX_TABLE, homePrice);
  const taxDefaultRate = homePrice > 0 ? Math.round((taxDefaultDollar / homePrice) * 10000) / 100 : 0;
  const insDefault = lookupBandTable(INSURANCE_TABLE, homePrice);

  const propertyTaxManual = propertyTaxRateText.trim() === "" ? null : toNumber(propertyTaxRateText);
  const insuranceManual = homeInsuranceText.trim() === "" ? null : toNumber(homeInsuranceText);
  const taxAnnual = propertyTaxManual !== null ? homePrice * (propertyTaxManual / 100) : taxDefaultDollar;
  const insAnnual = insuranceManual !== null ? insuranceManual : insDefault;
  const monthlyTax = includeExtras ? taxAnnual / 12 : 0;
  const monthlyIns = includeExtras ? insAnnual / 12 : 0;

  const monthlyMI = includeExtras && res.dpPercent < 20 ? (res.loanAmount * (pmiRate(creditScore, res.dpPercent) / 100)) / 12 : 0;

  const totalMonthlyPayment = res.monthlyPayment + monthlyTax + monthlyIns + monthlyMI;

  const insights = useMemo(() => {
    const breakdown: string[] = [];
    breakdown.push(`Your principal & interest payment is ${fmtMoneyFull(res.monthlyPayment)}/month over a ${res.termYears}-year term.`);
    breakdown.push(`In your first payment, ${fmtMoneyFull(res.firstMonthPrincipal)} goes to principal and ${fmtMoneyFull(res.firstMonthInterest)} goes to interest.`);
    breakdown.push(`Over the life of the loan you'll pay ${fmtMoney(res.totalInterest)} in total interest — that's ${res.loanAmount > 0 ? ((res.totalInterest / res.loanAmount) * 100).toFixed(1) : "0"}% of the amount financed.`);
    breakdown.push(`Overall cost (down payment + all payments): ${fmtMoney(res.overallCost)}.`);

    const affordability: string[] = [];
    if (res.dpPercent < 20) {
      affordability.push(`Your down payment of ${res.dpPercent.toFixed(1)}% is below the 20% threshold that typically avoids monthly mortgage insurance on a conventional loan.`);
      if (monthlyMI > 0) {
        affordability.push(`Estimated PMI of ${fmtMoney(monthlyMI)}/mo is included above, based on your credit score — increasing your down payment to 20% would eliminate it.`);
      }
    } else {
      affordability.push(`Your down payment of ${res.dpPercent.toFixed(1)}% meets the 20% threshold that typically avoids monthly mortgage insurance on a conventional loan.`);
    }
    if (includeExtras) {
      affordability.push(`Your total monthly payment of ${fmtMoney(totalMonthlyPayment)} includes principal & interest, property tax, and homeowners insurance${monthlyMI > 0 ? ", plus estimated PMI" : ""} — HOA dues, if any, would be on top of that.`);
    } else {
      affordability.push(`This ${fmtMoney(res.monthlyPayment)}/mo figure is principal & interest only — turn on "Taxes, Insurance & PMI" to see your full estimated monthly payment.`);
    }
    if (res.rate >= 7) {
      affordability.push(`At ${res.rate.toFixed(3)}%, your rate is on the higher side — refinancing later if rates drop could meaningfully lower your payment.`);
    }

    const nextSteps: string[] = [
      "Review your monthly budget alongside this payment, plus taxes, insurance, and HOA dues.",
      "Get a verified pre-approval to lock in accurate rates for your scenario.",
    ];
    if (res.dpPercent < 20) {
      nextSteps.push("Explore down payment assistance programs available in Arizona.");
    }
    nextSteps.push("Contact a Mortgage Brothers loan officer to review your options and confirm eligibility.");

    return { breakdown, affordability, nextSteps };
  }, [res, monthlyTax, monthlyIns, monthlyMI, totalMonthlyPayment, includeExtras]);

  const extraCosts: [string, number][] = [
    ["Tax", monthlyTax],
    ["Insurance", monthlyIns],
    ["PMI", monthlyMI],
  ];

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
              Basic Mortgage Payment Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Adjust the inputs below to see your monthly payment, amortization schedule, and total cost breakdown — results update instantly.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "32px 20px 64px" }}>
        <div className="bmc-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
          {/* ============ INPUTS ============ */}
          <div className="bmc-sticky-panel">
          <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(28,42,23,0.06), 0 6px 20px rgba(28,42,23,0.05)", padding: 22, marginBottom: 20 }}>
            <h2 style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 600, margin: "0 0 16px" }}>Loan Details</h2>

            <Field label="Home Price" error={res.errors.homePrice ? "Enter a home price greater than $0." : null}>
              <MoneyInput value={homePriceText} onChange={onHomePriceChange}
                onBlur={() => { if (isFinite(homePrice) && homePrice > 0) setHomePriceText(fmtMoney(homePrice)); }} />
              <MiniSlider min={50000} max={3000000} step={5000} value={homePrice} onChange={(v) => onHomePriceChange(fmtMoney(v))} />
            </Field>

            <Field label="Down Payment" error={res.errors.dp ? "Down payment can't exceed the home price." : null}>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ flex: 1.4 }}>
                  <MoneyInput value={dpAmountText} onChange={onDpAmountChange}
                    onBlur={() => { const n = toNumber(dpAmountText); if (isFinite(n)) setDpAmountText(fmtMoney(n)); }} />
                </div>
                <div style={{ flex: 1, position: "relative" }}>
                  <input className="dpc-input" style={{ ...baseInput, padding: "10px 22px 10px 12px" }} inputMode="decimal" value={dpPercentText}
                    onChange={(e) => onDpPercentChange(e.target.value)} onBlur={onDpPercentBlur} />
                  <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", color: C.inkSoft, fontSize: 13, pointerEvents: "none" }}>%</span>
                </div>
              </div>
              <MiniSlider min={0} max={100} step={0.5} value={toNumber(dpPercentText)} onChange={onDpSliderChange} />
            </Field>

            <Field label="Annual Interest Rate" error={res.errors.rate ? "Enter a rate of 0% or higher." : null}>
              <RateInput value={rateText} onChange={setRateText}
                onBlur={() => { const n = toNumber(rateText); if (isFinite(n)) setRateText(n.toString()); }} />
              <MiniSlider min={0} max={15} step={0.125} value={toNumber(rateText)} onChange={(v) => setRateText(v.toString())} />
            </Field>

            <Field label="Loan Term">
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <input type="range" min={1} max={30} step={1} value={termRaw}
                  onChange={(e) => setTermRaw(parseFloat(e.target.value))}
                  style={{ WebkitAppearance: "none", flex: 1, height: 4, borderRadius: 2, background: C.line, accentColor: C.green }} />
                <div style={{ minWidth: 64, textAlign: "center", background: C.greenPale, color: C.greenDeep, fontFamily: MONO, fontWeight: 600, fontSize: 14, padding: "7px 8px", borderRadius: 7, border: "1px solid #d3e5c6" }}>
                  {termYears} {termYears === 1 ? "yr" : "yrs"}
                </div>
              </div>
              <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
                {[10, 15, 20, 30].map((t) => (
                  <button key={t} onClick={() => setTermRaw(t)}
                    style={{
                      fontFamily: SANS, fontSize: 12, fontWeight: 600, padding: "5px 10px", borderRadius: 6,
                      border: `1px solid ${clampTerm(termRaw) === t ? C.green : C.line}`,
                      background: clampTerm(termRaw) === t ? C.green : "#fff",
                      color: clampTerm(termRaw) === t ? "#fff" : C.inkSoft, cursor: "pointer",
                    }}>
                    {t} yr
                  </button>
                ))}
              </div>
            </Field>
          </div>

          <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(28,42,23,0.06), 0 6px 20px rgba(28,42,23,0.05)", padding: 22, marginTop: 20 }}>
            <h2 style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 600, margin: "0 0 4px" }}>Taxes, Insurance & PMI</h2>
            <p style={{ fontSize: 13, color: C.inkSoft, margin: "0 0 14px" }}>
              Do you also want to calculate property taxes, homeowners insurance, and mortgage insurance (PMI)?
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => setIncludeExtras(true)}
                style={{
                  flex: 1, fontFamily: SANS, fontSize: 13, fontWeight: 700, padding: "9px 12px", borderRadius: 7, cursor: "pointer",
                  border: `1.5px solid ${includeExtras ? C.green : fieldBorder}`,
                  background: includeExtras ? C.green : "#fff",
                  color: includeExtras ? "#fff" : C.inkSoft,
                }}>
                Yes, calculate them
              </button>
              <button onClick={() => setIncludeExtras(false)}
                style={{
                  flex: 1, fontFamily: SANS, fontSize: 13, fontWeight: 700, padding: "9px 12px", borderRadius: 7, cursor: "pointer",
                  border: `1.5px solid ${!includeExtras ? C.green : fieldBorder}`,
                  background: !includeExtras ? C.green : "#fff",
                  color: !includeExtras ? "#fff" : C.inkSoft,
                }}>
                No, P&I only
              </button>
            </div>

            {includeExtras && (
              <>
                <div style={{ marginTop: 18 }}>
                  <Field label="Credit Score" hint="Used to estimate mortgage insurance (PMI) if your down payment is under 20%.">
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <input className="dpc-input" style={{ ...baseInput, width: 84, flex: "0 0 84px", textAlign: "center", padding: "10px 12px" }}
                        inputMode="numeric" value={creditScoreText}
                        onChange={(e) => setCreditScoreText(e.target.value)}
                        onBlur={() => setCreditScoreText(String(creditScore))} />
                      <span style={{ fontSize: 12.5, color: C.inkSoft }}>({creditScoreLabel(creditScore)})</span>
                    </div>
                    <MiniSlider min={600} max={850} step={1} value={creditScore} onChange={(v) => setCreditScoreText(String(Math.round(v)))} />
                  </Field>
                </div>

                <div style={{ borderTop: `1px solid ${C.line}`, marginTop: 4, paddingTop: 18 }}>
                  <Field label="Property Tax Rate (%)" hint={`Default for this home price: ${taxDefaultRate.toFixed(2)}% (${fmtMoney(taxDefaultDollar)}/yr)`}>
                    <input className="dpc-input" style={{ ...baseInput, padding: "10px 12px" }} inputMode="decimal" placeholder="Auto-estimated from home price"
                      value={propertyTaxRateText} onChange={(e) => setPropertyTaxRateText(e.target.value)} />
                  </Field>
                  <Field label="Annual Home Insurance ($)" hint={`Default for this home price: ${fmtMoney(insDefault)}/yr`}>
                    <input className="dpc-input" style={{ ...baseInput, padding: "10px 12px" }} inputMode="numeric" placeholder="Auto-estimated from home price"
                      value={homeInsuranceText} onChange={(e) => setHomeInsuranceText(e.target.value)} />
                  </Field>
                </div>
              </>
            )}
          </div>
          </div>

          {/* ============ RESULTS ============ */}
          <div>
            <div style={{
              background: `linear-gradient(135deg, ${C.greenPale} 0%, #ffffff 55%)`,
              border: `2px solid ${C.green}`,
              borderRadius: 12,
              boxShadow: "0 4px 18px rgba(58,125,30,0.14)",
              padding: 22, marginBottom: 20,
            }}>
              <div className="bmc-hero" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, paddingBottom: 18, marginBottom: 18, borderBottom: `1px solid #cfe0c2` }}>
                <div>
                  <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: ".05em", color: C.inkSoft, fontWeight: 700, marginBottom: 6 }}>Principal & Interest / Month</div>
                  <div style={{ fontFamily: SERIF, fontSize: 44, fontWeight: 700, color: C.greenDeep, lineHeight: 1 }}>
                    ${fmtMoney(Math.floor(res.monthlyPayment))}
                    <sup style={{ fontSize: 16, fontWeight: 500, color: C.inkSoft, marginLeft: 4 }}>.{Math.round((res.monthlyPayment % 1) * 100).toString().padStart(2, "0")}</sup>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 11, color: C.inkSoft, textTransform: "uppercase", letterSpacing: ".04em" }}>First Month Principal</div>
                    <div style={{ fontFamily: MONO, fontSize: 15, fontWeight: 600 }}>{fmtMoneyFull(res.firstMonthPrincipal)}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 11, color: C.inkSoft, textTransform: "uppercase", letterSpacing: ".04em" }}>First Month Interest</div>
                    <div style={{ fontFamily: MONO, fontSize: 15, fontWeight: 600 }}>{fmtMoneyFull(res.firstMonthInterest)}</div>
                  </div>
                </div>
              </div>

              {includeExtras && (
                <>
                  <div style={{ fontSize: 10.5, color: C.inkSoft, textTransform: "uppercase", letterSpacing: ".04em", fontWeight: 700, marginBottom: 6 }}>Estimated Additional Costs</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                    {extraCosts.map(([label, val]) => (
                      <div key={label} style={{ background: "#fff", border: `1px solid #cfe0c2`, borderRadius: 7, padding: "6px 10px" }}>
                        <div style={{ fontSize: 9.5, textTransform: "uppercase", color: C.inkSoft, fontWeight: 700 }}>{label}</div>
                        <div style={{ fontFamily: MONO, fontWeight: 700, color: C.ink, fontSize: 13 }}>${fmtMoney(val)}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ borderTop: `2px solid ${C.green}`, paddingTop: 12, display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: C.ink }}>Total Monthly Payment</div>
                    <div style={{ fontFamily: MONO, fontSize: 22, fontWeight: 700, color: C.greenDeep }}>${fmtMoney(totalMonthlyPayment)}</div>
                  </div>
                </>
              )}

              <div className="bmc-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginTop: 18 }}>
                <StatBox label="Financed Amount" value={`$${fmtMoney(res.loanAmount)}`} />
                <StatBox label="Down Payment" color={C.greenDeep} value={`$${fmtMoney(res.dpAmount)}`} />
                <StatBox label="Total Interest" color={C.gold} value={`$${fmtMoney(res.totalInterest)}`} />
                <StatBox label="Overall Cost" value={`$${fmtMoney(res.overallCost)}`} />
              </div>
            </div>

            <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(28,42,23,0.06), 0 6px 20px rgba(28,42,23,0.05)", padding: 22, marginBottom: 20 }}>
              <h2 style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 600, margin: "0 0 16px" }}>Loan Overview</h2>
              <div className="bmc-charts-row" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 20 }}>
                <div style={{ maxWidth: 260, margin: "0 auto", width: "100%" }}>
                  <InteractivePieChart
                    donut
                    showLegend={false}
                    dataItems={[
                      { label: "Down Payment", value: res.dpAmount, color: C.green },
                      { label: "Financed Amount", value: res.loanAmount, color: C.slate },
                      { label: "Total Interest", value: res.totalInterest, color: C.gold },
                    ]}
                  />
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 12, fontSize: 12, color: C.inkSoft, justifyContent: "center" }}>
                    <span><span style={{ display: "inline-block", width: 9, height: 9, borderRadius: 2, marginRight: 6, background: C.green }} />Down Payment</span>
                    <span><span style={{ display: "inline-block", width: 9, height: 9, borderRadius: 2, marginRight: 6, background: C.slate }} />Financed Amount</span>
                    <span><span style={{ display: "inline-block", width: 9, height: 9, borderRadius: 2, marginRight: 6, background: C.gold }} />Total Interest</span>
                  </div>
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, marginTop: 14, alignSelf: "start" }}>
                  <tbody>
                    <tr><td style={{ padding: "9px 4px", borderBottom: `1px solid ${C.line}` }}>Down Payment</td><td style={{ padding: "9px 4px", borderBottom: `1px solid ${C.line}`, textAlign: "right", fontFamily: MONO, fontWeight: 600 }}>{fmtMoneyFull(res.dpAmount)}</td></tr>
                    <tr><td style={{ padding: "9px 4px", borderBottom: `1px solid ${C.line}` }}>Financed Amount</td><td style={{ padding: "9px 4px", borderBottom: `1px solid ${C.line}`, textAlign: "right", fontFamily: MONO, fontWeight: 600 }}>{fmtMoneyFull(res.loanAmount)}</td></tr>
                    <tr><td style={{ padding: "9px 4px", borderBottom: `1px solid ${C.line}` }}>Total Interest</td><td style={{ padding: "9px 4px", borderBottom: `1px solid ${C.line}`, textAlign: "right", fontFamily: MONO, fontWeight: 600 }}>{fmtMoneyFull(res.totalInterest)}</td></tr>
                    <tr><td style={{ padding: "11px 4px 0", borderTop: `2px solid ${C.ink}`, fontWeight: 700 }}>Overall Cost</td><td style={{ padding: "11px 4px 0", borderTop: `2px solid ${C.ink}`, textAlign: "right", fontFamily: MONO, fontWeight: 700 }}>{fmtMoneyFull(res.overallCost)}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(28,42,23,0.06), 0 6px 20px rgba(28,42,23,0.05)", padding: 22, marginBottom: 20 }}>
              <h2 style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 600, margin: "0 0 16px" }}>Principal, Interest & Balance Over Time</h2>
              <BasicPaymentOverTimeChart
                schedule={res.schedule.map((p) => ({
                  paymentNum: p.n,
                  principal: p.principalPaid,
                  interest: p.interestPaid,
                  endBalance: p.endingBalance,
                }))}
              />
            </div>

            <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(28,42,23,0.06), 0 6px 20px rgba(28,42,23,0.05)", padding: 22, marginBottom: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
                <h2 style={{ margin: 0, fontFamily: SERIF, fontSize: 16, fontWeight: 600 }}>Amortization Schedule</h2>
                <button onClick={() => setShowAmort((v) => !v)}
                  style={{ fontSize: 13, fontWeight: 600, color: C.greenDeep, background: C.greenPale, border: "1px solid #d3e5c6", borderRadius: 7, padding: "7px 14px", cursor: "pointer" }}>
                  {showAmort ? "Hide full schedule" : "Show full schedule"}
                </button>
              </div>
              {showAmort && (
                <div style={{ maxHeight: 420, overflowY: "auto", marginTop: 14, border: `1px solid ${C.line}`, borderRadius: 8 }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5, fontFamily: MONO }}>
                    <thead>
                      <tr>
                        {["#", "Beginning Balance", "Payment", "Principal", "Interest", "Ending Balance", "Cumulative Principal", "Cumulative Interest"].map((h, i) => (
                          <th key={h} style={{ position: "sticky", top: 0, background: C.ink, color: "#fff", fontFamily: SANS, fontWeight: 600, textAlign: i === 0 ? "left" : "right", padding: "9px 10px", fontSize: 11, textTransform: "uppercase", letterSpacing: ".03em" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {res.schedule.length === 0 ? (
                        <tr><td colSpan={8} style={{ textAlign: "center", color: C.inkSoft, padding: "10px 6px" }}>No payments — loan is fully covered by down payment.</td></tr>
                      ) : res.schedule.map((p) => (
                        <tr key={p.n} style={{ borderTop: p.n % 12 === 0 ? "1px solid #cfd6c9" : "none", background: p.n % 2 === 0 ? "#fafaf8" : "transparent" }}>
                          <td style={{ textAlign: "left", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, color: C.inkSoft }}>{p.n}</td>
                          <td style={{ textAlign: "right", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, whiteSpace: "nowrap" }}>{fmtMoneyFull(p.beginningBalance)}</td>
                          <td style={{ textAlign: "right", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, whiteSpace: "nowrap" }}>{fmtMoneyFull(p.paymentAmount)}</td>
                          <td style={{ textAlign: "right", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, whiteSpace: "nowrap" }}>{fmtMoneyFull(p.principalPaid)}</td>
                          <td style={{ textAlign: "right", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, whiteSpace: "nowrap" }}>{fmtMoneyFull(p.interestPaid)}</td>
                          <td style={{ textAlign: "right", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, whiteSpace: "nowrap" }}>{fmtMoneyFull(p.endingBalance)}</td>
                          <td style={{ textAlign: "right", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, whiteSpace: "nowrap" }}>{fmtMoneyFull(p.cumulativePrincipal)}</td>
                          <td style={{ textAlign: "right", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, whiteSpace: "nowrap" }}>{fmtMoneyFull(p.cumulativeInterest)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <p style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 16, lineHeight: 1.5 }}>
                Estimates reflect principal & interest only and exclude property taxes, homeowners insurance, mortgage insurance, and HOA dues. Final payment is adjusted so the loan balance reaches exactly $0.00. Rates and terms are illustrative — contact Mortgage Brothers LLC for a personalized quote.
              </p>
            </div>

            {/* Insights — last section, below all charts/tables */}
            <InsightsPanel
              groups={[
                { title: "Payment Breakdown", color: C.greenDeep, bullets: insights.breakdown },
                { title: "Affordability Check", color: C.gold, bullets: insights.affordability },
              ]}
              nextSteps={insights.nextSteps}
            />
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .bmc-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 760px) {
          .bmc-stats { grid-template-columns: repeat(2,1fr) !important; }
          .bmc-charts-row { grid-template-columns: 1fr !important; }
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
