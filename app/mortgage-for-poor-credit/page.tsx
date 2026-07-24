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
    title: "Higher Interest Rates",
    text: "Lenders typically charge higher interest rates to borrowers with low credit scores to offset the perceived risk.",
  },
  {
    title: "Limited Loan Program Availability",
    text: "Conventional loans may be harder to qualify for, but government-backed loans like FHA, VA, and USDA mortgages offer more flexibility for low-credit borrowers.",
  },
  {
    title: "Larger Down Payment Requirements",
    text: "Some lenders may require a higher down payment (10–20%) to compensate for the lower credit score.",
  },
  {
    title: "Stricter Debt-to-Income (DTI) Ratios",
    text: "Lenders may require a lower DTI ratio, meaning you'll need stable income and manageable existing debts to qualify.",
  },
  {
    title: "Credit Score Minimums Vary by Loan Type",
    text: "While conventional loans usually require a minimum credit score of 620, FHA loans accept scores as low as 580 with alternative credit using a manual underwrite to approve the loan.",
  },
  {
    title: "Improving Your Credit Can Expand Your Options",
    text: "Even small improvements—like paying off debts, making on-time payments, or reducing credit utilization—can help you qualify for better rates and loan programs.",
  },
];

const benefitCards = [
  {
    title: "Access to Government-Backed Loans",
    text: "Programs like FHA, VA, and USDA loans are designed to help borrowers with lower credit scores get approved with lower down payments and more flexible requirements.",
  },
  {
    title: "Opportunity to Rebuild Your Credit",
    text: "Making consistent, on-time mortgage payments helps improve your credit score over time, opening doors to better financial opportunities.",
  },
  {
    title: "Equity Growth & Financial Stability",
    text: "Instead of paying rent, homeownership allows you to build equity in your property, which can serve as a valuable financial asset in the future.",
  },
  {
    title: "Refinancing Options After Credit Improvement",
    text: "Once your credit score improves, you can refinance your mortgage to secure a lower interest rate and better loan terms.",
  },
  {
    title: "Down Payment Assistance Programs Available",
    text: "Some state and federal programs offer down payment assistance for eligible borrowers, making it easier to afford homeownership even with poor credit.",
  },
  {
    title: "Alternative Loan Options Exist",
    text: "In addition to traditional lenders, credit unions, private lenders, and rent-to-own programs may provide more flexible mortgage solutions for borrowers with low credit scores.",
  },
];

const programs = [
  {
    title: "FHA Loans – Low Credit, Low Down Payment",
    text: "Backed by the Federal Housing Administration, FHA loans allow credit scores as low as 580 with only 3.5% down.",
    href: "/fha-home-loans-arizona/",
  },
  {
    title: "VA Loans – No Down Payment for Eligible Veterans",
    text: "For eligible military service members and veterans, VA loans offer no down payment, no PMI, and competitive interest rates, even with a lower credit score.",
    href: "/va-loans-arizona/",
  },
  {
    title: "USDA Loans – Affordable Homeownership in Rural Areas",
    text: "Designed for low-to-moderate-income buyers in rural areas, USDA loans require no down payment and accept credit scores as low as 580.",
    href: "/fha-home-loans-arizona/",
  },
  {
    title: "Subprime & Alternative Loans",
    text: "Some lenders offer non-traditional mortgage programs with flexible approval criteria, allowing borrowers with credit scores below 580 to qualify under different income and asset verification methods.",
    href: "/private-money-lender-arizona/",
  },
  {
    title: "Rent-to-Own Programs",
    text: "For those struggling to qualify for a mortgage today, rent-to-own programs provide an option to rent a home with a portion of payments going toward future ownership.",
    href: "/first-time-home-buyer-arizona-guide/",
  },
  {
    title: "Co-Signer Mortgages – A Boost for Your Application",
    text: "Adding a creditworthy co-signer to your mortgage application can increase approval chances and help secure better loan terms.",
    href: "/#get-pre-approved",
  },
];

const expertCards = [
  {
    title: "Experts in Low Credit Mortgage Solutions",
    text: "We have extensive experience helping borrowers with low credit scores find FHA, VA, USDA, and alternative loan programs that fit their needs.",
  },
  {
    title: "Flexible Loan Options for Every Situation",
    text: "From government-backed loans to rent-to-own programs, we provide customized mortgage solutions based on your financial profile.",
  },
  {
    title: "Higher Approval Odds",
    text: "We work with lenders who specialize in low-credit mortgages, increasing your chances of approval even if you've been turned down elsewhere.",
  },
  {
    title: "Guidance on Improving Your Credit",
    text: "Our team helps you understand how to improve your credit score so you can qualify for better rates and loan terms in the future.",
  },
  {
    title: "Fast & Transparent Process",
    text: "We streamline the mortgage application, ensuring clear communication, no hidden fees, and fast processing so you can focus on finding your home.",
  },
  {
    title: "Trusted by Arizona Homebuyers",
    text: "We've helped hundreds of borrowers in Phoenix, Scottsdale, Mesa, and beyond get approved for a mortgage, no matter their credit situation.",
  },
];

const reviews = [
  {
    text: "I was referred to Eddie through my sister-n-law. I had tried a previous company but wasn't satisfied. I have been extremely happy with Eddie's mortgage team. Everything was done online through emails. I highly recommend Eddie's mortgage team for your refinancing needs.",
    author: "Chris and Vicky Smith",
    location: "Avondale, Arizona",
  },
  {
    text: "Eddie and his team are fantastic to work with! They are efficient, friendly and very professional. They communicate to all parties in the transaction; making it a very smooth transaction every time.",
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
    q: "Can I get a mortgage with poor credit?",
    a: "Yes! Government-backed loans like FHA, VA, and USDA mortgages offer flexible credit score requirements. Some lenders also provide alternative loan programs for borrowers with credit scores below 580.",
  },
  {
    q: "What's the minimum credit score required for a mortgage?",
    a: "FHA loans: as low as 580 (with 3.5% down). VA & USDA loans: no set minimum, but most lenders prefer at least 580–620. Conventional loans: typically 620 or higher.",
  },
  {
    q: "Will I need a larger down payment with poor credit?",
    a: "It depends on the loan type. FHA loans require as little as 3.5% down, but some conventional lenders may ask for 10–20% down if your credit score is low.",
  },
  {
    q: "How can I improve my chances of getting approved?",
    a: "Reduce your debt-to-income (DTI) ratio by paying off outstanding debts, save for a larger down payment, get a co-signer with strong credit, and work with a lender that specializes in low-credit mortgages.",
  },
  {
    q: "Can I refinance my mortgage after improving my credit?",
    a: "Yes! Once your credit score improves, you may qualify for a lower interest rate through refinancing, which can help reduce your monthly payments.",
  },
  {
    q: "Will applying for a mortgage hurt my credit score?",
    a: "A hard inquiry from a lender may cause a temporary dip in your score, but multiple mortgage inquiries within 45 days typically count as one inquiry for credit scoring purposes.",
  },
  {
    q: "Are there special mortgage programs for first-time homebuyers with bad credit?",
    a: "Yes! FHA and USDA loans are great options for first-time homebuyers with low credit scores because they have low down payment requirements and flexible credit criteria.",
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
  { value: "$261,706", label: "Average Mortgage Balance in Arizona" },
  { value: "3%", label: "Minimum Down Payment for Conventional Loans" },
  { value: "684", label: "Average Credit Score in Arizona" },
  { value: "80.6%", label: "Super-Prime Mortgage Borrowers" },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function MortgageForPoorCreditPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section
          className="relative w-full text-white min-h-[560px] lg:min-h-[700px] xl:min-h-[725px] flex items-center overflow-hidden bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(52, 69, 37) 0%, rgb(50, 94, 63) 20%, rgba(255, 255, 255, 0) 100%), url('/home/mortgage-poor-credit.jpg')",
            backgroundPosition: "0% 50%, 100% 50%",
            backgroundSize: "cover, cover",
          }}
        >
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-[120px] pb-14 lg:pt-[140px] lg:pb-20 relative z-10">
            <div className="max-w-[640px]">
              <h1 className="text-white text-[40px] sm:text-[52px] lg:text-[64px] xl:text-[72px] font-bold leading-[1.05] mb-5 tracking-tight">
                Mortgage for Poor Credit
              </h1>
              <h2 className="text-white text-[18px] sm:text-[24px] lg:text-[32px] font-normal leading-[1.35] mb-8 max-w-[580px]">
                Buying a Home with Poor Credit? We Can Help!
              </h2>
              <div className="flex flex-col items-start gap-3">
                <Link
                  href="/#get-pre-approved"
                  className="inline-flex items-center gap-3 bg-[#4B800A] hover:bg-[#3f6d09] text-white text-[16px] lg:text-[18px] font-semibold pl-7 pr-2 py-2 rounded-full transition-all shadow-lg"
                >
                  Start my preapproval
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#052316]/35">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                </Link>
                <p className="text-white/85 text-[13px] lg:text-[14px] font-medium flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 14" />
                  </svg>
                  3 min / no credit impact
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature strip */}
        <section className="w-full bg-[#eeeff4] border-b border-[#e0e2e8] py-10 lg:py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Home Loans Are Still Possible with Poor Credit",
              "Government-Backed Loans Help Borrowers with Poor Credit",
              "A Larger Down Payment Can Offset a Low Credit Score",
            ].map((title) => (
              <div key={title} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <CheckIcon />
                </div>
                <h3 className="text-[#333333] text-[16px] font-semibold leading-snug">{title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* What poor credit means */}
        <section className="w-full py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What Does Poor Credit Mean for Your Mortgage?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                Having poor credit doesn&apos;t mean homeownership is out of reach, but it does impact
                your mortgage options. Lenders consider borrowers with lower credit scores as
                higher-risk applicants, which can result in higher interest rates, stricter loan
                requirements, and larger down payment demands. However, there are still mortgage
                programs designed to help borrowers with poor credit secure home financing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {meaningCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <CheckIcon />
                    <h3 className="text-[#08271B] text-[17px] font-bold">{card.title}</h3>
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

        {/* Credit score table */}
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
                          i === 3 ? "bg-[#e8f5e9]/60" : i % 2 === 0 ? "bg-[#fcf9f3]" : "bg-white"
                        }`}
                      >
                        <td
                          className={`px-5 py-3.5 text-[14.5px] ${
                            i === 3 ? "font-bold text-[#2c5e1a]" : "text-[#08271B] font-medium"
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

            <p className="text-[#4e5b4e] text-[15px] leading-relaxed text-center max-w-3xl mx-auto mb-8">
              With a poor credit score, getting a mortgage may come with challenges, but it&apos;s still
              possible. Some lenders offer loan programs specifically designed for borrowers with lower
              credit scores, including government-backed loans and alternative financing options.
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

        {/* How to get a mortgage */}
        <section className="w-full py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                How to Get a Mortgage with Poor Credit and Improve Your Financial Future
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                At first glance, having poor credit may seem like a major obstacle when applying for a
                mortgage. While it can impact the loan terms you qualify for, there are still advantages
                to securing a home loan—even with a lower credit score.
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
                Get Your Personalized Mortgage Offer
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
                Mortgage Programs Designed for Borrowers with Poor Credit
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Having poor credit doesn&apos;t mean you can&apos;t qualify for a home loan. Below are
                some of the best mortgage options available for borrowers with poor credit:
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
                Real Clients. Real Success. Homeownership Is Possible.
              </h2>
              <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
                At AZ Mortgage Brothers, we understand that buying a home with poor credit can feel
                overwhelming—but we&apos;ve helped many borrowers just like you secure the right
                mortgage.
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

        {/* Why choose us */}
        <section className="w-full bg-[#08271B] py-16 lg:py-24 text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-white text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Helping Borrowers with Poor Credit Secure the Right Mortgage
              </h2>
              <p className="text-[#c8c8b8] text-[15.5px] leading-relaxed">
                Getting a mortgage with poor credit can feel like a challenge, but at AZ Mortgage
                Brothers, we specialize in helping borrowers with less-than-perfect credit find real
                mortgage solutions.
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
                className="text-[#08271B] text-[28px] lg:text-[36px] font-normal leading-tight mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Frequently Asked Questions About Getting a Mortgage with Poor Credit
              </h2>
              <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
                We understand that applying for a mortgage with poor credit can raise a lot of
                questions. Below, we&apos;ve answered some of the most common ones.
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
              Let&apos;s Find the Right Mortgage Solution for You
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-8 max-w-2xl mx-auto">
              Buying a home with poor credit may seem challenging, but you don&apos;t have to navigate
              it alone. Whether you need guidance on FHA, VA, USDA loans, or alternative financing
              solutions, our team is here to help.
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
