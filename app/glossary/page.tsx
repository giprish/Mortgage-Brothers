"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const termsBeforeCta = [
  {
    term: "Adjustable-rate mortgage (ARM)",
    definition:
      "A mortgage with an interest rate that can change periodically, based on a specific financial index.",
  },
  {
    term: "Amortization",
    definition:
      "The process of paying off a debt, such as a mortgage, through regular payments.",
  },
  {
    term: "Appraisal",
    definition:
      "An estimate of the value of a property, typically conducted by a licensed appraiser.",
  },
  {
    term: "APR (Annual Percentage Rate)",
    definition:
      "The annual cost of a loan, including interest, fees, and other charges, expressed as a percentage.",
  },
];

const termsAfterCta = [
  {
    term: "Balloon mortgage",
    definition:
      "A mortgage with a large final payment, due at the end of a short term, which is typically five or seven years.",
  },
  {
    term: "Bridge loan",
    definition:
      "A short-term loan used to bridge the gap between the purchase of a new property and the sale of an existing one.",
  },
  {
    term: "Cash-out refinance",
    definition:
      "A refinance in which the borrower takes out a larger loan than the current outstanding balance, and uses the difference for other purposes.",
  },
  {
    term: "Closing costs",
    definition:
      "The expenses associated with the purchase or refinance of a property, such as appraisal fees, title insurance, and attorney’s fees.",
  },
  {
    term: "Conventional mortgage",
    definition:
      "A mortgage that is not backed by the government and typically requires a higher down payment and credit score.",
  },
  {
    term: "Credit report",
    definition:
      "A document that provides detailed information on a borrower’s credit history, including payment history, outstanding debts, and credit scores.",
  },
  {
    term: "Down payment",
    definition:
      "The amount of money paid upfront by the borrower towards the purchase of a property.",
  },
  {
    term: "Equity",
    definition:
      "The difference between the value of a property and the amount still owing on the mortgage.",
  },
  {
    term: "FHA loan",
    definition:
      "A mortgage that is insured by the Federal Housing Administration (FHA) and typically requires a lower down payment and credit score.",
  },
  {
    term: "Fixed-rate mortgage",
    definition:
      "A mortgage with an interest rate that remains the same for the entire term of the loan.",
  },
  {
    term: "Foreclosure",
    definition:
      "The process of selling a property to pay off an outstanding mortgage when the borrower is unable to make payments.",
  },
  {
    term: "Home inspection",
    definition:
      "A professional evaluation of the condition of a property, typically conducted prior to purchase.",
  },
  {
    term: "Interest",
    definition:
      "The cost of borrowing money, typically expressed as a percentage of the loan amount.",
  },
  {
    term: "Interest-only mortgage",
    definition:
      "A mortgage in which the borrower only pays the interest on the loan for a certain period of time, before beginning to pay off the principal.",
  },
  {
    term: "Jumbo loan",
    definition:
      "A mortgage that exceeds the conforming loan limit, typically set by the Federal Housing Finance Agency (FHFA).",
  },
  {
    term: "Lien",
    definition:
      "A legal claim on a property, used to secure payment of a debt.",
  },
  {
    term: "Mortgage broker",
    definition:
      "A mortgage broker is a professional who acts as an intermediary between borrowers and lenders. They work with a variety of lenders to find loans for their client.",
  },
  {
    term: "Mortgage insurance",
    definition:
      "Insurance that protects the lender in case the borrower defaults on the loan.",
  },
  {
    term: "Mortgage-backed security (MBS)",
    definition:
      "A financial security that is backed by a pool of mortgages. These securities are issued and sold by government-sponsored enterprises such as Fannie Mae and Freddie Mac, or by private institutions.",
  },
  {
    term: "Negative amortization",
    definition:
      "A situation where the unpaid interest is added to the loan balance, resulting in the borrower owing more than the original loan amount.",
  },
  {
    term: "Points",
    definition:
      "A percentage of the loan amount, charged by the lender as a fee for originating the loan. Each point is equal to 1% of the loan amount.",
  },
  {
    term: "Pre-approval",
    definition:
      "A process where a lender pre-qualifies a borrower for a mortgage loan, based on their credit score and income.",
  },
  {
    term: "Prepayment penalty",
    definition:
      "A fee charged by the lender if the borrower pays off the loan early.",
  },
  {
    term: "Principal",
    definition: "The amount of money borrowed, not including interest.",
  },
  {
    term: "Private mortgage insurance (PMI)",
    definition:
      "Insurance that protects the lender in case the borrower defaults on the loan, typically required for loans with less than 20% down payment.",
  },
  {
    term: "Refinance",
    definition:
      "The process of obtaining a new mortgage to pay off an existing one.",
  },
  {
    term: "Refinancing",
    definition:
      "The process of obtaining a new mortgage to pay off an existing one, typically to secure a lower interest rate or change the loan terms.",
  },
  {
    term: "Reverse mortgage",
    definition:
      "A type of loan that allows homeowners 62 and older to borrow against the equity in their home, with no repayment required until the borrower sells the home or dies.",
  },
  {
    term: "Securitization",
    definition:
      "The process of pooling mortgages together and selling them as securities to investors.",
  },
  {
    term: "Subprime mortgage",
    definition:
      "A type of mortgage that is offered to borrowers with poor credit, typically at a higher interest rate than prime mortgages.",
  },
  {
    term: "Title insurance",
    definition:
      "Insurance that protects the borrower and lender against any defects in the title of a property.",
  },
  {
    term: "Title",
    definition: "A legal document that establishes ownership of a property.",
  },
  {
    term: "Underwriting",
    definition:
      "The process of evaluating a loan application, including the borrower’s creditworthiness and the property’s value and condition, to determine if the loan should be approved.",
  },
  {
    term: "Variable-rate mortgage",
    definition:
      "A mortgage with an interest rate that can fluctuate over time, based on market conditions.",
  },
];

const categories = [
  { label: "Arizona Mortgage Insights", href: "/arizona-mortgage-insights/" },
  { label: "FHA Loans", href: "/fha-loans/" },
  { label: "Homeownership Tips", href: "/homeownership-tips/" },
  { label: "Mortgage Basics", href: "/mortgage-basics/" },
  { label: "Mortgage Payments & Strategies", href: "/mortgage-payments-strategies/" },
  { label: "Mortgage Process Guidance", href: "/mortgage-process-guidance/" },
  { label: "Mortgage Qualifications", href: "/mortgage-qualifications/" },
  { label: "Real Estate & Mortgages", href: "/real-estate-mortgages/" },
  { label: "Specialty Loans", href: "/specialty-loans/" },
  { label: "Spouse & Estate Considerations", href: "/spouse-estate-considerations/" },
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

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

function GlossaryTerm({ term, definition }: { term: string; definition: string }) {
  return (
    <p className="text-[#3a4a3a] text-[16px] leading-[1.8]">
      <strong className="text-[#08271B]">{term}:</strong> {definition}
    </p>
  );
}

export default function GlossaryPage() {
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
              src="/home/glossary-terms.jpg"
              alt="A comprehensive explanation of glossary terms that clarify mortgage concepts."
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
                Glossary Terms
              </h1>
              <p className="text-[#8a9a7a] text-[14px] mb-8">
                by{" "}
                <Link href="/about-us/" className="text-[#3fb364] hover:underline font-medium">
                  Eddie Knoell
                </Link>{" "}
                | Feb 10, 2025
              </p>

              <div className="space-y-5 mb-10">
                {termsBeforeCta.map((item) => (
                  <GlossaryTerm key={item.term} {...item} />
                ))}
              </div>

              {/* Mid CTA */}
              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  You’ve Mastered the Mortgage Glossary—Now Connect with Experts!
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Leverage your new knowledge from our Mortgage Glossary and contact Arizona Mortgage
                  Brothers for personalized mortgage guidance.
                </p>
                <a
                  href="#Get-in-Touch"
                  className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                >
                  Get Expert Help
                </a>
              </div>

              <div className="space-y-5">
                {termsAfterCta.map((item) => (
                  <GlossaryTerm key={item.term} {...item} />
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/mortgage-rates-tool-arizona/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/arizona-understanding-your-credit/"
                  className="text-[#8a9a7a] hover:text-[#3fb364] transition-colors"
                >
                  Next Post →
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
                <h3 className="text-[#08271B] text-[16px] font-bold mb-4">Categories</h3>
                <ul className="space-y-2.5">
                  {categories.map((item) => (
                    <li key={item.href}>
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
              advice for any mortgage type. Fill out our form to get started today!
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
        <section
          id="Get-in-Touch"
          className="w-full bg-[#f5f0e8] py-16 lg:py-20 border-y border-[#e8e0d0]/50 scroll-mt-[90px]"
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2
              className="text-[#08271B] text-[30px] lg:text-[38px] font-normal leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get in Touch with The Mortgage Brothers
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-8 max-w-2xl mx-auto">
              Ready to take the next step towards your dream home? Fill out the form below, and one of
              our experienced mortgage professionals will get back to you promptly. We’re here to
              provide personalized solutions tailored to your unique financial situation and
              homeownership goals in Arizona.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-[14.5px] text-[#08271B]">
              <a href="tel:+16025352171" className="font-semibold hover:text-[#3fb364] transition-colors">
                Phone +1 602-535-2171
              </a>
              <span className="hidden sm:inline text-[#c8c8b8]">|</span>
              <a
                href="https://maps.google.com/?q=1599+East+Orangewood+Ave+Suite+200+Phoenix+AZ+85020"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3fb364] transition-colors text-center"
              >
                Address 1599 East Orangewood Ave Suite 200 Phoenix, AZ 85020
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
