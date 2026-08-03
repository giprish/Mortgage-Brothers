"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

const relatedLinks = [
  {
    label: "Connecting a Guest House",
    href: "/connecting-guest-house-main-house-add-value/",
  },
  {
    label: "Condo vs Townhome",
    href: "/what-is-the-difference-between-aan-arizona-condo-and-arizona-townhome/",
  },
  {
    label: "Owner-Occupied vs Investment",
    href: "/difference-between-owner-occupied-second-home-and-investment-property/",
  },
  {
    label: "Capital Gains Are Back",
    href: "/arizona-real-estate-capital-gains-is-back/",
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
      name: "Detached Guest Home (Casita) appraisal issues",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, a detached guest home (casita) does not count toward the main house square footage. Instead, it is listed as a line item adjustment in the appraisal report.",
      },
    },
    {
      "@type": "Question",
      name: "How are detached guest homes appraised when refinancing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When refinancing, appraisers typically do not include casitas in the main living area. They add a separate line item adjustment, which may impact the loan-to-value ratio for rate and term refinances.",
      },
    },
    {
      "@type": "Question",
      name: "Why are detached guest homes difficult to appraise when purchasing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Detached guest homes are difficult to appraise because there are fewer comparable sales available. The limited sample size and variations in age, quality, and size make it harder for appraisers to determine accurate values.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost to build a detached guest home compared to its appraised value?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Building a detached guest home often costs between $70,000 and $120,000, but appraisers may only assign a line item adjustment of around $20,000, which is significantly lower than the construction cost.",
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

export default function DetachedGuestHomeCasitaAppraisalPage() {
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
          title={<>Detached Guest Home (Casita) Appraisal Issues</>}
          excerpt="Learn how casitas are appraised as line-item adjustments, why values often lag build cost, and what that means for buyers and refinancers."
          category="Real Estate & Mortgages"
          categoryHref="/real-estate-mortgages/"
          dateLabel="Feb 5, 2025"
          readTime="11 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-6">
                In this episode, we covered issues that might arise when you receive an appraisal on your
                detached guest home, also know as a casita.
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-4">
                There are three perspectives to consider:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#3a4a3a] text-[16px] leading-[1.8] mb-6">
                <li>Refinancing perspective</li>
                <li>Purchasing perspective</li>
                <li>Building perspective</li>
              </ul>
              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                We&apos;re just going to give you the quick overview here, but for the full details, be sure
                to listen to the episode in the video or on Apple Podcasts. Let&apos;s get into it.
              </p>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <iframe
                  src="https://www.youtube.com/embed/P3nmoVgBW5k"
                  title="Detached Guest Home (Casita) Appraisal Issues"
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
                  Concerned About Your Casita&apos;s Appraisal?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  A detached guest home can complicate appraisals and financing. Get expert advice on
                  maximizing value and avoiding common pitfalls.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                  >
                    Get a Free Home Appraisal Review &rarr;
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
                <section id="refinancing-perspective">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Refinancing Perspective
                  </h2>
                  <p>
                    If you purchase a home and the casita is already on the lot when you receive your
                    appraisal, you&apos;re going to notice that your casita will not be included in the home
                    square footage, rather it will be included as a line item adjustment. If your house had a
                    casita when you purchased it go back and take a look at the appraisal and you&apos;ll
                    notice that there was a line item adjustment for it then too. When you are refinancing,
                    make sure you have all the information in front of you. If you&apos;re refinancing for rate
                    and term, you want to get the maximum value for your home so that your loan-to-value is as
                    low as possible.
                  </p>
                </section>

                <section id="purchasing-perspective">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Purchasing Perspective
                  </h2>
                  <p className="mb-5">
                    Appraisers most often come up with these values from sales of comparable homes that were
                    recently sold. Now, casitas and guest houses are rare, so the sample size is a lot smaller
                    than that of property without, which is one complication when it comes to getting accurate
                    appraisals.
                  </p>
                  <p>
                    Unlike when it comes to refinancing, the traditionally low appraisal of casitas can be
                    wonderful from a purchasing perspective.
                  </p>
                </section>

                <section id="building-perspective">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Building Perspective
                  </h2>
                  <p className="mb-5">
                    It&apos;s generally going to be hard to build a casita for less than around $70,000.
                    We&apos;d say the average rate is somewhere between $70,000 and $120,000. However, if you
                    get an appraisal for it the line item will likely only say something around $20,000 or so.
                    This isn&apos;t to say casita&apos;s can&apos;t be worth it, but it&apos;s something to
                    keep in mind.
                  </p>
                  <p>
                    We&apos;ve also received a few questions about attaching guest houses to your main home. In
                    these cases, be sure to talk to your city first since it has to be coded and there is a
                    permitting process involved. That being said, it is possible in a situation where it&apos;s
                    close enough and it makes sense. In the cases where you can attach it and it flows, if
                    it&apos;s a part of the main living dwelling then the appraiser will treat it as one level.
                  </p>
                </section>

                <section id="to-summarize">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    To Summarize
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>The square footage is not added to the main living area of the primary home.</li>
                    <li>The appraiser only gives a line item adjustment for a guest house.</li>
                    <li>
                      It is common to have an adjustment of only $20,000 for a guest house even though it could
                      have cost $100,000 to build.
                    </li>
                    <li>
                      Appraisers need to use comparable sales that have detached guest houses, which is hard to
                      do.
                    </li>
                    <li>
                      Guesthouses are hard to compare because they are going to vary greatly in age, quality,
                      and size.
                    </li>
                  </ul>
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
                    . Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work
                    with you and help you through the whole process.
                  </p>
                </section>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with
                    you and help you through the whole process.
                  </p>
                </div>

                <p className="text-[15px]">
                  Uncover common appraisal issues related to detached guest homes. To get a broader
                  perspective, compare with our guide on the{" "}
                  <Link
                    href="/difference-between-owner-occupied-second-home-and-investment-property/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    differences between owner-occupied second homes and investment properties
                  </Link>
                  , see how{" "}
                  <Link
                    href="/connecting-guest-house-main-house-add-value/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    connecting a guest house to your main home can boost value
                  </Link>
                  , and review the{" "}
                  <Link
                    href="/what-is-the-difference-between-aan-arizona-condo-and-arizona-townhome/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    contrast between Arizona condos and townhomes
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
                    Transcript of the Mortgage Brothers Podcast: Detached Guest Homes (Casitas) and Appraisal
                    Challenges
                  </h2>

                  <div className="space-y-8 text-[15.5px]">
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Introduction [00:02]</h3>
                      <p className="mb-3">
                        Welcome to the Mortgage Brothers Podcast! I&apos;m Eddie Knoell, and I&apos;m Tom
                        Knoell. This week, we&apos;re diving into casitas&mdash;detached guest homes&mdash;and
                        how they impact property value and mortgage appraisals. Whether you call them man caves,
                        woman caves, Airbnb rentals, or guest houses, if it&apos;s detached from the main house,
                        we&apos;re calling it a casita today.
                      </p>
                      <p>
                        [00:46] If you&apos;re watching on YouTube, subscribe to stay updated on our weekly
                        episodes. We drop new content every Tuesday!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Why We&apos;re Talking About Casitas [01:19]
                      </h3>
                      <p>
                        Now, why are we talking about casitas? I&apos;ve actually considered building one
                        myself, but every time I crunch the numbers, I hesitate. The big question is: Will I get
                        my money back? That&apos;s what we&apos;re covering today&mdash;how casitas affect home
                        value, particularly for homeowners looking to refinance.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Casitas and Home Appraisals for Refinancing [02:35]
                      </h3>
                      <p className="mb-3">
                        If you purchased a home that already had a casita, here&apos;s what happens when you
                        refinance:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Your casita will NOT be included in your home&apos;s total square footage.</li>
                        <li>
                          If you have a 3,000 sq. ft. home and a 1,000 sq. ft. casita, the appraiser will not
                          count it as 4,000 sq. ft.&mdash;only the main house is included.
                        </li>
                        <li>
                          Instead, appraisers make a line-item adjustment for the casita, typically between
                          $15,000 &ndash; $30,000, regardless of the actual construction cost.
                        </li>
                      </ul>
                      <p className="mb-3">
                        [03:12] Many homeowners expect their casita to add significant value, but when they see
                        that low line-item adjustment, they&apos;re shocked. We get calls like: &ldquo;The
                        appraiser must have made a mistake! My casita cost me $100K to build&mdash;why is it
                        only valued at $20K?&rdquo; and &ldquo;Can you call the appraiser and fix this?&rdquo;
                      </p>
                      <p className="mb-3">
                        [03:42] The truth is, this isn&apos;t a mistake&mdash;this happens every time with
                        detached guest homes. If you check your original appraisal from when you purchased your
                        home, you&apos;ll see the same low valuation for the casita.
                      </p>
                      <p>
                        [04:11] The frustration usually comes during rate and term refinances, where homeowners
                        are looking for maximum home value to get the best loan terms.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        What If You Build a New Casita? Will It Increase Your Home Value? [04:43]
                      </h3>
                      <p className="mb-3">
                        Many homeowners think: &ldquo;I&apos;ll build a casita for $80,000 and do a cash-out
                        refinance to recover my investment.&rdquo;
                      </p>
                      <p className="mb-3">
                        <strong>Reality Check:</strong> Even if you spend $70K &ndash; $120K on a casita, the
                        appraisal will likely only add $20K &ndash; $30K to your home&apos;s value.
                      </p>
                      <p className="mb-3">
                        [05:51] Some homeowners argue that their casita provides more value than the
                        appraiser&apos;s number suggests. While an appraiser may only give it a $20K
                        adjustment, the main home might also receive an indirect value boost.
                      </p>
                      <p className="mb-3">
                        Appraisers would deny this happens, but we believe some of the value gets absorbed into
                        the main home&apos;s appraisal price&mdash;what we call &ldquo;stolen value.&rdquo;
                      </p>
                      <p className="mb-2 font-semibold text-[#052316]">Example [06:33]:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>You buy a 3,000 sq. ft. home with a 1,000 sq. ft. casita for $600K.</li>
                        <li>
                          The appraiser finds comps but still values the casita separately at $20K&ndash;$30K
                          rather than adding its full worth to the property.
                        </li>
                        <li>
                          The final appraised value may reflect the casita&apos;s presence, but it won&apos;t be
                          itemized at its true construction cost.
                        </li>
                      </ul>
                      <p>
                        [07:11] Appraisers stick to comps. They don&apos;t value casitas based on construction
                        cost but rather on comparable sales of similar homes with guest houses.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Why Are Casitas Valued So Low in Appraisals? [07:48]
                      </h3>
                      <p className="mb-3">
                        Appraisers look at comparable sales of homes with casitas. The problem?
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Casitas are rare, so it&apos;s difficult to find matching sales.</li>
                        <li>
                          Many casitas vary in size, quality, and function (some are luxury guest homes, others
                          are converted garages).
                        </li>
                        <li>
                          A casita built for Airbnb rental or family use might hold high personal value, but
                          that doesn&apos;t mean it translates to higher appraisal value.
                        </li>
                      </ul>
                      <p className="mb-3">
                        [08:21] It&apos;s like dating&mdash;you&apos;re looking for someone your age, with
                        shared interests, and similar values. Finding a perfect match isn&apos;t always easy,
                        and finding the right comparable sales for casitas is just as difficult.
                      </p>
                      <p>
                        [08:54] Some casitas are old, run-down converted sheds, while others are high-end guest
                        homes. Appraisers struggle to find identical comparisons, which is why values vary so
                        much.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Buying a Home with a Casita? What to Expect [09:29]
                      </h3>
                      <p className="mb-3">
                        If you&apos;re buying a home with a casita, here&apos;s the good news:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          The appraised value may come in lower than the purchase price&mdash;meaning you could
                          get a deal!
                        </li>
                        <li>
                          Appraisers often undervalue casitas compared to what buyers are willing to pay.
                        </li>
                      </ul>
                      <p className="mb-3">
                        [09:59] However, if the seller overprices the home, the appraisal might come in low,
                        requiring either price negotiations between buyer &amp; seller, or more cash from the
                        buyer to cover the appraisal gap.
                      </p>
                      <p className="mb-3">
                        [10:27] Some buyers place higher personal value on casitas than appraisers
                        do&mdash;especially if they plan to use them as in-law suites, short-term rentals
                        (Airbnb, VRBO, etc.), or home offices or creative studios.
                      </p>
                      <p>
                        [11:01] In these cases, buyers may pay more than appraised value because, to them, the
                        casita is worth it.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        What About ATTACHED Guest Homes? [11:36]
                      </h3>
                      <p className="mb-3">
                        What if I connect my casita to my main home with a hallway?
                      </p>
                      <p className="mb-3">
                        It must be a single dwelling, not just a long hallway. If the city and zoning laws
                        recognize it as an addition, it may be counted in total square footage.
                      </p>
                      <p className="mb-3">
                        [12:22] The &ldquo;Red Face Test&rdquo;: If you tell someone your casita is
                        &ldquo;attached&rdquo; but it&apos;s 80 feet away with a hallway, it doesn&apos;t pass
                        the red face test&mdash;meaning it&apos;s probably still considered detached.
                      </p>
                      <p>
                        [12:56] To count as attached, the structure must be integrated into the main dwelling
                        and meet building codes.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        No, Appraisers Aren&apos;t Out to Get You! [13:29]
                      </h3>
                      <p className="mb-3">
                        Some homeowners believe in a conspiracy&mdash;that appraisers intentionally undervalue
                        homes. The truth?
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Appraisers follow strict guidelines&mdash;they aren&apos;t just making up numbers.</li>
                        <li>If they inflated values, banks wouldn&apos;t accept the loans.</li>
                        <li>They&apos;re using market comps, not personal opinions.</li>
                      </ul>
                      <p>
                        [14:00] Yes, appraisals can feel unfair, but once you understand how appraisers
                        calculate values, it all makes sense.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Final Thoughts on Casitas and Appraisals [14:33]
                      </h3>
                      <p className="mb-2 font-semibold text-[#052316]">Key Takeaways:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Casitas are always appraised separately from the main house.</li>
                        <li>Expect a low line-item adjustment (often just $20K&ndash;$30K).</li>
                        <li>
                          If you build a casita, don&apos;t expect a dollar-for-dollar increase in home value.
                        </li>
                        <li>
                          If you&apos;re buying a home with a casita, you might get a better deal than expected.
                        </li>
                      </ul>
                      <p>
                        [15:02] Got questions? Reach out through our contact form. Need a mortgage? Let&apos;s
                        chat!
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/connecting-guest-house-main-house-add-value/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/difference-between-owner-occupied-second-home-and-investment-property/"
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