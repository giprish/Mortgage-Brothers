"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const programsData = [
  {
    id: "conventional",
    number: "01",
    title: "Conventional",
    description:
      "Backed by private lenders rather than the government, conventional loans offer competitive rates and flexible terms for buyers with solid credit.",
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
      "Good to excellent credit typically required",
      "Stable income and employment history",
      "Down payment as low as 3% for qualified buyers",
    ],
    ctaText: "Talk About Conventional",
    bgColor: "bg-white",
    cardMeta: {
      downPayment: "As low as 3%",
      bestFor: "Buyers with strong credit who want the most flexible terms.",
    },
  },
  {
    id: "fha",
    number: "02",
    title: "FHA",
    description:
      "Government-backed and designed for accessibility, FHA loans are a common path for first-time buyers and anyone rebuilding their credit.",
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
      "Credit scores from the mid-500s considered",
      "Down payment as low as 3.5%",
      "Available for primary residences",
    ],
    ctaText: "Talk About FHA",
    bgColor: "bg-brand-cream-light",
    cardMeta: {
      downPayment: "As low as 3.5%",
      bestFor: "First-time buyers or those rebuilding credit.",
    },
  },
  {
    id: "va",
    number: "03",
    title: "VA",
    description:
      "A benefit earned through service - VA loans let eligible veterans and active-duty members buy with no down payment and no monthly mortgage insurance.",
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
      "Eligible veterans, active-duty members, and some surviving spouses",
      "Valid Certificate of Eligibility required",
      "No down payment for most eligible borrowers",
    ],
    ctaText: "Talk About VA",
    bgColor: "bg-white",
    cardMeta: {
      downPayment: "$0 down for eligible borrowers",
      bestFor: "Those who have served - thank you.",
    },
  },
  {
    id: "usda",
    number: "04",
    title: "USDA",
    description:
      "For homes in qualifying rural and suburban parts of Arizona, USDA loans offer 100% financing to income-eligible buyers.",
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
        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    bullets: [
      "Property must be in an eligible area",
      "Household income within program limits",
      "No down payment required",
    ],
    ctaText: "Talk About USDA",
    bgColor: "bg-brand-cream-light",
    cardMeta: {
      downPayment: "$0 down for eligible properties",
      bestFor: "Buyers in qualifying Arizona communities outside the urban core.",
    },
  },
  {
    id: "jumbo",
    number: "05",
    title: "Jumbo",
    description:
      "When a loan amount exceeds the conforming limit for your county, a jumbo loan follows its own guidelines — and we work with lenders who specialize in them.",
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
      "Loan amount above the conforming limit",
      "Strong credit and larger reserves typically required",
      "Down payment requirements vary by lender",
    ],
    ctaText: "Talk About Jumbo",
    bgColor: "bg-white",
    cardMeta: {
      downPayment: "Varies by lender",
      bestFor: "Higher-value homes above conventional loan limits.",
    },
  },
  {
    id: "refinance",
    number: "06",
    title: "Refinance",
    description:
      "Whether you want a lower rate, a shorter term, or cash from your equity, refinancing replaces your current loan with one that fits where you are now.",
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
      "Lower your rate or shorten your term",
      "Cash-out options to tap home equity",
      "Available on most existing loan types",
    ],
    ctaText: "Talk About Refinance",
    bgColor: "bg-brand-cream-light",
    cardMeta: {
      downPayment: "N/A — refinance of existing loan",
      bestFor: "Homeowners looking to improve their existing terms.",
    },
  },
];

export default function LoanProgramsPage() {
  const [activeTab, setActiveTab] = useState("conventional");
  const [clickedTab, setClickedTab] = useState<string | null>(null);
  const [isProgrammatic, setIsProgrammatic] = useState(false);

  // Handle clicking a tab to scroll smoothly with offset
  const scrollToSection = (id: string) => {
    setActiveTab(id);
    setClickedTab(id);
    setIsProgrammatic(true);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Release lock after smooth scroll completes
      setTimeout(() => {
        setIsProgrammatic(false);
      }, 1000);
    }
  };

  // Scroll Spy to highlight the active tab as the user scrolls
  useEffect(() => {
    const handleScrollSpy = () => {
      if (isProgrammatic) return; // Ignore scroll spy updates during auto-scrolls
      
      const scrollPosition = window.scrollY + 200; // offset

      // If scrolled back near the top, restore the clicked tab or default to first
      if (window.scrollY < 150) {
        setActiveTab(clickedTab || "conventional");
        return;
      }

      for (let i = 0; i < programsData.length; i++) {
        const prog = programsData[i];
        const el = document.getElementById(prog.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(prog.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [clickedTab, isProgrammatic]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const targetId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          setIsProgrammatic(true);
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          setActiveTab(targetId);
          setClickedTab(targetId);

          setTimeout(() => {
            setIsProgrammatic(false);
          }, 1000);
        }
      }, 300);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section 
          className="w-full bg-brand-green-deep text-white py-24 lg:py-32 text-center relative overflow-hidden bg-cover bg-no-repeat bg-center"
          style={{ 
            backgroundImage: "url('/loan-programs.jpg')", 
            backgroundPosition: "center top",
          }}
        >
          {/* Dark Overlay for High Legibility */}
          <div className="absolute inset-0 bg-[#08271B]/75 z-0"></div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none"></div>
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5 pointer-events-none"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-20">
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
              LOAN PROGRAMS
            </p>
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6">
              Find the loan that fits your life.
            </h1>
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-10">
              Six programs, one broker shopping all of them for you. Jump to any
              program below for the details.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto">
              {programsData.map((prog) => {
                const isActive = prog.id === activeTab;
                return (
                  <button
                    key={prog.id}
                    onClick={() => scrollToSection(prog.id)}
                    className={`text-[13px] font-medium px-6 py-2.5 rounded-full border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-white border-white text-brand-green-deep font-semibold shadow-md"
                        : "bg-transparent border-white/20 text-white/80 hover:border-white/60 hover:text-white"
                    }`}
                  >
                    {prog.title}
                  </button>
                );
              })}
            </div>
          </div>
        </section>
        <div>
          {programsData.map((prog) => (
            <section
              key={prog.id}
              id={prog.id}
              className={`w-full py-12 lg:py-16 border-b border-[#e8e0d0]/40 scroll-mt-20 ${prog.bgColor}`}
            >
              <div className="max-w-5xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  <div className="lg:col-span-7 flex flex-col items-start w-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-brand-green-deep text-brand-green-accent flex items-center justify-center rounded-xl flex-shrink-0 shadow-inner">
                        {prog.icon}
                      </div>
                      <div className="flex flex-col leading-tight">
                        <span className="text-brand-green-accent text-[10px] font-bold tracking-[0.15em] uppercase">
                          PROGRAM {prog.number}
                        </span>
                        <h2 className="text-brand-green-deep text-section-title font-playfair font-normal">
                          {prog.title}
                        </h2>
                      </div>
                    </div>
                    <p className="text-brand-text-muted text-[15px] lg:text-[16px] leading-[1.7] mb-5 w-full">
                      {prog.description}
                    </p>
                    <ul className="flex flex-col gap-2.5 mb-6 w-full">
                      {prog.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-brand-green-accent flex-shrink-0 mt-0.5"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          <span className="text-brand-text-dark text-[14px] lg:text-[15px] leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/#get-pre-approved"
                      className="btn-primary hover:shadow-brand-green-accent/20 group"
                    >
                      {prog.ctaText}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:translate-x-0.5 transition-transform duration-200"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                  <div className="lg:col-span-5 flex lg:justify-end justify-center w-full">
                    <div className="w-full max-w-[420px] bg-brand-card-bg text-white rounded-2xl p-6 lg:p-8 border border-white/5 shadow-xl flex flex-col justify-between hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:border-brand-green-accent/30 active:scale-[0.98] active:translate-y-0 cursor-pointer transition-all duration-300">
                      <div>
                        <div className="mb-6">
                          <p className="text-brand-text-light-green text-[10px] font-bold tracking-[0.12em] uppercase mb-2">
                            DOWN PAYMENT
                          </p>
                          <h3 className="text-white text-[28px] lg:text-[32px] font-semibold tracking-tight leading-tight">
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
      </main>
      <Footer />
    </div>
  );
}
