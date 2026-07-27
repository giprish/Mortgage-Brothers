"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const relatedLinks = [
  {
    label: "Arizona Mortgage Closing Costs",
    href: "/arizona-mortgage-closing-costs/",
  },
  {
    label: "Ultimate Guide to Your First Mortgage",
    href: "/ultimate-guide-first-mortgage/",
  },
  {
    label: "Arizona Mortgage Closing Process",
    href: "/arizona-mortgage-closing-process/",
  },
  {
    label: "Refinancing Arizona",
    href: "/refinancing-arizona/",
  },
  {
    label: "FHA Streamline Refinance",
    href: "/fha-streamline-refinance-arizona/",
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
      name: "What are the primary reasons an Arizona homeowner should consider refinancing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A mortgage is typically a homeowner's largest debt, making an annual review essential. The top four reasons to refinance an Arizona home loan include taking advantage of a drop in market interest rates, lowering your existing monthly payment, consolidating high-interest debts, or changing your specific mortgage program type.",
      },
    },
    {
      "@type": "Question",
      name: "How do you accurately calculate the net benefit of refinancing a home loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To calculate the true benefit, homeowners must look past simple 'cash flow' savings and focus on total interest savings over the life of the loan. While comparing monthly payments reveals immediate monthly breathing room, your long-term savings depend directly on your current amortization schedule and the upfront cost of refinancing.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a Cash-Out Refinance and a HELOC for home improvements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A cash-out refinance replaces your existing primary mortgage with a completely new, larger first loan, allowing you to pocket the equity difference. In contrast, a Home Equity Line of Credit (HELOC) or Home Equity Loan acts as a separate 'second mortgage' that holds a subordinate position on your property title, typically carrying slightly higher interest rates due to the increased risk to the lender.",
      },
    },
    {
      "@type": "Question",
      name: "Is there truly such a thing as a 'No Cost' mortgage refinance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Technically, no. Every mortgage refinance incurs processing and closing costs. In a heavily advertised 'no cost' refinance, the lender simply structures the loan with a slightly higher interest rate, using that premium to cover your closing fees on your behalf rather than requiring cash out of pocket.",
      },
    },
    {
      "@type": "Question",
      name: "How soon can you refinance after purchasing or previously refinancing a home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As a standard rule of thumb, lenders prefer that you wait until after making your 6th scheduled monthly payment before executing a new refinance. However, exceptions do exist depending on the loan program, and it is highly recommended to review your initial loan terms to ensure no short-term prepayment penalties apply.",
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

export default function ArizonaRefinanceProcessPage() {
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
              src="/home/arizona-refinance-process.jpg"
              alt="A detailed explanation of the Arizona refinance process for homeowners"
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
                Arizona Refinance Process
              </h1>

              <p className="text-[#8a9a7a] text-[14px] mb-8">
                by{" "}
                <Link href="/about-us/" className="text-[#3fb364] hover:underline font-medium">
                  Eddie Knoell
                </Link>{" "}
                | Feb 10, 2025
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                Refinancing an Arizona mortgage loan is simply the process of acquiring a new loan to pay off an
                existing lender.
              </p>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Refinance with Confidence—Connect with Our Experts!
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Ready to streamline your refinancing journey? Contact Arizona Mortgage Brothers for
                  personalized advice on the Arizona Refinance Process.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                  >
                    Get Pre-Approved &rarr;
                  </Link>
                  <Link
                    href="/contact-us/"
                    className="inline-flex items-center gap-2 text-[#3fb364] hover:underline text-[15px] font-semibold px-4 py-3 transition-all"
                  >
                    Contact Us Today
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="four-reasons-to-refinance">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Four Reasons to Refinance
                  </h2>
                  <p className="mb-5">
                    A mortgage loan is generally the largest debt that most homeowners will need to manage.
                    It&apos;s a good idea to review your real estate finance portfolio a check-up annually.
                  </p>
                  <p className="mb-4">
                    There are many reasons that a homeowner may choose to refinance their mortgage loan, but the
                    top four reasons are;
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Drop in mortgage rates</li>
                    <li>Lowering current mortgage payments</li>
                    <li>Debt consolidation</li>
                    <li>Changing mortgage programs</li>
                  </ul>
                </section>

                <section id="calculating-the-net-benefit-of-a-refinance">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Calculating the Net Benefit of a Refinance
                  </h2>
                  <p>
                    You certainly don&apos;t want to refinance unless you receive a benefit! Calculating that net
                    benefit can be a bit confusing, however. You can make this calculation easier by focusing on
                    the lowering of the interest rate. Again, there are many reasons to refinance but lowering the
                    rate is the most popular.
                  </p>
                </section>

                <section id="heloc-or-cash-out-refinance">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Should I get a Home Equity Line of Credit or Cash-Out Refinance to make home improvements?
                  </h2>
                  <p className="mb-5">
                    Many homeowners are interested in making improvements to their property without tapping into
                    their savings or investment accounts. Two options available are a Home Equity Line of Credit
                    or a Cash-Out Refinance.
                  </p>
                  <p className="mb-5">
                    There is also a Home Equity Loan which, unlike a Line of Credit, is a lump-sum given to the
                    borrower paid back through fixed payments.
                  </p>
                  <p>
                    Both a Line of Credit and a Home Equity Loan are what&apos;s called a &quot;subordinate
                    position&quot; to the first loan and usually referred to as a &quot;Second Mortgage&quot;.
                    Because of the risk taken by a lender in this case, the rates are usually a little higher.
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
                        Is there such a thing as a &quot;No Cost&quot; mortgage?
                      </h3>
                      <p>
                        We get this question a lot. Technically speaking, there are always costs, it just depends
                        on who is paying them. Either you (the borrower) will pay the closing costs OR the lender
                        will pay them. Even though you may hear or read deceiving advertising that gives you the
                        impression that you can get a loan with no closing costs, they are not being forthcoming.
                        If you don&apos;t want to pay any closing costs, the lender will structure (increase the
                        interest rate) so that the lender will pay them.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        How long do I have to wait to refinance after a purchase transaction?
                      </h3>
                      <p>
                        A good rule of thumb is after your 6th scheduled payment, but there are exceptions. It is
                        wise to discuss this with your lender at the time of your initial application to be sure
                        there are no short-term penalties involved with a quick refinance. Another thing to
                        consider is the cost of a refinance. If you watch the market closely and think that a quick
                        refinance may be a possibility, it may be more beneficial to purchase points rather than
                        having a refinance.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        I&apos;ve heard that you should only refinance if there is at least a 1% drop in my
                        mortgage rate. Is this true?
                      </h3>
                      <p>
                        The answer is…every mortgage is different. Sometimes 1/2% could be beneficial, sometimes
                        1% may not be!
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        Couldn&apos;t I simply compare my current payment to the proposed payment and figure out
                        my benefit?
                      </h3>
                      <p>
                        This is an easy way to look at your &quot;cash flow&quot; savings, but depending on your
                        amortization schedule, the overall cost savings can be very different. Over the life of
                        the mortgage loan you may or may not save money, but it might benefit your current cash
                        flow.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        Is it easier to refinance with my current mortgage company?
                      </h3>
                      <p>
                        Sometimes your current Arizona mortgage lender can help to reduce documentation that&apos;s
                        required, but they make up for that with other costs. Make sure that you check to assure
                        the best deal.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        Will I automatically qualify for a refinance?
                      </h3>
                      <p>
                        No. You will have to qualify for a refinance, however certain programs will allow for a
                        reduced quantity of documentation such as the{" "}
                        <Link
                          href="/fha-home-loans-arizona/"
                          className="text-[#3fb364] font-semibold hover:underline"
                        >
                          FHA
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/fha-streamline-refinance-arizona/"
                          className="text-[#3fb364] font-semibold hover:underline"
                        >
                          FHA Streamline
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </section>

                <p>
                  If you have any questions about refinancing, call us at{" "}
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

                <p className="text-[#8a9a7a] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has been
                  prepared for informational purposes only. You should consult your own tax, legal, and accounting
                  advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS #210917 and
                  1618695. Equal housing lender.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/arizona-mortgage-closing-costs/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/ultimate-guide-first-mortgage/"
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
