"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const featureStrip = [
  "Conventional and FHA loans serve different borrower needs",
  "Key cost differences impact long-term affordability",
  "Loan suitability depends on individual circumstances",
];

const keyDifferences = [
  {
    title: "Down Payment Requirements",
    text: "Conventional loans typically require a minimum 5% down payment, while FHA loans allow for a lower 3.5% down payment. This makes FHA loans more accessible for those with limited savings.",
  },
  {
    title: "Credit Score Expectations",
    text: "FHA loans are more lenient, accepting credit scores as low as 580 in some cases. Conventional loans generally require higher credit scores, with better rates for scores above 700.",
  },
  {
    title: "Mortgage Insurance",
    text: "FHA loans require mortgage insurance for the life of the loan in most cases. Conventional loans allow for the removal of mortgage insurance once you reach 20% equity in your home.",
  },
  {
    title: "Interest Rates",
    text: "For borrowers with excellent credit, Conventional loans often offer lower interest rates. However, FHA loans may provide better rates for those with lower credit scores, potentially resulting in significant monthly savings.",
  },
];

const comparisonRows = [
  { feature: "Minimum Down Payment", conventional: "5%", fha: "3.5%" },
  { feature: "Credit Score Requirement", conventional: "Typically 620+", fha: "As low as 580" },
  {
    feature: "Mortgage Insurance",
    conventional: "Can be removed after 20% equity",
    fha: "Required for the life of the loan (if <10% down)",
  },
  {
    feature: "Average Interest Rate",
    conventional: "Generally lower for high scores",
    fha: "Competitive rates for low scores",
  },
  { feature: "Loan Limits", conventional: "Higher limits available", fha: "Lower limits" },
];

const scenarioExcellent = [
  { feature: "Sales Price", conventional: "$300,000", fha: "$300,000" },
  { feature: "Down Payment", conventional: "5%", fha: "5%" },
  { feature: "Interest Rate", conventional: "3.875%", fha: "3.250%" },
  { feature: "Financed Upfront MI", conventional: "$0.00", fha: "$4,987" },
  { feature: "Loan Amount", conventional: "$285,000", fha: "$289,987" },
  { feature: "Principal & Interest Payment", conventional: "$1,340", fha: "$1,262" },
  { feature: "Taxes", conventional: "$150", fha: "$150" },
  { feature: "Homeowners Insurance", conventional: "$60", fha: "$60" },
  { feature: "Mortgage Insurance", conventional: "$85", fha: "$201" },
  { feature: "Total Monthly Payment", conventional: "$1,635", fha: "$1,637" },
  { feature: "Estimated Cash to Close", conventional: "$19,100", fha: "$19,100" },
];

const scenarioBelowAvg = [
  { feature: "Sales Price", conventional: "$300,000", fha: "$300,000" },
  { feature: "Down Payment", conventional: "5%", fha: "5%" },
  { feature: "Interest Rate", conventional: "4.990% (+1.115%)", fha: "3.250%", highlight: "conventional" },
  { feature: "Financed Upfront MI", conventional: "$0.00", fha: "$4,987" },
  { feature: "Loan Amount", conventional: "$285,000", fha: "$289,987" },
  {
    feature: "Principal & Interest Payment",
    conventional: "$1,528 (+$188)",
    fha: "$1,262",
    highlight: "conventional",
  },
  { feature: "Taxes", conventional: "$150", fha: "$150" },
  { feature: "Homeowners Insurance", conventional: "$60", fha: "$60" },
  {
    feature: "Mortgage Insurance",
    conventional: "$308 (+$223)",
    fha: "$201",
    highlight: "conventional",
  },
  {
    feature: "Total Monthly Payment",
    conventional: "$2,046 (+$411)",
    fha: "$1,637",
    highlight: "conventional",
  },
  { feature: "Estimated Cash to Close", conventional: "$19,100", fha: "$19,100" },
];

const expertCards = [
  {
    title: "Expert Guidance",
    text: "Our team has in-depth knowledge of both Conventional and FHA loans, allowing us to provide accurate, up-to-date advice on which option is best for you in the Arizona housing market.",
  },
  {
    title: "Arizona Market Specialists",
    text: "With over 22 years of experience in the Arizona mortgage industry, we understand the unique challenges and opportunities of the local real estate landscape. Our expertise covers diverse markets from Phoenix to Tucson and beyond.",
  },
  {
    title: "Personalized Service",
    text: "We take the time to understand your financial situation, credit history, and long-term goals to recommend the most suitable loan program for Arizona homebuyers.",
  },
  {
    title: "Transparent Communication",
    text: "We explain complex loan terms and conditions in simple language, ensuring you fully understand the pros and cons of each option before making a decision in the competitive Arizona market.",
  },
  {
    title: "Competitive Rates",
    text: "Our strong relationships with lenders allow us to offer competitive interest rates on both Conventional and FHA loans, potentially saving you thousands over the life of your loan in Arizona's dynamic housing market.",
  },
  {
    title: "Local Market Insights",
    text: "We stay up-to-date with Arizona's housing trends, regulations, and economic factors that affect mortgage rates and availability, providing you with valuable insights for your home buying decision.",
  },
];

const faqs = [
  {
    q: "Mortgage Insurance Differences",
    a: "Conventional loans allow mortgage insurance to be removed once you reach 20% equity in your home. FHA loans require mortgage insurance for the life of the loan if you put less than 10% down. With a 10% or larger down payment, FHA mortgage insurance can be removed after 11 years.",
  },
  {
    q: "Switching from FHA to Conventional",
    a: "You can refinance from an FHA loan to a conventional loan once your credit improves or you build more equity. This is a common strategy for borrowers who start with FHA loans due to credit issues but want to eliminate mortgage insurance in the future.",
  },
  {
    q: "Appraisal Differences",
    a: "Contrary to popular belief, FHA and conventional appraisals are very similar today. Both focus on health and safety issues. The main difference is that FHA appraisals may be slightly more stringent about peeling paint, but this is a minor concern that can also arise in conventional appraisals.",
  },
  {
    q: "Credit Score Impact",
    a: "FHA loans are more forgiving of lower credit scores, with rates staying consistent for scores above 660. Conventional loans are highly sensitive to credit scores, with significant rate increases for scores below 700. This makes FHA loans often more attractive for borrowers with credit scores in the 600s.",
  },
  {
    q: "Down Payment Requirements",
    a: "FHA loans require a minimum of 3.5% down, while conventional loans typically require at least 5% down, though some programs offer 3% down payments for qualified buyers.",
  },
  {
    q: "Loan Limits",
    a: "Yes, FHA loans have lower limits compared to conventional loans in most areas. As of 2026, FHA loan limits range from $609,500 to $1,172,150 in high-cost areas, while conventional loan limits go up to $541,287 in most areas and $1,041,125 in high-cost areas.",
  },
  {
    q: "Debt-to-Income Ratio",
    a: "FHA loans are generally more lenient, allowing DTI ratios up to 50% in some cases, while conventional loans typically prefer a maximum DTI of 43%, though exceptions can be made.",
  },
  {
    q: "Property Type Restrictions",
    a: "FHA loans are primarily for owner-occupied primary residences, while conventional loans can be used for primary homes, second homes, and investment properties.",
  },
];

const reviews = [
  {
    text: "I was referred to Eddie through my sister-n-law. I had tried a previous company but wasn't satisfied. I have been extremely happy with Eddie's mortgage team. Everything was done online through emails. This was very helpful as both my husband and I work full time during the day and really have no time to do this. Emails were responded to on a daily basis and in a very quick manner. Every step of the process was done very professionally and friendly. I highly recommend Eddie's mortgage team for your refinancing needs.",
    author: "Chris and Vicky Smith",
    location: "Avondale, Arizona",
  },
  {
    text: "Eddie and his team are fantastic to work with! They are efficient, friendly and very professional. They communicate to all parties in the transaction; making it a very smooth transaction every time. As a real estate agent, this makes my job that much easier when I have a lender who always performs and most of the time is even ahead of schedule.",
    author: "Elizabeth Todd",
    location: "H2 Realty, Phoenix, Arizona",
  },
  {
    text: "My husband and I would like to thank you for an outstanding job you did with our refinance. You are so knowledgeable and kept us updated on each step of the way. Your professionalism was impeccable and your timing was perfect. As you know, I am a Realtor and have dealt with many mortgage people along my career. You are heads and shoulders beyond most I have worked with.",
    author: "Marleen Kapanicas",
    location: "Homesmart, Scottsdale, Arizona",
  },
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

const stats = [
  { value: "3.5%", label: "Minimum FHA Down Payment" },
  { value: "720+", label: "Conventional loan better than FHA with this credit score" },
  { value: "73.7%", label: "Conventional Loan Market Share" },
  { value: "580", label: "Minimum FHA Credit Score" },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

function ComparisonTable({
  rows,
  conventionalHeader,
  fhaHeader,
}: {
  rows: { feature: string; conventional: string; fha: string; highlight?: string }[];
  conventionalHeader: string;
  fhaHeader: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-[#e8e0d0]/70 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left">
          <thead>
            <tr className="bg-[#08271B] text-white">
              <th className="px-5 py-4 text-[13px] font-semibold uppercase tracking-wide">Feature</th>
              <th className="px-5 py-4 text-[13px] font-semibold uppercase tracking-wide">
                {conventionalHeader}
              </th>
              <th className="px-5 py-4 text-[13px] font-semibold uppercase tracking-wide">{fhaHeader}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.feature}
                className={`border-t border-[#e8e0d0]/60 ${i % 2 === 0 ? "bg-[#fcf9f3]" : "bg-white"}`}
              >
                <td className="px-5 py-3.5 text-[14.5px] text-[#08271B] font-semibold">{row.feature}</td>
                <td
                  className={`px-5 py-3.5 text-[14.5px] ${
                    row.highlight === "conventional" ? "text-[#b45309] font-semibold" : "text-[#4e5b4e]"
                  }`}
                >
                  {row.conventional}
                </td>
                <td className="px-5 py-3.5 text-[14.5px] text-[#4e5b4e]">{row.fha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ConventionalVsFhaLoansPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero — matches live: dark green left fade over desk photo */}
        <section
          className="relative w-full text-white min-h-[560px] lg:min-h-[720px] xl:min-h-[760px] flex items-center overflow-hidden bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(52, 69, 37) 0%, rgb(50, 94, 63) 20%, rgba(255, 255, 255, 0) 100%), url('/home/conventional-vs-fha-loans-in-arizona.jpg')",
            backgroundPosition: "0% 50%, 100% 50%",
            backgroundSize: "cover, cover",
          }}
        >
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-[120px] pb-14 lg:pt-[140px] lg:pb-20 relative z-10">
            <div className="max-w-[640px]">
              <h1 className="text-white text-[40px] sm:text-[52px] lg:text-[68px] xl:text-[76px] font-bold leading-[1.05] mb-5 tracking-tight">
                Conventional
                <br className="hidden sm:block" /> vs FHA Loans
              </h1>
              <h2 className="text-white text-[18px] sm:text-[24px] lg:text-[32px] xl:text-[36px] font-normal leading-[1.35] mb-8 max-w-[620px]">
                Understand the key differences and find the best loan option for your financial
                situation in Arizona
              </h2>
              <div className="flex flex-col items-start gap-3">
                <Link
                  href="/#get-pre-approved"
                  className="inline-flex items-center gap-3 bg-[#4B800A] hover:bg-[#3f6d09] text-white text-[16px] lg:text-[18px] font-semibold pl-7 pr-2 py-2 rounded-full transition-all shadow-lg"
                >
                  Start my preapproval
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#052316]/35">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                </Link>
                <p className="text-white/85 text-[13px] lg:text-[14px] font-medium flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 14" />
                  </svg>
                  3 min / no credit impact
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature strip */}
        <section className="w-full bg-[#eeeff4] border-b border-[#e0e2e8] py-10 lg:py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureStrip.map((title) => (
              <div key={title} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <CheckIcon />
                </div>
                <h3 className="text-[#333333] text-[16px] font-semibold leading-snug">{title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Introduction */}
        <section className="w-full py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Introduction to Loan Types
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                Understanding the differences between Conventional and FHA loans is crucial for
                homebuyers in Arizona. Each loan type has unique features that cater to different
                financial situations and borrower profiles.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 shadow-sm">
                <h3 className="text-[#08271B] text-[22px] font-bold mb-3">Conventional Loans</h3>
                <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed mb-5">
                  Conventional loans are not insured or guaranteed by the government, making them a
                  popular choice for borrowers with stable finances. They typically require a minimum
                  down payment of 5% and are best suited for those with higher credit scores, which can
                  lead to lower interest rates and overall costs. These loans offer flexibility in terms
                  of loan amounts and can be a great option for buyers looking to purchase homes in
                  higher price ranges.
                </p>
                <h4 className="text-[#3fb364] text-[16px] font-bold mb-2">
                  Key Benefits of Conventional Loans
                </h4>
                <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed">
                  One of the main advantages of Conventional loans is the potential for lower monthly
                  payments compared to FHA loans, especially for borrowers with excellent credit.
                  Additionally, mortgage insurance on Conventional loans can be canceled once the
                  borrower reaches 20% equity in their home, leading to long-term savings.
                </p>
              </div>

              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 shadow-sm">
                <h3 className="text-[#08271B] text-[22px] font-bold mb-3">FHA Loans</h3>
                <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed mb-5">
                  FHA loans, backed by the Federal Housing Administration, are designed to assist
                  borrowers with lower credit scores or limited savings. With a minimum down payment of
                  just 3.5%, they provide an accessible pathway to homeownership for first-time buyers
                  or those recovering from past financial difficulties. FHA loans also allow for gift
                  funds to cover down payments and closing costs.
                </p>
                <h4 className="text-[#3fb364] text-[16px] font-bold mb-2">Key Benefits of FHA Loans</h4>
                <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed">
                  FHA loans offer significant advantages for those with lower credit scores or minimal
                  down payment funds. They feature lower upfront costs and more lenient qualification
                  criteria, making them an ideal choice for individuals seeking to enter the housing
                  market without extensive financial resources.
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link
                href="/#get-pre-approved"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Explore Your Loan Options Today!
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full bg-[#08271B] py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-[#3fb364] text-[32px] lg:text-[40px] font-bold leading-none mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-[#c8c8b8] text-[13.5px] font-medium leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key differences */}
        <section className="w-full py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Key Differences Between FHA and Conventional Loans in Arizona
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Understanding the main distinctions between Conventional and FHA loans can help you
                make an informed decision about which loan type best suits your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {keyDifferences.map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm"
                >
                  <h3 className="text-[#08271B] text-[17px] font-bold mb-3 flex items-start gap-2">
                    <CheckIcon />
                    <span>{card.title}</span>
                  </h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed pl-7">{card.text}</p>
                </div>
              ))}
            </div>

            <p className="text-[#4e5b4e] text-[15px] leading-relaxed text-center max-w-3xl mx-auto mb-8">
              To help you easily compare Conventional and FHA loans, here&apos;s a quick side-by-side
              breakdown of their most important features.
            </p>

            <ComparisonTable
              rows={comparisonRows}
              conventionalHeader="Conventional Loans"
              fhaHeader="FHA Loans"
            />

            <div className="text-center mt-10">
              <Link
                href="/conventional-vs-fha-calculator/"
                className="inline-flex items-center gap-2 bg-[#052316] hover:bg-[#0a3d26] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Compare Your Loan Options Now!
              </Link>
            </div>
          </div>
        </section>

        {/* Who benefits */}
        <section className="w-full bg-[#f5f0e8] py-16 lg:py-24 border-y border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Who Benefits from Each Loan Type?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Understanding which loan type suits your financial situation is crucial when making a
                home-buying decision.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 shadow-sm">
                <h3 className="text-[#08271B] text-[20px] font-bold mb-3">
                  Conventional Loan Ideal Borrowers
                </h3>
                <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed mb-4">
                  Conventional loans are best suited for borrowers with strong financial profiles. They
                  typically benefit those with higher credit scores (usually 700+), larger down payments
                  (5% or more), and no recent credit issues. These loans are attractive for their
                  potentially lower interest rates and the ability to remove mortgage insurance once 20%
                  equity is reached.
                </p>
                <h4 className="text-[#3fb364] text-[15px] font-bold mb-2">
                  Conventional Loan Advantages
                </h4>
                <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed">
                  Borrowers choosing conventional loans often enjoy lower monthly payments, especially
                  with excellent credit. These loans offer higher borrowing limits, making them suitable
                  for purchasing more expensive homes. Additionally, the option to cancel mortgage
                  insurance provides long-term savings potential.
                </p>
              </div>

              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 shadow-sm">
                <h3 className="text-[#08271B] text-[20px] font-bold mb-3">FHA Loan Ideal Borrowers</h3>
                <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed mb-4">
                  FHA loans cater to a broader range of borrowers, especially those with less-than-perfect
                  credit. They&apos;re ideal for individuals with credit scores as low as 580, smaller down
                  payments (as low as 3.5%), and those who&apos;ve experienced recent credit events like
                  foreclosures or short sales. FHA loans also accommodate borrowers needing gift funds for
                  down payments or closing costs.
                </p>
                <h4 className="text-[#3fb364] text-[15px] font-bold mb-2">FHA Loan Advantages</h4>
                <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed">
                  FHA loans shine in their accessibility. They offer competitive interest rates for
                  borrowers with lower credit scores, potentially resulting in significant monthly
                  savings. The lower down payment requirement and more lenient qualification criteria make
                  FHA loans an excellent choice for first-time homebuyers.
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link
                href="/#get-pre-approved"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Find Your Ideal Loan Match Now!
              </Link>
            </div>
          </div>
        </section>

        {/* Cost comparisons */}
        <section className="w-full py-16 lg:py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Detailed Cost Comparisons
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                To provide a clear picture of how Conventional and FHA loans compare, let&apos;s examine
                two scenarios based on different credit scores.
              </p>
            </div>

            <h3 className="text-[#08271B] text-[20px] font-bold mb-4">
              Scenario 1: Excellent Credit (760+ FICO Score)
            </h3>
            <ComparisonTable
              rows={scenarioExcellent}
              conventionalHeader="Conventional 30 Year Fixed"
              fhaHeader="Fixed 30 Year FHA"
            />
            <ul className="mt-5 mb-12 space-y-2 text-[#4e5b4e] text-[14.5px] leading-relaxed list-disc pl-5">
              <li>
                The Conventional loan is the clear winner with a total monthly payment that is $38 less
                than the FHA loan.
              </li>
              <li>
                FHA mortgage insurance is more expensive and lasts for the life of the loan in most cases.
              </li>
              <li>
                Conventional mortgage insurance can potentially be removed after reaching 20% equity in
                the home.
              </li>
            </ul>

            <h3 className="text-[#08271B] text-[20px] font-bold mb-4">
              Scenario 2: Below-Average Credit (660 FICO Score)
            </h3>
            <ComparisonTable
              rows={scenarioBelowAvg}
              conventionalHeader="Conventional 30 Year Fixed"
              fhaHeader="Fixed 30 Year FHA"
            />
            <ul className="mt-5 mb-10 space-y-2 text-[#4e5b4e] text-[14.5px] leading-relaxed list-disc pl-5">
              <li>
                The FHA loan is significantly more advantageous, with a total monthly payment that is $409
                less than the Conventional loan.
              </li>
              <li>
                Despite the $4,987 upfront mortgage insurance for FHA, the break-even point is only about
                14 months due to lower monthly payments.
              </li>
              <li>
                The Conventional loan&apos;s interest rate is much higher due to the lower credit score,
                resulting in substantially higher monthly payments.
              </li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-[#f5f0e8] rounded-2xl p-6 border border-[#e8e0d0]/60">
                <h4 className="text-[#08271B] text-[17px] font-bold mb-2">Conventional Loan</h4>
                <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed">
                  Mortgage insurance can be removed once you reach 20% equity in your home, potentially
                  leading to lower monthly payments over time.
                </p>
              </div>
              <div className="bg-[#f5f0e8] rounded-2xl p-6 border border-[#e8e0d0]/60">
                <h4 className="text-[#08271B] text-[17px] font-bold mb-2">FHA Loan</h4>
                <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed">
                  For loans with less than 10% down payment, mortgage insurance is required for the life
                  of the loan. If you put down 10% or more, you can remove mortgage insurance after 11
                  years.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 mb-10 text-center">
              <h4 className="text-[#08271B] text-[17px] font-bold mb-3">Interest Rate Comparison</h4>
              <p className="text-[#4e5b4e] text-[15px]">
                Average 30-year Conventional rate:{" "}
                <span className="font-bold text-[#08271B]">7.01%</span>
              </p>
              <p className="text-[#4e5b4e] text-[15px] mt-1">
                Average 30-year FHA rate: <span className="font-bold text-[#08271B]">6.94%</span>
              </p>
            </div>

            <p className="text-[#4e5b4e] text-[15px] leading-relaxed text-center max-w-3xl mx-auto mb-8">
              For borrowers with excellent credit (760+), Conventional loans offer slight advantages.
              For those with lower credit scores (660), FHA loans can provide substantial monthly savings
              and easier qualification criteria.
            </p>

            <div className="text-center">
              <Link
                href="/conventional-vs-fha-calculator/"
                className="inline-flex items-center gap-2 bg-[#052316] hover:bg-[#0a3d26] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Compare Your Loan Options Now!
              </Link>
            </div>
          </div>
        </section>

        {/* Mid CTA */}
        <section className="w-full bg-[#08271B] py-14 lg:py-16 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-[#c8c8b8] text-[15.5px] leading-relaxed mb-6">
              Still weighing the pros and cons of Conventional vs. FHA loans? Let&apos;s simplify the
              process and find the best option for you.
            </p>
            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            >
              Get Your Free Consultation
            </Link>
          </div>
        </section>

        {/* Reviews */}
        <section className="w-full py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[38px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Hear from Homebuyers Like You
              </h2>
              <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
                Finding the right mortgage can be a game-changer. See how our clients navigated the
                choice between Conventional and FHA loans.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {reviews.map((rev) => (
                <div
                  key={rev.author}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm flex flex-col"
                >
                  <div className="flex gap-0.5 mb-4 text-[#b89a5a]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#3a443a] text-[14px] leading-relaxed flex-1 mb-5">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                  <div>
                    <p className="text-[#08271B] text-[14px] font-bold">{rev.author}</p>
                    <p className="text-[#8a9a7a] text-[12px] mt-0.5">{rev.location}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/client-mortgage-reviews/"
                className="inline-flex items-center gap-2 text-[#08271B] hover:text-[#3fb364] font-semibold text-[15px] transition-colors"
              >
                Explore All Client Testimonials
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Quiz CTA */}
        <section className="w-full bg-[#f5f0e8] py-14 border-y border-[#e8e0d0]/50">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2
              className="text-[#08271B] text-[26px] lg:text-[32px] font-normal leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Is Your Credit Score Better Suited for Conventional or FHA?
            </h2>
            <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6">
              Your credit score can determine which loan type offers you better terms. Find out whether
              a Conventional or FHA loan might be right for your situation.
            </p>
            <Link
              href="/conventional-vs-fha-calculator/"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            >
              Take The Quiz
            </Link>
          </div>
        </section>

        {/* Expert guidance */}
        <section className="w-full bg-[#08271B] py-16 lg:py-24 text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-white text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Expert Guidance on Conventional vs FHA Loans in Arizona
              </h2>
              <p className="text-[#c8c8b8] text-[15.5px] leading-relaxed">
                At AZ Mortgage Brothers, we&apos;re committed to helping you find the best loan solution
                for your unique situation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {expertCards.map((card) => (
                <div key={card.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-[#3fb364] text-[17px] font-bold mb-2">{card.title}</h3>
                  <p className="text-[#c8c8b8] text-[14px] leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="tel:+16025352171"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-10">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[36px] font-normal leading-tight mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Common Questions About FHA and Conventional Loans
              </h2>
              <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
                When considering Conventional and FHA loans, many borrowers have questions about key
                differences and potential drawbacks.
              </p>
            </div>

            <div className="flex flex-col gap-3 mb-10">
              {faqs.map((faq, index) => {
                const open = openFaq === index;
                return (
                  <div
                    key={faq.q}
                    className="bg-white border border-[#e8e0d0]/70 rounded-xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : index)}
                      className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 cursor-pointer"
                      aria-expanded={open}
                    >
                      <span className="text-[#08271B] text-[15px] font-semibold leading-snug">
                        {faq.q}
                      </span>
                      <span
                        className={`text-[#3fb364] text-[22px] font-light shrink-0 transition-transform ${
                          open ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    {open && (
                      <div className="px-5 pb-5 text-[#4e5b4e] text-[14.5px] leading-relaxed border-t border-[#e8e0d0]/50 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Get Personalized Advice Today!
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="w-full bg-[#f5f0e8] py-16 lg:py-20 border-y border-[#e8e0d0]/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2
              className="text-[#08271B] text-[30px] lg:text-[38px] font-normal leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ready to Take the Next Step? Let&apos;s Talk!
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-[14.5px] text-[#08271B]">
              <a href="tel:+16025352171" className="font-semibold hover:text-[#3fb364] transition-colors">
                +1 602-535-2171
              </a>
              <span className="hidden sm:inline text-[#c8c8b8]">|</span>
              <a
                href="https://goo.gl/maps/GVLYa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3fb364] transition-colors text-center"
              >
                1599 East Orangewood Ave Suite 200, Phoenix, AZ 85020
              </a>
            </div>
            <Link
              href="/#get-pre-approved"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all"
            >
              Start my preapproval
            </Link>
          </div>
        </section>

        {/* Explore solutions */}
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
                  key={item.href + item.label}
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
