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
import { LOAN_PROGRAM_LINKS } from "@/lib/company";

import CountyTestimonials, { type CountyTestimonial } from "../component/CountyTestimonials";
import { cardIconBadgeClassName } from "../component/IconBadge";

export default function ConventionalHomeLoansPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const highlights = [
    "Secure Your Dream Home with Just 3% Down",
    "Access Competitive Rates for Smart Homeownership",
    "Flexible Options for Various Property Types",
  ];

  const benefits = [
    {
      title: "Low Down Payment Options",
      desc: "Put as little as 3% down on your dream home, making homeownership more accessible than ever.",
    },
    {
      title: "Competitive Interest Rates",
      desc: "Access some of the cheapest money you can borrow, with rates that reward consistent income and excellent credit scores.",
    },
    {
      title: "Flexible Property Options",
      desc: "Use conventional loans for primary residences, second homes, and investment properties, including manufactured homes and condos.",
    },
    {
      title: "High Loan Limits",
      desc: "Borrow up to $832,750 for single-family homes in Arizona, allowing you to purchase a wide range of properties.",
    },
    {
      title: "Unique Recast Option",
      desc: "Take advantage of the ability to recalculate your mortgage payment after making a large principal payment, a feature exclusive to conventional loans.",
    },
    {
      title: "Favorable Guidelines for Self-Employed",
      desc: "Enjoy more flexible documentation requirements, often needing only one year of tax returns instead of two.",
    },
  ];

  const eligibilityItems = [
    {
      title: "Credit Score",
      desc: "A minimum credit score of 620 is required. However, higher scores often lead to better interest rates and lower mortgage insurance premiums.",
    },
    {
      title: "Down Payment",
      desc: "You can put down as little as 3% of the home's purchase price. Putting 20% or more down eliminates the need for private mortgage insurance (PMI).",
    },
    {
      title: "Debt-to-Income Ratio",
      desc: "Your debt-to-income ratio should not exceed 50%. Lower ratios may improve your chances of approval and potentially lead to better loan terms.",
    },
    {
      title: "Loan Limits",
      desc: "The conventional loan limit in Arizona is $832,750 for single-family homes. Higher limits are available for multi-unit properties: $1,066,250 for duplexes, $1,288,800 for triplexes, and $1,601,750 for four-unit properties.",
    },
    {
      title: "Employment and Income",
      desc: "Lenders typically prefer stable employment and consistent income. For self-employed borrowers, conventional home loans often require only one year of tax returns.",
    },
  ];

  const processSteps = [
    {
      title: "Apply Online or Schedule a Consultation",
      desc: "Begin by filling out our online application or calling to set up a personalized consultation. We'll discuss your goals and help determine if a conventional loan is right for you.",
    },
    {
      title: "Get Pre-Approved",
      desc: "We'll review your financial information to provide a pre-approval letter, giving you a clear picture of your buying power and strengthening your position when making offers.",
    },
    {
      title: "Find Your Dream Home",
      desc: "Armed with your pre-approval, work with your real estate agent to find the perfect property within your budget.",
    },
    {
      title: "Complete Full Application",
      desc: "Once you've found your ideal home, we'll assist you in finalizing your loan application and gathering all necessary documentation for underwriting.",
    },
    {
      title: "Underwriting and Approval",
      desc: "Our team processes your application diligently, keeping you informed throughout this critical stage to ensure a smooth approval process.",
    },
    {
      title: "Close on Your Loan",
      desc: "After final approval, we'll coordinate with all parties to ensure everything is in order for closing day. You'll sign the paperwork, receive your keys, and begin your new chapter as a homeowner.",
    },
  ];

  const whyUsItems = [
    {
      title: "Years of Experience in Arizona Real Estate",
      desc: "Our team has extensive knowledge of local market trends and regulations, helping countless Arizona residents navigate the conventional loan process successfully.",
    },
    {
      title: "Personalized Service and Expert Guidance",
      desc: "We tailor our approach to your unique financial situation, providing customized advice to help you make informed decisions throughout your homebuying journey.",
    },
    {
      title: "Access to Competitive Rates",
      desc: "As experts in conventional loans, we have access to some of the most competitive rates in the market, potentially saving you thousands over the life of your loan.",
    },
    {
      title: "Streamlined Application Process",
      desc: "We've refined our process to make applying for a conventional loan as smooth as possible, from initial consultation to closing.",
    },
    {
      title: "Innovative Loan Features",
      desc: "We offer unique benefits like the recast option, allowing you to recalculate your mortgage payment after making a large principal payment.",
    },
    {
      title: "Comprehensive Support for Various Property Types",
      desc: "Whether you're buying a primary residence, second home, or investment property, we specialize in conventional loans for manufactured homes and condos too.",
    },
  ];

  const testimonials: CountyTestimonial[] = [
  {
    name: "James Robbins",
    quote: "You closed our house loan in 17 days!!! When we asked Chase how long escrow would take, we were told one to two months. We will never go to a large bank for a home loan again — you are our loan guy, period!",
    attribution: "James Robbins, Phoenix, Arizona",
  },
  {
    name: "Marina McLennan",
    quote: "Eddie did an incredible job getting our new home loan processed quickly and efficiently at an even lower interest rate than we had discussed. His professionalism, diligence, and kindness made him a pleasure to work with.",
    attribution: "Marina McLennan, Chandler, Arizona",
  },
  {
    name: "Jason and Holly Raines",
    quote: "Eddie was referred to us by my sister and brother-in-law. Eddie was very helpful and knowledgeable through the entire process. He was very responsive.",
    attribution: "Jason and Holly Raines, Scottsdale, Arizona",
  },
  {
    name: "Jeanne Morain",
    quote: "Eddie Knoell was the utmost professional. He is detail oriented, on top of the loan and process. He was able to adjust and accommodate any glitch that came our way. We would highly recommend Eddie.",
    attribution: "Jeanne Morain, Gilbert, Arizona",
  },
];

  const faqs = pageFaqs;

  const otherPrograms = LOAN_PROGRAM_LINKS.filter(
    (l) => l.href !== "/conventional-home-loans-arizona/"
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        <LoanProgramHero
          title="Conventional Home Loans in Arizona"
          subtitle="Flexible options, competitive rates, and expert guidance"
        />

        <HeroFeatureStrip items={highlights} />


        {/* WHY CHOOSE */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase">
                CONVENTIONAL FINANCING
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair leading-tight">
                Why Choose a Conventional Home Loan?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Discover the advantages that make conventional home loans an excellent choice for Arizona homebuyers. These loans offer a powerful combination of <strong className="text-[#052316] font-semibold">flexibility, competitive rates, and accessibility</strong> that can help you achieve your homeownership dreams.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                With features like <strong className="text-[#052316] font-semibold">low down payments, high loan limits, and favorable terms</strong> for various property types, conventional home loans stand out as a versatile financing solution. They&apos;re designed to serve <strong className="text-[#052316] font-semibold">primary residences, vacation homes, and investment properties</strong> — and offer unique benefits such as the ability to <strong className="text-[#052316] font-semibold">finance manufactured homes and condos</strong> with ease.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                One of the most compelling aspects of conventional home loans is that they represent <strong className="text-[#052316] font-semibold">some of the cheapest money you can borrow</strong>. Thanks to the backing of Fannie Mae and Freddie Mac, these loans offer interest rates that often outcompete other financing options.
              </p>
              <Link
                href="#get-pre-approved"
                className="inline-block bg-[#052316] hover:bg-[#0a3a24] text-white font-bold px-7 py-3.5 rounded-full transition-all shadow"
              >
                Discover Your Options →
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

        {/* STATS BANNER */}
        <StatsBanner
          stats={[
            { value: "$832,750", label: "Max Loan Amount" },
            { value: "3%", label: "Minimum Down Payment" },
            { value: "620", label: "Minimum Credit Score" },
            { value: "50%", label: "Max Debt-to-Income Ratio" },
          ]}
        />

        {/* ELIGIBILITY */}
        <section className="loan-section bg-[#fcf9f3] !pt-8 sm:!pt-10 lg:!pt-12">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                ELIGIBILITY
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Do You Qualify? Understanding Conventional Home Loan Eligibility
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                Conventional loans offer flexibility and competitive rates, but they do have specific eligibility criteria. Here&apos;s what you need to know to determine if you qualify for a conventional loan in Arizona.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {eligibilityItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm"
                >
                  <h3 className="text-[17px] font-bold text-[#052316] mb-2 font-playfair">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-[#4e5b4e] text-[15px] leading-relaxed text-center max-w-3xl mx-auto">
              Remember, meeting these criteria doesn&apos;t guarantee approval, but it puts you in a strong position. Our team at Mortgage Brothers LLC can help you assess your eligibility and find the best conventional loan option for your unique situation.
            </p>

            <div className="loan-btn-wrap">
              <Link
                href="#get-pre-approved"
                className="bg-[#3fb364] hover:bg-[#359854] text-white font-bold text-[16px] px-8 py-4 rounded-full transition-all shadow-md inline-block"
              >
                Get Your Free Counsultation →
              </Link>
            </div>
          </div>
        </section>

        {/* PROCESS STEPS */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                HOW IT WORKS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Your Path to Homeownership: Simple Steps to Success
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                Securing a conventional loan with Mortgage Brothers LLC is a straightforward process designed to get you into your dream home quickly and efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-6 hover:border-[#3fb364] transition-all group"
                >
                  <div className={cardIconBadgeClassName("sm", "font-bold mb-4")}>
                    {idx + 1}
                  </div>
                  <h3 className="text-[16px] font-bold text-[#052316] mb-2 font-playfair">{step.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY AZ MORTGAGE BROTHERS */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                LOCAL EXPERTISE
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Why Choose Mortgage Brothers LLC for Your Conventional Home Loan?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                At Mortgage Brothers LLC, we&apos;re committed to making your homeownership dreams a reality. Our expertise in conventional loans and deep understanding of the Arizona real estate market set us apart.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {whyUsItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm hover:border-[#3fb364] transition-all"
                >
                  <h3 className="text-[16px] font-bold text-[#052316] mb-2 font-playfair">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#052316] rounded-3xl p-8 lg:p-10 text-center text-white space-y-4">
              <p className="text-[16px] text-[#c8c8b8] max-w-2xl mx-auto leading-relaxed">
                At Mortgage Brothers LLC, we&apos;re not just lenders — we&apos;re your partners in achieving homeownership. Let our experience and dedication work for you in securing the best conventional loan for your needs.
              </p>
              <a
                href="tel:+16025352171"
                className="inline-block text-[28px] lg:text-[32px] font-bold text-[#3fb364] hover:text-[#359854] transition-colors"
              >
                +1 (602) 535-2171
              </a>
              <div>
                <a
                  href="tel:+16025352171"
                  className="inline-block border border-white/30 hover:border-white text-white font-semibold text-[15px] px-7 py-3.5 rounded-full transition-all hover:bg-white/10"
                >
                  Call Now for Expert Advice
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <CountyTestimonials
          title="What Our Clients Say About Us"
          testimonials={testimonials}
        />

        {/* FAQ */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Frequently Asked Questions About Conventional Home Loans
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-2xl mx-auto mt-4">
                We understand that navigating the world of conventional loans can be complex. Here are answers to some of the most common questions we receive.
              </p>
            </div>

            <div className="space-y-4 text-left">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e0e0e0] rounded-2xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-[#052316] text-[16px] focus:outline-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#3fb364] text-[20px] ml-4 font-bold shrink-0">
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </button>

                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-[#4e5b4e] text-[14.5px] leading-relaxed border-t border-[#f0f0f0] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <GetInTouch
          theme="dark"
          title="Get Started with Your Conventional Home Loan Today"
          description="Take the first step towards your dream home with Mortgage Brothers LLC. Our team of experienced mortgage professionals is ready to guide you through the conventional loan process and help you secure the best possible terms."
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
                Explore Other Loan Programs
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
              Mortgage Brothers LLC NMLS #1007154. Loan officers: Eddie Knoell NMLS #210917, Thomas Knoell NMLS #1618695. Rates and terms subject to change. This is not a commitment to lend.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}