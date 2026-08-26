"use client";

import { faqs as pageFaqs } from "./faqs";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import StatsBanner from "../component/StatsBanner";
import LoanProgramHero from "../component/LoanProgramHero";
import HeroFeatureStrip from "../component/HeroFeatureStrip";

const featureStrip = [
  "VA Loans Offer Zero Down Payment for Arizona Veterans",
  "Lower Rates, No PMI, Flexible Requirements",
  "Up to $2 million VA Loan with 0% down",
];

export default function VaLoansArizonaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = pageFaqs;

  const highlights = [
    {
      title: "No Down Payment Required",
      desc: "Purchase a home with 0% down, allowing you to conserve your savings for other expenses."
    },
    {
      title: "Low Interest Rates",
      desc: "Enjoy rates typically 0.5% lower than conventional loans, reducing your monthly payments."
    },
    {
      title: "No Private Mortgage Insurance",
      desc: "Save money each month by avoiding the PMI required on most low-down-payment mortgages."
    },
    {
      title: "Flexible Credit Requirements",
      desc: "Qualify with a minimum credit score of 620, making homeownership possible for more veterans."
    },
    {
      title: "Government Guaranteed",
      desc: "Backed by the U.S. Department of Veterans Affairs, providing lenders with added security."
    },
    {
      title: "Available for Various Property Types",
      desc: "Use VA loans for single-family homes, condos, and even multi-unit properties (up to four units)."
    }
  ];

  const whoQualifies = [
    {
      title: "Veterans",
      desc: "Those who have served in any branch of the U.S. armed forces and were discharged honorably."
    },
    {
      title: "Active Duty Service Members",
      desc: "Current members of the military who have served at least 90 continuous days."
    },
    {
      title: "National Guard and Reserve Members",
      desc: "Individuals with at least 6 years of service or 90 days of active duty during wartime."
    },
    {
      title: "Surviving Spouses",
      desc: "Unmarried spouses of veterans who died or became disabled due to military service."
    },
    {
      title: "Cadets and Midshipmen",
      desc: "Active individuals at U.S. military academies may also be eligible for VA loans."
    },
    {
      title: "Other Service Members",
      desc: "Those who've served in the U.S. Public Health Service or U.S. Merchant Marines may qualify."
    }
  ];

  const serviceRequirements = [
    {
      status: "Veteran",
      era: "Post-WWII",
      dates: "7/26/1947 - 6/26/1950",
      criteria: "181 continuous days of service"
    },
    {
      status: "Veteran",
      era: "Korean War",
      dates: "6/27/1950 - 1/31/1955",
      criteria: "90 total days of service"
    },
    {
      status: "Veteran",
      era: "Post-Korean War",
      dates: "2/1/1955 - 8/4/1964",
      criteria: "181 continuous days of service"
    },
    {
      status: "Veteran",
      era: "Vietnam War",
      dates: "8/5/1964 - 5/7/1975",
      criteria: "90 total days of service"
    },
    {
      status: "Veteran",
      era: "Post-Vietnam",
      dates: "5/8/1975 - 9/7/1980",
      criteria: "181 continuous days of service"
    },
    {
      status: "Veteran",
      era: "24 Month Rule",
      dates: "9/8/1980 - 8/1/1990 (10/17/1980 for officers)",
      criteria: "24 continuous months, OR the full period called to active duty (minimum 181 days)"
    },
    {
      status: "Veteran",
      era: "Gulf War",
      dates: "8/2/1990 - present",
      criteria: "24 continuous months, OR the full period called to active duty (minimum 90 days)"
    },
    {
      status: "Currently On Active Duty",
      era: "Any",
      dates: "Any",
      criteria: "90 continuous days"
    },
    {
      status: "National Guard & Reserve Member",
      era: "Gulf War",
      dates: "8/2/1990 - present",
      criteria: "90 days of active service or 6 years of service"
    }
  ];

  const loanTypes = [
    {
      title: "Purchase Loans",
      desc: "Fixed-rate mortgages with 15-year or 30-year terms for buying a primary residence."
    },
    {
      title: "Interest Rate Reduction Refinance Loan (IRRRL)",
      desc: 'Also known as a "Streamline Refinance," it allows you to refinance an existing VA loan with minimal paperwork.'
    },
    {
      title: "Cash-Out Refinance",
      desc: "Refinance your current mortgage (VA or non-VA) and take out cash up to 100% of your home's equity."
    },
    {
      title: "VA Jumbo Loans",
      desc: "Financing for homes exceeding the standard VA loan limit of $832,750 (2026), with a small down payment required."
    },
    {
      title: "Energy Efficient Mortgages (EEM)",
      desc: "Additional funds for energy-saving home improvements, added to your primary VA loan."
    },
    {
      title: "Native American Direct Loan (NADL)",
      desc: "Specialized loans for eligible Native American veterans to buy, build, or improve homes on Federal Trust Land."
    }
  ];

  const costs = [
    {
      title: "VA Funding Fee",
      desc: "A one-time charge ranging from 0.5% to 3.3% of the loan amount, which can be financed into the loan."
    },
    {
      title: "Origination Fee",
      desc: "Lender charges for processing the loan, capped at 1% of the total loan amount by VA regulations."
    },
    {
      title: "Appraisal Fee",
      desc: "Required assessment of the property's value, typically costing between $500 and $800."
    },
    {
      title: "Title Insurance",
      desc: "Protects against issues with the property's title, usually 0.5% to 1% of the loan amount."
    },
    {
      title: "Credit Report Fee",
      desc: "Covers the cost of pulling your credit history, generally around $30 to $50."
    },
    {
      title: "Recording Fee",
      desc: "Charged by local government for recording the mortgage, usually a few hundred dollars."
    }
  ];

  const fundingFees = [
    { type: "Purchase", down: "0%", first: "2.15%", subsequent: "3.3%" },
    { type: "Purchase", down: "5%", first: "1.5%", subsequent: "1.5%" },
    { type: "Purchase", down: "10%", first: "1.25%", subsequent: "1.25%" },
    { type: "VA Cash Out Refinance", down: "N/A", first: "3.3%", subsequent: "3.3%" },
    { type: "IRRRL Streamline Refinance", down: "N/A", first: "0.50%", subsequent: "0.50%" }
  ];

  const processSteps = [
    {
      title: "Obtain Your Certificate of Eligibility (COE)",
      desc: "Request your COE online through the VA eBenefits portal or ask the Mortgage Brothers team to assist you."
    },
    {
      title: "Gather Necessary Documents",
      desc: "Collect your DD214 (for veterans) or statement of service (for active duty), along with standard financial documents."
    },
    {
      title: "Choose a VA-Approved Lender",
      desc: "Select a lender experienced with VA loans, like Mortgage Brothers, to guide you through the process efficiently."
    },
    {
      title: "Complete Loan Application",
      desc: "Provide detailed information about your income, assets, and the property you wish to purchase."
    },
    {
      title: "Get Pre-Approved",
      desc: "Receive a pre-approval letter to strengthen your position when making offers on homes."
    },
    {
      title: "Find Your Dream Home",
      desc: "Work with a real estate agent to locate a property that meets VA loan requirements and your personal needs."
    }
  ];

  const testimonials = [
    {
      quote:
        "Eddie and his team are fantastic to work with! They are efficient, friendly and very professional. They communicate to all parties in the transaction, making it a very smooth transaction every time.",
      name: "Elizabeth Todd, H2 Realty, Phoenix, Arizona"
    },
    {
      quote:
        "Eddie Knoell was a pleasure to work with. He got me a great rate with a quick approval and funding. Eddie was responsive to both phone calls and emails. I highly recommend him without reservation.",
      name: "John Fynmore, Phoenix, Arizona"
    },
    {
      quote:
        "I met Eddie Knoell in 2012 through a client. He communicates very well through every step of the process. He closes every deal and is patient with questions and great with every client.",
      name: "Nancy Perry, Solutions Real Estate, Avondale, Arizona"
    },
    {
      quote:
        "Working with Eddie was an absolute pleasure. He has a very high level of integrity and the knowledge to back it up. Without Eddie working diligently to overcome the challenges, I could not have closed this deal.",
      name: "Michele Bonner, Tempe, Arizona"
    },
    {
      quote: "Eddie is an efficient lender and has total follow up. He does a great job and has smooth closings.",
      name: "Bob Daughtery, Mesa, Arizona"
    }
  ];

  const whyUs = [
    {
      title: "VA Loan Specialists",
      desc: "Our team has extensive experience with VA loans and understands the unique requirements and benefits available to veterans."
    },
    {
      title: "Competitive Rates",
      desc: "We offer some of the lowest VA loan rates in Arizona, typically 0.5% below conventional mortgage rates."
    },
    {
      title: "Streamlined Process",
      desc: "We help you obtain your Certificate of Eligibility (COE) and guide you through every step of the application process."
    },
    {
      title: "Local Expertise",
      desc: "With deep knowledge of the Arizona market, we understand local property requirements and VA loan limits."
    },
    {
      title: "Dedicated Support",
      desc: "Our team provides personalized attention and expert guidance throughout your entire VA loan journey."
    }
  ];

  const relatedLoans = [
    { href: "/conventional-home-loans-arizona/", label: "Conventional Home Loans" },
    { href: "/conventional-vs-fha-loans-arizona/", label: "Conventional vs FHA Loans" },
    { href: "/fha-home-loans-arizona/", label: "FHA Home Loans" },
    { href: "/fha-streamline-refinance-arizona/", label: "FHA Streamline Refinance" },
    { href: "/first-time-home-buyer-arizona-guide/", label: "First Time Home Buyer" },
    { href: "/reverse-mortgage-arizona/", label: "Reverse Mortgage" },
    { href: "/reverse-mortgage-home-purchase-arizona/", label: "Reverse Mortgage for a Home Purchase" },
    { href: "/private-money-lender-arizona/", label: "Private Money Lender" },
    { href: "/refinancing-arizona/", label: "Refinancing" },
    { href: "/jumbo-loans-arizona/", label: "Jumbo Loans" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        <LoanProgramHero
          title="VA Loans in Arizona"
          subtitle="Exclusive Benefits for Veterans and Active Duty Service Members"
        />

        <HeroFeatureStrip items={featureStrip} />


        {/* OVERVIEW */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase">
                UNDERSTANDING VA LOANS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair leading-tight">
                Understanding VA Loans: Your Path to Homeownership
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                VA loans are powerful tools for veterans, active-duty service members, and eligible surviving spouses to achieve homeownership. These government-backed mortgages offer unique benefits that make buying a home more accessible and affordable.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Designed to honor military service, VA loans provide exceptional advantages over conventional financing options. With features like no down payment requirements and lower interest rates, these loans can significantly reduce financial barriers to homeownership.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                From reduced closing costs to no private mortgage insurance, the benefits of VA loans can translate into thousands of dollars saved over the life of your mortgage. Let&apos;s explore the key features that make VA loans an unparalleled opportunity:
              </p>
              <Link
                href="/#get-pre-approved"
                className="inline-block bg-[#052316] hover:bg-[#0a3a24] text-white font-bold px-7 py-3.5 rounded-full transition-all shadow"
              >
                Get Your Free VA Loan Consultation →
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {highlights.map((h, idx) => (
                <div
                  key={h.title}
                  className="bg-[#fcf9f3] border border-[#e0e0e0] hover:border-[#3fb364] rounded-2xl p-5 shadow-sm transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center font-bold text-[14px] mb-3">
                    {idx + 1}
                  </div>
                  <h3 className="text-[15px] font-bold text-[#052316] mb-2 font-playfair">{h.title}</h3>
                  <p className="text-[#4e5b4e] text-[13.5px] leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <StatsBanner
          stats={[
            { value: "13,119", label: "VA Loans in Arizona" },
            { value: "$0", label: "Monthly Mortgage Insurance" },
            { value: "$0", label: "Disabled Vet Funding Fee" },
            { value: "$2M", label: "VA Loans Up To" },
          ]}
        />

        {/* WHO QUALIFIES */}
        <section className="loan-section bg-[#fcf9f3] !pt-8 sm:!pt-10 lg:!pt-12">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                ELIGIBILITY
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Who Qualifies for a VA Loan?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto mt-4">
                VA loans are designed to honor the service of our military personnel. Eligibility extends to various groups within the armed forces community. Here&apos;s a breakdown of who may qualify:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {whoQualifies.map((item, idx) => (
                <div
                  key={item.title}
                  className="bg-white border border-[#e0e0e0] hover:border-[#3fb364] rounded-2xl p-6 shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center font-bold text-[18px] mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-[17px] font-bold text-[#052316] mb-2 font-playfair">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-[#052316] text-[22px] lg:text-[26px] font-bold font-playfair">
                  VA Loan Eligibility: Minimum Service Requirements
                </h3>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed max-w-3xl mx-auto mt-3">
                  To qualify for a VA home loan, veterans and active-duty service members must meet certain minimum service requirements based on when and how they served. The chart below outlines the required length of service for different military eras, helping you quickly determine if you may be eligible for VA loan benefits.
                </p>
              </div>

              <div className="overflow-x-auto border border-[#e0e0e0] rounded-2xl shadow-sm">
                <table className="w-full text-left text-[13px] lg:text-[14px] border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-[#052316] text-white">
                      <th className="py-4 px-4 font-semibold">Status</th>
                      <th className="py-4 px-4 font-semibold">Service Era</th>
                      <th className="py-4 px-4 font-semibold">Qualifying Service Dates</th>
                      <th className="py-4 px-4 font-semibold">Minimum Service Criteria</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e0e0e0] bg-white">
                    {serviceRequirements.map((row, idx) => (
                      <tr key={`${row.era}-${idx}`} className={idx % 2 === 1 ? "bg-[#fcf9f3]" : ""}>
                        <td className="py-3.5 px-4 font-bold text-[#052316]">{row.status}</td>
                        <td className="py-3.5 px-4 text-[#4e5b4e]">{row.era}</td>
                        <td className="py-3.5 px-4 text-[#4e5b4e]">{row.dates}</td>
                        <td className="py-3.5 px-4 text-[#4e5b4e]">{row.criteria}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm">
                <h3 className="text-[18px] font-bold text-[#052316] mb-3 font-playfair">
                  National Guard &amp; Reserve Members
                </h3>
                <p className="text-[#4e5b4e] text-[14px] leading-relaxed mb-3">
                  Qualify with 6+ years of service, plus one of the following:
                </p>
                <ul className="space-y-2 text-[14px] text-[#4e5b4e]">
                  {[
                    "Honorable discharge",
                    "Placement on retired list",
                    "Transfer to Standby/Ready Reserve after honorable service",
                    "Continued service in Selected Reserve"
                  ].map((li) => (
                    <li key={li} className="flex items-center gap-2">
                      <span className="text-[#3fb364] font-bold">✓</span>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm">
                <h3 className="text-[18px] font-bold text-[#052316] mb-3 font-playfair">Other Eligible Individuals</h3>
                <p className="text-[#4e5b4e] text-[14px] leading-relaxed mb-3">
                  Qualify if you meet one of the following criteria:
                </p>
                <ul className="space-y-2 text-[14px] text-[#4e5b4e]">
                  {[
                    "Surviving spouse of veteran who died/became disabled due to service",
                    "POW/MIA spouse",
                    "U.S. Public Health Service or Merchant Marines personnel",
                    "Active cadet/midshipman at U.S. military academy"
                  ].map((li) => (
                    <li key={li} className="flex items-center gap-2">
                      <span className="text-[#3fb364] font-bold">✓</span>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-[#4e5b4e] text-[15px] leading-relaxed text-center max-w-3xl mx-auto">
              To verify your eligibility, you&apos;ll need to obtain a Certificate of Eligibility (COE) from the VA. The Mortgage Brothers team can assist you in acquiring this important document during the loan approval process.
            </p>
            <div className="loan-btn-wrap">
              <Link
                href="/#get-pre-approved"
                className="bg-[#3fb364] hover:bg-[#359854] text-white font-bold text-[16px] px-8 py-4 rounded-full transition-all shadow-md inline-block"
              >
                Schedule Your Free VA Loan Consultation! →
              </Link>
            </div>
          </div>
        </section>

        {/* CREDIT QUIZ */}
        <section className="loan-section bg-white">
          <div className="max-w-3xl mx-auto bg-[#052316] text-white rounded-3xl p-8 lg:p-10 text-center space-y-4 shadow-lg">
            <h3 className="text-[22px] lg:text-[26px] font-bold font-playfair">
              Veterans: Is Your Credit Ready for a VA Loan?
            </h3>
            <p className="text-[#c8c8b8] text-[15px] leading-relaxed">
              VA loans offer flexible credit requirements for service members, but knowing your score still matters. Discover if your credit score is VA-loan ready.
            </p>
            <Link
              href="/credit-score-quiz/"
              className="inline-block border border-white/40 hover:border-white text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:bg-white/10"
            >
              Take The Quiz
            </Link>
          </div>
        </section>

        {/* LOAN OPTIONS */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                LOAN OPTIONS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Explore Your VA Loan Options
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto mt-4">
                The VA loan program offers various types of loans to meet the diverse needs of veterans, active-duty service members, and eligible surviving spouses. Each option is designed to provide affordable homeownership or refinancing opportunities. Let&apos;s explore the available VA loan types:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {loanTypes.map((item, idx) => (
                <div key={item.title} className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center font-bold text-[18px] mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-[17px] font-bold text-[#052316] mb-2 font-playfair">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="loan-btn-wrap">
              <Link
                href="/#get-pre-approved"
                className="bg-[#3fb364] hover:bg-[#359854] text-white font-bold text-[16px] px-8 py-4 rounded-full transition-all shadow-md inline-block"
              >
                Explore Your VA Loan Options Now! →
              </Link>
            </div>
          </div>
        </section>

        {/* COSTS */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                COSTS &amp; FEES
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Understanding VA Loan Costs: What to Expect
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto mt-4">
                While VA loans offer many benefits, there are still some costs associated with obtaining one. Here&apos;s a breakdown of the key expenses you should be prepared for when applying for a VA loan:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {costs.map((c) => (
                <div key={c.title} className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-6 shadow-sm">
                  <h3 className="text-[16px] font-bold text-[#052316] mb-2 font-playfair">{c.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-7 text-left space-y-4">
              <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
                These costs can vary depending on your location, lender, and specific loan details. Remember, while some fees are unavoidable, the VA limits what veterans can be charged. Additional cost-saving benefits include:
              </p>
              <ul className="space-y-2 text-[14px] text-[#4e5b4e]">
                {[
                  "Sellers can contribute up to 4% of the home's value towards closing costs",
                  "No limit on discount points that sellers can pay",
                  "VA buyers pay no commissions or brokerage fees",
                  "No prepayment penalties if you pay off your loan early",
                  "No mortgage insurance premiums required"
                ].map((li) => (
                  <li key={li} className="flex items-center gap-2">
                    <span className="text-[#3fb364] font-bold">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-[#052316] text-[22px] lg:text-[26px] font-bold font-playfair">
                  VA Funding Fee Rates
                </h3>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed max-w-3xl mx-auto mt-3">
                  The VA Funding Fee is a one-time payment required for most VA home loans. This fee helps to lower the cost of the loan for U.S. taxpayers since the VA home loan program doesn&apos;t require down payments or monthly mortgage insurance. The amount of the fee depends on your type of service, the amount of your down payment, and whether it&apos;s your first time using a VA-backed loan. Below is the current VA Funding Fee schedule, effective as of April 7, 2023:
                </p>
              </div>

              <div className="overflow-x-auto border border-[#e0e0e0] rounded-2xl shadow-sm">
                <table className="w-full text-left text-[14px] border-collapse">
                  <thead>
                    <tr className="bg-[#052316] text-white">
                      <th className="py-4 px-5 font-semibold">Type of Loan</th>
                      <th className="py-4 px-5 font-semibold">Down Payment</th>
                      <th className="py-4 px-5 font-semibold">Funding Fee % First Time Use</th>
                      <th className="py-4 px-5 font-semibold">Funding Fee % Subsequent Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e0e0e0] bg-white">
                    {fundingFees.map((row, idx) => (
                      <tr key={`${row.type}-${row.down}`} className={idx % 2 === 1 ? "bg-[#fcf9f3]" : ""}>
                        <td className="py-3.5 px-5 font-bold text-[#052316]">{row.type}</td>
                        <td className="py-3.5 px-5 text-[#4e5b4e]">{row.down}</td>
                        <td className="py-3.5 px-5 text-[#3fb364] font-semibold">{row.first}</td>
                        <td className="py-3.5 px-5 text-[#4e5b4e]">{row.subsequent}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#4e5b4e] text-[15px] leading-relaxed text-center max-w-3xl mx-auto">
                Veterans receiving VA disability compensation or certain other benefits may be exempt from paying the funding fee. These rates will remain in effect until November 14, 2031.
              </p>

              <div className="loan-btn-wrap">
                <Link
                  href="/va-loan-calculator/"
                  className="bg-[#052316] hover:bg-[#0a3a24] text-white font-bold text-[16px] px-8 py-4 rounded-full transition-all inline-block"
                >
                  Get Your Free VA Loan Cost Estimate →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                THE PROCESS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Navigating the VA Loan Application Process
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto mt-4">
                Applying for a VA loan is a straightforward process designed to help eligible veterans and service members achieve homeownership. Here&apos;s a step-by-step guide to get you started on your journey:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {processSteps.map((step, idx) => (
                <div key={step.title} className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center font-bold text-[18px] mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-[17px] font-bold text-[#052316] mb-2 font-playfair">{step.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#052316] text-white rounded-3xl p-8 text-center space-y-4">
              <p className="text-[16px] leading-relaxed max-w-2xl mx-auto">
                Discover how easy it is to start your VA loan application process with expert guidance from our team. We&apos;ll help you navigate each step, from obtaining your Certificate of Eligibility to closing on your dream home.
              </p>
              <Link
                href="/#get-pre-approved"
                className="inline-block bg-[#3fb364] hover:bg-[#359854] text-white font-bold px-8 py-4 rounded-full transition-all"
              >
                Start Your VA Loan Journey Today! →
              </Link>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                CLIENT STORIES
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                What Our Veterans Say About VA Loans
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto mt-4">
                Hear from fellow veterans who have successfully achieved their homeownership dreams through VA loans with the Mortgage Brothers team. Our commitment to serving those who served means providing expert guidance, competitive rates, and a smooth loan process tailored to your unique needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-6 shadow-sm space-y-4">
                  <p className="text-[#3fb364] text-[14px]">★★★★★</p>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-[#052316] text-[13px] font-bold">{t.name}</p>
                </div>
              ))}
            </div>

            <div className="loan-btn-wrap">
              <Link
                href="/client-mortgage-reviews/"
                className="inline-block bg-[#052316] hover:bg-[#0a3a24] text-white font-bold px-7 py-3.5 rounded-full transition-all"
              >
                Explore All Client Testimonials
              </Link>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-5 text-left">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase">
                WHY MORTGAGE BROTHERS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[36px] font-bold font-playfair leading-tight">
                Why Choose Mortgage Brothers LLC for Your VA Loan?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Choosing the right lender for your VA loan is crucial for a smooth homebuying experience. While many lenders offer VA loans, few truly specialize in them or understand the unique requirements of veteran borrowers.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Our team&apos;s expertise in VA loans means you&apos;ll receive personalized guidance throughout every step of your journey, from obtaining your Certificate of Eligibility to closing on your dream home.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {whyUs.map((item) => (
                <div key={item.title} className="bg-white border border-[#e0e0e0] rounded-2xl p-5">
                  <h3 className="text-[16px] font-bold text-[#052316] mb-2 font-playfair">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="loan-section bg-white">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Common Questions About VA Loans
              </h2>
              <p className="text-[#4e5b4e] text-[15px] leading-relaxed max-w-2xl mx-auto mt-3">
                Get answers to frequently asked questions about VA loans. Our team has compiled the most common questions from veterans and service members about the VA loan process.
              </p>
            </div>

            <div className="space-y-4 text-left">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-[#052316] text-[16px] focus:outline-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#3fb364] text-[20px] ml-4 font-bold">
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-[#4e5b4e] text-[14.5px] leading-relaxed border-t border-[#f0f0f0] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-center text-[#4e5b4e] text-[14px]">
              These answers provide general guidance. Contact our team for personalized information based on your specific situation.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="loan-section bg-[#052316] text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-[28px] lg:text-[40px] font-bold font-playfair">
              Need expert guidance with your VA loan?
            </h2>
            <p className="text-[#c8c8b8] text-[16px] max-w-2xl mx-auto leading-relaxed">
              Our team is ready to help. Contact Mortgage Brothers LLC for personalized VA loan guidance.
            </p>
            <p className="text-[#c8c8b8] text-[15px]">
              1599 East Orangewood Ave Suite 200, Phoenix, AZ 85020
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/#get-pre-approved"
                className="bg-[#3fb364] hover:bg-[#359854] text-white font-bold text-[16px] px-8 py-4 rounded-full transition-all shadow-lg"
              >
                GET PRE-APPROVED NOW →
              </Link>
              <a
                href="tel:+16025352171"
                className="border border-white/30 hover:border-white text-white font-semibold text-[15px] px-7 py-4 rounded-full transition-all hover:bg-white/10"
              >
                Call (602) 535-2171
              </a>
            </div>
            <p className="text-[#b8d4b8] text-[12px] leading-relaxed pt-6 max-w-3xl mx-auto">
              Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has been prepared for informational purposes only. You should consult your own tax, legal, and accounting advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS #210917 and #1618695. Equal housing lender.
            </p>
          </div>
        </section>

        {/* RELATED LOANS */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-[#052316] text-[28px] lg:text-[34px] font-bold font-playfair">
                Explore Our Mortgage Solutions
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedLoans.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 bg-white border border-[#e0e0e0] rounded-xl px-5 py-4 text-[#052316] font-semibold text-[14.5px] hover:border-[#3fb364] hover:text-[#3fb364] transition-all"
                >
                  <span className="text-[#3fb364]">✓</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}