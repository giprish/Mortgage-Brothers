"use client";

import { faqs as pageFaqs } from "./faqs";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import StatsBanner from "../component/StatsBanner";
import LoanProgramHero from "../component/LoanProgramHero";
import HeroFeatureStrip from "../component/HeroFeatureStrip";
import GetInTouch from "../component/GetInTouch";
import { LOAN_PROGRAM_LINKS } from "@/lib/company";

import CountyTestimonials, { type CountyTestimonial } from "../component/CountyTestimonials";
import { cardIconBadgeClassName } from "../component/IconBadge";

export default function FhaStreamlineRefinanceArizonaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const highlights = [
    "Simplify Your Refinance Process with No Appraisal",
    "Lower Your FHA Payments and Save More",
    "Streamlined Savings with Minimal Paperwork",
  ];

  const benefits = [
    {
      title: "Potentially Lower Interest Rates",
      desc: "Enjoy the possibility of securing a lower interest rate compared to your current FHA loan, which can lead to significant savings on your monthly mortgage payments.",
    },
    {
      title: "Reduced Monthly Payments",
      desc: "By refinancing through the FHA Streamline program, you may lower your monthly payments, freeing up cash for other essential expenses or investments.",
    },
    {
      title: "Minimal Documentation Required",
      desc: "The streamlined process means less paperwork. You won&apos;t need to provide extensive financial documentation, making it easier and quicker to complete your refinance.",
    },
    {
      title: "No Appraisal Needed in Most Cases",
      desc: "In many instances, you can refinance without the hassle of an appraisal, saving both time and money while simplifying the process.",
    },
    {
      title: "Faster Closing Process",
      desc: "With fewer requirements and a simplified application process, you can expect a quicker closing time, allowing you to start enjoying your savings sooner.",
    },
  ];

  const processSteps = [
    {
      title: "Eligibility Check",
      desc: "Our team will verify that you meet the basic FHA Streamline requirements, including having an existing FHA loan and being current on your payments for at least the past 6 months.",
    },
    {
      title: "Application",
      desc: "We&apos;ll guide you through a streamlined application process, which requires minimal documentation compared to a traditional refinance. You&apos;ll typically need to provide your current mortgage statement and proof of on-time payments.",
    },
    {
      title: "Approval",
      desc: "Once your application is submitted, our underwriting team will review it quickly. Since no appraisal is required and credit checks are often waived, this step is usually faster than with other refinance options.",
    },
    {
      title: "Closing",
      desc: "After approval, we&apos;ll schedule your closing. You&apos;ll sign your new loan documents, and your existing FHA loan will be paid off with the proceeds from your new, ideally lower-rate FHA loan.",
    },
  ];

  const whyStreamlineItems = [
    {
      title: "Simplified Process",
      desc: "Unlike conventional refinancing, the FHA Streamline program requires minimal paperwork and documentation. This means less hassle for you and a faster path to potential savings.",
    },
    {
      title: "No Appraisal Required",
      desc: "In most cases, you can skip the appraisal process entirely. This saves you time and money, and allows you to refinance even if your home&apos;s value has decreased.",
    },
    {
      title: "Flexible Credit Requirement",
      desc: "The FHA Streamline program doesn&apos;t typically require a credit check. This means you may qualify even if your credit score has changed since your original FHA loan.",
    },
    {
      title: "Potential for Lower Mortgage Insurance",
      desc: "If you obtained your current FHA loan before June 1, 2009, you might be eligible for lower mortgage insurance premiums, leading to additional savings.",
    },
    {
      title: "No Income Verification",
      desc: "The program doesn&apos;t require income verification or employment checks, making it easier to qualify if your financial situation has changed.",
    },
    {
      title: "Tangible Benefit Requirement",
      desc: "The FHA ensures this refinance will benefit you by requiring a Net Tangible Benefit, such as a lower interest rate or reduced monthly payment.",
    },
  ];

  const eligibilityItems = [
    {
      title: "Existing FHA Loan",
      desc: "You must currently have an FHA-insured mortgage on your property.",
    },
    {
      title: "Payment History",
      desc: "Maintain a perfect payment record with no missed mortgage payments in the last 12 months.",
    },
    {
      title: "Net Tangible Benefit",
      desc: "The refinance must provide a combined savings from interest rate reduction and mortgage insurance of at least 0.5% on a fixed-rate FHA mortgage.",
    },
    {
      title: "Property Types",
      desc: "FHA Streamline Refinance is available for primary residences, second homes, and investment properties.",
    },
    {
      title: "No Appraisal Needed",
      desc: "An appraisal is not required, regardless of your home&apos;s current equity.",
    },
    {
      title: "Simplified Documentation",
      desc: "No income or job verification is necessary, streamlining the application process.",
    },
  ];

  const whyUsItems = [
    {
      title: "Local Arizona Expertise",
      desc: "As a Phoenix-based mortgage broker, we have in-depth knowledge of the Arizona housing market and FHA loan requirements specific to our state.",
    },
    {
      title: "Experienced Team",
      desc: "Led by Eddie Knoell (NMLS #210917) and Thomas Knoell (NMLS #1618695), our team brings years of mortgage industry experience to guide you through the refinance process.",
    },
    {
      title: "Personalized Service",
      desc: "We take the time to understand your unique financial situation and goals, ensuring we find the best FHA Streamline Refinance option for you.",
    },
    {
      title: "Streamlined Process",
      desc: "Our efficient refinancing process minimizes paperwork and speeds up approval times, getting you to a lower rate faster.",
    },
    {
      title: "Competitive Rates",
      desc: "We leverage our industry relationships to offer you competitive rates and terms on your FHA Streamline Refinance.",
    },
    {
      title: "Client-Focused Approach",
      desc: "Our numerous positive client reviews reflect our commitment to putting your needs first throughout the refinancing journey.",
    },
  ];

  const testimonials: CountyTestimonial[] = [
  {
    name: "Matthew and Christine Mostrom",
    quote: "Eddie helped us refinance our home. He was a very good communicator and honest. Got the job done even when His hands were tied due to regulations. Thank you Eddie!",
    attribution: "Matthew and Christine Mostrom, Chandler, Arizona",
  },
  {
    name: "Joelle Engel",
    quote: "I appreciated that you worked with us to get us a great rate and to make refinancing affordable. Thank you for doing it in a timely fashion. It was a pleasure working with you!",
    attribution: "Joelle Engel, Phoenix, Arizona",
  },
  {
    name: "Diane Stackwick",
    quote: "Thank you Eddie for the fast closing of our loan. Our loan closed in 30 days thanks to you and your staff&apos;s diligence. We appreciate the fact that you gave us several financing options. We felt that we had a choice and chose the best option for our needs.",
    attribution: "Diane Stackwick, Phoenix, Arizona",
  },
  {
    name: "Rich Eneim",
    quote: "Shopping for a new loan can be very intimidating. I found that different lenders often make promises they just can&apos;t keep. Eddie delivers every time with accurate and timely loans. NO surprises at the closing table!",
    attribution: "Rich Eneim, Phoenix, Arizona",
  },
];

  const faqs = pageFaqs;

  const otherPrograms = LOAN_PROGRAM_LINKS.filter(
    (l) => l.href !== "/fha-streamline-refinance-arizona/"
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        <LoanProgramHero
          title="FHA Streamline Refinance in Arizona"
          subtitle="Lower your monthly payments with minimal paperwork and hassle"
        />

        <HeroFeatureStrip items={highlights} />


        {/* OVERVIEW + BENEFITS */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase">
                FHA STREAMLINE REFINANCE
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair leading-tight">
                Discover the Advantages of FHA Streamline Refinance
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                The FHA Streamline Refinance program is designed to help homeowners with existing FHA loans simplify their refinancing process and potentially improve their financial situation. This program offers a unique set of benefits that can make refinancing more accessible and advantageous for many homeowners.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Whether you&apos;re looking to lower your monthly payments, take advantage of better interest rates, or simply streamline your mortgage, the FHA Streamline Refinance could be the solution you&apos;ve been searching for.
              </p>
              <Link
                href="#get-pre-approved"
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
            { value: "No Credit Check", label: "Typically Required" },
            { value: "$0", label: "Upfront Cost" },
            { value: "30%", label: "Potential Payment Reduction" },
            { value: "210", label: "Original Loan Days Old" },
          ]}
        />

        {/* PROCESS STEPS */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                HOW IT WORKS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                How the FHA Streamline Refinance Process Works
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                The FHA Streamline Refinance offers a simplified path to potentially lower your monthly mortgage payments. Here&apos;s a step-by-step overview of how this streamlined process typically unfolds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-6 hover:border-[#3fb364] transition-all group"
                >
                  <div className={cardIconBadgeClassName("sm", "font-bold mb-4")}>
                    {idx + 1}
                  </div>
                  <h3 className="text-[16px] font-bold text-[#052316] mb-2 font-playfair">{step.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE FHA STREAMLINE */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                PROGRAM ADVANTAGES
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Why Choose FHA Streamline Refinance?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                The FHA Streamline Refinance program offers unique advantages that set it apart from traditional refinancing options. Here&apos;s why it might be the perfect choice for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {whyStreamlineItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm hover:border-[#3fb364] transition-all"
                >
                  <h3 className="text-[16px] font-bold text-[#052316] mb-2 font-playfair">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ELIGIBILITY */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                ELIGIBILITY
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                FHA Streamline Refinance Eligibility
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                To qualify for an FHA Streamline Refinance in Arizona, you must meet these key requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
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
                href="#get-pre-approved"
                className="bg-[#3fb364] hover:bg-[#359854] text-white font-bold text-[16px] px-8 py-4 rounded-full transition-all shadow-md inline-block"
              >
                GET PRE-APPROVED →
              </Link>
            </div>
          </div>
        </section>

        {/* HYPOTHETICAL SAVINGS TABLE */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                SAVINGS COMPARISON
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Hypothetical FHA Streamline Refinance Scenario
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                The following table illustrates a hypothetical scenario when the interest rate is reduced by 1%. This comparison shows potential savings for borrowers with a current FHA loan.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-[#e0e0e0] rounded-2xl overflow-hidden text-left text-[14px]">
                <thead>
                  <tr className="bg-[#052316] text-white">
                    <th className="px-5 py-4 font-semibold">Loan Feature</th>
                    <th className="px-5 py-4 font-semibold">Current FHA Mortgage</th>
                    <th className="px-5 py-4 font-semibold">New FHA Mortgage</th>
                  </tr>
                </thead>
                <tbody className="text-[#4e5b4e]">
                  <tr className="border-t border-[#e0e0e0]">
                    <td className="px-5 py-3 font-semibold text-[#052316]">Loan Options</td>
                    <td className="px-5 py-3">FHA 30 Year Fixed</td>
                    <td className="px-5 py-3">FHA 30 Year Fixed</td>
                  </tr>
                  <tr className="border-t border-[#e0e0e0] bg-[#fcf9f3]">
                    <td className="px-5 py-3 font-semibold text-[#052316]">Base Loan Amount</td>
                    <td className="px-5 py-3">$350,000</td>
                    <td className="px-5 py-3">$350,000</td>
                  </tr>
                  <tr className="border-t border-[#e0e0e0]">
                    <td className="px-5 py-3 font-semibold text-[#052316]">Interest Rate</td>
                    <td className="px-5 py-3">7%</td>
                    <td className="px-5 py-3">6%</td>
                  </tr>
                  <tr className="border-t border-[#e0e0e0] bg-[#fcf9f3]">
                    <td className="px-5 py-3 font-semibold text-[#052316]">Principal &amp; Interest Payment</td>
                    <td className="px-5 py-3">$2,369</td>
                    <td className="px-5 py-3">$2,135</td>
                  </tr>
                  <tr className="border-t border-[#e0e0e0]">
                    <td className="px-5 py-3 font-semibold text-[#052316]">Monthly Savings</td>
                    <td className="px-5 py-3">N/A</td>
                    <td className="px-5 py-3 text-[#3fb364] font-bold">$234</td>
                  </tr>
                  <tr className="border-t border-[#e0e0e0] bg-[#fcf9f3]">
                    <td className="px-5 py-3 font-semibold text-[#052316]">Estimated Closing Costs</td>
                    <td className="px-5 py-3">N/A</td>
                    <td className="px-5 py-3">$2,750</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="bg-white border border-[#e0e0e0] rounded-2xl p-5">
                <p className="text-[#4e5b4e] text-[14px] leading-relaxed">
                  <strong className="text-[#052316]">Breakeven time:</strong> With estimated closing costs of $2,750 divided by monthly savings of $234, the breakeven is under 12 months — a quick payback that helps determine if the FHA Streamline Refinance is worth doing.
                </p>
              </div>
              <div className="bg-white border border-[#e0e0e0] rounded-2xl p-5">
                <p className="text-[#b8d4b8] text-[13px] leading-relaxed italic">
                  *This is a hypothetical scenario. Each borrower will have their own unique situation and will need to evaluate their cost analysis and benefits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2026 FHA LOAN LIMITS */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                2026 LIMITS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                2026 FHA Loan Limits in Arizona
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                FHA loan limits for most Arizona counties have increased for 2026. Maricopa and Pinal counties have a higher limit of $557,750, while Coconino County has the highest limit at $609,500. Most other Arizona counties are set at $541,287 for single-family homes.
              </p>
            </div>

            <div className="overflow-x-auto max-w-2xl mx-auto">
              <table className="w-full bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl overflow-hidden text-left text-[14px]">
                <thead>
                  <tr className="bg-[#052316] text-white">
                    <th className="px-5 py-3 font-semibold">County / Region</th>
                    <th className="px-5 py-3 font-semibold">Single-Family Limit</th>
                  </tr>
                </thead>
                <tbody className="text-[#4e5b4e]">
                  <tr className="border-t border-[#e0e0e0]">
                    <td className="px-5 py-3">Maricopa / Pinal</td>
                    <td className="px-5 py-3 font-semibold text-[#052316]">$557,750</td>
                  </tr>
                  <tr className="border-t border-[#e0e0e0] bg-white">
                    <td className="px-5 py-3">Coconino</td>
                    <td className="px-5 py-3 font-semibold text-[#052316]">$609,500</td>
                  </tr>
                  <tr className="border-t border-[#e0e0e0]">
                    <td className="px-5 py-3">Most Other AZ Counties</td>
                    <td className="px-5 py-3 font-semibold text-[#052316]">$541,287</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <CountyTestimonials
          title="Real Stories, Real Success"
          testimonials={testimonials}
        />

        {/* WHY AZ MORTGAGE BROTHERS */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                LOCAL EXPERTISE
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Why Choose Mortgage Brothers LLC for Your FHA Streamline Refinance?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                At Mortgage Brothers LLC, we&apos;re committed to providing exceptional service and expertise for your FHA Streamline Refinance needs in Arizona.
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
                At Mortgage Brothers LLC, we&apos;re not just lenders — we&apos;re your partners in achieving your homeownership goals. Let us help you make the most of your FHA Streamline Refinance opportunity.
              </p>
              <a
                href="tel:+16025352171"
                className="inline-block text-[28px] lg:text-[32px] font-bold text-[#3fb364] hover:text-[#359854] transition-colors"
              >
                +1 (602) 535-2171
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

        {/* FAQ */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Frequently Asked Questions About FHA Streamline Refinance
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-2xl mx-auto mt-4">
                Understanding the FHA Streamline Refinance process can be complex. Here are answers to some of the most common questions our clients ask.
              </p>
            </div>

            <div className="space-y-4 text-left">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e0e0e0] rounded-2xl overflow-hidden shadow-sm transition-all"
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

        <GetInTouch
          theme="dark"
          title="Get Started with Your FHA Streamline Refinance Today"
          description="Take the first step toward lower monthly payments with Mortgage Brothers LLC. Our team of experienced mortgage professionals is ready to guide you through the FHA Streamline Refinance process."
          showPreApproveCta
        />

        {/* EXPLORE OTHER LOAN PROGRAMS */}
        <section className="loan-section bg-white">
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
                  className="flex items-center gap-3 bg-[#fcf9f3] border border-[#e0e0e0] hover:border-[#3fb364] rounded-xl px-5 py-4 text-[#052316] font-semibold text-[14.5px] transition-all hover:shadow-sm group"
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
              Mortgage Brothers LLC NMLS #1007154. Officers #210917 and #1618695.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}