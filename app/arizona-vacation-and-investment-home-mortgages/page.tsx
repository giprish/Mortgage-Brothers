"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const relatedLinks = [
  {
    label: "Lender Deductible Limits",
    href: "/how-high-will-a-lender-allow-your-deductible-to-be/",
  },
  {
    label: "Car Loan & Mortgage Impact",
    href: "/how-does-my-car-loan-payment-affect-my-mortgage/",
  },
  {
    label: "Conventional vs FHA Loans",
    href: "/conventional-home-loans-vs-fha-loans-which-is-right-for-you/",
  },
  {
    label: "Private Money Lenders",
    href: "/top-7-reasons-arizona-investment-home-buyers-choose-private-money-lenders/",
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
      name: "What is the difference between a vacation home and an investment property mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A vacation home (second home) is a property you intend to occupy for a portion of the year, meaning it cannot be a multi-unit property or managed by a rental pool. An investment property is purchased strictly to generate rental income, and the buyer does not intend to live there. Because investment properties carry higher risk, they typically come with slightly higher interest rates and stricter underwriting guidelines.",
      },
    },
    {
      "@type": "Question",
      name: "How much down payment is required for an Arizona vacation home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a vacation home or second home in Arizona, standard conventional guidelines generally require a minimum down payment of 10%. However, putting down 20% or more is often recommended to eliminate the requirement for private mortgage insurance (PMI) and to secure more competitive financing terms.",
      },
    },
    {
      "@type": "Question",
      name: "What down payment do I need for an Arizona investment property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Purchasing a single-family investment property typically requires a minimum down payment of 15% to 20%. For multi-unit investment properties (2 to 4 units), lenders standardly require a down payment of 20% to 25% to offset the added vacancy and financial risks associated with rental real estate.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use future rental income to qualify for an investment mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, lenders frequently allow you to use a portion of the projected rental income from the target property to help qualify for the mortgage. The lender will require an appraisal supplement, typically Fannie Mae Form 1007, to verify the fair market rent of the area, and will generally count up to 75% of that gross expected income toward your qualifying debt-to-income (DTI) ratio.",
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

export default function ArizonaVacationAndInvestmentHomeMortgagesPage() {
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
          <div className="w-[90%] max-w-[1520px] mx-auto px-0 py-3 lg:py-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/home/arizona-vacation-and-investment-home-mortgages.jpg"
              alt="A guide to Arizona vacation and investment home mortgages covering options and strategies"
              width={1920}
              height={1080}
              className="relative z-0 w-full h-auto block max-w-full rounded-md lg:rounded-lg"
            />
          </div>
        </section>

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="w-[90%] max-w-[1520px] mx-auto px-0 sm:px-2 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">
              <h1
                className="text-[#08271B] text-[32px] lg:text-[48px] font-playfair font-normal leading-[1.1] mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Arizona Vacation and Investment Home Mortgages
              </h1>

              <p className="text-[#8a9a7a] text-[14px] mb-8">
                by{" "}
                <Link href="/about-us/" className="text-[#3fb364] hover:underline font-medium">
                  Eddie Knoell
                </Link>{" "}
                | Feb 14, 2025
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                If you are looking for an Arizona mortgage for a second home, vacation home or investment
                property, there are still some good products available. You will need at least a 10% down
                payment for a second home or vacation home. For investment property loans, figure between 20%
                to 25% down payment.{" "}
                <Link
                  href="/fha-home-loans-arizona/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  FHA
                </Link>{" "}
                and{" "}
                <Link href="/va-loans-arizona/" className="text-[#3fb364] font-semibold hover:underline">
                  VA mortgages
                </Link>{" "}
                are not available on these types of properties.
              </p>
              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                Many properties in the Arizona area are bank owned properties and short sales. For instance, if
                you are looking for foreclosure deals, according to RealtyTrac&apos;s data, there are still
                thousands of foreclosure sale auction properties available to purchase, as well as government
                owned foreclosure properties and thousands of bank owned REO&apos;s. Investors and first time
                buyers have been finding great bargains in all neighborhoods and price ranges.
              </p>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Looking for an Arizona Vacation or Investment Mortgage?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Get expert guidance on second home and investment property financing options available in
                  Arizona today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                  >
                    Get Expert Mortgage Advice &rarr;
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
                <section id="now-is-a-good-time-to-buy">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Now is a Good Time to Buy
                  </h2>
                  <p className="mb-5">
                    If you have been waiting, it&apos;s a good time to buy now with low interest rates and
                    affordable inventory. Rental properties are in high demand because may displaced homeowners
                    who lost their homes to foreclosure need to rent a home. Rents are expected to go higher
                    this year so if you are planning on renting out your investment property, you should be able
                    to get a fair price for your rental home. Many investors/buyers are purchasing foreclosures
                    and rehabbing them to either rent out or turn around and sell.
                  </p>
                  <p>
                    So no matter what your intended use, you might want to consider buying a foreclosure or a
                    short sale because they are sold at discounted prices, and you get a property with built in
                    equity. Short sales take longer to close because you have to wait for the seller&apos;s
                    lender to approve the transaction.
                  </p>
                </section>

                <section id="benefits-of-working-with-an-arizona-mortgage-broker">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Benefits of Working with an Arizona Mortgage Broker
                  </h2>
                  <p className="mb-5">
                    It is a good idea to work with an Arizona mortgage broker who can help you sort out all the
                    Arizona mortgage products on the market today and help you with finding the best Arizona
                    mortgage rates. The mortgage broker can shop rates for you because they work with many
                    different lenders. This saves you the time and money of having to look for a mortgage or
                    having to drive to your local bank branch. The mortgage broker can assist you with your loan
                    from beginning to end. Ask your Realtor for a referral if you do not have a mortgage broker.
                    Realtors work with mortgage brokers on a daily basis.
                  </p>
                  <p className="mb-5">
                    The mortgage broker will qualify you for a loan so you and your Realtor know how much home
                    you can afford. The Realtor can then show you those properties that fall into that price
                    range. The broker will also provide you with a pre-qualification letter so you can give it to
                    the seller at the time you make an offer. This way the seller knows you will be able to close
                    on the home. The pre-qualification letter makes your offer stronger.
                  </p>
                  <p>
                    Once you and the seller agree on the terms and sign the contract, the mortgage broker will
                    coordinate the loan processing with the lender to make sure you close your transaction on
                    time. The broker will keep your Realtor advised as well as the title closing agent. The
                    broker can explain the loan documents to you when they are ready to sign so you understand
                    the terms of your mortgage.
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
                  . Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with
                  you and help you through the whole process.
                </p>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with
                    you and help you through the whole process.
                  </p>
                </div>

                <p className="text-[15px]">
                  Explore the ins and outs of vacation and investment home mortgages in Arizona. To get a full
                  view of your financing options, learn about how high a lender will allow your deductible to be
                  on our{" "}
                  <Link
                    href="/how-high-will-a-lender-allow-your-deductible-to-be/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    deductible limits guide
                  </Link>{" "}
                  and discover the impact of car loan payments on your mortgage in our article on{" "}
                  <Link
                    href="/how-does-my-car-loan-payment-affect-my-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    car loan payment effects
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
                <Link
                  href="/how-high-will-a-lender-allow-your-deductible-to-be/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/conventional-home-loans-vs-fha-loans-which-is-right-for-you/"
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
                <p className="text-[#3fb364] text-[14px] font-bold uppercase mb-5">
                  Talk to a Broker Today!
                </p>
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
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all"
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
