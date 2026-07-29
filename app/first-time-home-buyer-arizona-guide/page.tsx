"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import LoanProgramHero from "../component/LoanProgramHero";
import { LOAN_PROGRAM_LINKS } from "@/lib/company";

export default function FirstTimeHomeBuyerGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const highlights = [
    "Expert Guidance for Your Arizona Home Journey",
    "Tailored Loan Programs for Every Credit Score",
    "Navigate Homeownership with Confidence and Ease",
  ];

  const benefits = [
    {
      title: "Navigate with Confidence",
      desc: "Our team walks you through every step of the homebuying process, from pre-approval to closing, so you always know what to expect.",
    },
    {
      title: "Tailored Arizona Expertise",
      desc: "We understand the unique Arizona real estate market and can help you find the right neighborhood and loan program for your goals.",
    },
    {
      title: "Financial Clarity",
      desc: "We break down your costs, monthly payments, and loan options in plain language so you can make informed decisions with confidence.",
    },
    {
      title: "Access to Specialized Programs",
      desc: "Explore first-time buyer programs with as little as 1% down payment, plus down payment assistance options to help you get into a home sooner.",
    },
    {
      title: "Long-term Success",
      desc: "We focus on setting you up for sustainable homeownership, not just closing a loan — your financial well-being is our priority.",
    },
  ];

  const essentialQuestions = [
    {
      title: "Career Stability",
      desc: "Are you in a stable job or career path? Lenders look for consistent employment history, typically two years in the same field, to assess your ability to make monthly mortgage payments.",
    },
    {
      title: "Relationship Status",
      desc: "Are you buying alone or with a partner? Your co-borrower's income, credit, and debts will factor into your loan approval and the home you can afford.",
    },
    {
      title: "Ideal Neighborhood",
      desc: "What kind of community do you want to live in? Consider lifestyle, amenities, schools, and future development when choosing where to buy your first home.",
    },
    {
      title: "Proximity to Work",
      desc: "How far are you willing to commute? Factor in daily travel time, transportation costs, and work-from-home flexibility when selecting a location.",
    },
    {
      title: "Long-term Housing Needs",
      desc: "How long do you plan to stay in this home? Your timeline affects whether buying makes sense now and what type of property best fits your future plans.",
    },
    {
      title: "Financial Readiness",
      desc: "Do you have savings for a down payment and closing costs? Review your credit score, debt levels, and emergency fund before starting your home search.",
    },
  ];

  const financialPathItems = [
    {
      title: "Improve Your Credit Score",
      desc: "Aim for a credit score of 620 or higher for most loan programs. Review your credit report for errors, make all payments on time, reduce credit card balances, and avoid opening new credit accounts before applying for a mortgage.",
    },
    {
      title: "Manage Your Debt",
      desc: "Keep your total monthly housing costs below 45% of your gross income. Pay down existing debt, consider consolidating high-interest balances, and avoid taking on new debt during the homebuying process.",
    },
    {
      title: "Save for a Down Payment",
      desc: "FHA loans require as little as 3.5% down, while conventional loans can go as low as 3%. Explore down payment assistance programs available in Arizona to reduce the amount you need to save.",
    },
    {
      title: "Understand Additional Costs",
      desc: "Budget for closing costs (typically 1–8% of the purchase price), property taxes, homeowners insurance, ongoing maintenance, and potential HOA fees beyond your down payment.",
    },
  ];

  const loanPrograms = [
    {
      title: "VA Loans",
      href: "/va-loans-arizona/",
      desc: "0% down payment, no PMI required. Available to eligible veterans, active-duty service members, and surviving spouses.",
    },
    {
      title: "FHA Loans",
      href: "/fha-home-loans-arizona/",
      desc: "3.5% down payment with credit scores below 700. A flexible option for first-time buyers with less-than-perfect credit.",
    },
    {
      title: "Conventional Loans",
      href: "/conventional-home-loans-arizona/",
      desc: "Best for credit scores of 700+. As low as 3% down, and avoid PMI entirely with a 20% down payment.",
    },
  ];

  const roadmapSteps = [
    {
      title: "Get Pre-approved",
      desc: "Start with a pre-approval letter to understand your budget and show sellers you're a serious, qualified buyer ready to make an offer.",
    },
    {
      title: "Set Your Standards",
      desc: "Define your must-haves and nice-to-haves for your first home — location, size, features, and price range — to focus your search efficiently.",
    },
    {
      title: "Work with a Real Estate Agent",
      desc: "Partner with an experienced Arizona agent who knows the local market and can guide you through showings, negotiations, and the offer process.",
    },
    {
      title: "Home Inspection and Closing",
      desc: "Schedule a professional home inspection, finalize your loan, and complete the closing process to receive your keys and officially become a homeowner.",
    },
  ];

  const whyUsItems = [
    {
      title: "Expertise in First-Time Programs",
      desc: "We specialize in first-time homebuyer loan programs and down payment assistance options available throughout Arizona.",
    },
    {
      title: "Personalized Guidance",
      desc: "Every buyer's situation is different. We take the time to understand your goals and recommend the best path forward for you.",
    },
    {
      title: "Competitive Loan Options",
      desc: "We shop multiple lenders to find competitive terms across FHA, VA, and conventional programs tailored to your profile.",
    },
    {
      title: "Strong Local Market Knowledge",
      desc: "Our deep understanding of Arizona neighborhoods, pricing trends, and local regulations helps you buy with confidence.",
    },
    {
      title: "Commitment to Long-Term Success",
      desc: "We're invested in your homeownership journey beyond closing day, ensuring you choose a loan that works for years to come.",
    },
  ];

  const testimonials = [
    {
      text: "This was our first house and AZ Mortgage Brothers made the entire process easy and stress-free. They explained everything clearly and were always available when we had questions.",
      author: "Sean Cassidy",
      location: "Phoenix, Arizona",
    },
    {
      text: "Constant communication throughout the entire process. We always knew where we stood and what the next step was. Couldn't have asked for a better experience buying our first home.",
      author: "Jaclyn Lindsey",
      location: "Tempe, Arizona",
    },
    {
      text: "As first-time buyers, we had no idea what we were doing. They guided us through every step and made us feel confident in our decisions from start to finish.",
      author: "Mona Collins",
      location: "Phoenix, Arizona",
    },
    {
      text: "Always a phone call away whenever we needed help. Their responsiveness and expertise made buying our first home in Arizona a smooth and enjoyable experience.",
      author: "Christian Holt",
      location: "Phoenix, Arizona",
    },
  ];

  const faqs = [
    {
      q: "How much down payment do I need?",
      a: "Down payment requirements vary by loan type. Conventional loans can require as little as 3% down, FHA loans typically require 3.5% down, and eligible veterans may qualify for VA loans with 0% down. Down payment assistance programs may further reduce what you need out of pocket.",
    },
    {
      q: "What credit score do I need to buy a home?",
      a: "A credit score of 620 is often the minimum for most loan programs. FHA loans may accept scores below 620 in some cases. Higher scores generally lead to better rates and more loan options.",
    },
    {
      q: "How long does the home buying process take?",
      a: "From accepted offer to closing typically takes 30–45 days. The full process — including saving, pre-approval, house hunting, and closing — often spans several months depending on your readiness and market conditions.",
    },
    {
      q: "Can I use gift money for my down payment?",
      a: "Yes, gift funds from family members can be used for your down payment with proper documentation. Your lender will require a gift letter and proof of the transfer to verify the funds.",
    },
    {
      q: "What additional costs should I budget for beyond the down payment?",
      a: "Plan for closing costs (1–8% of the purchase price), property taxes, homeowners insurance, potential HOA fees, and ongoing maintenance and repair costs as a homeowner.",
    },
    {
      q: "How do I choose the right neighborhood?",
      a: "Consider proximity to work, school quality, local amenities, crime rates, and future development plans. Visit neighborhoods at different times of day to get a true feel for the area before making a decision.",
    },
  ];

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

        {/* OVERVIEW + BENEFITS */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase">
                GETTING STARTED
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair leading-tight">
                Your Journey to Homeownership Starts Here
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Buying your first home in Arizona is an exciting milestone, and the Arizona market offers unique opportunities for new buyers. From vibrant urban neighborhoods in Phoenix and Tempe to growing suburban communities, there&apos;s a place for every lifestyle and budget.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Understanding your credit score, down payment options, and specialized loan programs is key to a successful purchase. Arizona first-time buyers can access programs with as little as 1% down, making homeownership more attainable than ever before.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                At AZ Mortgage Brothers, we guide you through every step — from assessing your financial readiness to selecting the right loan program and closing on your dream home.
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
        <section className="w-full bg-[#3fb364] text-white py-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-[36px] lg:text-[44px] font-extrabold leading-none">1%</div>
              <div className="text-[12px] lg:text-[13px] font-bold uppercase tracking-wider mt-2 opacity-90">Minimum Down Payment</div>
            </div>
            <div>
              <div className="text-[36px] lg:text-[44px] font-extrabold leading-none">620</div>
              <div className="text-[12px] lg:text-[13px] font-bold uppercase tracking-wider mt-2 opacity-90">Minimum Credit Score for Most Loans</div>
            </div>
            <div>
              <div className="text-[28px] lg:text-[36px] font-extrabold leading-none">$442,900</div>
              <div className="text-[12px] lg:text-[13px] font-bold uppercase tracking-wider mt-2 opacity-90">Median Home Price in Arizona</div>
            </div>
            <div>
              <div className="text-[28px] lg:text-[36px] font-extrabold leading-none">$16,000</div>
              <div className="text-[12px] lg:text-[13px] font-bold uppercase tracking-wider mt-2 opacity-90">Maximum Down Payment Assistance</div>
            </div>
          </div>
        </section>

        {/* ESSENTIAL QUESTIONS */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                BEFORE YOU BEGIN
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Essential Questions Every First-Time Buyer Should Ask
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                Before you start house hunting, take time to reflect on these key questions. Honest answers will help you set realistic goals and choose the right home and loan program.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {essentialQuestions.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm hover:border-[#3fb364] transition-all"
                >
                  <h3 className="text-[17px] font-bold text-[#052316] mb-2 font-playfair">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINANCIAL PATH */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                FINANCIAL PREPARATION
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Your Financial Path to Homeownership
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                Preparing your finances before you buy is one of the most important steps you can take. Here&apos;s how to get ready for a successful home purchase in Arizona.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {financialPathItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-6 hover:border-[#3fb364] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center font-bold text-[18px] mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-[16px] font-bold text-[#052316] mb-2 font-playfair">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOAN PROGRAMS */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                LOAN OPTIONS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Loan Programs for First-Time Arizona Buyers
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                Multiple loan programs are available to help first-time buyers get into a home. Compare your options and find the best fit for your financial situation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {loanPrograms.map((program) => (
                <Link
                  key={program.href}
                  href={program.href}
                  className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm hover:border-[#3fb364] hover:shadow-md transition-all group"
                >
                  <h3 className="text-[17px] font-bold text-[#052316] mb-2 font-playfair group-hover:text-[#3fb364] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed mb-4">{program.desc}</p>
                  <span className="text-[#3fb364] font-bold text-[14px] group-hover:translate-x-0.5 inline-block transition-transform">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ROADMAP STEPS */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                YOUR ROADMAP
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Your Roadmap to Buying Your First Home
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                Follow these four key steps to go from dreaming about homeownership to holding the keys to your new Arizona home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {roadmapSteps.map((step, idx) => (
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

        {/* TESTIMONIALS */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                CLIENT REVIEWS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                What Our First-Time Buyers Say
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                Hear from Arizona first-time homebuyers who trusted AZ Mortgage Brothers to guide them through the process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm"
                >
                  <div className="text-[#3fb364] text-[14px] mb-3 tracking-wider">★★★★★</div>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                  <p className="text-[#052316] text-[14px] font-bold">{t.author}</p>
                  <p className="text-[#8da684] text-[13px]">{t.location}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/client-mortgage-reviews/"
                className="inline-block bg-[#052316] hover:bg-[#0a3a24] text-white font-bold px-7 py-3.5 rounded-full transition-all shadow"
              >
                Explore All Client Testimonials →
              </Link>
            </div>
          </div>
        </section>

        {/* WHY AZ MORTGAGE BROTHERS */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block">
                LOCAL EXPERTISE
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Why Choose AZ Mortgage Brothers?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto">
                We&apos;re dedicated to helping Arizona first-time buyers navigate the path to homeownership with confidence, clarity, and competitive loan options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {whyUsItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-6 shadow-sm hover:border-[#3fb364] transition-all"
                >
                  <h3 className="text-[16px] font-bold text-[#052316] mb-2 font-playfair">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#052316] rounded-3xl p-8 lg:p-10 text-center text-white space-y-4">
              <p className="text-[16px] text-[#c8c8b8] max-w-2xl mx-auto leading-relaxed">
                Ready to start your homeownership journey? Our team is here to answer your questions and help you find the right loan program for your first home in Arizona.
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

        {/* FAQ */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Frequently Asked Questions for First-Time Home Buyers
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-2xl mx-auto mt-4">
                Have questions about buying your first home in Arizona? Here are answers to the most common questions we hear from first-time buyers.
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
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-[#052316] text-white">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-[28px] lg:text-[40px] font-bold font-playfair">
              Start Your First-Time Homebuyer Journey Today
            </h2>
            <p className="text-[#c8c8b8] text-[16px] max-w-2xl mx-auto leading-relaxed">
              Take the first step toward owning your first home in Arizona. Our experienced team at AZ Mortgage Brothers is ready to guide you through pre-approval, loan selection, and closing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-xl mx-auto">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#3fb364] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[13px] text-[#8da684] uppercase tracking-wider font-bold mb-1">Phone</p>
                  <a href="tel:+16025352171" className="text-white font-semibold hover:text-[#3fb364] transition-colors">
                    (602) 535-2171
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#3fb364] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[13px] text-[#8da684] uppercase tracking-wider font-bold mb-1">Address</p>
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
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-white">
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
        <section className="py-8 px-6 lg:px-12 bg-[#fcf9f3] border-t border-[#e0e0e0]">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#8da684] text-[12.5px] leading-relaxed">
              Equal Housing Lender. Mortgage Brothers LLC NMLS #1007154. Eddie Knoell NMLS #210917, Thomas Knoell NMLS #1618695.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
