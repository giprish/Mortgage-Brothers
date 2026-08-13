import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleCard from "../component/ArticleCard";

export const metadata: Metadata = getSeoMetadata("/mortgage-qualifications/");

const articles = [
  {
    title: "How to Get a Mortgage in Arizona with Fair or Improving Credit",
    description: "Learn how buyers with credit scores between 580 and 660 qualify for home loans in Arizona with FHA programs and rapid rescoring.",
    href: "/how-to-get-a-mortgage-in-arizona-with-fair-or-improving-credit/",
    date: "Jun 10, 2026",
    readTime: "7 min read",
    category: "Mortgage Qualifications"
  },
  {
    title: "Who Qualifies for a Reverse Mortgage? Understanding Eligibility in Arizona",
    description: "A complete guide to HECM reverse mortgage eligibility rules, age requirements, and equity qualifications for Arizona seniors.",
    href: "/who-qualifies-for-a-reverse-mortgage-understanding-eligibility-requirements/",
    date: "Jun 5, 2026",
    readTime: "9 min read",
    category: "Mortgage Qualifications"
  },
  {
    title: "Conventional Home Loans vs. FHA Loans: Which Is Right for You?",
    description: "Detailed side-by-side comparison of credit score rules, down payments, PMI vs. MIP, and total 30-year costs for Arizona buyers.",
    href: "/conventional-home-loans-vs-fha-loans-which-is-right-for-you/",
    date: "Jun 20, 2026",
    readTime: "10 min read",
    category: "Mortgage Qualifications"
  },
  {
    title: "Will Commissions Count Towards a Loan?",
    description: "Can commission and bonus income help you qualify? See FHA, VA, and Conventional requirements for using variable income on a home loan.",
    href: "/get-part-income-commission-can-use-qualify-loan/",
    date: "Feb 6, 2025",
    readTime: "9 min read",
    category: "Mortgage Qualifications"
  },
  {
    title: "How to Count Commissions and Bonuses and Tips",
    description: "Learn how lenders count commissions, bonuses, and tip income for Conventional, VA, and FHA loans—and how long of a history you need.",
    href: "/how-to-count-commissions-and-bonuses-and-tips/",
    date: "Feb 6, 2025",
    readTime: "8 min read",
    category: "Mortgage Qualifications"
  },
  {
    title: "If I have 1 Mortgage Late in the Past 12 Months, Can I Get Approved for a Mortgage?",
    description: "One late mortgage payment doesn’t always mean denial. See how FHA, Conventional, and VA treat 30-day lates—and what underwriters look for.",
    href: "/if-i-have-1-mortgage-late-in-the-past-12-months-can-i-get-approved-for-a-mortgage/",
    date: "Dec 30, 2024",
    readTime: "9 min read",
    category: "Mortgage Qualifications"
  },
  {
    title: "Getting a Mortgage with Employment Gaps",
    description: "Learn how employment gaps can affect mortgage approval and what Conventional, FHA, and VA loan programs require.",
    href: "/getting-a-mortgage-with-employment-gaps/",
    date: "Feb 3, 2025",
    readTime: "8 min read",
    category: "Mortgage Qualifications"
  },
  {
    title: "Can I simply payoff credit cards to qualify for a mortgage?",
    description: "See how Conventional, FHA, and VA guidelines treat paying off credit cards—and whether you still need to close the account to lower DTI.",
    href: "/can-i-simply-payoff-credit-cards-to-qualify-for-a-mortgage/",
    date: "Feb 3, 2025",
    readTime: "7 min read",
    category: "Mortgage Qualifications"
  },
  {
    title: "Which Is Better: Getting a Mortgage As a Couple vs. As a Single Applicant?",
    description: "Compare applying for a mortgage as a couple versus a single applicant and understand how underwriting may treat your credit.",
    href: "/better-getting-mortgage-couple-vs-single-applicant/",
    date: "Feb 3, 2025",
    readTime: "7 min read",
    category: "Mortgage Qualifications"
  },
  {
    title: "Can I Relocate and Get a Mortgage While Working Remotely Out of State?",
    description: "Learn how to qualify for a mortgage while working remotely, meet lender requirements, and secure financing when relocating to a new state.",
    href: "/can-i-relocate-and-get-a-mortgage-while-working-remotely-out-of-state/",
    date: "Feb 3, 2025",
    readTime: "8 min read",
    category: "Mortgage Qualifications"
  },
  {
    title: "How a Rapid Rescore Can Help You Qualify for a Mortgage",
    description: "Learn how a rapid rescore can quickly update your credit profile, boost your score in days, and help you qualify for a mortgage.",
    href: "/how-a-rapid-rescore-can-help-to-get-qualified-for-a-mortgage/",
    date: "Feb 3, 2025",
    readTime: "10 min read",
    category: "Mortgage Qualifications"
  },
  {
    title: "DSCR Loan: The Best Alternative to Hard Money",
    description: "Learn how a DSCR loan works, why it's a great alternative to hard money, and how investors can qualify without personal income verification.",
    href: "/dscr-loan-the-best-alternative-to-hard-money/",
    date: "Feb 3, 2025",
    readTime: "9 min read",
    category: "Mortgage Qualifications"
  }
];

export default function MortgageQualificationsPage() {
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
              <span className="text-[#3fb364]">Mortgage Qualifications</span>
            </div>

            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
              TOPIC CATEGORY
            </span>

            <h1 className="text-white text-[32px] lg:text-[48px] font-playfair font-normal leading-[1.1] mb-6 max-w-3xl mx-auto">
              Mortgage Qualifications
            </h1>

            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Understand the factors that lenders consider when approving mortgages. Learn how to improve your chances of qualification by optimizing your credit score, debt-to-income ratio, and down payment.
            </p>
          </div>
        </section>

        {/* Articles Grid Section */}
        <section className="py-16 px-6 lg:px-10 max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-[#052316] text-[24px] lg:text-[30px] font-playfair font-normal">
              Articles in Mortgage Qualifications
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
                Check Your Qualification Options
              </h2>
              <p className="text-[#c8c8b8] text-[15px] leading-relaxed mb-8">
                Speak to our loan specialists to review your credit score, income, and debt-to-income ratio.
              </p>
              <Link
                href="/#get-pre-approved"
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