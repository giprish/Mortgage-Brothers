"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import SliderInput from "../component/SliderInput";
import { InteractivePieChart, BasicPaymentOverTimeChart } from "../component/InteractiveCharts";

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

function PaymentLineChart({ schedule, monthlyPayment }: { schedule: AmortizationRow[]; monthlyPayment: number }) {
  if (schedule.length === 0) return null;
  const step = Math.max(1, Math.floor(schedule.length / 60));
  const data = schedule.filter((_, i) => i % step === 0 || i === schedule.length - 1);
  const W = 700, H = 200, pad = { left: 60, right: 60, top: 15, bottom: 35 };
  const chartW = W - pad.left - pad.right;
  const chartH = H - pad.top - pad.bottom;
  
  const maxPmt = monthlyPayment;
  const maxBalance = schedule[0].beginBalance;
  
  // Generate Y-axis ticks with more granularity (every $250-500)
  const yTickCount = 6;
  const yTickStep = maxPmt / yTickCount;
  const yTicks = [];
  for (let i = 0; i <= yTickCount; i++) {
    yTicks.push(i * yTickStep);
  }
  
  // Generate right Y-axis ticks for balance
  const rightYTickCount = 5;
  const rightYTickStep = maxBalance / rightYTickCount;
  const rightYTicks = [];
  for (let i = 0; i <= rightYTickCount; i++) {
    rightYTicks.push(i * rightYTickStep);
  }
  
  // Generate line points
  const principalPts = data.map((d, i) => {
    const x = pad.left + (i / (data.length - 1)) * chartW;
    const y = pad.top + chartH - (d.principal / maxPmt) * chartH;
    return `${x},${y}`;
  }).join(" ");
  
  const interestPts = data.map((d, i) => {
    const x = pad.left + (i / (data.length - 1)) * chartW;
    const y = pad.top + chartH - (d.interest / maxPmt) * chartH;
    return `${x},${y}`;
  }).join(" ");
  
  const balancePts = data.map((d, i) => {
    const x = pad.left + (i / (data.length - 1)) * chartW;
    const y = pad.top + chartH - (d.endBalance / maxBalance) * chartH;
    return `${x},${y}`;
  }).join(" ");
  
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="none">
      {/* Grid lines */}
      {yTicks.map((tick, i) => {
        const y = pad.top + chartH - (tick / maxPmt) * chartH;
        return (
          <line key={i} x1={pad.left} y1={y} x2={W - pad.right} y2={y} stroke="#e8e0d0" strokeWidth="1" strokeDasharray="3,3" />
        );
      })}
      
      {/* Left Y-axis labels */}
      {yTicks.map((tick, i) => {
        const y = pad.top + chartH - (tick / maxPmt) * chartH;
        return (
          <text key={i} x={pad.left - 8} y={y + 3} textAnchor="end" fontSize="9" fill="#888">{fmtK(tick)}</text>
        );
      })}
      
      {/* Right Y-axis labels */}
      {rightYTicks.map((tick, i) => {
        const y = pad.top + chartH - (tick / maxBalance) * chartH;
        return (
          <text key={i} x={W - pad.right + 8} y={y + 3} textAnchor="start" fontSize="9" fill="#888">{fmtK(tick)}</text>
        );
      })}
      
      {/* X-axis labels */}
      <text x={pad.left} y={H - 12} fontSize="9" fill="#888">Mo 1</text>
      <text x={W - pad.right} y={H - 12} textAnchor="end" fontSize="9" fill="#888">Mo {schedule.length}</text>
      
      {/* Lines */}
      {data.length > 1 && (
        <>
          <polyline points={principalPts} fill="none" stroke="#3fb364" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
          <polyline points={interestPts} fill="none" stroke="#b89a5a" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
          <polyline points={balancePts} fill="none" stroke="#052316" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        </>
      )}
      
      {/* Axis lines */}
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + chartH} stroke="#ccc" strokeWidth="1" />
      <line x1={W - pad.right} y1={pad.top} x2={W - pad.right} y2={pad.top + chartH} stroke="#ccc" strokeWidth="1" />
      <line x1={pad.left} y1={pad.top + chartH} x2={W - pad.right} y2={pad.top + chartH} stroke="#ccc" strokeWidth="1" />
    </svg>
  );
}

export default function BasicMortgageCalculatorPage() {
  const [homePrice, setHomePrice] = useState(425000);
  const [dpAmt, setDpAmt] = useState(85000);
  const [annualRate, setAnnualRate] = useState(6.75);
  const [termYears, setTermYears] = useState(30);
  const [showSchedule, setShowSchedule] = useState(false);
  const [schedPage, setSchedPage] = useState(0);
  const ROWS_PER_PAGE = 24;

  const result = useMemo<CalcResult | null>(() => {
    const hp = homePrice;
    if (!isFinite(hp) || hp <= 0) return null;
    let down = Math.max(0, Math.min(dpAmt, hp));
    const rate = Math.max(0, annualRate);
    let term = Math.round(termYears);
    if (term < 1) term = 1;
    if (term > 30) term = 30;
    return buildAmortization(hp, down, rate, term);
  }, [homePrice, dpAmt, annualRate, termYears]);

  const handleHomePriceChange = (val: number) => {
    setHomePrice(val);
    if (dpAmt > val) {
      setDpAmt(val);
    }
  };

  const handleDpAmtChange = (val: number) => {
    const clampedVal = Math.min(val, homePrice);
    setDpAmt(clampedVal);
  };

  const termOpts = [10, 15, 20, 25, 30];
  const schedSlice = result ? result.schedule.slice(schedPage * ROWS_PER_PAGE, (schedPage + 1) * ROWS_PER_PAGE) : [];
  const totalPages = result ? Math.ceil(result.schedule.length / ROWS_PER_PAGE) : 0;
  const pieTotal = result ? result.downPaymentAmt + result.loanAmount + result.totalInterest : 0;
  const piePct = (v: number) => pieTotal > 0 ? ((v / pieTotal) * 100).toFixed(1) : "0.0";

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />
      <main className="flex-grow">
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

        <section className="py-12 px-6 lg:px-10 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 shadow-sm p-7 lg:p-10 flex flex-col gap-7">
            <h3 className="text-[#052316] text-[18px] font-bold pb-3 border-b border-[#e8e0d0]/40">Loan Details</h3>

            <SliderInput label="Home Price" value={homePrice} min={50000} max={2000000} step={1000} prefix="$"
              onChange={handleHomePriceChange} formatValue={(v) => fmt(v)} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SliderInput label="Down Payment ($)" value={dpAmt} min={0} max={homePrice} step={1000} prefix="$"
                onChange={handleDpAmtChange} formatValue={(v) => fmt(v)} />
              <div>
                <label className="text-[#052316] text-[14px] font-semibold block mb-2">Down Payment (%)</label>
                <input
                  type="text"
                  readOnly
                  value={homePrice > 0 ? ((dpAmt / homePrice) * 100).toFixed(2) + '%' : '0%'}
                  className="w-full bg-[#f5f5f0] border border-[#e8e0d0] rounded-xl py-2.5 px-3 text-[13px] font-bold text-[#052316] cursor-not-allowed"
                />
              </div>
            </div>

            <SliderInput label="Annual Interest Rate" value={annualRate} min={0} max={15} step={0.125} suffix="%"
              onChange={(v) => setAnnualRate(v)} />

            <div>
              <label className="text-[#052316] text-[14px] font-semibold block mb-2">Loan Term</label>
              <div className="flex gap-2 flex-wrap">
                {termOpts.map((yr) => (
                  <button key={yr} onClick={() => setTermYears(yr)}
                    className={`px-4 py-2.5 text-[13px] font-bold rounded-xl border-2 transition-all cursor-pointer ${termYears === yr ? "bg-[#052316] text-white border-[#052316] shadow-sm" : "bg-white text-[#052316] border-[#e8e0d0] hover:border-[#052316]"}`}>
                    {yr} yr
                  </button>
                ))}
                <div className="relative flex-grow min-w-[70px]">
                  <input type="number" value={termYears} onChange={(e) => setTermYears(parseFloat(e.target.value) || 30)}
                    className="w-full bg-white border border-[#e8e0d0] rounded-xl py-2.5 px-3 text-[13px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30 focus:border-[#3fb364]" />
                </div>
              </div>
              <p className="text-[11px] text-[#a89a70] mt-1.5 italic font-sans">1–30 years. Decimals rounded to nearest whole year.</p>
            </div>
          </div>
        </section>

        {!result && (
          <section className="pb-16 px-6 max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-10 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-[#3fb364]/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="text-[#052316] text-[18px] font-bold mb-2">Enter a valid home price</h3>
              <p className="text-[#888] text-[14px] leading-relaxed">
                Enter a home price above $0 to see your full payment breakdown.
              </p>
            </div>
          </section>
        )}

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
                  <InteractivePieChart
                    donut={true}
                    dataItems={[
                      { label: "Down Payment", value: result.downPaymentAmt, color: "#9C27B0" },
                      { label: "Financed Amount", value: result.loanAmount, color: "#4CAF50" },
                      { label: "Total Interest", value: result.totalInterest, color: "#FF9800" },
                    ]}
                  />
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm">
                  <h3 className="text-[#052316] text-[18px] md:text-[20px] font-bold mb-4 pb-3 border-b border-[#f0ece1]">Payment Over Time</h3>
                  <BasicPaymentOverTimeChart schedule={result.schedule} />
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
