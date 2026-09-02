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

export const metadata: Metadata = getSeoMetadata("/service-areas/yavapai-county-az/");

const cities = [
  {
    name: "Prescott",
    description: "Prescott offers a strong housing market with diverse neighborhoods and long-term value. Prescott offers a strong housing market with diverse neighborhoods and long-term value — we help buyers secure competitive home loans with clear guidance and fast closings."
  },
  {
    name: "Cottonwood",
    description: "Cottonwood attracts both homeowners and investors with its steady growth and affordability. We provide mortgage solutions in Cottonwood designed for home purchases, refinancing, and long-term planning."
  },
  {
    name: "Chino Valley",
    description: "Chino Valley is known for larger lots and more affordable housing options. Our mortgage experts help Chino Valley buyers find loan programs that fit rural-friendly loan options and suburban property needs."
  },
  {
    name: "Dewey",
    description: "Dewey offers quieter living with access to nearby cities. We assist Dewey homebuyers with flexible mortgage options and personalized support throughout the loan process."
  },
  {
    name: "Yavapai Hills",
    description: "Yavapai Hills features established neighborhoods with strong home values. Our mortgage broker services help homeowners and buyers navigate financing with confidence and clarity."
  },
  {
    name: "Prescott Valley",
    description: "Prescott Valley continues to grow with new homes and family-friendly communities. We help buyers secure home loans that match market conditions and builder timelines."
  },
  {
    name: "Clarkdale",
    description: "Clarkdale provides a mix of historic charm and residential opportunity. We help Clarkdale buyers find tailored home loan solutions that fit their goals and timeline."
  },
  {
    name: "Cornville",
    description: "Cornville offers rural-style living with unique property types. We help Cornville buyers understand loan requirements and secure financing that fits non-traditional properties."
  },
  {
    name: "Jerome",
    description: "Jerome's distinctive housing market often requires careful mortgage planning. Our team helps buyers navigate financing options for unique homes and hillside properties."
  },
  {
    name: "Sedona",
    description: "World-famous red rock beauty offering luxury estates, second homes, and specialized jumbo loan options."
  },
  {
    name: "Camp Verde",
    description: "Historic Verde River valley location with scenic rural living and affordable mortgage solutions."
  },
  {
    name: "Dewey-Humboldt",
    description: "Peaceful rural atmosphere with spacious properties and custom home financing options."
  },
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
              Mortgage Brothers is a trusted Arizona mortgage broker providing home loan solutions throughout Yavapai County, AZ. We help buyers and homeowners secure competitive mortgage options with clear guidance, and a smooth approval process.
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
              <p>At <Link href="/" className="text-[#3fb364] font-bold hover:underline">Mortgage Brothers</Link>, we have been helping Arizona homebuyers navigate the mortgage process for 25+ years. Whether you are buying in Prescott, Cottonwood, Chino Valley, or anywhere in between, we know the market and can help you find the right loan.</p>
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
        <section id="areas" className="w-full py-16 lg:py-24 bg-white scroll-mt-[72px]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">
                Serving All of Yavapai County
              </h2>
              <div className="text-brand-text-muted text-[15px] lg:text-[16px] max-w-3xl mx-auto space-y-4">
                <p>Our Yavapai County mortgage broker team provides home loans and mortgage services across the county&apos;s major cities and communities.</p>
                <p>Whether you&apos;re buying your first home, upgrading, refinancing, or exploring loan options in Yavapai County, our team works with multiple lenders to help you find a mortgage that fits your financial goals.</p>
              </div>
            </div>

            <CountyCityCards countySlug="yavapai-county-az" cities={cities} />
          </div>
        </section>

        <CTA
          eyebrow=""
          title="Ready to Start Your Home Mortgage Journey in Yavapai County?"
          description="Our Yavapai County mortgage experts are here to answer your questions, compare loan options, and guide you through every step of the process."
          primaryLabel="View All Yavapai County Areas"
          primaryHref="#areas"
          secondaryLabel="Call Us Now"
        />

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
          showPreApproveCta
          ctaLabel="Start my preapproval"
        />
      </main>

      <Footer />
    </div>
  );
}