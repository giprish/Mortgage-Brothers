"use client";

import { useMemo, useState, type ChangeEvent, type CSSProperties, type ReactNode } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import {
  InteractivePieChart,
  BasicPaymentOverTimeChart,
  LtvOverTimeChart,
} from "../component/InteractiveCharts";

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
interface ScheduleRow {
  month: number;
  principal: number;
  interest: number;
  mip: number;
  balance: number;
}

interface DownPaymentBounds {
  minimum: number;
  maximum: number;
  limitBinding: boolean;
}

interface SelectOption {
  value: string | number;
  label: string;
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
function fmtPct(n: number, decimals = 2): string {
  if (!isFinite(n)) n = 0;
  return n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + "%";
}

/* ============================================================
   FHA LOAN LIMIT TABLE — Arizona only, ported 1:1
   Index: [1-unit, 2-unit, 3-unit, 4-unit]
============================================================ */
const FLOOR: number[] = [541287, 693050, 837700, 1041125];
const FHA_LIMITS: Record<string, number[]> = {
  Maricopa: [557750, 714100, 863300, 1073000],
  Pinal: [557750, 714100, 863300, 1073000],
  Coconino: [609500, 780400, 943200, 1172500],
  Pima: FLOOR, Apache: FLOOR, Cochise: FLOOR, Gila: FLOOR,
  Graham: FLOOR, Greenlee: FLOOR, "La Paz": FLOOR, Mohave: FLOOR,
  Navajo: FLOOR, "Santa Cruz": FLOOR, Yavapai: FLOOR, Yuma: FLOOR,
};
const COUNTIES = Object.keys(FHA_LIMITS);
const PROPERTY_TYPES = ["Single Family", "Duplex", "Triplex", "Fourplex"];

/* ============================================================
   FHA MIP LOGIC — current HUD ML 2023-05 rates, ported 1:1
============================================================ */
const UFMIP_RATE = 1.75;
function annualMipRate(baseLoanAmount: number, ltv: number, termYears: number): number {
  const highBalance = baseLoanAmount > 726200;
  if (!highBalance) {
    if (termYears > 15) {
      if (ltv <= 90) return 0.5;
      if (ltv <= 95) return 0.5;
      return 0.55;
    } else {
      if (ltv <= 90) return 0.15;
      return 0.4;
    }
  } else {
    if (termYears > 15) {
      if (ltv <= 90) return 0.7;
      if (ltv <= 95) return 0.7;
      return 0.75;
    } else {
      if (ltv <= 78) return 0.15;
      if (ltv <= 90) return 0.4;
      return 0.65;
    }
  }
}
function stdMonthlyPayment(P: number, r: number, n: number): number {
  if (r === 0) return P / n;
  const factor = Math.pow(1 + r, n);
  return (P * (r * factor)) / (factor - 1);
}

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
   DOWN PAYMENT MIN/MAX ENFORCEMENT — ported 1:1
============================================================ */
function downPaymentBounds(homePrice: number, limit: number): DownPaymentBounds {
  const standardMinimum = homePrice * 0.035;
  const limitBasedMinimum = Math.max(0, homePrice - limit);
  const minimum = Math.max(standardMinimum, limitBasedMinimum);
  const maximum = homePrice * 0.9;
  return { minimum, maximum, limitBinding: limitBasedMinimum > standardMinimum };
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
      style={{ WebkitAppearance: "none", display: "block", width: "100%", maxWidth: "100%", boxSizing: "border-box", height: 4, borderRadius: 2, background: C.line, marginTop: 8, accentColor: C.greenBright }}
    />
  );
}
function Panel({ number, title, tag, children }: { number?: number | string; title?: ReactNode; tag?: ReactNode; children: ReactNode }) {
  return (
    <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, padding: "20px 22px 22px", marginBottom: 18 }}>
      {(number || title) && (
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
function ResultLine({ label, value, total }: { label: string; value: ReactNode; total?: boolean }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "baseline",
      padding: total ? "10px 0 0" : "7px 0",
      borderTop: total ? `2px solid ${C.green}` : "none",
      borderBottom: total ? "none" : `1px dashed ${C.line}`,
      marginTop: total ? 4 : 0,
    }}>
      <span style={{ color: C.inkSoft, fontSize: 13.5 }}>{label}</span>
      <span style={{ fontWeight: 700, fontVariantNumeric: "tabular-nums", color: total ? C.greenDeep : C.ink, fontSize: total ? 16 : 13.5 }}>{value}</span>
    </div>
  );
}
function SelectField({
  label,
  hint,
  value,
  onChange,
  options,
}: {
  label: ReactNode;
  hint?: ReactNode;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
}) {
  return (
    <Field label={label} hint={hint}>
      <select value={value} onChange={onChange} style={{ ...inputStyle, cursor: "pointer" }}>
        {options.map((o) => (
          <option key={String(o.value)} value={o.value}>{o.label}</option>
        ))}
      </select>
    </Field>
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

const TERM_OPTIONS = [30, 25, 20, 15, 10];
function TermSelector({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6, marginBottom: 6 }}>
        {TERM_OPTIONS.map((t) => {
          const active = t === value;
          return (
            <button key={t} type="button" onClick={() => onChange(t)}
              style={{
                border: `1px solid ${active ? C.greenBright : fieldBorder}`,
                background: active ? C.greenWash : "#fff",
                color: active ? C.greenDeep : C.inkSoft,
                borderRadius: 7, textAlign: "center", padding: "8px 2px", fontSize: 12, fontWeight: 600, cursor: "pointer",
              }}>
              {t}yr
            </button>
          );
        })}
      </div>
      <input type="range" min={1} max={30} step={1} value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        style={{ WebkitAppearance: "none", width: "100%", height: 4, borderRadius: 2, background: C.line, accentColor: C.greenBright }} />
    </div>
  );
}

function InsightsPanel({ groups, nextSteps }: { groups: InsightGroup[]; nextSteps: string[] }) {
  return (
    <div style={{ background: "#f7f8f5", border: `1px solid ${C.line}`, borderRadius: 10, padding: "20px 22px 22px", marginBottom: 18 }}>
      <h2 style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 600, margin: "0 0 12px", color: C.ink }}>Recommendations &amp; Key Insights</h2>
      <div style={{ borderBottom: `1px solid ${C.line}`, marginBottom: 16 }} />
      <div className="fha-insights-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 20, alignItems: "start" }}>
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
      <style>{`@media (max-width: 640px) { .fha-insights-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */
export default function FhaLoanCalculator() {
  const [county, setCounty] = useState("Maricopa");
  const [propertyType, setPropertyType] = useState(0);

  const [homePriceText, setHomePriceText] = useState("450,000");
  const [downPaymentDollarText, setDownPaymentDollarText] = useState("15,750");
  const [downPaymentPercentText, setDownPaymentPercentText] = useState("3.50");
  const [rateText, setRateText] = useState("6.500");
  const [term, setTerm] = useState(30);

  const [propertyTaxRateText, setPropertyTaxRateText] = useState("");
  const [homeInsuranceText, setHomeInsuranceText] = useState("");

  const limit = FHA_LIMITS[county][propertyType];
  const homePrice = Math.max(0, toNumber(homePriceText) || 0);
  const bounds = useMemo(() => downPaymentBounds(homePrice, limit), [homePrice, limit]);

  function onDownPaymentDollarChange(text: string) {
    setDownPaymentDollarText(text);
    const amt = Math.max(0, toNumber(text) || 0);
    const pct = homePrice > 0 ? (amt / homePrice) * 100 : 0;
    setDownPaymentPercentText((Math.round(pct * 100) / 100).toFixed(2));
  }
  function onDownPaymentPercentChange(text: string) {
    setDownPaymentPercentText(text);
    const pctVal = toNumber(text);
    const amt = homePrice > 0 && isFinite(pctVal) ? homePrice * (pctVal / 100) : 0;
    setDownPaymentDollarText(Math.round(amt).toLocaleString("en-US"));
  }
  function onHomePriceChange(text: string) {
    setHomePriceText(text);
    const newVal = Math.max(0, toNumber(text) || 0);
    // The down payment dollar amount is the independent, committed value and never changes
    // here. Percent is purely a derived display of that dollar amount against the new price.
    const dp = Math.max(0, toNumber(downPaymentDollarText) || 0);
    const pct = newVal > 0 ? (dp / newVal) * 100 : 0;
    setDownPaymentPercentText((Math.round(pct * 100) / 100).toFixed(2));
  }

  function onCountyChange(e: ChangeEvent<HTMLSelectElement>) {
    setCounty(e.target.value);
  }
  function onPropertyTypeChange(e: ChangeEvent<HTMLSelectElement>) {
    setPropertyType(parseInt(e.target.value, 10));
  }

  const homePriceHint = homePrice > limit
    ? `This price exceeds the ${fmtMoney(limit)} FHA limit for this county/property type — a larger down payment is required.`
    : "";

  // Home Price and Down Payment are independent inputs — moving one never changes the
  // other's value. We still flag (loudly) when the combination isn't FHA-compliant, but we
  // no longer silently override what the user entered.
  const downPaymentRaw = Math.max(0, toNumber(downPaymentDollarText) || 0);
  const infeasible = bounds.minimum > bounds.maximum + 0.5;
  const isOutOfBounds = !infeasible && (downPaymentRaw < bounds.minimum - 0.5 || downPaymentRaw > bounds.maximum + 0.5);
  // Distinguish "below the ordinary 3.5% minimum" from "the county's FHA loan limit itself
  // is binding" — only the latter should flag the loan-limit callout in Property Details.
  const loanLimitExceeded = infeasible || (bounds.limitBinding && downPaymentRaw < bounds.minimum - 0.5);

  let limitMessage = "";
  if (infeasible) {
    const loanAtMaxDown = homePrice - bounds.maximum;
    limitMessage = `This home price isn't eligible for FHA financing in ${county} County (${PROPERTY_TYPES[propertyType]}) — even a 90% down payment leaves a ${fmtMoney(loanAtMaxDown)} loan, still over the ${fmtMoney(limit)} limit. Lower the home price or ask about a different loan program.`;
  } else if (downPaymentRaw < bounds.minimum - 0.5) {
    limitMessage = bounds.limitBinding
      ? `Home price exceeds the FHA loan limit for this county/property type — down payment needs to be at least ${fmtMoney(bounds.minimum)} to keep the loan at or under ${fmtMoney(limit)}.`
      : `FHA requires a minimum 3.5% down payment — that's ${fmtMoney(bounds.minimum)} for this home price.`;
  } else if (downPaymentRaw > bounds.maximum + 0.5) {
    limitMessage = `FHA down payments are capped at 90% of home price (${fmtMoney(bounds.maximum)} here).`;
  }

  const rate = Math.max(0, toNumber(rateText) || 0);
  const n = term * 12;
  const r = rate / 100 / 12;

  const baseLoan = Math.max(0, homePrice - downPaymentRaw);
  const ltv = homePrice > 0 ? (baseLoan / homePrice) * 100 : 0;
  const upfrontMip = baseLoan * (UFMIP_RATE / 100);
  const totalLoan = baseLoan + upfrontMip;
  const mipRate = annualMipRate(baseLoan, ltv, term);

  const PMT = stdMonthlyPayment(baseLoan, r, n);
  const month1Interest = baseLoan * r;
  const month1Principal = PMT - month1Interest;
  const month1Mip = (baseLoan * (mipRate / 100)) / 12;
  const taxDefaultDollar = lookupBandTable(PROPERTY_TAX_TABLE, homePrice);
  const taxDefaultRate = homePrice > 0 ? Math.round((taxDefaultDollar / homePrice) * 10000) / 100 : 0;
  const insDefault = lookupBandTable(INSURANCE_TABLE, homePrice);
  const propertyTaxManual = propertyTaxRateText.trim() === "" ? null : toNumber(propertyTaxRateText);
  const insuranceManual = homeInsuranceText.trim() === "" ? null : toNumber(homeInsuranceText);
  const taxAnnual = propertyTaxManual !== null && isFinite(propertyTaxManual) ? homePrice * (propertyTaxManual / 100) : taxDefaultDollar;
  const insAnnual = insuranceManual !== null && isFinite(insuranceManual) ? insuranceManual : insDefault;
  const propertyTaxMonthly = taxAnnual / 12;
  const homeInsuranceMonthly = insAnnual / 12;

  const totalMonthlyPayment = PMT + month1Mip + propertyTaxMonthly + homeInsuranceMonthly;

  const schedule = useMemo((): ScheduleRow[] => {
    let balance = baseLoan;
    const rows: ScheduleRow[] = [];
    for (let month = 1; month <= n; month++) {
      const interestThisMonth = balance * r;
      let principalThisMonth = PMT - interestThisMonth;
      if (principalThisMonth >= balance) principalThisMonth = balance;
      const mipThisMonth = (balance * (mipRate / 100)) / 12;
      balance = Math.max(0, balance - principalThisMonth);
      rows.push({ month, principal: principalThisMonth, interest: interestThisMonth, mip: mipThisMonth, balance });
      if (balance <= 0) break;
    }
    return rows;
  }, [baseLoan, r, n, PMT, mipRate]);

  /* MIP Removal Milestone (HUD ML 2013-04: ≤90% LTV at closing removes MIP after 11 years).
     For LTV > 90% at closing, MIP is life-of-loan under FHA rules — but rather than stop
     there, we surface the month the loan naturally amortizes down to 80% LTV (using the
     original home price, no appreciation assumed), since that's the point a borrower could
     refinance into a conventional loan and drop MIP entirely. */
  const naturalPayoffMonth = schedule.length || n;
  const elevenYearMonth = 132;
  const canRemove = ltv <= 90;

  const refinanceEligibleMonth = useMemo((): number | null => {
    if (canRemove || homePrice <= 0) return null;
    const hit = schedule.find((row) => row.balance / homePrice <= 0.8);
    return hit ? hit.month : naturalPayoffMonth;
  }, [canRemove, homePrice, schedule, naturalPayoffMonth]);

  const milestoneMonth: number = canRemove
    ? Math.min(elevenYearMonth, naturalPayoffMonth)
    : (refinanceEligibleMonth ?? naturalPayoffMonth);
  const mipPaidByMilestone = schedule.filter((row) => row.month <= milestoneMonth).reduce((sum, row) => sum + row.mip, 0);
  const mipSavings = canRemove
    ? schedule.filter((row) => row.month > milestoneMonth).reduce((sum, row) => sum + row.mip, 0)
    : 0;

  const insights = useMemo(() => {
    const cost: string[] = [
      `Your base loan amount is ${fmtMoney(baseLoan)} at ${fmtPct(ltv, 1)} LTV, with a ${fmtMoney(upfrontMip)} upfront MIP financed into the loan for a total loan amount of ${fmtMoney(totalLoan)}.`,
      `Your estimated total monthly payment is ${fmtMoney(totalMonthlyPayment)} — ${fmtMoney(PMT)} in principal and interest, ${fmtMoney(month1Mip)} in monthly MIP (${fmtPct(mipRate, 2)} annual rate), ${fmtMoney(propertyTaxMonthly)} in property taxes, and ${fmtMoney(homeInsuranceMonthly)} in homeowners insurance.`,
    ];
    if (homePrice > limit) {
      cost.push(`Your home price exceeds the ${fmtMoney(limit)} FHA loan limit for ${county} County (${PROPERTY_TYPES[propertyType]}) — a larger down payment than the standard 3.5% minimum is required to keep the loan within the limit.`);
    }

    const mipNotes: string[] = [];
    if (canRemove) {
      mipNotes.push(`Because your LTV at closing is ${fmtPct(ltv, 1)} (at or under 90%), monthly MIP is scheduled to be removed after 11 years (month ${milestoneMonth}), saving roughly ${fmtMoney(mipSavings)} in MIP compared to paying it for the full loan term.`);
    } else {
      mipNotes.push(`Because your LTV at closing is ${fmtPct(ltv, 1)} (over 90%), monthly MIP applies for the life of the loan under current FHA rules. But amortization alone brings you to 80% LTV by month ${milestoneMonth} (no home value appreciation assumed) — at that point you could refinance into a conventional loan and drop MIP entirely. You'd have paid roughly ${fmtMoney(mipPaidByMilestone)} in MIP by then.`);
    }
    mipNotes.push("The 1.75% upfront MIP is financed into the loan balance in this estimate; some borrowers choose to pay it in cash at closing instead, which would lower the total loan amount.");

    const nextSteps = [
      "Get a verified FHA pre-approval to confirm your exact loan limit, MIP rate, and qualifying ratios.",
      "Ask a loan officer whether a conventional loan might cost less over time once PMI cancellation is factored in, especially if your LTV is above 90%.",
      "Contact a Mortgage Brothers loan officer to review your options and confirm current FHA guidelines.",
    ];

    return { cost, mip: mipNotes, nextSteps };
  }, [baseLoan, ltv, upfrontMip, totalLoan, totalMonthlyPayment, PMT, month1Mip, mipRate, homePrice, limit, county, propertyType, canRemove, milestoneMonth, mipSavings, mipPaidByMilestone, propertyTaxMonthly, homeInsuranceMonthly]);

  const paymentTotal = month1Principal + month1Interest + month1Mip + propertyTaxMonthly + homeInsuranceMonthly;

  return (
    <div className="flex flex-col min-h-screen" style={{ background: C.paper }}>
      <Navbar />
      <main className="flex-grow" style={{ color: C.ink, fontFamily: SANS, fontSize: 15, lineHeight: 1.5, overflowX: "hidden" }}>
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
              FHA Loan Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Estimate FHA payments, MIP, and Arizona county loan limits — results update as you adjust the inputs.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "28px 20px 64px", boxSizing: "border-box" }}>
          {/* Amortization Over Time — bold, high-visibility centerpiece, full width at the very top */}
          <div style={{
            background: `linear-gradient(135deg, ${C.greenWash} 0%, #ffffff 55%)`,
            border: `2px solid ${C.greenBright}`,
            borderRadius: 12,
            padding: "16px 20px 18px",
            marginBottom: 18,
            boxShadow: "0 4px 18px rgba(58,125,30,0.12)",
          }}>
            <h2 style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 700, margin: "0 0 2px", color: C.greenDeep }}>Amortization Over Time</h2>
            <p style={{ fontSize: 12, color: C.inkSoft, margin: "0 0 12px" }}>
              How your payment splits between principal and interest, and how your balance declines, across the full loan term.
            </p>
            <BasicPaymentOverTimeChart
              schedule={schedule.map((row) => ({
                paymentNum: row.month,
                principal: row.principal,
                interest: row.interest,
                endBalance: row.balance,
              }))}
            />
          </div>

          <div className="fha-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
            {/* ============ INPUT COLUMN ============ */}
            <div style={{ minWidth: 0 }}>
              <Panel number={1} title="Property Details">
                <SelectField label="Arizona County" value={county} onChange={onCountyChange}
                  options={COUNTIES.map((c) => ({ value: c, label: c }))} />
                <SelectField label="Property Type" value={propertyType} onChange={onPropertyTypeChange}
                  options={PROPERTY_TYPES.map((p, i) => ({ value: i, label: p }))} />
                <div style={{
                  background: loanLimitExceeded ? C.dangerWash : C.greenWash,
                  border: `1px solid ${loanLimitExceeded ? "#e2b3ac" : "#cfe0c2"}`,
                  borderRadius: 8, padding: "10px 12px", fontSize: 12.5,
                  color: loanLimitExceeded ? C.danger : C.greenDeep, marginTop: 2, marginBottom: 14,
                }}>
                  FHA Loan Limit for this county &amp; property type: <span style={{ fontWeight: 700, fontSize: 15 }}>{fmtMoney(limit)}</span>
                  {loanLimitExceeded && <div style={{ marginTop: 6, fontWeight: 600 }}>⚠ Current inputs exceed this limit — increase the down payment below to bring the loan into compliance.</div>}
                </div>
              </Panel>

              <Panel number={2} title="Loan Details">
                <Field label="Home Price ($)" hint={homePriceHint}>
                  <input className="fha-input" style={inputStyle} inputMode="numeric" value={homePriceText}
                    onChange={(e) => onHomePriceChange(e.target.value)}
                    onBlur={() => setHomePriceText(homePrice.toLocaleString("en-US"))} />
                  <MiniSlider min={0} max={3000000} step={5000} value={homePrice} onChange={(v) => onHomePriceChange(String(Math.round(v)))} />
                </Field>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  <Field label="Down Payment ($)">
                    <input className="fha-input" style={{ ...inputStyle, borderColor: isOutOfBounds || infeasible ? C.danger : fieldBorder }} inputMode="numeric" value={downPaymentDollarText}
                      onChange={(e) => onDownPaymentDollarChange(e.target.value)}
                      onBlur={() => setDownPaymentDollarText(downPaymentRaw.toLocaleString("en-US"))} />
                  </Field>
                  <Field label="Down Payment (%)">
                    <input className="fha-input" style={{ ...inputStyle, borderColor: isOutOfBounds || infeasible ? C.danger : fieldBorder }} inputMode="decimal" value={downPaymentPercentText}
                      onChange={(e) => onDownPaymentPercentChange(e.target.value)}
                      onBlur={() => setDownPaymentPercentText((homePrice > 0 ? (downPaymentRaw / homePrice) * 100 : 0).toFixed(2))} />
                  </Field>
                </div>
                <MiniSlider min={0} max={500000} step={500} value={downPaymentRaw} onChange={(v) => onDownPaymentDollarChange(String(Math.round(v)))} />
                {limitMessage && (
                  <div style={{
                    fontSize: 12, marginTop: 6, marginBottom: 10, fontWeight: 600, color: infeasible ? C.danger : C.amber,
                    background: infeasible ? C.dangerWash : C.amberWash, border: `1px solid ${infeasible ? "#e2b3ac" : "#f0dca8"}`,
                    borderRadius: 7, padding: "8px 10px",
                  }}>
                    ⚠ {limitMessage}
                  </div>
                )}

                <Field label="Interest Rate (%)">
                  <input className="fha-input" style={inputStyle} inputMode="decimal" value={rateText}
                    onChange={(e) => setRateText(e.target.value)}
                    onBlur={() => { const v = toNumber(rateText); if (isFinite(v)) setRateText(Math.max(0, v).toFixed(3)); }} />
                  <MiniSlider min={0} max={15} step={0.125} value={rate} onChange={(v) => setRateText(v.toString())} />
                </Field>

                <Field label="Loan Term">
                  <TermSelector value={term} onChange={setTerm} />
                </Field>
              </Panel>

              <Panel number={3} title="Housing Costs" tag="for a fuller payment estimate">
                <Field label="Property Tax Rate (%)" hint={`Auto-estimated for this home price: ${taxDefaultRate.toFixed(2)}% (${fmtMoney(taxDefaultDollar)}/yr) — edit to override.`}>
                  <input className="fha-input" style={inputStyle} inputMode="decimal" placeholder="Auto-estimated from home price"
                    value={propertyTaxRateText} onChange={(e) => setPropertyTaxRateText(e.target.value)} />
                </Field>
                <Field label="Annual Home Insurance ($)" hint={`Auto-estimated for this home price: ${fmtMoney(insDefault)}/yr — edit to override.`}>
                  <input className="fha-input" style={inputStyle} inputMode="numeric" placeholder="Auto-estimated from home price"
                    value={homeInsuranceText} onChange={(e) => setHomeInsuranceText(e.target.value)} />
                </Field>
              </Panel>
            </div>

            {/* ============ RESULTS COLUMN ============ */}
            <div style={{ minWidth: 0 }}>
              <div style={{
                background: `linear-gradient(135deg, ${C.greenWash} 0%, #ffffff 60%)`,
                border: `2px solid ${infeasible ? C.danger : C.greenBright}`,
                borderRadius: 12,
                padding: "20px 22px 22px",
                marginBottom: 18,
                boxShadow: infeasible ? "0 4px 18px rgba(163,55,43,0.14)" : "0 4px 18px rgba(58,125,30,0.12)",
              }}>
                <h2 style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 700, margin: "0 0 14px", color: C.greenDeep }}>Loan Analysis</h2>

                {(isOutOfBounds || infeasible) && (
                  <div style={{
                    background: infeasible ? C.dangerWash : C.amberWash,
                    border: `1.5px solid ${infeasible ? C.danger : C.amber}`,
                    borderRadius: 8, padding: "10px 12px", fontSize: 12.5, fontWeight: 600,
                    color: infeasible ? C.danger : C.amber, marginBottom: 16,
                  }}>
                    ⚠ {limitMessage}
                  </div>
                )}

                <div style={{ marginBottom: 16 }}>
                  <SectionLabel>Monthly Payment Breakdown</SectionLabel>
                  <ResultLine label="Principal & Interest" value={fmtMoney(PMT)} />
                  <ResultLine label="Monthly MIP" value={fmtMoney(month1Mip)} />
                  <ResultLine label="Property Taxes" value={fmtMoney(propertyTaxMonthly)} />
                  <ResultLine label="Homeowners Insurance" value={fmtMoney(homeInsuranceMonthly)} />
                  <ResultLine label="Total Monthly Payment" value={fmtMoney(totalMonthlyPayment)} total />
                </div>
                <div>
                  <SectionLabel>Loan Summary</SectionLabel>
                  <ResultLine label="Base Loan Amount" value={fmtMoney(baseLoan)} />
                  <ResultLine label="Upfront MIP (1.75%)" value={fmtMoney(upfrontMip)} />
                  <ResultLine label="Total Loan Amount" value={fmtMoney(totalLoan)} />
                  <ResultLine label="Annual MIP Rate" value={fmtPct(mipRate, 2)} />
                  <ResultLine label="LTV Ratio" value={fmtPct(ltv, 2)} />
                </div>
              </div>

              <Panel>
                <SectionLabel>Payment Components</SectionLabel>
                <p style={{ fontSize: 11.5, color: C.inkSoft, margin: "0 0 12px" }}>
                  Your monthly payment consists of Principal, Interest, MIP, Property Tax, and Homeowners Insurance (month 1 of the schedule).
                </p>
                <InteractivePieChart
                  donut
                  showLegend
                  centerTextTitle="month 1"
                  centerTextSub={fmtMoney(paymentTotal)}
                  dataItems={[
                    { label: "Principal", value: month1Principal, color: C.greenDeep },
                    { label: "Interest", value: month1Interest, color: C.greenBright },
                    { label: "MIP", value: month1Mip, color: C.danger },
                    { label: "Property Tax", value: propertyTaxMonthly, color: C.amber },
                    { label: "Insurance", value: homeInsuranceMonthly, color: "#2f5488" },
                  ]}
                />
              </Panel>

              <div style={{
                background: `linear-gradient(135deg, ${C.greenWash} 0%, #ffffff 55%)`,
                border: `2px solid ${C.greenBright}`,
                borderRadius: 12,
                padding: "16px 20px 18px",
                marginBottom: 18,
                boxShadow: "0 4px 18px rgba(58,125,30,0.12)",
              }}>
                <h2 style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 700, margin: "0 0 2px", color: C.greenDeep }}>MIP & Loan-to-Value Milestone</h2>
                <p style={{ fontSize: 12, color: C.inkSoft, margin: "0 0 12px" }}>
                  {canRemove
                    ? "Your LTV at closing qualifies for the 11-year MIP cancellation rule — here's your loan-to-value path and what MIP costs along the way."
                    : "Your LTV at closing means MIP is life-of-loan under FHA rules — but here's when amortization alone gets you to 80% LTV, the point you could refinance into a conventional loan and drop MIP entirely."}
                </p>

                <LtvOverTimeChart
                  points={homePrice > 0 ? schedule.map((row) => ({ month: row.month, ltv: (row.balance / homePrice) * 100 })) : []}
                  milestoneMonth={milestoneMonth}
                />

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10, marginTop: 14 }}>
                  <MilestoneStat label="LTV at Closing" value={fmtPct(ltv, 1)} note={canRemove ? "at or under 90%" : "over 90%"} />
                  <MilestoneStat
                    label={canRemove ? "MIP Removal Milestone" : "Refinance Opportunity"}
                    value={canRemove ? "11-Year Cancellation" : `Month ${milestoneMonth}`}
                    note={canRemove ? `at month ${milestoneMonth}` : "80% LTV via amortization — refinance into a conventional loan to drop MIP"}
                  />
                  <MilestoneStat label="Total MIP Paid by Then" value={fmtMoney(mipPaidByMilestone)} note={canRemove ? "before cancellation" : "before refinance-eligible"} highlight />
                </div>
              </div>

              <Panel>
                <SectionLabel>
                  Payment Over Time <span style={{ fontWeight: 400, textTransform: "none" }}>(monthly amortization schedule)</span>
                </SectionLabel>
                <div style={{ maxHeight: 340, overflowY: "auto", border: `1px solid ${C.line}`, borderRadius: 8 }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5 }}>
                    <thead>
                      <tr>
                        {["Month", "Principal", "Interest", "MIP", "Balance"].map((h, i) => (
                          <th key={h} style={{
                            position: "sticky", top: 0, background: C.greenWash,
                            textAlign: i === 0 ? "left" : "right", fontFamily: MONO, fontSize: 10, textTransform: "uppercase",
                            color: C.greenDeep, padding: "7px 10px", borderBottom: `2px solid ${C.line}`, zIndex: 1,
                          }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {schedule.map((row) => {
                        const isFinal = row.month === schedule.length;
                        return (
                          <tr key={row.month} style={{ background: isFinal ? C.greenWash : undefined }}>
                            <td style={{ textAlign: "left", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, fontWeight: isFinal ? 700 : 600 }}>{row.month}</td>
                            <td style={{ textAlign: "right", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, fontVariantNumeric: "tabular-nums", fontWeight: isFinal ? 700 : 400 }}>{fmtMoney(row.principal)}</td>
                            <td style={{ textAlign: "right", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, fontVariantNumeric: "tabular-nums", fontWeight: isFinal ? 700 : 400 }}>{fmtMoney(row.interest)}</td>
                            <td style={{ textAlign: "right", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, fontVariantNumeric: "tabular-nums", fontWeight: isFinal ? 700 : 400 }}>{fmtMoney(row.mip)}</td>
                            <td style={{ textAlign: "right", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, fontVariantNumeric: "tabular-nums", fontWeight: isFinal ? 700 : 400 }}>{fmtMoney(row.balance)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </Panel>

              {/* Insights — last section, below all charts/tables */}
              <InsightsPanel
                groups={[
                  { title: "FHA Cost Analysis", color: C.greenDeep, bullets: insights.cost },
                  { title: "MIP Considerations", color: C.amber, bullets: insights.mip },
                ]}
                nextSteps={insights.nextSteps}
              />

              <p style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 18, lineHeight: 1.5 }}>
                This FHA loan calculator provides estimates only. Property taxes and homeowners insurance are auto-estimated based on typical rates for your home price and can be overridden; actual amounts vary by location and provider. HOA fees and closing costs are not included. Results may vary based on your specific financial situation and current FHA guidelines. For a complete assessment of your mortgage costs and eligibility, please consult with one of our mortgage professionals. Rates and terms are subject to change without notice.
              </p>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 760px) {
            .fha-layout { grid-template-columns: 1fr !important; }
          }
          .fha-input { transition: border-color .15s, box-shadow .15s, background .15s; }
          .fha-input:hover { border-color: #a9b59c; }
          .fha-input:focus { background: #ffffff; border-color: ${C.greenBright}; box-shadow: 0 0 0 3px ${C.greenWash}; }
        `}</style>
      </main>
      <Footer />
    </div>
  );
}
