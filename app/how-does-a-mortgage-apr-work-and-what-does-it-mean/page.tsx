import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";
import YoutubeLiteEmbed from '@/app/component/YoutubeLiteEmbed';

export const metadata: Metadata = getSeoMetadata("/how-does-a-mortgage-apr-work-and-what-does-it-mean/");

const relatedLinks = [
  { label: "When is a mortgage payment actually considered late?", href: "/when-is-a-mortgage-payment-actually-considered-late/" },
  { label: "How to calculate PMI mortgage insurance", href: "/how-to-calculate-how-much-pmi-mortgage-insurance-will-be/" },
  { label: "Understanding amortization chart", href: "/understanding-amortization-chart/" },
  { label: "What are mortgage trigger leads?", href: "/what-are-mortgage-trigger-leads/" },
  { label: "What are closing costs on a home purchase?", href: "/what-are-closing-costs-on-a-home-purchase/" },
  { label: "Mortgage payoff higher than mortgage balance", href: "/mortgage-payoff-higher-than-mortgage-balance/" },
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
      name: "How does a mortgage APR work and what does it mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An APR, or Annual Percentage Rate, represents the total yearly cost of a mortgage, including the interest rate, lender fees, and most closing costs. Unlike the interest rate, which only reflects the cost of borrowing the loan amount, APR provides a more comprehensive view of your total mortgage cost.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between interest rate and APR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The interest rate is the percentage charged by the lender on the principal loan amount, excluding fees and closing costs. APR, on the other hand, includes the interest rate plus additional costs like lender fees and closing costs, making it slightly higher and a better indicator of the true cost of the loan.",
      },
    },
    {
      "@type": "Question",
      name: "How do closing costs and interest rates affect APR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Closing costs and interest rates have an inverse relationship when it comes to APR. A no-closing-cost loan usually comes with a higher interest rate, leading to a lower APR. Conversely, paying more upfront in closing costs or discount points to reduce the interest rate typically increases the APR.",
      },
    },
  ],
};

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function MortgageAprPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />
      <div className="h-[64px] sm:h-[72px] bg-[#08271B] w-full shrink-0" aria-hidden />

      <main className="flex-grow relative z-0">
        {/* Featured hero image */}
        <ArticleHero
          title={<>How Does a Mortgage APR Work and What Does It Mean?</>}
          excerpt="Learn how mortgage APR differs from interest rate, how closing costs affect APR, and how to compare loan offers by focusing on fees—not just the rate."
          category="Mortgage Basics"
          categoryHref="/mortgage-basics/"
          dateLabel="Feb 3, 2025"
          readTime="8 min read"
        />

        {/* Article + sidebar */}
        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                In this post we explore the difference between APR and Interest rates and how it might
                affect you as a borrower?
              </p>

              {/* Video */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <YoutubeLiteEmbed
                  videoId="xdiPqKQsPAE"
                  title="How Does a Mortgage APR Work and What Does It Mean?"
                />
              </div>

              {/* Mid CTA */}
              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Make Smarter Mortgage Decisions
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Understanding mortgage APR can save you thousands. Let our experts help you find the
                  best loan terms and avoid hidden costs.
                </p>
                <Link
                  href="/#get-pre-approved"
                  className="btn-primary"
                >
                  Get a Free APR Consultation
                </Link>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="interest-rate">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Interest Rate
                  </h2>
                  <p>
                    A home loan&apos;s interest rate is expressed as a percentage of the principal loan
                    amount that a mortgage lender charges you on an annual basis for borrowing your
                    principal loan amount.
                  </p>
                  <p className="mt-4">
                    This rate doesn&apos;t include fees or closing costs and is only based on the amount you
                    borrow for your home loan.
                  </p>
                </section>

                <section id="apr">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    APR
                  </h2>
                  <p>
                    An APR is a home loan&apos;s Annual Percentage Rate. Much like the interest rate, APR is
                    also displayed as a percentage, but it is typically higher than the accompanying
                    interest rate. This is because an APR not only takes your interest rate into account,
                    but also factors in other costs, such as most closing costs and lender fees. The APR
                    provides a more holistic view of your total mortgage cost on an annual basis.
                  </p>
                </section>

                <section id="how-closing-costs-and-interest-rate-affect-apr">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    How closing costs and interest rate affect APR?
                  </h2>
                  <p>
                    As a general rule of thumb, interest rates and APRs have an inverse relationship. A low
                    closing cost or &ldquo;no-closing-cost&rdquo; loan with higher interest rate will lead to a lower
                    APR. However, when paying loan closing costs, including paying points for lower interest
                    rates leads to a higher APR.
                  </p>
                </section>

                <section id="are-you-getting-a-good-deal">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Are you getting a good deal?
                  </h2>
                  <p className="mb-4">
                    While some lenders may advertise a no-closing-cost loan, it&apos;s important to understand
                    that those costs are still there, but instead of paying them upfront, they&apos;re
                    &ldquo;absorbed&rdquo; into the loan.
                  </p>
                  <p className="mb-4">
                    A common way to do this is by adjusting the opposing levers on interest rates and APR.
                    In other words, in exchange for a higher interest rate, you may be able to lower your
                    upfront closing costs and your total APR. Don&apos;t be fooled. APRs and Interest Rates can
                    be manipulated. Loan estimates and fee worksheets cannot.
                  </p>
                  <p className="mb-4">So, how do you know if you&apos;re getting a good deal?</p>
                  <p className="mb-4">
                    To know whether you&apos;re getting a good deal or not, and to determine the lender&apos;s cost
                    of the loan, or in other words your closing costs, focus on the lender&apos;s fees, not the
                    rate.
                  </p>
                  <p>
                    We hope this helps give you a good stepping off point to your questions about Interest
                    Rate and APR. If you have any more questions about this, or anything else mortgage
                    related, don&apos;t hesitate to reach out.
                  </p>
                </section>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work
                    with you and help you through the whole process.
                  </p>
                </div>

                <p className="text-[15px]">
                  Broaden your mortgage expertise by reading about{" "}
                  <Link href="/when-is-a-mortgage-payment-actually-considered-late/" className="text-[#3fb364] font-semibold hover:underline">
                    payment timing
                  </Link>{" "}
                  and{" "}
                  <Link href="/how-to-calculate-how-much-pmi-mortgage-insurance-will-be/" className="text-[#3fb364] font-semibold hover:underline">
                    understanding PMI costs
                  </Link>
                  . Discover the mechanics of{" "}
                  <Link href="/understanding-amortization-chart/" className="text-[#3fb364] font-semibold hover:underline">
                    amortization
                  </Link>{" "}
                  and explore what{" "}
                  <Link href="/what-are-mortgage-trigger-leads/" className="text-[#3fb364] font-semibold hover:underline">
                    triggers lead generation
                  </Link>
                  . You can also get insights into{" "}
                  <Link href="/what-are-closing-costs-on-a-home-purchase/" className="text-[#3fb364] font-semibold hover:underline">
                    closing costs
                  </Link>{" "}
                  and examine cases where{" "}
                  <Link href="/mortgage-payoff-higher-than-mortgage-balance/" className="text-[#3fb364] font-semibold hover:underline">
                    mortgage payoff exceeds balance
                  </Link>
                  .
                </p>

                <p className="text-[#5a6b52] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material
                  has been prepared for informational purposes only. You should consult your own tax,
                  legal, and accounting advisors before engaging in any transaction. Mortgage Brothers
                  NMLS 1007154, NMLS #210917 and 1618695. Equal housing lender.
                </p>

                {/* Podcast transcript */}
                <section id="transcript-of-the-mortgage-brothers-podcast-how-does-a-mortgage-apr-work-and-what-does-it-mean">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Transcript of the Mortgage Brothers Podcast
                  </h2>

                  <h3
                    className="text-[#08271B] text-[20px] font-normal mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    How Does a Mortgage APR Work and What Does It Mean?
                  </h3>

                  <p className="text-[15px] text-[#6a7a6a] mb-8 italic">
                    Eddie Knoell and Tom Knoell — Mortgage Brothers Podcast
                  </p>

                  <div className="space-y-8">
                    <div>
                      <p className="mb-4">
                        <strong>Eddie Knoell:</strong> I&apos;m Eddie Knoell.
                        <br />
                        <strong>Tom Knoell:</strong> And I&apos;m Tom Knoell. Welcome, everyone! This is the
                        Mortgage Brothers Podcast Show.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">What Is APR? [00:02]</h3>
                      <p className="mb-4">
                        <strong>Eddie:</strong> Today, we&apos;re answering a common question: What is APR, and
                        how does it work for mortgages?
                      </p>
                      <p className="mb-4">
                        <strong>Tom:</strong> APR, or Annual Percentage Rate, is a term you often hear,
                        especially in car commercials. But when it comes to mortgages, many borrowers get
                        confused about how it differs from the interest rate.
                      </p>
                      <p>
                        <strong>Eddie:</strong> Borrowers who ask about APR are usually doing their
                        research—they&apos;ve read somewhere that they need to pay attention to it. But
                        understanding what APR actually means is just as important.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Why Does APR Exist? [02:27]</h3>
                      <p className="mb-4">
                        <strong>Tom:</strong> APR was created as a way to help consumers compare loan costs
                        between lenders. The idea is that it provides an &ldquo;all-in&rdquo; number that includes both
                        the interest rate and certain loan fees.
                      </p>
                      <p>
                        <strong>Eddie:</strong> In theory, APR allows borrowers to compare apples to apples
                        when evaluating different mortgage offers. But in practice, it can be misleading.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Understanding the Interest Rate vs. APR [03:37]
                      </h3>
                      <p className="mb-4">
                        <strong>Eddie:</strong> Your interest rate is simply the percentage charged on your
                        loan balance annually. It stays the same throughout the life of the loan.
                      </p>
                      <p className="mb-4">
                        <strong>Tom:</strong> APR, on the other hand, includes both the interest rate and
                        certain loan-related costs. This means that APR will almost always be slightly higher
                        than the interest rate.
                      </p>
                      <p className="mb-3">
                        <strong>Eddie:</strong> Think of it this way:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-[15.5px]">
                        <li>Interest Rate = Cost of borrowing the money</li>
                        <li>APR = Interest rate + certain fees included in the loan</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Why APR Can Be Misleading [05:27]
                      </h3>
                      <p className="mb-4">
                        <strong>Tom:</strong> The problem with APR is that not all lenders include the same
                        fees in their calculations. While regulations exist, we&apos;ve seen variations in how
                        different lenders calculate APR.
                      </p>
                      <p className="mb-4">
                        <strong>Eddie:</strong> This means that two loans with the same APR might actually
                        have different total costs, depending on what each lender includes in the calculation.
                      </p>
                      <p>
                        <strong>Tom:</strong> That&apos;s why it&apos;s important to not rely on APR alone when
                        comparing loans.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        How Closing Costs Affect APR [06:34]
                      </h3>
                      <p className="mb-4">
                        <strong>Eddie:</strong> In general, APR increases when loan costs are higher.
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-[15.5px] mb-4">
                        <li>If a loan has zero closing costs, the APR and interest rate should be the same.</li>
                        <li>If a loan includes points or other fees, the APR will be higher than the interest rate.</li>
                      </ul>
                      <p>
                        <strong>Tom:</strong> This is why two lenders offering the same interest rate might
                        show different APRs—one might be including more fees in the calculation.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        The Best Way to Compare Loans [08:15]
                      </h3>
                      <p className="mb-4">
                        <strong>Eddie:</strong> The best way to ensure you&apos;re getting the best deal is to ask
                        each lender for:
                      </p>
                      <ol className="list-decimal pl-6 space-y-2 text-[15.5px] mb-4">
                        <li>The exact interest rate they&apos;re offering.</li>
                        <li>The total, total closing costs (everything included).</li>
                      </ol>
                      <p>
                        <strong>Tom:</strong> I say &ldquo;total, total&rdquo; because some lenders try to leave out
                        certain costs when quoting fees. If you compare rates this way, you won&apos;t need to
                        rely on APR alone.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Example Loan Comparison [09:19]
                      </h3>
                      <p className="mb-4">Let&apos;s look at two example loans:</p>
                      <p className="mb-2 font-semibold text-[#052316]">Loan A:</p>
                      <ul className="list-disc pl-6 space-y-2 text-[15.5px] mb-4">
                        <li>Interest Rate: 3.25%</li>
                        <li>Closing Costs: $0</li>
                        <li>APR: 3.25% (since there are no fees)</li>
                      </ul>
                      <p className="mb-2 font-semibold text-[#052316]">Loan B:</p>
                      <ul className="list-disc pl-6 space-y-2 text-[15.5px] mb-4">
                        <li>Interest Rate: 2.875%</li>
                        <li>Closing Costs: $3,750</li>
                        <li>APR: 2.973% (higher because it includes the loan costs)</li>
                      </ul>
                      <p>
                        <strong>Eddie:</strong> Even though Loan B has a lower interest rate, the APR is
                        higher due to the added costs.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Final Thoughts on APR [10:59]
                      </h3>
                      <p className="mb-4">
                        <strong>Tom:</strong> APR is a helpful tool, but it can be manipulated or calculated
                        differently by lenders.
                      </p>
                      <p className="mb-4">
                        <strong>Eddie:</strong> The key takeaway is: Focus on total loan costs, not just APR.
                      </p>
                      <p>
                        <strong>Tom:</strong> And remember, APR mainly accounts for loan costs, not prepaids
                        like taxes and insurance, which can also impact your total costs.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">What Should You Do? [12:39]</h3>
                      <ol className="list-decimal pl-6 space-y-3 text-[15.5px] mb-4">
                        <li>Compare lenders by asking for the exact interest rate and total closing costs.</li>
                        <li>Be cautious when using APR as the sole factor in decision-making.</li>
                        <li>If you have questions, ask your lender to break down what&apos;s included in the APR calculation.</li>
                      </ol>
                      <p>
                        <strong>Eddie:</strong> Hopefully, this gives you a clearer understanding of how APR
                        works. If you have questions about buying or refinancing, reach out to us!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Contact Information</h3>
                      <p className="mb-2">
                        Email:{" "}
                        <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                          Contact Form
                        </Link>
                      </p>
                      <p className="mb-2">NMLS: 1007154</p>
                      <p className="text-[14px] text-[#5a6b52]">
                        Disclaimer: This content is for informational purposes only. Please consult legal or
                        financial professionals before making any decisions.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/what-are-mortgage-trigger-leads/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/what-are-closing-costs-on-a-home-purchase/"
                  className="text-[#5a6b52] hover:text-[#3fb364] transition-colors"
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
              Have questions about financing options? Our experts are here to help with personalized
              advice for any mortgage type. Fill out our form to get started today!
            </p>
            <Link
              href="/contact-us/"
              className="btn-primary"
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
              Ready to take the next step towards your dream home? One of our experienced mortgage
              professionals will get back to you promptly with personalized solutions tailored to your
              unique financial situation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-[14.5px] text-[#08271B]">
              <a href="tel:+16025352171" className="font-semibold hover:text-[#3fb364] transition-colors">
                +1 602-535-2171
              </a>
              <span className="hidden sm:inline text-[#c8c8b8]">|</span>
              <span className="text-center">
                1599 East Orangewood Ave Suite 200, Phoenix, AZ 85020
              </span>
            </div>
            <Link
              href="/#get-pre-approved"
              className="btn-primary"
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