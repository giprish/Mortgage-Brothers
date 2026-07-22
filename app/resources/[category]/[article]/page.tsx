"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";

export default function ArticleDetailPage() {
  const params = useParams();
  const categorySlug = (params?.category as string) || "mortgage-basics";
  const articleSlug = (params?.article as string) || "conventional-loan-basics";

  const [activeSection, setActiveSection] = useState("what-makes-conventional");

  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Convert slug to printable title
  const categoryTitle = categorySlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow pt-[110px] lg:pt-[130px] pb-12 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-[12px] text-[#8da684] font-semibold mb-6">
            <Link href="/blog/" className="hover:text-[#2d5a2d] transition-colors">Resources</Link>
            <span>&gt;</span>
            <Link 
              href={categorySlug === "mortgage-basics" ? "/mortgage-basics/" : `/resources/${categorySlug}/`} 
              className="hover:text-[#2d5a2d] transition-colors text-[#3fb364]"
            >
              {categoryTitle}
            </Link>
          </div>

          {/* Article Header */}
          <div className="border-b border-[#e8e0d0]/50 pb-10 mb-12">
            <h1 className="text-[#052316] text-[36px] lg:text-[46px] font-playfair font-normal leading-[1.15] mb-6 max-w-4xl">
              What Is a Conventional Home Loan? The Complete First-Time Buyer Guide
            </h1>
            <p className="text-[#4e5b4e] text-[16px] lg:text-[17.5px] leading-[1.7] max-w-3xl mb-8">
              Conventional loans make up the largest share of mortgages in America — but &quot;conventional&quot; doesn&apos;t mean &quot;basic.&quot; Here&apos;s exactly how they work, who they fit, and how to know if one is right for your first purchase.
            </p>
            
            {/* Author row */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#3fb364]/20 flex items-center justify-center text-[#3fb364] font-bold text-[14px]">
                EK
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[#052316] text-[13.5px] font-bold">Eddie Knoell</span>
                <span className="text-[#8a9a7a] text-[11px] font-semibold">June 18, 2026 · 9 min read</span>
              </div>
            </div>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: On This Page */}
            <div className="lg:col-span-3 lg:sticky lg:top-8 flex flex-col gap-6">
              <div>
                <span className="text-[#a89a70] text-[10px] font-bold tracking-[0.15em] uppercase mb-4 block">
                  ON THIS PAGE
                </span>
                <div className="flex flex-col border-l-2 border-[#e8e0d0]/50">
                  <button
                    onClick={() => handleScrollTo("what-makes-conventional")}
                    className={`pl-4 py-2 text-left text-[13px] font-medium transition-colors border-l-2 -ml-[2px] cursor-pointer ${
                      activeSection === "what-makes-conventional"
                        ? "border-[#3fb364] text-[#3fb364]"
                        : "border-transparent text-[#4e5b4e] hover:text-[#052316]"
                    }`}
                  >
                    What makes a loan &quot;conventional&quot;
                  </button>
                  <button
                    onClick={() => handleScrollTo("down-payment-pmi")}
                    className={`pl-4 py-2 text-left text-[13px] font-medium transition-colors border-l-2 -ml-[2px] cursor-pointer ${
                      activeSection === "down-payment-pmi"
                        ? "border-[#3fb364] text-[#3fb364]"
                        : "border-transparent text-[#4e5b4e] hover:text-[#052316]"
                    }`}
                  >
                    Down payment & PMI
                  </button>
                  <button
                    onClick={() => handleScrollTo("credit-qualifying")}
                    className={`pl-4 py-2 text-left text-[13px] font-medium transition-colors border-l-2 -ml-[2px] cursor-pointer ${
                      activeSection === "credit-qualifying"
                        ? "border-[#3fb364] text-[#3fb364]"
                        : "border-transparent text-[#4e5b4e] hover:text-[#052316]"
                    }`}
                  >
                    Credit and qualifying
                  </button>
                  <button
                    onClick={() => handleScrollTo("conventional-vs-fha")}
                    className={`pl-4 py-2 text-left text-[13px] font-medium transition-colors border-l-2 -ml-[2px] cursor-pointer ${
                      activeSection === "conventional-vs-fha"
                        ? "border-[#3fb364] text-[#3fb364]"
                        : "border-transparent text-[#4e5b4e] hover:text-[#052316]"
                    }`}
                  >
                    Conventional vs. FHA
                  </button>
                  <button
                    onClick={() => handleScrollTo("is-right-for-you")}
                    className={`pl-4 py-2 text-left text-[13px] font-medium transition-colors border-l-2 -ml-[2px] cursor-pointer ${
                      activeSection === "is-right-for-you"
                        ? "border-[#3fb364] text-[#3fb364]"
                        : "border-transparent text-[#4e5b4e] hover:text-[#052316]"
                    }`}
                  >
                    Is it right for you?
                  </button>
                </div>
              </div>

              {/* Share actions */}
              <div className="flex gap-2">
                <button aria-label="Share" className="w-8 h-8 rounded-full border border-[#e8e0d0] bg-white flex items-center justify-center text-[#4e5b4e] hover:bg-[#faf7f0] hover:text-[#052316] transition-colors cursor-pointer shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186l.951-.513a2.25 2.25 0 103.397-1.617l-.951.513m0 0L8.02 12m0 0l3.543.832a2.25 2.25 0 102.242-2.383" />
                  </svg>
                </button>
                <button aria-label="Bookmark" className="w-8 h-8 rounded-full border border-[#e8e0d0] bg-white flex items-center justify-center text-[#4e5b4e] hover:bg-[#faf7f0] hover:text-[#052316] transition-colors cursor-pointer shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                  </svg>
                </button>
                <button aria-label="Print" className="w-8 h-8 rounded-full border border-[#e8e0d0] bg-white flex items-center justify-center text-[#4e5b4e] hover:bg-[#faf7f0] hover:text-[#052316] transition-colors cursor-pointer shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.82l.21-1.2h10.14l.21 1.2M18 19.5H6a2.25 2.25 0 01-2.25-2.25V9A2.25 2.25 0 016 6.75h12A2.25 2.25 0 0120.25 9v8.25A2.25 2.25 0 0118 19.5zm-1.5-12h.008v.008H16.5V7.5z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column: Main Body Content */}
            <div className="lg:col-span-9 flex flex-col gap-10">
              
              {/* Section 1: What makes conventional */}
              <div id="what-makes-conventional" className="scroll-mt-6">
                <h2 className="text-[#052316] text-[22px] lg:text-[24px] font-bold mb-4">
                  What makes a loan &quot;conventional&quot;
                </h2>
                <div className="text-[#4e5b4e] text-[15px] lg:text-[16px] leading-[1.75] flex flex-col gap-4">
                  <p>
                    A conventional loan is simply a mortgage that isn&apos;t backed by a government agency like the FHA, VA, or USDA. Instead, it follows guidelines set by Fannie Mae and Freddie Mac — the two entities that buy the majority of home loans in the country.
                  </p>
                  <p>
                    Because they aren&apos;t government-insured, conventional loans rely more heavily on your credit and financial profile. In exchange, they offer flexibility that government programs can&apos;t: they cover primary homes, second homes, and investment properties, and they don&apos;t carry the upfront insurance fees FHA loans do.
                  </p>
                </div>
              </div>

              {/* Section 2: Down payment */}
              <div id="down-payment-pmi" className="scroll-mt-6">
                <h2 className="text-[#052316] text-[22px] lg:text-[24px] font-bold mb-4">
                  Down payment & PMI
                </h2>
                <div className="text-[#4e5b4e] text-[15px] lg:text-[16px] leading-[1.75] flex flex-col gap-4">
                  <p>
                    The old &quot;20% down&quot; rule is a myth for most buyers. Conventional loans are available with as little as 3% down for qualified first-time buyers. Put down less than 20% and you&apos;ll pay private mortgage insurance (PMI) — but unlike FHA&apos;s insurance, PMI automatically drops off once you reach 20% equity.
                  </p>
                  <p>
                    That single difference can save a homeowner thousands of dollars over the years they own the home.
                  </p>
                </div>
              </div>

              {/* Section 3: Credit */}
              <div id="credit-qualifying" className="scroll-mt-6">
                <h2 className="text-[#052316] text-[22px] lg:text-[24px] font-bold mb-4">
                  Credit and qualifying
                </h2>
                <div className="text-[#4e5b4e] text-[15px] lg:text-[16px] leading-[1.75] flex flex-col gap-4">
                  <p>
                    Conventional loans generally want a credit score of 620 or higher, though the best rates go to scores of 740+. Lenders also look at your debt-to-income ratio — ideally under 43% — and verify income, assets, and employment.
                  </p>
                  <p>
                    If your credit isn&apos;t there yet, don&apos;t count conventional out. We often run a rapid rescore or a quick paydown strategy that moves a borrower into qualifying range in a matter of days.
                  </p>
                </div>
              </div>

              {/* Section 4: Conventional vs FHA */}
              <div id="conventional-vs-fha" className="scroll-mt-6">
                <h2 className="text-[#052316] text-[22px] lg:text-[24px] font-bold mb-4">
                  Conventional vs. FHA
                </h2>
                <div className="text-[#4e5b4e] text-[15px] lg:text-[16px] leading-[1.75] flex flex-col gap-4">
                  <p>
                    FHA loans win on flexibility — lower credit thresholds and 3.5% down. Conventional loans usually win on long-term cost for stronger-credit buyers, thanks to cancelable PMI and no upfront insurance premium.
                  </p>
                  <p>
                    The right answer depends entirely on your numbers, which is exactly the comparison we run for every client before you commit to anything.
                  </p>
                </div>
              </div>

              {/* Section 5: Is it right */}
              <div id="is-right-for-you" className="scroll-mt-6">
                <h2 className="text-[#052316] text-[22px] lg:text-[24px] font-bold mb-4">
                  Is a conventional loan right for you?
                </h2>
                <div className="text-[#4e5b4e] text-[15px] lg:text-[16px] leading-[1.75] flex flex-col gap-4">
                  <p>
                    If you have decent credit, some savings, and steady income, a conventional loan is often the most cost-effective path to owning your first Arizona home. But the only way to know for sure is to compare it against every program you qualify for.
                  </p>
                  <p>
                    That&apos;s what we do — for free, with no impact to your credit, before you&apos;re committed to anything.
                  </p>
                </div>
              </div>

              {/* Green CTA Box */}
              <div className="bg-[#052316] text-white rounded-3xl p-8 relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-lg border border-white/5 mt-4">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 8px, transparent 8px, transparent 16px)" }}></div>
                <div className="relative z-10 max-w-md">
                  <h3 className="text-white text-[20px] font-bold mb-1.5">
                    See which loan actually fits your numbers.
                  </h3>
                  <p className="text-[#c8c8b8] text-[13.5px] leading-relaxed">
                    Free, no obligation, no credit impact — we&apos;ll compare every program you qualify for.
                  </p>
                </div>
                <Link
                  href="/#get-pre-approved"
                  className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-semibold px-6 py-3.5 rounded-xl transition-all shadow-md relative z-10 flex-shrink-0 cursor-pointer"
                >
                  Get Pre-Approved &rarr;
                </Link>
              </div>

            </div>
          </div>

          {/* Section 6: Keep reading */}
          <div className="border-t border-[#e8e0d0]/50 mt-16 pt-12">
            <h3 className="text-[#052316] text-[20px] font-playfair font-normal mb-8">
              Keep reading
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <Link href={`/resources/${categorySlug}/conventional-vs-fha/`} className="bg-white border border-[#e8e0d0]/60 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-green-accent/20 transition-all cursor-pointer flex flex-col justify-between min-h-[140px]">
                <div>
                  <span className="text-[#b89a5a] text-[9.5px] font-bold tracking-widest uppercase block mb-2">
                    MORTGAGE BASICS
                  </span>
                  <h4 className="text-[#052316] text-[15px] font-bold leading-snug mb-3">
                    Conventional vs. FHA Loans: Which Is Right for You?
                  </h4>
                </div>
                <span className="text-[#8a9a7a] text-[11px]">6 min read</span>
              </Link>

              {/* Card 2 */}
              <Link href={`/resources/${categorySlug}/calculate-pmi/`} className="bg-white border border-[#e8e0d0]/60 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-green-accent/20 transition-all cursor-pointer flex flex-col justify-between min-h-[140px]">
                <div>
                  <span className="text-[#b89a5a] text-[9.5px] font-bold tracking-widest uppercase block mb-2">
                    MORTGAGE BASICS
                  </span>
                  <h4 className="text-[#052316] text-[15px] font-bold leading-snug mb-3">
                    How to Calculate How Much PMI Will Be
                  </h4>
                </div>
                <span className="text-[#8a9a7a] text-[11px]">5 min read</span>
              </Link>

              {/* Card 3 */}
              <Link href={`/resources/${categorySlug}/rapid-rescore/`} className="bg-white border border-[#e8e0d0]/60 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-green-accent/20 transition-all cursor-pointer flex flex-col justify-between min-h-[140px]">
                <div>
                  <span className="text-[#b89a5a] text-[9.5px] font-bold tracking-widest uppercase block mb-2">
                    PROCESS GUIDANCE
                  </span>
                  <h4 className="text-[#052316] text-[15px] font-bold leading-snug mb-3">
                    How a Rapid Rescore Can Help You Get Qualified
                  </h4>
                </div>
                <span className="text-[#8a9a7a] text-[11px]">5 min read</span>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
