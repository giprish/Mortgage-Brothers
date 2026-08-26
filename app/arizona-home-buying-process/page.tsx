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

export const metadata: Metadata = getSeoMetadata("/arizona-home-buying-process/");

const relatedLinks = [
  {
    label: "Arizona Mortgage Payments",
    href: "/arizona-mortgage-payments/",
  },
  {
    label: "Arizona Mortgage Closing Process",
    href: "/arizona-mortgage-closing-process/",
  },
  {
    label: "Mortgage Approval Process",
    href: "/arizona-mortgage-approval-process/",
  },
  {
    label: "First-time Home Buyer Guide",
    href: "/first-time-home-buyer-arizona-guide/",
  },
  {
    label: "Ultimate Guide to Your First Mortgage",
    href: "/ultimate-guide-first-mortgage/",
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
  { question: "I’ve heard the term “Buyer’s Market” and “Seller’s Market”. What does that mean?", answer: "Simply, it’s about economics. When there are more buyers than sellers, it becomes a Seller’s Market…meaning the seller has the control. If they don’t like your bid, there’s probably someone else out there ready to buy. On the flip side, if there are more sellers than buyers, it becomes a Buyer’s Market because there probably isn’t someone else waiting to place a bid." },
  { question: "Where does my “earnest” money go?", answer: "Earnest money, or a small down payment to “hold” the purchase, is credited back toward the buyer’s closing costs or down payment." },
  { question: "Do I need a Home Inspection?", answer: "Some mortgage loan programs require a borrower to get an inspection. However, even if it’s not required it is still important to complete to be sure the house is sound and there are no problems waiting in the wings." },
  { question: "Does it matter if I buy a home that’s part of a Home Owner’s Association?", answer: "Yes, it does. An HOA may have the power to determine the color of your home, the number of pets you have and even the type of grass and flowers you plant? They may also have the power to assess penalties to you if the problems aren’t fixed. It’s very important to understand the scope of any HOA and what the costs/premiums might be." },
  { question: "What are the primary operational steps in the Arizona home buying process?", answer: "The entire home buying process can be broken down into five major sequential phases. It begins with filling out a mortgage application for pre-approval, followed by assembling your real estate team, submitting a formal purchase offer, clearing underwriting conditions and paperwork, and finally attending the closing appointment." },
  { question: "Why is a personalized strategy session required before shopping for an Arizona home?", answer: "A personalized strategy session with a trusted mortgage lender ensures you clearly understand how much home you can afford, establishes your exact down payment budget, and identifies the best mortgage program for your needs. It also allows the lender to uncover and resolve any potential loan approval issues early in the process." },
  { question: "What happens during the due diligence period after a purchase offer is accepted?", answer: "Once the seller accepts your offer, the official due diligence period begins. This phase triggers a series of time-sensitive real estate events, including completing property home inspections to ensure the structure is sound, ordering the bank appraisal, and processing final mortgage approvals before signing closing documents." },
  { question: "How do Homeowners Associations (HOAs) impact buyers in Arizona?", answer: "HOAs hold significant regulatory power over a property and can dictate specific rules regarding home paint colors, pet limits, landscaping choices, and architectural changes. Because they can assess financial penalties for non-compliance, buyers must thoroughly review the scope, guidelines, and monthly premiums of the HOA during escrow." },
] as const;

const articleJsonLd = buildArticleSchemas({
  blog: {
    pathname: "/arizona-home-buying-process/",
    headline: "Arizona Home Buying Process",
    description: "Walk through the five major steps of buying a home in Arizona—from pre-approval and your buying team to offer, paperwork, and closing.",
    datePublished: "2025-02-10",
    articleSection: "Mortgage Basics",
  },
  faqs: [...articleFaqs],
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Mortgage Basics", path: "/mortgage-basics/" },
    { name: "Arizona Home Buying Process", path: "/arizona-home-buying-process/" },
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

export default function ArizonaHomeBuyingProcessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <JsonLd data={articleJsonLd} />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>Arizona Home Buying Process</>}
          excerpt="Walk through the five major steps of buying a home in Arizona—from pre-approval and your buying team to offer, paperwork, and closing."
          category="Mortgage Basics"
          categoryHref="/mortgage-basics/"
          dateLabel="Feb 10, 2025"
          readTime="9 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                What is the overall Home Buying Process? Of course there are lot of moving parts, but the entire
                process can be broken down into a few major points that you will need to understand and be
                prepared for as you start working with your agent and your Arizona mortgage lender.
              </p>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Streamline Your Mortgage Journey Today!
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Now that you understand how to optimize your payments, reach out to our experts for
                  personalized mortgage advice.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="btn-primary"
                  >
                    Get Pre-Approved
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="step-1-loan-application-pre-approval">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Step 1 – Filling out a Loan Application so you can get Pre-Approved before you begin shopping
                    for a home
                  </h2>
                  <p>
                    Of course you need to know how much you can afford, the down payment budget you have as well
                    as what type of AZ mortgage loan program you&apos;ll be involved in. A personalized strategy
                    session with a trusted mortgage lender should address all of your initial loan approval
                    questions as well as uncovering and addressing any potential issues. You can start this
                    process by{" "}
                    <a
                      href="https://5e57fc60619043439b57ca0f17e22434.preapprovemeapp.com/Portal/1345/49167/Form?name=Form1003Long&data=f96eaac71b88415b8608669bda86d3d8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      clicking here to take a loan application
                    </a>
                    .
                  </p>
                </section>

                <section id="step-2-assemble-your-home-buying-team">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Step 2 – Assemble your Home Buying Team
                  </h2>
                  <p className="mb-5">
                    There are many players involved in the home buying process including your agent, title
                    company, insurance agent, lender and possibly an attorney…and they all play an important role.
                  </p>
                  <p>
                    Remember, no one buys a home on their own. It&apos;s a team process since there are so many
                    tasks, so many documents, and so many minute details to know which all need special attention.
                    It&apos;s imperative that you develop a team that you trust and that the individual players
                    will have the ability to communicate well and execute things on time.
                  </p>
                </section>

                <section id="step-3-submit-your-purchase-offer">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Step 3 – Submit your purchase offer
                  </h2>
                  <p>
                    Assuming you&apos;ve already got the mortgage approval, your agent will submit your purchase
                    offer to a listing agent or seller. Once your offer is accepted the &quot;due diligence&quot;
                    period begins with a series of events including the final mortgage approval, appraisals,
                    inspections and any other requirements that need to be met before signing on the dotted line.
                  </p>
                </section>

                <section id="step-4-conditions-and-paperwork">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Step 4 – Conditions and Paperwork
                  </h2>
                  <p>
                    Lenders, processors, insurance agents, sellers, real estate agents…everyone will have their
                    share of documents for you so keep yourself well organized and well informed.
                  </p>
                </section>

                <section id="step-5-closing">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Step 5 – Closing
                  </h2>
                  <p>
                    This is when all of the team players come together at the same time with the same
                    agenda…to make sure all of the documents and figures are good…so you can put pen to paper and
                    buy your home!
                  </p>
                </section>

                <section id="home-buying-faqs">
                  <FaqAccordion
                    title="Home Buying FAQ's"
                    items={articleFaqs.map((faq) => ({
                      q: faq.question,
                      a: faq.answer,
                    }))}
                  />
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/arizona-mortgage-payments/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/arizona-mortgage-closing-process/"
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