import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";
import YoutubeLiteEmbed from '@/app/component/YoutubeLiteEmbed';

export const metadata: Metadata = getSeoMetadata("/lsu-forms-loan-status-updates-and-what-you-need-to-know/");

const relatedLinks = [
  {
    label: "Arizona BINSR Inspection Notices",
    href: "/arizona-binsr-buyer-inspection-notice-and-seller-response/",
  },
  {
    label: "Arizona Prequalification Form",
    href: "/what-you-need-to-know-about-the-arizona-prequalification-form/",
  },
  {
    label: "Mortgage Rates & Interest Deduction",
    href: "/arizona-mortgage-rates-and-the-interest-deduction/",
  },
  {
    label: "Prepayment Penalties",
    href: "/prepayment-penalties-on-your-arizona-mortgage/",
  },
  {
    label: "Buying Down Your Interest Rate",
    href: "/buying-down-your-arizona-interest-rate/",
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
      name: "Arizona LSU Forms (Loan Status Updates) and what you need to know",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When you're buying or selling a home, the LSU is a critical document that updates the seller on how far along the buyer's loan process is.",
      },
    },
    {
      "@type": "Question",
      name: "Breaking Down the LSU Form",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The LSU form is two pages long and contains two key sections: Page 1 mostly repeats the information from the pre-qualification form (loan type, amount, property address, buyer & seller details). Page 2 is a detailed checklist of loan milestones, showing what's been completed and what's still pending.",
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

export default function LsuFormsPage() {
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
          title={<>LSU Forms – Loan Status Updates and what you need to know</>}
          excerpt="We go through the Arizona LSU (Loan Status Updates) form lenders send to sellers throughout a purchase—and what buyers, sellers, and Realtors should watch for."
          category="Real Estate & Mortgages"
          categoryHref="/real-estate-mortgages/"
          dateLabel="Feb 6, 2025"
          readTime="12 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                We go through the LSU (Loan Status Updates) which is an Arizona specific form. This is an
                important form that lenders will need to send to the sellers throughout the purchase
                transaction. We give our insight on the form and highlight the items we think are important
                for seller, buyers, and Realtors to be looking at.
              </p>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <YoutubeLiteEmbed
                  videoId="QeiyCoJ_fcU"
                  title="LSU Forms – Loan Status Updates and what you need to know"
                />
              </div>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Need Help Understanding LSU Forms Loan Status Updates?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  LSU Forms Loan Status Updates keep you informed during the mortgage process. Learn how they
                  work and why they matter.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="btn-primary"
                  >
                    Get Expert Mortgage Advice &rarr;
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <p>
                  Keep up with the latest on loan status updates and essential forms. Enhance your
                  understanding by reviewing our guide on{" "}
                  <Link
                    href="/arizona-binsr-buyer-inspection-notice-and-seller-response/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    inspection notices and seller responses
                  </Link>{" "}
                  and learning about the{" "}
                  <Link
                    href="/what-you-need-to-know-about-the-arizona-prequalification-form/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    prequalification form
                  </Link>
                  . Additionally, stay informed on{" "}
                  <Link
                    href="/arizona-mortgage-rates-and-the-interest-deduction/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    mortgage rates and interest deductions
                  </Link>
                  , understand{" "}
                  <Link
                    href="/prepayment-penalties-on-your-arizona-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    prepayment penalties
                  </Link>
                  , discover tips on{" "}
                  <Link
                    href="/buying-down-your-arizona-interest-rate/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    buying down your interest rate
                  </Link>
                  , explore{" "}
                  <Link
                    href="/arizona-second-mortgages/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    second mortgage options
                  </Link>
                  , and follow{" "}
                  <Link
                    href="/arizona-real-estate-capital-gains-is-back/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    capital gains updates
                  </Link>
                  .
                </p>

                <p className="text-[#5a6b52] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has
                  been prepared for informational purposes only. You should consult your own tax, legal, and
                  accounting advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS
                  #210917 and 1618695. Equal housing lender.
                </p>

                <section id="podcast-transcript">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-6 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Transcript of the Mortgage Brothers Podcast
                  </h2>

                  <div className="space-y-8 text-[15.5px]">
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Arizona LSU Forms (Loan Status Updates): What You Need to Know
                      </h3>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Introduction [00:02]</h3>
                      <p className="mb-3">
                        Welcome to the Mortgage Brothers Podcast! I&apos;m Eddie Knoell, and I&apos;m Tom
                        Knoell. This is our 16th episode, and today we&apos;re diving into something essential
                        for buyers, sellers, and agents: Loan Status Updates (LSU Forms).
                      </p>
                      <p>
                        Not to be confused with LSU football! These forms act as love notes to the sellers,
                        keeping them updated on the progress of the buyer&apos;s loan.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        What is an LSU Form &amp; Why Does It Matter? [00:45]
                      </h3>
                      <p className="mb-3">
                        When you&apos;re buying or selling a home, the LSU is a critical document that updates
                        the seller on how far along the buyer&apos;s loan process is.
                      </p>
                      <p className="mb-2 font-semibold text-[#052316]">Why sellers care:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          Sellers are waiting on the buyer&apos;s loan to be finalized before they can close.
                        </li>
                        <li>
                          They already have a pre-qualification form, but the LSU gives real-time updates.
                        </li>
                      </ul>
                      <p className="mb-3">
                        The Arizona Association of Realtors (AAR) requires LSU forms, just like purchase
                        contracts and pre-qualification forms.
                      </p>
                      <p className="mb-2 font-semibold text-[#052316]">LSU Timeline:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>The contract requires buyers to send at least one LSU to the seller.</li>
                        <li>
                          Due within 10 days of contract acceptance (but many lenders send them much earlier).
                        </li>
                        <li>
                          Our team sends LSU within 2–3 days to keep things moving smoothly.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Breaking Down the LSU Form [01:46]
                      </h3>
                      <p className="mb-3">
                        The LSU form is two pages long and contains two key sections:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          <strong>Page 1:</strong> Mostly repeats the information from the pre-qualification
                          form (loan type, amount, property address, buyer &amp; seller details).
                        </li>
                        <li>
                          <strong>Page 2:</strong> A detailed checklist of loan milestones, showing
                          what&apos;s been completed and what&apos;s still pending.
                        </li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">How It Works:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          Buyers receive the LSU via DocuSign and sign it to acknowledge the status update.
                        </li>
                        <li>
                          The lender then forwards it to the seller&apos;s agent and the buyer&apos;s agent.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        LSU Page 2: Key Loan Milestones [04:43]
                      </h3>
                      <p className="mb-3">
                        Think of this section like a grocery list—a series of checkboxes confirming different
                        stages of loan approval.
                      </p>

                      <h3 className="text-[#052316] text-[17px] font-bold mb-2">
                        Step 1: Contract &amp; Loan Setup
                      </h3>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Line 41: Has the lender received the purchase contract &amp; addendums?</li>
                        <li>Line 42: Has the lender sent out the Loan Estimate (LE)?</li>
                        <li>Line 43: Has the borrower signed the Intent to Proceed?</li>
                        <li>Line 48: Has the borrower paid for the appraisal?</li>
                        <li>Line 49: Has the appraisal been ordered?</li>
                      </ul>
                      <p className="mb-3">
                        The loan estimate must be sent within 3 days of the application. Borrowers must sign
                        the Intent to Proceed before appraisals can be ordered.
                      </p>

                      <h3 className="text-[#052316] text-[17px] font-bold mb-2">
                        Step 2: Interest Rate &amp; Loan Details
                      </h3>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Line 52: Has the buyer locked in their interest rate and loan program?</li>
                      </ul>
                      <p className="mb-3">
                        Red flag: If this box is marked NO, the buyer may not be fully committed to their
                        lender yet.
                      </p>

                      <h3 className="text-[#052316] text-[17px] font-bold mb-2">
                        Step 3: Appraisal &amp; Property Value
                      </h3>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Line 55: Has the appraisal been received?</li>
                        <li>Line 56: Did the appraisal come in at or above purchase price?</li>
                        <li>Line 61: Have all appraisal conditions been met?</li>
                      </ul>
                      <p className="mb-3">
                        If the appraisal is below purchase price, the buyer and seller may need to
                        renegotiate. If the appraisal requires repairs, they must be completed before final
                        loan approval.
                      </p>

                      <h3 className="text-[#052316] text-[17px] font-bold mb-2">
                        Step 4: Loan Approval Process
                      </h3>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Line 59: Has the lender submitted the loan package to underwriting?</li>
                        <li>Line 60: Has the loan received initial approval with conditions?</li>
                        <li>Line 62: Has the loan received final approval (clear to close)?</li>
                      </ul>
                      <p className="mb-3">
                        Initial approval often comes with conditions—small missing documents or
                        clarifications. Final approval (clear to close) means the loan is ready for closing
                        &amp; funding.
                      </p>

                      <h3 className="text-[#052316] text-[17px] font-bold mb-2">
                        Step 5: Final Loan Documents &amp; Closing
                      </h3>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Line 57: Has the Closing Disclosure (CD) been sent to the buyer?</li>
                        <li>
                          Line 58: Has the buyer acknowledged the CD (starts the 3-day waiting period)?
                        </li>
                        <li>Line 63: Have the loan documents been sent to title?</li>
                        <li>Line 64: Have the buyers signed their final loan documents?</li>
                      </ul>
                      <p>
                        The Closing Disclosure must be signed at least 3 days before closing. Loan docs must
                        be signed before escrow can officially close.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Final Thoughts: Why LSU Forms Matter [12:58]
                      </h3>
                      <p className="mb-3">
                        Sellers rely on LSU updates to feel confident in the transaction.
                      </p>
                      <p className="mb-2 font-semibold text-[#052316]">Buyers &amp; agents should:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Send LSU updates quickly after contract acceptance.</li>
                        <li>Make sure LSU forms accurately reflect loan progress.</li>
                        <li>Understand that missing items may slow down closing.</li>
                      </ul>
                      <p className="mb-3">
                        Good news: If everything is checked off early, buyers may close ahead of schedule!
                      </p>
                      <p className="mb-3">
                        [14:02] Questions? Contact us through our{" "}
                        <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                          contact form
                        </Link>
                        .
                      </p>
                      <p>We&apos;re here to make the mortgage process smooth &amp; stress-free!</p>
                    </div>
                  </div>
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
                  href="/how-do-solar-panels-affect-the-mortgage-and-closing-process/"
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