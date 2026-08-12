"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import StatsBanner from "../component/StatsBanner";
import LoanProgramHero from "../component/LoanProgramHero";
import { LOAN_PROGRAM_LINKS } from "@/lib/company";

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
      desc: "The conventional loan limit in Arizona is $832,750 for single-family homes. Higher limits are available for multi-unit properties: $981,500 for duplexes, $1,186,350 for triplexes, and $1,474,400 for four-unit properties.",
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

  const testimonials = [
    {
      text: "You closed our house loan in 17 days!!! When we asked Chase how long escrow would take, we were told one to two months. We will never go to a large bank for a home loan again — you are our loan guy, period!",
      author: "James Robbins",
      location: "Phoenix, Arizona",
    },
    {
      text: "Eddie did an incredible job getting our new home loan processed quickly and efficiently at an even lower interest rate than we had discussed. His professionalism, diligence, and kindness made him a pleasure to work with.",
      author: "Marina McLennan",
      location: "Chandler, Arizona",
    },
    {
      text: "Eddie was referred to us by my sister and brother-in-law. Eddie was very helpful and knowledgeable through the entire process. He was very responsive.",
      author: "Jason and Holly Raines",
      location: "Scottsdale, Arizona",
    },
    {
      text: "Eddie Knoell was the utmost professional. He is detail oriented, on top of the loan and process. He was able to adjust and accommodate any glitch that came our way. We would highly recommend Eddie.",
      author: "Jeanne Morain",
      location: "Gilbert, Arizona",
    },
  ];

  const faqs = [
    {
      q: "What is a conventional loan?",
      a: "A conventional loan is a mortgage that is not backed by a government agency. These loans are typically owned by Fannie Mae or Freddie Mac and follow their guidelines. Conventional loans offer competitive rates and flexible terms for various property types and purposes.",
    },
    {
      q: "What are the loan limits for conventional home loans in Arizona?",
      a: "For 2026, the conventional loan limits in Arizona are: Single-family homes: $832,750; Duplexes: $1,066,250; Triplexes: $1,288,800; Four-unit properties: $1,601,750.",
    },
    {
      q: "What's the minimum down payment for a conventional loan?",
      a: "You can put down as little as 3% for a conventional loan. This low down payment option makes homeownership more accessible, especially for first-time buyers. However, putting 20% or more down eliminates the need for private mortgage insurance (PMI).",
    },
    {
      q: "What credit score do I need for a conventional loan?",
      a: "The minimum credit score required for a conventional loan is 620. However, higher credit scores often lead to better interest rates and lower mortgage insurance premiums.",
    },
    {
      q: "Can I use a conventional loan for an investment property?",
      a: "Yes, conventional loans can be used for investment properties, second homes, and primary residences. This flexibility is one of the key advantages of conventional loans compared to some government-backed loan programs.",
    },
    {
      q: "What is the recast option in conventional loans?",
      a: "The recast option is a unique feature of conventional loans that allows you to recalculate your mortgage payment after making a large principal payment. This can potentially lower your monthly payments without the need to refinance.",
    },
  ];

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

        {/* HIGHLIGHT BAR */}
        <div className="w-full bg-[#03170e] text-[#c8c8b8] border-y border-white/10 py-4 px-6">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-around gap-6 text-[14px] font-medium">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-[#3fb364]">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

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
                Discover the advantages that make conventional home loans an excellent choice for Arizona homebuyers. These loans offer a powerful combination of flexibility, competitive rates, and accessibility that can help you achieve your homeownership dreams.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                With features like low down payments, high loan limits, and favorable terms for various property types, conventional home loans stand out as a versatile financing solution. They&apos;re designed to serve primary residences, vacation homes, and investment properties — and offer unique benefits such as the ability to finance manufactured homes and condos with ease.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                One of the most compelling aspects of conventional home loans is that they represent some of the cheapest money you can borrow. Thanks to the backing of Fannie Mae and Freddie Mac, these loans offer interest rates that often outcompete other financing options.
              </p>
              <Link
                href="/#get-pre-approved"
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
        <section className="loan-section bg-[#fcf9f3]">
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
              Remember, meeting these criteria doesn&apos;t guarantee approval, but it puts you in a strong position. Our team at AZ Mortgage Brothers can help you assess your eligibility and find the best conventional loan option for your unique situation.
            </p>

            <div className="loan-btn-wrap">
              <Link
                href="/#get-pre-approved"
                className="bg-[#3fb364] hover:bg-[#359854] text-white font-bold text-[16px] px-8 py-4 rounded-full transition-all shadow-md inline-block"
              >
                GET PRE-APPROVED →
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
                Securing a conventional loan with AZ Mortgage Brothers is a straightforward process designed to get you into your dream home quickly and efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-6 hover:border-[#3fb364] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center font-bold text-[18px] mb-4 group-hover:bg-[#3fb364] group-hover:text-white transition-colors">
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
                Why Choose AZ Mortgage Brothers for Your Conventional Home Loan?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                At AZ Mortgage Brothers, we&apos;re committed to making your homeownership dreams a reality. Our expertise in conventional loans and deep understanding of the Arizona real estate market set us apart.
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
                At AZ Mortgage Brothers, we&apos;re not just lenders — we&apos;re your partners in achieving homeownership. Let our experience and dedication work for you in securing the best conventional loan for your needs.
              </p>
              <a
                href="tel:+16025352171"
                className="inline-block text-[28px] lg:text-[32px] font-bold text-[#3fb364] hover:text-[#359854] transition-colors"
              >
                (602) 535-2171
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
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                CLIENT REVIEWS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                What Our Clients Say About Us
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                At AZ Mortgage Brothers, we take pride in helping Arizona residents achieve their homeownership dreams through conventional loans. Hear from some of our satisfied clients who have experienced our commitment to excellence firsthand.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-6 shadow-sm"
                >
                  <div className="text-[#3fb364] text-[14px] mb-3 tracking-wider">★★★★★</div>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                  <p className="text-[#052316] text-[14px] font-bold">{t.author}</p>
                  <p className="text-[#b8d4b8] text-[13px]">{t.location}</p>
                </div>
              ))}
            </div>

            <div className="loan-btn-wrap">
              <Link
                href="/client-mortgage-reviews/"
                className="inline-block bg-[#052316] hover:bg-[#0a3a24] text-white font-bold px-7 py-3.5 rounded-full transition-all shadow"
              >
                Explore All Client Testimonials →
              </Link>
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

        {/* FINAL CTA */}
        <section className="loan-section bg-[#052316] text-white">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-[28px] lg:text-[40px] font-bold font-playfair">
              Get Started with Your Conventional Home Loan Today
            </h2>
            <p className="text-[#c8c8b8] text-[16px] max-w-2xl mx-auto leading-relaxed">
              Take the first step towards your dream home with AZ Mortgage Brothers. Our team of experienced mortgage professionals is ready to guide you through the conventional loan process and help you secure the best possible terms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-xl mx-auto">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#3fb364] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[13px] text-[#b8d4b8] uppercase tracking-wider font-bold mb-1">Phone</p>
                  <a href="tel:+16025352171" className="text-white font-semibold hover:text-[#3fb364] transition-colors">
                    (602) 535-2171
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#3fb364] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[13px] text-[#b8d4b8] uppercase tracking-wider font-bold mb-1">Address</p>
                  <p className="text-white text-[14px] leading-relaxed">
                    1599 East Orangewood Ave Suite 200, Phoenix, AZ 85020
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/#get-pre-approved"
              className="inline-block bg-[#3fb364] hover:bg-[#359854] text-white font-bold text-[16px] px-8 py-4 rounded-full transition-all shadow-lg"
            >
              GET PRE-APPROVED →
            </Link>
          </div>
        </section>

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
              Equal Housing Lender. Mortgage Brothers LLC NMLS #1007154. Loan officers: Eddie Knoell NMLS #210917, Thomas Knoell NMLS #1618695. Rates and terms subject to change. This is not a commitment to lend.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}