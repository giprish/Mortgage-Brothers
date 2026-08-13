import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

export const metadata: Metadata = getSeoMetadata("/arizona-binsr-buyer-inspection-notice-and-seller-response/");

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
                    className="btn-primary"
                  >
                    Get Expert Advice &rarr;
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

                <div className="mb-10 text-center text-[#3a4a3a]">
                  <p className="text-[24px] tracking-widest text-[#a8b898]">&bull;&bull;&bull;</p>
                </div>

                <p>
                  Thanks for listening and reading the Mortgage Brothers Show. Let us know if you have any
                  questions you&apos;d like us to answer on this podcast. You can email your questions to{" "}
                  <a
                    href="mailto:Tom@AZMortgageBrothers.com"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    Tom@AZMortgageBrothers.com
                  </a>{" "}
                  or{" "}
                  <a
                    href="mailto:Eddie@AZMortgageBrothers.com"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    Eddie@AZMortgageBrothers.com
                  </a>
                  .
                </p>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with
                    you and help you through the whole process.
                  </p>
                </div>
                
                <p className="text-[#5a6b52] text-[13px] leading-relaxed">
                  Signature Home Loans LLC does not provide tax, legal, or accounting advice. This material
                  has been prepared for informational purposes only. You should consult your own tax, legal,
                  and accounting advisors before engaging in any transaction. Signature Home Loans NMLS
                  1007154, NMLS #210917 and 1618695. Equal housing lender.
                </p>

                <blockquote className="border-l-4 border-[#3fb364] pl-5 my-8 italic">
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
                </blockquote>
                
                <hr className="my-10 border-t border-[#e8e0d0]" />

                <section id="podcast-transcript">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>Transcript of the Mortgage Brothers Podcast</strong>
                  </h2>

                  <div className="space-y-8 text-[15.5px]">
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Arizona BINSR: Buyer Inspection Notice and Seller Response Addendum</strong>
                      </h3>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3"><strong>Introduction</strong></h3>
                      <p className="mb-3">
                        [00:02]<br />
                        Welcome to the <strong>Mortgage Brothers Podcast Show</strong>! I&apos;m Eddie Knoell, and I&apos;m
                        Tom Knoell. Today, we&apos;re discussing an essential part of the home buying process
                        in Arizona: the <strong>BINSR</strong>&mdash;Buyer Inspection Notice and Seller Response Addendum.
                      </p>
                      <p>
                        Many buyers and sellers misunderstand how this form works, and in this episode,
                        we&apos;ll break it down in simple terms.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>What is the BINSR?</strong>
                      </h3>
                      <p className="mb-3">
                        [00:39]<br />
                        The <strong>BINSR</strong> is a formal process within Arizona&apos;s real estate transactions that
                        allows buyers to <strong>notify the seller</strong> of any issues found during a home inspection. It
                        also provides a way for sellers to respond to those concerns.
                      </p>
                      <p>
                        Once you go under contract, you typically have <strong>10 days</strong> to complete your inspections
                        and submit the <strong>BINSR</strong> to the seller. This is a critical step that allows buyers to
                        request repairs, negotiate credits, or even cancel the purchase based on inspection
                        findings.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Key Sections of the BINSR</strong>
                      </h3>
                      <p className="mb-3">[01:46]<br />The BINSR form consists of:</p>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>
                          <strong>The Buyer&apos;s Notice</strong> &ndash; The buyer lists any <strong>requested repairs</strong>, asks for a
                          price reduction, or states they are accepting the property as-is.
                        </li>
                        <li>
                          <strong>The Seller&apos;s Response</strong> &ndash; The seller has the option to agree to all, some,
                          or none of the buyer&apos;s requests.
                        </li>
                        <li>
                          <strong>The Buyer&apos;s Final Decision</strong> &ndash; After receiving the seller&apos;s response,
                          the buyer must decide whether to <strong>proceed with the purchase</strong> or <strong>cancel the contract</strong>
                          within the time frame specified.
                        </li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>What Happens After the BINSR is Submitted?</strong>
                      </h3>
                      <p className="mb-3">
                        [03:10]<br />
                        Once the buyer submits the BINSR, the seller has <strong>5 days</strong> to respond. Here&apos;s what
                        can happen:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>The seller <strong>agrees</strong> to all the requested repairs.</li>
                        <li>The seller <strong>agrees to some</strong> but not all requested repairs.</li>
                        <li>
                          The seller <strong>declines all requests</strong>, leaving the buyer to decide whether to proceed or
                          cancel the contract.
                        </li>
                      </ul>
                      <p>
                        If the seller offers a partial repair list, the buyer has <strong>5 additional days</strong> to accept
                        or walk away.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Common Mistakes Buyers Make</strong>
                      </h3>
                      <p className="mb-3">
                        [04:37]<br />
                        Buyers often misunderstand how the BINSR process works. Here are a few common
                        mistakes:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Requesting non-essential cosmetic repairs</strong> &ndash; Sellers are more likely to agree
                          to <strong>safety or structural concerns</strong> than minor cosmetic issues.
                        </li>
                        <li>
                          <strong>Not understanding that sellers aren&apos;t obligated to fix anything</strong> &ndash; The
                          seller can reject all repair requests, and it&apos;s up to the buyer to decide what
                          to do next.
                        </li>
                        <li>
                          <strong>Submitting unrealistic demands</strong> &ndash; This can lead to the seller rejecting the
                          entire request, potentially causing unnecessary conflicts.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Common Seller Mistakes</strong>
                      </h3>
                      <p className="mb-3">[06:38]<br />Sellers also make missteps when responding to the BINSR:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Automatically rejecting all requests</strong> &ndash; This can result in the buyer walking
                          away, causing delays in selling the home.
                        </li>
                        <li>
                          <strong>Ignoring the importance of negotiations</strong> &ndash; Sellers should carefully consider
                          reasonable repair requests rather than dismissing them outright.
                        </li>
                        <li>
                          <strong>Misunderstanding appraisal impacts</strong> &ndash; Some repairs may be required for
                          financing (FHA, VA loans), so rejecting them could cause financing issues for the
                          buyer.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Negotiating the BINSR Successfully</strong>
                      </h3>
                      <p className="mb-3">
                        [08:44]<br />
                        Both buyers and sellers should approach the BINSR with realistic expectations. The key
                        to a smooth negotiation process is:
                      </p>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>
                          <strong>Understanding the home&apos;s condition</strong> &ndash; If the house is older, some repairs
                          should be expected.
                        </li>
                        <li>
                          <strong>Prioritizing safety and structural repairs</strong> &ndash; Sellers are more likely to agree
                          to fixes related to <strong>electrical, plumbing, roofing, and HVAC systems</strong>.
                        </li>
                        <li>
                          <strong>Compromising when needed</strong> &ndash; Both parties should be willing to negotiate and
                          find a middle ground.
                        </li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3"><strong>Final Thoughts</strong></h3>
                      <p className="mb-3">
                        [10:52]<br />
                        The BINSR is <strong>not meant to be a second round of price negotiation</strong>&mdash;it&apos;s a
                        tool to address real concerns that could impact a home&apos;s livability and safety.
                      </p>
                      <p>
                        Understanding how to navigate this process can help <strong>buyers protect their investment</strong> and <strong>sellers close the deal smoothly</strong>.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3"><strong>Need More Help?</strong></h3>
                      <p>
                        [11:49]<br />
                        If you have any questions about the Arizona BINSR or the home-buying process, feel
                        free to reach out to the <strong>Mortgage Brothers Team</strong>. Don&apos;t forget to <strong>like, comment,
                        and subscribe</strong> for more mortgage and real estate insights.
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