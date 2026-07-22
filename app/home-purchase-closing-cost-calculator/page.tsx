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
type LoanProgram = "conventional" | "fha" | "va" | "usda";
type VaUseStatus = "exempt" | "first" | "subsequent";

interface ToggleOption<T extends string> {
  value: T;
  label: string;
}

interface GovFee {
  label: string;
  value: number;
  exempt?: boolean;
}

interface DonutSegment {
  label: string;
  value: number;
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
  return "$" + Math.round(n).toLocaleString("en-US");
}

/* ============================================================
   LOOKUP TABLES — ported 1:1 from the Closing Costs for Purchase worksheet
============================================================ */
const TITLE_ESCROW_TABLE: number[][] = [
  [200000, 450], [300000, 530], [400000, 610], [500000, 690], [600000, 770],
  [700000, 850], [800000, 930], [900000, 1010], [1000000, 1090], [1100000, 1170],
  [1200000, 1250], [1300000, 1330], [1400000, 1410], [1500000, 1490], [1600000, 1570],
  [1700000, 1650], [1800000, 1730], [1900000, 1810], [2000000, 1890], [2100000, 1970],
  [2200000, 2050], [2300000, 2130], [2400000, 2210], [2500000, 2290], [2600000, 2370],
  [2700000, 2450], [2800000, 2530], [2900000, 2610], [3000000, 2690],
];
const TITLE_INSURANCE_TABLE: number[][] = [
  [200000, 770], [300000, 895], [400000, 1020], [500000, 1145], [600000, 1270],
  [700000, 1395], [800000, 1520], [900000, 1645], [1000000, 1770], [1100000, 1895],
  [1200000, 2020], [1300000, 2145], [1400000, 2270], [1500000, 2395], [1600000, 2520],
  [1700000, 2645], [1800000, 2770], [1900000, 2895], [2000000, 3020], [2100000, 3145],
  [2200000, 3270], [2300000, 3395], [2400000, 3520], [2500000, 3645], [2600000, 3770],
  [2700000, 3895], [2800000, 4020], [2900000, 4145], [3000000, 4270],
];
function lookupTable(table: number[][], value: number): number {
  for (const [upTo, val] of table) {
    if (value <= upTo) return val;
  }
  return table[table.length - 1][1];
}
const FIXED_FEES = { origination: 1000, appraisal: 650, creditReport: 95, recording: 75, misc: 150 };

const UFMIP_RATE = 1.75;
const USDA_UPFRONT_RATE = 1.0;
function vaFundingFeeRate(downPct: number, useStatus: VaUseStatus): number {
  if (downPct < 5) return useStatus === "first" ? 2.15 : 3.3;
  if (downPct < 10) return 1.5;
  return 1.25;
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
              borderRadius: 7, textAlign: "center", padding: "8px 4px", fontSize: 12.5, fontWeight: 600, cursor: "pointer",
            }}>
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function InsightsPanel({ groups, nextSteps }: { groups: InsightGroup[]; nextSteps: string[] }) {
  return (
    <div style={{ background: "#f7f8f5", border: `1px solid ${C.line}`, borderRadius: 10, padding: "20px 22px 22px", marginBottom: 18 }}>
      <h2 style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 600, margin: "0 0 12px", color: C.ink }}>Recommendations &amp; Key Insights</h2>
      <div style={{ borderBottom: `1px solid ${C.line}`, marginBottom: 16 }} />
      <div className="ccc-insights-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 20, alignItems: "start" }}>
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
      <style>{`@media (max-width: 640px) { .ccc-insights-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */
export default function ClosingCostCalculator() {
  const [homePriceText, setHomePriceText] = useState("450,000");
  const [downPaymentDollarText, setDownPaymentDollarText] = useState("22,500");
  const [downPaymentPercentText, setDownPaymentPercentText] = useState("5.00");
  const [program, setProgram] = useState<LoanProgram>("conventional");
  const [vaUseStatus, setVaUseStatus] = useState<VaUseStatus>("first");

  const homePrice = Math.max(0, toNumber(homePriceText) || 0);

  const downPaymentRaw = Math.max(0, toNumber(downPaymentDollarText) || 0);
  const downPaymentExceedsPrice = downPaymentRaw > homePrice && homePrice > 0;
  const downPayment = Math.min(downPaymentRaw, homePrice);
  const downPct = homePrice > 0 ? (downPayment / homePrice) * 100 : 0;

  function onDownPaymentDollarChange(text: string) {
    setDownPaymentDollarText(text);
    const amt = Math.max(0, toNumber(text) || 0);
    const pct = homePrice > 0 ? (Math.min(amt, homePrice) / homePrice) * 100 : 0;
    setDownPaymentPercentText((Math.round(pct * 100) / 100).toFixed(2));
  }
  function onDownPaymentPercentChange(text: string) {
    setDownPaymentPercentText(text);
    const pctVal = Math.max(0, Math.min(100, toNumber(text) || 0));
    setDownPaymentDollarText(Math.round(homePrice * (pctVal / 100)).toLocaleString("en-US"));
  }
  function onHomePriceChange(text: string) {
    setHomePriceText(text);
    const newVal = Math.max(0, toNumber(text) || 0);
    const dp = Math.min(Math.max(0, toNumber(downPaymentDollarText) || 0), newVal);
    const pct = newVal > 0 ? (dp / newVal) * 100 : 0;
    setDownPaymentPercentText((Math.round(pct * 100) / 100).toFixed(2));
  }

  const loanAmount = Math.max(0, homePrice - downPayment);

  const escrowFee = lookupTable(TITLE_ESCROW_TABLE, homePrice);
  const titleInsFee = lookupTable(TITLE_INSURANCE_TABLE, loanAmount);
  const total = escrowFee + titleInsFee + FIXED_FEES.origination + FIXED_FEES.appraisal + FIXED_FEES.creditReport + FIXED_FEES.recording + FIXED_FEES.misc;

  const govFee = useMemo((): GovFee | null => {
    if (program === "conventional") return null;
    if (program === "fha") {
      return { label: "Upfront MIP (1.75%)", value: loanAmount * (UFMIP_RATE / 100) };
    }
    if (program === "va") {
      if (vaUseStatus === "exempt") {
        return { label: "VA Funding Fee (Exempt)", value: 0, exempt: true };
      }
      const rate = vaFundingFeeRate(downPct, vaUseStatus);
      return {
        label: `VA Funding Fee (${rate.toFixed(2)}%, ${vaUseStatus === "first" ? "First Time Use" : "Subsequent Use"})`,
        value: loanAmount * (rate / 100),
      };
    }
    if (program === "usda") {
      return { label: "USDA Upfront Guarantee Fee (1.00%)", value: loanAmount * (USDA_UPFRONT_RATE / 100) };
    }
    return null;
  }, [program, loanAmount, downPct, vaUseStatus]);

  const segments: DonutSegment[] = [
    { label: "Title Escrow Fee", value: escrowFee, color: C.greenDeep },
    { label: "Title Insurance Fee", value: titleInsFee, color: C.green },
    { label: "Loan Origination Fee", value: FIXED_FEES.origination, color: C.greenBright },
    { label: "Appraisal Fee", value: FIXED_FEES.appraisal, color: "#9dbf6c" },
    { label: "Credit Report Fee", value: FIXED_FEES.creditReport, color: "#c9d9a8" },
    { label: "Recording Fee", value: FIXED_FEES.recording, color: "#e3ecd2" },
    { label: "Miscellaneous Fees", value: FIXED_FEES.misc, color: "#8a6d3b" },
  ];

  const insights = useMemo(() => {
    const feeNotes: string[] = [
      `Your largest closing cost components are ${escrowFee >= titleInsFee ? "the title escrow fee" : "the title insurance fee"} (${fmtMoney(Math.max(escrowFee, titleInsFee))}) and ${escrowFee >= titleInsFee ? "title insurance" : "title escrow"} (${fmtMoney(Math.min(escrowFee, titleInsFee))}), which scale with your home price and loan amount respectively.`,
      `The remaining ${fmtMoney(FIXED_FEES.origination + FIXED_FEES.appraisal + FIXED_FEES.creditReport + FIXED_FEES.recording + FIXED_FEES.misc)} covers flat, non-negotiable-by-size fees: origination, appraisal, credit report, recording, and miscellaneous fees.`,
    ];
    if (downPaymentExceedsPrice) {
      feeNotes.push("Your down payment entry was capped at 100% of your home price since a down payment can't exceed the purchase price.");
    }

    const cashNotes: string[] = [`Your total estimated closing costs are ${fmtMoney(total)}, due at closing in addition to your down payment.`];
    if (govFee) {
      cashNotes.push(`Your ${govFee.label} of ${fmtMoney(govFee.value)} is typically financed into your loan balance rather than paid in cash at closing, so it's shown separately from the total above.`);
    } else {
      cashNotes.push("Conventional loans have no upfront government loan fee — your closing costs above are the full picture (excluding any lender-specific fees or prepaid items like taxes and insurance reserves).");
    }
    cashNotes.push("Ask your loan officer whether a seller credit or lender credit could offset some of these costs.");

    const nextSteps = [
      "Request a Loan Estimate from a Mortgage Brothers loan officer for a precise, itemized breakdown.",
      "Ask about seller concessions — in some markets, sellers can cover part or all of your closing costs.",
      "Budget separately for prepaid items (homeowners insurance, property tax reserves) which aren't included in this estimate.",
    ];

    return { fee: feeNotes, cash: cashNotes, nextSteps };
  }, [escrowFee, titleInsFee, total, govFee, downPaymentExceedsPrice]);

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
              Closing Cost Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Estimate Arizona purchase closing costs by home price, down payment, and loan program — results update as you adjust.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "28px 20px 64px", boxSizing: "border-box" }}>
          <div className="ccc-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
            {/* ============ INPUT COLUMN ============ */}
            <div style={{ minWidth: 0 }}>
              <Panel number={1} title="Property & Loan Details">
                <Field label="Home Price ($)" hint="Enter the purchase price of your new home.">
                  <input className="ccc-input" style={inputStyle} inputMode="numeric" value={homePriceText}
                    onChange={(e) => onHomePriceChange(e.target.value)}
                    onBlur={() => setHomePriceText(homePrice.toLocaleString("en-US"))} />
                  <MiniSlider min={0} max={3000000} step={5000} value={homePrice} onChange={(v) => onHomePriceChange(String(Math.round(v)))} />
                </Field>
                <Field label="Down Payment">
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    <div>
                      <div style={{ fontSize: 11, color: C.inkSoft, marginBottom: 3 }}>Dollar Amount ($)</div>
                      <input className="ccc-input" style={inputStyle} inputMode="numeric" value={downPaymentDollarText}
                        onChange={(e) => onDownPaymentDollarChange(e.target.value)}
                        onBlur={() => setDownPaymentDollarText(downPayment.toLocaleString("en-US"))} />
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: C.inkSoft, marginBottom: 3 }}>Percent (%)</div>
                      <input className="ccc-input" style={inputStyle} inputMode="decimal" value={downPaymentPercentText}
                        onChange={(e) => onDownPaymentPercentChange(e.target.value)}
                        onBlur={() => setDownPaymentPercentText(downPct.toFixed(2))} />
                    </div>
                  </div>
                  <MiniSlider min={0} max={homePrice || 500000} step={500} value={downPayment} onChange={(v) => onDownPaymentDollarChange(String(Math.round(v)))} />
                  {downPaymentExceedsPrice && (
                    <div style={{ fontSize: 11.5, marginTop: 4, fontWeight: 600, color: C.amber }}>
                      Down payment can&apos;t exceed home price — capped at 100% ({fmtMoney(homePrice)}).
                    </div>
                  )}
                </Field>
              </Panel>

              <div style={{ background: C.greenWash, border: "1px solid #cfe0c2", borderRadius: 8, padding: "10px 12px", marginBottom: 18, fontSize: 12.5, color: C.greenDeep }}>
                Loan Amount: <b style={{ fontSize: 15 }}>{fmtMoney(loanAmount)}</b>
              </div>

              <Panel number={2} title="Loan Program">
                <Field label="Loan Program">
                  <ToggleRow columns={2} value={program} onChange={setProgram} options={[
                    { value: "conventional", label: "Conventional" },
                    { value: "fha", label: "FHA" },
                    { value: "va", label: "VA" },
                    { value: "usda", label: "USDA" },
                  ]} />
                </Field>
                {program === "va" && (
                  <Field label="VA Funding Fee Use Status">
                    <ToggleRow columns={3} value={vaUseStatus} onChange={setVaUseStatus} options={[
                      { value: "exempt", label: "Exempt" },
                      { value: "first", label: "First Time Use" },
                      { value: "subsequent", label: "Subsequent Use" },
                    ]} />
                  </Field>
                )}
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
                <h2 style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 700, margin: "0 0 14px", color: C.greenDeep }}>Estimated Closing Costs</h2>
                <div>
                  <ResultLine label="Title Escrow Fee" value={fmtMoney(escrowFee)} />
                  <ResultLine label="Title Insurance Fee" value={fmtMoney(titleInsFee)} />
                  <ResultLine label="Loan Origination Fee" value={fmtMoney(FIXED_FEES.origination)} />
                  <ResultLine label="Appraisal Fee" value={fmtMoney(FIXED_FEES.appraisal)} />
                  <ResultLine label="Credit Report Fee" value={fmtMoney(FIXED_FEES.creditReport)} />
                  <ResultLine label="Recording Fee" value={fmtMoney(FIXED_FEES.recording)} />
                  <ResultLine label="Miscellaneous Fees" value={fmtMoney(FIXED_FEES.misc)} />
                  <ResultLine label="Total Estimated Closing Costs" value={fmtMoney(total)} total />
                </div>

                {govFee && (
                  <div style={{ background: C.amberWash, border: "1px solid #e3cd9a", borderRadius: 8, padding: "12px 14px", marginTop: 14 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: C.amber, marginBottom: 2 }}>{govFee.label}</div>
                    <div style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 700, color: C.amber }}>{fmtMoney(govFee.value)}</div>
                    <div style={{ fontSize: 11.5, color: "#7a5a10", marginTop: 3 }}>
                      {govFee.exempt ? "No VA Funding Fee applies for exempt borrowers (service-connected disability, certain Purple Heart recipients, qualifying surviving spouses)." : "Typically financed into your loan balance — not included in the total above."}
                    </div>
                  </div>
                )}
              </div>

              <Panel>
                <SectionLabel>Fee Breakdown</SectionLabel>
                <InteractivePieChart
                  donut
                  showLegend
                  centerTextTitle="total"
                  centerTextSub={fmtMoney(total)}
                  dataItems={segments}
                />
              </Panel>

              {/* Insights — last section, below all charts/tables */}
              <InsightsPanel
                groups={[
                  { title: "Fee Breakdown", color: C.greenDeep, bullets: insights.fee },
                  { title: "Cash-to-Close Considerations", color: C.amber, bullets: insights.cash },
                ]}
                nextSteps={insights.nextSteps}
              />

              <p style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 18, lineHeight: 1.5 }}>
                The closing cost calculator and any results provided are for informational purposes only and do not constitute an offer to lend or a guarantee of costs. Actual closing costs may vary depending on factors such as property location, loan type, down payment, and lender fees.
              </p>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 760px) {
            .ccc-layout { grid-template-columns: 1fr !important; }
          }
          .ccc-input { transition: border-color .15s, box-shadow .15s, background .15s; }
          .ccc-input:hover { border-color: #a9b59c; }
          .ccc-input:focus { background: #ffffff; border-color: ${C.greenBright}; box-shadow: 0 0 0 3px ${C.greenWash}; }
        `}</style>
      </main>
      <Footer />
    </div>
  );
}
