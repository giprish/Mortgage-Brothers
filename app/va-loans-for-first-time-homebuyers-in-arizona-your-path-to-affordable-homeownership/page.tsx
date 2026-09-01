import type { Metadata } from "next";
import { COMPANY } from "@/lib/company";
import { getSeoMetadata } from "@/lib/seo";
import JsonLd from "@/app/component/JsonLd";
import { buildArticleSchemas } from "@/lib/seo/structured-data";
import FaqAccordion from "../component/FaqAccordion";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

export const metadata: Metadata = getSeoMetadata(
  "/va-loans-for-first-time-homebuyers-in-arizona-your-path-to-affordable-homeownership/"
);

const relatedLinks = [
  { label: "VA Loans Arizona", href: "/va-loans-arizona/" },
  { label: "First-time Home Buyer Guide", href: "/first-time-home-buyer-arizona-guide/" },
  {
    label: "What Is a Conventional Home Loan?",
    href: "/what-is-a-conventional-home-loan-the-complete-first-time-buyer-mortgage-guide/",
  },
  { label: "Ultimate Guide to Your First Mortgage", href: "/ultimate-guide-first-mortgage/" },
  { label: "Arizona Home Buying Process", href: "/arizona-home-buying-process/" },
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
  {
    question: "What credit score do I need?",
    answer: "Most lenders accept 580+, though 620+ gives better terms.",
  },
  {
    question: "Can active-duty members qualify?",
    answer: "Yes—after 90 consecutive days of service.",
  },
  {
    question: "Are there income limits?",
    answer: "No. You just need sufficient income to support your mortgage.",
  },
  {
    question: "Can I buy a condo or duplex?",
    answer:
      "Yes! VA loans work for single-family homes, VA-approved condos, and even 2–4 unit properties (if you live in one).",
  },
  {
    question: "How long does the process take?",
    answer: "Typically 30–45 days, depending on property type and appraisal timing.",
  },
] as const;

const articleJsonLd = buildArticleSchemas({
  blog: {
    pathname: "/va-loans-for-first-time-homebuyers-in-arizona-your-path-to-affordable-homeownership/",
    headline:
      "VA Loans for First-Time Homebuyers in Arizona: Your Path to Affordable Homeownership",
    description:
      "Explore 0% down payment VA loan benefits, eligibility guidelines, and rate advantages for military buyers in Arizona.",
    datePublished: "2026-05-28",
    articleSection: "Mortgage Process Guidance",
  },
  faqs: [...articleFaqs],
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Mortgage Process Guidance", path: "/mortgage-process-guidance/" },
    {
      name: "VA Loans for First-Time Homebuyers in Arizona: Your Path to Affordable Homeownership",
      path: "/va-loans-for-first-time-homebuyers-in-arizona-your-path-to-affordable-homeownership/",
    },
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

export default function VaLoansFirstTimeHomebuyersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <JsonLd data={articleJsonLd} />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={
            <>
              VA Loans for First-Time Homebuyers in Arizona: Your Path to Affordable Homeownership
            </>
          }
          excerpt="Explore 0% down payment VA loan benefits, eligibility guidelines, and rate advantages for military buyers in Arizona."
          category="Mortgage Process Guidance"
          categoryHref="/mortgage-process-guidance/"
          dateLabel="May 28, 2026"
          readTime="8 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">
              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="dreaming-of-homeownership">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Dreaming of Homeownership? Arizona Veterans Have a Powerful Advantage
                  </h2>
                  <p className="mb-5">
                    If you&apos;re a veteran or active-duty service member in Arizona, owning a home may be
                    closer than you think. Many first-time buyers struggle to save for a down payment—especially
                    with Phoenix&apos;s median home price around $445,000 (as of early 2026). A traditional 20%
                    down payment equals nearly $90,000 in cash—an overwhelming hurdle for most.
                  </p>
                  <p className="mb-5">
                    But as a veteran, your military service gives you access to one of the most valuable benefits
                    available: the VA Home Loan Program. This loan allows you to buy a home with zero down
                    payment, no mortgage insurance, and competitive interest rates, making homeownership more
                    attainable than ever.
                  </p>
                  <p>
                    At Mortgage Brothers LLC, we specialize in helping veterans and service members throughout
                    the state unlock these powerful benefits. Here&apos;s how VA loans can make your first home
                    purchase in Arizona simple, affordable, and fast.
                  </p>
                </section>

                <section id="what-is-a-va-loan">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What Is a VA Loan?
                  </h2>
                  <p className="mb-5">
                    The VA Home Loan Guaranty Program was created to help veterans, active-duty military, and
                    eligible surviving spouses buy homes under better terms than traditional mortgages. The U.S.
                    Department of Veterans Affairs (VA) guarantees a portion of the loan, allowing lenders to
                    offer favorable terms with less risk.
                  </p>
                  <h3 className="text-[#052316] text-[20px] font-bold mb-3">Who&apos;s Eligible?</h3>
                  <p className="mb-3">You may qualify if you&apos;re:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>An active-duty service member with 90+ consecutive days of service</li>
                    <li>A veteran with at least 90 days of wartime or 181 days of peacetime service</li>
                    <li>
                      A National Guard or Reserve member with 90 days of active service OR 6 years of service
                    </li>
                    <li>
                      A surviving spouse of a service member who died in service or from service-related causes
                    </li>
                  </ul>
                  <p>
                    To begin, you&apos;ll need a Certificate of Eligibility (COE)—something Mortgage Brothers
                    LLC can help you obtain quickly through the VA&apos;s online portal.
                  </p>
                </section>

                <section id="why-va-loans-are-perfect">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Why VA Loans Are Perfect for First-Time Arizona Homebuyers
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">1. Zero Down Payment</h3>
                      <p>
                        Unlike Conventional or FHA loans that require 3–5% down, VA loans allow qualified
                        borrowers to purchase with no down payment at all—even for homes above $400,000.
                        That&apos;s instant savings of $12,000–$20,000+.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        2. No Private Mortgage Insurance (PMI)
                      </h3>
                      <p>
                        Conventional loans charge PMI if you put less than 20% down, and FHA loans include
                        mandatory Mortgage Insurance Premiums (MIP). VA loans require no monthly mortgage
                        insurance—ever. That alone can save you $200–$300 per month.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">3. Lower Interest Rates</h3>
                      <p>
                        Because VA loans are partially guaranteed, lenders can offer lower rates than
                        Conventional or FHA loans—often 0.25–0.50% lower, saving you thousands over the life of
                        the loan.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">4. Easier to Qualify</h3>
                      <p>
                        VA loans are more forgiving with credit and debt-to-income ratios. Many Arizona lenders
                        approve borrowers with credit scores as low as 580.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">5. Reusable Benefit</h3>
                      <p>
                        Your VA home loan entitlement can be used multiple times—you can buy, sell, and use it
                        again.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                  <Link href="/contact-us/" className="btn-primary">
                    Get Your VA Loan Pre-Approval
                  </Link>
                </div>

                <section id="real-arizona-cost-comparison">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Real Arizona Cost Comparison: $400,000 Phoenix Home
                  </h2>
                  <div className="overflow-x-auto mb-5">
                    <table className="w-full text-[14px] border-collapse">
                      <thead>
                        <tr className="border-b border-[#e8e0d0] text-left">
                          <th className="py-2 pr-3 font-bold">Loan Type</th>
                          <th className="py-2 pr-3 font-bold">Down Payment</th>
                          <th className="py-2 pr-3 font-bold">Total Cash Needed</th>
                          <th className="py-2 pr-3 font-bold">Monthly Payment</th>
                          <th className="py-2 pr-3 font-bold">30-Year Cost</th>
                          <th className="py-2 font-bold">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#e8e0d0]/70">
                          <td className="py-3 pr-3">Conventional (5%)</td>
                          <td className="py-3 pr-3">$20,000</td>
                          <td className="py-3 pr-3">$29,500</td>
                          <td className="py-3 pr-3">$3,011</td>
                          <td className="py-3 pr-3">$1,083,000+</td>
                          <td className="py-3">Includes PMI</td>
                        </tr>
                        <tr className="border-b border-[#e8e0d0]/70">
                          <td className="py-3 pr-3">FHA (3.5%)</td>
                          <td className="py-3 pr-3">$14,000</td>
                          <td className="py-3 pr-3">$23,500</td>
                          <td className="py-3 pr-3">$3,033</td>
                          <td className="py-3 pr-3">$1,115,000+</td>
                          <td className="py-3">Lifetime MIP</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-3">VA Loan (0%)</td>
                          <td className="py-3 pr-3">$0</td>
                          <td className="py-3 pr-3">$8,000</td>
                          <td className="py-3 pr-3">$2,826</td>
                          <td className="py-3 pr-3">$1,021,000+</td>
                          <td className="py-3">No PMI or MIP</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mb-5">
                    👉 That&apos;s a monthly savings of $185–$200 and $60,000–$90,000 over 30 years compared to
                    other loans.
                  </p>
                  <p className="text-[14px] text-[#5a6b52] italic">
                    *Interest rate assumptions: Conventional 6.25%, FHA 6.00%, and VA 5.75% (as of October
                    2025). Actual rates may vary by lender and borrower profile.*
                  </p>
                </section>

                <section id="arizona-market-snapshot">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Arizona Market Snapshot (2025)
                  </h2>
                  <div className="overflow-x-auto mb-5">
                    <table className="w-full text-[14px] border-collapse">
                      <thead>
                        <tr className="border-b border-[#e8e0d0] text-left">
                          <th className="py-2 pr-3 font-bold">City</th>
                          <th className="py-2 pr-3 font-bold">Median Home Price</th>
                          <th className="py-2 pr-3 font-bold">Avg. Property Tax</th>
                          <th className="py-2 font-bold">Loan Limit (2026)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Phoenix", "$445,000", "0.62%", "No limit for full entitlement"],
                          ["Mesa", "$425,000", "0.68%", "No limit"],
                          ["Tucson", "$355,000", "0.85%", "No limit"],
                          ["Prescott", "$585,000", "0.62%", "No limit"],
                          ["Yuma", "$295,000", "0.68%", "No limit"],
                        ].map(([city, price, tax, limit]) => (
                          <tr key={city} className="border-b border-[#e8e0d0]/70">
                            <td className="py-3 pr-3">{city}</td>
                            <td className="py-3 pr-3">{price}</td>
                            <td className="py-3 pr-3">{tax}</td>
                            <td className="py-3">{limit}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p>
                    Because veterans with full entitlement have no loan limit, you can buy in higher-priced
                    markets like Scottsdale or Prescott with zero down.
                  </p>
                </section>

                <section id="understanding-the-va-funding-fee">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Understanding the VA Funding Fee
                  </h2>
                  <p className="mb-5">
                    The VA Funding Fee supports the loan program so future veterans can benefit, too.
                    Here&apos;s how it works:
                  </p>
                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                    VA-backed purchase and construction loans
                  </h3>
                  <p className="mb-4">
                    Rates for Veterans, active-duty service members, and National Guard and Reserve members
                  </p>
                  <div className="overflow-x-auto mb-5">
                    <table className="w-full text-[14px] border-collapse">
                      <thead>
                        <tr className="border-b border-[#e8e0d0] text-left">
                          <th className="py-2 pr-3 font-bold"></th>
                          <th className="py-2 pr-3 font-bold">If your down payment is…</th>
                          <th className="py-2 font-bold">Your VA funding fee will be…</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["First use", "Less than 5%", "2.15%"],
                          ["", "5% or more", "1.5%"],
                          ["", "10% or more", "1.25%"],
                          ["After first use", "Less than 5%", "3.3%"],
                          ["", "5% or more", "1.5%"],
                          ["", "10% or more", "1.25%"],
                        ].map(([use, down, fee], i) => (
                          <tr key={i} className="border-b border-[#e8e0d0]/70">
                            <td className="py-3 pr-3">{use}</td>
                            <td className="py-3 pr-3">{down}</td>
                            <td className="py-3">{fee}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mb-5">
                    💡 Tip: The fee can be financed into your mortgage, so you don&apos;t need to pay it
                    out-of-pocket.
                  </p>
                  <p className="mb-5">
                    Source: U.S. Department of Veterans Affairs –{" "}
                    <a
                      href="https://www.va.gov/housing-assistance/home-loans/funding-fee-and-closing-costs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      https://www.va.gov/housing-assistance/home-loans/funding-fee-and-closing-costs/
                    </a>
                  </p>
                  <p className="mb-5">
                    For veterans with any VA disability rating, the funding fee is waived entirely, increasing
                    total savings even further.
                  </p>
                  <p className="text-[14px] text-[#5a6b52] italic">
                    Disclaimer: Example figures are for illustration only and may vary based on credit score,
                    lender, loan amount, and current market rates.
                  </p>
                </section>

                <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                  <Link href="/contact-us/" className="btn-primary">
                    Talk to a VA Loan Expert
                  </Link>
                </div>

                <section id="extra-savings-arizona-veteran-tax-benefits">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Extra Savings: Arizona Veteran Tax Benefits
                  </h2>
                  <p className="mb-4">
                    The Arizona Department of Veterans&apos; Services offers property tax exemptions for disabled
                    veterans:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>50–69% disability: up to $3,000 valuation reduction</li>
                    <li>70%+: up to $6,000</li>
                    <li>100% disability: may qualify for a full property tax exemption</li>
                  </ul>
                  <p>
                    Combined with Arizona&apos;s low average property tax rate (0.63%), these benefits make
                    homeownership even more affordable.
                  </p>
                </section>

                <section id="case-study-marcus">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Case Study: Marcus&apos;s Mesa Home Success
                  </h2>
                  <p className="mb-5">
                    Marcus, a 32-year-old Army veteran, dreamed of buying a home for his family in Mesa. With a 640
                    credit score and 30% VA disability rating, he assumed he&apos;d need years to save up.
                  </p>
                  <p className="mb-3">Here&apos;s how the VA loan changed everything:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>$0 down payment</li>
                    <li>Funding fee waived (disability benefit)</li>
                    <li>Closed in just 38 days</li>
                    <li>Saved $21,000 upfront</li>
                    <li>Monthly savings: $430 vs. Conventional loan</li>
                  </ul>
                  <p>
                    Marcus now owns a 3-bedroom home in a great school district—and pays less each month than he
                    did in rent.
                  </p>
                </section>

                <section id="common-myths">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Common Myths About VA Loans—Debunked
                  </h2>
                  <div className="space-y-4">
                    <p>
                      <strong>Myth 1: &ldquo;VA loans take too long to close.&rdquo;</strong> Fact: VA loans
                      typically close in 30–45 days, the same as Conventional loans.
                    </p>
                    <p>
                      <strong>Myth 2: &ldquo;Sellers don&apos;t accept VA offers.&rdquo;</strong> Fact: In
                      Arizona, with 500,000+ veterans, VA offers are common and respected—especially with strong
                      pre-approval.
                    </p>
                    <p>
                      <strong>Myth 3: &ldquo;You can only use a VA loan once.&rdquo;</strong> Fact: Your benefit
                      can be reused for life after selling or restoring entitlement.
                    </p>
                    <p>
                      <strong>Myth 4: &ldquo;The funding fee makes VA loans expensive.&rdquo;</strong> Fact: Even
                      with the fee, VA loans save tens of thousands compared to PMI or MIP on other loan types.
                    </p>
                  </div>
                </section>

                <section id="why-choose-mortgage-brothers">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Why Choose Mortgage Brothers LLC
                  </h2>
                  <p className="mb-5">
                    We&apos;ve helped hundreds of Arizona veterans become homeowners—and we know the local market
                    better than anyone.
                  </p>
                  <h3 className="text-[#052316] text-[20px] font-bold mb-3">Here&apos;s what we do for you:</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-8">
                    <li>Help you secure your Certificate of Eligibility (COE)</li>
                    <li>Provide custom loan comparisons (VA vs. Conventional vs. FHA)</li>
                    <li>Navigate Arizona&apos;s property taxes &amp; veteran programs</li>
                    <li>Deliver fast, accurate pre-approvals to make your offers stand out</li>
                    <li>Close your loan efficiently with local underwriters and VA expertise</li>
                  </ul>
                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                    Take the First Step Toward Homeownership
                  </h3>
                  <p className="mb-5">
                    Your service has earned you one of the best homebuying opportunities available. With $0 down,
                    no PMI, and low interest rates, there&apos;s no reason to wait.
                  </p>
                  <p className="mb-5">
                    Whether you&apos;re stationed in Tucson, retired in Prescott, or ready to settle in
                    Phoenix—Mortgage Brothers LLC will guide you every step of the way.
                  </p>
                  <p className="mb-2">
                    📍 Visit us:{" "}
                    <a
                      href={COMPANY.addressMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      1599 E Orangewood Ave Suite 200, Phoenix, AZ 85020
                    </a>
                  </p>
                  <p className="mb-5">
                    📞 Call us:{" "}
                    <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                      +1 (602) 535-2171
                    </a>
                  </p>
                  <p>Let&apos;s turn your VA benefits into your new Arizona home.</p>
                </section>

                <section id="frequently-asked-questions">
                  <FaqAccordion
                    title="Frequently Asked Questions"
                    items={articleFaqs.map((faq) => ({
                      q: faq.question,
                      a: faq.answer,
                    }))}
                  />
                </section>

                <p className="text-[#5a6b52] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has been
                  prepared for informational purposes only. You should consult your own tax, legal, and accounting
                  advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS #210917 and
                  1618695. Equal Housing Opportunity.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/what-is-a-conventional-home-loan-the-complete-first-time-buyer-mortgage-guide/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/how-to-get-a-mortgage-in-arizona-with-fair-or-improving-credit/"
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
                <a href="tel:+16025352171" className="btn-primary w-full">
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
            <Link href="/contact-us/" className="btn-primary">
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
            <Link href="#get-pre-approved" className="btn-primary">
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
