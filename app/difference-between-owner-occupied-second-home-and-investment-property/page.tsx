import React from "react";
import Link from "next/link";
import FaqAccordion from "../component/FaqAccordion";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

const relatedLinks = [
  {
    label: "Detached Guest Home Appraisal Issues",
    href: "/detached-guest-home-casita-appraisal-issues/",
  },
  {
    label: "LSU Forms & Loan Status Updates",
    href: "/lsu-forms-loan-status-updates-and-what-you-need-to-know/",
  },
  {
    label: "Arizona Condo vs Townhome",
    href: "/what-is-the-difference-between-aan-arizona-condo-and-arizona-townhome/",
  },
  {
    label: "Arizona Vacation & Investment Mortgages",
    href: "/arizona-vacation-and-investment-home-mortgages/",
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
      name: "What is a primary or owner-occupied residence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An owner-occupied or primary residence is a residential property where the borrower intends to live for the majority of the calendar year. To qualify under this occupancy type, at least one borrower listed on the mortgage must physically occupy the home, signing both the mortgage note and the security instrument.",
      },
    },
    {
      "@type": "Question",
      name: "What criteria must a property meet to qualify as a second home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To classify a property as a second home for underwriting purposes, the real estate must typically be located at least 50 miles away from the borrower's primary residence. Additionally, the borrower must intend to occupy it for part of the year, and it cannot appear to be purchased for rental or investment purposes.",
      },
    },
    {
      "@type": "Question",
      name: "How does an investment property differ from a second home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlike a second home, an investment property is a residential space that the owner does not occupy. Instead, it is acquired primarily to generate rental income or future financial profits. Because of the vacancy and rental risks, lenders enforce different underwriting standards for investment loans.",
      },
    },
    {
      "@type": "Question",
      name: "How do down payment requirements vary across different occupancy types?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Down payment guidelines change significantly by occupancy type. Primary residences offer low-down options, such as 0% for VA/USDA, 3.5% for FHA, and 5% to 25% for conventional loans. Second homes generally require an average of a 10% down payment, while investment properties demand the highest reserves, typically requiring a 20% to 25% down payment depending on the number of units.",
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

export default function OwnerOccupiedSecondHomeInvestmentPage() {
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
          title={<>Difference Between Owner-Occupied, Second Home, and Investment Property?</>}
          excerpt="Occupancy type drives down payment, loan programs, and rates. Compare owner-occupied, second home, and investment property requirements."
          category="Real Estate & Mortgages"
          categoryHref="/real-estate-mortgages/"
          dateLabel="Feb 5, 2025"
          readTime="7 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                When applying for a Arizona mortgage, a borrower&apos;s &ldquo;Occupancy Type&rdquo; is a major
                factor in the amount of down payment required, loan program available, and mortgage interest rate.
                Whether you are purchasing, doing a rate/term refinance or taking equity out of your property
                through a cash out refinance, occupancy type is always considered by the underwriter.
              </p>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Not Sure How Your Property Is Classified?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  The difference between owner-occupied, second homes, and investment properties affects loans and
                  taxes. Get expert guidance today!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="btn-primary"
                  >
                    Get a Free Property Classification Review &rarr;
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="three-types-of-residential-occupancy">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Three Types of Residential Occupancy
                  </h2>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                    Owner Occupied / Primary Residence
                  </h3>
                  <p className="mb-6">
                    According to HUD, a principal residence is a property that will be occupied by the borrower
                    for the majority of the calendar year. At least one borrower must occupy the property and sign
                    the security instrument and the mortgage note for the property to be considered
                    owner-occupied.
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">Second Home</h3>
                  <p className="mb-6">
                    To qualify as a second home, the property typically must be at least 50 miles from the primary
                    residence, and it cannot appear that the real estate is being purchased for rental investment
                    purposes.
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">Investment Property</h3>
                  <p>
                    A property that is not occupied by the owner and is typically utilized for rental income
                    purposes.
                  </p>
                </section>

                <section id="down-payment-requirements">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Down Payment Requirements
                  </h2>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                    Owner Occupied / Primary Residence
                  </h3>
                  <p className="mb-6">
                    Purchases for VA and USDA can go up to 100% financing, while FHA requires 3.5% of the purchase
                    price as a down payment. Conventional financing may require anywhere from 5% – 25% depending
                    on the credit score, county, property type and loan amount.
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">Second Home</h3>
                  <p className="mb-6">
                    Average 10% down for a purchase, and 25% equity for a refinance.
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">Investment Property</h3>
                  <p className="mb-6">
                    Down payment requirements will range from 20-25% depending on the number of units. When doing
                    a cash-out refinance on an investment property with 2-4 units, the required loan to value will
                    need to be 70% or lower to qualify.
                  </p>

                  <p className="text-[15px] italic">
                    *It should be noted that on any high balance loan amount the above mentioned Loan-to-Value
                    (LTV) requirements will change. Credit score requirements also apply.
                  </p>
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

                <p className="text-[15px]">
                  Thanks for listening and reading the Mortgage Brothers Show. Let us know if you have any
                  questions you&apos;d like us to answer on this podcast. You can email your questions to
                  Tom@AZMortgageBrothers.com or Eddie@AZMortgageBrothers.com.
                </p>

                <p className="text-[15px]">
                  Explore the key differences between an owner-occupied second home and an investment property.
                  For further insights, check out our discussion on{" "}
                  <Link
                    href="/detached-guest-home-casita-appraisal-issues/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    detached guest home appraisal issues
                  </Link>
                  , and discover the distinctions between{" "}
                  <Link
                    href="/what-is-the-difference-between-aan-arizona-condo-and-arizona-townhome/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    Arizona condos and townhomes
                  </Link>
                  .
                </p>

                <p className="text-[#5a6b52] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has been
                  prepared for informational purposes only. You should consult your own tax, legal, and accounting
                  advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS #210917 and
                  1618695. Equal housing lender.
                </p>
              </div>
              
              <section id="faqs">
                <FaqAccordion
                  title="Frequently Asked Questions"
                  items={[
                    {
                      q: "What is a primary or owner-occupied residence?",
                      a: <>An owner-occupied or primary residence is a residential property where the borrower intends to live for the majority of the calendar year. To qualify under this occupancy type, at least one borrower listed on the mortgage must physically occupy the home, signing both the mortgage note and the security instrument.</>
                    },
                    {
                      q: "What criteria must a property meet to qualify as a second home?",
                      a: <>To classify a property as a second home for underwriting purposes, the real estate must typically be located at least 50 miles away from the borrower's primary residence. Additionally, the borrower must intend to occupy it for part of the year, and it cannot appear to be purchased for rental or investment purposes.</>
                    },
                    {
                      q: "How does an investment property differ from a second home?",
                      a: <>Unlike a second home, an investment property is a residential space that the owner does not occupy. Instead, it is acquired primarily to generate rental income or future financial profits. Because of the vacancy and rental risks, lenders enforce different underwriting standards for investment loans.</>
                    },
                    {
                      q: "How do down payment requirements vary across different occupancy types?",
                      a: <>Down payment guidelines change significantly by occupancy type. Primary residences offer low-down options, such as 0% for VA/USDA, 3.5% for FHA, and 5% to 25% for conventional loans. Second homes generally require an average of a 10% down payment, while investment properties demand the highest reserves, typically requiring a 20% to 25% down payment depending on the number of units.</>
                    }
                  ]}
                />
              </section>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/detached-guest-home-casita-appraisal-issues/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/lsu-forms-loan-status-updates-and-what-you-need-to-know/"
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