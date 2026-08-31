"use client";

import { faqs as pageFaqs } from "./faqs";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import StatsBanner from "../component/StatsBanner";
import LoanProgramHero from "../component/LoanProgramHero";
import HeroFeatureStrip from "../component/HeroFeatureStrip";
import FaqAccordion from "../component/FaqAccordion";
import GetInTouch from "../component/GetInTouch";
import { LOAN_PROGRAM_LINKS } from "@/lib/company";
import { renderInlineLinks } from "@/lib/renderInlineLinks";

import CountyTestimonials, { type CountyTestimonial } from "../component/CountyTestimonials";
import IconBadge from "../component/IconBadge";

const CARD_HOVER =
  "group bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm transition-all duration-200 hover:border-[#3fb364] hover:shadow-md hover:bg-[#f8fdf9]";

function DotBulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-[#4e5b4e] text-[14px] leading-relaxed">
          <span className="text-[#3fb364] mt-[7px] shrink-0 text-[6px] leading-none">●</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function FeatureCard({
  icon,
  title,
  bullets,
  className = CARD_HOVER,
}: {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-start gap-4 mb-4">
        <IconBadge>{icon}</IconBadge>
        <h3 className="text-[16px] font-bold text-[#052316] font-playfair leading-snug pt-2">{title}</h3>
      </div>
      <DotBulletList items={bullets} />
    </div>
  );
}

function SectionCta({ label, href = "#get-pre-approved" }: { label: string; href?: string }) {
  return (
    <div className="loan-btn-wrap">
      <Link
        href={href}
        className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
      >
        {label}
      </Link>
    </div>
  );
}

const standardLimit = {
  oneUnit: "$541,287",
  twoUnit: "$693,050",
  threeUnit: "$837,700",
  fourUnit: "$1,041,125",
};

export default function FhaHomeLoansArizonaPage() {
  const highlights = [
    "Low 3.5% Down Payment: Your Path to Homeownership",
    "Competitive Rates for Credit Scores as Low as 580",
    "Finance 1-4 Unit Properties with Flexible Terms",
  ];

  const benefits = [
    {
      title: "Low Down Payment",
      desc: "Enter the housing market with as little as 3.5% down, making homeownership more attainable for those with limited savings.",
    },
    {
      title: "Flexible Credit Requirements",
      desc: "Qualify with credit scores as low as 580, opening doors for borrowers who may not meet conventional loan standards.",
    },
    {
      title: "Competitive Interest Rates",
      desc: "Enjoy lower rates compared to many conventional loans, thanks to government backing, potentially saving you thousands over the life of your loan.",
    },
    {
      title: "Versatile Property Options",
      desc: "Finance a variety of properties, including single-family homes, duplexes, triplexes, or even fourplexes, expanding your housing choices.",
    },
    {
      title: "Gift Funds Accepted",
      desc: "Use monetary gifts from family or approved sources to cover your down payment and closing costs, easing the financial burden.",
    },
    {
      title: "Streamlined Refinance Option",
      desc: "Easily refinance your existing FHA loan without extensive documentation if rates improve, helping you save even more in the long run.",
    },
  ];

  const loanOptions = [
    {
      title: "Section 203(b): Standard FHA Loan",
      icon: "fha" as const,
      bullets: [
        "The most common FHA loan type",
        "Finance 1-4 unit properties with just 3.5% down",
        "Flexible credit requirements and competitive rates",
        "Ideal for first-time homebuyers or those with limited savings",
      ],
    },
    {
      title: "Section 203(k): Renovation Loans",
      icon: "renovation" as const,
      bullets: [
        "Finance both the purchase and renovation of a property",
        "Ideal for fixer-uppers or homes needing updates",
        "One loan covers acquisition and improvement costs",
        "Perfect for buyers looking to customize their new home",
      ],
    },
    {
      title: "Section 234(c): Condominium Loans",
      icon: "condo" as const,
      bullets: [
        "Specifically designed for condominium purchases",
        "Similar credit requirements to standard FHA loans",
        "Subject to FHA condo approval process",
        "Great option for buyers interested in condo living",
      ],
    },
    {
      title: "HECM: Reverse Mortgages",
      icon: "reverse" as const,
      bullets: [
        "Available for homeowners aged 62 and older",
        "Access home equity without selling",
        "Multiple payout options: lump sum, line of credit, or monthly payments",
        "Helps seniors supplement retirement income or cover expenses",
      ],
    },
  ];

  const eligibilityItems = [
    {
      title: "Credit Score",
      icon: "credit" as const,
      bullets: [
        "Minimum score of 600 typically required in Arizona",
        "Lower scores may be considered in some cases, down to 580",
      ],
    },
    {
      title: "Property Requirements",
      icon: "property" as const,
      bullets: [
        "Must be your primary residence",
        "Can be a single-family home, duplex, triplex, or fourplex",
        "Must meet FHA property standards and appraisal requirements",
      ],
    },
    {
      title: "Down Payment",
      icon: "down" as const,
      bullets: [
        "As low as 3.5% of the purchase price",
        "Can come from savings, gifts, or approved down payment assistance programs",
      ],
    },
    {
      title: "Employment History",
      icon: "employment" as const,
      bullets: [
        "Steady employment for the past two years",
        "Consistent or increasing income preferred",
      ],
    },
    {
      title: "Debt-to-Income Ratio (DTI)",
      icon: "dti" as const,
      bullets: [
        "Generally, your DTI should not exceed 50%",
        "Higher ratios may be accepted with compensating factors",
      ],
    },
    {
      title: "Mortgage Insurance",
      icon: "insurance" as const,
      bullets: [
        "Upfront premium of 1.75% of the loan amount",
        "Annual premium between 0.15% to 0.55%, depending on loan terms",
      ],
    },
  ];

  const loanLimitHighlights = [
    {
      title: "2026 FHA Loan Limit for Maricopa County",
      icon: "local" as const,
      bullets: [
        "Single-family home limit: $557,750",
        "This applies to Phoenix and surrounding areas",
        "Higher than many other Arizona counties due to higher property values",
      ],
    },
    {
      title: "Loan Limits Vary by County",
      icon: "county" as const,
      bullets: [
        "Each Arizona county has its own specific loan limit",
        "Coconino County has a notably higher limit compared to other counties",
        "Rural counties often have lower limits than urban areas",
      ],
    },
    {
      title: "Property Type Affects Limits",
      icon: "property" as const,
      bullets: [
        "Limits increase for multi-unit properties (duplexes, triplexes, fourplexes)",
        "Single-family homes have the lowest limits",
        "Consult with a Mortgage Brothers LLC expert for specific multi-unit limits",
      ],
    },
    {
      title: "Annual Adjustments",
      icon: "calendar" as const,
      bullets: [
        "FHA reviews and updates loan limits each year",
        "Changes typically reflect shifts in median home prices",
        "Stay informed about these annual updates to plan your home purchase effectively",
      ],
    },
  ];

  const loanLimitRows = [
    { county: "Coconino County", ...{ oneUnit: "$609,500", twoUnit: "$780,250", threeUnit: "$943,150", fourUnit: "$1,172,150" } },
    { county: "Maricopa County", ...{ oneUnit: "$557,750", twoUnit: "$714,000", threeUnit: "$863,100", fourUnit: "$1,072,600" } },
    { county: "Pinal County", ...{ oneUnit: "$557,750", twoUnit: "$714,000", threeUnit: "$863,100", fourUnit: "$1,072,600" } },
    { county: "Apache County", ...standardLimit },
    { county: "Cochise County", ...standardLimit },
    { county: "Gila County", ...standardLimit },
    { county: "Graham County", ...standardLimit },
    { county: "Greenlee County", ...standardLimit },
    { county: "La Paz County", ...standardLimit },
    { county: "Mohave County", ...standardLimit },
    { county: "Navajo County", ...standardLimit },
    { county: "Pima County", ...standardLimit },
    { county: "Santa Cruz County", ...standardLimit },
    { county: "Yavapai County", ...standardLimit },
    { county: "Yuma County", ...standardLimit },
  ];

  const whyUsItems = [
    {
      title: "FHA Loan Expertise",
      icon: "expertise" as const,
      bullets: [
        "Extensive knowledge of FHA loan programs and guidelines",
        "Up-to-date on the latest FHA loan limits and requirements for Arizona counties",
        "Skilled at matching borrowers with the most suitable FHA loan options",
      ],
    },
    {
      title: "Personalized Service",
      icon: "guidance" as const,
      bullets: [
        "Tailored guidance throughout the entire loan process",
        "Clear explanations of FHA loan terms, including mortgage insurance premiums",
        "Assistance with navigating complex FHA requirements and paperwork",
      ],
    },
    {
      title: "Competitive Rates and Terms",
      icon: "competitive" as const,
      bullets: [
        "Access to a wide network of lenders for the best FHA loan rates",
        "Expertise in securing favorable terms, even for borrowers with lower credit scores",
        "Transparent fee structure with no hidden costs",
      ],
    },
    {
      title: "Streamlined Application Process",
      icon: "process" as const,
      bullets: [
        "Efficient pre-approval process to strengthen your home buying position",
        "Guidance on required documentation for a smooth FHA loan application",
        "Regular updates on your loan status to keep you informed every step of the way",
      ],
    },
  ];

  const optionIcons: Record<string, React.ReactNode> = {
    fha: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    renovation: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    condo: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    reverse: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    credit: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    property: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    down: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    employment: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    dti: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    insurance: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    local: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    county: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    calendar: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    expertise: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    guidance: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
    competitive: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    process: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  };

  const testimonials: CountyTestimonial[] = [
    {
      name: "Heather Rich Chapman",
      quote: "Eddie and his team were professional, courteous, and very quick to reply to any and all questions. My fiance and I were buying a short-sale property and were in a bit of a time crunch. We were facing a hard deadline that was coming up FAST. Eddie and his team were extremely prompt and courteous when replying to any questions or concerns we had. I have a feeling that if this were left to another lender we'd be getting an apology vs a great big \"CONGRATULATIONS!\" from Eddie and his team when they completed the loan a full day before the hard deadline came up! I would highly recommend Eddie.",
      attribution: "Heather Rich Chapman, Chandler, Arizona",
    },
    {
      name: "Matthew MaClean",
      quote: "The service I received from Eddie at Mortgage Brothers was nothing short of exceptional. Mine was a complicated application and despite easier options (that would have cost me more), they worked tirelessly to secure me a great mortgage at an exceptional rate. Personal service is the key when it comes to such a huge investment and these guys will not disappoint.",
      attribution: "Matthew MaClean, Phoenix, Arizona",
    },
    {
      name: "Kevin Hinton",
      quote: "Eddie, you had a great ability to fit my personal mortgage needs with the best program you thought would work best. Thank you for being efficient, honest, and always available.",
      attribution: "Kevin Hinton, Peoria, Arizona",
    },
    {
      name: "Carlos Baldenegro",
      quote: "With Eddie it was the easiest mortgage we've ever applied for. By phone we applied and were approved right then and there. Anytime I needed advice or had questions, Eddie was always either on the phone or email with answers. Eddie is honest, knows his business and is always asking if we need anything. When we wanted to refinance, Eddie was the 1st to offer to help us. The paperwork was done efficiently and it seemed like it was effortless even though we know there is a lot of work that goes on behind the scenes. We are very committed to using Eddie's vast knowledge and services if we ever buy another home or need a mortgage or refinance.",
      attribution: "Carlos Baldenegro, Chandler, Arizona",
    },
    {
      name: "Matthew Patterson",
      quote: "I have been meaning to call you to tell you thank you, I have just been super busy. In all honesty, you service was great. You kept me informed throughout the whole process, you managed my expectations very well and you came through big time when all hope was lost. You really did go above and beyond. I understand that my situation made for a difficult and complicated lending situation, but I couldn't ask for anything more than what you did. I seriously appreciate it.",
      attribution: "Matthew Patterson, Phoenix, Arizona",
    },
  ];

  const faqs = pageFaqs;

  const otherPrograms = LOAN_PROGRAM_LINKS.filter(
    (l) => l.href !== "/fha-home-loans-arizona/"
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        <LoanProgramHero
          title="FHA Home Loans in Arizona"
          subtitle="Low down payments, flexible credit requirements, and expert guidance"
        />

        <HeroFeatureStrip items={highlights} />

        {/* OVERVIEW + BENEFITS */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase">
                FHA FINANCING
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair leading-tight">
                Unlock Your Dream Home with FHA Loans in Arizona
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                {renderInlineLinks(
                  "FHA loans are a powerful tool for many Arizonans looking to achieve homeownership, especially those who might face challenges qualifying for conventional mortgages. These **government-backed loans** offer a range of benefits that make the path to owning a home more accessible and affordable."
                )}
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Whether you&apos;re a first-time homebuyer, have less-than-perfect credit, or are working with a limited budget, FHA loans provide flexible options that can turn your homeownership dreams into reality.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                {renderInlineLinks(
                  "At Mortgage Brothers LLC, we specialize in guiding Arizona residents through the **FHA loan process**. Our expertise ensures you get the best terms tailored to your unique financial situation. Let's explore the key advantages that make FHA loans an attractive option for many homebuyers:"
                )}
              </p>
              <Link
                href="#get-pre-approved"
                className="inline-block bg-[#052316] hover:bg-[#0a3a24] text-white font-bold px-7 py-3.5 rounded-full transition-all shadow"
              >
                Get Pre-Approved Today
              </Link>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="group bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-5 text-left hover:border-[#3fb364] transition-all"
                >
                  <h3 className="text-[16px] font-bold text-[#052316] mb-1.5 font-playfair">{b.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS BANNER */}
        <section className="loan-cta-band bg-[#fcf9f3] !pb-0">
          <div className="mx-auto max-w-6xl text-center loan-block-gap">
            <Link
              href="#get-pre-approved"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            >
              Get Pre-Approved Today
            </Link>
          </div>
          <StatsBanner
            sectionClassName="py-0 bg-transparent"
            stats={[
              { value: "3.5%", label: "Down Payment Required" },
              { value: "$557,750", label: "2026 FHA Maricopa County Loan Limit" },
              { value: "1.75%", label: "Upfront MIP" },
              { value: "0.55%", label: "Annual MIP Rate" },
            ]}
          />
        </section>

        {/* FHA LOAN OPTIONS */}
        <section className="loan-section bg-[#fcf9f3] !pt-8 sm:!pt-10 lg:!pt-12">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                FHA PROGRAMS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Explore Your FHA Loan Options in Arizona
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                FHA loans offer a variety of programs to suit different homebuying needs. Whether you&apos;re purchasing your first home, looking to renovate, or interested in a condominium, there&apos;s likely an FHA loan type that fits your situation. Let&apos;s break down the main FHA loan options available to Arizona residents:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {loanOptions.map((option) => (
                <FeatureCard
                  key={option.title}
                  icon={optionIcons[option.icon]}
                  title={option.title}
                  bullets={option.bullets}
                />
              ))}
            </div>

            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed text-center max-w-3xl mx-auto">
              Each of these FHA loan types offers unique benefits tailored to different homebuying scenarios. At Mortgage Brothers LLC, we&apos;ll help you navigate these options to find the best fit for your Arizona home purchase.
            </p>

            <SectionCta label="Explore Your FHA Loan Options Today" />
          </div>
        </section>

        {/* QUALIFY */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                ELIGIBILITY
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Qualify for Your FHA Loan in Arizona
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                Understanding the eligibility requirements for an FHA loan is crucial when considering this mortgage option. While FHA loans are designed to be more accessible, there are still specific criteria you&apos;ll need to meet. Here&apos;s what you need to know about qualifying for an FHA loan in Arizona:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {eligibilityItems.map((item) => (
                <FeatureCard
                  key={item.title}
                  icon={optionIcons[item.icon]}
                  title={item.title}
                  bullets={item.bullets}
                  className="group bg-[#fcf9f3] border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm transition-all duration-200 hover:border-[#3fb364] hover:shadow-md hover:bg-[#f8fdf9]"
                />
              ))}
            </div>

            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed text-center max-w-3xl mx-auto">
              Remember, meeting these requirements doesn&apos;t guarantee approval, but it puts you in a strong position to qualify for an FHA loan. At Mortgage Brothers LLC, we&apos;ll guide you through each step of the eligibility process.
            </p>

            <SectionCta label="Get Your FHA Loan Questions Answered" />
          </div>
        </section>

        {/* CREDIT SCORE CTA */}
        <section className="loan-section bg-[#f5f0e8] border-y border-[#e8e0d0]/50">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-[#052316] text-[26px] lg:text-[32px] font-bold font-playfair">
              Will Your Credit Score Qualify for an FHA Loan?
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
              FHA loans are more forgiving of lower credit scores, but knowing where you stand is crucial. Discover if your credit score meets FHA requirements.
            </p>
            <Link
              href="/arizona-understanding-your-credit/"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            >
              Check Your Credit Readiness
            </Link>
          </div>
        </section>

        {/* LOAN LIMITS */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center loan-section-heading">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                2026 LIMITS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair mb-4">
                Understanding FHA Loan Limits in Arizona
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                FHA loan limits determine the maximum amount you can borrow with an FHA-insured mortgage. These limits vary by county and are adjusted annually to reflect changes in home prices. Let&apos;s break down the key points about FHA loan limits in Arizona:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {loanLimitHighlights.map((item) => (
                <FeatureCard
                  key={item.title}
                  icon={optionIcons[item.icon]}
                  title={item.title}
                  bullets={item.bullets}
                />
              ))}
            </div>

            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed text-center max-w-3xl mx-auto">
              Here&apos;s a comprehensive breakdown of the 2026 FHA loan limits for all Arizona counties:
            </p>

            <div className="md:hidden flex flex-col gap-3">
              {loanLimitRows.map((row) => (
                <article
                  key={row.county}
                  className="rounded-2xl border border-[#e0e0e0] bg-white shadow-sm overflow-hidden"
                >
                  <div className="bg-[#052316] px-4 py-3">
                    <h3 className="text-white text-[15px] font-bold leading-snug">{row.county}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-px bg-[#e8e0d0]/70">
                    {[
                      { label: "One-Family", value: row.oneUnit },
                      { label: "Two-Family", value: row.twoUnit },
                      { label: "Three-Family", value: row.threeUnit },
                      { label: "Four-Family", value: row.fourUnit },
                    ].map((cell) => (
                      <div key={cell.label} className="bg-white px-4 py-3.5">
                        <p className="text-[#b8d4b8] text-[10px] font-bold tracking-[0.12em] uppercase mb-1">
                          {cell.label}
                        </p>
                        <p className="text-[#052316] text-[15px] font-semibold tabular-nums">{cell.value}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="hidden md:block overflow-x-auto rounded-2xl border border-[#e0e0e0] bg-white shadow-sm">
              <table className="w-full min-w-[720px] text-left text-[14px]">
                <thead>
                  <tr className="bg-[#052316] text-white">
                    <th className="px-5 py-3.5 font-bold">County Name</th>
                    <th className="px-5 py-3.5 font-bold whitespace-nowrap">One-Family</th>
                    <th className="px-5 py-3.5 font-bold whitespace-nowrap">Two-Family</th>
                    <th className="px-5 py-3.5 font-bold whitespace-nowrap">Three-Family</th>
                    <th className="px-5 py-3.5 font-bold whitespace-nowrap">Four-Family</th>
                  </tr>
                </thead>
                <tbody>
                  {loanLimitRows.map((row, idx) => (
                    <tr key={row.county} className={idx % 2 === 0 ? "bg-white" : "bg-[#fcf9f3]"}>
                      <td className="px-5 py-3.5 font-semibold text-[#052316] border-t border-[#e0e0e0]">
                        {row.county}
                      </td>
                      <td className="px-5 py-3.5 text-[#4e5b4e] border-t border-[#e0e0e0] whitespace-nowrap tabular-nums">
                        {row.oneUnit}
                      </td>
                      <td className="px-5 py-3.5 text-[#4e5b4e] border-t border-[#e0e0e0] whitespace-nowrap tabular-nums">
                        {row.twoUnit}
                      </td>
                      <td className="px-5 py-3.5 text-[#4e5b4e] border-t border-[#e0e0e0] whitespace-nowrap tabular-nums">
                        {row.threeUnit}
                      </td>
                      <td className="px-5 py-3.5 text-[#4e5b4e] border-t border-[#e0e0e0] whitespace-nowrap tabular-nums">
                        {row.fourUnit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed text-center max-w-3xl mx-auto">
              Understanding these limits is crucial when considering an FHA loan in Arizona. The Mortgage Brothers LLC team can provide you with the most up-to-date information and help you navigate these limits for your specific situation.
            </p>

            <SectionCta label="Get Expert Advice on FHA Loan Limits" />
          </div>
        </section>

        {/* WHY MORTGAGE BROTHERS */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                LOCAL EXPERTISE
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Why Choose Mortgage Brothers LLC for Your FHA Loan in Arizona
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                At Mortgage Brothers LLC, we specialize in guiding Arizona residents through the FHA loan process with expertise and personalized service. Our team is dedicated to helping you achieve your homeownership dreams with the best possible terms.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                Here&apos;s why we&apos;re your ideal partner for FHA loans:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {whyUsItems.map((item) => (
                <FeatureCard
                  key={item.title}
                  icon={optionIcons[item.icon]}
                  title={item.title}
                  bullets={item.bullets}
                />
              ))}
            </div>

            <div className="bg-[#052316] rounded-3xl p-8 lg:p-12 text-center text-white space-y-5">
              <p className="text-[16px] lg:text-[17px] text-[#c8c8b8] max-w-2xl mx-auto leading-relaxed">
                With Mortgage Brothers LLC, you&apos;re not just getting a loan — you&apos;re gaining a trusted partner in your homeownership journey. Let us help you make the most of your FHA loan opportunity in Arizona.
              </p>
              <a
                href="tel:+16025352171"
                className="inline-block text-[28px] lg:text-[34px] font-bold text-[#3fb364] hover:text-[#359854] transition-colors tracking-tight"
              >
                +1 602-535-2171
              </a>
              <div>
                <a
                  href="tel:+16025352171"
                  className="inline-flex items-center gap-2.5 border border-white/30 hover:border-white text-white font-semibold text-[15px] px-7 py-3.5 rounded-full transition-all hover:bg-white/10"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now for Expert Advice
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Frequently Asked Questions About FHA Loans in Arizona
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-2xl mx-auto mt-4">
                Understanding FHA loans can be complex, but we&apos;re here to help clarify the most common questions. Here are some key points to know about FHA loans in Arizona:
              </p>
            </div>

            <div className="text-left">
              <FaqAccordion items={faqs} />
            </div>

            <div className="text-center bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
              <h3 className="text-[#052316] text-[18px] font-bold font-playfair mb-1">Eddie Knoell</h3>
              <p className="text-[#4e5b4e] text-[14px]">NMLS ID #210917, Arizona Loan Originator License #LO-0911422</p>
            </div>

            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed text-center max-w-2xl mx-auto">
              Remember, FHA loans offer flexible options for many homebuyers, especially those with lower credit scores or limited down payment funds. Our team at Mortgage Brothers LLC is here to guide you through the specifics of your situation.
            </p>

            <SectionCta label="Get Your Free Consultation Now" />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <CountyTestimonials
          title="What Our Clients Say About Their FHA Loan Experience"
          description="At Mortgage Brothers LLC, we take pride in helping Arizona residents achieve their homeownership dreams through FHA loans. But don't just take our word for it — hear from some of our satisfied clients who have successfully navigated the FHA loan process with us."
          testimonials={testimonials}
        />

        <GetInTouch
          theme="dark"
          title="Get Expert FHA Loan Guidance in Arizona"
          paragraphs={[
            "Ready to explore your FHA loan options or have questions about the process? Our team at Mortgage Brothers LLC is here to help. With our extensive experience in Arizona FHA loans, we can provide personalized guidance tailored to your unique situation. Whether you're a first-time homebuyer, looking to refinance, or interested in a multi-unit property, we have the expertise to navigate the complexities of FHA loans.",
            "Don't let the intricacies of FHA loans overwhelm you — reach out to us today for expert assistance. Our knowledgeable team can help you understand the benefits of FHA loans, including low down payments, flexible credit requirements, and competitive interest rates. We're committed to helping you make informed decisions about your home financing options and guiding you through every step of the loan process.",
            "Take the first step towards your homeownership goals with Mortgage Brothers LLC. Contact us now to discuss your FHA loan options and get started on your path to a new home in Arizona.",
          ]}
          showPreApproveCta
        />

        {/* OTHER LOAN PROGRAMS */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                MORE OPTIONS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Explore Our Mortgage Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {otherPrograms.map((program) => (
                <Link
                  key={program.href}
                  href={program.href}
                  className="flex items-center gap-3 bg-[#fcf9f3] border border-[#e0e0e0] hover:border-[#3fb364] rounded-xl px-5 py-4 text-[#052316] font-semibold text-[14.5px] transition-all hover:shadow-sm group"
                >
                  <span className="text-[#3fb364] font-bold group-hover:translate-x-0.5 transition-transform">→</span>
                  {program.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="loan-section-footer bg-[#fcf9f3] border-t border-[#e0e0e0]">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#b8d4b8] text-[12.5px] leading-relaxed">
              Mortgage Brothers LLC NMLS #1007154. Eddie Knoell NMLS #210917, Thomas Knoell NMLS #1618695.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
