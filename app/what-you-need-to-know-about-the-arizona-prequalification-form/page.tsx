import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import JsonLd from "@/app/component/JsonLd";
import { buildArticleSchemas } from "@/lib/seo/structured-data";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";
import YoutubeLiteEmbed from '@/app/component/YoutubeLiteEmbed';

export const metadata: Metadata = getSeoMetadata("/what-you-need-to-know-about-the-arizona-prequalification-form/");

const relatedLinks = [
  {
    label: "Arizona BINSR Process",
    href: "/arizona-binsr-buyer-inspection-notice-and-seller-response/",
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

const articleFaqs = [
  { question: "What you need to know about the Arizona Prequalification Form", answer: "The Arizona Prequalification Form is a document required in real estate transactions in Arizona. It is issued by lenders and shows that a buyer has been reviewed and is financially capable of purchasing a home." },
  { question: "Why does the Arizona Prequalification Form matter to buyers?", answer: "For buyers, the Arizona Prequalification Form acts like a resume. It shows sellers that they are serious and financially qualified, which can strengthen their chances of getting their offer accepted in a competitive market." },
  { question: "Why is the Arizona Prequalification Form important for sellers?", answer: "For sellers, reviewing a buyer's prequalification form helps assess risk before accepting an offer. A strong form gives sellers confidence in the buyer's ability to qualify and can make the buyer's offer more attractive." },
] as const;

const articleJsonLd = buildArticleSchemas({
  blog: {
    pathname: "/what-you-need-to-know-about-the-arizona-prequalification-form/",
    headline: "What you need to know about the Arizona Prequalification Form",
    description: "Highlight key line items on the Arizona Prequalification Form, how it strengthens offers in competitive markets, and why income and asset docs matter.",
    datePublished: "2025-02-04",
    articleSection: "Real Estate & Mortgages",
  },
  faqs: [...articleFaqs],
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Real Estate & Mortgages", path: "/real-estate-mortgages/" },
    { name: "What you need to know about the Arizona Prequalification Form", path: "/what-you-need-to-know-about-the-arizona-prequalification-form/" },
  ],
});

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

export default function ArizonaPrequalificationFormPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <JsonLd data={articleJsonLd} />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>What you need to know about the Arizona Prequalification Form</>}
          excerpt="Highlight key line items on the Arizona Prequalification Form, how it strengthens offers in competitive markets, and why income and asset docs matter."
          category="Real Estate & Mortgages"
          categoryHref="/real-estate-mortgages/"
          dateLabel="Feb 4, 2025"
          readTime="12 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                We highlight the important line items that borrowers and realtors need to look at in the Arizona
                Prequalification form. We talk about the advantage of showing a higher loan amount on the
                prequalification form to show strength if it is a competitive market and multiple offers are
                expected on homes for sale. We discuss the importance of borrowers sending income and asset
                documentation so sellers can feel confident in the buyer&apos;s ability to qualify.
              </p>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <YoutubeLiteEmbed
                  videoId="oEU2yKyfbHk"
                  title="What you need to know about the Arizona Prequalification Form"
                />
              </div>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Ready to Get Prequalified for a Mortgage?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  The Arizona Prequalification Form is your first step to buying a home. Get expert help
                  completing it and securing your mortgage approval.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="btn-primary"
                  >
                    Start Your Prequalification Today
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="podcast-transcript">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-6 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Transcript of the Mortgage Brothers Podcast: What You Need to Know About the Arizona
                    Prequalification Form
                  </h2>

                  <div className="space-y-8 text-[15.5px]">
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Introduction [00:05]</h3>
                      <p className="mb-3">
                        Welcome to the Mortgage Brothers Podcast Show! I&apos;m Eddie Knoell, and I&apos;m Tom
                        Knoell. In this episode, we&apos;re breaking down the Arizona Prequalification
                        Form&mdash;what it is, how it works, and why it&apos;s important for homebuyers,
                        sellers, and real estate agents.
                      </p>
                      <p>
                        Did you know that about 5,000 prequalification forms are exchanged between buyers and
                        sellers every month in Maricopa and Pinal counties alone? Yet, many people don&apos;t
                        fully understand what this form is or how it works. That&apos;s why we&apos;re here
                        today.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        What is the Arizona Prequalification Form? [00:38]
                      </h3>
                      <p className="mb-3">
                        The Arizona Prequalification Form is a document required in real estate transactions
                        in Arizona. It&apos;s issued by lenders and shows that a buyer has been reviewed and
                        is financially capable of purchasing a home.
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          It is not a lender-specific form&mdash;it&apos;s a universal document used by all
                          banks and lenders in Arizona.
                        </li>
                        <li>It is required by real estate agents to submit an offer.</li>
                        <li>
                          It provides sellers with proof that a buyer has been financially vetted.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Prequalification vs. Preapproval [02:20]
                      </h3>
                      <p className="mb-3">
                        There&apos;s often confusion between prequalification and preapproval:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          Prequalification means a lender has reviewed basic financial information but has
                          not verified all documents.
                        </li>
                        <li>
                          Preapproval means the loan has been conditionally approved after an underwriter has
                          reviewed all required documentation.
                        </li>
                      </ul>
                      <p>
                        In most cases, a prequalification form serves as a preapproval since lenders review
                        financial documents before issuing it. However, final underwriting approval happens
                        after a contract is signed and the loan process begins.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        How the Prequalification Form Works [04:37]
                      </h3>
                      <p className="mb-3">When a lender issues a prequalification form, it includes:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>The borrower&apos;s basic details (name, marital status, property type).</li>
                        <li>Loan type (conventional, FHA, VA, etc.).</li>
                        <li>Whether the borrower relies on selling another property to qualify.</li>
                        <li>Whether the borrower needs seller concessions to cover closing costs.</li>
                      </ul>
                      <p>
                        A key part of this form is line 20, which states the maximum loan amount the borrower
                        qualifies for. There is no sales price listed&mdash;only the loan amount.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Key Sections of the Prequalification Form
                      </h3>

                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        1. Borrower&apos;s Consultation with a Lender [05:09]
                      </h3>
                      <p className="mb-3">
                        Lines 3, 4, and 5 indicate whether the borrower has consulted with a lender.
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>
                          If a borrower has not spoken with a lender, they sign lines 4 and 5.
                        </li>
                        <li>If they have consulted a lender, these lines are left blank.</li>
                      </ul>

                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        2. Sale Contingencies &amp; Seller Concessions [06:51]
                      </h3>
                      <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>
                          Line 8 &ndash; Indicates if the buyer needs to sell or lease another property before
                          qualifying for this mortgage.
                        </li>
                        <li>
                          Line 9 &ndash; Indicates whether the buyer needs seller concessions (closing cost
                          assistance from the seller).
                        </li>
                      </ul>

                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        3. Loan Amount vs. Sales Price [11:09]
                      </h3>
                      <p className="mb-6">
                        The form only lists the loan amount, not the home&apos;s sales price. This can
                        sometimes confuse buyers and agents.
                      </p>

                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        4. Interest Rate Limits [15:32]
                      </h3>
                      <p className="mb-6">
                        Line 23 states the maximum interest rate the borrower qualifies for. Most lenders
                        write &ldquo;market rate&rdquo; instead of a specific number to prevent confusion.
                      </p>

                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        5. Required Documentation [17:12]
                      </h3>
                      <p className="mb-3">
                        Lines 25-28 indicate whether the borrower has provided:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Pay stubs</li>
                        <li>Tax returns</li>
                        <li>W-2s</li>
                        <li>Down payment proof</li>
                      </ul>
                      <p className="mb-6">
                        This is crucial because sellers prefer buyers who have fully documented their
                        financials.
                      </p>

                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        6. Expiration Date [19:26]
                      </h3>
                      <p>
                        The prequalification form expires after 120 days from the date of the credit pull.
                        After that, lenders must re-pull credit and issue a new form.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Why This Form Matters to Buyers &amp; Sellers [20:04]
                      </h3>
                      <p className="mb-3">
                        For buyers, this form is like a resume&mdash;it shows sellers that they are serious
                        and financially qualified.
                      </p>
                      <p>
                        For sellers, reviewing a buyer&apos;s prequalification form helps them assess risk
                        before accepting an offer. A strong form can give buyers an advantage in a
                        competitive market.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Final Thoughts [20:37]</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>This form is required in Arizona real estate transactions.</li>
                        <li>
                          Lenders, buyers, and agents must ensure it&apos;s accurate before submitting offers.
                        </li>
                        <li>
                          If you&apos;re buying a home, work with your lender to maximize your
                          prequalification strength.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Need Help? Contact Us! [21:08]
                      </h3>
                      <p>
                        If you have any questions about prequalification or the home-buying process, reach
                        out to the Mortgage Brothers Team. Email us using our{" "}
                        <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                          contact form
                        </Link>{" "}
                        or call us for a free mortgage quote. If you found this video helpful, like,
                        subscribe, and hit the notification button for more mortgage tips! Thanks for tuning
                        in.
                      </p>
                    </div>
                  </div>
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

                <p className="text-[15px]">
                  Get the essentials on Arizona&apos;s prequalification form. You might also explore our tips
                  on{" "}
                  <Link
                    href="/arizona-binsr-buyer-inspection-notice-and-seller-response/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    inspection notices
                  </Link>
                  , compare{" "}
                  <Link
                    href="/arizona-mortgage-rates-and-the-interest-deduction/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    mortgage rates &amp; interest deductions
                  </Link>
                  , understand{" "}
                  <Link
                    href="/prepayment-penalties-on-your-arizona-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    prepayment penalties
                  </Link>
                  , learn strategies for{" "}
                  <Link
                    href="/buying-down-your-arizona-interest-rate/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    buying down rates
                  </Link>
                  , consider{" "}
                  <Link
                    href="/arizona-second-mortgages/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    second mortgage options
                  </Link>
                  , and review the latest on{" "}
                  <Link
                    href="/arizona-real-estate-capital-gains-is-back/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    capital gains
                  </Link>
                  .
                </p>

                <p className="text-[#5a6b52] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has
                  been prepared for informational purposes only. You should consult your own tax, legal, and
                  accounting advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS
                  #210917 and 1618695. Equal housing lender.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/arizona-binsr-buyer-inspection-notice-and-seller-response/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/arizona-mortgage-rates-and-the-interest-deduction/"
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