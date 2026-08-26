"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import FaqAccordion from "../component/FaqAccordion";
import CreditQuizCta from "../component/home/CreditQuizCta";
import GetInTouch from "../component/GetInTouch";
import LoanProgramHero from "../component/LoanProgramHero";
import { faqs as pageFaqs } from "./faqs";

const checkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand-green-accent"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const programsData = [
  {
    id: "conventional",
    number: "01",
    tabTitle: "Conventional",
    title: "Conventional Home Loans",
    description:
      "Ideal for borrowers with strong credit and stable income, conventional loans offer competitive rates and flexible terms.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brand-green-accent"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    bullets: [
      "Down payments as low as 3% for first-time buyers",
      "No upfront mortgage insurance required",
      "Options for single-family homes, condos, and investment properties",
    ],
    ctaText: "Learn More About Conventional Loans",
    href: "/conventional-home-loans-arizona/",
    bgColor: "bg-white",
    cardMeta: {
      downPayment: "As low as 3%",
      bestFor: "Buyers with strong credit who want the most flexible terms.",
    },
  },
  {
    id: "jumbo",
    number: "02",
    tabTitle: "Jumbo",
    title: "Jumbo Loans",
    description:
      "Designed for high-value properties exceeding conventional loan limits, jumbo loans offer competitive rates for luxury homes.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brand-green-accent"
      >
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="9" y1="22" x2="9" y2="16" />
        <line x1="15" y1="22" x2="15" y2="16" />
        <line x1="9" y1="16" x2="15" y2="16" />
        <path d="M9 6h6" />
        <path d="M9 10h6" />
      </svg>
    ),
    bullets: [
      "Loan amounts up to $5 million.",
      "Flexible terms, including fixed and adjustable rates.",
      "Higher credit score and cash reserve requirements.",
    ],
    ctaText: "Explore Jumbo Loan Options",
    href: "/jumbo-loans-arizona/",
    bgColor: "bg-brand-cream-light",
    cardMeta: {
      downPayment: "Varies by lender",
      bestFor: "Higher-value homes above conventional loan limits.",
    },
  },
  {
    id: "fha",
    number: "03",
    tabTitle: "FHA",
    title: "FHA Home Loans",
    description:
      "Perfect for first-time homebuyers or those with lower credit scores, FHA loans make homeownership more accessible.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brand-green-accent"
      >
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
      </svg>
    ),
    bullets: [
      "Down payments as low as 3.5%",
      "Flexible credit requirements (as low as 580)",
      "Government-backed for added security",
    ],
    ctaText: "Explore FHA Loan Options",
    href: "/fha-home-loans-arizona/",
    bgColor: "bg-white",
    cardMeta: {
      downPayment: "As low as 3.5%",
      bestFor: "First-time buyers or those rebuilding credit.",
    },
  },
  {
    id: "reverse",
    number: "04",
    tabTitle: "Reverse",
    title: "Reverse Mortgage",
    description:
      "Empowering homeowners aged 62+ to access their home equity without monthly mortgage payments.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brand-green-accent"
      >
        <path d="M21.5 2v6h-6" />
        <path d="M21.34 15.57a10 10 0 1 1-.57-8.38" />
      </svg>
    ),
    bullets: [
      "Funds can be used for any purpose (e.g., medical expenses, travel)",
      "No repayment required until the home is sold or vacated",
      "Stay in your home while improving cash flow during retirement",
    ],
    ctaText: "Discover Reverse Mortgage Benefits",
    href: "/reverse-mortgage-arizona/",
    bgColor: "bg-brand-cream-light",
    cardMeta: {
      downPayment: "N/A — tap existing equity",
      bestFor: "Homeowners 62+ seeking cash flow without selling.",
    },
  },
  {
    id: "refinance",
    number: "05",
    tabTitle: "Refinance",
    title: "Refinancing",
    description:
      "Save money by lowering your interest rate, shortening your loan term, or tapping into your home equity.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brand-green-accent"
      >
        <path d="M23 4v6h-6" />
        <path d="M1 20v-6h6" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
    bullets: [
      "Options for rate-and-term refinancing or cash-out refinancing",
      "Potential savings on monthly payments or total interest paid over time",
      "Streamlined processes available for existing FHA loans",
    ],
    ctaText: "See How Refinancing Can Help You Save",
    href: "/refinancing-arizona/",
    bgColor: "bg-white",
    cardMeta: {
      downPayment: "N/A — refinance of existing loan",
      bestFor: "Homeowners looking to improve their existing terms.",
    },
  },
  {
    id: "fha-streamline",
    number: "06",
    tabTitle: "FHA Streamline",
    title: "FHA Streamline Refinance",
    description:
      "A fast and cost-effective way for current FHA borrowers to lower their interest rates or monthly payments.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brand-green-accent"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    bullets: [
      "No appraisal or income verification required",
      "Reduced mortgage insurance premiums",
      "Simplified documentation process",
    ],
    ctaText: "Refinance with FHA Streamline",
    href: "/fha-streamline-refinance-arizona/",
    bgColor: "bg-brand-cream-light",
    cardMeta: {
      downPayment: "N/A — existing FHA refinance",
      bestFor: "Current FHA borrowers seeking a faster rate drop.",
    },
  },
  {
    id: "va",
    number: "07",
    tabTitle: "VA",
    title: "VA Loans",
    description:
      "Exclusive benefits for veterans, active-duty military members, and their families to achieve affordable homeownership.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brand-green-accent"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    bullets: [
      "Zero down payment required",
      "Competitive interest rates with no private mortgage insurance (PMI)",
      "Flexible credit requirements tailored to veterans' needs",
    ],
    ctaText: "Check Your VA Loan Eligibility",
    href: "/va-loans-arizona/",
    bgColor: "bg-white",
    cardMeta: {
      downPayment: "$0 down for eligible borrowers",
      bestFor: "Veterans, active-duty members, and eligible spouses.",
    },
  },
  {
    id: "private-money",
    number: "08",
    tabTitle: "Private Money",
    title: "Private Money Lender",
    description:
      "Fast, flexible financing solutions for unique situations like investment properties or quick purchases.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brand-green-accent"
      >
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    bullets: [
      "No income or employment verification required in many cases",
      "Ideal for short-term financing or properties needing significant repairs",
      "Rapid approval and funding (as fast as one week)",
    ],
    ctaText: "Learn About Private Money Lending",
    href: "/private-money-lender-arizona/",
    bgColor: "bg-brand-cream-light",
    cardMeta: {
      downPayment: "Flexible — deal-dependent",
      bestFor: "Investors and buyers needing speed or non-traditional financing.",
    },
  },
  {
    id: "first-time",
    number: "09",
    tabTitle: "First Time",
    title: "First Time Home Buyer",
    description:
      "Tailored solutions for new buyers to make the dream of homeownership a reality.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brand-green-accent"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    bullets: [
      "Low down payment options (as low as 3%)",
      "Assistance with closing costs available through certain programs",
      "Guidance through every step of the process",
    ],
    ctaText: "Start Your Journey as a First-Time Buyer",
    href: "/first-time-home-buyer-arizona-guide/",
    bgColor: "bg-white",
    cardMeta: {
      downPayment: "As low as 3%",
      bestFor: "First-time buyers who want guided options and support.",
    },
  },
  {
    id: "reverse-purchase",
    number: "10",
    tabTitle: "Reverse Purchase",
    title: "Reverse Mortgage for a Home Purchase",
    description:
      "A specialized reverse mortgage program that allows seniors to buy a new home without traditional monthly payments.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brand-green-accent"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    bullets: [
      "Perfect for downsizing or moving closer to family/support systems",
      "Requires a significant down payment (typically around 50%)",
      "Retain ownership of your new property while freeing up cash flow",
    ],
    ctaText: "Learn About Reverse Mortgage Purchases",
    href: "/reverse-mortgage-home-purchase-arizona/",
    bgColor: "bg-brand-cream-light",
    cardMeta: {
      downPayment: "Typically around 50%",
      bestFor: "Seniors buying a new home without monthly mortgage payments.",
    },
  },
];

const valueProps = [
  {
    title: "Expertise You Can Trust",
    description:
      "With over 20 years of experience in the Arizona mortgage market, our team of certified loan officers brings unparalleled knowledge to every client interaction. We've helped hundreds of homeowners achieve their financial goals through personalized loan solutions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "A Program for Every Need",
    description:
      "From conventional home loans to specialized reverse mortgages, we offer a diverse range of programs to suit various financial situations and homeownership goals.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Customer-Centric Approach",
    description:
      "We pride ourselves on our personalized service. Our loan officers take the time to understand your financial situation, explain all available options, and guide you through the entire process with transparency and care.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </svg>
    ),
  },
  {
    title: "Arizona Market Specialists",
    description:
      "As local experts, we have in-depth knowledge of Arizona's real estate market trends and regulations. This allows us to offer tailored advice and find loan programs that best fit the unique landscape of our state's housing market.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function MortgageLoanProgramsArizonaPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const targetId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 300);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-brand-cream-light overflow-x-hidden">
      <Navbar />
      <main className="flex-grow min-w-0">
        <LoanProgramHero
          title="Mortgage Loan Programs in Arizona"
          subtitle="Find the perfect financing solution for your unique needs"
          secondaryCtaLabel=""
          note="3 min / no credit impact"
        />

        <div>
          {programsData.map((prog) => (
            <section
              key={prog.id}
              id={prog.id}
              className={`w-full loan-section border-b border-[#e8e0d0]/40 scroll-mt-20 ${prog.bgColor}`}
            >
              <div className="max-w-5xl mx-auto min-w-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start lg:items-center">
                  <div className="lg:col-span-7 flex flex-col items-start w-full min-w-0">
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4 w-full min-w-0">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 bg-brand-green-deep text-brand-green-accent flex items-center justify-center rounded-xl flex-shrink-0 shadow-inner">
                        {prog.icon}
                      </div>
                      <div className="flex flex-col leading-tight min-w-0 flex-1">
                        <span className="text-brand-green-accent text-[10px] font-bold tracking-[0.15em] uppercase">
                          PROGRAM {prog.number}
                        </span>
                        <h2 className="text-brand-green-deep text-[22px] sm:text-section-title font-playfair font-normal break-words">
                          {prog.title}
                        </h2>
                      </div>
                    </div>
                    <p className="text-brand-text-muted text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.7] mb-5 w-full">
                      {prog.description}
                    </p>
                    <ul className="flex flex-col gap-2.5 mb-6 w-full">
                      {prog.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3 min-w-0">
                          <span className="flex-shrink-0 mt-0.5">{checkIcon}</span>
                          <span className="text-brand-text-dark text-[14px] lg:text-[15px] leading-relaxed min-w-0">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={prog.href}
                      prefetch={false}
                      className="inline-flex items-start gap-1.5 text-brand-green-accent hover:text-[#2d8a4a] text-[14px] lg:text-[15px] font-bold transition-colors group max-w-full text-left"
                    >
                      <span className="min-w-0 break-words">{prog.ctaText}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform"
                        aria-hidden
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                  <div className="lg:col-span-5 flex lg:justify-end justify-center w-full min-w-0">
                    <div className="w-full max-w-[420px] bg-brand-card-bg text-white rounded-2xl p-5 sm:p-6 lg:p-8 border border-white/5 shadow-xl flex flex-col justify-between lg:hover:-translate-y-1 lg:hover:scale-[1.02] lg:hover:shadow-2xl lg:hover:border-brand-green-accent/30 cursor-default transition-all duration-300">
                      <div>
                        <div className="mb-5 sm:mb-6">
                          <p className="text-brand-text-light-green text-[10px] font-bold tracking-[0.12em] uppercase mb-2">
                            DOWN PAYMENT
                          </p>
                          <h3 className="text-white text-[24px] sm:text-[28px] lg:text-[32px] font-semibold tracking-tight leading-tight break-words">
                            {prog.cardMeta.downPayment}
                          </h3>
                        </div>
                        <div className="w-full h-px bg-white/10 mb-5"></div>
                        <div>
                          <p className="text-brand-text-light-green text-[10px] font-bold tracking-[0.12em] uppercase mb-3">
                            BEST FOR
                          </p>
                          <p className="text-brand-text-light text-[14px] lg:text-[15px] leading-[1.6]">
                            {prog.cardMeta.bestFor}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Find Your Ideal Loan Program CTA */}
        <section className="w-full py-10 sm:py-12 lg:py-14 px-5 sm:px-6 bg-white border-b border-[#e8e0d0]/40">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href="/#get-pre-approved"
              className="inline-flex w-full sm:w-auto min-h-11 items-center justify-center bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] sm:text-[15px] font-semibold px-6 sm:px-8 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Find Your Ideal Loan Program
            </Link>
          </div>
        </section>

        {/* Tailored Loan Solutions — mobile-first */}
        <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-10 border-b border-[#e8e0d0]/40">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-start">
            {/* Left column: headline, copy, desktop CTA */}
            <div className="flex flex-col min-w-0">
              <h2 className="text-brand-green-deep text-[24px] sm:text-[32px] lg:text-[36px] font-playfair font-normal leading-[1.2] mb-3 sm:mb-4">
                Tailored Loan Solutions for Every Arizona Homeowner
              </h2>
              <div
                className="w-16 sm:w-20 h-[4px] bg-[#3fb364] rounded-full mb-5 sm:mb-6"
                aria-hidden
              />
              <div className="flex flex-col gap-4 sm:gap-5 text-brand-text-muted text-[14px] sm:text-[15px] leading-[1.7]">
                <p>
                  At Arizona Mortgage Brothers, we understand that every
                  homeowner&apos;s financial journey is unique. Our comprehensive{" "}
                  <strong className="text-brand-text-dark font-semibold">
                    suite of loan programs
                  </strong>{" "}
                  is designed to meet your specific needs, whether you&apos;re a
                  first-time buyer, looking to refinance, or exploring ways to
                  leverage your home equity in retirement. With a commitment to
                  excellence and a deep understanding of the{" "}
                  <strong className="text-brand-text-dark font-semibold">
                    Arizona real estate market
                  </strong>
                  , we&apos;re here to guide you through the complex world of home
                  financing with ease and confidence.
                </p>
                <p>
                  Our team of seasoned professionals is dedicated to providing
                  you with the most{" "}
                  <strong className="text-brand-text-dark font-semibold">
                    suitable loan options
                  </strong>
                  , ensuring that your homeownership dreams become a reality. We
                  believe that informed decisions lead to successful outcomes,
                  which is why we take pride in educating our clients about the
                  various loan programs available and their potential benefits.
                  From the sun-soaked streets of Phoenix to the scenic landscapes
                  of Tucson, we&apos;ve helped countless Arizonans find the{" "}
                  <strong className="text-brand-text-dark font-semibold">
                    perfect mortgage solution
                  </strong>{" "}
                  to match their lifestyle and financial goals.
                </p>
              </div>

              {/* Desktop CTA — sits with left column */}
              <Link
                href="/#get-pre-approved"
                className="hidden lg:inline-flex self-start mt-8 min-h-11 bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-semibold px-6 py-3.5 rounded-md transition-colors duration-200"
              >
                Get Your Custom Quote
              </Link>
            </div>

            {/* Right column: value props (stacks under copy on mobile) */}
            <ul className="flex flex-col gap-6 sm:gap-8 lg:gap-9 min-w-0 list-none p-0 m-0">
              {valueProps.map((item) => (
                <li key={item.title} className="flex items-start gap-3 sm:gap-4 min-w-0">
                  <div className="flex-shrink-0 text-[#3fb364] mt-0.5 [&_svg]:w-6 [&_svg]:h-6 sm:[&_svg]:w-7 sm:[&_svg]:h-7">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-brand-green-deep text-[15px] sm:text-[16px] font-bold leading-snug mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-brand-text-muted text-[13px] sm:text-[14px] leading-[1.65]">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Mobile CTA — after value props */}
            <div className="lg:hidden min-w-0">
              <Link
                href="/#get-pre-approved"
                className="inline-flex w-full sm:w-auto min-h-11 items-center justify-center bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-semibold px-6 py-3.5 rounded-md transition-colors duration-200"
              >
                Get Your Custom Quote
              </Link>
            </div>
          </div>
        </section>

        <CreditQuizCta
          title="Is Your Credit Score Good Enough to Buy a Home?"
          description="Be armed with the right knowledge when starting your home search. Find out how important your credit score is to your next home loan."
        />

        <section className="w-full py-12 sm:py-16 lg:py-20 bg-[#fcf9f3] border-t border-[#e8e0d0]/40">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10 min-w-0">
            <FaqAccordion title="Frequently Asked Questions" items={pageFaqs} />
          </div>
        </section>

        <GetInTouch theme="dark" />
      </main>
      <Footer />
    </div>
  );
}
