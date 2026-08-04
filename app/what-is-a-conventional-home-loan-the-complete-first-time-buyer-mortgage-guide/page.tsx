"use client";

import FaqAccordion from "../component/FaqAccordion";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

const relatedLinks = [
  {
    label: "Ultimate Guide to Your First Mortgage",
    href: "/ultimate-guide-first-mortgage/",
  },
  {
    label: "VA Loans for First-Time Homebuyers",
    href: "/va-loans-for-first-time-homebuyers-in-arizona-your-path-to-affordable-homeownership/",
  },
  {
    label: "Conventional vs FHA Loans",
    href: "/conventional-home-loans-vs-fha-loans-which-is-right-for-you/",
  },
  {
    label: "First-time Home Buyer Guide",
    href: "/first-time-home-buyer-arizona-guide/",
  },
  {
    label: "Jumbo Loans Arizona",
    href: "/jumbo-loans-arizona/",
  },
];

const categories = [
  { label: "Arizona Mortgage Insights", href: "/arizona-mortgage-insights/" },
  { label: "FHA Loans", href: "/fha-loans/" },
  { label: "Homeownership Tips", href: "/homeownership-tips/" },
  { label: "Mortgage Basics", href: "/mortgage-basics/" },
  { label: "Mortgage Payments & Strategies", href: "/mortgage-payments-strategies/" },
  { label: "Mortgage Process Guidance", href: "/mortgage-process-guidance/" },
  { label: "Mortgage Qualifications", href: "/mortgage-qualifications/" },
  { label: "Real Estate & Mortgages", href: "/real-estate-mortgages/" },
  { label: "Specialty Loans", href: "/specialty-loans/" },
  { label: "Spouse & Estate Considerations", href: "/spouse-estate-considerations/" },
];

const loanPrograms = [
  { label: "Conventional Home Loans", href: "/conventional-home-loans-arizona/" },
  { label: "FHA Home Loans", href: "/fha-home-loans-arizona/" },
  { label: "Conventional vs FHA Loans", href: "/conventional-vs-fha-loans-arizona/" },
  { label: "FHA Streamline Refinance", href: "/fha-streamline-refinance-arizona/" },
  { label: "Reverse Mortgage", href: "/reverse-mortgage-arizona/" },
  { label: "Reverse Mortgage for a Home Purchase", href: "/reverse-mortgage-home-purchase-arizona/" },
  { label: "Private Money Lender", href: "/private-money-lender-arizona/" },
  { label: "VA Loans", href: "/va-loans-arizona/" },
  { label: "Mortgage Refinancing", href: "/refinancing-arizona/" },
  { label: "Jumbo Loans", href: "/jumbo-loans-arizona/" },
  { label: "First-time Home Buyer Guide", href: "/first-time-home-buyer-arizona-guide/" },
];

const loanSolutions = [
  { label: "Conventional Home Loans", href: "/conventional-home-loans-arizona/" },
  { label: "Private Money Lender", href: "/private-money-lender-arizona/" },
  { label: "FHA Home Loans", href: "/fha-home-loans-arizona/" },
  { label: "FHA Streamline Refinance", href: "/fha-streamline-refinance-arizona/" },
  { label: "First Time Home Buyer", href: "/first-time-home-buyer-arizona-guide/" },
  { label: "Reverse Mortgage", href: "/reverse-mortgage-arizona/" },
  { label: "Reverse Mortgage for a Home Purchase", href: "/reverse-mortgage-home-purchase-arizona/" },
  { label: "Refinancing", href: "/refinancing-arizona/" },
  { label: "Jumbo Loans", href: "/jumbo-loans-arizona/" },
  { label: "VA Loans", href: "/va-loans-arizona/" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What exactly is a conventional home loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A conventional home loan is a mortgage not insured by the federal government, offered by private lenders like banks or credit unions.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 2026 conforming loan limit in Arizona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For 2026, the conforming loan limit for a single-family home in Arizona is $806,500.",
      },
    },
    {
      "@type": "Question",
      name: "What credit score is needed for a conventional loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A minimum credit score of 620 is usually required to qualify for a conventional loan.",
      },
    },
  ],
};

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-[#3fb364] shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function ConventionalHomeLoanGuidePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />
      <div className="h-[64px] sm:h-[72px] bg-[#08271B] w-full shrink-0" aria-hidden />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>What Is a Conventional Home Loan? The Complete First-Time Buyer Mortgage Guide</>}
          excerpt="Learn what a conventional home loan is, 2025 Arizona loan limits, qualification requirements, and how it compares to FHA, VA, and jumbo options."
          category="Mortgage Process Guidance"
          categoryHref="/mortgage-process-guidance/"
          dateLabel="Sep 16, 2025"
          readTime="12 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                Buying your first home in Arizona is an exciting milestone — but it can also feel overwhelming.
                From choosing the right neighborhood to securing financing, there are a lot of moving parts. One
                of the biggest decisions you&apos;ll face is <strong>which type of mortgage loan to use</strong>.
              </p>
              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                For many buyers, a{" "}
                <Link
                  href="/conventional-home-loans-arizona/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  <strong>conventional home loan</strong>
                </Link>{" "}
                is the best fit. Conventional loans are popular, flexible, and often come with long-term
                advantages, especially if you have a strong credit profile. In this guide, we&apos;ll break down
                exactly what a conventional loan is, who qualifies, what Arizona loan limits look like in 2025,
                and how it compares to other options like FHA and VA loans.
              </p>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Ready to Explore Conventional Loan Options?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Get pre-approved and see how a conventional home loan can work for your first Arizona purchase.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                  >
                    Start My Pre-Approval &rarr;
                  </Link>
                  <Link
                    href="/contact-us/"
                    className="inline-flex items-center gap-2 text-[#3fb364] hover:underline text-[15px] font-semibold px-4 py-3 transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="what-exactly-is-a-conventional-home-loan">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What Exactly Is a Conventional Home Loan?
                  </h2>
                  <p className="mb-5">
                    A <strong>conventional home loan</strong> is any mortgage that isn&apos;t insured or
                    guaranteed by the federal government. Instead, it&apos;s offered by private lenders such as
                    banks, credit unions, or mortgage companies. Conventional loans are the most common mortgage
                    type in the U.S., especially among first-time buyers with steady income and decent credit
                    (<a href="https://www.consumerfinance.gov/ask-cfpb/what-is-private-mortgage-insurance-en-122/" target="_blank" rel="noopener" className="text-[#3fb364] font-semibold hover:underline">Consumer Financial Protection Bureau</a>).
                  </p>
                  <p className="mb-3">There are two main categories:</p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <strong>Conforming Loans</strong> – These meet the loan limits set by the Federal Housing
                      Finance Agency (FHFA) and can be sold to Fannie Mae or Freddie Mac.
                    </li>
                    <li>
                      <strong>Non-Conforming Loans (Jumbo Loans)</strong> – These exceed FHFA limits and are not
                      eligible to be sold to Fannie Mae or Freddie Mac.
                    </li>
                  </ul>
                </section>

                <section id="2025-arizona-loan-limits">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    2025 Arizona Loan Limits
                  </h2>
                  <p className="mb-5">
                    Loan limits determine how large a loan can be while still being considered
                    &ldquo;conforming.&rdquo; For 2025, the conforming loan limit for a single-family home in
                    Arizona is <strong>$806,500</strong> (<a href="https://www.fhfa.gov/sites/default/files/2024-11/FullCountyLoanLimitList2025_HERA-BASED_FINAL_FLAT.pdf" target="_blank" rel="noopener" className="text-[#3fb364] font-semibold hover:underline">FHFA 2025 Loan Limits PDF</a>).
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>
                      <strong>Conventional (Conforming) Loan</strong> → Up to <strong>$806,500</strong>
                    </li>
                    <li><strong>Jumbo Loan → $806,501 and above</strong></li>
                  </ul>
                  <p>
                    These limits apply to most Arizona counties, including Maricopa, Pima, Pinal, and Mohave.
                  </p>
                </section>

                <section id="why-first-time-buyers-choose-conventional-loans">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Why First-Time Buyers Choose Conventional Loans
                  </h2>
                  <p className="mb-5">
                    For many Arizona first-time buyers, conventional loans offer a balance of flexibility,
                    affordability, and long-term savings. Some of the key benefits include:
                  </p>
                  <p className="mb-5"><strong>1. Lower Down Payment Options</strong></p>
                  <p className="mb-5">
                    Conventional loans aren&apos;t just for buyers with large savings. Certain programs allow
                    first-time buyers to put down as little as <strong>3%</strong> (<a href="https://www.freddiemac.com/homepossible" target="_blank" rel="noopener" className="text-[#3fb364] font-semibold hover:underline">Freddie Mac Home Possible®</a>).
                  </p>
                  <p className="mb-5"><strong>2. Flexible Credit Requirements</strong></p>
                  <p className="mb-5">
                    A <strong>minimum credit score of 620</strong> is usually required (Fannie Mae Eligibility
                    Matrix).
                  </p>
                  <p className="mb-5">
                    <strong>3. Cancelable Private Mortgage Insurance (PMI)</strong>
                  </p>
                  <p className="mb-5">
                    If your down payment is under 20%, you&apos;ll need PMI. The advantage with conventional loans
                    is that PMI can be <strong>removed once you reach 20% equity</strong>.
                  </p>
                  <p className="mb-5"><strong>4. Broad Property Eligibility</strong></p>
                  <p>
                    Conventional loans can be used for{" "}
                    <strong>primary residences, second homes, and even investment properties</strong> (<a href="https://singlefamily.fanniemae.com/media/9391/display" target="_blank" rel="noopener" className="text-[#3fb364] font-semibold hover:underline">Fannie Mae
                    Selling Guide</a>).
                  </p>
                </section>

                <section id="conventional-loan-requirements">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Conventional Loan Requirements
                  </h2>
                  <p className="mb-4">
                    To qualify for a conventional mortgage in 2025, first-time buyers should be prepared for:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 mb-6">
                    <li>
                      <strong>Credit Score</strong>: Minimum of 620, but higher scores mean better terms.
                    </li>
                    <li>
                      <strong>Down Payment</strong>: As little as 3% for first-time buyers; 5–20% for others.
                    </li>
                    <li>
                      <strong>Debt-to-Income Ratio (DTI)</strong>: Generally under 36% is preferred, though some
                      lenders allow up to 45–50% (<a href="https://singlefamily.fanniemae.com/media/9391/display" target="_blank" rel="nofollow noopener" className="text-[#3fb364] font-semibold hover:underline">Fannie Mae</a>, <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-private-mortgage-insurance-en-122/" target="_blank" rel="nofollow noopener" className="text-[#3fb364] font-semibold hover:underline">CFPB</a>).
                    </li>
                    <li>
                      <strong>Employment &amp; Income</strong>: At least 2 years of stable employment history with
                      documented income (<a href="https://www.investopedia.com/terms/c/conventionalmortgage.asp" target="_blank" rel="nofollow noopener" className="text-[#3fb364] font-semibold hover:underline">Investopedia Conventional Loan Guide</a>).
                    </li>
                  </ul>
                  <div className="text-center">
                    <Link
                      href="/#getin_touch"
                      className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                    >
                      Start My Pre-Approval
                    </Link>
                  </div>
                </section>

                <section id="conventional-vs-fha-va-and-jumbo-loans">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Conventional vs. FHA, VA, and Jumbo Loans
                  </h2>
                  <p className="mb-5">
                    Here&apos;s how conventional loans compare to other common options in 2025:
                  </p>
                  <div className="overflow-x-auto rounded-xl border-2 border-[#4b800a] bg-gradient-to-b from-[#e1ffbd] to-[#e6ffc9] p-4 lg:p-5">
                    <table className="w-full min-w-[640px] text-left text-[14px] border-collapse">
                      <thead>
                        <tr className="border-b border-[#4b800a]/40">
                          <th className="py-3 pr-3 font-bold text-[#052316]">Feature</th>
                          <th className="py-3 pr-3 font-bold text-[#052316]">Conventional Loan</th>
                          <th className="py-3 pr-3 font-bold text-[#052316]">FHA Loan</th>
                          <th className="py-3 pr-3 font-bold text-[#052316]">VA Loan (<a href="https://www.va.gov/housing-assistance/home-loans/loan-types/" target="_blank" rel="noopener" className="text-[#3fb364] font-semibold hover:underline">VA.gov</a>)</th>
                          <th className="py-3 font-bold text-[#052316]">Jumbo Loan</th>
                        </tr>
                      </thead>
                      <tbody className="text-[#3a4a3a]">
                        <tr className="border-b border-[#4b800a]/20">
                          <td className="py-3 pr-3 font-semibold">Down Payment</td>
                          <td className="py-3 pr-3">As low as 3%</td>
                          <td className="py-3 pr-3">3.5% (580+ credit score)</td>
                          <td className="py-3 pr-3">0% (for eligible veterans)</td>
                          <td className="py-3">10–20% typical</td>
                        </tr>
                        <tr className="border-b border-[#4b800a]/20">
                          <td className="py-3 pr-3 font-semibold">Credit Score</td>
                          <td className="py-3 pr-3">620+</td>
                          <td className="py-3 pr-3">580+</td>
                          <td className="py-3 pr-3">Flexible, no set minimum</td>
                          <td className="py-3">700+ preferred</td>
                        </tr>
                        <tr className="border-b border-[#4b800a]/20">
                          <td className="py-3 pr-3 font-semibold">Mortgage Insurance</td>
                          <td className="py-3 pr-3">PMI (removable)</td>
                          <td className="py-3 pr-3">MIP (often permanent)</td>
                          <td className="py-3 pr-3">None for most borrowers</td>
                          <td className="py-3">None, but higher rates</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-3 font-semibold">Loan Limit</td>
                          <td className="py-3 pr-3">$806,500</td>
                          <td className="py-3 pr-3">~$498,257 (varies)</td>
                          <td className="py-3 pr-3">No cap with entitlement</td>
                          <td className="py-3">$806,501+</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="mortgage-options-by-credit-level">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Mortgage Options by Credit Level
                  </h2>
                  <p className="mb-4">
                    Your credit score plays a big role in your loan options and interest rate:
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <strong>Excellent Credit (740+)</strong> → Best rates, lowest PMI.
                    </li>
                    <li>
                      <strong>Good Credit (680–739)</strong> → Competitive rates with manageable PMI.
                    </li>
                    <li>
                      <strong>Fair Credit (620–679)</strong> → Still eligible for conventional, though FHA may
                      provide more leniency.
                    </li>
                    <li>
                      <strong>Below 620</strong> → May need to improve credit before qualifying, or consider FHA
                      options.
                    </li>
                  </ul>
                </section>

                <section id="first-time-buyer-tips-for-arizona">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    First-Time Buyer Tips for Arizona
                  </h2>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <strong>Check Your Credit</strong> – Request a free report from <a href="https://www.annualcreditreport.com/" target="_blank" rel="noopener" className="text-[#3fb364] font-semibold hover:underline">AnnualCreditReport.com</a>
                    </li>
                    <li>
                      <strong>Save for a Down Payment</strong> – Even if you qualify for 3% down, a larger down
                      payment reduces PMI and monthly costs.
                    </li>
                    <li>
                      <strong>Calculate Affordability</strong> – Keep housing costs under 28% of your monthly
                      income (<a href="https://www.consumerfinance.gov/owning-a-home/process/prepare/determine-your-budget/" target="_blank" rel="noopener" className="text-[#3fb364] font-semibold hover:underline">CFPB Mortgage Affordability</a>).
                    </li>
                    <li>
                      <strong>Get Pre-Approved</strong> – A pre-approval from AZ Mortgage Brothers helps you shop
                      with confidence.
                    </li>
                    <li>
                      <strong>Work With Local Experts</strong> – Arizona mortgage professionals can help you
                      navigate county-specific loan limits and eligibility rules.
                    </li>
                  </ul>
                </section>

                <section id="why-choose-az-mortgage-brothers">
                  <h3
                    className="text-[#052316] text-[22px] sm:text-[24px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Why Choose AZ Mortgage Brothers?
                  </h3>
                  <p className="mb-5">
                    AZ Mortgage Brothers specialize in conventional loans,{" "}
                    <Link
                      href="/fha-home-loans-arizona/"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      FHA loans
                    </Link>
                    ,{" "}
                    <Link href="/va-loans-arizona/" className="text-[#3fb364] font-semibold hover:underline">
                      VA loans
                    </Link>
                    ,{" "}
                    <Link href="/jumbo-loans-arizona/" className="text-[#3fb364] font-semibold hover:underline">
                      jumbo loans
                    </Link>
                    ,{" "}
                    <Link href="/refinancing-arizona/" className="text-[#3fb364] font-semibold hover:underline">
                      refinancing
                    </Link>
                    ,{" "}
                    <Link
                      href="/reverse-mortgage-arizona/"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      reverse mortgages
                    </Link>
                    , and{" "}
                    <Link
                      href="/private-money-lender-arizona/"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      private money lending
                    </Link>
                    . Their Arizona-based team helps first-time buyers secure fast pre-approvals and personalized
                    loan solutions.
                  </p>
                  <p>
                    With the right guidance, buying your first home in Arizona doesn&apos;t have to be
                    overwhelming.
                  </p>
                </section>

                <section id="faqs">
                  <FaqAccordion
                    title="FAQs (Frequently Asked Questions)"
                    items={[
                    { q: "What exactly is a conventional home loan?", a: <>A conventional home loan is a mortgage not insured by the federal government, offered by
                        private lenders like banks or credit unions.</> },
                    { q: "What is the 2026 conforming loan limit in Arizona?", a: <>For 2026, the conforming loan limit for a single-family home in Arizona is $806,500.</> },
                    { q: "What credit score is needed for a conventional loan?", a: <>A minimum credit score of 620 is usually required to qualify for a conventional loan.</> }
                    ]}
                  />
                </section>

                <p>
                  If you have any questions about this or if you have any questions you&apos;d like us to answer
                  on our podcast, you can submit your questions using our{" "}
                  <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                    contact form
                  </Link>{" "}
                  or give us a call at{" "}
                  <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                    (602) 535-2171
                  </a>
                  . Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with you
                  and help you through the whole process.
                </p>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl mt-5">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with you
                    and help you through the whole process.
                  </p>
                </div>

                <p className="text-[#8a9a7a] text-[13px] leading-relaxed mt-5">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has been
                  prepared for informational purposes only. You should consult your own tax, legal, and accounting
                  advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS #210917 and
                  1618695. Equal housing lender.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/ultimate-guide-first-mortgage/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/va-loans-for-first-time-homebuyers-in-arizona-your-path-to-affordable-homeownership/"
                  className="text-[#8a9a7a] hover:text-[#3fb364] transition-colors"
                >
                  Next Post →
                </Link>
              </div>
            </article>

            <aside className="lg:sticky lg:top-[100px] h-fit space-y-6">
              <div className="bg-[#f0f2f5] border-t-4 border-[#3fb364] rounded-b-2xl p-6 text-center shadow-sm">
                <p className="text-[#08271B] text-[11px] font-bold tracking-[0.15em] uppercase mb-1">
                  The Mortgage Brothers Team
                </p>
                <h3 className="text-[#08271B] text-[20px] font-extrabold uppercase tracking-wide leading-snug mt-4 mb-2">
                  Your Dream Home Awaits!
                </h3>
                <p className="text-[#6a7a6a] text-[11px] font-semibold uppercase tracking-wide mb-4">
                  Expert mortgage solutions tailored to your needs
                </p>
                <p className="text-[#3fb364] text-[14px] font-bold uppercase mb-5">
                  Talk to a Broker Today!
                </p>
                <a
                  href="tel:+16025352171"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-semibold px-4 py-3 rounded-full transition-all"
                >
                  +1 602-535-2171
                </a>
              </div>

              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                <h3 className="text-[#08271B] text-[16px] font-bold mb-4">Categories</h3>
                <ul className="space-y-2.5">
                  {categories.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[13.5px] text-[#4e5b4e] hover:text-[#3fb364] transition-colors leading-snug"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                <h3 className="text-[#08271B] text-[16px] font-bold mb-4">Related Reading</h3>
                <ul className="space-y-2.5">
                  {relatedLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[13.5px] text-[#4e5b4e] hover:text-[#3fb364] transition-colors leading-snug"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                <h3 className="text-[#08271B] text-[16px] font-bold mb-4">Loan Programs</h3>
                <ul className="space-y-2.5">
                  {loanPrograms.map((item) => (
                    <li key={item.href + item.label}>
                      <Link
                        href={item.href}
                        className="text-[13.5px] text-[#4e5b4e] hover:text-[#3fb364] transition-colors leading-snug"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="w-full bg-[#08271B] py-14 lg:py-16 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2
              className="text-white text-[28px] lg:text-[34px] font-normal mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tailored Mortgage Solutions
            </h2>
            <p className="text-[#c8c8b8] text-[15.5px] leading-relaxed mb-7">
              Have questions about financing options? Our experts are here to help with personalized advice for
              any mortgage type. Fill out our form to get started today!
            </p>
            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            >
              Contact Us
            </Link>
          </div>
        </section>

        <section className="w-full bg-[#f5f0e8] py-16 lg:py-20 border-y border-[#e8e0d0]/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2
              className="text-[#08271B] text-[30px] lg:text-[38px] font-normal leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get in Touch with The Mortgage Brothers
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-8 max-w-2xl mx-auto">
              Ready to take the next step towards your dream home? One of our experienced mortgage professionals
              will get back to you promptly with personalized solutions tailored to your unique financial
              situation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-[14.5px] text-[#08271B]">
              <a href="tel:+16025352171" className="font-semibold hover:text-[#3fb364] transition-colors">
                +1 602-535-2171
              </a>
              <span className="hidden sm:inline text-[#c8c8b8]">|</span>
              <span className="text-center">1599 East Orangewood Ave Suite 200, Phoenix, AZ 85020</span>
            </div>
            <Link
              href="/#get-pre-approved"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all"
            >
              Get Your Rate Now
            </Link>
          </div>
        </section>

        <section className="w-full py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2
              className="text-[#08271B] text-[28px] lg:text-[34px] font-normal text-center mb-10"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Explore Our Mortgage Solutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {loanSolutions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 bg-white border border-[#e8e0d0]/70 rounded-xl px-5 py-4 text-[#08271B] font-semibold text-[14.5px] hover:border-[#3fb364]/50 hover:text-[#3fb364] transition-all"
                >
                  <CheckIcon />
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