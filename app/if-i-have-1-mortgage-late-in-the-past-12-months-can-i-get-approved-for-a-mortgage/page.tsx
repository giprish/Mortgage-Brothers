import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";
import YoutubeLiteEmbed from '@/app/component/YoutubeLiteEmbed';

export const metadata: Metadata = getSeoMetadata("/if-i-have-1-mortgage-late-in-the-past-12-months-can-i-get-approved-for-a-mortgage/");

const relatedLinks = [
  {
    label: "Getting a Mortgage with Employment Gaps",
    href: "/getting-a-mortgage-with-employment-gaps/",
  },
  {
    label: "Will Commissions Count Towards a Loan?",
    href: "/get-part-income-commission-can-use-qualify-loan/",
  },
  {
    label: "How to Count Commissions and Bonuses",
    href: "/how-to-count-commissions-and-bonuses-and-tips/",
  },
  {
    label: "Couple vs Single Applicant",
    href: "/better-getting-mortgage-couple-vs-single-applicant/",
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
      name: "If I have 1 late mortgage payment in the past 12 months can I get approved for a mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conventional Financing is a bit stricter than FHA. They only allow for one 30-day late. However, you are not guaranteed to be approved if you're under this line, but you will be eligible as long as you don't have no more than one 30-day late.",
      },
    },
    {
      "@type": "Question",
      name: "How are VA Loans impacted by late mortgage payments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VA loans have the same policy as Conventional Financing when it comes to past late mortgage payments. You can only have one 30-day late.",
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

export default function MortgageLateApprovalPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>If I have 1 Mortgage Late in the Past 12 Months, Can I Get Approved for a Mortgage?</>}
          excerpt="One late mortgage payment doesn’t always mean denial. See how FHA, Conventional, and VA treat 30-day lates—and what underwriters look for."
          category="Mortgage Qualifications"
          categoryHref="/mortgage-qualifications/"
          dateLabel="Dec 30, 2024"
          readTime="9 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                In this post, we&apos;re talking about mortgage rates and if you can qualify if you have a late
                mortgage in your payment history. This is a situation that happens to a lot of folks, and we get
                calls all the time asking this question. In short, absolutely. It&apos;s still possible to get a
                mortgage if you&apos;ve been late on one in the past. There are lots of reasons people are late.
                Sometimes the bank is miscommunicating their payments, sometimes it&apos;s a technology issue.
                It&apos;s not always in your hands.
              </p>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <YoutubeLiteEmbed
                  videoId="TU3XCAC8BY0"
                  title="If I have 1 Mortgage Late in the Past 12 Months, Can I Get Approved for a Mortgage?"
                />
              </div>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  One Late Payment? You Still Have Options
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Think a late mortgage payment will hold you back? Discover what lenders really look for and how
                  you can still secure mortgage approval. Let us guide you through the process.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="btn-primary"
                  >
                    Find Out Your Options &rarr;
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="what-does-the-underwriter-look-at">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What does the underwriter look at when it comes to approving you?
                  </h2>
                  <p>
                    Well, the first thing they&apos;re going to be looking at is your full credit report.
                    Unfortunately, the truth of the matter is, if you have a lot of late payments, if life has
                    been tough financially, and if you haven&apos;t been able to make car payments or house
                    payments, your credit is going to be low. But, if your late payment is an isolated event and
                    you have one late mortgage, possibly two, and everything else is okay on your credit, chances
                    are you&apos;re going to get approved. Basically, they want to know you&apos;re reliable. How
                    would you feel if you were in their shoes?
                  </p>
                </section>

                <section id="how-does-the-fha-handle-late-payments">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    How does the FHA handle late payments?
                  </h2>
                  <p>
                    FHA financing is pretty tolerant. With them, you can have no more than two 30-day mortgage
                    lates, which is when you make a payment right after the 30-day due period. Now, if you have a
                    60-day late, which is when you let 60 days go by and then you make a payment, you&apos;re
                    going to run into a problem, since there are no programs that allow you to get a mortgage if
                    you&apos;ve had a 60-day late in the past 12 months.
                  </p>
                </section>

                <section id="how-does-conventional-financing-handle-late-payments">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    How does Conventional Financing handle late payments?
                  </h2>
                  <p>
                    <Link
                      href="/conventional-home-loans-arizona/"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      Conventional Financing
                    </Link>{" "}
                    is a bit stricter than FHA. They only allow for one 30-day late. However, you are not
                    guaranteed to be approved if you&apos;re under this line, but you will be eligible as long as
                    you don&apos;t have no more than one 30-day late.
                  </p>
                </section>

                <section id="how-are-va-loans-impacted-by-late-mortgage-payments">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    How are VA Loans impacted by late mortgage payments?
                  </h2>
                  <p>
                    VA loans have the same policy as Conventional Financing when it comes to past late mortgage
                    payments. You can only have one 30-day late.
                  </p>
                </section>

                <section id="eligibility-vs-approval">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Eligibility vs. Approval
                  </h2>
                  <p>
                    Just because you are eligible, does not mean you&apos;re guaranteed to get approved for the
                    loan. This is something that holds true for all these types of financing. If you have any
                    questions about this, be sure to reach out at{" "}
                    <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                      (602) 535-2171
                    </a>
                    . We&apos;d love to answer any questions you might have.
                  </p>
                </section>

                <section id="in-summary">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    In Summary
                  </h2>
                  <p>
                    With FHA allowing for two 30-day lates, versus the one for Conventional and VA, they&apos;re
                    the most lenient. Our advice for borrowers is, when you call a lender, be real honest and up
                    front if you have any mortgage lates. This will help us point you in the right direction and
                    you&apos;ll be less likely to run into any trouble down the line.
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

                <p className="text-[#5a6b52] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has been
                  prepared for informational purposes only. You should consult your own tax, legal, and accounting
                  advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS #210917 and
                  1618695. Equal housing lender.
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
                      <p className="mb-3">
                        <strong>Eddie Knoell</strong>: Welcome, everyone! This is the Mortgage Brothers Podcast
                        Show.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Can You Qualify with a Late Payment? [00:05]
                      </h3>
                      <p className="mb-3">
                        <strong>Eddie</strong>: Today, we&apos;re discussing a common question: Can you qualify
                        for a mortgage if you&apos;ve had a late mortgage payment?
                      </p>
                      <p>
                        <strong>Tom</strong>: It&apos;s a real concern for many borrowers. There are valid reasons
                        for late payments, such as miscommunications with the bank or technology issues. For
                        example, a borrower thought they set up auto-pay but ended up 34 days late.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Factors Impacting Mortgage Approval [01:10]
                      </h3>
                      <p className="mb-3">
                        <strong>Eddie</strong>: If you&apos;ve had multiple late payments, like missing car
                        payments or other bills, your credit score is likely very low, and approval will be
                        challenging.
                      </p>
                      <p>
                        <strong>Tom</strong>: However, if this is an <em>isolated event</em>, your chances are
                        better. One or two late payments might not disqualify you entirely, depending on the loan
                        program.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Understanding the Underwriter&apos;s Perspective [01:47]
                      </h3>
                      <p className="mb-3">
                        <strong>Tom</strong>: Think of it like hiring a babysitter. If a babysitter admits to
                        letting a toddler fall off a counter, you might look for someone else. Similarly,
                        underwriters evaluate the risk of lending money to you based on past behavior.
                      </p>
                      <p>
                        <strong>Eddie</strong>: Mortgage lates are one of the most significant red flags for
                        underwriters. Borrowers often underestimate how impactful a single 30-day late payment can
                        be.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Loan Program Guidelines [04:00]
                      </h3>
                      <p className="mb-3">Here&apos;s how the major loan programs handle late payments:</p>
                      <p className="mb-2 font-semibold text-[#052316]">FHA Loans:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>
                          Allows up to <strong>two 30-day late payments</strong> in the past 12 months.
                        </li>
                        <li>
                          Does not permit any <strong>60-day late payments</strong> in the same period.
                        </li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">Conventional Loans:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>
                          Allows only <strong>one 30-day late payment</strong> in the past 12 months.
                        </li>
                        <li>Stricter than FHA, but eligibility doesn&apos;t guarantee approval.</li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">VA Loans:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          Similar to conventional loans, allowing just{" "}
                          <strong>one 30-day late payment</strong> in the past 12 months.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Eligibility and Approval Comparison [05:37]
                      </h3>
                      <p className="mb-3">
                        <strong>Tom</strong>: Being eligible doesn&apos;t mean you&apos;ll be approved. Your loan
                        officer should provide clear answers during the{" "}
                        <Link href="/#get-pre-approved" className="text-[#3fb364] font-semibold hover:underline">
                          pre-approval process
                        </Link>
                        , typically within a day or two.
                      </p>
                      <p>
                        <strong>Eddie</strong>: If a lender says, &ldquo;Let&apos;s wait until underwriting to
                        find out,&rdquo; that&apos;s a red flag. You should get a solid answer during
                        pre-approval.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Tips for Borrowers [07:11]</h3>
                      <p className="mb-2 font-semibold text-[#052316]">Be Honest:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>
                          Inform your lender upfront about any mortgage lates. Keep the explanation brief and to
                          the point.
                        </li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">Understand the Difference:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>
                          Late payments differ from deferments or forbearances. Contact your lender if you&apos;re
                          unsure about the specifics.
                        </li>
                      </ul>
                      <p>
                        <strong>Tom</strong>: Honesty allows the lender to assess your situation accurately and
                        determine if you&apos;re eligible for a new mortgage.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Final Thoughts [07:42]</h3>
                      <p className="mb-3">
                        <strong>Eddie</strong>: We hope this information has been helpful. If you like this
                        content, subscribe to our channel and click the notification button.
                      </p>
                      <p className="mb-3">
                        <strong>Tom</strong>: And if you have questions, reach us using our{" "}
                        <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                          contact form
                        </Link>
                        .
                      </p>
                      <p className="text-[#5a6b52] text-[13px]">
                        Disclaimer: This material is for informational purposes only. Consult your tax, legal, and
                        accounting advisors before taking action. NMLS: 1007154
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <span className="text-[#5a6b52]">← Previous Post</span>
                <Link
                  href="/getting-a-mortgage-with-employment-gaps/"
                  className="text-[#3fb364] font-semibold hover:underline"
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