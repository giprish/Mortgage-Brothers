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

export const metadata: Metadata = getSeoMetadata("/can-i-relocate-and-get-a-mortgage-while-working-remotely-out-of-state/");

const relatedLinks = [
  {
    label: "Managing Employment Gaps",
    href: "/getting-a-mortgage-with-employment-gaps/",
  },
  {
    label: "Credit Card Payoff Options",
    href: "/can-i-simply-payoff-credit-cards-to-qualify-for-a-mortgage/",
  },
  {
    label: "Couple vs Single Applications",
    href: "/better-getting-mortgage-couple-vs-single-applicant/",
  },
  {
    label: "Rapid Rescore for Eligibility",
    href: "/how-a-rapid-rescore-can-help-to-get-qualified-for-a-mortgage/",
  },
  {
    label: "DSCR Loan Explained",
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

const articleFaqs = [
  { question: "Do a lot of our borrowers work remotely?", answer: "Remote work is becoming more common, especially since COVID. Around 5% of our borrowers currently work remotely. It’s possible to get a mortgage while working from home as long as you meet underwriting requirements." },
  { question: "Do I need to talk to my employer?", answer: "Yes, it’s very important to talk to your employer. You’ll need documentation, such as a signed letter from your employer confirming your remote work arrangement, job details, and salary information. Many underwriters require this before approving a mortgage." },
  { question: "How do I talk to my employer about moving?", answer: "Have a clear conversation with your boss or HR department about your remote work or relocation. To satisfy underwriting, you’ll need a signed and dated letter from your employer stating approval to work remotely, your job position, start date, and salary details. The agreement must be permanent and without conditions." },
  { question: "Does remote working impact investment properties?", answer: "Remote work considerations mainly apply to primary homes, not investment properties. If you have questions regarding investment properties and remote work, you can contact us directly for guidance." },
] as const;

const articleJsonLd = buildArticleSchemas({
  blog: {
    pathname: "/can-i-relocate-and-get-a-mortgage-while-working-remotely-out-of-state/",
    headline: "Can I Relocate and Get a Mortgage While Working Remotely Out of State?",
    description: "Learn how to qualify for a mortgage while working remotely, meet lender requirements, and secure financing when relocating to a new state.",
    datePublished: "2025-02-03",
    articleSection: "Mortgage Qualifications",
  },
  faqs: [...articleFaqs],
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Mortgage Qualifications", path: "/mortgage-qualifications/" },
    { name: "Can I Relocate and Get a Mortgage While Working Remotely Out of State?", path: "/can-i-relocate-and-get-a-mortgage-while-working-remotely-out-of-state/" },
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

export default function RelocateRemoteMortgagePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <JsonLd data={articleJsonLd} />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>Can I Relocate and Get a Mortgage While Working Remotely Out of State?</>}
          excerpt="Learn how to qualify for a mortgage while working remotely, meet lender requirements, and secure financing when relocating to a new state."
          category="Mortgage Qualifications"
          categoryHref="/mortgage-qualifications/"
          dateLabel="Feb 3, 2025"
          readTime="8 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                This is a question we get quite a lot. A buyer will call up and say, &ldquo;Hey Mortgage
                Brothers, I&apos;ve been working for this company in Virginia for years. I&apos;ve been
                remote, but I&apos;ve got family in Arizona and I&apos;m thinking of moving. Can I actually
                move to Arizona and work there? And can I get a mortgage?&rdquo;
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                Well, the short answer is YES!
              </p>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <YoutubeLiteEmbed
                  videoId="B-6I78P-DCM"
                  title="Can I Relocate and Get a Mortgage While Working Remotely Out of State?"
                />
              </div>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Moving to Arizona While Working Remotely?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  You can often qualify for a mortgage while working remotely&mdash;if you meet underwriting
                  requirements. Get personalized guidance for your relocation.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="btn-primary"
                  >
                    Get Personalized Help Now
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="do-a-lot-of-our-borrowers-work-remotely">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Do a lot of our borrowers work remotely?
                  </h2>
                  <p>
                    <a
                      href="https://www.opm.gov/frequently-asked-questions/telework-faq/remote-work/what-is-the-definition-of-remote-work/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      Remote work
                    </a>
                    , especially during the time of COVID, is getting more and more common. We&apos;d say that
                    maybe 5% of our borrowers work remotely, and we&apos;re happy to see and help that number
                    keep rising. If you&apos;re thinking about getting a home here in Arizona and work from
                    home, you can save yourself some reading time and give us a call at{" "}
                    <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                      (602) 535-2171
                    </a>{" "}
                    and we&apos;ll start getting you squared away today. That being said, it&apos;s totally
                    possible to get a mortgage while working remotely or from home. You just need to meet some
                    requirements from an underwriting standpoint, which we&apos;ll get into shortly.
                  </p>
                </section>

                <section id="do-i-need-to-talk-to-my-employer">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Do I need to talk to my employer?
                  </h2>
                  <p>
                    Absolutely. This is one of the most important pieces of the puzzle. You&apos;re going to
                    need to get documentation from your employer that states certain things. We understand it
                    can be scary. We had a borrower recently that was worried they might lose their job if
                    they asked their employer to let them work exclusively remotely. But, the consequences of
                    not asking can be equally as high. Plus, many underwriters won&apos;t be willing to work
                    with you if you don&apos;t have a signed letter from your employer.
                  </p>
                </section>

                <section id="how-do-i-talk-to-my-employer-about-moving">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    How do I talk to my employer about moving?
                  </h2>
                  <p className="mb-5">
                    This all comes down to having a great conversation with your boss or supervisor to make
                    sure that they&apos;re okay with you moving out of state or working remotely. If you work
                    for a larger company, there&apos;s likely a human resources department you can discuss
                    this with. Many companies have boilerplate agreements that address this issue.
                  </p>
                  <p>
                    As well, to get an underwriter to sign on you&apos;re going to need to get a signed and
                    dated letter from your employer that covers the terms of your employment. It&apos;s also
                    going to have to state that it&apos;s okay for you to move to the location you are looking
                    to live. And, for the state of Arizona, at least, it has to mention what your salary will
                    be or what your current pay rate is. They will have to tell us when your start date will
                    be, if you&apos;re not working there already, and what your job position is. As well, this
                    can&apos;t be temporary nor can there be any strings attached, such as benchmarks you must
                    hit to be allowed to continue to work remotely.
                  </p>
                </section>

                <section id="does-remote-working-impact-investment-properties">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Does remote working impact investment properties?
                  </h2>
                  <p>
                    Not really, this is mainly for primary homes. But if you have any questions about remote
                    work and investment properties you can shoot us an email at{" "}
                    <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                      Contact Form
                    </Link>{" "}
                    and we&apos;ll get right back to you.
                  </p>
                </section>

                <section id="what-if-im-self-employed">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What if I&apos;m self-employed?
                  </h2>
                  <p>
                    That&apos;s a different scenario but not a problem in most cases. If you meet certain
                    requirements it&apos;s easy. If you&apos;re self-employed and looking for a mortgage give
                    us a call at{" "}
                    <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                      (602) 535-2171
                    </a>{" "}
                    and we can get right to helping you.
                  </p>
                </section>

                <section id="as-always">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    As always&hellip;
                  </h2>
                  <p>
                    We&apos;re happy to help walk you through getting the second home or investment property
                    squared away. If you have any questions about this or if you have any questions you&apos;d
                    like us to answer on our podcast, you can submit your questions using our{" "}
                    <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                      contact form
                    </Link>{" "}
                    or give us a call at{" "}
                    <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                      (602) 535-2171
                    </a>
                    . Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work
                    with you and help you through the whole process.
                  </p>
                </section>

                
                <section id="frequently-asked-questions">
                  <FaqAccordion
                    title="Frequently Asked Questions"
                    items={articleFaqs.map((faq) => ({
                      q: faq.question,
                      a: faq.answer,
                    }))}
                  />
                </section>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with
                    you and help you through the whole process.
                  </p>
                </div>

                <p className="text-[15px]">
                  Wondering if relocating while working remotely affects your mortgage? Learn more by reading
                  our piece on managing{" "}
                  <Link
                    href="/getting-a-mortgage-with-employment-gaps/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    employment gaps
                  </Link>
                  , exploring{" "}
                  <Link
                    href="/can-i-simply-payoff-credit-cards-to-qualify-for-a-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    credit card payoff options
                  </Link>
                  , comparing{" "}
                  <Link
                    href="/better-getting-mortgage-couple-vs-single-applicant/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    couple vs single applications
                  </Link>
                  , understanding how a{" "}
                  <Link
                    href="/how-a-rapid-rescore-can-help-to-get-qualified-for-a-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    rapid rescore can help
                  </Link>
                  , and seeing why a{" "}
                  <Link
                    href="/dscr-loan-the-best-alternative-to-hard-money/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    DSCR loan might be the alternative you need
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
                        Moving Out of State Tips for Getting a Mortgage While Working Remotely
                      </h3>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Introduction [00:02]</h3>
                      <p>
                        I&apos;m Eddie Knoell, and I&apos;m Tom Knoell. Welcome to the Mortgage Brothers
                        Podcast Show. Today, we are answering a common question: Can you get a mortgage while
                        working remotely from another state? Many borrowers call us asking if they can move to
                        Arizona and still qualify for a mortgage while keeping their remote job in another
                        state.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Can You Get a Mortgage While Working Remotely? [00:37]
                      </h3>
                      <p>
                        The short answer is yes, but certain conditions must be met. Many people have been
                        working remotely for years, and after COVID, remote work became even more common.
                        Whether you&apos;ve always worked remotely or your company recently transitioned, you
                        can qualify for a mortgage. However, lenders have specific requirements to ensure your
                        employment is stable and sustainable.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        What Do Lenders Look for? [01:13]
                      </h3>
                      <p className="mb-3">
                        Lenders need to verify that your employer knows and approves of your remote work
                        setup. Many borrowers ask, &ldquo;Why does my employer need to know where I
                        live?&rdquo; The key issue for lenders is job stability. If your employer does not
                        officially permit remote work, there is a risk that they could require you to return
                        to the office, which might affect your ability to repay the loan.
                      </p>
                      <p className="mb-3">Some key lender concerns:</p>
                      <ul className="list-disc pl-6 space-y-2 text-[15.5px]">
                        <li>Is your remote work arrangement permanent or temporary?</li>
                        <li>Will your salary and job title remain unchanged?</li>
                        <li>Can you provide written confirmation from your employer?</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Employer Approval and Documentation [02:50]
                      </h3>
                      <p className="mb-3">
                        If you want to qualify for a mortgage while working remotely, your employer must
                        provide a letter on company letterhead that states:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-[15.5px] mb-3">
                        <li>Your job title and salary</li>
                        <li>Your start date and employment terms</li>
                        <li>That you are allowed to work remotely indefinitely</li>
                        <li>
                          That there are no conditions attached to your remote work (e.g., sales quotas,
                          performance targets, or future reviews)
                        </li>
                      </ul>
                      <p>
                        The letter must be signed by your employer and cannot be an informal email. Some
                        lenders may also conduct a verbal verification with your employer.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Issues That Can Disqualify You [03:54]
                      </h3>
                      <p className="mb-3">
                        A borrower recently called us wanting to buy a home in Arizona but did not want their
                        employer to know about their plans. This is a red flag for lenders. If your employer
                        doesn&apos;t know or hasn&apos;t explicitly approved your remote work setup, lenders
                        won&apos;t consider your income stable.
                      </p>
                      <p>
                        Another common issue is temporary remote work arrangements. If your employer only
                        allows remote work for a set period or requires you to return to the office at some
                        point, lenders may deny your loan application.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Key Takeaways [06:20]</h3>
                      <ul className="list-disc pl-6 space-y-2 text-[15.5px]">
                        <li>
                          Employer approval is crucial &ndash; You need written confirmation that your remote
                          work arrangement is permanent.
                        </li>
                        <li>
                          The letter must be formal &ndash; A simple email won&apos;t work. It must be on
                          company letterhead and include specific employment details.
                        </li>
                        <li>
                          No conditions or time limits &ndash; The arrangement cannot be temporary or
                          contingent on meeting certain job performance criteria.
                        </li>
                        <li>
                          W-2 Employees Only &ndash; These rules apply to W-2 employees. If you are
                          self-employed, different rules apply.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Remote Work and Loan Types [07:59]
                      </h3>
                      <p>
                        This situation mainly applies to primary residences. If you&apos;re purchasing a
                        second home or an investment property, remote work doesn&apos;t have the same impact
                        on your loan approval. However, if you are relocating and need a primary residence
                        mortgage, lenders will closely examine your employment situation.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Final Advice [09:07]</h3>
                      <p className="mb-3">
                        If you&apos;re thinking about moving to another state while keeping your remote job,
                        start planning weeks in advance. Talk to your employer, get the necessary
                        documentation, and consult with your mortgage lender early in the process.
                      </p>
                      <p>
                        If you have any questions, feel free to contact the Mortgage Brothers Team. And if you
                        found this information helpful, be sure to subscribe to our channel and click the
                        notification button!
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/better-getting-mortgage-couple-vs-single-applicant/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/how-a-rapid-rescore-can-help-to-get-qualified-for-a-mortgage/"
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