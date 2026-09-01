import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import JsonLd from "@/app/component/JsonLd";
import { buildArticleSchemas } from "@/lib/seo/structured-data";
import FaqAccordion from "../component/FaqAccordion";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";
import YoutubeLiteEmbed from '@/app/component/YoutubeLiteEmbed';

export const metadata: Metadata = getSeoMetadata("/how-does-my-car-loan-payment-affect-my-mortgage/");

const relatedLinks = [
  {
    label: "Grossing Up Your Income",
    href: "/grossing-up-your-income-what-does-that-mean/",
  },
  {
    label: "Can I Get a 3rd Mortgage?",
    href: "/can-i-get-a-3rd-mortgage/",
  },
  {
    label: "Spouse Dies & Not On Mortgage",
    href: "/what-if-my-spouse-dies-and-im-not-on-the-mortgage/",
  },
  {
    label: "How Fast Is Too Fast to Close",
    href: "/how-fast-is-too-fast-to-close-a-mortgage-loan-to-purchase-a-house/",
  },
  {
    label: "Specialty Loans",
    href: "/specialty-loans/",
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

const articleFaqs = [
  { question: "How much more home can I get if I don’t have a $250 car payment?", answer: "A $250 car payment equates to about a $50,000 mortgage. Not many people are buying houses for $50,000, but what this really means is you can add this to your potential home buying power, your purchasing power. So, with the car payment of $250, you can afford a $200,000 house, but without that $250 car payment, you could afford a $250,000 house. And today, that’s a big deal." },
  { question: "How much more home can I get if I don’t have a $400 car payment?", answer: "If your car payment is $400 a month, that equates to roughly $90,000 that could go into buying a new home." },
  { question: "How much more home can I get if I don’t have a $600 car payment?", answer: "If your car payment is $600 a month, that equates to roughly $140,000 that could go into buying a new home." },
  { question: "How much more home can I get if I don’t have a $1000 car payment?", answer: "If your car payment is $1000 a month, that equates to roughly $235,000 that could go into buying a new home." },
] as const;

const articleJsonLd = buildArticleSchemas({
  blog: {
    pathname: "/how-does-my-car-loan-payment-affect-my-mortgage/",
    headline: "How Does My Car Loan Payment Affect My Mortgage?",
    description: "See how car payments impact debt-to-income ratios and how much home-buying power you lose with common auto loan amounts.",
    datePublished: "2025-02-04",
    articleSection: "Specialty Loans",
  },
  faqs: [...articleFaqs],
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Specialty Loans", path: "/specialty-loans/" },
    { name: "How Does My Car Loan Payment Affect My Mortgage?", path: "/how-does-my-car-loan-payment-affect-my-mortgage/" },
  ],
});

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-[#3fb364] shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function CarLoanPaymentAffectMortgagePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <JsonLd data={articleJsonLd} />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>How Does My Car Loan Payment Affect My Mortgage?</>}
          excerpt="See how car payments impact debt-to-income ratios and how much home-buying power you lose with common auto loan amounts."
          category="Specialty Loans"
          categoryHref="/specialty-loans/"
          dateLabel="Feb 4, 2025"
          readTime="8 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                In this post, we&apos;re talking about car payments and how they affect mortgages. As loan
                officers, we&apos;re in the business of trying to calculate how much a person qualifies for or
                not. Because car payments are such an everyday part of life for so many people, we wanted to
                give a brief rundown of how your car payments might be affecting your mortgage purchasing
                power.
              </p>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <YoutubeLiteEmbed
                  videoId="lyGOAxCsd8U"
                  title="How Does My Car Loan Payment Affect My Mortgage?"
                />
              </div>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Worried About Your Car Loan &amp; Mortgage Approval?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Your car loan payment could impact your mortgage approval. Let our experts help you
                  understand your options and improve your chances.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="#get-pre-approved"
                    className="btn-primary"
                  >
                    Get a Free Mortgage Consultation
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="there-are-two-main-buckets-our-borrowers-tend-to-fall-into">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    There are two main buckets our borrowers tend to fall into
                  </h2>
                  <p className="mb-5">
                    The first bucket is going to be what we&apos;re going to call the first time home buyer
                    bucket. This is that person who&apos;s buying their first or second home and they&apos;re
                    starting a family. In these cases, often their income is not where they want it to be and
                    their expenses are probably a little bit higher than normal because they&apos;re having to
                    buy cribs and minivans and things like that. For them, these car payments can really impact
                    what sort of home, if any, they can look into buying.
                  </p>
                  <p className="mb-5">
                    Then we&apos;ve got those who are refinancing. These are more veteran borrowers that&apos;ve
                    been in their home for longer periods of time and have more seasoned income. They might
                    have a travel trailer and two decent cars. These car payments are big and their mortgage
                    interest rate might be sitting at 3.5% and they want to refi, and it&apos;s like all of a
                    sudden, your income is good, but you got some big debt and you&apos;ve got some big car
                    payments, and you&apos;re wondering how this is going to affecting your mortgage. These car
                    payments, when you really break down what it means to your overall budget and how it
                    impacts a mortgage, is a big deal.
                  </p>
                  <p>
                    The question you should be asking yourself is: If you didn&apos;t have your car payment, how
                    much more could you qualify for&mdash;how much more home could you buy?
                  </p>
                </section>

                <section id="how-much-more-home-can-i-get-if-i-dont-have-a-250-car-payment">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    How much more home can I get if I don&apos;t have a $250 car payment?
                  </h2>
                  <p>
                    A $250 car payment equates to about a $50,000 mortgage. Not many people are buying houses
                    for $50,000, but what this really means is you can add this to your potential home buying
                    power, your purchasing power. So, with the car payment of $250, you can afford a $200,000
                    house, but without that $250 car payment, you could afford a $250,000 house. And today,
                    that&apos;s a big deal.
                  </p>
                </section>

                <section id="how-much-more-home-can-i-get-if-i-dont-have-a-400-car-payment">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    How much more home can I get if I don&apos;t have a $400 car payment?
                  </h2>
                  <p>
                    If your car payment is $400 a month, that equates to roughly $80,000 that could go into
                    buying a new home.
                  </p>
                </section>

                <section id="how-much-more-home-can-i-get-if-i-dont-have-a-600-car-payment">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    How much more home can I get if I don&apos;t have a $600 car payment?
                  </h2>
                  <p>
                    If your car payment is $600 a month, that equates to roughly $120,000 that could go into
                    buying a new home.
                  </p>
                </section>

                <section id="how-much-more-home-can-i-get-if-i-dont-have-a-1000-car-payment">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    How much more home can I get if I don&apos;t have a $1000 car payment?
                  </h2>
                  <p>
                    If your car payment is $1000 a month, that equates to roughly $200,000 that could go into
                    buying a new home.
                  </p>
                </section>

                <section id="we-recommend-keeping-your-car-payments-as-low-as-possible">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    We recommend keeping your car payments as low as possible
                  </h2>
                  <p className="mb-5">
                    Especially for first time home buyers, we suggest keeping your car payment as low as
                    possible. After you get established in your home, then go and purchase that car.
                  </p>
                  <p>
                    If you have any questions about this or if you have any questions you&apos;d like us to
                    answer on our podcast, you can submit your questions using our{" "}
                    <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                      contact form
                    </Link>{" "}
                    or give us a call at{" "}
                    <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                      +1 (602) 535-2171
                    </a>
                    . Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work
                    with you and help you through the whole process.
                  </p>
                </section>

                
                <section id="frequently-asked-questions">
                  <FaqAccordion
                    title="Frequently Asked Questions"
                    items={articleFaqs.map((faq) => ({
                      q: faq.question,
                      a: faq.answer,
                    }))}
                  />
                </section>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with
                    you and help you through the whole process.
                  </p>
                </div>

                <p className="text-[15px]">
                  Curious about the impact of your car loan on your mortgage prospects? You might also want to
                  read about{" "}
                  <Link
                    href="/what-if-my-spouse-dies-and-im-not-on-the-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    spouse-related mortgage concerns
                  </Link>
                  , learn the details of{" "}
                  <Link
                    href="/grossing-up-your-income-what-does-that-mean/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    grossing-up income
                  </Link>
                  , consider whether you can obtain a{" "}
                  <Link
                    href="/can-i-get-a-3rd-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    third mortgage
                  </Link>
                  , and check out{" "}
                  <Link
                    href="/how-fast-is-too-fast-to-close-a-mortgage-loan-to-purchase-a-house/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    how fast is too fast to close a loan
                  </Link>
                  .
                </p>

                <p className="text-[#5a6b52] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has
                  been prepared for informational purposes only. You should consult your own tax, legal, and
                  accounting advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS
                  #210917 and 1618695. Equal Housing Opportunity.
                </p>

                <section id="podcast-transcript">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-6 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Transcript of the Mortgage Brothers Podcast
                  </h2>

                  <div className="space-y-8 text-[15.5px]">
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        How Car Payments Affect Your Mortgage Approval &amp; Buying Power
                      </h3>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Introduction [00:05]</h3>
                      <p className="mb-3">
                        Welcome to the Mortgage Brothers Podcast! I&apos;m Eddie Knoell, and I&apos;m Tom
                        Knoell. Today, we&apos;re diving into a topic that many homebuyers and homeowners
                        overlook:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>How do car payments affect your mortgage?</li>
                        <li>Can they reduce your home-buying power?</li>
                        <li>Should you buy a car before or after a home purchase?</li>
                      </ul>
                      <p>Let&apos;s break it down!</p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        The Key Question: Does a Car Payment Help or Hurt My Mortgage? [00:19]
                      </h3>
                      <p className="mb-3">Many borrowers ask:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Does having a car payment help my mortgage approval?</li>
                        <li>Does it hurt my ability to buy a home?</li>
                        <li>How much does my car payment affect my loan eligibility?</li>
                      </ul>
                      <p className="mb-3">
                        <strong>The short answer:</strong> A car payment reduces how much house you can
                        afford.
                      </p>
                      <p>
                        For every car payment you have, your mortgage lender must account for it when
                        calculating your Debt-to-Income (DTI) ratio.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        How Car Payments Impact Mortgage Approval [00:30]
                      </h3>
                      <p className="mb-3">
                        Let&apos;s say you&apos;re Bob Borrower, and you call us with this situation:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>You have a $400 car payment.</li>
                        <li>You have credit cards with balances.</li>
                        <li>You earn a fixed monthly income.</li>
                      </ul>
                      <p className="mb-3">
                        As lenders, we assess your debt-to-income ratio (DTI) to determine how much house you
                        can afford.
                      </p>
                      <p>
                        Car payments are one of the biggest fixed expenses affecting your home-buying power!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Two Types of Borrowers Affected by Car Payments [01:17]
                      </h3>
                      <p className="mb-2 font-semibold text-[#052316]">
                        1. First-Time Homebuyers (or Second-Time Buyers)
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Usually younger, with lower income and higher expenses.</li>
                        <li>Have car loans, student loans, credit card debt.</li>
                        <li>Every monthly payment reduces how much house they can afford.</li>
                        <li>Car payments can put them out of the home-buying process completely.</li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">
                        2. Homeowners Looking to Refinance
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>More experienced borrowers with higher income.</li>
                        <li>Own RV loans, luxury car payments, or multiple auto loans.</li>
                        <li>Want to refinance a low-interest mortgage (e.g., 3.5%).</li>
                        <li>High car payments limit refinance options due to debt ratio.</li>
                      </ul>
                      <p>
                        Regardless of income level, car payments add up and affect mortgage eligibility.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Real Examples: How Car Payments Lower Your Home Affordability [03:02]
                      </h3>
                      <p className="mb-3">
                        Many borrowers don&apos;t realize how much their car payment affects their mortgage
                        approval. Let&apos;s break it down:
                      </p>
                      <p className="mb-2 font-semibold text-[#052316]">
                        Car Payment Amount → Lost Home Buying Power
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>$250/mo → Lose $50,000 in home affordability</li>
                        <li>$400/mo → Lose $80,000 in home affordability</li>
                        <li>$600/mo → Lose $120,000 in home affordability</li>
                        <li>$1,000/mo → Lose $200,000 in home affordability</li>
                      </ul>
                      <p>
                        For every $100 in car payment, you lose about $20,000 in mortgage approval!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Real-World Example [06:16]
                      </h3>
                      <p className="mb-3">
                        A borrower applied for a mortgage six months ago. When they came back ready to buy,
                        they had:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Bought a new car with a $600 monthly payment.</li>
                        <li>Lost $120,000 in home affordability.</li>
                        <li>Could no longer qualify for the home they wanted.</li>
                      </ul>
                      <p>
                        <strong>Moral of the story:</strong> If you&apos;re planning to buy a house soon, avoid
                        buying a car first!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Common Misconceptions About Car Loans &amp; Mortgages [07:04]
                      </h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>
                          <strong>&ldquo;Lenders don&apos;t count car loans in mortgage approval.&rdquo;</strong>{" "}
                          False. All monthly debts, including car loans, count toward your Debt-to-Income ratio
                          (DTI).
                        </li>
                        <li>
                          <strong>
                            &ldquo;Everyone needs a car, so lenders won&apos;t penalize me for a car
                            loan.&rdquo;
                          </strong>{" "}
                          False. Even though cars are essential, lenders still count the debt as part of your
                          total obligations.
                        </li>
                        <li>
                          <strong>&ldquo;I can afford my car and a house.&rdquo;</strong> Maybe, but your lender
                          determines affordability based on income, debts, and loan guidelines.
                        </li>
                        <li>
                          <strong>&ldquo;I can pay off my car loan later.&rdquo;</strong> Paying off a car loan
                          before applying for a mortgage may improve your approval odds.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Key Takeaways: Should You Buy a Car Before or After a House? [07:58]
                      </h3>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>If you&apos;re planning to buy a home soon, wait to buy a car!</li>
                        <li>
                          If you have a car loan, consider paying it off before applying for a mortgage.
                        </li>
                        <li>
                          If you&apos;re refinancing, check how much your car loan affects your loan
                          eligibility.
                        </li>
                        <li>Always talk to a mortgage lender first before making big purchases!</li>
                      </ul>
                      <p>
                        <strong>Remember:</strong> Every $100 in car payment reduces home affordability by
                        $20,000.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Need Help? Contact Us Today! [08:00]
                      </h3>
                      <p className="mb-3">
                        If you&apos;re unsure how your car payment affects your mortgage, we&apos;re here to
                        help! Contact us through our contact form or call us for a personalized mortgage
                        review.
                      </p>
                      <p>
                        <strong>Final Thought:</strong> A car loan might not seem like a big deal, but it could
                        be the difference between buying your dream home or settling for less. Plan wisely!
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/specialty-loans/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/grossing-up-your-income-what-does-that-mean/"
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
                <p className="text-[#3fb364] text-[14px] font-bold uppercase mb-5">
                  Talk to a Broker Today!
                </p>
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
              Have questions about financing options? Our experts are here to help with personalized advice
              for any mortgage type. Fill out our form to get started today!
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
              Ready to take the next step towards your dream home? One of our experienced mortgage
              professionals will get back to you promptly with personalized solutions tailored to your unique
              financial situation.
            </p>
            <Link
              href="#get-pre-approved"
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