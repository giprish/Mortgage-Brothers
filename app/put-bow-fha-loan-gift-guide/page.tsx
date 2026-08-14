import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

export const metadata: Metadata = getSeoMetadata("/put-bow-fha-loan-gift-guide/");

const relatedLinks = [
  {
    label: "How to Skip 2 Payments",
    href: "/how-to-skip-2-payments-on-your-mortgage/",
  },
  {
    label: "Personal Property & Home Sale",
    href: "/buying-or-selling-personal-property-with-your-home-sale-must-watch-this-first/",
  },
  {
    label: "Seller Concessions to Buyers",
    href: "/seller-concessions-to-buyers-how-much/",
  },
  {
    label: "FHA Home Loans Arizona",
    href: "/fha-home-loans-arizona/",
  },
  {
    label: "First-time Home Buyer Guide",
    href: "/first-time-home-buyer-arizona-guide/",
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
      name: "Can FHA loans be funded with gift money?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, FHA loans allow gift money to be used toward the down payment. A gift is defined as funds from a private donor that do not have to be repaid, such as parents giving money to their child for the purchase.",
      },
    },
    {
      "@type": "Question",
      name: "Are cash gifts acceptable for an FHA loan down payment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, cash gifts are not acceptable for FHA loan funding. Lenders must be able to document the origins of the gift funds, which is why direct deposits from the donor’s bank account are required.",
      },
    },
    {
      "@type": "Question",
      name: "What documentation is required for FHA loan gift funds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lenders require a signed gift letter from the donor stating the dollar amount of the gift, confirmation that repayment is not required, and the donor’s name, address, phone number, and relationship to the homebuyer. Additionally, documentation of the transfer of funds is necessary.",
      },
    },
    {
      "@type": "Question",
      name: "Who can provide gift funds for an FHA loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Acceptable gift donors include the homebuyer’s relatives, employer, labor union, governmental agency or public entity with homeownership assistance programs, charitable organizations, and close friends with a documented interest in the buyer.",
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

export default function PutBowFhaLoanGiftGuidePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>Put A Bow On It: FHA Loan Gift Guide</>}
          excerpt="Learn FHA gift fund rules for down payments—gift letters, documented transfers, acceptable donors, and why cash gifts are not allowed."
          category="Mortgage Payments & Strategies"
          categoryHref="/mortgage-payments-strategies/"
          dateLabel="Feb 5, 2025"
          readTime="8 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                Many{" "}
                <Link
                  href="/first-time-home-buyer-arizona-guide/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  first-time homebuyers
                </Link>{" "}
                do not have the savings on hand for a large down-payment on their mortgage. This is why they
                often choose an{" "}
                <Link
                  href="/fha-home-loans-arizona/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  FHA loan
                </Link>{" "}
                over a{" "}
                <Link
                  href="/conventional-home-loans-arizona/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  Conventional loan
                </Link>
                . Not only does an FHA loan only require 3.5% down on the loan, but it also allows for gifts to
                be accepted in order to help fund the purchase. A gift, in this case, refers to any funds the
                borrower receives from a private donor that do not have to be repaid. For example, parents
                giving their child money to put toward the downpayment counts as a gift.
              </p>
              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                First-time homebuyers and borrowers, who are often unfamiliar with the mortgage loan process,
                do not understand how intricate the process of applying for and being approved for a mortgage
                is. During the approval process, the borrower&apos;s finances will need to be thoroughly
                documented and reviewed, and all money will need to be accounted for. Though FHA loans allow
                for gifts, there are still rules and regulations regarding accepting and using gifts for an{" "}
                <a
                  href="https://www.investopedia.com/terms/f/fhaloan.asp"
                  target="_blank" rel="noopener"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                FHA loan
                </a>
                .
              </p>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Need Help with Your FHA Loan Down Payment?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Gift funds can make buying a home easier. Learn how to use them for your FHA loan and get
                  started today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/fha-home-loans-arizona/"
                    className="btn-primary"
                  >
                    Get FHA Loan Guidance &rarr;
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <p>
                  Here are some of the most common things to remember when considering a gift for your FHA
                  loan.
                </p>

                <section id="fha-loan-gift-basics">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-5 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    FHA Loan Gift Basics
                  </h2>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                    Gifts Can&apos;t Be In The Form Of Cash
                  </h3>
                  <p className="mb-6">
                    Cash gifts are not acceptable sources of gift funds from donors. The reason being that the
                    lender has to be able to document the origins of the gift funds.
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                    Gift Fund Deposits Must Be Documented
                  </h3>
                  <p className="mb-6">
                    If the homebuyer has deposited the gift funds into their bank account, the lender will want
                    to source the funds by documenting the transfer from the donor&apos;s bank account into the
                    buyer&apos;s account.
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                    The Lender Will Require a Gift Letter
                  </h3>
                  <p className="mb-6">
                    To verify where the funds came from and to document that the funds are a non-repayable
                    gift, the lender will require a signed gift letter from the donor. This letter will outline
                    the exact dollar amount of the gift, declare that no repayment is required, and feature the
                    donor&apos;s relationship to the homebuyer, name, address, and phone number.
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                    If The Gift Is Borrowed, Additional Documentation Is Required
                  </h3>
                  <p className="mb-6">
                    If the gift donor has borrowed the funds, documentation from the bank or savings account is
                    required by the lender. If the donor can&apos;t document the funds, because, for example,
                    they are borrowed from a third party or from a line of credit, the donor must provide
                    written evidence that the gift funds came from an acceptable source.
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                    Funds Must Come From An Approved Source
                  </h3>
                  <p className="mb-6">
                    All of the homebuyer&apos;s money must be verified to come from approved and acceptable
                    sources by the lender. These sources include the borrower&apos;s own savings accounts and
                    cash reserves, cash-in investments and savings bonds, and other holdings.
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                    Funds Can&apos;t Be Non Collateralized
                  </h3>
                  <p className="mb-6">
                    Funds used for an FHA loan are considered non collateralized and not approved sources if
                    they come from sources such as payday loans and credit card cash advances. Funds are also
                    not approved if they come from an individual donor who requires repayment of the funds.
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                    Acceptable gift donors include
                  </h3>
                  <p>
                    The homebuyer&apos;s relatives, employer, governmental agency or public entity (that has a
                    program for home ownership assistance), labor union, close friend (with a clearly
                    documented and defined interest in the buyer), and a charitable organization.
                  </p>
                </section>

                <section id="have-additional-questions">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Have Additional Questions? Let Us Help With Answers!
                  </h2>
                  <p className="mb-3">
                    Contact Us Today at{" "}
                    <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                      602-535-2171
                    </a>
                  </p>
                  <p className="mb-3">
                    Or reach us using our{" "}
                    <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                      contact form
                    </Link>
                  </p>
                  <p>
                    Or Complete our{" "}
                    <Link href="#Get-in-Touch" className="text-[#3fb364] font-semibold hover:underline">
                      Inquiry Form
                    </Link>
                  </p>
                </section>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with
                    you and help you through the whole process.
                  </p>
                </div>

                <p className="text-[15px]">
                  Get the details on FHA loan gift options with our comprehensive guide. For additional
                  context, consider our discussion on{" "}
                  <Link
                    href="/seller-concessions-to-buyers-how-much/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    seller concessions
                  </Link>
                  , check out the{" "}
                  <Link
                    href="/buying-or-selling-personal-property-with-your-home-sale-must-watch-this-first/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    personal property guide
                  </Link>
                  , and discover tips on{" "}
                  <Link
                    href="/how-to-skip-2-payments-on-your-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    skipping two mortgage payments
                  </Link>
                  .
                </p>

                <p className="text-[#5a6b52] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has
                  been prepared for informational purposes only. You should consult your own tax, legal, and
                  accounting advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS
                  #210917 and 1618695. Equal housing lender.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/how-to-skip-2-payments-on-your-mortgage/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/is-the-mortgage-interest-tax-deduction-really-a-big-deal/"
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