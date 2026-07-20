"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

interface DtiResult {
  monthlyGrossIncome: number;
  monthlyHousingExpenses: number;
  otherMonthlyDebts: number;
  totalMonthlyDebts: number;
  frontEndDti: number | null;
  backEndDti: number | null;
  excessDebt: number;
}

const fmtCurr = (v: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Math.round(v));

const parseFormattedNumber = (str: string): number => {
  if (!str) return 0;
  const cleaned = str.replace(/,/g, "").replace(/[^0-9.]/g, "");
  return parseFloat(cleaned) || 0;
};

function solveDti(
  primaryIncome: number,
  additionalIncome: number,
  mortgagePayment: number,
  propertyTaxes: number,
  homeInsurance: number,
  hoaFees: number,
  carLoans: number,
  creditCards: number,
  studentLoans: number,
  otherDebts: number
): DtiResult {
  const monthlyGrossIncome = Math.max(0, primaryIncome + additionalIncome);
  const monthlyHousingExpenses = Math.max(0, mortgagePayment + propertyTaxes + homeInsurance + hoaFees);
  const otherMonthlyDebts = Math.max(0, carLoans + creditCards + studentLoans + otherDebts);
  const totalMonthlyDebts = monthlyHousingExpenses + otherMonthlyDebts;

  let frontEndDti: number | null = null;
  let backEndDti: number | null = null;
  let excessDebt = 0;

  if (monthlyGrossIncome > 0) {
    frontEndDti = (monthlyHousingExpenses / monthlyGrossIncome) * 100;
    backEndDti = (totalMonthlyDebts / monthlyGrossIncome) * 100;

    if (backEndDti > 43) {
      excessDebt = totalMonthlyDebts - monthlyGrossIncome * 0.43;
    }
  }

  return {
    monthlyGrossIncome,
    monthlyHousingExpenses,
    otherMonthlyDebts,
    totalMonthlyDebts,
    frontEndDti: frontEndDti !== null ? parseFloat(frontEndDti.toFixed(2)) : null,
    backEndDti: backEndDti !== null ? parseFloat(backEndDti.toFixed(2)) : null,
    excessDebt: Math.max(0, Math.round(excessDebt))
  };
}

function getDtiStatus(dti: number | null): { label: string; desc: string; badgeClass: string; bgClass: string } {
  if (dti === null) {
    return { label: "N/A", desc: "Enter your monthly income to get qualifying guidance.", badgeClass: "bg-gray-100 text-gray-700", bgClass: "bg-gray-50 border-gray-200" };
  }
  if (dti <= 35.99) {
    return {
      label: "Good",
      desc: "Excellent position: Likely to qualify for conventional, FHA, and VA loan programs at standard terms.",
      badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300",
      bgClass: "bg-emerald-50/50 border-emerald-200"
    };
  }
  if (dti <= 43.00) {
    return {
      label: "Warning",
      desc: "Good position: Typically qualifies for conventional and FHA financing with standard guidelines.",
      badgeClass: "bg-amber-100 text-amber-800 border-amber-300",
      bgClass: "bg-amber-50/50 border-amber-200"
    };
  }
  if (dti <= 50.00) {
    return {
      label: "Caution",
      desc: "Qualifies with compensating factors: FHA and VA loans may accept ratios up to 50% with strong credit or cash reserves.",
      badgeClass: "bg-orange-100 text-orange-800 border-orange-300",
      bgClass: "bg-orange-50/50 border-orange-200"
    };
  }
  return {
    label: "Danger",
    desc: "Likely exceeds standard program limits: Qualification generally requires reducing monthly debt obligations or increasing income.",
    badgeClass: "bg-red-100 text-red-800 border-red-300",
    bgClass: "bg-red-50/50 border-red-200"
  };
}

export default function DtiCalculatorPage() {
  const [primaryIncomeStr, setPrimaryIncomeStr] = useState("6,250");
  const [additionalIncomeStr, setAdditionalIncomeStr] = useState("750");

  const [mortgagePaymentStr, setMortgagePaymentStr] = useState("1,450");
  const [propertyTaxesStr, setPropertyTaxesStr] = useState("125");
  const [homeInsuranceStr, setHomeInsuranceStr] = useState("85");
  const [hoaFeesStr, setHoaFeesStr] = useState("50");

  const [carLoansStr, setCarLoansStr] = useState("325");
  const [creditCardsStr, setCreditCardsStr] = useState("75");
  const [studentLoansStr, setStudentLoansStr] = useState("125");
  const [otherDebtsStr, setOtherDebtsStr] = useState("25");

  const result = useMemo(() => {
    return solveDti(
      parseFormattedNumber(primaryIncomeStr),
      parseFormattedNumber(additionalIncomeStr),
      parseFormattedNumber(mortgagePaymentStr),
      parseFormattedNumber(propertyTaxesStr),
      parseFormattedNumber(homeInsuranceStr),
      parseFormattedNumber(hoaFeesStr),
      parseFormattedNumber(carLoansStr),
      parseFormattedNumber(creditCardsStr),
      parseFormattedNumber(studentLoansStr),
      parseFormattedNumber(otherDebtsStr)
    );
  }, [
    primaryIncomeStr,
    additionalIncomeStr,
    mortgagePaymentStr,
    propertyTaxesStr,
    homeInsuranceStr,
    hoaFeesStr,
    carLoansStr,
    creditCardsStr,
    studentLoansStr,
    otherDebtsStr
  ]);

  const frontStatus = getDtiStatus(result.frontEndDti);
  const backStatus = getDtiStatus(result.backEndDti);

  const chartData = useMemo(() => {
    const income = result.monthlyGrossIncome;
    if (income <= 0) return { housingPct: 0, debtPct: 0, remainPct: 100 };
    const housingPct = Math.min(100, (result.monthlyHousingExpenses / income) * 100);
    const debtPct = Math.min(100 - housingPct, (result.otherMonthlyDebts / income) * 100);
    const remainPct = Math.max(0, 100 - housingPct - debtPct);
    return {
      housingPct: parseFloat(housingPct.toFixed(1)),
      debtPct: parseFloat(debtPct.toFixed(1)),
      remainPct: parseFloat(remainPct.toFixed(1))
    };
  }, [result]);

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] font-sans text-[#32353C]">
      <Navbar />

      <main className="flex-grow pb-16">
        <section className="w-full bg-[#052316] text-white py-14 lg:py-16 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-2 font-sans">
              ARIZONA MORTGAGE TOOLS
            </span>
            <h1 className="text-white text-[34px] lg:text-[46px] font-playfair font-normal leading-[1.2] mb-4">
              Debt-to-Income (DTI) Calculator
            </h1>
            <p className="text-[#c8c8b8] text-[14.5px] lg:text-[16px] leading-[1.6] max-w-2xl mx-auto font-sans">
              Calculate your Front-End and Back-End DTI ratios to evaluate your mortgage qualification potential for Conventional, FHA, and VA loans.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 lg:px-8 mt-8">
          <div className="bg-white rounded-2xl border border-[#e0e0e0] shadow-sm p-6 lg:p-10 space-y-8">
            
            <div>
              <h3 className="text-[18px] font-semibold text-[#32353C] pb-3 mb-6 border-b border-[#f0f0f0]">
                Monthly Income
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="primaryIncome" className="text-[14px] font-medium text-[#32353C]">
                      Primary Job Income ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-52 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Your regular monthly gross income before taxes.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                      $
                    </span>
                    <input
                      type="text"
                      id="primaryIncome"
                      value={primaryIncomeStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setPrimaryIncomeStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="additionalIncome" className="text-[14px] font-medium text-[#32353C]">
                      Additional Income ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Rental income, part-time work, or bonuses (if applicable).
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                      $
                    </span>
                    <input
                      type="text"
                      id="additionalIncome"
                      value={additionalIncomeStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setAdditionalIncomeStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[18px] font-semibold text-[#32353C] pb-3 mb-6 border-b border-[#f0f0f0]">
                Monthly Housing Expenses (Front-End DTI)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="mortgagePayment" className="text-[14px] font-medium text-[#32353C]">
                      Mortgage Payment ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Principal and interest payment portion.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                      $
                    </span>
                    <input
                      type="text"
                      id="mortgagePayment"
                      value={mortgagePaymentStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setMortgagePaymentStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="propertyTaxes" className="text-[14px] font-medium text-[#32353C]">
                      Property Taxes ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-52 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Monthly portion of annual property taxes.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                      $
                    </span>
                    <input
                      type="text"
                      id="propertyTaxes"
                      value={propertyTaxesStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setPropertyTaxesStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="homeInsurance" className="text-[14px] font-medium text-[#32353C]">
                      Home Insurance ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-52 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Monthly home insurance premium cost.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                      $
                    </span>
                    <input
                      type="text"
                      id="homeInsurance"
                      value={homeInsuranceStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setHomeInsuranceStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="hoaFees" className="text-[14px] font-medium text-[#32353C]">
                      HOA Fees ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-52 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Monthly Homeowners Association fees (if applicable).
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                      $
                    </span>
                    <input
                      type="text"
                      id="hoaFees"
                      value={hoaFeesStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setHoaFeesStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[18px] font-semibold text-[#32353C] pb-3 mb-6 border-b border-[#f0f0f0]">
                Other Monthly Debts (Back-End DTI)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="carLoans" className="text-[14px] font-medium text-[#32353C]">
                      Car Loans ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Total monthly auto loan payments.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                      $
                    </span>
                    <input
                      type="text"
                      id="carLoans"
                      value={carLoansStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setCarLoansStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="creditCards" className="text-[14px] font-medium text-[#32353C]">
                      Credit Cards ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Minimum required monthly payments.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                      $
                    </span>
                    <input
                      type="text"
                      id="creditCards"
                      value={creditCardsStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setCreditCardsStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="studentLoans" className="text-[14px] font-medium text-[#32353C]">
                      Student Loans ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Monthly student loan payments.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                      $
                    </span>
                    <input
                      type="text"
                      id="studentLoans"
                      value={studentLoansStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setStudentLoansStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <label htmlFor="otherDebts" className="text-[14px] font-medium text-[#32353C]">
                      Other Debts ($)
                    </label>
                    <div className="relative group cursor-help">
                      <span className="w-4 h-4 rounded-full bg-[#4CAF50] text-white text-[11px] font-bold flex items-center justify-center">
                        ?
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-[#32353C] text-white text-[12px] p-2 rounded shadow-lg text-center z-20">
                        Personal loans, alimony, or child support.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] text-[14px] font-medium pointer-events-none">
                      $
                    </span>
                    <input
                      type="text"
                      id="otherDebts"
                      value={otherDebtsStr}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setOtherDebtsStr(val ? parseInt(val, 10).toLocaleString("en-US") : "");
                      }}
                      className="w-full h-[45px] pl-8 pr-3.5 bg-white border border-[#e0e0e0] rounded-md text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <section className="max-w-6xl mx-auto px-4 lg:px-8 mt-10 space-y-8 animate-fadeIn">
          <div className="bg-white rounded-2xl border border-[#e0e0e0] shadow-sm p-6 lg:p-10">
            
            <h2 className="text-[24px] font-semibold text-[#32353C] pb-4 mb-8 border-b-2 border-[#f0f0f0]">
              Analysis &amp; Recommendations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className={`p-6 rounded-xl border ${frontStatus.bgClass} flex flex-col justify-between`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[14px] font-semibold text-[#666]">Front-End DTI Ratio</span>
                    <span className={`px-3 py-1 rounded-full text-[12px] font-bold border ${frontStatus.badgeClass}`}>
                      {frontStatus.label}
                    </span>
                  </div>
                  <div className="text-[34px] font-bold text-[#32353C]">
                    {result.frontEndDti !== null ? `${result.frontEndDti}%` : "--%"}
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e0e0e0]/40 space-y-1">
                  <p className="text-[12.5px] font-medium text-[#32353C]">{frontStatus.desc}</p>
                  <p className="text-[12px] text-[#666]">
                    Housing Expenses ({fmtCurr(result.monthlyHousingExpenses)}) ÷ Gross Income ({fmtCurr(result.monthlyGrossIncome)}).
                  </p>
                </div>
              </div>

              <div className={`p-6 rounded-xl border ${backStatus.bgClass} flex flex-col justify-between`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[14px] font-semibold text-[#666]">Back-End DTI Ratio</span>
                    <span className={`px-3 py-1 rounded-full text-[12px] font-bold border ${backStatus.badgeClass}`}>
                      {backStatus.label}
                    </span>
                  </div>
                  <div className="text-[34px] font-bold text-[#32353C]">
                    {result.backEndDti !== null ? `${result.backEndDti}%` : "--%"}
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e0e0e0]/40 space-y-1">
                  <p className="text-[12.5px] font-medium text-[#32353C]">{backStatus.desc}</p>
                  <p className="text-[12px] text-[#666]">
                    Total Monthly Debts ({fmtCurr(result.totalMonthlyDebts)}) ÷ Gross Income ({fmtCurr(result.monthlyGrossIncome)}).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl p-6 mb-10">
              <h4 className="text-[15px] font-semibold text-[#32353C] mb-4">
                Monthly Income Allocation
              </h4>
              <div className="w-full h-6 bg-[#e0e0e0] rounded-full overflow-hidden flex">
                <div
                  style={{ width: `${chartData.housingPct}%` }}
                  className="bg-[#4CAF50] h-full flex items-center justify-center text-[10px] text-white font-bold"
                  title={`Housing: ${chartData.housingPct}%`}
                >
                  {chartData.housingPct > 10 && `${chartData.housingPct}%`}
                </div>
                <div
                  style={{ width: `${chartData.debtPct}%` }}
                  className="bg-[#FF9800] h-full flex items-center justify-center text-[10px] text-white font-bold"
                  title={`Other Debts: ${chartData.debtPct}%`}
                >
                  {chartData.debtPct > 8 && `${chartData.debtPct}%`}
                </div>
                <div
                  style={{ width: `${chartData.remainPct}%` }}
                  className="bg-[#90A4AE] h-full flex items-center justify-center text-[10px] text-white font-bold"
                  title={`Remaining: ${chartData.remainPct}%`}
                >
                  {chartData.remainPct > 10 && `${chartData.remainPct}%`}
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-[12.5px] mt-4 font-medium">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#4CAF50]" />
                  <span>Housing Expenses ({chartData.housingPct}%)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF9800]" />
                  <span>Other Debts ({chartData.debtPct}%)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#90A4AE]" />
                  <span>Remaining Income ({chartData.remainPct}%)</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[18px] font-semibold text-[#32353C] mb-6">
                Mortgage Program Qualification Potential
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`p-5 rounded-xl border-l-4 bg-white shadow-sm border border-[#e0e0e0] ${
                  (result.backEndDti || 0) <= 43 ? "border-l-[#4CAF50]" : "border-l-red-500"
                }`}>
                  <h4 className="text-[16px] font-bold text-[#32353C] mb-1">Conventional Loan</h4>
                  <p className="text-[13px] text-[#666] mb-3">
                    Standard guideline: Max 28% Front-End / 36–43% Back-End DTI.
                  </p>
                  <span className={`inline-block px-2.5 py-1 rounded text-[12px] font-bold ${
                    (result.backEndDti || 0) <= 43 ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                  }`}>
                    {(result.backEndDti || 0) <= 43 ? "✓ Likely Eligible" : "⚠️ High DTI for Conventional"}
                  </span>
                </div>

                <div className={`p-5 rounded-xl border-l-4 bg-white shadow-sm border border-[#e0e0e0] ${
                  (result.backEndDti || 0) <= 50 ? "border-l-[#4CAF50]" : "border-l-red-500"
                }`}>
                  <h4 className="text-[16px] font-bold text-[#32353C] mb-1">FHA Loan</h4>
                  <p className="text-[13px] text-[#666] mb-3">
                    Standard guideline: Max 31% Front-End / up to 50% Back-End with approval.
                  </p>
                  <span className={`inline-block px-2.5 py-1 rounded text-[12px] font-bold ${
                    (result.backEndDti || 0) <= 50 ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                  }`}>
                    {(result.backEndDti || 0) <= 50 ? "✓ Likely Eligible" : "⚠️ Exceeds 50% Limit"}
                  </span>
                </div>

                <div className={`p-5 rounded-xl border-l-4 bg-white shadow-sm border border-[#e0e0e0] ${
                  (result.backEndDti || 0) <= 50 ? "border-l-[#4CAF50]" : "border-l-red-500"
                }`}>
                  <h4 className="text-[16px] font-bold text-[#32353C] mb-1">VA Loan</h4>
                  <p className="text-[13px] text-[#666] mb-3">
                    Benchmark guideline: 41% Back-End DTI (flexible with strong residual income).
                  </p>
                  <span className={`inline-block px-2.5 py-1 rounded text-[12px] font-bold ${
                    (result.backEndDti || 0) <= 50 ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                  }`}>
                    {(result.backEndDti || 0) <= 50 ? "✓ Flexible Qualification" : "⚠️ High DTI"}
                  </span>
                </div>
              </div>

              {result.excessDebt > 0 && (
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl text-[13.5px]">
                  💡 <strong>Tip:</strong> Reducing your monthly debts by <strong>{fmtCurr(result.excessDebt)}</strong> will bring your Back-End DTI down to 43% or lower.
                </div>
              )}
            </div>

            {/* Methodology & DTI Guide Section */}
            <div className="mt-12 bg-[#f8f9fa] border border-[#e0e0e0] rounded-2xl p-6 lg:p-8 space-y-4 text-[13.5px] leading-relaxed text-[#555]">
              <h4 className="text-[16px] font-bold text-[#32353C] border-b border-[#e0e0e0] pb-2">
                Understanding Debt-to-Income (DTI) Ratios
              </h4>
              <p>
                <strong>What is DTI?</strong> Your Debt-to-Income (DTI) ratio compares your total monthly recurring debt obligations to your monthly gross (before tax) income. Lenders use DTI to measure your ability to manage monthly payments and repay borrowed money.
              </p>
              <div className="space-y-2 pt-1">
                <p><strong>• Front-End Ratio (Housing DTI):</strong> The percentage of gross monthly income that goes toward housing expenses (principal, interest, property taxes, homeowners insurance, and HOA dues).</p>
                <p><strong>• Back-End Ratio (Total DTI):</strong> The percentage of gross monthly income that goes toward all recurring monthly debts (housing plus car loans, minimum credit card payments, student loans, and personal loans).</p>
              </div>
            </div>

            <div className="mt-12 bg-[#052316] rounded-2xl p-6 lg:p-8 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-[20px] font-bold mb-1 font-playfair">Want expert assistance with DTI qualification?</h4>
                <p className="text-[#c8c8b8] text-[14px]">
                  Our loan officers can review your complete income &amp; debt profile to help you qualify.
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
