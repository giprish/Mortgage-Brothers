import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import JsonLd from "@/app/component/JsonLd";
import { buildArticleSchemas } from "@/lib/seo/structured-data";
import FaqAccordion from "../component/FaqAccordion";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

export const metadata: Metadata = getSeoMetadata("/how-to-get-a-mortgage-in-arizona-with-fair-or-improving-credit/");

const relatedLinks = [
  {
    label: "Understanding Your Credit",
    href: "/arizona-understanding-your-credit/",
  },
  {
    label: "How a Rapid Rescore Can Help",
    href: "/how-a-rapid-rescore-can-help-to-get-qualified-for-a-mortgage/",
  },
  {
    label: "Arizona Mortgage Approval Process",
    href: "/arizona-mortgage-approval-process/",
  },
  {
    label: "FHA Home Loans",
    href: "/fha-home-loans-arizona/",
  },
  {
    label: "Ultimate Guide to Your First Mortgage",
    href: "/ultimate-guide-first-mortgage/",
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

const articleFaqs = [
  { question: "What's the minimum credit score to buy a home in Arizona?", answer: "Most loan programs require **620 or higher**. This threshold opens the door to FHA, VA, and conventional loan options." },
  { question: "Can I qualify if my credit is below 620?", answer: "Not at this time. We recommend improving your score first — our team can review your credit and create a quick action plan to reach 620+." },
  { question: "How long does credit improvement take?", answer: "**Depending on your situation, meaningful progress can occur in 30–90 days by paying down debt, correcting errors, and managing utilization.** ← Previous PostNext Post → Start Your Home Loan Journey You can always press Enter⏎ to continue" },
] as const;

const articleJsonLd = buildArticleSchemas({
  blog: {
    pathname: "/how-to-get-a-mortgage-in-arizona-with-fair-or-improving-credit/",
    headline: "How to Get a Mortgage in Arizona with Fair or Improving Credit",
    description: "Learn how buyers with credit scores between 580 and 660 qualify for home loans in Arizona with FHA programs and rapid rescoring.",
    datePublished: "2026-06-10",
    articleSection: "Arizona Mortgage Insights",
  },
  faqs: [...articleFaqs],
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Arizona Mortgage Insights", path: "/arizona-mortgage-insights/" },
    { name: "How to Get a Mortgage in Arizona with Fair or Improving Credit", path: "/how-to-get-a-mortgage-in-arizona-with-fair-or-improving-credit/" },
  ],
});

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

export default function FairOrImprovingCreditPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <JsonLd data={articleJsonLd} />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>How to Get a Mortgage in Arizona with Fair or Improving Credit</>}
          excerpt="Learn how buyers with credit scores between 580 and 660 qualify for home loans in Arizona with FHA programs and rapid rescoring."
          category="Arizona Mortgage Insights"
          categoryHref="/arizona-mortgage-insights/"
          dateLabel="Jun 10, 2026"
          readTime="7 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                You&apos;ve been dreaming of owning a home in Arizona — maybe a starter home in Mesa, a family
                house in Gilbert, or a desert getaway in Tucson. But if your credit isn&apos;t perfect, you might
                wonder whether you can still qualify for a mortgage.
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                Here&apos;s the truth: you don&apos;t need a spotless credit score to buy a home. In 2026, Arizona
                lenders evaluate more than just your score — they look at your full financial picture: income
                stability, savings, employment history, and overall readiness for homeownership.
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                At{" "}
                <Link href="/" className="text-[#3fb364] font-semibold hover:underline">
                  Mortgage Brothers
                </Link>
                , we help Arizona homebuyers strengthen their credit and financial profile so they can qualify for
                the <strong>best loan programs and lowest possible rates.</strong> This guide walks you through how
                to prepare for a mortgage when your credit is fair or improving.
              </p>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Get Your Mortgage Consultation
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Talk with Mortgage Brothers LLC about credit readiness, loan options, and the steps to
                  pre-approval.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="btn-primary"
                  >
                    Get Your Mortgage Consultation
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="understanding-credit-and-mortgage-readiness">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Understanding Credit and Mortgage Readiness
                  </h2>

                  <p className="mb-4">
                    <strong>Credit Score Ranges Explained</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>
                      <strong>Excellent:</strong> 760+
                    </li>
                    <li>
                      <strong>Good:</strong> 720-759
                    </li>
                    <li>
                      <strong>Fair to Good:</strong> 680-719
                    </li>
                    <li>
                      <strong>Fair:</strong> 620-679
                    </li>
                    <li>
                      <strong>Below 620:</strong> Conventional programs typically start at 620, but FHA loans may qualify with scores as low as 580
                    </li>
                  </ul>
                  <p className="mb-5">
                    If your score is <strong>620 or higher</strong>, you are in a strong position for conventional financing, and FHA options may be available down to 580 depending on your full profile and lender guidelines. You may qualify for
                    an FHA or conventional mortgage — especially with strong income and a manageable
                    debt-to-income (DTI) ratio.
                  </p>
                  <p>
                    If you&apos;re below that range, the best next step is to{" "}
                    <strong>improve your score</strong> before applying, so you can secure better loan terms and
                    rates.
                  </p>
                </section>

                <section id="what-lenders-look-at">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What Lenders Actually Look at Beyond Your Credit Score
                  </h2>
                  <p className="mb-3">
                    <strong>While credit score matters, Arizona lenders also focus on:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-3 mb-6">
                    <li>
                      <strong>Employment &amp; income stability:</strong> At least 2 years of consistent work
                      history.
                    </li>
                    <li>
                      <strong>Debt-to-income ratio (DTI):</strong> Under 43% is preferred.
                    </li>
                    <li>
                      <strong>Down payment:</strong> The more you can contribute (10–20%), the stronger your
                      approval odds.
                    </li>
                    <li>
                      <strong>Savings &amp; reserves:</strong> Showing 2–6 months of mortgage payments saved
                      builds lender confidence
                    </li>
                    <li>
                      <strong>Payment history:</strong> Consistent on-time payments, especially for rent or major
                      obligations.
                    </li>
                  </ul>
                  <blockquote className="border-l-4 border-[#3fb364] bg-white/70 pl-5 pr-4 py-4 rounded-r-xl mb-6 italic text-[#052316]">
                    &ldquo;Your credit score is one part of your financial story. We help you strengthen every part
                    that lenders evaluate — not just the number.&rdquo;
                  </blockquote>
                  <div className="text-center my-6">
                    <Link
                      href="/#get-pre-approved"
                      className="btn-primary"
                    >
                      Get Your Mortgage Consultation
                    </Link>
                  </div>
                </section>

                <section id="five-step-plan">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-6 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Your 5-Step Plan to Qualify for a Mortgage with Fair or Improving Credit
                  </h2>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                    Step 1: Review and Update Your Credit Report
                  </h3>
                  <p className="mb-5">
                    Check your credit reports from all three bureaus via AnnualCreditReport.com. Dispute any
                    errors, ensure all paid accounts are reported correctly, and monitor your utilization —
                    keeping it below 30%.
                  </p>
                  <p className="mb-8">
                    Even small improvements can raise your score by 20–40 points, helping you move into the 580+
                    range needed for FHA or the 620+ range for most conventional loans.
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                    Step 2: Strengthen Your Financial Profile
                  </h3>
                  <p className="mb-3">While improving your credit, also focus on:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-8">
                    <li>Paying down credit cards and installment loans.</li>
                    <li>Avoiding new debt or credit inquiries.</li>
                    <li>Building a larger down payment (10–20% if possible).</li>
                    <li>Maintaining stable employment and consistent deposits.</li>
                  </ul>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                    Step 3: Explore Loan Programs for Fair to Good Credit
                  </h3>
                  <p className="mb-5">
                    Mortgage options for Arizona buyers include:
                  </p>

                  <h4 className="text-[#052316] text-[17px] font-bold mb-2">FHA Loans</h4>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>Minimum score: 580+ with FHA backing (lender overlays may apply)</li>
                    <li>Low down payments (3.5%)</li>
                    <li>Flexible debt ratios</li>
                    <li>Ideal for first-time buyers improving their credit</li>
                  </ul>

                  <h4 className="text-[#052316] text-[17px] font-bold mb-2">Conventional Loans</h4>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>Minimum score: 620+ recommended</li>
                    <li>Better rates with stronger credit</li>
                    <li>Suitable for buyers with steady income and savings</li>
                  </ul>

                  <h4 className="text-[#052316] text-[17px] font-bold mb-2">VA Loans (for Veterans)</h4>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>Flexible requirements for eligible service members</li>
                    <li>$0 down and no PMI</li>
                  </ul>

                  <h4 className="text-[#052316] text-[17px] font-bold mb-2">USDA Loans (Rural Areas)</h4>
                  <ul className="list-disc pl-6 space-y-2 mb-8">
                    <li>Typically 640+ credit required</li>
                    <li>$0 down for qualifying locations</li>
                  </ul>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                    Step 4: Work with Experienced Arizona Mortgage Advisors
                  </h3>
                  <p className="mb-3">
                    At{" "}
                    <Link href="/" className="text-[#3fb364] font-semibold hover:underline">
                      Mortgage Brothers
                    </Link>
                    , we guide Arizona buyers through:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>
                      <strong>Credit readiness planning</strong> – how to reach 580+ for FHA or 620+ for conventional loans quickly
                    </li>
                    <li>
                      <strong>Loan comparison</strong> – FHA vs. conventional options
                    </li>
                    <li>
                      <strong>Pre-approval strategy</strong> – knowing what you can afford before you shop
                    </li>
                  </ul>
                  <p className="mb-8">
                    Our team doesn&apos;t focus on subprime or low-credit borrowers — we focus on helping
                    responsible buyers <strong>qualify confidently</strong> and{" "}
                    <strong>close efficiently</strong>.
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                    Step 5: Get Pre-Approved and Start Shopping
                  </h3>
                  <p className="mb-5">
                    Once your credit and finances are in place, pre-approval shows sellers you&apos;re serious —
                    and helps you move fast when you find the right home.
                  </p>
                  <p className="mb-3">You&apos;ll need:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>Credit and income verification</li>
                    <li>Asset and savings documentation</li>
                    <li>Consistent job history</li>
                  </ul>
                  <p>
                    Mortgage Brothers&apos; pre-approvals carry weight with Arizona agents because they know we
                    close on time.
                  </p>
                </section>

                <section id="smart-tips">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Smart Tips for Credit-Ready Buyers
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>Keep credit card balances below 30% utilization</li>
                    <li>Avoid large purchases before or during the loan process</li>
                    <li>Don&apos;t close long-standing credit accounts</li>
                    <li>Continue saving consistently</li>
                    <li>Review your credit report quarterly</li>
                  </ul>
                </section>

                <section id="homeownership-path">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Your Arizona Homeownership Path Starts Here
                  </h2>
                  <p className="mb-6">
                    If your credit is <strong>580 or above</strong>, you may already be on track to qualify for FHA,
                    and 620+ is typically the conventional threshold. If it&apos;s close, our advisors can help you
                    fine-tune your profile to get there faster — so you can buy with confidence and secure better
                    loan terms.
                  </p>
                  <div className="text-center my-6">
                    <Link
                      href="/#get-pre-approved"
                      className="btn-primary"
                    >
                      Talk to a Local Mortgage Expert Today
                    </Link>
                  </div>
                </section>

                <section id="homeownership-path">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Your Arizona Homeownership Path Starts Here
                  </h2>
                  <p className="mb-6">
                    If your credit is <strong>580 or above</strong>, you may already be on track to qualify for FHA,
                    and 620+ is typically the conventional threshold. If it&apos;s close, our advisors can help you
                    fine-tune your profile to get there faster — so you can buy with confidence and secure better
                    loan terms.
                  </p>
                  <div className="text-center my-6">
                    <Link
                      href="/#get-pre-approved"
                      className="btn-primary"
                    >
                      Talk to a Local Mortgage Expert Today
                    </Link>
                  </div>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                    Contact Mortgage Brothers today for:
                  </h3>
                  <p className="mb-4">
                    <strong>Ready to explore your options?</strong> <strong>Mortgage Brothers</strong> offers:
                  </p>
                  <ul className="space-y-2 mb-5">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#3fb364] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Free mortgage consultation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#3fb364] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Credit readiness review (580+ FHA / 620+ conventional)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#3fb364] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>
                        <Link href="/fha-home-loans-arizona/" className="text-[#3fb364] font-semibold hover:underline">FHA</Link>,{" "}
                        <Link href="/conventional-home-loans-arizona/" className="text-[#3fb364] font-semibold hover:underline">Conventional</Link> &amp;{" "}
                        <Link href="/va-loans-arizona/" className="text-[#3fb364] font-semibold hover:underline">VA loan</Link> options
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#3fb364] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Transparent advice from local Arizona experts</span>
                    </li>
                  </ul>
                  <p className="mb-2 flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#3fb364] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <strong>Call:</strong>{" "}
                    <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                      +1 602 535 2171
                    </a>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#3fb364] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
                    </svg>
                    <strong>Visit:</strong>{" "}
                    <Link href="/" className="text-[#3fb364] font-semibold hover:underline">
                      Mortgage Brothers
                    </Link>
                  </p>
                </section>

                <section id="faqs">
                  <FaqAccordion
                    title="Frequently Asked Questions"
                    items={[
                    { q: "What's the minimum credit score to buy a home in Arizona?", a: <>Most conventional loan programs look for 620 or higher, but FHA loans may qualify with scores as low as 580.</> },
                    { q: "Can I qualify if my credit is below 620 or even below 580?", a: <>Most conventional loan programs look for 620 or higher, but FHA loans may qualify with scores as low as 580. If your score is below 580, we recommend improving it first — our team can review your credit and create a quick action plan.</> },
                    { q: "How long does credit improvement take?", a: <>Depending on your situation, meaningful progress can occur in{" "}
                        <strong>30–90 days</strong> by paying down debt, correcting errors, and managing
                        utilization.</> }
                    ]}
                  />
                </section>

                <p className="text-[#5a6b52] text-[13px] leading-relaxed pt-4">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has been
                  prepared for informational purposes only. You should consult your own tax, legal, and accounting
                  advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS #210917 and
                  1618695. Equal housing lender.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/who-qualifies-for-a-reverse-mortgage-understanding-eligibility-requirements/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/top-7-reasons-arizona-investment-home-buyers-choose-private-money-lenders/"
                  className="text-[#5a6b52] hover:text-[#3fb364] transition-colors"
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
                  className="btn-primary w-full"
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
              className="btn-primary"
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
            <Link
              href="/#get-pre-approved"
              className="btn-primary"
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