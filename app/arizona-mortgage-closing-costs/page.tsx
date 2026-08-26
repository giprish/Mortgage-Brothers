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

export const metadata: Metadata = getSeoMetadata("/arizona-mortgage-closing-costs/");

const relatedLinks = [
  {
    label: "Arizona Mortgage Closing Process",
    href: "/arizona-mortgage-closing-process/",
  },
  {
    label: "Arizona Refinance Process",
    href: "/arizona-refinance-process/",
  },
  {
    label: "What Are Closing Costs on a Home Purchase",
    href: "/what-are-closing-costs-on-a-home-purchase/",
  },
  {
    label: "Arizona Mortgage Basics",
    href: "/arizona-mortgage-basics/",
  },
  {
    label: "Arizona Home Buying Process",
    href: "/arizona-home-buying-process/",
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
  { question: "What are lender fees in Arizona mortgage closing costs?", answer: "Lender fees are the costs charged by your mortgage lender for creating and funding your loan. These fees vary by lender and typically include administrative and underwriting costs. You can compare lenders to find lower fees, but your decision shouldn't be based solely on the fee amount." },
  { question: "Why are title company fees required during mortgage closing?", answer: "Title company fees cover services like verifying a clear property title, preparing the deed transfer, and recording the mortgage with the county. The title company ensures the legal transfer of ownership and that there are no existing claims or issues with the property title." },
  { question: "What is an appraisal fee in mortgage closing costs?", answer: "An appraisal fee is charged for evaluating the property's market value. Lenders require an appraisal to ensure the home is worth the amount you're borrowing. This cost appears on your closing statement and is typically paid at closing." },
  { question: "Are there additional inspection fees involved in closing a mortgage in Arizona?", answer: "Yes, additional inspection fees may include pest inspections for termites or wood-destroying organisms, as well as septic and well certifications if the property relies on those systems. Condo buyers might also face questionnaire fees required by the condominium association." },
] as const;

const articleJsonLd = buildArticleSchemas({
  blog: {
    pathname: "/arizona-mortgage-closing-costs/",
    headline: "Arizona Mortgage Closing Costs",
    description: "Break down Arizona mortgage closing costs—lender fees, title company fees, appraisals, pest inspections, septic/well certifications, and condo questionnaire fees.",
    datePublished: "2025-02-10",
    articleSection: "Mortgage Basics",
  },
  faqs: [...articleFaqs],
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Mortgage Basics", path: "/mortgage-basics/" },
    { name: "Arizona Mortgage Closing Costs", path: "/arizona-mortgage-closing-costs/" },
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

export default function ArizonaMortgageClosingCostsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <JsonLd data={articleJsonLd} />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>Arizona Mortgage Closing Costs</>}
          excerpt="Break down Arizona mortgage closing costs—lender fees, title company fees, appraisals, pest inspections, septic/well certifications, and condo questionnaire fees."
          category="Mortgage Basics"
          categoryHref="/mortgage-basics/"
          dateLabel="Feb 10, 2025"
          readTime="8 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                If you&apos;re getting a mortgage, you&apos;re probably hearing talk of closing costs. But what
                makes these up, and why do you have to pay them? Closing costs are commonly lender fees,
                appraisal fees, title company fees, and more. Learning what fees you&apos;ll be expected to pay
                and why can help make the process of getting a mortgage and buying a home less stressful and
                confusing. Here are some of the commonly seen closing costs you might have as a part of your
                mortgage and real estate transaction.
              </p>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Demystify Your Closing Costs—Contact Our Experts!
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Ready to understand every detail of your closing costs? Connect with Mortgage Brothers LLC
                  for personalized advice and a stress-free closing experience.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="btn-primary"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="lender-fees">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Lender Fees
                  </h2>
                  <p>
                    These are generated by your lender, as the cost of creating and funding your mortgage. People
                    who buy houses for cash won&apos;t need to pay these fees, but most people have a mortgage on
                    their home. You can shop around for different lenders if you want your closing costs to be a
                    little bit lower, but you shouldn&apos;t base your choice of a mortgage lender solely on the
                    fees.
                  </p>
                </section>

                <section id="title-company-fees">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Title Company Fees
                  </h2>
                  <p>
                    When you close your real estate transaction and your mortgage is funded by the lender, a title
                    company will be involved. They will help you sign everything, and they will also do a search to
                    make sure the title to the property you&apos;re buying is clear. That&apos;s not a free
                    service, so you can expect to see some fees for the title company on your HUD-1, which gives
                    all the closing information. The title company also charges to record the deed and the mortgage
                    with the county, and prepare all the paperwork to transfer the deed from the seller&apos;s name
                    to yours.
                  </p>
                </section>

                <section id="appraisal-fees">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Appraisal Fees
                  </h2>
                  <p>
                    An important mortgage closing cost is the appraisal fee. An appraisal is required by your
                    lender, to make sure the house is worth the amount you want to borrow. Expect to see that fee
                    on your closing statement, and to pay it at closing.
                  </p>
                </section>

                <section id="pest-inspections">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Pest Inspections
                  </h2>
                  <p>
                    Termites and other pests can really cause damage to a house. You may have to pay for a pest
                    inspection, to make sure the home doesn&apos;t have any wood-destroying organisms in it before
                    your lender will fund your loan.
                  </p>
                </section>

                <section id="septic-and-well-certifications">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Septic and Well Certifications
                  </h2>
                  <p>
                    If the house you&apos;re buying has a septic tank and/or a well for drinking water, both of
                    those will have to be inspected and certified before you can close your real estate
                    transaction. You will probably be asked to pay for those, although the seller might agree to do
                    so.
                  </p>
                </section>

                <section id="condo-questionnaire-fees">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Condo Questionnaire Fees
                  </h2>
                  <p>
                    If you&apos;re buying a condo, another mortgage closing cost may be the questionnaire fees.
                    Condos have specific ways they do things, and they may require more from you than a typical
                    home purchase would. If you expect these fees and are ready for them, you can avoid any
                    unpleasant surprises at closing.
                  </p>
                </section>

                <section id="frequently-asked-questions">
                  <FaqAccordion
                    title="Frequently Asked Questions"
                    items={[
                    { q: "What are lender fees in Arizona mortgage closing costs?", a: <>Lender fees are the costs charged by your mortgage lender for creating and funding your
                        loan. These fees vary by lender and typically include administrative and underwriting
                        costs. You can compare lenders to find lower fees, but your decision shouldn&apos;t be
                        based solely on the fee amount.</> },
                    { q: "Why are title company fees required during mortgage closing?", a: <>Title company fees cover services like verifying a clear property title, preparing the deed
                        transfer, and recording the mortgage with the county. The title company ensures the legal
                        transfer of ownership and that there are no existing claims or issues with the property
                        title.</> },
                    { q: "What is an appraisal fee in mortgage closing costs?", a: <>An appraisal fee is charged for evaluating the property&apos;s market value. Lenders require
                        an appraisal to ensure the home is worth the amount you&apos;re borrowing. This cost
                        appears on your closing statement and is typically paid at closing.</> },
                    { q: "Are there additional inspection fees involved in closing a mortgage in Arizona?", a: <>Yes, additional inspection fees may include pest inspections for termites or wood-destroying
                        organisms, as well as septic and well certifications if the property relies on those
                        systems. Condo buyers might also face questionnaire fees required by the condominium
                        association.</> }
                    ]}
                  />
                </section>

                <p>
                  If you have any questions about Arizona mortgage closing costs, call us at{" "}
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
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with you
                    and help you through the whole process.
                  </p>
                </div>

                <p className="text-[#5a6b52] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has been
                  prepared for informational purposes only. You should consult your own tax, legal, and accounting
                  advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS #210917 and
                  1618695. Equal housing lender.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/arizona-mortgage-closing-process/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/arizona-refinance-process/"
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