"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

// Detailed Resource Articles list matching the screenshots
const articlesData = [
  {
    id: "conventional-loan-basics",
    category: "Mortgage Basics",
    title: "What Is a Conventional Home Loan? The Complete First-Time Buyer Guide",
    description: "The most common loan in America, explained from the ground up — down payments, PMI, credit, and whether it's the right fit for your first purchase.",
    date: "Jun 18, 2026",
    readTime: "9 min read",
    isFeatured: true
  },
  {
    id: "mortgage-apr-meaning",
    category: "Mortgage Basics",
    title: "How Does a Mortgage APR Work – and What Does It Actually Mean?",
    description: "Rate and APR aren't the same numbers, and knowing the difference can save you thousands over the life of your loan.",
    date: "Jun 19, 2026",
    readTime: "6 min read",
    isFeatured: false
  },
  {
    id: "dscr-loans-investors",
    category: "Specialty Loans",
    title: "DSCR Loans: The Best Alternative to Hard Money for Investors",
    description: "Qualify on the property's cash flow instead of your personal income — how DSCR financing works for Arizona investors.",
    date: "Jun 4, 2026",
    readTime: "7 min read",
    isFeatured: false
  },
  {
    id: "cancel-fha-mip",
    category: "FHA Loans",
    title: "Canceling Your FHA MIP Is Easier Than You Think",
    description: "You may not be stuck with mortgage insurance forever. Here are the rules to drop MIP and lower your payment.",
    date: "May 26, 2026",
    readTime: "5 min read",
    isFeatured: false
  },
  {
    id: "arizona-binsr-form",
    category: "Real Estate & Mortgages",
    title: "Arizona BINSR: The Buyer Inspection Notice & Seller Response",
    description: "One of the most important forms in an Arizona purchase — what it is, your deadlines, and how not to lose your earnest money.",
    date: "May 21, 2026",
    readTime: "8 min read",
    isFeatured: false
  },
  {
    id: "rapid-rescore-credit",
    category: "Process Guidance",
    title: "How a Rapid Rescore Can Help You Get Qualified for a Mortgage",
    description: "Sometimes a few points is all that stands between you and approval. A rapid rescore can update your credit in days, not months.",
    date: "May 14, 2026",
    readTime: "6 min read",
    isFeatured: false
  },
  {
    id: "understanding-amortization-chart",
    category: "Homeownership Tips",
    title: "Understanding the Amortization Chart",
    description: "Why your early payments barely touch the balance, and how a single extra payment a year reshapes the whole curve.",
    date: "May 7, 2026",
    readTime: "8 min read",
    isFeatured: false
  },
  {
    id: "mortgage-trigger-leads",
    category: "Homeownership Tips",
    title: "What Are Mortgage Trigger Leads – and How to Stop Them",
    description: "The flood of calls after you apply isn't a coincidence. Here's what's happening and how to opt out.",
    date: "Apr 30, 2026",
    readTime: "4 min read",
    isFeatured: false
  },
  {
    id: "buying-down-interest-rate",
    category: "Mortgage Basics",
    title: "Buying Down Your Arizona Interest Rate: Is It Worth It?",
    description: "Discount points can lower your rate — but only pay for them if you'll stay past the break-even point. We run the math.",
    date: "Apr 23, 2026",
    readTime: "7 min read",
    isFeatured: false
  }
];

// Mapped Topics lists matching the bottom section
const topicsData = [
  {
    title: "Mortgage Basics",
    count: 14,
    description: "Plain-English answers to how mortgages actually work — rates, APR, amortization, and the terms you'll hear.",
    icon: (
      <svg className="w-5 h-5 text-brand-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "FHA Loans",
    count: 8,
    description: "Everything on FHA: rules, MIP, streamline refinances, the flip rule, and who FHA is right for.",
    icon: (
      <svg className="w-5 h-5 text-brand-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Real Estate & Mortgages",
    count: 12,
    description: "Where the housing market meets your loan — appraisals, contracts, and Arizona specific forms.",
    icon: (
      <svg className="w-5 h-5 text-brand-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: "Specialty Loans",
    count: 6,
    description: "DSCR, jumbo, private money, and bank statement financing for the situations conventional loans don't cover.",
    icon: (
      <svg className="w-5 h-5 text-brand-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Homeownership Tips",
    count: 11,
    description: "Practical guidance for after you close — payments, equity, and protecting your investment.",
    icon: (
      <svg className="w-5 h-5 text-brand-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Process Guidance",
    count: 10,
    description: "Step-by-step walkthroughs of approval, closing, and everything between application and keys.",
    icon: (
      <svg className="w-5 h-5 text-brand-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  }
];

const categories = [
  "All",
  "Mortgage Basics",
  "FHA Loans",
  "Real Estate & Mortgages",
  "Specialty Loans",
  "Homeownership Tips",
  "Process Guidance"
];

export default function ResourceLibraryPage() {
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
                  <h2 className="text-[#052316] text-[24px] lg:text-[28px] font-playfair font-normal leading-tight mb-3 hover:text-[#3fb364] transition-colors cursor-pointer">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">
                    {featuredArticle.description}
                  </p>
                </div>

                <Link
                  href="/#get-pre-approved"
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
                        <h3 className="text-[#052316] text-[17px] font-playfair font-normal leading-snug mb-2.5 hover:text-[#3fb364] transition-colors cursor-pointer">
                          {art.title}
                        </h3>
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

        {/* Browse by Topic Section */}
        <section className="w-full py-20 px-6 bg-[#052316] text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-white text-[28px] lg:text-[36px] font-playfair font-normal mb-10 text-center lg:text-left">
              Browse by topic
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topicsData.map((topic, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(topic.title)}
                  className="bg-[#0b2f1f] border border-white/5 hover:border-brand-green-accent/40 rounded-2xl p-6 text-left hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[170px] group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded-lg bg-[#143d2b] flex items-center justify-center">
                        {topic.icon}
                      </div>
                      <span className="text-[#8a9a7a] text-[11.5px] font-semibold bg-[#052316] px-2 py-0.5 rounded border border-white/5 group-hover:border-brand-green-accent/20 transition-colors">
                        {topic.count} articles
                      </span>
                    </div>
                    
                    <h3 className="text-white text-[16px] font-bold mb-1.5 group-hover:text-brand-green-accent transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-[#c8c8b8] text-[12.5px] leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
