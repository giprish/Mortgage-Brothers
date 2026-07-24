"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const QUIZ_SRC = "https://form.jotform.com/250305896122151";

function HomeIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M10 21v-6h4v6" />
    </svg>
  );
}

function BankIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 10h18" />
      <path d="M5 10v8M9 10v8M15 10v8M19 10v8" />
      <path d="M3 18h18" />
      <path d="M12 3 3 8h18L12 3Z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="9" cy="8" r="3.2" />
      <circle cx="17" cy="9.5" r="2.4" />
      <path d="M2.5 19c.6-3.2 3-5 6.5-5s5.9 1.8 6.5 5" />
      <path d="M14.2 14.2c2.2.3 3.9 1.5 4.8 3.8" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" />
      <path d="M15 10h4a1 1 0 0 1 1 1v10" />
      <path d="M8 8h3M8 12h3M8 16h3" />
      <path d="M3 21h18" />
    </svg>
  );
}

const loanScoreCards = [
  {
    title: "Conventional Loan",
    lines: ["620 minimum", "740+ for best rates"],
    Icon: HomeIcon,
  },
  {
    title: "FHA Loan",
    lines: ["580 minimum", "with 3.5% down"],
    Icon: BankIcon,
  },
  {
    title: "VA Loan",
    lines: ["No official minimum", "Most lenders prefer 620+"],
    Icon: UsersIcon,
  },
  {
    title: "Jumbo Loan",
    lines: ["Typically 700+", "Higher bar for larger loans"],
    Icon: BuildingIcon,
  },
];

const learnMore = [
  {
    label: "How to Get a Mortgage in Arizona with Fair or Improving Credit",
    href: "/how-to-get-a-mortgage-in-arizona-with-fair-or-improving-credit/",
  },
  {
    label: "Understanding Your Credit",
    href: "/arizona-understanding-your-credit/",
  },
];

export default function CreditScoreQuizPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero — matches live gradient + background image */}
        <section
          className="relative w-full text-white min-h-[420px] lg:min-h-[540px] flex items-center overflow-hidden bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(52, 69, 37) 0%, rgb(50, 94, 63) 20%, rgba(255, 255, 255, 0) 100%), url('/home/az-mortgage-brothers-background.jpg')",
            backgroundPosition: "0% 50%, 100% 50%",
            backgroundSize: "cover, cover",
            backgroundBlendMode: "normal, multiply",
          }}
        >
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-[120px] pb-14 lg:pt-[140px] lg:pb-20 relative z-10">
            <div className="max-w-[720px]">
              <h1 className="text-white text-[34px] sm:text-[44px] lg:text-[54px] font-bold leading-[1.12] mb-5 tracking-tight">
                Is Your Credit Score Good Enough to Buy a Home in Arizona?
              </h1>
              <h2 className="text-white/95 text-[18px] sm:text-[22px] lg:text-[26px] font-normal leading-[1.35]">
                Find out in minutes - no credit pull, no obligation
              </h2>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="w-full bg-white py-12 lg:py-14 border-b border-[#e8e0d0]/50">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-[#4e5b4e] text-[15.5px] lg:text-[16.5px] leading-[1.8]">
              Wondering if your credit score qualifies you for a mortgage? Answer a few quick
              questions below and we will give you a straight answer – no credit pull, no obligation,
              no spam. Our free credit evaluation helps Arizona homebuyers understand where they stand
              before applying for a home loan.
            </p>
          </div>
        </section>

        {/* JotForm quiz embed */}
        <section id="top" className="w-full bg-[#fcf9f3] py-10 lg:py-14 scroll-mt-[90px]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
            {isLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 min-h-[400px]">
                <div className="w-10 h-10 border-[3px] border-[#3fb364]/25 border-t-[#3fb364] rounded-full animate-spin" />
                <p className="text-[#4e5b4e] text-[14px] font-medium">Loading credit score quiz…</p>
              </div>
            )}
            <iframe
              src={QUIZ_SRC}
              title="Credit Score Quiz"
              className="w-full border-0 rounded-2xl bg-white shadow-sm"
              style={{ minHeight: "640px", height: "720px" }}
              onLoad={() => setIsLoading(false)}
              allow="clipboard-write"
            />
          </div>
        </section>

        {/* Score requirements */}
        <section className="w-full bg-[#f5f0e8] py-16 lg:py-20 border-y border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2
              className="text-[#08271B] text-[28px] lg:text-[36px] font-normal text-center mb-10"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Credit Score Do You Need to Buy a Home?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {loanScoreCards.map(({ title, lines, Icon }) => (
                <div
                  key={title}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 text-center shadow-sm"
                >
                  <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-[#e8f5e9] text-[#3fb364] flex items-center justify-center">
                    <Icon />
                  </div>
                  <h3 className="text-[#08271B] text-[17px] font-bold mb-3">{title}</h3>
                  {lines.map((line) => (
                    <p key={line} className="text-[#4e5b4e] text-[14px] leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <p className="text-[#4e5b4e] text-[15px] leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Not sure where you fall? Take the quiz above – our team will review your results and
              reach out with personalized guidance. All loans subject to underwriter approval.
            </p>

            <div className="text-center">
              <a
                href="#top"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Take the Credit Quiz
              </a>
            </div>
          </div>
        </section>

        {/* Learn more */}
        <section className="w-full py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h3
              className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Want to Learn More?
            </h3>
            <ul className="space-y-3">
              {learnMore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-[#3fb364] hover:text-[#2d8545] font-semibold text-[15px] transition-colors"
                  >
                    {item.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
