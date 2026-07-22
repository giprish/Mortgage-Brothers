"use client";

import { useMemo, useState, type CSSProperties, type ReactNode } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

/* ============================================================
   DESIGN TOKENS (matches the original file's own palette, which
   is already the suite's shared Source Serif 4 / Inter / mono system)
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
  frontBlue: "#2f5488",
  frontBluePale: "#d3e0ef",
  backPurple: "#6b3fa0",
  backPurplePale: "#e6dbf2",
};
const SERIF = '"Source Serif 4", Georgia, "Times New Roman", serif';
const SANS = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const MONO = "'IBM Plex Mono', 'SFMono-Regular', Menlo, Consolas, monospace";

const fieldBg = "#eef1ea";
const fieldBorder = "#c3ccbb";

/* ============================================================
   TYPES
============================================================ */
type RatioStatus = "pass" | "warn" | "fail";
type TransactionType = "purchase" | "refinance";

interface FitBand {
  label: string;
  color: string;
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
  return "$" + Math.round(Math.max(0, n)).toLocaleString("en-US");
}
function fmtPct(n: number): string {
  if (!isFinite(n)) n = 0;
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%";
}
function ratioStatus(ratio: number, threshold: number): RatioStatus {
  return ratio <= threshold ? "pass" : ratio <= threshold + 2 ? "warn" : "fail";
}
const STATUS_COLOR: Record<RatioStatus, string> = { pass: C.greenDeep, warn: C.amber, fail: C.danger };
const STATUS_LABEL: Record<RatioStatus, string> = { pass: "Within guideline", warn: "Borderline", fail: "Over guideline" };

/* ============================================================
   MORTGAGE PAYMENT / PMI / TAX / INSURANCE (same math and
   tables used across the rest of the suite, so a computed
   mortgage payment here matches the other calculators)
============================================================ */
function paymentFormula(P: number, annualRatePct: number, termYears: number): number {
  const n = termYears * 12;
  const r = annualRatePct / 100 / 12;
  if (P <= 0 || n <= 0) return 0;
  if (r === 0) return P / n;
  const factor = Math.pow(1 + r, n);
  return (P * r * factor) / (factor - 1);
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
   LOAN OPTIONS / RECOMMENDATIONS NARRATIVE (ported 1:1)
============================================================ */
function loanOptionsText(backDti: number): string {
  if (backDti <= 36.0) {
    return "Excellent position. Likely to qualify for most conventional, FHA, and VA loan programs at standard terms and the best available pricing.";
  } else if (backDti <= 43.0) {
    return "Good position. Typically still qualifies for conventional and FHA financing. Some conventional programs allow ratios in this range with strong compensating factors such as credit score, cash reserves, or a larger down payment.";
  } else if (backDti <= 50.0) {
    return "Qualifies with compensating factors. FHA and VA loans may accept ratios in this range with strong compensating factors (residual income, cash reserves, minimal payment shock, high credit score). Conventional financing becomes harder to obtain without an automated-underwriting approval.";
  }
  return "Likely does not meet standard program limits. Most loan programs cap back-end DTI at or near 50%. Qualification at this level generally requires significant compensating factors, or reducing debt / increasing income first.";
}
function loanFitBand(backDti: number): FitBand {
  if (backDti <= 36.0) return { label: "Excellent", color: C.greenDeep };
  if (backDti <= 43.0) return { label: "Good", color: C.green };
  if (backDti <= 50.0) return { label: "Qualifies w/ Factors", color: C.amber };
  return { label: "Above Limits", color: C.danger };
}
function recommendationsText(frontDti: number, backDti: number, income: number, housing: number, debts: number): string {
  const notes: string[] = [];
  const frontStatus = ratioStatus(frontDti, 40);
  const backStatus = ratioStatus(backDti, 48);

  if (backStatus === "fail") {
    const excess = housing + debts - income * 0.48;
    notes.push(`Your back-end DTI is above the 48% guideline. Reducing monthly debt or housing costs by roughly ${fmtMoney(Math.max(excess, 0))} would bring you back to the 48% target.`);
  } else if (backStatus === "warn") {
    notes.push("Your back-end DTI is close to the 48% guideline. A small reduction in monthly debt would give you more comfortable room with lenders.");
  }

  if (frontStatus === "fail" && backStatus !== "fail") {
    notes.push("Housing costs specifically are the limiting factor here — your front-end ratio exceeds 40% even though your overall debt load is within guideline.");
  } else if (frontStatus === "fail") {
    notes.push("Your housing costs alone exceed the 40% front-end guideline.");
  }

  if (frontStatus === "pass" && backStatus === "pass" && frontDti <= 38 && backDti <= 46) {
    notes.push("You are well positioned on both ratios, with comfortable room below standard lender guidelines.");
  }

  if (notes.length === 0) {
    notes.push("Your ratios are within standard lender guidelines.");
  }

  if (housing === 0 && debts === 0 && income > 0) {
    notes.push("No housing or debt obligations were entered — double check that all recurring payments have been captured before relying on this result.");
  }

  return notes.join(" ");
}

/* ============================================================
   UI PRIMITIVES
============================================================ */
function Field({ label, hint, children }: { label: ReactNode; hint?: ReactNode; children: ReactNode }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: C.ink, marginBottom: 5 }}>
        {label}
      </label>
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
    <input type="range" min={min} max={max} step={step} value={safe}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      style={{ WebkitAppearance: "none", width: "100%", height: 4, borderRadius: 2, background: C.line, marginTop: 8, accentColor: C.greenBright }} />
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
function InfoDot() {
  return (
    <span style={{
      width: 15, height: 15, borderRadius: "50%",
      background: C.greenWash, color: C.greenDeep,
      fontSize: 10, fontWeight: 700, fontFamily: SANS,
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0, cursor: "help", border: `1px solid #cfe0c2`,
    }}>
      ?
    </span>
  );
}
function MilestoneStat({
  label, value, note, highlight, boxBg, boxBorder, valueColor, info,
}: {
  label: string;
  value: ReactNode;
  note: ReactNode;
  highlight?: boolean;
  boxBg?: string;
  boxBorder?: string;
  valueColor?: string;
  info?: string;
}) {
  const bg = boxBg !== undefined ? boxBg : (highlight ? C.greenDeep : "#fff");
  const border = boxBorder !== undefined ? boxBorder : (highlight ? C.greenDeep : "#cfe0c2");
  const labelColor = highlight ? "#eaf3e3" : C.inkSoft;
  const valColor = valueColor !== undefined ? valueColor : (highlight ? "#fff" : C.greenDeep);
  const noteColor = highlight ? "#dcead0" : C.inkSoft;
  return (
    <div style={{ background: bg, border: `1.5px solid ${border}`, borderRadius: 8, padding: "10px 12px" }}>
      <div title={info || undefined} style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 10, textTransform: "uppercase", letterSpacing: ".04em", fontWeight: 700, color: labelColor, marginBottom: 3, cursor: info ? "help" : "default", padding: info ? "4px 0" : 0 }}>
        {label} {info && <InfoDot />}
      </div>
      <div style={{ fontFamily: MONO, fontWeight: 700, fontSize: 17, color: valColor, marginBottom: 2 }}>{value}</div>
      <div style={{ fontSize: 10.5, color: noteColor, lineHeight: 1.3 }}>{note}</div>
    </div>
  );
}
function RatioMilestoneBar({
  label, ratio, threshold, hasIncome, info,
}: {
  label: string;
  ratio: number;
  threshold: number;
  hasIncome: boolean;
  info?: string;
}) {
  const scaleMax = Math.max(threshold + 15, ratio + 5);
  const pctOf = (v: number) => Math.min(100, Math.max(0, (v / scaleMax) * 100));
  const status = hasIncome ? ratioStatus(ratio, threshold) : "pass";
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 6 }}>
        <span title={info || undefined} style={{ fontWeight: 700, color: C.ink, display: "inline-flex", alignItems: "center", gap: 6, cursor: info ? "help" : "default", padding: info ? "4px 0" : 0 }}>{label} {info && <InfoDot />}</span>
        <span style={{ fontFamily: MONO, fontWeight: 700, color: hasIncome ? STATUS_COLOR[status] : C.inkSoft }}>
          {hasIncome ? fmtPct(ratio) : "—"} <span style={{ fontWeight: 400, color: C.inkSoft }}>/ {threshold}% guideline</span>
        </span>
      </div>
      <div style={{ position: "relative", height: 10, borderRadius: 99, background: "#fff", border: `1px solid ${C.line}`, overflow: "hidden" }}>
        <div style={{ position: "absolute", left: 0, width: `${pctOf(threshold)}%`, top: 0, bottom: 0, background: C.greenWash }} />
        <div style={{ position: "absolute", left: `${pctOf(threshold)}%`, width: `${pctOf(threshold + 2) - pctOf(threshold)}%`, top: 0, bottom: 0, background: C.amberWash }} />
        <div style={{ position: "absolute", left: `${pctOf(threshold + 2)}%`, right: 0, top: 0, bottom: 0, background: C.dangerWash }} />
        {hasIncome && (
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${pctOf(ratio)}%`, background: STATUS_COLOR[status], opacity: 0.9 }} />
        )}
        <div style={{ position: "absolute", left: `${pctOf(threshold)}%`, top: 0, bottom: 0, width: 2, background: C.ink }} />
      </div>
      <div style={{ fontSize: 10, color: C.inkSoft, marginTop: 3 }}>Guideline marker at {threshold}%</div>
    </div>
  );
}

function ResultLine({
  label, value, total, subtotal, noBorder,
}: {
  label: string;
  value: ReactNode;
  total?: boolean;
  subtotal?: boolean;
  noBorder?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex", justifyContent: "space-between", alignItems: "baseline",
        padding: total ? "10px 0 0" : "7px 0",
        borderTop: total ? `2px solid ${C.green}` : "none",
        borderBottom: total ? "none" : (subtotal && noBorder) ? "none" : `1px dashed ${C.line}`,
        marginTop: total ? 4 : 0,
      }}
    >
      <span style={{ color: subtotal ? C.greenDeep : C.inkSoft, fontSize: 13.5, fontWeight: subtotal ? 700 : 400 }}>{label}</span>
      <span style={{ fontWeight: 700, fontVariantNumeric: "tabular-nums", color: total || subtotal ? C.greenDeep : C.ink, fontSize: total ? 16 : subtotal ? 14.5 : 13.5 }}>
        {value}
      </span>
    </div>
  );
}

function InsightsPanel({ groups, nextSteps }: { groups: InsightGroup[]; nextSteps: string[] }) {
  return (
    <div style={{ background: "#f7f8f5", border: `1px solid ${C.line}`, borderRadius: 10, padding: "20px 22px 22px", marginBottom: 18 }}>
      <h2 style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 600, margin: "0 0 12px", color: C.ink }}>Recommendations &amp; Key Insights</h2>
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
          <p style={{ fontSize: 12, color: C.inkSoft, margin: "0 0 10px" }}>Based on your scenario, here&apos;s what we&apos;d suggest next:</p>
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
export default function DtiCalculator() {
  const [primaryIncomeText, setPrimaryIncomeText] = useState("7,200");
  const [additionalIncomeText, setAdditionalIncomeText] = useState("0");

  const [transactionType, setTransactionType] = useState<TransactionType>("purchase");
  const [homeValueText, setHomeValueText] = useState("350,000");
  const [downPaymentText, setDownPaymentText] = useState("70,000");
  const [downPaymentPercentText, setDownPaymentPercentText] = useState("20.00");
  const [loanBalanceText, setLoanBalanceText] = useState("280,000");
  const [rateText, setRateText] = useState("6.75");
  const [termRaw, setTermRaw] = useState(30);
  const [creditScoreText, setCreditScoreText] = useState("720");
  const [propertyTaxRateText, setPropertyTaxRateText] = useState("");
  const [homeInsuranceText, setHomeInsuranceText] = useState("");
  const [hoaFeesText, setHoaFeesText] = useState("0");

  const [carLoansText, setCarLoansText] = useState("380");
  const [creditCardsText, setCreditCardsText] = useState("120");
  const [studentLoansText, setStudentLoansText] = useState("0");
  const [otherDebtsText, setOtherDebtsText] = useState("0");

  const primaryIncome = Math.max(0, toNumber(primaryIncomeText) || 0);
  const additionalIncome = Math.max(0, toNumber(additionalIncomeText) || 0);

  const homeValue = Math.max(0, toNumber(homeValueText) || 0);
  const downPayment = Math.max(0, toNumber(downPaymentText) || 0);
  const loanBalance = Math.max(0, toNumber(loanBalanceText) || 0);
  const annualRate = Math.max(0, toNumber(rateText) || 0);
  const termYears = Math.min(30, Math.max(1, Math.round(termRaw) || 30));

  function onDownPaymentDollarChange(text: string) {
    setDownPaymentText(text);
    const amt = Math.max(0, toNumber(text) || 0);
    const pct = homeValue > 0 ? (amt / homeValue) * 100 : 0;
    setDownPaymentPercentText((Math.round(pct * 100) / 100).toFixed(2));
  }
  function onDownPaymentPercentChange(text: string) {
    setDownPaymentPercentText(text);
    const pctVal = toNumber(text);
    const amt = homeValue > 0 && isFinite(pctVal) ? homeValue * (pctVal / 100) : 0;
    setDownPaymentText(Math.round(amt).toLocaleString("en-US"));
  }
  function onHomeValueChange(text: string) {
    setHomeValueText(text);
    const newVal = Math.max(0, toNumber(text) || 0);
    // keep the down payment dollar amount fixed; recompute the percent only
    const pct = newVal > 0 ? (downPayment / newVal) * 100 : 0;
    setDownPaymentPercentText((Math.round(pct * 100) / 100).toFixed(2));
  }

  const loanAmount = transactionType === "purchase" ? Math.max(0, homeValue - downPayment) : loanBalance;
  const ltv = homeValue > 0 ? (loanAmount / homeValue) * 100 : 0;
  const downPct = 100 - ltv;

  const creditScoreRaw = parseInt(creditScoreText, 10);
  const creditScore = isFinite(creditScoreRaw) ? Math.min(850, Math.max(600, creditScoreRaw)) : 720;

  const monthlyPI = paymentFormula(loanAmount, annualRate, termYears);

  const taxDefaultDollar = lookupBandTable(PROPERTY_TAX_TABLE, homeValue);
  const taxDefaultRate = homeValue > 0 ? Math.round((taxDefaultDollar / homeValue) * 10000) / 100 : 0;
  const insDefault = lookupBandTable(INSURANCE_TABLE, homeValue);
  const propertyTaxManual = propertyTaxRateText.trim() === "" ? null : toNumber(propertyTaxRateText);
  const insuranceManual = homeInsuranceText.trim() === "" ? null : toNumber(homeInsuranceText);
  const taxAnnual = propertyTaxManual !== null && isFinite(propertyTaxManual) ? homeValue * (propertyTaxManual / 100) : taxDefaultDollar;
  const insAnnual = insuranceManual !== null && isFinite(insuranceManual) ? insuranceManual : insDefault;
  const propertyTaxes = taxAnnual / 12;
  const homeInsurance = insAnnual / 12;

  const monthlyPMI = homeValue > 0 && ltv > 80 ? (loanAmount * (pmiRate(creditScore, downPct) / 100)) / 12 : 0;

  const hoaFees = Math.max(0, toNumber(hoaFeesText) || 0);
  const carLoans = Math.max(0, toNumber(carLoansText) || 0);
  const creditCards = Math.max(0, toNumber(creditCardsText) || 0);
  const studentLoans = Math.max(0, toNumber(studentLoansText) || 0);
  const otherDebts = Math.max(0, toNumber(otherDebtsText) || 0);

  const income = primaryIncome + additionalIncome;
  const housing = monthlyPI + propertyTaxes + homeInsurance + hoaFees + monthlyPMI;
  const otherDebtTotal = carLoans + creditCards + studentLoans + otherDebts;
  const totalObligations = housing + otherDebtTotal;

  const hasIncome = income > 0;
  const frontDti = hasIncome ? (housing / income) * 100 : 0;
  const backDti = hasIncome ? (totalObligations / income) * 100 : 0;

  const frontStatus = hasIncome ? ratioStatus(frontDti, 40) : "pass";
  const backStatus = hasIncome ? ratioStatus(backDti, 48) : "pass";
  const fitBand = hasIncome ? loanFitBand(backDti) : null;

  const housingPct = hasIncome ? Math.min(100, (housing / income) * 100) : 0;
  const debtPct = hasIncome ? Math.min(100 - housingPct, (otherDebtTotal / income) * 100) : 0;
  const remainingPct = hasIncome ? Math.max(0, 100 - housingPct - debtPct) : 100;

  const insights = useMemo(() => {
    if (!hasIncome) {
      return {
        dti: ["Enter your monthly income to see your DTI analysis."],
        risk: ["Enter your monthly income to receive personalized recommendations."],
        nextSteps: ["Enter your income and expenses above to get started."],
      };
    }
    const dti = [
      `Your front-end DTI (housing only) is ${fmtPct(frontDti)} against a 40% guideline (${STATUS_LABEL[frontStatus].toLowerCase()}).`,
      `Your back-end DTI (all debts) is ${fmtPct(backDti)} against a 48% guideline (${STATUS_LABEL[backStatus].toLowerCase()}).`,
      loanOptionsText(backDti),
    ];
    const risk = [recommendationsText(frontDti, backDti, income, housing, otherDebtTotal)];
    if (frontStatus === "fail" || backStatus === "fail") {
      risk.push("Loan programs generally cap DTI at specific thresholds — verify your exact qualifying ratio with a loan officer before shopping for a home.");
    }

    const nextSteps = ["Get a verified pre-approval to confirm your actual qualifying DTI and rate."];
    if (backStatus !== "pass") {
      nextSteps.push("Consider paying down a card or loan balance before applying — even a modest reduction can meaningfully improve your ratio.");
    }
    nextSteps.push("Contact a Mortgage Brothers loan officer to review your options and confirm eligibility.");

    return { dti, risk, nextSteps };
  }, [hasIncome, frontDti, backDti, frontStatus, backStatus, income, housing, otherDebtTotal]);

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
              Debt-to-Income Ratio Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Check your front-end and back-end DTI against lender guidelines — results update as you adjust income, housing, and debts.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "28px 20px 64px" }}>
          {/* DTI Milestones — bold, high-visibility centerpiece, full width at the very top */}
          <div style={{
            background: `linear-gradient(135deg, ${C.greenWash} 0%, #ffffff 55%)`,
            border: `2px solid ${C.greenBright}`,
            borderRadius: 12,
            padding: "16px 20px 18px",
            marginBottom: 18,
            boxShadow: "0 4px 18px rgba(58,125,30,0.12)",
          }}>
            <h2 style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 700, margin: "0 0 2px", color: C.greenDeep }}>DTI Milestones</h2>
            <p style={{ fontSize: 12, color: C.inkSoft, margin: "0 0 12px" }}>
              Where your front-end and back-end debt-to-income ratios stand against standard lender guidelines.
            </p>

            <RatioMilestoneBar label="Front-End DTI (Housing Only)" ratio={frontDti} threshold={40} hasIncome={hasIncome}
              info="Front-end DTI measures only your monthly housing costs — mortgage payment, property taxes, insurance, and HOA fees — as a percentage of your gross monthly income." />
            <RatioMilestoneBar label="Back-End DTI (All Debts)" ratio={backDti} threshold={48} hasIncome={hasIncome}
              info="Back-end DTI measures ALL your monthly debt obligations — housing costs plus car loans, credit cards, student loans, and other debts — as a percentage of your gross monthly income. This is the ratio most lenders use to determine loan eligibility." />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10, marginTop: 8 }}>
              <MilestoneStat label="Front-End DTI" value={hasIncome ? fmtPct(frontDti) : "—"} note={hasIncome ? STATUS_LABEL[frontStatus] : "enter income"}
                boxBg={C.frontBluePale} boxBorder={C.frontBlue} valueColor={hasIncome ? STATUS_COLOR[frontStatus] : C.inkSoft} />
              <MilestoneStat label="Back-End DTI" value={hasIncome ? fmtPct(backDti) : "—"} note={hasIncome ? STATUS_LABEL[backStatus] : "enter income"}
                boxBg={C.backPurplePale} boxBorder={C.backPurple} valueColor={hasIncome ? STATUS_COLOR[backStatus] : C.inkSoft} />
              <MilestoneStat label="Loan Program Fit" value={fitBand ? fitBand.label : "—"} note={hasIncome ? "based on back-end DTI" : "enter income"} highlight={hasIncome && !!fitBand && fitBand.label === "Excellent"} />
            </div>
          </div>

          <div className="dti-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
            {/* ============ INPUT COLUMN ============ */}
            <div>
              <Panel number={1} title="Monthly Income">
                <Field label="Primary Job Income ($)" hint="Your regular monthly income before taxes.">
                  <input className="dpc-input" style={inputStyle} inputMode="numeric" value={primaryIncomeText}
                    onChange={(e) => setPrimaryIncomeText(e.target.value)}
                    onBlur={() => setPrimaryIncomeText(primaryIncome.toLocaleString("en-US"))} />
                  <MiniSlider min={0} max={40000} step={100} value={primaryIncome} onChange={(v) => setPrimaryIncomeText(Math.round(v).toLocaleString("en-US"))} />
                </Field>
                <Field label="Additional Income ($)" hint="Rental income, part-time work, etc.">
                  <input className="dpc-input" style={inputStyle} inputMode="numeric" value={additionalIncomeText}
                    onChange={(e) => setAdditionalIncomeText(e.target.value)}
                    onBlur={() => setAdditionalIncomeText(additionalIncome.toLocaleString("en-US"))} />
                  <MiniSlider min={0} max={10000} step={100} value={additionalIncome} onChange={(v) => setAdditionalIncomeText(Math.round(v).toLocaleString("en-US"))} />
                </Field>
              </Panel>

              <Panel number={2} title="Monthly Housing Expenses" tag="Front-End DTI">
                <Field label="This Is a">
                  <div style={{ display: "flex", border: `1.5px solid ${fieldBorder}`, borderRadius: 7, overflow: "hidden" }}>
                    <button type="button" onClick={() => setTransactionType("purchase")}
                      style={{ flex: 1, border: "none", padding: "9px 8px", fontFamily: SANS, fontSize: 13, fontWeight: 600, cursor: "pointer", background: transactionType === "purchase" ? C.greenBright : "#fff", color: transactionType === "purchase" ? "#fff" : C.inkSoft }}>
                      Home Purchase
                    </button>
                    <button type="button" onClick={() => setTransactionType("refinance")}
                      style={{ flex: 1, border: "none", borderLeft: `1.5px solid ${fieldBorder}`, padding: "9px 8px", fontFamily: SANS, fontSize: 13, fontWeight: 600, cursor: "pointer", background: transactionType === "refinance" ? C.greenBright : "#fff", color: transactionType === "refinance" ? "#fff" : C.inkSoft }}>
                      Refinance
                    </button>
                  </div>
                </Field>

                <Field label={transactionType === "purchase" ? "Home Price ($)" : "Current Home Value ($)"}
                  hint="Used to estimate property taxes, insurance, and PMI.">
                  <input className="dpc-input" style={inputStyle} inputMode="numeric" value={homeValueText}
                    onChange={(e) => onHomeValueChange(e.target.value)}
                    onBlur={() => setHomeValueText(homeValue.toLocaleString("en-US"))} />
                  <MiniSlider min={0} max={3000000} step={5000} value={homeValue} onChange={(v) => onHomeValueChange(String(v))} />
                </Field>

                {transactionType === "purchase" ? (
                  <Field label="Down Payment">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      <div>
                        <div style={{ fontSize: 11, color: C.inkSoft, marginBottom: 3 }}>Dollar Amount ($)</div>
                        <input className="dpc-input" style={inputStyle} inputMode="numeric" value={downPaymentText}
                          onChange={(e) => onDownPaymentDollarChange(e.target.value)}
                          onBlur={() => setDownPaymentText(downPayment.toLocaleString("en-US"))} />
                      </div>
                      <div>
                        <div style={{ fontSize: 11, color: C.inkSoft, marginBottom: 3 }}>Percent (%)</div>
                        <input className="dpc-input" style={inputStyle} inputMode="decimal" value={downPaymentPercentText}
                          onChange={(e) => onDownPaymentPercentChange(e.target.value)}
                          onBlur={() => setDownPaymentPercentText((homeValue > 0 ? (downPayment / homeValue) * 100 : 0).toFixed(2))} />
                      </div>
                    </div>
                    <MiniSlider min={0} max={homeValue || 500000} step={1000} value={downPayment} onChange={(v) => onDownPaymentDollarChange(String(Math.round(v)))} />
                  </Field>
                ) : (
                  <Field label="Loan Balance ($)" hint="Your new refinanced loan amount.">
                    <input className="dpc-input" style={inputStyle} inputMode="numeric" value={loanBalanceText}
                      onChange={(e) => setLoanBalanceText(e.target.value)}
                      onBlur={() => setLoanBalanceText(loanBalance.toLocaleString("en-US"))} />
                    <MiniSlider min={0} max={2000000} step={1000} value={loanBalance} onChange={(v) => setLoanBalanceText(Math.round(v).toLocaleString("en-US"))} />
                  </Field>
                )}

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  <Field label="Interest Rate (%)">
                    <input className="dpc-input" style={inputStyle} inputMode="decimal" value={rateText}
                      onChange={(e) => setRateText(e.target.value)}
                      onBlur={() => { const n2 = toNumber(rateText); if (isFinite(n2)) setRateText(n2.toFixed(3)); }} />
                    <MiniSlider min={0} max={15} step={0.125} value={annualRate} onChange={(v) => setRateText(v.toString())} />
                  </Field>
                  <Field label="Loan Term (Years)">
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <input type="range" min={1} max={30} step={1} value={termRaw}
                        onChange={(e) => setTermRaw(parseFloat(e.target.value))}
                        style={{ WebkitAppearance: "none", flex: 1, height: 4, borderRadius: 2, background: C.line, accentColor: C.greenBright }} />
                      <div style={{ minWidth: 48, textAlign: "center", background: C.greenWash, color: C.greenDeep, fontFamily: MONO, fontWeight: 600, fontSize: 13, padding: "6px 4px", borderRadius: 6, border: `1px solid ${C.line}` }}>
                        {termYears} yr
                      </div>
                    </div>
                  </Field>
                </div>

                <Field label="Credit Score" hint="Used to estimate PMI if your loan-to-value is above 80%.">
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <input className="dpc-input" style={{ ...inputStyle, width: 84, flex: "0 0 84px", textAlign: "center" }}
                      inputMode="numeric" value={creditScoreText}
                      onChange={(e) => setCreditScoreText(e.target.value)}
                      onBlur={() => setCreditScoreText(String(creditScore))} />
                    <span style={{ fontSize: 12.5, color: C.inkSoft }}>({creditScoreLabel(creditScore)})</span>
                  </div>
                  <MiniSlider min={600} max={850} step={1} value={creditScore} onChange={(v) => setCreditScoreText(String(Math.round(v)))} />
                </Field>

                <Field label="Property Tax Rate (%)" hint={`Auto-estimated for this home value: ${taxDefaultRate.toFixed(2)}% (${fmtMoney(taxDefaultDollar)}/yr) — edit to override.`}>
                  <input className="dpc-input" style={inputStyle} inputMode="decimal" placeholder="Auto-estimated from home value"
                    value={propertyTaxRateText} onChange={(e) => setPropertyTaxRateText(e.target.value)} />
                </Field>
                <Field label="Annual Home Insurance ($)" hint={`Auto-estimated for this home value: ${fmtMoney(insDefault)}/yr — edit to override.`}>
                  <input className="dpc-input" style={inputStyle} inputMode="numeric" placeholder="Auto-estimated from home value"
                    value={homeInsuranceText} onChange={(e) => setHomeInsuranceText(e.target.value)} />
                </Field>
                <Field label="HOA Fees ($)" hint="Monthly Homeowners Association fees, if applicable.">
                  <input className="dpc-input" style={inputStyle} inputMode="numeric" value={hoaFeesText}
                    onChange={(e) => setHoaFeesText(e.target.value)}
                    onBlur={() => setHoaFeesText(hoaFees.toLocaleString("en-US"))} />
                  <MiniSlider min={0} max={1000} step={10} value={hoaFees} onChange={(v) => setHoaFeesText(Math.round(v).toLocaleString("en-US"))} />
                </Field>

                <div style={{ background: C.greenWash, border: "1px solid #cfe0c2", borderRadius: 8, padding: "10px 12px", fontSize: 12.5, color: C.greenDeep, marginTop: 4 }}>
                  Estimated Principal &amp; Interest: <b>{fmtMoney(monthlyPI)}</b>/mo
                  {monthlyPMI > 0 && <> · Estimated PMI: <b>{fmtMoney(monthlyPMI)}</b>/mo ({fmtPct(pmiRate(creditScore, downPct))}/yr, LTV {ltv.toFixed(1)}%)</>}
                </div>
              </Panel>

              <Panel number={3} title="Other Monthly Debts" tag="Back-End DTI">
                <Field label="Car Loans ($)" hint="Total monthly car payments.">
                  <input className="dpc-input" style={inputStyle} inputMode="numeric" value={carLoansText}
                    onChange={(e) => setCarLoansText(e.target.value)}
                    onBlur={() => setCarLoansText(carLoans.toLocaleString("en-US"))} />
                  <MiniSlider min={0} max={3000} step={25} value={carLoans} onChange={(v) => setCarLoansText(Math.round(v).toLocaleString("en-US"))} />
                </Field>
                <Field label="Credit Cards ($)" hint="Minimum required monthly payments.">
                  <input className="dpc-input" style={inputStyle} inputMode="numeric" value={creditCardsText}
                    onChange={(e) => setCreditCardsText(e.target.value)}
                    onBlur={() => setCreditCardsText(creditCards.toLocaleString("en-US"))} />
                  <MiniSlider min={0} max={2000} step={10} value={creditCards} onChange={(v) => setCreditCardsText(Math.round(v).toLocaleString("en-US"))} />
                </Field>
                <Field label="Student Loans ($)" hint="Monthly student loan payments.">
                  <input className="dpc-input" style={inputStyle} inputMode="numeric" value={studentLoansText}
                    onChange={(e) => setStudentLoansText(e.target.value)}
                    onBlur={() => setStudentLoansText(studentLoans.toLocaleString("en-US"))} />
                  <MiniSlider min={0} max={2000} step={10} value={studentLoans} onChange={(v) => setStudentLoansText(Math.round(v).toLocaleString("en-US"))} />
                </Field>
                <Field label="Other Debts ($)" hint="Personal loans, alimony, etc.">
                  <input className="dpc-input" style={inputStyle} inputMode="numeric" value={otherDebtsText}
                    onChange={(e) => setOtherDebtsText(e.target.value)}
                    onBlur={() => setOtherDebtsText(otherDebts.toLocaleString("en-US"))} />
                  <MiniSlider min={0} max={2000} step={10} value={otherDebts} onChange={(v) => setOtherDebtsText(Math.round(v).toLocaleString("en-US"))} />
                </Field>
              </Panel>
            </div>

            {/* ============ RESULTS COLUMN ============ */}
            <div>
              <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, padding: "20px 22px 22px", marginBottom: 18 }}>
                <h2 style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 600, margin: "0 0 14px", color: C.greenDeep }}>Monthly Snapshot</h2>
                <ResultLine label="Monthly Gross Income" value={fmtMoney(income)} />
                <ResultLine label="  Principal & Interest" value={fmtMoney(monthlyPI)} />
                <ResultLine label="  Property Taxes" value={fmtMoney(propertyTaxes)} />
                <ResultLine label="  Home Insurance" value={fmtMoney(homeInsurance)} />
                <ResultLine label="  HOA Fees" value={fmtMoney(hoaFees)} />
                {monthlyPMI > 0 && <ResultLine label="  PMI" value={fmtMoney(monthlyPMI)} />}
                <div style={{ border: `1.5px solid ${C.greenDeep}`, borderRadius: 8, padding: "2px 12px", margin: "10px 0", background: C.greenWash }}>
                  <ResultLine label="Housing Expenses" value={fmtMoney(housing)} subtotal />
                  <ResultLine label="Other Monthly Debts" value={fmtMoney(otherDebtTotal)} subtotal noBorder />
                </div>
                <ResultLine label="Total Obligations" value={fmtMoney(totalObligations)} total />
              </div>

              <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, padding: "20px 22px 22px", marginBottom: 18 }}>
                <h3 style={{ fontFamily: MONO, fontSize: 11, textTransform: "uppercase", letterSpacing: ".07em", color: C.inkSoft, margin: "0 0 12px" }}>Income Breakdown</h3>
                <div style={{ display: "flex", gap: 18, flexWrap: "wrap", fontSize: 12, marginBottom: 10 }}>
                  <span><span style={{ display: "inline-block", width: 10, height: 10, borderRadius: 3, marginRight: 6, background: C.greenDeep }} />Housing</span>
                  <span><span style={{ display: "inline-block", width: 10, height: 10, borderRadius: 3, marginRight: 6, background: C.amber }} />Other Debts</span>
                  <span><span style={{ display: "inline-block", width: 10, height: 10, borderRadius: 3, marginRight: 6, background: C.line }} />Remaining Income</span>
                </div>
                <div style={{ height: 34, borderRadius: 8, overflow: "hidden", display: "flex", border: `1px solid ${C.line}` }}>
                  {hasIncome ? (
                    <>
                      <div style={{ width: `${housingPct}%`, background: C.greenDeep }} title="Housing" />
                      <div style={{ width: `${debtPct}%`, background: C.amber }} title="Other Debts" />
                      <div style={{ width: `${remainingPct}%`, background: C.line }} title="Remaining Income" />
                    </>
                  ) : (
                    <div style={{ width: "100%", background: C.line }} />
                  )}
                </div>
              </div>

              {/* Insights — last section, below all charts/tables */}
              <InsightsPanel
                groups={[
                  { title: "DTI Analysis", color: C.greenDeep, bullets: insights.dti },
                  { title: "Qualification Risk", color: C.amber, bullets: insights.risk },
                ]}
                nextSteps={insights.nextSteps}
              />

              <p style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 18, lineHeight: 1.5 }}>
                The Debt-to-Income Ratio Calculator is provided for informational and educational purposes only. Results are estimates based on the information you provide and may not reflect your actual financial situation. This calculator does not guarantee loan approval or specific interest rates. The calculations are hypothetical examples only and should not be relied upon as the sole basis for financial decisions.
              </p>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 760px) {
            .dti-layout { grid-template-columns: 1fr !important; }
          }
          .dpc-input { transition: border-color .15s, box-shadow .15s, background .15s; }
          .dpc-input:hover { border-color: #a9b59c; }
          .dpc-input:focus { background: #ffffff; border-color: ${C.greenBright}; box-shadow: 0 0 0 3px ${C.greenWash}; }
        `}</style>
      </main>
      <Footer />
    </div>
  );
}
