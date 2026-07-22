"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const articles = [
  {
    title: "VA Loans for First-Time Homebuyers in Arizona: Your Path to Homeownership",
    description: "Explore 0% down payment VA loan benefits, eligibility guidelines, and rate advantages for military buyers in Arizona.",
    href: "/va-loans-for-first-time-homebuyers-in-arizona-your-path-to-affordable-homeownership",
    date: "May 28, 2026",
    readTime: "8 min read",
    category: "Mortgage Process Guidance"
  },
  {
    title: "How to Get a Mortgage in Arizona with Fair or Improving Credit",
    description: "Learn how buyers with credit scores between 580 and 660 qualify for home loans in Arizona with FHA programs and rapid rescoring.",
    href: "/how-to-get-a-mortgage-in-arizona-with-fair-or-improving-credit",
    date: "Jun 10, 2026",
    readTime: "7 min read",
    category: "Mortgage Process Guidance"
  },
  {
    title: "Conventional Home Loans vs. FHA Loans: Which Is Right for You?",
    description: "Detailed side-by-side comparison of credit score rules, down payments, PMI vs. MIP, and total 30-year costs for Arizona buyers.",
    href: "/conventional-home-loans-vs-fha-loans-which-is-right-for-you",
    date: "Jun 20, 2026",
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
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[#8da684] text-[13px] font-medium mb-6">
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>&gt;</span>
              <span className="text-[#3fb364]">Mortgage Process Guidance</span>
            </div>

            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
              TOPIC CATEGORY
            </span>

            <h1 className="text-white text-[36px] lg:text-[52px] font-playfair font-normal leading-[1.15] mb-6">
              Mortgage Process Guidance
            </h1>

            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl">
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
              <Link
                key={idx}
                href={article.href}
                className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[12px] text-[#8c857b] mb-4">
                    <span className="bg-[#f2eee3] text-[#052316] px-3 py-1 rounded-full font-semibold">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-[#052316] text-[18px] font-bold font-playfair mb-3 leading-snug group-hover:text-[#3fb364] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-[#4e5b4e] text-[13.5px] leading-relaxed mb-6">
                    {article.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#f2eee3]">
                  <span className="text-[12px] text-[#8c857b]">{article.date}</span>
                  <span className="text-[#3fb364] font-semibold text-[13.5px] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article &rarr;
                  </span>
                </div>
              </Link>
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
                Start Your Process with Confidence
              </h2>
              <p className="text-[#c8c8b8] text-[15px] leading-relaxed mb-8">
                Let us guide you through every step of securing your home loan in Arizona.
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
