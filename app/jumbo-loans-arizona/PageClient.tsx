"use client";

import { faqs as pageFaqs } from "./faqs";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import StatsBanner from "../component/StatsBanner";
import LoanProgramHero from "../component/LoanProgramHero";

const featureStrip = [
  "High-Value Financing Solutions",
  "Beyond Standard Loan Limits",
  "Premium Arizona Property Pathways",
];

const setsApart = [
  "Designed for financing properties above conventional loan limits",
  "Tailored for affluent buyers and high-value real estate markets",
  "Requires a more robust financial profile from borrowers",
];

const whyConsider = [
  "Access to premium properties in desirable Arizona locations",
  "Flexibility in financing larger or more unique homes",
  "Potential for competitive interest rates despite higher loan amounts",
];

const whyChooseCards = [
  {
    title: "Access to Luxury Real Estate",
    text: "Jumbo Loans allow you to purchase properties that exceed the conventional loan limit of $832,750, opening doors to Arizona's most desirable neighborhoods and luxury homes",
  },
  {
    title: "Competitive Interest Rates",
    text: "Despite their larger size, Jumbo Loans can offer surprisingly competitive interest rates, especially for well-qualified borrowers with strong financial profiles",
  },
  {
    title: "Flexible Financing Options",
    text: "With Jumbo Loans, you have more flexibility in terms of loan structure and repayment options, allowing you to tailor the loan to your specific financial situation.",
  },
  {
    title: "Single Loan Solution",
    text: "Instead of combining multiple loans, a Jumbo Loan provides a single, streamlined financing solution for high-value properties, simplifying your mortgage management",
  },
  {
    title: "Potential Tax Benefits",
    text: "Jumbo Loans may offer potential tax advantages, as the interest paid on larger mortgages can sometimes lead to more significant tax deductions. (Consult with a tax professional for personalized advice.)",
  },
  {
    title: "Opportunity for Investment",
    text: "For those looking to invest in high-end real estate, Jumbo Loans provide the necessary capital to acquire valuable properties with potential for appreciation in Arizona's dynamic market.",
  },
];

const understandingCards = [
  {
    title: "Definition and Threshold",
    text: "A Jumbo Loan is any mortgage that exceeds the conventional loan limit of $832,750 set by Fannie Mae and Freddie Mac. This threshold distinguishes Jumbo Loans from conforming loans and affects their terms and requirements.",
  },
  {
    title: "Higher Risk, Different Terms",
    text: "Lenders consider Jumbo Loans riskier due to their size. This increased risk often translates to higher interest rates and more stringent qualification criteria compared to conventional loans.",
  },
  {
    title: "Substantial Down Payment",
    text: "Expect to make a larger down payment with a Jumbo Loan. The minimum down payment is typically 10%, but this can vary based on market conditions and lender policies.",
  },
  {
    title: "Rigorous Documentation",
    text: "Be prepared to provide extensive documentation of your income, assets, and expenses. Lenders will scrutinize your financial situation in detail to ensure you can manage the substantial monthly payments.",
  },
  {
    title: "Credit Requirements",
    text: "Jumbo Loans usually require an above-average credit score and a positive borrowing history. Your credit profile plays a crucial role in the approval process.",
  },
  {
    title: "Property Appraisal",
    text: "For loan amounts exceeding $1 million, lenders may require two appraisals of the property. This extra step helps mitigate risk and ensures accurate property valuation.",
  },
];

const eligibilityCards = [
  {
    title: "Strong Credit Score",
    text: "To qualify for a Jumbo Loan, lenders typically require a credit score of 700 or higher. A strong credit profile demonstrates your ability to manage debt responsibly and is essential for approval.",
  },
  {
    title: "Minimum Down Payment",
    text: "A minimum down payment of 10% is required for most Jumbo Loans, though some lenders may ask for more depending on the loan amount and your financial profile.",
  },
  {
    title: "Debt-to-Income Ratio (DTI)",
    text: "Your DTI ratio should not exceed 43%, meaning your monthly debt obligations (including the new mortgage) must be no more than 43% of your gross monthly income.",
  },
  {
    title: "Cash Reserves",
    text: "Lenders often require borrowers to have 9–12 months of cash reserves to cover mortgage payments. This ensures you have financial stability beyond the initial transaction.",
  },
  {
    title: "Income Verification",
    text: "Provide comprehensive income documentation, including W-2 forms, tax returns, and recent pay stubs. Self-employed applicants may need to submit additional financial records.",
  },
  {
    title: "Property Valuation",
    text: "For loans over $1 million, two property appraisals may be required to ensure accurate valuation and mitigate lender risk.",
  },
];

const processSteps = [
  {
    title: "Prepare Your Financial Documents",
    text: "Before starting your application, gather all necessary financial documents, including tax returns, W-2 forms, and bank statements. Having these organized will make the application process smoother and demonstrate your financial stability.",
  },
  {
    title: "Consult with a Mortgage Expert",
    text: "Schedule a consultation with a mortgage expert who specializes in Jumbo Loans. They can provide valuable insights into the current market conditions and help you understand the specific requirements for your situation.",
  },
  {
    title: "Complete the Loan Application",
    text: "Fill out the loan application form accurately, providing detailed information about your financial history, employment, and assets. Be prepared to answer questions regarding your income sources and any additional properties you may own.",
  },
  {
    title: "Undergo Credit Evaluation",
    text: "Your credit score will be evaluated as part of the application process. Ensure that your credit report is in good standing, as lenders typically require a score of 700 or higher for Jumbo Loans.",
  },
  {
    title: "Property Appraisal",
    text: "If your loan amount exceeds $1 million, expect to undergo two property appraisals to ensure accurate valuation. This step helps mitigate risk for the lender and confirms that the property is worth the loan amount.",
  },
  {
    title: "Review Underwriting Conditions",
    text: "Once your application is submitted, it will go through underwriting, where an underwriter will assess your financial profile and documentation. Be prepared for potential follow-up questions or requests for additional information during this stage.",
  },
  {
    title: "Finalize Loan Terms",
    text: "If approved, review the loan terms carefully before signing. Understand your interest rate, monthly payments, and any fees associated with the loan to ensure it aligns with your financial goals.",
  },
  {
    title: "Close on Your New Home",
    text: "After finalizing the terms, you'll proceed to closing, where you'll sign all necessary documents and finalize the transaction. This marks the culmination of your Jumbo Loan journey and brings you one step closer to owning your dream home.",
  },
];

const marketInsights = [
  {
    title: "Rising Property Values",
    text: "Arizona's luxury real estate market has seen steady growth, increasing the demand for Jumbo Loans in popular areas like Scottsdale and Paradise Valley.",
  },
  {
    title: "Competitive Lending Landscape",
    text: "More lenders are offering Jumbo Loan products in Arizona, potentially leading to more competitive rates and terms for qualified borrowers.",
  },
  {
    title: "Seasonal Market Fluctuations",
    text: "Arizona's real estate market often experiences seasonal trends, with peak activity typically occurring in spring and fall. This can affect Jumbo Loan availability and terms.",
  },
  {
    title: "Economic Growth Impact",
    text: "Arizona's strong economic growth has led to an increase in high-income buyers, influencing the Jumbo Loan market and potentially affecting qualification criteria.",
  },
  {
    title: "New Construction Trends",
    text: "The rise in luxury new construction in Arizona is creating more opportunities for Jumbo Loans, particularly in master-planned communities.",
  },
  {
    title: "Tech Industry Influence",
    text: "The expanding tech industry in Arizona is attracting high-earning professionals, potentially increasing the pool of qualified Jumbo Loan applicants.",
  },
];

const reviews = [
  {
    text: "I recently had the pleasure and privilege of having Eddie Knoell as my loan officer for my new mortgage. It was a truly pleasant experience. Entering the office was a very warm and welcoming occurrence in itself. Eddie is the consummate professional and extremely knowledgeable in the lending arena. He is very organized, efficient, competent, and was an excellent communicator. He always made himself available to answer any and every question I had. Eddie's confidence and knowledge made the entire process extremely easy and enjoyable for me. I would highly recommend Eddie without reservation to anyone looking to finance their new home. I know from my experience he will do a top notch job.",
    author: "K. Zanzucchi, Phoenix, Arizona",
  },
  {
    text: "Eddie Knoell is the best Loan Officer we've ever dealt with, and we've worked with a few in our day. Both Ched and I feel like he was always there for us even on the weekend!! Eddie's best quality, is his ability to get the job done efficiently, really fast, and had our financial situation as his top priority! In an area where we didn't feel very knowledgeable, we both felt comfortable knowing we were in good hands with Eddie's ability to get us the best mortgage possible. Eddie, we also enjoyed the cookies and the newsletters! We think its awesome customer service. God bless you and your family.",
    author: "Ched and Nanette Salasek, Phoenix, Arizona",
  },
  {
    text: "Honest, effective and straight forward. P.S. the brownies were very good.",
    author: "Paul Giles, Scottsdale, Arizona",
  },
  {
    text: "Eddie Knoell is the best lender I've ever worked with. He was prompt, courteous and did what he promised, on or before the promised date. Eddie offered an L.S.R. without being asked. Eddie was in contact with me often throughout the entire transaction. As a real estate agent the entire process was a breeze. No calls had to be placed to Eddie to find out what was going on. I'd highly recommend using Eddie Knoell for all your clients lending needs. He makes an agents life stress free.",
    author: "Judy Gibson, Mesa, Arizona",
  },
  {
    text: "We have bought & sold a total of 5 homes and we have refinanced at least 3 times and Eddie Knoell is our mortgage guy for life. Eddie is honest, timely, and available and come highly recommended! Eddie makes a process that is often stressful and laborious, positive and a learning experience. He has expressed support when we needed reassurance, giving us peace of mind when it was greatly needed!!! His people skills are phenomenal, his insightfulness is excellent! You get the whole package with Eddie Knoell; Intellectual, Psychological and Emotional Intelligence!!! I would and have recommended him to my family, that's how much we trust Eddie!",
    author: "Liza Garcia, Scottsdale, Arizona",
  },
];

const whyMb = [
  {
    title: "Local Arizona Expertise",
    text: "Our deep understanding of the Arizona real estate market provides valuable insights for your high-value property purchase.",
  },
  {
    title: "Competitive Rates",
    text: "We leverage our extensive lender network to secure the best possible rates for your Jumbo Loan.",
  },
  {
    title: "Streamlined Process",
    text: "Our efficient, technology-driven approach simplifies the complex Jumbo Loan application process.",
  },
  {
    title: "Personalized Guidance",
    text: "We provide tailored advice and support throughout your Jumbo Loan journey, ensuring your unique needs are met.",
  },
];

const faqs = pageFaqs;

const loanSolutions = [
  { label: "Conventional Home Loans", href: "/conventional-home-loans-arizona/" },
  { label: "Conventional vs FHA Loans", href: "/conventional-vs-fha-loans-arizona/" },
  { label: "FHA Home Loans", href: "/fha-home-loans-arizona/" },
  { label: "FHA Streamline Refinance", href: "/fha-streamline-refinance-arizona/" },
  { label: "First Time Home Buyer", href: "/first-time-home-buyer-arizona-guide/" },
  { label: "Reverse Mortgage", href: "/reverse-mortgage-arizona/" },
  { label: "Reverse Mortgage for a Home Purchase", href: "/reverse-mortgage-home-purchase-arizona/" },
  { label: "Private Money Lender", href: "/private-money-lender-arizona/" },
  { label: "Refinancing", href: "/refinancing-arizona/" },
  { label: "VA Loans", href: "/va-loans-arizona/" },
];

const stats = [
  { value: "$832,750", label: "Conforming Loan Limit" },
  { value: "$4,000,000", label: "Max Jumbo Loan Amount" },
  { value: "10%", label: "Minimum Down Payment" },
  { value: "700+", label: "Minimum Credit Score" },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function JumboLoansPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        <LoanProgramHero
          title="Jumbo Loans in Arizona"
          subtitle="Unlock Your Dream Home with Our Jumbo Loan Solutions"
        />

        {/* Feature strip */}
        <section className="w-full bg-[#eeeff4] border-b border-[#e0e2e8] loan-strip">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureStrip.map((title) => (
              <div key={title} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <CheckIcon />
                </div>
                <h3 className="text-[#333333] text-[16px] font-semibold leading-snug">{title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Intro */}
        <section className="w-full loan-section">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
              <div>
                <h2
                  className="text-[#08271B] text-[28px] lg:text-[38px] font-normal leading-tight mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Jumbo Loans: Financing Your Dream Home in Arizona
                </h2>
                <div className="w-16 h-1 bg-[#3fb364] mb-6" />
                <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75] mb-4">
                  Jumbo Loans offer a unique opportunity for homebuyers looking to purchase high-value properties in Arizona.
                </p>
                <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                  These loans exceed the conventional loan limit of $832,750, opening doors to luxurious homes and prime real estate that might otherwise be out of reach.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-[#08271B] text-[17px] font-bold mb-3">What Sets Jumbo Loans Apart?</h3>
                  <ul className="space-y-2.5">
                    {setsApart.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[#4e5b4e] text-[14.5px] leading-relaxed">
                        <CheckIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-[#08271B] text-[17px] font-bold mb-3">Why Consider a Jumbo Loan?</h3>
                  <ul className="space-y-2.5">
                    {whyConsider.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[#4e5b4e] text-[14.5px] leading-relaxed">
                        <CheckIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="loan-cta-band bg-[#fcf9f3] !pb-0">
          <div className="mx-auto max-w-6xl text-center loan-block-gap">
            <Link
              href="/#get-pre-approved"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            >
              Get Your Jumbo Loan Quote Now
            </Link>
          </div>
          <StatsBanner sectionClassName="py-0 bg-transparent" stats={stats} />
        </section>

        {/* Why choose a jumbo loan */}
        <section className="w-full loan-section !pt-8 sm:!pt-10 lg:!pt-12">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[38px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Why Choose a Jumbo Loan?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                Jumbo Loans offer unique advantages for homebuyers looking to finance high-value properties in Arizona. These loans provide flexibility and opportunities that conventional loans simply can&apos;t match. Here&apos;s why a Jumbo Loan might be the right choice for your dream home:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseCards.map((card) => (
                <div key={card.title} className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-[#08271B] text-[16px] font-bold mb-3 flex items-start gap-2">
                    <CheckIcon />
                    <span>{card.title}</span>
                  </h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed pl-7">{card.text}</p>
                </div>
              ))}
            </div>
            <div className="loan-btn-wrap">
              <Link
                href="/#get-pre-approved"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Get Your Free Home Buying Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Understanding */}
        <section className="w-full bg-[#f5f0e8] loan-section border-y border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[38px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Understanding Jumbo Loans in Arizona
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                Jumbo Loans are a unique financial product designed for high-value properties. As you navigate the luxury real estate market in Arizona, it&apos;s crucial to understand the key aspects of these loans. Here&apos;s what you need to know:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {understandingCards.map((card) => (
                <div key={card.title} className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-[#08271B] text-[16px] font-bold mb-3 flex items-start gap-2">
                    <CheckIcon />
                    <span>{card.title}</span>
                  </h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed pl-7">{card.text}</p>
                </div>
              ))}
            </div>
            <p className="text-[#4e5b4e] text-[15px] leading-relaxed text-center max-w-3xl mx-auto">
              Remember, while Jumbo Loans come with additional complexities, they offer a pathway to financing your dream luxury home in Arizona. Our team is here to guide you through every step of the process.
            </p>
            <div className="loan-btn-wrap">
              <Link
                href="/#get-pre-approved"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Get Expert Jumbo Loan Guidance
              </Link>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="w-full loan-section">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[38px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Are You Eligible for a Jumbo Loan in Arizona?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                Qualifying for a Jumbo Loan requires meeting higher standards compared to conventional loans. These stricter requirements ensure that borrowers are financially prepared for the larger loan amounts and monthly payments associated with high-value properties. Below are the key eligibility criteria to consider:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {eligibilityCards.map((card) => (
                <div key={card.title} className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-[#08271B] text-[16px] font-bold mb-3 flex items-start gap-2">
                    <CheckIcon />
                    <span>{card.title}</span>
                  </h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed pl-7">{card.text}</p>
                </div>
              ))}
            </div>
            <div className="loan-btn-wrap">
              <Link
                href="/#get-pre-approved"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Get Your Free Jumbo Loan Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Credit quiz CTA */}
        <section className="w-full bg-[#08271B] loan-section">
          <div className="max-w-3xl mx-auto text-center">
            <h3
              className="text-white text-[24px] lg:text-[30px] font-normal mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Is Your Credit Strong Enough for a Jumbo Loan?
            </h3>
            <p className="text-[#c8c8b8] text-[15px] leading-relaxed mb-7">
              Jumbo loans typically require excellent credit. Find out if your credit score meets the higher standards needed for larger mortgage amounts.
            </p>
            <Link
              href="/credit-score-quiz/"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            >
              Take The Quiz
            </Link>
          </div>
        </section>

        {/* Application process */}
        <section className="w-full loan-section">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[38px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Application Process for Jumbo Loans
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Navigating the application process for a Jumbo Loan can seem daunting due to the higher requirements and complexities involved. However, understanding each step can help streamline your experience and increase your chances of approval. Here&apos;s a breakdown of the application process:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <div key={step.title} className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#e8f5e9] text-[#3fb364] font-bold text-[16px] flex items-center justify-center mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-[#08271B] text-[16px] font-bold mb-3">{step.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
            <div className="loan-btn-wrap">
              <div className="bg-[#3fb364] rounded-2xl p-8 lg:p-10 text-center max-w-3xl mx-auto">
                <p className="text-white text-[15.5px] leading-relaxed mb-6">
                  By following these steps and staying organized throughout the process, you can navigate the complexities of applying for a Jumbo Loan with confidence. Our team is here to assist you every step of the way!
                </p>
                <Link
                  href="/#get-pre-approved"
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#f5f0e8] text-[#08271B] text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                >
                  Schedule Your Free Jumbo Loan Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Market insights */}
        <section className="w-full bg-[#f5f0e8] loan-section border-y border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[38px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Arizona Jumbo Loan Market Insights
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                Understanding the current Arizona real estate market is crucial when considering a Jumbo Loan. Here are some key insights specific to the Arizona market:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketInsights.map((card) => (
                <div key={card.title} className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-[#08271B] text-[16px] font-bold mb-3">{card.title}</h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
            <div className="loan-btn-wrap">
              <Link
                href="/#get-pre-approved"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Discover Your Jumbo Loan Options Today
              </Link>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="w-full loan-section">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[36px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What Our Clients Say About Jumbo Loans
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                At Mortgage Brothers LLC, we take pride in helping our clients achieve their dreams of owning high-value properties through Jumbo Loans. But don&apos;t just take our word for it - hear from some of the satisfied homeowners we&apos;ve had the pleasure of assisting. These testimonials reflect our commitment to providing expert guidance, personalized service, and successful outcomes in the complex world of Jumbo Loans.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((rev) => (
                <div
                  key={rev.author}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm flex flex-col"
                >
                  <div className="flex gap-0.5 mb-3" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f5c518" aria-hidden>
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#3a443a] text-[14px] leading-relaxed flex-1 mb-4">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                  <p className="text-[#08271B] text-[13.5px] font-bold">{rev.author}</p>
                </div>
              ))}
            </div>
            <div className="loan-btn-wrap">
              <Link
                href="/client-mortgage-reviews/"
                className="inline-flex items-center gap-2 text-[#08271B] hover:text-[#3fb364] font-semibold text-[15px] transition-colors"
              >
                Explore All Client Testimonials
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Why MB */}
        <section className="w-full bg-[#f5f0e8] loan-section border-y border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[36px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Mortgage Brothers LLC: Your Jumbo Loan Experts
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                At Mortgage Brothers LLC, we specialize in Jumbo Loans, offering unparalleled service and expertise. Here&apos;s what sets us apart:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyMb.map((card) => (
                <div key={card.title} className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-[#08271B] text-[16px] font-bold mb-3 flex items-start gap-2">
                    <CheckIcon />
                    <span>{card.title}</span>
                  </h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed pl-7">{card.text}</p>
                </div>
              ))}
            </div>
            <div className="loan-btn-wrap">
              <div className="bg-[#3fb364] rounded-2xl p-8 lg:p-10 text-center max-w-3xl mx-auto">
                <p className="text-white text-[15.5px] leading-relaxed mb-4">
                  Experience the Mortgage Brothers LLC difference in your home buying journey. Let our expertise guide you to the perfect loan and your dream home in Arizona.
                </p>
                <a href="tel:+16025352171" className="text-white text-[28px] lg:text-[32px] font-bold block mb-6 hover:opacity-90 transition-opacity">
                  (602) 535-2171
                </a>
                <Link
                  href="/#get-pre-approved"
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#f5f0e8] text-[#08271B] text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                >
                  Get Your Free Mortgage Consultation
                </Link>
              </div>
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
                Frequently Asked Questions about Jumbo Loans
              </h2>
              <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
                Navigating the world of Jumbo Loans can raise many questions, especially for first-time buyers or those unfamiliar with high-value financing. Below are some of the most common inquiries we receive regarding Jumbo Loans in Arizona, along with clear answers to help you understand this unique mortgage option better.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, index) => {
                const open = openFaq === index;
                return (
                  <div key={faq.q} className="bg-white border border-[#e8e0d0]/70 rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : index)}
                      className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 cursor-pointer"
                      aria-expanded={open}
                    >
                      <span className="text-[#08271B] text-[15px] font-semibold leading-snug">{faq.q}</span>
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
            <p className="text-[#4e5b4e] text-[15px] leading-relaxed text-center">
              If you have more questions or need personalized assistance with your Jumbo Loan application, feel free to reach out to our team at Mortgage Brothers LLC!
            </p>
            <div className="loan-btn-wrap">
              <Link
                href="/#get-pre-approved"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Get Your Jumbo Loan Quote Now
              </Link>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="w-full bg-[#f5f0e8] loan-section border-y border-[#e8e0d0]/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-[#08271B] text-[28px] lg:text-[36px] font-normal leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get Expert Jumbo Loan Guidance Today
            </h2>
            <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-8 max-w-3xl mx-auto">
              Ready to take the next step in securing your dream home with a Jumbo Loan? Our team of experienced mortgage professionals at Mortgage Brothers LLC is here to guide you through every aspect of the Jumbo Loan process. Whether you have questions about eligibility, documentation requirements, or current market conditions, we&apos;re committed to providing you with personalized assistance and expert advice. Don&apos;t navigate the complexities of Jumbo Loans alone. Reach out to us today for a free consultation and let us help you turn your high-value property dreams into reality.
            </p>
            <Link
              href="/#get-pre-approved"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all"
            >
              Start my preapproval
            </Link>
            <p className="text-[#8a958a] text-[12px] leading-relaxed mt-8 max-w-2xl mx-auto">
              Mortgage Brothers NMLS 1007154, NMLS #210917 and #1618695. Equal housing lender.
            </p>
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