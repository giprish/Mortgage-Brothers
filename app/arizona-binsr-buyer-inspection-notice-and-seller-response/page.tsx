"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

const relatedLinks = [
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
  {
    label: "Capital Gains Are Back",
    href: "/arizona-real-estate-capital-gains-is-back/",
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
      name: "What is the Arizona BINSR in a real estate transaction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The BINSR, which stands for Buyer Inspection Notice and Seller Response, is a standard legal document used in Arizona real estate transactions. It serves as the official platform for the buyer to notify the seller of any physical items or property conditions they disapprove of following their home inspection period.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a buyer have to submit the BINSR in Arizona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under the standard Arizona Real Estate Purchase Contract, a buyer has a default inspection period of 10 days from contract acceptance to complete all physical inspections, review reports, and formally deliver the completed BINSR document to the seller.",
      },
    },
    {
      "@type": "Question",
      name: "What options does a buyer have when completing their portion of the BINSR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When submitting the BINSR, the buyer must choose one of three primary options: accept the premises in its current condition with no repairs, reject the premises entirely and cancel the contract (reclaiming their earnest money), or provide a specific list of disapproved items and give the seller an opportunity to correct them.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a seller have to respond to a buyer's BINSR repair requests?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Once the seller receives the BINSR containing repair requests, they have a strict timeline of 5 days to respond. The seller can agree to correct all disapproved items, refuse to make any repairs, or offer a compromise by agreeing to fix only specific items listed by the buyer.",
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

export default function ArizonaBinsrPage() {
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
          title={<>Arizona BINSR Buyer Inspection Notice and Seller Response</>}
          excerpt="Learn how the Arizona BINSR process works, what buyers and sellers need to know, and how to handle repair requests in a home sale."
          category="Real Estate & Mortgages"
          categoryHref="/real-estate-mortgages/"
          dateLabel="Feb 4, 2025"
          readTime="7 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                Lenders are not involved in the BINSR process directly. We want to discuss how the BINSR and
                home inspection process affects a mortgage indirectly.
              </p>

              <ol className="list-decimal pl-6 space-y-3 text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                <li>Buyer has 10 days by default on the Purchase contract to do their home inspection</li>
                <li>
                  Buyer uses the BINSR form to respond to the seller with any items they would like repaired
                  or remedied
                </li>
                <li>Seller has 5 days to reply to the buyers request</li>
              </ol>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <iframe
                  src="https://www.youtube.com/embed/vShVhawZyn4"
                  title="Arizona BINSR Buyer Inspection Notice and Seller Response"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Need Help Navigating the Arizona BINSR Process?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Understanding the BINSR process is crucial for buyers and sellers. Get expert guidance to
                  ensure a smooth home sale.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                  >
                    Get Expert Advice &rarr;
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
                <section id="appraisal-timing">
                  <p className="mb-5">
                    Lenders need to order the appraisal with no less than 21 days from the close of
                    escrow&hellip;, that being said we typically like to wait to order the appraisal after
                    the{" "}
                    <a
                      href="https://westusa.com/whats-a-binsr-buyers-inspection-notice-and-sellers-response/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      BINSR
                    </a>{" "}
                    has been negotiated OR when we receive a clear signal that there are no deal killers in
                    the home inspection. Lenders should have a conversation about this with buyers and buyers
                    agent to set their expectations.
                  </p>
                  <p>
                    Buyer and Seller should finalize any seller concessions through the standard contract
                    addendum and not through the BINSR. This helps us keep underwriters looking at the BINSR
                    and any inspection issues with the home. That can open up a can of worms.
                  </p>
                </section>

                <p>
                  If you have any questions about this or if you have any questions you&apos;d like us to
                  answer on our podcast, you can submit your questions using our{" "}
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
                  Discover the ins and outs of buyer inspection notices and seller responses. For more
                  insights, check out our guide on the{" "}
                  <Link
                    href="/what-you-need-to-know-about-the-arizona-prequalification-form/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    prequalification form
                  </Link>
                  , learn about{" "}
                  <Link
                    href="/arizona-mortgage-rates-and-the-interest-deduction/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    mortgage rates &amp; interest deductions
                  </Link>
                  , review details on{" "}
                  <Link
                    href="/prepayment-penalties-on-your-arizona-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    prepayment penalties
                  </Link>
                  , find strategies for{" "}
                  <Link
                    href="/buying-down-your-arizona-interest-rate/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    buying down rates
                  </Link>
                  , explore{" "}
                  <Link
                    href="/arizona-second-mortgages/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    second mortgage options
                  </Link>
                  , and see why{" "}
                  <Link
                    href="/arizona-real-estate-capital-gains-is-back/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    capital gains are back
                  </Link>
                  .
                </p>

                <p className="text-[#8a9a7a] text-[13px] leading-relaxed">
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
                        Arizona BINSR: Buyer Inspection Notice and Seller Response Addendum
                      </h3>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Introduction [00:02]</h3>
                      <p className="mb-3">
                        Welcome to the Mortgage Brothers Podcast Show! I&apos;m Eddie Knoell, and I&apos;m
                        Tom Knoell. Today, we&apos;re discussing an essential part of the home buying process
                        in Arizona: the BINSR&mdash;Buyer Inspection Notice and Seller Response Addendum.
                      </p>
                      <p>
                        Many buyers and sellers misunderstand how this form works, and in this episode,
                        we&apos;ll break it down in simple terms.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        What is the BINSR? [00:39]
                      </h3>
                      <p className="mb-3">
                        The BINSR is a formal process within Arizona&apos;s real estate transactions that
                        allows buyers to notify the seller of any issues found during a home inspection. It
                        also provides a way for sellers to respond to those concerns.
                      </p>
                      <p>
                        Once you go under contract, you typically have 10 days to complete your inspections
                        and submit the BINSR to the seller. This is a critical step that allows buyers to
                        request repairs, negotiate credits, or even cancel the purchase based on inspection
                        findings.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Key Sections of the BINSR [01:46]
                      </h3>
                      <p className="mb-3">The BINSR form consists of:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          The Buyer&apos;s Notice &ndash; The buyer lists any requested repairs, asks for a
                          price reduction, or states they are accepting the property as-is.
                        </li>
                        <li>
                          The Seller&apos;s Response &ndash; The seller has the option to agree to all, some,
                          or none of the buyer&apos;s requests.
                        </li>
                        <li>
                          The Buyer&apos;s Final Decision &ndash; After receiving the seller&apos;s response,
                          the buyer must decide whether to proceed with the purchase or cancel the contract
                          within the time frame specified.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        What Happens After the BINSR is Submitted? [03:10]
                      </h3>
                      <p className="mb-3">
                        Once the buyer submits the BINSR, the seller has 5 days to respond. Here&apos;s what
                        can happen:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>The seller agrees to all the requested repairs.</li>
                        <li>The seller agrees to some but not all requested repairs.</li>
                        <li>
                          The seller declines all requests, leaving the buyer to decide whether to proceed or
                          cancel the contract.
                        </li>
                      </ul>
                      <p>
                        If the seller offers a partial repair list, the buyer has 5 additional days to accept
                        or walk away.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Common Mistakes Buyers Make [04:37]
                      </h3>
                      <p className="mb-3">
                        Buyers often misunderstand how the BINSR process works. Here are a few common
                        mistakes:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          Requesting non-essential cosmetic repairs &ndash; Sellers are more likely to agree
                          to safety or structural concerns than minor cosmetic issues.
                        </li>
                        <li>
                          Not understanding that sellers aren&apos;t obligated to fix anything &ndash; The
                          seller can reject all repair requests, and it&apos;s up to the buyer to decide what
                          to do next.
                        </li>
                        <li>
                          Submitting unrealistic demands &ndash; This can lead to the seller rejecting the
                          entire request, potentially causing unnecessary conflicts.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Common Seller Mistakes [06:38]
                      </h3>
                      <p className="mb-3">Sellers also make missteps when responding to the BINSR:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          Automatically rejecting all requests &ndash; This can result in the buyer walking
                          away, causing delays in selling the home.
                        </li>
                        <li>
                          Ignoring the importance of negotiations &ndash; Sellers should carefully consider
                          reasonable repair requests rather than dismissing them outright.
                        </li>
                        <li>
                          Misunderstanding appraisal impacts &ndash; Some repairs may be required for
                          financing (FHA, VA loans), so rejecting them could cause financing issues for the
                          buyer.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Negotiating the BINSR Successfully [08:44]
                      </h3>
                      <p className="mb-3">
                        Both buyers and sellers should approach the BINSR with realistic expectations. The key
                        to a smooth negotiation process is:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          Understanding the home&apos;s condition &ndash; If the house is older, some repairs
                          should be expected.
                        </li>
                        <li>
                          Prioritizing safety and structural repairs &ndash; Sellers are more likely to agree
                          to fixes related to electrical, plumbing, roofing, and HVAC systems.
                        </li>
                        <li>
                          Compromising when needed &ndash; Both parties should be willing to negotiate and
                          find a middle ground.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Final Thoughts [10:52]</h3>
                      <p className="mb-3">
                        The BINSR is not meant to be a second round of price negotiation&mdash;it&apos;s a
                        tool to address real concerns that could impact a home&apos;s livability and safety.
                      </p>
                      <p>
                        Understanding how to navigate this process can help buyers protect their investment
                        and sellers close the deal smoothly.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Need More Help? [11:49]</h3>
                      <p>
                        If you have any questions about the Arizona BINSR or the home-buying process, feel
                        free to reach out to the Mortgage Brothers Team. Don&apos;t forget to like, comment,
                        and subscribe for more mortgage and real estate insights.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/dscr-loan-the-best-alternative-to-hard-money/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/what-you-need-to-know-about-the-arizona-prequalification-form/"
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
              Have questions about financing options? Our experts are here to help with personalized advice
              for any mortgage type. Fill out our form to get started today!
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