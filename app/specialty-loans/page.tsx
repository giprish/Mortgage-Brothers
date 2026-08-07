import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleCard from "../component/ArticleCard";

const articles = [
  {
    title: "Is Homeownership Hereditary?",
    description: "Urban Institute research on how parental homeownership and wealth influence millennial homeownership rates and generational wealth.",
    href: "/is-homeownership-hereditary/",
    date: "Feb 12, 2025",
    readTime: "7 min read",
    category: "Specialty Loans"
  },
  {
    title: "Who CAN and CANNOT Be On Title When you Get A Mortgage?",
    description: "Learn who can be added to a mortgage title, spouse and co-borrower rules, community property, and closing in a trust.",
    href: "/who-can-and-cannot-be-on-title-when-you-get-a-mortgage/",
    date: "Feb 12, 2025",
    readTime: "10 min read",
    category: "Specialty Loans"
  },
  {
    title: "How Does My Car Loan Payment Affect My Mortgage?",
    description: "See how car payments impact debt-to-income ratios and how much home-buying power you lose with common auto loan amounts.",
    href: "/how-does-my-car-loan-payment-affect-my-mortgage/",
    date: "Feb 4, 2025",
    readTime: "8 min read",
    category: "Specialty Loans"
  },
  {
    title: "Grossing Up Your Income… what does that mean?",
    description: "Learn how lenders gross up non-taxable income like foster care, child support, and Social Security to boost qualifying income.",
    href: "/grossing-up-your-income-what-does-that-mean/",
    date: "Feb 4, 2025",
    readTime: "9 min read",
    category: "Specialty Loans"
  },
  {
    title: "Can I Get a 3rd Mortgage?",
    description: "Understand lien positions, why third mortgages are rarely available, and how to access more equity by refinancing instead.",
    href: "/can-i-get-a-3rd-mortgage/",
    date: "Feb 4, 2025",
    readTime: "9 min read",
    category: "Specialty Loans"
  },
  {
    title: "How Fast is Too Fast to Close a Mortgage Loan to Purchase a House?",
    description: "Learn why a 30-day close is ideal, when 20–25 days is reasonable, and the risks of rushing a super-fast mortgage closing.",
    href: "/how-fast-is-too-fast-to-close-a-mortgage-loan-to-purchase-a-house/",
    date: "Feb 4, 2025",
    readTime: "10 min read",
    category: "Specialty Loans"
  },

  {
    title: "VA Loans for First-Time Homebuyers in Arizona: Your Path to Homeownership",
    description: "Explore 0% down payment VA loan benefits, eligibility guidelines, and rate advantages for military buyers in Arizona.",
    href: "/va-loans-for-first-time-homebuyers-in-arizona-your-path-to-affordable-homeownership/",
    date: "May 28, 2026",
    readTime: "8 min read",
    category: "Specialty Loans"
  },
  {
    title: "What Is a Jumbo Loan? Everything You Need to Know Before Applying in Arizona",
    description: "Understanding non-conforming luxury home financing, qualification rules, and 2026 limits in Scottsdale and Phoenix.",
    href: "/what-is-a-jumbo-loan-everything-you-need-to-know-before-applying/",
    date: "May 12, 2026",
    readTime: "9 min read",
    category: "Specialty Loans"
  },
  {
    title: "Top 7 Reasons Arizona Investment Home Buyers Choose Private Money Lenders",
    description: "Discover why real estate investors in Phoenix and Scottsdale turn to private money lending for fast, flexible property acquisitions.",
    href: "/top-7-reasons-arizona-investment-home-buyers-choose-private-money-lenders/",
    date: "Jun 15, 2026",
    readTime: "8 min read",
    category: "Specialty Loans"
  }
];

export default function SpecialtyLoansPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        <div className="h-[64px] sm:h-[72px] bg-[#08271B]" aria-hidden />

        <section className="bg-brand-green-deep text-white loan-section text-center">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center gap-2 text-[#8da684] text-[13px] font-medium mb-6">
              <Link href="/blog/" className="hover:text-white transition-colors">Blog</Link>
              <span>&gt;</span>
              <span className="text-[#3fb364]">Specialty Loans</span>
            </div>

            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
              TOPIC CATEGORY
            </span>

            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl mx-auto">
              Specialty Loans
            </h1>

            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Discover unique mortgage products designed for specific needs. From VA loans for veterans to jumbo loans for high-value properties.
            </p>
          </div>
        </section>

        <section className="loan-section bg-[#fcf9f3]">
          <div className="loan-section-inner max-w-6xl mx-auto loan-section-stack">
            <h2 className="text-[#052316] text-[24px] lg:text-[30px] font-playfair font-normal">
              Articles in Specialty Loans
            </h2>

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
          </div>
        </section>

        <section className="loan-section bg-white">
          <div className="loan-section-inner max-w-5xl mx-auto">
            <div className="bg-[#052316] text-white rounded-3xl p-8 lg:p-10 text-center relative overflow-hidden shadow-xl">
              <div className="max-w-2xl mx-auto relative z-10">
                <span className="text-[#b89a5a] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                  TAKE THE NEXT STEP
                </span>
                <h2 className="text-white text-[28px] lg:text-[38px] font-playfair font-normal mb-4">
                  Explore Your Specialty Loan Options
                </h2>
                <p className="text-[#c8c8b8] text-[15px] leading-relaxed mb-8">
                  Connect with our specialized mortgage advisors in Arizona to find custom financing tailored to your exact scenario.
                </p>
                <Link
                  href="/#get-pre-approved"
                  className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all duration-200 inline-block shadow-lg hover:shadow-xl"
                >
                  Get Pre-Approved &rarr;
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