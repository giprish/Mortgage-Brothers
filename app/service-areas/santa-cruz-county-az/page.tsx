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

export const metadata: Metadata = getSeoMetadata("/service-areas/santa-cruz-county-az/");

const cities = [
  {
    name: "Santa Cruz",
    description:
      "Santa Cruz offers a blend of historic charm and growing residential communities along the Arizona–Mexico border. Our mortgage experts help buyers secure flexible home loan options for primary residences, refinancing, and long-term investments.",
  },
  { name: "Nogales", description: "As Santa Cruz County's seat on the international border, Nogales offers commerce, historic homes, and home loans." },
  { name: "Rio Rico", description: "Master-planned community with rolling hills, golf courses, and accessible home financing." },
  { name: "Tubac", description: "Historic arts colony and luxury golf resort community featuring custom jumbo home loan solutions." },
  { name: "Patagonia", description: "Scenic mountain valley town known for birdwatching, nature preserves, and quiet rural homes." },
];

const countyFaqs = [
  {
    q: "What home loan programs are available to Santa Cruz County homebuyers?",
    a: "Santa Cruz County buyers have access to the full range of mortgage programs including Conventional, FHA, VA (for eligible veterans), Jumbo, FHA Streamline Refinance, First-Time Homebuyer programs, Reverse Mortgage (for homeowners 62+), and Refinancing. Our team can walk you through all your options at no cost."
  },
  {
    q: "What is the conforming loan limit in Santa Cruz County for 2026?",
    a: "The 2026 conforming loan limit for Santa Cruz County is $832,750 – the same baseline limit that applies across all Arizona counties. If your loan exceeds this amount, you will need a jumbo loan."
  },
  {
    q: "What is the FHA loan limit in Santa Cruz County for 2026?",
    a: "The 2026 FHA loan limit for Santa Cruz County is $541,287. This means you can finance a home up to that purchase price using an FHA loan with as little as 3.5% down (with a 580+ credit score)."
  },
  {
    q: "Why are people buying homes in Santa Cruz County?",
    a: "Santa Cruz County attracts buyers drawn by the area's cultural richness, scenic landscapes, and affordable home prices. Rio Rico is especially popular with families and first-time buyers looking for newer homes at lower prices than Tucson. Tubac and Patagonia draw artists, retirees, and second-home buyers seeking a quiet, scenic retreat. The area also benefits from strong cross-border commerce through Nogales."
  },
  {
    q: "How much do I need for a down payment on a Santa Cruz County home?",
    a: "FHA loans require as little as 3.5% down. Conventional loans can go as low as 3%-5% for qualified buyers. VA loans require zero down payment for eligible veterans. We also work with down payment assistance programs. Contact us to find out which programs you qualify for."
  },
  {
    q: "How long does it take to close on a home in Santa Cruz County?",
    a: "Most purchase transactions close in 21 to 30 days when all documentation is submitted promptly. Our team is known for fast, smooth closings with no surprises at the closing table."
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
    name: "Paxton Gray",
    quote:
      "Eddie and his team were incredible throughout the entire process. As a first-time buyer I had a lot of questions and they answered every single one. We closed on time and I could not be happier with the rate we got.",
    attribution: "Paxton Gray, Arizona Homebuyer",
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

export default function SantaCruzCountyPage() {
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
              <span className="text-white font-semibold">Santa Cruz County</span>
            </div>
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">SOUTHERN ARIZONA - SANTA CRUZ</p>
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">Your trusted Santa Cruz County mortgage broker.</h1>
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">Mortgage Brothers provides reliable mortgage solutions for homebuyers and homeowners throughout Santa Cruz County, AZ.</p>
            <HeroCtaButtons className="mb-4" />
          </div>
        </section>

        <section className="w-full py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-6">Home Loans in Santa Cruz County, Arizona</h2>
            <div className="text-brand-text-muted text-[15px] space-y-4">
              <p>Santa Cruz County is Arizona&apos;s southernmost county, sharing a long border with Mexico and anchored by the international port city of Nogales. The county is known for its rich cultural heritage, historic ranching communities, and scenic wine country around Sonoita and Patagonia. Rio Rico offers newer residential neighborhoods and has become popular with buyers seeking affordable homes within commuting distance of Tucson.</p>
              <p>At Mortgage Brothers, we have been helping Arizona homebuyers navigate the mortgage process for 25+ years. As your local Nogales mortgage broker, we serve buyers and homeowners across Santa Cruz County — from first-time purchases in Rio Rico to custom financing for luxury properties in Tubac.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Major Cities:</strong> Nogales, Rio Rico, Tubac, Patagonia, Sonoita</li>
                <li><strong>2026 Conforming Loan Limit:</strong> $832,750</li>
                <li><strong>2026 FHA Loan Limit:</strong> $541,287</li>
                <li><strong>Popular Communities:</strong> Kino Springs, Calabasas, Amado, Lochiel, Ruby, Pena Blanca Lake area</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="areas" className="w-full py-16 lg:py-24 bg-white scroll-mt-[72px]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">Santa Cruz County Arizona Mortgage Broker Serving Local Communities</h2>
              <div className="text-brand-text-muted text-[15px] lg:text-[16px] max-w-3xl mx-auto space-y-4">
                <p>Our Santa Cruz County mortgage specialists assist homebuyers and homeowners throughout southern Arizona with dependable mortgage services. Whether you&apos;re purchasing a primary residence, investing in property, or refinancing your current mortgage, we help you compare lenders and choose the right loan program.</p>
                <p>With access to a wide network of lending partners, our team helps clients secure competitive mortgage rates while simplifying the entire home financing process from application to closing.</p>
              </div>
            </div>
            <CountyCityCards countySlug="santa-cruz-county-az" cities={cities} />
          </div>
        </section>

        <CTA
          eyebrow=""
          title="Ready to Start Your Home Mortgage Journey in Santa Cruz County?"
          description="Our Santa Cruz County mortgage experts are here to guide you through every step of the home loan process. From Nogales to Rio Rico and surrounding communities, we help buyers and homeowners secure the right mortgage solutions with confidence. Our experienced mortgage brokers help clients secure competitive mortgage rates and flexible home loan options across the region."
          primaryLabel="View All Santa Cruz County Areas"
          primaryHref="#areas"
          secondaryLabel="Call Us Now"
        />

        <CountyMortgagePrograms countyName="Santa Cruz County" fhaLimit="$541,287" />

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
            "Choosing the right mortgage is an important financial decision. Our Santa Cruz County mortgage team takes a personalized approach by reviewing your financial profile, credit history, and long-term homeownership goals before recommending the best loan options.",
            "With access to multiple lenders and advanced loan comparison tools, we help clients secure competitive mortgage solutions while keeping the process smooth and transparent.",
            "Whether you're purchasing your first home, refinancing your existing mortgage, or exploring new financing opportunities, our team provides clear guidance and personalized mortgage strategies tailored to your financial goals.",
          ]}
        />

        <CTA
          title="Ready to start your Santa Cruz County home journey?"
          description="Let's find the perfect mortgage solution for your Santa Cruz County home."
        />
      </main>
      <Footer />
    </div>
  );
}