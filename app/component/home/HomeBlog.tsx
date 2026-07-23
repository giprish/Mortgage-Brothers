import React from "react";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    title: "The Complete Arizona Guide to Selling Your Home for Cash (2026)",
    excerpt:
      "A cash home sale is a transaction in which a buyer purchases your house outright, without a mortgage. With no lender, appraisal contingency, or loan underwriting in the way, these sales can close in roughly 7–14 days instead of the 30–60 days a financed sale typically takes.",
    image: "/home/blog-cash.webp",
    href: "/how-to-sell-my-house-fast-in-arizona/",
  },
  {
    title: "Top 7 Reasons Arizona Investment Home Buyers Choose Private Money Lenders",
    excerpt:
      "In Arizona's fast-moving real estate market, timing is everything. Whether you're acquiring a rental property or flipping a home, private money loans offer speed and flexibility that traditional lenders can't match.",
    image: "/home/blog-private.png",
    href: "/top-7-reasons-arizona-investment-home-buyers-choose-private-money-lenders/",
  },
  {
    title: "How to Get a Mortgage in Arizona with Fair or Improving Credit",
    excerpt:
      "You've been dreaming of owning a home in Arizona — maybe a starter home in Mesa, a family house in Gilbert, or a desert getaway in Tucson. Here's the truth: you don't need perfect credit to qualify.",
    image: "/home/blog-credit.webp",
    href: "/how-to-get-a-mortgage-in-arizona-with-fair-or-improving-credit/",
  },
];

const HomeBlog = () => {
  return (
    <section className="w-full bg-[#f5f0e8] py-20 lg:py-28 border-t border-[#e8e0d0]/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#b89a5a] text-[12px] font-semibold tracking-[0.14em] uppercase mb-3">
            Resources
          </p>
          <h2
            className="text-[#08271B] text-[30px] lg:text-[38px] font-normal leading-tight mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            We are Here to Simplify the Home Loan Process
          </h2>
          <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
            Check out our extensive library of video and content aimed at arming you with the
            right knowledge and the most up-to-date information so that you can start home
            shopping with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group bg-white border border-[#e8e0d0]/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full h-[190px] overflow-hidden bg-[#08271B]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="text-[#08271B] text-[17px] font-semibold leading-snug mb-3 group-hover:text-[#3fb364] transition-colors duration-200"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {article.title}
                </h3>
                <p className="text-[#4e5b4e] text-[13.5px] leading-relaxed mb-5 line-clamp-4">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[#3fb364] text-[13px] font-semibold mt-auto">
                  Read More
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-14">
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
