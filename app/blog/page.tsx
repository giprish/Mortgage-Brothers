"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

// Detailed Resource Articles list matching the screenshots
const articlesData = [
  {
    id: "how-to-sell-my-house-fast-in-arizona",
    category: "Pillar Post",
    title: "The Complete Arizona Guide to Selling Your Home for Cash (2026)",
    description: "A cash home sale is a transaction in which a buyer purchases your house outright, without a mortgage. Learn the pros, cons, and alternatives in Arizona.",
    date: "Jun 25, 2026",
    readTime: "33 min read",
    isFeatured: true,
    href: "/how-to-sell-my-house-fast-in-arizona"
  },
  {
    id: "top-7-reasons-arizona-investment-home-buyers-choose-private-money-lenders",
    category: "Arizona Mortgage Insights",
    title: "Top 7 Reasons Arizona Investment Home Buyers Choose Private Money Lenders",
    description: "Discover why real estate investors in Phoenix and Scottsdale turn to private money lending for fast, flexible property acquisitions.",
    date: "Jun 15, 2026",
    readTime: "8 min read",
    isFeatured: false,
    href: "/top-7-reasons-arizona-investment-home-buyers-choose-private-money-lenders"
  },
  {
    id: "how-to-get-a-mortgage-in-arizona-with-fair-or-improving-credit",
    category: "Arizona Mortgage Insights",
    title: "How to Get a Mortgage in Arizona with Fair or Improving Credit",
    description: "Learn how buyers with credit scores between 580 and 660 qualify for home loans in Arizona with FHA programs and rapid rescoring.",
    date: "Jun 10, 2026",
    readTime: "7 min read",
    isFeatured: false,
    href: "/how-to-get-a-mortgage-in-arizona-with-fair-or-improving-credit"
  },
  {
    id: "who-qualifies-for-a-reverse-mortgage-understanding-eligibility-requirements",
    category: "Arizona Mortgage Insights",
    title: "Who Qualifies for a Reverse Mortgage? Understanding Eligibility in Arizona",
    description: "A complete guide to HECM reverse mortgage eligibility rules, age requirements, and equity qualifications for Arizona seniors.",
    date: "Jun 5, 2026",
    readTime: "9 min read",
    isFeatured: false,
    href: "/who-qualifies-for-a-reverse-mortgage-understanding-eligibility-requirements"
  },
  {
    id: "va-loans-for-first-time-homebuyers-in-arizona-your-path-to-affordable-homeownership/",
    category: "Process Guidance",
    title: "VA Loans for First-Time Homebuyers in Arizona: Your Path to Homeownership",
    description: "Explore 0% down payment VA loan benefits, eligibility guidelines, and rate advantages for military buyers in Arizona.",
    date: "May 28, 2026",
    readTime: "8 min read",
    isFeatured: false,
    href: "/va-loans-for-first-time-homebuyers-in-arizona-your-path-to-affordable-homeownership"
  },
  {
    id: "navigating-mortgage-options-during-divorce-a-complete-guide",
    category: "Arizona Mortgage Insights",
    title: "Navigating Mortgage Options During Divorce: A Complete Guide for Arizona Homeowners",
    description: "How to handle marital real estate in Arizona, including buyout refinances, equity splits, and home sale strategies.",
    date: "May 20, 2026",
    readTime: "11 min read",
    isFeatured: false,
    href: "/navigating-mortgage-options-during-divorce-a-complete-guide"
  },
  {
    id: "what-is-a-jumbo-loan-everything-you-need-to-know-before-applying",
    category: "Arizona Mortgage Insights",
    title: "What Is a Jumbo Loan? Everything You Need to Know Before Applying in Arizona",
    description: "Understanding non-conforming luxury home financing, qualification rules, and 2026 limits in Scottsdale and Phoenix.",
    date: "May 12, 2026",
    readTime: "9 min read",
    isFeatured: false,
    href: "what-is-a-jumbo-loan-everything-you-need-to-know-before-applying/"
  },
  {
    id: "conventional-home-loans-vs-fha-loans-which-is-right-for-you",
    category: "Mortgage Basics",
    title: "Conventional Home Loans vs. FHA Loans: Which Is Right for You?",
    description: "Detailed side-by-side comparison of credit score rules, down payments, PMI vs. MIP, and total 30-year costs for Arizona buyers.",
    date: "Jun 20, 2026",
    readTime: "10 min read",
    isFeatured: false,
    href: "/conventional-home-loans-vs-fha-loans-which-is-right-for-you"
  },
  {
    id: "arizona-real-estate-trends-in-2026-predicting-mortgage-rates-for-the-coming-year",
    category: "Real Estate & Mortgages",
    title: "Arizona Real Estate Trends in 2026: Predicting Mortgage Rates & Market Shifts",
    description: "Market analysis on 2026 Phoenix mortgage rate forecasts, housing inventory recovery, and home appreciation trends.",
    date: "May 5, 2026",
    readTime: "10 min read",
    isFeatured: false,
    href: "/arizona-real-estate-trends-in-2026-predicting-mortgage-rates-for-the-coming-year"
  }
];

// Mapped Topics lists matching the screenshots from live site
const topicsData = [
  {
    title: "Arizona Mortgage Insights",
    description: "Explore local market trends, regulations, and unique opportunities for homebuyers in the Grand Canyon State. Get expert advice on navigating Arizona's diverse real estate landscape and mortgage options.",
    linkText: "Explore Arizona Options",
    href: "/arizona-mortgage-insights"
  },
  {
    title: "Mortgage Process Guidance",
    description: "Navigate the mortgage application process with confidence. From pre-approval to closing, our step-by-step guides help you understand what to expect and how to prepare at each stage.",
    linkText: "Navigate Your Mortgage",
    href: "/mortgage-process-guidance"
  },
  {
    title: "FHA Loans",
    description: "Discover the benefits and requirements of Federal Housing Administration loans. Learn how these government-backed mortgages can make homeownership more accessible,",
    linkText: "Explore FHA Loans",
    href: "/fha-loans"
  },
  {
    title: "Mortgage Qualifications",
    description: "Understand the factors that lenders consider when approving mortgages. Learn how to improve your chances of qualification by optimizing your credit score, debt-to-income ratio, and down payment.",
    linkText: "Check Your Qualifications",
    href: "/mortgage-qualifications"
  },
  {
    title: "Homeownership Tips",
    description: "Find practical advice on maintaining, improving, and managing your home. From budget-friendly renovations to energy-saving strategies, empower yourself with knowledge to maximize your investment.",
    linkText: "Get Home Smart",
    href: "/homeownership-tips"
  },
  {
    title: "Real Estate & Mortgages",
    description: "Explore the intersection of real estate trends and mortgage options. Get insights on how market conditions affect home prices, interest rates, and financing opportunities.",
    linkText: "Sync Market & Mortgage",
    href: "/real-estate-mortgages"
  },
  {
    title: "Mortgage Basics",
    description: "Demystify the world of mortgages with our comprehensive guides. Understand key terms, loan types, and fundamental concepts to make informed decisions about your home financing.",
    linkText: "Master Mortgage Fundamentals",
    href: "/mortgage-basics"
  },
  {
    title: "Specialty Loans",
    description: "Discover unique mortgage products designed for specific needs. From VA loans for veterans to jumbo loans for high-value properties, learn about specialized financing options that might suit your situation.",
    linkText: "Find Your Niche Loan",
    href: "/specialty-loans"
  },
  {
    title: "Mortgage Payments & Strategies",
    description: "Optimize your mortgage with smart payment strategies. Learn about bi-weekly payments, extra principal payments, and refinancing options to potentially save thousands over the life of your home loan.",
    linkText: "Explore Payment Strategies",
    href: "/mortgage-payments-strategies"
  },
  {
    title: "Spouse & Estate Considerations",
    description: "Understand the implications of mortgages on marriage, divorce, and estate planning. Get expert advice on protecting your assets and ensuring smooth transitions in various life scenarios.",
    linkText: "Protect Your Assets",
    href: "/spouse-estate-considerations"
  }
];

const categories = [
  "All",
  "Pillar Post",
  "Arizona Mortgage Insights",
  "Mortgage Basics",
  "Real Estate & Mortgages",
  "Process Guidance"
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Determine current active articles based on filter
  const filteredArticles = useMemo(() => {
    if (selectedCategory === "All") return articlesData;
    return articlesData.filter((art) => art.category === selectedCategory);
  }, [selectedCategory]);

  // Featured article: The first featured match in filter, or fallback to the first element
  const featuredArticle = useMemo(() => {
    const featured = filteredArticles.find((art) => art.isFeatured);
    return featured || filteredArticles[0] || null;
  }, [filteredArticles]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        
        {/* Header Section */}
        <section className="w-full pt-[110px] lg:pt-[130px] pb-12 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-[#a89a70] text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">
              THE RESOURCE LIBRARY
            </span>
            <h1 className="text-[#052316] text-[36px] lg:text-[50px] font-playfair font-normal leading-tight mb-5">
              Straight answers about Arizona mortgages.
            </h1>
            <p className="text-[#4e5b4e] text-[15px] lg:text-[16px] leading-[1.7] max-w-2xl mx-auto">
              Guides, explainers, and market reads from two brothers who&apos;ve spent decades in Phoenix real estate.
            </p>
          </div>
        </section>

        {/* Category Pills Filter Row */}
        <section className="w-full px-6 mb-12">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              const categoryHrefMap: Record<string, string> = {
                "All": "/blog",
                "Pillar Post": "/pillar-post",
                "Arizona Mortgage Insights": "/arizona-mortgage-insights",
                "Mortgage Basics": "/mortgage-basics",
                "Real Estate & Mortgages": "/real-estate-mortgages",
                "Process Guidance": "/mortgage-process-guidance",
              };
              const href = categoryHrefMap[cat] || "/blog";
              
              if (cat === "All" ) {
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-[13.5px] font-semibold rounded-full border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#3fb364] text-white border-transparent shadow-md"
                        : "bg-white border-[#e8dcc6] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#052316]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              }
              return (
                <Link
                  key={cat}
                  href={href}
                  className={`px-4 py-2 text-[13.5px] font-semibold rounded-full border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#3fb364] text-white border-transparent shadow-md"
                      : "bg-white border-[#e8dcc6] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#052316]"
                  }`}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Featured Article Section */}
        {featuredArticle && (
          <section className="w-full px-6 mb-16">
            <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-[#e8e0d0]/60 shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 hover:shadow-xl transition-all duration-300">
              
              {/* Left Striped Decorative Banner */}
              <div className="h-56 md:h-auto bg-[#052316] relative flex flex-col justify-between p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b2f1f] to-[#052316] opacity-90"></div>
                
                {/* Diagonal green-strip decoration */}
                <div className="absolute inset-0 opacity-15 scale-110" style={{ backgroundImage: "repeating-linear-gradient(45deg, #3fb364 0px, #3fb364 10px, transparent 10px, transparent 20px)" }}></div>
                
                <span className="text-[#c8c8b8] text-[9.5px] font-bold uppercase tracking-wider block relative z-10">
                  FEATURED · DROP IMAGE
                </span>
                
                <span className="bg-[#103020]/90 border border-[#205030] text-[#3fb364] text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider block w-fit relative z-10">
                  {featuredArticle.category}
                </span>
              </div>

              {/* Right Content Details */}
              <div className="p-8 flex flex-col justify-between gap-6">
                <div>
                  <span className="text-brand-text-muted text-[12px] block mb-2">
                    {featuredArticle.date} · {featuredArticle.readTime}
                  </span>
                  <Link href={featuredArticle.href || "/how-to-sell-my-house-fast-in-arizona"}>
                    <h2 className="text-[#052316] text-[24px] lg:text-[28px] font-playfair font-normal leading-tight mb-3 hover:text-[#3fb364] transition-colors cursor-pointer">
                      {featuredArticle.title}
                    </h2>
                  </Link>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">
                    {featuredArticle.description}
                  </p>
                </div>

                <Link
                  href={featuredArticle.href || "/how-to-sell-my-house-fast-in-arizona"}
                  className="text-[#3fb364] hover:text-[#2d5a2d] text-[14px] font-bold flex items-center gap-1.5 transition-colors group w-fit"
                >
                  Read the guide
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="group-hover:translate-x-0.5 transition-transform duration-200"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>

            </div>
          </section>
        )}

        {/* 3-Column Grid of Articles */}
        <section className="w-full px-6 py-12 bg-[#fcf9f3] border-t border-[#e8e0d0]/40">
          <div className="max-w-5xl mx-auto">
            
            {/* Header info */}
            <div className="mb-8 flex items-center justify-between pb-4 border-b border-[#e8e0d0]/60">
              <h2 className="text-[#052316] text-[20px] font-playfair font-normal">
                Showing {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
              </h2>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-[#e8e0d0]/50">
                <p className="text-[#4e5b4e] text-[15px]">No articles found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((art) => (
                  <div
                    key={art.id}
                    className="bg-white rounded-2xl border border-[#e8e0d0]/60 shadow-sm overflow-hidden flex flex-col justify-between hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg transition-all duration-300 min-h-[360px]"
                  >
                    <div>
                      {/* Top banner strip */}
                      <div className="h-28 bg-[#f5f0e8] relative p-5 overflow-hidden flex items-start">
                        {/* Striped overlay */}
                        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "repeating-linear-gradient(45deg, #a89a70 0px, #a89a70 8px, transparent 8px, transparent 16px)" }}></div>
                        
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#3fb364] bg-white border border-[#e8dcc6]/60 px-2.5 py-1 rounded relative z-10">
                          {art.category}
                        </span>
                      </div>

                      {/* Content block */}
                      <div className="p-6">
                        <Link href={art.href || "/how-to-sell-my-house-fast-in-arizona"}>
                          <h3 className="text-[#052316] text-[17px] font-playfair font-normal leading-snug mb-2.5 hover:text-[#3fb364] transition-colors cursor-pointer">
                            {art.title}
                          </h3>
                        </Link>
                        <p className="text-[#4e5b4e] text-[13px] leading-relaxed line-clamp-3">
                          {art.description}
                        </p>
                      </div>
                    </div>

                    {/* Footer strip */}
                    <div className="px-6 pb-6 pt-4 border-t border-[#e8e0d0]/30 flex items-center justify-between text-[11.5px] text-[#8a9a7a]">
                      <span>{art.date}</span>
                      <span>{art.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Transform / Get Expert Advice CTA & Browse by Topic Section */}
        <section className="w-full py-16 px-6 bg-white border-t border-[#e8e0d0]/60 text-[#1a251c]">
          <div className="max-w-6xl mx-auto">
            {/* Call To Action Header & Green Button */}
            <div className="text-center mb-16">
              <p className="text-[#4e5b4e] text-[16px] sm:text-[18px] mb-6 font-normal">
                Transform your mortgage knowledge into action – speak with our specialists today!
              </p>
              <Link
                href="/#get-pre-approved"
                className="inline-block bg-[#388e3c] hover:bg-[#2e7d32] text-white font-medium text-[16px] sm:text-[17px] px-8 py-3.5 rounded-lg shadow-sm transition-colors"
              >
                Get Expert Mortgage Advice Now
              </Link>
            </div>

            {/* Topic Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {topicsData.map((topic, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  {/* Green Ribbon Bookmark Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-7 text-[#388e3c]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3.5L19 21V5c0-1.1-.9-2-2-2z"/>
                    </svg>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[#1a251c] text-[20px] sm:text-[22px] font-medium mb-2.5 leading-snug font-playfair group-hover:text-[#388e3c] transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-[#556355] text-[14px] leading-[1.65] mb-3">
                      {topic.description}
                    </p>
                    {topic.linkText && (
                      <Link
                        href={topic.href || "/blog"}
                        onClick={() => setSelectedCategory(topic.title)}
                        className="inline-flex items-center text-[#388e3c] hover:text-[#2e7d32] text-[14px] font-medium transition-colors hover:underline"
                      >
                        {topic.linkText}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
