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
import CTA from "../../component/CTA";

export const metadata: Metadata = getSeoMetadata("/service-areas/gila-county-az/");

const cities = [
  { name: "Payson", description: "Payson offers scenic mountain living and growing residential neighborhoods. We help buyers secure competitive mortgage options for primary homes, and vacation properties." },
  { name: "Miami", description: "Miami features historic charm and affordable housing opportunities. Our mortgage experts guide buyers through loan options that fit both first-time and move-up home purchases." },
  { name: "Star Valley", description: "Star Valley provides peaceful residential living near Payson. We assist buyers with personalized mortgage solutions tailored to family homes and long-term investments." },
  { name: "Globe", description: "Globe offers a mix of historic homes and new developments. Our team helps buyers navigate financing options with clear guidance, refinancing needs, and competitive rates." },
  { name: "Strawberry", description: "Strawberry is known for cabin-style homes and forest surroundings. We provide mortgage programs designed for unique mountain properties and seasonal residences." },
  { name: "Pine", description: "Pine attracts buyers seeking quiet, nature-focused living. Our mortgage services help secure financing for primary homes, vacation retreats, and refinancing needs." },
  { name: "Kohls Ranch", description: "Kohls Ranch features scenic properties near the Rim Country area. We help buyers explore loan solutions that fit rural, primary homes, and recreational properties." },
  { name: "Christopher Creek", description: "Christopher Creek is ideal for cabin living and weekend homes. Our mortgage experts guide clients through financing options for second homes and investment properties." },
  { name: "Forest Lakes", description: "Forest Lakes offers larger lots and custom-built homes. We assist buyers with financing programs suited for acreage and higher-elevation properties." },
  { name: "Whispering Pines", description: "Whispering Pines delivers peaceful residential living in a wooded setting. We help homeowners refinance or purchase with loan options tailored to local market conditions." },
  { name: "Washington Park", description: "Washington Park provides rural charm and spacious properties. Our mortgage team supports buyers with flexible financing options for unique home types." },
];

const countyFaqs = [
  {
    q: "What home loan programs are available to Gila County homebuyers?",
    a: "Gila County buyers have access to the full range of mortgage programs including Conventional, FHA, VA (for eligible veterans), Jumbo, FHA Streamline Refinance, First-Time Homebuyer programs, Reverse Mortgage (for homeowners 62+), and Refinancing. Our team can walk you through all your options at no cost."
  },
  {
    q: "What is the conforming loan limit in Gila County for 2026?",
    a: "The 2026 conforming loan limit for Gila County is $832,750 – the same baseline limit that applies across all Arizona counties. This is the maximum loan amount eligible for conventional financing backed by Fannie Mae or Freddie Mac. If your loan exceeds this amount, you will need a jumbo loan."
  },
  {
    q: "What is the FHA loan limit in Gila County for 2026?",
    a: "The 2026 FHA loan limit for Gila County is $541,287. This means you can finance a home up to that purchase price using an FHA loan with as little as 3.5% down (with a 580+ credit score). FHA loans are a great option in Gila County given the more affordable home prices throughout Payson, Globe, and surrounding communities."
  },
  {
    q: "Why are people buying homes in Gila County?",
    a: "Gila County attracts buyers who want the beauty of Arizona without the heat and congestion of the Valley. Payson and the Rim Country area are especially popular with Phoenix-area residents looking for a cooler mountain retreat or a full-time relocation. Globe and Miami offer some of the most affordable home prices in Arizona with a strong sense of history and community."
  },
  {
    q: "How much do I need for a down payment on a Gila County home?",
    a: "FHA loans require as little as 3.5% down. Conventional loans can go as low as 3%-5% for qualified buyers. VA loans require zero down payment for eligible veterans. We also work with down payment assistance programs. Contact us to find out which programs you qualify for."
  },
  {
    q: "How long does it take to close on a home in Gila County?",
    a: "Most purchase transactions close in 21 to 30 days when all documentation is submitted promptly. Our team is known for fast, smooth closings with no surprises at the closing table."
  }
];

const testimonials = [
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
  {
    name: "Christian Holt",
    quote:
      "Mortgage Brothers helped me close on my first home faster than I thought possible. The process was clear and they were always available to answer my questions. Incredible team!",
    attribution: "Christian Holt, Arizona Homebuyer",
  },
  {
    name: "Anita Sanda",
    quote:
      "The Mortgage Brothers team made buying our home so much easier than we expected. They were knowledgeable, responsive, and got us a great rate. Could not be happier!",
    attribution: "Anita Sanda, Surprise, AZ",
  },
  {
    name: "Spencer Adams",
    quote:
      "Eddie helped us close on our new home faster than we thought possible. His knowledge of the market and loan programs saved us thousands. We will be recommending Mortgage Brothers to everyone we know.",
    attribution: "Spencer Adams, Arizona Homebuyer",
  },
];

const faqJsonLd = buildFaqPageSchema(normalizeFaqs(countyFaqs));
const reviewsJsonLd = buildReviewsSchema(
  testimonials.map((t) => ({ author: t.name, reviewBody: t.quote })),
);

export default function GilaCountyPage() {
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
              <span className="text-white font-semibold">Gila County</span>
            </div>
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">NORTHERN ARIZONA - GILA</p>
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">Your trusted Gila County mortgage broker.</h1>
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">Mortgage Brothers is a trusted Arizona mortgage broker providing personalized home loan solutions throughout Gila County, AZ. We help homebuyers and homeowners secure competitive mortgage options with clear guidance and a smooth approval process.</p>
            <HeroCtaButtons className="mb-4" />
          </div>
        </section>

        <section className="w-full py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-6">Home Loans in Gila County, Arizona</h2>
            <div className="text-brand-text-muted text-[15px] space-y-4">
              <p>Buying a home in Payson or the Rim Country? As your local Payson mortgage broker, Mortgage Brothers knows Gila County real estate inside and out.</p>
              <p>Gila County is Arizona&apos;s Rim Country — a stunning stretch of pine forests, mountain towns, and scenic rivers that draws buyers looking for a quieter pace of life without sacrificing community. From the mountain hub of Payson to the historic mining towns of Globe and Miami, Gila County offers some of the most affordable and picturesque real estate in the state.</p>
              <p>At <Link href="/" className="text-[#3fb364] font-bold hover:underline">Mortgage Brothers</Link>, we have been helping Arizona homebuyers navigate the mortgage process for 25+ years. Whether you are buying a primary home in Payson, a cabin near Strawberry or Pine, or refinancing in Globe, we know Gila County and can find the right loan for you.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Major Cities:</strong> Payson, Globe, Miami, Star Valley, Strawberry, Pine, Christopher Creek, Kohls Ranch</li>
                <li><strong>2026 Conforming Loan Limit:</strong> $832,750</li>
                <li><strong>2026 FHA Loan Limit:</strong> $541,287</li>
                <li><strong>Popular Communities:</strong> Washington Park, Whispering Pines, Beaver Valley, Tonto Village, Punkin Center, Young</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="areas" className="w-full py-16 lg:py-24 bg-white scroll-mt-[72px]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">Gila County Arizona Mortgage Broker Serving All Major Cities</h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px] max-w-3xl mx-auto">Our Gila County mortgage team provides reliable home loan and refinancing services across the county&apos;s mountain towns, lakeside communities, and growing neighborhoods. Whether you&apos;re buying your first home, upgrading, refinancing, or exploring cash-out options in Gila County, we work with multiple lenders to match you with the right mortgage for your financial goals.</p>
            </div>
            <CountyCityCards countySlug="gila-county-az" cities={cities} />
          </div>
        </section>

        <CTA
          eyebrow=""
          title="Ready to Start Your Home Mortgage Journey in Gila County?"
          description="Our Gila County mortgage specialists are here to answer your questions, compare loan programs, and guide you through every step of the mortgage process. From Payson to Globe and surrounding communities, we make home financing simple and stress-free."
          primaryLabel="View All Gila County Areas"
          primaryHref="#areas"
          secondaryLabel="Call Us Now"
        />


        <CountyMortgagePrograms countyName="Gila County" fhaLimit="$541,287" />

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
            "Choosing the right mortgage matters. Our team takes a personalized approach by reviewing your income, credit profile, and long-term financial plans before recommending loan options.",
            "Our AI-supported loan comparison process helps identify competitive lender terms efficiently, while our experienced advisors ensure you move forward with clarity and confidence.",
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}