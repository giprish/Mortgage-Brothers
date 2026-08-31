"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import LoanProgramHero from "../component/LoanProgramHero";
import HeroFeatureStrip from "../component/HeroFeatureStrip";
import FaqAccordion from "../component/FaqAccordion";
import GetInTouch from "../component/GetInTouch";
import { faqs } from "./faqs";
import { reviews, midPageCtas } from "./reviews-data";

const steps = [
  {
    title: "Consultation",
    text: "Speak with our mortgage experts to discuss your goals and financial situation. We'll help you find the best loan options tailored to your needs.",
  },
  {
    title: "Pre-Approval",
    text: "Get pre-approved quickly so you can shop for your dream home with confidence. We'll guide you through the paperwork and requirements.",
  },
  {
    title: "Closing",
    text: "Once you've found your home, we'll handle the final steps to ensure a smooth and timely closing. All you need to do is get ready to move in!",
  },
];

const expertCards = [
  {
    title: "Personalized Mortgage Solutions",
    text: "We take the time to understand your unique financial situation and goals, offering tailored loan options that fit your needs perfectly.",
  },
  {
    title: "Fast and Hassle-Free Process",
    text: "Our streamlined approach ensures a quick, stress-free experience, so you can focus on what matters most—finding your dream home.",
  },
  {
    title: "Expert Guidance Every Step of the Way",
    text: "From pre-approval to closing, our experienced team is here to answer your questions and guide you through every stage of the process.",
  },
  {
    title: "Competitive Rates and Programs",
    text: "We work hard to secure the best rates and loan programs available, helping you save money while achieving your homeownership goals.",
  },
  {
    title: "Proven Track Record of Success",
    text: "With hundreds of satisfied clients and glowing reviews, we've built a reputation for delivering results you can count on.",
  },
  {
    title: "Local Expertise You Can Count On",
    text: "As proud members of the Arizona community, we understand the local market and are committed to helping our neighbors succeed.",
  },
];

const loanSolutions = [
  { label: "Conventional Home Loans", href: "/conventional-home-loans-arizona/" },
  { label: "Private Money Lender", href: "/private-money-lender-arizona/" },
  { label: "FHA Home Loans", href: "/fha-home-loans-arizona/" },
  { label: "FHA Streamline Refinance", href: "/fha-streamline-refinance-arizona/" },
  { label: "First Time Home Buyer", href: "/first-time-home-buyer-arizona-guide/" },
  { label: "Reverse Mortgage", href: "/reverse-mortgage-arizona/" },
  { label: "Reverse Mortgage for a Home Purchase", href: "/reverse-mortgage-home-purchase-arizona/" },
  { label: "Refinancing", href: "/refinancing-arizona/" },
  { label: "Jumbo Loans", href: "/jumbo-loans-arizona/" },
  { label: "VA Loans", href: "/va-loans-arizona/" },
];

const Stars = () => (
  <div className="flex gap-0.5 text-[#7a6638] mb-4" aria-hidden>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

function MidPageCta({ text, button, href }: { text: string; button: string; href: string }) {
  return (
    <div className="col-span-full bg-white border border-[#e8e0d0]/70 rounded-2xl p-8 lg:p-10 text-center shadow-sm my-2">
      <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-2xl mx-auto mb-6">{text}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
      >
        {button}
      </Link>
    </div>
  );
}

export default function ClientMortgageReviewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        <LoanProgramHero
          title="Real Stories, Real Results"
          subtitle="See How We've Helped Clients Achieve Their Homeownership Dreams"
        />

        <HeroFeatureStrip
          items={[
            "Personalized mortgage solutions",
            "Fast and hassle-free process",
            "Expert guidance every step of the way",
          ]}
        />

        {/* Intro */}
        <section className="loan-section bg-white">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair leading-tight">
              Trusted by Hundreds of Homeowners Across Arizona
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
              At Mortgage Brothers LLC, we pride ourselves on delivering exceptional service and results for our clients.
            </p>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
              From first-time buyers to seasoned homeowners, we&apos;ve helped hundreds of families achieve their dreams of homeownership with personalized mortgage solutions and expert guidance.
            </p>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
              But don&apos;t just take our word for it—see what our happy clients have to say about their experience working with us!
            </p>
            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all mt-2"
            >
              Schedule Your Free Consultation
            </Link>
          </div>
        </section>

        {/* Reviews grid */}
        <section className="loan-section bg-[#f5f0e8] border-y border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((rev, index) => {
                const cta = midPageCtas.find((c) => c.afterIndex === index);
                return (
                  <React.Fragment key={`${rev.author}-${index}`}>
                    <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                      <Stars />
                      <p className="text-[#3a443a] text-[14px] leading-relaxed flex-1 mb-5">
                        &ldquo;{rev.text}&rdquo;
                      </p>
                      <div>
                        <p className="text-[#052316] text-[14px] font-bold">{rev.author}</p>
                        <p className="text-[#5a6b52] text-[12px] mt-0.5">{rev.location}</p>
                      </div>
                    </div>
                    {cta ? <MidPageCta text={cta.text} button={cta.button} href={cta.href} /> : null}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </section>

        {/* Path to homeownership */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair leading-tight">
                Your Path to Homeownership Made Simple
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                We&apos;ve streamlined the mortgage process to make it easy, fast, and stress-free for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="bg-[#fcf9f3] border border-[#e8e0d0]/70 rounded-2xl p-7 text-center shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-[#e8f5e9] text-[#3fb364] font-bold text-[18px] flex items-center justify-center mx-auto mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-[#052316] text-[18px] font-bold mb-3 font-playfair">{step.title}</h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>

            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed text-center">
              Ready to take the first step? Schedule your free consultation today!
            </p>

            <div className="text-center">
              <Link
                href="#get-pre-approved"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </section>

        {/* Why trust us */}
        <section className="loan-section bg-[#052316] text-white">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-white text-[28px] lg:text-[38px] font-bold font-playfair leading-tight">
                Top Mortgage Experts in Arizona for High Credit Borrowers
              </h2>
              <p className="text-[#c8c8b8] text-[15.5px] leading-relaxed">
                Choosing the right mortgage partner is one of the most important steps in your homeownership journey.
              </p>
              <p className="text-[#c8c8b8] text-[15.5px] leading-relaxed">
                At Mortgage Brothers LLC, we believe that every client deserves more than just a loan—they deserve a trusted partner who truly understands their needs.
              </p>
              <p className="text-[#c8c8b8] text-[15.5px] leading-relaxed">
                From personalized guidance to a streamlined process, we&apos;re here to make your experience smooth, stress-free, and tailored to your goals. Here&apos;s what makes us the team homeowners across Arizona trust.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertCards.map((card) => (
                <div key={card.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-[#3fb364] text-[17px] font-bold mb-2">{card.title}</h3>
                  <p className="text-[#c8c8b8] text-[14px] leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>

            <p className="text-[#c8c8b8] text-[15.5px] leading-relaxed text-center max-w-2xl mx-auto">
              Experience the difference with Mortgage Brothers LLC. Let us help you achieve your homeownership dreams!
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-[#052316] text-[28px] lg:text-[36px] font-bold font-playfair leading-tight">
                Everything You Need to Know About the Mortgage Process
              </h2>
              <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
                We understand that getting a mortgage can feel overwhelming. That&apos;s why we&apos;ve answered some of the most common questions to help you feel confident every step of the way.
              </p>
            </div>

            <FaqAccordion items={[...faqs]} />

            <p className="text-[#4e5b4e] text-[15px] leading-relaxed text-center">
              Still have questions? Our loan experts are here to provide personalized answers and guide you through your financing options.
            </p>

            <div className="text-center">
              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Get Expert Answers Now
              </Link>
            </div>
          </div>
        </section>

        <GetInTouch
          theme="dark"
          title="Let's Make Your Mortgage Process Simple & Stress-Free"
          paragraphs={[
            "At Mortgage Brothers LLC, we're here to help you secure the best mortgage for your financial goals. Whether you're buying a new home, refinancing, or just exploring your options, our experienced team is ready to guide you every step of the way.",
            "Have questions? Need a personalized mortgage consultation? Get in touch with us today!",
          ]}
        />

        {/* Explore solutions */}
        <section className="loan-section bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[#052316] text-[28px] lg:text-[34px] font-bold font-playfair text-center mb-10">
              Explore Our Mortgage Solutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {loanSolutions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-3 bg-[#fcf9f3] border border-[#e8e0d0]/70 rounded-xl px-5 py-4 text-[#052316] font-semibold text-[14.5px] hover:border-[#3fb364] transition-all"
                >
                  <span className="text-[#3fb364] font-bold group-hover:translate-x-0.5 transition-transform">→</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
