import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleCard from "../component/ArticleCard";

export const metadata: Metadata = getSeoMetadata("/mortgage-basics/");

const articles = [
  {
    title: "What to Expect When You’re Not a First Time Mortgage Shopper",
    description: "What experienced Phoenix homebuyers need to know about online lenders, choosing a broker, pre-approval, rate locks, and closing.",
    href: "/expect-youre-not-first-time-mortgage-shopper/",
    date: "Feb 11, 2025",
    readTime: "14 min read",
    category: "Mortgage Basics"
  },
  {
    title: "The Ultimate Guide to Your First Mortgage",
    description: "A complete first-time buyer guide covering credit, down payments, loan types, pre-approval, rate locks, and closing in Arizona.",
    href: "/ultimate-guide-first-mortgage/",
    date: "Feb 11, 2025",
    readTime: "18 min read",
    category: "Mortgage Basics"
  },
  {
    title: "Arizona Mortgage Closing Costs",
    description: "Break down Arizona mortgage closing costs—lender fees, title company fees, appraisals, pest inspections, septic/well certifications, and condo questionnaire fees.",
    href: "/arizona-mortgage-closing-costs/",
    date: "Feb 10, 2025",
    readTime: "8 min read",
    category: "Mortgage Basics"
  },
  {
    title: "Arizona Refinance Process",
    description: "Learn the Arizona refinance process, four top reasons to refinance, how to calculate net benefit, and HELOC vs cash-out options.",
    href: "/arizona-refinance-process/",
    date: "Feb 10, 2025",
    readTime: "10 min read",
    category: "Mortgage Basics"
  },
  {
    title: "Why Use an Arizona Mortgage Broker",
    description: "Learn why an Arizona mortgage broker can shop multiple lenders, compare rates, and guide you from pre-qualification through closing.",
    href: "/why-use-an-arizona-mortgage-broker/",
    date: "Feb 10, 2025",
    readTime: "8 min read",
    category: "Mortgage Basics"
  },
  {
    title: "Understanding Your Credit",
    description: "Understand FICO score components, free credit reports, and what does—and doesn’t—impact your score when applying for an Arizona mortgage.",
    href: "/arizona-understanding-your-credit/",
    date: "Feb 10, 2025",
    readTime: "7 min read",
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
    title: "Arizona Mortgage Basics",
    description: "Learn what a mortgage is, how approval works, payment structure, programs, closing costs/fees, and rates for Arizona homebuyers.",
    href: "/arizona-mortgage-basics/",
    date: "Feb 10, 2025",
    readTime: "8 min read",
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
    title: "When is a mortgage payment actually considered late?",
    description: "Learn when lenders vs. credit bureaus consider a mortgage payment late, grace periods, 5% late fees, and 30-day credit reporting.",
    href: "/when-is-a-mortgage-payment-actually-considered-late/",
    date: "Dec 29, 2024",
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
    description: "As of March 2026, federal law restricts credit bureaus from selling mortgage trigger leads except in narrow cases. Do Not Call and DMA Choice remain useful extras.",
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
        {/* Hero — brand deep green band */}
        <section className="w-full bg-brand-green-deep pt-[110px] lg:pt-[130px] pb-12 lg:pb-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
            <div className="absolute -bottom-36 -left-36 w-[min(360px,90vw)] h-[360px] rounded-full border border-white/5 opacity-40" />
            <div className="absolute -top-36 -right-36 w-[min(400px,90vw)] h-[400px] rounded-full border border-white/5 opacity-40" />
          </div>
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
              RESOURCES
            </p>
            <h1 className="text-white text-[32px] lg:text-[48px] font-playfair font-normal leading-[1.1] mb-6">
              Mortgage Basics
            </h1>
            <p className="text-brand-text-light text-[15px] lg:text-[16px] leading-[1.7] max-w-2xl mx-auto">
              Explore essential mortgage terms and processes, including amortization, APR, and closing costs, for informed home financing decisions.
            </p>
          </div>
        </section>

        {/* Articles Grid Section */}
        <section className="w-full py-14 lg:py-16 px-6 lg:px-10 bg-[#fcf9f3]">
          <div className="w-full max-w-6xl mx-auto">
            <div className="mb-10 lg:mb-12">
              <h2 className="text-[#052316] text-[24px] lg:text-[32px] font-playfair font-normal">
                Articles in Mortgage Basics
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
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

        {/* CTA Section */}
        <section className="py-12 px-6 lg:px-10 max-w-5xl mx-auto mb-16">
          <div className="bg-[#052316] text-white rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden shadow-xl">
            <div className="max-w-2xl mx-auto relative z-10">
              <span className="text-[#7a6638] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
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