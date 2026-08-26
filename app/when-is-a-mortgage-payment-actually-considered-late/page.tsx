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

export const metadata: Metadata = getSeoMetadata("/when-is-a-mortgage-payment-actually-considered-late/");

const relatedLinks = [
  {
    label: "How to Calculate PMI",
    href: "/how-to-calculate-how-much-pmi-mortgage-insurance-will-be/",
  },
  {
    label: "Understanding Amortization",
    href: "/understanding-amortization-chart/",
  },
  {
    label: "Mortgage Trigger Leads",
    href: "/what-are-mortgage-trigger-leads/",
  },
  {
    label: "How Does Mortgage APR Work",
    href: "/how-does-a-mortgage-apr-work-and-what-does-it-mean/",
  },
  {
    label: "What Are Closing Costs",
    href: "/what-are-closing-costs-on-a-home-purchase/",
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
  { question: "When is a mortgage payment considered late by the bank?", answer: "Lenders typically consider your mortgage payment late if it's received after the 15th of the month. Payments made within the first 15 days are not penalized, but if your payment is made on the 16th or later, you may incur a 5% late fee. This does not affect your credit score." },
  { question: "When does a late mortgage payment impact your credit score?", answer: "A late mortgage payment impacts your credit score if it is 30 or more days past due. At that point, the credit bureau will mark your report with a '30-day late,' which can make it harder to get approved for future loans. A 90-day late could trigger foreclosure proceedings, depending on state laws." },
  { question: "Can I still get a mortgage with a 30-day late payment on your credit report?", answer: "Yes, it's still possible to get approved for a mortgage even with a 30-day late payment on your credit report. However, it may make the approval process more difficult and could affect your interest rate or loan terms." },
] as const;

const articleJsonLd = buildArticleSchemas({
  blog: {
    pathname: "/when-is-a-mortgage-payment-actually-considered-late/",
    headline: "When is a mortgage payment actually considered late?",
    description: "Learn when lenders vs. credit bureaus consider a mortgage payment late, grace periods, 5% late fees, and 30-day credit reporting.",
    datePublished: "2024-12-29",
    articleSection: "Mortgage Basics",
  },
  faqs: [...articleFaqs],
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Mortgage Basics", path: "/mortgage-basics/" },
    { name: "When is a mortgage payment actually considered late?", path: "/when-is-a-mortgage-payment-actually-considered-late/" },
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

export default function WhenIsAMortgagePaymentActuallyConsideredLatePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <JsonLd data={articleJsonLd} />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>When is a mortgage payment actually considered late?</>}
          excerpt="Learn when lenders vs. credit bureaus consider a mortgage payment late, grace periods, 5% late fees, and 30-day credit reporting."
          category="Mortgage Basics"
          categoryHref="/mortgage-basics/"
          dateLabel="Dec 29, 2024"
          readTime="8 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                So, the short answer is that every mortgage is due on the first of the month. Now, where it gets
                a little trickier is that there are two different ways to think about if it&apos;s late:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                <li>When the bank thinks that you&apos;re late</li>
                <li>When the credit bureau thinks you&apos;re late</li>
              </ul>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <YoutubeLiteEmbed
                  videoId="bCHM3mLXMgQ"
                  title="When is a mortgage payment actually considered late?"
                />
              </div>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Know When &apos;Late&apos; Really Means Late
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Confused about mortgage payment deadlines and penalties? Get clear answers and avoid
                  unnecessary fees. We&apos;re here to guide you through every step.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="#get-pre-approved"
                    className="btn-primary"
                  >
                    Ask an Expert Now
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="when-the-bank-or-lender-thinks-youre-late">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    When the bank or lender thinks you&apos;re late
                  </h2>
                  <p className="mb-5">
                    Now, the lender doesn&apos;t consider your payment late until after the 15th. If they
                    receive payments within the first 15 days, you&apos;re in the clear. There&apos;s no
                    penalty during this time.
                  </p>
                  <p className="mb-5">But what happens if you&apos;re late?</p>
                  <p>
                    What happens if your payment goes out on the 16th? In most cases, the bank will assign you
                    an additional fee of 5% of your loan payment. Nothing will happen to your credit.
                  </p>
                </section>

                <section id="when-the-credit-bureau-thinks-youre-late">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    When the credit bureau thinks you&apos;re late
                  </h2>
                  <p className="mb-5">
                    The credit bureau will consider you late if your payment is received after 30 days, the
                    moment it is a month over. If there are 31 days in the month that doesn&apos;t matter, it
                    needs to be received by within 30 days. If your payment is late, they&apos;ll give you a
                    &quot;30 day late&quot; on your credit report, which is not something you want at all. And
                    if you&apos;re 90 days late on a mortgage, likely foreclosure proceedings will have started.
                    Now, each state has different laws on foreclosure proceedings, but in Arizona, it&apos;s at
                    90 days that you&apos;re served. And then you only have 90 days after you&apos;re served
                    before your foreclosure proceedings will start.
                  </p>
                  <p>
                    If you have one 30-day late on your credit it&apos;s not impossible to still get approved for
                    new loans in the future, but it will make it a bit harder.
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
                    +1 (602) 535-2171
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

                <p className="text-[#5a6b52] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has
                  been prepared for informational purposes only. You should consult your own tax, legal, and
                  accounting advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS
                  #210917 and 1618695. Equal housing lender.
                </p>

                <p className="text-[15px]">
                  Explore more mortgage insights by checking out our guide on{" "}
                  <Link
                    href="/how-to-calculate-how-much-pmi-mortgage-insurance-will-be/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    PMI costs
                  </Link>
                  , learning the basics of{" "}
                  <Link
                    href="/understanding-amortization-chart/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    amortization
                  </Link>
                  , and discovering what sparks{" "}
                  <Link
                    href="/what-are-mortgage-trigger-leads/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    trigger leads
                  </Link>
                  . You can also read about{" "}
                  <Link
                    href="/how-does-a-mortgage-apr-work-and-what-does-it-mean/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    APR basics
                  </Link>
                  , understand{" "}
                  <Link
                    href="/what-are-closing-costs-on-a-home-purchase/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    closing costs
                  </Link>
                  , and learn why{" "}
                  <Link
                    href="/mortgage-payoff-higher-than-mortgage-balance/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    mortgage payoff can exceed balance
                  </Link>
                  .
                </p>

                <section id="frequently-asked-questions">
                  <FaqAccordion
                    title="Frequently Asked Questions"
                    items={[
                    { q: "When is a mortgage payment considered late by the bank?", a: <>Lenders typically consider your mortgage payment late if it&apos;s received after the
                        15th of the month. Payments made within the first 15 days are not penalized, but if your
                        payment is made on the 16th or later, you may incur a 5% late fee. This does not affect
                        your credit score.</> },
                    { q: "When does a late mortgage payment impact your credit score?", a: <>A late mortgage payment impacts your credit score if it is 30 or more days past due. At
                        that point, the credit bureau will mark your report with a &apos;30-day late,&apos;
                        which can make it harder to get approved for future loans. A 90-day late could trigger
                        foreclosure proceedings, depending on state laws.</> },
                    { q: "Can I still get a mortgage with a 30-day late payment on your credit report?", a: <>Yes, it&apos;s still possible to get approved for a mortgage even with a 30-day late
                        payment on your credit report. However, it may make the approval process more difficult
                        and could affect your interest rate or loan terms.</> }
                    ]}
                  />
                </section>

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
                        <strong>Eddie Knoell</strong>: I&apos;m Eddie Knoell.
                      </p>
                      <p className="mb-3">
                        <strong>Tom Knoell</strong>: And I&apos;m Tom Knoell. Welcome, everyone! This is the
                        Mortgage Brothers Podcast. Today, we&apos;re answering a question we&apos;ve been asked
                        many times:
                      </p>
                      <p className="mb-3">
                        <strong>Eddie</strong>: &quot;When is my mortgage payment late? When is it considered
                        late?&quot;
                      </p>
                      <p>
                        <strong>Tom</strong>: Right. &quot;When is it actually due?&quot;
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        When Are Mortgage Payments Due? [00:30]
                      </h3>
                      <p className="mb-3">
                        <strong>Eddie</strong>: It&apos;s one of those &quot;cup is half full or half
                        empty&quot; situations. Late or due—it&apos;s a matter of semantics, but it&apos;s a
                        very good, common-sense question. So, when is it due?
                      </p>
                      <p className="mb-3">
                        <strong>Tom</strong>: Every mortgage payment is due on the{" "}
                        <strong>first of the month</strong>. Not the second, not the fifth. Unlike car or credit
                        card payments, where the due date might vary, mortgage payments are always due on the
                        first.
                      </p>
                      <p>
                        <strong>Eddie</strong>: Can you call up your lender and say, &quot;Hey, I want my
                        payment due on the 13th of every month because it&apos;s my birthday?&quot; No bank I
                        know allows that. Mortgage payments are always due on the first.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">When Is It Late? [01:42]</h3>
                      <p className="mb-3">
                        <strong>Eddie</strong>: So, the question is: When is it late?
                      </p>
                      <p className="mb-3">
                        <strong>Tom</strong>: There are two perspectives to consider:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>When the bank considers it late.</li>
                        <li>When the credit bureau considers it late.</li>
                      </ul>
                      <p>
                        <strong>Eddie</strong>: Actually, let&apos;s add a third:{" "}
                        <strong>when people feel late.</strong> For some, if they haven&apos;t paid by the
                        first, they feel anxious.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Grace Period: Payments After the 15th [02:16]
                      </h3>
                      <p className="mb-3">
                        <strong>Tom</strong>: According to the lender, payments aren&apos;t late until{" "}
                        <strong>after the 15th</strong>.
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>If your payment arrives on the 15th, there&apos;s no penalty.</li>
                        <li>
                          After the 15th, most banks will charge a late fee, typically{" "}
                          <strong>5% of your monthly payment</strong>.
                        </li>
                      </ul>
                      <p>
                        <strong>Eddie</strong>: For example, if your mortgage payment is $2,000, you&apos;d pay
                        a $100 late fee.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Credit Bureau Reporting: 30 Days Late [05:02]
                      </h3>
                      <p className="mb-3">
                        <strong>Tom</strong>: Credit bureaus don&apos;t report anything until the payment is{" "}
                        <strong>30 days overdue</strong>. For instance:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          If your October payment isn&apos;t made by October 31st, it&apos;s considered
                          &quot;30 days late.&quot;
                        </li>
                        <li>
                          At this point, it&apos;s reported to the bureaus, and your credit score takes a hit.
                        </li>
                      </ul>
                      <p>
                        <strong>Eddie</strong>: And trust me, folks, this is a <strong>big deal</strong>. A
                        30-day late payment impacts your credit significantly.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Escalation: 60 Days, 90 Days, and Foreclosure [06:08]
                      </h3>
                      <p className="mb-3">
                        <strong>Tom</strong>: After 30 days, the consequences escalate:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          <strong>60 days late</strong>: A bigger hit to your credit.
                        </li>
                        <li>
                          <strong>90 days late</strong>: Foreclosure proceedings may begin.
                        </li>
                      </ul>
                      <p>
                        <strong>Eddie</strong>: In Arizona, for example, after 90 days of non-payment, the
                        foreclosure process starts. Each state has its own laws, but the bottom line is: Avoid
                        going beyond 30 days late if possible.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Rolling Lates: A Dangerous Cycle [07:29]
                      </h3>
                      <p className="mb-3">
                        <strong>Eddie</strong>: Missing one payment can lead to rolling lates if you don&apos;t
                        catch up. For instance, someone with one &quot;30-day late&quot; could end up with
                        several if they continue to miss deadlines.
                      </p>
                      <p>
                        <strong>Tom</strong>: That&apos;s a huge red flag for lenders and can severely impact
                        your chances of getting approved for future loans.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Advice for Borrowers [08:57]
                      </h3>
                      <p className="mb-3">
                        <strong>Eddie</strong>: So, what should borrowers do if they&apos;ve had late payments?
                      </p>
                      <p className="mb-3">
                        <strong>Tom</strong>: Be upfront with your loan officer. If you have late payments in
                        your history, let them know. It helps them focus on solutions and avoid wasting time.
                      </p>
                      <p>
                        <strong>Eddie</strong>: Exactly. &quot;Hi, I&apos;m Dan, and I have two late
                        payments.&quot; [Laughter] Just tell us, and we&apos;ll help.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Final Thoughts [10:03]</h3>
                      <p className="mb-3">
                        <strong>Tom</strong>: Thanks for tuning in, folks!
                      </p>
                      <p>
                        <strong>Eddie</strong>: And remember, you can always reach out to us for questions or
                        quotes on your next mortgage. Have a great day!
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <span />
                <Link
                  href="/how-to-calculate-how-much-pmi-mortgage-insurance-will-be/"
                  className="text-[#5a6b52] hover:text-[#3fb364] transition-colors ml-auto"
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