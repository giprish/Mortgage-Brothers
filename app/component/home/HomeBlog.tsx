import React from "react";
import Link from "next/link";
import ArticleCard from "../ArticleCard";

const articles = [
  {
    title: "The Complete Arizona Guide to Selling Your Home for Cash (2026)",
    excerpt:
      "A cash home sale is a transaction in which a buyer purchases your house outright, without a mortgage. With no lender, appraisal contingency, or loan underwriting in the way, these sales can close in roughly 7–14 days instead of the 30–60 days a financed sale typically takes.",
    href: "/how-to-sell-my-house-fast-in-arizona/",
    category: "Pillar Post",
    date: "Jun 25, 2026",
    readTime: "33 min read",
  },
  {
    title: "Top 7 Reasons Arizona Investment Home Buyers Choose Private Money Lenders",
    excerpt:
      "In Arizona's fast-moving real estate market, timing is everything. Whether you're acquiring a rental property or flipping a home, private money loans offer speed and flexibility that traditional lenders can't match.",
    href: "/top-7-reasons-arizona-investment-home-buyers-choose-private-money-lenders/",
    category: "Arizona Mortgage Insights",
    date: "Jun 15, 2026",
    readTime: "8 min read",
  },
  {
    title: "How to Get a Mortgage in Arizona with Fair or Improving Credit",
    excerpt:
      "You've been dreaming of owning a home in Arizona — maybe a starter home in Mesa, a family house in Gilbert, or a desert getaway in Tucson. Here's the truth: you don't need perfect credit to qualify.",
    href: "/how-to-get-a-mortgage-in-arizona-with-fair-or-improving-credit/",
    category: "Arizona Mortgage Insights",
    date: "Jun 10, 2026",
    readTime: "7 min read",
  },
];

const HomeBlog = () => {
  return (
    <section className="w-full bg-[#f5f0e8] py-14 sm:py-20 lg:py-24 border-t border-[#e8e0d0]/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#b89a5a] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
            Resources
          </p>
          <h2
            className="font-playfair text-[#08271B] text-[28px] lg:text-[40px] font-normal leading-tight mb-5"
            
          >
            We are Here to Simplify the Home Loan Process
          </h2>
          <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
            Check out our extensive library of video and content aimed at arming you with the
            right knowledge and the most up-to-date information so that you can start home
            shopping with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {articles.map((article) => (
            <ArticleCard
              key={article.href}
              title={article.title}
              description={article.excerpt}
              href={article.href}
              category={article.category}
              date={article.date}
              readTime={article.readTime}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 bg-[#08271B] hover:bg-[#0d3320] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-md"
          >
            Dive into Insights
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
