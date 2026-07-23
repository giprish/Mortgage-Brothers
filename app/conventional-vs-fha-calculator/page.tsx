"use client";

import { useMemo, useState, type ChangeEvent, type CSSProperties, type ReactNode } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RTooltip,
  Legend,
} from "recharts";

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
  blue: "#2f5488",
  blueWash: "#e8eef5",
};
const SERIF = '"Source Serif 4", Georgia, "Times New Roman", serif';
const SANS = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const MONO = "'IBM Plex Mono', 'SFMono-Regular', Menlo, Consolas, monospace";

const fieldBg = "#eef1ea";
const fieldBorder = "#c3ccbb";

/* ============================================================
   TYPES
============================================================ */
interface SelectOption {
  value: string | number;
  label: string;
}

interface ToggleOption {
  value: string;
  label: string;
}

interface InsightGroup {
  title: string;
  color: string;
  bullets: string[];
}

interface ScheduleRow {
  month: number;
  payment: number;
  balance: number;
}

interface HoldPeriodRow {
  year: number;
  cumFha: number;
  cumConv: number;
  fhaBal: number;
  convBal: number;
  fhaTrueCost: number;
  convTrueCost: number;
}

type CreditScoreBand = keyof typeof PMI_TABLE;

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
function monthsToYearsMonths(totalMonths: number): string {
  const y = Math.floor(totalMonths / 12);
  const m = totalMonths % 12;
  const parts: string[] = [];
  if (y > 0) parts.push(y + (y === 1 ? " year" : " years"));
  if (m > 0) parts.push(m + (m === 1 ? " month" : " months"));
  if (parts.length === 0) return "0 months";
  return parts.join(", ");
}
function stdMonthlyPayment(P: number, r: number, n: number): number {
  if (r === 0) return P / n;
  const factor = Math.pow(1 + r, n);
  return (P * (r * factor)) / (factor - 1);
}

/* ============================================================
   ARIZONA COUNTY / PROPERTY TYPE REFERENCE
============================================================ */
const FHA_FLOOR: number[] = [541287, 693050, 837700, 1041125];
const FHA_LIMITS: Record<string, number[]> = {
  Maricopa: [557750, 714100, 863300, 1073000],
  Pinal: [557750, 714100, 863300, 1073000],
  Coconino: [609500, 780400, 943200, 1172500],
  Pima: FHA_FLOOR,
  Apache: FHA_FLOOR,
  Cochise: FHA_FLOOR,
  Gila: FHA_FLOOR,
  Graham: FHA_FLOOR,
  Greenlee: FHA_FLOOR,
  "La Paz": FHA_FLOOR,
  Mohave: FHA_FLOOR,
  Navajo: FHA_FLOOR,
  "Santa Cruz": FHA_FLOOR,
  Yavapai: FHA_FLOOR,
  Yuma: FHA_FLOOR,
};
const COUNTIES = Object.keys(FHA_LIMITS);
const PROPERTY_TYPES = ["Single Family", "Duplex", "Triplex", "Fourplex"];
const CONV_LIMITS = [832750, 1066550, 1288725, 1601750];

/* ============================================================
   FHA MIP LOGIC (HUD ML 2023-05)
============================================================ */
const UFMIP_RATE = 1.75;
function annualMipRate(baseLoanAmount: number, ltv: number, termYears: number): number {
  const highBalance = baseLoanAmount > 726200;
  if (!highBalance) {
    if (termYears > 15) return ltv <= 95 ? 0.5 : 0.55;
    return ltv <= 90 ? 0.15 : 0.4;
  } else {
    if (termYears > 15) return ltv <= 95 ? 0.7 : 0.75;
    if (ltv <= 78) return 0.15;
    return ltv <= 90 ? 0.4 : 0.65;
  }
}

/* ============================================================
   CONVENTIONAL PMI TABLE
============================================================ */
function creditScoreBand(score: number): CreditScoreBand {
  if (score >= 760) return "760-850";
  if (score >= 740) return "740-759";
  if (score >= 720) return "720-739";
  if (score >= 700) return "700-719";
  if (score >= 680) return "680-699";
  if (score >= 660) return "660-679";
  if (score >= 640) return "640-659";
  return "620-639";
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
const PMI_TABLE = {
  "760-850": [0.3, 0.19, 0.15, 0.1],
  "740-759": [0.48, 0.33, 0.24, 0.13],
  "720-739": [0.66, 0.47, 0.33, 0.17],
  "700-719": [0.84, 0.61, 0.42, 0.2],
  "680-699": [1.02, 0.75, 0.52, 0.23],
  "660-679": [1.2, 0.89, 0.61, 0.26],
  "640-659": [1.38, 1.03, 0.7, 0.3],
  "620-639": [1.56, 1.17, 0.79, 0.33],
};
function pmiRate(creditScore: number, downPct: number): number {
  const row = PMI_TABLE[creditScoreBand(creditScore)];
  if (downPct >= 20) return 0;
  if (downPct >= 15) return row[3];
  if (downPct >= 10) return row[2];
  if (downPct >= 5) return row[1];
  return row[0];
}

/* ============================================================
   PROPERTY TAX / INSURANCE TABLES
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
      <h2 style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 600, margin: "0 0 14px", color: C.greenDeep, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        {number != null && number !== "" && (
          <span style={{ fontFamily: MONO, fontSize: 11, color: "#fff", background: C.greenBright, width: 20, height: 20, borderRadius: 5, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {number}
          </span>
        )}
        {title}
        {tag && <span style={{ fontFamily: MONO, fontSize: 10, fontWeight: 400, color: C.inkSoft }}>{tag}</span>}
      </h2>
      {children}
    </div>
  );
}
function SectionLabel({ children }: { children: ReactNode }) {
  return <h3 style={{ fontFamily: MONO, fontSize: 11, textTransform: "uppercase", letterSpacing: ".07em", color: C.inkSoft, margin: "0 0 12px" }}>{children}</h3>;
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
function ToggleRow({ options, value, onChange, columns }: { options: ToggleOption[]; value: string; onChange: (v: string) => void; columns: number }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 6, marginBottom: 6 }}>
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            style={{
              border: `1px solid ${active ? C.greenBright : fieldBorder}`,
              background: active ? C.greenWash : "#f2f4ee",
              color: active ? C.greenDeep : C.inkSoft,
              borderRadius: 7,
              textAlign: "center",
              padding: "8px 4px",
              fontSize: 12.5,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {o.label}
          </button>
        );
      })}
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
function ComparisonLine({ label, fhaValue, convValue, fhaWins, convWins }: { label: string; fhaValue: ReactNode; convValue: ReactNode; fhaWins?: boolean; convWins?: boolean }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", alignItems: "baseline", padding: "7px 0", borderBottom: `1px dashed ${C.line}` }}>
      <span style={{ fontSize: 12.5, color: C.inkSoft }}>{label}</span>
      <span style={{ textAlign: "right", fontWeight: fhaWins ? 700 : 500, fontVariantNumeric: "tabular-nums", fontSize: 13.5, color: fhaWins ? C.greenDeep : C.ink, paddingRight: 10 }}>{fhaValue}</span>
      <span style={{ textAlign: "right", fontWeight: convWins ? 700 : 500, fontVariantNumeric: "tabular-nums", fontSize: 13.5, color: convWins ? C.blue : C.ink }}>{convValue}</span>
    </div>
  );
}

const TERM_OPTIONS = [30, 20, 15];
function TermSelector({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6, marginBottom: 6 }}>
        {TERM_OPTIONS.map((t) => {
          const active = t === value;
          return (
            <button
              key={t}
              type="button"
              onClick={() => onChange(t)}
              style={{
                border: `1px solid ${active ? C.greenBright : fieldBorder}`,
                background: active ? C.greenWash : "#f2f4ee",
                color: active ? C.greenDeep : C.inkSoft,
                borderRadius: 7,
                textAlign: "center",
                padding: "8px 4px",
                fontSize: 12.5,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {t} years
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

function InsightsPanel({ groups, nextSteps }: { groups: InsightGroup[]; nextSteps: string[] }) {
  return (
    <div style={{ background: "#f7f8f5", border: `1px solid ${C.line}`, borderRadius: 10, padding: "20px 22px 22px", marginBottom: 18 }}>
      <h2 style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 600, margin: "0 0 12px", color: C.ink }}>Recommendations &amp; Key Insights</h2>
      <div style={{ borderBottom: `1px solid ${C.line}`, marginBottom: 16 }} />
      <div className="cvf-insights-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 20, alignItems: "start" }}>
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
      <style>{`@media (max-width: 640px) { .cvf-insights-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */
export default function ConventionalVsFhaCalculator() {
  const [isRefi, setIsRefi] = useState(false);
  const [refiType, setRefiType] = useState<"rateterm" | "cashout">("rateterm");
  const [milestoneView, setMilestoneView] = useState<"graph" | "hold">("hold");
  const [county, setCounty] = useState("Maricopa");
  const [propertyType, setPropertyType] = useState(0);

  const [homePriceText, setHomePriceText] = useState("450,000");
  const [downPaymentPercentText, setDownPaymentPercentText] = useState("3.5");
  const [downPaymentDollarText, setDownPaymentDollarText] = useState("15,750");
  const [refiLoanBalanceText, setRefiLoanBalanceText] = useState("400,000");

  const [creditScoreText, setCreditScoreText] = useState("720");
  const [convRateText, setConvRateText] = useState("6.500");
  const [fhaRateText, setFhaRateText] = useState("6.000");
  const [term, setTerm] = useState(30);

  const [propertyTaxRateText, setPropertyTaxRateText] = useState("");
  const [homeInsuranceText, setHomeInsuranceText] = useState("");
  const [hoaFeesText, setHoaFeesText] = useState("0");

  const homePrice = Math.max(0, toNumber(homePriceText) || 0);
  const fhaLimit = FHA_LIMITS[county][propertyType];
  const convLimit = CONV_LIMITS[propertyType];

  function onDownPaymentPercentChange(text: string) {
    setDownPaymentPercentText(text);
    const pctVal = Math.max(0, Math.min(100, toNumber(text) || 0));
    setDownPaymentDollarText(Math.round(homePrice * (pctVal / 100)).toLocaleString("en-US"));
  }
  function onDownPaymentDollarChange(text: string) {
    setDownPaymentDollarText(text);
    const amt = Math.max(0, toNumber(text) || 0);
    const pct = homePrice > 0 ? (amt / homePrice) * 100 : 0;
    setDownPaymentPercentText((Math.round(pct * 100) / 100).toFixed(2));
  }
  function onHomePriceChange(text: string) {
    setHomePriceText(text);
    const newVal = Math.max(0, toNumber(text) || 0);
    const dp = Math.max(0, toNumber(downPaymentDollarText) || 0);
    const pct = newVal > 0 ? (dp / newVal) * 100 : 0;
    setDownPaymentPercentText((Math.round(pct * 100) / 100).toFixed(2));
  }

  const downPctRaw = Math.max(0, Math.min(100, toNumber(downPaymentPercentText) || 0));
  const downPaymentRaw = Math.max(0, toNumber(downPaymentDollarText) || 0);
  const refiLoanBalance = Math.max(0, toNumber(refiLoanBalanceText) || 0);
  const refiExceedsValue = refiLoanBalance > homePrice && homePrice > 0;
  const fhaRefiMaxLtv = refiType === "cashout" ? 80 : 97.75;
  const fhaRefiMaxLoan = homePrice * (fhaRefiMaxLtv / 100);
  const effectiveLoanAmount = isRefi ? Math.min(refiLoanBalance, homePrice) : Math.max(0, homePrice - downPaymentRaw);
  const downPaymentExceedsPrice = !isRefi && downPaymentRaw > homePrice && homePrice > 0;
  const downPayment = isRefi ? Math.max(0, homePrice - effectiveLoanAmount) : Math.min(downPaymentRaw, homePrice);
  const downPct = homePrice > 0 ? (downPayment / homePrice) * 100 : downPctRaw;

  const creditScoreRaw = parseInt(creditScoreText, 10);
  const creditScore = isFinite(creditScoreRaw) ? Math.min(850, Math.max(600, creditScoreRaw)) : 720;
  const convRate = Math.max(0, toNumber(convRateText) || 0);
  const fhaRate = Math.max(0, toNumber(fhaRateText) || 0);
  const n = term * 12;

  const fhaBaseLoan = effectiveLoanAmount;
  const fhaLtv = homePrice > 0 ? (fhaBaseLoan / homePrice) * 100 : 0;
  const fhaMinDown = homePrice * 0.035;
  const fhaLimitBinding = homePrice - fhaLimit > fhaMinDown;
  const fhaEffectiveMinDown = Math.max(fhaMinDown, homePrice - fhaLimit);
  const fhaBelowMin = !isRefi && downPaymentRaw < fhaEffectiveMinDown - 0.5;
  const fhaRefiExceedsLtv = isRefi && fhaBaseLoan > fhaRefiMaxLoan + 0.5;
  const ufmip = fhaBaseLoan * (UFMIP_RATE / 100);
  const fhaTotalLoan = fhaBaseLoan + ufmip;
  const fhaMipRate = annualMipRate(fhaBaseLoan, fhaLtv, term);
  const rFha = fhaRate / 100 / 12;
  const fhaPMT = stdMonthlyPayment(fhaTotalLoan, rFha, n);
  const fhaMonth1Mip = (fhaTotalLoan * (fhaMipRate / 100)) / 12;

  const convBaseLoan = effectiveLoanAmount;
  const convLtv = homePrice > 0 ? (convBaseLoan / homePrice) * 100 : 0;
  const convExceedsLimit = convBaseLoan > convLimit;
  const convMinDown = homePrice * 0.03;
  const convBelowMin = !isRefi && downPaymentRaw < convMinDown - 0.5;
  const rConv = convRate / 100 / 12;
  const convPMT = stdMonthlyPayment(convBaseLoan, rConv, n);
  const convPmiRateNow = pmiRate(creditScore, downPct);
  const convMonth1Pmi = convLtv > 80 ? (convBaseLoan * (convPmiRateNow / 100)) / 12 : 0;

  const taxDefaultDollar = lookupBandTable(PROPERTY_TAX_TABLE, homePrice);
  const insDefault = lookupBandTable(INSURANCE_TABLE, homePrice);
  const propertyTaxManual = propertyTaxRateText.trim() === "" ? null : toNumber(propertyTaxRateText);
  const insuranceManual = homeInsuranceText.trim() === "" ? null : toNumber(homeInsuranceText);
  const taxAnnual = propertyTaxManual !== null && isFinite(propertyTaxManual) ? homePrice * (propertyTaxManual / 100) : taxDefaultDollar;
  const insAnnual = insuranceManual !== null && isFinite(insuranceManual) ? insuranceManual : insDefault;
  const propertyTaxMonthly = taxAnnual / 12;
  const homeInsuranceMonthly = insAnnual / 12;
  const hoaFees = Math.max(0, toNumber(hoaFeesText) || 0);
  const sharedCosts = propertyTaxMonthly + homeInsuranceMonthly + hoaFees;

  const fhaTotalMonthly = fhaPMT + fhaMonth1Mip + sharedCosts;
  const convTotalMonthly = convPMT + convMonth1Pmi + sharedCosts;

  const schedules = useMemo(() => {
    const fha: ScheduleRow[] = [];
    let fhaBal = fhaTotalLoan;
    for (let m = 1; m <= n; m++) {
      const interest = fhaBal * rFha;
      let principal = fhaPMT - interest;
      if (principal >= fhaBal) principal = fhaBal;
      const mip = (fhaBal * (fhaMipRate / 100)) / 12;
      fhaBal = Math.max(0, fhaBal - principal);
      fha.push({ month: m, payment: fhaPMT + mip, balance: fhaBal });
      if (fhaBal <= 0) break;
    }
    const conv: ScheduleRow[] = [];
    let convBal = convBaseLoan;
    for (let m = 1; m <= n; m++) {
      const interest = convBal * rConv;
      let principal = convPMT - interest;
      if (principal >= convBal) principal = convBal;
      const ltvNow = homePrice > 0 ? (convBal / homePrice) * 100 : 0;
      const pmiActive = ltvNow > 78;
      const pmi = pmiActive ? (convBaseLoan * (convPmiRateNow / 100)) / 12 : 0;
      convBal = Math.max(0, convBal - principal);
      conv.push({ month: m, payment: convPMT + pmi, balance: convBal });
      if (convBal <= 0) break;
    }
    return { fha, conv };
  }, [fhaTotalLoan, rFha, fhaPMT, fhaMipRate, n, convBaseLoan, rConv, convPMT, convPmiRateNow, homePrice]);

  const crossover = useMemo(() => {
    const len = Math.min(schedules.fha.length, schedules.conv.length);
    let cumFha = 0;
    let cumConv = 0;
    let crossMonth: number | null = null;
    let leaderAtStart: "fha" | "conv" | "tie" | null = null;
    const data: { month: number; cumFha: number; cumConv: number }[] = [];
    for (let i = 0; i < len; i++) {
      cumFha += schedules.fha[i].payment;
      cumConv += schedules.conv[i].payment;
      const fhaTrue = cumFha + schedules.fha[i].balance;
      const convTrue = cumConv + schedules.conv[i].balance;
      const leader: "fha" | "conv" | "tie" = fhaTrue < convTrue ? "fha" : convTrue < fhaTrue ? "conv" : "tie";
      if (leaderAtStart === null && leader !== "tie") leaderAtStart = leader;
      if (crossMonth === null && leaderAtStart !== null && leader !== "tie" && leader !== leaderAtStart) {
        crossMonth = i + 1;
      }
      data.push({ month: i + 1, cumFha, cumConv });
    }
    const fhaFinalBal = schedules.fha[len - 1]?.balance ?? 0;
    const convFinalBal = schedules.conv[len - 1]?.balance ?? 0;
    const finalDiff = data.length
      ? (data[data.length - 1].cumConv + convFinalBal) - (data[data.length - 1].cumFha + fhaFinalBal)
      : 0;
    return { data, crossMonth, leaderAtStart, finalDiff };
  }, [schedules]);

  const holdPeriods = useMemo((): HoldPeriodRow[] => {
    const years = [1, 3, 5, 7, 10, 15].filter((y) => y * 12 <= n);
    return years.map((y) => {
      const idx = Math.min(y * 12, crossover.data.length) - 1;
      const point = crossover.data[idx] || { cumFha: 0, cumConv: 0 };
      const fhaBal = schedules.fha[Math.min(y * 12, schedules.fha.length) - 1]?.balance ?? 0;
      const convBal = schedules.conv[Math.min(y * 12, schedules.conv.length) - 1]?.balance ?? 0;
      return {
        year: y,
        cumFha: point.cumFha,
        cumConv: point.cumConv,
        fhaBal,
        convBal,
        fhaTrueCost: point.cumFha + fhaBal,
        convTrueCost: point.cumConv + convBal,
      };
    });
  }, [crossover, n, schedules]);

  const cheaperNow = fhaTotalMonthly < convTotalMonthly ? "fha" : convTotalMonthly < fhaTotalMonthly ? "conv" : "tie";
  const cheaperNowLabel = cheaperNow === "fha" ? "FHA" : cheaperNow === "conv" ? "Conventional" : "Neither program";
  const breakevenStartLabel = crossover.leaderAtStart === "fha" ? "FHA" : "Conventional";
  const breakevenTakeoverLabel = crossover.leaderAtStart === "fha" ? "Conventional" : "FHA";
  const breakevenNote = crossover.crossMonth
    ? `${cheaperNowLabel} has the lower monthly payment today — but a lower payment isn't the same as a lower total cost. ${breakevenStartLabel} stays ahead on true total cost until about ${monthsToYearsMonths(crossover.crossMonth)}, when ${breakevenTakeoverLabel} becomes the cheaper program overall.`
    : `${cheaperNowLabel} has the lower monthly payment today, and it also stays the lower true total cost for the entire loan term in this scenario — no crossover.`;
  const monthlyDiff = Math.abs(fhaTotalMonthly - convTotalMonthly);

  const insights = useMemo(() => {
    const compareNotes = [
      `At ${creditScore} credit (${creditScoreLabel(creditScore)}) and ${fmtPct(downPct, 1)} down, FHA's monthly payment is ${fmtMoney(fhaTotalMonthly)} vs. Conventional's ${fmtMoney(convTotalMonthly)} — a ${fmtMoney(monthlyDiff)}/mo difference in favor of ${cheaperNow === "fha" ? "FHA" : cheaperNow === "conv" ? "Conventional" : "neither (tied)"}.`,
      `FHA's mortgage insurance rate doesn't change with credit score — Conventional's does. ${creditScore < 680 ? "At this credit score, FHA's flat MIP is usually the cheaper mortgage insurance option." : creditScore >= 740 ? "At this credit score, Conventional PMI is often cheaper than FHA's MIP, especially since PMI can cancel entirely." : "At this credit score, the two programs are often close — small credit score or down payment changes can flip which is cheaper."}`,
    ];
    const crossoverNotes: string[] = [];
    if (crossover.crossMonth) {
      crossoverNotes.push(`${crossover.leaderAtStart === "fha" ? "FHA" : "Conventional"} starts out cheaper, but the total cost crosses over around month ${crossover.crossMonth} (${monthsToYearsMonths(crossover.crossMonth)}) — after that, ${crossover.leaderAtStart === "fha" ? "Conventional" : "FHA"} becomes the cheaper program cumulatively.`);
      crossoverNotes.push("If you plan to keep this loan (or this home) past the crossover point, weight that program more heavily; if you expect to sell or refinance sooner, the program that's cheaper today matters more.");
    } else {
      crossoverNotes.push(`${crossover.leaderAtStart === "fha" ? "FHA" : "Conventional"} stays the cheaper program for the entire ${term}-year term in this scenario — no crossover point.`);
    }
    if (fhaBelowMin) {
      crossoverNotes.push(`Your entered down payment is below FHA's required minimum of ${fmtMoney(fhaEffectiveMinDown)} for this price/county/property type.`);
    }
    if (convExceedsLimit) {
      crossoverNotes.push(`Your Conventional loan amount exceeds the ${fmtMoney(convLimit)} conforming limit for this property type — this would price as a jumbo loan, not shown in this comparison.`);
    }

    const nextSteps = [
      "Get pre-qualified for both programs to compare actual, lender-specific rates and mortgage insurance rates.",
      "Ask a loan officer how quickly Conventional PMI could be removed once you build equity, versus FHA's fixed removal timeline.",
      "Contact a Mortgage Brothers loan officer to review which program fits your credit profile and how long you plan to keep the loan.",
    ];
    return { compare: compareNotes, crossover: crossoverNotes, nextSteps };
  }, [creditScore, downPct, fhaTotalMonthly, convTotalMonthly, monthlyDiff, cheaperNow, crossover, term, fhaBelowMin, fhaEffectiveMinDown, convExceedsLimit, convLimit]);

  const barData = [
    { name: "FHA", "P&I": fhaPMT, "MI": fhaMonth1Mip, "Tax/Ins/HOA": sharedCosts },
    { name: "Conventional", "P&I": convPMT, "MI": convMonth1Pmi, "Tax/Ins/HOA": sharedCosts },
  ];

  return (
    <div className="flex flex-col min-h-screen" style={{ background: C.paper }}>
      <Navbar />
      <main className="flex-grow" style={{ color: C.ink, fontFamily: SANS, fontSize: 15, lineHeight: 1.5, overflowX: "hidden" }}>
        <section
          className="w-full text-white py-20 lg:py-28 text-center relative overflow-hidden bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/mortgage-calculators.jpg')", backgroundPosition: "center top" }}
        >
          <div className="absolute inset-0 bg-[#08271B]/80 z-0" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5" />
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5" />
          </div>
          <div className="max-w-4xl mx-auto px-6 relative z-20">
            <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase mb-4 font-sans">MORTGAGE TOOLS</p>
            <h1 className="text-white text-[36px] lg:text-[52px] font-playfair font-normal leading-[1.1] mb-5">
              Conventional vs. FHA Comparison Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Compare FHA and Conventional side by side — monthly payments, mortgage insurance, and true total cost over time.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "28px 20px 64px", boxSizing: "border-box" }}>
          <div
            style={{
              background: `linear-gradient(135deg, ${C.greenWash} 0%, #ffffff 55%)`,
              border: `2px solid ${C.greenBright}`,
              borderRadius: 12,
              padding: "16px 20px 18px",
              marginBottom: 18,
              boxShadow: "0 4px 18px rgba(58,125,30,0.12)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginBottom: 2 }}>
              <h2 style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 700, margin: 0, color: C.greenDeep }}>
                {milestoneView === "graph" ? "True Total Cost Over Time" : "Total Cost Over Time"}
              </h2>
              <div style={{ display: "flex", gap: 6 }}>
                <button
                  type="button"
                  onClick={() => setMilestoneView("graph")}
                  style={{
                    border: `1px solid ${milestoneView === "graph" ? C.greenBright : fieldBorder}`,
                    background: milestoneView === "graph" ? C.greenWash : "#f2f4ee",
                    color: milestoneView === "graph" ? C.greenDeep : C.inkSoft,
                    borderRadius: 7,
                    padding: "6px 12px",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Graph
                </button>
                <button
                  type="button"
                  onClick={() => setMilestoneView("hold")}
                  style={{
                    border: `1px solid ${milestoneView === "hold" ? C.greenBright : fieldBorder}`,
                    background: milestoneView === "hold" ? C.greenWash : "#f2f4ee",
                    color: milestoneView === "hold" ? C.greenDeep : C.inkSoft,
                    borderRadius: 7,
                    padding: "6px 12px",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  By Hold Period
                </button>
              </div>
            </div>

            {milestoneView === "graph" ? (
              <>
                <p style={{ fontSize: 12, color: C.inkSoft, margin: "0 0 12px" }}>
                  True total cost (payments made plus remaining loan balance) at each common hold period — the same figures as the table view, charted side by side.
                </p>
                <div style={{ height: 240 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={holdPeriods.map((r) => ({ name: `${r.year} yr`, FHA: r.fhaTrueCost, Conventional: r.convTrueCost }))} margin={{ top: 5, right: 12, left: 4, bottom: 5 }}>
                      <CartesianGrid stroke="#e2ded2" vertical={false} />
                      <XAxis dataKey="name" tick={{ fill: C.inkSoft, fontSize: 12 }} />
                      <YAxis tick={{ fill: C.inkSoft, fontSize: 12 }} tickFormatter={(v) => "$" + Math.round(Number(v)).toLocaleString("en-US")} width={70} />
                      <RTooltip formatter={(v) => [fmtMoney(Number(v)), ""]} />
                      <Legend wrapperStyle={{ fontSize: 12 }} />
                      <Bar dataKey="FHA" fill={C.greenDeep} />
                      <Bar dataKey="Conventional" fill={C.blue} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10, marginTop: 14 }}>
                  <MilestoneStat label="Cheaper Today" value={cheaperNow === "fha" ? "FHA" : cheaperNow === "conv" ? "Conventional" : "Tied"} note={`${fmtMoney(monthlyDiff)}/mo payment difference`} highlight />
                  <MilestoneStat label="Total Cost Breakeven" value={crossover.crossMonth ? monthsToYearsMonths(crossover.crossMonth) : "None"} note={crossover.crossMonth ? `${crossover.leaderAtStart === "fha" ? "Conventional" : "FHA"} takes over after this` : `${crossover.leaderAtStart === "fha" ? "FHA" : "Conventional"} stays cheaper the whole term`} />
                  <MilestoneStat label="Total Cost Gap at Term End" value={fmtMoney(Math.abs(crossover.finalDiff))} note={crossover.finalDiff > 0 ? "FHA cheaper cumulatively" : crossover.finalDiff < 0 ? "Conventional cheaper cumulatively" : "essentially tied"} />
                </div>
                <div style={{ fontSize: 12.5, color: C.ink, background: "#fff", border: `1px solid ${C.line}`, borderRadius: 8, padding: "10px 12px", marginTop: 12, lineHeight: 1.5 }}>
                  {breakevenNote}
                </div>
              </>
            ) : (
              <>
                <p style={{ fontSize: 12, color: C.inkSoft, margin: "0 0 12px" }}>
                  True total cost if the loan were paid off completely at each point — payments made so far, plus the loan balance still owed. This is what the home would have actually cost you, not just what you&apos;ve paid out of pocket.
                </p>
                <div style={{ background: "#fff", border: `1px solid ${C.line}`, borderRadius: 8, overflow: "hidden" }}>
                  <div className="cvf-hp-header" style={{ display: "grid", gridTemplateColumns: "0.9fr 1fr 1fr", columnGap: 20, fontSize: 11, textTransform: "uppercase", letterSpacing: ".04em", color: C.inkSoft, padding: "9px 16px", background: "#f2f4ee", borderBottom: `1px solid ${C.line}` }}>
                    <span>Hold Period</span>
                    <span style={{ textAlign: "center", color: C.greenDeep, fontWeight: 700 }}>FHA</span>
                    <span style={{ textAlign: "center", color: C.blue, fontWeight: 700 }}>Conventional</span>
                  </div>
                  {holdPeriods.map((row) => {
                    const fhaCheaper = row.fhaTrueCost < row.convTrueCost;
                    const convCheaper = row.convTrueCost < row.fhaTrueCost;
                    return (
                      <div key={row.year} className="cvf-hp-row" style={{ display: "grid", gridTemplateColumns: "0.9fr 1fr 1fr", columnGap: 20, padding: "10px 16px", borderBottom: `1px dashed ${C.line}` }}>
                        <span className="cvf-hp-label" style={{ fontSize: 13, fontWeight: 700, color: C.ink, alignSelf: "center" }}>{row.year} {row.year === 1 ? "year" : "years"}</span>
                        <span className="cvf-hp-cell" style={{ textAlign: "right", background: fhaCheaper ? "#d3e6c2" : convCheaper ? "#f4c9c2" : "transparent", borderRadius: 6, padding: "4px 10px", boxSizing: "border-box" }}>
                          <span className="cvf-hp-tag" style={{ display: "none", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".04em", color: C.greenDeep, marginBottom: 2 }}>FHA</span>
                          <span style={{ display: "block", fontSize: 13.5, fontWeight: fhaCheaper ? 700 : 500, color: fhaCheaper ? C.greenDeep : C.ink }}>{fmtMoney(row.fhaTrueCost)}</span>
                          <span style={{ display: "block", fontSize: 10.5, color: C.inkSoft }}>{fmtMoney(row.cumFha)} paid + {fmtMoney(row.fhaBal)} owed</span>
                        </span>
                        <span className="cvf-hp-cell" style={{ textAlign: "right", background: convCheaper ? "#d3e6c2" : fhaCheaper ? "#f4c9c2" : "transparent", borderRadius: 6, padding: "4px 10px", boxSizing: "border-box" }}>
                          <span className="cvf-hp-tag" style={{ display: "none", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".04em", color: C.blue, marginBottom: 2 }}>Conventional</span>
                          <span style={{ display: "block", fontSize: 13.5, fontWeight: convCheaper ? 700 : 500, color: convCheaper ? C.blue : C.ink }}>{fmtMoney(row.convTrueCost)}</span>
                          <span style={{ display: "block", fontSize: 10.5, color: C.inkSoft }}>{fmtMoney(row.cumConv)} paid + {fmtMoney(row.convBal)} owed</span>
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10, marginTop: 14 }}>
                  <MilestoneStat label="Cheaper Today" value={cheaperNow === "fha" ? "FHA" : cheaperNow === "conv" ? "Conventional" : "Tied"} note={`${fmtMoney(monthlyDiff)}/mo payment difference`} highlight />
                  <MilestoneStat label="Total Cost Breakeven" value={crossover.crossMonth ? monthsToYearsMonths(crossover.crossMonth) : "None"} note={crossover.crossMonth ? `${crossover.leaderAtStart === "fha" ? "Conventional" : "FHA"} takes over after this` : `${crossover.leaderAtStart === "fha" ? "FHA" : "Conventional"} stays cheaper the whole term`} />
                  <MilestoneStat label="Total Cost Gap at Term End" value={fmtMoney(Math.abs(crossover.finalDiff))} note={crossover.finalDiff > 0 ? "FHA cheaper cumulatively" : crossover.finalDiff < 0 ? "Conventional cheaper cumulatively" : "essentially tied"} />
                </div>
                <div style={{ fontSize: 12.5, color: C.ink, background: "#fff", border: `1px solid ${C.line}`, borderRadius: 8, padding: "10px 12px", marginTop: 12, lineHeight: 1.5 }}>
                  {breakevenNote}
                </div>
              </>
            )}
          </div>

          <div className="cvf-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
            <div style={{ minWidth: 0 }}>
              <Panel number={1} title="Purchase or Refinance">
                <ToggleRow
                  columns={2}
                  value={isRefi ? "refi" : "purchase"}
                  onChange={(v) => setIsRefi(v === "refi")}
                  options={[
                    { value: "purchase", label: "Home Purchase" },
                    { value: "refi", label: "Refinance" },
                  ]}
                />
                <SelectField label="Arizona County" value={county} onChange={(e) => setCounty(e.target.value)} options={COUNTIES.map((c) => ({ value: c, label: c }))} />
                <SelectField label="Property Type" value={propertyType} onChange={(e) => setPropertyType(parseInt(e.target.value, 10))} options={PROPERTY_TYPES.map((p, i) => ({ value: i, label: p }))} />
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <div style={{ background: C.greenWash, border: "1px solid #cfe0c2", borderRadius: 8, padding: "8px 12px", fontSize: 12, color: C.greenDeep, flex: 1 }}>
                    FHA loan limit: <b>{fmtMoney(fhaLimit)}</b>
                  </div>
                  <div style={{ background: C.blueWash, border: "1px solid #c3d3e5", borderRadius: 8, padding: "8px 12px", fontSize: 12, color: C.blue, flex: 1 }}>
                    Conventional loan limit: <b>{fmtMoney(convLimit)}</b>
                  </div>
                </div>
              </Panel>

              <Panel number={2} title="Property & Loan Details">
                <Field label={isRefi ? "Home Value ($)" : "Home Price ($)"}>
                  <input
                    className="cvf-input"
                    style={inputStyle}
                    inputMode="numeric"
                    value={homePriceText}
                    onChange={(e) => onHomePriceChange(e.target.value)}
                    onBlur={() => setHomePriceText(homePrice.toLocaleString("en-US"))}
                  />
                  <MiniSlider min={0} max={3000000} step={5000} value={homePrice} onChange={(v) => onHomePriceChange(String(Math.round(v)))} />
                </Field>

                {isRefi ? (
                  <>
                    <Field label="Refinance Type">
                      <ToggleRow
                        columns={2}
                        value={refiType}
                        onChange={(v) => setRefiType(v as "rateterm" | "cashout")}
                        options={[
                          { value: "rateterm", label: "Rate-and-Term" },
                          { value: "cashout", label: "Cash-Out" },
                        ]}
                      />
                      <div style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 4 }}>
                        {refiType === "rateterm"
                          ? "Rate-and-Term: refinance to get a lower rate or change your term, without taking cash out. FHA allows up to 97.75% LTV."
                          : "Cash-Out: refinance and take some of your equity out as cash. FHA caps this at 80% LTV, so you keep at least 20% equity."}
                      </div>
                    </Field>
                    <Field label="Estimated Loan Balance ($)" hint="Your current outstanding mortgage balance to be refinanced.">
                      <input
                        className="cvf-input"
                        style={inputStyle}
                        inputMode="numeric"
                        value={refiLoanBalanceText}
                        onChange={(e) => setRefiLoanBalanceText(e.target.value)}
                        onBlur={() => setRefiLoanBalanceText(effectiveLoanAmount.toLocaleString("en-US"))}
                      />
                      <MiniSlider min={0} max={homePrice || 500000} step={500} value={refiLoanBalance} onChange={(v) => setRefiLoanBalanceText(String(Math.round(v)))} />
                      <div style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 8 }}>
                        Implied equity: <b style={{ color: C.ink }}>{fmtMoney(downPayment)} ({fmtPct(downPct, 1)})</b>
                      </div>
                      {refiExceedsValue && (
                        <div style={{ fontSize: 11.5, marginTop: 8, fontWeight: 600, color: C.amber, background: C.amberWash, border: "1px solid #e3cd9a", borderRadius: 7, padding: "8px 10px" }}>
                          ⚠ Loan balance can&apos;t exceed home value — capped at 100% ({fmtMoney(homePrice)}).
                        </div>
                      )}
                      {!refiExceedsValue && fhaRefiExceedsLtv && (
                        <div style={{ fontSize: 11.5, marginTop: 8, fontWeight: 600, color: C.amber, background: C.amberWash, border: "1px solid #e3cd9a", borderRadius: 7, padding: "8px 10px" }}>
                          ⚠ Exceeds FHA&apos;s {fhaRefiMaxLtv}% max LTV for a {refiType === "cashout" ? "Cash-Out" : "Rate-and-Term"} refinance — FHA would cap this loan at {fmtMoney(fhaRefiMaxLoan)}.
                        </div>
                      )}
                    </Field>
                  </>
                ) : (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    <Field label="Down Payment ($)">
                      <input
                        className="cvf-input"
                        style={inputStyle}
                        inputMode="numeric"
                        value={downPaymentDollarText}
                        onChange={(e) => onDownPaymentDollarChange(e.target.value)}
                        onBlur={() => setDownPaymentDollarText(downPayment.toLocaleString("en-US"))}
                      />
                    </Field>
                    <Field label="Down Payment (%)">
                      <input
                        className="cvf-input"
                        style={inputStyle}
                        inputMode="decimal"
                        value={downPaymentPercentText}
                        onChange={(e) => onDownPaymentPercentChange(e.target.value)}
                        onBlur={() => setDownPaymentPercentText(downPct.toFixed(2))}
                      />
                    </Field>
                  </div>
                )}
                {!isRefi && <MiniSlider min={0} max={homePrice || 500000} step={500} value={downPayment} onChange={(v) => onDownPaymentDollarChange(String(Math.round(v)))} />}
                {downPaymentExceedsPrice && (
                  <div style={{ fontSize: 11.5, marginTop: 8, fontWeight: 600, color: C.danger, background: C.dangerWash, border: "1px solid #e2b3ac", borderRadius: 7, padding: "8px 10px" }}>
                    ⚠ Down payment can&apos;t exceed home price — capped at 100% ({fmtMoney(homePrice)}).
                  </div>
                )}
                {fhaBelowMin && (
                  <div style={{ fontSize: 11.5, marginTop: 8, fontWeight: 600, color: C.amber, background: C.amberWash, border: "1px solid #e3cd9a", borderRadius: 7, padding: "8px 10px" }}>
                    ⚠ Below FHA&apos;s required minimum down payment of {fmtMoney(fhaEffectiveMinDown)} for this price/property type{fhaLimitBinding ? ` (driven by the ${county} County FHA loan limit of ${fmtMoney(fhaLimit)})` : " (3.5% minimum)"}.
                  </div>
                )}
                {convBelowMin && (
                  <div style={{ fontSize: 11.5, marginTop: 8, fontWeight: 600, color: C.blue, background: C.blueWash, border: "1px solid #c3d3e5", borderRadius: 7, padding: "8px 10px" }}>
                    ⚠ Below Conventional&apos;s typical minimum down payment of {fmtMoney(convMinDown)} (3% minimum for well-qualified first-time buyers).
                  </div>
                )}
                {convExceedsLimit && (
                  <div style={{ fontSize: 11.5, marginTop: 8, fontWeight: 600, color: C.blue, background: C.blueWash, border: "1px solid #c3d3e5", borderRadius: 7, padding: "8px 10px" }}>
                    ⚠ Conventional loan amount exceeds the {fmtMoney(convLimit)} conforming limit — this scenario would price as jumbo.
                  </div>
                )}
              </Panel>

              <Panel number={3} title="Credit Score & Rates">
                <Field label="Credit Score" hint="Drives Conventional PMI pricing — FHA's MIP rate doesn't change with credit score.">
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <input
                      className="cvf-input"
                      style={{ ...inputStyle, width: 84, flex: "0 0 84px", textAlign: "center" }}
                      inputMode="numeric"
                      value={creditScoreText}
                      onChange={(e) => setCreditScoreText(e.target.value)}
                      onBlur={() => setCreditScoreText(String(creditScore))}
                    />
                    <span style={{ fontSize: 12.5, color: C.inkSoft }}>({creditScoreLabel(creditScore)})</span>
                  </div>
                  <MiniSlider min={600} max={850} step={1} value={creditScore} onChange={(v) => setCreditScoreText(String(Math.round(v)))} />
                </Field>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  <Field label="Conventional Rate (%)">
                    <input
                      className="cvf-input"
                      style={inputStyle}
                      inputMode="decimal"
                      value={convRateText}
                      onChange={(e) => setConvRateText(e.target.value)}
                      onBlur={() => { const v = toNumber(convRateText); if (isFinite(v)) setConvRateText(Math.max(0, v).toFixed(3)); }}
                    />
                    <MiniSlider min={0} max={15} step={0.125} value={convRate} onChange={(v) => setConvRateText(v.toString())} />
                  </Field>
                  <Field label="FHA Rate (%)">
                    <input
                      className="cvf-input"
                      style={inputStyle}
                      inputMode="decimal"
                      value={fhaRateText}
                      onChange={(e) => setFhaRateText(e.target.value)}
                      onBlur={() => { const v = toNumber(fhaRateText); if (isFinite(v)) setFhaRateText(Math.max(0, v).toFixed(3)); }}
                    />
                    <MiniSlider min={0} max={15} step={0.125} value={fhaRate} onChange={(v) => setFhaRateText(v.toString())} />
                  </Field>
                </div>
                <div style={{ fontSize: 11.5, color: C.inkSoft, marginTop: -6, marginBottom: 14 }}>
                  FHA pricing is typically about ½% lower than Conventional — the default rates above reflect that. These defaults are illustrative examples only, not current market rates — enter your own quoted rates for an accurate comparison.
                </div>
                <Field label="Loan Term">
                  <TermSelector value={term} onChange={setTerm} />
                </Field>
              </Panel>

              <Panel number={4} title="Housing Costs" tag="shared by both programs">
                <Field label="Property Tax Rate (%)" hint={`Auto-estimated for this home price: ${(homePrice > 0 ? (taxDefaultDollar / homePrice) * 100 : 0).toFixed(2)}% (${fmtMoney(taxDefaultDollar)}/yr) — edit to override.`}>
                  <input className="cvf-input" style={inputStyle} inputMode="decimal" placeholder="Auto-estimated from home price" value={propertyTaxRateText} onChange={(e) => setPropertyTaxRateText(e.target.value)} />
                </Field>
                <Field label="Annual Home Insurance ($)" hint={`Auto-estimated for this home price: ${fmtMoney(insDefault)}/yr — edit to override.`}>
                  <input className="cvf-input" style={inputStyle} inputMode="numeric" placeholder="Auto-estimated from home price" value={homeInsuranceText} onChange={(e) => setHomeInsuranceText(e.target.value)} />
                </Field>
                <Field label="HOA Fees ($)" hint="Monthly Homeowners Association fees, if applicable.">
                  <input className="cvf-input" style={inputStyle} inputMode="numeric" value={hoaFeesText} onChange={(e) => setHoaFeesText(e.target.value)} onBlur={() => setHoaFeesText(hoaFees.toLocaleString("en-US"))} />
                  <MiniSlider min={0} max={1000} step={10} value={hoaFees} onChange={(v) => setHoaFeesText(Math.round(v).toLocaleString("en-US"))} />
                </Field>
              </Panel>
            </div>

            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  background: `linear-gradient(135deg, ${C.greenWash} 0%, #ffffff 60%)`,
                  border: `2px solid ${C.greenBright}`,
                  borderRadius: 12,
                  padding: "20px 22px 22px",
                  marginBottom: 18,
                  boxShadow: "0 4px 18px rgba(58,125,30,0.12)",
                }}
              >
                <h2 style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 700, margin: "0 0 4px", color: C.greenDeep }}>Side-by-Side Comparison</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", fontSize: 11, textTransform: "uppercase", letterSpacing: ".04em", color: C.inkSoft, padding: "10px 0 6px", borderBottom: `2px solid ${C.line}`, marginBottom: 4 }}>
                  <span />
                  <span style={{ textAlign: "right", color: C.greenDeep, fontWeight: 700, paddingRight: 10 }}>FHA</span>
                  <span style={{ textAlign: "right", color: C.blue, fontWeight: 700 }}>Conventional</span>
                </div>
                <ComparisonLine label="Loan Amount" fhaValue={fmtMoney(fhaBaseLoan)} convValue={fmtMoney(convBaseLoan)} />
                <ComparisonLine label="Upfront MI Cost" fhaValue={fmtMoney(ufmip)} convValue="$0" convWins />
                <ComparisonLine label="Total Loan Amount" fhaValue={fmtMoney(fhaTotalLoan)} convValue={fmtMoney(convBaseLoan)} convWins={convBaseLoan < fhaTotalLoan} fhaWins={fhaTotalLoan < convBaseLoan} />
                <ComparisonLine label="Interest Rate" fhaValue={fmtPct(fhaRate, 3)} convValue={fmtPct(convRate, 3)} fhaWins={fhaRate < convRate} convWins={convRate < fhaRate} />
                <ComparisonLine label="Principal & Interest" fhaValue={fmtMoney(fhaPMT)} convValue={fmtMoney(convPMT)} fhaWins={fhaPMT < convPMT} convWins={convPMT < fhaPMT} />
                <ComparisonLine label="Monthly Mortgage Insurance" fhaValue={fmtMoney(fhaMonth1Mip)} convValue={fmtMoney(convMonth1Pmi)} fhaWins={fhaMonth1Mip < convMonth1Pmi} convWins={convMonth1Pmi < fhaMonth1Mip} />
                <ComparisonLine label="Taxes, Insurance & HOA" fhaValue={fmtMoney(sharedCosts)} convValue={fmtMoney(sharedCosts)} />
                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", alignItems: "baseline", padding: "10px 0 0", borderTop: `2px solid ${C.green}`, marginTop: 4 }}>
                  <span style={{ fontSize: 13.5, color: C.inkSoft, fontWeight: 600 }}>Total Monthly Payment</span>
                  <span style={{ textAlign: "right", fontWeight: 700, fontSize: 17, color: fhaTotalMonthly < convTotalMonthly ? C.greenDeep : C.ink, paddingRight: 10 }}>{fmtMoney(fhaTotalMonthly)}</span>
                  <span style={{ textAlign: "right", fontWeight: 700, fontSize: 17, color: convTotalMonthly < fhaTotalMonthly ? C.blue : C.ink }}>{fmtMoney(convTotalMonthly)}</span>
                </div>
              </div>

              <Panel>
                <SectionLabel>Monthly Payment Breakdown</SectionLabel>
                <p style={{ fontSize: 11.5, color: C.inkSoft, margin: "0 0 12px" }}>
                  How each program&apos;s monthly payment splits between principal &amp; interest, mortgage insurance, and shared housing costs.
                </p>
                <div style={{ height: 220 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData} margin={{ top: 5, right: 12, left: 4, bottom: 5 }}>
                      <CartesianGrid stroke="#eeece3" vertical={false} />
                      <XAxis dataKey="name" tick={{ fill: C.inkSoft, fontSize: 12 }} />
                      <YAxis tick={{ fill: C.inkSoft, fontSize: 12 }} tickFormatter={(v) => "$" + Math.round(Number(v)).toLocaleString("en-US")} width={70} />
                      <RTooltip formatter={(v) => [fmtMoney(Number(v)), ""]} />
                      <Legend wrapperStyle={{ fontSize: 12 }} />
                      <Bar dataKey="P&I" stackId="pmt" fill={C.greenDeep} />
                      <Bar dataKey="MI" stackId="pmt" fill={C.danger} />
                      <Bar dataKey="Tax/Ins/HOA" stackId="pmt" fill={C.amber} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Panel>

              <InsightsPanel
                groups={[
                  { title: "Program Comparison", color: C.greenDeep, bullets: insights.compare },
                  { title: "Crossover & Loan Limits", color: C.blue, bullets: insights.crossover },
                ]}
                nextSteps={insights.nextSteps}
              />

              <p style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 18, lineHeight: 1.5 }}>
                This comparison is for illustrative purposes only. Actual rates, mortgage insurance premiums, and loan limits vary by lender and are subject to change. Conventional PMI is modeled with automatic cancellation at 78% loan-to-value per the Homeowners Protection Act; actual cancellation timing may vary based on payment history and lender policy. Consult a Mortgage Brothers loan officer for a personalized comparison.
              </p>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 760px) {
            .cvf-layout { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 560px) {
            .cvf-hp-header { display: none !important; }
            .cvf-hp-row { grid-template-columns: 1fr !important; row-gap: 6px; }
            .cvf-hp-label { margin-bottom: 2px; }
            .cvf-hp-cell { text-align: left !important; }
            .cvf-hp-tag { display: block !important; }
          }
          .cvf-input { transition: border-color .15s, box-shadow .15s, background .15s; }
          .cvf-input:hover { border-color: #a9b59c; }
          .cvf-input:focus { background: #ffffff; border-color: ${C.greenBright}; box-shadow: 0 0 0 3px ${C.greenWash}; }
        `}</style>
      </main>
      <Footer />
    </div>
  );
}
