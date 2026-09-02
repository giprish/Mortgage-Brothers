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

export const metadata: Metadata = getSeoMetadata("/what-is-a-jumbo-loan-everything-you-need-to-know-before-applying/");

const relatedLinks = [
  {
    label: "Jumbo Loans in Arizona",
    href: "/jumbo-loans-arizona/",
  },
  {
    label: "Conventional vs FHA Loans",
    href: "/conventional-vs-fha-loans-arizona/",
  },
  {
    label: "Arizona Mortgage Basics",
    href: "/arizona-mortgage-basics/",
  },
  {
    label: "Ultimate Guide to Your First Mortgage",
    href: "/ultimate-guide-first-mortgage/",
  },
  {
    label: "What Is a Conventional Home Loan?",
    href: "/what-is-a-conventional-home-loan-the-complete-first-time-buyer-mortgage-guide/",
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
  { question: "1. What credit score do I need for a jumbo loan in Arizona?", answer: "Most lenders require at least a **700–720 credit score**, but higher scores can unlock better rates and more flexible terms." },
  { question: "2. Can I use a jumbo loan for a vacation home or investment property?", answer: "Yes. Many Arizona lenders offer jumbo financing for **second homes and investment properties**, though down payment and reserve requirements are typically higher." },
  { question: "3. Are jumbo loan rates higher than conventional mortgage rates?", answer: "They used to be, but not always today. In competitive markets, jumbo rates can be **similar or even slightly lower** than conforming rates depending on your profile." },
  { question: "4. How can I increase my chances of jumbo loan approval?", answer: "Focus on strengthening your credit, maintaining low debt levels, and building substantial liquid reserves before applying." },
] as const;

const articleJsonLd = buildArticleSchemas({
  blog: {
    pathname: "/what-is-a-jumbo-loan-everything-you-need-to-know-before-applying/",
    headline: "What Is a Jumbo Loan? Everything You Need to Know Before Applying",
    description: "Understanding non-conforming luxury home financing, qualification rules, and 2026 limits in Scottsdale and Phoenix.",
    datePublished: "2026-05-12",
    articleSection: "Arizona Mortgage Insights",
  },
  faqs: [...articleFaqs],
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Arizona Mortgage Insights", path: "/arizona-mortgage-insights/" },
    { name: "What Is a Jumbo Loan? Everything You Need to Know Before Applying", path: "/what-is-a-jumbo-loan-everything-you-need-to-know-before-applying/" },
  ],
});

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-[#3fb364] shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function WhatIsAJumboLoanPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <JsonLd data={articleJsonLd} />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>What Is a Jumbo Loan? Everything You Need to Know Before Applying</>}
          excerpt="Understanding non-conforming luxury home financing, qualification rules, and 2026 limits in Scottsdale and Phoenix."
          category="Arizona Mortgage Insights"
          categoryHref="/arizona-mortgage-insights/"
          dateLabel="May 12, 2026"
          readTime="9 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                Arizona&apos;s luxury real estate market continues to flourish. From Paradise Valley&apos;s private
                estates to Scottsdale&apos;s modern hillside homes, high-value properties are in high demand. But if
                you&apos;re planning to purchase a home priced above $800,000, you&apos;ll quickly learn that
                conventional loans won&apos;t always cover the full amount. That&apos;s where{" "}
                <Link
                  href="/jumbo-loans-arizona/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  <strong>jumbo loans</strong>
                </Link>{" "}
                come in — mortgage options designed specifically for high-value properties that exceed standard
                lending limits.
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                Whether you&apos;re a first-time luxury homebuyer or a seasoned investor, understanding how jumbo
                loans work in Arizona can make a major difference in your approval process and long-term costs.
                Let&apos;s break down what these loans are, how they work, and what it takes to qualify.
              </p>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="what-is-a-jumbo-loan">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>What Is a Jumbo Loan?</strong>
                  </h2>
                  <p className="mb-5">
                    A <strong>jumbo loan</strong> is a mortgage that exceeds the{" "}
                    <strong>conforming loan limits</strong> set annually by the{" "}
                    <a
                      href="https://www.fhfa.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      <strong>Federal Housing Finance Agency (FHFA)</strong>
                    </a>
                    . These limits determine how much Fannie Mae and Freddie Mac can buy or guarantee from
                    lenders.
                  </p>
                  <p>
                    Any mortgage that surpasses that limit is classified as a jumbo loan. Because jumbo loans are
                    not backed by government-sponsored entities, lenders carry the full risk — which means
                    stricter approval standards and more comprehensive financial verification for borrowers.
                  </p>
                </section>

                <section id="arizona-2025-jumbo-loan-limit">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>Arizona&apos;s 2025 Jumbo Loan Limit</strong>
                  </h2>
                  <p className="mb-5">
                    For 2025, the <strong>conforming loan limit in most Arizona counties is $806,500</strong> for
                    single-family homes. <strong>In 2026</strong>, the conforming loan limit is estimated to be over
                    $825,000.
                  </p>
                  <p className="mb-5">
                    That includes Maricopa County (Phoenix, Scottsdale, Mesa), Pinal County, and Coconino County.
                  </p>
                  <p>
                    If the amount you borrow exceeds that threshold, your mortgage falls into{" "}
                    <strong>jumbo loan territory</strong>. In practical terms, homes in luxury neighborhoods like
                    Paradise Valley, North Scottsdale, or Arcadia often require jumbo financing. Even
                    fast-growing areas such as Gilbert and Chandler are seeing home values that now surpass the
                    conforming limits.
                  </p>
                </section>

                <section id="why-stricter-requirements">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>Why Jumbo Loans Have Stricter Requirements</strong>
                  </h2>
                  <p className="mb-5">
                    The main reason jumbo loans are harder to qualify for comes down to risk.
                  </p>
                  <p className="mb-5">
                    Conforming loans can be sold to <strong>Fannie Mae or Freddie Mac</strong>, freeing lenders
                    from long-term liability. Jumbo loans, on the other hand, usually remain on the lender&apos;s
                    books. This means:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>
                      <strong>Higher risk exposure:</strong> If a borrower defaults, the lender absorbs the loss.
                    </li>
                    <li>
                      <strong>More capital requirements:</strong> Banks must hold more reserves for large loans.
                    </li>
                    <li>
                      <strong>Careful underwriting:</strong> Lenders are selective, preferring borrowers with
                      strong credit, stable income, and low debt levels.
                    </li>
                  </ul>
                </section>

                <section id="jumbo-loan-requirements-arizona">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>Jumbo Loan Requirements in Arizona</strong>
                  </h2>

                  <p className="mb-3">
                    <strong>1. Credit Score</strong>
                  </p>
                  <p className="mb-5">
                    Most lenders require a <strong>minimum credit score of 700–720</strong>. Clean credit history
                    is essential — any recent delinquencies or major derogatory marks can result in higher rates
                    or denials.
                  </p>

                  <p className="mb-3">
                    <strong>2. Debt-to-Income Ratio (DTI)</strong>
                  </p>
                  <p className="mb-5">
                    Jumbo lenders generally cap the DTI ratio at <strong>43–45%</strong>. This ensures you can
                    comfortably manage your mortgage payment alongside other debts.
                  </p>

                  <p className="mb-3">
                    <strong>3. Down Payment</strong>
                  </p>
                  <p className="mb-5">
                    Plan for a <strong>10%–20% minimum down payment</strong>, though many lenders prefer 20% or
                    higher for stronger loan terms. Something to note: IF you put between 10%-20% down, you will
                    not have mortgage insurance. In lieu of mortgage insurance, the bank will adjust the interest
                    rate higher.
                  </p>
                  <p className="mb-5">
                    Some programs may allow lower down payments, but they often require additional reserves or
                    higher rates.
                  </p>

                  <p className="mb-3">
                    <strong>4. Cash Reserves</strong>
                  </p>
                  <p className="mb-5">
                    Expect to show <strong>6–12 months of mortgage payments in liquid reserves</strong> after
                    closing. For a $1M loan, that could mean $60,000–$120,000 in accessible funds.
                  </p>

                  <p className="mb-3">
                    <strong>5. Documentation</strong>
                  </p>
                  <p className="mb-3">Jumbo loans require full documentation:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>Two years of tax returns and W-2s</li>
                    <li>Recent pay stubs</li>
                    <li>Bank and investment statements</li>
                    <li>Business financials if self-employed</li>
                  </ul>

                  <p className="mb-3">
                    <strong>6. Appraisal Requirements</strong>
                  </p>
                  <p className="mb-6">
                    High-value properties often need <strong>two independent appraisals</strong> to verify value.
                    Lenders demand accurate market comparisons, especially in luxury neighborhoods.
                  </p>

                  <div className="text-center my-8">
                    <Link
                      href="#get-pre-approved"
                      className="btn-primary"
                    >
                      Get Your Jumbo Loan Quote Now
                    </Link>
                  </div>
                </section>

                <section id="rates-and-costs">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>Rates and Costs: Are Jumbo Loans More Expensive?</strong>
                  </h2>
                  <p className="mb-5">
                    Traditionally, jumbo loans carried higher interest rates than conforming mortgages. Today,
                    that gap has narrowed.
                  </p>
                  <p className="mb-5">
                    According to{" "}
                    <a
                      href="https://www.investopedia.com/terms/j/jumbomortgage.asp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      Investopedia
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.bankrate.com/mortgages/what-is-jumbo-loan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      Bankrate
                    </a>
                    , jumbo rates are often{" "}
                    <strong>within 0.25%–0.50%</strong> of conforming loans — and sometimes even lower.
                  </p>
                  <p className="mb-5">
                    Still, the larger loan amount means even small differences can add up. For example, a 0.25%
                    increase on a $1M mortgage could cost around <strong>$150 more per month</strong> — over{" "}
                    <strong>$50,000 extra</strong> across 30 years.
                  </p>
                  <p className="mb-3">Additional jumbo-related costs may include:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>Larger origination fees</li>
                    <li>Higher appraisal costs</li>
                    <li>Optional discount points for lower rates</li>
                    <li>Increased closing fees proportional to loan size</li>
                  </ul>
                </section>

                <section id="application-process">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>Jumbo Loan Application Process</strong>
                  </h2>
                  <p className="mb-5">
                    The steps are similar to a conventional mortgage but with deeper underwriting:
                  </p>
                  <ol className="list-decimal pl-6 space-y-3 mb-5">
                    <li>
                      <strong>Preapproval:</strong> Get preapproved early with a lender experienced in jumbo
                      products. This helps define your buying range and signals strength to sellers.
                    </li>
                    <li>
                      <strong>Gather Documentation:</strong> Prepare all income, assets, and tax documents early
                      to avoid delays.
                    </li>
                    <li>
                      <strong>Appraisal:</strong> Expect detailed evaluations, especially in custom-home markets
                      where comparable sales are limited.
                    </li>
                    <li>
                      <strong>Underwriting:</strong> Lenders review every financial detail, from asset sources to
                      credit inquiries. Be prepared for additional documentation requests.
                    </li>
                    <li>
                      <strong>Conditional Approval &amp; Closing:</strong> After conditions are met, the loan is
                      finalized, and you&apos;re ready to close on your property.
                    </li>
                  </ol>
                </section>

                <section id="risks-and-considerations">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>Risks and Considerations</strong>
                  </h2>
                  <p className="mb-3">
                    Before applying, it&apos;s smart to understand the unique risks tied to jumbo loans:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>
                      <strong>Appraisal Variability:</strong> High-end homes can be harder to value accurately.
                    </li>
                    <li>
                      <strong>Market Sensitivity:</strong> Luxury homes often fluctuate more in price during
                      market shifts.
                    </li>
                    <li>
                      <strong>Refinancing Challenges:</strong> Tighter lending standards can make future
                      refinancing harder.
                    </li>
                    <li>
                      <strong>Liquidity Strain:</strong> The combination of large down payments and cash reserve
                      requirements can impact flexibility.
                    </li>
                  </ul>
                </section>

                <section id="tips-to-improve-approval-odds">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>Tips to Improve Your Approval Odds</strong>
                  </h2>
                  <ol className="list-decimal pl-6 space-y-3 mb-5">
                    <li>
                      <strong>Check Your Credit Early:</strong> Review all three credit reports, dispute
                      inaccuracies, and pay down revolving debt.
                    </li>
                    <li>
                      <strong>Strengthen Your Finances:</strong> Lower your DTI and increase liquid reserves
                      before applying.
                    </li>
                    <li>
                      <strong>Compare Lenders:</strong> Rates and requirements vary widely among banks, credit
                      unions, and mortgage brokers. Shop around to find the best terms.
                    </li>
                    <li>
                      <strong>Work With Arizona Specialists:</strong> Partner with a lender who regularly handles
                      jumbo loans in Arizona — they&apos;ll know how to navigate appraisals and underwriting
                      efficiently.
                    </li>
                    <li>
                      <strong>Apply at the Right Time:</strong> Submit when your finances are at their strongest
                      — post-bonus, after taxes, or once reserves are verified.
                    </li>
                  </ol>
                </section>

                <section id="example-jumbo-loan-scottsdale">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>Example: Jumbo Loan in Scottsdale</strong>
                  </h2>
                  <p className="mb-5">
                    Suppose you&apos;re purchasing a <strong>$1.2 million home in North Scottsdale</strong>.
                  </p>
                  <p className="mb-5">
                    With a 20% down payment ($240,000), you&apos;d finance $960,000 — a jumbo loan.
                  </p>
                  <p className="mb-5">
                    At a <strong>7.00% interest rate</strong>, your monthly principal and interest would be about{" "}
                    <strong>$6,384</strong>. Add taxes, insurance, and HOA, and you&apos;re looking at roughly{" "}
                    <strong>$7,800 per month</strong> in total housing costs.
                  </p>
                  <p>
                    To qualify with a 43% DTI, your gross monthly income should be around{" "}
                    <strong>$18,300</strong>, or <strong>$220,000 per year</strong>, with $50,000–$100,000 in cash
                    reserves after closing.
                  </p>
                </section>

                <section id="the-bottom-line">
                  <h3 className="text-[#052316] text-[20px] font-bold mb-4">
                    <strong>The Bottom Line</strong>
                  </h3>
                  <p className="mb-5">
                    If you&apos;re ready to explore jumbo financing, start by connecting with a{" "}
                    <strong>local Arizona mortgage professional</strong> who understands the nuances of luxury
                    home lending. The right guidance can help you secure the best rate, simplify the process, and
                    make your dream home a reality.
                  </p>
                </section>

                <section id="faqs">
                  <FaqAccordion
                    title="FAQs About Jumbo Loans in Arizona"
                    items={[
                    { q: "1. What credit score do I need for a jumbo loan in Arizona?", a: <>Most lenders require at least a <strong>700–720 credit score</strong>, but higher scores
                        can unlock better rates and more flexible terms.</> },
                    { q: "2. Can I use a jumbo loan for a vacation home or investment property?", a: <>Yes. Many Arizona lenders offer jumbo financing for{" "}
                        <strong>second homes and investment properties</strong>, though down payment and reserve
                        requirements are typically higher.</> },
                    { q: "3. Are jumbo loan rates higher than conventional mortgage rates?", a: <>They used to be, but not always today. In competitive markets, jumbo rates can be{" "}
                        <strong>similar or even slightly lower</strong> than conforming rates depending on your
                        profile.</> },
                    { q: "4. How can I increase my chances of jumbo loan approval?", a: <>Focus on strengthening your credit, maintaining low debt levels, and building substantial
                        liquid reserves before applying.</> }
                    ]}
                  />
                </section>

                <p className="text-[#5a6b52] text-[13px] leading-relaxed pt-4">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has been
                  prepared for informational purposes only. You should consult your own tax, legal, and accounting
                  advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS #210917 and
                  1618695. Equal Housing Opportunity.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/conventional-home-loans-vs-fha-loans-which-is-right-for-you/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/navigating-mortgage-options-during-divorce-a-complete-guide/"
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
              href="#get-pre-approved"
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