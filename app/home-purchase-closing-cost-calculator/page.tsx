"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import SliderInput from "../component/SliderInput";
import { InteractivePieChart } from "../component/InteractiveCharts";

function getTitleEscrowFee(homePrice: number): number {
  if (homePrice <= 200000) return 450;
  if (homePrice <= 300000) return 530;
  if (homePrice <= 400000) return 610;
  if (homePrice <= 500000) return 690;
  if (homePrice <= 600000) return 770;
  if (homePrice <= 700000) return 850;
  if (homePrice <= 800000) return 930;
  if (homePrice <= 900000) return 1010;
  if (homePrice <= 1000000) return 1090;
  if (homePrice <= 1100000) return 1170;
  if (homePrice <= 1200000) return 1250;
  if (homePrice <= 1300000) return 1330;
  if (homePrice <= 1400000) return 1410;
  if (homePrice <= 1500000) return 1490;
  if (homePrice <= 1600000) return 1570;
  if (homePrice <= 1700000) return 1650;
  if (homePrice <= 1800000) return 1730;
  if (homePrice <= 1900000) return 1810;
  if (homePrice <= 2000000) return 1890;
  if (homePrice <= 2100000) return 1970;
  if (homePrice <= 2200000) return 2050;
  if (homePrice <= 2300000) return 2130;
  if (homePrice <= 2400000) return 2210;
  if (homePrice <= 2500000) return 2290;
  if (homePrice <= 2600000) return 2370;
  if (homePrice <= 2700000) return 2450;
  if (homePrice <= 2800000) return 2530;
  if (homePrice <= 2900000) return 2610;
  return 2690;
}

function getTitleInsuranceFee(loanAmount: number): number {
  if (loanAmount <= 200000) return 770;
  if (loanAmount <= 300000) return 895;
  if (loanAmount <= 400000) return 1020;
  if (loanAmount <= 500000) return 1145;
  if (loanAmount <= 600000) return 1270;
  if (loanAmount <= 700000) return 1395;
  if (loanAmount <= 800000) return 1520;
  if (loanAmount <= 900000) return 1645;
  if (loanAmount <= 1000000) return 1770;
  if (loanAmount <= 1100000) return 1895;
  if (loanAmount <= 1200000) return 2020;
  if (loanAmount <= 1300000) return 2145;
  if (loanAmount <= 1400000) return 2270;
  if (loanAmount <= 1500000) return 2395;
  if (loanAmount <= 1600000) return 2520;
  if (loanAmount <= 1700000) return 2645;
  if (loanAmount <= 1800000) return 2770;
  if (loanAmount <= 1900000) return 2895;
  if (loanAmount <= 2000000) return 3020;
  if (loanAmount <= 2100000) return 3145;
  if (loanAmount <= 2200000) return 3270;
  if (loanAmount <= 2300000) return 3395;
  if (loanAmount <= 2400000) return 3520;
  if (loanAmount <= 2500000) return 3645;
  if (loanAmount <= 2600000) return 3770;
  if (loanAmount <= 2700000) return 3895;
  if (loanAmount <= 2800000) return 4020;
  if (loanAmount <= 2900000) return 4145;
  return 4270;
}

interface ClosingCostResult {
  escrowFee: number;
  insuranceFee: number;
  originationFee: number;
  appraisalFee: number;
  recordingFee: number;
  locationAmt: number;
  totalClosingCosts: number;

  govFeeLabel: string;
  govFeeRate: number;
  govFeeAmt: number;
}

const fmt = (v: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Math.round(v));

const LOCATION_RATES: Record<string, number> = {
  Phoenix: 0.0015,
  Tucson: 0.0010,
  Mesa: 0.0010,
  Chandler: 0.0010,
  Gilbert: 0.0005,
  Glendale: 0.0010,
  Scottsdale: 0.0020,
  Peoria: 0.0005,
  Tempe: 0.0010,
  Surprise: 0.0005,
  Goodyear: 0.0005,
  Buckeye: 0.0005,
  "San Tan Valley": 0.0005,
  Yuma: 0.0010,
  Avondale: 0.0005,
  Flagstaff: 0.0020,
  "Queen Creek": 0.0005,
  Maricopa: 0.0005,
  "Casas Adobes": 0.0005,
  "Casa Grande": 0.0005,
  "Lake Havasu City": 0.0010,
  Marana: 0.0005,
  "Catalina Foothills": 0.0010,
  "Prescott Valley": 0.0005,
  "Oro Valley": 0.0005,
  "City Not Listed": 0.0005
};

const ORIGINATION_FEES: Record<string, number> = {
  conventional: 1095,
  fha: 1095,
  va: 0,
  usda: 547
};

function solveClosingCosts(
  homePrice: number,
  loanAmount: number,
  program: string,
  vaStatus: string,
  city: string
): ClosingCostResult {
  const escrowFee = getTitleEscrowFee(homePrice);
  const insuranceFee = getTitleInsuranceFee(loanAmount);

  const originationFee = ORIGINATION_FEES[program] ?? 1095;
  const appraisalFee = 650;
  const recordingFee = 75;

  const locationAmt = 10;

  const totalClosingCosts = escrowFee + insuranceFee + originationFee + appraisalFee + recordingFee + locationAmt;

  let govFeeLabel = "";
  let govFeeRate = 0;
  let govFeeAmt = 0;

  if (program === "fha") {
    govFeeLabel = "FHA Upfront MIP";
    govFeeRate = 1.75;
    govFeeAmt = loanAmount * 0.0175;
  } else if (program === "va") {
    govFeeLabel = "VA Funding Fee";
    if (vaStatus === "exempt") {
      govFeeRate = 0;
    } else {
      const inferredDpPct = homePrice > 0 ? Math.max(0, (homePrice - loanAmount) / homePrice * 100) : 0;
      if (inferredDpPct < 5.0) {
        govFeeRate = vaStatus === "firstTime" ? 2.15 : 3.30;
      } else if (inferredDpPct < 10.0) {
        govFeeRate = 1.50;
      } else {
        govFeeRate = 1.25;
      }
    }
    govFeeAmt = loanAmount * (govFeeRate / 100);
  } else if (program === "usda") {
    govFeeLabel = "USDA Upfront Guarantee Fee";
    govFeeRate = 1.00;
    govFeeAmt = loanAmount * 0.01;
  }

  return {
    escrowFee,
    insuranceFee,
    originationFee,
    appraisalFee,
    recordingFee,
    locationAmt,
    totalClosingCosts,
    govFeeLabel,
    govFeeRate,
    govFeeAmt: Math.round(govFeeAmt)
  };
}

const CITY_DEFAULTS: Record<string, { price: number; loan: number }> = {
  Phoenix: { price: 400000, loan: 320000 },
  Tucson: { price: 350000, loan: 280000 },
  Mesa: { price: 400000, loan: 320000 },
  Chandler: { price: 500000, loan: 400000 },
  Gilbert: { price: 475000, loan: 380000 },
  Glendale: { price: 425000, loan: 340000 },
  Scottsdale: { price: 750000, loan: 600000 },
  Peoria: { price: 425000, loan: 340000 },
  Tempe: { price: 450000, loan: 360000 },
  Surprise: { price: 400000, loan: 320000 },
  Goodyear: { price: 425000, loan: 340000 },
  Buckeye: { price: 400000, loan: 320000 },
  "San Tan Valley": { price: 375000, loan: 300000 },
  Yuma: { price: 300000, loan: 240000 },
  Avondale: { price: 400000, loan: 320000 },
  Flagstaff: { price: 500000, loan: 400000 },
  "Queen Creek": { price: 450000, loan: 360000 },
  Maricopa: { price: 350000, loan: 280000 },
  "Casas Adobes": { price: 375000, loan: 300000 },
  "Casa Grande": { price: 300000, loan: 240000 },
  "Lake Havasu City": { price: 350000, loan: 280000 },
  Marana: { price: 375000, loan: 300000 },
  "Catalina Foothills": { price: 450000, loan: 360000 },
  "Prescott Valley": { price: 350000, loan: 280000 },
  "Oro Valley": { price: 400000, loan: 320000 },
  "City Not Listed": { price: 400000, loan: 320000 }
};

const ARIZONA_CITIES = Object.keys(CITY_DEFAULTS);

export default function ClosingCostCalculatorPage() {
  const [selectedCity, setSelectedCity] = useState("Phoenix");
  const [homePrice, setHomePrice] = useState(400000);
  const [loanAmount, setLoanAmount] = useState(320000);
  const [program, setProgram] = useState("conventional");
  const [vaStatus, setVaStatus] = useState("firstTime");

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    const defaults = CITY_DEFAULTS[city] || CITY_DEFAULTS.Phoenix;
    setHomePrice(defaults.price);
    setLoanAmount(defaults.loan);
  };

  const result = useMemo(() => {
    return solveClosingCosts(homePrice, loanAmount, program, vaStatus, selectedCity);
  }, [homePrice, loanAmount, program, vaStatus, selectedCity]);

  const validationWarning = useMemo(() => {
    if (homePrice <= 0 || loanAmount <= 0) return "";
    if (loanAmount > homePrice) {
      return "⚠️ Warning: Loan Amount exceeds the Home Price. Results may reflect an atypical loan-to-value ratio.";
    }
    return "";
  }, [homePrice, loanAmount]);

  const getChartSegments = (r: ClosingCostResult) => {
    const total = r.totalClosingCosts;
    if (total <= 0) return [];
    const segments = [
      { name: "Title Escrow Fee", val: r.escrowFee, color: "#052316" },
      { name: "Title Insurance Fee", val: r.insuranceFee, color: "#3fb364" },
      { name: "Loan Origination Fee", val: r.originationFee, color: "#b89a5a" },
      { name: "Appraisal Fee", val: r.appraisalFee, color: "#a89a70" },
      { name: "Recording Fee", val: r.recordingFee, color: "#dcd6cd" },
    ];
    if (r.locationAmt > 0) segments.push({ name: "Location Adjustment", val: r.locationAmt, color: "#e8dcc6" });
    return segments;
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3] font-sans">
      <Navbar />
      <main className="flex-grow">

        <section className="w-full bg-[#052316] text-white pt-[110px] lg:pt-[130px] pb-16 lg:pb-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5 opacity-40" />
            <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5 opacity-40" />
          </div>
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3 font-sans">MORTGAGE TOOLS</span>
            <h1 className="text-white text-[38px] lg:text-[52px] font-playfair font-normal leading-[1.15] mb-6">
              Home Purchase Closing Cost Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Estimate title escrow fees, title insurance premiums, and lender closing costs based on transaction details.
            </p>
          </div>
        </section>

        <section className="py-12 px-6 lg:px-10 max-w-5xl mx-auto font-sans">
          <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 lg:p-8 shadow-sm flex flex-col gap-6">
            <h3 className="text-[#052316] text-[17px] font-bold pb-3 border-b border-[#e8e0d0]/40 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#052316]" /> Transaction Details
            </h3>

            <div>
              <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Select Your Arizona City</label>
              <select
                value={selectedCity}
                onChange={(e) => handleCityChange(e.target.value)}
                className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 px-3.5 text-[14px] font-bold text-[#052316] focus:outline-none cursor-pointer"
              >
                {ARIZONA_CITIES.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <SliderInput label="Home Price" value={homePrice} min={50000} max={2000000} step={1000} prefix="$" onChange={setHomePrice} />
              <SliderInput label="Loan Amount" value={loanAmount} min={0} max={2000000} step={1000} prefix="$" onChange={setLoanAmount} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5">Loan Program</label>
                <select value={program} onChange={(e) => setProgram(e.target.value)}
                  className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 px-3.5 text-[14px] font-bold text-[#052316] focus:outline-none cursor-pointer">
                  <option value="conventional">Conventional</option>
                  <option value="fha">FHA</option>
                  <option value="va">VA</option>
                  <option value="usda">USDA</option>
                </select>
              </div>

              {program === "va" && (
                <div>
                  <label className="text-[#052316] text-[13.5px] font-semibold block mb-1.5 font-sans font-sans">VA Funding Fee Status</label>
                  <select value={vaStatus} onChange={(e) => setVaStatus(e.target.value)}
                    className="w-full bg-white border border-[#e8e0d0] rounded-xl py-3.5 px-3.5 text-[14px] font-bold text-[#052316] focus:outline-none cursor-pointer">
                    <option value="firstTime">First Time Use</option>
                    <option value="subsequent">Subsequent Use</option>
                    <option value="exempt">VA Funding Fee Exempt</option>
                  </select>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="calc-results" className="pb-16 px-6 lg:px-10 max-w-5xl mx-auto space-y-8 animate-fadeUp font-sans">
          
          {validationWarning && (
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-3xl p-5 text-[13px] font-semibold leading-relaxed">
              {validationWarning}
            </div>
          )}

          <div className={`grid grid-cols-1 ${result.govFeeAmt > 0 ? "md:grid-cols-2" : "md:grid-cols-1"} gap-5`}>
            <div className="bg-[#052316] text-white rounded-3xl p-6 shadow-sm flex flex-col justify-between border border-[#052316]">
              <div>
                <span className="text-[#3fb364] text-[10.5px] font-bold tracking-wider uppercase">Total Estimated Closing Costs</span>
                <h2 className="text-[38px] font-bold mt-1.5">{fmt(result.totalClosingCosts)}</h2>
              </div>
              <p className="text-[12.5px] text-[#c8c8b8] mt-3 pt-2.5 border-t border-white/10">Cash required at closing for title, escrow, lender &amp; location fees.</p>
            </div>

            {result.govFeeAmt > 0 && (
              <div className="bg-white border border-[#e8e0d0]/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[#a89a70] text-[10.5px] font-bold tracking-wider uppercase">{result.govFeeLabel}</span>
                  <h2 className="text-[38px] font-bold mt-1.5 text-[#052316]">{fmt(result.govFeeAmt)}</h2>
                </div>
                <p className="text-[12.5px] text-[#888] mt-3 pt-2.5 border-t border-[#e8e0d0]/30 font-sans">
                  *Typically financed into loan balance (excluded from cash total). Rate: {result.govFeeRate}%
                </p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm flex flex-col justify-between items-center text-center">
              <InteractivePieChart
                title="Cost Component Breakdown"
                donut={true}
                dataItems={getChartSegments(result).map((seg) => ({
                  label: seg.name,
                  value: seg.val,
                  color: seg.color,
                }))}
              />

              <div className="grid grid-cols-2 gap-3 text-[11px] font-sans pt-1 text-left w-full max-w-sm mx-auto">
                {getChartSegments(result).map((seg) => (
                  <div key={seg.name} className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: seg.color }} />
                    <span className="truncate text-[#4e5b4e]">{seg.name} ({((seg.val / result.totalClosingCosts) * 100).toFixed(1)}%)</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-[#052316] text-[16.5px] font-bold mb-4 pb-3 border-b border-[#e8e0d0]/40 font-sans">Fee Itemized Breakdown</h3>
                <div className="flex flex-col gap-3 text-[13.5px]">
                  <div className="flex justify-between border-b border-[#e8e0d0]/20 pb-2">
                    <span className="text-[#888]">Title Escrow Fee</span>
                    <span className="text-[#052316] font-bold">{fmt(result.escrowFee)}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#e8e0d0]/20 pb-2">
                    <span className="text-[#888]">Title Insurance Fee</span>
                    <span className="text-[#052316] font-bold">{fmt(result.insuranceFee)}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#e8e0d0]/20 pb-2">
                    <span className="text-[#888]">Loan Origination Fee</span>
                    <span className="text-[#052316] font-bold">{fmt(result.originationFee)}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#e8e0d0]/20 pb-2">
                    <span className="text-[#888]">Appraisal Fee</span>
                    <span className="text-[#052316] font-bold">{fmt(result.appraisalFee)}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#e8e0d0]/20 pb-2">
                    <span className="text-[#888]">Recording Fee</span>
                    <span className="text-[#052316] font-bold">{fmt(result.recordingFee)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#888]">Location Adjustment</span>
                    <span className="text-[#052316] font-bold">{fmt(result.locationAmt)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#faf7f0] rounded-2xl p-4 border border-[#e8e0d0]/40 mt-6 flex justify-between font-bold text-[#052316] text-[14.5px]">
                <span>Total Cash Outlay Estimate</span>
                <span>{fmt(result.totalClosingCosts)}</span>
              </div>
            </div>
          </div>

          <div className="bg-[#faf7f0] border border-[#e8e0d0]/40 rounded-3xl p-6 text-[13.5px] leading-relaxed text-[#4e5b4e] font-sans">
            <h4 className="font-bold text-[#052316] mb-1.5">ℹ️ Important Closing Costs Context</h4>
            <p className="mb-2">
              This calculator generates estimates of direct title insurance premiums, escrow service charges, lender origination fees, and typical recording charges.
            </p>
            <p>
              * Upfront government loan fees (FHA Upfront MIP, VA Funding Fee, or USDA Guarantee fees) are shown separately because borrowers almost always finance these fees directly into their total loan balance rather than paying them as cash at the closing table.
            </p>
          </div>

          <div className="bg-[#052316] rounded-3xl p-6 lg:p-8 text-white shadow-md relative overflow-hidden font-sans">
            <div className="absolute -bottom-16 -right-16 w-[200px] h-[200px] rounded-full border border-white/5 opacity-40" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h4 className="text-[18px] font-bold mb-1">Applying for a home purchase loan?</h4>
                <p className="text-[#c8c8b8] text-[13.5px]">Get in touch with the Knoell team for a complete review of your transaction fees.</p>
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
