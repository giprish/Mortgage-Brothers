import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import JsonLd from "@/app/component/JsonLd";
import { buildFaqPageSchema, buildReviewsSchema, normalizeFaqs } from "@/lib/seo/structured-data";
import FaqAccordion from "../../component/FaqAccordion";
import { renderGetInTouchText } from "@/lib/renderInlineLinks";

import React from "react";

import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import HeroCtaButtons from "../../component/HeroCtaButtons";
import CountyCityCards from "../../component/CountyCityCards";
import CountyTestimonials from "../../component/CountyTestimonials";
import GetInTouch from "../../component/GetInTouch";
import CTA from "../../component/CTA";

/** Strip `[label](href)` for FAQ JSON-LD plain text. */
function stripMarkdownLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

export const metadata: Metadata = getSeoMetadata("/service-areas/maricopa-county-az/");

// import PreApprovedForm from "../../component/PreApprovedForm";

const cities = [
  {
    name: "Phoenix",
    description: "As Arizona's capital and largest city, Phoenix offers a dynamic real estate market with diverse neighborhoods. We help residents and newcomers navigate home financing with confidence and local insight."
  },
  {
    name: "Scottsdale",
    description: "Known for its luxury living and vibrant arts scene, Scottsdale homebuyers benefit from our experience with jumbo loans and tailored mortgage solutions for high-value properties."
  },
  {
    name: "Mesa",
    description: "Mesa's family-friendly communities and growing job market make it a top choice for first-time buyers and families. We provide personalized loan options for every stage of homeownership."
  },
  {
    name: "Chandler",
    description: "Chandler's tech-driven economy and excellent schools attract professionals and families alike. Our team offers competitive rates and guidance for buyers in this thriving city."
  },
  {
    name: "Gilbert",
    description: "With its safe neighborhoods and strong sense of community, Gilbert is ideal for families. We support buyers and refinancers with a range of mortgage programs."
  },
  {
    name: "Glendale",
    description: "From historic districts to new developments, Glendale offers something for everyone. We help you find the right mortgage for your unique needs."
  },
  {
    name: "Peoria",
    description: "Peoria's mix of new developments and established neighborhoods appeals to a wide range of buyers. Our local knowledge ensures a smooth mortgage process."
  },
  {
    name: "Tempe",
    description: "Home to Arizona State University, Tempe's lively atmosphere and diverse housing options make it popular with students, professionals, and families. We offer flexible loan solutions for every lifestyle."
  },
  {
    name: "Avondale",
    description: "Fast-growing and family-oriented, Avondale features affordable homes and great parks. We offer mortgage solutions for first-time and repeat buyers."
  },
  {
    name: "Queen Creek",
    description: "Queen Creek's blend of rural charm and modern amenities attracts families and those seeking more space. We offer mortgage options for both new builds and established homes."
  },
  {
    name: "Surprise",
    description: "Growing rapidly, Surprise is known for its welcoming atmosphere and affordable homes. We help buyers secure financing that fits their budget."
  },
  {
    name: "Goodyear",
    description: "Outdoor recreation and new communities make Goodyear a top choice for active families. We provide a variety of home loan options."
  },
  {
    name: "Buckeye",
    description: "One of the fastest-growing cities in the U.S., Buckeye offers new housing and a friendly atmosphere. We help buyers access affordable financing."
  },
  {
    name: "Apache Junction",
    description: "Located at the base of the Superstition Mountains, Apache Junction offers affordable housing options and a strong appeal for first-time buyers and retirees."
  },
  {
    name: "Fountain Hills",
    description: "Our team provides customized mortgage solutions for its scenic desert views and iconic fountain, Fountain Hills attracts buyers seeking peaceful living with upscale homes."
  },
  {
    name: "Anthem",
    description: "Anthem's master-planned neighborhoods and family-friendly make it a popular choice for growing families, and flexible loan options to at every stage of homeownership."
  },
  {
    name: "New River",
    description: "New River is ideal for buyers looking for spacious properties and a more rural lifestyle. We assist homeowners with land, and traditional mortgage financing options."
  },
  {
    name: "Paradise Valley",
    description: "Exclusive and scenic, Paradise Valley is renowned for luxury properties. We specialize in jumbo and custom loan solutions for this prestigious community."
  },
  {
    name: "Wickenburg",
    description: "With its rich Western heritage and small-town charm, Wickenburg attracts buyers seeking a quieter pace of life. We help clients find competitive mortgage solutions."
  },
  {
    name: "Litchfield Park",
    description: "Litchfield Park offers established convenient access to West Valley employment hubs. Our team supports buyers and refinancers with competitive rates."
  },
  {
    name: "Cave Creek",
    description: "Cave Creek is known for its desert landscapes, and equestrian properties. We specialize in financing solutions for properties and higher-value homes in this area."
  },
  {
    name: "Carefree",
    description: "Carefree delivers luxury living with a relaxed desert atmosphere and upscale communities. We provide tailored mortgage strategies for luxury buyers and second-home purchasers."
  },
  {
    name: "Sun City",
    description: "Sun City is a nationally recognized active-adult community designed for retirement living. We offer mortgage and refinance options specifically suited for 55+ homeowners."
  },
  {
    name: "Sun City West",
    description: "Distinct from Sun City, Sun City West features newer developments and expanded amenities for active adults. Our team helps retirees navigate financing options with clarity and confidence."
  },
  {
    name: "Rio Verde",
    description: "Rio Verde is known for its golf communities and low-density desert living. We assist buyers with specialized financing for resort-style and retirement properties."
  },
  {
    name: "Guadalupe",
    description: "Guadalupe offers a close-knit community with convenient access to Tempe and Phoenix. We support local buyers with affordable home loan options and personalized mortgage guidance."
  },
  {
    name: "El Mirage",
    description: "West Valley community with affordable housing, family neighborhoods, and first-time buyer loan programs."
  },
  {
    name: "Tolleson",
    description: "Growing West Valley city with convenient freeway access, established neighborhoods, and competitive mortgage rates."
  },
  {
    name: "Youngtown",
    description: "Historic West Valley community offering affordable homes and refinance options near Sun City."
  },
  {
    name: "Gila Bend",
    description: "Southwest Maricopa County town with desert living, agricultural roots, and accessible home financing."
  }
];

const countyFaqs = [
  {
    q: "What loan programs are available to Maricopa County homebuyers?",
    a: "Maricopa County homebuyers have access to a full range of [loan programs](/mortgage-loan-programs-arizona/) including Conventional, FHA, VA, Jumbo, and [Reverse Mortgage loans](/reverse-mortgage-arizona/). First-time buyers may also qualify for down payment assistance programs. We help you compare options and match you with the program that best fits your situation."
  },
  {
    q: "What is the conforming loan limit in Maricopa County?",
    a: "The 2026 conforming loan limit for Maricopa County is $832,750 for a single-family home. Loans above this amount are considered jumbo loans and require different qualifying criteria. If you are buying in a higher price range, we can walk you through your jumbo loan options."
  },
  {
    q: "What is the FHA loan limit in Maricopa County?",
    a: "The 2026 FHA loan limit for a single-family home in Maricopa County is $557,750. This is the maximum loan amount for an FHA-insured mortgage in the Phoenix metro area. FHA loans are a popular option for buyers with down payments as low as 3.5% and credit scores starting at 580."
  },
  {
    q: "How competitive is the Maricopa County housing market?",
    a: "Maricopa County remains one of the fastest-growing counties in the U.S. Inventory has improved from pandemic-era lows, but well-priced homes in popular cities like Phoenix, Scottsdale, and Gilbert still move quickly. Getting preapproved before you start shopping gives you a significant advantage."
  },
  {
    q: "Do I need a large down payment to buy in Maricopa County?",
    a: "Not at all. Conventional loans can require as little as 3% down, and FHA loans require 3.5% for buyers with a 580+ credit score. VA loans require zero down payment for eligible veterans. We will help you find the right program and identify any down payment assistance options available in Arizona."
  },
  {
    q: "How long does it take to close on a home in Maricopa County?",
    a: "With Mortgage Brothers, most purchases close in 21 to 30 days. Having your documents ready and getting preapproved early are the two biggest factors in a fast closing. Call us to get started and we will keep things moving from day one."
  }
];

const testimonials = [
  {
    name: "Denise Roeder",
    quote:
      "This is my 8th home purchase and mortgage. Working with Eddie has been by far, the most simple, straight forward experience I have ever had obtaining a mortgage.",
    attribution: "Denise Roeder, Chandler, Arizona",
  },
  {
    name: "Thomas and Carol Milberry",
    quote:
      "Our mortgage service through Eddie Knoell was seamless throughout. It was like having someone watch over the process without us having any concern. All questions were answered promptly and completely, like dealing with a trusted family member.",
    attribution: "Thomas and Carol Milberry, Queen Creek, Arizona",
  },
  {
    name: "Michael and Donna Hawkins",
    quote:
      "Eddie saved us over $500 a month! He explained in great detail the program options, locked us into a great rate, and made it happen for us. We will definitely be referring our family and friends.",
    attribution: "Michael and Donna Hawkins, Glendale, Arizona",
  },
  {
    name: "Anita Sanda",
    quote:
      "Eddie went above the call of duty on 3 separate transactions for us. Each time we challenged him to work under different circumstances and each time he came through and exceeded our expectations!",
    attribution: "Anita Sanda, Surprise, Arizona",
  },
  {
    name: "Eric and Joy Stevens",
    quote:
      "Eddie has been a great help to me. He has refinanced many properties for me and is always very professional. I have recommended him to many people.",
    attribution: "Eric and Joy Stevens, Phoenix, Arizona",
  },
];

const faqJsonLd = buildFaqPageSchema(
  normalizeFaqs(
    countyFaqs.map((faq) => ({ q: faq.q, a: stripMarkdownLinks(faq.a) })),
  ),
);
const reviewsJsonLd = buildReviewsSchema(
  testimonials.map((t) => ({ author: t.name, reviewBody: t.quote })),
);

export default function MaricopaCounty() {
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
        <section className="w-full bg-brand-green-deep text-white py-12 sm:py-14 lg:py-16 text-center relative overflow-hidden">
          {/* Subtle circles background */}
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
              <span className="text-white font-semibold">Maricopa County</span>
            </div>

            {/* Badge */}
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
              MAJOR COUNTIES - MARICOPA
            </p>

            {/* Title */}
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">
              Your trusted Maricopa County mortgage broker.
            </h1>

            {/* Subtitle */}
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">
              We are here to make the home loan process a whole lot easier, with tools and expertise that will help guide you.
            </p>

            {/* CTA Buttons */}
            <HeroCtaButtons className="mb-4" />

            {/* Small note */}
            <p className="text-[#5a6b52] text-[12px] font-medium mt-3">
              3 min - no credit impact
            </p>
          </div>
        </section>


        <section className="w-full py-14 sm:py-16 lg:py-20 bg-white border-t border-[#e8e0d0]/40">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-6">Home Loans in Maricopa County, Arizona</h2>
            <div className="text-brand-text-muted text-[15px] space-y-4">
              <p>We are here to make the home loan process a whole lot easier, with tools and expertise that will help guide you.</p>
              <p>Maricopa County is home to over 4.3 million residents and continues to attract families, retirees, and professionals from across the country. With a diverse mix of urban neighborhoods, master-planned communities, and desert retreats, the county offers something for every type of buyer. The <Link href="/" className="text-[#3fb364] font-medium hover:underline">Mortgage Brothers</Link> have served Maricopa County homeowners for over 25 years — helping clients navigate everything from first-time purchases in Mesa to luxury buys in Paradise Valley.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>4.3 Million Residents:</strong> Maricopa County is Arizona&apos;s most populous county and one of the fastest-growing in the nation.</li>
                <li><strong>27 Cities and Towns:</strong> From Phoenix to Queen Creek, Maricopa County offers a diverse range of communities for every lifestyle and budget.</li>
                <li><strong>$832,750 Loan Limit:</strong> The 2026 conforming loan limit gives Maricopa County buyers significant purchasing power for conventional financing.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cities Grid Section */}
        <section id="areas" className="w-full py-14 sm:py-16 lg:py-20 bg-white scroll-mt-[72px]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            {/* Section Header */}
            <div className="text-center mb-10">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">
                Maricopa County Mortgage Services
              </h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px]">
                Select your city below for local mortgage expertise and rates
              </p>
            </div>

            {/* 3-Column responsive grid */}
            <CountyCityCards countySlug="maricopa-county-az" cities={cities} />
          </div>
        </section>


        <CTA
          eyebrow=""
          title="Ready to Start Your Maricopa County Home Journey?"
          description="Let's find the perfect mortgage solution for your Maricopa County home."
          primaryLabel="View All Maricopa County Areas"
          primaryHref="#areas"
          secondaryLabel="Call Us Now"
        />

        <CountyTestimonials
          title="What Maricopa County Clients Say About Us"
          testimonials={testimonials}
        />

        <section className="w-full py-14 sm:py-16 lg:py-20 bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto px-6">
            <FaqAccordion
              title="Frequently Asked Questions"
              items={countyFaqs.map((faq) => ({
                q: faq.q,
                a: renderGetInTouchText(faq.a),
              }))}
            />
          </div>
        </section>

        <GetInTouch
          theme="light"
          title="Get Started with Your Arizona Home Loan Today"
          showDivider
          paragraphs={[
            "Take the first step towards your dream home with AZ Mortgage Brothers. Our team of experienced mortgage professionals is ready to guide you through the home loan process, answer your questions, and help you secure the best possible terms for your unique situation.",
            "Whether you prefer to chat over the phone, send us an email, or meet in person, we're here to assist you. Fill out the form below, and one of our mortgage experts will get back to you promptly. Alternatively, feel free to reach out to us directly using the contact information provided.",
            "Don't let this opportunity for homeownership pass you by. Contact us today and let's make your Arizona home dreams a reality with a mortgage tailored to your needs.",
          ]}
          showPreApproveCta
          ctaLabel="Start my preapproval"
        />
      </main>

      {/* <PreApprovedForm /> */}
      <Footer />
    </div>
  );
}