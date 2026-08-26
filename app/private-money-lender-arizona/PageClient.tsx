"use client";

import { faqs as pageFaqs } from "./faqs";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import StatsBanner from "../component/StatsBanner";
import LoanProgramHero from "../component/LoanProgramHero";
import HeroFeatureStrip from "../component/HeroFeatureStrip";

import CountyTestimonials, { type CountyTestimonial } from "../component/CountyTestimonials";
import GetInTouch from "../component/GetInTouch";

const featureStrip = [
  "Fast Funding for Unique Arizona Real Estate Deals",
  "Flexible Financing Beyond Traditional Mortgage Limits",
  "Leverage Multiple Properties with Customized Loan Terms",
];

const flexibleCards = [
  {
    title: "Fast and Flexible Approvals",
    text: "Skip the lengthy approval process of traditional loans. Our streamlined approach ensures quick decisions tailored to your unique situation.",
  },
  {
    title: "Customized Loan Terms",
    text: "Get financing that fits your needs. We offer personalized terms designed to meet your specific goals and property requirements.",
  },
  {
    title: "Non-Traditional Property Financing",
    text: "From investment properties to unique real estate, we specialize in financing options for properties that don’t fit the conventional mold.",
  },
  {
    title: "Competitive Interest Rates",
    text: "Enjoy rates that are designed to work for you, providing cost-effective solutions without sacrificing flexibility or speed.",
  },
];

const stats = [
  { value: "1.5 points", label: "Average Point Cost" },
  { value: "10", label: "Average Days to close" },
  { value: "$1,020,000", label: "Typical Private Loan Size" },
  { value: "68%", label: "Average Loan to Value" },
];

const privateMoneyCards = [
  {
    title: "Quick Approval Process",
    text: "Private money lenders can often approve loans within days, not weeks, allowing you to seize time-sensitive real estate opportunities quickly.",
  },
  {
    title: "Flexible Underwriting Criteria",
    text: "These loans focus more on the property’s value and your exit strategy rather than strict credit score or income requirements.",
  },
  {
    title: "Short-Term Financing Options",
    text: "Ideal for fix-and-flip projects or bridge loans, private money typically offers terms ranging from 6 to 24 months.",
  },
  {
    title: "Higher Loan-to-Value Ratios",
    text: "Private lenders may offer up to 75% LTV or more, depending on the property and your investment strategy.",
  },
  {
    title: "Non-Traditional Property Financing",
    text: "From distressed properties to land development, private money can fund projects that traditional lenders often avoid.",
  },
  {
    title: "Customized Loan Structures",
    text: "Tailor repayment terms, interest-only payments, or balloon payments to suit your specific project needs and cash flow.",
  },
];

const portfolioCards = [
  {
    title: "Flexible Income Verification",
    text: "Portfolio lenders often accept alternative income documentation, making it easier for self-employed or commission-based earners to qualify.",
  },
  {
    title: "Non-Conforming Property Types",
    text: "Finance unique properties that don’t meet conventional loan standards, such as mixed-use buildings or properties with acreage.",
  },
  {
    title: "Customized Loan Terms",
    text: "Enjoy flexible repayment options, including interest-only periods or longer loan terms tailored to your financial situation.",
  },
  {
    title: "Higher Loan Limits",
    text: "Access larger loan amounts that exceed conforming loan limits, ideal for high-value properties or luxury homes.",
  },
  {
    title: "Credit Flexibility",
    text: "Portfolio lenders may consider your overall financial picture rather than relying solely on credit scores for approval.",
  },
  {
    title: "No Mortgage Insurance",
    text: "Many portfolio loans don’t require private mortgage insurance, even with a down payment of less than 20%.",
  },
];

const qualifyingCards = [
  {
    title: "Credit Score",
    text: "Most lenders prefer a minimum credit score of 620, though some may consider lower scores if other factors are strong.",
  },
  {
    title: "Down Payment",
    text: "Expect to provide a down payment of 20% to 35% of the property’s value, depending on the loan-to-value (LTV) ratio.",
  },
  {
    title: "Debt-to-Income Ratio",
    text: "Lenders may allow higher DTI ratios, often up to 48%, especially if you have substantial assets or reserves.",
  },
  {
    title: "Property Valuation",
    text: "The property’s value and potential profitability are crucial factors, particularly for investment or renovation projects.",
  },
  {
    title: "Financial Reserves",
    text: "Demonstrating liquid assets or other financial reserves can strengthen your application and offset other risk factors.",
  },
  {
    title: "Investment Experience",
    text: "While not always required, a track record of successful real estate investments can improve your chances of approval.",
  },
];

const processSteps = [
  {
    title: "Initial Consultation",
    text: "We’ll discuss your financial goals, property details, and loan requirements to determine the best financing solution for your needs.",
  },
  {
    title: "Loan Application",
    text: "Complete our streamlined application process, providing necessary documentation to support your loan request.",
  },
  {
    title: "Property Evaluation",
    text: "Our team will assess the property’s value and potential, which is crucial for determining loan terms and approval.",
  },
  {
    title: "Underwriting Review",
    text: "We’ll analyze your application, financial situation, and property details to structure a loan that fits your unique circumstances.",
  },
  {
    title: "Loan Approval",
    text: "Once approved, we’ll present you with a detailed loan offer outlining the terms, interest rate, and repayment schedule.",
  },
  {
    title: "Closing and Funding",
    text: "After accepting the offer, we’ll guide you through the closing process and quickly disburse your funds, typically within 7-14 days.",
  },
];

const testimonials: CountyTestimonial[] = [
  {
    name: "Michael and Vory Flis",
    quote: "Thank you for your service & advice on the purchase of our 2ND home with your company. We would have been lost without your help & guidance. Thank you also for keeping in touch with us when we moved across this country of ours to Tennessee & Colorado over the last 2 years. Always available for our questions got to love that for customer service. No, matter how busy you were in your day you were always so attentive & kind with your assistance in the mortgage arena. We are grateful & thankful to know you are always available to answer any questions we may have concerning mortgages. We have & will continue to recommend you to family & friends as the very best Phoenix has to offer in mortgage financing. Thank you Eddie wish we had more people like you in the business world.",
    attribution: "Michael and Vory Flis, Phoenix, Arizona",
  },
  {
    name: "Michelle Blank",
    quote: "Eddie and his entire staff were wonderful. They helped us through the very intense process of purchasing a second home, while trying to sell the first home. Eddie was always EXTREMELY helpful, and very prompt to respond to any requests from either me, or the real estate agents to help make sure our mortgage went smoothly, and helped us to find and buy a new home in under three months!!! We couldn’t have completed this daunting task with the help given to us by Eddie. Also our mortgage was such a good rate, and closing fees were so fair that the closing agent actually commented on how wonderful our mortgage broker must be! I considered that a sign we had made a great decision to go with this company for our mortgage needs.",
    attribution: "Michelle Blank, Glendale, Arizona",
  },
  {
    name: "Bryan and Heather Collins",
    quote:
      "We can’t thank you enough for the hard work you did to get us approved and helping us close our vacation home. This is something we have been talking about for at least 5 years and became a reality after you were highly recommended to us by Carolin and Bob Benjamin. From the start, I felt well informed during the pre-approval phase and during the loan process. I have to admit, I was frustrated at times on how much information was needed to keep the loan in motion but was assured by you and Carolin that this is the way loans are handled these days. We have bought property and homes in the past and the loan process was different due to different economic time. Completely understandable. From the start of this process in April, everything has fallen into place like it was meant to be. I surely take that as a sign. Again, thanks for everything and I tell everybody that wants to buy a home in the Phoenix area to contact you for help. Take care and talk to you soon.",
    attribution: "Bryan and Heather Collins, San Tan Valley, Arizona",
  },
  {
    name: "Lynn Babinski",
    quote: "Very knowledgeable about foreclosures, short-sales, and new financing options. Upfront Eddie told me any concerns or hurdles we may face. It was a great experience.",
    attribution: "Lynn Babinski, Mesa, Arizona",
  },
  {
    name: "Matthew Anderson",
    quote: "Thanks for your prompt, professional guidance and service through multiple loans this year.",
    attribution: "Matthew Anderson, Goodyear, Arizona",
  },
];

const whyChoose = [
  {
    title: "Local Arizona Expertise",
    text: "As Arizona natives, we understand the local real estate market and can provide insights to help you make informed decisions.",
  },
  {
    title: "Diverse Loan Programs",
    text: "We offer a wide range of private money and portfolio loan options, including financing for primary residences, investment properties, and unique situations.",
  },
  {
    title: "Flexible Underwriting",
    text: "We consider your overall financial picture, not just credit scores, allowing for more flexibility in loan approvals.",
  },
  {
    title: "Efficient Closing Process",
    text: "Our streamlined approach enables us to close loans quickly, sometimes in as little as 7-14 days for urgent deals.",
  },
  {
    title: "Personalized Service",
    text: "We pride ourselves on our customer-centric approach, providing transparent communication and guidance throughout the loan process.",
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
  { label: "Refinancing", href: "/refinancing-arizona/" },
  { label: "Jumbo Loans", href: "/jumbo-loans-arizona/" },
  { label: "VA Loans", href: "/va-loans-arizona/" },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function PrivateMoneyLenderPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        <LoanProgramHero
          title="Private Money and Portfolio Loans in Arizona"
          subtitle="Fast approvals, competitive rates, and personalized service for unique borrowing needs"
          secondaryCtaLabel=""
          note="3 min / no credit impact"
        />

        <HeroFeatureStrip items={featureStrip} />

        {/* Flexible financing intro */}
        <section className="loan-section w-full">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto loan-section-heading">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Flexible Financing for Unique Borrowing Needs in Arizona
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75] mb-4">
                Private Money and Portfolio Loans offer tailored solutions for borrowers who need
                flexibility beyond traditional lending options.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                Whether you’re an investor, self-employed, or have a unique financial situation, these
                loans provide fast approvals, customized terms, and the ability to finance non-traditional
                properties. Discover how Mortgage Brothers LLC can help you achieve your financial goals
                with personalized service and local expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {flexibleCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm"
                >
                  <h3 className="text-[#08271B] text-[17px] font-bold mb-3 flex items-center gap-2">
                    <CheckIcon />
                    <span>{card.title}</span>
                  </h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed pl-7">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + Stats — equal band padding above button and below stats */}
        <section className="loan-cta-band bg-[#fcf9f3] !pb-0">
          <div className="mx-auto max-w-6xl text-center loan-block-gap">
            <Link
              href="#get-pre-approved"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            >
              Get Your Fast Financing Today
            </Link>
          </div>
          <StatsBanner sectionClassName="py-0 bg-transparent" stats={stats} />
        </section>

        {/* Private money loans */}
        <section className="w-full loan-section !pt-8 sm:!pt-10 lg:!pt-12">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto loan-section-heading">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[38px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Private Money Loans: Flexible Financing for Unique Real Estate Opportunities
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                Private Money Loans offer a versatile financing solution for real estate investors and
                borrowers with unique needs. These loans, provided by private individuals or
                organizations, offer greater flexibility and faster approval processes compared to
                traditional bank loans. Whether you’re looking to fund a fix-and-flip project, secure a
                bridge loan, or finance a property that doesn’t meet conventional lending criteria,
                private money loans can be an excellent option.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {privateMoneyCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm"
                >
                  <h3 className="text-[#08271B] text-[16px] font-bold mb-3">{card.title}</h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>

            <div className="loan-btn-wrap">
              <Link
                href="#get-pre-approved"
                className="inline-flex items-center justify-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3.5 leading-none rounded-full transition-all"
              >
                Get Your Private Money Loan Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Portfolio loans */}
        <section className="w-full bg-[#f5f0e8] loan-section border-y border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto loan-section-heading">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[38px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Portfolio Loans: Tailored Long-Term Financing Solutions
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                Portfolio Loans offer a unique approach to mortgage lending, providing long-term
                financing options for borrowers who may not fit traditional lending criteria. These
                loans are held by the lender rather than sold on the secondary market, allowing for more
                flexibility in underwriting and loan terms. Whether you’re self-employed, have a complex
                financial situation, or are investing in a unique property, portfolio loans can provide
                the customized solution you need.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm"
                >
                  <h3 className="text-[#08271B] text-[16px] font-bold mb-3 flex items-center gap-2">
                    <CheckIcon />
                    <span>{card.title}</span>
                  </h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed pl-7">{card.text}</p>
                </div>
              ))}
            </div>

            <div className="loan-btn-wrap">
              <Link
                href="#get-pre-approved"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Explore Your Portfolio Loan Options
              </Link>
            </div>
          </div>
        </section>

        {/* Qualifying */}
        <section className="loan-section w-full">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto loan-section-heading">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[38px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Qualifying for Private Money and Portfolio Loans
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                While private money and portfolio loans offer more flexibility than traditional mortgages,
                lenders still have certain criteria they consider when evaluating loan applications. These
                requirements can vary between lenders, but understanding the general expectations can help
                you prepare a stronger application.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {qualifyingCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm"
                >
                  <h3 className="text-[#08271B] text-[16px] font-bold mb-3 flex items-center gap-2">
                    <CheckIcon />
                    <span>{card.title}</span>
                  </h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed pl-7">{card.text}</p>
                </div>
              ))}
            </div>

            <div className="loan-btn-wrap">
              <Link
                href="#get-pre-approved"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Check Your Eligibility Now
              </Link>
            </div>
          </div>
        </section>

        {/* Credit quiz CTA */}
        <section className="loan-section w-full bg-[#08271B]">
          <div className="max-w-3xl mx-auto text-center">
            <h3
              className="text-white text-[24px] lg:text-[30px] font-normal mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Beyond Traditional Credit: Are You a Good Private Lending Candidate?
            </h3>
            <p className="text-[#c8c8b8] text-[15px] leading-relaxed mb-7">
              Private money lenders look at different factors than banks. Learn how your credit profile
              might be viewed by alternative financing sources.
            </p>
            <Link
              href="/credit-score-quiz/"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            >
              Take The Quiz
                </Link>
              </div>
        </section>

        {/* How to secure */}
        <section className="loan-section w-full">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto loan-section-heading">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[38px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                How to Secure Your Private Money or Portfolio Loan
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Obtaining a private money or portfolio loan is a straightforward process designed to get
                you the funding you need quickly and efficiently. Here’s what you can expect when working
                with Mortgage Brothers LLC:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, i) => (
                <div
                  key={step.title}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-[#e8f5e9] text-[#3fb364] font-bold text-[16px] flex items-center justify-center mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-[#08271B] text-[17px] font-bold mb-3">{step.title}</h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed">{step.text}</p>
                </div>
              ))}
              </div>

            <p className="text-[#4e5b4e] text-[15px] leading-relaxed text-center max-w-3xl mx-auto mt-10">
              Ready to start your journey towards flexible financing? Our expert loan officers are here to
              guide you through every step of the process.
            </p>

            <div className="loan-btn-wrap">
              <Link
                href="/loan-applications/"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Start Your Loan Application
              </Link>
            </div>
          </div>
        </section>

        <CountyTestimonials
          title="What Our Clients Say About Private Money and Portfolio Loans"
          description="Don’t just take our word for it. Hear from real Arizona borrowers who have successfully leveraged our private money and portfolio loan options to achieve their real estate goals. These testimonials showcase the diverse range of projects we’ve helped finance and the personalized service we provide to each client."
          testimonials={testimonials}
        />

        {/* Why choose */}
        <section className="loan-section w-full">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto loan-section-heading">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[36px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Why Choose Mortgage Brothers LLC for Your Private Money and Portfolio Loans
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                At Mortgage Brothers LLC, we specialize in providing tailored private money and portfolio
                loan solutions to meet your unique financing needs. Our team of experts is committed to
                delivering exceptional service and competitive rates for Arizona borrowers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoose.map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm"
                >
                  <h3 className="text-[#08271B] text-[16px] font-bold mb-3">{card.title}</h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>

            <div className="loan-btn-wrap">
              <div className="bg-[#3fb364] rounded-2xl p-8 lg:p-10 text-center max-w-3xl mx-auto">
                <p className="text-white text-[15.5px] leading-relaxed mb-4">
                  Experience the Mortgage Brothers LLC difference in your home buying journey. Let our
                  expertise guide you to the perfect loan and your dream home in Arizona.
                </p>
                <a
                  href="tel:+16025352171"
                  className="text-white text-[28px] lg:text-[32px] font-bold block mb-6 hover:opacity-90 transition-opacity"
                >
                  +1 (602) 535-2171
                </a>
                <Link
                  href="#get-pre-approved"
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#f5f0e8] text-[#08271B] text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                >
                  Get Your Free Mortgage Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="loan-section w-full bg-[#f5f0e8] border-y border-[#e8e0d0]/50">
          <div className="max-w-3xl mx-auto">
            <div className="loan-section-heading">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[36px] font-normal leading-tight mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                FAQs About Private Money and Portfolio Loans
              </h2>
              <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
                Here are some common questions our clients ask about private money and portfolio loans in
                Arizona:
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
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="text-[#4e5b4e] text-[15px] leading-relaxed text-center max-w-3xl mx-auto mt-10">
              Still have questions? Our loan experts are here to provide personalized answers and guide
              you through your financing options.
            </p>

            <div className="loan-btn-wrap">
              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 bg-[#052316] hover:bg-[#0a3d26] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Get Expert Answers Now
              </Link>
            </div>
          </div>
        </section>

        <GetInTouch
          theme="dark"
          title="Contact Mortgage Brothers LLC for Your Loan Needs"
          description=""
          showPreApproveCta
          ctaLabel="Start my preapproval"
        />

        {/* Explore solutions */}
        <section className="loan-section w-full bg-[#f5f0e8] border-t border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-[#08271B] text-[28px] lg:text-[34px] font-normal loan-section-heading"
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