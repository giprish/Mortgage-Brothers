import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import FaqAccordion from "../component/FaqAccordion";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

export const metadata: Metadata = getSeoMetadata("/arizona-understanding-your-credit/");

const relatedLinks = [
  {
    label: "Arizona Mortgage Payments",
    href: "/arizona-mortgage-payments/",
  },
  {
    label: "Arizona Mortgage Approval Process",
    href: "/arizona-mortgage-approval-process/",
  },
  {
    label: "Why Use an Arizona Mortgage Broker",
    href: "/why-use-an-arizona-mortgage-broker/",
  },
  {
    label: "How a Rapid Rescore Can Help",
    href: "/how-a-rapid-rescore-can-help-to-get-qualified-for-a-mortgage/",
  },
  {
    label: "Mortgage with Fair or Improving Credit",
    href: "/how-to-get-a-mortgage-in-arizona-with-fair-or-improving-credit/",
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
      name: "Why is understanding credit important for getting a mortgage loan in Arizona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Understanding credit is crucial because lenders evaluate your credit history, open accounts, payment behavior, and types of credit to determine your risk level. Even small changes in your credit score can influence your down payment, loan programs, and interest rates.",
      },
    },
    {
      "@type": "Question",
      name: "What factors make up a credit score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Credit scores are calculated based on several components: 35% payment history, 30% amount owed compared to available credit, 15% length of credit history, 10% mix of credit, and 10% new credit applications.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I get a free copy of my credit report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consumers are entitled by law to one free credit report annually from each of the three major credit bureaus—Equifax, Experian, and TransUnion. You can access your free credit report at www.AnnualCreditReport.com.",
      },
    },
    {
      "@type": "Question",
      name: "What factors do not affect my credit score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Factors such as your age, race, sex, employment history, income, marital status, length of employment, and occupancy status do not impact your credit score.",
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

export default function ArizonaUnderstandingYourCreditPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>Understanding Your Credit</>}
          excerpt="Understand FICO score components, free credit reports, and what does—and doesn’t—impact your score when applying for an Arizona mortgage."
          category="Mortgage Basics"
          categoryHref="/mortgage-basics/"
          dateLabel="Feb 10, 2025"
          readTime="7 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                As you know, one&apos;s credit scores and history play a huge role in the Arizona{" "}
                <Link
                  href="/arizona-mortgage-approval-process/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  mortgage loan approval process
                </Link>{" "}
                so it&apos;s important that you understand credit in general and what you can do today that will
                put you in a better position to purchase a home tomorrow!
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                Lenders will look at your open accounts, payment history, types of credit and other factors when
                considering what a borrower&apos;s risk level will be. Even a slight increase or decrease in a
                credit score can affect the required down payment, the loan programs that a borrower can qualify
                for as well as the interest rate on the loan.
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                A person&apos;s <strong>credit score</strong>, or &quot;<a href="http://en.wikipedia.org/wiki/Fair_Isaac" target="_blank" rel="noopener" className="text-[#3fb364] font-semibold hover:underline">FICO</a>&quot; score (which stand for the Fair Isaac
                Corporation) has been the standard score that the three main credit reporting agencies (<a href="http://en.wikipedia.org/wiki/Equifax" target="_blank" rel="noopener" className="text-[#3fb364] font-semibold hover:underline">Equifax</a>,
                <a href="http://en.wikipedia.org/wiki/Experian" target="_blank" rel="noopener" className="text-[#3fb364] font-semibold hover:underline">Experian</a> and <a href="http://en.wikipedia.org/wiki/TransUnion" target="_blank" rel="noopener" className="text-[#3fb364] font-semibold hover:underline">TransUnion</a>) use to sell to lenders.
              </p>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Boost Your Credit Confidence Today!
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Now that you understand the essentials of Arizona Understanding Your Credit, connect with our
                  experts for personalized advice to elevate your financial future.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="btn-primary"
                  >
                    Contact Us Now
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="free-credit-report">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Free Credit Report
                  </h2>
                  <p>
                    Consumers are allowed by law to receive a copy of their credit report file from each of the
                    bureaus. You can access your free annual credit report here{" "}
                    <a
                      href="https://www.annualcreditreport.com/index.action"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      www.AnnualCreditReport.com
                    </a>
                    .
                  </p>
                </section>

                <section id="key-components-of-this-score">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Key Components of this Score are Compiled from
                  </h2>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>35% – Payment Histories:</strong> If you&apos;re 30 days late, have collections or
                      judgments or have had a bankruptcy can all have a negative impact.
                    </li>
                    <li>
                      <strong>30% – Amount you owe compared to your available balance:</strong> Keep your balances
                      less than 40% of your available credit limit. Credit scores are punished when it looks like
                      you are tapped out of credit.
                    </li>
                    <li>
                      <strong>15% – Length of Credit History:</strong> The longer your accounts are open, the
                      better it is! Even if you have a 10 year old credit card that you rarely use, it would
                      probably be a bad idea to close it.
                    </li>
                    <li>
                      <strong>10% – Mix of Credit:</strong> A good mix of credit cards, fixed loans (such as an
                      auto loan) and other debt helps to improve your score.
                    </li>
                    <li>
                      <strong>10% – New Credit Applications:</strong> Always try to avoid having multiple credit
                      reports pulled in a short period of time as this negatively affects your scores.
                    </li>
                  </ul>
                </section>

                <section id="these-factors-do-not-impact-credit">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    These Factors Do Not Impact Credit
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>Your Age</li>
                    <li>Your Race</li>
                    <li>Your Sex</li>
                    <li>Your Employment History</li>
                    <li>Your Income – it is a myth that credit bureaus know your income</li>
                    <li>Your Marital Status</li>
                    <li>How long you have been at your current job</li>
                    <li>Occupancy status</li>
                  </ul>
                  <p>
                    Establishing your credit history initially can include the proper use of bank accounts, your
                    employment history and your residence history as well as on-time payments of utility bills.
                    Although these aren&apos;t reported directly to the credit bureaus, mortgage lenders may view
                    these factors in their decision making process.
                  </p>
                </section>

                <section id="frequently-asked-questions">
                  <FaqAccordion
                    title="Frequently Asked Questions"
                    items={[
                    { q: "Why is understanding credit important for getting a mortgage loan in Arizona?", a: <>Understanding credit is crucial because lenders evaluate your credit history, open
                        accounts, payment behavior, and types of credit to determine your risk level. Even small
                        changes in your credit score can influence your down payment, loan programs, and interest
                        rates.</> },
                    { q: "What factors make up a credit score?", a: <>Credit scores are calculated based on several components: 35% payment history, 30% amount
                        owed compared to available credit, 15% length of credit history, 10% mix of credit, and 10%
                        new credit applications.</> },
                    { q: "Where can I get a free copy of my credit report?", a: <>Consumers are entitled by law to one free credit report annually from each of the three
                        major credit bureaus—Equifax, Experian, and TransUnion. You can access your free credit
                        report at www.AnnualCreditReport.com.</> },
                    { q: "What factors do not affect my credit score?", a: <>Factors such as your age, race, sex, employment history, income, marital status, length of
                        employment, and occupancy status do not impact your credit score.</> }
                    ]}
                  />
                </section>

                <p>
                  If you have any questions about understanding your credit, call us at{" "}
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

                <p className="text-[#5a6b52] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has been
                  prepared for informational purposes only. You should consult your own tax, legal, and accounting
                  advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS #210917 and
                  1618695. Equal housing lender.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link href="/glossary/" className="text-[#3fb364] font-semibold hover:underline">
                  ← Previous Post
                </Link>
                <Link
                  href="/arizona-mortgage-payments/"
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