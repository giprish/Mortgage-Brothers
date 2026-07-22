"use client";

import { useMemo, useState, type ChangeEvent, type CSSProperties, type ReactNode } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { InteractivePieChart, BasicPaymentOverTimeChart } from "../component/InteractiveCharts";

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
type LoanType = "purchase" | "cashout" | "irrrl";
type FeeStatus = "exempt" | "first" | "subsequent";
type RecTone = "ok" | "tip";

interface ScheduleRow {
  month: number;
  principal: number;
  interest: number;
  balance: number;
}

interface SelectOption {
  value: string;
  label: string;
}

interface ToggleOption<T extends string> {
  value: T;
  label: string;
}

interface InsightGroup {
  title: string;
  color: string;
  bullets: string[];
}

interface Recommendation {
  tone: RecTone;
  text: string;
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
   SERVICE ELIGIBILITY REFERENCE — ported 1:1
============================================================ */
const SERVICE_ERAS: SelectOption[] = [
  { value: "postwwii", label: "Post-WWII (7/26/1947 - 6/26/1950)" },
  { value: "korean", label: "Korean War (6/27/1950 - 1/31/1955)" },
  { value: "postkorean", label: "Post-Korean War (2/1/1955 - 8/4/1964)" },
  { value: "vietnam", label: "Vietnam War (8/5/1964 - 5/7/1975)" },
  { value: "postvietnam", label: "Post-Vietnam (5/8/1975 - 9/7/1980)" },
  { value: "24month", label: "24 Month Rule (9/8/1980 - 8/1/1990)" },
  { value: "gulfwar", label: "Gulf War (8/2/1990 - present)" },
  { value: "activeduty", label: "Currently On Active Duty" },
  { value: "guardreserve", label: "National Guard & Reserve Member" },
];
const SERVICE_MIN_MONTHS: Record<string, number> = {
  postwwii: 3, korean: 3, postkorean: 6, vietnam: 3, postvietnam: 6,
  "24month": 24, gulfwar: 24, activeduty: 3, guardreserve: 72,
};

/* ============================================================
   VA FUNDING FEE LOGIC — ported 1:1
============================================================ */
function fundingFeeRate(loanType: LoanType, feeStatus: FeeStatus, downPct: number): number {
  if (feeStatus === "exempt") return 0;
  if (loanType === "irrrl") return 0.5;
  if (loanType === "cashout") return feeStatus === "first" ? 2.15 : 3.3;
  // purchase
  if (downPct < 5) return feeStatus === "first" ? 2.15 : 3.3;
  if (downPct < 10) return 1.5;
  return 1.25;
}
function stdMonthlyPayment(P: number, r: number, n: number): number {
  if (r === 0) return P / n;
  const factor = Math.pow(1 + r, n);
  return (P * (r * factor)) / (factor - 1);
}

/* ============================================================
   PROPERTY TAX / INSURANCE TABLES — shared across the suite
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
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
}) {
  return (
    <Field label={label} hint={hint}>
      <select value={value} onChange={onChange} style={{ ...inputStyle, cursor: "pointer" }}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </Field>
  );
}
function ToggleRow<T extends string>({
  options,
  value,
  onChange,
  columns,
}: {
  options: ToggleOption<T>[];
  value: T;
  onChange: (v: T) => void;
  columns: number;
}) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 6, marginBottom: 6 }}>
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button key={o.value} type="button" onClick={() => onChange(o.value)}
            style={{
              border: `1px solid ${active ? C.greenBright : fieldBorder}`,
              background: active ? C.greenWash : "#f2f4ee",
              color: active ? C.greenDeep : C.inkSoft,
              borderRadius: 7, textAlign: "center", padding: "8px 4px", fontSize: 12, fontWeight: 600, cursor: "pointer",
            }}>
            {o.label}
          </button>
        );
      })}
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
            <button key={t} type="button" onClick={() => onChange(t)}
              style={{
                border: `1px solid ${active ? C.greenBright : fieldBorder}`,
                background: active ? C.greenWash : "#f2f4ee",
                color: active ? C.greenDeep : C.inkSoft,
                borderRadius: 7, textAlign: "center", padding: "8px 4px", fontSize: 12.5, fontWeight: 600, cursor: "pointer",
              }}>
              {t} years
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
      <div className="va-insights-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 20, alignItems: "start" }}>
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
      <style>{`@media (max-width: 640px) { .va-insights-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */
export default function VaLoanCalculator() {
  const [serviceEra, setServiceEra] = useState("gulfwar");
  const [serviceMonthsText, setServiceMonthsText] = useState("24");

  const [loanType, setLoanType] = useState<LoanType>("purchase");
  const [feeStatus, setFeeStatus] = useState<FeeStatus>("first");

  const [homePriceText, setHomePriceText] = useState("450,000");
  const [rateText, setRateText] = useState("6.250");
  const [term, setTerm] = useState(30);

  const [downPaymentPercentText, setDownPaymentPercentText] = useState("0");
  const [downPaymentDollarText, setDownPaymentDollarText] = useState("0");
  const [refiLoanAmountText, setRefiLoanAmountText] = useState("450,000");

  const [propertyTaxRateText, setPropertyTaxRateText] = useState("");
  const [homeInsuranceText, setHomeInsuranceText] = useState("");
  const [hoaFeesText, setHoaFeesText] = useState("0");

  const serviceMonths = Math.max(0, toNumber(serviceMonthsText) || 0);
  const serviceThreshold = SERVICE_MIN_MONTHS[serviceEra] ?? 24;
  const meetsService = serviceMonths >= serviceThreshold;

  const homePrice = Math.max(0, toNumber(homePriceText) || 0);
  const rate = Math.max(0, toNumber(rateText) || 0);
  const isRefi = loanType === "cashout" || loanType === "irrrl";

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
  function applyDpPreset(pctStr: string) {
    onDownPaymentPercentChange(pctStr);
  }

  const downPct = Math.max(0, Math.min(100, toNumber(downPaymentPercentText) || 0));
  const downPayment = homePrice * (downPct / 100);
  const refiLoanAmount = Math.max(0, toNumber(refiLoanAmountText) || 0);
  const refiLtv = homePrice > 0 ? (refiLoanAmount / homePrice) * 100 : 0;
  const refiEquityRetained = Math.max(0, homePrice - refiLoanAmount);
  const n = term * 12;
  const r = rate / 100 / 12;

  const baseLoan = isRefi ? refiLoanAmount : Math.max(0, homePrice - downPayment);
  const feeRate = fundingFeeRate(loanType, feeStatus, downPct);
  const fundingFee = baseLoan * (feeRate / 100);

  const dpRecommendation = useMemo((): Recommendation => {
    if (feeStatus === "exempt") {
      return { tone: "ok", text: "You're exempt from the VA Funding Fee, so down payment won't change your fee — but a larger down payment still lowers your loan amount and monthly payment." };
    }
    if (loanType !== "purchase") {
      return { tone: "ok", text: `${loanType === "irrrl" ? "IRRRL" : "Cash-Out Refi"} loans carry a flat ${fmtPct(feeRate, 2)} funding fee regardless of down payment or equity.` };
    }
    if (downPct < 5) {
      const savings = ((feeRate - 1.5) / 100) * baseLoan;
      return { tone: "tip", text: `Put down 5% to drop your funding fee to 1.50% — roughly ${fmtMoney(savings)} less financed into your loan.` };
    }
    if (downPct < 10) {
      const savings = ((feeRate - 1.25) / 100) * baseLoan;
      return { tone: "tip", text: `Put down 10% to drop your funding fee to 1.25% — roughly ${fmtMoney(savings)} less financed into your loan.` };
    }
    return { tone: "ok", text: "You're at the lowest VA funding fee tier (1.25%) — more down payment won't reduce the fee rate further." };
  }, [loanType, feeStatus, downPct, feeRate, baseLoan]);

  const refiRecommendation = useMemo((): Recommendation => {
    const feeLabel = loanType === "irrrl" ? "IRRRL" : "Cash-Out Refi";
    const equityPct = 100 - refiLtv;
    if (feeStatus === "exempt") {
      return { tone: "ok", text: `You're exempt from the VA Funding Fee. Lowering your loan amount reduces your monthly payment and keeps more equity in your home — currently ${fmtMoney(refiEquityRetained)} (${equityPct.toFixed(1)}% equity) at this amount.` };
    }
    return { tone: "ok", text: `${feeLabel} loans carry a flat ${fmtPct(feeRate, 2)} funding fee regardless of loan amount, so lowering it won't change that rate — but it does reduce your monthly payment and leaves you with more equity, currently ${fmtMoney(refiEquityRetained)} (${equityPct.toFixed(1)}%) at this amount.` };
  }, [loanType, feeStatus, feeRate, refiEquityRetained, refiLtv]);
  const totalLoan = baseLoan + fundingFee;

  const PMT = stdMonthlyPayment(totalLoan, r, n);
  const month1Interest = totalLoan * r;
  const month1Principal = PMT - month1Interest;
  const totalInterestPaid = PMT * n - totalLoan;
  const totalCostOverLife = (isRefi ? 0 : downPayment) + PMT * n;

  const taxDefaultDollar = lookupBandTable(PROPERTY_TAX_TABLE, homePrice);
  const taxDefaultRate = homePrice > 0 ? Math.round((taxDefaultDollar / homePrice) * 10000) / 100 : 0;
  const insDefault = lookupBandTable(INSURANCE_TABLE, homePrice);
  const propertyTaxManual = propertyTaxRateText.trim() === "" ? null : toNumber(propertyTaxRateText);
  const insuranceManual = homeInsuranceText.trim() === "" ? null : toNumber(homeInsuranceText);
  const taxAnnual = propertyTaxManual !== null && isFinite(propertyTaxManual) ? homePrice * (propertyTaxManual / 100) : taxDefaultDollar;
  const insAnnual = insuranceManual !== null && isFinite(insuranceManual) ? insuranceManual : insDefault;
  const propertyTaxMonthly = taxAnnual / 12;
  const homeInsuranceMonthly = insAnnual / 12;
  const hoaFees = Math.max(0, toNumber(hoaFeesText) || 0);

  const totalMonthlyPayment = PMT + propertyTaxMonthly + homeInsuranceMonthly + hoaFees;

  const schedule = useMemo((): ScheduleRow[] => {
    let balance = totalLoan;
    const rows: ScheduleRow[] = [];
    for (let month = 1; month <= n; month++) {
      const interestThisMonth = balance * r;
      let principalThisMonth = PMT - interestThisMonth;
      if (principalThisMonth >= balance) principalThisMonth = balance;
      balance = Math.max(0, balance - principalThisMonth);
      rows.push({ month, principal: principalThisMonth, interest: interestThisMonth, balance });
      if (balance <= 0) break;
    }
    return rows;
  }, [totalLoan, r, n, PMT]);

  const insights = useMemo(() => {
    const loanNotes: string[] = [
      `Your base loan amount is ${fmtMoney(baseLoan)}, with a ${fmtPct(feeRate, 2)} VA Funding Fee (${fmtMoney(fundingFee)}) financed into the loan for a total loan amount of ${fmtMoney(totalLoan)}.`,
      `Your estimated total monthly payment is ${fmtMoney(totalMonthlyPayment)} — ${fmtMoney(month1Principal)} in principal, ${fmtMoney(month1Interest)} in interest, ${fmtMoney(propertyTaxMonthly)} in property taxes, ${fmtMoney(homeInsuranceMonthly)} in homeowners insurance${hoaFees > 0 ? `, and ${fmtMoney(hoaFees)} in HOA fees` : ""}. VA loans require no monthly mortgage insurance.`,
    ];

    const feeNotes: string[] = [];
    if (loanType === "purchase" && feeStatus !== "exempt") {
      if (downPct < 5) {
        feeNotes.push(`Increasing your down payment to 5% would lower your funding fee rate to 1.50%, saving roughly ${fmtMoney(((feeRate - 1.5) / 100) * baseLoan)} financed into your loan.`);
      } else if (downPct < 10) {
        feeNotes.push(`Increasing your down payment to 10% would lower your funding fee rate to 1.25%, saving roughly ${fmtMoney(((feeRate - 1.25) / 100) * baseLoan)} financed into your loan.`);
      }
    }
    if (feeStatus !== "exempt") {
      feeNotes.push("Veterans with a service-connected disability rating, certain Purple Heart recipients, and qualifying surviving spouses may be exempt from the VA Funding Fee entirely. Confirm your status with your VA-approved lender.");
    }
    feeNotes.push(meetsService
      ? `Meets the general service requirement for this era (${serviceThreshold}+ months).`
      : `Below the general ${serviceThreshold}-month reference for this era — you may still qualify under early-discharge exceptions (hardship, disability, reduction-in-force). A VA Certificate of Eligibility is required to confirm.`);

    const nextSteps = [
      "Request your VA Certificate of Eligibility (COE) to confirm entitlement before shopping for a home.",
      "Ask a loan officer whether your disability rating or survivor status qualifies you for a funding fee exemption.",
      "Contact a Mortgage Brothers loan officer to review your options and lock in current VA guidelines.",
    ];

    return { loan: loanNotes, fee: feeNotes, nextSteps };
  }, [baseLoan, feeRate, fundingFee, totalLoan, month1Principal, month1Interest, loanType, feeStatus, downPct, meetsService, serviceThreshold, totalMonthlyPayment, propertyTaxMonthly, homeInsuranceMonthly, hoaFees]);

  const paymentTotal = month1Principal + month1Interest + propertyTaxMonthly + homeInsuranceMonthly + hoaFees;

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
              VA Loan Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Estimate VA payments, funding fees, and eligibility — results update as you adjust the inputs.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "28px 20px 64px", boxSizing: "border-box" }}>
          <div className="va-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
            {/* ============ INPUT COLUMN ============ */}
            <div style={{ minWidth: 0 }}>
              <Panel number={1} title="Service Information">
                <SelectField label="Service Era" value={serviceEra} onChange={(e) => setServiceEra(e.target.value)} options={SERVICE_ERAS} />
                <Field label="Length of Service (months)">
                  <input className="va-input" style={inputStyle} inputMode="numeric" value={serviceMonthsText}
                    onChange={(e) => setServiceMonthsText(e.target.value)}
                    onBlur={() => setServiceMonthsText(String(serviceMonths))} />
                </Field>
                <div style={{
                  borderRadius: 8, padding: "10px 12px", fontSize: 12.5,
                  background: meetsService ? C.greenWash : C.amberWash,
                  color: meetsService ? C.greenDeep : C.amber,
                  border: `1px solid ${meetsService ? "#cfe0c2" : "#e3cd9a"}`,
                }}>
                  {meetsService
                    ? `Meets general service requirement for this era (${serviceThreshold}+ months).`
                    : `Below the general ${serviceThreshold}-month reference for this era — you may still qualify under early-discharge exceptions (hardship, disability, reduction-in-force). A VA Certificate of Eligibility is required to confirm.`}
                </div>
              </Panel>

              <Panel number={2} title="Loan Type & Purpose">
                <Field label="Loan Type">
                  <ToggleRow columns={3} value={loanType} onChange={setLoanType} options={[
                    { value: "purchase", label: "Purchase" },
                    { value: "cashout", label: "Cash Out Refi" },
                    { value: "irrrl", label: "IRRRL" },
                  ]} />
                </Field>
                <Field label="VA Funding Fee Status">
                  <ToggleRow columns={3} value={feeStatus} onChange={setFeeStatus} options={[
                    { value: "exempt", label: "Exempt" },
                    { value: "first", label: "First Time" },
                    { value: "subsequent", label: "Subsequent" },
                  ]} />
                </Field>
              </Panel>

              <Panel number={3} title="Loan Amount & Terms">
                <Field label={isRefi ? "Home Value ($)" : "Home Price ($)"}
                  hint={isRefi ? "VA refinances are based on your home's current appraised value, not the original purchase price." : "VA loans can finance up to 100% of the home price for eligible borrowers."}>
                  <input className="va-input" style={inputStyle} inputMode="numeric" value={homePriceText}
                    onChange={(e) => onHomePriceChange(e.target.value)}
                    onBlur={() => setHomePriceText(homePrice.toLocaleString("en-US"))} />
                  <MiniSlider min={0} max={3000000} step={5000} value={homePrice} onChange={(v) => onHomePriceChange(String(Math.round(v)))} />
                </Field>
                <Field label="Interest Rate (%)">
                  <input className="va-input" style={inputStyle} inputMode="decimal" value={rateText}
                    onChange={(e) => setRateText(e.target.value)}
                    onBlur={() => { const v = toNumber(rateText); if (isFinite(v)) setRateText(Math.max(0, v).toFixed(3)); }} />
                  <MiniSlider min={0} max={15} step={0.125} value={rate} onChange={(v) => setRateText(v.toString())} />
                </Field>
                <Field label="Loan Term">
                  <TermSelector value={term} onChange={setTerm} />
                </Field>
              </Panel>

              {isRefi ? (
                <Panel number={4} title="Loan Amount">
                  <Field label="New Loan Amount ($)" hint={`This is how much you're borrowing against your home's value — VA ${loanType === "irrrl" ? "IRRRLs" : "cash-out refinances"} can go up to 100% of home value for eligible borrowers.`}>
                    <input className="va-input" style={inputStyle} inputMode="numeric" value={refiLoanAmountText}
                      onChange={(e) => setRefiLoanAmountText(e.target.value)}
                      onBlur={() => setRefiLoanAmountText(refiLoanAmount.toLocaleString("en-US"))} />
                    <MiniSlider min={0} max={homePrice || 500000} step={500} value={refiLoanAmount} onChange={(v) => setRefiLoanAmountText(String(Math.round(v)))} />
                  </Field>
                  <div style={{ display: "flex", gap: 16, fontSize: 12.5, color: C.inkSoft, marginBottom: 10 }}>
                    <span>LTV: <b style={{ color: C.ink }}>{fmtPct(refiLtv, 1)}</b></span>
                    <span>Equity Retained: <b style={{ color: C.ink }}>{fmtMoney(refiEquityRetained)}</b></span>
                  </div>
                  <div style={{
                    borderRadius: 8, padding: "10px 12px", fontSize: 12.5,
                    background: C.greenWash, color: C.greenDeep, border: "1px solid #cfe0c2",
                  }}>
                    {refiRecommendation.text}
                  </div>
                </Panel>
              ) : (
                <Panel number={4} title="Down Payment">
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    <Field label="Down Payment (%)">
                      <input className="va-input" style={inputStyle} inputMode="decimal" value={downPaymentPercentText}
                        onChange={(e) => onDownPaymentPercentChange(e.target.value)}
                        onBlur={() => setDownPaymentPercentText(downPct.toFixed(2))} />
                    </Field>
                    <Field label="Down Payment ($)">
                      <input className="va-input" style={inputStyle} inputMode="numeric" value={downPaymentDollarText}
                        onChange={(e) => onDownPaymentDollarChange(e.target.value)}
                        onBlur={() => setDownPaymentDollarText(downPayment.toLocaleString("en-US"))} />
                    </Field>
                  </div>
                  <MiniSlider min={0} max={500000} step={500} value={downPayment} onChange={(v) => onDownPaymentDollarChange(String(Math.round(v)))} />
                  <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
                    {["0", "3.5", "5", "10", "20"].map((p) => {
                      const active = Math.abs(parseFloat(p) - downPct) < 0.001;
                      return (
                        <button key={p} type="button" onClick={() => applyDpPreset(p)}
                          style={{
                            border: `1px solid ${active ? C.greenBright : fieldBorder}`,
                            background: active ? C.greenWash : "#f2f4ee",
                            color: active ? C.greenDeep : C.inkSoft,
                            borderRadius: 6, padding: "5px 10px", fontSize: 11.5, fontWeight: 600, cursor: "pointer",
                          }}>
                          {p}%
                        </button>
                      );
                    })}
                  </div>
                  <div style={{
                    borderRadius: 8, padding: "10px 12px", fontSize: 12.5, marginTop: 10,
                    background: dpRecommendation.tone === "tip" ? C.amberWash : C.greenWash,
                    color: dpRecommendation.tone === "tip" ? C.amber : C.greenDeep,
                    border: `1px solid ${dpRecommendation.tone === "tip" ? "#e3cd9a" : "#cfe0c2"}`,
                  }}>
                    {dpRecommendation.text}
                  </div>
                  <div style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 8 }}>
                    While VA loans don&apos;t require a down payment, making one can significantly reduce your funding fee and monthly payment.
                  </div>
                </Panel>
              )}

              <Panel number={5} title="Housing Costs" tag="for a fuller payment estimate">
                <Field label="Property Tax Rate (%)" hint={`Auto-estimated for this ${isRefi ? "home value" : "home price"}: ${taxDefaultRate.toFixed(2)}% (${fmtMoney(taxDefaultDollar)}/yr) — edit to override.`}>
                  <input className="va-input" style={inputStyle} inputMode="decimal" placeholder={`Auto-estimated from ${isRefi ? "home value" : "home price"}`}
                    value={propertyTaxRateText} onChange={(e) => setPropertyTaxRateText(e.target.value)} />
                </Field>
                <Field label="Annual Home Insurance ($)" hint={`Auto-estimated for this ${isRefi ? "home value" : "home price"}: ${fmtMoney(insDefault)}/yr — edit to override.`}>
                  <input className="va-input" style={inputStyle} inputMode="numeric" placeholder={`Auto-estimated from ${isRefi ? "home value" : "home price"}`}
                    value={homeInsuranceText} onChange={(e) => setHomeInsuranceText(e.target.value)} />
                </Field>
                <Field label="HOA Fees ($)" hint="Monthly Homeowners Association fees, if applicable.">
                  <input className="va-input" style={inputStyle} inputMode="numeric" value={hoaFeesText}
                    onChange={(e) => setHoaFeesText(e.target.value)}
                    onBlur={() => setHoaFeesText(hoaFees.toLocaleString("en-US"))} />
                  <MiniSlider min={0} max={1000} step={10} value={hoaFees} onChange={(v) => setHoaFeesText(Math.round(v).toLocaleString("en-US"))} />
                </Field>
              </Panel>
            </div>

            {/* ============ RESULTS COLUMN ============ */}
            <div style={{ minWidth: 0 }}>
              <div style={{
                background: `linear-gradient(135deg, ${C.greenWash} 0%, #ffffff 60%)`,
                border: `2px solid ${C.greenBright}`,
                borderRadius: 12,
                padding: "20px 22px 22px",
                marginBottom: 18,
                boxShadow: "0 4px 18px rgba(58,125,30,0.12)",
              }}>
                <h2 style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 700, margin: "0 0 14px", color: C.greenDeep }}>Loan Summary</h2>
                <div style={{ marginBottom: 16 }}>
                  <ResultLine label={isRefi ? "Home Value" : "Home Price"} value={fmtMoney(homePrice)} />
                  {isRefi
                    ? <ResultLine label="Equity Retained" value={`${fmtMoney(refiEquityRetained)} (${fmtPct(100 - refiLtv, 1)})`} />
                    : <ResultLine label="Down Payment" value={`${fmtMoney(downPayment)} (${fmtPct(downPct, 2)})`} />}
                  <ResultLine label="Base Loan Amount" value={fmtMoney(baseLoan)} />
                  <ResultLine label={`VA Funding Fee (${fmtPct(feeRate, 2)})`} value={fmtMoney(fundingFee)} />
                  <ResultLine label="Total Loan Amount" value={fmtMoney(totalLoan)} total />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <SectionLabel>Loan Details</SectionLabel>
                  <ResultLine label="Loan Term" value={`${term} years`} />
                  <ResultLine label="Interest Rate" value={fmtPct(rate, 3)} />
                  <ResultLine label="Total Interest Paid" value={fmtMoney(totalInterestPaid)} />
                  <ResultLine label="Total Cost Over Life of Loan" value={fmtMoney(totalCostOverLife)} />
                </div>
                <div>
                  <SectionLabel>Monthly Payment Breakdown</SectionLabel>
                  <ResultLine label="Principal" value={fmtMoney(month1Principal)} />
                  <ResultLine label="Interest" value={fmtMoney(month1Interest)} />
                  <ResultLine label="Property Taxes" value={fmtMoney(propertyTaxMonthly)} />
                  <ResultLine label="Homeowners Insurance" value={fmtMoney(homeInsuranceMonthly)} />
                  {hoaFees > 0 && <ResultLine label="HOA Fees" value={fmtMoney(hoaFees)} />}
                  <ResultLine label="Total Monthly Payment" value={fmtMoney(totalMonthlyPayment)} total />
                </div>
              </div>

              <Panel>
                <SectionLabel>Payment Components</SectionLabel>
                <p style={{ fontSize: 11.5, color: C.inkSoft, margin: "0 0 12px" }}>
                  Your monthly payment consists of Principal, Interest, Property Tax, and Homeowners Insurance (month 1). The VA Funding Fee is a one-time fee folded into your loan amount, not shown as a separate payment component.
                </p>
                <InteractivePieChart
                  donut
                  showLegend
                  centerTextTitle="month 1"
                  centerTextSub={fmtMoney(paymentTotal)}
                  dataItems={[
                    { label: "Principal", value: month1Principal, color: C.greenDeep },
                    { label: "Interest", value: month1Interest, color: C.greenBright },
                    { label: "Property Tax", value: propertyTaxMonthly, color: C.amber },
                    { label: "Insurance", value: homeInsuranceMonthly, color: "#2f5488" },
                    { label: "HOA", value: hoaFees, color: "#6b3fa0" },
                  ]}
                />
              </Panel>

              <Panel>
                <SectionLabel>Amortization Schedule</SectionLabel>
                <p style={{ fontSize: 11.5, color: C.inkSoft, margin: "0 0 12px" }}>
                  How your payment splits between principal and interest, and how your balance declines, across the full loan term (the VA Funding Fee is included in your initial balance).
                </p>
                <BasicPaymentOverTimeChart
                  schedule={schedule.map((row) => ({
                    paymentNum: row.month,
                    principal: row.principal,
                    interest: row.interest,
                    endBalance: row.balance,
                  }))}
                />
              </Panel>

              <Panel>
                <SectionLabel>
                  Payment Over Time <span style={{ fontWeight: 400, textTransform: "none" }}>(monthly amortization schedule)</span>
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
                      {schedule.map((row) => {
                        const isFinal = row.month === schedule.length;
                        return (
                          <tr key={row.month} style={{ background: isFinal ? C.greenWash : undefined }}>
                            <td style={{ textAlign: "left", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, fontWeight: isFinal ? 700 : 600 }}>{row.month}</td>
                            <td style={{ textAlign: "right", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, fontVariantNumeric: "tabular-nums", fontWeight: isFinal ? 700 : 400 }}>{fmtMoney(row.principal)}</td>
                            <td style={{ textAlign: "right", padding: "6px 10px", borderBottom: `1px solid ${C.line}`, fontVariantNumeric: "tabular-nums", fontWeight: isFinal ? 700 : 400 }}>{fmtMoney(row.interest)}</td>
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
                  { title: "VA Loan Analysis", color: C.greenDeep, bullets: insights.loan },
                  { title: "Funding Fee Considerations", color: C.amber, bullets: insights.fee },
                ]}
                nextSteps={insights.nextSteps}
              />

              <p style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 18, lineHeight: 1.5 }}>
                The information provided by this VA Loan Calculator is for illustrative purposes only and should not be considered financial advice. Results are based on user-input data and standard calculations. Actual loan terms, interest rates, funding fees, and other financial parameters may vary. All loans subject to underwriter approval.
              </p>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 760px) {
            .va-layout { grid-template-columns: 1fr !important; }
          }
          .va-input { transition: border-color .15s, box-shadow .15s, background .15s; }
          .va-input:hover { border-color: #a9b59c; }
          .va-input:focus { background: #ffffff; border-color: ${C.greenBright}; box-shadow: 0 0 0 3px ${C.greenWash}; }
        `}</style>
      </main>
      <Footer />
    </div>
  );
}
