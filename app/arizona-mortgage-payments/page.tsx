"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

const relatedLinks = [
  {
    label: "Understanding Your Credit",
    href: "/arizona-understanding-your-credit/",
  },
  {
    label: "Arizona Home Buying Process",
    href: "/arizona-home-buying-process/",
  },
  {
    label: "How to Calculate PMI",
    href: "/how-to-calculate-how-much-pmi-mortgage-insurance-will-be/",
  },
  {
    label: "Understanding Amortization",
    href: "/understanding-amortization-chart/",
  },
  {
    label: "Basic Mortgage Payment Calculator",
    href: "/basic-mortgage-payment-calculator/",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What temporary documents can I use if my official mortgage bill doesn't arrive before the first payment is due?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your official mortgage statement or payment booklet does not arrive in time, you can use the temporary payment coupons provided within your closing documentation package to submit your initial monthly payment.",
      },
    },
    {
      "@type": "Question",
      name: "What are the core components that make up a standard monthly mortgage payment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard monthly mortgage payment, often referred to as PITI, is composed of principal reduction, interest charges, real estate property taxes, hazard homeowners insurance, and any applicable mortgage insurance premiums (PMI/MIP).",
      },
    },
    {
      "@type": "Question",
      name: "What is an escrow or impound account and how does it affect my monthly payment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An escrow or impound account is a specialized financial account managed by your loan servicer. It collects a portion of your monthly payment specifically designated for real estate property taxes and hazard insurance, ensuring those annual bills are paid automatically on your behalf.",
      },
    },
    {
      "@type": "Question",
      name: "Are homeowners required to maintain an escrow account for their mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Escrow accounts are mandatory for government-backed financing programs like FHA and VA loans. For conventional loans, buyers can request an escrow waiver if their loan-to-value (LTV) ratio is low enough, though lenders may charge a slightly higher interest rate due to the increased risk.",
      },
    },
  ],
};

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-[#3fb364] shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function ArizonaMortgagePaymentsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />
      <div className="h-[72px] w-full shrink-0" aria-hidden />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>Arizona Mortgage Payments</>}
          excerpt="Understand what’s in your Arizona mortgage payment—principal, interest, taxes, insurance, MIP/PMI—and how escrow and impound accounts work."
          category="Mortgage Basics"
          categoryHref="/mortgage-basics/"
          dateLabel="Feb 10, 2025"
          readTime="7 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                Unfortunately a major side effect of having a mortgage loan is that you&apos;ll have to pay it
                back! We wanted to highlight a few points about your upcoming mortgage payment so you can
                understand what it is you&apos;re paying. See{" "}
                <Link
                  href="/basic-mortgage-payment-calculator/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  my payment calculator
                </Link>{" "}
                to play around with scenarios.
              </p>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Streamline Your Payments Today!
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Now that you&apos;ve explored key strategies for Arizona Mortgage Payments, connect with our
                  specialists for personalized mortgage advice.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                  >
                    Get Pre-Approved &rarr;
                  </Link>
                  <Link
                    href="/contact-us/"
                    className="inline-flex items-center gap-2 text-[#3fb364] hover:underline text-[15px] font-semibold px-4 py-3 transition-all"
                  >
                    Contact Us Now
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="making-your-first-payment">
                  <p className="mb-5">
                    You should receive a mortgage payment booklet or instructions on how to pay your Arizona
                    mortgage loan online. If that doesn&apos;t arrive before your first payment, you should have
                    at least received a temporary payment coupon with your closing documents.
                  </p>
                  <p>
                    Generally the payments will be due at the beginning of the month and mortgage lenders begin
                    assessing late fees on the 15th of the month.
                  </p>
                </section>

                <section id="whats-in-your-mortgage-payment">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What&apos;s In Your Mortgage Payment
                  </h2>
                  <p className="mb-5">When you receive your first bill, here are a few things you will see:</p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-2">Principal Amount</h3>
                  <p className="mb-5">This is the portion that goes toward paying down your balance.</p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-2">Interest</h3>
                  <p className="mb-5">
                    Essentially this is the amount you&apos;re paying to the bank to borrow the original balance.
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-2">Taxes</h3>
                  <p className="mb-5">
                    Real Estate Taxes can either be included as part of your monthly payment or they can be paid
                    separately throughout the year. Make sure you understand this requirement before closing!
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-2">Insurance</h3>
                  <p className="mb-5">
                    This is your hazard insurance (fire) which protects your home and belongings.
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-2">Mortgage Insurance</h3>
                  <p>
                    Depending on the type of Arizona mortgage loan you have, this will be an additional payment
                    that&apos;s unrelated to your hazard insurance. Lenders often require this when the Loan to
                    Value is greater than 80% and is meant to protect the lender if the borrower fails to pay back
                    the loan.
                  </p>
                </section>

                <section id="frequently-asked-questions">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-6 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        What is an Impounded or Escrow Account?
                      </h3>
                      <p>
                        Loans are made up of Principal, Interest, Taxes and Insurance (PITI). The escrow account
                        covers the T and the I and is included in the monthly payment.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        Are Impound Accounts required?
                      </h3>
                      <p>
                        In some cases yes, as with Government Loans, FHA and VA loan programs. In other cases, if
                        the Loan to Value is low enough an escrow waiver is allowed but there&apos;s typically a
                        higher mortgage rate due to the lender taking on more risk.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        If I refinance my existing Arizona mortgage loan, what happens to my impound/escrow
                        account?
                      </h3>
                      <p>
                        If there is a balance after the refinance, the excess is generally refunded back to the
                        homeowner.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        Can I set up an escrow account later?
                      </h3>
                      <p>
                        Yes, you can request an escrow account at anytime. Keep in mind that you&apos;ll have to
                        deposit at least 12 months of hazard insurance as well as around 6 months of tax payments
                        in the account in order to get it established.
                      </p>
                    </div>
                  </div>
                </section>

                <p>
                  If you have any questions about Arizona mortgage payments, call us at{" "}
                  <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                    (602) 535-2171
                  </a>{" "}
                  or reach us using our{" "}
                  <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                    contact form
                  </Link>
                  .
                </p>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with you
                    and help you through the whole process.
                  </p>
                </div>

                <p className="text-[#8a9a7a] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has been
                  prepared for informational purposes only. You should consult your own tax, legal, and accounting
                  advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS #210917 and
                  1618695. Equal housing lender.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/arizona-understanding-your-credit/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/arizona-home-buying-process/"
                  className="text-[#8a9a7a] hover:text-[#3fb364] transition-colors"
                >
                  Next Post →
                </Link>
              </div>
            </article>

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
                <p className="text-[#3fb364] text-[14px] font-bold uppercase mb-5">Talk to a Broker Today!</p>
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

        <section className="w-full bg-[#08271B] py-14 lg:py-16 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2
              className="text-white text-[28px] lg:text-[34px] font-normal mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tailored Mortgage Solutions
            </h2>
            <p className="text-[#c8c8b8] text-[15.5px] leading-relaxed mb-7">
              Have questions about financing options? Our experts are here to help with personalized advice for
              any mortgage type. Fill out our form to get started today!
            </p>
            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            >
              Contact Us
            </Link>
          </div>
        </section>

        <section className="w-full bg-[#f5f0e8] py-16 lg:py-20 border-y border-[#e8e0d0]/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2
              className="text-[#08271B] text-[30px] lg:text-[38px] font-normal leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get in Touch with The Mortgage Brothers
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-8 max-w-2xl mx-auto">
              Ready to take the next step towards your dream home? One of our experienced mortgage professionals
              will get back to you promptly with personalized solutions tailored to your unique financial
              situation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-[14.5px] text-[#08271B]">
              <a href="tel:+16025352171" className="font-semibold hover:text-[#3fb364] transition-colors">
                +1 602-535-2171
              </a>
              <span className="hidden sm:inline text-[#c8c8b8]">|</span>
              <span className="text-center">1599 East Orangewood Ave Suite 200, Phoenix, AZ 85020</span>
            </div>
            <Link
              href="/#get-pre-approved"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all"
            >
              Get Your Rate Now
            </Link>
          </div>
        </section>

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
