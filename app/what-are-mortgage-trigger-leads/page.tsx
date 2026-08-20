import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";
import YoutubeLiteEmbed from '@/app/component/YoutubeLiteEmbed';

export const metadata: Metadata = getSeoMetadata("/what-are-mortgage-trigger-leads/");

const relatedLinks = [
  { label: "When is a mortgage payment actually considered late?", href: "/when-is-a-mortgage-payment-actually-considered-late/" },
  { label: "How to calculate PMI mortgage insurance", href: "/how-to-calculate-how-much-pmi-mortgage-insurance-will-be/" },
  { label: "Understanding amortization chart", href: "/understanding-amortization-chart/" },
  { label: "How does a mortgage APR work?", href: "/how-does-a-mortgage-apr-work-and-what-does-it-mean/" },
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
      name: "What is a mortgage trigger lead?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A trigger lead is generated when your credit is pulled for a mortgage application. Credit bureaus sell your contact information to lenders and marketing companies, who then call you trying to win your business—even though you never contacted them directly.",
      },
    },
    {
      "@type": "Question",
      name: "Why am I getting calls from strangers after applying for a mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Within a day or two of your credit being pulled, credit bureaus make your information available as a trigger lead. Other mortgage lenders and call centers buy these leads and contact you with competing offers, which is why strangers start calling shortly after you apply.",
      },
    },
    {
      "@type": "Question",
      name: "How do I stop unwanted mortgage trigger lead calls?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Register your phone number on the National Do Not Call Registry at www.donotcall.gov. It takes about 30 days to take effect, but once it does you should receive fewer telemarketing calls related to mortgage trigger leads.",
      },
    },
    {
      "@type": "Question",
      name: "How do I stop unwanted mortgage mail solicitations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit www.dmachoice.org to opt out of unwanted direct mail. The Direct Marketing Association's Mail Preference Service lets you control what promotional mail is sent to your home, which can reduce mortgage-related solicitations by mail.",
      },
    },
  ],
};

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function MortgageTriggerLeadsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="flex-grow relative z-0">
        {/* Featured hero image */}
        <ArticleHero
          title={<>What Are Mortgage Trigger Leads? Why Are Strangers Calling Your phone?</>}
          excerpt="Learn what mortgage trigger leads are, why strangers call after you apply, and how to stop unwanted calls and mail with Do Not Call and DMA Choice."
          category="Mortgage Basics"
          categoryHref="/mortgage-basics/"
          dateLabel="Feb 3, 2025"
          readTime="6 min read"
        />

        {/* Article + sidebar */}
        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                Today we&apos;re talking about trigger leads. We&apos;re going to cover what they are and how
                to avoid getting annoying phone calls after applying for a mortgage.
              </p>

              {/* Video */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <YoutubeLiteEmbed
                  videoId="iZ2oeMava7E"
                  title="What Are Mortgage Trigger Leads? Why Are Strangers Calling Your phone?"
                />
              </div>

              {/* Mid CTA */}
              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Tired of Unwanted Mortgage Calls?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Find out how to stop mortgage trigger leads from flooding your phone with sales calls.
                  Our experts can help protect your privacy and guide you through a stress-free home loan
                  process.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="btn-primary"
                  >
                    Get Expert Help Now
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="whats-a-trigger-lead">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What&apos;s a trigger lead?
                  </h2>
                  <p className="mb-5">
                    If you&apos;ve ever applied for a mortgage you&apos;ve likely received some of these
                    calls. A few days after your credit is pulled you start getting phone calls from people
                    you haven&apos;t previously been talking with. This is because of a trigger lead.
                  </p>
                  <p className="mb-5">
                    A trigger lead is a good, old-fashioned marketing trick. What happens is companies who
                    are interested in knowing when you&apos;ve applied for a mortgage can buy your contact
                    info. And once they have your info, they&apos;ll give you a call and try to swoop in and
                    close a deal. These leads are sold by the credit bureaus to companies that are interested
                    in knowing when you&apos;ve applied for a mortgage.
                  </p>
                  <p>
                    The unfortunate thing about these, besides being annoying, is that they can also be
                    scummy, especially when those calling give the impression that they&apos;re associate
                    with a company you&apos;re already working with (such as the Mortgage Brothers!).
                  </p>
                </section>

                <section id="solutions">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    So, what&apos;re some solutions?
                  </h2>
                  <p className="mb-5">How do we get these calls to stop?</p>
                  <p className="mb-5">
                    Federal law now directly restricts the practice. The Homebuyers Privacy Protection Act
                    (signed September 2025, effective March 2026) limits credit bureaus from selling trigger
                    leads except in narrow circumstances. That is the most important change for borrowers today.
                  </p>
                  <p className="mb-5">
                    As a supplement, you can still sign up with the Do Not Call registry at{" "}
                    <a
                      href="https://www.donotcall.gov"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      www.donotcall.gov
                    </a>
                    . While it takes about 30 days or so to go into effect, once it does, you&apos;ll get
                    less and less of these unwanted calls.
                  </p>
                  <p className="mb-5">
                    Now, unfortunately, when you put a stop on calls you can still get mailers. But,
                    thankfully there&apos;s a solution for those too. You can go to{" "}
                    <a
                      href="https://www.dmachoice.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      www.dmachoice.org
                    </a>{" "}
                    to get more control over what is sent to you by mail and what isn&apos;t.
                  </p>
                  <p>
                    No matter what you decide to do, we want you to know what protections you have and what
                    steps you can take to minimize any potential annoyances in your life, especially if it
                    has anything to do with getting a mortgage or loan.
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
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work
                    with you and help you through the whole process.
                  </p>
                </div>

                <p className="text-[15px]">
                  If you&apos;re interested in further mortgage topics, explore our article on{" "}
                  <Link href="/when-is-a-mortgage-payment-actually-considered-late/" className="text-[#3fb364] font-semibold hover:underline">
                    payment timing
                  </Link>{" "}
                  and learn how to{" "}
                  <Link href="/how-to-calculate-how-much-pmi-mortgage-insurance-will-be/" className="text-[#3fb364] font-semibold hover:underline">
                    calculate PMI costs
                  </Link>
                  . You can also dive into the details of{" "}
                  <Link href="/understanding-amortization-chart/" className="text-[#3fb364] font-semibold hover:underline">
                    amortization
                  </Link>
                  , get the lowdown on{" "}
                  <Link href="/how-does-a-mortgage-apr-work-and-what-does-it-mean/" className="text-[#3fb364] font-semibold hover:underline">
                    APR basics
                  </Link>
                  , and review{" "}
                  <Link href="/what-are-closing-costs-on-a-home-purchase/" className="text-[#3fb364] font-semibold hover:underline">
                    closing costs
                  </Link>{" "}
                  along with{" "}
                  <Link href="/mortgage-payoff-higher-than-mortgage-balance/" className="text-[#3fb364] font-semibold hover:underline">
                    mortgage payoff issues
                  </Link>
                  .
                </p>

                <p className="text-[#5a6b52] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material
                  has been prepared for informational purposes only. You should consult your own tax,
                  legal, and accounting advisors before engaging in any transaction. Mortgage Brothers
                  NMLS 1007154, NMLS #210917 and 1618695. Equal housing lender.
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
                        What Are Mortgage Trigger Leads?
                      </h3>
                      <p className="mb-3">
                        <strong>Eddie Knoell:</strong> I&apos;m Eddie Knoell.
                      </p>
                      <p className="mb-3">
                        <strong>Tom Knoell:</strong> And I&apos;m Tom Knoell. Welcome, everyone! This is the
                        Mortgage Brothers Podcast Show.
                      </p>
                      <p className="mb-3">
                        <strong>Eddie:</strong> Today, we&apos;re discussing trigger leads—why you suddenly
                        get calls from lenders after applying for a mortgage.
                      </p>
                      <p className="mb-3">
                        <strong>Tom:</strong> It happens often. You apply for a mortgage, and within a day
                        or two, multiple lenders—whom you&apos;ve never spoken to—start calling.
                      </p>
                      <p>
                        <strong>Eddie:</strong> No, they&apos;re not psychic! These are trigger leads, which
                        come from credit bureaus selling your information after your credit is pulled for a
                        mortgage application.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">How Trigger Leads Work</h3>
                      <p className="mb-3">
                        <strong>Tom:</strong> The credit bureaus sell trigger leads to lenders and marketing
                        companies. These businesses then call borrowers, trying to convince them to switch
                        lenders.
                      </p>
                      <p className="mb-3">
                        <strong>Eddie:</strong> Just to be clear: We do not buy trigger leads. We refuse to
                        participate in this practice.
                      </p>
                      <p>
                        <strong>Tom:</strong> Some companies build entire call centers around trigger leads,
                        using aggressive tactics to lure borrowers away from their original lender.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        The Dangers of Mortgage Trigger Leads
                      </h3>
                      <p className="mb-3">
                        <strong>Eddie:</strong> While not illegal, these practices can be deceptive. Some
                        companies give borrowers the impression that they are part of their mortgage process
                        when they are not.
                      </p>
                      <p className="mb-3">
                        <strong>Tom:</strong> I had a borrower tell me, &ldquo;Hey, Eddie, is this guy
                        real? He said he was working with your company.&rdquo;
                      </p>
                      <p>
                        <strong>Eddie:</strong> That&apos;s outright fraud. One company even asked my borrower
                        to send them personal documents, pretending to be part of our process!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        How to Protect Yourself from Trigger Leads
                      </h3>
                      <p className="mb-3">
                        <strong>Tom:</strong> If you apply for a mortgage, be cautious of unknown numbers.
                        If someone calls claiming to be part of your loan process, verify their identity.
                      </p>
                      <p className="mb-3">
                        <strong>Eddie:</strong> The best way to stop these calls is to register your phone
                        number on the National Do Not Call Registry. Website:{" "}
                        <a
                          href="https://www.donotcall.gov"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#3fb364] font-semibold hover:underline"
                        >
                          www.donotcall.gov
                        </a>
                      </p>
                      <p>
                        <strong>Tom:</strong> It takes about 30 days for registration to take effect, so
                        plan ahead if you&apos;re applying for a mortgage soon.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Stopping Unwanted Mail Solicitations
                      </h3>
                      <p className="mb-3">
                        <strong>Eddie:</strong> If you&apos;re also getting unwanted mortgage offers by
                        mail, you can opt out through the Direct Mail Association (DMA).
                      </p>
                      <p className="mb-3">
                        <strong>Tom:</strong> It costs $1 to register, and it can take up to three months
                        to take effect. Just Google Direct Mail Association opt-out to find the registration
                        link.
                      </p>
                      <p>
                        <strong>Eddie:</strong> Many marketing letters have fine print mentioning your
                        right to opt out, but it&apos;s buried in pages of credit offers. Taking control of
                        this upfront can reduce unwanted solicitations.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Final Thoughts</h3>
                      <p className="mb-3">
                        <strong>Tom:</strong> You shouldn&apos;t be afraid to have your credit pulled when
                        applying for a mortgage. However, you should be aware of these marketing tactics so
                        you can protect your privacy.
                      </p>
                      <p>
                        <strong>Eddie:</strong> If you&apos;ve found this information helpful, subscribe to
                        our podcast and follow us for more mortgage insights.
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
                        Disclaimer: This content is for informational purposes only. Please consult legal
                        or financial professionals before making any decisions.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/understanding-amortization-chart/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/how-does-a-mortgage-apr-work-and-what-does-it-mean/"
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