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
import {
  TranscriptAlertLine,
  TranscriptBanItem,
  TranscriptCheckItem,
  TranscriptEmojiItem,
  TranscriptLightbulbLine,
  TranscriptList,
  TranscriptMicLine,
  TranscriptMoneyItem,
  TranscriptPinLine,
  TranscriptPointItem,
} from "@/app/component/TranscriptIcons";

export const metadata: Metadata = getSeoMetadata("/get-part-income-commission-can-use-qualify-loan/");

const relatedLinks = [
  {
    label: "Count Commissions, Bonuses & Tips",
    href: "/how-to-count-commissions-and-bonuses-and-tips/",
  },
  {
    label: "Relocating While Remote",
    href: "/can-i-relocate-and-get-a-mortgage-while-working-remotely-out-of-state/",
  },
  {
    label: "Rapid Rescore Boosts Qualification",
    href: "/how-a-rapid-rescore-can-help-to-get-qualified-for-a-mortgage/",
  },
  {
    label: "DSCR Loan Alternative to Hard Money",
    href: "/dscr-loan-the-best-alternative-to-hard-money/",
  },
  {
    label: "Getting a Mortgage with Employment Gaps",
    href: "/getting-a-mortgage-with-employment-gaps/",
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

const tocLinks = [
  {
    label: "FHA Loans requirements to use Commission Income",
    href: "#fha-loans-requirements-to-use-commission-income",
  },
  {
    label: "VA Loan requirements to use Commission Income",
    href: "#va-loan-requirements-to-use-commission-income",
  },
  {
    label: "Conventional Loan requirements to use Commission Income",
    href: "#conventional-loan-requirements-to-use-commission-income",
  },
  { label: "Keep in Mind", href: "#keep-in-mind" },
  { label: "Conclusion", href: "#conclusion" },
  { label: "We're Here To Help!", href: "#were-here-to-help" },
  {
    label: "Transcript of the Mortgage Brothers Podcast",
    href: "#transcript-of-the-mortgage-brothers-podcast",
  },
] as const;

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
  { question: "Will commissions count towards a home loan?", answer: "Yes, commissions can count towards a home loan, but it depends on the loan program. Lenders typically require consistent commission income for at least 12–24 months, proof of employment, and tax returns to verify income stability." },
  { question: "Can I use commission income to qualify for an FHA loan?", answer: "Yes, FHA loans allow commission income if the borrower has received at least one commission check from their current employer, has 12 months of consistent commission income, no job gaps over 30 days, works in a similar line of work, and can provide two years of tax returns along with their most recent pay stub." },
  { question: "What are the VA loan requirements for commission income?", answer: "For VA loans, borrowers must have received at least one commission check from their current employer, have at least 2 years of consistent commission income, no job gaps greater than 30 days, work in a similar field if they changed jobs, and provide two years of tax returns along with their most recent pay stub." },
  { question: "Can commission income be used for a Conventional loan?", answer: "Yes, commission income can be used for a Conventional loan if the borrower has at least 12 months of consistent commission income, no job gaps greater than 30 days, works in a similar line of work if they changed jobs, provides two years of tax returns if commissions make up 25% or more of total income, and submits their most recent pay stub." },
] as const;

const articleJsonLd = buildArticleSchemas({
  blog: {
    pathname: "/get-part-income-commission-can-use-qualify-loan/",
    headline: "Will Commissions Count Towards a Loan?",
    description: "Can commission and bonus income help you qualify? See FHA, VA, and Conventional requirements for using variable income on a home loan.",
    datePublished: "2025-02-06",
    articleSection: "Mortgage Qualifications",
  },
  faqs: [...articleFaqs],
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Mortgage Qualifications", path: "/mortgage-qualifications/" },
    { name: "Will Commissions Count Towards a Loan?", path: "/get-part-income-commission-can-use-qualify-loan/" },
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

export default function CommissionQualifyLoanPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <JsonLd data={articleJsonLd} />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>Will Commissions Count Towards a Loan?</>}
          excerpt="Can commission and bonus income help you qualify? See FHA, VA, and Conventional requirements for using variable income on a home loan."
          category="Mortgage Qualifications"
          categoryHref="/mortgage-qualifications/"
          dateLabel="Feb 6, 2025"
          readTime="9 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                One of the most common questions I hear from prospective home buyers goes something like
                this: &ldquo;I made $40,000 last year and $20,000 of that was commission/bonus income. Can I
                use that the commission income to qualify for a home loan?&rdquo;
              </p>
              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                For many people who work in sales positions, commission-based income is a fact of life. If
                you&apos;re successful at your job, you can make a good living from commissions, but lending
                rules sometimes make this income difficult to use in the event that you want to qualify for a
                mortgage.
              </p>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <YoutubeLiteEmbed
                  videoId="PxaUC0XSQys"
                  title="Will Commissions Count Towards a Loan?"
                />
              </div>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <strong>Unsure If Your Commissions Count for a Loan?</strong>
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Learn how lenders calculate commissions and what you need to qualify for a mortgage with
                  variable income.
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

              <nav aria-label="Table of contents" className="mb-10">
                <ul className="list-disc pl-6 space-y-2 text-[#3a4a3a] text-[16px]">
                  {tocLinks.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} className="text-[#3fb364] font-semibold hover:underline">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <p>
                  People who do not receive commission but do receive regular bonuses fall into the same
                  category. Regular bonuses are treated the same way as commission for{" "}
                  <a
                    href="https://www.irs.gov/individuals/income-verification-express-service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    income verification
                  </a>{" "}
                  purposes.
                </p>
                <p>
                  So, the question is, &ldquo;Can I use my commission income to qualify for a home
                  loan?&rdquo;
                </p>
                <p>
                  <strong>Answer:</strong> It depends on the loan program.
                </p>
                <p>
                  Let&apos;s take a look at a couple of the most common types of loan programs and their
                  requirements.
                </p>

                <section id="fha-loans-requirements-to-use-commission-income">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>
                      <Link
                        href="/fha-home-loans-arizona/"
                        className="text-[#3fb364] font-semibold hover:underline"
                      >
                        FHA Loans
                      </Link>{" "}
                      requirements to use Commission Income
                    </strong>
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Borrower must have received at least one commission check from their current employer
                    </li>
                    <li>
                      Borrower must have at least 12 months of consistent commission income, that means no job
                      gaps greater than 30 days. If the borrower changed jobs within the last 12 months, the
                      new job must be in a similar line of work as the borrower&apos;s past employment.
                    </li>
                    <li>Copies of tax returns for the previous two years</li>
                    <li>A copy of borrower&apos;s most recent pay stub</li>
                  </ul>
                </section>

                <section id="va-loan-requirements-to-use-commission-income">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>
                      <Link
                        href="/va-loans-arizona/"
                        className="text-[#3fb364] font-semibold hover:underline"
                      >
                        VA Loan
                      </Link>{" "}
                      requirements to use Commission Income
                    </strong>
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Borrower must have received at least one commission check from their current employer
                    </li>
                    <li>
                      Borrower must have at least 2 years of consistent commission income, that means no job
                      gaps greater than 30 days. If the borrower changed jobs within the last 24 months, the
                      new job must be in a similar line of work as the borrower currently is in.
                    </li>
                    <li>Copies of tax returns for the previous two years</li>
                    <li>A copy of borrower&apos;s most recent pay stub</li>
                  </ul>
                </section>

                <section id="conventional-loan-requirements-to-use-commission-income">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>
                      <Link
                        href="/conventional-home-loans-arizona/"
                        className="text-[#3fb364] font-semibold hover:underline"
                      >
                        Conventional Loan
                      </Link>{" "}
                      requirements to use Commission Income
                    </strong>
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Borrower must have received at least one commission check from their current employer
                    </li>
                    <li>
                      Borrower must have at least 12 months of consistent commission income, that means no job
                      gaps greater than 30 days. If the borrower changed jobs within the last 12 months, the
                      new job must be in a similar line of work as the borrower&apos;s past employment.
                    </li>
                    <li>
                      Copies of tax returns for the previous two years if your commission income represents 25%
                      or more of your total income
                    </li>
                    <li>A copy of borrower&apos;s most recent pay stub</li>
                  </ul>
                </section>

                <section id="keep-in-mind">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>Keep in Mind</strong>
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Any documented decrease in commission income from one year to the next would require a
                      good explanation letter from an employer explaining the temporary nature of the changes
                      impacting income.
                    </li>
                    <li>Unreimbursed business expenses must be subtracted from gross income</li>
                  </ul>
                </section>

                <section id="conclusion">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>Conclusion</strong>
                  </h2>
                  <p className="mb-5">
                    In Conclusion, the Good News is &lsquo;<strong>YES</strong>&rsquo;, you can use commission
                    income to qualify for a home loan.
                  </p>
                  <p className="mb-5">
                    The requirements are somewhat more stringent than they would be for non-commission income,
                    but these are in everyone&apos;s interest. They establish the consistency of income and
                    ensure that there&apos;s enough coming in on a regular basis to pay the bills and keep the
                    lights on.
                  </p>
                  <p>
                    Talk to your lender if you&apos;d like to see if you can use your commission income to get
                    a home mortgage. If you don&apos;t have a lender yet, contact us today, and we&apos;ll walk
                    you through it. You may just qualify for more than you think.
                  </p>
                </section>

                <section id="were-here-to-help">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>We&apos;re Here To Help!</strong>
                  </h2>
                  <p className="mb-3">
                    Contact Us Today at{" "}
                    <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                      602-535-2171
                    </a>
                  </p>
                  <p className="mb-3">
                    Or reach us using our{" "}
                    <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                      contact form
                    </Link>
                  </p>
                  <p>
                    Or Complete our{" "}
                    <Link href="#Get-in-Touch" className="text-[#3fb364] font-semibold hover:underline">
                      Inquiry Form
                    </Link>
                  </p>
                </section>

                <blockquote className="border-l-4 border-[#3fb364] pl-5 my-8 italic">
                  <p className="text-[15px]">
                    Learn how you can use part of your commission income to qualify for a mortgage and expand
                    your financing options. Enhance your financial strategy by exploring how to{" "}
                    <Link
                      href="/can-i-relocate-and-get-a-mortgage-while-working-remotely-out-of-state/"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      relocate and secure a mortgage while working remotely
                    </Link>
                    , understanding how a{" "}
                    <Link
                      href="/how-a-rapid-rescore-can-help-to-get-qualified-for-a-mortgage/"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      rapid rescore can improve your loan qualification
                    </Link>
                    , considering the benefits of a{" "}
                    <Link
                      href="/dscr-loan-the-best-alternative-to-hard-money/"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      DSCR loan as a hard money alternative
                    </Link>
                    , and getting expert advice on{" "}
                    <Link
                      href="/how-to-count-commissions-and-bonuses-and-tips/"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      counting commissions and bonuses effectively
                    </Link>
                    .
                  </p>
                </blockquote>

                <section id="frequently-asked-questions">
                  <FaqAccordion
                    title="Frequently Asked Questions"
                    items={articleFaqs.map((faq) => ({
                      q: faq.question,
                      a: faq.answer,
                    }))}
                  />
                </section>



                <section id="transcript-of-the-mortgage-brothers-podcast">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-6 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>Transcript of the Mortgage Brothers Podcast</strong>
                  </h2>

                  <div className="space-y-8 text-[15.5px]">
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>
                          How to Count Commissions, Bonuses, and Tips for a Mortgage
                        </strong>
                      </h3>
                      <TranscriptMicLine className="mb-3">
                        (00:02) Welcome to the <strong>Mortgage Brothers Podcast!</strong> I&apos;m{" "}
                        <strong>Eddie Knoell</strong>, and I&apos;m <strong>Tom Knoell</strong>.
                      </TranscriptMicLine>
                      <p className="mb-3">
                        Today, we&apos;re covering a big topic for many borrowers:
                      </p>
                      <TranscriptList className="mb-3">
                        <TranscriptMoneyItem>
                          <strong>
                            How do lenders count commissions, bonuses, and tips as income?
                          </strong>
                        </TranscriptMoneyItem>
                      </TranscriptList>
                      <p className="mb-3">
                        If you earn <strong>commissions, bonuses, or tips</strong>, you might be wondering:
                      </p>
                      <TranscriptList className="mb-3">
                        <TranscriptPointItem>
                          <strong>Can I use this income to qualify for a mortgage?</strong>
                        </TranscriptPointItem>
                        <TranscriptPointItem>
                          <strong>How long do I need to show this income?</strong>
                        </TranscriptPointItem>
                        <TranscriptPointItem>
                          <strong>What are the rules for different loan types?</strong>
                        </TranscriptPointItem>
                      </TranscriptList>
                      <p>Let&apos;s break it all down!</p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Commissions &amp; Bonuses: How Do They Count?</strong>
                      </h3>
                      <TranscriptPinLine className="mb-3">
                        (00:41){" "}
                        <strong>
                          Lenders need to see a history of commissions &amp; bonuses before counting them as
                          income.
                        </strong>
                      </TranscriptPinLine>
                      <TranscriptList className="mb-3">
                        <TranscriptEmojiItem emoji="🏦">
                          <strong>Loan Type Rules:</strong>
                        </TranscriptEmojiItem>
                        <TranscriptCheckItem>
                          <strong>Conventional Loans (Fannie Mae/Freddie Mac)</strong> –{" "}
                          <strong>12 months</strong> of history required.
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          <strong>VA Loans</strong> – <strong>24 months</strong> of history required (same
                          employer, no gaps).
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          <strong>FHA Loans</strong> – <strong>12 months</strong> of history required (must be
                          from <strong>one employer</strong>).
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <TranscriptList className="mb-3">
                        <TranscriptEmojiItem emoji="🚀">
                          <strong>Multiple Employers?</strong>
                        </TranscriptEmojiItem>
                        <TranscriptPointItem>
                          <strong>Conventional loans allow you to combine income</strong> from multiple
                          employers (as long as it&apos;s in the same field).
                        </TranscriptPointItem>
                        <TranscriptPointItem>
                          <strong>VA &amp; FHA loans require the same employer</strong> for the required period.
                        </TranscriptPointItem>
                      </TranscriptList>
                      <TranscriptPinLine className="mb-3">
                        <strong>Example:</strong> If you earned{" "}
                        <strong>commission selling water filters for 6 months</strong>, then switched jobs and{" "}
                        <strong>earned commission selling home appliances for 6 months</strong>, that{" "}
                        <strong>can count for conventional loans</strong> (since it&apos;s a similar industry).
                      </TranscriptPinLine>
                      <TranscriptAlertLine>
                        <strong>
                          BUT, if you switched from sales to cutting hair, it wouldn&apos;t count!
                        </strong>
                      </TranscriptAlertLine>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Tips: How Are They Counted?</strong>
                      </h3>
                      <p className="mb-3">
                        (03:09){" "}
                        <strong>Tip income works differently than commissions and bonuses.</strong>
                      </p>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          <strong>Conventional &amp; VA Loans</strong> – <strong>2 years</strong> of reported
                          tip income required.
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          <strong>FHA Loans</strong> – Only <strong>1 year</strong> of reported tip income
                          required.
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <TranscriptLightbulbLine className="mb-3">
                        <strong>Think of tip income like self-employment income.</strong>
                      </TranscriptLightbulbLine>
                      <TranscriptList className="mb-3">
                        <TranscriptPointItem>
                          Lenders want <strong>consistent, documented earnings</strong> over time.
                        </TranscriptPointItem>
                        <TranscriptPointItem>
                          This is why <strong>VA &amp; Conventional loans require 2 years</strong>, while{" "}
                          <strong>FHA only needs 1 year</strong>.
                        </TranscriptPointItem>
                      </TranscriptList>
                      <TranscriptPinLine className="mb-3">
                        <strong>How are tips verified?</strong>
                      </TranscriptPinLine>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          If tips are <strong>paid on a credit card</strong>, they are{" "}
                          <strong>reported on your pay stubs and W-2s</strong>.
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          If you receive <strong>cash tips</strong>, they only count{" "}
                          <strong>if you report them on your tax returns</strong>.
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <TranscriptAlertLine className="mb-3">
                        <strong>Not reporting cash tips?</strong> If your tax returns{" "}
                        <strong>don&apos;t show tip income</strong>, lenders{" "}
                        <strong>won&apos;t count it</strong>, even if you&apos;ve been earning tips for years.
                      </TranscriptAlertLine>
                      <TranscriptLightbulbLine>
                        <strong>Pro Tip:</strong> If you earn tips, make sure they are{" "}
                        <strong>reported on your pay stubs or tax returns</strong> so they can count toward your
                        mortgage qualification!
                      </TranscriptLightbulbLine>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Common Myths About Counting Income</strong>
                      </h3>
                      <TranscriptList className="mb-3">
                        <TranscriptBanItem>
                          <strong>
                            &ldquo;I&apos;ve been getting tips/bonuses for 9 months—can I use that
                            income?&rdquo;
                          </strong>
                        </TranscriptBanItem>
                      </TranscriptList>
                      <p className="mb-3">
                        <strong>No.</strong> You need at least{" "}
                        <strong>12 months for conventional/FHA loans</strong> and{" "}
                        <strong>24 months for VA loans</strong>.
                      </p>
                      <TranscriptList className="mb-3">
                        <TranscriptBanItem>
                          <strong>
                            &ldquo;I switched jobs recently—can I still count my commissions?&rdquo;
                          </strong>
                        </TranscriptBanItem>
                      </TranscriptList>
                      <p className="mb-3">
                        <strong>Maybe.</strong> If you&apos;re in the <strong>same industry</strong> and
                        it&apos;s a <strong>conventional loan</strong>, you can combine income from multiple
                        employers. <strong>For VA &amp; FHA loans, you need to be with one employer.</strong>
                      </p>
                      <TranscriptList className="mb-3">
                        <TranscriptBanItem>
                          <strong>
                            &ldquo;I get cash tips but don&apos;t report them—will lenders still count
                            them?&rdquo;
                          </strong>
                        </TranscriptBanItem>
                      </TranscriptList>
                      <p>
                        <strong>No.</strong> Only <strong>documented</strong> tip income (on pay stubs or tax
                        returns) counts.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>The Bottom Line</strong>
                      </h3>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          <strong>
                            Commissions &amp; bonuses require at least 12 months (conventional/FHA) or 24
                            months (VA).
                          </strong>
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          <strong>
                            Tip income requires 2 years (Conventional &amp; VA) or 1 year (FHA).
                          </strong>
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          <strong>
                            Always report cash tips on your tax returns if you want them to count toward your
                            mortgage.
                          </strong>
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <TranscriptList className="mb-3">
                        <TranscriptMoneyItem>
                          <strong>Need help figuring out your income for a mortgage?</strong>
                        </TranscriptMoneyItem>
                        <TranscriptEmojiItem emoji="📩">
                          <Link
                            href="/contact-us/"
                            className="text-[#3fb364] font-semibold hover:underline"
                          >
                            <strong>Contact us for a free consultation!</strong>
                          </Link>
                        </TranscriptEmojiItem>
                      </TranscriptList>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Special Podcast Offer 🎁</strong>
                      </h3>
                      <TranscriptList className="mb-3">
                        <TranscriptEmojiItem emoji="🎉">
                          (06:04) <strong>Want a $50 Amazon Gift Card?</strong>
                        </TranscriptEmojiItem>
                        <TranscriptEmojiItem emoji="🦓">
                          Use the <strong>secret code word: &ldquo;Zebra&rdquo;</strong> when you call or
                          request a mortgage quote!
                        </TranscriptEmojiItem>
                        <TranscriptEmojiItem emoji="📌">
                          <strong>You must be a real person getting a real mortgage quote.</strong>
                        </TranscriptEmojiItem>
                        <TranscriptEmojiItem emoji="🚀">
                          <strong>Get your quote today &amp; claim your gift card!</strong>
                        </TranscriptEmojiItem>
                      </TranscriptList>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Got Questions? Contact Us!</strong>
                      </h3>
                      <TranscriptList>
                        <TranscriptEmojiItem emoji="🎯">
                          <strong>Need a mortgage?</strong> Ask us for a <strong>free quote</strong>—we&apos;ll
                          guide you through every step!
                        </TranscriptEmojiItem>
                        <TranscriptEmojiItem emoji="🏡">
                          <strong>Thanks for tuning in—see you in the next episode!</strong>
                        </TranscriptEmojiItem>
                      </TranscriptList>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/dscr-loan-the-best-alternative-to-hard-money/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/how-to-count-commissions-and-bonuses-and-tips/"
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