"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleCard from "../component/ArticleCard";

const articles = [
  {
    title: "Is Homeownership Hereditary?",
    description: "Urban Institute research on how parental homeownership and wealth influence millennial homeownership rates and generational wealth.",
    href: "/is-homeownership-hereditary/",
    date: "Feb 12, 2025",
    readTime: "7 min read",
    category: "Spouse & Estate Considerations"
  },
  {
    title: "Who CAN and CANNOT Be On Title When you Get A Mortgage?",
    description: "Learn who can be added to a mortgage title, spouse and co-borrower rules, community property, and closing in a trust.",
    href: "/who-can-and-cannot-be-on-title-when-you-get-a-mortgage/",
    date: "Feb 12, 2025",
    readTime: "10 min read",
    category: "Spouse & Estate Considerations"
  },
  {
    title: "What If My Spouse Dies and I'm Not On The Mortgage?",
    description: "Learn what happens to a mortgage when a spouse dies if you are not on the loan, including title, St. Germain Act protections, community property, and refinance options.",
    href: "/what-if-my-spouse-dies-and-im-not-on-the-mortgage/",
    date: "Dec 30, 2024",
    readTime: "9 min read",
    category: "Spouse & Estate Considerations"
  },
  {
    title: "Navigating Mortgage Options During Divorce: A Complete Guide for Arizona Homeowners",
    description: "How to handle marital real estate in Arizona, including buyout refinances, equity splits, and home sale strategies.",
    href: "/navigating-mortgage-options-during-divorce-a-complete-guide/",
    date: "May 20, 2026",
    readTime: "11 min read",
    category: "Spouse & Estate Considerations"
  },
  {
    title: "Who Qualifies for a Reverse Mortgage? Understanding Eligibility in Arizona",
    description: "A complete guide to HECM reverse mortgage eligibility rules, age requirements, and equity qualifications for Arizona seniors.",
    href: "/who-qualifies-for-a-reverse-mortgage-understanding-eligibility-requirements/",
    date: "Jun 5, 2026",
    readTime: "9 min read",
    category: "Spouse & Estate Considerations"
  }
];

export default function SpouseEstateConsiderationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#052316] text-white pt-[110px] lg:pt-[130px] pb-16 lg:pb-24 px-6 lg:px-10">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[#8da684] text-[13px] font-medium mb-6">
              <Link href="/blog/" className="hover:text-white transition-colors">Blog</Link>
              <span>&gt;</span>
              <span className="text-[#3fb364]">Spouse &amp; Estate Considerations</span>
            </div>

            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
              TOPIC CATEGORY
            </span>

            <h1 className="text-white text-[32px] lg:text-[48px] font-playfair font-normal leading-[1.1] mb-6">
              Spouse &amp; Estate Considerations
            </h1>

            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl">
              Understand the implications of mortgages on marriage, divorce, and estate planning. Get expert advice on protecting your assets.
            </p>
          </div>
        </section>

        {/* Articles Grid Section */}
        <section className="py-16 px-6 lg:px-10 max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-[#052316] text-[24px] lg:text-[30px] font-playfair font-normal">
              Articles in Spouse &amp; Estate Considerations
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
              <span className="text-[#b89a5a] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                TAKE THE NEXT STEP
              </span>
              <h2 className="text-white text-[28px] lg:text-[38px] font-playfair font-normal mb-4">
                Protect Your Assets &amp; Home Equity
              </h2>
              <p className="text-[#c8c8b8] text-[15px] leading-relaxed mb-8">
                Get confidential, expert advice on home loan restructuring, buyout refinances, or reverse mortgage options.
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
