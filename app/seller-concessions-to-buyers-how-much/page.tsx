import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";
import FaqAccordion from "../component/FaqAccordion";

const relatedLinks = [
  {
    label: "Buying or Selling Personal Property",
    href: "/buying-or-selling-personal-property-with-your-home-sale-must-watch-this-first/",
  },
  {
    label: "How to Skip 2 Payments On Your Mortgage",
    href: "/how-to-skip-2-payments-on-your-mortgage/",
  },
  {
    label: "Put A Bow On It: FHA Loan Gift Guide",
    href: "/put-bow-fha-loan-gift-guide/",
  },
  {
    label: "Cash Offer + Mortgage Financing",
    href: "/buying-a-house-with-a-cash-offer-and-simultaneously-getting-mortgage-financing/",
  },
  {
    label: "Arizona Mortgage Closing Costs",
    href: "/arizona-mortgage-closing-costs/",
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
      name: "What are seller concessions in real estate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Seller concessions are closing cost contributions from the seller to help buyers complete the purchase.",
      },
    },
    {
      "@type": "Question",
      name: "How much were seller concessions in Phoenix Metro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Concessions ranged from 0.9% to 2.6% of sale prices across 2,112 closings in the prior 30 days as of February 9, 2019.",
      },
    },
    {
      "@type": "Question",
      name: "Which city had the highest seller concessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glendale recorded the highest average seller concessions at about 2.3%.",
      },
    },
    {
      "@type": "Question",
      name: "Which price range had the most closings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Homes priced between $200,000 and $300,000 had the most closings, with average concessions of 1.9%.",
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

export default function SellerConcessionsToBuyersHowMuchPage() {
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
          title={<>Seller Concessions To Buyers - How Much?</>}
          excerpt="See Phoenix Metro seller concession averages by city and price range from ARMLS data—what buyers typically receive at closing."
          category="Mortgage Payments & Strategies"
          categoryHref="/mortgage-payments-strategies/"
          dateLabel="Feb 5, 2025"
          readTime="6 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                Attached and Detached Resales in the Greater Phoenix Metro Area for prior 30 day period as of
                2/9/19
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                The above graph represents the average seller concession to buyers within the prior 30 day period
                as of 2/9/2019 for closings in the Greater Phoenix Metro Market area.
              </p>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Wondering How Much to Offer in Concessions?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Seller concessions can make or break a sale. Get expert advice on offering the right amount to
                  attract buyers and close the deal.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#Get-in-Touch"
                    className="btn-primary"
                  >
                    Get a Free Seller Consultation
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <p>
                  The graph above shows the number of closings by amount of concession to the buyers in the Greater
                  Phoenix Metro Market area. The total number of closings for the period was 2,112. Data gathered
                  from ARMLS closings for prior 30 days as of 2/9/19
                </p>

                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <a href="https://finance.yahoo.com/personal-finance/mortgages/article/seller-concessions-165151738.html" target="_blank" rel="noopener" className="text-[#3fb364] font-semibold hover:underline">Seller concessions to buyers</a> of single family attached and detached products ranged from a low of
                    .9% to a high of 2.6% for 2,112 closings in the previous 30 days as of 2/9/2019 in the Greater
                    Phoenix Metro Area.
                  </li>
                  <li>
                    Key cities – Gilbert had the lowest concession at 1.3% and Glendale had the
                    highest at 2.3%
                  </li>
                  <li>
                    Most closings in the 30 day period – $200,000 to $300,000 price range accounted
                    for 1,076 closings and an average seller concession to buyers of 1.9%
                  </li>
                  <li>Anthem, Gilbert, Cave Creek, Paradise Valley averaged 1.3%</li>
                  <li>Chandler, Litchfield Park, Tempe averaged 1.5% seller concessions.</li>
                  <li>Peoria, Mesa, Sun City, averaged 1.8%.</li>
                </ul>

                <p>Try us on your next loan……our clients appreciate our pricing, timing and customer service</p>

                <blockquote className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Discover how seller concessions can benefit both parties and learn what to expect in
                    negotiations. For more insights, check out our{" "}
                    <Link
                      href="/buying-or-selling-personal-property-with-your-home-sale-must-watch-this-first/"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      personal property guide
                    </Link>
                    , find out{" "}
                    <Link
                      href="/how-to-skip-2-payments-on-your-mortgage/"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      how to skip two mortgage payments
                    </Link>
                    , and review our{" "}
                    <Link
                      href="/put-bow-fha-loan-gift-guide/"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      FHA loan gift guide
                    </Link>
                    .
                  </p>
                </blockquote>

                <section id="frequently-asked-questions">
                  <FaqAccordion
                    title="Frequently Asked Questions"
                    items={[
                    { q: "What are seller concessions in real estate?", a: <>Seller concessions are closing cost contributions from the seller to help buyers complete the purchase.</> },
                    { q: "How much were seller concessions in Phoenix Metro?", a: <>Concessions ranged from 0.9% to 2.6% of sale prices across 2,112 closings in the prior 30 days as of February 9, 2019.</> },
                    { q: "Which city had the highest seller concessions?", a: <>Glendale recorded the highest average seller concessions at about 2.3%.</> },
                    { q: "Which price range had the most closings?", a: <>Homes priced between $200,000 and $300,000 had the most closings, with average concessions of 1.9%.</> }
                    ]}
                  />
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/difference-between-owner-occupied-second-home-and-investment-property/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/buying-or-selling-personal-property-with-your-home-sale-must-watch-this-first/"
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