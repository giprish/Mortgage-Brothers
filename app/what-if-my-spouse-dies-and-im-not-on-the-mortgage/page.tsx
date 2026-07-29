"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

const commonQuestions = [
  "Will the bank let us make payments on this mortgage?",
  "Do we have to refinance?",
  "Do we have to sell the home?",
];

const communityPropertyStates = [
  "Arizona",
  "California",
  "Idaho",
  "Louisiana",
  "Nevada",
  "New Mexico",
  "Texas",
  "Washington",
  "Wisconsin",
];

const relatedLinks = [
  { label: "Navigating mortgage options during divorce", href: "/navigating-mortgage-options-during-divorce-a-complete-guide/" },
  { label: "Understanding amortization chart", href: "/understanding-amortization-chart/" },
  { label: "How to calculate PMI mortgage insurance", href: "/how-to-calculate-how-much-pmi-mortgage-insurance-will-be/" },
  { label: "Who qualifies for a reverse mortgage?", href: "/who-qualifies-for-a-reverse-mortgage-understanding-eligibility-requirements/" },
  { label: "When is a mortgage payment actually considered late?", href: "/when-is-a-mortgage-payment-actually-considered-late/" },
  { label: "What are closing costs on a home purchase?", href: "/what-are-closing-costs-on-a-home-purchase/" },
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
      name: "Will the bank let us make payments on this mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you are on the title, you can generally continue making mortgage payments even if you are not on the loan. The bank's primary concern is receiving payments on time, not forcing a sale or payoff from a surviving spouse.",
      },
    },
    {
      "@type": "Question",
      name: "Do we have to refinance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, refinancing is not required. You can stay on the current loan if you prefer, or refinance into your own name if you qualify and want better terms or sole ownership of the debt.",
      },
    },
    {
      "@type": "Question",
      name: "Do we have to sell the home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, you do not have to sell the home. As long as you continue making on-time payments and understand your rights regarding title and the mortgage, selling is one option among several—not a requirement.",
      },
    },
  ],
};

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function SpouseDiesNotOnMortgagePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />
      <div className="h-[72px] w-full shrink-0" aria-hidden />

      <main className="flex-grow relative z-0">
        {/* Featured hero image */}
        <ArticleHero
          title={<>What If My Spouse Dies and I&apos;m Not On The Mortgage?</>}
          excerpt="Learn what happens to a mortgage when a spouse dies if you are not on the loan, including title, St. Germain Act protections, community property, and refinance options."
          category="Spouse & Estate Considerations"
          categoryHref="/spouse-estate-considerations/"
          dateLabel="Dec 30, 2024"
          readTime="9 min read"
        />

        {/* Article + sidebar */}
        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="w-[90%] max-w-[1520px] mx-auto px-0 sm:px-2 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                In this post, we&apos;re going to touch upon unfortunate circumstances: death. The death of a
                loved one is incredibly hard to go through. We hope that we can, at the very least, make
                navigating these tragic circumstances a little bit easier. We&apos;re going to be discussing what
                to do if, when your spouse has died, you might be wondering what to do with the mortgage if
                you&apos;re not on the loan.
              </p>

              {/* Video */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <iframe
                  src="https://www.youtube.com/embed/xrLRwmxdc-I"
                  title="What If My Spouse Dies and I'm Not On The Mortgage?"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Mid CTA */}
              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Secure Your Home, Even in Uncertain Times
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Unsure about your options if your spouse isn&apos;t on the mortgage? Get expert advice tailored
                  to your unique situation and ensure your peace of mind. We&apos;re here to help you navigate
                  the process with clarity and confidence.
                </p>
                <Link
                  href="/contact-us/"
                  className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                >
                  Contact Us for Guidance
                </Link>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="lawyer-up">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Lawyer Up
                  </h2>
                  <p>
                    Now we&apos;re not real estate attorneys nor are we accounts, but we hope this can point you
                    in the right direction. These are practical opinions. These are the sort of answers
                    customers would get if they called us with these questions. We definitely suggest getting
                    in touch with an attorney when dealing with something like this.
                  </p>
                </section>

                <section id="common-questions">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Common Questions Regarding Mortgages When A Spouse Dies
                  </h2>
                  <p className="mb-4">Some common questions regarding mortgages when a spouse dies include:</p>
                  <ul className="list-disc pl-6 space-y-2 text-[15.5px]">
                    {commonQuestions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section id="are-you-on-the-title">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Are you on the title?
                  </h2>
                  <p>
                    If a spouse dies you&apos;ll want to know if you&apos;re on the title or not. There&apos;s a good
                    chance you&apos;re both on the title but you may not be on the loan. This is something
                    you&apos;ll want to sort out and accordingly discuss with your attorney.
                  </p>
                </section>

                <section id="st-germain-act">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Ask about the St. Germain Act of 1982
                  </h2>
                  <p>
                    Ask your attorney about the{" "}
                    <a
                      href="https://www.congress.gov/bill/97th-congress/house-bill/6267"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      St. Germain Act of 1982
                    </a>
                    . One of the critical provisions of the Act was the preemption of state laws that
                    restricted the enforcement of due-on-sale clauses in mortgage contracts. A due-on-sale
                    clause allows a lender to demand full repayment of a mortgage if the property is sold or
                    transferred. The Act made these clauses enforceable, but with significant exceptions for
                    transfers to relatives, spouse, or children, and for transfers into certain types of
                    trusts. Be sure to check with your lawyer.
                  </p>
                </section>

                <section id="community-property-state">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Are you in a community property state?
                  </h2>
                  <p className="mb-4">
                    Living in a community property state affects how property is handled if you&apos;re not on
                    the title. The nine community property states are:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[15.5px] mb-4">
                    {communityPropertyStates.map((state) => (
                      <li key={state}>{state}</li>
                    ))}
                  </ul>
                  <p>
                    In these states, property is classified as either community property or separate property.
                    This classification impacts how the property is managed and inherited. Whether you reside
                    in one of these states or not, it&apos;s essential to discuss your situation with an attorney
                    to understand your rights and obligations.
                  </p>
                </section>

                <section id="refinance-or-transfer">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Do we refinance? Do I put it into my name?
                  </h2>
                  <p>
                    You can if you want. You have rights if you&apos;re on the title. You could stay on the
                    current loan or you could qualify for a new mortgage. It&apos;s up to you. We suggest
                    speaking with an attorney about how to go about notifying a bank that a spouse who was on
                    the mortgage has passed.
                  </p>
                </section>

                <section id="planning-ahead">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Planning Ahead
                  </h2>
                  <p>
                    Sometimes when doing loans we discuss whether both spouses will be on a loan or not and
                    how things would be handled if a spouse should die. It&apos;s a morbid subject but it&apos;s one
                    you might want to discuss so make sure that the surviving spouse has rights to the home
                    and loan. Either way, we hope this helps and gives you a good jumping off point.
                  </p>
                  <p className="mt-5">
                    If you have any questions about this or anything else mortgage related don&apos;t hesitate to
                    give us a call at{" "}
                    <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                      (602) 535-2171
                    </a>
                    .
                  </p>
                </section>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with
                    you and help you through the whole process.
                  </p>
                </div>

                <p className="text-[#8a9a7a] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has
                  been prepared for informational purposes only. You should consult your own tax, legal, and
                  accounting advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154,
                  NMLS #210917 and 1618695. Equal housing lender.
                </p>

                {/* Transcript */}
                <section id="podcast-transcript" className="border-t border-[#e8e0d0]/70 pt-10">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-6 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Transcript of the Mortgage Brothers Podcast
                  </h2>

                  <p className="text-[15px] text-[#6a7a6a] mb-8 italic">
                    Eddie Knoell and Tom Knoell — Mortgage Brothers Podcast
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Overview of the Topic</h3>
                      <p className="mb-4">
                        Today, Eddie and Tom discuss a very difficult situation: the passing of a spouse. If
                        your spouse dies and you&apos;re not on the mortgage, what happens? What do you do with
                        the mortgage?
                      </p>
                      <p className="mb-3">This situation might apply to surviving spouses or even children handling a parent&apos;s affairs. Questions arise like:</p>
                      <ul className="list-disc pl-6 space-y-2 text-[15.5px]">
                        <li>Will the bank let you make payments?</li>
                        <li>Do you have to refinance?</li>
                        <li>Do you need to sell the home?</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Important Disclaimer</h3>
                      <p>
                        We&apos;re not attorneys or accountants, so this is not legal advice. However, we share
                        practical insights based on what we&apos;ve learned and heard from customers. Always consult
                        an attorney, especially about the Saint Germain Depository Act of 1982. This law
                        protects surviving spouses by preventing banks from enforcing the &ldquo;due-on-sale&rdquo;
                        clause when the spouse is on the property title.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Understanding the Due-On-Sale Clause</h3>
                      <p>
                        Normally, if ownership of a property changes, banks can enforce a &ldquo;due-on-sale&rdquo;
                        clause, requiring the mortgage to be paid off or refinanced. But in the case of a
                        surviving spouse, the Saint Germain Act prohibits this, provided the surviving spouse
                        is on the title.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">What If You&apos;re Not on the Title?</h3>
                      <p className="mb-4">If you&apos;re not on the title, things can be more complex. For example:</p>
                      <ul className="list-disc pl-6 space-y-2 text-[15.5px] mb-4">
                        <li>If the mortgage existed before marriage, you may not be added to the title.</li>
                        <li>In community property states (like California or Texas), laws might protect your rights, even if you&apos;re not on the title.</li>
                      </ul>
                      <p>If you&apos;re unsure, consult an attorney to clarify your rights.</p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Options for Surviving Spouses</h3>
                      <p className="mb-4">If you&apos;re on the title, you have several options:</p>
                      <ol className="list-decimal pl-6 space-y-3 text-[15.5px] mb-4">
                        <li>
                          <strong>Continue Making Payments:</strong> You can simply keep paying the mortgage
                          under your spouse&apos;s name.
                        </li>
                        <li>
                          <strong>Refinance:</strong> If you qualify, you can refinance to have the loan in
                          your name, possibly securing better terms.
                        </li>
                      </ol>
                      <p>
                        The key is that the bank&apos;s primary concern is getting their payments. They&apos;re
                        unlikely to force you to sell or pay off the loan outright.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Planning Ahead</h3>
                      <p>
                        Some borrowers worry about this scenario when they&apos;re setting up their loans. If one
                        spouse doesn&apos;t work but wants to ensure they have rights, they can be added to the
                        loan even if they don&apos;t contribute financially. It&apos;s important to feel comfortable
                        with your position, and we&apos;re here to answer any questions you have about loan setups.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Key Takeaways for Surviving Spouses</h3>
                      <p>
                        In most cases, as long as you continue making on-time payments, you shouldn&apos;t face
                        any issues. The bank wants payments, not ownership of the home. However, if you&apos;re
                        unsure, it&apos;s always best to consult an attorney. It&apos;s rare for banks to force a sale
                        or pay-off from a surviving spouse, but knowing your rights is crucial.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Final Thoughts</h3>
                      <p>
                        We hope this discussion was helpful. If you have questions or need guidance, feel
                        free to reach out through our{" "}
                        <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                          contact form
                        </Link>
                        .
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Contact Information</h3>
                      <p className="mb-2">
                        Phone:{" "}
                        <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                          (602) 535-2171
                        </a>
                      </p>
                      <p className="mb-2">NMLS: 1007154</p>
                      <p className="text-[14px] text-[#8a9a7a]">
                        Disclaimer: This material is for informational purposes only. Consult your tax,
                        legal, and accounting advisors before taking any action.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/understanding-amortization-chart/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/navigating-mortgage-options-during-divorce-a-complete-guide/"
                  className="text-[#8a9a7a] hover:text-[#3fb364] transition-colors"
                >
                  Next Post →
                </Link>
              </div>
            </article>

            {/* Sidebar */}
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

        {/* Tailored solutions */}
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

        {/* Get in touch */}
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
              <span className="text-center">
                1599 East Orangewood Ave Suite 200, Phoenix, AZ 85020
              </span>
            </div>
            <Link
              href="/#get-pre-approved"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all"
            >
              Get Your Rate Now
            </Link>
          </div>
        </section>

        {/* Explore solutions */}
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
