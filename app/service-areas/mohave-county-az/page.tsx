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

export const metadata: Metadata = getSeoMetadata("/service-areas/mohave-county-az/");

const cities = [
  { name: "Lake Havasu City", description: "Famous for the London Bridge, water sports, and vibrant desert waterfront home financing." },
  { name: "Kingman", description: "As Mohave County's seat along Route 66, Kingman offers affordable home growth and mountain vistas." },
  { name: "Bullhead City", description: "Located along the Colorado River opposite Laughlin, offering riverfront homes and competitive loan rates." },
  { name: "Fort Mohave", description: "Growing residential community south of Bullhead City with new construction and golf properties." },
  { name: "Golden Valley", description: "Spacious desert valley living between Kingman and Bullhead City with affordable acreage options." },
  { name: "Colorado City", description: "Northern Mohave County community near the Utah border with mountain views and rural loans." },
  { name: "Chloride", description: "Historic mining town near Kingman offering small-town character homes and rural financing." }
];

const countyFaqs = [
  {
    q: "What home loan programs are available to Mohave County homebuyers?",
    a: "Mohave County buyers have access to the full range of mortgage programs including Conventional, FHA, VA (for eligible veterans), Jumbo, FHA Streamline Refinance, First-Time Homebuyer programs, Reverse Mortgage (for homeowners 62+), and Refinancing. Our team can walk you through all your options at no cost."
  },
  {
    q: "What is the conforming loan limit in Mohave County for 2026?",
    a: "The 2026 conforming loan limit for Mohave County is $832,750 – the same baseline limit that applies across all Arizona counties. If your loan exceeds this amount, you will need a jumbo loan."
  },
  {
    q: "What is the FHA loan limit in Mohave County for 2026?",
    a: "The 2026 FHA loan limit for Mohave County is $541,287. This means you can finance a home up to that purchase price using an FHA loan with as little as 3.5% down (with a 580+ credit score)."
  },
  {
    q: "Why are people buying homes in Mohave County?",
    a: "Mohave County is popular with retirees and buyers priced out of California and Nevada. Lake Havasu City draws water sports enthusiasts and snowbirds. Bullhead City offers affordable homes right on the Colorado River across from Laughlin, NV. Kingman appeals to buyers seeking small-town living with easy access to Las Vegas and Phoenix."
  },
  {
    q: "How much do I need for a down payment on a Mohave County home?",
    a: "FHA loans require as little as 3.5% down. Conventional loans can go as low as 3%-5% for qualified buyers. VA loans require zero down payment for eligible veterans. We also work with down payment assistance programs. Contact us to find out which programs you qualify for."
  },
  {
    q: "How long does it take to close on a home in Mohave County?",
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

export default function MohaveCountyPage() {
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
        <section className="w-full bg-brand-green-deep text-white py-10 lg:py-12 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
            {/* Breadcrumb inside Pine Green Section */}
            <div className="flex items-center justify-center gap-2 text-[13px] font-medium text-[#c8c8b8] mb-3">
              <Link href="/service-areas/" className="text-[#b8d4b8] hover:text-white transition-colors duration-200">Areas We Serve</Link>
              <span className="text-white/40">&gt;</span>
              <span className="text-white font-semibold">Mohave County</span>
            </div>
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-3">WESTERN ARIZONA - MOHAVE</p>
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-4 max-w-3xl">Your trusted Mohave County mortgage broker.</h1>
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-6">From Lake Havasu to Kingman — 7 communities, one team that knows every one of them.</p>
            <HeroCtaButtons className="mb-2" />
          </div>
        </section>

        <section className="w-full py-10 lg:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-4">Home Loans in Mohave County, Arizona</h2>
            <div className="text-brand-text-muted text-[15px] space-y-3">
              <p>From Lake Havasu City to Kingman and Bullhead City, Mortgage Brothers has been the trusted Lake Havasu City mortgage broker for Mohave County buyers for over 25 years.</p>
              <p>Mohave County stretches along Arizona&apos;s western border with Nevada and California, encompassing the Colorado River communities of Lake Havasu City and Bullhead City, the historic Route 66 town of Kingman, and vast stretches of high desert. It attracts buyers looking for waterfront living, retirement destinations, and some of the most affordable home prices in Arizona.</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Major Cities:</strong> Kingman, Lake Havasu City, Bullhead City, Fort Mohave, Colorado City, Chloride</li>
                <li><strong>2026 Conforming Loan Limit:</strong> $832,750</li>
                <li><strong>2026 FHA Loan Limit:</strong> $541,287</li>
                <li><strong>Popular Communities:</strong> Oatman, Chloride, Wikieup, Meadview, Littlefield, Truxton, Peach Springs</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full py-10 lg:py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 lg:mb-10">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-3">Mohave County mortgage services</h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px]">Select your city below for local mortgage expertise.</p>
            </div>
            <CountyCityCards countySlug="mohave-county-az" cities={cities} />
          </div>
        </section>


        <CountyMortgagePrograms countyName="Mohave County" fhaLimit="$541,287" />

        <CountyTestimonials testimonials={testimonials} />

        <section className="w-full py-10 lg:py-12 bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
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
            "Choosing the right mortgage is an important financial decision. Our Mohave County mortgage team takes a personalized approach by reviewing your financial profile, credit history, and long-term homeownership goals before recommending the best loan options.",
            "With access to multiple lenders and advanced loan comparison tools, we help clients secure competitive mortgage solutions while keeping the process smooth and transparent.",
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}