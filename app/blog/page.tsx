"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleCard from "../component/ArticleCard";
import {
  blogArticles,
  BLOG_CATEGORIES,
  CATEGORY_HREF_MAP,
  CATEGORY_FROM_PATH,
} from "./library-data";

const topicsData = [
  {
    title: "Arizona Mortgage Insights",
    description:
      "Explore local market trends, regulations, and unique opportunities for homebuyers in the Grand Canyon State. Get expert advice on navigating Arizona's diverse real estate landscape and mortgage options.",
    linkText: "Explore Arizona Options",
    href: "/arizona-mortgage-insights/",
  },
  {
    title: "Mortgage Process Guidance",
    description:
      "Navigate the mortgage application process with confidence. From pre-approval to closing, our step-by-step guides help you understand what to expect and how to prepare at each stage.",
    linkText: "Navigate Your Mortgage",
    href: "/mortgage-process-guidance/",
    filterAs: "Process Guidance",
  },
  {
    title: "FHA Loans",
    description:
      "Discover the benefits and requirements of Federal Housing Administration loans. Learn how these government-backed mortgages can make homeownership more accessible,",
    linkText: "Explore FHA Loans",
    href: "/fha-loans/",
  },
  {
    title: "Mortgage Qualifications",
    description:
      "Understand credit scores, income requirements, debt-to-income ratios, and other key factors that determine mortgage eligibility. Get tips to improve your chances of approval.",
    linkText: "Check Your Qualification",
    href: "/mortgage-qualifications/",
  },
  {
    title: "Homeownership Tips",
    description:
      "Practical advice for current and aspiring homeowners. From maintenance tips to equity building strategies, learn how to make the most of your Arizona home investment.",
    linkText: "Get Homeownership Tips",
    href: "/homeownership-tips/",
  },
  {
    title: "Real Estate & Mortgages",
    description:
      "Insights at the intersection of real estate and mortgage lending. Stay informed about market conditions, property types, and financing strategies for Arizona buyers and sellers.",
    linkText: "Explore Real Estate Insights",
    href: "/real-estate-mortgages/",
  },
  {
    title: "Specialty Loans",
    description:
      "Explore specialized mortgage products including jumbo loans, DSCR loans, private money lending, and other unique financing options for Arizona real estate.",
    linkText: "View Specialty Options",
    href: "/specialty-loans/",
  },
  {
    title: "Mortgage Payments & Strategies",
    description:
      "Learn strategies to manage, reduce, or optimize your mortgage payments. From biweekly payments to refinancing, discover ways to save money over the life of your loan.",
    linkText: "Optimize Your Payments",
    href: "/mortgage-payments-strategies/",
  },
  {
    title: "Spouse & Estate Considerations",
    description:
      "Understand the implications of mortgages on marriage, divorce, and estate planning. Get expert advice on protecting your assets and ensuring smooth transitions in various life scenarios.",
    linkText: "Protect Your Assets",
    href: "/spouse-estate-considerations/",
  },
];

function categoryMatches(articleCategories: string[], selected: string) {
  if (selected === "All") return true;
  if (articleCategories.includes(selected)) return true;
  // Process Guidance tab also matches "Mortgage Process Guidance" labels
  if (selected === "Process Guidance") {
    return articleCategories.some((c) => c.includes("Process Guidance"));
  }
  return false;
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Keep the selected tab in sync if the browser back/forward button changes the URL
  useEffect(() => {
    const syncFromPath = () => {
      const path = window.location.pathname;
      const cat = CATEGORY_FROM_PATH[path] || "All";
      setSelectedCategory(cat);
    };
    syncFromPath();
    window.addEventListener("popstate", syncFromPath);
    return () => window.removeEventListener("popstate", syncFromPath);
  }, []);

  const selectCategory = useCallback((cat: string) => {
    setSelectedCategory(cat);
    const href = CATEGORY_HREF_MAP[cat] || "/blog/";
    if (typeof window === "undefined") return;
    const normalize = (p: string) => p.replace(/\/$/, "") || "/";
    if (normalize(window.location.pathname) !== normalize(href)) {
      window.history.pushState({ category: cat }, "", href);
    }
  }, []);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === "All") return blogArticles;
    return blogArticles.filter((art) =>
      categoryMatches(art.categories?.length ? art.categories : [art.category], selectedCategory)
    );
  }, [selectedCategory]);

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

        {/* Category Pills Filter Row — stays on /blog, updates URL + articles */}
        <section className="w-full px-6 mb-12">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2">
            {BLOG_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => selectCategory(cat)}
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

        {/* Featured Article Section — text-only card */}
        {featuredArticle && (
          <section className="w-full px-6 mb-16">
            <div className="max-w-5xl mx-auto">
              <Link
                href={featuredArticle.href || "/how-to-sell-my-house-fast-in-arizona/"}
                className="group block bg-white rounded-2xl border border-[#e8e0d0]/70 shadow-sm hover:shadow-md transition-all duration-300 p-7 sm:p-9"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="block w-5 h-[2px] bg-[#3fb364] shrink-0" aria-hidden />
                  <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.14em] uppercase">
                    {featuredArticle.category}
                  </span>
                </div>
                <h2 className="text-[#052316] text-[24px] lg:text-[30px] font-playfair font-bold leading-snug mb-3 group-hover:text-[#3fb364] transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-[#5a675a] text-[15px] leading-[1.7] mb-6 max-w-3xl">
                  {featuredArticle.description}
                </p>
                <div className="pt-4 border-t border-[#ebe4d6] flex items-center justify-between gap-3">
                  <span className="text-[12px] text-[#8a9a7a]">
                    {featuredArticle.date} · {featuredArticle.readTime}
                  </span>
                  <span className="text-[#3fb364] text-[13.5px] font-bold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Read
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* 3-Column Grid of Articles */}
        <section className="w-full px-6 py-12 bg-[#fcf9f3] border-t border-[#e8e0d0]/40">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 flex items-center justify-between pb-4 border-b border-[#e8e0d0]/60">
              <h2 className="text-[#052316] text-[20px] font-playfair font-normal">
                Showing {filteredArticles.length}{" "}
                {filteredArticles.length === 1 ? "article" : "articles"}
                {selectedCategory !== "All" ? ` in ${selectedCategory}` : ""}
              </h2>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-[#e8e0d0]/50">
                <p className="text-[#4e5b4e] text-[15px]">No articles found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredArticles.map((art) => (
                  <ArticleCard
                    key={art.id}
                    title={art.title}
                    description={art.description}
                    href={art.href || "/how-to-sell-my-house-fast-in-arizona/"}
                    category={art.category}
                    date={art.date}
                    readTime={art.readTime}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Transform / Get Expert Advice CTA & Browse by Topic Section */}
        <section className="w-full py-16 px-6 bg-white border-t border-[#e8e0d0]/60 text-[#1a251c]">
          <div className="max-w-6xl mx-auto">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {topicsData.map((topic, index) => {
                const filterName = ("filterAs" in topic && topic.filterAs) || topic.title;
                const canFilterOnBlog = BLOG_CATEGORIES.includes(filterName as (typeof BLOG_CATEGORIES)[number]);

                return (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-7 text-[#388e3c]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3.5L19 21V5c0-1.1-.9-2-2-2z" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-[#1a251c] text-[20px] sm:text-[22px] font-medium mb-2.5 leading-snug font-playfair group-hover:text-[#388e3c] transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-[#556355] text-[14px] leading-[1.65] mb-3">
                        {topic.description}
                      </p>
                      {topic.linkText &&
                        (canFilterOnBlog ? (
                          <button
                            type="button"
                            onClick={() => {
                              selectCategory(filterName);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="inline-flex items-center text-[#388e3c] hover:text-[#2e7d32] text-[14px] font-medium transition-colors hover:underline cursor-pointer bg-transparent border-0 p-0"
                          >
                            {topic.linkText}
                          </button>
                        ) : (
                          <Link
                            href={topic.href || "/blog/"}
                            className="inline-flex items-center text-[#388e3c] hover:text-[#2e7d32] text-[14px] font-medium transition-colors hover:underline"
                          >
                            {topic.linkText}
                          </Link>
                        ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}