import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleCard from "../component/ArticleCard";
import GetInTouch from "../component/GetInTouch";

export const metadata: Metadata = getSeoMetadata("/arizona-mortgage-insights/");

const articles = [
  {
    title: "Top 7 Reasons Arizona Investment Home Buyers Choose Private Money Lenders",
    description:
      "Important Note: Private money loans are available only for investment properties. We cannot provide private money loans for primary residences or second homes.In Arizona's fast-moving real estate market, timing is everything. Whether you're acquiring a rental property...",
    href: "/top-7-reasons-arizona-investment-home-buyers-choose-private-money-lenders/",
    date: "Oct 28, 2025",
    readTime: "",
    category: "Arizona Mortgage Insights",
  },
  {
    title: "How to Get a Mortgage in Arizona with Fair or Improving Credit",
    description:
      "You've been dreaming of owning a home in Arizona — maybe a starter home in Mesa, a family house in Gilbert, or a desert getaway in Tucson. But if your credit isn't perfect, you might wonder whether you can still qualify for a mortgage. Here's the truth: you don't need...",
    href: "/how-to-get-a-mortgage-in-arizona-with-fair-or-improving-credit/",
    date: "Oct 28, 2025",
    readTime: "",
    category: "Arizona Mortgage Insights",
  },
  {
    title: "Who Qualifies for a Reverse Mortgage? Understanding Eligibility & Requirements",
    description:
      "A reverse mortgage allows homeowners aged 62 and older to convert home equity into cash without selling their home. However, not everyone qualifies. Understanding the eligibility requirements is essential before considering this financial option. This guide covers all...",
    href: "/who-qualifies-for-a-reverse-mortgage-understanding-eligibility-requirements/",
    date: "Oct 20, 2025",
    readTime: "",
    category: "Arizona Mortgage Insights",
  },
  {
    title: "Navigating Mortgage Options During Divorce: A Complete Guide",
    description:
      "Divorce is one of life's most difficult transitions, and when real estate is involved, the financial complexity increases dramatically. For many couples, their home represents their largest shared asset, making mortgage decisions a critical part of achieving...",
    href: "/navigating-mortgage-options-during-divorce-a-complete-guide/",
    date: "Oct 16, 2025",
    readTime: "",
    category: "Arizona Mortgage Insights",
  },
  {
    title: "What Is a Jumbo Loan? Everything You Need to Know Before Applying",
    description:
      "Arizona's luxury real estate market continues to flourish. From Paradise Valley's private estates to Scottsdale's modern hillside homes, high-value properties are in high demand. But if you're planning to purchase a home priced above $800,000, you'll quickly learn...",
    href: "/what-is-a-jumbo-loan-everything-you-need-to-know-before-applying/",
    date: "Oct 13, 2025",
    readTime: "",
    category: "Arizona Mortgage Insights",
  },
  {
    title: "Conventional Home Loans vs. FHA Loans: Which Is Right for You?",
    description:
      "Buying a home in Arizona is exciting—but it can also feel overwhelming when it comes to choosing the right mortgage. Take Emma, a first-time buyer in Phoenix. She's saved some money but isn't sure if a Conventional home loan or an FHA loan makes more sense. Her friend...",
    href: "/conventional-home-loans-vs-fha-loans-which-is-right-for-you/",
    date: "Oct 8, 2025",
    readTime: "",
    category: "Arizona Mortgage Insights",
  },
  {
    title: "Arizona Vacation and Investment Home Mortgages",
    description:
      "If you are looking for an Arizona mortgage for a second home, vacation home or investment property, there are still some good products available. You will need at least a 10% down payment for a second home or vacation home. For investment property loans, figure...",
    href: "/arizona-vacation-and-investment-home-mortgages/",
    date: "Feb 14, 2025",
    readTime: "",
    category: "Arizona Mortgage Insights",
  },
  {
    title: "How High Will A Lender Allow Your Deductible To Be?",
    description:
      "In this episode, we went over homeowners insurance deductibles and a quick tip on how to get lower premiums. For single-family residential homes in the range from $200,000 to $400,000 or so, premiums are going to range from about $600 to maybe $1,200 annually. So,...",
    href: "/how-high-will-a-lender-allow-your-deductible-to-be/",
    date: "Feb 12, 2025",
    readTime: "",
    category: "Arizona Mortgage Insights",
  },
  {
    title: "How Does My Car Loan Payment Affect My Mortgage?",
    description:
      "In this post, we're talking about car payments and how they affect mortgages. As loan officers, we're in the business of trying to calculate how much a person qualifies for or not. Because car payments are such an everyday part of life for so many people, we wanted to...",
    href: "/how-does-my-car-loan-payment-affect-my-mortgage/",
    date: "Feb 4, 2025",
    readTime: "",
    category: "Arizona Mortgage Insights",
  },
];

const loanSolutions = [
  { label: "Conventional Home Loans", href: "/conventional-home-loans-arizona/" },
  { label: "Private Money Lender", href: "/private-money-lender-arizona/" },
  { label: "FHA Home Loans", href: "/fha-home-loans-arizona/" },
  { label: "FHA Streamline Refinance", href: "/fha-streamline-refinance-arizona/" },
  { label: "First Time Home Buyer", href: "/first-time-home-buyer-arizona-guide/" },
  { label: "Reverse Mortgage", href: "/reverse-mortgage-arizona/" },
  { label: "Reverse Mortgage for a Home Purchase", href: "/reverse-mortgage-home-purchase-arizona/" },
  { label: "Refinancing", href: "/refinancing-arizona/" },
  { label: "Jumbo Loans", href: "/jumbo-loans-arizona/" },
  { label: "VA Loans", href: "/va-loans-arizona/" },
];

export default function ArizonaMortgageInsightsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-[#052316] text-white pt-[110px] lg:pt-[130px] pb-16 lg:pb-24 px-6 lg:px-10">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center gap-2 text-[#b8d4b8] text-[13px] font-medium mb-6">
              <Link href="/blog/" className="hover:text-white transition-colors">
                Blog
              </Link>
              <span>&gt;</span>
              <span className="text-[#3fb364]">Arizona Mortgage Insights</span>
            </div>

            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
              TOPIC CATEGORY
            </span>

            <h1 className="text-white text-[32px] lg:text-[48px] font-playfair font-normal leading-[1.1] mb-6 max-w-3xl mx-auto">
              Arizona Mortgage Insights
            </h1>

            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Discover Arizona mortgage insights, including trends and tax benefits, for smarter real estate decisions in Arizona.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 lg:px-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard
                key={article.href}
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

        <GetInTouch
          theme="light"
          showDivider
          contactBeforeBody
          title="Get in Touch with Mortgage Brothers LLC"
          paragraphs={[
            "If you need immediate help, you can call us at 602-535-1288, use our contact form to request a callback.",
          ]}
          renderParagraph={() => (
            <>
              If you need immediate help, you can call us at{" "}
              <a
                href="tel:+16025351288"
                className="font-bold text-[#3fb364] no-underline hover:text-[#2d8545]"
              >
                602-535-1288
              </a>
              , use our{" "}
              <Link href="/contact-us/" className="font-bold text-[#3fb364] no-underline hover:text-[#2d8545]">
                contact form
              </Link>{" "}
              to request a callback.
            </>
          )}
          afterContact={
            <div className="space-y-1">
              <p className="text-[#052316] text-[14px] font-semibold">Mortgage Brothers LLC</p>
              <p className="text-[#5a675a] text-[13px]">AZ License #MB0922514 &amp; NMLS #1007154</p>
            </div>
          }
        />

        <section className="py-16 px-6 lg:px-10 max-w-6xl mx-auto bg-white">
          <h2 className="text-[#052316] text-[28px] lg:text-[34px] font-playfair font-normal text-center mb-10">
            Explore Our Mortgage Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {loanSolutions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-3 bg-[#fcf9f3] border border-[#e8e0d0]/70 rounded-xl px-5 py-4 text-[#052316] font-semibold text-[14.5px] hover:border-[#3fb364] transition-all"
              >
                <span className="text-[#3fb364] font-bold group-hover:translate-x-0.5 transition-transform">→</span>
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
