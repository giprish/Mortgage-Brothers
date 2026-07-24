"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const loanSolutions = [
  { label: "Conventional Home Loans", href: "/conventional-home-loans-arizona/" },
  { label: "Private Money Lender", href: "/private-money-lender-arizona/" },
  { label: "FHA Home Loans", href: "/fha-home-loans-arizona/" },
  { label: "FHA Streamline Refinance", href: "/fha-streamline-refinance-arizona/" },
  { label: "First Time Home Buyer", href: "/first-time-home-buyer-arizona-guide/" },
  { label: "Reverse Mortgage", href: "/reverse-mortgage-arizona/" },
  { label: "Reverse Mortgage for a Home Purchase", href: "/reverse-mortgage-home-purchase-arizona/" },
  { label: "Refinancing", href: "/refinancing-arizona/" },
  { label: "Jumbo Loans", href: "/jumbo-loans-arizona/" },
  { label: "VA Loans", href: "/va-loans-arizona/" },
];

const loanPrograms = [
  { label: "Conventional Home Loans", href: "/conventional-home-loans-arizona/" },
  { label: "FHA Home Loans", href: "/fha-home-loans-arizona/" },
  { label: "Conventional vs FHA Loans", href: "/conventional-vs-fha-loans-arizona/" },
  { label: "FHA Streamline Refinance", href: "/fha-streamline-refinance-arizona/" },
  { label: "Reverse Mortgage", href: "/reverse-mortgage-arizona/" },
  { label: "Reverse Mortgage for a Home Purchase", href: "/reverse-mortgage-home-purchase-arizona/" },
  { label: "Private Money Lender", href: "/private-money-lender-arizona/" },
  { label: "VA Loans", href: "/va-loans-arizona/" },
  { label: "Mortgage Refinancing", href: "/refinancing-arizona/" },
  { label: "Jumbo Loans", href: "/jumbo-loans-arizona/" },
  { label: "First-time Home Buyer Guide", href: "/first-time-home-buyer-arizona-guide/" },
];

const termSections = [
  {
    title: "10 Year Mortgage Rates",
    items: [
      "With a 10 year mortgage, your monthly payment will be about 1.95 times greater than your monthly payment with a 30 year mortgage. Example; if a 30 Year fixed mortgage payment is $1,000 per month, a 10 Year fixed mortgage payment would be around $1,950 per month. Feel free to use the Mortgage Calculator tool.",
      "The total interest payments on a 10 Year fixed interest rate mortgage will be around 4.2 times less than a 30 Year fixed mortgage. Example, if your starting loan amount was $280,000, and your interest rate was 4%, you would spend approximately $200,000 on interest over the life of a 30 year fixed rate. In comparison, you would spend about $48,000 on interest over the life of the 10 year fixed mortgage.",
      "Currently, the interest rate on a 10 year mortgage is about a 1 point lower than a comparable 30 year fixed mortgage.",
    ],
  },
  {
    title: "15 Year Mortgage Rates",
    items: [
      "With a 15 year mortgage, your monthly payment will be about 1.5 times greater than your monthly payment with a 30 year mortgage. Example; if a 30 Year fixed mortgage payment is $1,000 per month, a 15 Year fixed mortgage payment would be around $1,500 per month. Use the Mortgage Calculator tool to explore how payments are affected by different term lengths.",
      "The total interest payments on a 15 Year fixed interest rate mortgage will be around 2.5 times less than a 30 Year fixed mortgage. Example, if your starting loan amount was $280,000, and your interest rate was 4%, you would spend approximately $200,000 on interest over the life of a 30 year fixed rate. In comparison, you would spend about $80,000 on interest over the life of the 15 year fixed mortgage.",
      "Currently, the interest rate on a 15 year mortgage is about a .75 of a point lower than a comparable 30 year fixed mortgage.",
    ],
  },
  {
    title: "20 Year Mortgage Rates",
    items: [
      "With a 20 year mortgage, your monthly payment will be about 1.25 times greater than your monthly payment with a 30 year mortgage. Example; if a 30 Year fixed mortgage payment is $1,000 per month, a 20 Year fixed mortgage payment would be around $1,250 per month. Feel free to use the Mortgage Calculator tool.",
      "The total interest payments on a 20 Year fixed interest rate mortgage will be around 1.69 times less than a 30 Year fixed mortgage. Example, if your starting loan amount was $280,000, and your interest rate was 4%, you would spend approximately $200,000 on interest over the life of a 30 year fixed rate. In comparison, you would spend about $119,000 on interest over the life of the 20 year fixed mortgage.",
      "Currently, the interest rate on a 20 year mortgage is about .25 of a point lower than a comparable 30 year fixed mortgage.",
    ],
  },
  {
    title: "30 Year Mortgage Rates",
    items: [
      "A 30 year mortgage is the maximum allowable term according to the Dodd Frank financial law. You won't see anymore 40 year terms on mortgages.",
      "The 30 Year Fixed mortgage rate will give borrowers the lowest payment of all the terms available. Because of this, the Year 30 Fixed Rate is the most common mortgage term that borrower desire when they get a mortgage loan. The 30 Year fixed mortgage allow them to purchase more house for the same payment.",
    ],
  },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

function withCalculatorLinks(text: string) {
  const parts = text.split(/(Mortgage Calculator tool)/g);
  return parts.map((part, i) =>
    part === "Mortgage Calculator tool" ? (
      <Link
        key={i}
        href="/calculators/"
        className="text-[#3fb364] font-semibold hover:underline"
      >
        Mortgage Calculator tool
      </Link>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}

export default function MortgageRatesToolArizonaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />
      <div className="h-[72px] w-full shrink-0" aria-hidden />

      <main className="flex-grow relative z-0">
        {/* Featured hero image */}
        <section className="relative z-0 w-full bg-white overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-4 lg:py-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/home/arizona-mortgage-rates.jpg"
              alt="Arizona Mortgage Rates — The Mortgage Brothers Team"
              width={1920}
              height={1080}
              className="relative z-0 w-full h-auto block max-w-full rounded-lg"
            />
          </div>
        </section>

        {/* Article + sidebar */}
        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-12">
            <article className="min-w-0">
              <h1
                className="text-[#08271B] text-[32px] sm:text-[40px] lg:text-[46px] font-normal leading-tight mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Arizona Mortgage Rates
              </h1>
              <p className="text-[#8a9a7a] text-[14px] mb-8">
                by{" "}
                <Link href="/about-us/" className="text-[#3fb364] hover:underline font-medium">
                  Eddie Knoell
                </Link>{" "}
                | Feb 10, 2025
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                Below you will see national average mortgage rates. Please note this is for reference
                purposes only and is not to be considered an official rate quote for an Arizona mortgage
                interest rate. You can also click on the table below to see a recent trend in mortgage
                rates.
              </p>

              {/* Video */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <iframe
                  src="https://www.youtube.com/embed/YqOa8IipIPU"
                  title="The Mortgage Brothers in Phoenix Arizona"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Mid CTA */}
              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Unlock Competitive Rates Today!
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Now that you&apos;ve explored our Mortgage Rates Tool Arizona, connect with our experts
                  for personalized mortgage solutions.
                </p>
                <Link
                  href="/#get-pre-approved"
                  className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                >
                  Get Your Rate Now
                </Link>
              </div>

              {/* Term sections */}
              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                {termSections.map((section) => (
                  <section key={section.title}>
                    <h2
                      className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {section.title}
                    </h2>
                    <ul className="list-disc pl-6 space-y-3 text-[15.5px]">
                      {section.items.map((item) => (
                        <li key={item.slice(0, 40)}>{withCalculatorLinks(item)}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link href="/blog/" className="text-[#3fb364] font-semibold hover:underline">
                  ← Back to Blog
                </Link>
                <Link
                  href="/arizona-mortgage-insights/"
                  className="text-[#8a9a7a] hover:text-[#3fb364] transition-colors"
                >
                  Arizona Mortgage Insights →
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-[100px] h-fit space-y-6">
              <div className="bg-[#f0f2f5] border-t-4 border-[#3fb364] rounded-b-2xl p-6 text-center shadow-sm">
                <p className="text-[#08271B] text-[11px] font-bold tracking-[0.15em] uppercase mb-1">
                  The Mortgage Brothers Team
                </p>
                <h3 className="text-[#08271B] text-[20px] font-extrabold uppercase tracking-wide leading-snug mt-4 mb-2">
                  Your Dream Home Awaits!
                </h3>
                <p className="text-[#6a7a6a] text-[11px] font-semibold uppercase tracking-wide mb-4">
                  Expert mortgage solutions tailored to your needs
                </p>
                <p className="text-[#3fb364] text-[14px] font-bold uppercase mb-5">
                  Talk to a Broker Today!
                </p>
                <a
                  href="tel:+16025352171"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-semibold px-4 py-3 rounded-full transition-all"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +1 602-535-2171
                </a>
              </div>

              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                <h3 className="text-[#08271B] text-[16px] font-bold mb-4">Loan Programs</h3>
                <ul className="space-y-2.5">
                  {loanPrograms.map((item) => (
                    <li key={item.href + item.label}>
                      <Link
                        href={item.href}
                        className="text-[13.5px] text-[#4e5b4e] hover:text-[#3fb364] transition-colors leading-snug"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* Tailored solutions */}
        <section className="w-full bg-[#08271B] py-14 lg:py-16 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2
              className="text-white text-[28px] lg:text-[34px] font-normal mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tailored Mortgage Solutions
            </h2>
            <p className="text-[#c8c8b8] text-[15.5px] leading-relaxed mb-7">
              Have questions about financing options? Our experts are here to help with personalized
              advice for any mortgage type.
            </p>
            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* Get in touch */}
        <section className="w-full bg-[#f5f0e8] py-16 lg:py-20 border-y border-[#e8e0d0]/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2
              className="text-[#08271B] text-[30px] lg:text-[38px] font-normal leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get in Touch with The Mortgage Brothers
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-8 max-w-2xl mx-auto">
              Ready to take the next step towards your dream home? One of our experienced mortgage
              professionals will get back to you promptly with personalized solutions tailored to your
              unique financial situation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-[14.5px] text-[#08271B]">
              <a href="tel:+16025352171" className="font-semibold hover:text-[#3fb364] transition-colors">
                +1 602-535-2171
              </a>
              <span className="hidden sm:inline text-[#c8c8b8]">|</span>
              <a
                href="https://goo.gl/maps/GVLYa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3fb364] transition-colors text-center"
              >
                1599 East Orangewood Ave Suite 200, Phoenix, AZ 85020
              </a>
            </div>

            <Link
              href="/#get-pre-approved"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all"
            >
              Get Your Rate Now
            </Link>
          </div>
        </section>

        {/* Explore solutions */}
        <section className="w-full py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2
              className="text-[#08271B] text-[28px] lg:text-[34px] font-normal text-center mb-10"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Explore Our Mortgage Solutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {loanSolutions.map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className="flex items-center gap-3 bg-white border border-[#e8e0d0]/70 rounded-xl px-5 py-4 text-[#08271B] font-semibold text-[14.5px] hover:border-[#3fb364]/50 hover:text-[#3fb364] transition-all"
                >
                  <CheckIcon />
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
