import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleCard from "../component/ArticleCard";

export const metadata: Metadata = getSeoMetadata("/mortgage-payments-strategies/");

const articles = [
  {
    title: "Is The Mortgage Interest Tax Deduction Really a Big Deal?",
    description: "See how the mortgage interest tax deduction works with four income examples and what those tax savings look like day to day.",
    href: "/is-the-mortgage-interest-tax-deduction-really-a-big-deal/",
    date: "Feb 12, 2025",
    readTime: "11 min read",
    category: "Mortgage Payments & Strategies"
  },
  {
    title: "Put A Bow On It: FHA Loan Gift Guide",
    description: "Learn FHA gift fund rules for down payments—gift letters, documented transfers, acceptable donors, and why cash gifts are not allowed.",
    href: "/put-bow-fha-loan-gift-guide/",
    date: "Feb 5, 2025",
    readTime: "8 min read",
    category: "Mortgage Payments & Strategies"
  },
  {
    title: "How to Skip 2 Payments On Your Mortgage?",
    description: "See how refinancing can let you skip two mortgage payments, why interest is prepaid or rolled forward, and why it does not save money.",
    href: "/how-to-skip-2-payments-on-your-mortgage/",
    date: "Feb 5, 2025",
    readTime: "9 min read",
    category: "Mortgage Payments & Strategies"
  },
  {
    title: "Buying or Selling personal property with your home sale? Must Watch this First!",
    description: "Learn why personal property in a purchase contract can trigger lender issues and which Arizona items can transfer with the home sale.",
    href: "/buying-or-selling-personal-property-with-your-home-sale-must-watch-this-first/",
    date: "Feb 5, 2025",
    readTime: "11 min read",
    category: "Mortgage Payments & Strategies"
  },
  {
    title: "Seller Concessions To Buyers - How Much?",
    description: "Phoenix seller concessions vary with the market. Redfin: 65.6% of sales included one in the 3 months ending May 2026. Feb 2019 ARMLS figures are historical.",
    href: "/seller-concessions-to-buyers-how-much/",
    date: "Feb 5, 2025",
    readTime: "6 min read",
    category: "Mortgage Payments & Strategies"
  },
  {
    title: "FHA Flip Rule Waiver Expired – You need to wait 90 days to write a contract",
    description: "FHA still requires a 90-day wait after a seller acquires a home before a buyer can write an FHA contract. The 2011–2014 waiver was never renewed.",
    href: "/fha-flip-rule-waiver-expired-you-need-wait-90-days-to-write-a-contract/",
    date: "Feb 4, 2025",
    readTime: "5 min read",
    category: "Mortgage Payments & Strategies"
  },
  {
    title: "What Is An Assumable Mortgage?",
    description: "Learn what an assumable mortgage is, how the assumption clause works, and why FHA loans can be a selling-point advantage.",
    href: "/assumable-mortgage/",
    date: "Feb 4, 2025",
    readTime: "6 min read",
    category: "Mortgage Payments & Strategies"
  },
  {
    title: "Delayed Financing – how to get cashout without waiting 6 months seasoning",
    description: "Learn how delayed financing lets you buy with cash and cash out soon after closing—without waiting the standard 6-month seasoning period.",
    href: "/delayed-financing-how-to-get-cashout-without-waiting-6-months-seasoning/",
    date: "Feb 4, 2025",
    readTime: "10 min read",
    category: "Mortgage Payments & Strategies"
  },
  {
    title: "What is an Example of a Mortgage Recast?",
    description: "See a clear mortgage recast example, how lump-sum payments lower monthly payments, and when paying down principal without a recast is better.",
    href: "/what-is-an-example-of-a-mortgage-recast/",
    date: "Feb 4, 2025",
    readTime: "9 min read",
    category: "Mortgage Payments & Strategies"
  },
  {
    title: "Buying a House with a Cash Offer and Simultaneously getting Mortgage Financing",
    description: "How to make a competitive cash offer using family or private funds, then refinance into a traditional mortgage after closing.",
    href: "/buying-a-house-with-a-cash-offer-and-simultaneously-getting-mortgage-financing/",
    date: "Feb 4, 2025",
    readTime: "9 min read",
    category: "Mortgage Payments & Strategies"
  },
  {
    title: "Understanding An Amortization Schedule",
    description: "Learn how a mortgage amortization schedule works, how principal and interest change over time, and how extra payments can shorten your loan.",
    href: "/understanding-amortization-chart/",
    date: "Feb 3, 2025",
    readTime: "7 min read",
    category: "Mortgage Payments & Strategies"
  },
  {
    title: "Conventional Home Loans vs. FHA Loans: Which Is Right for You?",
    description: "Detailed side-by-side comparison of credit score rules, down payments, PMI vs. MIP, and total 30-year costs for Arizona buyers.",
    href: "/conventional-home-loans-vs-fha-loans-which-is-right-for-you/",
    date: "Jun 20, 2026",
    readTime: "10 min read",
    category: "Mortgage Payments & Strategies"
  },
  {
    title: "Arizona Real Estate Trends in 2026: Predicting Mortgage Rates & Market Shifts",
    description: "As of August 2026, Arizona 30-year rates are around 6.6%–6.75%. Inventory is healthier; the mid-2026 5.5% rate call did not happen.",
    href: "/arizona-real-estate-trends-in-2026-predicting-mortgage-rates-for-the-coming-year/",
    date: "May 5, 2026",
    readTime: "10 min read",
    category: "Mortgage Payments & Strategies"
  }
];

export default function MortgagePaymentsStrategiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#052316] text-white pt-[110px] lg:pt-[130px] pb-16 lg:pb-24 px-6 lg:px-10">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-[#b8d4b8] text-[13px] font-medium mb-6">
              <Link href="/blog/" className="hover:text-white transition-colors">Blog</Link>
              <span>&gt;</span>
              <span className="text-[#3fb364]">Mortgage Payments &amp; Strategies</span>
            </div>

            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
              TOPIC CATEGORY
            </span>

            <h1 className="text-white text-[32px] lg:text-[48px] font-playfair font-normal leading-[1.1] mb-6 max-w-3xl mx-auto">
              Mortgage Payments &amp; Strategies
            </h1>

            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Optimize your mortgage with smart payment strategies. Learn about bi-weekly payments, extra principal payments, and refinancing options.
            </p>
          </div>
        </section>

        {/* Articles Grid Section */}
        <section className="py-16 px-6 lg:px-10 max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-[#052316] text-[24px] lg:text-[30px] font-playfair font-normal">
              Articles in Mortgage Payments &amp; Strategies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <ArticleCard
                key={idx}
                title={article.title}
                description={article.description}
                href={article.href}
                category={article.category}
                date={article.date}
                readTime={article.readTime}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-6 lg:px-10 max-w-5xl mx-auto mb-16">
          <div className="bg-[#052316] text-white rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden shadow-xl">
            <div className="max-w-2xl mx-auto relative z-10">
              <span className="text-[#7a6638] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                TAKE THE NEXT STEP
              </span>
              <h2 className="text-white text-[28px] lg:text-[38px] font-playfair font-normal mb-4">
                Optimize Your Monthly Payments Today
              </h2>
              <p className="text-[#c8c8b8] text-[15px] leading-relaxed mb-8">
                Consult with our mortgage strategists to review refinancing opportunities or payment acceleration plans.
              </p>
              <Link
                href="#get-pre-approved"
                className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all duration-200 inline-block shadow-lg hover:shadow-xl"
              >
                Get Pre-Approved &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}