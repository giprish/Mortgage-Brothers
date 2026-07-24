"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

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
    text: "High credit scores unlock special mortgage programs with lower fees, flexible repayment terms, and better borrowing limits, giving you more financial options.",
  },
  {
    title: "Lower Mortgage Insurance Costs",
    text: "Borrowers with strong credit often pay less for private mortgage insurance (PMI) or may even qualify to eliminate it, reducing monthly expenses.",
  },
  {
    title: "More Favorable Refinancing Opportunities",
    text: "A higher credit score makes it easier to refinance at better rates, helping you lower your monthly payments and overall loan costs when needed.",
  },
  {
    title: "Faster Loan Approval Process",
    text: "Lenders prioritize applicants with excellent credit, leading to a quicker, smoother mortgage approval with fewer delays and less paperwork.",
  },
  {
    title: "Higher Loan Limits with Better Terms",
    text: "With excellent credit, you may qualify for larger loan amounts with better interest rates, allowing you to buy a more valuable home while keeping payments manageable.",
  },
  {
    title: "More Competitive Offers from Lenders",
    text: "Lenders compete for borrowers with strong credit, giving you the ability to negotiate better terms, lower fees, and special incentives on your mortgage.",
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
    text: "For those looking to finance high-value properties that exceed conforming loan limits, our jumbo loans provide flexible terms and competitive rates. These loans are tailored for borrowers with excellent credit seeking to purchase luxury homes.",
    href: "/jumbo-loans-arizona/",
  },
  {
    title: "FHA Home Loans",
    text: "Backed by the Federal Housing Administration, FHA loans are designed to help first-time homebuyers and those with lower down payments. Recent updates have reduced mortgage insurance premiums, making these loans more affordable.",
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
    text: "With deep knowledge of the Arizona housing market, we help high-credit borrowers find the best mortgage solutions for their needs.",
  },
  {
    title: "Exclusive Low-Rate Mortgage Programs",
    text: "We offer access to some of the most competitive interest rates in Arizona, ensuring you save more over the life of your loan.",
  },
  {
    title: "Faster Mortgage Approval",
    text: "Our streamlined application process allows for quick approvals, so you can secure your home financing without delays.",
  },
  {
    title: "Personalized Loan Options",
    text: "Every borrower is unique—our licensed mortgage brokers provide custom financing strategies that align with your goals.",
  },
  {
    title: "Trusted by Arizona Homebuyers",
    text: "We've helped thousands of clients in Phoenix, Scottsdale, and beyond secure their dream homes with the best mortgage terms.",
  },
  {
    title: "Transparent & Reliable Service",
    text: "No hidden fees, no surprises—just expert guidance and clear communication from start to finish.",
  },
];

const reviews = [
  {
    text: "I was referred to Eddie through my sister-n-law. I had tried a previous company but wasn't satisfied. I have been extremely happy with Eddie's mortgage team. Everything was done online through emails. This was very helpful as both my husband and I work full time during the day. I highly recommend Eddie's mortgage team for your refinancing needs.",
    author: "Chris and Vicky Smith",
    location: "Avondale, Arizona",
  },
  {
    text: "Eddie and his team are fantastic to work with! They are efficient, friendly and very professional. They communicate to all parties in the transaction; making it a very smooth transaction every time. I can't say enough good things about Eddie as a mortgage lender!",
    author: "Elizabeth Todd",
    location: "H2 Realty, Phoenix, Arizona",
  },
  {
    text: "My husband and I would like to thank you for an outstanding job you did with our refinance. You are so knowledgeable and kept us updated on each step of the way. Your professionalism was impeccable and your timing was perfect.",
    author: "Marleen Kapanicas",
    location: "Homesmart, Scottsdale, Arizona",
  },
];

const faqs = [
  {
    q: "What credit score do I need to get the best mortgage rates?",
    a: "Lenders typically offer the lowest interest rates to borrowers with a credit score of 760 or higher. However, you can still get competitive rates with a score above 720.",
  },
  {
    q: "Can I qualify for a mortgage with just my credit score, or do lenders look at other factors?",
    a: "Your credit score is important, but lenders also consider your income, debt-to-income (DTI) ratio, employment history, and down payment amount. Having excellent credit helps, but strong finances overall give you the best chances for approval.",
  },
  {
    q: "Is a higher credit score always better for mortgage approval?",
    a: "While a high credit score helps secure lower rates and better terms, lenders also evaluate loan size, income stability, and debt obligations. A score above 760 will generally unlock the best rates, but improving your DTI ratio and saving for a higher down payment can also improve your loan offer.",
  },
  {
    q: "What loan programs are available for borrowers with excellent credit?",
    a: "Borrowers with high credit scores have access to more flexible loan options, including conventional fixed-rate loans with low interest rates, jumbo loans for high-value homes, adjustable-rate mortgages (ARMs) with lower initial rates, and cash-out refinancing to access home equity at better terms.",
  },
  {
    q: "How much can I borrow with a high credit score?",
    a: "The amount you can borrow depends on your income, existing debts, and loan type. High-credit borrowers often qualify for larger loan amounts, especially if they have a low debt-to-income ratio and strong financial history.",
  },
  {
    q: "Should I put more than the minimum down payment if I have excellent credit?",
    a: "While some programs allow as little as 3% down, a larger down payment (10–20%) can help you secure an even lower interest rate, avoid private mortgage insurance (PMI), and reduce your monthly payment and total loan cost.",
  },
  {
    q: "Does checking mortgage rates impact my credit score?",
    a: "If you apply for pre-approval, lenders perform a hard inquiry, which may cause a small temporary dip in your credit score. However, checking rates through a soft inquiry does not affect your credit.",
  },
  {
    q: "Can I refinance my mortgage if I already have excellent credit?",
    a: "Yes! Refinancing allows you to lower your rate, shorten your loan term, or cash out equity. Even with excellent credit, it's important to compare current rates and potential savings before refinancing.",
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

const stats = [
  { value: "80.6%", label: "Mortgages for Top Credit Scores" },
  { value: "758", label: "Avg. Credit Score for Mortgages" },
  { value: "6.72%", label: "Current 30-Year Mortgage Rate" },
  { value: "$426,947", label: "Average Home Value in Arizona" },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function MortgageForExcellentCreditPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section
          className="relative w-full text-white pt-[120px] lg:pt-[140px] pb-16 lg:pb-24 overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(52,69,37,0.95) 0%, rgba(50,94,63,0.82) 35%, rgba(5,35,22,0.45) 100%), url('/home/mortgage-for-excellent-credit.jpg')",
          }}
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-[36px] sm:text-[46px] lg:text-[54px] font-bold leading-[1.12] mb-5 tracking-tight">
                Mortgage for Excellent Credit
              </h1>
              <p className="text-white/90 text-[16px] lg:text-[18px] leading-relaxed mb-8 max-w-xl">
                Unlock exclusive mortgage options with the lowest interest rates for excellent credit
                borrowers
              </p>
              <Link
                href="/#get-pre-approved"
                className="inline-flex items-center gap-2.5 bg-[#3fb364] hover:bg-[#349b55] text-white text-[16px] font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg shadow-[#3fb364]/25"
              >
                Start my preapproval
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </Link>
              <p className="text-white/70 text-[13px] mt-3 font-medium">3 min / no credit impact</p>
            </div>
          </div>
        </section>

        {/* Feature strip */}
        <section className="w-full bg-white border-b border-[#e8e0d0]/50 py-10 lg:py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Get Access to the Lowest Mortgage Rates for Excellent Credit",
              "Unlock the Best Home Loan Options with Excellent Credit",
              "Secure a Mortgage with Favorable Terms and Low Interest Rates",
            ].map((title) => (
              <div key={title} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#e8f5e9] flex items-center justify-center shrink-0">
                  <CheckIcon />
                </div>
                <h3 className="text-[#08271B] text-[16px] font-semibold leading-snug">{title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* What excellent credit means */}
        <section className="w-full py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What Does Excellent Credit Mean for Your Mortgage?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                Your credit score is one of the most important factors lenders consider when determining
                your mortgage eligibility and the interest rates you qualify for. Having an excellent
                credit score (typically 720 and above) means you are viewed as a low-risk borrower,
                making you eligible for the best mortgage rates, higher loan amounts, and more flexible
                repayment terms. This can lead to significant savings over the life of your mortgage
                and give you a strong negotiating position when securing financing for your home.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {meaningCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <CheckIcon />
                    <h3 className="text-[#08271B] text-[18px] font-bold">{card.title}</h3>
                  </div>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed pl-8">{card.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/#get-pre-approved"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Discover Your Options
              </Link>
            </div>
          </div>
        </section>

        {/* Credit score impact table */}
        <section className="w-full bg-[#f5f0e8] py-16 lg:py-24 border-y border-[#e8e0d0]/50">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                How Your Credit Score Impacts Your Mortgage Rate
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Lenders use your credit score to determine your interest rate. Here&apos;s how it can
                affect a 30-year fixed mortgage rate:
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

            <p className="text-[#4e5b4e] text-[15px] leading-relaxed text-center max-w-3xl mx-auto mb-8">
              With an excellent credit score, you have access to the most competitive mortgage rates
              and flexible loan options. Lenders see you as a low-risk borrower, which means you can
              qualify for higher loan amounts, lower interest rates, and reduced costs.
            </p>

            <div className="text-center">
              <Link
                href="/#get-pre-approved"
                className="inline-flex items-center gap-2 bg-[#052316] hover:bg-[#0a3d26] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Get Your Personalized Mortgage Offer
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full bg-[#08271B] py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-[#3fb364] text-[32px] lg:text-[40px] font-bold leading-none mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-[#c8c8b8] text-[13.5px] font-medium leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="w-full py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                How Excellent Credit Maximizes Your Home Loan Benefits
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                Your excellent credit score does more than just help you qualify for a mortgage—it
                opens doors to exclusive advantages that can significantly impact your financial
                future. Lenders offer better rates, more flexible terms, and faster approvals to
                borrowers with high credit scores.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefitCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-[#08271B] text-[17px] font-bold mb-3 flex items-start gap-2">
                    <CheckIcon />
                    <span>{card.title}</span>
                  </h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed pl-7">{card.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/#get-pre-approved"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Find Your Best Mortgage Deal
              </Link>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="w-full bg-[#f5f0e8] py-16 lg:py-24 border-y border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Exclusive Mortgage Programs for Borrowers with Excellent Credit
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                With an excellent credit score, you gain access to mortgage programs with the lowest
                interest rates, flexible repayment options, and higher loan limits. Below are some of
                the best mortgage options available to borrowers with excellent credit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
              {programs.map((p) => (
                <Link
                  key={p.title}
                  href={p.href}
                  className="group bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 hover:border-[#3fb364]/40 hover:shadow-lg transition-all"
                >
                  <h3 className="text-[#3fb364] group-hover:text-[#2d8545] text-[19px] font-bold mb-2 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed">{p.text}</p>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <a
                href="tel:+16025352171"
                className="inline-flex items-center gap-2 bg-[#052316] hover:bg-[#0a3d26] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="w-full py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[38px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Real Clients. Real Success. Your Homeownership Journey Starts Here.
              </h2>
              <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
                At AZ Mortgage Brothers, we take pride in helping high-credit borrowers secure the
                best mortgage rates and smoothest loan experiences. Here&apos;s what they have to say.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {reviews.map((rev) => (
                <div
                  key={rev.author}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm flex flex-col"
                >
                  <div className="flex gap-0.5 mb-4 text-[#b89a5a]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#3a443a] text-[14px] leading-relaxed flex-1 mb-5">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                  <div>
                    <p className="text-[#08271B] text-[14px] font-bold">{rev.author}</p>
                    <p className="text-[#8a9a7a] text-[12px] mt-0.5">{rev.location}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/client-mortgage-reviews/"
                className="inline-flex items-center gap-2 text-[#08271B] hover:text-[#3fb364] font-semibold text-[15px] transition-colors"
              >
                Explore All Client Testimonials
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Top experts */}
        <section className="w-full bg-[#08271B] py-16 lg:py-24 text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-white text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Top Mortgage Experts in Arizona for High Credit Borrowers
              </h2>
              <p className="text-[#c8c8b8] text-[15.5px] leading-relaxed">
                Finding the right mortgage lender is key to securing the best loan terms. At AZ
                Mortgage Brothers, we specialize in helping borrowers with excellent credit access the
                lowest rates and most competitive loan programs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {expertCards.map((card) => (
                <div key={card.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-[#3fb364] text-[17px] font-bold mb-2">{card.title}</h3>
                  <p className="text-[#c8c8b8] text-[14px] leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
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
        <section className="w-full py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-10">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Mortgage FAQs for High-Credit Borrowers
              </h2>
              <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
                Navigating the mortgage process can bring up a lot of questions, even for borrowers
                with excellent credit. Here are answers to the most common ones.
              </p>
            </div>

            <div className="flex flex-col gap-3 mb-10">
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
                      <span className={`text-[#3fb364] text-[22px] font-light shrink-0 transition-transform ${open ? "rotate-45" : ""}`}>
                        +
                      </span>
                    </button>
                    {open && (
                      <div className="px-5 pb-5 text-[#4e5b4e] text-[14.5px] leading-relaxed border-t border-[#e8e0d0]/50 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="text-center">
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
        <section className="w-full bg-[#f5f0e8] py-16 lg:py-20 border-y border-[#e8e0d0]/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2
              className="text-[#08271B] text-[30px] lg:text-[38px] font-normal leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Let&apos;s Make Your Mortgage Process Simple &amp; Stress-Free
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-8 max-w-2xl mx-auto">
              At AZ Mortgage Brothers, we&apos;re here to help you secure the best mortgage for your
              financial goals. Whether you&apos;re buying a new home, refinancing, or just exploring
              your options, our experienced team is ready to guide you every step of the way.
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
