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

export const metadata: Metadata = getSeoMetadata("/service-areas/pinal-county-az/");

const cities = [
  {
    name: "San Tan Valley",
    description: "Pinal County's fastest-growing community featuring master-planned neighborhoods, family-friendly amenities, and affordable housing options."
  },
  {
    name: "Queen Creek",
    description: "Thriving Southeast Valley community with master-planned neighborhoods, top-rated schools, and strong community appeal for families and professionals."
  },
  {
    name: "Casa Grande",
    description: "Pinal County seat offering affordable housing, a historic downtown, and a strong community feel — a great choice for families and retirees alike."
  },
  {
    name: "Coolidge",
    description: "Historic community with affordable housing and small-town charm — a great fit for first-time buyers looking for competitive rates and room to grow."
  },
  {
    name: "Florence",
    description: "Historic town with preserved architecture, modern growth, and a welcoming community for families and retirees."
  },
  {
    name: "Apache Junction",
    description: "Gateway to the Superstition Mountains with active adult communities and stunning desert living — popular with retirees and outdoor enthusiasts."
  },
  {
    name: "Maricopa",
    description: "Popular commuter city with modern master-planned communities, great parks, and flexible first-time buyer loan programs."
  },
  {
    name: "Eloy",
    description: "Conveniently located along I-10, Eloy provides affordable housing options for buyers and refinancers."
  },
  {
    name: "Superior",
    description: "Historic mining town nestled in the mountains with unique small-town charm and affordable home loans."
  },
  {
    name: "Kearny",
    description: "Scenic Gila River Valley town offering peaceful small-town living and competitive home loan rates."
  },
  {
    name: "Mammoth",
    description: "Quiet desert community in southern Pinal County offering affordable single-family home financing."
  }
];

const countyFaqs = [
  {
    q: "What home loan programs are available to Pinal County homebuyers?",
    a: "Pinal County buyers have access to the full range of mortgage programs including Conventional, FHA, VA (for eligible veterans), Jumbo, FHA Streamline Refinance, First-Time Homebuyer programs, Reverse Mortgage (for homeowners 62+), and Refinancing. The best program depends on your credit score, down payment, and financial goals. Our team can walk you through all your options at no cost."
  },
  {
    q: "What is the conforming loan limit in Pinal County for 2026?",
    a: "The 2026 conforming loan limit for Pinal County is $832,750 – the same baseline limit that applies across all Arizona counties. This is the maximum loan amount eligible for conventional financing backed by Fannie Mae or Freddie Mac. If your loan exceeds this amount, you will need a jumbo loan."
  },
  {
    q: "What is the FHA loan limit in Pinal County for 2026?",
    a: "The 2026 FHA loan limit for Pinal County is $557,750. This means you can finance a home up to that purchase price using an FHA loan with as little as 3.5% down (with a 580+ credit score). FHA loans are a popular choice in Pinal County because of the flexible credit requirements and low down payment."
  },
  {
    q: "Why are so many people moving to Pinal County?",
    a: "Pinal County has become one of the top relocation destinations in the country, largely because of more affordable home prices compared to Maricopa County, newer master-planned communities, excellent schools, and shorter commute times to both Phoenix and Tucson. Cities like San Tan Valley, Queen Creek, and Casa Grande offer a great quality of life without the higher price tag of the Phoenix metro core."
  },
  {
    q: "How much do I need for a down payment on a Pinal County home?",
    a: "It depends on the loan type. FHA loans require as little as 3.5% down. Conventional loans can go as low as 3%-5% for qualified buyers. VA loans require zero down payment for eligible veterans. We also work with down payment assistance programs that may help reduce your out-of-pocket costs."
  },
  {
    q: "How long does it take to close on a home in Pinal County?",
    a: "Most purchase transactions close in 21 to 30 days when all documentation is submitted promptly. Our team is known for fast, smooth closings – we will keep you informed every step of the way so there are no surprises at the closing table."
  }
];

const testimonials = [
  {
    name: "Sean Cassidy",
    quote:
      "The team at Mortgage Brothers made our first home purchase an amazing experience. They were patient with all our questions and got us a great rate. We could not have done this without them.",
    attribution: "Sean Cassidy, Arizona Homebuyer",
  },
  {
    name: "Jaclyn Lindsey",
    quote:
      "Eddie and his team went above and beyond for us. As first-time buyers we were nervous, but they walked us through every step. Closed on time with no surprises. Highly recommend!",
    attribution: "Jaclyn Lindsey, Arizona Homebuyer",
  },
  {
    name: "Thomas and Carol Milberry",
    quote:
      "We have worked with Mortgage Brothers on two home purchases now. Every time they deliver – fast closings, clear communication, and rates that beat the competition. They are our go-to mortgage team.",
    attribution: "Thomas and Carol Milberry, Queen Creek, AZ",
  },
  {
    name: "Michael and Donna Hawkins",
    quote:
      "Outstanding service from start to finish. They made the whole process stress-free and got us into our dream home. We will definitely be referring all our friends and family to Mortgage Brothers.",
    attribution: "Michael and Donna Hawkins, Arizona",
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

export default function PinalCountyPage() {
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
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5 pointer-events-none opacity-40"></div>
            <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none opacity-40"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            {/* Breadcrumb inside Pine Green Section */}
            <div className="flex items-center justify-center gap-2 text-[13px] font-medium text-[#c8c8b8] mb-5">
              <Link href="/service-areas/" className="text-[#b8d4b8] hover:text-white transition-colors duration-200">
                Areas We Serve
              </Link>
              <span className="text-white/40">&gt;</span>
              <span className="text-white font-semibold">Pinal County</span>
            </div>

            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
              MAJOR COUNTIES - PINAL
            </p>

            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">
              Your trusted Pinal County mortgage broker.
            </h1>

            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">
              We are here to make the home loan process a whole lot easier, with tools and expertise that will help guide you.
            </p>

            <HeroCtaButtons className="mb-4" />

            <p className="text-[#5a6b52] text-[12px] font-medium">
              3 min - no credit impact
            </p>
          </div>
        </section>


        <section className="w-full py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-6">Home Loans in Pinal County, Arizona</h2>
            <div className="text-brand-text-muted text-[15px] space-y-4">
              <p>Pinal County is one of the fastest-growing counties in the United States, and it is easy to see why. With more affordable home prices than neighboring Maricopa County, a strong sense of community, and easy access to both Phoenix and Tucson, Pinal County attracts first-time buyers, growing families, and retirees alike.</p>
              <p>At Mortgage Brothers, we have been helping Arizona homebuyers navigate the mortgage process for 25+ years. We know Pinal County — from the master-planned neighborhoods of San Tan Valley and Queen Creek to the historic charm of Casa Grande and Florence. Let us help you find the right loan for your next chapter.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>County Population:</strong> Approximately 500,000 residents</li>
                <li><strong>Major Cities:</strong> San Tan Valley, Queen Creek, Casa Grande, Coolidge, Florence, Apache Junction, Eloy, Maricopa</li>
                <li><strong>2026 Conforming Loan Limit:</strong> $832,750</li>
                <li><strong>2026 FHA Loan Limit:</strong> $557,750</li>
                <li><strong>Popular Communities:</strong> Gold Canyon, Arizona City, Magma Ranch, Anthem at Merrill Ranch, Stanfield, Picacho</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cities Grid Section */}
        <section id="areas" className="w-full py-16 lg:py-24 bg-white scroll-mt-[72px]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">
                Pinal County Arizona Mortgage Broker Serving All Major Cities
              </h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px]">
                Select your city below for local mortgage expertise and rates.
              </p>
            </div>

            <CountyCityCards countySlug="pinal-county-az" cities={cities} />
          </div>
        </section>

        <CTA
          eyebrow=""
          title="Ready to Start Your Pinal County Home Journey?"
          description="Let's find the perfect mortgage solution for your Pinal County home."
          primaryLabel="View All Pinal County Areas"
          primaryHref="#areas"
          secondaryLabel="Call Us Now"
        />

        <CountyMortgagePrograms
          countyName="Pinal County"
          fhaLimit="$557,750"
          intro="Whether you are buying your first home, upgrading to a larger space, or refinancing to a better rate, we offer a full range of home loan options for Pinal County residents."
        />

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
            "Take the first step toward homeownership with AZ Mortgage Brothers, your trusted local mortgage team. Our team provides expert guidance through the home loan process — answering questions, reviewing your options, and helping you secure the best terms for your situation. We'll help you secure the best possible terms for your unique situation across San Tan Valley, Queen Creek, Casa Grande, Coolidge, Florence, and Apache Junction.",
            "Whether you prefer to chat over the phone, send us an email, or meet in person, we are here to help. Fill out the form below, and one of our Pinal County Arizona mortgage broker specialists will get back to you promptly.",
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}