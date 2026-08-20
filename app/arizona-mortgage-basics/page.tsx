import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import FaqAccordion from "../component/FaqAccordion";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

export const metadata: Metadata = getSeoMetadata("/arizona-mortgage-basics/");

const relatedLinks = [
  {
    label: "Arizona Mortgage 101",
    href: "/mortgage-101/",
  },
  {
    label: "Why Use an Arizona Mortgage Broker",
    href: "/why-use-an-arizona-mortgage-broker/",
  },
  {
    label: "Arizona Mortgage Payments",
    href: "/arizona-mortgage-payments/",
  },
  {
    label: "Arizona Mortgage Closing Costs",
    href: "/arizona-mortgage-closing-costs/",
  },
  {
    label: "First-time Home Buyer Guide",
    href: "/first-time-home-buyer-arizona-guide/",
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
      name: "What is a mortgage and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A mortgage is a loan secured by real property, which means the lender is protected by the property itself. The borrower repays the loan over a set period of time. If the borrower fails to make payments, the lender can take ownership of the property to recover losses.",
      },
    },
    {
      "@type": "Question",
      name: "What factors do Arizona mortgage lenders consider for loan approval?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Arizona mortgage lenders typically evaluate a borrower's credit history, employment history, income, assets, and debts. Additionally, the property must meet certain standards set by the lender before approval of the mortgage loan.",
      },
    },
    {
      "@type": "Question",
      name: "How are mortgage payments structured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most home loans are set for 15 or 30 years and include both principal and interest portions. Over time, the amount applied toward interest decreases while the portion applied to the principal increases—a process known as amortization. Lenders may also offer alternative plans such as interest-only payments or introductory teaser rates.",
      },
    },
    {
      "@type": "Question",
      name: "What costs and fees are associated with getting a mortgage in Arizona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mortgage costs may include points to secure lower rates, processing or underwriting fees, and other out-of-pocket expenses such as appraisal fees, property taxes, insurance, and inspections. Government consumer protection policies help ensure buyers understand these costs during the mortgage process.",
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

export default function ArizonaMortgageBasicsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>Arizona Mortgage Basics</>}
          excerpt="Learn what a mortgage is, how approval works, payment structure, programs, closing costs/fees, and rates for Arizona homebuyers."
          category="Mortgage Basics"
          categoryHref="/mortgage-basics/"
          dateLabel="Feb 10, 2025"
          readTime="8 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                What exactly is a mortgage anyway? In simple terms a mortgage is a loan that is secured or backed
                by real property. It is then paid back over a set period of time. The term &quot;secured&quot;
                means that the lender is protected by the piece of property that he can take ownership of in the
                event that the borrow defaults on the loan and decides not to, or is unable to, repay the debt. If
                a borrower does not pay, the lender takes the property back to offset their losses.
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                No matter where you live or who does your loan, there are a few standard components to any Mortgage
                Loan that{" "}
                <Link
                  href="/why-use-an-arizona-mortgage-broker/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  we will cover
                </Link>{" "}
                below:
              </p>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Start Your Mortgage Journey Today!
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Contact Mortgage Brothers LLC for personalized advice on Arizona Mortgage Basics and take
                  your first step toward homeownership.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="btn-primary"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="mortgage-approval">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Mortgage Approval
                  </h2>
                  <p className="mb-5">
                    Just like any loan, you need lender approval. In order to be approved there are always a pre
                    determined set of guidelines. Each lender&apos;s guidelines may vary slightly in order to
                    determine if you are approved for a loan, but generally speaking an{" "}
                    <Link
                      href="/why-use-an-arizona-mortgage-broker/"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      Arizona mortgage broker
                    </Link>{" "}
                    will look at your credit history, employment history, your income and any assets and debts you
                    may have. The property must also meet certain standards set by the mortgage lenders before a
                    borrower can obtain a mortgage loan backed by real estate.
                  </p>
                  <p>
                    Additionally, the property must also meet certain standards set by AZ mortgage lenders before
                    a borrower can obtain an Arizona mortgage loan back by real estate.
                  </p>
                </section>

                <section id="mortgage-payments">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Mortgage Payments
                  </h2>
                  <p>
                    Home loans will normally be set for periods of 15 or 30 year fixed mortgages. Each payment will
                    include both a principal portion and an interest portion. The principal portion goes toward
                    paying down the initial amount borrowed while the interest all depends on the loan rates
                    offered by the lender. Typically, the amount of interest paid per month will decrease and the
                    amount towards principal will increase. This is referred to as &quot;amortization&quot;. Your
                    mortgage lender can also offer other payment plans for your mortgage such as interest only for
                    a period of years or an introductory teaser rate at the beginning of a loan. They can help you
                    understand these other options and any long term impacts or issues that may come along with
                    them.
                  </p>
                </section>

                <section id="mortgage-programs">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Mortgage Programs
                  </h2>
                  <p>
                    Your Arizona mortgage lender has many mortgage program options available and can explain them
                    in detail so that you can make an informed decision as to which plan is best for you. You may
                    also be eligible for federally insured programs such as{" "}
                    <Link
                      href="/fha-home-loans-arizona/"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      FHA
                    </Link>{" "}
                    or{" "}
                    <Link href="/va-loans-arizona/" className="text-[#3fb364] font-semibold hover:underline">
                      VA loans
                    </Link>
                    , which have more flexible qualifying guidelines. Be sure to exhaust all options.
                  </p>
                </section>

                <section id="closing-costs-fees">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Closing Costs/Fees
                  </h2>
                  <p>
                    The cost of obtaining a mortgage loan depends on whether you are paying &quot;points&quot; to
                    obtain a lower mortgage rate. Some loans may have additional loan processing fees or
                    underwriting fees due to the work that is involved in the transaction. Costs can be confusing,
                    but remember that there are several consumer protection policies implemented by the government
                    that will help buyers understand their options during this process. There are also other out of
                    pocket expenses, such as appraisal fees, pre-paid property taxes, insurance and interest, HOA
                    dues, and inspections that are not associated with the mortgage itself but that buyers will
                    have to be aware of.
                  </p>
                </section>

                <section id="mortgage-rates">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Mortgage Rates
                  </h2>
                  <p>
                    Phoenix home loan rates can change several times per day, but there are a few market factors
                    that you can always pay attention to that may impact your monthly mortgage loan payment. Watch
                    and learn. Shop around for the best rates and learn the difference between the note rate and
                    the APR. Arm yourself with all the right information before you begin the process of purchasing
                    your home. See{" "}
                    <Link href="/about-us/" className="text-[#3fb364] font-semibold hover:underline">
                      The Mortgage Brothers Team
                    </Link>{" "}
                    with any and all questions you may have regarding your home purchase and lending process. We
                    are here to help make it easy and effortless for you to purchase your home.
                  </p>
                </section>

                <section id="frequently-asked-questions">
                  <FaqAccordion
                    title="Frequently Asked Questions"
                    items={[
                    { q: "What is a mortgage and how does it work?", a: <>A mortgage is a loan secured by real property, which means the lender is protected by the
                        property itself. The borrower repays the loan over a set period of time. If the borrower
                        fails to make payments, the lender can take ownership of the property to recover losses.</> },
                    { q: "What factors do Arizona mortgage lenders consider for loan approval?", a: <>Arizona mortgage lenders typically evaluate a borrower&apos;s credit history, employment
                        history, income, assets, and debts. Additionally, the property must meet certain standards
                        set by the lender before approval of the mortgage loan.</> },
                    { q: "How are mortgage payments structured?", a: <>Most home loans are set for 15 or 30 years and include both principal and interest portions.
                        Over time, the amount applied toward interest decreases while the portion applied to the
                        principal increases—a process known as amortization. Lenders may also offer alternative
                        plans such as interest-only payments or introductory teaser rates.</> },
                    { q: "What costs and fees are associated with getting a mortgage in Arizona?", a: <>Mortgage costs may include points to secure lower rates, processing or underwriting fees,
                        and other out-of-pocket expenses such as appraisal fees, property taxes, insurance, and
                        inspections. Government consumer protection policies help ensure buyers understand these
                        costs during the mortgage process.</> }
                    ]}
                  />
                </section>


              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link href="/mortgage-101/" className="text-[#3fb364] font-semibold hover:underline">
                  ← Previous Post
                </Link>
                <Link
                  href="/why-use-an-arizona-mortgage-broker/"
                  className="text-[#5a6b52] hover:text-[#3fb364] transition-colors"
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
                  className="btn-primary w-full"
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
              className="btn-primary"
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
            <Link
              href="/#get-pre-approved"
              className="btn-primary"
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