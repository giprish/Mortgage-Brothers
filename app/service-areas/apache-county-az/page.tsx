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

export const metadata: Metadata = getSeoMetadata("/service-areas/apache-county-az/");

const cities = [
  { name: "Snowflake", description: "Snowflake offers a quiet small-town lifestyle with growing residential neighborhoods and new home developments. Our mortgage brokers help Snowflake homebuyers." },
  { name: "Springerville", description: "Springerville combines historic charm with beautiful mountain surroundings in eastern Arizona. Our mortgage specialists help buyers explore loan programs that fit first-time purchases." },
  { name: "Eagar", description: "Eagar is known as community and family-friendly neighborhoods near the White Mountains. We help Eagar buyers compare mortgage options and find financing solutions." },
  { name: "Greer", description: "Greer is a popular destination for cabin homes, vacation properties, and scenic mountain living. Our mortgage experts help buyers secure financing options designed for seasonal homes." },
  { name: "Alpine", description: "Alpine offers peaceful living surrounded by forests and outdoor recreation areas. Our mortgage team works with buyers interested in rural properties, second homes, and custom homes." },
  { name: "St. Johns", description: "Home loans, refinancing, and pre-approvals for St. Johns buyers." },
  { name: "Chinle", description: "Home loans, refinancing, and pre-approvals for Chinle buyers." },
  { name: "Window Rock", description: "Home loans, refinancing, and pre-approvals for Window Rock buyers." },
];

const countyFaqs = [
  {
    q: "What home loan programs are available to Apache County homebuyers?",
    a: "Apache County buyers have access to the full range of mortgage programs including Conventional, FHA, VA (for eligible veterans), Jumbo, FHA Streamline Refinance, First-Time Homebuyer programs, Reverse Mortgage (for homeowners 62+), and Refinancing. Our team can walk you through all your options at no cost."
  },
  {
    q: "What is the conforming loan limit in Apache County for 2026?",
    a: "The 2026 conforming loan limit for Apache County is $832,750 – the same baseline limit that applies across all Arizona counties. This is the maximum loan amount eligible for conventional financing backed by Fannie Mae or Freddie Mac. If your loan exceeds this amount, you will need a jumbo loan."
  },
  {
    q: "What is the FHA loan limit in Apache County for 2026?",
    a: "The 2026 FHA loan limit for Apache County is $541,287. This means you can finance a home up to that purchase price using an FHA loan with as little as 3.5% down (with a 580+ credit score). FHA loans are a popular option in Apache County given the more affordable home prices throughout the White Mountains region."
  },
  {
    q: "Why are people buying homes in Apache County?",
    a: "Apache County attracts buyers who love the outdoors and want a quieter lifestyle in the White Mountains of eastern Arizona. Snowflake and Eagar offer affordable family neighborhoods, while Greer and Alpine draw buyers looking for cabin retreats and vacation properties. The area offers four seasons, excellent fishing and hiking, and a strong sense of community."
  },
  {
    q: "How much do I need for a down payment on an Apache County home?",
    a: "FHA loans require as little as 3.5% down. Conventional loans can go as low as 3%-5% for qualified buyers. VA loans require zero down payment for eligible veterans. We also work with down payment assistance programs. Contact us to find out which programs you qualify for."
  },
  {
    q: "How long does it take to close on a home in Apache County?",
    a: "Most purchase transactions close in 21 to 30 days when all documentation is submitted promptly. Our team is known for fast, smooth closings with no surprises at the closing table."
  }
];

const testimonials = [
  {
    name: "Christian Holt",
    quote:
      "Mortgage Brothers helped me close on my first home faster than I thought possible. The process was clear and they were always available to answer my questions. Incredible team!",
    attribution: "Christian Holt, Arizona Homebuyer",
  },
  {
    name: "Mona Collins",
    quote:
      "Mortgage Brothers took the time to explain every option available to us. We never felt rushed or confused. Closing was smooth and the rate was better than any other lender we talked to.",
    attribution: "Mona Collins, Arizona Homebuyer",
  },
  {
    name: "Tracy Larson",
    quote:
      "Eddie was wonderful to work with. He communicated every step of the way and made the entire process so easy. I would highly recommend him to anyone looking for a mortgage in Arizona.",
    attribution: "Tracy Larson, Arizona",
  },
  {
    name: "Spencer Adams",
    quote:
      "Eddie helped us close on our new home faster than we thought possible. His knowledge of the market and loan programs saved us thousands. We will be recommending Mortgage Brothers to everyone we know.",
    attribution: "Spencer Adams, Arizona Homebuyer",
  },
  {
    name: "Jaclyn Lindsey",
    quote:
      "Eddie and his team went above and beyond for us. As first-time buyers we were nervous, but they walked us through every step. Closed on time with no surprises. Highly recommend!",
    attribution: "Jaclyn Lindsey, Arizona Homebuyer",
  },
];

const faqJsonLd = buildFaqPageSchema(normalizeFaqs(countyFaqs));
const reviewsJsonLd = buildReviewsSchema(
  testimonials.map((t) => ({ author: t.name, reviewBody: t.quote })),
);

export default function ApacheCountyPage() {
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
              <span className="text-white font-semibold">Apache County</span>
            </div>
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">NORTHERN ARIZONA - APACHE</p>
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">Your trusted Apache County mortgage broker.</h1>
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">Mortgage Brothers is a trusted Arizona mortgage broker providing personalized home loan solutions throughout Apache County, AZ.</p>
            <HeroCtaButtons className="mb-4" />
          </div>
        </section>

        <section className="w-full py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-6">Home Loans in Apache County, Arizona</h2>
            <div className="text-brand-text-muted text-[15px] space-y-4">
              <p>Whether you are buying in the White Mountains around Eagar and Springerville or in the historic community of St. Johns, Mortgage Brothers is here to make your Apache County home loan straightforward and stress-free.</p>
              <p>Apache County is Arizona&apos;s northeasternmost county, a vast stretch of high desert and alpine forest that includes the White Mountains, part of the Navajo Nation, and the striking red rock canyons of Canyon de Chelly. With small-town communities, wide-open spaces, and some of the most affordable real estate in the state, Apache County attracts buyers seeking a quiet, scenic pace of life. At Mortgage Brothers, we have been helping Arizona homebuyers navigate the mortgage process for 25+ years — from first-time purchases in Springerville to refinances in St. Johns.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Major Cities:</strong> St. Johns, Eagar, Springerville, Chinle, Window Rock</li>
                <li><strong>2026 Conforming Loan Limit:</strong> $832,750</li>
                <li><strong>2026 FHA Loan Limit:</strong> $541,287</li>
                <li><strong>Popular Communities:</strong> Greer, McNary, Sanders, Ganado, Rock Point, Teec Nos Pos, Saint Michaels</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="areas" className="w-full py-16 lg:py-24 bg-white scroll-mt-[72px]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">Apache County Arizona Mortgage Broker Serving All Major Cities</h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px] max-w-3xl mx-auto">Our Apache County mortgage specialists provide reliable home loan and refinancing services across the region&apos;s rural communities, mountain towns, and growing residential areas. Whether you&apos;re buying your first home, upgrading, refinancing, or investing in vacation property, we help match you with the right loan options and competitive mortgage rates for your financial goals.</p>
            </div>
            <CountyCityCards countySlug="apache-county-az" cities={cities} />
          </div>
        </section>

        <CTA
          eyebrow=""
          title="Ready to Start Your Home Mortgage Journey in Apache County?"
          description="Our Apache County mortgage specialists are here to answer your questions, compare loan programs, and guide you through every step of the mortgage process. From Snowflake to Alpine and surrounding communities, we make home financing simple and stress-free."
          primaryLabel="View All Apache County Areas"
          primaryHref="#areas"
          secondaryLabel="Call Us Now"
        />


        <CountyMortgagePrograms countyName="Apache County" fhaLimit="$541,287" />

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
            "Choosing the right mortgage matters. Our team takes a personalized approach by reviewing your income, credit profile, and long-term financial goals before recommending loan options.",
            "Our AI-supported loan comparison process helps identify competitive lenders efficiently, while our experienced advisors ensure you move forward with clarity and confidence.",
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}