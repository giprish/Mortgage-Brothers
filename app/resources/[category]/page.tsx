"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

// Detailed Resource Articles list matching the parent route
const articlesData = [
  {
    id: "conventional-loan-basics",
    category: "Mortgage Basics",
    categorySlug: "mortgage-basics",
    title: "What Is a Conventional Home Loan? The Complete First-Time Buyer Guide",
    description: "The most common loan in America, explained from the ground up — down payments, PMI, credit, and whether it's the right fit for your first purchase.",
    date: "Jun 18, 2026",
    readTime: "9 min read"
  },
  {
    id: "mortgage-apr-meaning",
    category: "Mortgage Basics",
    categorySlug: "mortgage-basics",
    title: "How Does a Mortgage APR Work – and What Does It Actually Mean?",
    description: "Rate and APR aren't the same numbers, and knowing the difference can save you thousands over the life of your loan.",
    date: "Jun 11, 2026",
    readTime: "6 min read"
  },
  {
    id: "buying-down-interest-rate",
    category: "Mortgage Basics",
    categorySlug: "mortgage-basics",
    title: "Buying Down Your Arizona Interest Rate: Is It Worth It?",
    description: "Discount points can lower your rate — but only pay for them if you'll stay past the break-even point. We run the math.",
    date: "Apr 23, 2026",
    readTime: "7 min read"
  },
  {
    id: "dscr-loans-investors",
    category: "Specialty Loans",
    categorySlug: "specialty-loans",
    title: "DSCR Loans: The Best Alternative to Hard Money for Investors",
    description: "Qualify on the property's cash flow instead of your personal income — how DSCR financing works for Arizona investors.",
    date: "Jun 4, 2026",
    readTime: "7 min read"
  },
  {
    id: "cancel-fha-mip",
    category: "FHA Loans",
    categorySlug: "fha-loans",
    title: "Canceling Your FHA MIP Is Easier Than You Think",
    description: "You may not be stuck with mortgage insurance forever. Here are the rules to drop MIP and lower your payment.",
    date: "May 26, 2026",
    readTime: "5 min read"
  },
  {
    id: "arizona-binsr-form",
    category: "Real Estate & Mortgages",
    categorySlug: "real-estate-mortgages",
    title: "Arizona BINSR: The Buyer Inspection Notice & Seller Response",
    description: "One of the most important forms in an Arizona purchase — what it is, your deadlines, and how not to lose your earnest money.",
    date: "May 21, 2026",
    readTime: "8 min read"
  },
  {
    id: "rapid-rescore-credit",
    category: "Process Guidance",
    categorySlug: "process-guidance",
    title: "How a Rapid Rescore Can Help You Get Qualified for a Mortgage",
    description: "Sometimes a few points is all that stands between you and approval. A rapid rescore can update your credit in days, not months.",
    date: "May 14, 2026",
    readTime: "6 min read"
  },
  {
    id: "understanding-amortization-chart",
    category: "Homeownership Tips",
    categorySlug: "homeownership-tips",
    title: "Understanding the Amortization Chart",
    description: "Why your early payments barely touch the balance, and how a single extra payment a year reshapes the whole curve.",
    date: "May 7, 2026",
    readTime: "8 min read"
  },
  {
    id: "mortgage-trigger-leads",
    category: "Homeownership Tips",
    categorySlug: "homeownership-tips",
    title: "What Are Mortgage Trigger Leads – and How to Stop Them",
    description: "The flood of calls after you apply isn't a coincidence. Here's what's happening and how to opt out.",
    date: "Apr 30, 2026",
    readTime: "4 min read"
  }
];

// Slugs mapping info
const categoriesMap: Record<string, { title: string; subtitle: string; icon: React.ReactNode; subtopics: { title: string; count: number }[] }> = {
  "mortgage-basics": {
    title: "Mortgage Basics",
    subtitle: "Plain-English answers to how mortgages actually work — the rates, terms, and math behind your loan, without the jargon.",
    icon: (
      <svg className="w-6 h-6 text-brand-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    subtopics: [
      { title: "Understanding rates & APR", count: 4 },
      { title: "Down payments & PMI", count: 3 },
      { title: "Amortization & payoff", count: 4 },
      { title: "Loan terminology", count: 3 }
    ]
  },
  "fha-loans": {
    title: "FHA Loans",
    subtitle: "Everything on FHA: rules, MIP, streamline refinances, the flip rule, and who FHA is right for.",
    icon: (
      <svg className="w-6 h-6 text-brand-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    subtopics: [
      { title: "FHA credit score rules", count: 2 },
      { title: "FHA MIP cancelation", count: 2 },
      { title: "Seller concessions", count: 2 },
      { title: "Streamline Refinances", count: 2 }
    ]
  },
  "real-estate-mortgages": {
    title: "Real Estate & Mortgages",
    subtitle: "Where the housing market meets your loan — appraisals, contracts, and Arizona specific forms.",
    icon: (
      <svg className="w-6 h-6 text-brand-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    subtopics: [
      { title: "BINSR negotiations", count: 3 },
      { title: "Appraisal contingencies", count: 3 },
      { title: "Earnest money rules", count: 3 },
      { title: "Arizona contracts", count: 3 }
    ]
  },
  "specialty-loans": {
    title: "Specialty Loans",
    subtitle: "DSCR, jumbo, private money, and bank statement financing for situations conventional loans don't cover.",
    icon: (
      <svg className="w-6 h-6 text-brand-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    subtopics: [
      { title: "DSCR investment loans", count: 2 },
      { title: "Jumbo mortgage limits", count: 2 },
      { title: "Bank statement qualifiers", count: 2 }
    ]
  },
  "homeownership-tips": {
    title: "Homeownership Tips",
    subtitle: "Practical guidance for after you close — payments, equity, and protecting your investment.",
    icon: (
      <svg className="w-6 h-6 text-brand-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    subtopics: [
      { title: "Early payoff strategies", count: 4 },
      { title: "Managing trigger leads", count: 3 },
      { title: "Home equity lines", count: 4 }
    ]
  },
  "process-guidance": {
    title: "Process Guidance",
    subtitle: "Step-by-step walkthroughs of approval, closing, and everything between application and keys.",
    icon: (
      <svg className="w-6 h-6 text-brand-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    subtopics: [
      { title: "Rapid credit rescores", count: 3 },
      { title: "Underwriting process", count: 4 },
      { title: "Closing checklist", count: 3 }
    ]
  }
};

export default function ResourceCategoryPage() {
  const params = useParams();
  const slug = (params?.category as string) || "mortgage-basics";

  // Match info details
  const categoryInfo = useMemo(() => {
    return categoriesMap[slug] || categoriesMap["mortgage-basics"];
  }, [slug]);

  // Filter list matching this category
  const filteredArticles = useMemo(() => {
    return articlesData.filter((art) => art.categorySlug === slug);
  }, [slug]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        
        {/* Top Header Block Banner */}
        <section className="w-full bg-[#052316] text-white py-12 px-6 lg:px-10 relative overflow-hidden">
          {/* Subtle background circles */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full border border-white/5 pointer-events-none -mr-16 -mt-16"></div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            {/* Breadcrumb row */}
            <div className="flex items-center gap-1.5 text-[12px] text-[#3fb364] font-medium mb-6">
              <Link href="/resources" className="hover:underline">
                Resources
              </Link>
              <span>&gt;</span>
              <span className="text-[#a89a70]">{categoryInfo.title}</span>
            </div>

            {/* Icon, Title, and Subtitle description */}
            <div className="flex flex-col items-start gap-4">
              <div className="w-11 h-11 bg-[#103020] border border-[#205030] rounded-xl flex items-center justify-center">
                {categoryInfo.icon}
              </div>
              <h1 className="text-white text-[32px] lg:text-[42px] font-playfair font-normal leading-tight">
                {categoryInfo.title}
              </h1>
              <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.65] max-w-xl">
                {categoryInfo.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Two-Column Content Layout */}
        <section className="w-full py-16 px-6 lg:px-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column - Articles list */}
            <div className="lg:col-span-8">
              <h2 className="text-[#052316] text-[22px] font-playfair font-normal mb-8">
                Start here
              </h2>

              <div className="flex flex-col gap-6">
                {filteredArticles.map((art) => {
                  const articleHref = slug === "mortgage-basics"
                    ? `/mortgage-basics/${art.id}`
                    : `/resources/${slug}/${art.id}`;
                  return (
                    <Link
                      key={art.id}
                      href={articleHref}
                      className="bg-white rounded-2xl border border-[#e8e0d0]/60 p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:shadow-md hover:border-brand-green-accent/20 transition-all duration-300 group cursor-pointer"
                    >
                    <div className="flex items-start gap-4 flex-grow">
                      {/* Left tan striped thumbnail box */}
                      <div className="w-16 h-16 bg-[#f5f0e8] rounded-xl flex-shrink-0 relative overflow-hidden hidden sm:block">
                        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "repeating-linear-gradient(45deg, #a89a70 0px, #a89a70 6px, transparent 6px, transparent 12px)" }}></div>
                      </div>
                      
                      {/* Text Center details */}
                      <div>
                        <h3 className="text-[#052316] text-[16px] font-bold leading-snug mb-1.5 group-hover:text-[#3fb364] transition-colors">
                          {art.title}
                        </h3>
                        <p className="text-[#4e5b4e] text-[13px] leading-relaxed mb-2.5 line-clamp-2">
                          {art.description}
                        </p>
                        <span className="text-brand-text-muted text-[11px] block">
                          {art.date} · {art.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Right arrow icon */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#fcf9f3] flex items-center justify-center text-[#3fb364] group-hover:bg-[#3fb364] group-hover:text-white transition-colors duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transform group-hover:translate-x-0.5 transition-transform">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>

                  </Link>
                );
              })}

                {filteredArticles.length === 0 && (
                  <div className="bg-white rounded-2xl border border-[#e8e0d0]/50 p-12 text-center text-[#4e5b4e] text-[14px]">
                    No articles under this category yet. Check back soon!
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Sidebar Widgets */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* Card 1 - IN THIS TOPIC */}
              <div className="bg-white rounded-2xl border border-[#e8e0d0]/60 p-6 shadow-sm">
                <span className="text-[#a89a70] text-[10px] font-bold tracking-[0.15em] uppercase mb-4 block">
                  IN THIS TOPIC
                </span>
                
                <div className="flex flex-col divide-y divide-[#e8e0d0]/40">
                  {categoryInfo.subtopics.map((sub, idx) => (
                    <div key={idx} className="py-3.5 flex items-center justify-between text-[13.5px] first:pt-0 last:pb-0">
                      <span className="text-[#1a3a1a] font-medium">{sub.title}</span>
                      <span className="text-[#8a9a7a] text-[11px] font-bold">{sub.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2 - PREFER TO TALK IT THROUGH? */}
              <div className="bg-[#0b2f1f] rounded-2xl p-6 border border-white/5 flex flex-col gap-4 text-left shadow-lg">
                <span className="text-[#a89a70] text-[10px] font-bold tracking-[0.12em] uppercase block">
                  PREFER TO TALK IT THROUGH?
                </span>
                <p className="text-[#c8c8b8] text-[13.5px] leading-relaxed">
                  Skip the reading — get answers specific to your numbers.
                </p>
                <Link
                  href="/#get-pre-approved"
                  className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[13px] font-bold py-2.5 px-4 rounded-lg text-center flex items-center justify-center gap-1.5 transition-all duration-200"
                >
                  Get Pre-Approved
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
