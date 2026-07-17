"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import SliderInput from "../component/SliderInput";

interface AmortizationRow {
  month: number;
  principalPaid: number;
  interestPaid: number;
  remainingBalance: number;
}

interface VaCalcResult {
  baseLoanAmount: number;
  fundingFeeRate: number;
  fundingFeeAmt: number;
  totalLoanAmount: number;
  monthlyPI: number;
  totalInterestPaid: number;
  totalCostOverLife: number;
  schedule: AmortizationRow[];
}

const SERVICE_ERA_MINIMUMS: Record<string, { label: string; minMonths: number }> = {
  postWwii: { label: "Post-WWII (7/26/1947–6/26/1950)", minMonths: 3 },
  koreanWar: { label: "Korean War (6/27/1950–1/31/1955)", minMonths: 3 },
  postKorean: { label: "Post-Korean War (2/1/1955–8/4/1964)", minMonths: 6 },
  vietnamWar: { label: "Vietnam War (8/5/1964–5/7/1975)", minMonths: 3 },
  postVietnam: { label: "Post-Vietnam (5/8/1975–9/7/1980)", minMonths: 6 },
  rule24Month: { label: "24 Month Rule (9/8/1980–8/1/1990)", minMonths: 24 },
  gulfWar: { label: "Gulf War (8/2/1990–present)", minMonths: 24 },
  activeDuty: { label: "Currently On Active Duty", minMonths: 3 },
  nationalGuard: { label: "National Guard & Reserve Member", minMonths: 72 }
};

const fmt = (v: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Math.round(v));

function getFundingFeeRate(
  status: string,
  loanType: string,
  dpPct: number
): number {
  if (status === "exempt") return 0.0;

  if (loanType === "irrrl") return 0.50;

  if (loanType === "cashOut") {
    return status === "firstTime" ? 2.15 : 3.30;
  }

  if (dpPct < 5.0) {
    return status === "firstTime" ? 2.15 : 3.30;
  } else if (dpPct < 10.0) {
    return 1.50;
  } else {
    return 1.25;
  }
}

function solveVaPayments(
  homePrice: number,
  dpAmt: number,
  dpPct: number,
  status: string,
  loanType: string,
  interestRate: number,
  loanTerm: number
): VaCalcResult {
  const baseLoanAmount = Math.max(0, homePrice - dpAmt);
  const feeRate = getFundingFeeRate(status, loanType, dpPct);
  const fundingFeeAmt = baseLoanAmount * (feeRate / 100);
  const totalLoanAmount = baseLoanAmount + fundingFeeAmt;

  const r = interestRate / 100 / 12;
  const n = loanTerm * 12;
  let monthlyPI = 0;

  if (totalLoanAmount > 0 && n > 0) {
    if (r === 0) {
      monthlyPI = totalLoanAmount / n;
    } else {
      const factor = Math.pow(1 + r, n);
      monthlyPI = (totalLoanAmount * r * factor) / (factor - 1);
    }
  }

  const totalInterestPaid = Math.max(0, (monthlyPI * n) - totalLoanAmount);
  const totalCostOverLife = dpAmt + (monthlyPI * n);

  const schedule: AmortizationRow[] = [];
  let balance = totalLoanAmount;

  for (let month = 1; month <= n; month++) {
    const interestThisMonth = balance * r;
    let principalThisMonth = monthlyPI - interestThisMonth;

    if (principalThisMonth >= balance || month === n) {
      principalThisMonth = balance;
      balance = 0;
    } else {
      balance = balance - principalThisMonth;
    }

    schedule.push({
      month,
      principalPaid: principalThisMonth,
      interestPaid: interestThisMonth,
      remainingBalance: balance
    });
  }

  return {
    baseLoanAmount,
    fundingFeeRate: feeRate,
    fundingFeeAmt,
    totalLoanAmount,
    monthlyPI,
    totalInterestPaid,
    totalCostOverLife,
    schedule
  };
}

export default function VaLoanCalculatorPage() {
  const [serviceEra, setServiceEra] = useState("gulfWar");
  const [serviceMonths, setServiceMonths] = useState(24);

  const [loanType, setLoanType] = useState("purchase");
  const [fundingFeeStatus, setFundingFeeStatus] = useState("firstTime");

  const [homePrice, setHomePrice] = useState(300000);
  const [dpVal, setDpVal] = useState(0);
  const [dpPct, setDpPct] = useState(0);
  const [interestRate, setInterestRate] = useState(6.25);
  const [loanTerm, setLoanTerm] = useState(30);

  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 24;

  const result = useMemo(() => {
    const hp = homePrice;
    const dp = dpVal;
    const dpP = dpPct;
    const rate = interestRate;
    const term = Math.max(1, Math.min(30, loanTerm));
    return solveVaPayments(hp, dp, dpP, fundingFeeStatus, loanType, rate, term);
  }, [homePrice, dpVal, dpPct, fundingFeeStatus, loanType, interestRate, loanTerm]);

  useEffect(() => {
    setCurrentPage(0);
  }, [homePrice, dpVal, dpPct, interestRate, loanTerm, fundingFeeStatus, loanType]);

  const handleHomePriceChange = (val: number) => {
    setHomePrice(val);
    if (val > 0) {
      setDpVal(Math.round(val * dpPct / 100));
    }
  };

  const handleDpAmtChange = (val: number) => {
    setDpVal(val);
    if (homePrice > 0) {
      setDpPct(parseFloat((val / homePrice * 100).toFixed(2)));
    }
  };

  const handleDpPctChange = (val: number) => {
    setDpPct(val);
    if (homePrice > 0) {
      setDpVal(Math.round(homePrice * val / 100));
    }
  };

  const handlePresetDp = (pct: number) => {
    setDpPct(pct);
    if (homePrice > 0) {
      setDpVal(Math.round(homePrice * pct / 100));
    }
  };

  const evaluateEligibility = () => {
    const eraConfig = SERVICE_ERA_MINIMUMS[serviceEra];
    if (!eraConfig) return "";
    const months = serviceMonths;
    if (months >= eraConfig.minMonths) {
      return "\u2705 Meets general service requirement";
    }
    return "\u26A0\uFE0F Below general service requirement \u2014 may still qualify under early-discharge exceptions (hardship, disability, reduction-in-force); a Certificate of Eligibility from the VA is required to confirm";
  };

  const getDonutSplit = (r: VaCalcResult) => {
    const total = r.monthlyPI;
    if (total <= 0) return { p: "0", i: "0" };
    const int1 = r.totalLoanAmount * (interestRate / 100 / 12);
    const p1 = total - int1;
    return {
      p: ((p1 / total) * 100).toFixed(1),
      i: ((int1 / total) * 100).toFixed(1)
    };
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3] font-sans">
      <Navbar />
      <main className="flex-grow">

        <section className="w-full bg-[#052316] text-white py-16 lg:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5 opacity-40" />
            <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5 opacity-40" />
          </div>
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3 font-sans">MORTGAGE TOOLS</span>
            <h1 className="text-white text-[38px] lg:text-[52px] font-playfair font-normal leading-[1.15] mb-6">
              VA Loan Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Verify service eligibility guidelines, compute your VA funding fee, and evaluate monthly principal and interest payouts.
            </p>
          </div>
        </section>

        <section className="py-12 px-6 lg:px-10 max-w-6xl mx-auto font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            <div className="lg:col-span-6 flex flex-col gap-6">

              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-5">
                <h3 className="text-[#052316] text-[17px] font-bold pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#052316]" /> Service Information
                </h3>

                <div>
                  <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Service Era</label>
                  <select value={serviceEra} onChange={(e) => setServiceEra(e.target.value)}
                    className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 px-3 text-[14px] font-bold text-[#052316] focus:outline-none cursor-pointer">
                    {Object.entries(SERVICE_ERA_MINIMUMS).map(([k, v]) => (
                      <option key={k} value={k}>{v.label}</option>
                    ))}
                  </select>
                </div>

                <SliderInput
                  label="Length of Service (months)"
                  value={serviceMonths}
                  min={0}
                  max={120}
                  step={1}
                  suffix=" months"
                  onChange={setServiceMonths}
                />

                <div className="bg-[#faf7f0] rounded-2xl p-4 border border-[#e8e0d0]/40 mt-1 flex flex-col gap-1 text-[13px] leading-relaxed">
                  <span className="text-[10px] text-[#a89a70] uppercase font-bold tracking-wide">Eligibility Check (Informational)</span>
                  <p className="text-[#052316] font-semibold">{evaluateEligibility()}</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-5">
                <h3 className="text-[#052316] text-[17px] font-bold pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#b89a5a]" /> Purpose & Funding Fee Status
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Loan Type / Purpose</label>
                    <select value={loanType} onChange={(e) => setLoanType(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3 text-[13.5px] font-bold text-[#052316] focus:outline-none cursor-pointer">
                      <option value="purchase">Purchase</option>
                      <option value="cashOut">VA Cash Out Refinance</option>
                      <option value="irrrl">IRRRL Streamline Refinance</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5 font-sans">VA Funding Fee Status</label>
                    <select value={fundingFeeStatus} onChange={(e) => setFundingFeeStatus(e.target.value)}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3 text-[13.5px] font-bold text-[#052316] focus:outline-none cursor-pointer">
                      <option value="firstTime">First Time Use</option>
                      <option value="subsequent">Subsequent Use</option>
                      <option value="exempt">VA Funding Fee Exempt</option>
                    </select>
                  </div>
                </div>
              </div>

            </div>

            <div className="lg:col-span-6 flex flex-col gap-6">

              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-5">
                <h3 className="text-[#052316] text-[17px] font-bold pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3fb364]" /> Loan Terms
                </h3>

                <SliderInput
                  label={loanType === "purchase" ? "Home Price" : "Home Value"}
                  value={homePrice}
                  min={50000}
                  max={2000000}
                  step={1000}
                  prefix="$"
                  onChange={handleHomePriceChange}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <SliderInput
                    label="Interest Rate"
                    value={interestRate}
                    min={0}
                    max={15}
                    step={0.125}
                    suffix="%"
                    onChange={setInterestRate}
                  />
                  <div>
                    <label className="text-[#052316] text-[13px] font-semibold block mb-1.5">Loan Term</label>
                    <select value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3 px-3 text-[14px] font-bold text-[#052316] focus:outline-none cursor-pointer">
                      <option value={30}>30 Years</option>
                      <option value={20}>20 Years</option>
                      <option value={15}>15 Years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-[#052316] text-[13.5px] font-semibold block">Down Payment</label>
                    <span className="text-[12.5px] text-[#888] font-bold">Preset Stops</span>
                  </div>

                  <div className="grid grid-cols-5 gap-2 mb-3">
                    {[0, 3.5, 5, 10, 20].map((pVal) => (
                      <button key={pVal} onClick={() => handlePresetDp(pVal)}
                        className={`py-2 px-1 text-[11px] font-bold border rounded-xl transition-all cursor-pointer ${dpPct === pVal ? "bg-[#052316] text-white border-[#052316]" : "bg-[#fcf9f3] text-[#052316] border-[#e8e0d0]"}`}>
                        {pVal}%
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SliderInput
                      label="Down Payment ($)"
                      value={dpVal}
                      min={0}
                      max={2000000}
                      step={1000}
                      prefix="$"
                      onChange={handleDpAmtChange}
                    />
                    <SliderInput
                      label="Down Payment (%)"
                      value={dpPct}
                      min={0}
                      max={100}
                      step={0.5}
                      suffix="%"
                      onChange={handleDpPctChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="calc-results" className="pb-16 px-6 lg:px-10 max-w-6xl mx-auto space-y-8 animate-fadeUp font-sans">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#052316] text-white border border-[#052316] rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[#3fb364] text-[10.5px] font-bold tracking-wider uppercase">Monthly P&I Payment</span>
                <h2 className="text-[34px] font-bold mt-1.5">{fmt(result.monthlyPI)}</h2>
              </div>
              <p className="text-[12.5px] text-[#c8c8b8] mt-3 pt-2.5 border-t border-white/10">Includes financed VA Funding Fee.</p>
            </div>

            <div className="bg-white border border-[#e8e0d0]/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[#a89a70] text-[10.5px] font-bold tracking-wider uppercase">VA Funding Fee</span>
                <h2 className="text-[34px] font-bold mt-1.5 text-[#052316]">
                  {fmt(result.fundingFeeAmt)}
                </h2>
              </div>
              <p className="text-[12.5px] text-[#888] mt-3 pt-2.5 border-t border-[#e8e0d0]/30">
                Rate applied: {result.fundingFeeRate.toFixed(2)}%
              </p>
            </div>

            <div className="bg-white border border-[#e8e0d0]/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[#a89a70] text-[10.5px] font-bold tracking-wider uppercase">Total Loan Financed</span>
                <h2 className="text-[34px] font-bold mt-1.5 text-[#052316]">{fmt(result.totalLoanAmount)}</h2>
              </div>
              <p className="text-[12.5px] text-[#888] mt-3 pt-2.5 border-t border-[#e8e0d0]/30">Base loan plus VA funding fee.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm flex flex-col justify-between items-center text-center">
              <div className="w-full text-left">
                <h3 className="text-[#052316] text-[16px] font-bold pb-3 border-b border-[#e8e0d0]/40 font-sans">Payment Allocation (Month 1)</h3>
              </div>

              <div className="relative w-40 h-40 my-6">
                <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#fcf9f3" strokeWidth="16" />
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#3fb364" strokeWidth="16"
                    strokeDasharray={`${2 * Math.PI * 70 * (parseFloat(getDonutSplit(result).p) / 100)} ${2 * Math.PI * 70}`} />
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#052316" strokeWidth="16"
                    strokeDasharray={`${2 * Math.PI * 70 * (parseFloat(getDonutSplit(result).i) / 100)} ${2 * Math.PI * 70}`}
                    strokeDashoffset={`-${2 * Math.PI * 70 * (parseFloat(getDonutSplit(result).p) / 100)}`} />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#888]">Monthly P&I</span>
                  <span className="text-[15.5px] font-bold text-[#052316]">{fmt(result.monthlyPI)}</span>
                </div>
              </div>

              <div className="flex gap-6 text-[12px] font-sans pt-1">
                <div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 rounded bg-[#3fb364]" /> <span>Principal ({getDonutSplit(result).p}%)</span></div>
                <div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 rounded bg-[#052316]" /> <span>Interest ({getDonutSplit(result).i}%)</span></div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-[#052316] text-[16px] font-bold mb-4 pb-3 border-b border-[#e8e0d0]/40 font-sans">VA Loan Breakdown</h3>
                <div className="flex flex-col gap-3 text-[13.5px]">
                  <div className="flex justify-between border-b border-[#e8e0d0]/20 pb-2">
                    <span className="text-[#888] font-sans">Base Loan Amount</span>
                    <span className="text-[#052316] font-bold">{fmt(result.baseLoanAmount)}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#e8e0d0]/20 pb-2">
                    <span className="text-[#888]">VA Funding Fee Rate</span>
                    <span className="text-[#052316] font-bold">{result.fundingFeeRate.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between border-b border-[#e8e0d0]/20 pb-2">
                    <span className="text-[#888] font-sans">Funding Fee Dollar Amount</span>
                    <span className="text-[#052316] font-bold">{fmt(result.fundingFeeAmt)}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#e8e0d0]/20 pb-2">
                    <span className="text-[#888]">Total Loan Financed</span>
                    <span className="text-[#052316] font-bold">{fmt(result.totalLoanAmount)}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#e8e0d0]/20 pb-2">
                    <span className="text-[#888]">Total Interest Paid</span>
                    <span className="text-[#052316] font-bold">{fmt(result.totalInterestPaid)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#888] font-sans">Total Cost Over Life of Loan</span>
                    <span className="text-[#3fb364] font-bold">{fmt(result.totalCostOverLife)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#faf7f0] rounded-2xl p-4 border border-[#e8e0d0]/40 mt-5 flex justify-between font-bold text-[#052316] text-[14.5px]">
                <span>Monthly Principal & Interest</span>
                <span>{fmt(result.monthlyPI)}/mo</span>
              </div>
            </div>

          </div>

          <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm space-y-4">
            <h3 className="text-[#052316] text-[16px] font-bold pb-2.5 border-b border-[#e8e0d0]/40 font-sans">Recommendations & Insights</h3>
            <div className="flex flex-col gap-3 font-sans text-[13.5px] leading-relaxed text-[#4e5b4e]">
              {loanType === "purchase" && dpPct < 5.0 && (
                <p>
                  💡 <strong>Funding Fee Savings Opportunity:</strong> Increasing your down payment to exactly <strong>5%</strong> would reduce your VA Funding Fee rate from <strong>{result.fundingFeeRate.toFixed(2)}%</strong> down to <strong>1.50%</strong>. This would save you approximately <strong>{fmt(result.baseLoanAmount * ((result.fundingFeeRate - 1.50) / 100))}</strong> in financed loan size.
                </p>
              )}
              {loanType === "purchase" && dpPct >= 5.0 && dpPct < 10.0 && (
                <p>
                  💡 <strong>Funding Fee Savings Opportunity:</strong> Increasing your down payment to exactly <strong>10%</strong> would reduce your VA Funding Fee rate from <strong>1.50%</strong> down to <strong>1.25%</strong>. This would save you approximately <strong>{fmt(result.baseLoanAmount * 0.0025)}</strong> in financed loan size.
                </p>
              )}
              {fundingFeeStatus !== "exempt" && (
                <p>
                  ℹ️ <strong>Funding Fee Exemption Reminder:</strong> Veterans receiving service-connected disability compensation, Purple Heart recipients on active duty, and qualifying surviving spouses may be exempt from the VA Funding Fee entirely. Please verify your exemption status to potentially save 100% of the funding fee.
                </p>
              )}
              <p>
                🛡️ <strong>Certificate of Eligibility (COE) required:</strong> The Service Eligibility status check above is a general guidelines summary. A Certificate of Eligibility issued by the VA is required to confirm actual VA loan qualification.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 shadow-sm overflow-hidden font-sans">
            <div className="px-7 py-5 border-b border-[#e8e0d0]/40 flex justify-between items-center">
              <div>
                <h3 className="text-[#052316] text-[16.5px] font-bold">VA Amortization Schedule</h3>
                <p className="text-[#888] text-[12px] mt-0.5">Month-by-month payoff schedule, including financed funding fee.</p>
              </div>
            </div>

            <div className="overflow-x-auto font-sans">
              <table className="w-full text-[12.5px]">
                <thead>
                  <tr className="bg-[#052316] text-white">
                    {["Month", "Principal Paid", "Interest Paid", "Remaining Balance"].map((h) => (
                      <th key={h} className="py-3 px-4 text-left font-semibold whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {result.schedule.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage).map((row) => (
                    <tr key={row.month} className={row.month % 2 === 0 ? "bg-white" : "bg-[#faf7f0]"}>
                      <td className="py-2.5 px-4 text-[#888] font-bold">Month {row.month}</td>
                      <td className="py-2.5 px-4 text-[#3fb364] font-bold">{fmt(row.principalPaid)}</td>
                      <td className="py-2.5 px-4 text-[#b89a5a]">{fmt(row.interestPaid)}</td>
                      <td className="py-2.5 px-4 text-[#052316]">{fmt(row.remainingBalance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {Math.ceil(result.schedule.length / rowsPerPage) > 1 && (
              <div className="flex items-center justify-between px-7 py-4 border-t border-[#e8e0d0]/40">
                <button onClick={() => setCurrentPage((p) => Math.max(0, p - 1))} disabled={currentPage === 0}
                  className="px-4 py-2 text-[13px] font-bold bg-[#052316] text-white rounded-xl disabled:opacity-40 cursor-pointer disabled:cursor-default">
                  ← Prev
                </button>
                <span className="text-[13px] text-[#888]">Page {currentPage + 1} of {Math.ceil(result.schedule.length / rowsPerPage)}</span>
                <button onClick={() => setCurrentPage((p) => Math.min(Math.ceil(result.schedule.length / rowsPerPage) - 1, p + 1))}
                  disabled={currentPage === Math.ceil(result.schedule.length / rowsPerPage) - 1}
                  className="px-4 py-2 text-[13px] font-bold bg-[#052316] text-white rounded-xl disabled:opacity-40 cursor-pointer disabled:cursor-default">
                  Next →
                </button>
              </div>
            )}
          </div>

          <div className="bg-[#052316] rounded-3xl p-6 lg:p-8 text-white shadow-md relative overflow-hidden font-sans">
            <div className="absolute -bottom-16 -right-16 w-[200px] h-[200px] rounded-full border border-white/5 opacity-40" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h4 className="text-[18px] font-bold mb-1">Looking to apply for a VA loan?</h4>
                <p className="text-[#c8c8b8] text-[13.5px]">Get in touch with the Knoell team for a complete review of your VA loan eligibility.</p>
              </div>
              <Link href="/#get-pre-approved"
                className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all shadow-md whitespace-nowrap">
                Connect With Us →
              </Link>
            </div>
          </div>

        </section>

      </main>
      <Footer />
    </div>
  );
}
