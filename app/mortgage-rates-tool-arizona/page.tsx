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
import YoutubeLiteEmbed from "@/app/component/YoutubeLiteEmbed";

export const metadata: Metadata = getSeoMetadata("/mortgage-rates-tool-arizona/");

const articleFaqs = [
  {
    question: "What are Arizona mortgage rates and how should they be used?",
    answer:
      "Arizona mortgage rates listed are national averages provided for reference purposes only. They are not official rate quotes, but you can view recent trends in mortgage rates and use tools like a Mortgage Calculator to explore payments.",
  },
  {
    question: "How do 10 year mortgage rates compare to 30 year mortgage rates?",
    answer:
      "A 10 year mortgage has monthly payments about 1.95 times higher than a 30 year mortgage, but the total interest paid is about 4.2 times less. Additionally, current 10 year mortgage rates are roughly 1 point lower than comparable 30 year rates.",
  },
  {
    question: "What are the benefits of a 15 year mortgage?",
    answer:
      "With a 15 year mortgage, monthly payments are about 1.5 times higher than a 30 year mortgage, but borrowers save significantly on interest—about 2.5 times less overall. Current rates for 15 year mortgages are typically about 0.75 of a point lower than a 30 year mortgage.",
  },
  {
    question: "How does a 20 year mortgage compare to a 30 year mortgage?",
    answer:
      "A 20 year mortgage has monthly payments about 1.25 times higher than a 30 year mortgage. However, total interest costs are around 1.69 times less over the life of the loan. Interest rates on 20 year mortgages are currently about 0.25 of a point lower than a comparable 30 year mortgage.",
  },
  {
    question: "Why is the 30 year mortgage the most popular option?",
    answer:
      "The 30 year fixed mortgage offers the lowest monthly payments of all loan terms, making it the most common choice for borrowers. It allows buyers to afford more home for the same monthly payment. Under current financial regulations, 30 years is the maximum allowable term.",
  },
] as const;

const articleJsonLd = buildArticleSchemas({
  blog: {
    pathname: "/mortgage-rates-tool-arizona/",
    headline: "Arizona Mortgage Rates",
    description:
      "Compare competitive rates using our Mortgage Rates Tool Arizona and secure the ideal mortgage solution with expert guidance.",
    datePublished: "2025-02-10",
    articleSection: "Arizona Mortgage Insights",
  },
  faqs: [...articleFaqs],
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Arizona Mortgage Insights", path: "/arizona-mortgage-insights/" },
    { name: "Arizona Mortgage Rates", path: "/mortgage-rates-tool-arizona/" },
  ],
});

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

type TermItem =
  | { kind: "plain"; text: string; calculatorLink?: boolean }
  | { kind: "bold-rest"; bold: string; rest: string; calculatorLink?: boolean };

const termSections: { title: string; items: TermItem[] }[] = [
  {
    title: "10 Year Mortgage Rates",
    items: [
      {
        kind: "plain",
        text: "With a 10 year mortgage, your monthly payment will be about 1.95 times greater than your monthly payment with a 30 year mortgage. Example; if a 30 Year fixed mortgage payment is $1,000 per month, a 10 Year fixed mortgage payment would be around $1,950 per month. Feel free to use the Mortgage Calculator tool.",
        calculatorLink: true,
      },
      {
        kind: "bold-rest",
        bold:
          "The total interest payments on a 10 Year fixed interest rate mortgage will be around 4.2 times less than a 30 Year fixed mortgage",
        rest: ". Example, if your starting loan amount was $280,000, and your interest rate was 4%, you would spend approximately $200,000 on interest over the life of a 30 year fixed rate. In comparison, you would spend about $48,000 on interest over the life of the 10 year fixed mortgage.",
      },
      {
        kind: "plain",
        text: "Currently, the interest rate on a 10 year mortgage is about a 1 point lower than a comparable 30 year fixed mortgage.",
      },
    ],
  },
  {
    title: "15 Year Mortgage Rates",
    items: [
      {
        kind: "plain",
        text: "With a 15 year mortgage, your monthly payment will be about 1.5 times greater than your monthly payment with a 30 year mortgage. Example; if a 30 Year fixed mortgage payment is $1,000 per month, a 15 Year fixed mortgage payment would be around $1,500 per month. Use the Mortgage Calculator tool to explore how payments are affected by different term lengths.",
        calculatorLink: true,
      },
      {
        kind: "bold-rest",
        bold:
          "The total interest payments on a 15 Year fixed interest rate mortgage will be around 2.5 times less than a 30 Year fixed mortgage.",
        rest: " Example, if your starting loan amount was $280,000, and your interest rate was 4%, you would spend approximately $200,000 on interest over the life of a 30 year fixed rate. In comparison, you would spend about $80,000 on interest over the life of the 15 year fixed mortgage.",
      },
      {
        kind: "plain",
        text: "Currently, the interest rate on a 15 year mortgage is about a .75 of a point lower than a comparable 30 year fixed mortgage.",
      },
    ],
  },
  {
    title: "20 Year Mortgage Rates",
    items: [
      {
        kind: "plain",
        text: "With a 20 year mortgage, your monthly payment will be about 1.25 times greater than your monthly payment with a 30 year mortgage. Example; if a 30 Year fixed mortgage payment is $1,000 per month, a 20 Year fixed mortgage payment would be around $1,250 per month. Feel free to use the Mortgage Calculator tool.",
        calculatorLink: true,
      },
      {
        kind: "bold-rest",
        bold:
          "The total interest payments on a 20 Year fixed interest rate mortgage will be around 1.69 times less than a 30 Year fixed mortgage.",
        rest: " Example, if your starting loan amount was $280,000, and your interest rate was 4%, you would spend approximately $200,000 on interest over the life of a 30 year fixed rate. In comparison, you would spend about $119,000 on interest over the life of the 20 year fixed mortgage.",
      },
      {
        kind: "plain",
        text: "Currently, the interest rate on a 20 year mortgage is about .25 of a point lower than a comparable 30 year fixed mortgage.",
      },
    ],
  },
  {
    title: "30 Year Mortgage Rates",
    items: [
      {
        kind: "plain",
        text: "A 30 year mortgage is the maximum allowable term according to the Dodd Frank financial law. You won't see anymore 40 year terms on mortgages.",
      },
      {
        kind: "plain",
        text: "The 30 Year Fixed mortgage rate will give borrowers the lowest payment of all the terms available. Because of this, the Year 30 Fixed Rate is the most common mortgage term that borrower desire when they get a mortgage loan. The 30 Year fixed mortgage allow them to purchase more house for the same payment.",
      },
    ],
  },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

function withCalculatorLinks(text: string) {
  const parts = text.split(/(Mortgage Calculator tool)/g);
  return parts.map((part, i) =>
    part === "Mortgage Calculator tool" ? (
      <Link key={i} href="/mortgage-calculator-arizona/" className="text-[#3fb364] hover:underline">
        Mortgage Calculator tool
      </Link>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}

function renderTermItem(item: TermItem) {
  if (item.kind === "bold-rest") {
    return (
      <>
        <strong>{item.bold}</strong>
        {item.rest}
      </>
    );
  }

  if (item.calculatorLink) {
    return withCalculatorLinks(item.text);
  }

  return item.text;
}

export default function MortgageRatesToolArizonaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <JsonLd data={articleJsonLd} />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>Arizona Mortgage Rates</>}
          excerpt="Below you will see national average mortgage rates. Please note this is for reference purposes only and is not to be considered an official rate quote for an Arizona mortgage interest rate. You can also click on the t..."
          category="Arizona Mortgage Insights"
          categoryHref="/arizona-mortgage-insights/"
          dateLabel="Feb 10, 2025"
          readTime="3 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">
              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                Below you will see national average mortgage rates. Please note this is for reference purposes
                only and is not to be considered an official rate quote for an Arizona mortgage interest rate.
                You can also click on the table below to see a recent trend in mortgage rates.
              </p>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <YoutubeLiteEmbed
                  videoId="YqOa8IipIPU"
                  title="The Mortgage Brothers in Phoenix Arizona"
                />
              </div>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <p
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <strong>Unlock Competitive Rates Today!</strong>
                </p>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Now that you&apos;ve explored our Mortgage Rates Tool Arizona, connect with our experts for
                  personalized mortgage solutions.
                </p>
                <a href="#get-pre-approved" data-preapproval className="btn-primary">
                  Get Your Rate Now
                </a>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                {termSections.map((section) => (
                  <section key={section.title}>
                    <h2
                      className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {section.title}
                    </h2>
                    <ul className="list-disc pl-6 space-y-3 text-[15.5px]">
                      {section.items.map((item, index) => (
                        <li key={`${section.title}-${index}`}>{renderTermItem(item)}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/arizona-mortgage-approval-process/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link href="/glossary/" className="text-[#3fb364] font-semibold hover:underline">
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
                <a href="tel:+16025352171" className="btn-primary w-full">
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
            <a href="#get-pre-approved" data-preapproval className="btn-primary">
              Contact Us
            </a>
          </div>
        </section>

        <GetInTouch
          id="Get-in-Touch"
          theme="light"
          showContactCards={false}
          showPreApproveCta
          ctaHref="#get-pre-approved"
          ctaLabel="Get Your Rate Now"
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
                  key={item.href + item.label}
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
