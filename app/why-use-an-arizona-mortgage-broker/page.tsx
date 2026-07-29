"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

const relatedLinks = [
  {
    label: "Arizona Mortgage Basics",
    href: "/arizona-mortgage-basics/",
  },
  {
    label: "Arizona Mortgage Approval Process",
    href: "/arizona-mortgage-approval-process/",
  },
  {
    label: "Ultimate Guide to Your First Mortgage",
    href: "/ultimate-guide-first-mortgage/",
  },
  {
    label: "Arizona Mortgage Payments",
    href: "/arizona-mortgage-payments/",
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
      name: "Why should I use an Arizona mortgage broker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Arizona mortgage broker can help you find the best mortgage rates by working with multiple lenders, unlike banks that offer only their own loan products. They assist with pre-qualification, completing your mortgage application, locking your loan rate, and guiding you through the entire loan process.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of working with an Arizona mortgage broker instead of a bank loan officer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mortgage brokers offer flexible hours, often working evenings and weekends, while bank loan officers typically work 9 a.m. to 5 p.m. Brokers can compare rates across lenders to save you time and money and find solutions for unique financial situations. Bank loan officers can only offer products from their own institution.",
      },
    },
    {
      "@type": "Question",
      name: "Can a Realtor help me find a reliable Arizona mortgage broker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Realtors often have established relationships with trusted Arizona mortgage brokers. They can refer you to brokers who have a proven track record of helping clients close their deals smoothly and on time.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between pre-qualification and pre-approval for a mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pre-qualification provides an estimate of how much you can borrow based on your financial information, while pre-approval means your income, assets, credit, and loan application have been reviewed and approved by a lender. A pre-approval letter carries more weight with sellers and helps you close faster when you find a home.",
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

export default function WhyUseAnArizonaMortgageBrokerPage() {
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
          title={<>Why Use an Arizona Mortgage Broker</>}
          excerpt="Learn why an Arizona mortgage broker can shop multiple lenders, compare rates, and guide you from pre-qualification through closing."
          category="Mortgage Basics"
          categoryHref="/mortgage-basics/"
          dateLabel="Feb 10, 2025"
          readTime="8 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="w-[90%] max-w-[1520px] mx-auto px-0 sm:px-2 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                An Arizona Mortgage broker can assist you with finding the best Arizona mortgage rates because the
                broker works with many lenders. If you just go down to your local bank branch, you are limited by
                the Mortgage products for that particular bank.
              </p>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Experience the Broker Advantage Now!
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  After exploring why using an Arizona Mortgage Broker benefits you, contact our experts for
                  personalized mortgage solutions.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                  >
                    Get Personalized Help Now &rarr;
                  </Link>
                  <Link
                    href="/contact-us/"
                    className="inline-flex items-center gap-2 text-[#3fb364] hover:underline text-[15px] font-semibold px-4 py-3 transition-all"
                  >
                    Contact Us Today
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <p>
                  Your Arizona mortgage broker will{" "}
                  <Link
                    href="/#get-pre-approved"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    pre-qualify you for a mortgage
                  </Link>
                  , assist you with completing your Arizona mortgage loan application, lock your loan rate in and
                  help you gather the financial information to process your loan. The underwriter will review your
                  loan, an appraisal will be ordered and you loan will be processed.
                </p>

                <p>
                  Arizona Bank loan officers are employees of banks, lending institutions or credit unions that
                  sell their company&apos;s loan products. As a result they cannot offer you products outside the
                  bank. While they have a variety of loans available to their customers, they are all loan products
                  from their company. The loan officer also pre-qualifies you for a loan, helps you with the
                  application and advises you of which of their company&apos;s loan products you qualify for. They
                  order the appraisal and proceed with your loan.
                </p>

                <section id="benefits-of-working-with-a-arizona-mortgage-broker">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Benefits of Working With a Arizona Mortgage Broker
                  </h2>
                  <ul className="list-disc pl-6 space-y-4 mb-5">
                    <li>
                      Mortgage brokers are available after business hours and on weekends if you need them. Bank
                      loan officers work Monday through Friday at a 9 a.m. to 5 p.m. job.
                    </li>
                    <li>
                      Mortgage brokers can shop loan rates for you saving you time and money. Bank loan officers
                      are stuck with the rates they are given from the their bank.
                    </li>
                    <li>
                      If your scenario is unique, the Bank may have extra overlays or rules that prohibit the you
                      from closing the loan. Bank loan officers will not have the ability to send your loan to a
                      different bank with different guidelines. Mortgage brokers can match you with a bank that
                      will fit your unique scenario.
                    </li>
                  </ul>
                  <p className="mb-5">
                    Your Realtor can refer you to a reputable Arizona mortgage broker because Realtors have
                    established relationships with mortgage brokers they trust to help their clients close their
                    deals. Some borrowers are more comfortable working with a mortgage broker, while others like to
                    work with their bank because they have a relationship with them, and they may do other business
                    with their bank so they feel a sense of loyalty. It&apos;s a matter of personal preference.
                  </p>
                  <p>
                    Whether you decide to work with an Arizona mortgage broker or your local bank, make sure you
                    compare loan products and read the fine print. Ask questions such as whether there are any
                    prepayment penalty fees or junk fees. Prepayment fees are fees charged for paying the loan off
                    early. Your mortgage broker will explain the loan terms, provide you with the proper
                    disclosures and answer your questions.
                  </p>
                </section>

                <section id="pre-qualify-vs-pre-approved">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Pre-qualify vs. Pre-approved
                  </h2>
                  <p>
                    Having your Arizona mortgage broker or bank give you a pre-qualified letter makes your offer
                    stronger with the seller because they know you can afford their home. Many borrowers start
                    their loan approval process prior to finding a home so when they do find their dream home, they
                    are ready to close quicker. Once you have gone through the loan approval process, your lender
                    will give you a pre-approval letter which carries more weight because this means your income,
                    assets, credit and loan application have been reviewed and approved. In regards to turn-times,
                    the processing of a typical loan takes 30 days. In some cases the process can take up to 45 to
                    60 days depending on a variety of circumstances. Your loan officer will be able to guage how
                    long it will take to close your particular loan at the beginning of the process. Be sure to ask
                    how long they expect it will take to close the loan.
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
                        Why should I use an Arizona mortgage broker?
                      </h3>
                      <p>
                        An Arizona mortgage broker can help you find the best mortgage rates by working with
                        multiple lenders, unlike banks that offer only their own loan products. They assist with
                        pre-qualification, completing your mortgage application, locking your loan rate, and
                        guiding you through the entire loan process.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        What are the benefits of working with an Arizona mortgage broker instead of a bank loan
                        officer?
                      </h3>
                      <p>
                        Mortgage brokers offer flexible hours, often working evenings and weekends, while bank loan
                        officers typically work 9 a.m. to 5 p.m. Brokers can compare rates across lenders to save
                        you time and money and find solutions for unique financial situations. Bank loan officers
                        can only offer products from their own institution.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        Can a Realtor help me find a reliable Arizona mortgage broker?
                      </h3>
                      <p>
                        Yes, Realtors often have established relationships with trusted Arizona mortgage brokers.
                        They can refer you to brokers who have a proven track record of helping clients close their
                        deals smoothly and on time.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        What is the difference between pre-qualification and pre-approval for a mortgage?
                      </h3>
                      <p>
                        Pre-qualification provides an estimate of how much you can borrow based on your financial
                        information, while pre-approval means your income, assets, credit, and loan application
                        have been reviewed and approved by a lender. A pre-approval letter carries more weight with
                        sellers and helps you close faster when you find a home.
                      </p>
                    </div>
                  </div>
                </section>

                <p>
                  If you have any questions about working with an Arizona mortgage broker, call us at{" "}
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
                  href="/arizona-mortgage-basics/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/arizona-mortgage-approval-process/"
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
