"use client";

import FaqAccordion from "../component/FaqAccordion";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

const relatedLinks = [
  {
    label: "Conventional Home Loans in Arizona",
    href: "/conventional-home-loans-arizona/",
  },
  {
    label: "FHA Home Loans in Arizona",
    href: "/fha-home-loans-arizona/",
  },
  {
    label: "What Is a Conventional Home Loan?",
    href: "/what-is-a-conventional-home-loan-the-complete-first-time-buyer-mortgage-guide/",
  },
  {
    label: "What Is a Jumbo Loan?",
    href: "/what-is-a-jumbo-loan-everything-you-need-to-know-before-applying/",
  },
  {
    label: "Arizona Mortgage Basics",
    href: "/arizona-mortgage-basics/",
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
      name: "Can I switch from FHA to Conventional later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes—many refinance into Conventional loans once they've built equity to drop mortgage insurance.",
      },
    },
    {
      "@type": "Question",
      name: "Do FHA loans always cost more long-term?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually. FHA's lifetime MIP adds up, unless you refinance.",
      },
    },
    {
      "@type": "Question",
      name: "Which loan is better for investors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conventional—FHA is only for primary residences.",
      },
    },
    {
      "@type": "Question",
      name: "Which loan closes faster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conventional, since FHA requires stricter inspections.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use Conventional with less than 20% down?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You'll pay PMI, but it's temporary—unlike FHA's MIP.",
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

export default function ConventionalVsFhaLoansPage() {
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
          title={<>Conventional Home Loans vs. FHA Loans: Which Is Right for You?</>}
          excerpt="Detailed side-by-side comparison of credit score rules, down payments, PMI vs. MIP, and total 30-year costs for Arizona buyers."
          category="Mortgage Basics"
          categoryHref="/mortgage-basics/"
          dateLabel="Jun 20, 2026"
          readTime="10 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                Buying a home in Arizona is exciting—but it can also feel overwhelming when it comes to choosing
                the right mortgage.
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                Take Emma, a first-time buyer in Phoenix. She&apos;s saved some money but isn&apos;t sure if a{" "}
                <Link href="/conventional-home-loans-arizona/" className="text-[#3fb364] font-semibold hover:underline">
                  Conventional home loan
                </Link>{" "}
                or an{" "}
                <Link href="/fha-home-loans-arizona/" className="text-[#3fb364] font-semibold hover:underline">
                  FHA loan
                </Link>{" "}
                makes more sense. Her friend Carlos, upgrading to a bigger home in Gilbert with excellent credit,
                is leaning Conventional.
              </p>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Ready to Compare Conventional and FHA Loans?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Connect with Arizona Mortgage Brothers for a personalized side-by-side comparison and a free
                  quote tailored to your home purchase.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                  >
                    Get Your Free Loan Comparison &rarr;
                  </Link>
                  <Link
                    href="/fha-home-loans-arizona/"
                    className="inline-flex items-center gap-2 text-[#3fb364] hover:underline text-[15px] font-semibold px-4 py-3 transition-all"
                  >
                    Learn About FHA Loans
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="the-arizona-home-loan-dilemma">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    The Arizona Home Loan Dilemma
                  </h2>
                  <p className="mb-5">
                    Their situations highlight the same question thousands of Arizona buyers ask every year:
                  </p>
                  <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                    <p className="text-[16px] font-bold text-[#052316] mb-1">
                      👉 &quot;Should I go with a Conventional Loan or an FHA Loan?&quot;
                    </p>
                    <p className="text-[14.5px] text-[#3a4a3a]">
                      This guide breaks it down clearly—so you&apos;ll know which option fits your situation best.
                    </p>
                  </div>
                </section>

                <section id="what-is-a-conventional-loan">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What Is a Conventional Loan?
                  </h2>
                  <p className="mb-5">
                    A <strong>Conventional loan</strong> is a mortgage not backed by the government. Instead,
                    it&apos;s offered by private lenders such as banks, credit unions, or mortgage companies,
                    usually following <strong>Fannie Mae</strong> and <strong>Freddie Mac</strong> guidelines.
                  </p>
                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">Key Features</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>
                      <strong>Down payments:</strong> as low as 3% (though 20% is ideal to avoid mortgage
                      insurance).
                    </li>
                    <li>
                      <strong>Credit requirements:</strong> generally 620+, with 700+ for the best rates.
                    </li>
                    <li>
                      <strong>Private Mortgage Insurance (PMI):</strong> required with less than 20% down, but
                      removable once you hit 20% equity.
                    </li>
                    <li>
                      <strong>Loan limits:</strong> higher than FHA in most Arizona counties — up to $1,041,125
                      in 2026 (
                      <a
                        href="https://www.fhfa.gov/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3fb364] font-semibold hover:underline"
                      >
                        FHFA Loan Limits
                      </a>
                      ).
                    </li>
                    <li>
                      <strong>Flexibility:</strong> works for primary homes, second homes, or investment
                      properties.
                    </li>
                  </ul>
                  <p className="font-semibold text-[#052316]">
                    👉 <strong>Best for:</strong> Buyers with strong credit and stable income who want flexibility
                    and lower long-term costs.
                  </p>
                </section>

                <section id="what-is-an-fha-loan">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What Is an FHA Loan?
                  </h2>
                  <p className="mb-5">
                    An <strong>FHA loan</strong> is backed by the Federal Housing Administration, designed to
                    help more people — especially first-time buyers — qualify for a mortgage.
                  </p>
                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">Key Features</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>
                      <strong>Down payment:</strong> as low as 3.5% with a 580 credit score.
                    </li>
                    <li>
                      <strong>Lower credit tolerance:</strong> 580 minimum credit score required.
                    </li>
                    <li>
                      <strong>Mortgage Insurance Premium (MIP):</strong> required, and often stays for the life
                      of the loan if you put less than 10% down.
                    </li>
                    <li>
                      <strong>Loan limits:</strong> lower than Conventional — $557,750 in Maricopa County and
                      $541,287 in Pima County (
                      <a
                        href="https://entp.hud.gov/idapp/html/hicostlook.cfm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3fb364] font-semibold hover:underline"
                      >
                        2026 FHA loan limits for all Arizona counties
                      </a>
                      ).
                    </li>
                    <li>
                      <strong>Forgiving credit history:</strong> more lenient with bankruptcy, foreclosure, and
                      high debt-to-income ratios.
                    </li>
                  </ul>
                  <p className="font-semibold text-[#052316] mb-6">
                    👉 <strong>Best for:</strong> First-time buyers or those with lower credit scores and smaller
                    down payments.
                  </p>

                  <div className="text-center">
                    <Link
                      href="/#get-pre-approved"
                      className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </section>

                <section id="side-by-side-comparison">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-5 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Side-by-Side Comparison
                  </h2>
                  <div className="overflow-x-auto border border-[#e8e0d0] rounded-xl shadow-sm bg-white">
                    <table className="w-full text-left text-[14px]">
                      <thead className="bg-[#052316] text-white">
                        <tr>
                          <th className="p-4 font-semibold">Feature</th>
                          <th className="p-4 font-semibold">Conventional Loan</th>
                          <th className="p-4 font-semibold">FHA Loan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#e8e0d0]">
                        <tr className="hover:bg-[#f9f7f2]">
                          <td className="p-4 font-bold text-[#052316]">Minimum Down Payment</td>
                          <td className="p-4">3%</td>
                          <td className="p-4">3.5%</td>
                        </tr>
                        <tr className="hover:bg-[#f9f7f2]">
                          <td className="p-4 font-bold text-[#052316]">Credit Score Requirement</td>
                          <td className="p-4">620+</td>
                          <td className="p-4">580+</td>
                        </tr>
                        <tr className="hover:bg-[#f9f7f2]">
                          <td className="p-4 font-bold text-[#052316]">Mortgage Insurance</td>
                          <td className="p-4">PMI until 20% equity</td>
                          <td className="p-4">MIP (usually for life of loan)</td>
                        </tr>
                        <tr className="hover:bg-[#f9f7f2]">
                          <td className="p-4 font-bold text-[#052316]">Loan Limits (Maricopa, 2026)</td>
                          <td className="p-4">$1,072,600</td>
                          <td className="p-4">$557,750</td>
                        </tr>
                        <tr className="hover:bg-[#f9f7f2]">
                          <td className="p-4 font-bold text-[#052316]">Interest Rates</td>
                          <td className="p-4">Lower with strong credit</td>
                          <td className="p-4">Competitive, but offset by MIP</td>
                        </tr>
                        <tr className="hover:bg-[#f9f7f2]">
                          <td className="p-4 font-bold text-[#052316]">Property Types</td>
                          <td className="p-4">Primary, second home, investment</td>
                          <td className="p-4">Primary residence only</td>
                        </tr>
                        <tr className="hover:bg-[#f9f7f2]">
                          <td className="p-4 font-bold text-[#052316]">Flexibility</td>
                          <td className="p-4">Wide range of programs</td>
                          <td className="p-4">FHA-specific rules</td>
                        </tr>
                        <tr className="hover:bg-[#f9f7f2]">
                          <td className="p-4 font-bold text-[#052316]">Best For</td>
                          <td className="p-4">Buyers with stronger credit</td>
                          <td className="p-4">Buyers with limited credit/savings</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="affordability-example">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Affordability Example: Phoenix Home Purchase
                  </h2>
                  <p className="mb-6">
                    Let&apos;s compare a <strong>$350,000</strong> home in Phoenix using FHA and Conventional
                    financing.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                    <div className="bg-white border border-[#e8e0d0] p-6 rounded-2xl shadow-sm">
                      <h3 className="text-[#052316] text-[16px] font-bold mb-3">FHA Loan Example</h3>
                      <ul className="space-y-1.5 text-[13.5px] text-[#3a4a3a]">
                        <li>Down Payment: <strong>3.5% = $12,250</strong></li>
                        <li>Loan Amount: <strong>$337,750</strong></li>
                        <li>Interest Rate: <strong>6.5%</strong></li>
                        <li>P&amp;I Payment: <strong>~$2,134</strong></li>
                        <li>MIP: <strong>~$155/month</strong></li>
                        <li>Property Tax: <strong>~$292/month</strong></li>
                        <li>Insurance: <strong>~$125/month</strong></li>
                        <li className="pt-2 border-t border-[#e8e0d0] text-[#052316] font-bold text-[14px]">
                          Total Payment: ~$2,706
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white border border-[#e8e0d0] p-6 rounded-2xl shadow-sm">
                      <h3 className="text-[#052316] text-[16px] font-bold mb-3">Conventional Loan (5% Down)</h3>
                      <ul className="space-y-1.5 text-[13.5px] text-[#3a4a3a]">
                        <li>Down Payment: <strong>$17,500</strong></li>
                        <li>Loan Amount: <strong>$332,500</strong></li>
                        <li>Interest Rate: <strong>6.25%</strong></li>
                        <li>P&amp;I Payment: <strong>~$2,047</strong></li>
                        <li>PMI: <strong>~$185/month</strong> (removable later)</li>
                        <li>Property Tax &amp; Insurance: <strong>~$417 combined</strong></li>
                        <li className="pt-2 border-t border-[#e8e0d0] text-[#052316] font-bold text-[14px]">
                          Total Payment: ~$2,649
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white border border-[#e8e0d0] p-6 rounded-2xl shadow-sm">
                      <h3 className="text-[#052316] text-[16px] font-bold mb-3">Conventional Loan (20% Down)</h3>
                      <ul className="space-y-1.5 text-[13.5px] text-[#3a4a3a]">
                        <li>Down Payment: <strong>$70,000</strong></li>
                        <li>Loan Amount: <strong>$280,000</strong></li>
                        <li>Interest Rate: <strong>6.0%</strong></li>
                        <li>P&amp;I Payment: <strong>~$1,679</strong></li>
                        <li><strong>No PMI required</strong></li>
                        <li>Property Tax &amp; Insurance: <strong>~$417 combined</strong></li>
                        <li className="pt-2 border-t border-[#e8e0d0] text-[#052316] font-bold text-[14px]">
                          Total Payment: ~$2,096
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl mb-6">
                    <p className="text-[15px] text-[#052316]">
                      👉 <strong>Key Takeaway:</strong> FHA is easier to qualify for upfront, but Conventional
                      often saves money long-term because PMI eventually goes away.
                    </p>
                  </div>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">30-Year Total Cost</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>FHA Loan: <strong>~$842,140</strong></li>
                    <li>Conventional (5% down): <strong>~$758,510</strong></li>
                    <li>Conventional (20% down): <strong>~$674,440</strong></li>
                  </ul>
                </section>

                <section id="pros-and-cons">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-5 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Pros and Cons
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-[#e8e0d0] p-6 rounded-2xl shadow-sm">
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Conventional Loan ✅</h3>
                      <ul className="list-disc pl-5 space-y-2 text-[15px] mb-4">
                        <li>PMI can be removed at 20% equity</li>
                        <li>Higher loan limits (helpful in Phoenix, Scottsdale, Chandler)</li>
                        <li>Works for investment or second homes</li>
                        <li>Lower lifetime cost with strong credit</li>
                      </ul>
                      <p className="text-[14px] text-[#8a9a7a]">
                        <strong className="text-[#3a4a3a]">Cons:</strong> stricter credit requirements, larger
                        down payment to avoid PMI.
                      </p>
                    </div>

                    <div className="bg-white border border-[#e8e0d0] p-6 rounded-2xl shadow-sm">
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">FHA Loan ✅</h3>
                      <ul className="list-disc pl-5 space-y-2 text-[15px] mb-4">
                        <li>Smaller down payment (3.5%)</li>
                        <li>Accepts lower credit scores</li>
                        <li>Easier approval with past financial setbacks</li>
                        <li>Assumable loans (could benefit future buyers if rates rise)</li>
                      </ul>
                      <p className="text-[14px] text-[#8a9a7a]">
                        <strong className="text-[#3a4a3a]">Cons:</strong> permanent mortgage insurance in most
                        cases, lower loan limits, stricter appraisal rules.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="who-should-choose-which">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Who Should Choose Which?
                  </h2>
                  <p className="mb-5">
                    <strong>
                      Choosing between FHA and Conventional isn&apos;t about which loan is &quot;better&quot; —
                      it&apos;s about which fits your unique financial situation.
                    </strong>
                  </p>
                  <p className="mb-3">
                    At{" "}
                    <Link href="/about-us/" className="text-[#3fb364] font-semibold hover:underline">
                      Arizona Mortgage Brothers
                    </Link>
                    , we:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>Compare FHA and Conventional side-by-side</li>
                    <li>Help you qualify for Arizona-specific down payment assistance</li>
                    <li>Guide you from pre-approval through closing</li>
                    <li>Offer personalized rate quotes with no obligation</li>
                  </ul>
                  <p>
                    📍 <strong>Visit Us:</strong> 1599 East Orangewood Ave Suite 200, Phoenix, AZ 85020 &nbsp;
                    📞 <strong>Call Today:</strong> Contact our Arizona mortgage experts at{" "}
                    <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                      +1 602-535-2171
                    </a>
                    .
                  </p>
                </section>

                <section id="arizona-specific-considerations">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Arizona-Specific Considerations
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Loan Limits:</strong> FHA capped at $557,750 in Maricopa County and $609,500 in
                      Coconino County, while Conventional allows up to $806,500.
                    </li>
                    <li>
                      <strong>Seller Preference:</strong> In hot Arizona markets, sellers often prefer
                      Conventional offers because FHA appraisals are stricter.
                    </li>
                    <li>
                      <strong>Down Payment Assistance:</strong> Programs like Home Plus from the Arizona
                      Housing Finance Authority can help cover FHA or Conventional down payments.
                    </li>
                    <li>
                      <strong>Property Taxes:</strong> Arizona&apos;s average property tax rate is ~0.62%, but
                      Maricopa averages 0.72% and Pima ~0.89%. Always factor this into affordability.
                    </li>
                  </ul>
                </section>

                <section id="why-work-with-arizona-mortgage-brothers">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Why Work with Arizona Mortgage Brothers?
                  </h2>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <strong>Local Expertise:</strong> With deep roots in Phoenix and Maricopa County, our team
                      understands the nuances of Arizona&apos;s housing market so you get advice that&apos;s
                      actually relevant to your local area.
                    </li>
                    <li>
                      <strong>Conventional and FHA Experts:</strong> Whether you&apos;re choosing a Conventional
                      or FHA loan, we guide you to the program that best fits your goals, budget, and long-term
                      plans.
                    </li>
                    <li>
                      <strong>Seller Preference:</strong> Sellers are more comfortable accepting offers from
                      buyers preapproved by a trusted <em>local</em> mortgage broker. Working with Mortgage
                      Brothers gives sellers confidence that your loan will close smoothly and on time.
                    </li>
                  </ul>
                </section>

                <section id="conclusion">
                  <h3 className="text-[#052316] text-[20px] font-bold mb-4">Conclusion</h3>
                  <p className="mb-4">
                    When it comes to <strong>Conventional vs. FHA loans in Arizona</strong>, the right choice
                    depends on your credit, down payment, and long-term goals.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>FHA loans are perfect for first-time buyers with limited savings or lower credit.</li>
                    <li>
                      Conventional loans reward stronger credit with lower long-term costs and more
                      flexibility.
                    </li>
                  </ul>
                  <p className="mb-6">
                    No matter where you&apos;re buying — in Phoenix, Tucson, Scottsdale, or anywhere in Arizona
                    — the Arizona Mortgage Brothers team can help you choose the loan that gets you into your
                    home with confidence.
                  </p>
                  <p className="font-semibold text-[#052316] mb-6">
                    👉 Ready to find out which loan is right for you? Contact us today for a free consultation.
                  </p>
                  <div className="text-center">
                    <Link
                      href="/#get-pre-approved"
                      className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                    >
                      Get Your Free Consultation
                    </Link>
                  </div>
                </section>

                <section id="faqs">
                  <FaqAccordion
                    title="Frequently Asked Questions"
                    items={[
                    { q: "Can I switch from FHA to Conventional later?", a: <>Yes — many refinance into Conventional loans once they&apos;ve built equity to drop
                        mortgage insurance.</> },
                    { q: "Do FHA loans always cost more long-term?", a: <>Usually. FHA&apos;s lifetime MIP adds up, unless you refinance.</> },
                    { q: "Which loan is better for investors?", a: <>Conventional — FHA is only for primary residences.</> },
                    { q: "Which loan closes faster?", a: <>Conventional, since FHA requires stricter inspections.</> },
                    { q: "Can I use Conventional with less than 20% down?", a: <>Yes. You&apos;ll pay PMI, but it&apos;s temporary — unlike FHA&apos;s MIP.</> }
                    ]}
                  />
                </section>

                <p className="text-[#8a9a7a] text-[13px] leading-relaxed pt-4">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has been
                  prepared for informational purposes only. You should consult your own tax, legal, and accounting
                  advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS #210917 and
                  1618695. Equal housing lender.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/arizona-real-estate-trends-in-2026-predicting-mortgage-rates-for-the-coming-year/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/what-is-a-jumbo-loan-everything-you-need-to-know-before-applying/"
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