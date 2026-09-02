import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import JsonLd from "@/app/component/JsonLd";
import { buildArticleSchemas } from "@/lib/seo/structured-data";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";
import GetInTouch from "../component/GetInTouch";

export const metadata: Metadata = getSeoMetadata("/assumable-mortgage/");

const relatedLinks = [
  {
    label: "FHA Flip Rule Waiver",
    href: "/fha-flip-rule-waiver-expired-you-need-wait-90-days-to-write-a-contract/",
  },
  {
    label: "Delayed Financing",
    href: "/delayed-financing-how-to-get-cashout-without-waiting-6-months-seasoning/",
  },
  {
    label: "Mortgage Recast Example",
    href: "/what-is-an-example-of-a-mortgage-recast/",
  },
  {
    label: "Cash Offer Financing",
    href: "/buying-a-house-with-a-cash-offer-and-simultaneously-getting-mortgage-financing/",
  },
  {
    label: "FHA Home Loans",
    href: "/fha-home-loans-arizona/",
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
  {
    question: "What is an assumable mortgage?",
    answer:
      "An assumable mortgage is one where the lender includes a clause allowing a third party, typically the homebuyer, to take over the existing mortgage. If the mortgage is not assumable, the clause will clearly state so.",
  },
  {
    question: "What does an assumable clause look like?",
    answer:
      "A typical assumable clause may read: 'If all or any part of the property is sold or transferred without the lender's prior consent, the lender may require immediate payment in full of the loan.' This means the mortgage may be assumed if the lender is notified and consents to the transfer.",
  },
  {
    question: "Are FHA mortgages assumable?",
    answer:
      "Yes, one of the advantages of FHA mortgages is that they are assumable. This can be a strong selling point if you decide to sell your home in the future.",
  },
] as const;

const articleJsonLd = buildArticleSchemas({
  blog: {
    pathname: "/assumable-mortgage/",
    headline: "What Is An Assumable Mortgage?",
    description: "Learn what an assumable mortgage is, how the assumption clause works, and why FHA loans can be a selling-point advantage.",
    datePublished: "2025-02-04",
    articleSection: "Mortgage Payments & Strategies",
  },
  faqs: [...articleFaqs],
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Mortgage Payments & Strategies", path: "/mortgage-payments-strategies/" },
    { name: "What Is An Assumable Mortgage?", path: "/assumable-mortgage/" },
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

export default function AssumableMortgagePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <JsonLd data={articleJsonLd} />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>What Is An Assumable Mortgage?</>}
          excerpt="Learn what an assumable mortgage is, how the assumption clause works, and why FHA loans can be a selling-point advantage."
          category="Mortgage Payments & Strategies"
          categoryHref="/mortgage-payments-strategies/"
          dateLabel="Feb 4, 2025"
          readTime="6 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                An assumable mortgage is one in which the lender (the mortgage company) has included a
                provision or clause which stipulates that the mortgage may be assumed by a third party.
                Typically, this third party would be the person who is purchasing your home from you, the
                seller.
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                If the mortgage is not assumable, there will be a corresponding provision or clause stating
                that the mortgage is not assumable. Whether the mortgage is assumable or not, there will be a
                clause which states that it is either assumable or not assumable.
              </p>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <p
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <strong>Interested in an Assumable Mortgage?</strong>
                </p>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Taking over a seller&apos;s mortgage can mean lower rates and better terms. Let our experts
                  guide you through the process.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link href="#Get-in-Touch" className="btn-primary">
                    Find Out If You Qualify
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="what-does-the-assumable-clause-look-like">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What Does The Assumable Clause Look Like?
                  </h2>
                  <p className="mb-5">The typical assumable clause will read like this:</p>
                  <p className="mb-5">
                    Transfer of Property. If all or any part of the Property or any interest in it is sold or
                    transferred without the Lender&apos;s prior consent, the Lender may require immediate
                    payment in full of the home loan.
                  </p>
                  <p className="mb-5">
                    What this provision is saying is that the mortgage is assumable if the Lender is notified
                    in advance of the transfer of interest in the property and has consented to the transfer.
                    There is a presumption that the Lenders consent cannot be unreasonably withheld. If the
                    buyer meets the Lenders credit requirements, then there is a presumption that the buyer
                    will be approved as the new mortgagee and will assume the mortgage.
                  </p>
                  <p className="mb-5">
                    Bear in mind that there can be variations of the above language. So, you should consult
                    with the current mortgage holder and/or an attorney in order to definitively determine if
                    the mortgage in question is assumable.
                  </p>
                  <p>
                    One of the big advantages of an FHA mortgage is that FHA mortgages are assumable. And an{" "}
                    <a
                      href="https://www.investopedia.com/terms/a/assumablemortgage.asp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3fb364] hover:underline"
                    >
                      assumable mortgage
                    </a>{" "}
                    might be a selling point if you at some point decide to sell your home.
                  </p>
                </section>

                <blockquote className="border-l-4 border-[#3fb364] bg-white/70 px-5 py-4 rounded-r-xl text-[#3a4a3a] text-[15px] leading-relaxed">
                  <p>
                    Understand how an assumable mortgage can simplify your home financing process. For further
                    reading, see our guide on{" "}
                    <Link
                      href="/delayed-financing-how-to-get-cashout-without-waiting-6-months-seasoning/"
                      className="text-[#3fb364] hover:underline"
                    >
                      delayed financing
                    </Link>
                    , get an example of a{" "}
                    <Link
                      href="/what-is-an-example-of-a-mortgage-recast/"
                      className="text-[#3fb364] hover:underline"
                    >
                      mortgage recast
                    </Link>
                    , learn about{" "}
                    <Link
                      href="/buying-a-house-with-a-cash-offer-and-simultaneously-getting-mortgage-financing/"
                      className="text-[#3fb364] hover:underline"
                    >
                      cash offer financing
                    </Link>
                    , and review the details of the{" "}
                    <Link
                      href="/fha-flip-rule-waiver-expired-you-need-wait-90-days-to-write-a-contract/"
                      className="text-[#3fb364] hover:underline"
                    >
                      FHA flip rule waiver
                    </Link>
                    .
                  </p>
                </blockquote>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/arizona-real-estate-capital-gains-is-back/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/fha-flip-rule-waiver-expired-you-need-wait-90-days-to-write-a-contract/"
                  className="text-[#3fb364] font-semibold hover:underline"
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
                <p className="text-[#3fb364] text-[14px] font-bold uppercase mb-5">Talk to a Broker Today!</p>
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
              Have questions about financing options? Our experts are here to help with personalized advice for
              any mortgage type. Fill out our form to get started today!
            </p>
            <Link
              href="/contact-us/"
              className="btn-primary"
            >
              Contact Us
            </Link>
          </div>
        </section>

        <GetInTouch
          id="Get-in-Touch"
          theme="light"
          title="Get in Touch with The Mortgage Brothers"
          description="Ready to take the next step towards your dream home? Fill out the form below, and one of our experienced mortgage professionals will get back to you promptly. We're here to provide personalized solutions tailored to your unique financial situation and homeownership goals in Arizona."
          className="bg-[#f5f0e8] border-y border-[#e8e0d0]/50"
        />

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