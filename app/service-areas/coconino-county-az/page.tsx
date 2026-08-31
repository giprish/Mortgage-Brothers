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

export const metadata: Metadata = getSeoMetadata("/service-areas/coconino-county-az/");

const cities = [
  {
    name: "Flagstaff",
    description: "Flagstaff offers a diverse housing market near Northern Arizona University and outdoor recreation. Our mortgage solutions help buyers navigate higher-elevation pricing with confidence and clarity."
  },
  {
    name: "Williams",
    description: "Williams combines small-town charm with tourism-driven opportunities. We help homeowners and buyers secure flexible mortgage options suited for primary homes or investment properties."
  },
  {
    name: "Sedona",
    description: "Sedona is known for luxury homes and scenic red-rock views. Our mortgage experts assist homeowners and buyers with customized loan solutions for high-value and second-home properties."
  },
  {
    name: "Happy Jack",
    description: "Happy Jack features cabin-style living and rural properties. We guide buyers through financing options that fit unique home types and land considerations."
  },
  {
    name: "Munds Park",
    description: "Munds Park is popular for vacation and seasonal home properties. Our team helps buyers secure financing that works for second homes and long-term investments."
  },
  {
    name: "Page",
    description: "Page attracts buyers seeking proximity to Lake Powell and tourism opportunities. We offer mortgage solutions tailored for residential and short-term rental properties."
  },
  {
    name: "Doney Park",
    description: "Doney Park provides spacious lots and quieter living near Flagstaff. We help buyers understand financing options for homes with larger parcels and rural zoning."
  },
  {
    name: "Bellemont",
    description: "Bellemont offers newer developments and family-friendly neighborhoods. Our mortgage services support first-time buyers and growing families with competitive loan options."
  },
  {
    name: "Timberline",
    description: "Timberline features mountain homes and scenic surroundings. We assist buyers with mortgage programs designed for higher-elevation and custom-built properties."
  },
  {
    name: "Parks",
    description: "Parks is ideal for buyers seeking privacy and acreage. Our team helps navigate financing for rural homes and affordable properties with unique land features."
  },
  {
    name: "Mountainaire",
    description: "Mountainaire offers forest-surrounded living with larger lots. We provide personalized mortgage guidance for buyers seeking peaceful, low-density communities."
  },
  {
    name: "Kachina Village",
    description: "Kachina Village is a popular Flagstaff-area community with affordable housing options. We help buyers secure practical mortgage solutions tailored to local market conditions."
  },
  {
    name: "Mormon Lake",
    description: "Mormon Lake delivers scenic, rural living and open land. Our mortgage experts assist with financing options suited for remote properties and long-term ownership goals."
  },
  {
    name: "Fredonia",
    description: "Northern border community with small-town quiet living and accessible home mortgage programs."
  },
  {
    name: "Tusayan",
    description: "Grand Canyon South Rim community providing housing solutions for local workforce and residents."
  },
];

const countyFaqs = [
  {
    q: "What home loan programs are available to Coconino County homebuyers?",
    a: "Coconino County buyers have access to the full range of mortgage programs including Conventional, FHA, VA (for eligible veterans), Jumbo, FHA Streamline Refinance, First-Time Homebuyer programs, Reverse Mortgage (for homeowners 62+), and Refinancing. Our team can walk you through all your options at no cost."
  },
  {
    q: "What is the conforming loan limit in Coconino County for 2026?",
    a: "The 2026 conforming loan limit for Coconino County is $832,750 – the same baseline limit that applies across all Arizona counties. If your loan exceeds this amount, you will need a jumbo loan."
  },
  {
    q: "What is the FHA loan limit in Coconino County for 2026?",
    a: "The 2026 FHA loan limit for Coconino County is $609,500 – one of the highest FHA limits in Arizona, reflecting the stronger home values in markets like Flagstaff and Sedona. This means you can finance a home up to that purchase price with as little as 3.5% down (with a 580+ credit score)."
  },
  {
    q: "Why are people buying homes in Coconino County?",
    a: "Flagstaff draws remote workers and families who love the four seasons and outdoor lifestyle. Sedona attracts buyers seeking luxury homes and investment properties with strong vacation rental demand. Williams, Page, and the more rural communities appeal to buyers looking for space, privacy, and lower price points."
  },
  {
    q: "How much do I need for a down payment on a Coconino County home?",
    a: "FHA loans require as little as 3.5% down. Conventional loans can go as low as 3%-5% for qualified buyers. VA loans require zero down payment for eligible veterans. We also work with down payment assistance programs. Contact us to find out which programs you qualify for."
  },
  {
    q: "How long does it take to close on a home in Coconino County?",
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
      "The Mortgage Brothers team made what could have been a stressful process completely seamless. They were responsive, knowledgeable, and fought hard to get us the best deal possible. Highly recommend!",
    attribution: "Michelle Buck, Arizona Homebuyer",
  },
  {
    name: "Denise Roeder",
    quote:
      "I cannot say enough good things about Mortgage Brothers. From the first call to closing day, they were professional, communicative, and genuinely cared about getting us into our home. Five stars without hesitation.",
    attribution: "Denise Roeder, Arizona",
  },
  {
    name: "Spencer Adams",
    quote:
      "Eddie helped us close on our new home faster than we thought possible. His knowledge of the market and loan programs saved us thousands. We will be recommending Mortgage Brothers to everyone we know.",
    attribution: "Spencer Adams, Arizona Homebuyer",
  },
  {
    name: "Amy Giebrich",
    quote:
      "Working with Mortgage Brothers was the best decision we made during our home purchase. They were honest, fast, and incredibly helpful. I felt like I was in great hands the entire time.",
    attribution: "Amy Giebrich, Arizona Homebuyer",
  },
];

const faqJsonLd = buildFaqPageSchema(normalizeFaqs(countyFaqs));
const reviewsJsonLd = buildReviewsSchema(
  testimonials.map((t) => ({ author: t.name, reviewBody: t.quote })),
);

export default function CoconinoCountyPage() {
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
              <span className="text-white font-semibold">Coconino County</span>
            </div>

            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
              NORTHERN ARIZONA - COCONINO
            </p>

            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">
              Your trusted Coconino County mortgage broker.
            </h1>

            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">
              Mortgage Brothers is a trusted Arizona mortgage broker providing personalized home loan solutions throughout Coconino County, AZ. We help homebuyers and homeowners secure competitive mortgage options with clear guidance and a smooth approval process.
            </p>

            <HeroCtaButtons className="mb-4" />

            <p className="text-[#5a6b52] text-[12px] font-medium">
              3 min - no credit impact
            </p>
          </div>
        </section>


        <section className="w-full py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-6">Home Loans in Coconino County, Arizona</h2>
            <div className="text-brand-text-muted text-[15px] space-y-4">
              <p>Coconino County is the second-largest county in the contiguous United States and one of Arizona&apos;s most diverse — spanning from the world-famous red rocks of Sedona to the ponderosa pine forests of Flagstaff and the dramatic canyon country near Page and Lake Powell. It attracts first-time buyers putting down roots in Flagstaff, retirees seeking the peace of mountain living, and investors drawn by Sedona&apos;s thriving vacation rental market.</p>
              <p>At Mortgage Brothers, we have helped Arizona homebuyers navigate the mortgage process for 25+ years. Whether you are buying your first home in Flagstaff, a property near Sedona, or a rural parcel near Williams, we know Coconino County and can find the right loan for you.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Major Cities:</strong> Flagstaff, Sedona (shared with Yavapai), Williams, Page, Tusayan, Kachina Village, Bellemont, Doney Park</li>
                <li><strong>2026 Conforming Loan Limit:</strong> $832,750</li>
                <li><strong>2026 FHA Loan Limit:</strong> $609,500</li>
                <li><strong>Popular Communities:</strong> Munds Park, Forest Lakes, Happy Jack, Mormon Lake, Parks, Valle, Doney Park</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cities Grid Section */}
        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">
                Serving All of Coconino County
              </h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px] max-w-3xl mx-auto">
                Our Coconino County mortgage team delivers reliable home loan and refinancing services across the region&apos;s cities, mountain towns, and rural communities. Whether you&apos;re buying your first home, upgrading, refinancing, or exploring loan options in Coconino County, our experienced brokers work with multiple lenders to help you find the best mortgage to fit your financial goals.
              </p>
            </div>

            <CountyCityCards countySlug="coconino-county-az" cities={cities} />
          </div>
        </section>
        <CountyMortgagePrograms countyName="Coconino County" fhaLimit="$609,500" />

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
            "Choosing the right mortgage matters. Our team takes a personalized approach by reviewing your income, credit profile, and long-term goals before recommending loan options.",
            "Our AI-supported loan analysis helps compare lender terms efficiently, while our experienced advisors ensure every decision is made with clarity and confidence — whether you're buying, refinancing, or planning ahead.",
          ]}
        />
        <CTA
          title="Ready to start your Coconino County home journey?"
          description="Let's find the perfect mortgage solution for your Coconino County home."
        />
      </main>

      <Footer />
    </div>
  );
}