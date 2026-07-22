"use client";

import { useMemo, useState, type CSSProperties, type ReactNode } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { InteractivePieChart } from "../component/InteractiveCharts";

/* ============================================================
   DESIGN TOKENS (shared across the suite)
============================================================ */
const C = {
  ink: "#1b2a1f",
  inkSoft: "#4a5a4d",
  paper: "#faf9f5",
  card: "#ffffff",
  line: "#dfe3dc",
  greenDeep: "#2c5e1a",
  green: "#3a7d1e",
  greenBright: "#6ca220",
  greenWash: "#eef4e6",
  amber: "#9a6b12",
  amberWash: "#fbf1dd",
  danger: "#a3372b",
  dangerWash: "#faeae8",
};
const SERIF = '"Source Serif 4", Georgia, "Times New Roman", serif';
const SANS = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const MONO = "'IBM Plex Mono', 'SFMono-Regular', Menlo, Consolas, monospace";

const fieldBg = "#eef1ea";
const fieldBorder = "#c3ccbb";

/* ============================================================
   TYPES
============================================================ */
type PresetId = "minimal" | "moderate" | "aggressive";

interface ScheduleRow {
  month: number;
  principalPaid: number;
  interestPaid: number;
  remainingBalance: number;
  isLumpMonth: boolean;
}

interface SimulateResult {
  PMT: number;
  n: number;
  schedule: ScheduleRow[];
  payoffMonth: number;
  totalInterest: number;
  totalPrincipal: number;
  standardTotalInterest: number;
}

interface InsightGroup {
  title: string;
  color: string;
  bullets: string[];
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
function fmtMoney(n: number): string {
  if (!isFinite(n)) n = 0;
  return "$" + Math.round(n).toLocaleString("en-US");
}
function monthsToYearsMonths(totalMonths: number): string {
  const y = Math.floor(totalMonths / 12);
  const m = totalMonths % 12;
  const parts: string[] = [];
  if (y > 0) parts.push(y + (y === 1 ? " year" : " years"));
  if (m > 0) parts.push(m + (m === 1 ? " month" : " months"));
  if (parts.length === 0) return "0 months";
  return parts.join(", ");
}
function addMonths(date: Date, months: number): Date {
  const d = new Date(date.getTime());
  d.setMonth(d.getMonth() + months);
  return d;
}
function fmtDate(date: Date): string {
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
}

/* ============================================================
   CORE MATH — ported 1:1 from the original calculator's JS
============================================================ */
function stdMonthlyPayment(P: number, r: number, n: number): number {
  if (r === 0) return P / n;
  const factor = Math.pow(1 + r, n);
  return (P * (r * factor)) / (factor - 1);
}

function simulate(
  P: number,
  annualRatePct: number,
  termYears: number,
  extraMonthly: number,
  lumpSum: number,
  lumpSumMonth: number
): SimulateResult {
  const n = termYears * 12;
  const r = annualRatePct / 100 / 12;
  const PMT = stdMonthlyPayment(P, r, n);

  let balance = P;
  let month = 0;
  let totalInterest = 0;
  let totalPrincipal = 0;
  const schedule: ScheduleRow[] = [];
  const safetyLimit = n + 1; // extra payments only ever shorten the term

  while (balance > 0.005 && month < safetyLimit) {
    month++;
    const interestThisMonth = balance * r;
    const regularPrincipal = PMT - interestThisMonth;
    let extraThisMonth = extraMonthly;
    if (lumpSumMonth > 0 && month === lumpSumMonth) {
      extraThisMonth += lumpSum;
    }
    let totalPrincipalThisMonth = regularPrincipal + extraThisMonth;
    if (totalPrincipalThisMonth >= balance) {
      totalPrincipalThisMonth = balance;
    }
    balance = Math.max(0, balance - totalPrincipalThisMonth);
    totalInterest += interestThisMonth;
    totalPrincipal += totalPrincipalThisMonth;
    schedule.push({
      month,
      principalPaid: totalPrincipalThisMonth,
      interestPaid: interestThisMonth,
      remainingBalance: balance,
      isLumpMonth: lumpSumMonth > 0 && month === lumpSumMonth,
    });
    if (balance <= 0) break;
  }

  const standardTotalInterest = PMT * n - P;

  return { PMT, n, schedule, payoffMonth: month, totalInterest, totalPrincipal, standardTotalInterest };
}

/* ============================================================
   UI PRIMITIVES
============================================================ */
function Field({ label, hint, children }: { label: ReactNode; hint?: ReactNode; children: ReactNode }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: C.ink, marginBottom: 5 }}>{label}</label>
      {children}
      {hint && <div style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 4 }}>{hint}</div>}
    </div>
  );
}
const inputStyle: CSSProperties = {
  width: "100%",
  padding: "9px 11px",
  border: `1.5px solid ${fieldBorder}`,
  borderRadius: 7,
  fontFamily: SANS,
  fontSize: 14.5,
  color: C.ink,
  background: fieldBg,
  outline: "none",
  boxSizing: "border-box",
  boxShadow: "inset 0 1px 2px rgba(27,42,31,0.06)",
};
function MiniSlider({ min, max, step, value, onChange }: { min: number; max: number; step: number; value: number; onChange: (v: number) => void }) {
  const safe = isFinite(value) ? Math.min(max, Math.max(min, value)) : min;
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={safe}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      style={{ WebkitAppearance: "none", width: "100%", height: 4, borderRadius: 2, background: C.line, marginTop: 8, accentColor: C.greenBright }}
    />
  );
}
function Panel({ number, title, tag, children }: { number?: number | string; title?: ReactNode; tag?: ReactNode; children: ReactNode }) {
  return (
    <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, padding: "20px 22px 22px", marginBottom: 18 }}>
      {(number != null || title) && (
        <h2 style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 600, margin: "0 0 14px", color: C.greenDeep, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          {number != null && number !== "" && (
            <span style={{ fontFamily: MONO, fontSize: 11, color: "#fff", background: C.greenBright, width: 20, height: 20, borderRadius: 5, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {number}
            </span>
          )}
          {title}
          {tag && <span style={{ fontFamily: MONO, fontSize: 10, fontWeight: 400, color: C.inkSoft }}>{tag}</span>}
        </h2>
      )}
      {children}
    </div>
  );
}
function SectionLabel({ children }: { children: ReactNode }) {
  return <h3 style={{ fontFamily: MONO, fontSize: 11, textTransform: "uppercase", letterSpacing: ".07em", color: C.inkSoft, margin: "0 0 12px" }}>{children}</h3>;
}
function StatBox({ label, value, sub, highlight }: { label: string; value: ReactNode; sub: ReactNode; highlight?: boolean }) {
  const bg = highlight ? C.greenDeep : "#f2f4ee";
  const border = highlight ? C.greenDeep : "#d3dbc8";
  const labelColor = highlight ? "#dcead0" : C.inkSoft;
  const valColor = highlight ? "#fff" : C.greenDeep;
  const subColor = highlight ? "#dcead0" : C.inkSoft;
  return (
    <div style={{ background: bg, border: `1.5px solid ${border}`, borderRadius: 9, padding: "14px 16px" }}>
      <div style={{ fontFamily: MONO, fontSize: 10.5, textTransform: "uppercase", letterSpacing: ".05em", color: labelColor }}>{label}</div>
      <div style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 700, margin: "4px 0 2px", color: valColor }}>{value}</div>
      <div style={{ fontSize: 11.5, color: subColor }}>{sub}</div>
    </div>
  );
}
function MilestoneStat({ label, value, note, highlight }: { label: string; value: ReactNode; note: ReactNode; highlight?: boolean }) {
  const bg = highlight ? C.greenDeep : "#fff";
  const border = highlight ? C.greenDeep : "#cfe0c2";
  const labelColor = highlight ? "#eaf3e3" : C.inkSoft;
  const valColor = highlight ? "#fff" : C.greenDeep;
  const noteColor = highlight ? "#dcead0" : C.inkSoft;
  return (
    <div style={{ background: bg, border: `1.5px solid ${border}`, borderRadius: 8, padding: "10px 12px" }}>
      <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".04em", fontWeight: 700, color: labelColor, marginBottom: 3 }}>{label}</div>
      <div style={{ fontFamily: MONO, fontWeight: 700, fontSize: 17, color: valColor, marginBottom: 2 }}>{value}</div>
      <div style={{ fontSize: 10.5, color: noteColor, lineHeight: 1.3 }}>{note}</div>
    </div>
  );
}

const TERM_OPTIONS = [30, 20, 15, 10];
function TermSelector({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 6 }}>
        {TERM_OPTIONS.map((t) => {
          const active = t === value;
          return (
            <button
              key={t}
              type="button"
              onClick={() => onChange(t)}
              style={{
                border: `1px solid ${active ? "#6ca220" : fieldBorder}`,
                background: active ? C.greenWash : "#fff",
                color: active ? C.greenDeep : C.inkSoft,
                borderRadius: 7,
                textAlign: "center",
                padding: "9px 4px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {t} Years
            </button>
          );
        })}
      </div>
      <input
        type="range"
        min={1}
        max={30}
        step={1}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        style={{ WebkitAppearance: "none", width: "100%", height: 4, borderRadius: 2, background: C.line, accentColor: C.greenBright }}
      />
    </div>
  );
}

function PayoffMilestoneBar({ n, payoffMonth }: { n: number; payoffMonth: number }) {
  const pct = (m: number) => Math.min(100, Math.max(0, (m / n) * 100));
  const payoffPct = pct(payoffMonth);
  return (
    <div>
      <div style={{ position: "relative", height: 14, borderRadius: 99, background: "#fff", border: `1px solid ${C.line}`, overflow: "hidden" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${payoffPct}%`, background: C.greenDeep }} />
        <div style={{ position: "absolute", left: `${payoffPct}%`, top: 0, bottom: 0, right: 0, background: C.amberWash }} />
        <div style={{ position: "absolute", left: `${payoffPct}%`, top: 0, bottom: 0, width: 2, background: C.ink }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5, color: C.inkSoft, marginTop: 5 }}>
        <span>Month 0</span>
        <span style={{ fontWeight: 700, color: C.greenDeep }}>New payoff: month {payoffMonth}</span>
        <span>Original term end: month {n}</span>
      </div>
      <div style={{ display: "flex", gap: 16, fontSize: 11.5, marginTop: 8 }}>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: 3, background: C.greenDeep, display: "inline-block" }} /> Paid down with extra payments
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: 3, background: C.amberWash, border: `1px solid ${C.amber}`, display: "inline-block" }} /> Time saved off the original term
        </span>
      </div>
    </div>
  );
}

function InsightsPanel({ groups, nextSteps }: { groups: InsightGroup[]; nextSteps: string[] }) {
  return (
    <div style={{ background: "#f7f8f5", border: `1px solid ${C.line}`, borderRadius: 10, padding: "20px 22px 22px", marginBottom: 18 }}>
      <h2 style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 600, margin: "0 0 12px", color: C.ink }}>Recommendations &amp; Key Insights</h2>
      <div style={{ borderBottom: `1px solid ${C.line}`, marginBottom: 16 }} />
      <div className="epc-insights-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 20, alignItems: "start" }}>
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
          <p style={{ fontSize: 12, color: C.inkSoft, margin: "0 0 10px" }}>Based on your scenario, here&apos;s what we&apos;d suggest next:</p>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            {nextSteps.map((s, i) => (
              <li key={i} style={{ fontSize: 13, color: C.ink, marginBottom: 6, lineHeight: 1.5 }}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
      <style>{`@media (max-width: 640px) { .epc-insights-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */
export default function ExtraPaymentCalculator() {
  const [loanAmountText, setLoanAmountText] = useState("250,000");
  const [rateText, setRateText] = useState("6.500");
  const [term, setTerm] = useState(30);

  const [extraMonthlyText, setExtraMonthlyText] = useState("0");
  const [lumpSumText, setLumpSumText] = useState("0");
  const [lumpSumMonthText, setLumpSumMonthText] = useState("0");
  const [selectedPreset, setSelectedPreset] = useState<PresetId | null>(null);

  const todayISO = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [loanStartDateText, setLoanStartDateText] = useState(todayISO);

  const loanAmount = Math.max(0, toNumber(loanAmountText) || 0);
  const rate = Math.max(0, toNumber(rateText) || 0);
  const extraMonthly = Math.max(0, toNumber(extraMonthlyText) || 0);
  const lumpSum = Math.max(0, toNumber(lumpSumText) || 0);
  const lumpSumMonth = Math.max(0, Math.round(toNumber(lumpSumMonthText) || 0));

  function applyPreset(id: PresetId, monthly: number, lump: number, month: number) {
    setExtraMonthlyText(monthly.toLocaleString("en-US"));
    setLumpSumText(lump.toLocaleString("en-US"));
    setLumpSumMonthText(String(month));
    setSelectedPreset(id);
  }

  const result = useMemo(
    () => simulate(loanAmount, rate, term, extraMonthly, lumpSum, lumpSumMonth),
    [loanAmount, rate, term, extraMonthly, lumpSum, lumpSumMonth]
  );

  const interestSavings = result.standardTotalInterest - result.totalInterest;
  const totalSavings = interestSavings; // ported assumption: no separate savings mechanism exists in the original
  const monthsSaved = result.n - result.payoffMonth;

  const startDate = useMemo(() => {
    const parsed = loanStartDateText ? new Date(loanStartDateText + "T00:00:00") : null;
    return parsed && !isNaN(parsed.getTime()) ? parsed : new Date();
  }, [loanStartDateText]);
  const payoffDate = addMonths(startDate, result.payoffMonth);
  const standardPayoffDate = addMonths(startDate, result.n);

  const stdTotalPaid = result.PMT * result.n;
  const extraTotalPaid = loanAmount + result.totalInterest;
  const extraMonthlyDisplay =
    fmtMoney(result.PMT + extraMonthly) + (lumpSumMonth > 0 ? ` (+${fmtMoney(lumpSum)} in mo. ${lumpSumMonth})` : "");

  const termRows = useMemo(
    () =>
      [30, 20, 15, 10].map((t) => {
        const r = simulate(loanAmount, rate, t, extraMonthly, lumpSum, lumpSumMonth);
        return { t, r, savings: r.standardTotalInterest - r.totalInterest, isCurrent: t === term };
      }),
    [loanAmount, rate, extraMonthly, lumpSum, lumpSumMonth, term]
  );

  const insights = useMemo(() => {
    const savingsPct = result.standardTotalInterest > 0 ? (interestSavings / result.standardTotalInterest) * 100 : 0;
    const hasExtra = extraMonthly > 0 || lumpSum > 0;

    const interestBullets: string[] = [];
    if (!hasExtra) {
      interestBullets.push("No extra payments are currently entered — add a monthly amount or lump sum above to see potential interest savings.");
    } else {
      interestBullets.push(`Adding ${fmtMoney(extraMonthly)}/mo${lumpSum > 0 ? ` plus a ${fmtMoney(lumpSum)} lump sum in month ${lumpSumMonth}` : ""} saves ${fmtMoney(interestSavings)} in interest over the life of the loan.`);
      interestBullets.push(`That's roughly ${savingsPct.toFixed(1)}% less total interest than the standard ${term}-year schedule.`);
      interestBullets.push(`Your loan pays off in ${monthsToYearsMonths(result.payoffMonth)} instead of ${monthsToYearsMonths(result.n)} — ${monthsSaved > 0 ? `${monthsToYearsMonths(monthsSaved)} earlier` : "no time saved yet"}.`);
    }

    const strategyBullets: string[] = [];
    if (lumpSum > 0 && lumpSumMonth === 0) {
      strategyBullets.push("A lump sum amount is entered, but the lump sum month is set to 0 — it will be ignored until you enter the month it should be applied.");
    }
    if (extraMonthly > 0 && lumpSum === 0) {
      strategyBullets.push("A consistent monthly extra payment is one of the most reliable ways to shorten a loan — it compounds every month rather than depending on a single event.");
    }
    if (lumpSum > 0 && extraMonthly === 0) {
      strategyBullets.push("A one-time lump sum reduces principal immediately, but pairing it with even a small recurring extra payment typically saves more over the full term.");
    }
    if (hasExtra) {
      strategyBullets.push("Extra payments here are applied straight to principal — confirm with your servicer that additional payments are applied this way and not held as a future-payment credit.");
    } else {
      strategyBullets.push("Try the preset scenarios above (Minimal, Moderate, Aggressive) to see how different extra-payment strategies compare.");
    }

    const nextSteps: string[] = [];
    if (hasExtra) {
      nextSteps.push("Confirm your servicer applies extra payments directly to principal, with no prepayment penalty.");
    }
    nextSteps.push("Compare a shorter standard term (below) against extra payments on your current term — sometimes one beats the other.");
    nextSteps.push("Contact a Mortgage Brothers loan officer to review refinance or recasting options if you want to lock in a lower required payment.");

    return { interest: interestBullets, strategy: strategyBullets, nextSteps };
  }, [extraMonthly, lumpSum, lumpSumMonth, interestSavings, result, monthsSaved, term]);

  const comparisonRows: [string, string, string][] = [
    ["Monthly Payment", fmtMoney(result.PMT), extraMonthlyDisplay],
    ["Loan Term", monthsToYearsMonths(result.n), monthsToYearsMonths(result.payoffMonth)],
    ["Total Interest Paid", fmtMoney(result.standardTotalInterest), fmtMoney(result.totalInterest)],
    ["Total Amount Paid", fmtMoney(stdTotalPaid), fmtMoney(extraTotalPaid)],
    ["Payoff Date", fmtDate(standardPayoffDate), fmtDate(payoffDate)],
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
              Extra Payment Mortgage Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              See how extra monthly payments or a lump sum can shorten your loan and cut interest — results update instantly.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "28px 20px 64px" }}>
          {/* Payoff Milestone — bold, high-visibility centerpiece, full width at the very top */}
          <div style={{
            background: `linear-gradient(135deg, ${C.greenWash} 0%, #ffffff 55%)`,
            border: `2px solid ${C.greenBright}`,
            borderRadius: 12,
            padding: "16px 20px 18px",
            marginBottom: 18,
            boxShadow: "0 4px 18px rgba(58,125,30,0.12)",
          }}>
            <h2 style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 700, margin: "0 0 2px", color: C.greenDeep }}>Payoff Milestone</h2>
            <p style={{ fontSize: 12, color: C.inkSoft, margin: "0 0 12px" }}>
              Your original {term}-year schedule vs. your new payoff date with extra payments applied.
            </p>

            <PayoffMilestoneBar n={result.n} payoffMonth={result.payoffMonth} />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10, marginTop: 14 }}>
              <MilestoneStat label="Time Saved" value={monthsSaved > 0 ? monthsToYearsMonths(monthsSaved) : "None yet"} note={monthsSaved > 0 ? "earlier than the original term" : "add extra payments above"} highlight={monthsSaved > 0} />
              <MilestoneStat label="Interest Saved" value={fmtMoney(interestSavings)} note="vs. standard schedule" />
              <MilestoneStat label="New Payoff Date" value={fmtDate(payoffDate)} note={`vs. ${fmtDate(standardPayoffDate)} standard`} />
            </div>
          </div>

          <div className="epc-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
            {/* ============ INPUT COLUMN ============ */}
            <div>
              <Panel number={1} title="Loan Details">
                <Field label="Original Loan Amount ($)">
                  <input className="epc-input" style={inputStyle} inputMode="numeric" value={loanAmountText}
                    onChange={(e) => setLoanAmountText(e.target.value)}
                    onBlur={() => setLoanAmountText(loanAmount.toLocaleString("en-US"))} />
                  <MiniSlider min={0} max={2000000} step={5000} value={loanAmount} onChange={(v) => setLoanAmountText(Math.round(v).toLocaleString("en-US"))} />
                </Field>
                <Field label="Interest Rate (%)">
                  <input className="epc-input" style={inputStyle} inputMode="decimal" value={rateText}
                    onChange={(e) => setRateText(e.target.value)}
                    onBlur={() => { const v = toNumber(rateText); if (isFinite(v)) setRateText(Math.max(0, v).toFixed(3)); }} />
                  <MiniSlider min={0} max={15} step={0.125} value={rate} onChange={(v) => setRateText(v.toString())} />
                </Field>
                <Field label="Loan Term">
                  <TermSelector value={term} onChange={setTerm} />
                </Field>
              </Panel>

              <Panel number={2} title="Extra Payments">
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8, marginBottom: 16 }}>
                  <button type="button" onClick={() => applyPreset("minimal", 100, 2000, 12)}
                    style={{
                      border: `1.5px solid ${selectedPreset === "minimal" ? C.greenBright : fieldBorder}`,
                      background: selectedPreset === "minimal" ? C.greenWash : "#fff",
                      boxShadow: selectedPreset === "minimal" ? "0 0 0 3px rgba(108,162,32,0.15)" : "none",
                      borderRadius: 8, padding: "9px 12px", textAlign: "left", cursor: "pointer", fontFamily: SANS,
                    }}>
                    <div style={{ fontWeight: 700, fontSize: 13, color: C.greenDeep }}>Minimal Extra {selectedPreset === "minimal" && "✓"}</div>
                    <div style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 2 }}>Add $100 monthly and $2,000 lump sum payment in month 12</div>
                  </button>
                  <button type="button" onClick={() => applyPreset("moderate", 200, 5000, 12)}
                    style={{
                      border: `1.5px solid ${selectedPreset === "moderate" ? C.greenBright : fieldBorder}`,
                      background: selectedPreset === "moderate" ? C.greenWash : "#fff",
                      boxShadow: selectedPreset === "moderate" ? "0 0 0 3px rgba(108,162,32,0.15)" : "none",
                      borderRadius: 8, padding: "9px 12px", textAlign: "left", cursor: "pointer", fontFamily: SANS,
                    }}>
                    <div style={{ fontWeight: 700, fontSize: 13, color: C.greenDeep }}>Moderate Extra {selectedPreset === "moderate" && "✓"}</div>
                    <div style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 2 }}>Add $200 monthly and $5,000 lump sum payment in month 12</div>
                  </button>
                  <button type="button" onClick={() => applyPreset("aggressive", 500, 10000, 12)}
                    style={{
                      border: `1.5px solid ${selectedPreset === "aggressive" ? C.greenBright : fieldBorder}`,
                      background: selectedPreset === "aggressive" ? C.greenWash : "#fff",
                      boxShadow: selectedPreset === "aggressive" ? "0 0 0 3px rgba(108,162,32,0.15)" : "none",
                      borderRadius: 8, padding: "9px 12px", textAlign: "left", cursor: "pointer", fontFamily: SANS,
                    }}>
                    <div style={{ fontWeight: 700, fontSize: 13, color: C.greenDeep }}>Aggressive Payoff {selectedPreset === "aggressive" && "✓"}</div>
                    <div style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 2 }}>Add $500 monthly and $10,000 lump sum payment in month 12</div>
                  </button>
                </div>

                <Field label="Additional Monthly Payment ($)" hint="Extra amount added to every monthly payment, applied to principal.">
                  <input className="epc-input" style={inputStyle} inputMode="numeric" value={extraMonthlyText}
                    onChange={(e) => { setExtraMonthlyText(e.target.value); setSelectedPreset(null); }}
                    onBlur={() => setExtraMonthlyText(extraMonthly.toLocaleString("en-US"))} />
                  <MiniSlider min={0} max={3000} step={25} value={extraMonthly} onChange={(v) => { setExtraMonthlyText(Math.round(v).toLocaleString("en-US")); setSelectedPreset(null); }} />
                </Field>
                <Field label="Lump Sum Payment ($)">
                  <input className="epc-input" style={inputStyle} inputMode="numeric" value={lumpSumText}
                    onChange={(e) => { setLumpSumText(e.target.value); setSelectedPreset(null); }}
                    onBlur={() => setLumpSumText(lumpSum.toLocaleString("en-US"))} />
                  <MiniSlider min={0} max={50000} step={500} value={lumpSum} onChange={(v) => { setLumpSumText(Math.round(v).toLocaleString("en-US")); setSelectedPreset(null); }} />
                </Field>
                <Field label="Lump Sum Payment Month" hint="12 = after one year. Enter 0 to skip — if 0, the lump sum amount is ignored.">
                  <input className="epc-input" style={inputStyle} inputMode="numeric" value={lumpSumMonthText}
                    onChange={(e) => { setLumpSumMonthText(e.target.value); setSelectedPreset(null); }}
                    onBlur={() => setLumpSumMonthText(String(lumpSumMonth))} />
                  <MiniSlider min={0} max={term * 12} step={1} value={lumpSumMonth} onChange={(v) => { setLumpSumMonthText(String(Math.round(v))); setSelectedPreset(null); }} />
                </Field>
              </Panel>

              <Panel number={3} title="Loan Start Date">
                <Field label="Start Date" hint="Defaults to today. Enter a past date to see what your payoff date would have looked like from when the loan actually began.">
                  <input className="epc-input" style={inputStyle} type="date" value={loanStartDateText}
                    onChange={(e) => setLoanStartDateText(e.target.value)} />
                </Field>
              </Panel>
            </div>

            {/* ============ RESULTS COLUMN ============ */}
            <div>
              <div style={{
                background: `linear-gradient(135deg, ${C.greenWash} 0%, #ffffff 60%)`,
                border: `2px solid ${C.greenBright}`,
                borderRadius: 12,
                padding: "20px 22px 22px",
                marginBottom: 18,
                boxShadow: "0 4px 18px rgba(58,125,30,0.12)",
              }}>
                <h2 style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 700, margin: "0 0 14px", color: C.greenDeep }}>Your Loan Summary</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <StatBox label="New Payoff Date" value={fmtDate(payoffDate)} sub={monthsSaved > 0 ? `${monthsToYearsMonths(monthsSaved)} earlier` : "Same as standard schedule"} />
                  <StatBox label="Interest Savings" value={fmtMoney(interestSavings)} sub="vs. standard schedule" highlight />
                  <StatBox label="Total Savings" value={fmtMoney(totalSavings)} sub="reduced interest cost" />
                  <StatBox label="Payoff Time" value={monthsToYearsMonths(result.payoffMonth)} sub={`vs. ${monthsToYearsMonths(result.n)} standard`} />
                </div>
              </div>

              <Panel>
                <SectionLabel>Payment Distribution</SectionLabel>
                <p style={{ fontSize: 11.5, color: C.inkSoft, margin: "0 0 12px" }}>
                  How your recurring monthly outlay splits between the standard payment and your extra monthly payment (lump sums are one-time and shown separately).
                </p>
                <InteractivePieChart
                  donut
                  showLegend
                  centerTextTitle="per month"
                  centerTextSub={fmtMoney(result.PMT + extraMonthly)}
                  dataItems={[
                    { label: "Standard Payment (P&I)", value: result.PMT, color: C.greenDeep },
                    { label: "Extra Monthly Payment", value: extraMonthly, color: C.greenBright },
                  ]}
                />
              </Panel>

              <Panel>
                <SectionLabel>Payment Comparison</SectionLabel>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: "left", fontFamily: MONO, fontSize: 10, textTransform: "uppercase", color: C.inkSoft, padding: "6px 8px", borderBottom: `2px solid ${C.line}` }}></th>
                      <th style={{ textAlign: "right", fontFamily: MONO, fontSize: 10, textTransform: "uppercase", color: C.inkSoft, padding: "6px 8px", borderBottom: `2px solid ${C.line}` }}>Standard Schedule</th>
                      <th style={{ textAlign: "right", fontFamily: MONO, fontSize: 10, textTransform: "uppercase", color: C.inkSoft, padding: "6px 8px", borderBottom: `2px solid ${C.line}` }}>With Extra Payments</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map(([label, std, extra], i) => (
                      <tr key={i}>
                        <td style={{ textAlign: "left", padding: "7px 8px", borderBottom: `1px solid ${C.line}` }}>{label}</td>
                        <td style={{ textAlign: "right", padding: "7px 8px", borderBottom: `1px solid ${C.line}`, fontVariantNumeric: "tabular-nums" }}>{std}</td>
                        <td style={{ textAlign: "right", padding: "7px 8px", borderBottom: `1px solid ${C.line}`, fontVariantNumeric: "tabular-nums" }}>{extra}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Panel>

              <Panel>
                <SectionLabel>
                  Amortization Schedule <span style={{ fontWeight: 400, textTransform: "none" }}>(with extra payments)</span>
                </SectionLabel>
                <div style={{ maxHeight: 340, overflowY: "auto", border: `1px solid ${C.line}`, borderRadius: 8 }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5 }}>
                    <thead>
                      <tr>
                        {["Month", "Principal Paid", "Interest Paid", "Remaining Balance"].map((h, i) => (
                          <th key={h} style={{
                            position: "sticky", top: 0, background: C.greenWash,
                            textAlign: i === 0 ? "left" : "right", fontFamily: MONO, fontSize: 10, textTransform: "uppercase",
                            color: C.greenDeep, padding: "7px 10px", borderBottom: `2px solid ${C.line}`, zIndex: 1,
                          }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {result.schedule.map((row) => {
                        const isFinal = row.month === result.payoffMonth;
                        const rowBg = isFinal ? C.greenWash : row.isLumpMonth ? C.amberWash : undefined;
                        return (
                          <tr key={row.month} style={{ background: rowBg }}>
                            <td style={{ textAlign: "left", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, fontWeight: isFinal ? 700 : 600 }}>{row.month}</td>
                            <td style={{ textAlign: "right", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, fontVariantNumeric: "tabular-nums", fontWeight: isFinal ? 700 : 400 }}>{fmtMoney(row.principalPaid)}</td>
                            <td style={{ textAlign: "right", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, fontVariantNumeric: "tabular-nums", fontWeight: isFinal ? 700 : 400 }}>{fmtMoney(row.interestPaid)}</td>
                            <td style={{ textAlign: "right", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, fontVariantNumeric: "tabular-nums", fontWeight: isFinal ? 700 : 400 }}>{fmtMoney(row.remainingBalance)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </Panel>

              <Panel>
                <SectionLabel>Compare Different Loan Terms</SectionLabel>
                <p style={{ fontSize: 11.5, color: C.inkSoft, margin: "0 0 12px" }}>
                  Same loan amount, rate, and extra payment inputs applied across all four standard terms.
                </p>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                  <thead>
                    <tr>
                      {["Loan Term", "Standard Payment", "Payoff Time (Extra)", "Total Interest (Extra)", "Interest Savings"].map((h, i) => (
                        <th key={h} style={{ textAlign: i === 0 ? "left" : "right", fontFamily: MONO, fontSize: 10, textTransform: "uppercase", color: C.inkSoft, padding: "6px 8px", borderBottom: `2px solid ${C.line}` }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {termRows.map(({ t, r, savings, isCurrent }) => (
                      <tr key={t} style={{ background: isCurrent ? C.greenWash : undefined, fontWeight: isCurrent ? 700 : 400 }}>
                        <td style={{ textAlign: "left", padding: "7px 8px", borderBottom: `1px solid ${C.line}` }}>{t} Years</td>
                        <td style={{ textAlign: "right", padding: "7px 8px", borderBottom: `1px solid ${C.line}`, fontVariantNumeric: "tabular-nums" }}>{fmtMoney(r.PMT)}</td>
                        <td style={{ textAlign: "right", padding: "7px 8px", borderBottom: `1px solid ${C.line}`, fontVariantNumeric: "tabular-nums" }}>{monthsToYearsMonths(r.payoffMonth)}</td>
                        <td style={{ textAlign: "right", padding: "7px 8px", borderBottom: `1px solid ${C.line}`, fontVariantNumeric: "tabular-nums" }}>{fmtMoney(r.totalInterest)}</td>
                        <td style={{ textAlign: "right", padding: "7px 8px", borderBottom: `1px solid ${C.line}`, fontVariantNumeric: "tabular-nums" }}>{fmtMoney(savings)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Panel>

              {/* Insights — last section, below all charts/tables */}
              <InsightsPanel
                groups={[
                  { title: "Interest Savings", color: C.greenDeep, bullets: insights.interest },
                  { title: "Payoff Strategy", color: C.amber, bullets: insights.strategy },
                ]}
                nextSteps={insights.nextSteps}
              />

              <p style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 18, lineHeight: 1.5 }}>
                This Extra Payment Calculator is for illustrative purposes only and not a guarantee of actual savings or loan terms. Results are estimates based on the information provided and may not reflect your actual situation.
              </p>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 760px) {
            .epc-layout { grid-template-columns: 1fr !important; }
          }
          .epc-input { transition: border-color .15s, box-shadow .15s, background .15s; }
          .epc-input:hover { border-color: #a9b59c; }
          .epc-input:focus { background: #ffffff; border-color: ${C.greenBright}; box-shadow: 0 0 0 3px ${C.greenWash}; }
        `}</style>
      </main>
      <Footer />
    </div>
  );
}
