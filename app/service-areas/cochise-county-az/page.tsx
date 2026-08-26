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

export const metadata: Metadata = getSeoMetadata("/service-areas/cochise-county-az/");

const cities = [
  { name: "Sierra Vista", description: "Cochise County's commercial center and home to Fort Huachuca, offering top VA home loan choices." },
  { name: "Douglas", description: "Border community with rich history, international commerce, and affordable home buyer options." },
  { name: "Bisbee", description: "As Cochise County's seat, Bisbee is famed for Victorian architecture, arts scene, and hillside homes." },
  { name: "Benson", description: "Gateway to Kartchner Caverns with low down payment home options along the San Pedro River." },
  { name: "Willcox", description: "Heart of Arizona wine country and agriculture offering USDA rural loans and quiet country homes." },
  { name: "Tombstone", description: "Historic Old West town providing unique small-town property financing." },
  { name: "Huachuca City", description: "Neighboring Sierra Vista and Fort Huachuca with accessible military and civilian home financing." }
];

const countyFaqs = [
  {
    q: "What home loan programs are available to Cochise County homebuyers?",
    a: "Cochise County buyers have access to the full range of mortgage programs including Conventional, FHA, VA (for eligible veterans), Jumbo, FHA Streamline Refinance, First-Time Homebuyer programs, Reverse Mortgage (for homeowners 62+), and Refinancing. Our team can walk you through all your options at no cost."
  },
  {
    q: "What is the conforming loan limit in Cochise County for 2026?",
    a: "The 2026 conforming loan limit for Cochise County is $832,750 – the same baseline limit that applies across all Arizona counties. If your loan exceeds this amount, you will need a jumbo loan."
  },
  {
    q: "What is the FHA loan limit in Cochise County for 2026?",
    a: "The 2026 FHA loan limit for Cochise County is $541,287. This means you can finance a home up to that purchase price using an FHA loan with as little as 3.5% down (with a 580+ credit score)."
  },
  {
    q: "Why are people buying homes in Cochise County?",
    a: "Cochise County attracts military families stationed at Fort Huachuca in Sierra Vista, retirees drawn by the mild climate and low home prices, and buyers seeking the charm of historic towns like Bisbee and Tombstone. The county offers some of the most affordable home prices in Arizona with a strong sense of community and history."
  },
  {
    q: "How much do I need for a down payment on a Cochise County home?",
    a: "FHA loans require as little as 3.5% down. Conventional loans can go as low as 3%-5% for qualified buyers. VA loans require zero down payment for eligible veterans. We also work with down payment assistance programs. Contact us to find out which programs you qualify for."
  },
  {
    q: "How long does it take to close on a home in Cochise County?",
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

export default function CochiseCountyPage() {
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
              <span className="text-white font-semibold">Cochise County</span>
            </div>
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">SOUTHERN ARIZONA - COCHISE</p>
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">Your trusted Cochise County mortgage broker.</h1>
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">From Sierra Vista to Bisbee — 7 communities, one team that knows every one of them.</p>
            <HeroCtaButtons className="mb-4" />
          </div>
        </section>

        <section className="w-full py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-6">Home Loans in Cochise County, Arizona</h2>
            <div className="text-brand-text-muted text-[15px] space-y-4">
              <p>Sierra Vista families and Fort Huachuca military members have trusted Mortgage Brothers as their Sierra Vista mortgage broker for over 25 years. We serve buyers across all of Cochise County.</p>
              <p>Cochise County sits in the southeast corner of Arizona along the Mexican border, home to a rich blend of history, culture, and natural beauty. From the military community of Sierra Vista and Fort Huachuca to the Victorian-era mining town of Bisbee and the legendary Tombstone, Cochise County offers a unique mix of affordable real estate, wide-open landscapes, and small-town community.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Major Cities:</strong> Sierra Vista, Bisbee, Tombstone, Douglas, Willcox, Benson</li>
                <li><strong>2026 Conforming Loan Limit:</strong> $832,750</li>
                <li><strong>2026 FHA Loan Limit:</strong> $541,287</li>
                <li><strong>Popular Communities:</strong> Palominas, Sunsites, Pearce, Elfrida, Naco, Portal, McNeal, Pirtleville</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">Cochise County mortgage services</h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px]">Select your city below for local mortgage expertise.</p>
            </div>
            <CountyCityCards countySlug="cochise-county-az" cities={cities} />
          </div>
        </section>


        <CountyMortgagePrograms countyName="Cochise County" fhaLimit="$541,287" />

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
            "Choosing the right mortgage is an important financial decision. Our Cochise County mortgage team takes a personalized approach by reviewing your financial profile, credit history, and long-term homeownership goals before recommending the best loan options.",
            "With access to multiple lenders and advanced loan comparison tools, we help clients secure competitive mortgage solutions while keeping the process smooth and transparent.",
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}