import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import JsonLd from "@/app/component/JsonLd";
import { buildFaqPageSchema, buildReviewsSchema, normalizeFaqs } from "@/lib/seo/structured-data";
import FaqAccordion from "../../component/FaqAccordion";

import React from "react";
import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import HeroCtaButtons from "../../component/HeroCtaButtons";
import CountyCityCards from "../../component/CountyCityCards";
import CountyMortgagePrograms from "../../component/CountyMortgagePrograms";
import CountyTestimonials from "../../component/CountyTestimonials";
import GetInTouch from "../../component/GetInTouch";

export const metadata: Metadata = getSeoMetadata("/service-areas/navajo-county-az/");

const cities = [
  { name: "Show Low", description: "Show Low is one of the fastest-growing communities in Navajo County and a popular destination for both primary homes, vacation properties and a smooth approval process." },
  { name: "Pinetop", description: "Pinetop offers beautiful mountain living and is popular for vacation homes and seasonal properties. Our mortgage specialists help buyers secure flexible loan options for primary residences." },
  { name: "Holbrook", description: "Holbrook is known for its historic charm and convenient location along Interstate 40. Our mortgage team helps buyers in Holbrook secure home loans for primary residences." },
  { name: "Winslow", description: "Winslow is known for its historic Route 66 charm and growing residential areas. Our mortgage experts assist buyers in securing reliable home loan options for both new purchases and refinancing." },
  { name: "Taylor", description: "Taylor provides quiet residential living with family-friendly neighborhoods and rural properties. We assist buyers with mortgage options designed for traditional homes." },
  { name: "Pinetop-Lakeside", description: "Resort town in the White Mountains featuring golf communities, mountain cabins, and second-home financing." },
  { name: "Snowflake", description: "Historic pioneer heritage town offering family neighborhoods, acreage, and competitive mortgage rates." },
];

const countyFaqs = [
  {
    q: "What home loan programs are available to Navajo County homebuyers?",
    a: "Navajo County buyers have access to the full range of mortgage programs including Conventional, FHA, VA (for eligible veterans), Jumbo, FHA Streamline Refinance, First-Time Homebuyer programs, Reverse Mortgage (for homeowners 62+), and Refinancing. Our team can walk you through all your options at no cost."
  },
  {
    q: "What is the conforming loan limit in Navajo County for 2026?",
    a: "The 2026 conforming loan limit for Navajo County is $832,750 – the same baseline limit that applies across all Arizona counties. If your loan exceeds this amount, you will need a jumbo loan."
  },
  {
    q: "What is the FHA loan limit in Navajo County for 2026?",
    a: "The 2026 FHA loan limit for Navajo County is $541,287. This means you can finance a home up to that purchase price using an FHA loan with as little as 3.5% down (with a 580+ credit score)."
  },
  {
    q: "Why are people buying homes in Navajo County?",
    a: "Navajo County attracts buyers who want cooler temperatures, mountain scenery, and a quieter pace of life. Show Low and Pinetop are popular with Phoenix-area families as second homes or permanent relocations, while Holbrook and Winslow offer very affordable primary home options."
  },
  {
    q: "How much do I need for a down payment on a Navajo County home?",
    a: "FHA loans require as little as 3.5% down. Conventional loans can go as low as 3%-5% for qualified buyers. VA loans require zero down payment for eligible veterans. We also work with down payment assistance programs. Contact us to find out which programs you qualify for."
  },
  {
    q: "How long does it take to close on a home in Navajo County?",
    a: "Most purchase transactions close in 21 to 30 days when all documentation is submitted promptly. Our team is known for fast, smooth closings with no surprises at the closing table."
  }
];

const testimonials = [
  {
    name: "Paxton Gray",
    quote:
      "Eddie and his team were incredible throughout the entire process. As a first-time buyer I had a lot of questions and they answered every single one. We closed on time and I could not be happier with the rate we got.",
    attribution: "Paxton Gray, Arizona Homebuyer",
  },
  {
    name: "Michelle Buck",
    quote:
      "The Mortgage Brothers team made what could have been a stressful process completely seamless. They were responsive, knowledgeable, and fought hard to get us the best deal possible.",
    attribution: "Michelle Buck, Arizona Homebuyer",
  },
  {
    name: "Anita Sanda",
    quote:
      "The Mortgage Brothers team made buying our home so much easier than we expected. They were knowledgeable, responsive, and got us a great rate. Could not be happier!",
    attribution: "Anita Sanda, Surprise, AZ",
  },
  {
    name: "Gregory LeBeau",
    quote:
      "Eddie made our refinance process so simple. He found us a better rate than we thought possible and closed everything on time. We have already recommended him to three neighbors.",
    attribution: "Gregory LeBeau, Arizona",
  },
  {
    name: "Mona Collins",
    quote:
      "Mortgage Brothers took the time to explain every option available to us. We never felt rushed or confused. Closing was smooth and the rate was better than any other lender we talked to.",
    attribution: "Mona Collins, Arizona Homebuyer",
  },
];

const faqJsonLd = buildFaqPageSchema(normalizeFaqs(countyFaqs));
const reviewsJsonLd = buildReviewsSchema(
  testimonials.map((t) => ({ author: t.name, reviewBody: t.quote })),
);

export default function NavajoCountyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      
      <JsonLd
        data={[
          ...(faqJsonLd ? [faqJsonLd] : []),
          ...reviewsJsonLd,
        ]}
      />
      <Navbar />
      <main className="flex-grow pt-[64px] sm:pt-[72px]">
        <section className="w-full bg-brand-green-deep text-white py-16 lg:py-20 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            {/* Breadcrumb inside Pine Green Section */}
            <div className="flex items-center justify-center gap-2 text-[13px] font-medium text-[#c8c8b8] mb-5">
              <Link href="/service-areas/" className="text-[#b8d4b8] hover:text-white transition-colors duration-200">Areas We Serve</Link>
              <span className="text-white/40">&gt;</span>
              <span className="text-white font-semibold">Navajo County</span>
            </div>
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">NORTHERN ARIZONA - NAVAJO</p>
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">Your trusted Navajo County mortgage broker.</h1>
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">Mortgage Brothers provides reliable mortgage solutions for homebuyers and homeowners throughout Navajo County, AZ.</p>
            <HeroCtaButtons className="mb-4" />
          </div>
        </section>

        <section className="w-full py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-6">Home Loans in Navajo County, Arizona</h2>
            <div className="text-brand-text-muted text-[15px] space-y-4">
              <p>Mortgage Brothers is the Show Low mortgage broker that Navajo County homebuyers rely on — from Pinetop-Lakeside to Holbrook to Snowflake, we know this market and we are here to help.</p>
              <p>Navajo County spans a dramatic stretch of Arizona from the Colorado Plateau to the White Mountains. It is home to a mix of small towns and communities that attract buyers seeking mountain living, outdoor recreation, and more affordable prices than the Phoenix metro. Show Low and Pinetop-Lakeside are especially popular with Valley residents looking to escape the summer heat, while Holbrook and Winslow offer some of the most affordable homes in the state.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Major Cities:</strong> Show Low, Pinetop-Lakeside, Holbrook, Winslow, Taylor, Snowflake</li>
                <li><strong>2026 Conforming Loan Limit:</strong> $832,750</li>
                <li><strong>2026 FHA Loan Limit:</strong> $541,287</li>
                <li><strong>Popular Communities:</strong> Linden, Lakeside, Clay Springs, Pinedale, Joseph City, Sun Valley, Woodruff</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">Navajo County Arizona Mortgage Broker Serving All Major Cities</h2>
              <div className="text-brand-text-muted text-[15px] lg:text-[16px] max-w-3xl mx-auto space-y-4">
                <p>Our Navajo County mortgage specialists provide dependable home loan and refinancing services across the region. Whether you&apos;re buying your first home, upgrading to a larger property, refinancing an existing mortgage, or investing in a second home near Arizona&apos;s scenic White Mountains, we help match you with the right loan programs.</p>
                <p>With access to multiple lending partners, our team helps borrowers secure competitive mortgage rates in Navajo County while simplifying the financing process from application through closing.</p>
              </div>
            </div>
            <CountyCityCards countySlug="navajo-county-az" cities={cities} />
          </div>
        </section>


        <CountyMortgagePrograms countyName="Navajo County" fhaLimit="$541,287" />

        <CountyTestimonials testimonials={testimonials} />

        <section className="w-full py-16 bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto px-6">
            <FaqAccordion
              title="Frequently Asked Questions"
              items={countyFaqs}
            />
          </div>
        </section>

        <GetInTouch
          theme="light"
          title="Get Started with Your Arizona Home Loan Today"
          showDivider
          paragraphs={[
            "Choosing the right mortgage is an important financial decision. Our Navajo County mortgage broker team takes a personalized approach by reviewing your financial profile, credit history, and homeownership goals before recommending the best loan options.",
            "With access to a wide network of lenders and advanced loan comparison tools, we help clients secure competitive mortgage solutions while keeping the process clear and stress-free.",
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}