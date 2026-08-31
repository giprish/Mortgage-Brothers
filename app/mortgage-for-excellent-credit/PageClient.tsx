"use client";

import { faqs as pageFaqs } from "./faqs";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import FaqAccordion from "../component/FaqAccordion";
import StatsBanner from "../component/StatsBanner";
import HeroFeatureStrip from "../component/HeroFeatureStrip";
import { renderDarkInlineLinks, renderInlineLinks } from "@/lib/renderInlineLinks";

import CountyTestimonials, { type CountyTestimonial } from "../component/CountyTestimonials";

const featureStrip = [
  "Get Access to the Lowest Mortgage Rates for Excellent Credit",
  "Unlock the Best Home Loan Options with Excellent Credit",
  "Secure a Mortgage with Favorable Terms and Low Interest Rates",
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
    title: "Lowest Interest Rates",
    text: "Borrowers with excellent credit qualify for the most competitive interest rates, reducing the total cost of the mortgage over time. Even a small difference in interest rates can save you thousands of dollars.",
  },
  {
    title: "Higher Loan Approval Chances",
    text: "A high credit score makes you a more attractive borrower, increasing your chances of getting approved for a mortgage with better terms and fewer restrictions.",
  },
  {
    title: "Better Loan Terms and Flexibility",
    text: "Excellent credit gives you access to lower down payment options, reduced closing costs, and a variety of loan programs tailored to your needs, offering greater financial flexibility.",
  },
  {
    title: "Increased Borrowing Power",
    text: "With excellent credit, lenders are more willing to approve higher loan amounts, helping you secure financing for your dream home while keeping monthly payments manageable.",
  },
];

const benefitCards = [
  {
    title: "Access to Exclusive Loan Programs",
    text: "High credit scores unlock special mortgage programs with **lower fees, flexible repayment terms, and better borrowing limits**, giving you more financial options.",
  },
  {
    title: "Lower Mortgage Insurance Costs",
    text: "Borrowers with strong credit often **pay less for private mortgage insurance (PMI)** or may even qualify to eliminate it, reducing monthly expenses.",
  },
  {
    title: "More Favorable Refinancing Opportunities",
    text: "A higher credit score makes it easier to **refinance at better rates**, helping you lower your monthly payments and overall loan costs when needed.",
  },
  {
    title: "Faster Loan Approval Process",
    text: "Lenders prioritize applicants with excellent credit, leading to **a quicker, smoother mortgage approval** with fewer delays and less paperwork.",
  },
  {
    title: "Higher Loan Limits with Better Terms",
    text: "With excellent credit, you may qualify for **larger loan amounts** with better interest rates, allowing you to buy a more valuable home while keeping payments manageable.",
  },
  {
    title: "More Competitive Offers from Lenders",
    text: "Lenders compete for borrowers with strong credit, giving you the ability to **negotiate better terms, lower fees, and special incentives** on your mortgage.",
  },
];

const programs = [
  {
    title: "Conventional Home Loans",
    text: "Ideal for borrowers with strong credit, these loans offer competitive interest rates and flexible terms. They are suitable for purchasing or refinancing a primary residence, second home, or investment property.",
    href: "/conventional-home-loans-arizona/",
  },
  {
    title: "Jumbo Loans",
    text: "For those looking to finance high-value properties that exceed conforming loan limits, our [jumbo loans](/jumbo-loans-arizona/) provide flexible terms and competitive rates. These loans are tailored for borrowers with excellent credit seeking to purchase luxury homes.",
    href: "/jumbo-loans-arizona/",
  },
  {
    title: "FHA Home Loans",
    text: "Backed by the Federal Housing Administration, FHA loans are designed to help first-time homebuyers and those with lower down payments. Recent updates have reduced mortgage insurance premiums by about 35%, making these loans more affordable.",
    href: "/fha-home-loans-arizona/",
  },
  {
    title: "VA Loans",
    text: "Exclusively for veterans, active-duty service members, and eligible spouses, VA loans offer competitive interest rates and often require no down payment. They are a great benefit for those who have served our country.",
    href: "/va-loans-arizona/",
  },
  {
    title: "Refinancing Options",
    text: "Whether you're looking to lower your interest rate, change your loan term, or access your home's equity, our refinancing programs can help you achieve your financial goals. We offer various options tailored to your needs.",
    href: "/refinancing-arizona/",
  },
  {
    title: "Reverse Mortgage",
    text: "Designed for homeowners aged 62 and older, reverse mortgages allow you to convert part of your home equity into cash without selling your home. This can provide additional income during retirement.",
    href: "/reverse-mortgage-arizona/",
  },
];

const expertCards = [
  {
    title: "Local Market Expertise",
    text: "With deep knowledge of the **Arizona housing market**, we help high-credit borrowers find the best mortgage solutions for their needs.",
  },
  {
    title: "Exclusive Low-Rate Mortgage Programs",
    text: "We offer access to **some of the most competitive interest rates in Arizona**, ensuring you save more over the life of your loan.",
  },
  {
    title: "Faster Mortgage Approval",
    text: "Our streamlined application process allows for **quick approvals**, so you can secure your home financing without delays.",
  },
  {
    title: "Personalized Loan Options",
    text: "Every borrower is unique — our **licensed mortgage brokers** provide custom financing strategies that align with your goals.",
  },
  {
    title: "Trusted by Arizona Homebuyers",
    text: "We've helped thousands of clients in **Phoenix, Scottsdale, and beyond** secure their dream homes with the best mortgage terms.",
  },
  {
    title: "Transparent & Reliable Service",
    text: "No hidden fees, no surprises — just **expert guidance and clear communication** from start to finish.",
  },
];

const testimonials: CountyTestimonial[] = [
  {
    name: "Chris and Vicky Smith",
    quote: "I was referred to Eddie through my sister-n-law. I had tried a previous company but wasn't satisfied. I have been extremely happy with Eddie's mortgage team. Everything was done online through emails. This was very helpful as both my husband and I work full time during the day. I highly recommend Eddie's mortgage team for your refinancing needs.",
    attribution: "Chris and Vicky Smith, Avondale, Arizona",
  },
  {
    name: "Elizabeth Todd",
    quote: "Eddie and his team are fantastic to work with! They are efficient, friendly and very professional. They communicate to all parties in the transaction; making it a very smooth transaction every time. I can't say enough good things about Eddie as a mortgage lender!",
    attribution: "Elizabeth Todd, H2 Realty, Phoenix, Arizona",
  },
  {
    name: "Marleen Kapanicas",
    quote: "My husband and I would like to thank you for an outstanding job you did with our refinance. You are so knowledgeable and kept us updated on each step of the way. Your professionalism was impeccable and your timing was perfect.",
    attribution: "Marleen Kapanicas, Homesmart, Scottsdale, Arizona",
  },
];

const faqs = pageFaqs.map((item) => ({
  q: item.q,
  a: renderInlineLinks(item.a),
}));

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
  { value: "80.6%", label: "Mortgages for Top Credit Scores" },
  { value: "758", label: "Avg. Credit Score for Mortgages" },
  { value: "6.72%", label: "Current 30-Year Mortgage Rate" },
  { value: "426.947 $", label: "Average Home Value in Arizona" },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function MortgageForExcellentCreditPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="w-full bg-[#08271B] text-white pt-[110px] sm:pt-[130px] pb-12 sm:pb-14 lg:pb-16 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <h1 className="text-white text-[32px] sm:text-[44px] lg:text-[52px] font-bold font-playfair leading-[1.15] mb-4 text-center tracking-tight">
              Mortgage for Excellent Credit
            </h1>
            <p className="text-[#c8c8b8] text-[16px] sm:text-[19px] lg:text-[22px] font-normal leading-[1.6] mb-8 max-w-2xl text-center">
              Unlock exclusive mortgage options with the lowest interest rates for excellent credit borrowers
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


        {/* What excellent credit means */}
        <section className="w-full loan-section">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What Does Excellent Credit Mean for Your Mortgage?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                {renderInlineLinks(
                  "Your credit score is one of the most important factors lenders consider when determining your mortgage eligibility and the interest rates you qualify for. Having an **excellent credit score (typically 720 and above)** means you are viewed as a low-risk borrower, making you eligible for the **best mortgage rates, higher loan amounts, and more flexible repayment terms**. This can lead to significant savings over the life of your mortgage and give you a strong negotiating position when securing financing for your home."
                )}
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75] mt-4">
                Understanding how your credit score impacts your mortgage options will help you make
                informed decisions and maximize your financial benefits. Below, we break down the key
                advantages of having excellent credit when applying for a home loan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {meaningCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <CheckIcon />
                    <h3 className="text-[#08271B] text-[18px] font-bold">{card.title}</h3>
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

        {/* Credit score impact table */}
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
                          i === 0 ? "bg-[#e8f5e9]/60" : i % 2 === 0 ? "bg-[#fcf9f3]" : "bg-white"
                        }`}
                      >
                        <td className={`px-5 py-3.5 text-[14.5px] ${i === 0 ? "font-bold text-[#2c5e1a]" : "text-[#08271B] font-medium"}`}>
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

            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed text-center max-w-3xl mx-auto mb-4">
              With an excellent credit score, you have access to the most competitive mortgage rates
              and flexible loan options. Lenders see you as a low-risk borrower, which means you can
              qualify for higher loan amounts, lower interest rates, and reduced costs.
            </p>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed text-center max-w-3xl mx-auto">
              If you&apos;re planning to buy a home, understanding your potential mortgage terms is the
              next logical step. Our tools and experts can help you explore your best options and
              ensure you get the most out of your excellent credit score.
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

        {/* Benefits */}
        <section className="w-full loan-section !pt-8 sm:!pt-10 lg:!pt-12">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                How Excellent Credit Maximizes Your Home Loan Benefits
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                {renderInlineLinks(
                  "Your excellent credit score does more than just help you qualify for a mortgage — it opens doors to exclusive advantages that can significantly impact your financial future. Lenders offer **better rates, more flexible terms, and faster approvals** to borrowers with high credit scores."
                )}
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75] mt-4">
                This means you can secure the best possible home financing and save money over time.
                Here&apos;s what makes excellent credit a game-changer when buying a home:
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
                Find Your Best Mortgage Deal
              </Link>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="w-full bg-[#f5f0e8] loan-section border-y border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Exclusive Mortgage Programs for Borrowers with Excellent Credit
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                {renderInlineLinks(
                  "With an excellent credit score, you gain access to mortgage programs with the **lowest interest rates, flexible repayment options, and higher loan limits**."
                )}
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mt-4">
                Lenders offer these exclusive programs to reward responsible borrowers, helping you
                secure financing that fits your homeownership goals. Below are some of the best
                mortgage options available to borrowers with excellent credit.
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
          title="Real Clients. Real Success. Your Homeownership Journey Starts Here."
          description={renderInlineLinks(
            "At [Mortgage Brothers LLC](/), we take pride in helping high-credit borrowers secure the **best mortgage rates and smoothest loan experiences**. But don't just take our word for it — hear from real homebuyers who turned their dreams into reality with our expert guidance. From first-time buyers to seasoned homeowners refinancing for better terms, our clients trust us to deliver **personalized mortgage solutions and stress-free closings**. Here's what they have to say."
          )}
          testimonials={testimonials}
        />

        {/* Top experts */}
        <section className="w-full bg-[#08271B] loan-section text-white">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2
                className="text-white text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Top Mortgage Experts in Arizona for High Credit Borrowers
              </h2>
              <p className="text-[#c8c8b8] text-[15.5px] leading-relaxed">
                {renderDarkInlineLinks(
                  "Finding the right mortgage lender is key to securing the best loan terms. At [Mortgage Brothers LLC](/), we specialize in helping borrowers with excellent credit access the **lowest rates and most competitive loan programs**. With years of experience in the **Arizona real estate market**, we provide tailored financing solutions to make your homebuying journey seamless and stress-free. Whether you're purchasing a home in **Phoenix, Scottsdale, Mesa, or anywhere in Arizona**, our expert mortgage team is here to guide you every step of the way."
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
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Mortgage FAQs for High-Credit Borrowers
              </h2>
              <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
                Navigating the mortgage process can bring up a lot of questions, even for borrowers
                with excellent credit. To help you make informed decisions, we&apos;ve answered some of
                the most common questions about mortgage rates, loan approvals, and refinancing.
              </p>
            </div>

            <div className="">
              <FaqAccordion items={faqs} />
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
              Let&apos;s Make Your Mortgage Process Simple &amp; Stress-Free
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-8 max-w-2xl mx-auto">
              {renderInlineLinks(
                "At **Mortgage Brothers LLC**, we're here to help you secure the best mortgage for your financial goals. Whether you're buying a new home, refinancing, or just exploring your options, our experienced team is ready to guide you every step of the way. Have questions? Need a personalized mortgage consultation? **Get in touch with us today!**"
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
                  key={item.href}
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
