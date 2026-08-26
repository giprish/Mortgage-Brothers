import React from "react";
import Link from "next/link";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import HeroCtaButtons from "../../../component/HeroCtaButtons";
import FaqAccordion from "../../../component/FaqAccordion";
import CTA from "../../../component/CTA";
import type { CityData } from "../../../../lib/cityData";

/* ─── Loan Programs Data ─── */
const loanPrograms = [
  {
    title: "Conventional Home Loans",
    href: "/conventional-home-loans-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="#e2edd8" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    title: "FHA Home Loans",
    href: "/fha-home-loans-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" fill="#e2edd8" />
      </svg>
    )
  },
  {
    title: "First-Time Home Buyer",
    href: "/first-time-home-buyer-arizona-guide/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#e2edd8" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  },
  {
    title: "VA Loans",
    href: "/va-loans-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" fill="#e2edd8" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    )
  },
  {
    title: "Jumbo Loans",
    href: "/jumbo-loans-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 13L2 9z" fill="#e2edd8" />
        <path d="M11 3 8 9l4 13 4-13-3-6" />
        <path d="M2 9h20" />
      </svg>
    )
  },
  {
    title: "Reverse Mortgage",
    href: "/reverse-mortgage-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    )
  },
  {
    title: "Reverse Mortgage for Purchase",
    href: "/reverse-mortgage-home-purchase-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" fill="#e2edd8" />
        <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
      </svg>
    )
  },
  {
    title: "FHA Streamline Refinance",
    href: "/fha-streamline-refinance-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" fill="#e2edd8" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    )
  },
  {
    title: "Refinancing",
    href: "/refinancing-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" fill="#e2edd8" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    )
  },
  {
    title: "Private Money Lender",
    href: "/private-money-lender-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22h18" />
        <path d="M6 18v-7" fill="#e2edd8" />
        <path d="M10 18v-7" fill="#e2edd8" />
        <path d="M14 18v-7" fill="#e2edd8" />
        <path d="M18 18v-7" fill="#e2edd8" />
        <path d="m12 2-10 5h20Z" fill="#e2edd8" />
      </svg>
    )
  }
];

/* ─── Why Choose Checklist ─── */
const whyChooseItems = [
  "Access to multiple mortgage lenders in",
  "Competitive mortgage rates in",
  "Personalized loan strategies for buyers and homeowners",
  "Clear communication from consultation through closing",
  "Local experience in the",
];

export default function GenericCityDetailPage({ cityData }: { cityData: CityData }) {
  const countySlug = cityData.countySlug;
  const countyName = cityData.countyName;
  const city = cityData.name;

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main id="main-content" className="flex-grow">

        {/* ════════════════════════════════════════════════════════════
            SECTION 1 — HERO
        ════════════════════════════════════════════════════════════ */}
        <section className="relative w-full overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#052316] via-[#073a22] to-[#052316]" />
          {/* Subtle texture overlay — desktop only to reduce mobile paint cost */}
          <div className="absolute inset-0 opacity-[0.03] hidden sm:block" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pt-[96px] lg:pt-[130px] pb-12 lg:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left — Text (h1 first in DOM for faster mobile LCP) */}
              <div>
                <h1 className="text-white text-[32px] lg:text-[46px] font-semibold leading-[1.12] mb-4 lg:mb-5">
                  <span className="text-[#63cd85]">{city}</span> Mortgage Experts&nbsp;– Your Local Home Loan Partners
                </h1>
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-[12px] font-semibold mb-6 lg:mb-8">
                  <Link prefetch={false} href="/service-areas/" className="text-[#b8d4b8] hover:text-white transition-colors">Areas We Serve</Link>
                  <span className="text-[#b8d4b8]">&gt;</span>
                  <Link prefetch={false} href={`/service-areas/${countySlug}/`} className="text-[#b8d4b8] hover:text-white transition-colors">{countyName}</Link>
                  <span className="text-[#b8d4b8]">&gt;</span>
                  <span className="text-[#3fb364]">{city}</span>
                </div>
                <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.75] mb-8 max-w-lg">
                  Mortgage Brothers LLC provides trusted {city} mortgage solutions for homebuyers and homeowners throughout the area. Our experienced mortgage brokers in {city} AZ work with multiple lenders.
                </p>

                {/* CTA */}
                <Link prefetch={false}
                  href="/#get-pre-approved"
                  data-preapproval="true"
                  className="inline-flex items-center gap-2.5 bg-[#2d8545] hover:bg-[#246d39] text-white text-[15px] font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-[#2d8545]/20 hover:shadow-xl hover:shadow-[#2d8545]/30 transition-all duration-300 group"
                >
                  Start my preapproval
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform" aria-hidden>
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
                <p className="text-[#c8d4c8] text-[11px] mt-3 font-medium">✓ 3 min, no credit impact</p>
              </div>

              {/* Right — Image placeholder card (desktop only — keeps mobile LCP on h1) */}
              <div className="relative hidden lg:block rounded-3xl overflow-hidden h-[340px] bg-gradient-to-br from-[#0d3d24] to-[#062419] border border-white/5 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-6">
                  <span className="text-[#d8c9a0] text-[10px] font-bold tracking-[0.3em] uppercase mb-2">WELCOME TO</span>
                  <span className="text-white text-[28px] lg:text-[34px] font-sans font-semibold">{city}, Arizona</span>
                  <span className="text-[#c8d4c8] text-[13px] mt-2">Your Home Loan Destination</span>
                </div>
              </div>
            </div>

            {/* Stats row — below fold on mobile */}
            <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { value: "5.0/5", label: "Client Rating" },
                { value: "Thousands", label: "Homes Financed" },
                { value: "4-8 hrs", label: "Pre-Approval Time" },
                { value: "Competitive", label: "Local Rates" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/[0.06] border border-white/[0.08] rounded-2xl px-5 py-4 text-center">
                  <span className="text-white text-[18px] lg:text-[20px] font-bold block">{stat.value}</span>
                  <span className="text-[#b8d4b8] text-[11px] uppercase tracking-wider font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 2 — CITY DESCRIPTION
        ════════════════════════════════════════════════════════════ */}
        <section className="w-full py-16 lg:py-20 px-6 lg:px-10 bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto text-center">
            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-4">
              LOCAL MORTGAGE EXPERTS
            </span>
            <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-semibold leading-tight mb-6">
              {city}, AZ Mortgage Brokers – Local Home Loan Experts
            </h2>
            <p className="text-[#4e5b4e] text-[15px] lg:text-[16px] leading-[1.8] max-w-3xl mx-auto">
              {cityData.longDescription}
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 3 — POPULAR COMMUNITIES
        ════════════════════════════════════════════════════════════ */}
        <section className="w-full py-16 lg:py-20 px-6 lg:px-10 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-4">
                LOCAL KNOWLEDGE
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[36px] font-semibold leading-tight mb-4">
                Popular Communities We Serve in {city}, AZ
              </h2>
              <p className="text-[#4e5b4e] text-[14px] lg:text-[15px] leading-[1.7] max-w-2xl mx-auto">
                {city} is home to diverse master-planned communities — each with a unique pricing, amenities, and lending needs. Our inside knowledge gives you the edge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cityData.communities.map((community, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-6 lg:p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    i === 0
                      ? "bg-[#052316] border-[#1a4a30] text-white shadow-lg"
                      : "bg-[#fcf9f3] border-[#e8e0d0]/60 hover:border-[#3fb364]/30"
                  }`}
                >
                  {i === 0 && (
                    <span className="text-[#3fb364] text-[9px] font-bold tracking-[0.2em] uppercase block mb-3">
                      MOST POPULAR
                    </span>
                  )}
                  <h3 className={`text-[17px] font-bold mb-2 ${i === 0 ? "text-white" : "text-[#052316]"}`}>
                    {community.title}
                  </h3>
                  <p className={`text-[13.5px] leading-[1.65] ${i === 0 ? "text-[#c8c8b8]" : "text-[#4e5b4e]"}`}>
                    {community.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 4 — WHY CHOOSE AZ MORTGAGE BROTHERS
        ════════════════════════════════════════════════════════════ */}
        <section className="w-full py-16 lg:py-20 px-6 lg:px-10 bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              {/* Left — Checklist */}
              <div>
                <h2 className="text-[#052316] text-[26px] lg:text-[34px] font-playfair font-normal leading-tight mb-8">
                  Why Choose Mortgage Brothers LLC
                </h2>
                <div className="flex flex-col gap-4">
                  {[
                    `Access to multiple mortgage lenders in ${city} AZ`,
                    `Competitive mortgage rates in ${city}`,
                    "Personalized loan strategies for buyers and homeowners",
                    "Clear communication from consultation through closing",
                    `Local experience in the ${city}, AZ real estate market`,
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#3fb364]/10 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-[#1a3a1a] text-[14px] font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Rating card */}
              <div className="bg-[#052316] rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-xl border border-white/5">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 10px)" }} />
                <div className="relative z-10">
                  <span className="text-[#7a6638] text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">OUTSTANDING</span>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-white text-[52px] font-bold leading-none">5</span>
                    <span className="text-[#b8d4b8] text-[14px] font-medium">/5 Rating</span>
                  </div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#3fb364" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>

                  <div className="space-y-4 border-t border-white/10 pt-5">
                    <div className="bg-white/[0.06] rounded-xl px-4 py-3">
                      <p className="text-[#c8c8b8] text-[12.5px] leading-[1.6] italic">&ldquo;Professional, responsive, and extremely knowledgeable about {city} market conditions. Highly recommend!&rdquo;</p>
                      <p className="text-[#b8d4b8] text-[11px] mt-2 font-semibold">— Recent {city} Homebuyer</p>
                    </div>
                    <div className="bg-white/[0.06] rounded-xl px-4 py-3">
                      <p className="text-[#c8c8b8] text-[12.5px] leading-[1.6] italic">&ldquo;We have financed hundreds of homes in {city} and love this community. We know the local appraisers, brokers, and can tailor your experience.&rdquo;</p>
                      <p className="text-[#b8d4b8] text-[11px] mt-2 font-semibold">— Mortgage Brothers LLC Team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 5 — MORTGAGE SOLUTIONS GRID
        ════════════════════════════════════════════════════════════ */}
        <section className="w-full py-16 lg:py-20 px-6 lg:px-10 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-4">
                OUR SERVICES
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[36px] font-playfair font-normal leading-tight mb-4">
                Explore Our {city} Mortgage Solutions
              </h2>
              <p className="text-[#4e5b4e] text-[14px] lg:text-[15px] leading-[1.7] max-w-2xl mx-auto">
                Comprehensive mortgage programs designed specifically for {city}&apos;s unique real estate market and homeowners.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {loanPrograms.map((program, i) => (
                <Link
                  key={i}
                  href={program.href}
                  prefetch={false}
                  className="bg-white border border-[#3fb364]/30 hover:border-[#3fb364] rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative min-h-[190px] justify-between"
                >
                  {/* Top Green Accent Bar */}
                  <div className="w-12 h-1 bg-[#3fb364] rounded-full mx-auto mb-3" />

                  {/* Centered Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                    {program.icon}
                  </div>

                  {/* Centered Title */}
                  <span className="text-[#32353C] text-[15px] font-bold leading-snug px-1">
                    {program.title}
                  </span>

                  {/* Bottom Right Arrow */}
                  <div className="w-full flex justify-end mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#3fb364"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 6 — CTA BANNER
        ════════════════════════════════════════════════════════════ */}
        <CTA
          title={`Ready to Start Your ${city} Home Loan Journey?`}
          description={`Our ${city} mortgage specialists are here to help you move forward with confidence. We compare lenders, review your financial profile, and recommend the best loan programs for your goals.`}
        />

        {/* ════════════════════════════════════════════════════════════
            SECTION 7 — TRUSTED GUIDANCE
        ════════════════════════════════════════════════════════════ */}
        <section className="w-full py-16 lg:py-20 px-6 lg:px-10 bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
              {/* Left — Text */}
              <div className="flex flex-col justify-center">
                <h2 className="text-[#052316] text-[26px] lg:text-[34px] font-playfair font-normal leading-tight mb-6">
                  Trusted Mortgage Guidance in {city}
                </h2>
                <p className="text-[#4e5b4e] text-[14px] lg:text-[15px] leading-[1.8] mb-4">
                  When you work with Mortgage Brothers LLC, you receive trusted advice and dependable support throughout your mortgage journey.
                </p>
                <p className="text-[#4e5b4e] text-[14px] lg:text-[15px] leading-[1.8]">
                  Whether you&apos;re looking to buy your first home, refinancing, or exploring a reverse mortgage in {city}, our team guides you through the process with local advice and expert guidance.
                </p>
              </div>

              {/* Right — What You Can Expect card */}
              <div className="bg-[#2d8545] rounded-3xl p-8 lg:p-10 text-white shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 10px)" }} />
                <div className="relative z-10">
                  <h3 className="text-white text-[20px] font-bold mb-6">What You Can Expect</h3>
                  <div className="flex flex-col gap-4">
                    {[
                      "Lower loan comparisons across lenders",
                      "Honest discussions of rates and loan terms",
                      "Support from initial consultation through funding",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-white/90 text-[14px] font-medium leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 8 — FAQ
        ════════════════════════════════════════════════════════════ */}
        <section className="w-full py-16 lg:py-20 px-6 lg:px-10 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-4">
                QUICK ANSWERS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[36px] font-playfair font-normal leading-tight">
                Frequently Asked Questions About {city} Home Loans
              </h2>
            </div>

            <FaqAccordion
              items={cityData.faqs.map((faq) => ({ q: faq.question, a: faq.answer }))}
            />
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 9 — BOTTOM CTA
        ════════════════════════════════════════════════════════════ */}
        <section className="w-full bg-[#2d8545] py-12 lg:py-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(-45deg, #fff 0px, #fff 1px, transparent 1px, transparent 8px)" }} />
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h2 className="text-white text-[22px] lg:text-[28px] font-playfair font-normal mb-3">
              Talk to a {city} Loan Expert
            </h2>
            <p className="text-white/80 text-[14px] mb-6">
              Start your pre-approval in about three minutes — no cost, no obligation.
            </p>
            <HeroCtaButtons variant="onGreen" />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}