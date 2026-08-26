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

export const metadata: Metadata = getSeoMetadata("/how-to-skip-2-payments-on-your-mortgage/");

const relatedLinks = [
  {
    label: "Personal Property & Home Sale",
    href: "/buying-or-selling-personal-property-with-your-home-sale-must-watch-this-first/",
  },
  {
    label: "FHA Loan Gift Guide",
    href: "/put-bow-fha-loan-gift-guide/",
  },
  {
    label: "Seller Concessions to Buyers",
    href: "/seller-concessions-to-buyers-how-much/",
  },
  {
    label: "What is a Mortgage Recast?",
    href: "/what-is-an-example-of-a-mortgage-recast/",
  },
  {
    label: "Understanding Amortization",
    href: "/understanding-amortization-chart/",
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
  { question: "Is it possible to skip 2 payments on your mortgage?", answer: "Yes, when refinancing, you typically skip 2 payments. There is no payment the month you close and no payment on the final month of the mortgage. For example, if you close on November 10th, you won’t make a December payment since mortgage payments are paid in arrears." },
  { question: "How does skipping 2 mortgage payments work?", answer: "When you close on your loan, the interest for that month is prepaid at closing. Since mortgage payments are paid in arrears, your next payment isn’t due until the following month. Essentially, the interest gets rolled into either the old loan or the new loan, but it’s not free—just shifted." },
  { question: "Does skipping mortgage payments save money?", answer: "No, skipping payments does not save money. It’s more like shifting payments. The total amount you owe remains the same—it just gets prepaid or delayed depending on the timing of your loan closing." },
] as const;

const articleJsonLd = buildArticleSchemas({
  blog: {
    pathname: "/how-to-skip-2-payments-on-your-mortgage/",
    headline: "How to Skip 2 Payments On Your Mortgage?",
    description: "See how refinancing can let you skip two mortgage payments, why interest is prepaid or rolled forward, and why it does not save money.",
    datePublished: "2025-02-05",
    articleSection: "Mortgage Payments & Strategies",
  },
  faqs: [...articleFaqs],
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Mortgage Payments & Strategies", path: "/mortgage-payments-strategies/" },
    { name: "How to Skip 2 Payments On Your Mortgage?", path: "/how-to-skip-2-payments-on-your-mortgage/" },
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

export default function HowToSkip2PaymentsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <JsonLd data={articleJsonLd} />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>How to Skip 2 Payments On Your Mortgage?</>}
          excerpt="See how refinancing can let you skip two mortgage payments, why interest is prepaid or rolled forward, and why it does not save money."
          category="Mortgage Payments & Strategies"
          categoryHref="/mortgage-payments-strategies/"
          dateLabel="Feb 5, 2025"
          readTime="9 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                Did you know it&apos;s possible to skip 2 payments on your mortgage? Well, we&apos;re going to
                dig into just how you can do that.
              </p>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <YoutubeLiteEmbed
                  videoId="F4yWZ6cmLZI"
                  title="How to Skip 2 Payments On Your Mortgage?"
                />
              </div>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Need Financial Flexibility on Your Mortgage?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Skipping two mortgage payments could help ease financial stress. Find out if you qualify and
                  how to get started.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="btn-primary"
                  >
                    Get a Free Mortgage Consultation
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="a-few-things-you-should-know">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    A few things you should know
                  </h2>
                  <p className="mb-5">Mortgage payments are paid on the first of every month.</p>
                  <p>
                    Mortgage payments are paid in arrears, meaning that when you make a payment on the first
                    of the month you are, in fact, paying for the previous month.
                  </p>
                </section>

                <section id="so-how-does-skip-2-payments-on-your-mortgage-work">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    So, what&apos;s this about skipping payments?
                  </h2>
                  <p>
                    In short, there is no payment the month you close and no payment on the final month of a
                    mortgage when refinancing. So, if you close on November 10th, you&apos;re not making the
                    December payment. In this case, you&apos;re basically rolling the interest into a payoff.
                    It&apos;s not free, but rather you&apos;re squishing it into either the new or old loan.
                    See, when you close the loan on November 10th you prepaid that interest in November, and
                    then the December payment would end up being due on January 1st because it is paid in
                    arrears.
                  </p>
                </section>

                <section id="is-this-a-way-to-save-money">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Is this a way to save money?
                  </h2>
                  <p>
                    It&apos;s not, unfortunately. Sometimes people will call us and be like, I heard that
                    it&apos;s never good to close at the beginning of the month, you just spend way too much
                    money doing it that way. Well, since that&apos;s not really the case the way we explain it
                    is by saying it&apos;s kind of like a balloon. It stays the same size, but we are either
                    squishing it into the old loan or squishing it into the new loan. It&apos;s a different
                    shape but the volume remains the same. You&apos;re either prepaying it or delaying it,
                    there&apos;s no cheating the system.
                  </p>
                </section>

                <p className="text-center font-bold text-xl my-8 text-[#052316]">•••</p>

                <p>
                  Thanks for listening and reading the Mortgage Brothers Show. Let us know if you have any
                  questions you&apos;d like us to answer on this podcast. You can email your questions to
                  Tom@AZMortgageBrothers.com or Eddie@AZMortgageBrothers.com. Be sure to ask us for a free quote
                  on your next mortgage. We&apos;ll personally work with you and help you through the whole
                  process.
                </p>

                <p>
                  If you have any questions about this or if you have any questions you&apos;d like us to
                  answer on our podcast, you can submit your questions using our{" "}
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
                  Explore smart strategies to skip two payments on your mortgage and ease your cash flow. To
                  round out your financial planning, read about{" "}
                  <Link
                    href="/seller-concessions-to-buyers-how-much/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    seller concessions
                  </Link>
                  , watch our{" "}
                  <Link
                    href="/buying-or-selling-personal-property-with-your-home-sale-must-watch-this-first/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    personal property guide
                  </Link>
                  , and learn more in our{" "}
                  <Link
                    href="/put-bow-fha-loan-gift-guide/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    FHA loan gift guide
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
                        How to Skip Two Mortgage Payments When Refinancing
                      </h3>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Introduction [00:02]</h3>
                      <p className="mb-3">
                        Welcome to the Mortgage Brothers Podcast! I&apos;m Eddie Knoell, and I&apos;m Tom
                        Knoell. Today, we&apos;re answering a very common question from borrowers:
                      </p>
                      <p className="mb-3">
                        &ldquo;Hey Eddie, hey Tom, how do I skip two mortgage payments? I heard that when I
                        refinance, I get to skip payments. How does that work?&rdquo;
                      </p>
                      <p>
                        Let&apos;s break it down. Is skipping mortgage payments really possible, or is it just
                        a misconception?
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Mortgage Payments: How Do They Work? [00:36]
                      </h3>
                      <p className="mb-3">First, let&apos;s clarify how mortgage payments work.</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          Mortgage payments are always due on the first of the month—every lender follows this
                          rule.
                        </li>
                        <li>
                          You pay for the previous month&apos;s interest—unlike rent, which is paid in advance.
                        </li>
                        <li>
                          Skipping payments doesn&apos;t mean free money—it&apos;s all about how interest is
                          calculated and rolled into your new loan.
                        </li>
                      </ul>
                      <p>
                        You can&apos;t just move your payment to another day—the first of the month is standard
                        across all lenders.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Skipping One Payment When Buying a Home [01:13]
                      </h3>
                      <p className="mb-3">
                        If you&apos;re purchasing a home, you&apos;ll always skip one mortgage payment after
                        closing.
                      </p>
                      <p className="mb-2 font-semibold text-[#052316]">Example:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>You close on November 10th</li>
                        <li>No mortgage payment in November</li>
                        <li>No mortgage payment in December</li>
                        <li>Your first payment is due January 1st</li>
                      </ul>
                      <p>
                        The skipped payment happens because interest is prepaid at closing—not because
                        you&apos;re getting free months.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Skipping Two Mortgage Payments When Refinancing [02:22]
                      </h3>
                      <p className="mb-3">
                        Refinancing is where skipping two payments becomes possible. Here&apos;s how:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Skip one payment from your current lender</li>
                        <li>Skip one payment from your new mortgage</li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">Example:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>You close your refinance on November 5th</li>
                        <li>
                          You don&apos;t pay your November mortgage payment (because the loan is being paid
                          off)
                        </li>
                        <li>
                          You don&apos;t pay a December mortgage payment (because your new loan covers prepaid
                          interest)
                        </li>
                        <li>Your first payment on the new loan starts January 1st</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Is Skipping Payments a Trick to Save Money? [04:00]
                      </h3>
                      <p className="mb-3">
                        No! Some borrowers think skipping payments is a way to cheat the system—but
                        that&apos;s not true.
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          You&apos;re not getting free months—you&apos;re just rolling interest into the
                          payoff.
                        </li>
                        <li>
                          The bank always gets paid—whether it&apos;s from your pocket or included in the
                          refinance.
                        </li>
                        <li>
                          It&apos;s like squeezing a balloon—the amount stays the same, it just shifts.
                        </li>
                      </ul>
                      <p className="mb-3">
                        [05:03] Some people hear advice like: &ldquo;Always close at the end of the month to
                        save money.&rdquo; Or: &ldquo;Closing early in the month means you pay more.&rdquo;
                      </p>
                      <p>
                        These are myths! The bank calculates interest daily, and your payoff is mathematically
                        precise—it doesn&apos;t matter when you close.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Final Thoughts: What You Need to Know [06:08]
                      </h3>
                      <p className="mb-3">
                        Skipping two mortgage payments when refinancing is real, but:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>It&apos;s not free—interest is still owed.</li>
                        <li>Your lender structures the loan to roll interest into the payoff.</li>
                        <li>It only works if you refinance early in the month.</li>
                      </ul>
                      <p className="mb-3">
                        [07:14] Have questions? Reach out to us through our{" "}
                        <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                          contact form
                        </Link>
                        .
                      </p>
                      <p>Need a refinance? We&apos;re here to help!</p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/buying-or-selling-personal-property-with-your-home-sale-must-watch-this-first/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/put-bow-fha-loan-gift-guide/"
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