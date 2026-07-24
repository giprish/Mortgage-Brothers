"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const topics = [
  {
    title: "Arizona Mortgage Basics",
    text: "What is a mortgage, and who owns my home if I have secured financing to purchase it? Whether you're new to the home buying process, or a seasoned investor, there are at least 20 top mortgage related terms that you may want to understand prior to speaking with a real estate agent or loan officer. This section highlights some of the basic math and topics of interest that will help you get started on your home buying and financing journey.",
    href: "/arizona-mortgage-basics/",
  },
  {
    title: "Why Use an Arizona Mortgage Broker?",
    text: "Getting a mortgage loan can seem like a daunting and even scary task, but it doesn't have to be that way if you do your research and work with the right people. Using a mortgage broker means you will have access to a number of different banks and other lenders who may each have different guidelines for approval, thereby raising the chances that one of those lenders will be able to say yes to your mortgage loan.",
    href: "/why-use-an-arizona-mortgage-broker/",
  },
  {
    title: "Mortgage Approval Process",
    text: "Required down payment, income/employment information and credit standing are a few of the important factors lenders look at when considering a borrower for a mortgage loan approval. Being prepared with the proper documents and personal information will allow you to spend more quality time with your loan officer addressing the important points of your pre-approval and mortgage program options.",
    href: "/arizona-mortgage-approval-process/",
  },
  {
    title: "Understanding Your Credit",
    text: "Your credit picture plays a key role in the mortgage approval process, and it is essential to understand how scores are measured and calculated. Should you close all cards or keep them open? What if you don't have any credit history that shows up on a report? In this section, you'll learn the basic rules about preparing your credit standing prior to speaking with a lender for qualification.",
    href: "/arizona-understanding-your-credit/",
  },
  {
    title: "Mortgage Payments",
    text: "In addition to mortgage rates, there are many other obligations that factor into your overall mortgage payment. HOA Dues, Hazard Insurance, Home Warranties, Property Taxes… to name a few. It helps to be aware of the expenses involved in owning real estate in order to set a monthly budget that is true to your financial goals and expectations.",
    href: "/arizona-mortgage-payments/",
  },
  {
    title: "Mortgage Programs",
    text: "It's amazing how many mortgage programs have been designed to help First-Time Borrowers get financing on new homes. Before you start shopping for a listing that fits your living needs, it would be extremely beneficial to know what type of lending scenario best fits the type of property or neighborhood you're looking to buy in.",
    href: "/mortgage-loan-programs-arizona/",
  },
  {
    title: "Home Buying Process",
    text: "What comes first – the approval or the purchase contract? Once you have weighed the basic pros and cons of owning a home vs renting, assembling a winning team of real estate and mortgage professionals will help you cover all of your bases. There are also some very important timelines that you'll need to be aware of, such as appraisal, home inspection and loan approval dates.",
    href: "/arizona-home-buying-process/",
  },
  {
    title: "Closing Process",
    text: "With the right home buying team on your side, the closing process should be a smooth transition from signed documents to closing. Understanding the industry lingo will certainly help you avoid feeling like you're on a roller-coaster while all the team players come together at the end to perform doc signings and pre-closing conditions.",
    href: "/arizona-mortgage-closing-process/",
  },
  {
    title: "Mortgage Closing Costs",
    text: "The closing costs associated with a mortgage can seem very confusing if you haven't been given information on them, or if you've never purchased a home before. Understanding the closing costs means you can also be prepared for them and find out approximately how much they will add up to, so you won't end up having to bring more money to the table than you expected.",
    href: "/arizona-mortgage-closing-costs/",
  },
  {
    title: "Refinance Process",
    text: "Properly estimating neighborhood property values and your closing costs will help determine the net benefit of a refinance transaction. Some homeowners just want to know the best approach of finding money to make home improvements, while other borrowers are in a situation where their rate is adjusting.",
    href: "/arizona-refinance-process/",
  },
  {
    title: "The Ultimate Guide to Your First Mortgage",
    text: "The Phoenix Valley was recently voted out of the top 20 markets for first time buyers, highlighting that it's getting more expensive to buy your first home. But don't despair. You can still buy the home of your dreams. In this guide, you'll get insider tips on how you can get into your first home without paying too much.",
    href: "/ultimate-guide-first-mortgage/",
  },
  {
    title: "What to Expect When You're Not a First Time Mortgage Shopper",
    text: "When you're moving to Phoenix, or moving up to a new home within the area, one of the first things you need to do is find a mortgage lender and understand how to secure a loan. The mortgage industry has changed since your last loan. Here's an overview of what it's really like to get a mortgage these days.",
    href: "/expect-youre-not-first-time-mortgage-shopper/",
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

const loanPrograms = [
  { label: "Conventional Home Loans", href: "/conventional-home-loans-arizona/" },
  { label: "FHA Home Loans", href: "/fha-home-loans-arizona/" },
  { label: "Conventional vs FHA Loans", href: "/conventional-vs-fha-loans-arizona/" },
  { label: "FHA Streamline Refinance", href: "/fha-streamline-refinance-arizona/" },
  { label: "Reverse Mortgage", href: "/reverse-mortgage-arizona/" },
  { label: "Reverse Mortgage for a Home Purchase", href: "/reverse-mortgage-home-purchase-arizona/" },
  { label: "Private Money Lender", href: "/private-money-lender-arizona/" },
  { label: "VA Loans", href: "/va-loans-arizona/" },
  { label: "Mortgage Refinancing", href: "/refinancing-arizona/" },
  { label: "Jumbo Loans", href: "/jumbo-loans-arizona/" },
  { label: "First-time Home Buyer Guide", href: "/first-time-home-buyer-arizona-guide/" },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function Mortgage101Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />
      <div className="h-[72px] w-full shrink-0" aria-hidden />

      <main className="flex-grow relative z-0">
        {/* Featured hero */}
        <section className="relative z-0 w-full bg-white overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-4 lg:py-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/home/arizona-mortgage-101.jpg"
              alt="Arizona Mortgage 101 — The Mortgage Brothers Team"
              width={1920}
              height={1080}
              className="relative z-0 w-full h-auto block max-w-full rounded-lg"
            />
          </div>
        </section>

        {/* Article + sidebar */}
        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-12">
            <article className="min-w-0">
              <h1
                className="text-[#08271B] text-[32px] sm:text-[40px] lg:text-[46px] font-normal leading-tight mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Arizona Mortgage 101
              </h1>
              <p className="text-[#8a9a7a] text-[14px] mb-8">
                by{" "}
                <Link href="/about-us/" className="text-[#3fb364] hover:underline font-medium">
                  Eddie Knoell
                </Link>{" "}
                | Feb 10, 2025
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                Since there are so many components to the AZ mortgage process, we have taken special
                care to organize the most important qualifying steps, lending frequently asked
                questions, home buying and mortgage processes below. We realize that the information
                contained in this site could literally take you weeks to research and digest, so please
                feel free to call us at any time for a personal consultation where we can address your
                specific needs and questions.
              </p>

              {/* Mid CTA */}
              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  You&apos;ve Mastered the Basics—Now Connect with the Experts
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Now that you&apos;ve learned the fundamentals, reach out to us. We&apos;re professional
                  mortgage experts ready to guide you to the next step.
                </p>
                <Link
                  href="/contact-us/"
                  className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                >
                  Contact Us Today
                </Link>
              </div>

              {/* Topic cards */}
              <div className="grid grid-cols-1 gap-6">
                {topics.map((topic) => (
                  <div
                    key={topic.title}
                    className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm hover:shadow-md hover:border-[#3fb364]/30 transition-all"
                  >
                    <h2 className="text-[#08271B] text-[20px] lg:text-[22px] font-bold mb-3">
                      {topic.title}
                    </h2>
                    <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-5">{topic.text}</p>
                    <Link
                      href={topic.href}
                      className="inline-flex items-center gap-1.5 text-[#3fb364] hover:text-[#2d8545] font-semibold text-[14.5px] transition-colors"
                    >
                      Learn more
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link href="/blog/" className="text-[#3fb364] font-semibold hover:underline">
                  ← Back to Blog
                </Link>
                <Link
                  href="/mortgage-basics/"
                  className="text-[#8a9a7a] hover:text-[#3fb364] transition-colors"
                >
                  Mortgage Basics →
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-[100px] h-fit space-y-6">
              <div className="bg-[#f0f2f5] border-t-4 border-[#3fb364] rounded-b-2xl p-6 text-center shadow-sm">
                <p className="text-[#08271B] text-[11px] font-bold tracking-[0.15em] uppercase mb-1">
                  The Mortgage Brothers Team
                </p>
                <h3 className="text-[#08271B] text-[20px] font-extrabold uppercase tracking-wide leading-snug mt-4 mb-2">
                  Your Dream Home Awaits!
                </h3>
                <p className="text-[#6a7a6a] text-[11px] font-semibold uppercase tracking-wide mb-4">
                  Expert mortgage solutions tailored to your needs
                </p>
                <p className="text-[#3fb364] text-[14px] font-bold uppercase mb-5">
                  Talk to a Broker Today!
                </p>
                <a
                  href="tel:+16025352171"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-semibold px-4 py-3 rounded-full transition-all"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +1 602-535-2171
                </a>
              </div>

              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                <h3 className="text-[#08271B] text-[16px] font-bold mb-4">Loan Programs</h3>
                <ul className="space-y-2.5">
                  {loanPrograms.map((item) => (
                    <li key={item.href + item.label}>
                      <Link
                        href={item.href}
                        className="text-[13.5px] text-[#4e5b4e] hover:text-[#3fb364] transition-colors leading-snug"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* Tailored solutions */}
        <section className="w-full bg-[#08271B] py-14 lg:py-16 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2
              className="text-white text-[28px] lg:text-[34px] font-normal mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tailored Mortgage Solutions
            </h2>
            <p className="text-[#c8c8b8] text-[15.5px] leading-relaxed mb-7">
              Have questions about financing options? Our experts are here to help with personalized
              advice for any mortgage type.
            </p>
            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* Get in touch */}
        <section className="w-full bg-[#f5f0e8] py-16 lg:py-20 border-y border-[#e8e0d0]/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2
              className="text-[#08271B] text-[30px] lg:text-[38px] font-normal leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get in Touch with The Mortgage Brothers
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-8 max-w-2xl mx-auto">
              Ready to take the next step towards your dream home? One of our experienced mortgage
              professionals will get back to you promptly with personalized solutions tailored to your
              unique financial situation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-[14.5px] text-[#08271B]">
              <a href="tel:+16025352171" className="font-semibold hover:text-[#3fb364] transition-colors">
                +1 602-535-2171
              </a>
              <span className="hidden sm:inline text-[#c8c8b8]">|</span>
              <a
                href="https://goo.gl/maps/GVLYa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3fb364] transition-colors text-center"
              >
                1599 East Orangewood Ave Suite 200, Phoenix, AZ 85020
              </a>
            </div>

            <Link
              href="/#get-pre-approved"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all"
            >
              Start my preapproval
            </Link>
          </div>
        </section>

        {/* Explore solutions */}
        <section className="w-full py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2
              className="text-[#08271B] text-[28px] lg:text-[34px] font-normal text-center mb-10"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Explore Our Mortgage Solutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {loanSolutions.map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className="flex items-center gap-3 bg-white border border-[#e8e0d0]/70 rounded-xl px-5 py-4 text-[#08271B] font-semibold text-[14.5px] hover:border-[#3fb364]/50 hover:text-[#3fb364] transition-all"
                >
                  <CheckIcon />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
