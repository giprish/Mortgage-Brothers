import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import JsonLd from "@/app/component/JsonLd";
import { buildArticleSchemas } from "@/lib/seo/structured-data";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";
import YoutubeLiteEmbed from '@/app/component/YoutubeLiteEmbed';

export const metadata: Metadata = getSeoMetadata("/mortgage-payoff-higher-than-mortgage-balance/");

const relatedLinks = [
  { label: "When is a mortgage payment actually considered late?", href: "/when-is-a-mortgage-payment-actually-considered-late/" },
  { label: "How to calculate PMI mortgage insurance", href: "/how-to-calculate-how-much-pmi-mortgage-insurance-will-be/" },
  { label: "Understanding amortization chart", href: "/understanding-amortization-chart/" },
  { label: "What are mortgage trigger leads?", href: "/what-are-mortgage-trigger-leads/" },
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

const articleFaqs = [
  { question: "How do mortgage payoffs work?", answer: "A payoff amount includes your principal balance plus interest that accrues daily through the exact payoff date, and sometimes other adjustments. That is why payoff is usually higher than the statement balance snapshot." },
  { question: "I made my payment on time, why is it still going up?", answer: "Mortgage interest is paid in arrears, so after your monthly payment posts, interest continues accruing each day. Your payoff amount rises day by day until the loan is fully paid off." },
  { question: "How does your closing date impact your mortgage payoff?", answer: "Closing later in the month usually means more accrued daily interest is added to payoff. Closing timing affects the exact amount required because lenders calculate payoff through the date funds are received." },
] as const;

const articleJsonLd = buildArticleSchemas({
  blog: {
    pathname: "/mortgage-payoff-higher-than-mortgage-balance/",
    headline: "Why Is My Mortgage Payoff Higher Than My Mortgage Statement Balance?",
    description: "Understand why mortgage payoff amounts can exceed statement balances, including daily accrued interest, payoff timing, and closing date impacts.",
    datePublished: "2025-02-03",
    articleSection: "Mortgage Basics",
  },
  faqs: [...articleFaqs],
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Mortgage Basics", path: "/mortgage-basics/" },
    { name: "Why Is My Mortgage Payoff Higher Than My Mortgage Statement Balance?", path: "/mortgage-payoff-higher-than-mortgage-balance/" },
  ],
});

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function MortgagePayoffPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <JsonLd data={articleJsonLd} />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>Why Is My Mortgage Payoff Higher Than My Mortgage Statement Balance?</>}
          excerpt="Understand why mortgage payoff amounts can exceed statement balances, including daily accrued interest, payoff timing, and closing date impacts."
          category="Mortgage Basics"
          categoryHref="/mortgage-basics/"
          dateLabel="Feb 3, 2025"
          readTime="7 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                One question we get a lot of the time is why is my mortgage payoff higher than my mortgage
                statement balance? Why is it higher than I thought? Some people have asked us if part of this
                balance is a markup or overage on our behalf. So, let&apos;s just get that right out of the way.
                It&apos;s not. The difference is not due to any markup or overage. We don&apos;t keep anything.
                So, what gives?
              </p>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <YoutubeLiteEmbed
                  videoId="a_KMmNlwEpk"
                  title="Why Is My Mortgage Payoff Higher Than My Mortgage Statement Balance?"
                />
              </div>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2 className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Avoid Surprises on Your Mortgage Payoff
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Get expert help understanding your payoff statement, daily interest accrual, and how closing dates impact the final number.
                </p>
                <Link href="/#get-pre-approved" className="btn-primary">
                  Request a Free Mortgage Payoff Review
                </Link>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section>
                  <h2 className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    How do mortgage payoffs work?
                  </h2>
                  <p className="mb-4">
                    If you&apos;re refinancing, you can&apos;t just get a loan for the exact amount of your
                    mortgage statement balance. You have to account for interest. We&apos;ve had people call us
                    looking to refinance who will tell us what they owe, but we always advise them right away to
                    make sure that they&apos;re looking at their mortgage payoff, not their mortgage statement
                    balance. It&apos;s a common confusion that happens to a lot of people, which is why we&apos;re
                    here to clear it up.
                  </p>
                  <p>
                    Your monthly payments are formula driven based on your loan amount, your amount of interest,
                    and when you are paying it off.
                  </p>
                </section>

                <section>
                  <h2 className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    I made my payment on time, why is it still going up?
                  </h2>
                  <p className="mb-4">
                    The reason for this is that mortgage payments are paid in arrears. If you look at your
                    statement from your bank, you&apos;ll notice that your payment due date is different than
                    your statement date. That is because your payment at the beginning of, say, July covers the
                    month of June and each day of that month your amount owed accrues interest.
                  </p>
                  <p>
                    We like to think of it as a stairstep scenario. When you make the payment on the first of
                    every month, every day from there on out your balance goes up, as it accrues interest each
                    day. Because of this, if you charted out the amount you owe on a graph it would look more
                    like a stairstep than a straight, descending line. It escalates up before it drops down
                    again.
                  </p>
                </section>

                <section>
                  <h2 className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    How does your closing date impact your mortgage payoff?
                  </h2>
                  <p className="mb-4">
                    Let&apos;s say we close a borrower in the middle of July. They will be responsible for the
                    interest accrued for the rest of the days in the month. Now if we&apos;re refinancing and
                    closing your loan at the top of the month, often title companies will ask for a couple of
                    extra days of interest so that by the time they get their money they are not shorted.
                  </p>
                  <p className="mb-4">
                    In cases where the closing date is, say, ten days into the next month, you&apos;ll be
                    responsible for that daily interest accrued when paying off your mortgage. There is no way
                    around it. Though it is worth noting that late fees are typically not incurred until
                    midmonth, so we can close a few days into a new month without having to worry about any late
                    fees.
                  </p>
                  <p className="mb-4">
                    When you close on a new mortgage, as well, is something to consider. If you close near the
                    end of the month, in some scenarios, you won&apos;t be responsible for your first payment
                    until the end of the next month, but you&apos;ll still be responsible for each day&apos;s
                    interest, meaning when it comes time for your first payment there will be a larger
                    out-of-pocket expense.
                  </p>
                  <p className="mb-4">
                    Regardless, the payoff number you will be responsible for is not calculated by us. It comes
                    directly from your bank. But we want to make sure you are aware of the several layers of
                    interest that can get tacked onto your unpaid principal balance, which is what can make it
                    appear off when you&apos;re looking at your payoff amount. In short, remember that the money
                    the original investor lent you is making that investor money daily and you are responsible
                    for paying that interest off.
                  </p>
                </section>

                <p className="text-center font-bold text-xl my-8 text-[#052316]">•••</p>

                <p className="text-[15px]">
                  Thanks for listening and reading the Mortgage Brothers Show. Let us know if you have any
                  questions you&apos;d like us to answer on this podcast. You can email your questions to
                  Tom@AZMortgageBrothers.com or Eddie@AZMortgageBrothers.com. Be sure to ask us for a free quote
                  on your next mortgage. We&apos;ll personally work with you and help you through the whole
                  process.
                </p>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with you and help you through the whole process.
                  </p>
                </div>

                <p className="text-[15px]">
                  Expand your mortgage knowledge with{" "}
                  <Link href="/when-is-a-mortgage-payment-actually-considered-late/" className="text-[#3fb364] font-semibold hover:underline">
                    when a mortgage payment is considered late
                  </Link>
                  ,{" "}
                  <Link href="/how-to-calculate-how-much-pmi-mortgage-insurance-will-be/" className="text-[#3fb364] font-semibold hover:underline">
                    how to calculate PMI
                  </Link>
                  ,{" "}
                  <Link href="/understanding-amortization-chart/" className="text-[#3fb364] font-semibold hover:underline">
                    understanding amortization
                  </Link>
                  ,{" "}
                  <Link href="/what-are-mortgage-trigger-leads/" className="text-[#3fb364] font-semibold hover:underline">
                    mortgage trigger leads
                  </Link>
                  ,{" "}
                  <Link href="/what-are-closing-costs-on-a-home-purchase/" className="text-[#3fb364] font-semibold hover:underline">
                    closing costs on home purchases
                  </Link>
                  , and{" "}
                  <Link href="/mortgage-payoff-higher-than-mortgage-balance/" className="text-[#3fb364] font-semibold hover:underline">
                    mortgage payoff differences
                  </Link>
                  .
                </p>

                <p className="text-[#5a6b52] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has been prepared for informational purposes only. You should consult your own tax, legal, and accounting advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS #210917 and 1618695. Equal housing lender.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link href="/what-are-closing-costs-on-a-home-purchase/" className="text-[#3fb364] font-semibold hover:underline">
                  ← Previous Post
                </Link>
                <Link href="/what-if-my-spouse-dies-and-im-not-on-the-mortgage/" className="text-[#5a6b52] hover:text-[#3fb364] transition-colors">
                  Next Post →
                </Link>
              </div>
            </article>

            <aside className="lg:sticky lg:top-[100px] h-fit space-y-6">
              <div className="bg-[#f0f2f5] border-t-4 border-[#3fb364] rounded-b-2xl p-6 text-center shadow-sm">
                <p className="text-[#08271B] text-[11px] font-bold tracking-[0.15em] uppercase mb-1">The Mortgage Brothers Team</p>
                <h3 className="text-[#08271B] text-[20px] font-extrabold uppercase tracking-wide leading-snug mt-4 mb-2">Your Dream Home Awaits!</h3>
                <p className="text-[#6a7a6a] text-[11px] font-semibold uppercase tracking-wide mb-4">Expert mortgage solutions tailored to your needs</p>
                <p className="text-[#3fb364] text-[14px] font-bold uppercase mb-5">Talk to a Broker Today!</p>
                <a href="tel:+16025352171" className="btn-primary w-full">
                  +1 602-535-2171
                </a>
              </div>

              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                <h3 className="text-[#08271B] text-[16px] font-bold mb-4">Categories</h3>
                <ul className="space-y-2.5">
                  {categories.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-[13.5px] text-[#4e5b4e] hover:text-[#3fb364] transition-colors leading-snug">
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
                      <Link href={item.href} className="text-[13.5px] text-[#4e5b4e] hover:text-[#3fb364] transition-colors leading-snug">
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
                      <Link href={item.href} className="text-[13.5px] text-[#4e5b4e] hover:text-[#3fb364] transition-colors leading-snug">
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
            <h2 className="text-white text-[28px] lg:text-[34px] font-normal mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Tailored Mortgage Solutions
            </h2>
            <p className="text-[#c8c8b8] text-[15.5px] leading-relaxed mb-7">
              Have questions about financing options? Our experts are here to help with personalized advice for any mortgage type. Fill out our form to get started today!
            </p>
            <Link href="/contact-us/" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </section>

        <section className="w-full bg-[#f5f0e8] py-16 lg:py-20 border-y border-[#e8e0d0]/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-[#08271B] text-[30px] lg:text-[38px] font-normal leading-tight mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get in Touch with The Mortgage Brothers
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-8 max-w-2xl mx-auto">
              Ready to take the next step towards your dream home? One of our experienced mortgage professionals will get back to you promptly with personalized solutions tailored to your unique financial situation.
            </p>
            <Link href="/#get-pre-approved" className="btn-primary">
              Get Your Rate Now
            </Link>
          </div>
        </section>

        <section className="w-full py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2 className="text-[#08271B] text-[28px] lg:text-[34px] font-normal text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
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