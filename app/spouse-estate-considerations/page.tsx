import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleCard from "../component/ArticleCard";
import GetInTouch from "../component/GetInTouch";

export const metadata: Metadata = getSeoMetadata("/spouse-estate-considerations/");

const articles = [
  {
    title: "Who CAN and CANNOT Be On Title When you Get A Mortgage?",
    description: "In this post, we’re going to be answering the question: who can you add on a title when you’re getting a mortgage? You might be surprised how many times, when you’re in the middle of a mortgage, this question comes up. Secure Your Mortgage Title Today! Contact our...",
    href: "/who-can-and-cannot-be-on-title-when-you-get-a-mortgage/",
    date: "Feb 12, 2025",
    readTime: "",
    category: "Specialty Loans, Spouse & Estate Considerations"
  },
  {
    title: "Is Homeownership Hereditary?",
    description: "Everyone knows that houses can be inherited, but can homeownership? It would seem that the answer to that question is “yes.” Ready to Build Your Legacy? Connect with Mortgage Brothers LLC today to start your journey toward lasting homeownership and secure mortgage...",
    href: "/is-homeownership-hereditary/",
    date: "Feb 12, 2025",
    readTime: "",
    category: "Specialty Loans, Spouse & Estate Considerations"
  },
  {
    title: "What If My Spouse Dies and I’m Not On The Mortgage?",
    description: "In this post, we’re going to touch upon unfortunate circumstances: death. The death of a loved one is incredibly hard to go through. We hope that we can, at the very least, make navigating these tragic circumstances a little bit easier. We’re going to be discussing...",
    href: "/what-if-my-spouse-dies-and-im-not-on-the-mortgage/",
    date: "Jan 1, 2025",
    readTime: "",
    category: "Spouse & Estate Considerations, Homeownership Tips"
  }
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

export default function SpouseEstateConsiderationsPage() {
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
              <span className="text-[#3fb364]">Spouse &amp; Estate Considerations</span>
            </div>

            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
              TOPIC CATEGORY
            </span>

            <h1 className="text-white text-[32px] lg:text-[48px] font-playfair font-normal leading-[1.1] mb-6 max-w-3xl mx-auto">
              Spouse &amp; Estate Considerations
            </h1>

            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Understand spouse mortgage impacts, estate considerations, and legal aspects of managing mortgages and homeownership.
            </p>
          </div>
        </section>

        {/* Articles Grid Section */}
        <section className="py-16 px-6 lg:px-10 max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-[#052316] text-[24px] lg:text-[30px] font-playfair font-normal">
              Articles in Spouse &amp; Estate Considerations
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

        <GetInTouch
          theme="light"
          showDivider
          title="Get in Touch with Mortgage Brothers LLC"
          description="If you need immediate help, you can call us at 602-535-1288, use our contact form to request a callback."
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