import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleCard from "../component/ArticleCard";

const articles = [
  {
    title: "The Complete Arizona Guide to Selling Your Home for Cash (2026)",
    description: "A cash home sale is a transaction in which a buyer purchases your house outright, without a mortgage. Learn the pros, cons, and alternatives in Arizona.",
    href: "/how-to-sell-my-house-fast-in-arizona/",
    date: "Jun 25, 2026",
    readTime: "33 min read",
    category: "Pillar Post"
  },
  {
    title: "Conventional Home Loans vs. FHA Loans: Which Is Right for You?",
    description: "Side-by-side comparison of down payments, credit requirements, PMI vs. MIP, and loan limits for Arizona homebuyers in 2026.",
    href: "/conventional-home-loans-vs-fha-loans-which-is-right-for-you/",
    date: "Jun 20, 2026",
    readTime: "12 min read",
    category: "Pillar Post"
  }
];

export default function PillarPostPage() {
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
              <span className="text-[#3fb364]">Pillar Post</span>
            </div>

            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
              TOPIC CATEGORY
            </span>

            <h1 className="text-white text-[32px] lg:text-[48px] font-playfair font-normal leading-[1.1] mb-6 max-w-3xl mx-auto">
              Pillar Posts & Complete Guides
            </h1>

            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Explore our foundational cornerstone articles, detailed Arizona real estate guides, and deep-dive comparisons designed to master your mortgage and homebuying journey.
            </p>
          </div>
        </section>

        {/* Articles Grid Section */}
        <section className="py-16 px-6 lg:px-10 max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-[#052316] text-[24px] lg:text-[30px] font-playfair font-normal">
              Articles in Pillar Post
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
        <section className="bg-[#052316] text-white py-16 px-6 lg:px-10 mt-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[28px] lg:text-[38px] font-playfair mb-4">
              Ready to take the next step in your home financing journey?
            </h2>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] mb-8 max-w-xl mx-auto">
              Our team of Arizona mortgage specialists is here to answer your questions and guide you through every step.
            </p>
            <Link
              href="/#get-pre-approved"
              className="inline-block bg-[#3fb364] hover:bg-[#349b55] text-white font-bold px-8 py-3.5 rounded-full transition-colors text-[15px]"
            >
              Get Pre-Approved Today
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}