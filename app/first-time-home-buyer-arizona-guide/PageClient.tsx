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
import YoutubeLiteEmbed from "../component/YoutubeLiteEmbed";
import { LOAN_PROGRAM_LINKS } from "@/lib/company";
import { renderInlineLinks } from "@/lib/renderInlineLinks";

import CountyTestimonials, { type CountyTestimonial } from "../component/CountyTestimonials";
import IconBadge from "../component/IconBadge";

type IconProps = { className?: string };

const iconClass = "w-5 h-5";

const CardIcons = {
  credit: ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  debt: ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
  savings: ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  costs: ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  preapprove: ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  standards: ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  agent: ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  inspection: ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  va: ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  fha: ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  ),
  conventional: ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  expertise: ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  guidance: ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
    </svg>
  ),
  competitive: ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  local: ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  commitment: ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  career: ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  relationship: ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  neighborhood: ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  commute: ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  housing: ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  wallet: ({ className = iconClass }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
} as const;

type CardIconKey = keyof typeof CardIcons;

function renderCardIcon(key: CardIconKey) {
  const Icon = CardIcons[key];
  return <Icon />;
}

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

function NumberedFeatureCard({
  icon,
  title,
  intro,
  bullets,
  className = CARD_HOVER,
}: {
  icon: React.ReactNode;
  title: string;
  intro?: string;
  bullets: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-start gap-4 mb-4">
        <IconBadge>{icon}</IconBadge>
        <div className="min-w-0">
          <h3 className="text-[16px] font-bold text-[#052316] font-playfair leading-snug">{title}</h3>
          {intro ? (
            <p className="text-[#4e5b4e] text-[14px] leading-relaxed mt-2">{intro}</p>
          ) : null}
        </div>
      </div>
      <DotBulletList items={bullets} />
    </div>
  );
}

function IconSummaryCard({
  icon,
  title,
  description,
  className = CARD_HOVER,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-start gap-4">
        <IconBadge>{icon}</IconBadge>
        <div className="min-w-0">
          <h3 className="text-[17px] font-bold text-[#052316] mb-2 font-playfair leading-snug">{title}</h3>
          <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

function SectionCta({
  label,
  href = "#get-pre-approved",
  dark = false,
}: {
  label: string;
  href?: string;
  dark?: boolean;
}) {
  return (
    <div className="loan-btn-wrap">
      <Link
        href={href}
        className={
          dark
            ? "inline-flex items-center gap-2 bg-[#052316] hover:bg-[#0a3d26] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            : "inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
        }
      >
        {label}
      </Link>
    </div>
  );
}

export default function FirstTimeHomeBuyerGuidePage() {

  const highlights = [
    "Expert Guidance for Your Arizona Home Journey",
    "Tailored Loan Programs for Every Credit Score",
    "Navigate Homeownership with Confidence and Ease",
  ];

  const benefits = [
    {
      title: "Navigate with Confidence",
      desc: "Buying a home involves numerous decisions and potential pitfalls. Our comprehensive guide equips you with the insights to make informed choices at every step.",
    },
    {
      title: "Tailored Arizona Expertise",
      desc: "The Arizona real estate market has its unique characteristics. We provide local knowledge that ensures you're prepared for the specific challenges and opportunities in the Grand Canyon State.",
    },
    {
      title: "Financial Clarity",
      desc: "Understanding the financial aspects of home buying is critical. We break down complex concepts into digestible information, helping you grasp everything from credit scores to down payments.",
    },
    {
      title: "Access to Specialized Programs",
      desc: "As a first-time buyer, you may be eligible for special loan programs and assistance with as little as 1% down payment. We'll introduce you to options that could make homeownership more accessible and affordable.",
    },
    {
      title: "Long-term Success",
      desc: "Our guide doesn't just focus on getting you into a home; it helps you make choices that will benefit you for years to come. We consider your future needs to ensure your first home is a smart, lasting investment.",
    },
  ];

  const essentialQuestions: { title: string; desc: string; icon: CardIconKey }[] = [
    {
      title: "Career Stability",
      icon: "career",
      desc: "Assess your current job security and potential career changes. A stable career path can make homeownership more attainable and sustainable.",
    },
    {
      title: "Relationship Status",
      icon: "relationship",
      desc: "Consider your current relationship status and future plans. Are you single, planning to get married, or thinking about starting a family? Your home should accommodate potential life changes.",
    },
    {
      title: "Ideal Neighborhood",
      icon: "neighborhood",
      desc: "Determine which areas in Arizona align with your lifestyle and preferences. Research neighborhoods that offer the amenities and community feel you desire.",
    },
    {
      title: "Proximity to Work",
      icon: "commute",
      desc: "Evaluate how close you want to live to your workplace. A shorter commute can significantly impact your quality of life and daily routine.",
    },
    {
      title: "Long-term Housing Needs",
      icon: "housing",
      desc: "Think about the features you'll need in a home over the next 5-10 years. Consider factors like the number of bedrooms, home office space, or a yard for future pets or children.",
    },
    {
      title: "Financial Readiness",
      icon: "wallet",
      desc: "Assess your current financial situation, including credit score, savings, and debt. Ensure you're prepared for the financial responsibilities of homeownership.",
    },
  ];

  const financialPathItems: { title: string; intro: string; bullets: string[]; icon: CardIconKey }[] = [
    {
      title: "Improve Your Credit Score",
      icon: "credit",
      intro: "A good credit score is key to securing favorable mortgage terms. Aim for a score of at least 620, but remember that higher scores often lead to better rates.",
      bullets: [
        "Review your credit report for errors and dispute any inaccuracies",
        "Make all payments on time",
        "Reduce your credit card balances",
        "Avoid opening new credit accounts before applying for a mortgage",
      ],
    },
    {
      title: "Manage Your Debt",
      icon: "debt",
      intro: "Lenders look closely at your debt-to-income ratio when considering your mortgage application.",
      bullets: [
        "Aim to keep your total mortgage costs below 45% of your income",
        "Pay down existing debts, especially high-interest credit cards",
        "Consider consolidating debts to improve your financial profile",
        "Avoid taking on new debt while preparing to buy a home",
      ],
    },
    {
      title: "Save for a Down Payment",
      icon: "savings",
      intro: "While some loans offer low down payment options, having a larger down payment can provide more flexibility and potentially better terms.",
      bullets: [
        "Set a savings goal based on your target home price",
        "Explore down payment assistance programs for first-time buyers",
        "Consider setting up automatic transfers to a dedicated savings account",
        "Look into FHA loans, which require as little as 3.5% down, or conventional loans with 3% down payment options",
      ],
    },
    {
      title: "Understand Additional Costs",
      icon: "costs",
      intro: "Homeownership involves more than just a mortgage payment. Be prepared for:",
      bullets: [
        "Closing costs, which can range from 1-8% of the home's price",
        "Property taxes and homeowners insurance",
        "Maintenance and repair expenses",
        "Possible homeowners association (HOA) fees",
      ],
    },
  ];

  const loanPrograms: {
    title: string;
    href: string;
    bullets: string[];
    cta: string;
    icon: CardIconKey;
  }[] = [
    {
      title: "VA Loans",
      icon: "va",
      href: "/va-loans-arizona/",
      bullets: [
        "Exclusively for veterans and active-duty military personnel",
        "No down payment required, offering 100% financing",
        "Competitive interest rates, often lower than conventional loans",
        "No private mortgage insurance (PMI) required",
      ],
      cta: "Explore VA Loan Options",
    },
    {
      title: "FHA Loans",
      icon: "fha",
      href: "/fha-home-loans-arizona/",
      bullets: [
        "Ideal for buyers with credit scores below 700",
        "Low down payment requirement of just 3.5%",
        "More lenient credit score requirements for qualification",
        "Requires upfront and monthly mortgage insurance premiums",
      ],
      cta: "See If You Qualify for FHA",
    },
    {
      title: "Conventional Loans",
      icon: "conventional",
      href: "/conventional-home-loans-arizona/",
      bullets: [
        "Best suited for buyers with credit scores of 700 or above",
        "Competitive interest rates and flexible terms",
        "Down payment as low as 3% for qualified buyers",
        "Option to avoid PMI with 20% down payment",
      ],
      cta: "Learn About Conventional Loans",
    },
  ];

  const roadmapSteps: { title: string; bullets: string[]; icon: CardIconKey }[] = [
    {
      title: "Get Pre-approved",
      icon: "preapprove",
      bullets: [
        "Determine your exact home buying budget",
        "Demonstrate financial credibility to sellers",
        "Understand your precise borrowing capacity",
        "Identify potential credit issues early",
        "Streamline your home search process",
      ],
    },
    {
      title: "Set Your Standards",
      icon: "standards",
      bullets: [
        "Create a comprehensive home wishlist",
        "Prioritize structural integrity over cosmetic features",
        "Identify must-have vs. nice-to-have home characteristics",
        "Consider long-term living requirements",
        "Balance emotional desires with practical needs",
      ],
    },
    {
      title: "Work with a Real Estate Agent",
      icon: "agent",
      bullets: [
        "Access local market expertise",
        "Leverage professional negotiation skills",
        "Get unbiased property recommendations",
        "Navigate complex paperwork and legal requirements",
        "Save time and reduce stress during home search",
      ],
    },
    {
      title: "Home Inspection and Closing",
      icon: "inspection",
      bullets: [
        "Conduct thorough property evaluation",
        "Identify potential repair or maintenance issues",
        "Understand the true condition of your potential home",
        "Review and negotiate inspection findings",
        "Complete final walkthrough and closing process",
      ],
    },
  ];

  const whyUsItems: { title: string; bullets: string[]; icon: CardIconKey }[] = [
    {
      title: "Expertise in First-Time Homebuyer Programs",
      icon: "expertise",
      bullets: [
        "In-depth knowledge of VA, FHA, and Conventional loan options",
        "Access to specialized programs with down payments as low as 3%",
        "Guidance on choosing the best loan program for your unique situation",
      ],
    },
    {
      title: "Personalized Guidance Throughout the Process",
      icon: "guidance",
      bullets: [
        "Step-by-step support from pre-approval to closing",
        "Clear explanations of complex mortgage terms and procedures",
        "Assistance in improving your credit score and financial readiness",
      ],
    },
    {
      title: "Competitive Loan Options",
      icon: "competitive",
      bullets: [
        "Relationships with multiple lenders to secure the best rates",
        "Expertise in negotiating favorable terms on your behalf",
        "Transparent comparison of various loan programs and their costs",
      ],
    },
    {
      title: "Strong Local Market Knowledge",
      icon: "local",
      bullets: [
        "Deep understanding of Arizona's diverse neighborhoods and property types",
        "Insights into local market trends and property values",
        "Connections with trusted real estate professionals in the area",
      ],
    },
    {
      title: "Commitment to Your Long-Term Success",
      icon: "commitment",
      bullets: [
        "Focus on finding a home that meets your current and future needs",
        "Education on sustainable homeownership practices",
        "Ongoing support even after your loan closes",
      ],
    },
  ];

  const testimonials: CountyTestimonial[] = [
  {
    name: "Sean Cassidy",
    quote: "My fiance and I were very nervous about buying our first house. The service Eddie provided made the whole process very easy. He answered all our questions and provided prompt and accurate service.",
    attribution: "Sean Cassidy, Phoenix, Arizona",
  },
  {
    name: "Jaclyn Lindsey",
    quote: "As a first time home buyer, your constant and open communication was helpful and comforting. Thank you for your patience and always thoroughly explaining all the steps along the way.",
    attribution: "Jaclyn Lindsey, Tempe, Arizona",
  },
  {
    name: "Mona Collins",
    quote: "Purchasing a home is always confusing and overwhelming. Eddie helped and guided me throughout the entire process. I recommend Eddie anytime anyone is interested in purchasing a home.",
    attribution: "Mona Collins, Phoenix, Arizona",
  },
  {
    name: "Christian Holt",
    quote: "You made my first time home buying experience smooth and educational. You were ALWAYS a phone call away to answer any of my questions or just to ease my concerns.",
    attribution: "Christian Holt, Phoenix, Arizona",
  },
  {
    name: "Matthew and Carmen Hershberger",
    quote: "What I like most about your service is that you were prompt in responding to any questions throughout the entire process. Overall the communication was great and we appreciate your patience.",
    attribution: "Matthew and Carmen Hershberger, Phoenix, Arizona",
  },
];

  const faqs = pageFaqs;

  const otherPrograms = LOAN_PROGRAM_LINKS.filter(
    (l) => l.href !== "/first-time-home-buyer-arizona-guide/"
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        <LoanProgramHero
          title="Guide for the First-time Home Buyer in Arizona"
          subtitle="Expert advice and support for navigating the exciting journey of homeownership"
        />

        <HeroFeatureStrip items={highlights} />


        {/* OVERVIEW + BENEFITS */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase">
                GETTING STARTED
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair leading-tight">
                Your Journey to Homeownership Starts Here
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                {renderInlineLinks(
                  "Embarking on the path to buying your first home in Arizona is an exciting yet complex adventure. As you stand at the threshold of this life-changing decision, it's crucial to arm yourself with knowledge and expert guidance. At Mortgage Brothers LLC, we're here to transform your homeownership dreams into reality."
                )}
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                {renderInlineLinks(
                  "The journey to homeownership can seem **overwhelming at first**, but with the right information and support, you can navigate this process with confidence. Our comprehensive guide is designed to **demystify the home buying process** and provide you with the tools you need to make informed decisions every step of the way."
                )}
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                {renderInlineLinks(
                  "Arizona's real estate market has its own unique characteristics, and as a first-time buyer, you'll benefit from **local expertise**. We'll help you understand the financial aspects, from credit scores to down payments, and potentially access **specialized programs** designed for first-time buyers. Our goal is to ensure your first home is not just a house, but a **smart, lasting investment** that aligns with your lifestyle and future goals."
                )}
              </p>
              <Link
                href="#get-pre-approved"
                className="inline-block bg-[#052316] hover:bg-[#0a3a24] text-white font-bold px-7 py-3.5 rounded-full transition-all shadow"
              >
                GET PRE-APPROVED →
              </Link>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-5 text-left hover:border-[#3fb364] transition-all"
                >
                  <h3 className="text-[16px] font-bold text-[#052316] mb-1.5 font-playfair">{b.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video — live embed */}
        <section className="loan-section bg-[#fcf9f3] !py-10 sm:!py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] shadow-sm">
              <YoutubeLiteEmbed
                videoId="DjlSjCpnSEo"
                title="Your Local Mortgage Lender Company In Arizona"
              />
            </div>
          </div>
        </section>

        {/* FULL GUIDE ARTICLE */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
              If you are a first time home buyer Arizona, the overwhelming amount of decisions you will
              have to make can be dizzying. You need to understand the process from start to finish and
              make the right decisions all the way along or you could suffer some disastrous consequences.
              Follow this template and general advice for ensuring you jump into the shallow end of the
              pool, without drowning from mistakes in the deep end.
            </p>

            <div>
              <h2 className="text-[#052316] text-[26px] lg:text-[32px] font-bold font-playfair mb-4">
                Important Questions you need to ask yourself
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-4">
                Buying a home is one of life&apos;s most major decisions. Many first time home buyers are
                ill prepared and are forced to exit their first home in search of greener pastures much
                before they are financially ready. In purchasing a home there are many considerations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#4e5b4e] text-[15.5px] leading-relaxed">
                <li>Will your career path change radically in the near future?</li>
                <li>Are you single and want to get married?</li>
                <li>Are you married and plan on having children?</li>
                <li>What neighborhood do you want to live in?</li>
                <li>Do you want a home near your work?</li>
              </ul>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mt-4">
                All these question&apos;s answers will lay the ground work for both the size of home you
                will look for and in which area you will look. Too often people buy a house too small in a
                poor neighborhood, just to own a home, when renting for an extra year will let you buy a
                bigger home in a better area.
              </p>
            </div>

            <div>
              <h2 className="text-[#052316] text-[26px] lg:text-[32px] font-bold font-playfair mb-4">
                Work On Your Credit
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                You will need to get your financial house in order first. If your credit score is under
                620, many lenders in today&apos;s tight lending atmosphere may not even consider you for a
                mortgage. Start working on raising your credit score by making regular payments on credit
                lines or loans and review your credit history for any mistakes.
              </p>
            </div>

            <div>
              <h2 className="text-[#052316] text-[26px] lg:text-[32px] font-bold font-playfair mb-4">
                Pay Down Debt
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Using an online mortgage calculator can help you ascertain the size of mortgage you can
                afford in relation to your income. Remember to keep your total costs of the mortgage less
                than 45% of your gross income (debt-to-income ratio) as that is the maximum that lenders will offer for a
                mortgage. If you have other debt, tied up in credit cards, home equity lines of credit or
                loans, these will subtract from the total value of a mortgage you will be eligible for. It
                may be smart to pay off these debt instruments before applying for a mortgage.
              </p>
            </div>

            <div>
              <h2 className="text-[#052316] text-[26px] lg:text-[32px] font-bold font-playfair mb-4">
                BEST Loan programs and Down Payments available for first time home buyers
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-4">
                There are many things to consider, including the financing options available to you. As a
                first-time home buyer, it is crucial to explore the different financing options to find the
                one that suits your needs best.
              </p>
              <h3 className="text-[#052316] text-[18px] font-bold mb-2 font-playfair">
                1. VA Loan for Veterans and Active Duty
              </h3>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-4">
                If you are a veteran or active-duty military personnel, a VA loan can be an excellent
                financing option for your first home. This type of loan is offered by lenders and
                guaranteed by the Department of Veterans Affairs. One of the significant advantages of a VA
                loan is that it requires no down payment. This means that you can buy a home without having
                to save for a down payment. Additionally, VA loans typically have lower interest rates than
                other types of loans, which can save you money in the long run.
              </p>
              <h3 className="text-[#052316] text-[18px] font-bold mb-2 font-playfair">
                2. FHA Loan for Low Credit Scores
              </h3>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-4">
                If your credit score is below 700, an FHA loan might be the best financing option for your
                first home. FHA loans are government-backed and are designed to help individuals with lower
                credit scores and income levels. One of the most significant advantages of an FHA loan is
                that it only requires a 3.5% down payment. Additionally, FHA loans have more relaxed credit
                score requirements, making it easier for first-time home buyers to qualify. The downside of
                FHA mortgages is that they require an upfront mortgage insurance premium as well as a
                monthly mortgage insurance premium which are typically higher mortgage insurance premiums
                than a conventional loan.
              </p>
              <h3 className="text-[#052316] text-[18px] font-bold mb-2 font-playfair">
                3. Conventional Mortgage for Higher Credit Scores
              </h3>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-4">
                If your credit score is 700 or above, a conventional mortgage could be the ideal financing
                option for purchasing your first home. It&apos;s a common myth that many first-time
                homebuyers believe that conventional loans are not suitable for them. In reality,
                conventional loan programs offer some of the most favorable terms for first-time
                homebuyers. Although conventional mortgages typically require a minimum down payment of 3%,
                the interest rates are highly competitive. Furthermore, conventional mortgages provide
                greater flexibility in terms of loan terms and repayment options.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Your down payment can be money that you have saved OR a gift that you have received from a
                relative or employer. The best first time Conventional home buyer program will require 3%
                down payment. The FHA mortgage will require 3.5% down payment.
              </p>
            </div>

            <div>
              <h2 className="text-[#052316] text-[26px] lg:text-[32px] font-bold font-playfair mb-4">
                Get a Preapproved Mortgage
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Get a mortgage preapproval before you start looking to ensure you are not wasting your time
                on homes you could not afford. Other fees when buying a home include closing costs that can
                range from 1-8%, so shopping around between lenders can make a big difference.
              </p>
            </div>

            <div>
              <h2 className="text-[#052316] text-[26px] lg:text-[32px] font-bold font-playfair mb-4">
                Set Your Minimum Standards
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Now that you have all your preparations in order, it is time to start house hunting. Too
                often first time home buyers are looking for a great looking home without examining the
                more important structural parts of a home. The major items that should be considered
                include the quality or state of: roof, windows, furnace, central air system, plumbing,
                electrical, non-leaking basement, kitchen and bathrooms. Remember that cosmetic changes
                like light fixtures, flooring, paint, landscaping, fences, decks, and trim can all be done
                by yourself or relatively inexpensively by contractors. Replacing major items like a roof or
                windows require a significant investment.
              </p>
            </div>

            <div>
              <h2 className="text-[#052316] text-[26px] lg:text-[32px] font-bold font-playfair mb-4">
                Hire an Agent, Look for a Home
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                This is the best part of all, where you get to actually look at your potential new home.
                Consider a home that meets your needs now and 5-10 years from now. Do not get stuck in a
                home that you will need to sell in less than 5 years, as you may not even recover your
                closing costs in the resale of the home.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                As a first time home buyer Arizona, remember the most important decisions are: what can you
                afford? Where do you want to live? Which lender offers the best cost of the mortgage? What
                are the minimum must-haves you need to even consider a home? From these basic questions,
                you will get a home you will enjoy.
              </p>
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
              Lower Your Payments Now
            </Link>
          </div>
          <StatsBanner
            sectionClassName="py-0 bg-transparent"
            stats={[
              { value: "1%", label: "Minimum Down Payment" },
              { value: "620", label: "Minimum Credit Score for Most Loans" },
              { value: "$442,900", label: "Median Home Price in Arizona" },
              { value: "$16,000", label: "Maximum Down Payment Assistance" },
            ]}
          />
        </section>

        {/* ESSENTIAL QUESTIONS */}
        <section className="loan-section bg-[#fcf9f3] !pt-8 sm:!pt-10 lg:!pt-12">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                BEFORE YOU BEGIN
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Essential Questions for Your Home Buying Journey
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                Before diving into the exciting world of home ownership, it&apos;s crucial to reflect on your current situation and future plans. These key considerations will help you make informed decisions and find a home that truly fits your lifestyle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {essentialQuestions.map((item) => (
                <IconSummaryCard
                  key={item.title}
                  icon={renderCardIcon(item.icon)}
                  title={item.title}
                  description={item.desc}
                />
              ))}
            </div>

            <SectionCta label="Get Your Free Home Buying Consultation" />
          </div>
        </section>

        {/* FINANCIAL PATH */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                FINANCIAL PREPARATION
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Paving Your Financial Path to Homeownership
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                Before you start house hunting, it&apos;s crucial to get your finances in order. A solid financial foundation will not only increase your chances of mortgage approval but also ensure you&apos;re prepared for the long-term commitment of homeownership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {financialPathItems.map((item) => (
                <NumberedFeatureCard
                  key={item.title}
                  icon={renderCardIcon(item.icon)}
                  title={item.title}
                  intro={item.intro}
                  bullets={item.bullets}
                />
              ))}
            </div>

            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed text-center max-w-3xl mx-auto">
              By focusing on these key areas of financial preparation, you&apos;ll be better positioned to navigate the home buying process and enjoy the benefits of homeownership for years to come.
            </p>

            <SectionCta label="Get Your Free First-Time Buyer Mortgage Analysis" />
          </div>
        </section>

        {/* CREDIT SCORE CTA */}
        <section className="loan-section bg-[#f5f0e8] border-y border-[#e8e0d0]/50">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-[#052316] text-[26px] lg:text-[32px] font-bold font-playfair">
              First-Time Buyer? See If Your Credit Score Is Ready
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
              As a first-time homebuyer, your credit score affects your loan options and down payment requirements. Discover if your credit is ready for homeownership.
            </p>
            <Link
              href="/arizona-understanding-your-credit/"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            >
              Check Your Credit Readiness
            </Link>
          </div>
        </section>

        {/* LOAN PROGRAMS */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                LOAN OPTIONS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Unlock Your Dream Home with These First-Time Buyer Loan Programs
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                As a first-time homebuyer in Arizona, you have access to several loan programs designed to make homeownership more accessible. Each program offers unique benefits tailored to different financial situations and needs. Let&apos;s explore your options:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {loanPrograms.map((program) => (
                <div
                  key={program.href}
                  className={`${CARD_HOVER} flex flex-col`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <IconBadge>{renderCardIcon(program.icon)}</IconBadge>
                    <h3 className="text-[17px] font-bold text-[#052316] font-playfair leading-snug">{program.title}</h3>
                  </div>
                  <div className="flex-grow mb-5">
                    <DotBulletList items={program.bullets} />
                  </div>
                  <Link
                    href={program.href}
                    className="text-[#3fb364] font-bold text-[14px] hover:text-[#2d8545] inline-flex items-center gap-1 transition-colors group/link mt-auto"
                  >
                    {program.cta}
                    <span className="group-hover/link:translate-x-0.5 transition-transform">→</span>
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed text-center max-w-3xl mx-auto">
              Each of these programs offers a pathway to homeownership, catering to different financial profiles and needs. By understanding these options, you can choose the loan program that best aligns with your situation, bringing you one step closer to owning your first home in Arizona.
            </p>

            <SectionCta label="Compare Your Loan Options Now" />
          </div>
        </section>

        {/* ROADMAP STEPS */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                YOUR ROADMAP
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Your Roadmap to Successful Homeownership
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                Navigating the home buying process can seem complex, but with the right guidance, you can transform this journey into an exciting and rewarding experience. Understanding each step will help you make informed decisions and avoid potential pitfalls along the way.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 text-left">
              {roadmapSteps.map((step) => (
                <NumberedFeatureCard
                  key={step.title}
                  icon={renderCardIcon(step.icon)}
                  title={step.title}
                  bullets={step.bullets}
                  className="group bg-[#fcf9f3] border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm transition-all duration-200 hover:border-[#3fb364] hover:shadow-md hover:bg-[#f8fdf9] h-full"
                />
              ))}
            </div>

            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed text-center max-w-3xl mx-auto">
              Ready to take the next step in your home buying journey? Our expert team is here to guide you through every stage of the process, from pre-approval to closing.
            </p>

            <SectionCta label="Get Your Personalized Home Buying Plan" />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <CountyTestimonials
          title="Real Stories from Arizona's First-Time Homeowners"
          description="At Mortgage Brothers LLC, we take pride in helping countless first-time buyers achieve their dream of homeownership. But don't just take our word for it — hear from those who've successfully navigated the journey with our guidance. These testimonials reflect the experiences of real Arizonans who trusted us to make their homeownership dreams a reality."
          testimonials={testimonials}
        />

        {/* WHY AZ MORTGAGE BROTHERS */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                LOCAL EXPERTISE
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Your Trusted Partner in Arizona Home Buying
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                At Mortgage Brothers LLC, we understand that buying your first home is a significant milestone. Our team of experienced professionals is dedicated to making your journey to homeownership smooth, transparent, and rewarding.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                Here&apos;s why we&apos;re the ideal choice for first-time homebuyers in Arizona:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {whyUsItems.map((item, idx) => (
                <NumberedFeatureCard
                  key={item.title}
                  icon={renderCardIcon(item.icon)}
                  title={item.title}
                  bullets={item.bullets}
                  className={`${CARD_HOVER}${
                    idx === whyUsItems.length - 1 ? " md:col-span-2 md:max-w-xl md:mx-auto md:w-full" : ""
                  }`}
                />
              ))}
            </div>

            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed text-center max-w-3xl mx-auto">
              Experience the Mortgage Brothers LLC difference in your home buying journey. Let our expertise guide you to the perfect loan and your dream home in Arizona.
            </p>

            <div className="bg-[#052316] rounded-3xl p-8 lg:p-10 text-center text-white space-y-4">
              <p className="text-[16px] text-[#c8c8b8] max-w-2xl mx-auto leading-relaxed">
                Ready to start your homeownership journey? Our team is here to answer your questions and help you find the right loan program for your first home in Arizona.
              </p>
              <a
                href="tel:+16025352171"
                className="inline-block text-[28px] lg:text-[32px] font-bold text-[#3fb364] hover:text-[#359854] transition-colors"
              >
                +1 (602) 535-2171
              </a>
              <div>
                <Link
                  href="#get-pre-approved"
                  className="inline-block border border-white/30 hover:border-white text-white font-semibold text-[15px] px-7 py-3.5 rounded-full transition-all hover:bg-white/10"
                >
                  Get Your Free Mortgage Consultation
                </Link>
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
                Frequently Asked Questions for First-Time Homebuyers
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-2xl mx-auto mt-4">
                Navigating the home buying process can bring up many questions, especially for first-time buyers. Here are answers to some of the most common inquiries we receive:
              </p>
            </div>

            <div className="text-left">
              <FaqAccordion items={faqs} />
            </div>

            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed text-center max-w-2xl mx-auto">
              Remember, every homebuying journey is unique. Don&apos;t hesitate to reach out to our team for personalized answers to your specific questions.
            </p>

            <SectionCta label="Ask Our Experts" href="/contact-us/" />
          </div>
        </section>

        <GetInTouch
          theme="dark"
          title="Get in Touch with Arizona's First-Time Home Buying Experts"
          description="Ready to take the next step towards homeownership? Our team at Mortgage Brothers LLC is here to guide you through every aspect of your first home purchase. Whether you have questions about loan programs, need help improving your credit score, or want to start the pre-approval process, we're just a phone call or message away. Don't let the complexities of home buying overwhelm you. Reach out today, and let's work together to make your dream of owning a home in Arizona a reality."
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