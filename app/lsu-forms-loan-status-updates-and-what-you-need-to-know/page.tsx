import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import JsonLd from "@/app/component/JsonLd";
import { buildArticleSchemas } from "@/lib/seo/structured-data";
import FaqAccordion from "../component/FaqAccordion";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";
import YoutubeLiteEmbed from '@/app/component/YoutubeLiteEmbed';
import {
  TranscriptAlertLine,
  TranscriptCheckHeading,
  TranscriptCheckItem,
  TranscriptEmojiItem,
  TranscriptLightbulbLine,
  TranscriptList,
  TranscriptMicLine,
  TranscriptPhoneLine,
  TranscriptPinLine,
  TranscriptPointItem,
  TranscriptTvLine,
} from "@/app/component/TranscriptIcons";

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
  {
    label: "Second Mortgage Options",
    href: "/arizona-second-mortgages/",
  },
  {
    label: "Capital Gains Updates",
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

const articleFaqs = [
  { question: "Arizona LSU Forms (Loan Status Updates) and what you need to know", answer: "When you're buying or selling a home, the LSU is a critical document that updates the seller on how far along the buyer's loan process is." },
  { question: "Breaking Down the LSU Form", answer: "The LSU form is two pages long and contains two key sections: Page 1 mostly repeats the information from the pre-qualification form (loan type, amount, property address, buyer & seller details). Page 2 is a detailed checklist of loan milestones, showing what's been completed and what's still pending." },
] as const;

const articleJsonLd = buildArticleSchemas({
  blog: {
    pathname: "/lsu-forms-loan-status-updates-and-what-you-need-to-know/",
    headline: "LSU Forms – Loan Status Updates and what you need to know",
    description: "We go through the Arizona LSU (Loan Status Updates) form lenders send to sellers throughout a purchase—and what buyers, sellers, and Realtors should watch for.",
    datePublished: "2025-02-06",
    articleSection: "Real Estate & Mortgages",
  },
  faqs: [...articleFaqs],
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Real Estate & Mortgages", path: "/real-estate-mortgages/" },
    { name: "LSU Forms – Loan Status Updates and what you need to know", path: "/lsu-forms-loan-status-updates-and-what-you-need-to-know/" },
  ],
});

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-[#3fb364] shrink-0"
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
      <JsonLd data={articleJsonLd} />

      <Navbar />

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
                    href="#get-pre-approved"
                    className="btn-primary"
                  >
                    Get Expert Mortgage Advice
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <blockquote className="border-l-4 border-[#3fb364] pl-5 my-8 italic">
                  <p className="text-[15px]">
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
                </blockquote>

                <section id="frequently-asked-questions">
                  <FaqAccordion
                    title="Frequently Asked Questions"
                    items={articleFaqs.map((faq) => ({
                      q: faq.question,
                      a: faq.answer,
                    }))}
                  />
                </section>



                <section id="podcast-transcript">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-6 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>Transcript of the Mortgage Brothers Podcast</strong>
                  </h2>

                  <div className="space-y-8 text-[15.5px]">
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Arizona LSU Forms (Loan Status Updates): What You Need to Know</strong>
                      </h3>
                      <TranscriptMicLine className="mb-3">
                        (00:02) Welcome to the <strong>Mortgage Brothers Podcast!</strong> I&apos;m{" "}
                        <strong>Eddie Knoell</strong>, and I&apos;m <strong>Tom Knoell</strong>. This is{" "}
                        <strong>our 16th episode</strong>, and today we&apos;re diving into something{" "}
                        <strong>essential for buyers, sellers, and agents</strong>:
                      </TranscriptMicLine>
                      <TranscriptPinLine className="mb-3">
                        <strong>Loan Status Updates (LSU Forms)</strong>
                      </TranscriptPinLine>
                      <TranscriptAlertLine>
                        <strong>Not to be confused with LSU football!</strong> These forms act as{" "}
                        <em>love notes</em> to the sellers, keeping them updated on the progress of the
                        buyer&apos;s loan.
                      </TranscriptAlertLine>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>What is an LSU Form &amp; Why Does It Matter?</strong>
                      </h3>
                      <TranscriptList className="mb-3">
                        <TranscriptEmojiItem emoji="🏡">
                          (00:45) When you&apos;re buying or selling a home, the{" "}
                          <strong>LSU is a critical document</strong> that updates the seller on how far along
                          the buyer&apos;s loan process is.
                        </TranscriptEmojiItem>
                      </TranscriptList>
                      <TranscriptList className="mb-3">
                        <TranscriptPointItem>
                          <strong>Why sellers care:</strong>
                        </TranscriptPointItem>
                      </TranscriptList>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          Sellers are <strong>waiting on the buyer&apos;s loan</strong> to be finalized before
                          they can close.
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          They already have a <strong>pre-qualification</strong> form, but the LSU gives
                          real-time updates.
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <TranscriptList className="mb-3">
                        <TranscriptEmojiItem emoji="📜">
                          The <strong>Arizona Association of Realtors</strong> (
                          <a
                            href="https://www.aaronline.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#3fb364] font-semibold hover:underline"
                          >
                            AAR
                          </a>
                          ) requires LSU forms, just like purchase contracts and pre-qualification forms.
                        </TranscriptEmojiItem>
                      </TranscriptList>
                      <TranscriptCheckHeading>LSU Timeline:</TranscriptCheckHeading>
                      <TranscriptList>
                        <TranscriptCheckItem>
                          The contract <strong>requires</strong> buyers to send at least <strong>one LSU</strong>{" "}
                          to the seller.
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          <strong>Due within 10 days</strong> of contract acceptance (but many lenders send
                          them much earlier).
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          Our team sends LSU <strong>within 2-3 days</strong> to keep things moving smoothly.
                        </TranscriptCheckItem>
                      </TranscriptList>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Breaking Down the LSU Form</strong>
                      </h3>
                      <p className="mb-3">
                        (01:46) The <strong>LSU form is two pages long</strong> and contains{" "}
                        <strong>two key sections:</strong>
                      </p>
                      <TranscriptList className="mb-3">
                        <TranscriptEmojiItem emoji="1️⃣">
                          <strong>Page 1:</strong> Mostly repeats the information from the{" "}
                          <strong>pre-qualification form</strong> (loan type, amount, property address, buyer
                          &amp; seller details).
                        </TranscriptEmojiItem>
                        <TranscriptEmojiItem emoji="2️⃣">
                          <strong>Page 2:</strong> A detailed <strong>checklist</strong> of loan milestones,
                          showing what&apos;s been completed and what&apos;s still pending.
                        </TranscriptEmojiItem>
                      </TranscriptList>
                      <TranscriptList className="mb-3">
                        <TranscriptEmojiItem emoji="📑">
                          <strong>How It Works:</strong>
                        </TranscriptEmojiItem>
                      </TranscriptList>
                      <TranscriptList>
                        <TranscriptCheckItem>
                          Buyers <strong>receive the LSU via DocuSign</strong> and sign it to acknowledge the
                          status update.
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          The lender then forwards it to the <strong>seller&apos;s agent</strong> and the{" "}
                          <strong>buyer&apos;s agent</strong>.
                        </TranscriptCheckItem>
                      </TranscriptList>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>LSU Page 2: Key Loan Milestones</strong>
                      </h3>
                      <TranscriptPinLine className="mb-3">
                        (04:43) <strong>Think of this section like a grocery list</strong>&mdash;a series of
                        checkboxes confirming different stages of loan approval.
                      </TranscriptPinLine>
                      <p className="mb-3">Here&apos;s what each line means:</p>

                      <h3 className="text-[#052316] text-[17px] font-bold mb-2">
                        <strong>Step 1: Contract &amp; Loan Setup</strong>
                      </h3>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          <strong>Line 41:</strong> Has the lender received the <strong>purchase contract</strong>{" "}
                          &amp; addendums?
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          <strong>Line 42:</strong> Has the lender sent out the <strong>Loan Estimate (LE)</strong>
                          ?
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          <strong>Line 43:</strong> Has the borrower signed the <strong>Intent to Proceed</strong>
                          ?
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          <strong>Line 48:</strong> Has the borrower paid for the <strong>appraisal</strong>?
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          <strong>Line 49:</strong> Has the <strong>appraisal been ordered</strong>?
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <TranscriptLightbulbLine className="mb-3">
                        <strong>Why this matters:</strong>
                      </TranscriptLightbulbLine>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          The loan estimate must be sent <strong>within 3 days</strong> of the application.
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          Borrowers must sign the <strong>Intent to Proceed</strong> before appraisals can be
                          ordered.
                        </TranscriptCheckItem>
                      </TranscriptList>

                      <h3 className="text-[#052316] text-[17px] font-bold mb-2">
                        <strong>Step 2: Interest Rate &amp; Loan Details</strong>
                      </h3>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          <strong>Line 52:</strong> Has the buyer <strong>locked in their interest rate</strong>{" "}
                          and loan program?
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <TranscriptAlertLine className="mb-3">
                        <strong>Red flag:</strong> If this box is marked <strong>NO</strong>, the buyer may not
                        be fully committed to their lender yet.
                      </TranscriptAlertLine>

                      <h3 className="text-[#052316] text-[17px] font-bold mb-2">
                        <strong>Step 3: Appraisal &amp; Property Value</strong>
                      </h3>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          <strong>Line 55:</strong> Has the <strong>appraisal been received</strong>?
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          <strong>Line 56:</strong> Did the appraisal <strong>come in at or above purchase price</strong>
                          ?
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          <strong>Line 61:</strong> Have all <strong>appraisal conditions</strong> been met?
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <TranscriptLightbulbLine className="mb-3">
                        <strong>Why this matters:</strong>
                      </TranscriptLightbulbLine>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          If the appraisal is below purchase price, the buyer and seller may need to
                          renegotiate.
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          If the appraisal requires <strong>repairs</strong>, they must be completed before
                          final loan approval.
                        </TranscriptCheckItem>
                      </TranscriptList>

                      <h3 className="text-[#052316] text-[17px] font-bold mb-2">
                        <strong>Step 4: Loan Approval Process</strong>
                      </h3>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          <strong>Line 59:</strong> Has the lender <strong>submitted the loan package</strong> to
                          underwriting?
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          <strong>Line 60:</strong> Has the loan received <strong>initial approval with conditions</strong>
                          ?
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          Initial approval often comes <strong>with conditions</strong>&mdash;small missing
                          documents or clarifications.
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          <strong>Line 62:</strong> Has the loan received{" "}
                          <strong>final approval (clear to close)</strong>?
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <TranscriptList className="mb-3">
                        <TranscriptEmojiItem emoji="🎉">
                          <strong>This is the BIG ONE!</strong> The final approval means the loan is ready for{" "}
                          <strong>closing &amp; funding</strong>.
                        </TranscriptEmojiItem>
                      </TranscriptList>

                      <h3 className="text-[#052316] text-[17px] font-bold mb-2 mt-6">
                        <strong>Step 5: Final Loan Documents &amp; Closing</strong>
                      </h3>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          <strong>Line 57:</strong> Has the <strong>Closing Disclosure (CD)</strong> been sent to
                          the buyer?
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          <strong>Line 58:</strong> Has the buyer <strong>acknowledged the CD</strong> (starts
                          the 3-day waiting period)?
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          <strong>Line 63:</strong> Have the <strong>loan documents been sent to title</strong>?
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          <strong>Line 64:</strong> Have the <strong>buyers signed their final loan documents</strong>
                          ?
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <TranscriptList>
                        <TranscriptCheckItem>
                          The <strong>Closing Disclosure must be signed at least 3 days before closing</strong>.
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          <strong>Loan docs must be signed</strong> before escrow can officially close.
                        </TranscriptCheckItem>
                      </TranscriptList>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Final Thoughts: Why LSU Forms Matter</strong>
                      </h3>
                      <p className="mb-3">
                        (12:58) Sellers rely on LSU updates to feel confident in the transaction.
                      </p>
                      <TranscriptList className="mb-3">
                        <TranscriptPointItem>
                          <strong>Buyers &amp; agents should:</strong>
                        </TranscriptPointItem>
                      </TranscriptList>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          Send LSU updates <strong>quickly</strong> after contract acceptance.
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          Make sure LSU forms <strong>accurately reflect loan progress</strong>.
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          Understand that <strong>missing items may slow down closing</strong>.
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <TranscriptLightbulbLine className="mb-3">
                        <strong>Good news:</strong> If everything is checked off <strong>early</strong>, buyers
                        may <strong>close ahead of schedule</strong>!
                      </TranscriptLightbulbLine>
                      <p className="mb-3">
                        (14:02) <strong>Questions?</strong>
                      </p>
                      <TranscriptPhoneLine className="mb-3">Contact us!</TranscriptPhoneLine>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          <strong>Email us at:</strong>{" "}
                          <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                            Contact Form
                          </Link>
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <TranscriptTvLine className="mb-3">
                        <strong>Like &amp; subscribe</strong> if this helped you!
                      </TranscriptTvLine>
                      <p>
                        We&apos;re here to make the mortgage process <strong>smooth &amp; stress-free!</strong>
                      </p>
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
            <Link
              href="#get-pre-approved"
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