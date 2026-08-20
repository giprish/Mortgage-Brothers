import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";
import YoutubeLiteEmbed from '@/app/component/YoutubeLiteEmbed';

export const metadata: Metadata = getSeoMetadata("/grossing-up-your-income-what-does-that-mean/");

const relatedLinks = [
  {
    label: "Car Loan & Mortgage Approval",
    href: "/how-does-my-car-loan-payment-affect-my-mortgage/",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's an example of grossing up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For example, if you make $1000 a month from foster care income, since it is non-taxable, it can usually be grossed up. For a conventional loan, the gross-up is 25% ($1250) and for an FHA loan, it's 15% ($1150).",
      },
    },
    {
      "@type": "Question",
      name: "What other incomes are typically allowed to be grossed up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Other non-taxable incomes that can usually be grossed up include child support payments, VA benefits, workers' compensation, supplemental social security, adoption income, and foster care income. Documentation is required to show continuation for at least three years.",
      },
    },
    {
      "@type": "Question",
      name: "What income may be partially grossed up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Incomes that may be partially grossed up include social security income, retirement income, pension income, annuity income, IRA distributions, housing allowance, and long-term disability income. The non-taxable portion can be grossed up by 25% for conventional loans and 15% for FHA loans.",
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

export default function GrossingUpIncomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>Grossing Up Your Income… what does that mean?</>}
          excerpt="Learn how lenders gross up non-taxable income like foster care, child support, and Social Security to boost qualifying income."
          category="Specialty Loans"
          categoryHref="/specialty-loans/"
          dateLabel="Feb 4, 2025"
          readTime="9 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <section id="what-is-grossing-up">
                <h2
                  className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  What is grossing up?
                </h2>
                <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                  You can think of grossing up as extra credit. Now, this isn&apos;t extra money. It doesn&apos;t
                  go into your bank account, but it is an additional amount we can put on paper when it comes to
                  applying for a loan.
                </p>
              </section>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <YoutubeLiteEmbed
                  videoId="j2vkHe-2dhg"
                  title="Grossing Up Your Income… what does that mean?"
                />
              </div>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Need to Boost Your Qualifying Income?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Grossing up non-taxable income can help you qualify for a mortgage. Find out if this strategy
                  can work for you.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="btn-primary"
                  >
                    Get a Free Mortgage Consultation
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="whats-an-example-of-grossing-up">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What&apos;s an example of grossing up?
                  </h2>
                  <p>
                    Say you make $1000 a month from foster care income. Foster care income, because it is
                    non-taxable income, is almost always able to be grossed up. If you&apos;re applying for a
                    convention loan, you&apos;d be able to gross up by 25% and if you&apos;re applying for an
                    FHA loan, you&apos;d be able to gross that up by 15%. So, on the loan application, we&apos;d
                    list that income as $1250 or $1150 respectively.
                  </p>
                </section>

                <section id="what-other-incomes-are-typically-allowed-to-be-grossed-up">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What other incomes are typically allowed to be grossed up?
                  </h2>
                  <p className="mb-5">
                    You are able to gross up incomes that are not taxed. The reason you are able to get
                    &ldquo;extra credit&rdquo; on these nontaxable incomes is that there is less burden on
                    them.
                  </p>
                  <p className="mb-3 font-semibold text-[#052316]">Other gross up able incomes include:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>Child Support Payments</li>
                    <li>VA Benefits</li>
                    <li>Workers&apos; Compensation</li>
                    <li>Supplemental Social Security</li>
                    <li>Adoption Income</li>
                    <li>Foster Care Income</li>
                  </ul>
                  <p className="mb-5">
                    You should be aware though, that these incomes do not show up on your tax return, so
                    you&apos;re going to have to help your lender out by getting the required documentation from
                    these sources and you&apos;re also going to have to prove that you are going to continue to
                    receive this income for the next three years.
                  </p>
                  <p>
                    There&apos;s also income that is sometimes or partially able to be grossed up.
                  </p>
                </section>

                <section id="what-income-may-be-grossed-up">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What income may be grossed up?
                  </h2>
                  <p className="mb-5">
                    For some incomes, a portion of them is not taxable. These non-taxable portions can be
                    grossed up. This applies to the following:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>Social Security Income</li>
                    <li>Retirement Income</li>
                    <li>Pension income</li>
                    <li>Annuity Income</li>
                    <li>IRA Distribution Income</li>
                    <li>Housing Allowance Income</li>
                    <li>Long Term Disability Income</li>
                  </ul>
                  <p className="mb-5">
                    Each of these shows up on tax returns, and whatever portion of it is not taxable we can
                    take that amount and gross it up 25% for conventional loans and 15% for FHA.
                  </p>
                  <p>
                    If you have any questions about this or if you have any questions you&apos;d like us to
                    answer on our podcast, you can email your questions to{" "}
                    <a
                      href="mailto:team@azmortgagebrothers.com"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      team@azmortgagebrothers.com
                    </a>{" "}
                    or give us a call at{" "}
                    <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                      (602) 535-2171
                    </a>
                    . Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work
                    with you and help you through the whole process.
                  </p>
                </section>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with
                    you and help you through the whole process.
                  </p>
                </div>

                <p className="text-[15px]">
                  Thanks for listening and reading the Mortgage Brothers Show. Let us know if you have any
                  questions you&apos;d like us to answer on this podcast. You can email your questions to
                  Tom@AZMortgageBrothers.com or Eddie@AZMortgageBrothers.com.
                </p>

                <p className="text-[15px]">
                  Wondering what it means to gross up your income for mortgage qualification? For a complete
                  picture, explore our insights on{" "}
                  <Link
                    href="/what-if-my-spouse-dies-and-im-not-on-the-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    spouse-related mortgage issues
                  </Link>
                  , learn how{" "}
                  <Link
                    href="/how-does-my-car-loan-payment-affect-my-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    car loan payments can impact your mortgage
                  </Link>
                  , review the possibility of getting a{" "}
                  <Link
                    href="/can-i-get-a-3rd-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    third mortgage
                  </Link>
                  , and understand{" "}
                  <Link
                    href="/how-fast-is-too-fast-to-close-a-mortgage-loan-to-purchase-a-house/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    closing pace requirements
                  </Link>
                  .
                </p>

                <p className="text-[#5a6b52] text-[13px] leading-relaxed">
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
                        Grossing Up Your Income: What Does It Mean &amp; How Can It Help You?
                      </h3>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Introduction [00:02]</h3>
                      <p className="mb-3">
                        Welcome to the Mortgage Brothers Podcast! I&apos;m Eddie Knoell, and I&apos;m Tom
                        Knoell. In this episode, we&apos;re answering a question many borrowers don&apos;t know
                        they should ask:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>What is grossing up income?</li>
                        <li>How can it help with your mortgage approval?</li>
                        <li>Which types of income qualify for grossing up?</li>
                      </ul>
                      <p>
                        If you&apos;ve heard the term &ldquo;grossing up&rdquo; while applying for a mortgage,
                        you&apos;re in the right place!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        What Does &ldquo;Grossing Up&rdquo; Mean? [00:39]
                      </h3>
                      <p className="mb-3">
                        If you receive certain types of non-taxable income, lenders may allow you to increase
                        that income on paper to improve your loan eligibility.
                      </p>
                      <p className="mb-3">Think of it as getting extra credit for your income.</p>
                      <p>
                        When we gross up your income, we adjust your earnings to reflect what they would be if
                        they were taxed&mdash;since non-taxable income allows you to keep more money in your
                        pocket.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Example of Grossing Up Income [01:43]
                      </h3>
                      <p className="mb-3">
                        Let&apos;s say you receive $1,000 per month from foster care income:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Conventional Loan → Gross up by 25% → Adjusted income: $1,250</li>
                        <li>FHA Loan → Gross up by 15% → Adjusted income: $1,150</li>
                        <li>VA Loans → Grossing up allowed (typically 25%)</li>
                      </ul>
                      <p>
                        <strong>Bottom line:</strong> The lender considers your non-taxable income as being
                        higher than what you actually receive, giving you a better debt-to-income (DTI) ratio
                        and potentially increasing your borrowing power.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Why Are Some Incomes Eligible for Grossing Up? [03:34]
                      </h3>
                      <p className="mb-3">
                        Lenders allow non-taxable income to be grossed up because you don&apos;t pay taxes on
                        it&mdash;meaning you effectively have more disposable income than someone earning a
                        taxable equivalent.
                      </p>
                      <p className="mb-2 font-semibold text-[#052316]">
                        Think of your income as ice cream flavors:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          <strong>Net Income (Vanilla):</strong> The amount deposited in your bank account
                          after taxes.
                        </li>
                        <li>
                          <strong>Gross Income (Chocolate):</strong> Your salary before taxes.
                        </li>
                        <li>
                          <strong>Grossed-Up Income (Strawberry):</strong> The bonus credit given for
                          non-taxable income.
                        </li>
                      </ul>
                      <p>
                        When applying for a mortgage, lenders usually use your gross income (before taxes).
                        However, for non-taxable income, they gross it up to compensate for the lack of taxes.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Types of Income That Can Be Grossed Up [05:19]
                      </h3>
                      <p className="mb-2 font-semibold text-[#052316]">
                        Always Eligible for Grossing Up:
                      </p>
                      <p className="mb-2">
                        These types of income are never taxed, so they can always be grossed up:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Child Support Payments</li>
                        <li>VA Disability Benefits</li>
                        <li>Workers&apos; Compensation</li>
                        <li>Supplemental Social Security (SSI)</li>
                        <li>Adoption Income</li>
                        <li>Foster Care Income</li>
                        <li>Military Housing Allowance</li>
                      </ul>
                      <p className="mb-4">
                        <strong>Note:</strong> These incomes do not appear on tax returns, so borrowers must
                        provide separate documentation proving they receive them.
                      </p>
                      <p className="mb-2 font-semibold text-[#052316]">
                        Sometimes Eligible for Grossing Up:
                      </p>
                      <p className="mb-2">
                        These income sources may be taxed partially or fully. Lenders will check how much of it
                        is non-taxable and apply the gross-up only to that portion:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Social Security Income</li>
                        <li>Retirement Income</li>
                        <li>Pension Income</li>
                        <li>Annuities</li>
                        <li>IRA Distributions</li>
                        <li>Long-Term Disability Income</li>
                      </ul>
                      <p>
                        <strong>Example:</strong> If one-third of your Social Security income is non-taxable,
                        only that portion is eligible for grossing up.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        How Much Can Your Income Be Grossed Up? [02:53]
                      </h3>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Conventional Loans: 25% gross up</li>
                        <li>FHA Loans: 15% gross up</li>
                        <li>VA Loans: Grossing up allowed (typically 25%)</li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">Example Calculation</p>
                      <p className="mb-3">
                        If your pension income is $2,000 per month and half of it is non-taxable, then:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Non-Taxable Portion: $1,000</li>
                        <li>Grossed-Up Amount (Conventional Loan, 25%): $1,250</li>
                        <li>New Total Income Used for Mortgage Approval: $2,250</li>
                      </ul>
                      <p>
                        <strong>Result:</strong> This extra $250 can improve your debt-to-income ratio and help
                        you qualify for a better loan.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Why Grossing Up Income Matters for Borrowers [07:34]
                      </h3>
                      <p className="mb-3">Many borrowers don&apos;t realize:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>A higher income means qualifying for a bigger home loan.</li>
                        <li>Lower debt-to-income ratio (DTI) improves mortgage approval chances.</li>
                        <li>
                          It can help meet lender income requirements without needing a co-signer.
                        </li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">Example:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Borrower A: Earns $3,000/month (fully taxable)</li>
                        <li>
                          Borrower B: Earns $3,000/month (but $1,000 is non-taxable Social Security)
                        </li>
                      </ul>
                      <p>
                        With grossing up, Borrower B&apos;s income is adjusted to $3,250 (or more), making them
                        eligible for a higher mortgage amount!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        How to Use Grossing Up to Your Advantage [08:02]
                      </h3>
                      <p className="mb-3">
                        If you receive Social Security, child support, VA benefits, or other non-taxable
                        income, here&apos;s what to do:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Tell your lender upfront if any of your income is non-taxable.</li>
                        <li>
                          Provide documentation (award letters, benefit statements, court orders).
                        </li>
                        <li>
                          Check your tax returns to see which portions of income are taxed vs. non-taxed.
                        </li>
                        <li>Ask your lender how grossing up can improve your mortgage approval.</li>
                      </ul>
                      <p>
                        <strong>Remember:</strong> The lender only applies grossing up to the non-taxable
                        portion, so understanding how much of your income qualifies is key.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Final Takeaways: Should You Ask Your Lender About Grossing Up? [08:36]
                      </h3>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          If you have non-taxable income, grossing up can help you qualify for a bigger loan!
                        </li>
                        <li>It reduces your debt-to-income ratio, making mortgage approval easier.</li>
                        <li>
                          It&apos;s a strategy many borrowers miss, but it can significantly impact loan
                          eligibility.
                        </li>
                      </ul>
                      <p>
                        Even if you&apos;re not sure whether your income qualifies, ask your lender!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Need Help? Contact Us Today! [09:02]
                      </h3>
                      <p className="mb-3">
                        If you&apos;re applying for a mortgage and want to know how grossing up your income
                        could help, we&apos;re here to assist! Contact us through our contact form or call us
                        for a personalized mortgage review.
                      </p>
                      <p>
                        <strong>Final Thought:</strong> Grossing up income is a simple but powerful tool that
                        can help you secure the home loan you need. Make sure you&apos;re using it to your
                        advantage!
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/how-does-my-car-loan-payment-affect-my-mortgage/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/can-i-get-a-3rd-mortgage/"
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