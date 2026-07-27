"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const articles = [
  {
    title: "Arizona Refinance Process",
    description: "Learn the Arizona refinance process, four top reasons to refinance, how to calculate net benefit, and HELOC vs cash-out options.",
    href: "/arizona-refinance-process/",
    date: "Feb 10, 2025",
    readTime: "10 min read",
    category: "Mortgage Basics"
  },
  {
    title: "Arizona Mortgage Closing Process",
    description: "Understand prior-to-closing conditions, what to bring on signing day, and how closing timing affects your Arizona mortgage.",
    href: "/arizona-mortgage-closing-process/",
    date: "Feb 10, 2025",
    readTime: "10 min read",
    category: "Mortgage Basics"
  },
  {
    title: "Arizona Home Buying Process",
    description: "Walk through the five major steps of buying a home in Arizona—from pre-approval and your buying team to offer, paperwork, and closing.",
    href: "/arizona-home-buying-process/",
    date: "Feb 10, 2025",
    readTime: "9 min read",
    category: "Mortgage Basics"
  },
  {
    title: "Arizona Mortgage Payments",
    description: "Understand what’s in your Arizona mortgage payment—principal, interest, taxes, insurance, MIP/PMI—and how escrow and impound accounts work.",
    href: "/arizona-mortgage-payments/",
    date: "Feb 10, 2025",
    readTime: "7 min read",
    category: "Mortgage Basics"
  },
  {
    title: "Learn About the Home Mortgage Approval Process",
    description: "A step-by-step roadmap of the Arizona mortgage approval process, plus key concepts like DTI, LTV, credit, and pre-approval letters.",
    href: "/arizona-mortgage-approval-process/",
    date: "Feb 10, 2025",
    readTime: "12 min read",
    category: "Mortgage Basics"
  },
  {
    title: "How to Calculate How Much PMI Mortgage Insurance Will Be",
    description: "Learn how PMI is calculated, when it’s required, and how to remove it — with a real Radian quote example.",
    href: "/how-to-calculate-how-much-pmi-mortgage-insurance-will-be/",
    date: "Dec 30, 2024",
    readTime: "8 min read",
    category: "Mortgage Basics"
  },
  {
    title: "Understanding An Amortization Schedule",
    description: "Learn how a mortgage amortization schedule works, how principal and interest change over time, and how extra payments can shorten your loan.",
    href: "/understanding-amortization-chart/",
    date: "Feb 3, 2025",
    readTime: "7 min read",
    category: "Mortgage Basics"
  },
  {
    title: "What Are Mortgage Trigger Leads? Why Are Strangers Calling Your phone?",
    description: "Learn what mortgage trigger leads are, why strangers call after you apply, and how to stop unwanted calls and mail with Do Not Call and DMA Choice.",
    href: "/what-are-mortgage-trigger-leads/",
    date: "Feb 3, 2025",
    readTime: "6 min read",
    category: "Mortgage Basics"
  },
  {
    title: "How Does a Mortgage APR Work and What Does It Mean?",
    description: "Learn how mortgage APR differs from interest rate, how closing costs affect APR, and how to compare loan offers by focusing on fees—not just the rate.",
    href: "/how-does-a-mortgage-apr-work-and-what-does-it-mean/",
    date: "Feb 3, 2025",
    readTime: "8 min read",
    category: "Mortgage Basics"
  },
  {
    title: "What Are Closing Costs on a Home Purchase",
    description: "Learn what closing costs are on a home purchase, what fees are true lender costs, and how prepaids like taxes and insurance affect cash-to-close.",
    href: "/what-are-closing-costs-on-a-home-purchase/",
    date: "Feb 3, 2025",
    readTime: "9 min read",
    category: "Mortgage Basics"
  },
  {
    title: "Why Is My Mortgage Payoff Higher Than My Mortgage Statement Balance?",
    description: "Understand why mortgage payoff amounts can exceed statement balances, including daily accrued interest, payoff timing, and closing date impacts.",
    href: "/mortgage-payoff-higher-than-mortgage-balance/",
    date: "Feb 3, 2025",
    readTime: "7 min read",
    category: "Mortgage Basics"
  },
  {
    title: "Conventional Home Loans vs. FHA Loans: Which Is Right for You?",
    description: "Detailed side-by-side comparison of credit score rules, down payments, PMI vs. MIP, and total 30-year costs for Arizona buyers.",
    href: "/conventional-home-loans-vs-fha-loans-which-is-right-for-you/",
    date: "Jun 20, 2026",
    readTime: "10 min read",
    category: "Mortgage Basics"
  },
  {
    title: "What Is a Jumbo Loan? Everything You Need to Know Before Applying in Arizona",
    description: "Understanding non-conforming luxury home financing, qualification rules, and 2026 limits in Scottsdale and Phoenix.",
    href: "/what-is-a-jumbo-loan-everything-you-need-to-know-before-applying/",
    date: "May 12, 2026",
    readTime: "9 min read",
    category: "Mortgage Basics"
  },
  {
    title: "How to Get a Mortgage in Arizona with Fair or Improving Credit",
    description: "Learn how buyers with credit scores between 580 and 660 qualify for home loans in Arizona with FHA programs and rapid rescoring.",
    href: "/how-to-get-a-mortgage-in-arizona-with-fair-or-improving-credit/",
    date: "Jun 10, 2026",
    readTime: "7 min read",
    category: "Mortgage Basics"
  }
];

export default function MortgageBasicsPage() {
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
              <span className="text-[#3fb364]">Mortgage Basics</span>
            </div>

            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
              TOPIC CATEGORY
            </span>

            <h1 className="text-white text-[36px] lg:text-[52px] font-playfair font-normal leading-[1.15] mb-6">
              Mortgage Basics
            </h1>

            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl">
              Demystify the world of mortgages with our comprehensive guides. Understand key terms, loan types, and fundamental concepts to make informed decisions about your home financing.
            </p>
          </div>
        </section>

        {/* Articles Grid Section */}
        <section className="py-16 px-6 lg:px-10 max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-[#052316] text-[24px] lg:text-[30px] font-playfair font-normal">
              Articles in Mortgage Basics
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
                Ready to Start Your Homebuying Journey?
              </h2>
              <p className="text-[#c8c8b8] text-[15px] leading-relaxed mb-8">
                Get pre-approved with our expert team today and find out how much home you can afford in Arizona.
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
