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

export const metadata: Metadata = getSeoMetadata("/arizona-real-estate-capital-gains-is-back/");

const relatedLinks = [
  {
    label: "Arizona BINSR Process",
    href: "/arizona-binsr-buyer-inspection-notice-and-seller-response/",
  },
  {
    label: "Arizona Prequalification Form",
    href: "/what-you-need-to-know-about-the-arizona-prequalification-form/",
  },
  {
    label: "Mortgage Rates & Interest Deductions",
    href: "/arizona-mortgage-rates-and-the-interest-deduction/",
  },
  {
    label: "Prepayment Penalties",
    href: "/prepayment-penalties-on-your-arizona-mortgage/",
  },
  {
    label: "Buying Down Rates",
    href: "/buying-down-your-arizona-interest-rate/",
  },
  {
    label: "Second Mortgage Options",
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

const articleFaqs = [
  { question: "What is real estate capital gains tax?", answer: "Capital gains tax is a tax levied on the profit realized from the sale of a non-inventory asset, such as real estate. It is calculated by taking the difference between the final selling price and the original purchase price (along with adjusted cost basis improvements)." },
  { question: "How does the IRS Section 121 exclusion protect Arizona primary residences from capital gains?", answer: "Under IRS Section 121, if the property was your primary residence, you can exclude up to $250,000 of capital gains profit if you are a single filer, and up to $500,000 if you are married filing jointly. To qualify, you must meet the ownership and use tests, meaning you owned and lived in the home for at least two out of the five years prior to the sale date." },
  { question: "Are investment properties and vacation homes exempt from Arizona capital gains tax?", answer: "No. Investment properties and secondary vacation homes do not qualify for the standard primary residence Section 121 tax exclusion. When you sell an investment property or second home, the entire realized profit is subject to applicable state and federal capital gains taxes." },
  { question: "How can real estate investors defer capital gains tax on Arizona properties?", answer: "Real estate investors can legally defer paying capital gains taxes by utilizing a Section 1031 exchange. This strategy allows an investor to defer the tax liabilities by reinvesting the net cash proceeds from the sale of their current investment property into a new, 'like-kind' replacement property within strict IRS timeline guidelines." },
] as const;

const articleJsonLd = buildArticleSchemas({
  blog: {
    pathname: "/arizona-real-estate-capital-gains-is-back/",
    headline: "Arizona Real Estate Capital Gains is back",
    description: "A recap of capital gains rules for Arizona home sellers, main-home exclusions, and special situations that can reduce tax liability.",
    datePublished: "2025-02-04",
    articleSection: "Real Estate & Mortgages",
  },
  faqs: [...articleFaqs],
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Real Estate & Mortgages", path: "/real-estate-mortgages/" },
    { name: "Arizona Real Estate Capital Gains is back", path: "/arizona-real-estate-capital-gains-is-back/" },
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

export default function ArizonaRealEstateCapitalGainsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <JsonLd data={articleJsonLd} />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>Arizona Real Estate Capital Gains is back</>}
          excerpt="A recap of capital gains rules for Arizona home sellers, main-home exclusions, and special situations that can reduce tax liability."
          category="Real Estate & Mortgages"
          categoryHref="/real-estate-mortgages/"
          dateLabel="Feb 4, 2025"
          readTime="6 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                Remember good ole Capital Gains? Now that properties have been flying off the market for
                nearly 2 years, and home prices are on the rise, many Arizona homeowners might be anxious to
                sell and get the money out of their homes. Sellers need to be cautious about potential capital
                gains taxes. Below is a good recap on the{" "}
                <a
                  href="https://www.irs.gov/taxtopics/tc409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  Capital Gains rules
                </a>
                .
              </p>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Selling Your Home? Know Your Tax Obligations
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Arizona real estate capital gains taxes can impact your profits. Get expert advice on tax
                  exemptions and how to reduce what you owe.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="btn-primary"
                  >
                    Get a Free Capital Gains Tax Consultation
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section>
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-5 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Your &ldquo;Main Home&rdquo; and Capital Gains Taxes?
                  </h2>
                  <p className="mb-5">
                    If homeowners have lived in their &ldquo;main home&rdquo; for less than two years, they
                    will be liable to pay capital gains taxes. However, if they have lived in their home for
                    at least two years out of its five years prior to the date of sale, they may be able to
                    exclude up to $250,000 of their gain from the sale if they are filing their taxes
                    individually, or $500,000 when filing a joint return.
                  </p>
                  <p>
                    The IRS defines a &ldquo;main home&rdquo; as the one you live in most of the time. The
                    two-year period required to live in it while owning it to get the capital gains exclusion
                    does not have to be continuous.
                  </p>
                </section>

                <section>
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-5 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What to Do When it&apos;s Time to Sell Your House
                  </h2>
                  <p className="mb-4">
                    Sellers can also avoid capital gains taxes when selling their home when these conditions
                    exist:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 mb-5">
                    <li>
                      If they owned or lived in a primary home for a total of at least one year and became
                      physically or mentally disabled and could not care for themselves, the time that they
                      live in a facility licensed to care for people with that disability can count as time
                      lived in their primary home. They must still own the home for at least two years.
                    </li>
                    <li>
                      If their previous home was destroyed or condemned they can avoid capital gains tax when
                      selling their replacement home if the ownership and use of the combined homes meet the
                      two-out-of-five-year exclusion.
                    </li>
                    <li>
                      If they or their spouse are on qualified official extended duty in the Uniformed
                      Services, the Foreign Service, or the intelligence community, they may elect to suspend
                      the five-year test period for up to 10 years. You might advise them to check{" "}
                      <a
                        href="https://www.irs.gov/publications/p523"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3fb364] font-semibold hover:underline"
                      >
                        IRS Publication 523, Selling Your Home
                      </a>
                      , to get all of the information they&apos;ll need to make an informed decision. They may
                      need to wait another month or two before putting up the &ldquo;For Sale&rdquo; sign so
                      they can save thousands on capital gains taxes.
                    </li>
                  </ul>
                </section>

                <p>
                  If you have any questions about this or if you have any questions you&apos;d like us to
                  answer on our podcast, you can email your questions to{" "}
                  <a
                    href="mailto:team@azmortgagebrothers.com"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    team@azmortgagebrothers.com
                  </a>{" "}
                  or give us a call at{" "}
                  <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                    (602) 535-2171
                  </a>
                  . Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with
                  you and help you through the whole process.
                </p>

                
                <section id="frequently-asked-questions">
                  <FaqAccordion
                    title="Frequently Asked Questions"
                    items={articleFaqs.map((faq) => ({
                      q: faq.question,
                      a: faq.answer,
                    }))}
                  />
                </section>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with
                    you and help you through the whole process.
                  </p>
                </div>

                <p className="text-[15px]">
                  Stay informed with the latest on Arizona real estate capital gains. For additional insights,
                  review our guide on{" "}
                  <Link
                    href="/arizona-binsr-buyer-inspection-notice-and-seller-response/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    inspection notices
                  </Link>
                  , learn about the{" "}
                  <Link
                    href="/what-you-need-to-know-about-the-arizona-prequalification-form/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    prequalification form
                  </Link>
                  , catch up on{" "}
                  <Link
                    href="/arizona-mortgage-rates-and-the-interest-deduction/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    mortgage rates &amp; interest deductions
                  </Link>
                  , understand{" "}
                  <Link
                    href="/prepayment-penalties-on-your-arizona-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    prepayment penalties
                  </Link>
                  , explore strategies for{" "}
                  <Link
                    href="/buying-down-your-arizona-interest-rate/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    buying down rates
                  </Link>
                  , and consider{" "}
                  <Link
                    href="/arizona-second-mortgages/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    second mortgage options
                  </Link>
                  .
                </p>

                <p className="text-[#5a6b52] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has
                  been prepared for informational purposes only. You should consult your own tax, legal, and
                  accounting advisors before engaging in any transaction. Mortgage Brothers LLC NMLS 1007154,
                  NMLS #210917 and 1618695. Equal housing lender.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/arizona-second-mortgages/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/what-is-the-difference-between-aan-arizona-condo-and-arizona-townhome/"
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