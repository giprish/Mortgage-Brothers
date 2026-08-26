import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleCard from "../component/ArticleCard";

export const metadata: Metadata = getSeoMetadata("/fha-loans/");

const articles = [
  {
    title: "Conventional Home Loans vs. FHA Loans: Which Is Right for You?",
    description:
      "Buying a home in Arizona is exciting—but it can also feel overwhelming when it comes to choosing the right mortgage. Take Emma, a first-time buyer in Phoenix. She’s saved some money but isn’t sure if a Conventional home loan or an FHA loan makes more sense.",
    href: "/conventional-home-loans-vs-fha-loans-which-is-right-for-you/",
    date: "Oct 8, 2025",
    readTime: "10 min read",
    category: "FHA Loans",
  },
  {
    title: "Canceling your FHA MIP is Easier than you think",
    description:
      "If you are still paying Mortgage Insurance Premiums (MIP) on a Federal Housing Administration (FHA) backed loan you may be paying more than you need to. Canceling this type of mortgage insurance can also be easier than many homeowners believe.",
    href: "/canceling-your-fha-mip-is-easier-than-you-think/",
    date: "Feb 6, 2025",
    readTime: "10 min read",
    category: "FHA Loans",
  },
  {
    title: "Put A Bow On It: FHA Loan Gift Guide",
    description:
      "Many first-time homebuyers do not have the savings on hand for a large down-payment on their mortgage. This is why they often choose an FHA loan over a Conventional loan. Not only does an FHA loan only require 3.5% down, but it also allows for gifts.",
    href: "/put-bow-fha-loan-gift-guide/",
    date: "Feb 5, 2025",
    readTime: "8 min read",
    category: "FHA Loans",
  },
  {
    title: "FHA Flip Rule Waiver Expired – You need to wait 90 days to write a contract",
    description:
      "FHA still requires a 90-day wait after a seller acquires a home before a buyer can write an FHA contract. The 2011–2014 flip-rule waiver was never renewed.",
    href: "/fha-flip-rule-waiver-expired-you-need-wait-90-days-to-write-a-contract/",
    date: "Feb 4, 2025",
    readTime: "5 min read",
    category: "FHA Loans",
  },
  {
    title: "What Is An Assumable Mortgage?",
    description:
      "An assumable mortgage is one in which the lender (the mortgage company) has included a provision or clause which stipulates that the mortgage may be assumed by a third party. Typically, this third party would be the person who is purchasing your home from you.",
    href: "/assumable-mortgage/",
    date: "Feb 4, 2025",
    readTime: "6 min read",
    category: "FHA Loans",
  },
];

export default function FhaLoansCategoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-[#052316] text-white pt-[110px] lg:pt-[130px] pb-16 lg:pb-24 px-6 lg:px-10">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center gap-2 text-[#b8d4b8] text-[13px] font-medium mb-6">
              <Link href="/blog/" className="hover:text-white transition-colors">
                Blog
              </Link>
              <span>&gt;</span>
              <span className="text-[#3fb364]">FHA Loans</span>
            </div>

            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
              TOPIC CATEGORY
            </span>

            <h1 className="text-white text-[32px] lg:text-[48px] font-playfair font-normal leading-[1.1] mb-6 max-w-3xl mx-auto">
              FHA Loans
            </h1>

            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Explore FHA loans, their requirements, and benefits, including effective tips for managing MIP cancellation.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 lg:px-10 max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-[#052316] text-[24px] lg:text-[30px] font-playfair font-normal">
              Articles in FHA Loans
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard
                key={article.href}
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

        <section className="py-12 px-6 lg:px-10 max-w-5xl mx-auto mb-16">
          <div className="bg-[#052316] text-white rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden shadow-xl">
            <div className="max-w-2xl mx-auto relative z-10">
              <span className="text-[#7a6638] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                TAKE THE NEXT STEP
              </span>
              <h2 className="text-white text-[28px] lg:text-[38px] font-playfair font-normal mb-4">
                See if an FHA loan is right for you
              </h2>
              <p className="text-[#c8c8b8] text-[15px] leading-relaxed mb-8">
                Low down payment, flexible credit, and gift funds allowed. Get a no-obligation pre-approval in about 15 minutes.
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
