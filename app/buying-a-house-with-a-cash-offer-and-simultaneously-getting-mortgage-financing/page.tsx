import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";
import YoutubeLiteEmbed from '@/app/component/YoutubeLiteEmbed';

export const metadata: Metadata = getSeoMetadata("/buying-a-house-with-a-cash-offer-and-simultaneously-getting-mortgage-financing/");

const relatedLinks = [
  {
    label: "Delayed Financing Cash-Out",
    href: "/delayed-financing-how-to-get-cashout-without-waiting-6-months-seasoning/",
  },
  {
    label: "Mortgage Recast Example",
    href: "/what-is-an-example-of-a-mortgage-recast/",
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
    label: "Seller Concessions to Buyers",
    href: "/seller-concessions-to-buyers-how-much/",
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
      name: "Buying a House with Cash Offer and Simultaneously Getting Mortgage Financing",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can. One way to do this is by using a family member's cash as a private loan to make the initial cash offer. Once you close on the home, you can refinance it into a traditional mortgage under your name.",
      },
    },
    {
      "@type": "Question",
      name: "How does using a family member's cash work in a home purchase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A family member can act as a private lender by providing the funds to buy the home. A note and deed of trust are created to formalize the loan. After closing, you can refinance the property to pay back the family member and transfer the loan into your name.",
      },
    },
    {
      "@type": "Question",
      name: "What steps are involved in setting up a private loan for a cash offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start by discussing the plan with your mortgage lender to ensure they support the approach. Then, work with an escrow officer to draft a note and deed of trust that outlines the loan amount, interest rate, and repayment terms. Make sure the note uses standard market terms.",
      },
    },
    {
      "@type": "Question",
      name: "What if part of the funds is a gift from a relative?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If part of the funds is a gift, you will need to decide what amount you want to refinance. For example, if you buy a home for $200,000 and your relative gifts 20% as a down payment, you would only refinance $160,000. The remaining 20% would be considered a gift and not part of the loan amount.",
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

export default function CashOfferMortgageFinancingPage() {
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
          title={<>Buying a House with a Cash Offer and Simultaneously getting Mortgage Financing</>}
          excerpt="How to make a competitive cash offer using family or private funds, then refinance into a traditional mortgage after closing."
          category="Mortgage Payments & Strategies"
          categoryHref="/mortgage-payments-strategies/"
          dateLabel="Feb 4, 2025"
          readTime="9 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-6">
                Sometimes a borrower feels that the only way they can win a house is to pay cash for it.
                They&apos;ve been beaten before. They&apos;d found their perfect home, but they just
                couldn&apos;t compete. Most times you&apos;ll find that dream house again. We find
                there&apos;s a time that when people do, they don&apos;t want to mess around&mdash;they want
                to pay in cash.
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                They have access to it, but it&apos;s not theirs, rather it&apos;s, say, their parents or a
                family member&apos;s. They know they need to do something with a loan, but they&apos;re not
                sure how to go about it. So, they reach out to us and we get the question of how to buy a
                house with a cash offer while simultaneously getting mortgage financing.
              </p>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <YoutubeLiteEmbed
                  videoId="5EuUXP20CTQ"
                  title="Buying a House with a Cash Offer and Simultaneously getting Mortgage Financing"
                />
              </div>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Want the Power of a Cash Offer &amp; a Mortgage?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Make a strong cash offer while securing mortgage financing behind the scenes. Get expert
                  guidance on how to do it right.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="btn-primary"
                  >
                    Get a Free Mortgage Strategy Session &rarr;
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="how-to-buy-a-house-with-cash-offer-while-getting-mortgage-financing">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    How to buy a house with cash offer while getting mortgage financing
                  </h2>
                  <p>
                    We had this situation come up recently. The borrower that called us had been working with
                    another mortgage broker and the borrower put out because she was wanting to use her
                    mom&apos;s cash to put an offer on a home, but then she wanted to turn around and buy it
                    from her mother. The other broker was basically saying pick one&mdash;they didn&apos;t
                    want to deal with two sets of purchase closing costs. We told her they don&apos;t have to.
                    We told her that what we can do is use her mother&apos;s cash, making her mother the
                    lender, and then the day after she closes, we turn around and do a refinance on the loan.
                  </p>
                </section>

                <section id="how-we-solve-the-problem">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    How we solve the problem
                  </h2>
                  <p>
                    Now, whoever it is that&apos;s going to be buying the house with cash, we want to view
                    them as a private lender. They&apos;re going to put a note and deed of trust on the
                    property, and you&apos;re going to use their funds to buy the house. This will effectively
                    have the same strength as using cash because you will be going through a private lender
                    without layers of underwriting guidelines or appraisal requirements to worry about.
                  </p>
                </section>

                <section id="so-how-do-you-do-this">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    So how do you do this?
                  </h2>
                  <p>
                    So, start by talking to your lender, make sure you have them on board. Next, if you were
                    talking to us, we&apos;d say talk to the escrow company and make sure that the escrow
                    officer can help you draft a note. They will put a deed of trust. This step is really key.
                    It&apos;s important you have a note with the lender saying how much money they are going
                    to owe you, how much the mortgage is going to be, the interest rate, and term. You want to
                    make sure, as well, that the note looks normal and that it has standard market terms. You
                    wouldn&apos;t want 0% interest or anything that would make it seem out of the normal.
                  </p>
                </section>

                <section id="any-complicated-parts">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Any complicated parts?
                  </h2>
                  <p>
                    The most complicated scenario of this is if gifting becomes involved. A lot of times not
                    only does a parent or a relative want to help with paying cash, but they also want to give
                    a 10% or 20% down payment. So, one of the questions we&apos;ll be asking you is what amount
                    you want to refinance out. Say, you pay $200,000 for the house and your relative wants to
                    give you a 20% down payment, in that case, we&apos;d only be refinancing the amount of
                    $160,000 and that would be the amount of the loan. The other component would be considered
                    a gift.
                  </p>
                </section>

                <p>
                  If you have any questions about this or if you have any questions you&apos;d like us to
                  answer on our podcast, you can submit your questions using our{" "}
                    <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                      contact form
                    </Link>{" "}
                    or give us a call at{" "}
                    <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                      (602) 535-2171
                    </a>
                    . Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work
                    with you and help you through the whole process.
                  </p>

                  <p className="mb-5 text-center text-[20px]">&bull;&bull;&bull;</p>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with
                    you and help you through the whole process.
                  </p>
                </div>

                <p className="text-[15px]">
                  Discover how you can combine a cash offer with mortgage financing when buying a house. To
                  expand your understanding, check out our guide on{" "}
                  <Link
                    href="/delayed-financing-how-to-get-cashout-without-waiting-6-months-seasoning/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    delayed financing
                  </Link>
                  , see an example of a{" "}
                  <Link
                    href="/what-is-an-example-of-a-mortgage-recast/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    mortgage recast
                  </Link>
                  , explore the benefits of an{" "}
                  <Link
                    href="/assumable-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    assumable mortgage
                  </Link>
                  , and learn more about the{" "}
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
                        Buying a House with a Cash Offer and Simultaneously Getting Mortgage Financing
                      </h3>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Introduction [00:05]</h3>
                      <p className="mb-3">
                        Welcome to the Mortgage Brothers Podcast! I&apos;m Eddie Knoell, and I&apos;m Tom
                        Knoell. Today, we&apos;re answering a question that many homebuyers don&apos;t even
                        know how to ask:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          How can you buy a home with a{" "}
                          <a
                            href="https://en.wikipedia.org/wiki/Cash_offer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#3fb364] font-semibold hover:underline"
                          >
                            cash offer
                          </a>{" "}
                          if you don&apos;t have cash?
                        </li>
                        <li>Can you still get a mortgage after using cash to buy a home?</li>
                      </ul>
                      <p>
                        This happens more often than you think&mdash;especially in competitive real estate
                        markets where buyers struggle to win bids. Let&apos;s break it down!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Why Do Buyers Use Cash Offers? [00:40]
                      </h3>
                      <p className="mb-3">Many buyers find themselves in this situation:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>They&apos;ve been outbid before and realize cash offers win.</li>
                        <li>
                          They have a relative (e.g., parent) with cash who&apos;s willing to help.
                        </li>
                        <li>
                          They need a loan, but using cash first helps secure the deal faster.
                        </li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">Common Scenario:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          You find your dream home but realize sellers are only considering cash offers.
                        </li>
                        <li>
                          A family member (e.g., parent) has cash and offers to help.
                        </li>
                        <li>But you still need a mortgage after purchasing the home.</li>
                      </ul>
                      <p>
                        The solution? Buying with cash and then getting mortgage financing after closing!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Case Study: How a Borrower Used Cash and Then Refinanced [01:14]
                      </h3>
                      <p className="mb-3">
                        One of our clients was working with another broker who told her she had to buy the
                        home from her mother after closing&mdash;resulting in two sets of closing costs.
                      </p>
                      <p className="mb-3">We told her that&apos;s not necessary. Instead, we showed her how to:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Use her mother&apos;s cash to buy the home as a cash buyer.</li>
                        <li>Structure it as a private loan between her and her mother.</li>
                        <li>
                          Immediately refinance after closing to pay her mother back&mdash;without extra
                          purchase costs!
                        </li>
                      </ul>
                      <p>
                        This is called rate and term refinancing&mdash;it lets you pay back your private
                        lender right after buying the home.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        How Does This Process Work? [02:23]
                      </h3>
                      <p className="mb-3">
                        Instead of buying the home from your relative, your relative becomes the lender. This
                        means:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>You use their cash to buy the home.</li>
                        <li>They act as a private lender instead of a co-buyer.</li>
                        <li>You refinance right after closing to repay them.</li>
                      </ul>
                      <p>
                        <strong>Key Advantage:</strong> Since your relative isn&apos;t underwriting the loan
                        like a bank, the deal still counts as a cash offer, making it highly attractive to
                        sellers!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Step-by-Step: How to Buy a Home with a Cash Offer &amp; Then Get a Mortgage [04:43]
                      </h3>
                      <p className="mb-2 font-semibold text-[#052316]">
                        1. Find a Lender Who Understands This Process
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Not all lenders will structure this correctly.</li>
                        <li>Work with a mortgage team that has done this before.</li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">
                        2. Set Up a Private Loan with a Deed of Trust
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Your family member (or private lender) provides cash.</li>
                        <li>The title company creates a loan agreement (deed of trust).</li>
                        <li>
                          You sign a note stating you&apos;ll pay them back (just like a normal loan).
                        </li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">
                        3. Buy the Home with Cash &amp; Close the Deal
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>The seller sees a cash offer with no contingencies.</li>
                        <li>You win the home without loan-related delays.</li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">
                        4. Apply for a Mortgage (Rate &amp; Term Refinance)
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          Once you own the home, you immediately refinance to pay off the private lender
                          (family member) and convert the private loan into a traditional mortgage.
                        </li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">
                        5. Repay Your Private Lender with Mortgage Funds
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>The refinance loan pays back your family member.</li>
                        <li>You now have a regular mortgage like any other homebuyer.</li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">Important:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          The private loan must have market terms (interest rate, repayment terms).
                        </li>
                        <li>
                          The lender must charge some interest&mdash;it cannot be a gift.
                        </li>
                        <li>You may need to make one monthly payment before refinancing.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Common Questions About This Strategy
                      </h3>
                      <p className="mb-3">
                        <strong>Q: Can any relative do this, or does it have to be a parent?</strong>
                        <br />
                        A: Any relative (or even a private investor) can do this. The key is that they act as
                        a lender, not a co-buyer.
                      </p>
                      <p className="mb-3">
                        <strong>Q: What if my relative also wants to give me a gift?</strong>
                        <br />
                        A: That&apos;s fine! If the house costs $200,000 and they want to gift 20% down, your
                        loan would only need to refinance $160,000 instead of the full amount.
                      </p>
                      <p>
                        <strong>Q: Does this count as a regular refinance?</strong>
                        <br />
                        A: Yes! This is called a rate and term refinance, which has better interest rates than
                        cash-out refinances and allows you to refinance up to 95% loan-to-value (LTV).
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Why This Works: Cash Strength + Mortgage Flexibility [08:11]
                      </h3>
                      <p className="mb-3">This strategy is a win-win because:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          Sellers prefer cash offers (higher chances of winning the deal).
                        </li>
                        <li>
                          You get a mortgage right after closing (instead of waiting months).
                        </li>
                        <li>
                          You avoid extra purchase costs&mdash;you only pay for one transaction, not two.
                        </li>
                      </ul>
                      <p>
                        It&apos;s like &ldquo;having your cake and eating it too&rdquo;&mdash;you get the
                        benefits of a cash offer and the affordability of a mortgage!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Final Thoughts: Should You Use This Strategy? [09:20]
                      </h3>
                      <p className="mb-3">This works best if:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>You&apos;re competing in a tough housing market.</li>
                        <li>
                          You have a family member or private lender willing to help.
                        </li>
                        <li>
                          You need a mortgage but also want to win with a cash offer.
                        </li>
                      </ul>
                      <p className="mb-3">
                        Make sure you work with a lender who understands how to structure this properly!
                      </p>
                      <p>
                        If you&apos;re thinking about using this strategy, reach out to the Mortgage Brothers
                        Team for a free consultation. If you found this video helpful, like, subscribe, and
                        hit the notification button for more mortgage insights. Thanks for tuning in!
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/what-is-an-example-of-a-mortgage-recast/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/seller-concessions-to-buyers-how-much/"
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-[14.5px] text-[#08271B]">
              <a href="tel:+16025352171" className="font-semibold hover:text-[#3fb364] transition-colors">
                +1 602-535-2171
              </a>
              <span className="hidden sm:inline text-[#c8c8b8]">|</span>
              <span className="text-center">1599 East Orangewood Ave Suite 200, Phoenix, AZ 85020</span>
            </div>
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