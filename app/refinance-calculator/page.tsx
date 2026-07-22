"use client";

import { useMemo, useState, type ReactNode } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

/* ============================================================
   DESIGN TOKENS (matches the suite's shared palette/typography)
============================================================ */
const C = {
  ink: "#182a1c",
  inkSoft: "#4d5c51",
  paper: "#faf8f3",
  card: "#ffffff",
  line: "#e2e0d6",
  green: "#3a7d1e",
  greenDeep: "#26510f",
  greenPale: "#eaf3e3",
  amber: "#a5680a",
  amberPale: "#faf1e0",
  danger: "#a3271f",
  dangerPale: "#fbeceb",
  purple: "#6b5bd6",
};
const SERIF = '"Source Serif 4", Georgia, serif';
const SANS = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
const MONO = "'JetBrains Mono', 'Roboto Mono', monospace";

const fieldBg = "#eef1ea";
const fieldBorder = "#c3ccbb";

/* ============================================================
   TYPES
============================================================ */
interface Inputs {
  currentBalance: number;
  currentRatePct: number;
  currentTermRaw: number;
  newRatePct: number;
  newTermRaw: number;
  closingCostsRaw: number;
  financed: boolean;
  cashOutRaw: number;
}

interface CalcErrors {
  currentBalance?: string;
  currentRate?: string;
  newRate?: string;
  closingCosts?: string;
  cashOut?: string;
  currentTerm?: string;
  newTerm?: string;
}

type BreakEvenStatus = "higher-payment" | "no-savings" | "immediate" | "finite";
type ChangeStatus = "decrease" | "increase" | "same";

interface CalcResult {
  errors: CalcErrors | null;
  currentBalance: number;
  newLoanAmount: number;
  financed: boolean;
  cashOut: number;
  netCashAtClosing: number;
  currentRatePct: number;
  currentMonthlyRate: number;
  newRatePct: number;
  newMonthlyRate: number;
  currentTermYears: number;
  currentN: number;
  newTermYears: number;
  newN: number;
  currentPayment: number;
  newPayment: number;
  newPaymentExcludingFinanced: number;
  paymentAttributableToFinancedCosts: number;
  paymentAttributableToCashOut: number;
  monthlySavings: number;
  breakEvenNumerator: number | null;
  unroundedBreakEvenMonths: number | null;
  displayedBreakEvenMonths: number | null;
  breakEvenStatus: BreakEvenStatus;
  currentTotalScheduledPayments: number;
  currentTotalInterest: number;
  newTotalScheduledPayments: number;
  newTotalInterest: number;
  totalInterestSavings: number;
  closingCosts: number;
  paymentStatus: ChangeStatus;
  interestStatus: ChangeStatus;
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
function fmtWhole(x: number): string {
  if (!isFinite(x)) x = 0;
  const r = Math.round(x);
  const sign = r < 0 ? "-" : "";
  return sign + "$" + Math.abs(r).toLocaleString("en-US");
}
function fmtSignedWhole(x: number): string {
  if (!isFinite(x)) x = 0;
  const r = Math.round(x);
  if (r === 0) return "$0";
  const sign = r < 0 ? "-" : "+";
  return sign + "$" + Math.abs(r).toLocaleString("en-US");
}
function clampTerm(raw: number): number {
  if (!isFinite(raw)) return 30;
  let v = Math.round(raw);
  if (v < 1) v = 1;
  if (v > 30) v = 30;
  return v;
}

/* ============================================================
   CORE CALCULATION (ported 1:1 from the spec)
============================================================ */
const EPS = 1e-6;

function paymentFormula(P: number, r: number, n: number): number {
  if (Math.abs(r) < 1e-12) return P / n;
  const factor = Math.pow(1 + r, n);
  return (P * r * factor) / (factor - 1);
}

function emptyResult(errors: CalcErrors): CalcResult {
  return {
    errors,
    currentBalance: 0, newLoanAmount: 0, financed: false, cashOut: 0, netCashAtClosing: 0,
    currentRatePct: 0, currentMonthlyRate: 0, newRatePct: 0, newMonthlyRate: 0,
    currentTermYears: 0, currentN: 0, newTermYears: 0, newN: 0,
    currentPayment: 0, newPayment: 0, newPaymentExcludingFinanced: 0, paymentAttributableToFinancedCosts: 0,
    paymentAttributableToCashOut: 0, monthlySavings: 0,
    breakEvenNumerator: null, unroundedBreakEvenMonths: null, displayedBreakEvenMonths: null, breakEvenStatus: "no-savings",
    currentTotalScheduledPayments: 0, currentTotalInterest: 0, newTotalScheduledPayments: 0, newTotalInterest: 0,
    totalInterestSavings: 0, closingCosts: 0, paymentStatus: "same", interestStatus: "same",
  };
}

function calculate(inputs: Inputs): CalcResult {
  const { currentBalance, currentRatePct, currentTermRaw, newRatePct, newTermRaw, closingCostsRaw, financed, cashOutRaw } = inputs;

  const errors: CalcErrors = {};
  if (!(currentBalance > 0) || !isFinite(currentBalance)) errors.currentBalance = "Enter a current loan balance greater than $0.";
  if (currentRatePct === null || isNaN(currentRatePct) || !(currentRatePct >= 0) || !isFinite(currentRatePct)) errors.currentRate = "Enter a current interest rate of 0% or greater.";
  if (newRatePct === null || isNaN(newRatePct) || !(newRatePct >= 0) || !isFinite(newRatePct)) errors.newRate = "Enter a new interest rate of 0% or greater.";

  let closingCosts = closingCostsRaw;
  if (closingCosts === null || closingCosts === undefined || isNaN(closingCosts)) closingCosts = 0;
  if (!(closingCosts >= 0) || !isFinite(closingCosts)) errors.closingCosts = "Closing costs cannot be negative.";

  let cashOut = cashOutRaw;
  if (cashOut === null || cashOut === undefined || isNaN(cashOut)) cashOut = 0;
  if (!(cashOut >= 0) || !isFinite(cashOut)) errors.cashOut = "Cash-out amount cannot be negative.";

  if (Object.keys(errors).length > 0) return emptyResult(errors);

  const currentTermYears = clampTerm(currentTermRaw);
  const newTermYears = clampTerm(newTermRaw);
  const currentN = currentTermYears * 12;
  const newN = newTermYears * 12;

  const currentMonthlyRate = currentRatePct / 100 / 12;
  const newMonthlyRate = newRatePct / 100 / 12;

  const currentPayment = paymentFormula(currentBalance, currentMonthlyRate, currentN);

  const financedClosingCosts = financed ? closingCosts : 0;
  const newLoanAmount = currentBalance + financedClosingCosts + cashOut;

  const newPayment = paymentFormula(newLoanAmount, newMonthlyRate, newN);
  const newPaymentBase = paymentFormula(currentBalance, newMonthlyRate, newN);
  const paymentAttributableToFinancedCosts = financed ? paymentFormula(closingCosts, newMonthlyRate, newN) : 0;
  const paymentAttributableToCashOut = cashOut > 0 ? paymentFormula(cashOut, newMonthlyRate, newN) : 0;
  const newPaymentExcludingFinanced = newPaymentBase + paymentAttributableToCashOut;

  const monthlySavings = currentPayment - newPayment;
  const netCashAtClosing = cashOut - (financed ? 0 : closingCosts);

  let breakEvenNumerator: number | null = null;
  let unroundedBreakEvenMonths: number | null = null;
  let displayedBreakEvenMonths: number | null = null;
  let breakEvenStatus: BreakEvenStatus;

  if (monthlySavings <= EPS) {
    breakEvenStatus = monthlySavings < -EPS ? "higher-payment" : "no-savings";
  } else if (closingCosts <= EPS) {
    breakEvenStatus = "immediate";
    displayedBreakEvenMonths = 0;
    unroundedBreakEvenMonths = 0;
    breakEvenNumerator = 0;
  } else {
    breakEvenStatus = "finite";
    breakEvenNumerator = closingCosts;
    unroundedBreakEvenMonths = breakEvenNumerator / monthlySavings;
    displayedBreakEvenMonths = Math.ceil(unroundedBreakEvenMonths - 1e-9);
  }

  const currentTotalScheduledPayments = currentPayment * currentN;
  let currentTotalInterest = currentTotalScheduledPayments - currentBalance;
  if (Math.abs(currentTotalInterest) < 0.005) currentTotalInterest = 0;
  if (currentTotalInterest < 0) currentTotalInterest = 0;

  const newTotalScheduledPayments = newPayment * newN;
  let newTotalInterest = newTotalScheduledPayments - newLoanAmount;
  if (Math.abs(newTotalInterest) < 0.005) newTotalInterest = 0;
  if (newTotalInterest < 0) newTotalInterest = 0;

  const totalInterestSavings = currentTotalInterest - newTotalInterest;

  const paymentStatus: ChangeStatus = monthlySavings > EPS ? "decrease" : (monthlySavings < -EPS ? "increase" : "same");
  const interestStatus: ChangeStatus = totalInterestSavings > EPS ? "decrease" : (totalInterestSavings < -EPS ? "increase" : "same");

  return {
    errors: null,
    currentBalance, newLoanAmount, financed, cashOut, netCashAtClosing,
    currentRatePct, currentMonthlyRate, newRatePct, newMonthlyRate,
    currentTermYears, currentN, newTermYears, newN,
    currentPayment, newPayment, newPaymentExcludingFinanced, paymentAttributableToFinancedCosts,
    paymentAttributableToCashOut,
    monthlySavings,
    breakEvenNumerator, unroundedBreakEvenMonths, displayedBreakEvenMonths, breakEvenStatus,
    currentTotalScheduledPayments, currentTotalInterest,
    newTotalScheduledPayments, newTotalInterest,
    totalInterestSavings,
    closingCosts,
    paymentStatus, interestStatus,
  };
}

/* ============================================================
   UI PRIMITIVES
============================================================ */
function Field({ label, hint, children, error }: { label: string; hint?: string; children: ReactNode; error?: string }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".05em", color: C.inkSoft, marginBottom: 7 }}>
        {label}
      </label>
      {children}
      {hint && <div style={{ fontSize: 11, color: C.inkSoft, marginTop: 5 }}>{hint}</div>}
      {error && <div style={{ fontSize: 11.5, color: C.danger, marginTop: 5 }}>{error}</div>}
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
  boxShadow: "inset 0 1px 2px rgba(24,42,28,0.06)",
};
function MoneyInput({ value, onChange, onBlur }: { value: string; onChange: (v: string) => void; onBlur?: () => void }) {
  return (
    <div style={{ position: "relative" }}>
      <span style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: C.inkSoft, fontWeight: 600, fontSize: 14, pointerEvents: "none" }}>$</span>
      <input className="dpc-input" style={{ ...baseInput, padding: "10px 12px 10px 26px" }} inputMode="decimal" value={value}
        onChange={(e) => onChange(e.target.value)} onBlur={onBlur} />
    </div>
  );
}
function RateInput({ value, onChange, onBlur }: { value: string; onChange: (v: string) => void; onBlur?: () => void }) {
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
function DividerLabel({ children }: { children: ReactNode }) {
  return (
    <div style={{ fontFamily: MONO, fontSize: 11, textTransform: "uppercase", letterSpacing: ".06em", color: C.inkSoft, margin: "20px 0 14px", display: "flex", alignItems: "center", gap: 8 }}>
      {children}
      <div style={{ flex: 1, height: 1, background: C.line }} />
    </div>
  );
}
function MetricCard({ label, value, sub, tag, status }: { label: string; value: string; sub?: ReactNode; tag?: ReactNode; status?: "good" | "bad" | "neutral" }) {
  const color = status === "good" ? C.greenDeep : status === "bad" ? C.danger : C.ink;
  const tagBg = status === "good" ? C.greenPale : status === "bad" ? C.dangerPale : "#eee";
  const tagColor = status === "good" ? C.greenDeep : status === "bad" ? C.danger : C.inkSoft;
  return (
    <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(24,42,28,0.04), 0 8px 24px -12px rgba(24,42,28,0.18)", padding: "18px 18px 16px", display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontFamily: MONO, fontSize: 11, textTransform: "uppercase", letterSpacing: ".06em", color: C.inkSoft }}>{label}</span>
      <span style={{ fontFamily: SERIF, fontSize: 30, fontWeight: 600, letterSpacing: "-0.01em", color }}>{value}</span>
      <span style={{ fontSize: 12.5, color: C.inkSoft }}>{sub}</span>
      {tag && (
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 600, padding: "3px 8px", borderRadius: 100, width: "fit-content", marginTop: 2, background: tagBg, color: tagColor }}>
          {tag}
        </span>
      )}
    </div>
  );
}
function CompareRow({ name, value, pct, color, marginBottom = 16 }: { name: string; value: string; pct: number; color: string; marginBottom?: number }) {
  return (
    <div style={{ marginBottom }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, marginBottom: 5 }}>
        <span style={{ color: C.inkSoft }}>{name}</span>
        <span style={{ fontFamily: MONO, fontWeight: 600 }}>{value}</span>
      </div>
      <div style={{ height: 10, background: "#eeece4", borderRadius: 6, overflow: "hidden" }}>
        <div style={{ height: "100%", borderRadius: 6, width: `${pct}%`, background: color, transition: "width .3s ease" }} />
      </div>
    </div>
  );
}
function InsightsPanel({ groups, nextSteps }: { groups: { title: string; color: string; bullets: string[] }[]; nextSteps: string[] }) {
  return (
    <div style={{ background: "#f7f7f2", border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(24,42,28,0.04), 0 8px 24px -12px rgba(24,42,28,0.18)", padding: 22, marginBottom: 20 }}>
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
export default function RefinanceCalculator() {
  const [currentBalanceText, setCurrentBalanceText] = useState("300,000");
  const [currentRateText, setCurrentRateText] = useState("7.00");
  const [currentTermRaw, setCurrentTermRaw] = useState(30);
  const [newRateText, setNewRateText] = useState("6.00");
  const [newTermRaw, setNewTermRaw] = useState(30);
  const [closingCostsText, setClosingCostsText] = useState("5,000");
  const [financed, setFinanced] = useState(false);
  const [cashOutText, setCashOutText] = useState("0");
  const [showDetails, setShowDetails] = useState(false);

  const currentBalance = Math.max(0, toNumber(currentBalanceText) || 0);
  const currentRatePct = toNumber(currentRateText);
  const newRatePct = toNumber(newRateText);
  const closingCostsRaw = toNumber(closingCostsText);
  const cashOutRaw = toNumber(cashOutText);
  const currentTermYears = clampTerm(currentTermRaw);
  const newTermYears = clampTerm(newTermRaw);

  const r = useMemo(() => calculate({
    currentBalance, currentRatePct, currentTermRaw, newRatePct, newTermRaw, closingCostsRaw, financed, cashOutRaw,
  }), [currentBalance, currentRatePct, currentTermRaw, newRatePct, newTermRaw, closingCostsRaw, financed, cashOutRaw]);

  const errors: CalcErrors = r.errors || {};
  const valid = !r.errors;

  const insights = useMemo(() => {
    if (!valid) return { savings: [] as string[], breakeven: [] as string[], nextSteps: [] as string[] };
    const be = r.displayedBreakEvenMonths ?? 0;
    const savings: string[] = [];
    if (r.paymentStatus === "decrease") {
      savings.push(`Your monthly payment would drop by ${fmtWhole(r.monthlySavings)}, from ${fmtWhole(r.currentPayment)} to ${fmtWhole(r.newPayment)}.`);
    } else if (r.paymentStatus === "increase") {
      savings.push(`Your monthly payment would increase by ${fmtWhole(Math.abs(r.monthlySavings))}, from ${fmtWhole(r.currentPayment)} to ${fmtWhole(r.newPayment)} — often worth it only if you need cash-out or a shorter term.`);
    } else {
      savings.push("Your monthly payment would stay essentially the same under this refinance.");
    }
    if (r.interestStatus === "decrease") {
      savings.push(`Over the life of the loan, you'd save ${fmtWhole(r.totalInterestSavings)} in interest compared to your current mortgage.`);
    } else if (r.interestStatus === "increase") {
      savings.push(`This refinance would cost ${fmtWhole(Math.abs(r.totalInterestSavings))} more in lifetime interest than your current loan — often a side effect of resetting the term back to ${r.newTermYears} years.`);
    }
    if (r.cashOut > 0) {
      savings.push(`You'd receive ${fmtWhole(r.netCashAtClosing)} net cash at closing, and your new loan balance would be ${fmtWhole(r.newLoanAmount)}.`);
    }

    const breakeven: string[] = [];
    if (r.breakEvenStatus === "finite") {
      breakeven.push(`It would take ${be} months (${(be / 12).toFixed(1)} years) to recover your ${fmtWhole(r.closingCosts)} in closing costs through monthly savings.`);
      breakeven.push("If you plan to sell or refinance again before reaching that point, this refinance may not pay for itself.");
    } else if (r.breakEvenStatus === "immediate") {
      breakeven.push("With no closing costs to recover, any payment savings start immediately.");
    } else if (r.breakEvenStatus === "no-savings") {
      breakeven.push("Since your payment wouldn't change, there's no payment-based break-even point for this scenario.");
    } else {
      breakeven.push("Since your proposed payment is higher, there's no break-even point based on monthly savings alone — this only makes sense if the goal is cash-out or a shorter term.");
    }
    if (r.financed && r.closingCosts > 0) {
      breakeven.push(`Financing your ${fmtWhole(r.closingCosts)} in closing costs adds ${fmtWhole(r.paymentAttributableToFinancedCosts)}/mo to your new payment instead of requiring cash today.`);
    }
    breakeven.push("This comparison covers principal & interest only — it doesn't include closing-cost financing fees, taxes, insurance, or new loan-program underwriting.");

    const nextSteps: string[] = [
      "Get a current payoff quote to confirm your exact loan balance before applying.",
      "Get a verified rate quote — actual refinance rates depend on credit, LTV, and loan program.",
    ];
    if (r.breakEvenStatus === "finite" && be > 24) {
      nextSteps.push("Since the break-even point is a couple of years out, weigh how long you plan to stay in the home.");
    }
    nextSteps.push("Contact a Mortgage Brothers loan officer to review your options and confirm eligibility.");

    return { savings, breakeven, nextSteps };
  }, [r, valid]);

  const horizon = valid ? Math.max(60, r.displayedBreakEvenMonths || 0) : 60;
  const beMonths = valid ? (r.displayedBreakEvenMonths ?? 0) : 0;
  const bePct = valid && r.breakEvenStatus === "finite" ? Math.min(100, (beMonths / horizon) * 100) : (valid && r.breakEvenStatus === "immediate" ? 2 : 0);
  const recoveryQuality: { label: string; color: string } | null = valid && r.breakEvenStatus === "finite"
    ? (beMonths <= 24 ? { label: "Excellent", color: C.green }
      : beMonths <= 36 ? { label: "Good", color: "#7a9d3e" }
      : beMonths <= 60 ? { label: "Fair", color: C.amber }
      : { label: "Slow", color: C.danger })
    : valid && r.breakEvenStatus === "immediate" ? { label: "Excellent", color: C.green } : null;

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
              Refinance Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Compare your current mortgage to a proposed refinance — monthly payment, cost recovery time, and lifetime
              interest. Principal and interest only.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "32px 20px 64px" }}>
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
              {!valid ? "Enter your loan details to see when this refinance would pay for itself." :
                r.breakEvenStatus === "finite" ? `Recovers your ${fmtWhole(r.closingCosts)} in closing costs by month ${beMonths}, out of a ${horizon}-month view.` :
                r.breakEvenStatus === "immediate" ? "No closing costs to recover — savings start right away." :
                "No payment-based break-even for this scenario."}
            </p>

            {recoveryQuality && (
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: recoveryQuality.color, color: "#fff",
                borderRadius: 8, padding: "8px 16px", marginBottom: 14,
                boxShadow: `0 3px 10px ${recoveryQuality.color}55`,
              }}>
                <span style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 700, letterSpacing: ".01em" }}>{recoveryQuality.label.toUpperCase()}</span>
                <span style={{ fontSize: 13, fontWeight: 600, opacity: 0.95 }}>
                  {r.breakEvenStatus === "immediate" ? "recovery — no costs to recoup" : `recovery — pays for itself in ${beMonths} months`}
                </span>
              </div>
            )}

            <div style={{ position: "relative", height: 6, borderRadius: 99, marginTop: 10, marginBottom: 8, background: "#fff", border: `1px solid ${C.line}`, overflow: "hidden" }}>
              {[
                { upTo: 24, color: "#dcead0" },
                { upTo: 36, color: "#eee6c0" },
                { upTo: 60, color: C.amberPale },
              ].map((z, i, arr) => {
                const prevUpTo = i === 0 ? 0 : arr[i - 1].upTo;
                const left = Math.min(100, (prevUpTo / horizon) * 100);
                const width = Math.min(100, (z.upTo / horizon) * 100) - left;
                return width > 0 ? <div key={z.upTo} style={{ position: "absolute", left: `${left}%`, width: `${width}%`, top: 0, bottom: 0, background: z.color }} /> : null;
              })}
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${bePct}%`, background: valid && (r.breakEvenStatus === "finite" || r.breakEvenStatus === "immediate") ? (recoveryQuality ? recoveryQuality.color : C.green) : C.line }} />
              {valid && (r.breakEvenStatus === "finite" || r.breakEvenStatus === "immediate") && (
                <div style={{ position: "absolute", left: `${bePct}%`, top: -14, transform: "translateX(-50%)", textAlign: "center" }}>
                  <div style={{ fontSize: 9, fontFamily: MONO, fontWeight: 700, color: C.ink, whiteSpace: "nowrap" }}>{beMonths} mo</div>
                  <div style={{ width: 2, height: 18, background: C.ink, margin: "1px auto 0" }} />
                </div>
              )}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5, fontFamily: MONO, color: C.inkSoft, marginBottom: 2 }}>
              <span>0 mo</span>
              <span>{horizon} mo</span>
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontSize: 12.5, marginBottom: 14 }}>
              {[
                { label: "Excellent", sub: "<24 mo", color: "#dcead0", textColor: C.greenDeep },
                { label: "Good", sub: "24–36 mo", color: "#eee6c0", textColor: "#7a6b1a" },
                { label: "Fair", sub: "36–60 mo", color: C.amberPale, textColor: C.amber },
              ].map((z) => {
                const isActive = recoveryQuality && recoveryQuality.label === z.label;
                return (
                  <span key={z.label} style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontWeight: isActive ? 800 : 600, color: isActive ? z.textColor : C.inkSoft,
                    background: isActive ? z.color : "transparent",
                    border: isActive ? `1.5px solid ${z.textColor}` : "1.5px solid transparent",
                    borderRadius: 6, padding: isActive ? "3px 9px" : "3px 2px",
                  }}>
                    <span style={{ display: "inline-block", width: 9, height: 9, borderRadius: 2, background: z.color, border: `1px solid ${z.textColor}33` }} />
                    {z.label} ({z.sub})
                  </span>
                );
              })}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10 }}>
              <MilestoneStat label="Break-Even Point" value={valid ? (r.breakEvenStatus === "finite" ? `${beMonths} mo` : r.breakEvenStatus === "immediate" ? "Immediate" : "N/A") : "—"}
                note={valid ? (r.breakEvenStatus === "finite" ? (recoveryQuality ? <b style={{ fontWeight: 800 }}>{recoveryQuality.label} recovery time</b> : `${(beMonths / 12).toFixed(1)} years`) : r.breakEvenStatus === "immediate" ? "no costs to recover" : "no payment savings") : ""}
                highlight={valid && (r.breakEvenStatus === "finite" || r.breakEvenStatus === "immediate")} />
              <MilestoneStat label="Monthly Payment" value={valid ? fmtSignedWhole(r.monthlySavings) + "/mo" : "—"}
                note={valid ? `${fmtWhole(r.currentPayment)} → ${fmtWhole(r.newPayment)}` : ""} highlight={valid && r.paymentStatus === "decrease"} />
              <MilestoneStat label="Lifetime Interest" value={valid ? fmtSignedWhole(r.totalInterestSavings) : "—"}
                note={valid ? (r.interestStatus === "decrease" ? "less interest over the loan" : r.interestStatus === "increase" ? "more interest over the loan" : "no change") : ""}
                highlight={valid && r.interestStatus === "decrease"} />
            </div>
          </div>

          <div className="refi-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
            {/* ============ INPUTS ============ */}
            <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(24,42,28,0.04), 0 8px 24px -12px rgba(24,42,28,0.18)", padding: "22px 22px 20px" }}>
              <h2 style={{ fontFamily: SERIF, fontSize: 16.5, fontWeight: 600, margin: "0 0 4px" }}>Your loans</h2>
              <p style={{ fontSize: 12.5, color: C.inkSoft, margin: "0 0 4px" }}>Enter your current mortgage and the refinance terms you're considering.</p>

              <DividerLabel>Current mortgage</DividerLabel>
              <Field label="Current Loan Balance ($)" error={errors.currentBalance}>
                <MoneyInput value={currentBalanceText} onChange={setCurrentBalanceText}
                  onBlur={() => { if (isFinite(currentBalance)) setCurrentBalanceText(currentBalance.toLocaleString("en-US")); }} />
                <MiniSlider min={0} max={2000000} step={1000} value={currentBalance} onChange={(v) => setCurrentBalanceText(Math.round(v).toLocaleString("en-US"))} />
              </Field>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <Field label="Interest Rate (%)" error={errors.currentRate}>
                  <RateInput value={currentRateText} onChange={setCurrentRateText}
                    onBlur={() => { const n2 = toNumber(currentRateText); if (isFinite(n2)) setCurrentRateText(n2.toFixed(3)); }} />
                  <MiniSlider min={0} max={15} step={0.125} value={currentRatePct} onChange={(v) => setCurrentRateText(v.toString())} />
                </Field>
                <Field label="Term (Years)" error={errors.currentTerm}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <input type="range" min={1} max={30} step={1} value={currentTermRaw}
                      onChange={(e) => setCurrentTermRaw(parseFloat(e.target.value))}
                      style={{ WebkitAppearance: "none", flex: 1, height: 4, borderRadius: 2, background: C.line, accentColor: C.green }} />
                    <div style={{ minWidth: 52, textAlign: "center", background: C.greenPale, color: C.greenDeep, fontFamily: MONO, fontWeight: 600, fontSize: 13, padding: "6px 6px", borderRadius: 7, border: "1px solid #d3e5c6" }}>
                      {currentTermYears} yr
                    </div>
                  </div>
                </Field>
              </div>

              <DividerLabel>Proposed refinance</DividerLabel>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <Field label="Interest Rate (%)" error={errors.newRate}>
                  <RateInput value={newRateText} onChange={setNewRateText}
                    onBlur={() => { const n2 = toNumber(newRateText); if (isFinite(n2)) setNewRateText(n2.toFixed(3)); }} />
                  <MiniSlider min={0} max={15} step={0.125} value={newRatePct} onChange={(v) => setNewRateText(v.toString())} />
                </Field>
                <Field label="Term (Years)" error={errors.newTerm}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <input type="range" min={1} max={30} step={1} value={newTermRaw}
                      onChange={(e) => setNewTermRaw(parseFloat(e.target.value))}
                      style={{ WebkitAppearance: "none", flex: 1, height: 4, borderRadius: 2, background: C.line, accentColor: C.green }} />
                    <div style={{ minWidth: 52, textAlign: "center", background: C.greenPale, color: C.greenDeep, fontFamily: MONO, fontWeight: 600, fontSize: 13, padding: "6px 6px", borderRadius: 7, border: "1px solid #d3e5c6" }}>
                      {newTermYears} yr
                    </div>
                  </div>
                </Field>
              </div>

              <Field label="Refinance Closing Costs ($)" error={errors.closingCosts}>
                <MoneyInput value={closingCostsText} onChange={setClosingCostsText}
                  onBlur={() => { const n2 = toNumber(closingCostsText); if (isFinite(n2)) setClosingCostsText(Math.max(0, n2).toLocaleString("en-US")); }} />
                <MiniSlider min={0} max={30000} step={100} value={closingCostsRaw} onChange={(v) => setClosingCostsText(Math.round(v).toLocaleString("en-US"))} />
              </Field>

              <Field label="Closing Costs Are">
                <div style={{ display: "flex", border: `1.5px solid ${fieldBorder}`, borderRadius: 7, overflow: "hidden" }}>
                  <button onClick={() => setFinanced(false)}
                    style={{ flex: 1, border: "none", padding: "9px 8px", fontFamily: SANS, fontSize: 12.5, fontWeight: 600, cursor: "pointer", background: !financed ? C.green : "#fff", color: !financed ? "#fff" : C.inkSoft }}>
                    Paid out of pocket
                  </button>
                  <button onClick={() => setFinanced(true)}
                    style={{ flex: 1, border: "none", borderLeft: `1.5px solid ${fieldBorder}`, padding: "9px 8px", fontFamily: SANS, fontSize: 12.5, fontWeight: 600, cursor: "pointer", background: financed ? C.green : "#fff", color: financed ? "#fff" : C.inkSoft }}>
                    Added to new loan
                  </button>
                </div>
              </Field>

              <DividerLabel>Cash-Out <span style={{ textTransform: "none", letterSpacing: 0 }}>(optional)</span></DividerLabel>
              <Field label="Cash-Out Amount ($)" error={errors.cashOut}
                hint="Added to your new loan balance and paid to you at closing. Leave at $0 for a rate-and-term refinance.">
                <MoneyInput value={cashOutText} onChange={setCashOutText}
                  onBlur={() => { const n2 = toNumber(cashOutText); if (isFinite(n2)) setCashOutText(Math.max(0, n2).toLocaleString("en-US")); }} />
                <MiniSlider min={0} max={300000} step={1000} value={cashOutRaw} onChange={(v) => setCashOutText(Math.round(v).toLocaleString("en-US"))} />
              </Field>
            </div>

            {/* ============ RESULTS ============ */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {!valid ? (
                <div style={{ background: C.dangerPale, border: "1px solid #e3b3ae", color: C.danger, borderRadius: 10, padding: "16px 18px", fontSize: 13.5, fontWeight: 500 }}>
                  {Object.values(errors)[0]}
                </div>
              ) : (
                <>
                  <div className="refi-primary-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                    <MetricCard label="Monthly Payment" value={fmtSignedWhole(r.monthlySavings) + "/mo"}
                      sub={`${fmtWhole(r.currentPayment)} now → ${fmtWhole(r.newPayment)} proposed`}
                      tag={r.paymentStatus === "decrease" ? "Payment decreases" : r.paymentStatus === "increase" ? "Payment increases" : "Payment unchanged"}
                      status={r.paymentStatus === "decrease" ? "good" : r.paymentStatus === "increase" ? "bad" : "neutral"} />
                    <MetricCard label="Break-Even Point"
                      value={r.breakEvenStatus === "immediate" ? "Immediate" : r.breakEvenStatus === "finite" ? `${beMonths} mo` : "N/A"}
                      sub={r.breakEvenStatus === "immediate" ? "No closing costs to recover" : r.breakEvenStatus === "finite" ? `To recover ${fmtWhole(r.closingCosts)} in closing costs` : r.breakEvenStatus === "no-savings" ? "Payments are equal, so costs are never recovered through savings" : "The proposed payment is higher, so there is no payment-savings break-even"}
                      tag={r.breakEvenStatus === "finite" ? `Recovers in ${beMonths} months` : r.breakEvenStatus === "immediate" ? "Break-even reached" : "No break-even"}
                      status={r.breakEvenStatus === "finite" || r.breakEvenStatus === "immediate" ? "good" : r.breakEvenStatus === "no-savings" ? "neutral" : "bad"} />
                    <MetricCard label="Lifetime Interest" value={fmtSignedWhole(r.totalInterestSavings)}
                      sub={`${fmtWhole(r.currentTotalInterest)} current → ${fmtWhole(r.newTotalInterest)} proposed`}
                      tag={r.interestStatus === "decrease" ? "Less lifetime interest" : r.interestStatus === "increase" ? "More lifetime interest" : "No change"}
                      status={r.interestStatus === "decrease" ? "good" : r.interestStatus === "increase" ? "bad" : "neutral"} />
                  </div>

                  {r.cashOut > 0 && (
                    <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(24,42,28,0.04), 0 8px 24px -12px rgba(24,42,28,0.18)", padding: "20px 22px 22px" }}>
                      <h3 style={{ fontFamily: SERIF, fontSize: 15.5, fontWeight: 600, margin: "0 0 16px" }}>Cash-Out Summary</h3>
                      <SimpleRow name="Cash-out amount" value={fmtWhole(r.cashOut)} />
                      <SimpleRow name="Added to new loan" value={fmtWhole(r.cashOut) + " principal"} />
                      <SimpleRow name="Net cash at closing" value={fmtWhole(r.netCashAtClosing)} />
                      <SimpleRow name="Monthly payment impact from cash-out" value={"+" + fmtWhole(r.paymentAttributableToCashOut) + "/mo"} last />
                    </div>
                  )}

                  <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(24,42,28,0.04), 0 8px 24px -12px rgba(24,42,28,0.18)", padding: "20px 22px 22px" }}>
                    <h3 style={{ fontFamily: SERIF, fontSize: 15.5, fontWeight: 600, margin: "0 0 16px" }}>New Loan Balance Composition</h3>
                    {(() => {
                      const financedCostsAmt = r.financed ? (r.newLoanAmount - r.currentBalance - r.cashOut) : 0;
                      const maxBal = Math.max(r.currentBalance, r.newLoanAmount, 1);
                      return (
                        <>
                          <CompareRow name="Current balance" value={fmtWhole(r.currentBalance)} pct={(r.currentBalance / maxBal) * 100} color="#b7bdb1" marginBottom={6} />
                          <div style={{ marginBottom: 0 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, marginBottom: 5 }}>
                              <span style={{ color: C.inkSoft }}>Proposed new loan</span>
                              <span style={{ fontFamily: MONO, fontWeight: 600 }}>{fmtWhole(r.newLoanAmount)}</span>
                            </div>
                            <div style={{ height: 10, background: "#eeece4", borderRadius: 6, overflow: "hidden", display: "flex" }}>
                              <div style={{ width: `${(r.currentBalance / maxBal) * 100}%`, background: C.green, borderRadius: financedCostsAmt <= 0 && r.cashOut <= 0 ? "6px" : "6px 0 0 6px" }} />
                              {financedCostsAmt > 0 && <div style={{ width: `${(financedCostsAmt / maxBal) * 100}%`, background: C.amber }} />}
                              {r.cashOut > 0 && <div style={{ width: `${(r.cashOut / maxBal) * 100}%`, background: C.purple, borderRadius: "0 6px 6px 0" }} />}
                            </div>
                          </div>
                          <div style={{ marginTop: 6, fontSize: 11.5, color: C.inkSoft }}>
                            <span style={{ display: "inline-block", width: 8, height: 8, background: C.green, borderRadius: 2, marginRight: 4 }} />Balance
                            <span style={{ display: "inline-block", width: 8, height: 8, background: C.amber, borderRadius: 2, margin: "0 4px 0 12px" }} />Financed costs
                            <span style={{ display: "inline-block", width: 8, height: 8, background: C.purple, borderRadius: 2, margin: "0 4px 0 12px" }} />Cash-out
                          </div>
                        </>
                      );
                    })()}
                  </div>

                  <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(24,42,28,0.04), 0 8px 24px -12px rgba(24,42,28,0.18)", padding: "20px 22px 22px" }}>
                    <h3 style={{ fontFamily: SERIF, fontSize: 15.5, fontWeight: 600, margin: "0 0 16px" }}>Monthly Payment</h3>
                    <CompareRow name="Current" value={fmtWhole(r.currentPayment) + "/mo"} pct={(r.currentPayment / Math.max(r.currentPayment, r.newPayment, 1)) * 100} color="#b7bdb1" />
                    <CompareRow name="Proposed" value={fmtWhole(r.newPayment) + "/mo"} pct={(r.newPayment / Math.max(r.currentPayment, r.newPayment, 1)) * 100} color={r.paymentStatus === "increase" ? C.amber : C.green} marginBottom={0} />
                  </div>

                  <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(24,42,28,0.04), 0 8px 24px -12px rgba(24,42,28,0.18)", padding: "20px 22px 22px" }}>
                    <h3 style={{ fontFamily: SERIF, fontSize: 15.5, fontWeight: 600, margin: "0 0 16px" }}>Total Interest Remaining</h3>
                    <CompareRow name="Current loan" value={fmtWhole(r.currentTotalInterest)} pct={(r.currentTotalInterest / Math.max(r.currentTotalInterest, r.newTotalInterest, 1)) * 100} color="#b7bdb1" />
                    <CompareRow name="Proposed refinance" value={fmtWhole(r.newTotalInterest)} pct={(r.newTotalInterest / Math.max(r.currentTotalInterest, r.newTotalInterest, 1)) * 100} color={r.interestStatus === "increase" ? C.amber : C.green} marginBottom={0} />
                  </div>

                  <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(24,42,28,0.04), 0 8px 24px -12px rgba(24,42,28,0.18)", padding: "4px 0" }}>
                    <button onClick={() => setShowDetails((v) => !v)}
                      style={{ width: "100%", background: "none", border: "none", padding: "16px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", fontFamily: SERIF, fontSize: 15.5, fontWeight: 600, color: C.ink }}>
                      All calculation details
                      <span style={{ fontFamily: MONO, color: C.inkSoft, fontSize: 13, transform: showDetails ? "rotate(180deg)" : "none", transition: "transform .2s ease" }}>▾</span>
                    </button>
                    {showDetails && (
                      <div style={{ padding: "0 22px 20px" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5 }}>
                          <tbody>
                            {([
                              ["Current loan balance", fmtWhole(r.currentBalance)],
                              ["Proposed new loan amount", fmtWhole(r.newLoanAmount)],
                              ["Closing costs financed", r.financed ? "Yes" : "No"],
                              ["Current annual rate", r.currentRatePct.toFixed(3) + "%"],
                              ["Current monthly rate", (r.currentMonthlyRate * 100).toFixed(6) + "%"],
                              ["New annual rate", r.newRatePct.toFixed(3) + "%"],
                              ["New monthly rate", (r.newMonthlyRate * 100).toFixed(6) + "%"],
                              ["Current term", r.currentTermYears + " yrs (" + r.currentN + " payments)"],
                              ["New term", r.newTermYears + " yrs (" + r.newN + " payments)"],
                              ["Current monthly payment", "$" + r.currentPayment.toFixed(2)],
                              ["New monthly payment", "$" + r.newPayment.toFixed(2)],
                              ["New payment excl. financed costs", "$" + r.newPaymentExcludingFinanced.toFixed(2)],
                              ["Payment attributable to financed costs", "$" + r.paymentAttributableToFinancedCosts.toFixed(2)],
                              ["Cash-out amount", fmtWhole(r.cashOut)],
                              ["Payment attributable to cash-out", "$" + r.paymentAttributableToCashOut.toFixed(2)],
                              ["Net cash at closing", fmtWhole(r.netCashAtClosing)],
                              ["Monthly savings (unrounded)", "$" + r.monthlySavings.toFixed(2)],
                              ["Current total scheduled payments", "$" + r.currentTotalScheduledPayments.toFixed(2)],
                              ["New total scheduled payments", "$" + r.newTotalScheduledPayments.toFixed(2)],
                              ["Current total interest", "$" + r.currentTotalInterest.toFixed(2)],
                              ["New total interest", "$" + r.newTotalInterest.toFixed(2)],
                              ["Total interest savings (unrounded)", "$" + r.totalInterestSavings.toFixed(2)],
                              ["Closing costs entered", fmtWhole(r.closingCosts)],
                              ["Break-even numerator", r.breakEvenNumerator === null ? "—" : "$" + r.breakEvenNumerator.toFixed(2)],
                              ["Unrounded break-even months", r.unroundedBreakEvenMonths === null ? "—" : r.unroundedBreakEvenMonths.toFixed(3)],
                              ["Displayed break-even months", r.displayedBreakEvenMonths === null ? "—" : String(r.displayedBreakEvenMonths)],
                              ["Break-even status", r.breakEvenStatus],
                              ["Payment-change status", r.paymentStatus],
                              ["Interest-change status", r.interestStatus],
                            ] as [string, string][]).map((row, i) => (
                              <tr key={i}>
                                <td style={{ padding: "7px 4px", borderBottom: `1px solid ${C.line}`, color: C.inkSoft }}>{row[0]}</td>
                                <td style={{ padding: "7px 4px", borderBottom: `1px solid ${C.line}`, textAlign: "right", fontFamily: MONO, fontWeight: 600 }}>{row[1]}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>

                  {/* Insights — last section, below all charts/tables */}
                  <InsightsPanel
                    groups={[
                      { title: "Refinance Savings", color: C.greenDeep, bullets: insights.savings },
                      { title: "Break-Even Analysis", color: C.amber, bullets: insights.breakeven },
                    ]}
                    nextSteps={insights.nextSteps}
                  />
                </>
              )}
            </div>
          </div>

          <div style={{ marginTop: 36, paddingTop: 18, borderTop: `1px solid ${C.line}`, fontSize: 11.5, color: C.inkSoft, lineHeight: 1.6 }}>
            This calculator compares principal-and-interest payments only. It does not include property taxes, homeowners insurance, mortgage insurance, HOA dues, or other escrow items, and it does not determine loan eligibility, underwriting approval, or qualification for any specific rate. Mortgage Brothers LLC · NMLS #1007154 · AZ MB #MB0922514.
          </div>
        </div>
        <style>{`
          @media (max-width: 760px) {
            .refi-layout { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 640px) {
            .refi-primary-grid { grid-template-columns: 1fr !important; }
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

function MilestoneStat({ label, value, note, highlight }: { label: string; value: ReactNode; note: ReactNode; highlight?: boolean }) {
  return (
    <div style={{
      background: highlight ? C.greenDeep : "#fff",
      border: `1px solid ${highlight ? C.greenDeep : "#cfe0c2"}`,
      borderRadius: 8,
      padding: "10px 12px",
    }}>
      <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".04em", fontWeight: 700, color: highlight ? "#eaf3e3" : C.inkSoft, marginBottom: 3 }}>{label}</div>
      <div style={{ fontFamily: MONO, fontWeight: 700, fontSize: 17, color: highlight ? "#fff" : C.greenDeep, marginBottom: 2 }}>{value}</div>
      <div style={{ fontSize: 10.5, color: highlight ? "#dcead0" : C.inkSoft, lineHeight: 1.3 }}>{note}</div>
    </div>
  );
}
function SimpleRow({ name, value, last }: { name: string; value: string; last?: boolean }) {
  return (
    <div style={{ marginBottom: last ? 0 : 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5 }}>
        <span style={{ color: C.inkSoft }}>{name}</span>
        <span style={{ fontFamily: MONO, fontWeight: 600 }}>{value}</span>
      </div>
    </div>
  );
}
