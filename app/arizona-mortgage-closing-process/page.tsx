"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const relatedLinks = [
  {
    label: "Arizona Home Buying Process",
    href: "/arizona-home-buying-process/",
  },
  {
    label: "Arizona Mortgage Closing Costs",
    href: "/arizona-mortgage-closing-costs/",
  },
  {
    label: "Mortgage Approval Process",
    href: "/arizona-mortgage-approval-process/",
  },
  {
    label: "How Fast is Too Fast to Close",
    href: "/how-fast-is-too-fast-to-close-a-mortgage-loan-to-purchase-a-house/",
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
      name: "What are the common prior-to-closing conditions that can cause mortgage delays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Even after initial loan approval, several factors can delay closing. These include lenders requesting updated income or asset documentation, new credit inquiries or opened accounts, employment verification issues, delays in liquidating funds for closing, newly uncovered liens during title and judgment searches, and difficulties securing adequate homeowners or flood insurance coverage.",
      },
    },
    {
      "@type": "Question",
      name: "What essential items must a homebuyer bring to their closing appointment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The two most critical items to bring to your mortgage closing are proper funds to close and proof of identification. Required funds must be in the form of a certified bank check or wire transfer instructions, as personal checks or cash are not accepted. For identification, an unexpired, valid state driver's license, state ID card, or passport is required.",
      },
    },
    {
      "@type": "Question",
      name: "How does the timing of a mortgage closing date affect the transaction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Closing early to mid-month is generally recommended to minimize transaction stress and streamline funding. However, for an FHA loan refinance, it is highly advantageous to close at the very end of the month, because FHA guidelines require the borrower to pay the entire month's interest regardless of the specific day they close. Additionally, borrowers should avoid closing on a Friday, as delays could make them responsible for paying interest on both the old and new loans over the weekend.",
      },
    },
    {
      "@type": "Question",
      name: "What are the final legal steps required to officially close on an Arizona property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After the buyer and seller sign all legal closing documents—including the final loan application, Closing Disclosure, Promissory Note, and the Deed of Trust—the title company returns the package to the lender for final review. Once approved, the lender releases the funds to the title company, and the escrow agent submits the deed to the county recorder's office. Ownership officially transfers to the buyer only after the deed is recorded.",
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

export default function ArizonaMortgageClosingProcessPage() {
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
              src="/home/arizona-mortgage-closing-process.jpg"
              alt="A detailed explanation of the Arizona mortgage closing process for homebuyers."
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
                Arizona Mortgage Closing Process
              </h1>

              <p className="text-[#8a9a7a] text-[14px] mb-8">
                by{" "}
                <Link href="/about-us/" className="text-[#3fb364] hover:underline font-medium">
                  Eddie Knoell
                </Link>{" "}
                | Feb 10, 2025
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                As we&apos;ve mentioned in other helpful articles, the{" "}
                <Link
                  href="/arizona-home-buying-process/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  home buying process
                </Link>{" "}
                is packed full of paperwork, key dates and contracts plus daily market movements and checklists
                that can fluster even the most experienced real estate investor!
              </p>
              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                We&apos;ve also mentioned before how important it is to have a solid, professional real estate
                buying team assembled. We stress again how important this is in order to assure a smooth,
                painless process. Remember, these professionals can close upward of 20 transactions a month where
                you might purchase a few homes in your lifetime!
              </p>
              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                The mortgage loan closing process is often defined as the most critical part of the process but
                it&apos;s also where things can go terribly wrong and where a professional team really proves its
                value.
              </p>
              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                If all of the initial questions, concerns and documentation has been done properly early on in
                the{" "}
                <Link
                  href="/arizona-mortgage-approval-process/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  Arizona mortgage loan approval process
                </Link>{" "}
                as well as the home shopping process then you should feel confident that the closing should go
                smoothly. However, there are still a few things to make sure are in order prior to the close.
              </p>
              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                Regardless of the pre-approval and/or mortgage loan commitment letter, there are other conditions
                that must be met. Do NOT let your guard down just because things are looking good! Something as
                simple as an updated pay stub or a small change in your credit score might bring everything to a
                grinding halt.
              </p>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Ready for a Smooth Closing?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Our team helps Arizona buyers clear prior-to-closing conditions and prepare for signing day.
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
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="prior-to-closing-conditions">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Prior-To-Closing conditions
                  </h2>
                  <p className="mb-5">Here are Six Prior-To-Closing conditions that could cause delays:</p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                    Updated Income/Asset Documentation
                  </h3>
                  <p className="mb-5">
                    Although you&apos;ve supplied your Arizona mortgage loan lender with piles of paperwork, be
                    sure to save all of your new paystubs and financial statements throughout the process. The
                    odds are good that your lender might ask for the most current documents so be prepared.
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-2">Credit Inquiries</h3>
                  <p className="mb-5">
                    Be aware that your lender might request a new credit report just before your closing to see if
                    there are any changes. If the underwriter begins uncovering surprises, they might hold up the
                    process to get to the bottom of things. Be sure you bring to the attention of your team
                    anything that might be unusual which might cause a delay.
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-2">Employment Verification</h3>
                  <p className="mb-5">
                    On more than one occasion during the process, your AZ mortgage loan lender will confirm that
                    you&apos;re actively employed. Again, anything unusual here might cause a delay so be sure to
                    inform your team of any odd events that might be forthcoming.
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-2">Funds for Closing</h3>
                  <p className="mb-5">
                    Mortgage lenders will want to source where every dollar for the upcoming transaction is coming
                    from and will want to verify the deposits to your bank account. If you&apos;re liquidating
                    investments or drawing from a retirement account you&apos;ll want to do this sooner rather
                    than later!
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-2">Title and Judgment Searches</h3>
                  <p className="mb-5">
                    Title and judgment searches are typically performed later in the process. These searches could
                    reveal judgments against your name or the sellers along with liens against the property. All
                    of these issues must be cleared up prior to closing.
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                    Homeowners and Flood Insurance Coverage
                  </h3>
                  <p>
                    Mortgage lenders will be sure to review your policies a few days before closing to make sure
                    you have enough coverage and that&apos;s being accounted for in your monthly payment. This
                    coverage can sometimes be difficult to obtain so make sure you&apos;re working on this early.
                  </p>
                </section>

                <section id="items-to-bring-to-closing">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Items To Bring To Closing
                  </h2>
                  <p className="mb-5">
                    Your real estate agent will likely supply you with a checklist of documents and items to bring
                    to your closing. This can be a fairly detailed list, but the two most important items are:
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-2">Funds To Close</h3>
                  <p className="mb-5">
                    If you are required to bring in your down payment or other funds for closing, you will need a
                    certified check from your bank. A personal check or a bag full of cash just won&apos;t do!
                    Make sure you know well in advance what the total amount will be so you can head to the bank
                    and get that certified check.
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-2">Proof of Identification</h3>
                  <p>
                    Your official drivers license or state ID card will be fine. You could also bring a passport
                    as well…as long as you can prove that you are really you!
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
                        Does it matter what day of the month I close on?
                      </h3>
                      <p>
                        If you&apos;re more concerned about successfully closing with the least amount of stress,
                        then early to mid month is usually the best time to close. It really comes down to the
                        timing of the money and how it will be applied to the mortgage loan. Regardless, pay now
                        or pay later but it all evens out at the end of the process.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        I am refinancing an FHA loan. Will it benefit me to close in the beginning of the month?
                      </h3>
                      <p>
                        No. In fact, FHA refinances should always close at the END of the month because you are
                        responsible for the entire month&apos;s interest.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        Should I be concerned about the closing date on a conventional Arizona mortgage loan
                        refinance?
                      </h3>
                      <p>
                        Not really. You can save a few dollars by closing early in the month but it won&apos;t
                        amount to much. You WILL want to avoid closing on a Friday since you could be responsible
                        for the interest due on both loans over the weekend.
                      </p>
                    </div>
                  </div>
                </section>

                <p>
                  If you have any questions, call us at{" "}
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
                  href="/arizona-home-buying-process/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/arizona-mortgage-closing-costs/"
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
