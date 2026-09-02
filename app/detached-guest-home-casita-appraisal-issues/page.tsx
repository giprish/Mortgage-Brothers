import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import JsonLd from "@/app/component/JsonLd";
import { buildArticleSchemas } from "@/lib/seo/structured-data";
import React from "react";
import Link from "next/link";
import FaqAccordion from "../component/FaqAccordion";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";
import YoutubeLiteEmbed from '@/app/component/YoutubeLiteEmbed';
import {
  TranscriptAlertLine,
  TranscriptCheckItem,
  TranscriptCrossItem,
  TranscriptDiamondItem,
  TranscriptEmojiItem,
  TranscriptLightbulbLine,
  TranscriptList,
  TranscriptMicLine,
  TranscriptPinLine,
  TranscriptTvLine,
} from "@/app/component/TranscriptIcons";

const GUEST_HOME_URL = "https://www.lawinsider.com/dictionary/guest-home";

export const metadata: Metadata = getSeoMetadata("/detached-guest-home-casita-appraisal-issues/");

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

const articleFaqs = [
  {
    question:
      "Does a detached guest home (casita) count toward the square footage of the main house in an appraisal?",
    answer:
      "No, a detached guest home (casita) does not count toward the main house square footage. Instead, it is listed as a line item adjustment in the appraisal report.",
  },
  { question: "How are detached guest homes appraised when refinancing?", answer: "When refinancing, appraisers typically do not include casitas in the main living area. They add a separate line item adjustment, which may impact the loan-to-value ratio for rate and term refinances." },
  { question: "Why are detached guest homes difficult to appraise when purchasing?", answer: "Detached guest homes are difficult to appraise because there are fewer comparable sales available. The limited sample size and variations in age, quality, and size make it harder for appraisers to determine accurate values." },
  { question: "What is the cost to build a detached guest home compared to its appraised value?", answer: "Building a detached guest home often costs between $70,000 and $120,000, but appraisers may only assign a line item adjustment of around $20,000, which is significantly lower than the construction cost." },
] as const;

const articleJsonLd = buildArticleSchemas({
  blog: {
    pathname: "/detached-guest-home-casita-appraisal-issues/",
    headline: "Detached Guest Home (Casita) Appraisal Issues",
    description: "Learn how casitas are appraised as line-item adjustments, why values often lag build cost, and what that means for buyers and refinancers.",
    datePublished: "2025-02-05",
    articleSection: "Real Estate & Mortgages",
  },
  faqs: [...articleFaqs],
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Real Estate & Mortgages", path: "/real-estate-mortgages/" },
    { name: "Detached Guest Home (Casita) Appraisal Issues", path: "/detached-guest-home-casita-appraisal-issues/" },
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

export default function DetachedGuestHomeCasitaAppraisalPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <JsonLd data={articleJsonLd} />

      <Navbar />

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
                to listen to the episode in the video above or on Apple Podcasts. Let&apos;s get into it.
              </p>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <YoutubeLiteEmbed
                  videoId="P3nmoVgBW5k"
                  title="Detached Guest Home (Casita) Appraisal Issues"
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
                    href="#get-pre-approved"
                    className="btn-primary"
                  >
                    Get a Free Home Appraisal Review
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
                      +1 (602) 535-2171
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

                <p className="text-[#5a6b52] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has
                  been prepared for informational purposes only. You should consult your own tax, legal, and
                  accounting advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS
                  #210917 and 1618695. Equal Housing Opportunity.
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
                      <p className="mb-3">[00:02]</p>
                      <TranscriptMicLine className="mb-3">
                        Welcome to the <strong>Mortgage Brothers Podcast</strong>! I&apos;m{" "}
                        <strong>Eddie Knoell</strong>, and I&apos;m <strong>Tom Knoell</strong>. This week,
                        we&apos;re diving into <strong>casitas</strong>&mdash;
                        <a
                          href={GUEST_HOME_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#3fb364] font-semibold hover:underline"
                        >
                          detached guest homes
                        </a>
                        &mdash;and how they impact property value and mortgage appraisals. Whether you call
                        them <strong>man caves, woman caves, Airbnb rentals, or guest houses</strong>, if
                        it&apos;s detached from the main house, we&apos;re calling it a <strong>casita</strong>{" "}
                        today.
                      </TranscriptMicLine>
                      <p className="mb-3">[00:46]</p>
                      <TranscriptTvLine className="mb-3">
                        If you&apos;re watching on YouTube, <strong>subscribe</strong> to stay updated on our
                        weekly episodes. We drop new content every <strong>Tuesday</strong>!
                      </TranscriptTvLine>
                      <p>
                        [01:19] Now, why are we talking about casitas? I&apos;ve actually considered{" "}
                        <strong>building</strong> one myself, but every time I crunch the numbers, I hesitate.
                        The big question is: <strong>Will I get my money back?</strong> That&apos;s what
                        we&apos;re covering today&mdash;how casitas affect home value, particularly for
                        homeowners looking to <strong>refinance</strong>.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Casitas and Home Appraisals for Refinancing</strong>
                      </h3>
                      <p className="mb-3">
                        [02:35] If you <strong>purchased</strong> a home that already had a casita, here&apos;s
                        what happens when you <strong>refinance</strong>:
                      </p>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          Your <strong>casita will NOT be included</strong> in your home&apos;s total square
                          footage.
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          If you have a <strong>3,000 sq. ft.</strong> home and a <strong>1,000 sq. ft.</strong>{" "}
                          casita, the appraiser will <strong>not</strong> count it as{" "}
                          <strong>4,000 sq. ft.</strong>&mdash;only the main house is included.
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          Instead, appraisers make a <strong>line-item adjustment</strong> for the casita,
                          typically between <strong>$15,000 &ndash; $30,000</strong>, regardless of the actual
                          construction cost.
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <p className="mb-3">
                        [03:12] Many homeowners <strong>expect</strong> their casita to add significant value,
                        but when they see that <strong>low line-item adjustment</strong>, they&apos;re{" "}
                        <strong>shocked</strong>. We get calls like:
                      </p>
                      <TranscriptList className="mb-3">
                        <TranscriptDiamondItem>
                          &ldquo;The appraiser must have made a mistake! My casita cost me $100K to
                          build&mdash;why is it only valued at $20K?&rdquo;
                        </TranscriptDiamondItem>
                        <TranscriptDiamondItem>
                          &ldquo;Can you call the appraiser and fix this?&rdquo;
                        </TranscriptDiamondItem>
                      </TranscriptList>
                      <p className="mb-3">
                        [03:42] The truth is, this <strong>isn&apos;t a mistake</strong>&mdash;this happens{" "}
                        <strong>every time</strong> with detached guest homes. If you check your{" "}
                        <strong>original appraisal</strong> from when you purchased your home, you&apos;ll see
                        the same <strong>low valuation</strong> for the casita.
                      </p>
                      <p>
                        [04:11] The frustration usually comes during <strong>rate and term refinances</strong>,
                        where homeowners are looking for <strong>maximum home value</strong> to get the{" "}
                        <strong>best loan terms</strong>.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>What If You Build a New Casita? Will It Increase Your Home Value?</strong>
                      </h3>
                      <p className="mb-3">[04:43] Many homeowners think:</p>
                      <TranscriptLightbulbLine className="mb-3">
                        <em>
                          &ldquo;I&apos;ll build a casita for $80,000 and do a cash-out refinance to recover
                          my investment.&rdquo;
                        </em>
                      </TranscriptLightbulbLine>
                      <TranscriptAlertLine className="mb-3">
                        <strong>Reality Check:</strong> Even if you spend <strong>$70K &ndash; $120K</strong> on
                        a casita, the appraisal will likely <strong>only add $20K &ndash; $30K</strong> to your
                        home&apos;s value.
                      </TranscriptAlertLine>
                      <p className="mb-3">
                        [05:51] Some homeowners argue that their casita provides <strong>more</strong> value
                        than the appraiser&apos;s number suggests. While an appraiser may only give it a{" "}
                        <strong>$20K adjustment</strong>, the{" "}
                        <strong>main home might also receive an indirect value boost</strong>.
                      </p>
                      <TranscriptPinLine className="mb-3">
                        <strong>Appraisers would deny this happens</strong>, but we believe some of the value
                        gets <strong>absorbed</strong> into the main home&apos;s appraisal price&mdash;what we
                        call &ldquo;stolen value.&rdquo;
                      </TranscriptPinLine>
                      <p className="mb-2">[06:33] <strong>Example:</strong></p>
                      <TranscriptList className="mb-3">
                        <TranscriptDiamondItem>
                          You buy a <strong>3,000 sq. ft. home</strong> with a <strong>1,000 sq. ft. casita</strong>{" "}
                          for <strong>$600K</strong>.
                        </TranscriptDiamondItem>
                        <TranscriptDiamondItem>
                          The appraiser finds comps but <strong>still</strong> values the casita separately at{" "}
                          <strong>$20K&ndash;$30K</strong> rather than adding its full worth to the property.
                        </TranscriptDiamondItem>
                        <TranscriptDiamondItem>
                          The final appraised value <strong>may reflect</strong> the casita&apos;s presence, but
                          it won&apos;t be itemized at its <strong>true construction cost</strong>.
                        </TranscriptDiamondItem>
                      </TranscriptList>
                      <p>
                        [07:11] <strong>Appraisers stick to comps.</strong> They don&apos;t value casitas based
                        on <strong>construction cost</strong> but rather on{" "}
                        <strong>comparable sales of similar homes with guest houses</strong>.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Why Are Casitas Valued So Low in Appraisals?</strong>
                      </h3>
                      <p className="mb-3">
                        [07:48] Appraisers look at <strong>comparable sales</strong> of homes with casitas. The
                        problem?
                      </p>
                      <TranscriptList className="mb-3">
                        <TranscriptCrossItem>
                          <strong>Casitas are rare</strong>, so it&apos;s difficult to find matching sales.
                        </TranscriptCrossItem>
                        <TranscriptCrossItem>
                          Many casitas vary in <strong>size, quality, and function</strong> (some are luxury
                          guest homes, others are converted garages).
                        </TranscriptCrossItem>
                        <TranscriptCrossItem>
                          A casita built for <strong>Airbnb rental</strong> or <strong>family use</strong> might
                          hold high personal value, but that doesn&apos;t mean it translates to higher appraisal
                          value.
                        </TranscriptCrossItem>
                      </TranscriptList>
                      <p className="mb-3">
                        [08:21] It&apos;s like <strong>dating</strong>&mdash;you&apos;re looking for someone{" "}
                        <strong>your age, with shared interests, and similar values</strong>. Finding a perfect
                        match isn&apos;t always easy, and{" "}
                        <strong>finding the right comparable sales for casitas is just as difficult</strong>.
                      </p>
                      <p>
                        [08:54] Some casitas are <strong>old, run-down converted sheds</strong>, while others are{" "}
                        <strong>high-end guest homes</strong>. Appraisers struggle to find{" "}
                        <strong>identical</strong> comparisons, which is why values vary so much.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Buying a Home with a Casita? What to Expect</strong>
                      </h3>
                      <p className="mb-3">
                        [09:29] If you&apos;re <strong>buying</strong> a home with a casita, here&apos;s the good
                        news:
                      </p>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          The appraised value <strong>may come in lower than the purchase price</strong>
                          &mdash;meaning <strong>you could get a deal</strong>!
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          Appraisers often <strong>undervalue</strong> casitas compared to what buyers are willing
                          to pay.
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <p className="mb-3">
                        [09:59] However, if the <strong>seller overprices the home</strong>, the appraisal might{" "}
                        <strong>come in low</strong>, requiring either:
                      </p>
                      <TranscriptList className="mb-3">
                        <TranscriptDiamondItem>
                          <strong>Price negotiations</strong> between buyer &amp; seller
                        </TranscriptDiamondItem>
                        <TranscriptDiamondItem>
                          <strong>More cash from the buyer</strong> to cover the appraisal gap
                        </TranscriptDiamondItem>
                      </TranscriptList>
                      <p className="mb-3">
                        [10:27] Some buyers place <strong>higher personal value</strong> on casitas than
                        appraisers do&mdash;especially if they plan to use them as:
                      </p>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          <strong>In-law suites</strong>
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          <strong>Short-term rentals (Airbnb, VRBO, etc.)</strong>
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          <strong>Home offices or creative studios</strong>
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <p>
                        [11:01] In these cases, buyers may <strong>pay more than appraised value</strong> because,
                        to them, the casita <strong>is worth it</strong>.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>What About ATTACHED Guest Homes?</strong>
                      </h3>
                      <TranscriptList className="mb-3">
                        <TranscriptEmojiItem emoji="🚀">
                          <em>What if I connect my casita to my main home with a hallway?</em>
                        </TranscriptEmojiItem>
                      </TranscriptList>
                      <TranscriptPinLine className="mb-3">
                        It <strong>must</strong> be a <strong>single dwelling</strong>, not just a long hallway.
                        If the city and zoning laws <strong>recognize it as an addition</strong>, it{" "}
                        <strong>may</strong> be counted in total square footage.
                      </TranscriptPinLine>
                      <p className="mb-3">
                        [12:22] <strong>The &ldquo;Red Face Test&rdquo;</strong>: If you tell someone your casita
                        is &ldquo;attached&rdquo; but it&apos;s <strong>80 feet away with a hallway</strong>, it
                        doesn&apos;t pass the <strong>red face test</strong>&mdash;meaning it&apos;s probably
                        still <strong>considered detached</strong>.
                      </p>
                      <p>
                        [12:56] To count as <strong>attached</strong>, the structure{" "}
                        <strong>must be integrated into the main dwelling</strong> and meet{" "}
                        <strong>building codes</strong>.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>No, Appraisers Aren&apos;t Out to Get You!</strong>
                      </h3>
                      <p className="mb-3">
                        [13:29] Some homeowners believe in a <strong>conspiracy</strong>&mdash;that appraisers{" "}
                        <strong>intentionally undervalue</strong> homes. The truth?
                      </p>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          <strong>Appraisers follow strict guidelines</strong>&mdash;they aren&apos;t just making
                          up numbers.
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          If they inflated values, <strong>banks wouldn&apos;t accept the loans</strong>.
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          They&apos;re using <strong>market comps</strong>, not personal opinions.
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <p>
                        [14:00] <strong>Yes, appraisals can feel unfair</strong>, but once you understand how
                        appraisers <strong>calculate values</strong>, it all makes sense.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Final Thoughts on Casitas and Appraisals</strong>
                      </h3>
                      <p className="mb-2 font-semibold text-[#052316]">
                        <strong>Key Takeaways:</strong>
                      </p>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          Casitas are <strong>always appraised separately</strong> from the main house.
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          Expect a <strong>low line-item adjustment</strong> (often just{" "}
                          <strong>$20K&ndash;$30K</strong>).
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          If you <strong>build a casita</strong>, don&apos;t expect a dollar-for-dollar increase
                          in home value.
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          If you&apos;re <strong>buying a home with a casita</strong>, you might get a better deal
                          than expected.
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <p className="mb-3">[15:02]</p>
                      <p className="mb-3">
                        <strong>Subscribe for more mortgage tips!</strong> Got questions? Reach out to us at:
                      </p>
                      <TranscriptList>
                        <TranscriptEmojiItem emoji="📩">
                          <strong>Email:</strong>{" "}
                          <Link
                            href="/contact-us/"
                            className="text-[#3fb364] font-semibold hover:underline"
                          >
                            Contact Form
                          </Link>
                        </TranscriptEmojiItem>
                        <TranscriptEmojiItem emoji="🏡">
                          <strong>Need a mortgage?</strong> Let&apos;s chat!
                        </TranscriptEmojiItem>
                      </TranscriptList>
                    </div>
                  </div>
                </section>

                <section id="faqs">
                  <FaqAccordion
                    title="Frequently Asked Questions"
                    items={[
                      {
                        q: "Does a detached guest home (casita) count toward the square footage of the main house in an appraisal?",
                        a: <>No, a detached guest home (casita) does not count toward the main house square footage. Instead, it is listed as a line item adjustment in the appraisal report.</>
                      },
                      {
                        q: "How are detached guest homes appraised when refinancing?",
                        a: <>When refinancing, appraisers typically do not include casitas in the main living area. They add a separate line item adjustment, which may impact the loan-to-value ratio for rate and term refinances.</>
                      },
                      {
                        q: "Why are detached guest homes difficult to appraise when purchasing?",
                        a: <>Detached guest homes are difficult to appraise because there are fewer comparable sales available. The limited sample size and variations in age, quality, and size make it harder for appraisers to determine accurate values.</>
                      },
                      {
                        q: "What is the cost to build a detached guest home compared to its appraised value?",
                        a: <>Building a detached guest home often costs between $70,000 and $120,000, but appraisers may only assign a line item adjustment of around $20,000, which is significantly lower than the construction cost.</>
                      }
                    ]}
                  />
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