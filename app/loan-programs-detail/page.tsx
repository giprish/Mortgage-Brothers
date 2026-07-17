"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const programs = [
  {
    id: "conventional",
    title: "Conventional Home Loans",
    description: "Ideal for borrowers with strong credit and stable income, conventional loans offer competitive rates and flexible terms.",
    bullets: [
      "Down payments as low as 3% for first-time buyers",
      "No upfront mortgage insurance required",
      "Options for single-family homes, condos, and investment properties"
    ],
    link: "/mortgage-basics/conventional-loan-basics",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    id: "jumbo",
    title: "Jumbo Loans",
    description: "Designed for high-value properties exceeding conventional loan limits, jumbo loans offer competitive rates for luxury homes.",
    bullets: [
      "Loan amounts up to $5 million",
      "Flexible terms, including fixed and adjustable rates",
      "Higher credit score and cash reserve requirements"
    ],
    link: "/loan-programs#jumbo",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: "fha",
    title: "FHA Home Loans",
    description: "Perfect for first-time homebuyers or those with lower credit scores, FHA loans make homeownership more accessible.",
    bullets: [
      "Down payments as low as 3.5%",
      "Flexible credit requirements (as low as 580)",
      "Government-backed for added security"
    ],
    link: "/loan-programs/fha",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m-5-2a2 2 0 012 2m-5-2a2 2 0 012 2m-5-2a2 2 0 012 2m-5-2a2 2 0 012 2m-5 12h14a2 2 0 002-2V9a2 2 0 00-2-2h-14a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: "reverse",
    title: "Reverse Mortgage",
    description: "Empowering homeowners aged 62+ to access their home equity without monthly mortgage payments.",
    bullets: [
      "Funds can be used for any purpose",
      "No repayment required until the home is sold or vacated",
      "Stay in your home while improving cash flow in retirement"
    ],
    link: "/loan-programs#refinance",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    )
  },
  {
    id: "refinancing",
    title: "Refinancing",
    description: "Save money by lowering your interest rate, shortening your loan term, or tapping into your home equity.",
    bullets: [
      "Rate-and-term or cash-out refinancing options",
      "Potential savings on monthly payments or total interest",
      "Streamlined processes available for existing FHA loans"
    ],
    link: "/loan-programs#refinance",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89H18v3z" />
      </svg>
    )
  },
  {
    id: "fha-streamline",
    title: "FHA Streamline Refinance",
    description: "A fast and cost-effective way for current FHA borrowers to lower their interest rates or monthly payments.",
    bullets: [
      "No appraisal or income verification required",
      "Reduced mortgage insurance premiums",
      "Simplified documentation process"
    ],
    link: "/loan-programs/fha",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: "va",
    title: "VA Loans",
    description: "Exclusive benefits for veterans, active-duty military members, and their families to achieve affordable homeownership.",
    bullets: [
      "Zero down payment required",
      "Competitive rates with no private mortgage insurance (PMI)",
      "Flexible credit requirements tailored to veterans"
    ],
    link: "/loan-programs#va",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: "private-money",
    title: "Private Money Lender",
    description: "Fast, flexible financing solutions for unique situations like investment properties or quick purchases.",
    bullets: [
      "No income or employment verification required in many cases",
      "Ideal for short-term financing or properties needing repairs",
      "Rapid approval and funding, as fast as one week"
    ],
    link: "/loan-programs#jumbo",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: "first-time",
    title: "First Time Home Buyer",
    description: "Tailored solutions for new buyers to make the dream of homeownership a reality.",
    bullets: [
      "Low down payment options, as low as 3%",
      "Assistance with closing costs available through certain programs",
      "Guidance through every step of the process"
    ],
    link: "/loan-programs/fha",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    id: "reverse-purchase",
    title: "Reverse Mortgage for a Home Purchase",
    description: "A specialized reverse mortgage program that allows seniors to buy a new home without traditional monthly payments.",
    bullets: [
      "Perfect for downsizing or moving closer to family",
      "Requires a significant down payment, typically around 50%",
      "Retain ownership while freeing up cash flow"
    ],
    link: "/loan-programs#refinance",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default function LoanProgramsDetailPage() {
  
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#052316] text-white pt-[92px] pb-20 px-6 lg:px-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full border border-white/5 pointer-events-none -mr-16 -mt-16"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
              LOAN PROGRAMS
            </span>
            
            <h1 className="text-white text-[38px] lg:text-[54px] font-playfair font-normal leading-[1.15] max-w-4xl mx-auto mb-6">
              Find the perfect financing solution for your unique needs.
            </h1>
            
            <p className="text-[#c8c8b8] text-[15px] lg:text-[16.5px] leading-relaxed max-w-2xl mx-auto mb-10">
              Ten programs, one broker shopping the right ones for you. Jump to any program below for the details.
            </p>

            {/* Jump links pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
              {programs.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleScrollTo(p.id)}
                  className="bg-white border border-white hover:bg-[#faf7f0] text-[#052316] text-[12.5px] font-medium px-5 py-2 rounded-full transition-all shadow-sm hover:shadow cursor-pointer"
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits cards row */}
        <section className="py-16 px-6 lg:px-10 bg-white border-b border-[#e8e0d0]/40">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-[#fcf9f3] rounded-2xl p-6 border border-[#e8e0d0]/40 flex flex-col items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-[#052316] text-[15px] font-bold">Expertise You Can Trust</h3>
              <p className="text-[#4e5b4e] text-[12.5px] leading-relaxed">
                With over 20 years in the Arizona mortgage market, our certified loan officers bring unparalleled knowledge to every client interaction.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#fcf9f3] rounded-2xl p-6 border border-[#e8e0d0]/40 flex flex-col items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-[#052316] text-[15px] font-bold">A Program for Every Need</h3>
              <p className="text-[#4e5b4e] text-[12.5px] leading-relaxed">
                From conventional home loans to specialized reverse mortgages, we offer a diverse range of programs to suit every situation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fcf9f3] rounded-2xl p-6 border border-[#e8e0d0]/40 flex flex-col items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-[#052316] text-[15px] font-bold">Customer-Centric Approach</h3>
              <p className="text-[#4e5b4e] text-[12.5px] leading-relaxed">
                Our loan officers take time to understand your situation, explain your options, and guide you through the process with transparency.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#fcf9f3] rounded-2xl p-6 border border-[#e8e0d0]/40 flex flex-col items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-[#052316] text-[15px] font-bold">Arizona Market Specialists</h3>
              <p className="text-[#4e5b4e] text-[12.5px] leading-relaxed">
                As local experts, we have in-depth knowledge of Arizona&apos;s real estate market to find the loan program that fits our state&apos;s housing market.
              </p>
            </div>
          </div>
        </section>

        {/* Programs List */}
        <section className="py-20 px-6 lg:px-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#052316] text-[30px] lg:text-[36px] font-playfair font-normal mb-3">
              Find the right loan for your needs
            </h2>
            <p className="text-[#4e5b4e] text-[14px] leading-relaxed max-w-xl mx-auto">
              Whether you&apos;re purchasing your first home, upgrading, or refinancing to save money, explore our programs below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((p) => (
              <div
                key={p.id}
                id={p.id}
                className="bg-[#faf7f0] border border-[#e8e0d0]/60 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-brand-green-accent/20 transition-all duration-300 scroll-mt-24"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#052316] text-[#3fb364] flex items-center justify-center">
                      {p.icon}
                    </div>
                    <h3 className="text-[#052316] text-[18px] font-bold">
                      {p.title}
                    </h3>
                  </div>

                  <p className="text-[#4e5b4e] text-[13.5px] leading-[1.65] mb-6">
                    {p.description}
                  </p>

                  <ul className="flex flex-col gap-3 mb-8 text-[13px] text-[#4e5b4e]">
                    {p.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#3fb364] font-bold mt-0.5">✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={p.link}
                  className="text-[#3fb364] hover:text-[#2d5a2d] text-[13.5px] font-bold transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Credit Quiz Banner */}
        <section className="py-8 px-6 lg:px-10 max-w-5xl mx-auto">
          <div className="bg-[#faf7f0] border border-[#e8e0d0]/60 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-sm">
            <div>
              <h3 className="text-[#052316] text-[17px] font-bold mb-1">
                Is your credit score good enough to buy a home?
              </h3>
              <p className="text-[#4e5b4e] text-[13px]">
                Find out how important your credit score is to your next home loan.
              </p>
            </div>
            <Link
              href="/#get-pre-approved"
              className="bg-[#052316] hover:bg-[#103020] text-white text-[13px] font-bold px-5 py-3 rounded-xl transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              Take The Quiz &rarr;
            </Link>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="bg-[#052316] text-white py-20 text-center border-t border-white/10 mt-12">
          <div className="max-w-2xl mx-auto px-6 flex flex-col items-center">
            <span className="text-[#b89a5a] text-[10px] font-bold tracking-[0.15em] uppercase block mb-3">
              NOT SURE WHICH FITS?
            </span>
            <h2 className="text-white text-[30px] lg:text-[36px] font-playfair font-normal leading-tight mb-3">
              We&apos;ll help you pick the right one.
            </h2>
            <p className="text-[#c8c8b8] text-[14.5px] leading-[1.65] max-w-lg mb-8">
              Tell us about your situation and we&apos;ll match you to the program that makes the most sense.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#get-pre-approved"
                className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-semibold px-6 py-3.5 rounded-full transition-all duration-200"
              >
                Get Pre-Approved &rarr;
              </Link>
              <Link
                href="/contact-us"
                className="border border-white/20 hover:border-white text-white text-[14px] font-semibold px-6 py-3.5 rounded-full transition-all duration-200"
              >
                Talk to a Broker
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
