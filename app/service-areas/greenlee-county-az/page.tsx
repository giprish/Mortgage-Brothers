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

export const metadata: Metadata = getSeoMetadata("/service-areas/greenlee-county-az/");

const cities = [
  { name: "Clifton", description: "As Greenlee County's seat in a dramatic mountain canyon, Clifton offers historic character and affordable home loans." },
  { name: "Duncan", description: "Agricultural community in the Gila River Valley providing quiet rural home buyer options." },
  { name: "Morenci", description: "Famous copper mining community with local housing and home financing solutions." }
];

const countyFaqs = [
  {
    q: "What home loan programs are available to Greenlee County homebuyers?",
    a: "Greenlee County buyers have access to the full range of mortgage programs including Conventional, FHA, VA (for eligible veterans), Jumbo, FHA Streamline Refinance, First-Time Homebuyer programs, Reverse Mortgage (for homeowners 62+), and Refinancing. Our team can walk you through all your options at no cost."
  },
  {
    q: "What is the conforming loan limit in Greenlee County for 2026?",
    a: "The 2026 conforming loan limit for Greenlee County is $832,750 – the same baseline limit that applies across all Arizona counties. If your loan exceeds this amount, you will need a jumbo loan."
  },
  {
    q: "What is the FHA loan limit in Greenlee County for 2026?",
    a: "The 2026 FHA loan limit for Greenlee County is $541,287. This means you can finance a home up to that purchase price using an FHA loan with as little as 3.5% down (with a 580+ credit score)."
  },
  {
    q: "Why are people buying homes in Greenlee County?",
    a: "Greenlee County is ideal for buyers seeking maximum affordability and small-town community. Clifton and Duncan offer some of the lowest home prices in the state. The area attracts mining industry workers, retirees, and buyers priced out of larger markets who value quiet living and wide-open landscapes."
  },
  {
    q: "How much do I need for a down payment on a Greenlee County home?",
    a: "FHA loans require as little as 3.5% down. Conventional loans can go as low as 3%-5% for qualified buyers. VA loans require zero down payment for eligible veterans. We also work with down payment assistance programs. Contact us to find out which programs you qualify for."
  },
  {
    q: "How long does it take to close on a home in Greenlee County?",
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

export default function GreenleeCountyPage() {
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
        <section className="w-full bg-brand-green-deep text-white py-12 sm:py-14 lg:py-16 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 text-[13px] font-medium text-[#c8c8b8] mb-5">
              <Link href="/service-areas/" className="text-[#b8d4b8] hover:text-white transition-colors duration-200">Areas We Serve</Link>
              <span className="text-white/40">&gt;</span>
              <span className="text-white font-semibold">Greenlee County</span>
            </div>
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">SOUTHERN ARIZONA - GREENLEE</p>
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">Your trusted Greenlee County mortgage broker.</h1>
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">From Clifton to Morenci — 3 communities, one team that knows every one of them.</p>
            <HeroCtaButtons className="mb-4" />
          </div>
        </section>

        <section className="w-full py-14 sm:py-16 lg:py-20 bg-white border-t border-[#e8e0d0]/40">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-6">Home Loans in Greenlee County, Arizona</h2>
            <div className="text-brand-text-muted text-[15px] space-y-4">
              <p>Greenlee County is one of Arizona&apos;s most tight-knit communities. When you need a Greenlee County mortgage with straightforward guidance and no runaround, Mortgage Brothers delivers.</p>
              <p>Greenlee County is Arizona&apos;s smallest and least-populated county, nestled in the mountains of eastern Arizona along the New Mexico border. The county is dominated by the massive Morenci copper mine — one of the largest open-pit copper mines in the world — and the charming historic town of Clifton along the San Francisco River. Greenlee offers extremely affordable real estate and a close-knit community feel for buyers who want true small-town Arizona living.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Major Cities:</strong> Clifton, Morenci, Duncan, York</li>
                <li><strong>2026 Conforming Loan Limit:</strong> $832,750</li>
                <li><strong>2026 FHA Loan Limit:</strong> $541,287</li>
                <li><strong>Popular Communities:</strong> York, Metcalf, Franklin, Virden, Sheldon</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full py-14 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-10">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">Greenlee County mortgage services</h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px]">Select your city below for local mortgage expertise.</p>
            </div>
            <CountyCityCards countySlug="greenlee-county-az" cities={cities} />
          </div>
        </section>


        <CountyMortgagePrograms countyName="Greenlee County" fhaLimit="$541,287" />

        <CountyTestimonials testimonials={testimonials} />

        <section className="w-full py-14 sm:py-16 lg:py-20 bg-[#fcf9f3]">
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
            "Choosing the right mortgage is an important financial decision. Our Greenlee County mortgage team takes a personalized approach by reviewing your financial profile, credit history, and long-term homeownership goals before recommending the best loan options.",
            "With access to multiple lenders and advanced loan comparison tools, we help clients secure competitive mortgage solutions while keeping the process smooth and transparent.",
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}