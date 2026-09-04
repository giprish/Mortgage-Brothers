"use client";

import { faqs as pageFaqs } from "./faqs";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import StatsBanner from "../component/StatsBanner";
import LoanProgramHero from "../component/LoanProgramHero";
import HeroFeatureStrip from "../component/HeroFeatureStrip";
import YoutubeLiteEmbed from "../component/YoutubeLiteEmbed";
import FaqAccordion from "../component/FaqAccordion";
import GetInTouch from "../component/GetInTouch";
import IconBadge from "../component/IconBadge";

import CountyTestimonials, { type CountyTestimonial } from "../component/CountyTestimonials";

const CARD_HOVER =
  "group bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm transition-all duration-200 hover:border-[#3fb364] hover:shadow-md hover:bg-[#f8fdf9]";

function SectionCta({ label, href = "#get-pre-approved" }: { label: string; href?: string }) {
  return (
    <div className="loan-btn-wrap">
      <Link
        href={href}
        className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
      >
        {label}
      </Link>
    </div>
  );
}

const standardLimit = {
  oneUnit: "$541,287",
  twoUnit: "$693,050",
  threeUnit: "$837,700",
  fourUnit: "$1,041,125",
};

export default function FhaStreamlineRefinanceArizonaPage() {
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
      desc: "The streamlined process means less paperwork. You won't need to provide extensive financial documentation, making it easier and quicker to complete your refinance.",
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
      desc: "We'll guide you through a streamlined application process, which requires minimal documentation compared to a traditional refinance. You'll typically need to provide your current mortgage statement and proof of on-time payments.",
    },
    {
      title: "Approval",
      desc: "Once your application is submitted, our underwriting team will review it quickly. Since no appraisal is required and credit checks are often waived, this step is usually faster than with other refinance options.",
    },
    {
      title: "Closing",
      desc: "After approval, we'll schedule your closing. You'll sign your new loan documents, and your existing FHA loan will be paid off with the proceeds from your new, ideally lower-rate FHA loan.",
    },
  ];

  const whyStreamlineItems = [
    {
      title: "Simplified Process",
      desc: "Unlike conventional refinancing, the FHA Streamline program requires minimal paperwork and documentation. This means less hassle for you and a faster path to potential savings.",
    },
    {
      title: "No Appraisal Required",
      desc: "In most cases, you can skip the appraisal process entirely. This saves you time and money, and allows you to refinance even if your home's value has decreased.",
    },
    {
      title: "Flexible Credit Requirement",
      desc: "The FHA Streamline program doesn't typically require a credit check. This means you may qualify even if your credit score has changed since your original FHA loan.",
    },
    {
      title: "Potential for Lower Mortgage Insurance",
      desc: "If you obtained your current FHA loan before June 1, 2009, you might be eligible for lower mortgage insurance premiums, leading to additional savings.",
    },
    {
      title: "No Income Verification",
      desc: "The program doesn't require income verification or employment checks, making it easier to qualify if your financial situation has changed.",
    },
    {
      title: "Tangible Benefit Requirement",
      desc: 'The FHA ensures this refinance will benefit you by requiring a "Net Tangible Benefit," such as a lower interest rate or reduced monthly payment.',
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
      desc: "An appraisal is not required, regardless of your home's current equity.",
    },
    {
      title: "Simplified Documentation",
      desc: "No income or job verification is necessary, streamlining the application process.",
    },
  ];

  const savingsBullets = [
    {
      title: "Base Loan amounts",
      desc: "This assumes that the current loan and the new loan have the same loan amount of $350,000.",
    },
    {
      title: "Interest Rates reduction",
      desc: "This FHA streamline refinance scenario looks at a loan with a current rate at 7% and refinancing into a new FHA loan with a 6% interest rate.",
    },
    {
      title: "Payment savings",
      desc: "The payment savings in this hypothetical refinance is $234 per month.",
    },
    {
      title: "Breakeven Time",
      desc: "How long does it take for this refinance to breakeven? We can take the Closing costs of $2,750 and divide it by the monthly savings of $234. That gives us a breakeven time of less than 12 months, which is really quick payback time. This is a very important part of the analysis to determine if the FHA streamline refinance is worth doing.",
    },
  ];

  const loanLimitRows = [
    { county: "Coconino County", ...{ oneUnit: "$609,500", twoUnit: "$780,250", threeUnit: "$943,150", fourUnit: "$1,172,150" } },
    { county: "Maricopa County", ...{ oneUnit: "$557,750", twoUnit: "$714,000", threeUnit: "$863,100", fourUnit: "$1,072,600" } },
    { county: "Pinal County", ...{ oneUnit: "$557,750", twoUnit: "$714,000", threeUnit: "$863,100", fourUnit: "$1,072,600" } },
    { county: "Apache County", ...standardLimit },
    { county: "Cochise County", ...standardLimit },
    { county: "Gila County", ...standardLimit },
    { county: "Graham County", ...standardLimit },
    { county: "Greenlee County", ...standardLimit },
    { county: "La Paz County", ...standardLimit },
    { county: "Mohave County", ...standardLimit },
    { county: "Navajo County", ...standardLimit },
    { county: "Pima County", ...standardLimit },
    { county: "Santa Cruz County", ...standardLimit },
    { county: "Yavapai County", ...standardLimit },
    { county: "Yuma County", ...standardLimit },
  ];

  const whyUsItems = [
    {
      title: "Local Arizona Expertise",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      desc: "As a Phoenix-based mortgage broker, we have in-depth knowledge of the Arizona housing market and FHA loan requirements specific to our state.",
    },
    {
      title: "Experienced Team",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      desc: "Led by Eddie Knoell (NMLS #210917) and Thomas Knoell (NMLS #1618695), our team brings years of mortgage industry experience to guide you through the refinance process.",
    },
    {
      title: "Personalized Service",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      desc: "We take the time to understand your unique financial situation and goals, ensuring we find the best FHA Streamline Refinance option for you.",
    },
    {
      title: "Streamlined Process",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      desc: "Our efficient refinancing process minimizes paperwork and speeds up approval times, getting you to a lower rate faster.",
    },
    {
      title: "Competitive Rates",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      desc: "We leverage our industry relationships to offer you competitive rates and terms on your FHA Streamline Refinance.",
    },
    {
      title: "Client-Focused Approach",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      desc: "Our numerous positive client reviews reflect our commitment to putting your needs first throughout the refinancing journey.",
    },
  ];

  const testimonials: CountyTestimonial[] = [
    {
      name: "Matthew and Christine Mostrom",
      quote:
        "Eddie helped us refinance our home. He was a very good communicator and honest. Got the job done even when His hands were tied due to regulations. Thank you Eddie!",
      attribution: "Matthew and Christine Mostrom, Chandler, Arizona",
    },
    {
      name: "Joelle Engel",
      quote:
        "I appreciated that you worked with us to get us a great rate and to make refinancing affordable. Thank you for doing it in a timely fashion. It was a pleasure working with you!",
      attribution: "Joelle Engel, Phoenix, Arizona",
    },
    {
      name: "Diane Stackwick",
      quote:
        "Thank you Eddie for the fast closing of our loan. Our loan closed in 30 days thanks to you and your staff's diligence. We appreciate the fact that you gave us several financing options. We felt that we had a choice and chose the best option for our needs.",
      attribution: "Diane Stackwick, Phoenix, Arizona",
    },
    {
      name: "Rich Eneim",
      quote:
        "Shopping for a new loan can be very intimidating. I found that different lenders often make promises they just can't keep. Eddie delivers every time with accurate and timely loans. NO surprises at the closing table!",
      attribution: "Rich Eneim, Phoenix, Arizona",
    },
    {
      name: "Ryan and Charity Huston",
      quote:
        "I was very pleased with- all questions being answered, phone calls being returned promptly, and the process being very quick and easy.",
      attribution: "Ryan and Charity Huston, Queen Creek, Arizona",
    },
  ];

  const faqs = pageFaqs;

  const otherPrograms = [
    { label: "Conventional Home Loans", href: "/conventional-home-loans-arizona/" },
    { label: "Conventional vs FHA Loans", href: "/conventional-vs-fha-loans-arizona/" },
    { label: "FHA Home Loans", href: "/fha-home-loans-arizona/" },
    { label: "First Time Home Buyer", href: "/first-time-home-buyer-arizona-guide/" },
    { label: "Jumbo Loans", href: "/jumbo-loans-arizona/" },
    { label: "Reverse Mortgage", href: "/reverse-mortgage-arizona/" },
    { label: "Reverse Mortgage for a Home Purchase", href: "/reverse-mortgage-home-purchase-arizona/" },
    { label: "Private Money Lender", href: "/private-money-lender-arizona/" },
    { label: "Refinancing", href: "/refinancing-arizona/" },
    { label: "VA Loans", href: "/va-loans-arizona/" },
  ];

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
                The FHA Streamline Refinance program is designed to help homeowners with existing FHA loans simplify their refinancing process and potentially improve their financial situation.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                This program offers a unique set of benefits that can make refinancing more accessible and advantageous for many homeowners.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Whether you&apos;re looking to lower your monthly payments, take advantage of better interest rates, or simply streamline your mortgage, the FHA Streamline Refinance could be the solution you&apos;ve been searching for.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Let&apos;s explore the key benefits that make this program stand out:
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="group bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-5 text-left hover:border-[#3fb364] transition-all"
                >
                  <h3 className="text-[16px] font-bold text-[#052316] mb-1.5 font-playfair">{b.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video — live embed */}
        <section className="loan-section bg-[#fcf9f3] !py-10 sm:!py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] shadow-sm">
              <YoutubeLiteEmbed
                videoId="YqOa8IipIPU"
                title="The Mortgage Brothers in Phoenix Arizona"
              />
            </div>
          </div>
        </section>

        {/* STATS BANNER */}
        <section className="loan-cta-band bg-[#fcf9f3] !pb-0">
          <div className="mx-auto max-w-6xl text-center loan-block-gap">
            <Link
              href="#get-pre-approved"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            >
              Lower Your Payments Now
            </Link>
          </div>
          <StatsBanner
            sectionClassName="py-0 bg-transparent"
            stats={[
              { value: "580", label: "Minimum Credit Score" },
              { value: "$0", label: "Upfront Cost" },
              { value: "30%", label: "Potential Payment Reduction" },
              { value: "210", label: "Original Loan must be this many Days old" },
            ]}
          />
        </section>

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
                The FHA Streamline Refinance offers a simplified path to potentially lower your monthly mortgage payments. Here&apos;s a step-by-step overview of how this streamlined process typically unfolds:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {processSteps.map((step, idx) => (
                <div
                  key={step.title}
                  className={`${CARD_HOVER} group`}
                >
                  <IconBadge size="sm" className="font-bold mb-4">
                    {idx + 1}
                  </IconBadge>
                  <h3 className="text-[16px] font-bold text-[#052316] mb-2 font-playfair">{step.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <SectionCta label="Start Your Streamlined Refinance Now" />
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
                The FHA Streamline Refinance program offers unique advantages that set it apart from traditional refinancing options. Here&apos;s why it might be the perfect choice for you:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {whyStreamlineItems.map((item) => (
                <div key={item.title} className={CARD_HOVER}>
                  <h3 className="text-[16px] font-bold text-[#052316] mb-2 font-playfair">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed text-center max-w-3xl mx-auto">
              By choosing the FHA Streamline Refinance, you&apos;re opting for a program designed to make refinancing as smooth and beneficial as possible for FHA loan holders.
            </p>

            <SectionCta label="Explore Your FHA Streamline Options" />
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
                To qualify for an FHA Streamline Refinance in Arizona, you must meet these key requirements:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {eligibilityItems.map((item) => (
                <div
                  key={item.title}
                  className="group bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-6 shadow-sm hover:border-[#3fb364] transition-all"
                >
                  <h3 className="text-[17px] font-bold text-[#052316] mb-2 font-playfair">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CREDIT CTA */}
        <section className="loan-section bg-[#f5f0e8] border-y border-[#e8e0d0]/50">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-[#052316] text-[26px] lg:text-[32px] font-bold font-playfair">
              Ready to Streamline Your FHA Loan? Check Your Credit First
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
              Even with simplified requirements, your credit score matters for refinancing. See if your credit score positions you for the best FHA Streamline terms.
            </p>
            <Link
              href="/arizona-understanding-your-credit/"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            >
              Check Your Credit Readiness
            </Link>
          </div>
        </section>

        {/* SAVINGS TABLE */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                SAVINGS COMPARISON
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                FHA Mortgage Insurance Comparison for 30-Year Fixed Loans
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                The following table looks at the hypothetical scenario of a FHA Streamline Refinance when the interest rate is reduced by 1%. This comparison illustrates potential savings for borrowers with a current FHA loans.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#e0e0e0] bg-white shadow-sm">
              <table className="w-full min-w-[560px] text-left text-[14px]">
                <thead>
                  <tr className="bg-[#052316] text-white">
                    <th className="px-5 py-4 font-semibold">Loan Feature</th>
                    <th className="px-5 py-4 font-semibold">Current FHA Mortgage</th>
                    <th className="px-5 py-4 font-semibold">New FHA Mortgage</th>
                  </tr>
                </thead>
                <tbody className="text-[#4e5b4e]">
                  {[
                    { feature: "Loan Options", current: "FHA 30 Year Fixed", next: "FHA 30 Year Fixed" },
                    { feature: "Base Loan Amount", current: "$350,000", next: "$350,000" },
                    { feature: "Interest Rate", current: "7%", next: "6%" },
                    { feature: "Principal & Interest Payment", current: "$2,369", next: "$2,135" },
                    { feature: "Savings", current: "NA", next: "$234", highlight: true },
                    { feature: "Estimated Closing Costs", current: "NA", next: "$2,750" },
                  ].map((row, idx) => (
                    <tr key={row.feature} className={idx % 2 === 0 ? "bg-white" : "bg-[#fcf9f3]"}>
                      <td className="px-5 py-3.5 font-semibold text-[#052316] border-t border-[#e0e0e0]">{row.feature}</td>
                      <td className="px-5 py-3.5 border-t border-[#e0e0e0]">{row.current}</td>
                      <td className={`px-5 py-3.5 border-t border-[#e0e0e0] ${row.highlight ? "text-[#3fb364] font-bold" : ""}`}>
                        {row.next}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[#4e5b4e] text-[13px] italic text-center">
              *This a hypothetical scenario. Each borrower will have their own unique situation and will need to evaluate their cost analysis and benefits.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {savingsBullets.map((item) => (
                <div key={item.title} className="bg-white border border-[#e0e0e0] rounded-2xl p-5">
                  <h4 className="text-[#052316] text-[15px] font-bold mb-2">{item.title}</h4>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed text-center max-w-3xl mx-auto">
              These differences highlight potential refinancing benefits for borrowers with a current FHA loan and refinancing into a new FHA loan.
            </p>
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
                2026 FHA Loan Limits by Arizona Counties
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                The Federal Housing Administration (FHA) has updated its loan limits for 2026 to reflect changes in housing prices across Arizona. These limits represent the maximum amount you can borrow with an FHA-insured mortgage in each county. The table below provides a comprehensive overview of the FHA loan limits for all Arizona counties, covering single-family to four-unit properties.
              </p>
            </div>

            <div className="md:hidden flex flex-col gap-3">
              {loanLimitRows.map((row) => (
                <article
                  key={row.county}
                  className="rounded-2xl border border-[#e0e0e0] bg-[#fcf9f3] shadow-sm overflow-hidden"
                >
                  <div className="bg-[#052316] px-4 py-3">
                    <h3 className="text-white text-[15px] font-bold leading-snug">{row.county}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-px bg-[#e8e0d0]/70">
                    {[
                      { label: "One-Family", value: row.oneUnit },
                      { label: "Two-Family", value: row.twoUnit },
                      { label: "Three-Family", value: row.threeUnit },
                      { label: "Four-Family", value: row.fourUnit },
                    ].map((cell) => (
                      <div key={cell.label} className="bg-white px-4 py-3.5">
                        <p className="text-[#b8d4b8] text-[10px] font-bold tracking-[0.12em] uppercase mb-1">
                          {cell.label}
                        </p>
                        <p className="text-[#052316] text-[15px] font-semibold tabular-nums">{cell.value}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="hidden md:block overflow-x-auto rounded-2xl border border-[#e0e0e0] bg-white shadow-sm">
              <table className="w-full min-w-[720px] text-left text-[14px]">
                <thead>
                  <tr className="bg-[#052316] text-white">
                    <th className="px-5 py-3.5 font-bold">County Name</th>
                    <th className="px-5 py-3.5 font-bold whitespace-nowrap">One-Family</th>
                    <th className="px-5 py-3.5 font-bold whitespace-nowrap">Two-Family</th>
                    <th className="px-5 py-3.5 font-bold whitespace-nowrap">Three-Family</th>
                    <th className="px-5 py-3.5 font-bold whitespace-nowrap">Four-Family</th>
                  </tr>
                </thead>
                <tbody>
                  {loanLimitRows.map((row, idx) => (
                    <tr key={row.county} className={idx % 2 === 0 ? "bg-white" : "bg-[#fcf9f3]"}>
                      <td className="px-5 py-3.5 font-semibold text-[#052316] border-t border-[#e0e0e0]">
                        {row.county}
                      </td>
                      <td className="px-5 py-3.5 text-[#4e5b4e] border-t border-[#e0e0e0] whitespace-nowrap tabular-nums">
                        {row.oneUnit}
                      </td>
                      <td className="px-5 py-3.5 text-[#4e5b4e] border-t border-[#e0e0e0] whitespace-nowrap tabular-nums">
                        {row.twoUnit}
                      </td>
                      <td className="px-5 py-3.5 text-[#4e5b4e] border-t border-[#e0e0e0] whitespace-nowrap tabular-nums">
                        {row.threeUnit}
                      </td>
                      <td className="px-5 py-3.5 text-[#4e5b4e] border-t border-[#e0e0e0] whitespace-nowrap tabular-nums">
                        {row.fourUnit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[#4e5b4e] text-[15px] leading-relaxed text-center max-w-3xl mx-auto">
              Note: The FHA loan limits for most Arizona counties have increased to $541,287 for single-family homes in 2026. Maricopa and Pinal counties have a higher limit of $557,750, while Coconino County has the highest limit at $609,500. These increases reflect rising home prices and aim to keep FHA loans accessible in various housing markets across Arizona.
            </p>

            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed text-center max-w-3xl mx-auto">
              Don&apos;t miss out on the opportunity to potentially lower your monthly payments and save money on your FHA loan. Our expert team at Mortgage Brothers LLC is ready to guide you through the FHA Streamline Refinance process.
            </p>

            <SectionCta label="Get Your Free FHA Streamline Quote" />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <CountyTestimonials
          title="Real Stories, Real Success: Our Clients' FHA Streamline Refinance Journeys"
          description="At Mortgage Brothers LLC, we take pride in helping Arizona homeowners achieve their financial goals through FHA Streamline Refinance. While every homeowner's situation is unique, these stories highlight the real benefits our clients have experienced. Here are a few examples of how FHA Streamline Refinance has made a positive impact:"
          testimonials={testimonials}
        />

        {/* WHY MORTGAGE BROTHERS */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                LOCAL EXPERTISE
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Why Choose Mortgage Brothers LLC for Your FHA Streamline Refinance
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                At Mortgage Brothers LLC, we&apos;re committed to providing exceptional service and expertise for your FHA Streamline Refinance needs in Arizona. Here&apos;s why we stand out:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {whyUsItems.map((item) => (
                <div key={item.title} className={CARD_HOVER}>
                  <div className="flex items-start gap-4 mb-3">
                    <IconBadge>{item.icon}</IconBadge>
                    <h3 className="text-[16px] font-bold text-[#052316] pt-2">{item.title}</h3>
                  </div>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#052316] rounded-3xl p-8 lg:p-12 text-center text-white space-y-5">
              <p className="text-[16px] lg:text-[17px] text-[#c8c8b8] max-w-2xl mx-auto leading-relaxed">
                At Mortgage Brothers LLC, we&apos;re not just lenders — we&apos;re your partners in achieving your homeownership goals. Let us help you make the most of your FHA Streamline Refinance opportunity.
              </p>
              <a
                href="tel:+16025352171"
                className="inline-block text-[28px] lg:text-[34px] font-bold text-[#3fb364] hover:text-[#359854] transition-colors tracking-tight"
              >
                +1 602-535-2171
              </a>
              <div>
                <a
                  href="tel:+16025352171"
                  className="inline-flex items-center gap-2.5 border border-white/30 hover:border-white text-white font-semibold text-[15px] px-7 py-3.5 rounded-full transition-all hover:bg-white/10"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
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
                Understanding the FHA Streamline Refinance process can be complex. To help you navigate this option, we&apos;ve compiled answers to some of the most common questions our clients ask:
              </p>
            </div>

            <div className="text-left">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </section>

        <GetInTouch
          theme="dark"
          title="Get in Touch with Mortgage Brothers LLC"
          description="Ready to explore your FHA Streamline Refinance options? Our team of experienced mortgage professionals is here to help. We understand that every homeowner's situation is unique, and we're committed to providing personalized assistance tailored to your specific needs. Whether you're looking to lower your interest rate, reduce your monthly payments, or simply have questions about the FHA Streamline Refinance process, we're here to guide you every step of the way. Don't hesitate to reach out — we're eager to help you make informed decisions about your mortgage refinancing options and potentially save money on your home loan."
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
                Explore Our Mortgage Solutions
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
              Mortgage Brothers LLC NMLS #1007154. Eddie Knoell NMLS #210917, Thomas Knoell NMLS #1618695.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
