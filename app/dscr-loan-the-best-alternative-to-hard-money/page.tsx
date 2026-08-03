"use client";

import React from "react";
import Link from "next/link";
import FaqAccordion from "../component/FaqAccordion";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

const relatedLinks = [
  {
    label: "Managing Employment Gaps",
    href: "/getting-a-mortgage-with-employment-gaps/",
  },
  {
    label: "Credit Card Payoff",
    href: "/can-i-simply-payoff-credit-cards-to-qualify-for-a-mortgage/",
  },
  {
    label: "Couple vs Single Applications",
    href: "/better-getting-mortgage-couple-vs-single-applicant/",
  },
  {
    label: "Relocating While Remote",
    href: "/can-i-relocate-and-get-a-mortgage-while-working-remotely-out-of-state/",
  },
  {
    label: "Rapid Rescore Boosts Qualification",
    href: "/how-a-rapid-rescore-can-help-to-get-qualified-for-a-mortgage/",
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
      name: "What is a hard money loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A hard money loan is a loan secured by a property. They close quickly (often within 5 to 7 days), require very little underwriting, and are ideal for investors who move quickly. However, they come with high interest rates (typically 12% or more), high fees, and require significant equity in the home (usually 40–50% down). They are not suitable for long-term investors.",
      },
    },
    {
      "@type": "Question",
      name: "What are the pros and cons of hard money loans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pros of hard money loans include quick closings (sometimes in less than 7 days) and minimal underwriting. Cons include high interest rates (around 12% or more), high fees, a large amount of equity required, and they are generally not good for long-term investments.",
      },
    },
    {
      "@type": "Question",
      name: "What is a DSCR loan and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A DSCR (Debt Service Coverage Ratio) loan is a type of investment property loan based on the property's potential rental income rather than the borrower's personal income. The DSCR is calculated by dividing the property's gross rent income by the principal, interest, taxes, and insurance (PITI) payment. If the DSCR ratio is greater than 0.75, you may qualify for this program.",
      },
    },
    {
      "@type": "Question",
      name: "What are the pros and cons of DSCR loans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pros: Lower rates and fees than hard money, down payments as low as 20%, can be used for purchases and cash-out refinances, no personal income documentation or employment proof needed, gifts allowed for down payments, loan amounts up to $3.5 million, and a minimum credit score of 620. Cons: Cannot be paid off before 6 months, only for investment properties (not second homes), and the property must be in livable condition.",
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

export default function DscrLoanHardMoneyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />
      <div className="h-[64px] sm:h-[72px] bg-[#08271B] w-full shrink-0" aria-hidden />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>DSCR Loan: The Best Alternative to Hard Money</>}
          excerpt="Learn how a DSCR loan works, why it's a great alternative to hard money, and how investors can qualify without personal income verification."
          category="Mortgage Qualifications"
          categoryHref="/mortgage-qualifications/"
          dateLabel="Feb 3, 2025"
          readTime="9 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                In this post, we&apos;re looking at DSCR loans, which we think is one of the best alternatives
                to hard money loans.
              </p>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <iframe
                  src="https://www.youtube.com/embed/qRBCUt_C2is"
                  title="DSCR Loan: The Best Alternative to Hard Money"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Need a Better Alternative to Hard Money?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  A DSCR loan can offer lower rates and better terms for real estate investors. Find out how
                  to qualify today!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                  >
                    Get a Free DSCR Loan Consultation &rarr;
                  </Link>
                  <Link
                    href="/contact-us/"
                    className="inline-flex items-center gap-2 text-[#3fb364] hover:underline text-[15px] font-semibold px-4 py-3 transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="whats-a-hard-money-loan">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What&apos;s a hard money loan?
                  </h2>
                  <p className="mb-5">
                    A hard money loan is a loan secured by a property. There are plenty of good things about
                    them. They close quickly &mdash; we&apos;re talking five to seven days, maybe even three
                    in some scenarios. Very little underwriting is needed. The downsides are that they have
                    high interest rates, typically 12% or more and they require a lot of equity in the home.
                    Sometimes, you can find a hard money lender with a 20% down minimum, but most times
                    it&apos;s around 40% or 50%. These loans are not good for longer term investors, but
                    they&apos;re great for people who move quickly.
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">Hard Money Pros</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>Quick closings (possible in less than 7 days)</li>
                    <li>Very little underwriting</li>
                  </ul>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">Hard Money Cons</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>High interest rates (typically 12% or more)</li>
                    <li>High fees</li>
                    <li>Lots of home equity required</li>
                    <li>Bad for long term investors</li>
                  </ul>

                  <p>Thankfully, we&apos;ve got an alternative.</p>
                </section>

                <section id="the-dscr-loan-as-an-alternative">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    The DSCR loan as an alternative to hard money
                  </h2>
                  <p className="mb-5">
                    DSCR stands for Debt Service Coverage Ratio. A DSCR loan allows you to take a loan out on
                    an investment property based on the appraised cash flow that it might generate, as opposed
                    to your income.
                  </p>
                  <p className="mb-5">
                    Your debt service coverage ratio is calculated by taking your gross rent income and
                    dividing it by the principal, interest, taxes, and insurance (PITI) payment. As an equation
                    that looks like this:
                  </p>
                  <p className="mb-5 font-semibold text-[#052316] text-center text-[18px]">
                    DSCR = Gross Rent Income ÷ PITI
                  </p>
                  <p className="mb-5">
                    So, let&apos;s say your rent was $2500 and your total PITI payment is $3000. Your DSCR, in
                    this example, would be calculated as follows:
                  </p>
                  <p className="mb-5 font-semibold text-[#052316] text-center text-[18px]">
                    $2,500 ÷ $3,000 = 0.83
                  </p>
                  <p>
                    This gives you a DSCR ratio of 0.83, and as long as your DSCR ratio is greater than 0.75,
                    here in Maricopa County, you&apos;re eligible for this program.
                  </p>
                </section>

                <section id="pros-of-dscr-loans">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Pros of DSCR loans
                  </h2>
                  <p className="mb-5">
                    With this program, we&apos;re basically allowing you to get 100% credit for your rent.
                    DSCR loans have lower rates and fees than hard money, and down payments can be as low as
                    20%. It can be used on purchases and cash-out refinances. But the really great thing is
                    that there&apos;s no lease needed. We use the market rent from the appraisal where we
                    order a credit market analysis where an appraiser looks around at comp sales and rentals,
                    so there&apos;s no personal income needed, there&apos;s no need for your tax returns or
                    pay stubs, and we don&apos;t need proof of your employment. Gifts are allowed for down
                    payments, and you can get a loan of up to $3.5 million. Plus, the minimum credit score is
                    only 620.
                  </p>
                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">The DSCR Pros at a Glance:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Lower Rates and Lower Fees than Hard Money</li>
                    <li>Down payment as low at 20% down</li>
                    <li>Purchase and Cash-out Refinances allowed</li>
                    <li>Bank will give you 100% credit for your Rent</li>
                    <li>No lease is needed. We can use Market Rent from appraisal</li>
                    <li>No Personal Income documentation is needed</li>
                    <li>No Tax returns needed</li>
                    <li>No paystubs needed</li>
                    <li>No employment needed</li>
                    <li>Gifts are allowed for Down Payment subject to terms</li>
                    <li>Loan amounts up to $3.5 million</li>
                    <li>Minimum credit score is 620</li>
                  </ul>
                </section>

                <section id="cons-of-dscr-loan">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Cons of DSCR loan
                  </h2>
                  <p className="mb-5">
                    This is sort of the opposite of hard money in the sense that you can&apos;t pay this loan
                    off for six months and it is only for investment properties. It&apos;s not for second
                    homes. And the home will need to remain in a livable condition. It can&apos;t be gutted,
                    but it&apos;s perfect if you&apos;re planning on renting it out, for example.
                  </p>
                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">The DSCR Cons at a Glance:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cannot be paid off before 6 months</li>
                    <li>Investment Properties only</li>
                    <li>Home will need to be in livable condition</li>
                  </ul>
                </section>

                <section id="who-is-the-dscr-loan-perfect-for">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Who is the DSCR loan perfect for?
                  </h2>
                  <p className="mb-3">The DSCR loan is perfect for:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>
                      Investors who don&apos;t want to provide employment info (tax returns, pay stubs, W2s,
                      etc.)
                    </li>
                    <li>
                      Investors who are looking to buy and flip (as long as payoff does not occur before 6
                      months from loan closing)
                    </li>
                    <li>Investors who are looking to buy and hold properties</li>
                  </ul>
                  <p>
                    The DSCR loan is perfect for investors who do not want to provide employment information,
                    tax returns, paystubs, W2s, etc; for investors who are looking to buy and flip properties,
                    as long as payoff does not occur before six months from loan closing; and, investors who
                    are looking to buy and hold properties. It&apos;s a classic for self-employed borrowers
                    who have very complex incomes who are looking to get an investment property, since it
                    solves the problem of having to deal with complex income reporting. It can also be great
                    if you have a bunch of investment properties and say you&apos;ve maxed out on the
                    conventional loan limit of ten, the DSCR loan is a perfect option.
                  </p>
                </section>

                <section id="contact">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Get in touch
                  </h2>
                  <p className="mb-5">
                    If you&apos;d like to get a DSCR loan, or if you have any questions about anything
                    mortgage related, don&apos;t hesitate to reach out.
                  </p>
                  <p>
                    You can give us a call at{" "}
                    <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                      602-535-2171
                    </a>{" "}
                    or shoot us an email at{" "}
                    <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                      Contact Form
                    </Link>
                    . Be sure to ask us for a free quote on your next mortgage. We&apos;ll be sure to give you
                    personalized service and help you through the whole process.
                  </p>
                </section>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with
                    you and help you through the whole process.
                  </p>
                </div>

                <p className="text-[15px]">
                  Interested in alternative lending options? Discover why a DSCR loan may be ideal, and
                  don&apos;t miss our guides on handling{" "}
                  <Link
                    href="/getting-a-mortgage-with-employment-gaps/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    employment gaps
                  </Link>
                  , exploring{" "}
                  <Link
                    href="/can-i-simply-payoff-credit-cards-to-qualify-for-a-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    credit card payoff
                  </Link>
                  , weighing the pros and cons of{" "}
                  <Link
                    href="/better-getting-mortgage-couple-vs-single-applicant/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    couple vs single applications
                  </Link>
                  , tips on{" "}
                  <Link
                    href="/can-i-relocate-and-get-a-mortgage-while-working-remotely-out-of-state/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    relocating while working remotely
                  </Link>
                  , and learning how a{" "}
                  <Link
                    href="/how-a-rapid-rescore-can-help-to-get-qualified-for-a-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    rapid rescore can boost your qualification
                  </Link>
                  .
                </p>

                <p className="text-[#8a9a7a] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has
                  been prepared for informational purposes only. You should consult your own tax, legal, and
                  accounting advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS
                  #210917 and 1618695. Equal housing lender.
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
                        What You Need to Know About Investment Rental Mortgages with DSCR Home Loans
                      </h3>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Introduction [00:00]</h3>
                      <p className="mb-3">
                        I&apos;m Eddie Knoell, and I&apos;m Tom Knoell. Welcome, everyone, to the Mortgage
                        Brothers Podcast Show! Today, we&apos;re talking about an alternative to hard money
                        loans: DSCR&mdash;Debt Service Coverage Ratio loans.
                      </p>
                      <p>
                        Before we get started, just a reminder: this is for informational purposes only and
                        not financial advice. Also, if you find this helpful, be sure to subscribe, like, and
                        comment below!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        What Is Hard Money Lending? [01:08]
                      </h3>
                      <p className="mb-3">
                        Many investors are familiar with hard money loans. These loans provide quick
                        closings&mdash;sometimes in as little as 5 to 7 days, or even 3 days in some cases.
                        They require minimal underwriting, making them a go-to option for fast transactions.
                      </p>
                      <p className="mb-3">But hard money loans have significant downsides:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>High interest rates (often 12% or more)</li>
                        <li>High fees and points</li>
                        <li>Strict equity requirements (some lenders require 40% to 50% down)</li>
                      </ul>
                      <p>
                        These loans are not ideal for long-term investors. They work best for short-term
                        situations, like flipping a property quickly. Investors who need to move fast and
                        don&apos;t mind paying extra for speed typically use hard money.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        What Is a DSCR Loan? [02:39]
                      </h3>
                      <p className="mb-3">
                        DSCR (Debt Service Coverage Ratio) loans offer a better alternative to hard money.
                        These loans focus on the property&apos;s cash flow rather than the borrower&apos;s
                        personal income.
                      </p>
                      <p className="mb-3">
                        DSCR is calculated by dividing gross rent income by principal, interest, taxes, and
                        insurance (PITI).
                      </p>
                      <p className="mb-3">Example:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Monthly rent: $2,500</li>
                        <li>PITI payment: $3,000</li>
                        <li>
                          DSCR ratio: <strong>2,500 ÷ 3,000 = 0.83</strong>
                        </li>
                      </ul>
                      <p>
                        Most DSCR loan programs require a ratio above 0.75, making them a flexible option for
                        investors.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Advantages of DSCR Loans Over Hard Money [04:09]
                      </h3>
                      <p className="mb-3">
                        Unlike hard money, DSCR loans have lower rates and lower fees. Here are the key
                        benefits:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Interest rates are much lower than hard money loans</li>
                        <li>Lower fees and points</li>
                        <li>Down payments as low as 20%</li>
                        <li>No personal income verification required</li>
                        <li>No tax returns, W-2s, or pay stubs needed</li>
                        <li>No lease agreements required (appraisers use market rent analysis)</li>
                        <li>Loan amounts up to $3.5 million</li>
                        <li>
                          Gift funds allowed for down payments&mdash;something conventional loans don&apos;t
                          allow for investment properties
                        </li>
                      </ul>
                      <p className="mb-3">
                        If you already have a hard money loan, you can refinance into a DSCR loan to get out
                        of high interest rates. Many investors use hard money to buy a foreclosure and then
                        refinance with a DSCR loan for long-term financing.
                      </p>
                      <p>
                        One of the biggest advantages is that lenders don&apos;t require a lease agreement.
                        Instead, appraisers determine rental value based on market comps&mdash;so even if the
                        property isn&apos;t rented yet, you can still qualify.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        DSCR Loan Requirements [06:28]
                      </h3>
                      <p className="mb-3">To qualify, you must:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Have a DSCR ratio of at least 0.75</li>
                        <li>Have a credit score of 620+ (higher scores get better rates)</li>
                        <li>Be purchasing an investment property (not a primary or second home)</li>
                        <li>Buy a property in livable condition (no major renovations needed)</li>
                      </ul>
                      <p className="mb-3">However, there are a few restrictions:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Prepayment penalties apply if you pay off the loan within 6 months</li>
                        <li>Vacation homes are not eligible (only investment properties)</li>
                      </ul>
                      <p>
                        This means you can&apos;t use a DSCR loan for a cabin in Flagstaff or a vacation
                        rental in Sedona unless it&apos;s strictly an investment property.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Who Are DSCR Loans Best For? [08:25]
                      </h3>
                      <p className="mb-3">These loans are perfect for investors who:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Don&apos;t want to provide personal income documentation</li>
                        <li>Are self-employed, 1099 workers, or have complex tax returns</li>
                        <li>Need to refinance out of a hard money loan</li>
                        <li>Want to buy and hold rental properties</li>
                      </ul>
                      <p className="mb-3">
                        DSCR loans are especially useful for high-net-worth individuals with unconventional
                        income streams, such as attorneys transitioning to partnership status or entrepreneurs
                        with fluctuating earnings.
                      </p>
                      <p className="mb-3">
                        For long-term investors, it&apos;s important to compare DSCR loans with conventional
                        financing. If your personal income is easy to document, Fannie Mae or Freddie Mac
                        loans might be a better fit&mdash;but DSCR loans provide more flexibility.
                      </p>
                      <p>
                        Even if you already own multiple investment properties, DSCR loans have no limit on
                        the number of financed properties&mdash;unlike conventional loans, which cap at 10
                        properties.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        How to Get Started [11:02]
                      </h3>
                      <p className="mb-3">
                        If you&apos;re an investor looking for a smarter alternative to hard money, DSCR loans
                        might be the solution.
                      </p>
                      <p className="mb-3">
                        To get a free consultation, contact the Mortgage Brothers Team. You can find our phone
                        number and contact form in the description. We&apos;re based in Phoenix, Arizona, and
                        specialize in helping investors navigate the mortgage process.
                      </p>
                      <p>
                        Thanks for listening! If you found this information helpful, like, comment, and
                        subscribe to the Mortgage Brothers Podcast for more expert mortgage advice.
                      </p>
                    </div>
                  </div>
                </section>
                
                <section id="faqs">
                  <FaqAccordion
                    title="Frequently Asked Questions"
                    items={[
                      {
                        q: "What is a hard money loan?",
                        a: <>A hard money loan is a loan secured by a property. They close quickly (often within 5 to 7 days), require very little underwriting, and are ideal for investors who move quickly. However, they come with high interest rates (typically 12% or more), high fees, and require significant equity in the home (usually 40–50% down). They are not suitable for long-term investors.</>
                      },
                      {
                        q: "What are the pros and cons of hard money loans?",
                        a: <>Pros of hard money loans include quick closings (sometimes in less than 7 days) and minimal underwriting. Cons include high interest rates (around 12% or more), high fees, a large amount of equity required, and they are generally not good for long-term investments.</>
                      },
                      {
                        q: "What is a DSCR loan and how does it work?",
                        a: <>A DSCR (Debt Service Coverage Ratio) loan is a type of investment property loan based on the property's potential rental income rather than the borrower's personal income. The DSCR is calculated by dividing the property's gross rent income by the principal, interest, taxes, and insurance (PITI) payment. If the DSCR ratio is greater than 0.75, you may qualify for this program.</>
                      },
                      {
                        q: "What are the pros and cons of DSCR loans?",
                        a: <>Pros: Lower rates and fees than hard money, down payments as low as 20%, can be used for purchases and cash-out refinances, no personal income documentation or employment proof needed, gifts allowed for down payments, loan amounts up to $3.5 million, and a minimum credit score of 620. Cons: Cannot be paid off before 6 months, only for investment properties (not second homes), and the property must be in livable condition.</>
                      }
                    ]}
                  />
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/how-a-rapid-rescore-can-help-to-get-qualified-for-a-mortgage/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/get-part-income-commission-can-use-qualify-loan/"
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
              Ready to take the next step towards your dream home? One of our experienced mortgage
              professionals will get back to you promptly with personalized solutions tailored to your unique
              financial situation.
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