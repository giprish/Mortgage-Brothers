"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { InteractivePieChart } from "../component/InteractiveCharts";

interface ScenarioResult {
  maxPayment: number;
  maxPIPayment: number;
  maxLoan: number;
  maxPrice: number;
}

interface AffordabilityResult {
  grossIncome: number;
  monthlyDebts: number;
  downPayment: number;
  interestRate: number;
  loanTerm: number;
  propertyTax: number;
  insurance: number;
  pmi: number;

  maxPrice: number;
  monthlyPIPayment: number;
  totalMortgagePayment: number;
  totalMonthlyDebt: number;
  actualDTI: number;

  conservative: ScenarioResult;
  moderate: ScenarioResult;
  aggressive: ScenarioResult;
}

const fmtCurr = (v: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(v);

const parseFormattedNumber = (str: string): number => {
  if (!str) return 0;
  const cleaned = str.replace(/,/g, "").replace(/[^0-9.]/g, "");
  return parseFloat(cleaned) || 0;
};

// City Defaults Mapping for Arizona Cities
const CITY_DEFAULTS: Record<string, { price: number; downPayment: number; tax: number; insurance: number; rate: number }> = {
  Phoenix: { price: 450000, downPayment: 90000, tax: 232, insurance: 150, rate: 4.5 },
  Tucson: { price: 350000, downPayment: 70000, tax: 181, insurance: 120, rate: 4.5 },
  Mesa: { price: 400000, downPayment: 80000, tax: 207, insurance: 130, rate: 4.5 },
  Chandler: { price: 500000, downPayment: 100000, tax: 258, insurance: 160, rate: 4.5 },
  Gilbert: { price: 475000, downPayment: 95000, tax: 245, insurance: 150, rate: 4.5 },
  Glendale: { price: 425000, downPayment: 85000, tax: 220, insurance: 140, rate: 4.5 },
  Scottsdale: { price: 750000, downPayment: 150000, tax: 387, insurance: 200, rate: 4.8 },
  Peoria: { price: 425000, downPayment: 85000, tax: 220, insurance: 140, rate: 4.5 },
  Tempe: { price: 450000, downPayment: 90000, tax: 232, insurance: 150, rate: 4.5 },
  Surprise: { price: 400000, downPayment: 80000, tax: 207, insurance: 130, rate: 4.5 },
  Goodyear: { price: 425000, downPayment: 85000, tax: 220, insurance: 140, rate: 4.5 },
  Buckeye: { price: 400000, downPayment: 80000, tax: 207, insurance: 130, rate: 4.5 },
  "San Tan Valley": { price: 375000, downPayment: 75000, tax: 194, insurance: 125, rate: 4.5 },
  Yuma: { price: 300000, downPayment: 60000, tax: 155, insurance: 110, rate: 4.5 },
  Avondale: { price: 400000, downPayment: 80000, tax: 207, insurance: 130, rate: 4.5 },
  Flagstaff: { price: 500000, downPayment: 100000, tax: 258, insurance: 160, rate: 4.5 },
  "Queen Creek": { price: 450000, downPayment: 90000, tax: 232, insurance: 150, rate: 4.5 },
  Maricopa: { price: 350000, downPayment: 70000, tax: 181, insurance: 120, rate: 4.5 },
  "Casas Adobes": { price: 375000, downPayment: 75000, tax: 194, insurance: 125, rate: 4.5 },
  "Casa Grande": { price: 300000, downPayment: 60000, tax: 155, insurance: 110, rate: 4.5 },
  "Lake Havasu City": { price: 350000, downPayment: 70000, tax: 181, insurance: 120, rate: 4.5 },
  Marana: { price: 375000, downPayment: 75000, tax: 194, insurance: 125, rate: 4.5 },
  "Catalina Foothills": { price: 450000, downPayment: 90000, tax: 232, insurance: 150, rate: 4.5 },
  "Prescott Valley": { price: 350000, downPayment: 70000, tax: 181, insurance: 120, rate: 4.5 },
  "Oro Valley": { price: 400000, downPayment: 80000, tax: 207, insurance: 130, rate: 4.5 },
  "City Not Listed": { price: 400000, downPayment: 80000, tax: 207, insurance: 130, rate: 4.5 }
};

const ARIZONA_CITIES = Object.keys(CITY_DEFAULTS);

function calculateAffordability(
  grossIncome: number,
  monthlyDebts: number,
  downPayment: number,
  interestRate: number,
  loanTerm: number,
  propertyTax: number,
  insurance: number,
  pmi: number
): AffordabilityResult {
  const inc = Math.max(0, grossIncome);
  const debts = Math.max(0, monthlyDebts);
  const dp = Math.max(0, downPayment);
  const rate = Math.max(0, interestRate);
  const term = Math.max(1, loanTerm);
  const tax = Math.max(0, propertyTax);
  const ins = Math.max(0, insurance);
  const pmiVal = Math.max(0, pmi);

  const monthlyRate = rate / 100 / 12;
  const numberOfPayments = term * 12;

  const calcScenario = (dtiRatio: number): ScenarioResult => {
    const maxPayment = Math.max(0, inc * dtiRatio - debts);
    const maxPIPayment = Math.max(0, maxPayment - tax - ins - pmiVal);

    let maxLoan = 0;
    if (maxPIPayment > 0 && numberOfPayments > 0) {
      if (monthlyRate === 0) {
        maxLoan = maxPIPayment * numberOfPayments;
      } else {
        const factor = (1 - Math.pow(1 + monthlyRate, -numberOfPayments)) / monthlyRate;
        maxLoan = maxPIPayment * factor;
      }
    }
    const maxPrice = Math.max(0, maxLoan + dp);
    return { maxPayment, maxPIPayment, maxLoan, maxPrice };
  };

  const conservative = calcScenario(0.30);
  const moderate = calcScenario(0.40);
  const aggressive = calcScenario(0.48);

  const maxPrice = aggressive.maxPrice;
  const loanAmount = Math.max(0, maxPrice - dp);

  let monthlyPIPayment = 0;
  if (loanAmount > 0 && numberOfPayments > 0) {
    if (monthlyRate === 0) {
      monthlyPIPayment = loanAmount / numberOfPayments;
    } else {
      const factor = (monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments)));
      monthlyPIPayment = loanAmount * factor;
    }
  }

  const totalMortgagePayment = monthlyPIPayment + tax + ins + pmiVal;
  const totalMonthlyDebt = totalMortgagePayment + debts;
  const actualDTI = inc > 0 ? Math.min((totalMonthlyDebt / inc) * 100, 48) : 0;

  return {
    grossIncome: inc,
    monthlyDebts: debts,
    downPayment: dp,
    interestRate: rate,
    loanTerm: term,
    propertyTax: tax,
    insurance: ins,
    pmi: pmiVal,
    maxPrice,
    monthlyPIPayment,
    totalMortgagePayment,
    totalMonthlyDebt,
    actualDTI: parseFloat(actualDTI.toFixed(2)),
    conservative,
    moderate,
    aggressive
  };
}

export default function MortgageAffordabilityCalculatorPage() {
  const [selectedCity, setSelectedCity] = useState("Phoenix");
  const [grossIncomeStr, setGrossIncomeStr] = useState("6,000");
  const [monthlyDebtsStr, setMonthlyDebtsStr] = useState("500");

  const [downPaymentStr, setDownPaymentStr] = useState("90,000");
  const [interestRateStr, setInterestRateStr] = useState("4.5");
  const [loanTerm, setLoanTerm] = useState(30);

  const [propertyTaxStr, setPropertyTaxStr] = useState("200");
  const [insuranceStr, setInsuranceStr] = useState("150");
  const [pmiStr, setPmiStr] = useState("100");

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    const defaults = CITY_DEFAULTS[city] || CITY_DEFAULTS.Phoenix;
    setDownPaymentStr(defaults.downPayment.toLocaleString("en-US"));
    setPropertyTaxStr(defaults.tax.toLocaleString("en-US"));
    setInsuranceStr(defaults.insurance.toLocaleString("en-US"));
    setInterestRateStr(defaults.rate.toString());
  };

  const result = useMemo(() => {
    return calculateAffordability(
      parseFormattedNumber(grossIncomeStr),
      parseFormattedNumber(monthlyDebtsStr),
      parseFormattedNumber(downPaymentStr),
      parseFormattedNumber(interestRateStr),
      loanTerm,
      parseFormattedNumber(propertyTaxStr),
      parseFormattedNumber(insuranceStr),
      parseFormattedNumber(pmiStr)
    );
  }, [
    grossIncomeStr,
    monthlyDebtsStr,
    downPaymentStr,
    interestRateStr,
    loanTerm,
    propertyTaxStr,
    insuranceStr,
    pmiStr
  ]);

  const pieSplit = useMemo(() => {
    const total = result.totalMortgagePayment;
    if (total <= 0) return { piPct: 70, taxPct: 15, insPct: 10, pmiPct: 5 };
    const piPct = (result.monthlyPIPayment / total) * 100;
    const taxPct = (result.propertyTax / total) * 100;
    const insPct = (result.insurance / total) * 100;
    const pmiPct = (result.pmi / total) * 100;
    return {
      piPct: parseFloat(piPct.toFixed(1)),
      taxPct: parseFloat(taxPct.toFixed(1)),
      insPct: parseFloat(insPct.toFixed(1)),
      pmiPct: parseFloat(pmiPct.toFixed(1))
    };
  }, [result]);

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] font-sans text-[#32353C]">
      <Navbar />

      <main className="flex-grow pb-16">
        {/* Banner Section */}
        <section className="w-full bg-[#052316] text-white py-14 lg:py-16 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-2 font-sans">
              ARIZONA MORTGAGE TOOLS
            </span>
            <h1 className="text-white text-[34px] lg:text-[46px] font-playfair font-normal leading-[1.2] mb-4">
              Mortgage Affordability Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[14.5px] lg:text-[16px] leading-[1.6] max-w-2xl mx-auto font-sans">
              Calculate the maximum home price you can afford based on your income, existing monthly debts, down payment, and target DTI ratios.
            </p>
          </div>
        </section>

        {/* Main Calculator Container */}
        <div className="max-w-6xl mx-auto px-4 lg:px-8 mt-8">
          <div className="bg-white rounded-2xl border border-[#e0e0e0] shadow-sm p-6 lg:p-10 space-y-8">
            
            {/* City Selector Dropdown */}
            <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <label htmlFor="citySelect" className="text-[15px] font-semibold text-[#32353C] block mb-1">
                  Select Your Arizona City
                </label>
                <p className="text-[#666] text-[13px]">
                  Loads average home price, property tax, insurance, and down payment defaults for your area.
                </p>
              </div>
              <select
                id="citySelect"
                value={selectedCity}
                onChange={(e) => handleCityChange(e.target.value)}
                className="h-[45px] px-4 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-semibold text-[#32353C] focus:outline-none focus:border-[#4CAF50] cursor-pointer md:w-64"
              >
                {ARIZONA_CITIES.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Input Section 1: Income & Debts */}
            <div>
              <h3 className="text-[18px] font-semibold text-[#32353C] pb-3 mb-6 border-b border-[#f0f0f0]">
                Income &amp; Monthly Debts
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="grossIncome" className="text-[14px] font-medium text-[#32353C]">
                      Gross Monthly Income ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Your total monthly income before taxes and deductions. Include salary, bonuses, and investments.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                      $
                    </span>
                    <input
                      type="text"
                      id="grossIncome"
                      value={grossIncomeStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setGrossIncomeStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="monthlyDebts" className="text-[14px] font-medium text-[#32353C]">
                      Non-Mortgage Monthly Debts ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Include all monthly debt payments except future mortgage (car loans, student loans, credit cards).
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                      $
                    </span>
                    <input
                      type="text"
                      id="monthlyDebts"
                      value={monthlyDebtsStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setMonthlyDebtsStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Input Section 2: Down Payment & Rate */}
            <div>
              <h3 className="text-[18px] font-semibold text-[#32353C] pb-3 mb-6 border-b border-[#f0f0f0]">
                Down Payment &amp; Financing Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="downPayment" className="text-[14px] font-medium text-[#32353C]">
                      Down Payment ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-60 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Upfront cash contribution for purchase. 20% recommended to avoid PMI.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                      $
                    </span>
                    <input
                      type="text"
                      id="downPayment"
                      value={downPaymentStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setDownPaymentStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="interestRate" className="text-[14px] font-medium text-[#32353C]">
                      Interest Rate (%)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-52 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Annual mortgage interest rate percentage.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="interestRate"
                      value={interestRateStr}
                      onChange={(e) => {
                        let val = e.target.value.replace(/[^0-9.]/g, "");
                        const parts = val.split(".");
                        if (parts.length > 2) val = parts[0] + "." + parts.slice(1).join("");
                        setInterestRateStr(val);
                      }}
                      className="w-full h-[45px] pl-3.5 pr-8 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50] text-right"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                      %
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="loanTerm" className="text-[14px] font-medium text-[#32353C]">
                      Loan Term
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-52 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Length of mortgage term in years.
                      </div>
                    </div>
                  </div>
                  <select
                    id="loanTerm"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(parseInt(e.target.value, 10))}
                    className="w-full h-[45px] px-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] text-[#32353C] focus:outline-none focus:border-[#4CAF50] cursor-pointer"
                  >
                    <option value={30}>30 Years</option>
                    <option value={20}>20 Years</option>
                    <option value={15}>15 Years</option>
                    <option value={10}>10 Years</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Input Section 3: Taxes, Insurance & PMI */}
            <div>
              <h3 className="text-[18px] font-semibold text-[#32353C] pb-3 mb-6 border-b border-[#f0f0f0]">
                Property Taxes, Insurance &amp; PMI
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="propertyTax" className="text-[14px] font-medium text-[#32353C]">
                      Property Tax (Monthly) ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Estimated monthly property taxes for your area.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                      $
                    </span>
                    <input
                      type="text"
                      id="propertyTax"
                      value={propertyTaxStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setPropertyTaxStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="insurance" className="text-[14px] font-medium text-[#32353C]">
                      Home Insurance (Monthly) ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Estimated monthly homeowner insurance premium.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                      $
                    </span>
                    <input
                      type="text"
                      id="insurance"
                      value={insuranceStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setInsuranceStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="pmi" className="text-[14px] font-medium text-[#32353C]">
                      PMI (Monthly) ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Private Mortgage Insurance if down payment is less than 20%.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                      $
                    </span>
                    <input
                      type="text"
                      id="pmi"
                      value={pmiStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setPmiStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Results Section */}
        <section className="max-w-6xl mx-auto px-4 lg:px-8 mt-10 space-y-8 animate-fadeIn">
          <div className="bg-white rounded-2xl border border-[#e0e0e0] shadow-sm p-6 lg:p-10">
            
            <h2 className="text-[24px] font-semibold text-[#32353C] pb-4 mb-8 border-b-2 border-[#f0f0f0]">
              Affordability Results
            </h2>

            {/* Main Maximum Affordable Home Price Card */}
            <div className="bg-[#052316] text-white rounded-2xl p-6 lg:p-8 text-center shadow-md mb-10">
              <span className="text-[#3fb364] text-[12px] font-bold uppercase tracking-widest block mb-2">
                Maximum Affordable Home Price
              </span>
              <div className="text-[42px] lg:text-[52px] font-bold text-white mb-2">
                {fmtCurr(result.maxPrice)}
              </div>
              <p className="text-[#c8c8b8] text-[13.5px]">
                Calculated at aggressive 48% DTI threshold with {fmtCurr(result.downPayment)} down payment.
              </p>
            </div>

            {/* Monthly Payment Breakdown & Donut Chart Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
              
              {/* Left Column: Monthly Payment Breakdown */}
              <div className="lg:col-span-7 bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl p-6 shadow-sm">
                <h3 className="text-[17px] font-semibold text-[#32353C] pb-3 mb-4 border-b border-[#e0e0e0]">
                  Monthly Payment Breakdown
                </h3>

                <div className="space-y-3.5 text-[14px]">
                  <div className="flex justify-between py-1 border-b border-[#e0e0e0]/60">
                    <span className="text-[#666]">Principal &amp; Interest:</span>
                    <span className="font-semibold text-[#32353C]">{fmtCurr(result.monthlyPIPayment)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#e0e0e0]/60">
                    <span className="text-[#666]">Property Tax:</span>
                    <span className="font-semibold text-[#32353C]">{fmtCurr(result.propertyTax)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#e0e0e0]/60">
                    <span className="text-[#666]">Insurance:</span>
                    <span className="font-semibold text-[#32353C]">{fmtCurr(result.insurance)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#e0e0e0]/60">
                    <span className="text-[#666]">PMI:</span>
                    <span className="font-semibold text-[#32353C]">{fmtCurr(result.pmi)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-t border-[#e0e0e0] font-bold text-[15px]">
                    <span className="text-[#32353C]">Total Monthly Payment:</span>
                    <span className="text-[#4CAF50]">{fmtCurr(result.totalMortgagePayment)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-t border-[#e0e0e0]/60 text-[13.5px]">
                    <span className="text-[#666]">Total Monthly Obligations:</span>
                    <span className="font-semibold text-[#32353C]">{fmtCurr(result.totalMonthlyDebt)}</span>
                  </div>
                  <div className="flex justify-between py-1 text-[13.5px]">
                    <span className="text-[#666]">Resulting DTI Ratio:</span>
                    <span className="font-bold text-[#FF9800]">{result.actualDTI}%</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Donut Chart */}
              <div className="lg:col-span-5 bg-white rounded-xl border border-[#e0e0e0] p-6 shadow-sm flex flex-col items-center justify-center text-center h-full">
                <InteractivePieChart
                  title="Payment Distribution"
                  donut={true}
                  centerTextTitle="Total"
                  centerTextSub={fmtCurr(result.totalMortgagePayment)}
                  dataItems={[
                    { label: "Principal & Interest", value: result.monthlyPIPayment, color: "#4CAF50" },
                    { label: "Property Tax", value: result.propertyTax, color: "#9C27B0" },
                    { label: "Insurance", value: result.insurance, color: "#FF9800" },
                    { label: "PMI", value: result.pmi, color: "#E1BEE7" },
                  ]}
                />
              </div>

            </div>

            {/* Payment Scenarios Section */}
            <div className="mt-10">
              <h3 className="text-[18px] font-semibold text-[#32353C] mb-6">
                Payment Scenarios by DTI Benchmark
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Conservative */}
                <div className="bg-white border border-[#e0e0e0] rounded-xl p-5 shadow-sm space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[#f0f0f0]">
                    <h4 className="text-[16px] font-bold text-[#FF9800]">Conservative</h4>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800">
                      30% DTI
                    </span>
                  </div>
                  <div className="text-[13.5px] space-y-2 text-[#32353C]">
                    <div className="flex justify-between">
                      <span className="text-[#666]">Monthly Payment:</span>
                      <span className="font-semibold">{fmtCurr(result.conservative.maxPayment)}</span>
                    </div>
                    <div className="flex justify-between font-bold pt-1 border-t border-[#f0f0f0]">
                      <span className="text-[#666]">Max Home Price:</span>
                      <span className="text-[#4CAF50]">{fmtCurr(result.conservative.maxPrice)}</span>
                    </div>
                  </div>
                </div>

                {/* Moderate */}
                <div className="bg-white border border-[#e0e0e0] rounded-xl p-5 shadow-sm space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[#f0f0f0]">
                    <h4 className="text-[16px] font-bold text-[#2196F3]">Moderate</h4>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-blue-100 text-blue-800">
                      40% DTI
                    </span>
                  </div>
                  <div className="text-[13.5px] space-y-2 text-[#32353C]">
                    <div className="flex justify-between">
                      <span className="text-[#666]">Monthly Payment:</span>
                      <span className="font-semibold">{fmtCurr(result.moderate.maxPayment)}</span>
                    </div>
                    <div className="flex justify-between font-bold pt-1 border-t border-[#f0f0f0]">
                      <span className="text-[#666]">Max Home Price:</span>
                      <span className="text-[#4CAF50]">{fmtCurr(result.moderate.maxPrice)}</span>
                    </div>
                  </div>
                </div>

                {/* Aggressive */}
                <div className="bg-white border border-[#e0e0e0] rounded-xl p-5 shadow-sm space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[#f0f0f0]">
                    <h4 className="text-[16px] font-bold text-[#4CAF50]">Aggressive</h4>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">
                      48% DTI
                    </span>
                  </div>
                  <div className="text-[13.5px] space-y-2 text-[#32353C]">
                    <div className="flex justify-between">
                      <span className="text-[#666]">Monthly Payment:</span>
                      <span className="font-semibold">{fmtCurr(result.aggressive.maxPayment)}</span>
                    </div>
                    <div className="flex justify-between font-bold pt-1 border-t border-[#f0f0f0]">
                      <span className="text-[#666]">Max Home Price:</span>
                      <span className="text-[#4CAF50]">{fmtCurr(result.aggressive.maxPrice)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculation Methodology & Advice Section */}
            <div className="mt-12 bg-[#f8f9fa] border border-[#e0e0e0] rounded-2xl p-6 lg:p-8 space-y-4 text-[13.5px] leading-relaxed text-[#555]">
              <h4 className="text-[16px] font-bold text-[#32353C] border-b border-[#e0e0e0] pb-2">
                Understanding Home Affordability Calculations
              </h4>
              <p>
                <strong>How Affordability is Determined:</strong> Lenders evaluate home purchasing power using Debt-to-Income (DTI) thresholds. Your maximum monthly payment capacity is calculated by taking a percentage of your gross income minus non-mortgage monthly debts.
              </p>
              <div className="space-y-2 pt-1">
                <p><strong>• Conservative (30% DTI):</strong> Provides maximum financial cushion against unexpected emergencies or income changes.</p>
                <p><strong>• Moderate (40% DTI):</strong> Benchmark standard for conventional lending programs.</p>
                <p><strong>• Aggressive (48% DTI):</strong> Maximum allowable ratio under automated underwriting systems (e.g. Fannie Mae DU / Freddie Mac LP) for borrowers with strong credit or cash reserves.</p>
              </div>
            </div>

            {/* Call to Action Box */}
            <div className="mt-12 bg-[#052316] rounded-2xl p-6 lg:p-8 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-[20px] font-bold mb-1 font-playfair">Ready for a verified pre-approval?</h4>
                <p className="text-[#c8c8b8] text-[14px]">
                  Get a fully underwritten pre-approval letter tailored to your budget.
                </p>
              </div>
              <Link
                href="/#get-pre-approved"
                className="bg-[#4CAF50] hover:bg-[#45a049] text-white text-[15px] font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow whitespace-nowrap cursor-pointer"
              >
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
