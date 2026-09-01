"use client";

import { faqs as pageFaqs } from "./faqs";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import StatsBanner from "../component/StatsBanner";
import LoanProgramHero from "../component/LoanProgramHero";
import HeroFeatureStrip from "../component/HeroFeatureStrip";
import GetInTouch from "../component/GetInTouch";

import CountyTestimonials, { type CountyTestimonial } from "../component/CountyTestimonials";
import { cardIconBadgeClassName } from "../component/IconBadge";

const faqs = pageFaqs;

const benefits = [
  {
    title: "Stay in your home",
    desc: "Continue living in your cherished home while accessing its equity.",
  },
  {
    title: "Eliminate monthly mortgage payments",
    desc: "Free up cash flow by removing the burden of regular mortgage payments.",
  },
  {
    title: "Supplement retirement income",
    desc: "Receive steady payments to boost your monthly income during retirement.",
  },
  {
    title: "Pay for healthcare expenses",
    desc: "Use the funds to cover medical costs or long-term care needs.",
  },
  {
    title: "No restrictions on fund usage",
    desc: "Spend the money as you see fit, whether for home improvements, travel, or daily expenses.",
  },
] as const;

const eligibility = [
  { title: "Age", desc: "You must be 62 years or older" },
  { title: "Home ownership", desc: "Your home must be your primary residence" },
  { title: "Financials", desc: "You must stay current on taxes and insurance." },
  { title: "Home maintenance", desc: "You must keep the home well-maintained" },
] as const;

const processSteps = [
  {
    title: "Initial Consultation",
    desc: "We'll start with a comprehensive discussion about your financial goals and needs. Our experts will explain how a reverse mortgage works, answer all your questions, and provide a personalized assessment based on your unique situation in Arizona.",
  },
  {
    title: "HUD Counseling",
    desc: "As required by law, you'll complete a counseling session with a HUD-approved counselor. This independent session ensures you fully understand the reverse mortgage process. We'll provide a list of approved agencies in Arizona and guide you through scheduling your appointment.",
  },
  {
    title: "Application and Approval",
    desc: "With our assistance, you'll submit your application. We'll work closely with our extensive network of lenders to find the best terms for your situation. Our team will handle the paperwork and keep you informed throughout the approval process, making it as stress-free as possible.",
  },
  {
    title: "Closing and Funding",
    desc: "Once approved, we'll guide you through the closing process, explaining each step clearly. After closing, you'll have access to your funds according to the agreed terms. Whether you choose a lump sum, line of credit, or monthly payments, we'll ensure you understand how to access and manage your reverse mortgage funds.",
  },
] as const;

const testimonials: CountyTestimonial[] = [
  {
    name: "Denise Roeder",
    quote: "This is my 8th home purchase and mortgage. Working with Eddie has been by far, the most simple, straight forward experience I have ever had obtaining a mortgage.",
    attribution: "Denise Roeder, Chandler, Arizona",
  },
  {
    name: "Thomas and Carol Milberry",
    quote: "Our mortgage service through Eddie Knoell was seamless throughout. It was like having someone watch over the process without us having any concern. All questions were answered promptly and completely, like dealing with a trusted family member.",
    attribution: "Thomas and Carol Milberry, Queen Creek, Arizona",
  },
  {
    name: "Eric and Joy Stevens",
    quote: "Eddie has been a great help to me. He has refinanced many properties for me and is always very professional. I have recommended him to many people.",
    attribution: "Eric and Joy Stevens, Phoenix, Arizona",
  },
  {
    name: "Michael and Donna Hawkins",
    quote: "Eddie saved us over $500 a month! He explained in great detail the program options, locked us into a great rate, and made it happen for us. We will definitely be referring our family and friends.",
    attribution: "Michael and Donna Hawkins, Glendale, Arizona",
  },
  {
    name: "Anita Sanda",
    quote: "Eddie went above the call of duty on 3 separate transactions for us. Each time we challenged him to work under different circumstances and each time he came through and exceeded our expectations!",
    attribution: "Anita Sanda, Surprise, Arizona",
  },
  {
    name: "Kristy Bartusek",
    quote: "Thank you for outstanding service in the refinance of our home! Not only were you professional and courteous, you were realistic and honest. Our transaction was easier than we could have imagined and we will definitely call on you for our future needs!",
    attribution: "Kristy Bartusek, Tempe, Arizona",
  },
];

const whyUs = [
  {
    title: "Local Arizona Expertise",
    desc: "As third-generation Arizona natives, we understand the unique needs of homeowners in Phoenix, Scottsdale, Mesa, and beyond.",
  },
  {
    title: "Personalized Solutions",
    desc: "We tailor our approach to your specific situation, ensuring you get the most beneficial reverse mortgage terms.",
  },
  {
    title: "Wide Lender Network",
    desc: "Our extensive connections allow us to find the best reverse mortgage options and rates available in Arizona.",
  },
  {
    title: "Streamlined Process",
    desc: "We simplify the complex reverse mortgage process, guiding you every step of the way for a stress-free experience.",
  },
  {
    title: "Trusted Reputation",
    desc: (
      <>
        With <strong>hundreds of satisfied clients</strong> and a <strong>5.0/5 rating on Google Reviews</strong>, our reputation speaks for itself.
      </>
    ),
  },
] as const;

const relatedLoans = [
  { href: "/conventional-home-loans-arizona/", label: "Conventional Home Loans" },
  { href: "/conventional-vs-fha-loans-arizona/", label: "Conventional vs FHA Loans" },
  { href: "/fha-home-loans-arizona/", label: "FHA Home Loans" },
  { href: "/fha-streamline-refinance-arizona/", label: "FHA Streamline Refinance" },
  { href: "/first-time-home-buyer-arizona-guide/", label: "First Time Home Buyer" },
  { href: "/jumbo-loans-arizona/", label: "Jumbo Loans" },
  { href: "/reverse-mortgage-home-purchase-arizona/", label: "Reverse Mortgage for a Home Purchase" },
  { href: "/private-money-lender-arizona/", label: "Private Money Lender" },
  { href: "/refinancing-arizona/", label: "Refinancing" },
  { href: "/va-loans-arizona/", label: "VA Loans" },
] as const;

const STATS = [
  { value: "Yes", label: "Do you Love Your Home?" },
  { value: "Yes", label: "Do you Love your Location?" },
  { value: "Yes", label: "Is Your Home Low Maintenance?" },
  { value: "Yes", label: "Is Your Income Limited?" },
] as const;

const featureStrip = [
  "19.3% of Arizonans are 62+",
  "No Monthly Payments Required",
  "Use Funds Any Way You Choose",
];

export default function ReverseMortgageArizonaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main id="main-content" className="flex-grow">
        <LoanProgramHero
          title="Reverse Mortgage in Arizona"
          subtitle="Unlock Your Home's Value with a Reverse Mortgage"
        />

        <HeroFeatureStrip items={featureStrip} />

        {/* OVERVIEW — heading above; card aligns with body copy */}
        <section className="loan-section bg-white no-content-visibility">
          <div className="max-w-5xl mx-auto">
            <header className="mb-6 lg:mb-8 text-left">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase">
                UNDERSTANDING REVERSE MORTGAGES
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair leading-tight mt-4">
                Why Choose a Reverse Mortgage?
              </h2>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 space-y-5 text-left">
                <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                  A reverse mortgage is a powerful financial tool for Arizona homeowners 62 and older who want to access the equity they&apos;ve built in their home — without selling it or making monthly mortgage payments. The most common type is the HECM (Home Equity Conversion Mortgage), which is federally insured by the FHA and designed to give seniors greater financial flexibility in retirement.
                </p>
                <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                  Whether you want to eliminate your existing mortgage payment, supplement your monthly income, cover healthcare costs, or simply have a financial cushion for life&apos;s unexpected expenses, a reverse mortgage lets you <strong>unlock your home&apos;s value on your terms.</strong> You remain the owner of your home, and the loan doesn&apos;t come due until you sell, move out, or pass away.
                </p>
                <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                  For Arizona seniors — whether you&apos;re in Phoenix, Scottsdale, Tucson, or anywhere across the state — a reverse mortgage can be a smart way to <strong>enjoy your retirement years with less financial stress.</strong> Our team specializes in HECM reverse mortgages and will walk you through every step so you fully understand how it works before making any decisions.
                </p>
                <div className="pt-1">
                  <Link
                    href="#get-pre-approved"
                    data-preapproval="true"
                    className="inline-flex items-center justify-center bg-[#052316] hover:bg-[#0a3a24] text-white font-bold px-7 py-3.5 leading-none rounded-full transition-all shadow"
                  >
                    GET PRE-APPROVED NOW →
                  </Link>
                </div>
              </div>

              <aside className="lg:col-span-5">
                <div className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-3xl px-6 py-6 text-left shadow-sm">
                  <h3 className="text-[19px] font-bold text-[#052316] font-playfair border-b border-[#e0e0e0] pb-3 mb-4">
                    Key Reverse Mortgage Benefits
                  </h3>
                  <ul className="m-0 list-none space-y-3.5 p-0 text-[14px] text-[#32353C]">
                    {benefits.map((b) => (
                      <li key={b.title} className="flex items-center gap-3">
                        <span
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3fb364]/15 text-[12px] font-bold text-[#3fb364]"
                          aria-hidden
                        >
                          ✓
                        </span>
                        <span>
                          <strong>{b.title}</strong> — {b.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* CTA + Stats — equal gap above/below the stats card */}
        <section className="loan-cta-band no-content-visibility bg-[#fcf9f3] !pb-0">
          <div className="mx-auto max-w-6xl text-center loan-block-gap">
            <Link
              href="#get-pre-approved"
              data-preapproval="true"
              className="inline-flex items-center justify-center rounded-full bg-[#3fb364] px-8 py-3.5 text-[16px] font-bold leading-none text-white shadow-md transition-all hover:bg-[#359854]"
            >
              Lower Your Payments Now →
            </Link>
          </div>
          <StatsBanner sectionClassName="py-0 bg-transparent" stats={[...STATS]} />
        </section>

        {/* ELIGIBILITY */}
        <section className="loan-section no-content-visibility bg-[#fcf9f3] !pt-8 sm:!pt-10 lg:!pt-12">
          <div className="mx-auto max-w-5xl space-y-10 text-center">
            <div>
              <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#3fb364]">
                ELIGIBILITY
              </span>
              <h2 className="font-playfair text-[28px] font-bold text-[#052316] lg:text-[38px]">
                Are You Eligible for a Reverse Mortgage?
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-[15.5px] leading-relaxed text-[#4e5b4e]">
                Reverse mortgages offer unique benefits for Arizona homeowners <strong>62 and older</strong>. Check if you meet the basic requirements:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-4">
              {eligibility.map((item, idx) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-[#e0e0e0] bg-white p-6 shadow-sm transition-all hover:border-[#3fb364] hover:shadow-md"
                >
                  <div className={cardIconBadgeClassName("sm", "font-bold mb-4")}>
                    {idx + 1}
                  </div>
                  <h3 className="mb-2 font-playfair text-[17px] font-bold text-[#052316]">{item.title}</h3>
                  <p className="text-[14px] leading-relaxed text-[#4e5b4e]">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="loan-btn-wrap">
              <Link
                href="#get-pre-approved"
                data-preapproval="true"
                className="inline-block rounded-full bg-[#3fb364] px-8 py-4 text-[16px] font-bold text-white shadow-md transition-all hover:bg-[#359854]"
              >
                Speak with a Reverse Mortgage Expert →
              </Link>
            </div>
          </div>
        </section>

        {/* CREDIT QUIZ CTA */}
        <section className="loan-section bg-white">
          <div className="mx-auto max-w-3xl space-y-4 rounded-3xl bg-[#052316] p-8 text-center text-white shadow-lg lg:p-10">
            <h3 className="font-playfair text-[22px] font-bold lg:text-[26px]">
              Does Your Credit Profile Support a Reverse Mortgage?
            </h3>
            <p className="text-[15px] leading-relaxed text-[#c8c8b8]">
              While reverse mortgages have unique requirements, your credit history still matters. Find out how your credit affects your reverse mortgage options.
            </p>
            <Link
              href="/credit-score-quiz/"
              className="inline-block rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              Take The Quiz
            </Link>
          </div>
        </section>

        {/* PROCESS */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="text-center">
              <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#3fb364]">
                THE PROCESS
              </span>
              <h2 className="font-playfair text-[28px] font-bold text-[#052316] lg:text-[38px]">
                The Reverse Mortgage Process: Simple and Straightforward
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-[15.5px] leading-relaxed text-[#4e5b4e]">
                At The Mortgage Brothers, we&apos;ve streamlined the reverse mortgage process to make it as easy as possible for you. Our expertise in the Arizona market ensures a smooth experience from start to finish. Here&apos;s how it works:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-2">
              {processSteps.map((step, idx) => (
                <div key={step.title} className="group rounded-2xl border border-[#e0e0e0] bg-white p-6 shadow-sm transition-all hover:border-[#3fb364] hover:shadow-md">
                  <div className={cardIconBadgeClassName("sm", "font-bold mb-4")}>
                    {idx + 1}
                  </div>
                  <h3 className="mb-2 font-playfair text-[17px] font-bold text-[#052316]">{step.title}</h3>
                  <p className="text-[14px] leading-relaxed text-[#4e5b4e]">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="loan-btn-wrap">
              <Link
                href="#get-pre-approved"
                data-preapproval="true"
                className="inline-block rounded-full bg-[#3fb364] px-8 py-4 text-[16px] font-bold text-white shadow-md transition-all hover:bg-[#359854]"
              >
                Schedule Your No-Obligation Consultation →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="loan-section bg-white">
          <div className="mx-auto max-w-4xl space-y-10">
            <div className="text-center">
              <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#3fb364]">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="font-playfair text-[28px] font-bold text-[#052316] lg:text-[38px]">
                Common Questions About Reverse Mortgages in Arizona
              </h2>
            </div>

            <div className="space-y-4 text-left">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-2xl border border-[#e0e0e0] bg-[#fcf9f3] shadow-sm transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left text-[16px] font-semibold text-[#052316] focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      <span className="ml-4 text-[20px] font-bold text-[#3fb364]" aria-hidden>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen ? (
                      <div className="border-t border-[#f0f0f0] px-6 pb-6 pt-4 text-[14.5px] leading-relaxed text-[#4e5b4e]">
                        {faq.a}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="space-y-3 rounded-3xl bg-[#052316] p-8 text-center text-white">
              <p className="text-[18px] font-semibold">Have More Questions? Contact Our Reverse Mortgage Experts</p>
              <a href="tel:+16025352171" className="block text-[28px] font-bold text-[#3fb364] hover:underline">
                +1 (602) 535-2171
              </a>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <CountyTestimonials
          title="What Our Clients Say About Reverse Mortgages"
          testimonials={testimonials}
        />

        {/* WHY MORTGAGE BROTHERS */}
        <section className="loan-section bg-white">
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="space-y-5 text-left lg:col-span-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3fb364]">
                WHY MORTGAGE BROTHERS
              </span>
              <h2 className="font-playfair text-[28px] font-bold leading-tight text-[#052316] lg:text-[36px]">
                Why Choose The Mortgage Brothers for Your Reverse Mortgage
              </h2>
              <p className="text-[15.5px] leading-relaxed text-[#4e5b4e]">
                With over <strong>25 years of experience</strong> in the Arizona real estate market, The Mortgage Brothers bring unparalleled expertise to your reverse mortgage journey. Our <strong>deep roots in Phoenix, Scottsdale, and beyond</strong> give us unique insights into the local housing market. We understand the specific needs of Arizona homeowners and are committed to providing <strong>personalized solutions</strong> that enhance your <strong>financial freedom during retirement.</strong>
              </p>
              <p className="text-[15.5px] leading-relaxed text-[#4e5b4e]">
                As a <strong>family-owned business</strong>, we prioritize building lasting relationships with our clients. Our team of experts is dedicated to <strong>simplifying the complex reverse mortgage process</strong>, ensuring you have a clear understanding of your options and the confidence to make informed decisions. Whether you&apos;re looking to <strong>supplement your retirement income</strong>, cover healthcare costs, or simply enjoy your golden years without financial stress, we&apos;re here to guide you every step of the way.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:col-span-7">
              {whyUs.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#e0e0e0] bg-[#fcf9f3] p-5">
                  <h3 className="mb-2 font-playfair text-[16px] font-bold text-[#052316]">{item.title}</h3>
                  <p className="text-[14px] leading-relaxed text-[#4e5b4e]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="loan-section bg-[#052316] text-white">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <h2 className="font-playfair text-[28px] font-bold lg:text-[40px]">
              Ready to Learn More About Reverse Mortgages?
            </h2>
            <p className="mx-auto max-w-2xl text-[16px] leading-relaxed text-[#c8c8b8]">
              From Tucson to Phoenix, The Mortgage Brothers are here to simplify your reverse mortgage experience. With our reputation built on trust and quality, we&apos;ll help you make an informed decision about this unique financial tool.
            </p>
            <p className="text-[15px] text-[#c8c8b8]">
              1599 East Orangewood Ave Suite 200, Phoenix, AZ 85020
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="#get-pre-approved"
                data-preapproval="true"
                className="rounded-full bg-[#3fb364] px-8 py-4 text-[16px] font-bold text-white shadow-lg transition-all hover:bg-[#359854]"
              >
                GET PRE-APPROVED NOW →
              </Link>
              <a
                href="tel:+16025352171"
                className="rounded-full border border-white/30 px-7 py-4 text-[15px] font-semibold text-white transition-all hover:border-white hover:bg-white/10"
              >
                Call +1 (602) 535-2171
              </a>
            </div>
            <p className="mx-auto max-w-3xl pt-6 text-[12px] leading-relaxed text-[#b8d4b8]">
              Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has been prepared for informational purposes only. You should consult your own tax, legal, and accounting advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS #210917 and #1618695. Equal Housing Opportunity.
            </p>
          </div>
        </section>

        <GetInTouch
          theme="light"
          title="Reach Out to Our Reverse Mortgage Experts"
          description="Our team of Arizona reverse mortgage experts is here to provide personalized guidance tailored to your unique situation. Whether you're considering a reverse mortgage in Phoenix, Scottsdale, or anywhere else in Arizona, we're ready to answer your questions and help you make an informed decision."
          showDivider
        />

        {/* RELATED LOANS */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="text-center">
              <h2 className="font-playfair text-[28px] font-bold text-[#052316] lg:text-[34px]">
                Explore Our Mortgage Solutions
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedLoans.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-xl border border-[#e0e0e0] bg-white px-5 py-4 text-[14.5px] font-semibold text-[#052316] transition-all hover:border-[#3fb364] hover:text-[#3fb364]"
                >
                  <span className="text-[#3fb364]" aria-hidden>
                    ✓
                  </span>
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
