"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

const relatedLinks = [
  {
    label: "Seller Concessions to Buyers",
    href: "/seller-concessions-to-buyers-how-much/",
  },
  {
    label: "How to Skip 2 Payments",
    href: "/how-to-skip-2-payments-on-your-mortgage/",
  },
  {
    label: "FHA Loan Gift Guide",
    href: "/put-bow-fha-loan-gift-guide/",
  },
  {
    label: "Can I Get a 3rd Mortgage",
    href: "/can-i-get-a-3rd-mortgage/",
  },
  {
    label: "Arizona Second Mortgages",
    href: "/arizona-second-mortgages/",
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
      name: "Buying or Selling personal property with your home sale? Must Watch this First!",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When personal property is included in a purchase contract, lenders may see it as a seller concession or inducement for purchase, which can cause issues. Lenders want the house itself to be the sole reason for the purchase, as it is the asset that secures the loan.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Real Estate and Personal Property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Real Estate includes buildings, land, and items affixed to the property, such as built-in bookcases or chandeliers. Personal Property refers to non-affixed items like furniture, paintings, grills, lawnmowers, dishes, and other movable possessions.",
      },
    },
    {
      "@type": "Question",
      name: "What restrictions should buyers know about Personal Property in contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most cases, non-affixed personal property should be handled outside of the purchase contract. However, in Arizona purchase contracts, certain items such as dishwashers, washer-dryers, refrigerators, and window treatments may be included.",
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

export default function BuyingOrSellingPersonalPropertyPage() {
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
          title={<>Buying or Selling personal property with your home sale? Must Watch this First!</>}
          excerpt="Learn why personal property in a purchase contract can trigger lender issues and which Arizona items can transfer with the home sale."
          category="Mortgage Payments & Strategies"
          categoryHref="/mortgage-payments-strategies/"
          dateLabel="Feb 5, 2025"
          readTime="11 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                How does Personal Property in a Purchase Contract affect Lenders? Why are we talking about
                it?
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <li>
                  Avoid pitfalls when personal property is tried to be made part of a purchase contract
                </li>
                <li>
                  It becomes problematic when it is viewed as a Seller Concession or type of Inducement for
                  Purchase (and the seller just doesn&apos;t care and wants it gone!)
                </li>
                <li>
                  The lender wants only the house to be the reason for the purchase because the house is what
                  secures the loan.
                </li>
              </ul>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <iframe
                  src="https://www.youtube.com/embed/p9Y9hWuAO0c"
                  title="Buying or Selling personal property with your home sale? Must Watch this First!"
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
                  Thinking About Including Personal Property in a Sale?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Adding personal property to a home sale can be tricky. Get expert advice to avoid common
                  pitfalls and protect your investment.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                  >
                    Get Expert Real Estate Advice &rarr;
                  </Link>
                  <Link
                    href="/contact-us/"
                    className="inline-flex items-center gap-2 text-[#3fb364] hover:underline text-[15px] font-semibold px-4 py-3 transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="what-are-the-basic-things-to-know">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What are the basic things to know?
                  </h2>
                  <p className="mb-5">There are two types of property:</p>
                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">1. Real Estate</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>Buildings &amp; Land</li>
                    <li>
                      Real Estate is also items that were purchased as personal property and then affixed to
                      the property. Once you affix it to the property, it becomes a part of Real Estate.
                    </li>
                    <li>
                      Example: Built-in bookcases become real estate once they are affixed to the property
                    </li>
                    <li>
                      Example: Chandeliers become real estate once they are affixed to the property
                    </li>
                  </ul>
                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                    2. Personal Property (Non-Affixed)
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Can be defined as property that is not attached or affixed to the property.
                    </li>
                    <li>
                      Examples: Furniture; paintings; grill; lawn-mower; dishes; sheets; etc.
                    </li>
                  </ul>
                </section>

                <section id="what-are-the-basic-restrictions-to-be-aware-of">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What are the basic restrictions to be aware of?
                  </h2>
                  <p className="mb-5">
                    Any non-affixed personal property besides the following should be handled outside of the
                    purchase contract.
                  </p>
                  <p>
                    In the{" "}
                    <a
                      href="https://www.aaronline.com/wp-content/uploads/2021/09/02/Residential_Resale_Real_Estate_Purchase_Contract_Form_February_2020a.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      Arizona purchase contract
                    </a>{" "}
                    Lines 56–60: Dishwasher; Washer-Dryer; Refrigerator; Window Treatments.
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

                <p className="mb-5 text-center text-[20px]">&bull;&bull;&bull;</p>

                <p>
                  Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with
                  you and help you through the whole process.
                </p>

                <p>
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has
                  been prepared for informational purposes only. You should consult your own tax, legal, and
                  accounting advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS
                  #210917 and 1618695. Equal housing lender.
                </p>

                <p className="text-[15px]">
                  Before buying or selling personal property with your home sale, watch this essential guide
                  to make informed decisions. You might also benefit from learning about{" "}
                  <Link
                    href="/seller-concessions-to-buyers-how-much/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    seller concessions
                  </Link>
                  , discovering{" "}
                  <Link
                    href="/how-to-skip-2-payments-on-your-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    how to skip two mortgage payments
                  </Link>
                  , and checking out our{" "}
                  <Link
                    href="/put-bow-fha-loan-gift-guide/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    FHA loan gift guide
                  </Link>
                  .
                </p>

                <p className="text-[#8a9a7a] text-[13px] leading-relaxed">
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
                        Buying or Selling Personal Property with Your Home? Here&apos;s What You Need to Know
                      </h3>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Introduction [00:02]</h3>
                      <p className="mb-3">
                        (00:02) 🎙 Welcome to the Mortgage Brothers Podcast! I&apos;m Eddie Cannell, and I&apos;m Tom
                        Cannell. This is Episode 18—holy cow, 18 episodes already! Today, we have a must-know
                        topic for both buyers and sellers: personal property and how it affects your home
                        purchase contract.
                      </p>
                      <p className="mb-3">
                        (00:42) When walking through a home, buyers often fall in love with certain personal
                        items—a pool table, beautiful furniture, or even an outdoor grill. The question is: Can
                        these be included in the home purchase?
                      </p>
                      <p>
                        Spoiler alert: While it might seem convenient for a seller to throw in extra items,
                        lenders have strict rules about what can and cannot be included in a real estate
                        contract.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Why Does Personal Property Matter in a Real Estate Contract? [01:14]
                      </h3>
                      <p className="mb-3">
                        Example: When I bought my house a few years ago, the seller had a pool table they
                        didn&apos;t want to move. Sound familiar? Many sellers prefer to sell large or heavy
                        items rather than deal with the logistics of moving them.
                      </p>
                      <p className="mb-3">
                        [01:46] In many cases, sellers are willing to sell all kinds of personal property,
                        including:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Pool tables</li>
                        <li>Couches, dressers, and beds</li>
                        <li>Appliances beyond what&apos;s typically included</li>
                        <li>Outdoor furniture, grills, or storage sheds</li>
                      </ul>
                      <p className="mb-3">[02:19] So, what&apos;s the problem?</p>
                      <p className="mb-3">
                        From a lender&apos;s perspective, personal property should not be part of the real
                        estate transaction. Why?
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Lenders only finance real estate value—not furniture or extras.</li>
                        <li>Including personal property artificially inflates the value of the home.</li>
                        <li>
                          The home itself is the collateral for the loan—not the pool table or couch!
                        </li>
                      </ul>
                      <p>
                        [02:54] In short, what&apos;s easy for a seller (offloading extra items) is complicated
                        for a lender.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        What Personal Property CAN Be Included in a Home Sale? [03:34]
                      </h3>
                      <p className="mb-3">
                        In Arizona, the Residential Resale Real Estate Purchase Contract (Lines 56–62)
                        addresses personal property. The only items that can be transferred through the
                        contract are:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Refrigerator</li>
                        <li>Washer &amp; Dryer</li>
                        <li>Above-ground spa</li>
                      </ul>
                      <p className="mb-3">Anything else should NOT be included in the contract.</p>
                      <p className="mb-3">[04:15] Items NOT allowed on the contract:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Pool tables</li>
                        <li>Grills</li>
                        <li>Gun safes</li>
                        <li>Home furnishings</li>
                        <li>Paintings or artwork</li>
                      </ul>
                      <p className="mb-3">
                        [04:53] These personal property items should never be written into:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>The purchase contract</li>
                        <li>The additional terms section (Page 7)</li>
                        <li>An addendum</li>
                        <li>A counteroffer</li>
                      </ul>
                      <p>
                        Why? Lenders don&apos;t want non-real estate items affecting the home&apos;s appraisal
                        value.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        What If You Write &ldquo;No Value&rdquo; for Personal Property? [05:28]
                      </h3>
                      <p className="mb-3">
                        Some buyers and sellers try to get around this rule by writing: &ldquo;This personal
                        property has no value.&rdquo;
                      </p>
                      <p className="mb-3">This used to work—but NOT anymore.</p>
                      <p className="mb-3">
                        [06:03] Lenders caught on. If a buyer is including furniture or appliances in the
                        contract, it clearly has value—otherwise, they wouldn&apos;t be asking for it.
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>The true real estate value is all that matters.</li>
                        <li>Lenders ignore personal property when determining home value.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        What About Outdoor Sheds? [06:35]
                      </h3>
                      <p className="mb-3">What if a shed is included in the home sale?</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          If it&apos;s a permanent structure (built into the ground with a foundation),
                          it&apos;s part of real estate.
                        </li>
                        <li>
                          If it&apos;s a portable Rubbermaid or Tuff Shed, it&apos;s personal property and
                          should be excluded from the contract.
                        </li>
                      </ul>
                      <p>
                        Rule of thumb: If the seller could move it to their next home, it shouldn&apos;t be
                        included in the contract.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        How to Handle Personal Property Sales Properly [07:38]
                      </h3>
                      <p className="mb-3">
                        So, what if you really want to buy that pool table or furniture? No problem! Just
                        follow these simple steps:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Handle the purchase separately—outside of the real estate transaction.</li>
                        <li>Create a separate bill of sale between the buyer and seller.</li>
                        <li>Keep it out of escrow—don&apos;t include it in closing documents.</li>
                        <li>Don&apos;t involve the title company or lender—it&apos;s a private transaction.</li>
                      </ul>
                      <p>
                        Bottom line: Personal property should be treated as a separate sale, just like buying
                        used furniture from a private seller.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        The Craziest Personal Property Request We&apos;ve Seen [08:21]
                      </h3>
                      <p className="mb-3">
                        Wildest example: A buyer once wanted to buy a home fully furnished—down to the
                        silverware, bedsheets, and wall décor.
                      </p>
                      <p className="mb-3">
                        Nice try, but no dice. The lender wouldn&apos;t allow it, and the buyer had to handle it
                        as a separate purchase outside the contract.
                      </p>
                      <p className="mb-3">
                        [08:53] Can some lenders make exceptions? Maybe. Some real estate agents claim their
                        lender allows personal property to be included, but:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>These deals barely squeak by underwriting.</li>
                        <li>It&apos;s risky—the deal could fall apart.</li>
                        <li>It&apos;s easier and safer to handle personal property outside of escrow.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Final Thoughts: Keep Real Estate Separate from Personal Property [09:25]
                      </h3>
                      <p className="mb-3">Key takeaways:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          Only refrigerators, washers, dryers, and above-ground spas can be included in a
                          contract.
                        </li>
                        <li>
                          Everything else should be handled separately—not written into the real estate
                          contract.
                        </li>
                        <li>Avoid unnecessary risks—a separate bill of sale is the best approach.</li>
                        <li>
                          Title companies and lenders don&apos;t need to see personal property
                          agreements—keep them separate.
                        </li>
                      </ul>
                      <p className="mb-3">
                        [09:57] Final advice: If you&apos;re buying or selling a home and have questions about
                        personal property, reach out to us!
                      </p>
                      <p>
                        [10:26] Subscribe to the Mortgage Brothers Podcast for more insider mortgage tips and
                        expert advice. Need a mortgage? We&apos;re here to help!
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/seller-concessions-to-buyers-how-much/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/how-to-skip-2-payments-on-your-mortgage/"
                  className="text-[#8a9a7a] hover:text-[#3fb364] transition-colors"
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
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-semibold px-4 py-3 rounded-full transition-all"
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
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
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
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all"
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