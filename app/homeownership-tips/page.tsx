"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { getArticleImage } from "@/lib/article-images";

const articles = [
  {
    title: "How Does My Car Loan Payment Affect My Mortgage?",
    description: "See how car payments impact debt-to-income ratios and how much home-buying power you lose with common auto loan amounts.",
    href: "/how-does-my-car-loan-payment-affect-my-mortgage/",
    date: "Feb 4, 2025",
    readTime: "8 min read",
    category: "Homeownership Tips"
  },
  {
    title: "Canceling your FHA MIP is Easier than you think",
    description: "Learn when FHA MIP can cancel, how Streamline refinance helps pre-2009 loans, and how refinancing to conventional can eliminate mortgage insurance.",
    href: "/canceling-your-fha-mip-is-easier-than-you-think/",
    date: "Feb 6, 2025",
    readTime: "10 min read",
    category: "Homeownership Tips"
  },
  {
    title: "What If My Spouse Dies and I'm Not On The Mortgage?",
    description: "Learn what happens to a mortgage when a spouse dies if you are not on the loan, including title, St. Germain Act protections, community property, and refinance options.",
    href: "/what-if-my-spouse-dies-and-im-not-on-the-mortgage/",
    date: "Dec 30, 2024",
    readTime: "9 min read",
    category: "Homeownership Tips"
  },
  {
    title: "The Complete Arizona Guide to Selling Your Home for Cash (2026)",
    description: "A cash home sale is a transaction in which a buyer purchases your house outright, without a mortgage. Learn the pros, cons, and alternatives in Arizona.",
    href: "/how-to-sell-my-house-fast-in-arizona/",
    date: "Jun 25, 2026",
    readTime: "33 min read",
    category: "Homeownership Tips"
  },
  {
    title: "Arizona Real Estate Trends in 2026: Predicting Mortgage Rates & Market Shifts",
    description: "Market analysis on 2026 Phoenix mortgage rate forecasts, housing inventory recovery, and home appreciation trends.",
    href: "/arizona-real-estate-trends-in-2026-predicting-mortgage-rates-for-the-coming-year/",
    date: "May 5, 2026",
    readTime: "10 min read",
    category: "Homeownership Tips"
  }
];

export default function HomeownershipTipsPage() {
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
              <span className="text-[#3fb364]">Homeownership Tips</span>
            </div>

            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
              TOPIC CATEGORY
            </span>

            <h1 className="text-white text-[32px] lg:text-[48px] font-playfair font-normal leading-[1.1] mb-6">
              Homeownership Tips
            </h1>

            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl">
              Find practical advice on maintaining, improving, and managing your home. From budget-friendly renovations to energy-saving strategies, empower yourself with knowledge to maximize your investment.
            </p>
          </div>
        </section>

        {/* Articles Grid Section */}
        <section className="py-16 px-6 lg:px-10 max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-[#052316] text-[24px] lg:text-[30px] font-playfair font-normal">
              Articles in Homeownership Tips
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, idx) => {
              const imageSrc = getArticleImage(article.href);
              return (
                <Link
                  key={idx}
                  href={article.href}
                  className="bg-white rounded-2xl border border-[#e8e0d0]/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden"
                >
                  <div className="h-44 w-full overflow-hidden bg-[#f2eee3]">
                    {imageSrc ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={imageSrc}
                          alt=""
                          className="h-44 w-full object-cover"
                        />
                      </>
                    ) : (
                      <div className="h-44 w-full bg-gradient-to-br from-[#f2eee3] to-[#e8f5e9]" />
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
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
                  </div>
                </Link>
              );
            })}
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
                Maximize Your Home&apos;s Value
              </h2>
              <p className="text-[#c8c8b8] text-[15px] leading-relaxed mb-8">
                Get expert guidance on home equity, cash-out refinances, or purchasing your next Arizona property.
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
