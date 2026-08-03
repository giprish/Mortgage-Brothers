"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

const relatedLinks = [
  {
    label: "Car Loan & Mortgage Approval",
    href: "/how-does-my-car-loan-payment-affect-my-mortgage/",
  },
  {
    label: "Grossing Up Your Income",
    href: "/grossing-up-your-income-what-does-that-mean/",
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
    label: "Arizona Second Mortgages",
    href: "/arizona-second-mortgages/",
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
      name: "Can I Get a 3rd Mortgage",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, mortgages have lien positions such as first, second, and so on. Each mortgage is considered a standalone loan, and even if you borrow from the same lender again, it is treated as a brand-new loan in a new position.",
      },
    },
    {
      "@type": "Question",
      name: "How many mortgages can I have on my home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most cases, you can only have two mortgages — a first and a second. It is highly unlikely that a bank will approve a third mortgage. The second mortgage is often from a different lender than the first.",
      },
    },
    {
      "@type": "Question",
      name: "Why does the position of a mortgage matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The position of a mortgage determines the order of repayment if foreclosure occurs. The first-position lender is paid first from the sale of the home, and the second mortgage is paid only if there are remaining funds. During the 2008 financial crisis, many second mortgages were wiped out because foreclosure sales didn't generate enough to cover even the first lien.",
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

export default function CanIGetA3rdMortgagePage() {
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
          title={<>Can I Get a 3rd Mortgage?</>}
          excerpt="Understand lien positions, why third mortgages are rarely available, and how to access more equity by refinancing instead."
          category="Specialty Loans"
          categoryHref="/specialty-loans/"
          dateLabel="Feb 4, 2025"
          readTime="9 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                We get asked this question all the time, but it&apos;s not always in these exact words.
                Sometimes it&apos;s: How many mortgages can I get on my home? or How many can you just stack?
                Oftentimes, it&apos;s people simply wondering if they can get another line of credit.
                They&apos;re thinking of it that way rather than as in terms of positions.
              </p>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <iframe
                  src="https://www.youtube.com/embed/3oalGvZTfe0"
                  title="Can I Get a 3rd Mortgage?"
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
                  Need a Third Mortgage? Here&apos;s What to Know
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  A third mortgage can be an option for accessing equity, but not everyone qualifies. Get
                  expert advice on your best financing options.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                  >
                    Get a Free Mortgage Consultation &rarr;
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
                <section id="mortgages-have-positions">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Mortgages have positions?
                  </h2>
                  <p className="mb-5">
                    Now, what&apos;s important to understand is that every mortgage has a position. They have
                    a first and second, and anything beyond that would continue in the same order. Technically,
                    these are all lien positions and that&apos;s what those numbers are standing for.
                  </p>
                  <p>
                    You can think of every lender basically as a standalone entity or a standalone loan. When
                    you have a first loan on your home and you have a mortgage, that&apos;s a standalone
                    lender. So, if you ever need additional money, you&apos;d be going to a totally different
                    lender. And even if it&apos;s the same lender, it&apos;s going to have to be a brand-new
                    loan.
                  </p>
                </section>

                <section id="how-many-times-can-i-do-this">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    How many times can I do this?
                  </h2>
                  <p className="mb-5">
                    That&apos;s the question you came here for. In most cases, the answer is two, max.
                    It&apos;s unlikely you&apos;ll find any bank willing to give you a third position loan or a
                    third mortgage on your home. Even though one bank can have two different positions, if
                    there are two, often the second one will be from a different bank than the first.
                  </p>
                  <p className="mb-5">
                    When people get a conventional loan or an FHA or VA, more often than not those are all
                    first position liens and if you want to access more money, you&apos;ll need to get a home
                    equity line of credit or a fixed-rate second mortgage.
                  </p>
                  <p>So, once you have a first and second position lien on your home, that&apos;s really it.</p>
                </section>

                <section id="but-what-if-i-want-access-to-more-equity">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    But what if I want access to more equity?
                  </h2>
                  <p>
                    If you already had a first and second mortgage on your home and you want more equity out of
                    your house, we would end up redoing either your first or your second mortgage. You
                    wouldn&apos;t go out and get a third. It all depends on whether or not you have enough
                    equity in your home. Some banks want you to have up to 20% equity in your home when going
                    for a second mortgage. But if you do, if you have the equity, we can create a new mortgage.
                  </p>
                </section>

                <section id="how-does-what-position-your-loan-is-in-matter">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    How does what position your loan is in matter?
                  </h2>
                  <p className="mb-5">
                    This part is actually pretty simple. So, when a foreclosure occurs the courts will order
                    that your home is sold and the lien holders are paid off in the order of the lien position.
                    The lender who&apos;s in the first position gets their money first from the sale of your
                    home then whatever&apos;s left over gets paid off to the second.
                  </p>
                  <p>
                    During the big financial crisis in 2008, we saw a lot of second mortgages completely
                    annihilated. In many cases, there wasn&apos;t even enough money from the foreclosure sales
                    to pay off the first lien.
                  </p>
                </section>

                <section id="in-summary">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    In Summary
                  </h2>
                  <p className="mb-5">
                    The short answer is that there are no real residential third mortgages available out
                    there, at least at any decent rate. And if there was one available, it&apos;d be so
                    expensive you&apos;d never want to do it.
                  </p>
                  <p className="mb-5">
                    So, your options are basically redoing your first or redoing your second. And the only
                    thing you have to keep an eye on is just making sure that you&apos;re within the loan-to
                    value caps. And as long as you&apos;re under those loan-to value caps, you can redo your
                    first and second as many times as you want throughout the life of your home. You just have
                    to have the equity.
                  </p>
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
                  Thinking about taking out a third mortgage? Enhance your knowledge by reading about{" "}
                  <Link
                    href="/what-if-my-spouse-dies-and-im-not-on-the-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    spouse-related concerns
                  </Link>
                  , see how{" "}
                  <Link
                    href="/how-does-my-car-loan-payment-affect-my-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    car loan payments affect your mortgage
                  </Link>
                  , understand the concept of{" "}
                  <Link
                    href="/grossing-up-your-income-what-does-that-mean/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    grossing-up income
                  </Link>
                  , and learn about{" "}
                  <Link
                    href="/how-fast-is-too-fast-to-close-a-mortgage-loan-to-purchase-a-house/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    optimal mortgage closing speeds
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
                        Can You Get a Third Mortgage? What You Need to Know
                      </h3>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Introduction [00:02]</h3>
                      <p className="mb-3">
                        Welcome to the Mortgage Brothers Podcast! I&apos;m Eddie Knoell, and I&apos;m Tom
                        Knoell. Today, we&apos;re answering a question that many homeowners ask:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Can I get a third mortgage?</li>
                        <li>How many mortgages can I stack on my home?</li>
                        <li>What happens if I need more equity after getting a second mortgage?</li>
                      </ul>
                      <p>Let&apos;s break it all down.</p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        How Many Mortgages Can You Have? [00:46]
                      </h3>
                      <p className="mb-3">
                        Most borrowers don&apos;t realize that each mortgage is assigned a position on the
                        property.
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          <strong>First Mortgage:</strong> Your primary home loan (conventional, FHA, VA,
                          etc.).
                        </li>
                        <li>
                          <strong>Second Mortgage:</strong> A home equity line of credit (HELOC) or fixed-rate
                          second mortgage.
                        </li>
                        <li>
                          <strong>Third Mortgage?</strong> Nope! Lenders don&apos;t typically offer
                          third-position residential mortgages.
                        </li>
                      </ul>
                      <p>
                        <strong>Important:</strong> You can have multiple mortgages, but they must be in
                        different lien positions (1st, 2nd, etc.). However, banks won&apos;t go into third
                        position for residential mortgages.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Understanding Mortgage Lien Positions [01:19]
                      </h3>
                      <p className="mb-3">
                        Every mortgage loan has a lien position on the property. This determines who gets paid
                        first in case of foreclosure.
                      </p>
                      <p className="mb-2 font-semibold text-[#052316]">Example:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>1st Mortgage: $250,000 (conventional loan)</li>
                        <li>2nd Mortgage: $50,000 (HELOC)</li>
                        <li>3rd Mortgage? Not possible (no lender offers third-position residential loans).</li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">Why does lien position matter?</p>
                      <p>
                        If you default and the home is sold, the first mortgage lender gets paid first, then
                        the second lender, and if anything is left, it would go to the third lender (which
                        rarely happens).
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Why Aren&apos;t Third Mortgages Available? [03:41]
                      </h3>
                      <p className="mb-3">Banks don&apos;t offer third-position mortgages because:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          <strong>High risk</strong> – Third lenders are the last to get paid in foreclosure.
                        </li>
                        <li>
                          <strong>No demand</strong> – Most borrowers refinance instead of getting a third
                          loan.
                        </li>
                        <li>
                          <strong>Complicated lien structure</strong> – Having three mortgages makes property
                          sales, refinancing, and foreclosure messy.
                        </li>
                      </ul>
                      <p>
                        <strong>The Simple Rule:</strong> Lenders offer first and second mortgages only.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Alternatives If You Need More Equity [05:31]
                      </h3>
                      <p className="mb-3">
                        If you already have a first and second mortgage but need more funds, here&apos;s what
                        you can do:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          <strong>Refinance Your First Mortgage</strong> – Get a new loan that includes the
                          balance of your first and second mortgages, plus extra cash if needed.
                        </li>
                        <li>
                          <strong>Refinance Your Second Mortgage</strong> – If your second loan has a high
                          interest rate, refinance it to a better one.
                        </li>
                        <li>
                          <strong>Increase Your HELOC Limit</strong> – Some lenders may allow you to increase
                          your home equity line of credit (if you have enough equity).
                        </li>
                        <li>
                          <strong>Take a Personal Loan</strong> – While not secured by your home, this can
                          provide additional funds (though at higher interest rates).
                        </li>
                      </ul>
                      <p>
                        <strong>Remember:</strong> You can always combine loans, but you can&apos;t add a third
                        mortgage.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Why Mortgage Position Matters [06:04]
                      </h3>
                      <p className="mb-3">
                        Your lien position determines who gets paid first in foreclosure:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>First Mortgage → Always gets paid first.</li>
                        <li>
                          Second Mortgage (HELOC or fixed-rate second loan) → Gets paid after the first
                          mortgage.
                        </li>
                        <li>Third Mortgage? Not an option for residential loans.</li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">What Happens in Foreclosure?</p>
                      <p className="mb-3">If a home is sold due to foreclosure:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>The first mortgage gets paid.</li>
                        <li>The second mortgage gets paid if there&apos;s enough equity.</li>
                        <li>
                          A third mortgage (if it existed) would likely get nothing&mdash;which is why lenders
                          don&apos;t offer them.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        What About SBA Loans or Contractor Liens? [04:18]
                      </h3>
                      <p className="mb-3">
                        While third-position residential mortgages aren&apos;t available, you can have other
                        types of liens on your home:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          <strong>SBA Loans</strong> – If you take out a business loan, the lender may place a
                          lien on your home.
                        </li>
                        <li>
                          <strong>Contractor Liens</strong> – If you don&apos;t pay for renovations, a
                          contractor can file a mechanic&apos;s lien against your property.
                        </li>
                      </ul>
                      <p>
                        <strong>Key Difference:</strong> These liens aren&apos;t residential mortgages&mdash;they
                        are simply claims against your property for unpaid debts.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        How Much Can You Borrow Against Your Home? [08:23]
                      </h3>
                      <p className="mb-3">
                        Lenders limit how much you can borrow based on your home&apos;s value:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          <strong>80% Loan-to-Value (LTV)</strong> – Most banks require you to keep at least
                          20% equity in your home.
                        </li>
                        <li>
                          <strong>90% LTV (Rare)</strong> – Some second mortgages allow up to 90% LTV, but with
                          higher interest rates.
                        </li>
                        <li>
                          <strong>100% LTV (Not possible)</strong> – Banks won&apos;t let you borrow the entire
                          value of your home.
                        </li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">Example:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Home Value: $500,000</li>
                        <li>80% LTV Limit: $400,000 (max total mortgage amount)</li>
                        <li>First Mortgage: $300,000</li>
                        <li>Second Mortgage: $50,000</li>
                        <li>
                          Third Mortgage? Not possible&mdash;your total loans can&apos;t exceed the lender&apos;s
                          LTV limit.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Final Answer: Can You Get a Third Mortgage? [07:49]
                      </h3>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>No. There are no third-position residential mortgages.</li>
                        <li>
                          Your options: Refinance your first or second mortgage, or take a personal loan.
                        </li>
                        <li>
                          If you need more equity, talk to your lender about refinancing or increasing your
                          HELOC.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Need Help? Contact Us Today! [10:28]
                      </h3>
                      <p className="mb-3">
                        If you&apos;re wondering how to access more home equity, we&apos;re here to help!
                        Contact us through our contact form or call us for a personalized mortgage review.
                      </p>
                      <p>
                        <strong>Final Thought:</strong> If you need more equity, explore refinancing
                        options&mdash;but don&apos;t expect to find a third mortgage!
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/grossing-up-your-income-what-does-that-mean/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/how-fast-is-too-fast-to-close-a-mortgage-loan-to-purchase-a-house/"
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