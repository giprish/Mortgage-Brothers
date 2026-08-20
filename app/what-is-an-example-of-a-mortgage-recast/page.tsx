import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";
import YoutubeLiteEmbed from '@/app/component/YoutubeLiteEmbed';

export const metadata: Metadata = getSeoMetadata("/what-is-an-example-of-a-mortgage-recast/");

const relatedLinks = [
  {
    label: "Delayed Financing Cash-Out",
    href: "/delayed-financing-how-to-get-cashout-without-waiting-6-months-seasoning/",
  },
  {
    label: "Cash Offer + Mortgage Financing",
    href: "/buying-a-house-with-a-cash-offer-and-simultaneously-getting-mortgage-financing/",
  },
  {
    label: "Assumable Mortgage",
    href: "/assumable-mortgage/",
  },
  {
    label: "FHA Flip Rule Waiver",
    href: "/fha-flip-rule-waiver-expired-you-need-wait-90-days-to-write-a-contract/",
  },
  {
    label: "Understanding Amortization",
    href: "/understanding-amortization-chart/",
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
      name: "What is a mortgage recast?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A mortgage recast is when you make a large payment toward the principal of your existing loan, and your lender recalculates your monthly payments based on the reduced balance. The loan term and interest rate remain the same, but your monthly payments go down. Most lenders require at least $10,000 as a principal reduction and charge a small administrative fee between $200 and $300.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if you just pay down your mortgage without recasting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you make a lump-sum payment toward your mortgage without doing a recast, your monthly payments stay the same, but your loan will be paid off sooner. This reduces the total interest you pay over time because you've shortened the repayment timeline.",
      },
    },
    {
      "@type": "Question",
      name: "When is it better to do a mortgage recast instead of just paying down your loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A mortgage recast is best suited for borrowers on a fixed budget or fixed income who need lower monthly payments. On the other hand, if your goal is to pay off the loan faster, simply applying extra funds directly toward the principal may be a better option.",
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

export default function MortgageRecastExamplePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>What is an Example of a Mortgage Recast?</>}
          excerpt="See a clear mortgage recast example, how lump-sum payments lower monthly payments, and when paying down principal without a recast is better."
          category="Mortgage Payments & Strategies"
          categoryHref="/mortgage-payments-strategies/"
          dateLabel="Feb 4, 2025"
          readTime="9 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-6">
                In this episode, we covered mortgage recasts. Normally, this question comes up when a
                borrower has newly come into a lump sum of money, be it from a recent inheritance, a bonus,
                or through selling a house, and are interested in a principal reduction.
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                There are two common ways of dealing with the new influx of cash.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                <li>Recasting your mortgage</li>
                <li>Paying down on the principal without a recast</li>
              </ul>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <YoutubeLiteEmbed
                  videoId="yVVDme-VdBs"
                  title="What is an Example of a Mortgage Recast?"
                />
              </div>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Considering a Mortgage Recast?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Recasting can lower your monthly payment after a large principal payment&mdash;without
                  refinancing or changing your rate. Get guidance on whether a recast fits your goals.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="btn-primary"
                  >
                    Get Personalized Mortgage Advice
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="what-is-a-mortgage-recast">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What is a mortgage recast?
                  </h2>
                  <p className="mb-5">
                    Unlike a traditional refinance, with a recast you are basically going into an existing
                    loan, opening it up, and redoing it without starting from scratch.
                  </p>
                  <p className="mb-5">
                    Let&apos;s say you just came into $100,000 and you started with a $300,000 mortgage. When
                    doing a recast, you would put this $100,000 down toward the principal. You&apos;d tell the
                    bank you&apos;d want to do a recast and they would reduce the balance from $300,000 to
                    $200,000. The time remaining on the loan would remain the same, but your monthly payment
                    would go down which, as a result, would decrease the amount of interest you owe over the
                    term of the loan.
                  </p>
                  <p className="mb-5">
                    It&apos;s important to note that with recasts neither your interest rate nor the number
                    of years left on the loan will change. It is the loan amount that changes in a recast, not
                    the loan itself. As well, you&apos;ll typically need to have a couple of months of
                    payments under your belt. As a rule of thumb, we recommend at least two. You also
                    can&apos;t just give the bank a $5,000 principal reduction and ask for a recast. They will
                    usually require a minimum of $10,000 and some banks will limit you to one recast a year,
                    and just a couple over the lifetime of the loan. You should also expect there to be a fee
                    between, usually, $200 and $300, though it varies from bank to bank.
                  </p>
                  <p className="mb-5">
                    But it should be noted that because this is not a refinance, there are no appraisals and
                    you don&apos;t have to go through an approval process. There&apos;s just going to be an
                    administrative fee.
                  </p>
                  <p>
                    If you&apos;re interested in a recast, be sure to check with your servicing bank on their
                    rules and whether or not they allow for recasts.
                  </p>
                </section>

                <section id="what-if-you-just-pay-your-mortgage">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What if you just pay your mortgage?
                  </h2>
                  <p>
                    Say you put the $100,000 down against the $300,000 but you don&apos;t recast. In this
                    case, the bank would apply this to your monthly balance. They would keep your payments the
                    same but the timeline of your mortgage payoff would be accelerated, and as a result, the
                    interest you will end up owing will decrease over time because you would have reduced the
                    number of payments that are left.
                  </p>
                </section>

                <section id="when-is-it-right-to-do-a-mortgage-recast-versus-just-paying-down-against-your-mortgage">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    When is it right to do a mortgage recast versus just paying down against your mortgage?
                  </h2>
                  <p>
                    A recast is more so for someone who&apos;s on a fixed budget, or fixed income, and they
                    strategically need to get within a certain dollar amount per month. Typically, people who
                    come to us with some extra money will usually decide to simply pay off their mortgage
                    earlier.
                  </p>
                </section>

                <section id="as-always">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    As always&hellip;
                  </h2>
                  <p>
                    Thanks for listening and reading the Mortgage Brothers Show. Let us know if you have any
                    questions you&apos;d like us to answer on this podcast. You can email your questions to
                    Tom@AZMortgageBrothers.com or Eddie@AZMortgageBrothers.com. Be sure to ask us for a free
                    quote on your next mortgage. We&apos;ll personally work with you and help you through the
                    whole process.
                  </p>
                </section>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with
                    you and help you through the whole process.
                  </p>
                </div>

                <p className="text-[15px]">
                  Dive into a clear example of a mortgage recast and see how it works. Additionally, learn
                  about{" "}
                  <Link
                    href="/delayed-financing-how-to-get-cashout-without-waiting-6-months-seasoning/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    delayed financing
                  </Link>
                  , explore the advantages of an{" "}
                  <Link
                    href="/assumable-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    assumable mortgage
                  </Link>
                  , discover options for{" "}
                  <Link
                    href="/buying-a-house-with-a-cash-offer-and-simultaneously-getting-mortgage-financing/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    cash offer financing
                  </Link>
                  , and check out the{" "}
                  <Link
                    href="/fha-flip-rule-waiver-expired-you-need-wait-90-days-to-write-a-contract/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    FHA flip rule waiver
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
                        What is a Mortgage Recast? A Clear Example
                      </h3>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Introduction [00:02]</h3>
                      <p className="mb-3">
                        Welcome to the Mortgage Brothers Podcast! I&apos;m Eddie Knoell, and I&apos;m Tom
                        Knoell. In this episode, we&apos;re diving into mortgage recasting&mdash;a topic many
                        homeowners ask about.
                      </p>
                      <p>
                        What exactly is a mortgage recast? How does it compare to a refinance? Who can benefit
                        from a recast? Let&apos;s break it down with a real-life example!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Mortgage Recast vs. Refinance: What&apos;s the Difference? [01:16]
                      </h3>
                      <p className="mb-3">
                        Homeowners looking to adjust their mortgage payments typically consider two main
                        options:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          <strong>Refinance</strong> – Completely replaces your current loan with a new one,
                          which may involve a different interest rate, new loan terms (e.g., switching from a
                          30-year to a 15-year loan), or a brand-new loan amount.
                        </li>
                        <li>
                          <strong>Recast</strong> – Instead of replacing your loan, you apply a lump sum
                          payment toward your principal, and your lender recalculates your monthly payments
                          based on the new, lower balance. No new loan terms, no change in interest rate&mdash;
                          simply lowers your monthly payment.
                        </li>
                      </ul>
                      <p>
                        <strong>Key Takeaway:</strong> A recast keeps your existing loan but reduces your
                        monthly mortgage payment after you apply a lump sum toward the principal.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        When Does a Mortgage Recast Make Sense? [02:25]
                      </h3>
                      <p className="mb-3">A mortgage recast is best suited for homeowners who:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          Have a large sum of money coming in (e.g., inheritance, work bonus, home sale
                          proceeds).
                        </li>
                        <li>Want to reduce monthly payments without refinancing.</li>
                        <li>
                          Have a low interest rate on their current mortgage and don&apos;t want to lose it by
                          refinancing.
                        </li>
                        <li>Prefer to avoid the costs and paperwork of refinancing.</li>
                      </ul>
                      <p>
                        Example: A borrower receives a $100,000 inheritance and wants to lower their mortgage
                        payments. Now, let&apos;s compare two scenarios&mdash;one with a recast and one
                        without.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Scenario 1: Recasting the Mortgage [04:12]
                      </h3>
                      <p className="mb-2 font-semibold text-[#052316]">Loan Details (Before Recast):</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Original Loan: $300,000</li>
                        <li>Monthly Payment: $1,264</li>
                        <li>Remaining Term: 29 years</li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">
                        After Recasting (Applying $100,000 to Principal):
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>New Loan Balance: $200,000</li>
                        <li>New Monthly Payment: $861</li>
                        <li>Term remains the same (29 years)</li>
                        <li>Total Interest Saved: $55,000</li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">Benefits of a Recast:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Lower monthly payment while keeping the same loan term.</li>
                        <li>
                          No change in interest rate&mdash;ideal if you already have a low rate.
                        </li>
                        <li>Minimal fees ($200–$300 vs. thousands in refinance costs).</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Scenario 2: Paying Down Principal Without Recasting [06:00]
                      </h3>
                      <p className="mb-3">
                        What if the borrower just makes a lump sum payment but doesn&apos;t request a recast?
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Original Loan: $300,000</li>
                        <li>Lump Sum Payment: $100,000</li>
                        <li>New Loan Balance: $200,000</li>
                        <li>Monthly Payment: Remains at $1,264</li>
                        <li>Mortgage is paid off in 17 years (instead of 29 years).</li>
                        <li>Total Interest Saved: $95,000</li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">
                        Benefits of Paying Down Principal Without a Recast:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Pays off the mortgage years earlier.</li>
                        <li>Saves more in interest over the life of the loan.</li>
                      </ul>
                      <p>
                        <strong>Biggest Difference:</strong> A recast lowers your monthly payment but keeps
                        your term the same. Paying extra without a recast keeps your payments the same but
                        pays off the loan faster.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Who Should Choose a Mortgage Recast? [08:37]
                      </h3>
                      <p className="mb-3">A mortgage recast is best for homeowners who:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          Need lower monthly payments due to a fixed income or budget constraints.
                        </li>
                        <li>
                          Are selling a home and buying another one&mdash;wanting to apply the proceeds toward
                          their new mortgage.
                        </li>
                        <li>
                          Have a large sum of money but don&apos;t necessarily want to pay off their mortgage
                          early.
                        </li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">
                        Recast Example: Home Sale Proceeds
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Homeowner buys a new home before selling their old one.</li>
                        <li>
                          They take out a mortgage with a higher payment than they&apos;d like.
                        </li>
                        <li>
                          After selling the old home, they apply those proceeds toward the new mortgage and
                          recast to lower the payment.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        How to Request a Mortgage Recast [09:43]
                      </h3>
                      <p className="mb-3">To qualify for a mortgage recast, you&apos;ll need to:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Make at least two payments on your mortgage before applying.</li>
                        <li>Have a lump sum (usually at least $10,000) to put toward principal.</li>
                        <li>
                          Check with your lender&mdash;some only allow a limited number of recasts.
                        </li>
                        <li>Pay a small administrative fee (typically $200–$300).</li>
                      </ul>
                      <p className="mb-3">
                        <strong>Important:</strong> Not all lenders allow recasts. If this is part of your
                        plan, ask your lender before closing on your mortgage.
                      </p>
                      <p>
                        Government-backed loans (FHA, VA, USDA) do NOT allow recasts&mdash;only conventional
                        loans typically qualify.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Final Thoughts: Should You Recast or Just Pay Down Principal? [12:09]
                      </h3>
                      <p className="mb-2 font-semibold text-[#052316]">Choose a Mortgage Recast if:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>You need lower monthly payments.</li>
                        <li>
                          You don&apos;t want to refinance and lose your current interest rate.
                        </li>
                        <li>You plan to stay in your home long-term.</li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">
                        Choose to Pay Down Principal Without a Recast if:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>You want to pay off your mortgage faster.</li>
                        <li>You can afford the current monthly payments.</li>
                        <li>You want to maximize interest savings over time.</li>
                      </ul>
                      <p className="mb-3">
                        Both options have their advantages&mdash;it all depends on your financial goals.
                      </p>
                      <p>
                        If you&apos;re considering a mortgage recast or refinancing, reach out to the Mortgage
                        Brothers Team for a free consultation. If you found this video helpful, like,
                        subscribe, and hit the notification button for more mortgage insights. Thanks for
                        tuning in!
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/delayed-financing-how-to-get-cashout-without-waiting-6-months-seasoning/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/buying-a-house-with-a-cash-offer-and-simultaneously-getting-mortgage-financing/"
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