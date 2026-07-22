"use client";

import { useMemo, useState, type ReactNode } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { ScenarioBarChart } from "../component/InteractiveCharts";

/* ============================================================
   DESIGN TOKENS (matches the suite's shared palette/typography,
   with this calculator's own green/gold accent colors)
============================================================ */
const C = {
  ink: "#1f2a1c",
  inkSoft: "#4c5647",
  paper: "#faf9f5",
  card: "#ffffff",
  line: "#e3e1d6",
  green: "#3a7d1e",
  greenDeep: "#2c5f16",
  greenPale: "#eef4e8",
  gold: "#b8935a",
  goldPale: "#f5ead9",
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
interface Ctx {
  income: number;
  existingDebts: number;
  downPayment: number;
  monthlyRate: number;
  n: number;
  propertyTaxManual: number | null;
  insuranceManual: number | null;
  pmiEnabled: boolean;
  creditScore: number;
}

interface ScenarioResult {
  dtiTarget: number;
  maxHousingPayment: number;
  piPayment: number;
  propertyTax: number;
  insurance: number;
  pmi: number;
  pmiRatePct: number;
  loanAmount: number;
  homePrice: number;
  downPayment: number;
  downPaymentPct: number;
  existingDebts: number;
  totalDebt: number;
  resultingDTI: number;
}

interface Scenario {
  key: string;
  label: string;
  dti: number;
  r: ScenarioResult;
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
  n = Math.max(0, n);
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}
function fmtPct(n: number, decimals = 1): string {
  if (!isFinite(n)) n = 0;
  return n.toFixed(decimals) + "%";
}
function normalizeTerm(t: number): number {
  if (!isFinite(t) || t <= 0) return 1;
  let r = Math.round(t);
  if (r < 1) r = 1;
  if (r > 30) r = 30;
  return r;
}

/* ============================================================
   PMI TABLE (8 credit-score bands x 4 down-payment tiers —
   matches the table used across the rest of the suite)
============================================================ */
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
function pmiRateForTier(creditScore: number, downPct: number): number {
  if (downPct >= 20) return 0;
  const row = PMI_TABLE[creditScoreBand(creditScore)];
  if (downPct < 5) return row[0];
  if (downPct < 10) return row[1];
  if (downPct < 15) return row[2];
  return row[3];
}

/* ============================================================
   PROPERTY TAX / INSURANCE TABLES (same lookup tables used
   across the rest of the suite, so estimates stay consistent)
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

/* ============================================================
   CORE CALCULATION (ported 1:1 from the spec)
============================================================ */
function loanAmountFromPI(pi: number, monthlyRate: number, n: number): number {
  if (pi <= 0) return 0;
  if (monthlyRate === 0) return pi * n;
  return pi * (1 - Math.pow(1 + monthlyRate, -n)) / monthlyRate;
}

function calcScenario(dtiRatio: number, ctx: Ctx): ScenarioResult {
  const { income, existingDebts, downPayment, monthlyRate, n, propertyTaxManual, insuranceManual, pmiEnabled, creditScore } = ctx;

  const maxTotalDebt = income * dtiRatio;
  let maxHousingPayment = maxTotalDebt - existingDebts;
  if (maxHousingPayment < 0) maxHousingPayment = 0;

  let pmiMonthly = 0, pmiRatePct = 0, loanAmount = 0, piPayment = 0, homePrice = 0;
  let propertyTax = propertyTaxManual !== null ? propertyTaxManual : 0;
  let insurance = insuranceManual !== null ? insuranceManual : 0;
  let prevLoanAmount = -1;

  if (maxHousingPayment > 0) {
    for (let i = 0; i < 100; i++) {
      const availablePI = maxHousingPayment - propertyTax - insurance - pmiMonthly;
      if (availablePI <= 0) {
        piPayment = 0; loanAmount = 0; homePrice = 0;
        break;
      }
      piPayment = availablePI;
      loanAmount = loanAmountFromPI(piPayment, monthlyRate, n);
      homePrice = loanAmount + downPayment;
      const downPct = homePrice > 0 ? (downPayment / homePrice * 100) : 0;
      const pmiApplies = pmiEnabled && downPct < 20;
      const newRate = pmiApplies ? pmiRateForTier(creditScore, downPct) : 0;
      const newPmi = pmiApplies ? (loanAmount * (newRate / 100) / 12) : 0;

      const newTax = propertyTaxManual !== null ? propertyTaxManual : lookupBandTable(PROPERTY_TAX_TABLE, homePrice) / 12;
      const newIns = insuranceManual !== null ? insuranceManual : lookupBandTable(INSURANCE_TABLE, homePrice) / 12;

      const converged =
        Math.abs(newPmi - pmiMonthly) < 0.01 &&
        Math.abs(newTax - propertyTax) < 0.01 &&
        Math.abs(newIns - insurance) < 0.01 &&
        Math.abs(loanAmount - prevLoanAmount) < 0.01;

      pmiMonthly = newPmi;
      pmiRatePct = newRate;
      propertyTax = newTax;
      insurance = newIns;
      if (converged) break;
      prevLoanAmount = loanAmount;
    }
  }

  if (loanAmount <= 0) {
    loanAmount = 0; homePrice = 0; piPayment = 0;
    if (maxHousingPayment <= 0) {
      pmiMonthly = 0; pmiRatePct = 0;
      propertyTax = propertyTaxManual !== null ? propertyTaxManual : 0;
      insurance = insuranceManual !== null ? insuranceManual : 0;
    }
  }

  const totalHousing = piPayment + propertyTax + insurance + pmiMonthly;
  const totalDebt = existingDebts + totalHousing;
  const resultingDTI = income > 0 ? (totalDebt / income * 100) : 0;
  const downPaymentPct = homePrice > 0 ? (downPayment / homePrice * 100) : 0;

  return {
    dtiTarget: dtiRatio * 100,
    maxHousingPayment: Math.max(0, totalHousing),
    piPayment: Math.max(0, piPayment),
    propertyTax, insurance,
    pmi: Math.max(0, pmiMonthly),
    pmiRatePct: Math.max(0, pmiRatePct),
    loanAmount: Math.max(0, loanAmount),
    homePrice: Math.max(0, homePrice),
    downPayment, downPaymentPct,
    existingDebts, totalDebt, resultingDTI,
  };
}

/* ============================================================
   UI PRIMITIVES
============================================================ */
function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".05em", color: C.inkSoft, marginBottom: 7 }}>
        {label}
      </label>
      {children}
      {hint && <div style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 6 }}>{hint}</div>}
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
function MoneyInput({ value, onChange, onBlur, placeholder }: { value: string; onChange: (v: string) => void; onBlur?: () => void; placeholder?: string }) {
  return (
    <div style={{ position: "relative" }}>
      <span style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: C.inkSoft, fontWeight: 600, fontSize: 14, pointerEvents: "none" }}>$</span>
      <input className="mac-input" style={{ ...baseInput, padding: "10px 12px 10px 26px" }} inputMode="decimal" value={value} placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)} onBlur={onBlur} />
    </div>
  );
}
function RateInput({ value, onChange, onBlur }: { value: string; onChange: (v: string) => void; onBlur?: () => void }) {
  return (
    <div style={{ position: "relative" }}>
      <input className="mac-input" style={{ ...baseInput, padding: "10px 26px 10px 12px" }} inputMode="decimal" value={value}
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
function MilestoneStat({ label, value, note, highlight, onClick }: { label: string; value: string; note: string; highlight?: boolean; onClick?: () => void }) {
  const style: React.CSSProperties = {
    display: "block",
    textAlign: "left",
    width: "100%",
    background: highlight ? C.greenPale : C.card,
    border: `1.5px solid ${highlight ? C.green : C.line}`,
    borderRadius: 10,
    padding: "12px 14px",
    cursor: onClick ? "pointer" : "default",
    fontFamily: SANS,
    transition: "transform .08s ease, border-color .15s",
  };
  const content = (
    <>
      <div style={{ fontSize: 11.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".04em", color: C.inkSoft, marginBottom: 4 }}>{label}</div>
      <div style={{ fontFamily: MONO, fontSize: 20, fontWeight: 700, color: highlight ? C.greenDeep : C.ink, marginBottom: 2 }}>{value}</div>
      <div style={{ fontSize: 11.5, color: C.inkSoft }}>{note}</div>
    </>
  );
  if (onClick) {
    return (
      <button type="button" onClick={onClick} style={style}
        onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.98)"; }}
        onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}>
        {content}
      </button>
    );
  }
  return <div style={style}>{content}</div>;
}
function DtiMilestoneBar({ scenarios }: { scenarios: Scenario[] }) {
  const scaleMax = 50;
  const pctOf = (v: number) => Math.min(100, Math.max(0, (v / scaleMax) * 100));
  const zones = [
    { upTo: 30, color: C.greenPale },
    { upTo: 40, color: "#d7e8c9" },
    { upTo: 48, color: C.green },
  ];
  return (
    <div style={{ position: "relative", height: 34, marginTop: 8, marginBottom: 28 }}>
      <div style={{ position: "absolute", inset: 0, top: 12, height: 10, borderRadius: 99, overflow: "hidden", border: `1px solid ${C.line}`, display: "flex" }}>
        {zones.map((z, i) => {
          const prevUpTo = i === 0 ? 0 : zones[i - 1].upTo;
          const width = pctOf(z.upTo) - pctOf(prevUpTo);
          return <div key={z.upTo} style={{ width: `${width}%`, background: z.color }} />;
        })}
        <div style={{ flex: 1, background: C.goldPale }} />
      </div>
      {scenarios.map((s) => (
        <div key={s.key} style={{ position: "absolute", left: `${pctOf(s.dti)}%`, top: 0, transform: "translateX(-50%)", textAlign: "center" }}>
          <div style={{ fontSize: 10.5, fontFamily: MONO, fontWeight: 700, color: C.greenDeep }}>{s.dti}%</div>
          <div style={{ width: 2, height: 16, background: C.greenDeep, margin: "2px auto 0" }} />
        </div>
      ))}
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
function BdItem({ label, value, total }: { label: string; value: string; total?: boolean }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "baseline",
      padding: total ? "10px 0 0" : "7px 0",
      borderTop: total ? `2px solid ${C.green}` : "none",
      borderBottom: total ? "none" : `1px dashed ${C.line}`,
      marginTop: total ? 4 : 0,
    }}>
      <span style={{ color: C.inkSoft, fontSize: total ? 14 : 13.5 }}>{label}</span>
      <span style={{ fontFamily: MONO, fontWeight: 700, color: total ? C.greenDeep : C.ink, fontSize: total ? 17 : 14 }}>{value}</span>
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */
export default function MortgageAffordabilityCalculator() {
  const [incomeText, setIncomeText] = useState("9,000");
  const [debtsText, setDebtsText] = useState("450");
  const [downText, setDownText] = useState("30,000");
  const [rateText, setRateText] = useState("6.75");
  const [termRaw, setTermRaw] = useState(30);
  const [taxText, setTaxText] = useState("");
  const [insText, setInsText] = useState("");
  const [pmiEnabled, setPmiEnabled] = useState(true);
  const [creditScoreText, setCreditScoreText] = useState("720");
  const [selectedKey, setSelectedKey] = useState("aggressive");

  const income = Math.max(0, toNumber(incomeText) || 0);
  const existingDebts = Math.max(0, toNumber(debtsText) || 0);
  const downPayment = Math.max(0, toNumber(downText) || 0);
  const annualRate = Math.max(0, toNumber(rateText) || 0);
  const monthlyRate = annualRate / 100 / 12;
  const termYears = normalizeTerm(termRaw);
  const n = termYears * 12;
  const propertyTaxManual = taxText.trim() === "" ? null : Math.max(0, toNumber(taxText) || 0);
  const insuranceManual = insText.trim() === "" ? null : Math.max(0, toNumber(insText) || 0);

  const creditScoreRaw = parseInt(creditScoreText, 10);
  const creditScore = isFinite(creditScoreRaw) ? Math.min(850, Math.max(600, creditScoreRaw)) : 720;

  const errors = useMemo(() => {
    const errs: string[] = [];
    if (!(income > 0)) errs.push("Gross monthly income must be greater than zero.");
    if (toNumber(debtsText) < 0) errs.push("Existing monthly debts cannot be negative.");
    if (toNumber(downText) < 0) errs.push("Down payment cannot be negative.");
    if (toNumber(rateText) < 0) errs.push("Interest rate cannot be negative.");
    if (propertyTaxManual !== null && propertyTaxManual < 0) errs.push("Property tax cannot be negative.");
    if (insuranceManual !== null && insuranceManual < 0) errs.push("Homeowners insurance cannot be negative.");
    return errs;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [income, debtsText, downText, rateText, propertyTaxManual, insuranceManual]);

  const ctx: Ctx = { income, existingDebts, downPayment, monthlyRate, n, propertyTaxManual, insuranceManual, pmiEnabled, creditScore };

  const scenarios = useMemo<Scenario[]>(() => [
    { key: "conservative", label: "Conservative", dti: 30, r: calcScenario(0.30, ctx) },
    { key: "moderate", label: "Moderate", dti: 40, r: calcScenario(0.40, ctx) },
    { key: "aggressive", label: "Aggressive", dti: 48, r: calcScenario(0.48, ctx) },
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [income, existingDebts, downPayment, monthlyRate, n, propertyTaxManual, insuranceManual, pmiEnabled, creditScore]);

  const selected = scenarios.find((s) => s.key === selectedKey) || scenarios[2];
  const primary = selected.r;
  const conservative = (scenarios.find((s) => s.key === "conservative") as Scenario).r;
  const moderate = (scenarios.find((s) => s.key === "moderate") as Scenario).r;

  const scenarioColors: Record<string, string> = { conservative: C.gold, moderate: C.green, aggressive: C.greenDeep };

  const insights = useMemo(() => {
    const financial: string[] = [];
    financial.push(`At a moderate 40% DTI, you could afford up to ${fmtMoney(moderate.homePrice)} — often considered a comfortable, sustainable target.`);
    financial.push(`At your selected ${selected.label} scenario (${selected.dti}% DTI), your maximum is ${fmtMoney(primary.homePrice)}.`);
    financial.push(`Your down payment of ${fmtMoney(downPayment)} represents ${fmtPct(primary.downPaymentPct)} of the ${selected.label.toLowerCase()}-scenario home price.`);

    const risk: string[] = [];
    if (primary.pmi > 0) {
      risk.push(`Estimated PMI of ${fmtMoney(primary.pmi, 2)}/mo is included in the ${selected.label.toLowerCase()} scenario (rate ~${fmtPct(primary.pmiRatePct, 2)}/yr) — a larger down payment would reduce or eliminate it.`);
    }
    risk.push(`Your existing monthly debts of ${fmtMoney(existingDebts)} reduce your available housing budget before any mortgage payment is considered.`);
    if (selected.key !== "conservative" && primary.homePrice > 0 && primary.homePrice - conservative.homePrice > 0) {
      risk.push(`Stretching from the conservative to the ${selected.label.toLowerCase()} scenario buys ${fmtMoney(primary.homePrice - conservative.homePrice)} in additional home price, but leaves less room for other financial goals.`);
    }
    risk.push("This tool estimates from income, debts, and target housing costs only — it doesn't account for closing costs, cash reserves, or full loan-program underwriting.");

    const nextSteps: string[] = [
      "Review your monthly budget to decide which DTI comfort level fits your goals.",
      "Get a verified pre-approval to confirm your actual qualifying amount and rate.",
    ];
    if (primary.pmi > 0) {
      nextSteps.push("Ask about down payment assistance programs, or how a larger down payment would change your PMI.");
    }
    nextSteps.push("Contact a Mortgage Brothers loan officer to review your options and confirm eligibility.");

    return { financial, risk, nextSteps };
  }, [primary, moderate, conservative, selected, downPayment, existingDebts]);

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
              Mortgage Affordability Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Estimate the maximum home price you may be able to afford at three debt-to-income levels — conservative,
              moderate, and aggressive — based on your income, debts, and target housing costs.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "32px 20px 64px" }}>
          {/* DTI Milestones — bold, high-visibility centerpiece, full width at the very top */}
          <div style={{
            background: `linear-gradient(135deg, ${C.greenPale} 0%, #ffffff 55%)`,
            border: `2px solid ${C.green}`,
            borderRadius: 12,
            boxShadow: "0 4px 18px rgba(58,125,30,0.12)",
            padding: 22, marginBottom: 24,
          }}>
            <h3 style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 700, margin: "0 0 2px", color: C.greenDeep }}>DTI Milestones</h3>
            <p style={{ fontSize: 12.5, color: C.inkSoft, margin: "0 0 4px" }}>
              The maximum home price you could afford at each debt-to-income comfort level. Click one to see its full breakdown below.
            </p>
            <DtiMilestoneBar scenarios={scenarios} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
              {scenarios.map((s) => (
                <MilestoneStat key={s.key}
                  label={`${s.label} · ${s.dti}% DTI`}
                  value={fmtMoney(s.r.homePrice)}
                  note="maximum home price"
                  highlight={s.key === selectedKey}
                  onClick={() => setSelectedKey(s.key)} />
              ))}
            </div>
          </div>

          <div className="mac-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 24, alignItems: "start" }}>
            {/* ============ INPUTS ============ */}
            <div>
              <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(28,42,23,0.06), 0 6px 20px rgba(28,42,23,0.05)", padding: 22, marginBottom: 20 }}>
                <h2 style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 600, margin: "0 0 16px" }}>Your Numbers</h2>

                {errors.length > 0 && (
                  <div style={{ background: "#fbeae7", border: `1px solid ${C.danger}`, borderRadius: 8, padding: "10px 12px", marginBottom: 16 }}>
                    {errors.map((e, i) => <div key={i} style={{ fontSize: 12.5, color: C.danger }}>{e}</div>)}
                  </div>
                )}

                <Field label="Gross Monthly Income ($)">
                  <MoneyInput value={incomeText} onChange={setIncomeText}
                    onBlur={() => { if (isFinite(income)) setIncomeText(income.toLocaleString("en-US")); }} />
                  <MiniSlider min={0} max={40000} step={100} value={income} onChange={(v) => setIncomeText(Math.round(v).toLocaleString("en-US"))} />
                </Field>

                <Field label="Existing Monthly Debts ($)" hint="Car loans, student loans, credit cards — excludes your future housing payment.">
                  <MoneyInput value={debtsText} onChange={setDebtsText}
                    onBlur={() => { if (isFinite(existingDebts)) setDebtsText(existingDebts.toLocaleString("en-US")); }} />
                  <MiniSlider min={0} max={10000} step={50} value={existingDebts} onChange={(v) => setDebtsText(Math.round(v).toLocaleString("en-US"))} />
                </Field>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <Field label="Down Payment ($)">
                    <MoneyInput value={downText} onChange={setDownText}
                      onBlur={() => { if (isFinite(downPayment)) setDownText(downPayment.toLocaleString("en-US")); }} />
                    <MiniSlider min={0} max={500000} step={5000} value={downPayment} onChange={(v) => setDownText(Math.round(v).toLocaleString("en-US"))} />
                  </Field>
                  <Field label="Interest Rate (%)">
                    <RateInput value={rateText} onChange={setRateText}
                      onBlur={() => { const n2 = toNumber(rateText); if (isFinite(n2)) setRateText(n2.toString()); }} />
                    <MiniSlider min={0} max={15} step={0.125} value={annualRate} onChange={(v) => setRateText(v.toString())} />
                  </Field>
                </div>

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
                          border: `1px solid ${normalizeTerm(termRaw) === t ? C.green : C.line}`,
                          background: normalizeTerm(termRaw) === t ? C.green : "#fff",
                          color: normalizeTerm(termRaw) === t ? "#fff" : C.inkSoft, cursor: "pointer",
                        }}>
                        {t} yr
                      </button>
                    ))}
                  </div>
                </Field>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <Field label="Property Tax ($/mo)" hint="Leave blank to auto-estimate from home price.">
                    <MoneyInput value={taxText} onChange={setTaxText} placeholder="Auto-estimated"
                      onBlur={() => { if (propertyTaxManual !== null) setTaxText(propertyTaxManual.toLocaleString("en-US")); }} />
                  </Field>
                  <Field label="Home Insurance ($/mo)" hint="Leave blank to auto-estimate from home price.">
                    <MoneyInput value={insText} onChange={setInsText} placeholder="Auto-estimated"
                      onBlur={() => { if (insuranceManual !== null) setInsText(insuranceManual.toLocaleString("en-US")); }} />
                  </Field>
                </div>

                <label style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4, marginBottom: 4, fontSize: 13, color: C.ink, cursor: "pointer" }}>
                  <input type="checkbox" checked={pmiEnabled} onChange={(e) => setPmiEnabled(e.target.checked)} style={{ width: 16, height: 16, accentColor: C.green }} />
                  Include PMI when down payment is below 20%
                </label>

                {pmiEnabled && (
                  <div style={{ marginTop: 12 }}>
                    <Field label="Credit Score" hint="Used to estimate PMI when your down payment is under 20%.">
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <input className="mac-input" style={{ ...baseInput, width: 84, flex: "0 0 84px", textAlign: "center", padding: "10px 12px" }}
                          inputMode="numeric" value={creditScoreText}
                          onChange={(e) => setCreditScoreText(e.target.value)}
                          onBlur={() => setCreditScoreText(String(creditScore))} />
                        <span style={{ fontSize: 12.5, color: C.inkSoft }}>({creditScoreLabel(creditScore)})</span>
                      </div>
                      <MiniSlider min={600} max={850} step={1} value={creditScore} onChange={(v) => setCreditScoreText(String(Math.round(v)))} />
                    </Field>
                  </div>
                )}

                <p style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 8, lineHeight: 1.5 }}>
                  This tool estimates affordability from gross income, existing debts, target housing costs, and credit-score-based PMI only.
                  It does not consider closing costs, cash reserves, loan-program underwriting, or APR, and is not a loan approval or rate quote.
                </p>
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
                <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: ".05em", color: C.inkSoft, fontWeight: 700, marginBottom: 6 }}>
                  Estimated Max Home Price — {selected.label} Scenario ({selected.dti}% DTI)
                </div>
                <div style={{ fontFamily: SERIF, fontSize: 44, fontWeight: 700, color: C.greenDeep, lineHeight: 1, marginBottom: 16 }}>{fmtMoney(primary.homePrice)}</div>
                <div>
                  <BdItem label="Loan amount" value={fmtMoney(primary.loanAmount)} />
                  <BdItem label="Down payment" value={`${fmtMoney(downPayment)} (${fmtPct(primary.downPaymentPct)})`} />
                  <BdItem label="Loan term" value={`${termYears} yr fixed`} />
                  <BdItem label="Rate" value={`${annualRate.toFixed(3)}%`} />
                  <BdItem label="Resulting DTI" value={fmtPct(primary.resultingDTI)} />
                </div>
              </div>

              <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(28,42,23,0.06), 0 6px 20px rgba(28,42,23,0.05)", padding: 22, marginBottom: 20 }}>
                <h2 style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 600, margin: "0 0 12px" }}>
                  Payment Breakdown ({selected.label} — {selected.dti}% DTI Scenario)
                </h2>
                <BdItem label="Principal & Interest" value={fmtMoney(primary.piPayment, 2)} />
                <BdItem label="Property Tax" value={fmtMoney(primary.propertyTax, 2)} />
                <BdItem label="Insurance" value={fmtMoney(primary.insurance, 2)} />
                <BdItem label={`PMI${primary.pmiRatePct > 0 ? ` (${fmtPct(primary.pmiRatePct, 2)})` : ""}`} value={fmtMoney(primary.pmi, 2)} />
                <BdItem label="Total Housing Payment" value={fmtMoney(primary.maxHousingPayment, 2)} total />
              </div>

              <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(28,42,23,0.06), 0 6px 20px rgba(28,42,23,0.05)", padding: 22, marginBottom: 20 }}>
                <h2 style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 600, margin: "0 0 12px" }}>Compare All Three Scenarios</h2>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5 }}>
                    <thead>
                      <tr>
                        {["Scenario", "Max Home Price", "Housing Pmt", "P&I", "Tax", "Insurance", "PMI", "Resulting DTI"].map((h, i) => (
                          <th key={h} style={{ textAlign: i === 0 ? "left" : "right", fontFamily: MONO, fontSize: 10, textTransform: "uppercase", letterSpacing: ".03em", color: C.inkSoft, padding: "6px 8px", borderBottom: `2px solid ${C.line}`, whiteSpace: "nowrap" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {scenarios.map((s) => (
                        <tr key={s.key} onClick={() => setSelectedKey(s.key)}
                          style={{ cursor: "pointer", background: s.key === selectedKey ? C.greenPale : "transparent" }}>
                          <td style={{ textAlign: "left", padding: "8px", borderBottom: `1px solid ${C.line}`, fontWeight: s.key === selectedKey ? 700 : 500 }}>
                            <div style={{ color: C.ink }}>{s.label}</div>
                            <div style={{ fontSize: 10.5, color: C.inkSoft }}>{s.dti}% DTI</div>
                          </td>
                          <td style={{ textAlign: "right", padding: "8px", borderBottom: `1px solid ${C.line}`, fontFamily: MONO, fontWeight: 700, whiteSpace: "nowrap" }}>{fmtMoney(s.r.homePrice)}</td>
                          <td style={{ textAlign: "right", padding: "8px", borderBottom: `1px solid ${C.line}`, fontFamily: MONO, whiteSpace: "nowrap" }}>{fmtMoney(s.r.maxHousingPayment, 2)}</td>
                          <td style={{ textAlign: "right", padding: "8px", borderBottom: `1px solid ${C.line}`, fontFamily: MONO, whiteSpace: "nowrap" }}>{fmtMoney(s.r.piPayment, 2)}</td>
                          <td style={{ textAlign: "right", padding: "8px", borderBottom: `1px solid ${C.line}`, fontFamily: MONO, whiteSpace: "nowrap" }}>{fmtMoney(s.r.propertyTax, 2)}</td>
                          <td style={{ textAlign: "right", padding: "8px", borderBottom: `1px solid ${C.line}`, fontFamily: MONO, whiteSpace: "nowrap" }}>{fmtMoney(s.r.insurance, 2)}</td>
                          <td style={{ textAlign: "right", padding: "8px", borderBottom: `1px solid ${C.line}`, fontFamily: MONO, whiteSpace: "nowrap" }}>{fmtMoney(s.r.pmi, 2)}</td>
                          <td style={{ textAlign: "right", padding: "8px", borderBottom: `1px solid ${C.line}`, fontFamily: MONO, whiteSpace: "nowrap" }}>{fmtPct(s.r.resultingDTI)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(28,42,23,0.06), 0 6px 20px rgba(28,42,23,0.05)", padding: 22, marginBottom: 20 }}>
                <h2 style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 600, margin: "0 0 12px" }}>Max Home Price by Scenario</h2>
                <ScenarioBarChart
                  labels={scenarios.map((s) => s.label)}
                  values={scenarios.map((s) => s.r.homePrice)}
                  colors={scenarios.map((s) => scenarioColors[s.key])}
                />
              </div>

              {/* Insights — last section, below all charts/tables */}
              <InsightsPanel
                groups={[
                  { title: "Financial Analysis", color: C.greenDeep, bullets: insights.financial },
                  { title: "Risk Assessment", color: C.gold, bullets: insights.risk },
                ]}
                nextSteps={insights.nextSteps}
              />

              <p style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 8, lineHeight: 1.5 }}>
                Prepared by Mortgage Brothers LLC · NMLS #1007154 · AZ MB #MB0922514 · Licensed in Arizona only · Educational estimate, not a commitment to lend.
              </p>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 820px) {
            .mac-layout { grid-template-columns: 1fr !important; }
          }
          .mac-input { transition: border-color .15s, box-shadow .15s, background .15s; }
          .mac-input:hover { border-color: #a9b59c; }
          .mac-input:focus { background: #ffffff; border-color: ${C.green}; box-shadow: 0 0 0 3px ${C.greenPale}; }
        `}</style>
      </main>
      <Footer />
    </div>
  );
}
