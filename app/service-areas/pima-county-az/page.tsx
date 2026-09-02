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
import CountyMortgagePrograms from "../../component/CountyMortgagePrograms";
import CountyTestimonials from "../../component/CountyTestimonials";
import GetInTouch from "../../component/GetInTouch";
import CTA from "../../component/CTA";

/** Strip `[label](href)` for FAQ JSON-LD plain text. */
function stripMarkdownLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

export const metadata: Metadata = getSeoMetadata("/service-areas/pima-county-az/");

const cities = [
  {
    name: "Tucson",
    description: "Tucson is the largest city in Pima County and one of Arizona's most vibrant real estate markets. Our mortgage brokers help Tucson buyers secure financing for primary homes, and investment properties."
  },
  {
    name: "Oro Valley",
    description: "Oro Valley offers beautiful desert landscapes, scenic mountain views, and family-friendly neighborhoods. We assist buyers with mortgage solutions tailored to homes in this growing community."
  },
  {
    name: "Marana",
    description: "Fast-growing community northwest of Tucson with new construction developments and family-friendly master-planned neighborhoods."
  },
  {
    name: "Sahuarita",
    description: "Sahuarita is a rapidly growing residential community with modern neighborhoods and master-planned developments. Our mortgage specialists help buyers explore financing options suited for new homes."
  },
  {
    name: "Vail",
    description: "Vail provides peaceful suburban living with excellent schools and expanding residential areas. We help buyers secure mortgage loans designed for homes in this popular area."
  },
  {
    name: "Green Valley",
    description: "Active-adult retirement haven south of Tucson with specialized mortgage and refinancing solutions for 55+ buyers."
  },
  {
    name: "Catalina Foothills",
    description: "Prestigious luxury market nestled against the Santa Catalina Mountains with jumbo home loan expertise."
  },
  {
    name: "South Tucson",
    description: "Close-knit community offering affordable home buying and refinancing options with quick access to central Tucson."
  }
];

const countyFaqs = [
  {
    q: "What home loan programs are available to Pima County homebuyers?",
    a: "Pima County buyers have access to the full range of mortgage programs including Conventional, FHA, VA (for eligible veterans), Jumbo, [FHA Streamline Refinance](/fha-streamline-refinance-arizona/), First-Time Homebuyer programs, Reverse Mortgage (for homeowners 62+), and Refinancing. Our team can walk you through all your options at no cost.",
  },
  {
    q: "What is the conforming loan limit in Pima County for 2026?",
    a: "The 2026 conforming loan limit for Pima County is $832,750 – the same baseline limit that applies across all Arizona counties. If your loan exceeds this amount, you will need a jumbo loan.",
  },
  {
    q: "What is the FHA loan limit in Pima County for 2026?",
    a: "The 2026 FHA loan limit for Pima County is $541,287. This means you can finance a home up to that purchase price using an [FHA loan](/fha-home-loans-arizona/) with as little as 3.5% down (with a 580+ credit score).",
  },
  {
    q: "Why are people buying homes in Pima County?",
    a: "Pima County offers more affordable home prices than the Phoenix metro, a vibrant arts and food scene in Tucson, and a strong job market anchored by the University of Arizona and Davis-Monthan AFB. Suburban communities like Oro Valley, Sahuarita, and Vail attract families looking for newer homes and highly rated schools.",
  },
  {
    q: "How much do I need for a down payment on a Pima County home?",
    a: "FHA loans require as little as 3.5% down. [Conventional loans](/conventional-home-loans-arizona/) can go as low as 3%-5% for qualified buyers. VA loans require zero down payment for eligible veterans. We also work with down payment assistance programs. Contact us to find out which programs you qualify for.",
  },
  {
    q: "How long does it take to close on a home in Pima County?",
    a: "Most purchase transactions close in 21 to 30 days when all documentation is submitted promptly. Our team is known for fast, smooth closings with no surprises at the closing table.",
  },
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

const faqJsonLd = buildFaqPageSchema(
  normalizeFaqs(
    countyFaqs.map((faq) => ({ q: faq.q, a: stripMarkdownLinks(faq.a) })),
  ),
);
const reviewsJsonLd = buildReviewsSchema(
  testimonials.map((t) => ({ author: t.name, reviewBody: t.quote })),
);

export default function PimaCountyPage() {
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
              <span className="text-white font-semibold">Pima County</span>
            </div>

            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
              MAJOR COUNTIES - PIMA
            </p>

            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">
              Your trusted Pima County mortgage broker.
            </h1>

            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">
              Mortgage Brothers provides reliable mortgage solutions for homebuyers and homeowners throughout Pima County, Arizona. Our experienced mortgage brokers help clients secure competitive mortgage.
            </p>

            <HeroCtaButtons className="mb-4" />

            <p className="text-[#5a6b52] text-[12px] font-medium">
              3 min - no credit impact
            </p>
          </div>
        </section>


        <section className="w-full py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-6">Home Loans in Pima County, Arizona</h2>
            <div className="text-brand-text-muted text-[15px] space-y-4">
              <p>Tucson homebuyers trust Mortgage Brothers for competitive rates, fast closings, and personalized service. As an experienced Tucson mortgage broker, we have been helping Pima County families buy and refinance homes for over 25 years.</p>
              <p>Pima County is home to Tucson, Arizona&apos;s second-largest city and a major hub for education, healthcare, and military activity. With the University of Arizona, Davis-Monthan Air Force Base, and a growing tech and healthcare sector, Pima County attracts a diverse mix of buyers including first-time homeowners, military families, university staff, and retirees drawn by the year-round sunshine and lower cost of living compared to Phoenix.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Major Cities:</strong> Tucson, Oro Valley, Sahuarita, Vail, Marana, South Tucson</li>
                <li><strong>2026 Conforming Loan Limit:</strong> $832,750</li>
                <li><strong>2026 FHA Loan Limit:</strong> $541,287</li>
                <li><strong>Popular Communities:</strong> Tanque Verde, Flowing Wells, Drexel Heights, Three Points, Picture Rocks, Rincon Valley, Arivaca</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cities Grid Section */}
        <section id="areas" className="w-full py-16 lg:py-24 bg-white scroll-mt-[72px]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">
                Pima County Arizona Mortgage Broker Serving All Major Cities
              </h2>
              <div className="text-brand-text-muted text-[15px] lg:text-[16px] max-w-3xl mx-auto space-y-4">
                <p>Our Pima County mortgage specialists assist homebuyers and homeowners throughout Southern Arizona with dependable mortgage services. Whether you&apos;re purchasing a primary residence, investing in property, or refinancing your current mortgage, we help you compare lenders and choose the right loan program.</p>
                <p>With access to a wide network of lending partners, our team helps clients secure competitive mortgage rates while simplifying the entire home financing process from application to closing.</p>
              </div>
            </div>

            <CountyCityCards countySlug="pima-county-az" cities={cities} />
          </div>
        </section>

        <CTA
          eyebrow=""
          title="Ready to Start Your Home Mortgage Journey in Pima County?"
          description="Our Pima County mortgage experts are here to guide you through every step of the home loan process. From Tucson to Oro Valley and surrounding communities, we help buyers and homeowners secure the right mortgage solutions with confidence."
          primaryLabel="View All Pima County Areas"
          primaryHref="#areas"
          secondaryLabel="Call Us Now"
        />

        <CountyMortgagePrograms countyName="Pima County" fhaLimit="$541,287" />

        <CountyTestimonials testimonials={testimonials} />

        <section className="w-full py-16 bg-[#fcf9f3]">
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
            "Choosing the right mortgage is an important financial decision. Our Pima County mortgage team takes a personalized approach by reviewing your financial profile, credit history, and long-term homeownership goals before recommending the best loan options.",
            "With access to multiple lenders and advanced loan comparison tools, we help clients secure competitive mortgage solutions while keeping the process smooth and transparent.",
          ]}
          showPreApproveCta
          ctaLabel="Start my preapproval"
        />

      </main>

      <Footer />
    </div>
  );
}