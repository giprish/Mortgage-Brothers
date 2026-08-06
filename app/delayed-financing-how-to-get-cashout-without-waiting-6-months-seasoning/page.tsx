import React from "react";
import Link from "next/link";
import FaqAccordion from "../component/FaqAccordion";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

const relatedLinks = [
  {
    label: "Mortgage Recast Example",
    href: "/what-is-an-example-of-a-mortgage-recast/",
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
      name: "Delayed Financing - how to get cashout without waiting 6 months seasoning",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delayed Financing is a mortgage strategy that allows a buyer to purchase a property with cash (or a HELOC/secured loan) and then refinance shortly after closing, without waiting the standard 6-month seasoning requirement for a cash-out refinance.",
      },
    },
    {
      "@type": "Question",
      name: "Why would someone use Delayed Financing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main benefits of Delayed Financing include avoiding the 6-month seasoning requirement for cash-out refinancing, saving time by closing quickly with cash, and having a stronger negotiating position by offering a cash purchase.",
      },
    },
    {
      "@type": "Question",
      name: "What are the requirements for Delayed Financing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Requirements include following standard cash-out LTV and interest rate guidelines, obtaining a new appraisal, and ensuring that the funds are replenished to the original source of payment.",
      },
    },
    {
      "@type": "Question",
      name: "Can Delayed Financing be used when parents buy a home for their child?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, an alternate use of Delayed Financing is when parents purchase a home with cash for their child, and then the child refinances to pay the parents back. This requires a standard loan agreement, a new appraisal, and the refinance would follow typical rate and LTV rules.",
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

export default function DelayedFinancingPage() {
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
          title={<>Delayed Financing – how to get cashout without waiting 6 months seasoning</>}
          excerpt="Learn how delayed financing lets you buy with cash and cash out soon after closing—without waiting the standard 6-month seasoning period."
          category="Mortgage Payments & Strategies"
          categoryHref="/mortgage-payments-strategies/"
          dateLabel="Feb 4, 2025"
          readTime="10 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                Delayed Financing (Defined Term) has more to do with avoiding normal Seasoning Requirements
                (6 months) when doing a Cash-Out Refi than really anything else. It could be called
                &ldquo;No Seasoning Cash-Out Refinancing.&rdquo; Basically someone delays getting financing
                by first paying cash (or can be from a HELOC, or secured loan) and THEN decides to put
                financing on the property after COE but doesn&apos;t want to wait the standard 6 months
                seasoning!
              </p>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <iframe
                  src="https://www.youtube.com/embed/JZGQGVLTYKI"
                  title="Delayed Financing – how to get cashout without waiting 6 months seasoning"
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
                  Need Cash from Your Home Fast?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Delayed financing lets you access cash without the 6-month waiting period. See if you
                  qualify and start the process today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                  >
                    Get a Free Cash-Out Consultation &rarr;
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="2-scenarios-could-happen">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    2 scenarios could happen
                  </h2>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <strong>Not realizing it Ahead-of-Time:</strong> Use your own cash to buy and then
                      you decide to replenish cash and don&apos;t want to wait the standard 6 months
                      seasoning requirement for CashOut.
                    </li>
                    <li>
                      <strong>Planning Ahead-of-Time:</strong> same concept above.
                    </li>
                  </ul>
                </section>

                <section id="why-would-someone-ever-want-to-do-delayed-financing-what-is-the-benefit">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Why would someone ever want to do Delayed Financing (what is the benefit)?
                  </h2>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Avoid Seasoning Requirement for Cash-Out Refi</li>
                    <li>Want quick COE and save time by paying cash</li>
                    <li>Better negotiating position by offering to pay cash</li>
                  </ul>
                </section>

                <section id="requirements">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Requirements
                  </h2>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Follow standard Cash-Out LTV &amp; Cash-Out Interest Rates</li>
                    <li>New Appraisal Required</li>
                    <li>Money replenishes where money came from</li>
                  </ul>
                </section>

                <section id="example-for-delayed-financing">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Example for Delayed Financing
                  </h2>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Bought Home For: $200,000</li>
                    <li>CCs/PPs: $5,000</li>
                    <li>Max Loan: $205,000</li>
                    <li>
                      New Appraised Value = $230,000 x 80% LTV (for Primary) = $184,000 Max Loan
                    </li>
                    <li>Like having put an original 8% down-payment</li>
                  </ul>
                </section>

                <section id="alternate-way-to-do-delayed-financing">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Alternate way to do delayed financing
                  </h2>
                  <p className="mb-5">
                    Example – Parent buying a home for child with cash and then child does R/T refinance to
                    cashout parent. Requirements:
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      Parent would have to have a basic standard loan with child (deed of trust etc&hellip;
                      title company can really help) and then child would do normal R/T Refinance to pay
                      Parent off
                    </li>
                    <li>R/T Refinancing LTV and Interest Rate % would apply</li>
                    <li>New Appraisal would be required</li>
                  </ul>
                </section>

                <section id="as-always">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    As always&hellip;
                  </h2>
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
                  Learn how to secure cash out without the typical six-month seasoning. For more insights,
                  explore an example of a{" "}
                  <Link
                    href="/what-is-an-example-of-a-mortgage-recast/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    mortgage recast
                  </Link>
                  , discover the benefits of an{" "}
                  <Link
                    href="/assumable-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    assumable mortgage
                  </Link>
                  , read about combining a{" "}
                  <Link
                    href="/buying-a-house-with-a-cash-offer-and-simultaneously-getting-mortgage-financing/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    cash offer with financing
                  </Link>
                  , and review details on the{" "}
                  <Link
                    href="/fha-flip-rule-waiver-expired-you-need-wait-90-days-to-write-a-contract/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    FHA flip rule waiver
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
                        Delayed Financing: How to Get Cash Out Without Waiting 6 Months
                      </h3>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Introduction [00:02]</h3>
                      <p className="mb-3">
                        Welcome to the Mortgage Brothers Podcast! I&apos;m Eddie Knoell, and I&apos;m Tom
                        Knoell. In this episode, we&apos;re talking about Delayed Financing&mdash;a mortgage
                        strategy that allows you to cash out on a property purchase without waiting 6 months.
                      </p>
                      <p>
                        If you&apos;ve recently purchased a home with cash and want to access that equity
                        sooner than the usual 6-month seasoning period, this episode is for you.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        What is Delayed Financing? [01:20]
                      </h3>
                      <p className="mb-3">
                        <a
                          href="https://www.bankrate.com/real-estate/delayed-financing/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#3fb364] font-semibold hover:underline"
                        >
                          Delayed financing
                        </a>{" "}
                        is a specific mortgage rule that allows homeowners who purchased a home with cash to
                        immediately take out a mortgage and pull equity from the home&mdash;without waiting
                        six months.
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          Normally, if you buy a home in cash, lenders require a six-month seasoning period
                          before allowing a cash-out refinance.
                        </li>
                        <li>
                          Delayed financing bypasses this requirement if you meet specific guidelines.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Why Would Someone Use Delayed Financing? [03:53]
                      </h3>
                      <p className="mb-3">
                        There are several reasons why a buyer might purchase a home in cash and then apply for
                        delayed financing:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          <strong>Competitive Advantage</strong> – Sellers prefer cash buyers because they can
                          close faster, so buyers use cash to secure a better deal.
                        </li>
                        <li>
                          <strong>Faster Closing</strong> – Cash purchases bypass traditional loan approvals,
                          allowing for quicker closings.
                        </li>
                        <li>
                          <strong>Unlocking Equity</strong> – Buyers may want to free up their capital for
                          other investments after securing the property.
                        </li>
                      </ul>
                      <p>
                        For example, we recently worked with a borrower who bought a home with cash to get a
                        $10,000 discount from the seller. However, after purchasing the home, they wanted to
                        access their cash again. That&apos;s where delayed financing came in.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Eligibility for Delayed Financing [05:00]
                      </h3>
                      <p className="mb-3">
                        To qualify for delayed financing, you must prove that the money used to purchase the
                        home was your own funds and properly sourced.
                      </p>
                      <p className="mb-2 font-semibold text-[#052316]">Accepted Sources:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Personal bank accounts</li>
                        <li>Investment accounts</li>
                        <li>Home equity lines of credit (HELOCs)</li>
                        <li>Retirement accounts (401k loans, IRAs, etc.)</li>
                        <li>Business accounts (if you&apos;re the majority owner)</li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">NOT Accepted:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Gifts from family members</li>
                        <li>Personal loans from individuals</li>
                        <li>Inheritance funds that cannot be sourced</li>
                        <li>Exchanging assets (e.g., selling a car to finance the purchase)</li>
                      </ul>
                      <p>
                        <strong>Key Rule:</strong> You can only refinance and withdraw the amount that was
                        originally your own money.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Loan Limits &amp; Terms [07:21]
                      </h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>You can cash out up to 80% of the home&apos;s appraised value.</li>
                        <li>
                          The loan is priced as a cash-out refinance, meaning the interest rates follow
                          standard cash-out pricing.
                        </li>
                        <li>If you want to withdraw more than 80%, you must wait 6 months.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Alternative: Rate-and-Term Refinance for Family Transactions [08:38]
                      </h3>
                      <p className="mb-3">
                        There&apos;s another version of delayed financing that works differently&mdash;often
                        used when a family member buys the home in cash for you.
                      </p>
                      <p className="mb-2 font-semibold text-[#052316]">Example:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          A borrower was losing offers to cash buyers, so they asked their father to buy the
                          home for them in cash.
                        </li>
                        <li>
                          After securing the property, they wanted to refinance their father out.
                        </li>
                        <li>
                          Instead of a cash-out refinance, they used a rate-and-term refinance to pay back
                          their father&apos;s loan.
                        </li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">How It Works:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          The person buying the home in cash (e.g., dad) must have a recorded lien (Deed of
                          Trust) on the property.
                        </li>
                        <li>
                          The loan must be structured like a real loan (e.g., must include interest and
                          payments).
                        </li>
                        <li>
                          The borrower then refinances the &ldquo;loan&rdquo; into their name as a
                          rate-and-term refinance, which allows them to finance up to 95% of the home&apos;s
                          value.
                        </li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">Why This Is Better?</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          Higher Loan-to-Value (LTV) – You can borrow up to 95% instead of just 80%.
                        </li>
                        <li>
                          Better Interest Rates – Rate-and-term refinances typically have lower interest rates
                          than cash-out refinances.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Title &amp; Documentation Requirements [11:39]
                      </h3>
                      <p className="mb-3">
                        If you&apos;re using this alternative financing method, title companies play a key
                        role:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          The title company records the lien (Deed of Trust) for the person funding the
                          purchase.
                        </li>
                        <li>
                          There must be a loan agreement between the buyer and the lender (e.g., the father).
                        </li>
                        <li>
                          When refinancing, the loan is treated as a rate-and-term refinance, not a cash-out
                          refinance.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Summary: Two Types of Delayed Financing [12:09]
                      </h3>
                      <p className="mb-2 font-semibold text-[#052316]">
                        1. Traditional Delayed Financing (No-Seasoning Cash-Out Refinance)
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>
                          Used when a buyer purchases a home with their own cash and wants to refinance
                          quickly.
                        </li>
                        <li>Allows up to 80% cash-out of the appraised value.</li>
                        <li>Must prove the cash source.</li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">
                        2. Alternative Delayed Financing (Rate-and-Term Refinance)
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          Used when a family member or investor buys the home for you in cash.
                        </li>
                        <li>Requires a Deed of Trust to structure the loan.</li>
                        <li>Allows refinancing up to 95% LTV with better interest rates.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Final Thoughts [12:40]</h3>
                      <p className="mb-3">
                        Delayed financing is a great option for buyers who purchase homes with cash but need
                        to unlock their equity quickly, want to avoid the six-month waiting period, or need a
                        competitive edge in the home-buying process.
                      </p>
                      <p>
                        If you have any questions about delayed financing or refinancing strategies, contact
                        the Mortgage Brothers Team today! If you found this video helpful, like, subscribe,
                        and hit the notification button for more mortgage insights. Thanks for tuning in!
                      </p>
                    </div>
                  </div>
                </section>

                <section id="faqs">
                  <FaqAccordion
                    title="Frequently Asked Questions"
                    items={[
                      {
                        q: "Delayed Financing - how to get cashout without waiting 6 months seasoning",
                        a: <>Delayed Financing is a mortgage strategy that allows a buyer to purchase a property with cash (or a HELOC/secured loan) and then refinance shortly after closing, without waiting the standard 6-month seasoning requirement for a cash-out refinance.</>
                      },
                      {
                        q: "Why would someone use Delayed Financing?",
                        a: <>The main benefits of Delayed Financing include avoiding the 6-month seasoning requirement for cash-out refinancing, saving time by closing quickly with cash, and having a stronger negotiating position by offering a cash purchase.</>
                      },
                      {
                        q: "What are the requirements for Delayed Financing?",
                        a: <>Requirements include following standard cash-out LTV and interest rate guidelines, obtaining a new appraisal, and ensuring that the funds are replenished to the original source of payment.</>
                      },
                      {
                        q: "Can Delayed Financing be used when parents buy a home for their child?",
                        a: <>Yes, an alternate use of Delayed Financing is when parents purchase a home with cash for their child, and then the child refinances to pay the parents back. This requires a standard loan agreement, a new appraisal, and the refinance would follow typical rate and LTV rules.</>
                      }
                    ]}
                  />
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/fha-flip-rule-waiver-expired-you-need-wait-90-days-to-write-a-contract/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/what-is-an-example-of-a-mortgage-recast/"
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