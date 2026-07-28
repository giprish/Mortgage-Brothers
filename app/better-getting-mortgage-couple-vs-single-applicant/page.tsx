"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const relatedLinks = [
  {
    label: "Managing Employment Gaps",
    href: "/getting-a-mortgage-with-employment-gaps/",
  },
  {
    label: "Credit Card Payoff Strategies",
    href: "/can-i-simply-payoff-credit-cards-to-qualify-for-a-mortgage/",
  },
  {
    label: "Relocating While Remote",
    href: "/can-i-relocate-and-get-a-mortgage-while-working-remotely-out-of-state/",
  },
  {
    label: "Rapid Rescore Boosts Eligibility",
    href: "/how-a-rapid-rescore-can-help-to-get-qualified-for-a-mortgage/",
  },
  {
    label: "DSCR Loan Might Be Right",
    href: "/dscr-loan-the-best-alternative-to-hard-money/",
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
      name: "What are the primary financial benefits of applying for a mortgage as a couple?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Applying for a mortgage as a couple allows lenders to combine both applicants' incomes and assets. This joint financial profile typically lowers the overall debt-to-income (DTI) ratio, helping the couple qualify for a larger loan amount or secure better mortgage terms than they might individually.",
      },
    },
    {
      "@type": "Question",
      name: "How do mortgage lenders evaluate credit scores when a couple applies together?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When a couple applies jointly, both credit histories carry equal weight. Lenders do not average the scores together; instead, underwriting guidelines dictate that they typically use the lower middle credit score of the two applicants to determine eligibility and pricing.",
      },
    },
    {
      "@type": "Question",
      name: "What are the advantages of applying for a home loan as a single applicant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As a single applicant, your qualification rests entirely on your own financial profile. This eliminates any negative surprises or impact from a partner's poor credit history, high individual debt loads, or erratic employment records, allowing you to maintain control over the application process.",
      },
    },
    {
      "@type": "Question",
      name: "Should a couple apply solo if one partner has a poor credit history?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If one partner has a low credit score or significant debt, it may be beneficial to apply as a single applicant using only the spouse with strong financial credentials. However, doing so means the lender will exclude the non-applying partner's income, which could reduce the maximum home purchase budget.",
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

export default function MortgageCoupleVsSingleApplicantPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />
      <div className="h-[72px] w-full shrink-0" aria-hidden />

      <main className="flex-grow relative z-0">
        {/* Featured hero image */}
        <section className="relative z-0 w-full bg-white overflow-hidden">
          <div className="w-[90%] max-w-[1520px] mx-auto px-0 py-3 lg:py-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/home/getting-a-mortgage-as-a-couple-vs-as-a-single-applicant.jpg"
              alt="Comparing the benefits of getting a mortgage as a couple vs. as a single applicant."
              width={1920}
              height={1080}
              className="relative z-0 w-full h-auto block max-w-full rounded-md lg:rounded-lg"
            />
          </div>
        </section>

        {/* Article + sidebar */}
        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="w-[90%] max-w-[1520px] mx-auto px-0 sm:px-2 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">
              <h1
                className="text-[#08271B] text-[30px] sm:text-[38px] lg:text-[44px] font-normal leading-tight mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Which Is Better: Getting a Mortgage As a Couple vs. As a Single Applicant?
              </h1>

              <p className="text-[#8a9a7a] text-[14px] mb-8">
                by{" "}
                <Link href="/about-us/" className="text-[#3fb364] hover:underline font-medium">
                  Eddie Knoell
                </Link>{" "}
                | Feb 3, 2025
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                Getting a mortgage can be a very trying time for you and your spouse, or even just you if
                you&rsquo;re going at it alone. Choosing to co-sign a mortgage can be a very tough decision
                to make; even a simple Google search will show many mixed opinions on the topic. It&rsquo;s
                crucial that you weigh the pros and cons before you make any decision and put your signature
                on the line.
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                Whether you&rsquo;re thinking of applying for a mortgage as a single applicant or as a couple,
                it&rsquo;s crucial that you take the time to understand all of your options and do any background
                research. For instance: taking the time to look at your credit score.
              </p>

              {/* CTA */}
              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Unsure If You Should Apply Alone or With a Partner?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Your mortgage approval and terms can vary depending on how you apply. Let our experts help
                  you decide the best strategy for your home loan.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                  >
                    Get Personalized Mortgage Advice &rarr;
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
                <section id="single-applicant-pros-cons">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What are the pros and cons to getting a mortgage as a single applicant?
                  </h2>
                  <p className="mb-5">
                    As a single applicant the only person you&rsquo;ll have to worry about is you. This can be
                    beneficial if you know you have a good credit history, this means you essentially know what
                    you&rsquo;re getting and there won&rsquo;t be any surprises.
                  </p>
                  <p className="mb-5">
                    However, if you don&rsquo;t have good credit it can be harder to get a fair rate from your mortgage lender.
                    If this is the case it makes sense to spend some time improving your credit, before you go through the process
                    of applying for a mortgage.
                  </p>
                  <p className="mb-5">
                    Also, as a single applicant there&rsquo;s a good chance your income won&rsquo;t be as high as a couple. If this is the case,
                    you may have a smaller down payment, but a longer loan repayment or higher interest rate.
                  </p>
                  <p>Overall, if you make a good income and have good credit then applying for a mortgage should be a straightforward.</p>
                </section>

                <section id="couple-applicant-pros-cons">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What are the pros and cons to getting a mortgage as a couple?
                  </h2>
                  <p className="mb-5">
                    When buying a home as a couple, if your spouse has bad credit history, it can have a negative impact on
                    your financial future. When you apply for a mortgage each of your credit histories holds equal value, so you could
                    end up paying higher interest rates. It&rsquo;s as if both of your credit histories are blended together.
                  </p>
                  <p className="mb-5">
                    If you are interested in getting a mortgage as a couple it can be beneficial to take the time beforehand to raise your credit score.
                    That means obtaining a report from a few major credit bureaus, scanning over each report and taking the necessary steps to raise your credit.
                    Then, once you&rsquo;ve repaired your credit you can get a mortgage with a lower interest rate. It takes an investment of time, but the lowered
                    interest rate from the mortgage lender will be worth it.
                  </p>
                  <p className="mb-5">
                    Overall, the mortgage process as a couple is the same as a single applicant as your incomes and credit histories are combined. However, if this
                    isn&rsquo;t taken into account properly on your end before you begin the process of applying for a mortgage you can run into trouble right away.
                  </p>
                  <p>
                    Obviously, there is no yes or no answer and it depends on your unique set of circumstances more than anything else. Getting a mortgage doesn&rsquo;t have to be
                    a scary process, just make sure you do your research beforehand. In this case, taking the extra time to make sure you or both of you are clear with your decision
                    is imperative.
                  </p>
                </section>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    We&rsquo;re Here With Answers From Experience! Contact Us Today at{" "}
                    <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                      602-535-2171
                    </a>
                    <br />
                    Or reach us using our contact form.
                  </p>
                </div>

                <p className="text-[15px]">
                  Deciding whether to apply as a couple or solo? Deepen your understanding by reading about{" "}
                  <Link
                    href="/getting-a-mortgage-with-employment-gaps/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    managing employment gaps
                  </Link>
                  , exploring{" "}
                  <Link
                    href="/can-i-simply-payoff-credit-cards-to-qualify-for-a-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    credit card payoff strategies
                  </Link>
                  , finding guidance on{" "}
                  <Link
                    href="/can-i-relocate-and-get-a-mortgage-while-working-remotely-out-of-state/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    relocating while remote
                  </Link>
                  , checking out how a{" "}
                  <Link
                    href="/how-a-rapid-rescore-can-help-to-get-qualified-for-a-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    rapid rescore boosts eligibility
                  </Link>
                  , and reviewing why a{" "}
                  <Link
                    href="/dscr-loan-the-best-alternative-to-hard-money/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    DSCR loan might be your best bet
                  </Link>
                  .
                </p>

                <p className="text-[#8a9a7a] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has been prepared for informational purposes only.
                  You should consult your own tax, legal, and accounting advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154,
                  NMLS #210917 and 1618695. Equal housing lender.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/can-i-simply-payoff-credit-cards-to-qualify-for-a-mortgage/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/can-i-relocate-and-get-a-mortgage-while-working-remotely-out-of-state/"
                  className="text-[#8a9a7a] hover:text-[#3fb364] transition-colors"
                >
                  Next Post →
                </Link>
              </div>
            </article>

            {/* Sidebar */}
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

        {/* Tailored solutions */}
        <section className="w-full bg-[#08271B] py-14 lg:py-16 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2
              className="text-white text-[28px] lg:text-[34px] font-normal mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tailored Mortgage Solutions
            </h2>
            <p className="text-[#c8c8b8] text-[15.5px] leading-relaxed mb-7">
              Have questions about financing options? Our experts are here to help with personalized advice for any mortgage type.
              Fill out our form to get started today!
            </p>
            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* Get in touch */}
        <section className="w-full bg-[#f5f0e8] py-16 lg:py-20 border-y border-[#e8e0d0]/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2
              className="text-[#08271B] text-[30px] lg:text-[38px] font-normal leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get in Touch with The Mortgage Brothers
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-8 max-w-2xl mx-auto">
              Ready to take the next step towards your dream home? One of our experienced mortgage professionals will get back to you promptly with personalized solutions tailored to your unique financial situation.
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

        {/* Explore solutions */}
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

