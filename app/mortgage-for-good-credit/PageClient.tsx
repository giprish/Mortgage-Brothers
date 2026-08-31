"use client";

import { faqs as pageFaqs } from "./faqs";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import StatsBanner from "../component/StatsBanner";
import HeroFeatureStrip from "../component/HeroFeatureStrip";

import CountyTestimonials, { type CountyTestimonial } from "../component/CountyTestimonials";
import { renderDarkInlineLinks, renderInlineLinks } from "@/lib/renderInlineLinks";

const featureStrip = [
  "Good Credit Means Better Mortgage Rates",
  "Turn a Strong Credit Score into Homeownership",
  "Maximize Your Buying Power with Good Credit",
];

const creditTable = [
  { range: "760+ (Excellent)", rate: "Lowest Rates Available", category: "Excellent Credit" },
  { range: "720-759 (Good to Very Good)", rate: "Competitive Rates", category: "Good Credit" },
  { range: "680-719 (Fair to Good)", rate: "Slightly Higher Rates", category: "Fair Credit" },
  { range: "620-679 (Poor to below Fair)", rate: "Limited Loan Options", category: "Poor Credit" },
  { range: "Below 620 (High Risk)", rate: "Higher Rates", category: "High Risk" },
];

const meaningCards = [
  {
    title: "Competitive Interest Rates",
    text: "A good credit score often qualifies you for **better-than-average interest rates**, which can save you thousands of dollars over the life of your loan.",
  },
  {
    title: "Higher Loan Approval Chances",
    text: "Lenders view borrowers with good credit as **reliable**, increasing your chances of being approved for a mortgage without additional conditions.",
  },
  {
    title: "Lower Down Payment Requirements",
    text: "With good credit, you may be eligible for loans that require a **lower down payment**, making homeownership more accessible.",
  },
  {
    title: "Access to Flexible Loan Programs",
    text: "Borrowers with good credit can choose from a variety of loan options, including **fixed-rate and adjustable-rate mortgages**, to find the best fit for their financial goals.",
  },
  {
    title: "Improved Negotiating Power",
    text: "A solid credit score gives you leverage to **negotiate better terms and fees** with lenders, helping you get the most value out of your mortgage.",
  },
];

const benefitCards = [
  {
    title: "Access to Competitive Interest Rates",
    text: "A good credit score allows you to qualify for interest rates that are **lower than average**, reducing the total cost of your loan over time.",
  },
  {
    title: "Lower Mortgage Insurance Costs",
    text: "Certain loan programs may offer **reduced private mortgage insurance (PMI)** rates for borrowers with good credit, resulting in lower monthly expenses.",
  },
  {
    title: "Favorable Loan Terms",
    text: "With good credit, you can secure mortgages with **better repayment terms** and lower upfront fees, making your loan more manageable.",
  },
  {
    title: "Greater Flexibility in Loan Programs",
    text: "A strong credit score gives you access to a variety of mortgage options, from **fixed-rate loans** to **adjustable-rate mortgages (ARMs)**, allowing you to choose what fits your goals best.",
  },
  {
    title: "Increased Loan Approval Chances",
    text: "Lenders view borrowers with good credit as **reliable candidates**, increasing the likelihood of approval without additional requirements.",
  },
  {
    title: "Improved Negotiating Power",
    text: "Good credit gives you leverage to **negotiate better rates, fees, and other terms**, ensuring that you get the best possible value from your mortgage.",
  },
];

const programs = [
  {
    title: "Conventional Fixed-Rate Loan",
    text: "Ideal for borrowers who want stable monthly payments and a fixed interest rate for the life of the loan.",
    href: "/conventional-home-loans-arizona/",
  },
  {
    title: "Adjustable-Rate Mortgage (ARM)",
    text: "Offers lower initial interest rates that can adjust over time, suitable for those planning to move or refinance in the near future.",
    href: "/conventional-home-loans-arizona/",
  },
  {
    title: "FHA Loans",
    text: "Designed for those who may have a smaller down payment, FHA loans offer competitive rates and more accessible qualification criteria.",
    href: "/fha-home-loans-arizona/",
  },
  {
    title: "Jumbo Loan",
    text: "For those looking to finance high-value properties, jumbo loans offer flexible terms for homes that exceed conventional loan limits.",
    href: "/jumbo-loans-arizona/",
  },
  {
    title: "Low Down Payment Conventional Loan",
    text: "Access a home loan with as little as 3% down, thanks to your good credit score, making homeownership more accessible.",
    href: "/conventional-home-loans-arizona/",
  },
  {
    title: "Refinance Programs",
    text: "Take advantage of your good credit by refinancing to secure a lower interest rate or access equity from your home.",
    href: "/refinancing-arizona/",
  },
];

const expertCards = [
  {
    title: "Local Market Expertise",
    text: "We understand the Arizona real estate market and provide tailored mortgage solutions that match local trends and opportunities.",
  },
  {
    title: "Access to Competitive Rates",
    text: "Borrowers with good credit benefit from some of the most competitive interest rates available, helping you save over the life of your loan.",
  },
  {
    title: "Fast and Smooth Approval Process",
    text: "Our streamlined application process ensures that your loan is approved quickly and with minimal hassle.",
  },
  {
    title: "Personalized Loan Solutions",
    text: "We take a personalized approach, offering loan options that fit your specific financial goals and needs.",
  },
  {
    title: "Trusted by Arizona Homebuyers",
    text: "We have helped thousands of clients in **Phoenix, Scottsdale, and beyond** achieve their homeownership dreams with transparent, reliable service.",
  },
  {
    title: "Clear and Honest Communication",
    text: "We prioritize open communication and clear guidance throughout the entire mortgage process, from application to closing.",
  },
];

const testimonials: CountyTestimonial[] = [
  {
    name: "Chris and Vicky Smith",
    quote: "I was referred to Eddie through my sister-n-law. I had tried a previous company but wasn't satisfied. I have been extremely happy with Eddie's mortgage team. Everything was done online through emails. I highly recommend Eddie's mortgage team for your refinancing needs.",
    attribution: "Chris and Vicky Smith, Avondale, Arizona",
  },
  {
    name: "Elizabeth Todd",
    quote: "Eddie and his team are fantastic to work with! They are efficient, friendly and very professional. They communicate to all parties in the transaction; making it a very smooth transaction every time.",
    attribution: "Elizabeth Todd, H2 Realty, Phoenix, Arizona",
  },
  {
    name: "Marleen Kapanicas",
    quote: "My husband and I would like to thank you for an outstanding job you did with our refinance. You are so knowledgeable and kept us updated on each step of the way. Your professionalism was impeccable and your timing was perfect.",
    attribution: "Marleen Kapanicas, Homesmart, Scottsdale, Arizona",
  },
];

const faqs = pageFaqs;

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

const stats = [
  { value: "261706 $", label: "Average Mortgage Balance in Arizona" },
  { value: "3%", label: "Minimum Down Payment for Conventional Loans" },
  { value: "684", label: "Average Credit Score in Arizona" },
  { value: "80.6%", label: "Super-Prime Mortgage Borrowers" },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function MortgageForGoodCreditPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="w-full bg-[#08271B] text-white pt-[110px] sm:pt-[130px] pb-12 sm:pb-14 lg:pb-16 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <h1 className="text-white text-[32px] sm:text-[44px] lg:text-[52px] font-bold font-playfair leading-[1.15] mb-4 text-center tracking-tight">
              Mortgage for Good Credit
            </h1>
            <p className="text-[#c8c8b8] text-[16px] sm:text-[19px] lg:text-[22px] font-normal leading-[1.6] mb-8 max-w-2xl text-center">
              Unlock Competitive Mortgage Rates with Good Credit
            </p>
            <Link
              href="#get-pre-approved"
              className="inline-flex items-center gap-2.5 bg-[#3fb364] hover:bg-[#349b55] text-white text-[16px] font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Start my preapproval
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </Link>
            <p className="text-[#5a6b52] text-[12px] font-medium mt-3 text-center">3 min / no credit impact</p>
          </div>
        </section>

        <HeroFeatureStrip items={featureStrip} />


        {/* What good credit means */}
        <section className="w-full loan-section">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What Does Good Credit Mean for Your Mortgage?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                {renderInlineLinks(
                  "Having a **good credit score** can significantly impact your ability to secure a favorable mortgage. While it may not be as high as an \"excellent\" credit score, a strong score still provides access to **competitive interest rates, higher approval odds, and flexible loan options**. Lenders consider good credit a sign of financial responsibility, which makes you a more attractive candidate for home loans. This means you can enjoy benefits like more favorable terms, faster approvals, and a wider range of loan programs to fit your needs."
                )}
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75] mt-4">
                In short, having good credit is a key advantage when purchasing a home, helping you turn
                your homeownership goals into reality. Here&apos;s how having good credit can benefit you
                as a homebuyer:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {meaningCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <CheckIcon />
                    <h3 className="text-[#08271B] text-[17px] font-bold">{card.title}</h3>
                  </div>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed pl-8">
                    {renderInlineLinks(card.text)}
                  </p>
                </div>
              ))}
            </div>

            <div className="loan-btn-wrap">
              <Link
                href="#get-pre-approved"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Discover Your Options
              </Link>
            </div>
          </div>
        </section>

        {/* Credit score table */}
        <section className="w-full bg-[#f5f0e8] loan-section border-y border-[#e8e0d0]/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                How Your Credit Score Impacts Your Mortgage Rate
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                {renderInlineLinks(
                  "Lenders use your credit score to determine your interest rate. Here's how it can affect a **30-year fixed mortgage rate:**"
                )}
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#e8e0d0]/70 overflow-hidden shadow-sm mb-8">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left">
                  <thead>
                    <tr className="bg-[#08271B] text-white">
                      <th className="px-5 py-4 text-[13px] font-semibold uppercase tracking-wide">
                        Credit Score Range
                      </th>
                      <th className="px-5 py-4 text-[13px] font-semibold uppercase tracking-wide">
                        Estimated Interest Rate
                      </th>
                      <th className="px-5 py-4 text-[13px] font-semibold uppercase tracking-wide">
                        Category
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {creditTable.map((row, i) => (
                      <tr
                        key={row.range}
                        className={`border-t border-[#e8e0d0]/60 ${
                          i === 1 ? "bg-[#e8f5e9]/60" : i % 2 === 0 ? "bg-[#fcf9f3]" : "bg-white"
                        }`}
                      >
                        <td
                          className={`px-5 py-3.5 text-[14.5px] ${
                            i === 1 ? "font-bold text-[#2c5e1a]" : "text-[#08271B] font-medium"
                          }`}
                        >
                          {row.range}
                        </td>
                        <td className="px-5 py-3.5 text-[14.5px] text-[#4e5b4e]">{row.rate}</td>
                        <td className="px-5 py-3.5 text-[14.5px] text-[#4e5b4e]">{row.category}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-[#4e5b4e] text-[15px] leading-relaxed text-center max-w-3xl mx-auto mb-4">
              {renderInlineLinks(
                "With a **good credit score**, you still have access to competitive mortgage rates and a variety of **loan options**. Lenders see you as a reliable borrower, which means you can qualify for favorable terms, reasonable interest rates, and flexible loan programs."
              )}
            </p>
            <p className="text-[#4e5b4e] text-[15px] leading-relaxed text-center max-w-3xl mx-auto">
              If you&apos;re planning to buy a home, understanding your potential mortgage terms is the
              next important step. Our tools and experts can help you explore your best options and
              ensure you make the most out of your good credit score.
            </p>

          </div>
        </section>

        <section className="loan-cta-band bg-[#fcf9f3] !pb-0">
          <div className="mx-auto max-w-6xl text-center loan-block-gap">
            <Link
              href="#get-pre-approved"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            >
              Get Your Personalized Mortgage Offer
            </Link>
          </div>
          <StatsBanner sectionClassName="py-0 bg-transparent" stats={stats} />
        </section>

        {/* Full potential */}
        <section className="w-full loan-section !pt-8 sm:!pt-10 lg:!pt-12">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Unlocking the Full Potential of Your Good Credit
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                {renderInlineLinks(
                  "Having a **good credit score** is a valuable asset when applying for a mortgage. While it may not reach the \"excellent\" range, it still demonstrates financial responsibility and reliability, making you an attractive candidate for lenders. With good credit, you can access **competitive interest rates, favorable loan terms, and flexible mortgage programs** designed to help you achieve your homeownership goals. This means that even if your credit isn't perfect, you can still benefit from solid loan offers and save money over the life of your mortgage."
                )}
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75] mt-4">
                Below are some of the key advantages that come with having a good credit score when
                applying for a home loan:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefitCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-[#08271B] text-[17px] font-bold mb-3 flex items-center gap-2">
                    <CheckIcon />
                    <span>{card.title}</span>
                  </h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed pl-7">
                    {renderInlineLinks(card.text)}
                  </p>
                </div>
              ))}
            </div>

            <div className="loan-btn-wrap">
              <Link
                href="#get-pre-approved"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Get Your Personalized Mortgage Offer
              </Link>
            </div>
          </div>
        </section>

        {/* Best mortgage options */}
        <section className="w-full bg-[#f5f0e8] loan-section border-y border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Best Mortgage Options for Borrowers with Good Credit
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                {renderInlineLinks(
                  "A **good credit score** opens the door to a variety of mortgage programs designed to offer competitive rates, flexible terms, and accessible financing options. Whether you're looking to buy your first home, upgrade to a new property, or refinance your current mortgage, having good credit means you have a range of choices that can help you achieve your homeownership goals. Below are some of the best mortgage programs available for borrowers with good credit:"
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {programs.map((p) => (
                <div
                  key={p.title}
                  className="group bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 hover:border-[#3fb364]/40 hover:shadow-lg transition-all"
                >
                  <Link href={p.href} className="block mb-2">
                    <h3 className="text-[#3fb364] group-hover:text-[#2d8545] text-[19px] font-bold transition-colors">
                      {p.title}
                    </h3>
                  </Link>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed">
                    {renderInlineLinks(p.text)}
                  </p>
                </div>
              ))}
            </div>

            <div className="loan-btn-wrap">
              <a
                href="tel:+16025352171"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </section>

        <CountyTestimonials
          title="Hear from Our Satisfied Clients"
          description={renderInlineLinks(
            "At [Mortgage Brothers LLC](/), we believe that every client deserves a seamless, stress-free mortgage experience. We take pride in helping borrowers with good credit secure the **best rates, flexible loan options, and personalized service** tailored to their unique needs. But don't just take our word for it — read what our clients have to say about working with us."
          )}
          testimonials={testimonials}
        />

        {/* Why trust us */}
        <section className="w-full bg-[#08271B] loan-section text-white">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2
                className="text-white text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Why Borrowers with Good Credit Trust Mortgage Brothers LLC
              </h2>
              <p className="text-[#c8c8b8] text-[15.5px] leading-relaxed">
                {renderDarkInlineLinks(
                  "At [Mortgage Brothers LLC](/), we know that borrowers with good credit deserve a mortgage experience that matches their financial responsibility. With a focus on providing **competitive rates, expert guidance, and personalized service**, we ensure that every client receives the best possible home financing solution. Here's why we're the top choice for mortgage borrowers with good credit in Arizona:"
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertCards.map((card) => (
                <div key={card.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-[#3fb364] text-[17px] font-bold mb-2">{card.title}</h3>
                  <p className="text-[#c8c8b8] text-[14px] leading-relaxed">
                    {renderDarkInlineLinks(card.text)}
                  </p>
                </div>
              ))}
            </div>

            <div className="loan-btn-wrap">
              <a
                href="tel:+16025352171"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full loan-section">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[36px] font-normal leading-tight mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Frequently Asked Questions About Mortgages for Good Credit Borrowers
              </h2>
              <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
                {renderInlineLinks(
                  "We understand that the mortgage process can be complex, even for borrowers with good credit. To help you make informed decisions, we've compiled answers to some of the most frequently asked questions about [mortgage rates](/mortgage-rates-tool-arizona/), loan options, and the application process."
                )}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {faqs.map((faq, index) => {
                const open = openFaq === index;
                return (
                  <div
                    key={faq.q}
                    className="bg-white border border-[#e8e0d0]/70 rounded-xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : index)}
                      className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 cursor-pointer"
                      aria-expanded={open}
                    >
                      <span className="text-[#08271B] text-[15px] font-semibold leading-snug">
                        {faq.q}
                      </span>
                      <span
                        className={`text-[#3fb364] text-[22px] font-light shrink-0 transition-transform ${
                          open ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    {open && (
                      <div className="px-5 pb-5 text-[#4e5b4e] text-[14.5px] leading-relaxed border-t border-[#e8e0d0]/50 pt-4">
                        {renderInlineLinks(faq.a)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="loan-btn-wrap">
              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Ask a Mortgage Expert
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="w-full bg-[#f5f0e8] loan-section border-y border-[#e8e0d0]/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-[#08271B] text-[30px] lg:text-[38px] font-normal leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Connect with Mortgage Brothers LLC
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-8 max-w-2xl mx-auto">
              {renderInlineLinks(
                "Ready to take the next step in your homeownership journey? Whether you're exploring mortgage options, looking to refinance, or have specific questions about the process, our team of **licensed mortgage professionals** is here to help. We offer personalized guidance and solutions tailored to your financial goals."
              )}
            </p>

            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all"
            >
              Get in touch with us today!
            </Link>
          </div>
        </section>

        {/* Explore solutions */}
        <section className="w-full loan-section">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-[#08271B] text-[28px] lg:text-[34px] font-normal text-center mb-8"
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