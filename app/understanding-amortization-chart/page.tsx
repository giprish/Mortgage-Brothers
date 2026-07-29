"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const relatedLinks = [
  { label: "When is a mortgage payment actually considered late?", href: "/when-is-a-mortgage-payment-actually-considered-late/" },
  { label: "How to calculate PMI mortgage insurance", href: "/how-to-calculate-how-much-pmi-mortgage-insurance-will-be/" },
  { label: "What are mortgage trigger leads?", href: "/what-are-mortgage-trigger-leads/" },
  { label: "How does a mortgage APR work?", href: "/how-does-a-mortgage-apr-work-and-what-does-it-mean/" },
  { label: "What are closing costs on a home purchase?", href: "/what-are-closing-costs-on-a-home-purchase/" },
  { label: "Mortgage payoff higher than mortgage balance", href: "/mortgage-payoff-higher-than-mortgage-balance/" },
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

export default function UnderstandingAmortizationChartPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />
      <div className="h-[72px] w-full shrink-0" aria-hidden />

      <main className="flex-grow relative z-0">
        {/* Featured hero image */}
        <section className="relative z-0 w-full bg-white overflow-hidden">
          <div className="w-[90%] max-w-[1520px] mx-auto px-0 py-3 lg:py-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/home/understanding-an-amortization-schedule.webp"
              alt="Amortization schedule breakdown showing principal and interest payments over time."
              width={1920}
              height={1080}
              className="relative z-0 w-full h-auto block max-w-full rounded-md lg:rounded-lg"
            />
          </div>
        </section>

        {/* Article + sidebar */}
        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="w-[90%] max-w-[1520px] mx-auto px-0 sm:px-2 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">
              <h1
                className="text-brand-green-deep text-[32px] lg:text-[48px] font-playfair font-normal leading-[1.1] mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Understanding An Amortization Schedule
              </h1>
              <p className="text-[#8a9a7a] text-[14px] mb-8">
                by{" "}
                <Link href="/about-us/" className="text-[#3fb364] hover:underline font-medium">
                  Eddie Knoell
                </Link>{" "}
                | Feb 3, 2025
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                If you are looking for Amortization Calculators to graph principal and interest payments,
                please visit our{" "}
                <Link href="/mortgage-calculator-arizona/" className="text-[#3fb364] font-semibold hover:underline">
                  Mortgage Calculator Page
                </Link>
              </p>

              <div className="space-y-6 text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                <p>
                  By committing to a mortgage loan, the borrower is entering into a financial agreement
                  with a lender to pay back the mortgage money, with interest, over a set period of time.
                </p>
                <p>
                  The borrower&apos;s monthly mortgage payment may change over time depending on the type of
                  loan program, however, we&apos;re going to address the typical 30 year fixed Principal and
                  Interest loan program for the sake of breaking down the individual payment components for
                  this particular article about an amortization schedule.
                </p>
                <p>
                  On each payment that is made, a certain amount of interest is taken out to pay the lender
                  back for the opportunity to borrow the money, and the remaining balance is applied to the
                  principal balance.
                </p>
                <p>
                  It&apos;s common to hear industry professionals and homeowners talk about a mortgage payment
                  being front-loaded with interest, especially if they&apos;re referencing an amortization
                  chart to show the numbers. Since there is more interest being paid at the beginning of a
                  mortgage payment term the amount of money applied to interest decreases over time, while
                  the money applied to the principal increases.
                </p>
              </div>

              {/* Mid CTA */}
              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Take Control of Your Mortgage Payments
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Understand your amortization schedule and make smarter financial decisions. Get expert
                  guidance on managing your mortgage effectively.
                </p>
                <Link
                  href="/#get-pre-approved"
                  className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                >
                  Get a Free Mortgage Consultation
                </Link>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="the-loan-amortization-chart">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    The Loan Amortization Chart
                  </h2>
                  <p className="mb-5">
                    The details will include the interest and principal component of each periodic payment.
                  </p>
                  <p className="mb-5">
                    For example, let&apos;s look at a scenario where you borrowed a $100,000 loan at 7.5%
                    interest rate, fixed for 30 year term. To ensure full repayment of principal by the end of
                    the 30 years, your payment would need to be $699.21 per month. In the first month, you
                    owe $100,000, which means the interest would be calculated on the full loan amount. To
                    calculate this, we start with $100,000 and multiply it by 7.5% interest rate. This will
                    give you $7,500 of annual interest. However, we only need a monthly amount. So we divide
                    by 12 months to find that the interest equals $625. Now remember, you are paying $699.21.
                    If you only owe interest of $625, then the remainder of the payment, $74.21, will go
                    towards the principal. Thus, your new outstanding balance is now $99,925.79.
                  </p>
                  <p className="mb-5">
                    In month #2, you make the same payment of $699.21. However, this time, you now owe
                    $99,925.79. Therefore, you will only pay interest on $99,925.79. When running through
                    the calculator in the same process detailed above, you will find that your interest
                    component is $624.54. (It is decreasing!) The remaining $74.68 will be applied towards
                    principal. (This amount is increasing!)
                  </p>
                  <p className="mb-5">
                    Each month, the same simple mathematic calculation will be made. Because the payments are
                    remaining the same, each month the interest will continue to be reduced and the remainder
                    going towards principal will continue to increase.
                  </p>
                  <p className="mb-5">
                    An amortization chart runs chronologically through your series of payments until you get
                    to the final payment. The chart can also be a useful tool to determine interest paid to
                    date, principal paid to date, or remaining principal.
                  </p>
                  <p className="mb-5">
                    Another frequent use of amortization charts is to determine how extra payments toward
                    principal can affect and accelerate the month of final payment of the loan, as well as
                    reduce your total interest payments.
                  </p>
                  <p>
                    We can better understand mortgage payments by looking at a loan amortization chart, which
                    shows the specific payments associated with a loan.
                  </p>
                </section>

                <p>
                  If you have any questions about this or if you have any questions you&apos;d like us to
                  answer on our podcast, you can submit your questions using our{" "}
                  <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                    contact form
                  </Link>{" "}
                  or give us a call at{" "}
                  <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                    (602) 535-2171
                  </a>
                  . Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with
                  you and help you through the whole process.
                </p>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work
                    with you and help you through the whole process.
                  </p>
                </div>

                <p className="text-[15px]">
                  Enhance your understanding by reading about{" "}
                  <Link href="/when-is-a-mortgage-payment-actually-considered-late/" className="text-[#3fb364] font-semibold hover:underline">
                    payment timing
                  </Link>{" "}
                  and{" "}
                  <Link href="/how-to-calculate-how-much-pmi-mortgage-insurance-will-be/" className="text-[#3fb364] font-semibold hover:underline">
                    calculating PMI costs
                  </Link>
                  . Expand your perspective with our posts on{" "}
                  <Link href="/what-are-mortgage-trigger-leads/" className="text-[#3fb364] font-semibold hover:underline">
                    trigger leads
                  </Link>
                  ,{" "}
                  <Link href="/how-does-a-mortgage-apr-work-and-what-does-it-mean/" className="text-[#3fb364] font-semibold hover:underline">
                    APR basics
                  </Link>
                  , and discover more on{" "}
                  <Link href="/what-are-closing-costs-on-a-home-purchase/" className="text-[#3fb364] font-semibold hover:underline">
                    closing costs
                  </Link>{" "}
                  as well as{" "}
                  <Link href="/mortgage-payoff-higher-than-mortgage-balance/" className="text-[#3fb364] font-semibold hover:underline">
                    mortgage payoff challenges
                  </Link>
                  .
                </p>

                <p className="text-[#8a9a7a] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material
                  has been prepared for informational purposes only. You should consult your own tax,
                  legal, and accounting advisors before engaging in any transaction. Mortgage Brothers
                  NMLS 1007154, NMLS #210917 and 1618695. Equal housing lender.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/how-to-calculate-how-much-pmi-mortgage-insurance-will-be/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/what-if-my-spouse-dies-and-im-not-on-the-mortgage/"
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
                <h3 className="text-[#08271B] text-[16px] font-bold mb-4">Related Reading</h3>
                <ul className="space-y-2.5">
                  {relatedLinks.map((item) => (
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
              <span className="text-center">
                1599 East Orangewood Ave Suite 200, Phoenix, AZ 85020
              </span>
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
                  key={item.href}
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
