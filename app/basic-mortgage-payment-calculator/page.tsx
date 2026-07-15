"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

// ─── Types ────────────────────────────────────────────────────────────────────

interface AmortizationRow {
  paymentNum: number;
  beginBalance: number;
  payment: number;
  principal: number;
  interest: number;
  endBalance: number;
  cumPrincipal: number;
  cumInterest: number;
}

interface CalcResult {
  homePrice: number;
  downPaymentAmt: number;
  downPaymentPct: number;
  loanAmount: number;
  monthlyPayment: number;
  firstMonthInterest: number;
  firstMonthPrincipal: number;
  totalPrincipal: number;
  totalInterest: number;
  totalMortgagePayments: number;
  overallCost: number;
  schedule: AmortizationRow[];
}

// ─── Core Amortization Solver ─────────────────────────────────────────────────

function buildAmortization(
  homePrice: number,
  downAmt: number,
  annualRate: number,
  termYears: number
): CalcResult {
  const loanAmount = Math.max(0, homePrice - downAmt);
  const downPaymentPct = homePrice > 0 ? (downAmt / homePrice) * 100 : 0;
  const monthlyRate = annualRate / 100 / 12;
  const n = termYears * 12;

  if (loanAmount === 0) {
    return {
      homePrice, downPaymentAmt: downAmt, downPaymentPct,
      loanAmount: 0, monthlyPayment: 0, firstMonthInterest: 0,
      firstMonthPrincipal: 0, totalPrincipal: 0, totalInterest: 0,
      totalMortgagePayments: 0, overallCost: homePrice, schedule: [],
    };
  }

  let monthlyPayment: number;
  if (monthlyRate === 0) {
    monthlyPayment = loanAmount / n;
  } else {
    const factor = Math.pow(1 + monthlyRate, n);
    monthlyPayment = (loanAmount * monthlyRate * factor) / (factor - 1);
  }

  const firstMonthInterest = loanAmount * monthlyRate;
  const firstMonthPrincipal = monthlyPayment - firstMonthInterest;

  const schedule: AmortizationRow[] = [];
  let balance = loanAmount;
  let cumPrincipal = 0;
  let cumInterest = 0;

  for (let i = 1; i <= n; i++) {
    const beginBalance = balance;
    let interest = balance * monthlyRate;
    let principal = monthlyPayment - interest;

    if (i === n || principal >= balance) {
      principal = balance;
      interest = monthlyPayment - principal;
      if (interest < 0) interest = 0;
      const adjPayment = principal + interest;
      balance = 0;
      cumPrincipal += principal;
      cumInterest += interest;
      schedule.push({ paymentNum: i, beginBalance, payment: adjPayment, principal, interest, endBalance: 0, cumPrincipal, cumInterest });
      break;
    }

    balance = balance - principal;
    if (balance < 0) balance = 0;
    cumPrincipal += principal;
    cumInterest += interest;
    schedule.push({ paymentNum: i, beginBalance, payment: monthlyPayment, principal, interest, endBalance: balance, cumPrincipal, cumInterest });
  }

  const totalPrincipal = schedule.reduce((s, r) => s + r.principal, 0);
  const totalInterest = schedule.reduce((s, r) => s + r.interest, 0);
  const totalMortgagePayments = schedule.reduce((s, r) => s + r.payment, 0);
  const overallCost = downAmt + totalMortgagePayments;

  return { homePrice, downPaymentAmt: downAmt, downPaymentPct, loanAmount, monthlyPayment, firstMonthInterest, firstMonthPrincipal, totalPrincipal, totalInterest, totalMortgagePayments, overallCost, schedule };
}

const fmt = (v: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(v);

const fmtK = (v: number) => {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `$${(v / 1_000).toFixed(0)}K`;
  return fmt(v);
};

// ─── SVG Charts ───────────────────────────────────────────────────────────────

function PieChart({ downAmt, loanAmount, totalInterest }: { downAmt: number; loanAmount: number; totalInterest: number }) {
  const total = downAmt + loanAmount + totalInterest;
  if (total <= 0) return null;
  const slices = [
    { value: downAmt, color: "#3fb364" },
    { value: loanAmount, color: "#052316" },
    { value: totalInterest, color: "#b89a5a" },
  ];
  const cx = 100, cy = 100, r = 80;
  let startAngle = -Math.PI / 2;
  const paths: { d: string; color: string }[] = [];
  slices.forEach(({ value, color }) => {
    const angle = (value / total) * 2 * Math.PI;
    const endAngle = startAngle + angle;
    const x1 = cx + r * Math.cos(startAngle), y1 = cy + r * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(endAngle), y2 = cy + r * Math.sin(endAngle);
    const large = angle > Math.PI ? 1 : 0;
    paths.push({ d: `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`, color });
    startAngle = endAngle;
  });
  return (
    <svg viewBox="0 0 200 200" className="w-full max-w-[220px] mx-auto">
      {paths.map((p, i) => <path key={i} d={p.d} fill={p.color} stroke="white" strokeWidth="2" />)}
      <circle cx={cx} cy={cy} r={42} fill="white" />
      <text x={cx} y={cy - 6} textAnchor="middle" fontSize="10" fontWeight="700" fill="#052316">Overall</text>
      <text x={cx} y={cy + 8} textAnchor="middle" fontSize="10" fontWeight="700" fill="#052316">Cost</text>
    </svg>
  );
}

function PaymentBarChart({ schedule, monthlyPayment }: { schedule: AmortizationRow[]; monthlyPayment: number }) {
  if (schedule.length === 0) return null;
  const step = Math.max(1, Math.floor(schedule.length / 60));
  const data = schedule.filter((_, i) => i % step === 0 || i === schedule.length - 1);
  const W = 600, H = 160, pad = { left: 50, right: 10, top: 10, bottom: 30 };
  const chartW = W - pad.left - pad.right;
  const chartH = H - pad.top - pad.bottom;
  const barW = Math.max(2, chartW / data.length - 1);
  const maxPmt = monthlyPayment;
  const balancePts = data.map((d, i) => {
    const x = pad.left + (i / (data.length - 1)) * chartW;
    const y = pad.top + chartH - (d.endBalance / schedule[0].beginBalance) * chartH;
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="none">
      {data.map((d, i) => {
        const x = pad.left + i * (chartW / data.length);
        const intH = (d.interest / maxPmt) * chartH;
        const prinH = (d.principal / maxPmt) * chartH;
        return (
          <g key={i}>
            <rect x={x} y={pad.top + chartH - intH} width={barW} height={intH} fill="#b89a5a" opacity="0.85" />
            <rect x={x} y={pad.top + chartH - intH - prinH} width={barW} height={prinH} fill="#3fb364" opacity="0.85" />
          </g>
        );
      })}
      {data.length > 1 && <polyline points={balancePts} fill="none" stroke="#052316" strokeWidth="2" strokeLinejoin="round" />}
      <text x={pad.left - 4} y={pad.top + 4} textAnchor="end" fontSize="9" fill="#888">{fmtK(maxPmt)}</text>
      <text x={pad.left - 4} y={pad.top + chartH} textAnchor="end" fontSize="9" fill="#888">$0</text>
      <text x={pad.left} y={H - 4} fontSize="9" fill="#888">Mo 1</text>
      <text x={W - pad.right} y={H - 4} textAnchor="end" fontSize="9" fill="#888">Mo {schedule.length}</text>
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function BasicMortgageCalculatorPage() {
  const [homePrice, setHomePrice] = useState("425000");
  const [dpAmt, setDpAmt] = useState("85000");
  const [dpPct, setDpPct] = useState("20");
  const [lastDpMode, setLastDpMode] = useState<"amt" | "pct">("pct");
  const [annualRate, setAnnualRate] = useState("6.75");
  const [termYears, setTermYears] = useState("30");
  const [result, setResult] = useState<CalcResult | null>(null);
  const [showSchedule, setShowSchedule] = useState(false);
  const [schedPage, setSchedPage] = useState(0);
  const ROWS_PER_PAGE = 24;

  const handleHomePriceChange = (val: string) => {
    setHomePrice(val);
    const hp = parseFloat(val) || 0;
    if (hp > 0) {
      if (lastDpMode === "pct") {
        setDpAmt((hp * (parseFloat(dpPct) || 0) / 100).toFixed(2));
      } else {
        setDpPct(((parseFloat(dpAmt) || 0) / hp * 100).toFixed(4));
      }
    }
  };

  const handleDpAmtChange = (val: string) => {
    setDpAmt(val); setLastDpMode("amt");
    const hp = parseFloat(homePrice) || 0;
    if (hp > 0) setDpPct(((parseFloat(val) || 0) / hp * 100).toFixed(4));
  };

  const handleDpPctChange = (val: string) => {
    setDpPct(val); setLastDpMode("pct");
    const hp = parseFloat(homePrice) || 0;
    if (hp > 0) setDpAmt((hp * (parseFloat(val) || 0) / 100).toFixed(2));
  };

  const handleCalculate = useCallback(() => {
    const hp = parseFloat(homePrice);
    if (!isFinite(hp) || hp <= 0) return;
    let down = lastDpMode === "pct" ? hp * (parseFloat(dpPct) || 0) / 100 : parseFloat(dpAmt) || 0;
    down = Math.max(0, Math.min(down, hp));
    const rate = Math.max(0, parseFloat(annualRate) || 0);
    let term = Math.round(parseFloat(termYears) || 30);
    if (term < 1) term = 1;
    if (term > 30) term = 30;
    const r = buildAmortization(hp, down, rate, term);
    setResult(r); setShowSchedule(false); setSchedPage(0);
    setTimeout(() => document.getElementById("calc-results")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }, [homePrice, dpAmt, dpPct, lastDpMode, annualRate, termYears]);

  const termOpts = [10, 15, 20, 25, 30];
  const schedSlice = result ? result.schedule.slice(schedPage * ROWS_PER_PAGE, (schedPage + 1) * ROWS_PER_PAGE) : [];
  const totalPages = result ? Math.ceil(result.schedule.length / ROWS_PER_PAGE) : 0;
  const pieTotal = result ? result.downPaymentAmt + result.loanAmount + result.totalInterest : 0;
  const piePct = (v: number) => pieTotal > 0 ? ((v / pieTotal) * 100).toFixed(1) : "0.0";

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
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
              Enter your loan details and click <strong>Calculate</strong> to see your exact monthly payment, full amortization schedule, and total cost breakdown.
            </p>
          </div>
        </section>

        {/* Inputs */}
        <section className="py-12 px-6 lg:px-10 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 shadow-sm p-7 lg:p-10 flex flex-col gap-7">
            <h3 className="text-[#052316] text-[18px] font-bold pb-3 border-b border-[#e8e0d0]/40">Loan Details</h3>

            <div>
              <label className="text-[#052316] text-[14px] font-semibold block mb-2">Home Price</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888] font-semibold">$</span>
                <input type="number" value={homePrice} onChange={(e) => handleHomePriceChange(e.target.value)}
                  className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-4 text-[15px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30 focus:border-[#3fb364]"
                  placeholder="e.g. 425000" />
              </div>
            </div>

            <div>
              <label className="text-[#052316] text-[14px] font-semibold block mb-2">Down Payment</label>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888] font-semibold">$</span>
                  <input type="number" value={dpAmt} onChange={(e) => handleDpAmtChange(e.target.value)} onFocus={() => setLastDpMode("amt")}
                    className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 pl-8 pr-4 text-[15px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30 focus:border-[#3fb364]"
                    placeholder="Dollar amount" />
                </div>
                <div className="relative">
                  <input type="number" step="0.01" value={dpPct} onChange={(e) => handleDpPctChange(e.target.value)} onFocus={() => setLastDpMode("pct")}
                    className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 px-4 text-[15px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30 focus:border-[#3fb364]"
                    placeholder="Percentage" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888] font-semibold">%</span>
                </div>
              </div>
              <p className="text-[11.5px] text-[#a89a70] mt-1.5 italic">Editing either field updates the other automatically.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[#052316] text-[14px] font-semibold block mb-2">Annual Interest Rate</label>
                <div className="relative">
                  <input type="number" step="0.125" value={annualRate} onChange={(e) => setAnnualRate(e.target.value)}
                    className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 px-4 text-[15px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30 focus:border-[#3fb364]" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888] font-semibold">%</span>
                </div>
              </div>
              <div>
                <label className="text-[#052316] text-[14px] font-semibold block mb-2">Loan Term</label>
                <div className="flex gap-2 flex-wrap">
                  {termOpts.map((yr) => (
                    <button key={yr} onClick={() => setTermYears(String(yr))}
                      className={`px-4 py-2.5 text-[13px] font-bold rounded-xl border-2 transition-all cursor-pointer ${termYears === String(yr) ? "bg-[#052316] text-white border-[#052316] shadow-sm" : "bg-white text-[#052316] border-[#e8e0d0] hover:border-[#052316]"}`}>
                      {yr} yr
                    </button>
                  ))}
                  <div className="relative flex-grow min-w-[80px]">
                    <input type="number" value={termYears} onChange={(e) => setTermYears(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-2.5 px-4 text-[13px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30 focus:border-[#3fb364]"
                      placeholder="Custom" />
                  </div>
                </div>
                <p className="text-[11px] text-[#a89a70] mt-1.5 italic font-sans">1–30 years. Decimals rounded to nearest whole year.</p>
              </div>
            </div>

            <button onClick={handleCalculate}
              className="w-full bg-[#3fb364] hover:bg-[#349b55] active:scale-[0.98] text-white text-[17px] font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              Calculate Mortgage Payment
            </button>
          </div>
        </section>

        {/* Results Placeholder */}
        {!result && (
          <section className="pb-16 px-6 max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-10 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-[#3fb364]/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="text-[#052316] text-[18px] font-bold mb-2">Enter Your Loan Details</h3>
              <p className="text-[#888] text-[14px] leading-relaxed">
                Fill in the details above, then click <strong>&ldquo;Calculate Mortgage Payment&rdquo;</strong> to see your full breakdown.
              </p>
            </div>
          </section>
        )}

        {/* Results */}
        {result && (
          <section id="calc-results" className="pb-16 px-6 lg:px-10 max-w-7xl mx-auto space-y-8 animate-fadeUp">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Monthly Payment", value: fmt(result.monthlyPayment), accent: true },
                { label: "Total Interest", value: fmt(result.totalInterest), accent: false },
                { label: "Total of Payments", value: fmt(result.totalMortgagePayments), accent: false },
                { label: "Overall Cost", value: fmt(result.overallCost), accent: false },
              ].map((c) => (
                <div key={c.label} className={`rounded-2xl border p-5 shadow-sm ${c.accent ? "bg-[#052316] border-[#052316] text-white" : "bg-white border-[#e8e0d0]/60"}`}>
                  <p className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${c.accent ? "text-[#3fb364]" : "text-[#a89a70]"}`}>{c.label}</p>
                  <p className={`text-[22px] font-bold leading-tight ${c.accent ? "text-white" : "text-[#052316]"}`}>{c.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm">
                  <h3 className="text-[#052316] text-[16px] font-bold mb-5 pb-3 border-b border-[#e8e0d0]/40 font-sans">Loan Overview</h3>
                  <div className="flex flex-col gap-3">
                    {[
                      { label: "Home Price", value: fmt(result.homePrice) },
                      { label: `Down Payment (${result.downPaymentPct.toFixed(2)}%)`, value: fmt(result.downPaymentAmt) },
                      { label: "Financed Amount", value: fmt(result.loanAmount) },
                      { label: "1st Month Principal", value: fmt(result.firstMonthPrincipal) },
                      { label: "1st Month Interest", value: fmt(result.firstMonthInterest) },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between text-[13.5px] py-2 border-b border-[#e8e0d0]/30 last:border-0">
                        <span className="text-[#888]">{row.label}</span>
                        <span className="text-[#052316] font-bold">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm">
                  <h3 className="text-[#052316] text-[16px] font-bold mb-4 pb-3 border-b border-[#e8e0d0]/40 font-sans">Cost Breakdown</h3>
                  <PieChart downAmt={result.downPaymentAmt} loanAmount={result.loanAmount} totalInterest={result.totalInterest} />
                  <div className="flex flex-col gap-2.5 mt-5 font-sans">
                    {[
                      { color: "#3fb364", label: "Down Payment", value: result.downPaymentAmt },
                      { color: "#052316", label: "Principal (Financed)", value: result.loanAmount },
                      { color: "#b89a5a", label: "Total Interest", value: result.totalInterest },
                    ].map((l) => (
                      <div key={l.label} className="flex items-center justify-between text-[13px]">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: l.color }} />
                          <span className="text-[#888]">{l.label}</span>
                        </div>
                        <span className="text-[#052316] font-bold">{fmt(l.value)} <span className="text-[#a89a70] font-normal text-[11px]">({piePct(l.value)}%)</span></span>
                      </div>
                    ))}
                    <div className="border-t border-[#e8e0d0]/40 pt-2.5 flex items-center justify-between text-[13.5px] font-bold">
                      <span className="text-[#052316]">Overall Cost</span>
                      <span className="text-[#052316]">{fmt(result.overallCost)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm">
                  <h3 className="text-[#052316] text-[16px] font-bold mb-2 pb-3 border-b border-[#e8e0d0]/40 font-sans">Payment Over Time</h3>
                  <div className="flex items-center gap-5 mt-3 mb-4 font-sans">
                    {[{ color: "#3fb364", label: "Principal" }, { color: "#b89a5a", label: "Interest" }, { color: "#052316", label: "Remaining Balance" }].map((l) => (
                      <div key={l.label} className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-sm" style={{ background: l.color }} />
                        <span className="text-[11.5px] text-[#888]">{l.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="overflow-x-auto">
                    <PaymentBarChart schedule={result.schedule} monthlyPayment={result.monthlyPayment} />
                  </div>
                </div>

                <div className="bg-[#faf7f0] rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm">
                  <h3 className="text-[#052316] text-[16px] font-bold mb-5 pb-3 border-b border-[#e8e0d0]/40 font-sans">Total Loan Cost Summary</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Total Principal Paid", value: fmt(result.totalPrincipal) },
                      { label: "Total Interest Paid", value: fmt(result.totalInterest) },
                      { label: "Total Mortgage Payments", value: fmt(result.totalMortgagePayments) },
                      { label: "Down Payment", value: fmt(result.downPaymentAmt) },
                    ].map((item) => (
                      <div key={item.label} className="bg-white rounded-2xl p-4 border border-[#e8e0d0]/40">
                        <p className="text-[11px] text-[#a89a70] font-bold uppercase tracking-wide mb-1 font-sans">{item.label}</p>
                        <p className="text-[18px] font-bold text-[#052316]">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 bg-[#052316] rounded-2xl p-4 flex items-center justify-between">
                    <p className="text-[#3fb364] text-[13px] font-bold uppercase tracking-wide">Overall Cost</p>
                    <p className="text-white text-[20px] font-bold">{fmt(result.overallCost)}</p>
                  </div>
                </div>

                <div className="bg-[#052316] rounded-3xl p-6 text-white shadow-md relative overflow-hidden">
                  <div className="absolute -bottom-12 -right-12 w-[160px] h-[160px] rounded-full border border-white/5 opacity-40" />
                  <div className="relative z-10">
                    <h4 className="text-[17px] font-bold mb-2">Ready for a verified pre-approval?</h4>
                    <p className="text-[#c8c8b8] text-[13px] leading-relaxed mb-4">These are estimates. Get a fully underwritten pre-approval and know your exact numbers.</p>
                    <Link href="/#get-pre-approved" className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[13px] font-bold px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-all shadow">
                      Start Pre-Approval →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 shadow-sm overflow-hidden">
              <button onClick={() => setShowSchedule((s) => !s)}
                className="w-full flex items-center justify-between px-7 py-5 text-left cursor-pointer hover:bg-[#faf7f0] transition-colors">
                <div>
                  <h3 className="text-[#052316] text-[16px] font-bold">Full Amortization Schedule</h3>
                  <p className="text-[#888] text-[12.5px] mt-0.5">{result.schedule.length} monthly payments</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className={`transition-transform duration-200 ${showSchedule ? "rotate-180" : ""}`}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {showSchedule && (
                <div className="border-t border-[#e8e0d0]/40">
                  <div className="overflow-x-auto">
                    <table className="w-full text-[12.5px]">
                      <thead>
                        <tr className="bg-[#052316] text-white">
                          {["#", "Begin Balance", "Payment", "Principal", "Interest", "End Balance", "Cum. Principal", "Cum. Interest"].map((h) => (
                            <th key={h} className="py-3 px-4 text-left font-semibold whitespace-nowrap">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {schedSlice.map((row, idx) => (
                          <tr key={row.paymentNum} className={idx % 2 === 0 ? "bg-white" : "bg-[#faf7f0]"}>
                            <td className="py-2.5 px-4 text-[#888] font-bold">{row.paymentNum}</td>
                            <td className="py-2.5 px-4 text-[#052316]">{fmt(row.beginBalance)}</td>
                            <td className="py-2.5 px-4 text-[#052316] font-bold">{fmt(row.payment)}</td>
                            <td className="py-2.5 px-4 text-[#3fb364]">{fmt(row.principal)}</td>
                            <td className="py-2.5 px-4 text-[#b89a5a]">{fmt(row.interest)}</td>
                            <td className="py-2.5 px-4 text-[#052316]">{fmt(row.endBalance)}</td>
                            <td className="py-2.5 px-4 text-[#888]">{fmt(row.cumPrincipal)}</td>
                            <td className="py-2.5 px-4 text-[#888]">{fmt(row.cumInterest)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {totalPages > 1 && (
                    <div className="flex items-center justify-between px-7 py-4 border-t border-[#e8e0d0]/40">
                      <button onClick={() => setSchedPage((p) => Math.max(0, p - 1))} disabled={schedPage === 0}
                        className="px-4 py-2 text-[13px] font-bold bg-[#052316] text-white rounded-xl disabled:opacity-40 cursor-pointer disabled:cursor-default">← Prev</button>
                      <span className="text-[13px] text-[#888]">Page {schedPage + 1} of {totalPages}</span>
                      <button onClick={() => setSchedPage((p) => Math.min(totalPages - 1, p + 1))} disabled={schedPage === totalPages - 1}
                        className="px-4 py-2 text-[13px] font-bold bg-[#052316] text-white rounded-xl disabled:opacity-40 cursor-pointer disabled:cursor-default">Next →</button>
                    </div>
                  )}
                </div>
              )}
            </div>

            <p className="text-center text-[#b89a5a] text-[12px] italic pb-4">
              Estimates only — actual payment varies with taxes, insurance, HOA dues, and final lender terms.
            </p>
          </section>
        )}
      </main>

      <style jsx>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .animate-fadeUp { animation: fadeUp 0.45s ease-out both; }
      `}</style>

      <Footer />
    </div>
  );
}
