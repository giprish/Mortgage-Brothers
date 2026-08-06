"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import CalcSelect from "../CalcSelect";

const AZ_COUNTIES = [
  { value: "apache", label: "Apache County", note: "St. Johns" },
  { value: "cochise", label: "Cochise County", note: "Bisbee, Tombstone" },
  { value: "coconino", label: "Coconino County", note: "Flagstaff" },
  { value: "gila", label: "Gila County", note: "Globe, Miami" },
  { value: "graham", label: "Graham County", note: "Safford" },
  { value: "greenlee", label: "Greenlee County", note: "Clifton" },
  { value: "lapaz", label: "La Paz County", note: "Quartzsite" },
  { value: "maricopa", label: "Maricopa County", note: "Phoenix, Mesa, Chandler, Scottsdale, Tempe" },
  { value: "mohave", label: "Mohave County", note: "Kingman, Lake Havasu City, Bullhead City" },
  { value: "navajo", label: "Navajo County", note: "Holbrook, Show Low" },
  { value: "pima", label: "Pima County", note: "Tucson, Oro Valley" },
  { value: "pinal", label: "Pinal County", note: "Casa Grande, Apache Junction" },
  { value: "santacruz", label: "Santa Cruz County", note: "Nogales" },
  { value: "yavapai", label: "Yavapai County", note: "Prescott, Sedona" },
  { value: "yuma", label: "Yuma County", note: "Yuma, Somerton" },
];

const LOAN_TERMS = [30, 20, 15, 10];

const fmtCurrency = (val: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(val) ? val : 0);

const HomeCalculator = () => {
  const [homePrice, setHomePrice] = useState(425000);
  const [downPaymentPct, setDownPaymentPct] = useState(10);
  const [creditScore, setCreditScore] = useState("740-759");
  const [termYears, setTermYears] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [county, setCounty] = useState("maricopa");
  const [annualTaxes, setAnnualTaxes] = useState(3200);
  const [annualInsurance, setAnnualInsurance] = useState(1400);
  const [hoa, setHoa] = useState(0);

  const downPaymentAmount = useMemo(
    () => Math.round((homePrice * downPaymentPct) / 100),
    [homePrice, downPaymentPct]
  );

  const handleDownPaymentDollar = (val: number) => {
    if (homePrice > 0) {
      setDownPaymentPct(Math.min(100, Math.max(0, (val / homePrice) * 100)));
    }
  };

  const results = useMemo(() => {
    const loanAmount = Math.max(homePrice - downPaymentAmount, 0);
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = termYears * 12;

    let principalAndInterest = 0;
    if (loanAmount > 0 && monthlyRate > 0) {
      principalAndInterest =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
        (Math.pow(1 + monthlyRate, numPayments) - 1);
    } else if (loanAmount > 0) {
      principalAndInterest = loanAmount / numPayments;
    }

    const monthlyTax = annualTaxes / 12;
    const monthlyInsurance = annualInsurance / 12;

    // PMI applies when down payment is below 20%, roughly 0.5%-1% annually of loan amount
    // depending on credit tier — simplified estimate.
    const ltv = homePrice > 0 ? loanAmount / homePrice : 0;
    let pmiRate = 0;
    if (ltv > 0.8) {
      if (creditScore === "760+") pmiRate = 0.4;
      else if (creditScore === "740-759") pmiRate = 0.55;
      else if (creditScore === "720-739") pmiRate = 0.7;
      else if (creditScore === "700-719") pmiRate = 0.85;
      else if (creditScore === "680-699") pmiRate = 1.0;
      else pmiRate = 1.25;
    }
    const monthlyPmi = (loanAmount * (pmiRate / 100)) / 12;

    const total = principalAndInterest + monthlyTax + monthlyInsurance + monthlyPmi + hoa;

    return {
      loanAmount,
      principalAndInterest,
      monthlyTax,
      monthlyInsurance,
      monthlyPmi,
      total,
    };
  }, [homePrice, downPaymentAmount, interestRate, termYears, annualTaxes, annualInsurance, hoa, creditScore]);

  const selectedCounty = AZ_COUNTIES.find((c) => c.value === county);

  return (
    <section className="w-full bg-[#fcf9f3] py-14 sm:py-20 lg:py-24 border-t border-[#e8e0d0]/40" id="calculator">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <p className="text-[#8c6f36] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
            Estimate Your Payment
          </p>
          <h2
            className="font-playfair text-[#08271B] text-[28px] lg:text-[40px] font-normal leading-tight mb-4"
            
          >
            Plan Your Arizona Mortgage with Confidence
          </h2>
          <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
            Wondering how much home you can afford in Scottsdale? Use our mortgage calculator to
            estimate monthly payments and find a loan that works for you.
          </p>
        </div>

        <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Inputs */}
            <div className="lg:col-span-3 p-4 sm:p-6 lg:p-10 min-w-0">
              <h3 className="text-[#08271B] text-[13px] font-bold uppercase tracking-wider mb-5 pb-3 border-b border-[#e8e0d0]">
                Loan Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
                <div>
                  <label htmlFor="home-price" className="block text-[#3a443a] text-[13.5px] font-medium mb-1.5">
                    Home Price ($)
                  </label>
                  <input
                    id="home-price"
                    type="number"
                    inputMode="decimal"
                    value={homePrice}
                    onChange={(e) => setHomePrice(Number(e.target.value) || 0)}
                    className="w-full h-[44px] px-3.5 rounded-lg border border-[#e0d8c8] text-[16px] sm:text-[14.5px] font-medium text-[#08271B] focus:outline-none focus:border-[#3fb364]"
                  />
                </div>

                <div>
                  <label htmlFor="down-payment-amount" className="block text-[#3a443a] text-[13.5px] font-medium mb-1.5">
                    Down Payment
                  </label>
                  <div className="flex gap-2 min-w-0">
                    <div className="relative flex-1 min-w-0">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5f6f54] text-[13px]">$</span>
                      <input
                        id="down-payment-amount"
                        type="number"
                        inputMode="decimal"
                        value={downPaymentAmount}
                        onChange={(e) => handleDownPaymentDollar(Number(e.target.value) || 0)}
                        className="w-full h-[44px] pl-6 pr-2 rounded-lg border border-[#e0d8c8] text-[16px] sm:text-[14.5px] font-medium text-[#08271B] focus:outline-none focus:border-[#3fb364]"
                      />
                    </div>
                    <div className="relative w-[72px] sm:w-[90px] shrink-0">
                      <input
                        id="down-payment-percent"
                        aria-label="Down payment percent"
                        type="number"
                        inputMode="decimal"
                        value={Math.round(downPaymentPct * 10) / 10}
                        onChange={(e) => setDownPaymentPct(Number(e.target.value) || 0)}
                        className="w-full h-[44px] pl-2.5 pr-6 rounded-lg border border-[#e0d8c8] text-[16px] sm:text-[14.5px] font-medium text-[#08271B] focus:outline-none focus:border-[#3fb364]"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#5f6f54] text-[13px]">%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="credit-score" className="block text-[#3a443a] text-[13.5px] font-medium mb-1.5">
                    Credit Score
                  </label>
                  <CalcSelect
                    value={creditScore}
                    onChange={setCreditScore}
                    id="credit-score"
                    ariaLabel="Credit Score"
                    className="h-[44px] px-3 rounded-lg border border-[#e0d8c8] text-[16px] sm:text-[14.5px] font-medium text-[#08271B] focus:outline-none focus:border-[#3fb364]"
                    options={[
                      { value: "760+", label: "760+" },
                      { value: "740-759", label: "740 - 759" },
                      { value: "720-739", label: "720 - 739" },
                      { value: "700-719", label: "700 - 719" },
                      { value: "680-699", label: "680 - 699" },
                      { value: "660-679", label: "660 - 679" },
                      { value: "below-660", label: "Below 660" },
                    ]}
                  />
                </div>

                <div>
                  <label htmlFor="loan-term-years" className="block text-[#3a443a] text-[13.5px] font-medium mb-1.5">
                    Loan Term (Years)
                  </label>
                  <CalcSelect
                    value={termYears}
                    onChange={(next) => setTermYears(Number(next))}
                    id="loan-term-years"
                    ariaLabel="Loan Term (Years)"
                    className="h-[44px] px-3 rounded-lg border border-[#e0d8c8] text-[16px] sm:text-[14.5px] font-medium text-[#08271B] focus:outline-none focus:border-[#3fb364]"
                    options={LOAN_TERMS.map((t) => ({ value: t, label: `${t} Years` }))}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="interest-rate" className="block text-[#3a443a] text-[13.5px] font-medium mb-1.5">
                    Interest Rate (%)
                  </label>
                  <input
                    id="interest-rate"
                    type="number"
                    step="0.01"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value) || 0)}
                    className="w-full h-[44px] px-3.5 rounded-lg border border-[#e0d8c8] text-[16px] sm:text-[14.5px] font-medium text-[#08271B] focus:outline-none focus:border-[#3fb364]"
                  />
                </div>
              </div>

              <h3 className="text-[#08271B] text-[13px] font-bold uppercase tracking-wider mb-5 pb-3 border-b border-[#e8e0d0]">
                Additional Costs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label htmlFor="county" className="block text-[#3a443a] text-[13.5px] font-medium mb-1.5">
                    County (Arizona)
                  </label>
                  <CalcSelect
                    value={county}
                    onChange={setCounty}
                    id="county"
                    ariaLabel="County (Arizona)"
                    className="h-[44px] px-3 rounded-lg border border-[#e0d8c8] text-[16px] sm:text-[14.5px] font-medium text-[#08271B] focus:outline-none focus:border-[#3fb364]"
                    options={AZ_COUNTIES.map((c) => ({ value: c.value, label: c.label }))}
                  />
                  {selectedCounty && (
                    <p className="text-[#5f6f54] text-[12px] mt-1.5">{selectedCounty.note}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="annual-property-taxes" className="block text-[#3a443a] text-[13.5px] font-medium mb-1.5">
                    Annual Property Taxes ($)
                  </label>
                  <input
                    id="annual-property-taxes"
                    type="number"
                    value={annualTaxes}
                    onChange={(e) => setAnnualTaxes(Number(e.target.value) || 0)}
                    className="w-full h-[44px] px-3.5 rounded-lg border border-[#e0d8c8] text-[16px] sm:text-[14.5px] font-medium text-[#08271B] focus:outline-none focus:border-[#3fb364]"
                  />
                </div>

                <div>
                  <label htmlFor="annual-home-insurance" className="block text-[#3a443a] text-[13.5px] font-medium mb-1.5">
                    Annual Home Insurance ($)
                  </label>
                  <input
                    id="annual-home-insurance"
                    type="number"
                    value={annualInsurance}
                    onChange={(e) => setAnnualInsurance(Number(e.target.value) || 0)}
                    className="w-full h-[44px] px-3.5 rounded-lg border border-[#e0d8c8] text-[16px] sm:text-[14.5px] font-medium text-[#08271B] focus:outline-none focus:border-[#3fb364]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="monthly-hoa-fees" className="block text-[#3a443a] text-[13.5px] font-medium mb-1.5">
                    Monthly HOA Fees ($)
                  </label>
                  <input
                    id="monthly-hoa-fees"
                    type="number"
                    value={hoa}
                    onChange={(e) => setHoa(Number(e.target.value) || 0)}
                    className="w-full h-[44px] px-3.5 rounded-lg border border-[#e0d8c8] text-[16px] sm:text-[14.5px] font-medium text-[#08271B] focus:outline-none focus:border-[#3fb364]"
                  />
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-2 bg-[#08271B] p-5 sm:p-8 lg:p-10 flex flex-col min-w-0">
              <h3 className="text-white text-[13px] font-bold uppercase tracking-wider mb-6">
                Your Mortgage Summary
              </h3>

              <div className="mb-8">
                <p className="text-[#d6decf] text-[12.5px] font-medium mb-1">Monthly Payment</p>
                <p
                  className="text-white text-[34px] sm:text-[42px] lg:text-[48px] font-semibold leading-none break-all"
                  
                >
                  {fmtCurrency(results.total)}
                </p>
              </div>

              <div className="flex flex-col gap-3.5 mb-8">
                <div className="flex items-center justify-between text-[13.5px] pb-3 border-b border-[#1a3a1a]">
                  <span className="text-[#c8c8b8]">Principal &amp; Interest</span>
                  <span className="text-white font-semibold">{fmtCurrency(results.principalAndInterest)}</span>
                </div>
                <div className="flex items-center justify-between text-[13.5px] pb-3 border-b border-[#1a3a1a]">
                  <span className="text-[#c8c8b8]">Property Tax</span>
                  <span className="text-white font-semibold">{fmtCurrency(results.monthlyTax)}</span>
                </div>
                <div className="flex items-center justify-between text-[13.5px] pb-3 border-b border-[#1a3a1a]">
                  <span className="text-[#c8c8b8]">Home Insurance</span>
                  <span className="text-white font-semibold">{fmtCurrency(results.monthlyInsurance)}</span>
                </div>
                <div className="flex items-center justify-between text-[13.5px] pb-3 border-b border-[#1a3a1a]">
                  <span className="text-[#c8c8b8]">PMI</span>
                  <span className="text-white font-semibold">{fmtCurrency(results.monthlyPmi)}</span>
                </div>
                <div className="flex items-center justify-between text-[13.5px]">
                  <span className="text-[#c8c8b8]">HOA Fees</span>
                  <span className="text-white font-semibold">{fmtCurrency(hoa)}</span>
                </div>
              </div>

              <p className="text-[#d6decf] text-[12px] leading-relaxed mb-6">
                Loan amount: {fmtCurrency(results.loanAmount)}. Estimate only — actual rate, PMI,
                and closing costs depend on full underwriting.
              </p>

              <Link
                href="/basic-mortgage-payment-calculator/"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[14.5px] font-semibold px-6 py-3.5 rounded-full transition-all duration-200"
              >
                Personalize Your Estimate
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCalculator;