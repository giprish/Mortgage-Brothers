import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

const relatedLinks = [
  {
    label: "Will Commissions Count Towards a Loan?",
    href: "/get-part-income-commission-can-use-qualify-loan/",
  },
  {
    label: "Rapid Rescore Boosts Qualification",
    href: "/how-a-rapid-rescore-can-help-to-get-qualified-for-a-mortgage/",
  },
  {
    label: "Relocating While Remote",
    href: "/can-i-relocate-and-get-a-mortgage-while-working-remotely-out-of-state/",
  },
  {
    label: "DSCR Loan Alternative to Hard Money",
    href: "/dscr-loan-the-best-alternative-to-hard-money/",
  },
  {
    label: "Getting a Mortgage with Employment Gaps",
    href: "/getting-a-mortgage-with-employment-gaps/",
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
      name: "How to count Commissions and Bonuses and Tips",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Conventional loans, you need to have 12 months of history receiving commission or bonus income. It can come from multiple employers as long as they are in a similar industry. There should be no job gap greater than 30 days. Conventional loans also require 24 months of tip income with no gaps, and the employer must confirm that the tip income is expected to continue.",
      },
    },
    {
      "@type": "Question",
      name: "What are the commission and bonus income requirements for VA financing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VA financing requires 24 months of commission or bonus income from the same employer, with no job gaps. It also requires 24 months of tip income with no gaps, and the employer must confirm that the tip income is expected to continue.",
      },
    },
    {
      "@type": "Question",
      name: "What are the commission and bonus income requirements for FHA financing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FHA financing requires 12 months of commission or bonus income from the same employer, with no job gaps greater than 30 days. It also requires 12 months of tip income with no gaps, and the employer must confirm that the tip income is expected to continue.",
      },
    },
    {
      "@type": "Question",
      name: "How is tip income considered for different loan types?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tip income typically requires 24 months of history for Conventional and VA loans, and 12 months for FHA loans. There must be no gaps in tip income, and the employer needs to confirm that the tip income is expected to continue.",
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

export default function CountCommissionsBonusesTipsPage() {
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
          title={<>How to Count Commissions and Bonuses and Tips</>}
          excerpt="Learn how lenders count commissions, bonuses, and tip income for Conventional, VA, and FHA loans—and how long of a history you need."
          category="Mortgage Qualifications"
          categoryHref="/mortgage-qualifications/"
          dateLabel="Feb 6, 2025"
          readTime="8 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                This episode covers how to count commissions, bonuses, and tips when it comes to getting
                conventional, VA, or FHA loans.
              </p>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <iframe
                  src="https://www.youtube.com/embed/PxaUC0XSQys"
                  title="How to Count Commissions and Bonuses and Tips"
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
                  Unsure How to Count Your Bonuses and Tips?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Learn how to include commissions, bonuses, and tips as income for your mortgage application.
                  Get expert advice today!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="btn-primary"
                  >
                    Get Help with Mortgage Income Requirements &rarr;
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="conventional-loans">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Conventional Loans
                  </h2>
                  <p>
                    What&apos;s important to know is that you need to have 12 months of history receiving
                    commission or bonus income. It should be noted that it can come from multiple employers.
                    So, it&apos;s okay if your bonuses or commissions come from one employer for six months and
                    a different employer for the other six. We can combine those for conventional loans. That
                    being said the industries need to be similar. It can&apos;t be bonuses from selling water
                    filters for the first six months and then bonuses you receive from haircutting for the next
                    six.
                  </p>
                </section>

                <section id="va-financing">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    VA Financing
                  </h2>
                  <p>
                    VA financing requires that these commissions or bonuses have to be received for 24 months,
                    you cannot have any job gaps, and they must come from the same employer.
                  </p>
                </section>

                <section id="fha-financing">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    FHA Financing
                  </h2>
                  <p>
                    FHA financing is similar to conventional financing. You&apos;ll need 12 months of receipts;
                    however, you can&apos;t combine two employers.
                  </p>
                </section>

                <section id="how-about-tip-income">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    How about tip income?
                  </h2>
                  <p>
                    So, there are a lot of people making tip income. In these cases, you will typically need
                    two years&apos; worth of tip income for conventional and VA and one year for FHA.
                  </p>
                </section>

                <section id="to-summarize">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    To Summarize
                  </h2>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">Conventional Loans</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>Commissions and Bonuses are treated very similarly</li>
                    <li>
                      Conventional loans need 12 months receipt of commission/bonus with no job gap greater
                      than 30 days
                    </li>
                    <li>
                      It&apos;s okay if borrower changed employers within the same industry and line of work
                    </li>
                    <li>
                      Conventional requires 24 months of tip income, NO GAPS receipt, and the employer needs
                      to confirm that the tip income is expected to continue
                    </li>
                  </ul>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">VA Loans</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>
                      VA requires 24 months receipt on commission/bonus with no job gap greater than 30 days
                    </li>
                    <li>
                      VA requires 24 months of tip income, NO GAPS receipt, and the employer needs to confirm
                      that the tip income is expected to continue
                    </li>
                  </ul>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">FHA Loans</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      FHA requires 12 months receipt on commission/bonus with no job gap greater than 30 days
                    </li>
                    <li>
                      FHA requires 12 months of tip income, NO GAPS receipt, and the employer needs to confirm
                      that the tip income is expected to continue
                    </li>
                  </ul>
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

                <p className="text-[#5a6b52] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has
                  been prepared for informational purposes only. You should consult your own tax, legal, and
                  accounting advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS
                  #210917 and 1618695. Equal housing lender.
                </p>

                <p>
                  Discover effective strategies and tips on counting commissions and bonuses to strengthen your
                  mortgage application. Expand your knowledge by learning how to{" "}
                  <Link
                    href="/get-part-income-commission-can-use-qualify-loan/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    use part of your commission income to qualify for a loan
                  </Link>
                  , finding out how a{" "}
                  <Link
                    href="/how-a-rapid-rescore-can-help-to-get-qualified-for-a-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    rapid rescore can boost your credit profile
                  </Link>
                  , exploring the process of{" "}
                  <Link
                    href="/can-i-relocate-and-get-a-mortgage-while-working-remotely-out-of-state/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    relocating and getting a mortgage while working remotely
                  </Link>
                  , and understanding why a{" "}
                  <Link
                    href="/dscr-loan-the-best-alternative-to-hard-money/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    DSCR loan might be the best alternative to hard money
                  </Link>
                  .
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
                        How Lenders Consider Commissions, Bonuses, and Tips for Mortgage Approval
                      </h3>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Introduction [00:02]</h3>
                      <p className="mb-3">
                        Welcome to the Mortgage Brothers Podcast! I&apos;m Eddie Knoell, and I&apos;m Tom
                        Knoell.
                      </p>
                      <p className="mb-3">
                        Today, we&apos;re covering a key topic that affects a lot of borrowers: How do
                        commissions, bonuses, and tip income count when applying for a mortgage?
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Can I use this income to qualify for a loan?</li>
                        <li>How long do I need to show earnings?</li>
                        <li>Are there different rules for different mortgage types?</li>
                      </ul>
                      <p>Let&apos;s break it all down.</p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Commissions &amp; Bonuses: How Do They Factor Into Mortgage Qualification? [00:41]
                      </h3>
                      <p className="mb-3">
                        Lenders need proof of steady earnings before considering commissions &amp; bonuses as
                        income.
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          <strong>Conventional Loans (Fannie Mae &amp; Freddie Mac):</strong> At least 12
                          months of documented history.
                        </li>
                        <li>
                          <strong>VA Loans:</strong> A full 24 months of consistent earnings, with no job gaps
                          and the same employer.
                        </li>
                        <li>
                          <strong>FHA Loans:</strong> 12 months of documented earnings, but must be from one
                          employer only.
                        </li>
                      </ul>
                      <p className="mb-3">
                        Conventional loans allow earnings from multiple employers (as long as it&apos;s the
                        same type of work). VA &amp; FHA require income to come from a single employer for the
                        required period.
                      </p>
                      <p>
                        Example: If you earned commissions selling water filtration systems for 6 months, then
                        switched to selling home appliances for another 6 months, that counts under
                        conventional loans. However, if you switched from sales to hairstyling, the new
                        commissions wouldn&apos;t count toward your mortgage income.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Tip Income: How Lenders View It [03:09]
                      </h3>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          <strong>Conventional &amp; VA Loans:</strong> 2 years of reported tip earnings
                          required.
                        </li>
                        <li>
                          <strong>FHA Loans:</strong> Only 1 year of reported earnings needed.
                        </li>
                      </ul>
                      <p className="mb-3">
                        Think of tip income like self-employment earnings. Lenders want to see a steady,
                        documented income history.
                      </p>
                      <p className="mb-3">How do lenders verify tips?</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          If tips are paid via credit card, they&apos;re documented on pay stubs and W-2s.
                        </li>
                        <li>
                          If you receive cash tips, they only count if you report them on your tax returns.
                        </li>
                      </ul>
                      <p>
                        Pro Tip: If your income includes tips, ensure they&apos;re properly reported on your
                        pay stubs or tax returns so they can help you qualify for a mortgage!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Common Myths About Commission, Bonus &amp; Tip Income
                      </h3>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          &ldquo;I&apos;ve been getting tips/bonuses for 9 months—can I use that income?&rdquo;
                          No. You need at least 12 months for conventional/FHA loans and 24 months for VA
                          loans.
                        </li>
                        <li>
                          &ldquo;I switched jobs recently—can I still count my commissions?&rdquo; It depends.
                          If it&apos;s a conventional loan and you stayed in the same field, you can combine
                          income from multiple employers. VA &amp; FHA loans require one employer.
                        </li>
                        <li>
                          &ldquo;I receive cash tips but don&apos;t report them—will they count?&rdquo; No.
                          Only documented tip income can be used for mortgage qualification.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Key Takeaways</h3>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          Commissions &amp; bonuses require at least 12 months (conventional/FHA) or 24 months
                          (VA).
                        </li>
                        <li>
                          Tip income requires 2 years (Conventional &amp; VA) or 1 year (FHA).
                        </li>
                        <li>
                          Cash tips must be reported on tax returns to count toward your mortgage application.
                        </li>
                      </ul>
                      <p>
                        Need help figuring out how much income you can use for a mortgage?{" "}
                        <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                          Contact us for a free consultation!
                        </Link>
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/get-part-income-commission-can-use-qualify-loan/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
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