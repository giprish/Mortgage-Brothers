import FaqAccordion from "../component/FaqAccordion";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

const relatedLinks = [
  {
    label: "Air Conditioning & Phoenix Real Estate",
    href: "/air-conditionings-impact-phoenix-valley-real-estate/",
  },
  {
    label: "Private Money Lenders for Investors",
    href: "/top-7-reasons-arizona-investment-home-buyers-choose-private-money-lenders/",
  },
  {
    label: "First-time Home Buyer Guide",
    href: "/first-time-home-buyer-arizona-guide/",
  },
  {
    label: "Conventional Home Loan Guide",
    href: "/what-is-a-conventional-home-loan-the-complete-first-time-buyer-mortgage-guide/",
  },
  {
    label: "Arizona Mortgage Rates & Interest Deduction",
    href: "/arizona-mortgage-rates-and-the-interest-deduction/",
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
      name: "Are Arizona home prices dropping in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not significantly. Prices are stabilizing, with some growth in suburbs like Buckeye, Marana, and Casa Grande.",
      },
    },
    {
      "@type": "Question",
      name: "What are mortgage rates in Arizona right now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most buyers are seeing rates between 6.0%–6.375%, depending on credit and loan type.",
      },
    },
    {
      "@type": "Question",
      name: "Is 2026 a good time to buy in Arizona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, especially with more inventory and fewer bidding wars. Down payment assistance can also help first-time buyers.",
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

export default function ArizonaRealEstateTrends2026Page() {
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
          title={<>Arizona Real Estate Trends in 2026: Predicting Mortgage Rates for the Coming Year</>}
          excerpt="Market analysis on 2026 Phoenix mortgage rate forecasts, housing inventory recovery, and home appreciation trends."
          category="Real Estate & Mortgages"
          categoryHref="/real-estate-mortgages/"
          dateLabel="May 5, 2026"
          readTime="10 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                If you&apos;ve been watching Arizona&apos;s housing market over the past few years, you know
                it&apos;s been a wild ride. From ultra-low{" "}
                <Link
                  href="/arizona-mortgage-rates-and-the-interest-deduction/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  mortgage rates
                </Link>{" "}
                during the pandemic to bidding wars in Phoenix and Tucson, things have finally started to cool
                down. Now, in 2026, we&apos;re entering a different kind of market — one that feels a bit more
                balanced.
              </p>
              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                But balanced doesn&apos;t always mean easy. Affordability is still tight, mortgage rates are
                higher than what we got used to in 2020-2021, and buyers are asking one big question: What
                happens next?
              </p>
              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                Let&apos;s take a closer look at the latest Arizona real estate trends in 2026 and what they mean
                for you.
              </p>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Looking for Expert Mortgage Guidance in 2026?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Speak with an Arizona mortgage expert about rates, loan programs, and what today&apos;s market
                  means for your next move.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="btn-primary"
                  >
                    Speak with an Expert &rarr;
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="arizona-housing-market-overview-2026">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Arizona Housing Market Overview: Where We Stand in 2026
                  </h2>
                  <p className="mb-5">
                    Arizona&apos;s market is no longer overheated, but it&apos;s definitely still competitive in
                    certain pockets.
                  </p>
                  <ul className="list-disc pl-6 space-y-3 mb-5">
                    <li>
                      The <strong>median home price in Phoenix</strong> is hovering around{" "}
                      <strong>$445,000</strong> (Redfin).
                    </li>
                    <li>
                      In <strong>Tucson</strong>, homes are averaging <strong>$311,000</strong>, keeping it more
                      affordable compared to Maricopa County (Redfin Tucson).
                    </li>
                    <li>
                      Inventory has grown to about <strong>4 months of supply</strong>, which gives buyers more
                      breathing room than in the pandemic era (Arizona MLS).
                    </li>
                    <li>
                      Homes are staying on the market for about <strong>50–70 days</strong> before selling
                      (Arizona Realtors).
                    </li>
                    <li>
                      On top of that, Arizona keeps welcoming new residents — nearly{" "}
                      <strong>85,000 people in 2023–24 alone</strong> (U.S. Census Bureau). That steady
                      population growth is helping to keep housing demand strong.
                    </li>
                  </ul>
                  <p>
                    👉 <strong>The big picture:</strong> Arizona&apos;s market is stabilizing. Prices aren&apos;t
                    crashing, but buyers aren&apos;t being forced into crazy bidding wars either.
                  </p>
                </section>

                <section id="key-arizona-real-estate-trends-2026">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Key Arizona Real Estate Trends to Watch in 2026
                  </h2>
                  <p className="mb-4">Here are some of the shifts shaping the market right now:</p>
                  <ul className="list-disc pl-6 space-y-3 mb-5">
                    <li>
                      <strong>Growth in the West Valley</strong> (Buckeye, Goodyear, Surprise) — More affordable
                      homes and new communities keep drawing families here.
                    </li>
                    <li>
                      <strong>Tucson suburbs like Marana</strong> are seeing steady demand thanks to jobs in
                      aerospace, education, and healthcare.
                    </li>
                    <li>
                      <strong>Luxury buyers in Scottsdale &amp; Paradise Valley</strong> are still active but
                      pickier — they want move-in-ready, energy-efficient homes.
                    </li>
                    <li>
                      <strong>Build-to-rent communities</strong> are growing fast, giving investors new
                      opportunities.
                    </li>
                  </ul>
                  <p>
                    Another big trend: <strong>buyer preferences</strong>. Millennials and Gen Z buyers
                    especially are looking for energy efficiency, home office space, and reliable internet. With
                    so many remote workers, that&apos;s becoming a non-negotiable.
                  </p>
                </section>

                <section id="mortgage-rates-arizona-november-2025">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Mortgage Rates in Arizona Currently as of November 2025:
                  </h2>
                  <p className="mb-4">
                    Mortgage rates remain the elephant in the room. Right now, Arizona borrowers are seeing:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 mb-5">
                    <li>
                      Around <strong>5.75% - 6.25% for a 30-year fixed mortgage</strong>
                    </li>
                    <li>
                      Some lenders are offering slightly better deals (closer to 6.0%) for well-qualified buyers.
                    </li>
                  </ul>
                  <p>
                    It might not feel &ldquo;low,&rdquo; especially if you remember 3% loans, but compared to
                    late 2023–24 when rates spiked near 7.5%, this is an improvement.
                  </p>
                </section>

                <section id="arizona-mortgage-rate-predictions-2026">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Arizona Mortgage Rate Predictions for 2026
                  </h2>
                  <p className="mb-4">So, where are things headed?</p>
                  <ul className="list-disc pl-6 space-y-3 mb-5">
                    <li>
                      <strong>Fannie Mae</strong> projects rates trending toward{" "}
                      <strong>6.1% by the end of 2026</strong> (Fannie Mae Forecast).
                    </li>
                    <li>
                      The <strong>Mortgage Bankers Association</strong> sees rates averaging in the{" "}
                      <strong>mid-6% range</strong> this year (MBA Forecast).
                    </li>
                    <li>
                      The <strong>Fed</strong> is signaling about <strong>1% in rate cuts in 2026</strong> (4
                      possible .25% cuts), which should keep rates from spiking again (Federal Reserve). Keep in
                      mind that current mortgage interest rates always take into account the speculation of where
                      the Fed rate will go. So, interest rates{" "}
                      <strong>tend to move ahead of the Fed</strong> — meaning they often start improving months
                      before the Fed actually cuts rates, as markets price in those expectations early.
                    </li>
                    <li>
                      The Mortgage Brothers predict rates to trend around <strong>5.5% by mid 2026</strong>
                    </li>
                  </ul>
                  <p className="mb-6">
                    👉 <strong>Translation:</strong> Don&apos;t expect rates to crash back to 3% or 4%. A
                    &ldquo;new normal&rdquo; in the 6% range is more realistic — with opportunities to refinance
                    later if we dip into the low 5s.
                  </p>
                  <div className="loan-btn-wrap">
                    <Link
                      href="/#get-pre-approved"
                      className="btn-primary"
                    >
                      Speak with an Expert
                    </Link>
                  </div>
                </section>

                <section id="smart-moves-2026">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Smart Moves in 2026 for Buyers, Owners &amp; Investors
                  </h2>

                  <h3 className="text-[#052316] text-[20px] font-bold mb-3 mt-2">First-Time Buyers</h3>
                  <ul className="list-disc pl-6 space-y-3 mb-6">
                    <li>
                      Explore loan programs designed for first-time homebuyers, such as{" "}
                      <Link
                        href="/fha-home-loans-arizona/"
                        className="text-[#3fb364] font-semibold hover:underline"
                      >
                        FHA loans
                      </Link>{" "}
                      with low down payment options or{" "}
                      <Link
                        href="/conventional-home-loans-arizona/"
                        className="text-[#3fb364] font-semibold hover:underline"
                      >
                        Conventional home loans
                      </Link>{" "}
                      that require minimal upfront costs.
                    </li>
                    <li>
                      Consider starting with a condo or townhouse in Tucson or the West Valley to keep costs
                      down.
                    </li>
                  </ul>

                  <h3 className="text-[#052316] text-[20px] font-bold mb-3">Current Homeowners</h3>
                  <ul className="list-disc pl-6 space-y-3 mb-6">
                    <li>
                      If you bought at 7%+ in 2023–24, watch for{" "}
                      <Link
                        href="/refinancing-arizona/"
                        className="text-[#3fb364] font-semibold hover:underline"
                      >
                        refinance
                      </Link>{" "}
                      opportunities.
                    </li>
                    <li>
                      Think about tapping equity with a HELOC for improvements, especially energy upgrades that
                      add long-term value.
                    </li>
                  </ul>

                  <h3 className="text-[#052316] text-[20px] font-bold mb-3">Investors</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      Single-family rentals are in demand near job hubs like Casa Grande and Buckeye (AZ
                      Central).
                    </li>
                    <li>
                      Build-to-rent is growing as more families want the space of a home with the flexibility of
                      renting.
                    </li>
                  </ul>
                </section>

                <section id="other-arizona-factors">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Other Arizona Factors in Play
                  </h2>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <strong>Water supply:</strong> Still a major topic, with new housing developments shaped by
                      sustainability requirements (Arizona Water Dept).
                    </li>
                    <li>
                      <strong>Insurance premiums:</strong> Rising in some areas due to wildfire and heat risks
                      (Insurance Information Institute).
                    </li>
                    <li>
                      <strong>Seasonal demand:</strong> Expect more activity in winter months as
                      &ldquo;snowbirds&rdquo; from colder states return.
                    </li>
                  </ul>
                </section>

                <section id="final-thoughts">
                  <h3
                    className="text-[#052316] text-[22px] sm:text-[24px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Final Thoughts
                  </h3>
                  <p className="mb-5">
                    The <strong>Arizona real estate trends in 2026</strong> suggest a healthier market — not a
                    bubble, not a bust, but a steady middle ground. For buyers, it means more options and less
                    pressure. For homeowners, it&apos;s about timing your{" "}
                    <Link
                      href="/refinancing-arizona/"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      refinance
                    </Link>
                    . And for investors, the opportunities are still strong if you focus on the right markets.
                  </p>
                  <p>
                    The key? Don&apos;t try to time the market perfectly. Instead, focus on finding the right
                    loan program and the right home that fits your needs now.
                  </p>
                </section>

                <section id="faq">
                  <FaqAccordion
                    title="FAQ: Arizona Real Estate Trends in 2026"
                    items={[
                    { q: "Q: Are Arizona home prices dropping in 2026?", a: <>Not significantly. Prices are stabilizing, with some growth in suburbs like Buckeye,
                        Marana, and Casa Grande.</> },
                    { q: "Q: What are mortgage rates in Arizona right now?", a: <>Most buyers are seeing rates between 6.0%–6.375%, depending on credit and loan type.</> },
                    { q: "Q: Is 2026 a good time to buy in Arizona?", a: <>Yes, especially with more inventory and fewer bidding wars. Down payment assistance can
                        also help first-time buyers.</> }
                    ]}
                  />
                </section>

                <p>
                  If you have any questions about this or if you have any questions you&apos;d like us to answer
                  on our podcast, you can submit your questions using our{" "}
                  <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                    contact form
                  </Link>{" "}
                  or give us a call at{" "}
                  <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                    (602) 535-2171
                  </a>
                  . Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with you
                  and help you through the whole process.
                </p>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with you
                    and help you through the whole process.
                  </p>
                </div>

                <p className="text-[#8a9a7a] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has been
                  prepared for informational purposes only. You should consult your own tax, legal, and accounting
                  advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS #210917 and
                  1618695. Equal housing lender.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/air-conditionings-impact-phoenix-valley-real-estate/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/top-7-reasons-arizona-investment-home-buyers-choose-private-money-lenders/"
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