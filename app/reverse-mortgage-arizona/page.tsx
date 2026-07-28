"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import LoanProgramHero from "../component/LoanProgramHero";

export default function ReverseMortgageArizonaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How much can I borrow with a reverse mortgage?",
      a: "The amount you can borrow depends on your age and current interest rates — typically between 30% and 60% of your home's appraised value (or $1,249,125, whichever is lower). For example, on a $500,000 home, a borrower might access anywhere from $150,000 to $300,000. The exact loan amount requires a review by a reverse mortgage loan officer. Give us a call and we can walk you through your specific numbers."
    },
    {
      q: "Can I use a reverse mortgage to purchase a home?",
      a: "Yes, you can use a reverse mortgage to purchase a home. This option allows seniors to buy a new primary residence and obtain a reverse mortgage in a single transaction."
    },
    {
      q: "How are the funds from a reverse mortgage disbursed?",
      a: "After paying off any existing mortgages or liens, you can receive the remaining funds in several ways: lump sum, line of credit, or monthly draws. You can choose the option that best fits your financial needs."
    },
    {
      q: "What documents do I need for a reverse mortgage application?",
      a: "When applying, you'll need to bring: HUD counseling certificate, driver's license or ID, proof of Social Security number, current mortgage statement (if applicable), homeowners insurance declaration page, and HOA statement (if applicable)."
    },
    {
      q: "Is HUD counseling required for a reverse mortgage?",
      a: "Yes, completing HUD reverse mortgage counseling is a mandatory step. We provide a list of approved Arizona HUD counseling agencies. Counseling can be done face-to-face or over the phone."
    }
  ];

  const benefits = [
    {
      title: "Stay in your home",
      desc: "Continue living in your cherished home while accessing its equity."
    },
    {
      title: "Eliminate monthly mortgage payments",
      desc: "Free up cash flow by removing the burden of regular mortgage payments."
    },
    {
      title: "Supplement retirement income",
      desc: "Receive steady payments to boost your monthly income during retirement."
    },
    {
      title: "Pay for healthcare expenses",
      desc: "Use the funds to cover medical costs or long-term care needs."
    },
    {
      title: "No restrictions on fund usage",
      desc: "Spend the money as you see fit, whether for home improvements, travel, or daily expenses."
    }
  ];

  const eligibility = [
    { title: "Age", desc: "You must be 62 years or older" },
    { title: "Home ownership", desc: "Your home must be your primary residence" },
    { title: "Financials", desc: "You must stay current on taxes and insurance." },
    { title: "Home maintenance", desc: "You must keep the home well-maintained" }
  ];

  const processSteps = [
    {
      title: "Initial Consultation",
      desc: "We'll start with a comprehensive discussion about your financial goals and needs. Our experts will explain how a reverse mortgage works, answer all your questions, and provide a personalized assessment based on your unique situation in Arizona."
    },
    {
      title: "HUD Counseling",
      desc: "As required by law, you'll complete a counseling session with a HUD-approved counselor. This independent session ensures you fully understand the reverse mortgage process. We'll provide a list of approved agencies in Arizona and guide you through scheduling your appointment."
    },
    {
      title: "Application and Approval",
      desc: "With our assistance, you'll submit your application. We'll work closely with our extensive network of lenders to find the best terms for your situation. Our team will handle the paperwork and keep you informed throughout the approval process, making it as stress-free as possible."
    },
    {
      title: "Closing and Funding",
      desc: "Once approved, we'll guide you through the closing process, explaining each step clearly. After closing, you'll have access to your funds according to the agreed terms. Whether you choose a lump sum, line of credit, or monthly payments, we'll ensure you understand how to access and manage your reverse mortgage funds."
    }
  ];

  const testimonials = [
    {
      quote:
        "This is my 8th home purchase and mortgage. Working with Eddie has been by far, the most simple, straight forward experience I have ever had obtaining a mortgage.",
      name: "Denise Roeder, Chandler, Arizona"
    },
    {
      quote:
        "Our mortgage service through Eddie Knoell was seamless throughout. It was like having someone watch over the process without us having any concern. All questions were answered promptly and completely, like dealing with a trusted family member.",
      name: "Thomas and Carol Milberry, Queen Creek, Arizona"
    },
    {
      quote:
        "Eddie has been a great help to me. He has refinanced many properties for me and is always very professional. I have recommended him to many people.",
      name: "Eric and Joy Stevens, Phoenix, Arizona"
    },
    {
      quote:
        "Eddie saved us over $500 a month! He explained in great detail the program options, locked us into a great rate, and made it happen for us. We will definitely be referring our family and friends.",
      name: "Michael and Donna Hawkins, Glendale, Arizona"
    },
    {
      quote:
        "Eddie went above the call of duty on 3 separate transactions for us. Each time we challenged him to work under different circumstances and each time he came through and exceeded our expectations!",
      name: "Anita Sanda, Surprise, Arizona"
    }
  ];

  const whyUs = [
    {
      title: "Local Arizona Expertise",
      desc: "As third-generation Arizona natives, we understand the unique needs of homeowners in Phoenix, Scottsdale, Mesa, and beyond."
    },
    {
      title: "Personalized Solutions",
      desc: "We tailor our approach to your specific situation, ensuring you get the most beneficial reverse mortgage terms."
    },
    {
      title: "Wide Lender Network",
      desc: "Our extensive connections allow us to find the best reverse mortgage options and rates available in Arizona."
    },
    {
      title: "Streamlined Process",
      desc: "We simplify the complex reverse mortgage process, guiding you every step of the way for a stress-free experience."
    },
    {
      title: "Trusted Reputation",
      desc: "With hundreds of satisfied clients and a 4.9/5 rating on Google Reviews, our reputation speaks for itself."
    }
  ];

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
    { href: "/va-loans-arizona/", label: "VA Loans" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        <LoanProgramHero
          title="Reverse Mortgage in Arizona"
          subtitle="Unlock Your Home's Value with a Reverse Mortgage"
          imageSrc="/home/loan-hero-reverse.jpg"
        />

        {/* TRUST BAR */}
        <div className="w-full bg-[#03170e] text-[#c8c8b8] border-y border-white/10 py-4 px-6">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-around gap-6 text-[14px] font-medium">
            <div className="flex items-center gap-2">
              <span className="text-[#3fb364]">✓</span>
              <span>14% of Arizonans are 62+</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#3fb364]">✓</span>
              <span>No Monthly Payments Required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#3fb364]">✓</span>
              <span>Use Funds Any Way You Choose</span>
            </div>
          </div>
        </div>

        {/* OVERVIEW */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase">
                UNDERSTANDING REVERSE MORTGAGES
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair leading-tight">
                Why Choose a Reverse Mortgage?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                A reverse mortgage is a powerful financial tool for Arizona homeowners 62 and older who want to access the equity they&apos;ve built in their home — without selling it or making monthly mortgage payments. The most common type is the HECM (Home Equity Conversion Mortgage), which is federally insured by the FHA and designed to give seniors greater financial flexibility in retirement.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Whether you want to eliminate your existing mortgage payment, supplement your monthly income, cover healthcare costs, or simply have a financial cushion for life&apos;s unexpected expenses, a reverse mortgage lets you unlock your home&apos;s value on your terms. You remain the owner of your home, and the loan doesn&apos;t come due until you sell, move out, or pass away.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                For Arizona seniors — whether you&apos;re in Phoenix, Scottsdale, Tucson, or anywhere across the state — a reverse mortgage can be a smart way to enjoy your retirement years with less financial stress. Our team specializes in HECM reverse mortgages and will walk you through every step so you fully understand how it works before making any decisions.
              </p>
              <div className="pt-2">
                <Link
                  href="/#get-pre-approved"
                  className="inline-block bg-[#052316] hover:bg-[#0a3a24] text-white font-bold px-7 py-3.5 rounded-full transition-all shadow"
                >
                  GET PRE-APPROVED NOW →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#fcf9f3] border border-[#e0e0e0] rounded-3xl p-7 text-left space-y-4 shadow-sm">
              <h3 className="text-[19px] font-bold text-[#052316] font-playfair border-b border-[#e0e0e0] pb-3">
                Key Reverse Mortgage Benefits
              </h3>
              <div className="space-y-3.5 text-[14px] text-[#32353C]">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#3fb364]/15 text-[#3fb364] flex items-center justify-center font-bold text-[12px] mt-0.5 shrink-0">
                      ✓
                    </div>
                    <span>
                      <strong>{b.title}</strong> — {b.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA STRIP */}
        <section className="py-8 px-6 bg-[#fcf9f3] text-center">
          <Link
            href="/#get-pre-approved"
            className="bg-[#3fb364] hover:bg-[#359854] text-white font-bold text-[16px] px-8 py-4 rounded-full transition-all shadow-md inline-block"
          >
            Lower Your Payments Now →
          </Link>
        </section>

        {/* FIT CHECK STATS */}
        <section className="w-full bg-[#3fb364] text-white py-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "Yes", label: "Do you Love Your Home?" },
              { value: "Yes", label: "Do you Love your Location?" },
              { value: "Yes", label: "Is Your Home Low Maintenance?" },
              { value: "Yes", label: "Is Your Income Limited?" }
            ].map((s) => (
              <div key={s.label}>
                <div className="text-[36px] lg:text-[44px] font-extrabold leading-none">{s.value}</div>
                <div className="text-[12px] lg:text-[13px] font-bold uppercase tracking-wider mt-1 opacity-90">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ELIGIBILITY */}
        <section className="py-16 lg:py-24 px-6 lg:px-12 bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div>
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                ELIGIBILITY
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Are You Eligible for a Reverse Mortgage?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto mt-4">
                Reverse mortgages offer unique benefits for Arizona homeowners 62 and older. Check if you meet the basic requirements:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {eligibility.map((item, idx) => (
                <div
                  key={item.title}
                  className="bg-white border border-[#e0e0e0] hover:border-[#3fb364] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center font-bold text-[18px] mb-4 group-hover:bg-[#3fb364] group-hover:text-white transition-colors">
                    {idx + 1}
                  </div>
                  <h3 className="text-[17px] font-bold text-[#052316] mb-2 font-playfair">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/#get-pre-approved"
                className="bg-[#3fb364] hover:bg-[#359854] text-white font-bold text-[16px] px-8 py-4 rounded-full transition-all shadow-md inline-block"
              >
                Speak with a Reverse Mortgage Expert →
              </Link>
            </div>
          </div>
        </section>

        {/* CREDIT QUIZ CTA */}
        <section className="py-12 px-6 lg:px-12 bg-white">
          <div className="max-w-3xl mx-auto bg-[#052316] text-white rounded-3xl p-8 lg:p-10 text-center space-y-4 shadow-lg">
            <h3 className="text-[22px] lg:text-[26px] font-bold font-playfair">
              Does Your Credit Profile Support a Reverse Mortgage?
            </h3>
            <p className="text-[#c8c8b8] text-[15px] leading-relaxed">
              While reverse mortgages have unique requirements, your credit history still matters. Find out how your credit affects your reverse mortgage options.
            </p>
            <Link
              href="/credit-score-quiz/"
              className="inline-block border border-white/40 hover:border-white text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:bg-white/10"
            >
              Take The Quiz
            </Link>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                THE PROCESS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                The Reverse Mortgage Process: Simple and Straightforward
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto mt-4">
                At The Mortgage Brothers, we&apos;ve streamlined the reverse mortgage process to make it as easy as possible for you. Our expertise in the Arizona market ensures a smooth experience from start to finish. Here&apos;s how it works:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {processSteps.map((step, idx) => (
                <div
                  key={step.title}
                  className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center font-bold text-[18px] mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-[17px] font-bold text-[#052316] mb-2 font-playfair">{step.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <Link
                href="/#get-pre-approved"
                className="bg-[#3fb364] hover:bg-[#359854] text-white font-bold text-[16px] px-8 py-4 rounded-full transition-all shadow-md inline-block"
              >
                Schedule Your No-Obligation Consultation →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Common Questions About Reverse Mortgages in Arizona
              </h2>
            </div>

            <div className="space-y-4 text-left">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-[#052316] text-[16px] focus:outline-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#3fb364] text-[20px] ml-4 font-bold">
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

            <div className="bg-[#052316] text-white rounded-3xl p-8 text-center space-y-3">
              <p className="text-[18px] font-semibold">Have More Questions? Contact Our Reverse Mortgage Experts</p>
              <a href="tel:+16025352171" className="block text-[28px] font-bold text-[#3fb364] hover:underline">
                (602) 535-2171
              </a>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                CLIENT STORIES
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                What Our Clients Say About Reverse Mortgages
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto mt-4">
                Hear from Arizona homeowners who have benefited from our reverse mortgage solutions. Their stories showcase how a reverse mortgage can provide financial freedom and peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm space-y-4"
                >
                  <p className="text-[#3fb364] text-[14px]">★★★★★</p>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-[#052316] text-[13px] font-bold">{t.name}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/client-mortgage-reviews/"
                className="inline-block bg-[#052316] hover:bg-[#0a3a24] text-white font-bold px-7 py-3.5 rounded-full transition-all"
              >
                Explore All Client Testimonials
              </Link>
            </div>
          </div>
        </section>

        {/* WHY MORTGAGE BROTHERS */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-5 text-left">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase">
                WHY MORTGAGE BROTHERS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[36px] font-bold font-playfair leading-tight">
                Why Choose The Mortgage Brothers for Your Reverse Mortgage
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                With over 25 years of experience in the Arizona real estate market, The Mortgage Brothers bring unparalleled expertise to your reverse mortgage journey. Our deep roots in Phoenix, Scottsdale, and beyond give us unique insights into the local housing market. We understand the specific needs of Arizona homeowners and are committed to providing personalized solutions that enhance your financial freedom during retirement.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                As a family-owned business, we prioritize building lasting relationships with our clients. Our team of experts is dedicated to simplifying the complex reverse mortgage process, ensuring you have a clear understanding of your options and the confidence to make informed decisions. Whether you&apos;re looking to supplement your retirement income, cover healthcare costs, or simply enjoy your golden years without financial stress, we&apos;re here to guide you every step of the way.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {whyUs.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-5"
                >
                  <h3 className="text-[16px] font-bold text-[#052316] mb-2 font-playfair">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-[#052316] text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-[28px] lg:text-[40px] font-bold font-playfair">
              Ready to Learn More About Reverse Mortgages?
            </h2>
            <p className="text-[#c8c8b8] text-[16px] max-w-2xl mx-auto leading-relaxed">
              From Tucson to Phoenix, The Mortgage Brothers are here to simplify your reverse mortgage experience. With our reputation built on trust and quality, we&apos;ll help you make an informed decision about this unique financial tool.
            </p>
            <p className="text-[#c8c8b8] text-[15px]">
              1599 East Orangewood Ave Suite 200, Phoenix, AZ 85020
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/#get-pre-approved"
                className="bg-[#3fb364] hover:bg-[#359854] text-white font-bold text-[16px] px-8 py-4 rounded-full transition-all shadow-lg"
              >
                GET PRE-APPROVED NOW →
              </Link>
              <a
                href="tel:+16025352171"
                className="border border-white/30 hover:border-white text-white font-semibold text-[15px] px-7 py-4 rounded-full transition-all hover:bg-white/10"
              >
                Call (602) 535-2171
              </a>
            </div>
            <p className="text-[#8da684] text-[12px] leading-relaxed pt-6 max-w-3xl mx-auto">
              Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has been prepared for informational purposes only. You should consult your own tax, legal, and accounting advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS #210917 and #1618695. Equal housing lender.
            </p>
          </div>
        </section>

        {/* RELATED LOANS */}
        <section className="py-16 lg:py-20 px-6 lg:px-12 bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-[#052316] text-[28px] lg:text-[34px] font-bold font-playfair">
                Explore Our Mortgage Solutions
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedLoans.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 bg-white border border-[#e0e0e0] rounded-xl px-5 py-4 text-[#052316] font-semibold text-[14.5px] hover:border-[#3fb364] hover:text-[#3fb364] transition-all"
                >
                  <span className="text-[#3fb364]">✓</span>
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
