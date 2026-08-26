import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleCard from "../component/ArticleCard";

export const metadata: Metadata = getSeoMetadata("/mortgage-process-guidance/");

const articles = [
  {
    title: "The Ultimate Guide to Your First Mortgage",
    description: "A complete first-time buyer guide covering credit, down payments, loan types, pre-approval, rate locks, and closing in Arizona.",
    href: "/ultimate-guide-first-mortgage/",
    date: "Feb 11, 2025",
    readTime: "18 min read",
    category: "Mortgage Process Guidance"
  },
  {
    title: "Arizona Mortgage Closing Costs",
    description: "Break down Arizona mortgage closing costs—lender fees, title company fees, appraisals, pest inspections, septic/well certifications, and condo questionnaire fees.",
    href: "/arizona-mortgage-closing-costs/",
    date: "Feb 10, 2025",
    readTime: "8 min read",
    category: "Mortgage Process Guidance"
  },
  {
    title: "Arizona Mortgage Closing Process",
    description: "Understand prior-to-closing conditions, what to bring on signing day, and how closing timing affects your Arizona mortgage.",
    href: "/arizona-mortgage-closing-process/",
    date: "Feb 10, 2025",
    readTime: "10 min read",
    category: "Mortgage Process Guidance"
  },
  {
    title: "Arizona Home Buying Process",
    description: "Walk through the five major steps of buying a home in Arizona—from pre-approval and your buying team to offer, paperwork, and closing.",
    href: "/arizona-home-buying-process/",
    date: "Feb 10, 2025",
    readTime: "9 min read",
    category: "Mortgage Process Guidance"
  },
  {
    title: "Learn About the Home Mortgage Approval Process",
    description: "A step-by-step roadmap of the Arizona mortgage approval process, plus key concepts like DTI, LTV, credit, and pre-approval letters.",
    href: "/arizona-mortgage-approval-process/",
    date: "Feb 10, 2025",
    readTime: "12 min read",
    category: "Mortgage Process Guidance"
  },
  {
    title: "How Fast is Too Fast to Close a Mortgage Loan to Purchase a House?",
    description: "Learn why a 30-day close is ideal, when 20–25 days is reasonable, and the risks of rushing a super-fast mortgage closing.",
    href: "/how-fast-is-too-fast-to-close-a-mortgage-loan-to-purchase-a-house/",
    date: "Feb 4, 2025",
    readTime: "10 min read",
    category: "Mortgage Process Guidance"
  },
  {
    title: "VA Loans for First-Time Homebuyers in Arizona: Your Path to Homeownership",
    description: "Explore 0% down payment VA loan benefits, eligibility guidelines, and rate advantages for military buyers in Arizona.",
    href: "/va-loans-for-first-time-homebuyers-in-arizona-your-path-to-affordable-homeownership/",
    date: "May 28, 2026",
    readTime: "8 min read",
    category: "Mortgage Process Guidance"
  },
  {
    title: "What Is a Conventional Home Loan? The Complete First-Time Buyer Mortgage Guide",
    description: "Learn what a conventional home loan is, 2025 Arizona loan limits, qualification requirements, and how it compares to FHA, VA, and jumbo options.",
    href: "/what-is-a-conventional-home-loan-the-complete-first-time-buyer-mortgage-guide/",
    date: "Sep 16, 2025",
    readTime: "12 min read",
    category: "Mortgage Process Guidance"
  },
  {
    title: "How to Get a Mortgage in Arizona with Fair or Improving Credit",
    description: "Learn how buyers with credit scores between 580 and 660 qualify for home loans in Arizona with FHA programs and rapid rescoring.",
    href: "/how-to-get-a-mortgage-in-arizona-with-fair-or-improving-credit/",
    date: "Jun 10, 2026",
    readTime: "7 min read",
    category: "Mortgage Process Guidance"
  },
  {
    title: "Conventional Home Loans vs. FHA Loans: Which Is Right for You?",
    description: "Detailed side-by-side comparison of credit score rules, down payments, PMI vs. MIP, and total 30-year costs for Arizona buyers.",
    href: "/conventional-home-loans-vs-fha-loans-which-is-right-for-you/",
    date: "Jun 20, 2026",
    readTime: "10 min read",
    category: "Mortgage Process Guidance"
  },
  {
    title: "How do Solar Panels affect the mortgage and closing process?",
    description: "Learn how lenders view owned vs. leased solar panels, how they impact appraised value, and whether solar payments affect mortgage qualifications.",
    href: "/how-do-solar-panels-affect-the-mortgage-and-closing-process/",
    date: "Feb 6, 2025",
    readTime: "10 min read",
    category: "Mortgage Process Guidance"
  }
];

export default function MortgageProcessGuidancePage() {
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
              <span className="text-[#3fb364]">Mortgage Process Guidance</span>
            </div>

            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
              TOPIC CATEGORY
            </span>

            <h1 className="text-white text-[32px] lg:text-[48px] font-playfair font-normal leading-[1.1] mb-6 max-w-3xl mx-auto">
              Mortgage Process Guidance
            </h1>

            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Navigate the mortgage application process with confidence. From pre-approval to closing, our step-by-step guides help you understand what to expect and how to prepare at each stage.
            </p>
          </div>
        </section>

        {/* Articles Grid Section */}
        <section className="py-16 px-6 lg:px-10 max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-[#052316] text-[24px] lg:text-[30px] font-playfair font-normal">
              Articles in Mortgage Process Guidance
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
                Start Your Process with Confidence
              </h2>
              <p className="text-[#c8c8b8] text-[15px] leading-relaxed mb-8">
                Let us guide you through every step of securing your home loan in Arizona.
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