import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

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
      name: "Do closing costs vary a lot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Closing costs usually do not vary as much as people think by loan size, because they mostly reflect the work needed to close the loan. The difference between a $200,000 loan and a $500,000 loan can be only a few hundred dollars.",
      },
    },
    {
      "@type": "Question",
      name: "What’s an average closing cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A common purchase estimate is around $3,500, with many loans landing between $3,000 and $3,800. In the featured example, total closing costs were $3,563 before prepaids like taxes and insurance.",
      },
    },
  ],
};

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function ClosingCostsPage() {
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
          title={<>What are Closing Costs on a Home Purchase</>}
          excerpt="Learn what closing costs are on a home purchase, what fees are true lender costs, and how prepaids like taxes and insurance affect cash-to-close."
          category="Mortgage Basics"
          categoryHref="/mortgage-basics/"
          dateLabel="Feb 3, 2025"
          readTime="9 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                This week we are talking about closing costs on purchases, what they are, what average numbers look like, and how to read them clearly on a real loan estimate.
              </p>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <iframe
                  src="https://www.youtube.com/embed/vMUCzl9PVtU"
                  title="What are Closing Costs on a Home Purchase"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2 className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Know Your Closing Costs Before You Buy
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Don&apos;t let hidden fees surprise you. We&apos;ll break down your estimate line by line so you know exactly what is loan cost versus cash-to-close prepaids.
                </p>
                <Link href="/#get-pre-approved" className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all">
                  Get a Free Closing Cost Estimate
                </Link>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section>
                  <h2 className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Closing Costs are about the work that goes into closing the loan
                  </h2>
                  <p>
                    A lot of people assume closing costs are just a percentage of the sales price, but that&apos;s mostly a rough back-of-napkin shortcut. In practice, closing costs are the costs to do the loan and complete the work needed to close.
                  </p>
                </section>

                <section>
                  <h2 className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Do closing costs vary a lot?
                  </h2>
                  <p>
                    Not nearly as much as people expect. There is not much extra work to close a $500,000 loan versus a $200,000 loan, so the difference in closing costs might only be around $800 even with a much larger loan amount.
                  </p>
                </section>

                <section>
                  <h2 className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    What&apos;s an average closing cost?
                  </h2>
                  <p>
                    A quick rule of thumb is about $3,500 for a purchase. Most purchase loans typically land around $3,000 to $3,800. As a comparison point, refinances are often lower, around the mid-$2,000 range.
                  </p>
                </section>

                <section>
                  <h2 className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    What makes up the numbers that go into the closing costs?
                  </h2>
                  <p className="mb-4">
                    In the example scenario, the sales price is $370,000 with 20% down, and total closing costs are $3,563. The larger number shown on many estimates can be higher because it includes prepaids for taxes and insurance.
                  </p>
                  <p>
                    That distinction matters: closing costs are not the same as cash-to-close. Prepaid taxes and insurance are cash considerations, not lender processing fees.
                  </p>
                </section>

                <section>
                  <h2 className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Let&apos;s break down the $3,563 in closing costs
                  </h2>
                  <p className="mb-4">
                    The breakdown includes an underwriting fee of about $999, appraisal around $535, credit report around $48, flood cert around $11, and tax-related services around $25 and $64. These are common ranges borrowers see.
                  </p>
                  <p className="mb-4">
                    Title charges such as CPL, doc prep, endorsements, lender&apos;s policy, and escrow or settlement fees often make up a large portion, commonly around $1,800 to $1,900 in examples like this.
                  </p>
                  <p>
                    Together, these line items represent the work performed by lenders and third parties to verify, document, and close the transaction properly.
                  </p>
                </section>

                <section>
                  <h2 className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    What&apos;s the deal with prepaids and other fees?
                  </h2>
                  <p className="mb-4">
                    Prepaids can include recording fees, homeowners insurance, mortgage insurance, and property taxes funded into escrow. These can add meaningful dollars to cash-to-close, but they are not lender closing costs.
                  </p>
                  <p>
                    Think of escrow like prefunding future bills through your payment so taxes and insurance are paid when due. It is your money set aside for your obligations, not a separate lender markup.
                  </p>
                </section>

                <section>
                  <h2 className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Wrapping things up
                  </h2>
                  <p>
                    The most important takeaway is learning to separate true closing costs from prepaid items. Once you understand that distinction, comparing estimates becomes much easier and much more accurate.
                  </p>
                </section>

                <section id="transcript">
                  <h2 className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-6 border-b border-[#e8e0d0] pb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Transcript of the Mortgage Brothers Podcast
                  </h2>

                  <div className="space-y-8 text-[15.5px]">
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        What Are Closing Costs on a Home Purchase?
                      </h3>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Introduction</h3>
                      <p className="mb-3">
                        [00:02]<br />
                        Welcome to the Mortgage Brothers Podcast! This week, we&apos;re talking about <strong>closing costs on home purchases</strong>—what they are, how much they typically cost, and how to understand them using a <strong>Loan Estimate</strong>.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Are Closing Costs a Percentage of the Home Price?
                      </h3>
                      <p className="mb-3">
                        [01:44]<br />
                        Many people believe closing costs are a percentage of the home price, but that&apos;s not really accurate. Closing costs cover the <strong>work required to process the loan</strong>, and the cost doesn&apos;t scale exactly with the loan amount.
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>For a <strong>$200,000 home</strong>, closing costs are often between <strong>$3,000 and $3,800</strong>.</li>
                        <li>For a <strong>$500,000 home</strong>, they might not be much higher.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        A Simple Rule of Thumb for Closing Costs
                      </h3>
                      <p className="mb-3">
                        [02:54]<br />
                        If you&apos;re estimating closing costs on a home <strong>purchase</strong>, a good rule of thumb is <strong>$3,500</strong>.<br />
                        For <strong>refinances</strong>, closing costs tend to be <strong>lower</strong>, around <strong>$2,500</strong>.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Breaking Down Closing Costs Using a Loan Estimate
                      </h3>
                      <p className="mb-3">
                        [03:46]<br />
                        To help explain closing costs, let&apos;s look at a real example:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li><strong>Home price</strong>: $370,000</li>
                        <li><strong>Down payment</strong>: 20%–30%</li>
                        <li><strong>Total closing costs</strong>: <strong>$3,563</strong> (excluding prepaids)</li>
                      </ul>
                      <p className="mb-3">
                        💡 <strong>Important Note:</strong> Many Loan Estimates will show a higher <strong>Estimated Closing Costs</strong> amount because it includes <strong>prepaids</strong> (taxes, insurance, etc.). <strong>Actual loan fees are separate.</strong>
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Main Categories of Closing Costs
                      </h3>
                      <p className="mb-3">
                        [05:35]<br />
                        On <strong>page 2</strong> of your Loan Estimate, the left side lists all <strong>closing costs</strong>. These include:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li><strong>Underwriting Fees</strong> (~$1,000)</li>
                        <li><strong>Appraisal Fee</strong> ($500–$550)</li>
                        <li><strong>Credit Report Fee</strong> ($40–$60)</li>
                        <li><strong>Flood Certification &amp; Tax Service Fees</strong> ($15 for flood, ~$80 for tax verification)</li>
                        <li><strong>Title Company Fees</strong> (~$1,800–$1,900)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Underwriting Fees &amp; Loan Origination Fees
                      </h3>
                      <p className="mb-3">
                        [06:04]<br />
                        Most loans <strong>do not</strong> have points, but underwriting fees are standard (~$1,000).
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Appraisal Fee
                      </h3>
                      <p className="mb-3">
                        [06:37]<br />
                        Appraisals cost <strong>$500–$550</strong> (slightly higher for <strong>VA loans</strong>, around <strong>$600</strong>). Some borrowers <strong>qualify for an appraisal waiver</strong>, meaning they may <strong>not need an appraisal</strong> at all.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Credit Report Fee
                      </h3>
                      <p className="mb-3">
                        [07:42]<br />
                        A <strong>credit report is not free</strong>—lenders pay to pull reports from <strong>Equifax, Experian, and TransUnion</strong>. This typically costs <strong>$40–$60</strong>.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Flood Certification &amp; Tax Service Fees
                      </h3>
                      <p className="mb-3">
                        [08:46]
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li><strong>Flood Certification Fee</strong> (~$15) ensures the property doesn&apos;t require flood insurance.</li>
                        <li><strong>Tax Service Fee</strong> (~$80) verifies that property taxes are paid on time.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Title Company Fees
                      </h3>
                      <p className="mb-3">
                        [09:46]<br />
                        Title fees are set by <strong>third-party title companies</strong> (not the lender). These include:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li><strong>Closing Protection Letter (CPL)</strong></li>
                        <li><strong>Document Preparation Fees</strong></li>
                        <li><strong>Lender&apos;s Title Policy</strong></li>
                        <li><strong>Settlement/Escrow Fee</strong></li>
                      </ul>
                      <p className="mb-3">
                        💡 <strong>Key Title Fees</strong>:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li><strong>Settlement/Escrow Fee</strong> (~$500–$600) covers the labor costs for handling the transaction.</li>
                        <li><strong>Lender&apos;s Title Policy</strong> ensures the property&apos;s ownership history is clear and prevents future claims against the property.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        What About Prepaids &amp; Impound Accounts?
                      </h3>
                      <p className="mb-3">
                        [14:09]<br />
                        Some costs listed on the Loan Estimate are <strong>not actually closing costs</strong>—these are <strong>prepaid expenses</strong> like:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li><strong>Homeowners insurance</strong> (typically one year upfront)</li>
                        <li><strong>Property taxes</strong> (several months of escrow payments)</li>
                      </ul>
                      <p className="mb-3">
                        These prepaids are <strong>not fees</strong> but <strong>funds set aside for future payments</strong>.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Final Thoughts: Understanding Your Closing Costs
                      </h3>
                      <p className="mb-3">
                        [16:17]<br />
                        The <strong>key takeaway</strong> is to distinguish between <strong>actual loan closing costs ($3,500 range)</strong> and <strong>prepaid expenses</strong>.
                      </p>
                      <p className="mb-3">
                        If a lender tells you <strong>closing costs are only $1,000</strong>, they&apos;re likely only quoting <strong>their fee</strong>, not the total amount.
                      </p>
                      <p className="mb-3">
                        💡 <strong>Quick Summary</strong>:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li><strong>Purchase Closing Costs</strong>: ~$3,500</li>
                        <li><strong>Refinance Closing Costs</strong>: ~$2,500</li>
                        <li><strong>Prepaids &amp; Taxes</strong>: Additional, but not actual fees</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Need More Help?
                      </h3>
                      <p className="mb-3">
                        If you have questions about closing costs or need a mortgage quote, reach out to us!
                      </p>
                      <p className="mb-3">
                        📩 <strong>Email</strong>: <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">Contact Form</Link><br />
                        🏠 <strong>NMLS</strong>: 1007154
                      </p>
                      <p className="mb-3 italic">
                        Disclaimer: This content is for informational purposes only. Please consult legal or financial professionals before making any decisions.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with you and help you through the whole process.
                  </p>
                </div>

                <p className="text-[15px]">
                  Explore more mortgage basics, including{" "}
                  <Link href="/when-is-a-mortgage-payment-actually-considered-late/" className="text-[#3fb364] font-semibold hover:underline">
                    when a mortgage payment is actually considered late
                  </Link>
                  ,{" "}
                  <Link href="/how-to-calculate-how-much-pmi-mortgage-insurance-will-be/" className="text-[#3fb364] font-semibold hover:underline">
                    how to calculate PMI mortgage insurance
                  </Link>
                  ,{" "}
                  <Link href="/understanding-amortization-chart/" className="text-[#3fb364] font-semibold hover:underline">
                    understanding amortization charts
                  </Link>
                  ,{" "}
                  <Link href="/what-are-mortgage-trigger-leads/" className="text-[#3fb364] font-semibold hover:underline">
                    what mortgage trigger leads are
                  </Link>
                  ,{" "}
                  <Link href="/what-are-closing-costs-on-a-home-purchase/" className="text-[#3fb364] font-semibold hover:underline">
                    what closing costs are on a home purchase
                  </Link>
                  , and{" "}
                  <Link href="/mortgage-payoff-higher-than-mortgage-balance/" className="text-[#3fb364] font-semibold hover:underline">
                    why mortgage payoff can be higher than mortgage balance
                  </Link>
                  .
                </p>

                <p className="text-[#8a9a7a] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has been prepared for informational purposes only. You should consult your own tax, legal, and accounting advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS #210917 and 1618695. Equal housing lender.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link href="/how-does-a-mortgage-apr-work-and-what-does-it-mean/" className="text-[#3fb364] font-semibold hover:underline">
                  ← Previous Post
                </Link>
                <Link href="/mortgage-payoff-higher-than-mortgage-balance/" className="text-[#8a9a7a] hover:text-[#3fb364] transition-colors">
                  Next Post →
                </Link>
              </div>
            </article>

            <aside className="lg:sticky lg:top-[100px] h-fit space-y-6">
              <div className="bg-[#f0f2f5] border-t-4 border-[#3fb364] rounded-b-2xl p-6 text-center shadow-sm">
                <p className="text-[#08271B] text-[11px] font-bold tracking-[0.15em] uppercase mb-1">The Mortgage Brothers Team</p>
                <h3 className="text-[#08271B] text-[20px] font-extrabold uppercase tracking-wide leading-snug mt-4 mb-2">Your Dream Home Awaits!</h3>
                <p className="text-[#6a7a6a] text-[11px] font-semibold uppercase tracking-wide mb-4">Expert mortgage solutions tailored to your needs</p>
                <p className="text-[#3fb364] text-[14px] font-bold uppercase mb-5">Talk to a Broker Today!</p>
                <a href="tel:+16025352171" className="inline-flex items-center justify-center gap-2 w-full bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-semibold px-4 py-3 rounded-full transition-all">
                  +1 602-535-2171
                </a>
              </div>

              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                <h3 className="text-[#08271B] text-[16px] font-bold mb-4">Categories</h3>
                <ul className="space-y-2.5">
                  {categories.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-[13.5px] text-[#4e5b4e] hover:text-[#3fb364] transition-colors leading-snug">
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
                      <Link href={item.href} className="text-[13.5px] text-[#4e5b4e] hover:text-[#3fb364] transition-colors leading-snug">
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
                      <Link href={item.href} className="text-[13.5px] text-[#4e5b4e] hover:text-[#3fb364] transition-colors leading-snug">
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
            <h2 className="text-white text-[28px] lg:text-[34px] font-normal mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Tailored Mortgage Solutions
            </h2>
            <p className="text-[#c8c8b8] text-[15.5px] leading-relaxed mb-7">
              Have questions about financing options? Our experts are here to help with personalized advice for any mortgage type. Fill out our form to get started today!
            </p>
            <Link href="/contact-us/" className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all">
              Contact Us
            </Link>
          </div>
        </section>

        <section className="w-full bg-[#f5f0e8] py-16 lg:py-20 border-y border-[#e8e0d0]/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-[#08271B] text-[30px] lg:text-[38px] font-normal leading-tight mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get in Touch with The Mortgage Brothers
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-8 max-w-2xl mx-auto">
              Ready to take the next step towards your dream home? One of our experienced mortgage professionals will get back to you promptly with personalized solutions tailored to your unique financial situation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-[14.5px] text-[#08271B]">
              <a href="tel:+16025352171" className="font-semibold hover:text-[#3fb364] transition-colors">+1 602-535-2171</a>
              <span className="hidden sm:inline text-[#c8c8b8]">|</span>
              <span className="text-center">1599 East Orangewood Ave Suite 200, Phoenix, AZ 85020</span>
            </div>
            <Link href="/#get-pre-approved" className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all">
              Get Your Rate Now
            </Link>
          </div>
        </section>

        <section className="w-full py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2 className="text-[#08271B] text-[28px] lg:text-[34px] font-normal text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
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