"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import StatsBanner from "../component/StatsBanner";
import LoanProgramHero from "../component/LoanProgramHero";
import { LOAN_PROGRAM_LINKS } from "@/lib/company";

export default function FhaHomeLoansArizonaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const highlights = [
    "Low 3.5% Down Payment: Your Path to Homeownership",
    "Competitive Rates for Credit Scores as Low as 580",
    "Finance 1-4 Unit Properties with Flexible Terms",
  ];

  const benefits = [
    {
      title: "Low Down Payment",
      desc: "Enter the housing market with as little as 3.5% down, making homeownership more attainable for those with limited savings.",
    },
    {
      title: "Flexible Credit Requirements",
      desc: "Qualify with credit scores as low as 580, opening doors for borrowers who may not meet conventional loan standards.",
    },
    {
      title: "Competitive Interest Rates",
      desc: "Enjoy lower rates compared to many conventional loans, thanks to government backing, potentially saving you thousands over the life of your loan.",
    },
    {
      title: "Versatile Property Options",
      desc: "Finance 1-4 unit properties, including single-family homes, duplexes, triplexes, and fourplexes as your primary residence.",
    },
    {
      title: "Gift Funds Accepted",
      desc: "Use gift funds from family members to cover your down payment and closing costs, reducing the cash you need at closing.",
    },
    {
      title: "Streamlined Refinance Option",
      desc: "Take advantage of FHA Streamline Refinance programs to lower your rate or payment with minimal documentation.",
    },
  ];

  const loanOptions = [
    {
      title: "Section 203(b): Standard FHA Loan",
      desc: "The most common FHA loan program for purchasing 1-4 unit primary residences with as little as 3.5% down.",
    },
    {
      title: "Section 203(k): Renovation Loans",
      desc: "Combine your home purchase and renovation costs into a single FHA loan, ideal for fixer-uppers and improvement projects.",
    },
    {
      title: "Section 234(c): Condominium Loans",
      desc: "Finance a condo purchase with FHA backing when the project meets FHA approval requirements.",
    },
    {
      title: "HECM: Reverse Mortgages",
      desc: "Home Equity Conversion Mortgages for homeowners age 62 and older to access home equity without monthly mortgage payments.",
    },
  ];

  const eligibilityItems = [
    {
      title: "Credit Score",
      desc: "Most Arizona lenders typically require a credit score of 600, though some may accept scores as low as 580 with FHA backing.",
    },
    {
      title: "Down Payment",
      desc: "A minimum of 3.5% down is required. Funds can come from personal savings, gift funds from family, or down payment assistance programs.",
    },
    {
      title: "Debt-to-Income Ratio",
      desc: "Your total monthly debt payments, including the new mortgage, generally should not exceed 50% of your gross monthly income.",
    },
    {
      title: "Property Requirements",
      desc: "The home must be your primary residence, contain 1-4 units, and meet FHA minimum property standards and appraisal guidelines.",
    },
    {
      title: "Employment and Income",
      desc: "Lenders typically require steady employment history of at least two years with consistent, verifiable income.",
    },
    {
      title: "Mortgage Insurance",
      desc: "FHA loans require an upfront mortgage insurance premium of 1.75% of the loan amount, plus an annual MIP ranging from 0.15% to 0.55% paid monthly.",
    },
  ];

  const loanLimitRows = [
    {
      county: "Coconino",
      oneUnit: "$609,500",
      twoUnit: "$780,250",
      threeUnit: "$943,150",
      fourUnit: "$1,172,150",
    },
    {
      county: "Maricopa",
      oneUnit: "$557,750",
      twoUnit: "$714,000",
      threeUnit: "$863,100",
      fourUnit: "$1,072,600",
    },
    {
      county: "Pinal",
      oneUnit: "$557,750",
      twoUnit: "$714,000",
      threeUnit: "$863,100",
      fourUnit: "$1,072,600",
    },
    {
      county: "Most Other AZ Counties",
      oneUnit: "$541,287",
      twoUnit: "$693,050",
      threeUnit: "$837,700",
      fourUnit: "$1,041,125",
      note: "Apache, Cochise, Gila, Graham, Greenlee, La Paz, Mohave, Navajo, Pima, Santa Cruz, Yavapai & Yuma",
    },
  ];

  const whyUsItems = [
    {
      title: "FHA Loan Expertise",
      desc: "Our team specializes in FHA lending and understands the unique guidelines, documentation, and approval process for government-backed loans in Arizona.",
    },
    {
      title: "Personalized Service",
      desc: "We take the time to understand your financial situation and guide you through every step, from pre-approval to closing.",
    },
    {
      title: "Competitive Rates",
      desc: "As FHA loan specialists, we work to secure competitive interest rates that help keep your monthly payments affordable.",
    },
    {
      title: "Streamlined Process",
      desc: "Our refined application and underwriting process is designed to move your FHA loan from application to closing as efficiently as possible.",
    },
  ];

  const testimonials = [
    {
      text: "We had a tight short-sale deadline and Mortgage Brothers closed a day early. Their team worked tirelessly to make sure we didn't lose the home we wanted.",
      author: "Heather Rich Chapman",
      location: "Chandler, Arizona",
    },
    {
      text: "My application was complicated, but they navigated every detail with patience and professionalism. They secured an exceptional rate on our FHA loan.",
      author: "Matthew MaClean",
      location: "Phoenix, Arizona",
    },
    {
      text: "Efficient, honest, and transparent throughout the entire process. I always knew where we stood and what to expect next.",
      author: "Kevin Hinton",
      location: "Peoria, Arizona",
    },
    {
      text: "This was the easiest mortgage I've ever done. They were always available when I had questions and made the FHA process simple.",
      author: "Carlos Baldenegro",
      location: "Chandler, Arizona",
    },
  ];

  const faqs = [
    {
      q: "What's the minimum down payment for an FHA loan?",
      a: "The minimum down payment for an FHA loan is 3.5% of the purchase price for borrowers with a credit score of 580 or higher.",
    },
    {
      q: "Are gift funds allowed for FHA loans?",
      a: "Yes. All of your down payment, closing costs, and prepaids can come from gift funds provided by an eligible donor, such as a family member.",
    },
    {
      q: "What credit score do I need for an FHA loan in Arizona?",
      a: "Most Arizona lenders require a credit score of 620, though some may accept scores as low as 580 with FHA backing.",
    },
    {
      q: "How long do I have to pay mortgage insurance on an FHA loan?",
      a: "If you put less than 10% down, mortgage insurance remains for the life of the loan. If you put 10% or more down, mortgage insurance can be removed after 11 years.",
    },
    {
      q: "What are the current FHA loan limits in Arizona?",
      a: "For 2026 in Maricopa County: 1-unit $557,750; 2-unit $714,000; 3-unit $863,100; 4-unit $1,072,600. Limits are higher in Coconino County and vary by county across Arizona.",
    },
    {
      q: "Can I use an FHA loan to buy a condo?",
      a: "Yes, you can use an FHA loan to purchase a condo if the project is FHA-approved. Finding FHA-approved condos can be challenging in Arizona, but our team can help you identify eligible properties.",
    },
    {
      q: "What's the maximum seller contribution on an FHA loan?",
      a: "Sellers can contribute up to 6% of the purchase price toward the buyer's closing costs, prepaid items, and discount points on an FHA loan.",
    },
  ];

  const otherPrograms = LOAN_PROGRAM_LINKS.filter(
    (l) => l.href !== "/fha-home-loans-arizona/"
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        <LoanProgramHero
          title="FHA Home Loans in Arizona"
          subtitle="Low down payments, flexible credit requirements, and expert guidance"
        />

        {/* HIGHLIGHT BAR */}
        <div className="w-full bg-[#03170e] text-[#c8c8b8] border-y border-white/10 py-4 px-6">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-around gap-6 text-[14px] font-medium">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-[#3fb364]">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* OVERVIEW + BENEFITS */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase">
                FHA FINANCING
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair leading-tight">
                Unlock Your Dream Home with FHA Loans in Arizona
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                FHA loans are a powerful tool for many Arizonans looking to achieve homeownership, especially those who might face challenges qualifying for conventional mortgages. These <strong>government-backed loans</strong> offer a range of benefits that make the path to owning a home more accessible and affordable.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Whether you&apos;re a first-time homebuyer, have less-than-perfect credit, or are working with a limited budget, FHA loans provide flexible options that can turn your homeownership dreams into reality.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                <span className="mt-md block"></span>At Mortgage Brothers, we specialize in guiding Arizona residents through the <strong>FHA loan process</strong>. Our expertise ensures you get the best terms tailored to your unique financial situation. Let&apos;s explore the key advantages that make FHA loans an attractive option for many homebuyers:<span className="mt-md block"></span>
              </p>
              <Link
                href="/#get-pre-approved"
                className="inline-block bg-[#052316] hover:bg-[#0a3a24] text-white font-bold px-7 py-3.5 rounded-full transition-all shadow"
              >
                GET PRE-APPROVED →
              </Link>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-5 text-left hover:border-[#3fb364] transition-all"
                >
                  <h3 className="text-[16px] font-bold text-[#052316] mb-1.5 font-playfair">{b.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS BANNER */}
        <StatsBanner
          stats={[
            { value: "3.5%", label: "Down Payment Required" },
            { value: "$557,750", label: "2026 FHA Maricopa County Loan Limit" },
            { value: "1.75%", label: "Upfront MIP" },
            { value: "0.55%", label: "Annual MIP Rate" },
          ]}
        />

        {/* FHA LOAN OPTIONS */}
        <section className="loan-section bg-[#fcf9f3] !pt-8 sm:!pt-10 lg:!pt-12">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                FHA PROGRAMS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                FHA Loan Options for Arizona Homebuyers
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                The FHA offers several loan programs to meet different homebuying needs. Here are the most common options available to Arizona residents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {loanOptions.map((option, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm hover:border-[#3fb364] transition-all"
                >
                  <h3 className="text-[17px] font-bold text-[#052316] mb-2 font-playfair">{option.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{option.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUALIFY */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                ELIGIBILITY
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Do You Qualify for an FHA Loan in Arizona?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                FHA loans offer flexible qualifying guidelines, but there are still requirements you&apos;ll need to meet. Here&apos;s what Arizona lenders typically look for when reviewing FHA loan applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {eligibilityItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-6 shadow-sm"
                >
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
                GET PRE-APPROVED →
              </Link>
            </div>
          </div>
        </section>

        {/* LOAN LIMITS */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center loan-section-heading">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                2026 LIMITS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair mb-4">
                FHA Loan Limits in Arizona
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                FHA loan limits vary by county and property type. For 2026, the Maricopa County single-family FHA loan limit is $557,750. See the limits below across key Arizona counties.
              </p>
            </div>

            {/* Mobile: card stack — avoids table overflow & tall wrapped note rows */}
            <div className="md:hidden flex flex-col gap-3">
              {loanLimitRows.map((row) => (
                <article
                  key={row.county}
                  className="rounded-2xl border border-[#e0e0e0] bg-white shadow-sm overflow-hidden"
                >
                  <div className="bg-[#052316] px-4 py-3">
                    <h3 className="text-white text-[15px] font-bold leading-snug">
                      {row.county}
                    </h3>
                    {"note" in row && row.note ? (
                      <p className="text-white/65 text-[11.5px] leading-snug mt-1">
                        {row.note}
                      </p>
                    ) : null}
                  </div>
                  <div className="grid grid-cols-2 gap-px bg-[#e8e0d0]/70">
                    {[
                      { label: "1-Unit", value: row.oneUnit },
                      { label: "2-Unit", value: row.twoUnit },
                      { label: "3-Unit", value: row.threeUnit },
                      { label: "4-Unit", value: row.fourUnit },
                    ].map((cell) => (
                      <div key={cell.label} className="bg-white px-4 py-3.5">
                        <p className="text-[#b8d4b8] text-[10px] font-bold tracking-[0.12em] uppercase mb-1">
                          {cell.label}
                        </p>
                        <p className="text-[#052316] text-[15px] font-semibold tabular-nums">
                          {cell.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {/* Desktop / tablet: compact table */}
            <div className="hidden md:block overflow-x-auto rounded-2xl border border-[#e0e0e0] bg-white shadow-sm -mx-0">
              <table className="w-full min-w-[640px] text-left text-[14px]">
                <thead>
                  <tr className="bg-[#052316] text-white">
                    <th className="px-5 py-3.5 font-bold">County</th>
                    <th className="px-5 py-3.5 font-bold whitespace-nowrap">1-Unit</th>
                    <th className="px-5 py-3.5 font-bold whitespace-nowrap">2-Unit</th>
                    <th className="px-5 py-3.5 font-bold whitespace-nowrap">3-Unit</th>
                    <th className="px-5 py-3.5 font-bold whitespace-nowrap">4-Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {loanLimitRows.map((row, idx) => (
                    <tr
                      key={row.county}
                      className={idx % 2 === 0 ? "bg-white" : "bg-[#fcf9f3]"}
                    >
                      <td className="px-5 py-3.5 font-semibold text-[#052316] border-t border-[#e0e0e0] align-top max-w-[240px]">
                        {row.county}
                        {"note" in row && row.note ? (
                          <span className="block text-[12px] font-normal text-[#b8d4b8] mt-1 leading-snug">
                            Includes {row.note}.
                          </span>
                        ) : null}
                      </td>
                      <td className="px-5 py-3.5 text-[#4e5b4e] border-t border-[#e0e0e0] whitespace-nowrap tabular-nums align-top">
                        {row.oneUnit}
                      </td>
                      <td className="px-5 py-3.5 text-[#4e5b4e] border-t border-[#e0e0e0] whitespace-nowrap tabular-nums align-top">
                        {row.twoUnit}
                      </td>
                      <td className="px-5 py-3.5 text-[#4e5b4e] border-t border-[#e0e0e0] whitespace-nowrap tabular-nums align-top">
                        {row.threeUnit}
                      </td>
                      <td className="px-5 py-3.5 text-[#4e5b4e] border-t border-[#e0e0e0] whitespace-nowrap tabular-nums align-top">
                        {row.fourUnit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* WHY MORTGAGE BROTHERS */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                LOCAL EXPERTISE
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Why Choose Mortgage Brothers for Your FHA Loan?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                Navigating FHA loan requirements can feel overwhelming. Mortgage Brothers brings deep FHA expertise and a commitment to personalized service for every Arizona homebuyer we work with.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {whyUsItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-6 shadow-sm hover:border-[#3fb364] transition-all"
                >
                  <h3 className="text-[16px] font-bold text-[#052316] mb-2 font-playfair">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#052316] rounded-3xl p-8 lg:p-10 text-center text-white space-y-4">
              <p className="text-[16px] text-[#c8c8b8] max-w-2xl mx-auto leading-relaxed">
                Ready to explore your FHA loan options? Our experienced team is here to answer your questions and guide you through the process from start to finish.
              </p>
              <a
                href="tel:+16025352171"
                className="inline-block text-[28px] lg:text-[32px] font-bold text-[#3fb364] hover:text-[#359854] transition-colors"
              >
                (602) 535-2171
              </a>
              <div>
                <a
                  href="tel:+16025352171"
                  className="inline-block border border-white/30 hover:border-white text-white font-semibold text-[15px] px-7 py-3.5 rounded-full transition-all hover:bg-white/10"
                >
                  Call Now for Expert Advice
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                CLIENT REVIEWS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                What Our Clients Say About Us
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                Arizona homebuyers trust Mortgage Brothers for FHA loans and expert guidance. Here&apos;s what some of our satisfied clients have to say.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm"
                >
                  <div className="text-[#3fb364] text-[14px] mb-3 tracking-wider">★★★★★</div>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                  <p className="text-[#052316] text-[14px] font-bold">{t.author}</p>
                  <p className="text-[#b8d4b8] text-[13px]">{t.location}</p>
                </div>
              ))}
            </div>

            <div className="loan-btn-wrap">
              <Link
                href="/client-mortgage-reviews/"
                className="inline-block bg-[#052316] hover:bg-[#0a3a24] text-white font-bold px-7 py-3.5 rounded-full transition-all shadow"
              >
                Explore All Client Testimonials →
              </Link>
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
                Frequently Asked Questions About FHA Home Loans
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-2xl mx-auto mt-4">
                Have questions about FHA loans in Arizona? Here are answers to the most common questions we hear from homebuyers.
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
                    <span className="text-[#3fb364] text-[20px] ml-4 font-bold shrink-0">
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
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="loan-section bg-[#052316] text-white">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-[28px] lg:text-[40px] font-bold font-playfair">
              Get Started with Your FHA Home Loan Today
            </h2>
            <p className="text-[#c8c8b8] text-[16px] max-w-2xl mx-auto leading-relaxed">
              Take the first step toward homeownership with Mortgage Brothers. Our FHA loan specialists are ready to help you understand your options and get pre-approved with confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-xl mx-auto">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#3fb364] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[13px] text-[#b8d4b8] uppercase tracking-wider font-bold mb-1">Phone</p>
                  <a href="tel:+16025352171" className="text-white font-semibold hover:text-[#3fb364] transition-colors">
                    (602) 535-2171
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#3fb364] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[13px] text-[#b8d4b8] uppercase tracking-wider font-bold mb-1">Address</p>
                  <p className="text-white text-[14px] leading-relaxed">
                    1599 East Orangewood Ave Suite 200, Phoenix, AZ 85020
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/#get-pre-approved"
              className="inline-block bg-[#3fb364] hover:bg-[#359854] text-white font-bold text-[16px] px-8 py-4 rounded-full transition-all shadow-lg"
            >
              GET PRE-APPROVED →
            </Link>
          </div>
        </section>

        {/* OTHER LOAN PROGRAMS */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                MORE OPTIONS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Explore Other Loan Programs
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {otherPrograms.map((program) => (
                <Link
                  key={program.href}
                  href={program.href}
                  className="flex items-center gap-3 bg-white border border-[#e0e0e0] hover:border-[#3fb364] rounded-xl px-5 py-4 text-[#052316] font-semibold text-[14.5px] transition-all hover:shadow-sm group"
                >
                  <span className="text-[#3fb364] font-bold group-hover:translate-x-0.5 transition-transform">→</span>
                  {program.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="loan-section-footer bg-[#fcf9f3] border-t border-[#e0e0e0]">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#b8d4b8] text-[12.5px] leading-relaxed">
              Equal Housing Lender. Mortgage Brothers LLC NMLS #1007154. Eddie Knoell NMLS #210917, Thomas Knoell NMLS #1618695.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}