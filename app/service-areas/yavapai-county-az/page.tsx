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

export const metadata: Metadata = getSeoMetadata("/service-areas/yavapai-county-az/");

const cities = [
  {
    name: "Prescott",
    description: "As Yavapai County's seat, Prescott features historic courthouse square charm, pine forests, and mile-high mountain air."
  },
  {
    name: "Prescott Valley",
    description: "Fast-growing community with family neighborhoods, shopping hubs, and affordable home loan programs."
  },
  {
    name: "Sedona",
    description: "World-famous red rock beauty offering luxury estates, second homes, and specialized jumbo loan options."
  },
  {
    name: "Cottonwood",
    description: "Heart of Verde Valley wine country with charming residential areas and competitive mortgage programs."
  },
  {
    name: "Chino Valley",
    description: "Spacious country living with acreage, agricultural properties, and USDA rural home loan options."
  },
  {
    name: "Camp Verde",
    description: "Historic Verde River valley location with scenic rural living and affordable mortgage solutions."
  },
  {
    name: "Dewey-Humboldt",
    description: "Peaceful rural atmosphere with spacious properties and custom home financing options."
  },
  {
    name: "Clarkdale",
    description: "Historic company town with preserved architecture, artistic flair, and accessible home loan choices."
  },
  {
    name: "Jerome",
    description: "Historic hillside mining town with breathtaking Verde Valley views and unique property financing."
  },
  {
    name: "Cornville",
    description: "Verde Valley community with vineyards, acreage, and rural home financing near Cottonwood."
  },
  {
    name: "Dewey",
    description: "Highway 69 community with spacious lots, mountain views, and custom home mortgage options."
  },
  {
    name: "Yavapai Hills",
    description: "Prescott-area neighborhood with golf-community living and competitive home loan programs."
  }
];

const countyFaqs = [
  {
    q: "What home loan programs are available to Yavapai County homebuyers?",
    a: "Yavapai County buyers have access to the full range of mortgage programs including Conventional, FHA, VA (for eligible veterans), Jumbo, FHA Streamline Refinance, First-Time Homebuyer programs, Reverse Mortgage (for homeowners 62+), and Refinancing. The best program depends on your credit score, down payment, and financial goals. Our team can walk you through all your options at no cost."
  },
  {
    q: "What is the conforming loan limit in Yavapai County for 2026?",
    a: "The 2026 conforming loan limit for Yavapai County is $832,750 – the same baseline limit that applies across all Arizona counties. This is the maximum loan amount eligible for conventional financing backed by Fannie Mae or Freddie Mac. If your loan exceeds this amount, you will need a jumbo loan."
  },
  {
    q: "What is the FHA loan limit in Yavapai County for 2026?",
    a: "The 2026 FHA loan limit for Yavapai County is $541,287. This means you can finance a home up to that purchase price using an FHA loan with as little as 3.5% down (with a 580+ credit score). FHA loans are popular with Yavapai County buyers because of the flexible credit requirements and low down payment."
  },
  {
    q: "Why are people moving to Yavapai County?",
    a: "Yavapai County attracts buyers from across Arizona and the country for its cooler climate, scenic landscapes, and more affordable home prices compared to the Phoenix metro. Prescott and Prescott Valley are especially popular with retirees and remote workers, while Cottonwood and the Verde Valley draw buyers looking for a quieter lifestyle with easy access to outdoor recreation."
  },
  {
    q: "How much do I need for a down payment on a Yavapai County home?",
    a: "It depends on the loan type. FHA loans require as little as 3.5% down. Conventional loans can go as low as 3%-5% for qualified buyers. VA loans require zero down payment for eligible veterans. We also work with down payment assistance programs that may reduce your out-of-pocket costs. Contact us to find out which programs you qualify for."
  },
  {
    q: "How long does it take to close on a home in Yavapai County?",
    a: "Most purchase transactions close in 21 to 30 days when all documentation is submitted promptly. Our team is known for fast, smooth closings – we will keep you informed every step of the way so there are no surprises at the closing table."
  }
];

const testimonials = [
  {
    name: "Tracy Larson",
    quote:
      "Eddie was wonderful to work with. He communicated every step of the way and made the entire process so easy. I would highly recommend him to anyone looking for a mortgage in Arizona.",
    attribution: "Tracy Larson, Arizona",
  },
  {
    name: "Jaclyn Lindsey",
    quote:
      "Eddie and his team went above and beyond for us. As first-time buyers we were nervous, but they walked us through every step. Closed on time with no surprises. Highly recommend!",
    attribution: "Jaclyn Lindsey, Arizona Homebuyer",
  },
  {
    name: "Michael and Donna Hawkins",
    quote:
      "Outstanding service from start to finish. They made the whole process stress-free and got us into our dream home. We will definitely be referring all our friends and family to Mortgage Brothers.",
    attribution: "Michael and Donna Hawkins, Arizona",
  },
  {
    name: "Anita Sanda",
    quote:
      "The Mortgage Brothers team made buying our home so much easier than we expected. They were knowledgeable, responsive, and got us a great rate. Could not be happier!",
    attribution: "Anita Sanda, Surprise, AZ",
  },
  {
    name: "Christian Holt",
    quote:
      "Mortgage Brothers helped me close on my first home faster than I thought possible. The process was clear and they were always available to answer my questions. Incredible team!",
    attribution: "Christian Holt, Arizona Homebuyer",
  },
];

const faqJsonLd = buildFaqPageSchema(normalizeFaqs(countyFaqs));
const reviewsJsonLd = buildReviewsSchema(
  testimonials.map((t) => ({ author: t.name, reviewBody: t.quote })),
);

export default function YavapaiCountyPage() {
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
        {/* Hero Section */}
        <section className="w-full bg-brand-green-deep text-white py-16 lg:py-20 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            {/* Breadcrumb inside Pine Green Section */}
            <div className="flex items-center justify-center gap-2 text-[13px] font-medium text-[#c8c8b8] mb-5">
              <Link href="/service-areas/" className="text-[#b8d4b8] hover:text-white transition-colors duration-200">
                Areas We Serve
              </Link>
              <span className="text-white/40">&gt;</span>
              <span className="text-white font-semibold">Yavapai County</span>
            </div>

            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
              MAJOR COUNTIES - YAVAPAI
            </p>

            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">
              Your trusted Yavapai County mortgage broker.
            </h1>

            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">
              From Prescott to Sedona — 12 communities, one team that knows every one of them.
            </p>

            <HeroCtaButtons className="mb-4" />

            <p className="text-[#5a6b52] text-[12px] font-medium">
              3 min - no credit impact
            </p>
          </div>
        </section>


        <section className="w-full py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-6">Home Loans in Yavapai County, Arizona</h2>
            <div className="text-brand-text-muted text-[15px] space-y-4">
              <p>Mortgage Brothers is the Prescott mortgage broker locals trust - serving Prescott, Prescott Valley, Sedona, and communities across all of Yavapai County for over 25 years.</p>
              <p>Yavapai County is one of Arizona&apos;s most scenic and diverse counties, stretching from the high desert of Prescott and Prescott Valley to the Verde Valley communities of Cottonwood, Clarkdale, and Jerome. With a mix of retirees, families, and first-time buyers drawn by the cooler climate and more affordable prices than metro Phoenix, Yavapai County has one of the most active real estate markets in the state.</p>
              <p>At Mortgage Brothers, we have been helping Arizona homebuyers navigate the mortgage process for 25+ years. Whether you are buying in Prescott, Cottonwood, Chino Valley, or anywhere in between, we know the market and can help you find the right loan.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Major Cities:</strong> Prescott, Prescott Valley, Cottonwood, Chino Valley, Sedona (shared with Coconino), Clarkdale, Jerome, Cornville</li>
                <li><strong>2026 Conforming Loan Limit:</strong> $832,750</li>
                <li><strong>2026 FHA Loan Limit:</strong> $541,287</li>
                <li><strong>Popular Communities:</strong> Dewey-Humboldt, Mayer, Paulden, Skull Valley, Crown King, Wilhoit, Williamson Valley</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cities Grid Section */}
        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">
                Yavapai County mortgage services
              </h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px]">
                Select your city below for local mortgage expertise.
              </p>
            </div>

            <CountyCityCards countySlug="yavapai-county-az" cities={cities} />
          </div>
        </section>
        <CountyMortgagePrograms countyName="Yavapai County" fhaLimit="$541,287" />

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
            "Choosing the right mortgage matters. Our team takes a personalized approach—reviewing your income, credit profile, and goals before recommending loan options.",
            "Our AI-supported loan analysis helps compare lender terms efficiently, while our experienced advisors ensure decisions are made with clarity and confidence.",
          ]}
        />

        {/* Bottom CTA section */}
        <section className="w-full bg-[#052316] text-white py-16 lg:py-24 text-center relative overflow-hidden border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.15em] uppercase mb-4">
              READY WHEN YOU ARE
            </p>
            <h2 className="text-white text-[32px] lg:text-[44px] font-playfair font-normal leading-tight mb-4">
              Ready to start your Yavapai County home journey?
            </h2>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.7] max-w-xl mx-auto mb-8">
              Let&apos;s find the perfect mortgage solution for your Yavapai County home.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href="/#get-pre-approved"
                className="w-full sm:w-auto btn-primary hover:shadow-brand-green-accent/20 group"
              >
                Get Pre-Approved
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <a
                href="tel:6025352171"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-white/30 hover:border-white/60 text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all duration-200 gap-2"
              >
                (602) 535-2171
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}