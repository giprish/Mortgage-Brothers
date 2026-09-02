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
import {
  TranscriptAlertLine,
  TranscriptBanItem,
  TranscriptCheckItem,
  TranscriptCrossItem,
  TranscriptEmojiItem,
  TranscriptLightbulbLine,
  TranscriptList,
  TranscriptMicLine,
  TranscriptMoneyItem,
  TranscriptPinItem,
  TranscriptPinLine,
  TranscriptPointItem,
  TranscriptTvLine,
} from "@/app/component/TranscriptIcons";

export const metadata: Metadata = getSeoMetadata("/who-can-and-cannot-be-on-title-when-you-get-a-mortgage/");

const relatedLinks = [
  {
    label: "Can I Get a 3rd Mortgage?",
    href: "/can-i-get-a-3rd-mortgage/",
  },
  {
    label: "How Fast is Too Fast to Close?",
    href: "/how-fast-is-too-fast-to-close-a-mortgage-loan-to-purchase-a-house/",
  },
  {
    label: "Is Homeownership Hereditary?",
    href: "/is-homeownership-hereditary/",
  },
  {
    label: "Spouse Dies & Not On Mortgage",
    href: "/what-if-my-spouse-dies-and-im-not-on-the-mortgage/",
  },
  {
    label: "Grossing Up Your Income",
    href: "/grossing-up-your-income-what-does-that-mean/",
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

const tocLinks = [
  { label: "Can you add your spouse to the title?", href: "#can-you-add-your-spouse-to-the-title" },
  {
    label: "Can your spouse be on the title even if they're not on the mortgage?",
    href: "#can-your-spouse-be-on-the-title-even-if-theyre-not-on-the-mortgage",
  },
  {
    label: "What if you don't want your spouse on the title?",
    href: "#what-if-you-dont-want-your-spouse-on-the-title",
  },
  { label: "Are you in a community property state?", href: "#are-you-in-a-community-property-state" },
  {
    label: "What about putting a title in the name of a trust?",
    href: "#what-about-putting-a-title-in-the-name-of-a-trust",
  },
  {
    label: "We suggest speaking with an attorney when dealing with any transfer of title",
    href: "#we-suggest-speaking-with-an-attorney",
  },
  { label: "Transcript of the Mortgage Brothers Podcast", href: "#podcast-transcript" },
] as const;

const articleFaqs = [
  { question: "Can you add your spouse to the title?", answer: "Of course you can. If you’re getting a mortgage, you can absolutely add your spouse to the title." },
  { question: "Can your spouse be on the title even if they’re not on the mortgage?", answer: "You can have your spouse on the title even if they’re not on the mortgage. However, if they’re on the mortgage, if they’re on the loan, they have to be on the title because you have to have rights to the home in order to encumber the home by getting a loan on it. This is true for any co-borrower, even if it’s not your spouse." },
  { question: "Are you in a community property state?", answer: "This is another thing that’s good to be aware of. If you’re in a community property state this means that if your spouse dies and you’re not on the title then the house would go to you. Arizona, for example, is a community state property." },
] as const;

const articleJsonLd = buildArticleSchemas({
  blog: {
    pathname: "/who-can-and-cannot-be-on-title-when-you-get-a-mortgage/",
    headline: "Who CAN and CANNOT Be On Title When you Get A Mortgage?",
    description: "Learn who can be added to a mortgage title, spouse and co-borrower rules, community property, and closing in a trust.",
    datePublished: "2025-02-12",
    articleSection: "Spouse & Estate Considerations",
  },
  faqs: [...articleFaqs],
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Spouse & Estate Considerations", path: "/spouse-estate-considerations/" },
    { name: "Who CAN and CANNOT Be On Title When you Get A Mortgage?", path: "/who-can-and-cannot-be-on-title-when-you-get-a-mortgage/" },
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

export default function WhoCanAndCannotBeOnTitlePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <JsonLd data={articleJsonLd} />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>Who CAN and CANNOT Be On Title When you Get A Mortgage?</>}
          excerpt="Learn who can be added to a mortgage title, spouse and co-borrower rules, community property, and closing in a trust."
          category="Spouse & Estate Considerations"
          categoryHref="/spouse-estate-considerations/"
          dateLabel="Feb 12, 2025"
          readTime="10 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                In this post, we&apos;re going to be answering the question: who can you add on a title when
                you&apos;re getting a mortgage? You might be surprised how many times, when you&apos;re in the
                middle of a mortgage, this question comes up.
              </p>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <YoutubeLiteEmbed
                  videoId="KscsU0aDsqM"
                  title="Who CAN and CANNOT Be On Title When you Get A Mortgage?"
                />
              </div>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Secure Your Mortgage Title Today!
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Contact our experts to understand mortgage title eligibility and ensure your title meets all
                  requirements.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/contact-us/"
                    className="btn-primary"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>

              <nav aria-label="Table of contents" className="mb-10">
                <ul className="list-disc pl-6 space-y-2 text-[#3a4a3a] text-[16px]">
                  {tocLinks.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} className="text-[#3fb364] font-semibold hover:underline">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="can-you-add-your-spouse-to-the-title">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>Can you add your spouse to the title?</strong>
                  </h2>
                  <p>
                    Of course you can. If you&apos;re getting a mortgage, you can absolutely add your spouse to
                    the title.
                  </p>
                </section>

                <section id="can-your-spouse-be-on-the-title-even-if-theyre-not-on-the-mortgage">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>Can your spouse be on the title even if they&apos;re not on the mortgage?</strong>
                  </h2>
                  <p>
                    You can have your spouse on the title even if they&apos;re not on the mortgage. However, if
                    they&apos;re on the mortgage, if they&apos;re on the loan, they have to be on the title
                    because you have to have rights to the home in order to encumber the home by getting a loan
                    on it. This is true for any co-borrower, even if it&apos;s not your spouse.
                  </p>
                </section>

                <section id="what-if-you-dont-want-your-spouse-on-the-title">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>What if you don&apos;t want your spouse on the title?</strong>
                  </h2>
                  <p>
                    This is absolutely possible; however, the spouse not on the title would need to sign some
                    forms. A spouse would sign a disclaimer deed and a non-spouse would sign a quitclaim deed to
                    say they are not claiming any interest, any ownership, to the property. It should be noted
                    that this might be a bit different state to state since there are a lot of different deeds in
                    each state. Make sure you check with your real estate attorney about this.
                  </p>
                </section>

                <section id="are-you-in-a-community-property-state">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>Are you in a community property state?</strong>
                  </h2>
                  <p>
                    This is another thing that&apos;s good to be aware of. If you&apos;re in a community property
                    state this means that if your spouse dies and you&apos;re not on the title then the house
                    would go to you. Arizona, for example, is a community state property.
                  </p>
                </section>

                <section id="what-about-putting-a-title-in-the-name-of-a-trust">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>What about putting a title in the name of a trust?</strong>
                  </h2>
                  <p>
                    Typically, when someone asks about putting the title in a trust we suggest that we close in
                    the person&apos;s name and then transfer it to the actual trust. You can close in the name of
                    a trust but we suggest doing it this other way, since there&apos;s usually a review process
                    that the bank needs to do for your trust. On top of this, some banks won&apos;t allow you to
                    close in the name of a trust so we suggest you check upfront with your bank if this is
                    something you&apos;re interested in doing.
                  </p>
                </section>

                <section id="we-suggest-speaking-with-an-attorney">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>We suggest speaking with an attorney when dealing with any transfer of title</strong>
                  </h2>
                  <p>
                    You definitely want to seek a real estate attorney&apos;s advice when dealing with any change
                    of title. There&apos;s lots of situations you&apos;ll want to avoid and many different ways
                    you can handle things, and an attorney will help make the whole process very smooth whether
                    you&apos;re looking to transfer the title into a trust to a spouse, a family member, or anyone
                    else. If you have any questions about this or anything else mortgage related don&apos;t
                    hesitate to give us a call at{" "}
                    <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                      (602) 535-2171
                    </a>
                    .
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

                <p>
                  Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with
                  you and help you through the whole process.
                </p>

                <p className="text-[#5a6b52] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has
                  been prepared for informational purposes only. You should consult your own tax, legal, and
                  accounting advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS
                  #210917 and 1618695. Equal Housing Opportunity.
                </p>

                <blockquote className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Understand the guidelines for who may or may not be listed on your mortgage title. For further
                    insight, consider our discussion on{" "}
                    <Link
                      href="/can-i-get-a-3rd-mortgage/"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      obtaining a third mortgage
                    </Link>
                    , review the importance of{" "}
                    <Link
                      href="/how-fast-is-too-fast-to-close-a-mortgage-loan-to-purchase-a-house/"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      closing pace
                    </Link>
                    , and explore the nuances of{" "}
                    <Link
                      href="/is-homeownership-hereditary/"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      hereditary homeownership
                    </Link>
                    .
                  </p>
                </blockquote>

                <section id="podcast-transcript">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-6 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <strong>Transcript of the Mortgage Brothers Podcast</strong>
                  </h2>

                  <div className="space-y-8 text-[15.5px]">
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Who Can (and Can&apos;t) Be on Title When Getting a Mortgage?</strong>
                      </h3>
                      <TranscriptMicLine className="mb-3">
                        (00:02) Welcome to the <strong>Mortgage Brothers Podcast!</strong> I&apos;m{" "}
                        <strong>Eddie Knoell</strong>, and I&apos;m <strong>Tom Knoell</strong>.
                      </TranscriptMicLine>
                      <p className="mb-3">
                        Today, we&apos;re diving into a question that comes up more often than you&apos;d think:
                      </p>
                      <TranscriptList className="mb-3">
                        <TranscriptEmojiItem emoji="🏡">
                          <strong>Who can be added to the title when getting a mortgage?</strong>
                        </TranscriptEmojiItem>
                      </TranscriptList>
                      <p>
                        It may not be the first thing on your mind when buying a home, but once you&apos;re in
                        the middle of the mortgage process, it&apos;s a question that needs answering.
                        Let&apos;s clear it up!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Who Can Be on the Title When You Get a Mortgage?</strong>
                      </h3>
                      <TranscriptList className="mb-3">
                        <TranscriptPointItem>
                          (00:37) <strong>The answer is simpler than most people think.</strong>
                        </TranscriptPointItem>
                      </TranscriptList>
                      <TranscriptPinLine className="mb-3">
                        <strong>If you&apos;re getting a mortgage, these people can be on the title:</strong>
                      </TranscriptPinLine>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          <strong>Your spouse</strong> – Whether or not your spouse is on the mortgage, they can
                          be added to the title.
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          <strong>Your co-borrower</strong> – If someone is co-signing the loan with you, they{" "}
                          <strong>must</strong> be on the title.
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <TranscriptList className="mb-3">
                        <TranscriptBanItem>
                          <strong>Who CANNOT be added to the title?</strong>
                        </TranscriptBanItem>
                      </TranscriptList>
                      <TranscriptList className="mb-3">
                        <TranscriptCrossItem>
                          A friend, relative, or business partner{" "}
                          <strong>who is not a borrower on the loan.</strong>
                        </TranscriptCrossItem>
                        <TranscriptCrossItem>
                          Anyone who the lender does not approve as part of the ownership structure.
                        </TranscriptCrossItem>
                      </TranscriptList>
                      <p>
                        Why does this matter? <strong>Anyone on the title has legal rights to the home.</strong>{" "}
                        If they&apos;re not on the mortgage, they don&apos;t have loan obligations but still share
                        ownership.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Can You Leave Your Spouse Off the Title?</strong>
                      </h3>
                      <TranscriptList className="mb-3">
                        <TranscriptPointItem>
                          (01:47) <strong>Yes, it&apos;s possible—but there are things to consider.</strong>
                        </TranscriptPointItem>
                      </TranscriptList>
                      <TranscriptPinLine className="mb-3">
                        If you don&apos;t want your spouse on the title, they will likely need to sign a{" "}
                        <strong>disclaimer deed</strong> (if your state uses those) or a{" "}
                        <strong>quitclaim deed</strong> to give up any ownership interest.
                      </TranscriptPinLine>
                      <TranscriptList className="mb-3">
                        <TranscriptPointItem>
                          <strong>Disclaimer deed</strong> – Used when a spouse <strong>never had</strong> an
                          ownership claim on the property.
                        </TranscriptPointItem>
                        <TranscriptPointItem>
                          <strong>Quitclaim deed</strong> – Used when someone <strong>is removing themselves</strong>{" "}
                          from the title.
                        </TranscriptPointItem>
                      </TranscriptList>
                      <TranscriptLightbulbLine>
                        <strong>Keep in mind:</strong> If you live in a <strong>community property state</strong>{" "}
                        (like Arizona), your spouse may still have legal rights to the home{" "}
                        <strong>even if they&apos;re not on the title</strong>. If something happens to you, the
                        courts could award ownership to your spouse, which might delay the process.
                      </TranscriptLightbulbLine>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Adding a Home to a Trust: Can You Do It?</strong>
                      </h3>
                      <TranscriptList className="mb-3">
                        <TranscriptPointItem>
                          (04:04) Some borrowers want to buy a home under their trust instead of their personal
                          name.
                        </TranscriptPointItem>
                      </TranscriptList>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          <strong>Yes, you can put a home in a trust—but there are conditions:</strong>
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <TranscriptList className="mb-3">
                        <TranscriptPointItem>
                          Some lenders allow it, but others don&apos;t. Always ask upfront.
                        </TranscriptPointItem>
                        <TranscriptPointItem>
                          The lender may need to <strong>review and approve</strong> the trust documents.
                        </TranscriptPointItem>
                        <TranscriptPointItem>
                          If you&apos;re already in escrow, <strong>tell your lender immediately</strong> if you
                          want to close in a trust&apos;s name.
                        </TranscriptPointItem>
                      </TranscriptList>
                      <TranscriptLightbulbLine>
                        <strong>An easier option:</strong> Many borrowers <strong>close in their personal name</strong>{" "}
                        and <strong>transfer the home to a trust after closing</strong> (with the title
                        company&apos;s help).
                      </TranscriptLightbulbLine>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>What About Transferring the Title After Closing?</strong>
                      </h3>
                      <TranscriptList className="mb-3">
                        <TranscriptPointItem>
                          (05:54) Can you change the title after you&apos;ve already bought the house?
                        </TranscriptPointItem>
                      </TranscriptList>
                      <p className="mb-3">
                        Yes, but it depends on the <strong>type of transfer</strong> and whether it will trigger
                        the <strong>due-on-sale clause</strong> (which could require you to pay off the mortgage
                        immediately).
                      </p>
                      <TranscriptPinLine className="mb-3">
                        <strong>Title transfers that typically DO NOT trigger the due-on-sale clause:</strong>
                      </TranscriptPinLine>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          Transferring the home to a <strong>living trust</strong>
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          Transferring the home after a <strong>divorce</strong>
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          Gifting the home to a <strong>child</strong>
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          Inheriting the home after the owner passes away
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <TranscriptAlertLine>
                        <strong>Important:</strong> While these types of transfers are generally allowed, you should
                        always check with an <strong>attorney</strong> or{" "}
                        <strong>real estate professional</strong> before making title changes.
                      </TranscriptAlertLine>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Final Thoughts: Title vs. Mortgage</strong>
                      </h3>
                      <TranscriptList className="mb-3">
                        <TranscriptPointItem>
                          (08:45) <strong>Remember, being on the title is NOT the same as being on the mortgage.</strong>
                        </TranscriptPointItem>
                      </TranscriptList>
                      <TranscriptList className="mb-3">
                        <TranscriptPinItem>
                          <strong>The title = ownership rights.</strong>
                        </TranscriptPinItem>
                        <TranscriptPinItem>
                          <strong>The mortgage = loan responsibility.</strong>
                        </TranscriptPinItem>
                      </TranscriptList>
                      <p className="mb-3">
                        The title is like the <strong>deed to a car</strong>—it proves who owns the home. If
                        you&apos;re not on the title, you don&apos;t legally own the property, even if you&apos;re
                        making payments on it.
                      </p>
                      <TranscriptList className="mb-3">
                        <TranscriptEmojiItem emoji="🏡">
                          <strong>Have questions about your mortgage or title options?</strong>
                        </TranscriptEmojiItem>
                      </TranscriptList>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          <strong>Reach out to us—we&apos;re happy to help!</strong>
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        <strong>Subscribe &amp; Stay Updated!</strong>
                      </h3>
                      <TranscriptList className="mb-3">
                        <TranscriptTvLine>
                          (09:20) <strong>Like this episode? Subscribe for more mortgage insights!</strong>
                        </TranscriptTvLine>
                      </TranscriptList>
                      <TranscriptList className="mb-3">
                        <TranscriptCheckItem>
                          <strong>Email us:</strong>
                        </TranscriptCheckItem>
                        <TranscriptCheckItem>
                          <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                            Contact Form
                          </Link>
                        </TranscriptCheckItem>
                      </TranscriptList>
                      <TranscriptList className="mb-3">
                        <TranscriptMoneyItem>
                          <strong>Need a mortgage?</strong> Get a{" "}
                          <Link href="#get-pre-approved" className="text-[#3fb364] font-semibold hover:underline">
                            free quote
                          </Link>
                          —we&apos;ll guide you every step of the way.
                        </TranscriptMoneyItem>
                      </TranscriptList>
                      <TranscriptList>
                        <TranscriptEmojiItem emoji="🎯">
                          <strong>Thanks for tuning in—see you in the next episode!</strong>
                        </TranscriptEmojiItem>
                      </TranscriptList>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/is-homeownership-hereditary/"
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
              Have questions about financing options? Our experts are here to help with personalized advice for
              any mortgage type. Fill out our form to get started today!
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