"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an assumable mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An assumable mortgage is one where the lender includes a clause allowing a third party, typically the homebuyer, to take over the existing mortgage. If the mortgage is not assumable, the clause will clearly state so.",
      },
    },
    {
      "@type": "Question",
      name: "What does an assumable clause look like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical assumable clause may read: 'If all or any part of the property is sold or transferred without the lender’s prior consent, the lender may require immediate payment in full of the loan.' This means the mortgage may be assumed if the lender is notified and consents to the transfer.",
      },
    },
    {
      "@type": "Question",
      name: "Are FHA mortgages assumable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, one of the advantages of FHA mortgages is that they are assumable. This can be a strong selling point if you decide to sell your home in the future.",
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

export default function AssumableMortgagePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />
      <div className="h-[72px] w-full shrink-0" aria-hidden />

      <main className="flex-grow relative z-0">
        <section className="relative z-0 w-full bg-white overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-4 lg:py-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/home/what-is-an-assumable-mortgage.jpg"
              alt="How an assumable mortgage works and its benefits for homebuyers."
              width={1920}
              height={1080}
              className="relative z-0 w-full h-auto block max-w-full rounded-lg"
            />
          </div>
        </section>

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-12">
            <article className="min-w-0">
              <h1
                className="text-[#08271B] text-[30px] sm:text-[38px] lg:text-[44px] font-normal leading-tight mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What Is An Assumable Mortgage?
              </h1>

              <p className="text-[#8a9a7a] text-[14px] mb-8">
                by{" "}
                <Link href="/about-us/" className="text-[#3fb364] hover:underline font-medium">
                  Eddie Knoell
                </Link>{" "}
                | Feb 4, 2025
              </p>

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
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Interested in an Assumable Mortgage?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Taking over a seller&apos;s mortgage can mean lower rates and better terms. Let our experts
                  guide you through the process.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                  >
                    Find Out If You Qualify &rarr;
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
                <section id="what-does-the-assumable-clause-look-like">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What Does The Assumable Clause Look Like?
                  </h2>
                  <p className="mb-5">The typical assumable clause will read like this:</p>
                  <blockquote className="border-l-4 border-[#3fb364] bg-white/70 px-5 py-4 mb-5 rounded-r-xl italic text-[#052316]">
                    Transfer of Property. If all or any part of the Property or any interest in it is sold or
                    transferred without the Lender&apos;s prior consent, the Lender may require immediate
                    payment in full of the home loan.
                  </blockquote>
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
                    <Link
                      href="/assumable-mortgage/"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      assumable mortgage
                    </Link>{" "}
                    might be a selling point if you at some point decide to sell your home.
                  </p>
                </section>

                <section id="frequently-asked-questions">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-6 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        What is an assumable mortgage?
                      </h3>
                      <p>
                        An assumable mortgage is one where the lender includes a clause allowing a third party,
                        typically the homebuyer, to take over the existing mortgage. If the mortgage is not
                        assumable, the clause will clearly state so.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        What does an assumable clause look like?
                      </h3>
                      <p>
                        A typical assumable clause may read: &apos;If all or any part of the property is sold or
                        transferred without the lender&apos;s prior consent, the lender may require immediate
                        payment in full of the loan.&apos; This means the mortgage may be assumed if the lender
                        is notified and consents to the transfer.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        Are FHA mortgages assumable?
                      </h3>
                      <p>
                        Yes, one of the advantages of FHA mortgages is that they are assumable. This can be a
                        strong selling point if you decide to sell your home in the future.
                      </p>
                    </div>
                  </div>
                </section>

                <p>
                  If you have any questions about assumable mortgages, call us at{" "}
                  <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                    (602) 535-2171
                  </a>{" "}
                  or reach us using our{" "}
                  <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                    contact form
                  </Link>
                  .
                </p>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with
                    you and help you through the whole process.
                  </p>
                </div>

                <p className="text-[15px]">
                  Understand how an assumable mortgage can simplify your home financing process. For further
                  reading, see our guide on{" "}
                  <Link
                    href="/delayed-financing-how-to-get-cashout-without-waiting-6-months-seasoning/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    delayed financing
                  </Link>
                  , get an example of a{" "}
                  <Link
                    href="/what-is-an-example-of-a-mortgage-recast/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    mortgage recast
                  </Link>
                  , learn about{" "}
                  <Link
                    href="/buying-a-house-with-a-cash-offer-and-simultaneously-getting-mortgage-financing/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    cash offer financing
                  </Link>
                  , and review the details of the{" "}
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
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <span />
                <Link
                  href="/fha-flip-rule-waiver-expired-you-need-wait-90-days-to-write-a-contract/"
                  className="text-[#8a9a7a] hover:text-[#3fb364] transition-colors ml-auto"
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
              Have questions about financing options? Our experts are here to help with personalized advice for
              any mortgage type. Fill out our form to get started today!
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
              Ready to take the next step towards your dream home? One of our experienced mortgage professionals
              will get back to you promptly with personalized solutions tailored to your unique financial
              situation.
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
R
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
