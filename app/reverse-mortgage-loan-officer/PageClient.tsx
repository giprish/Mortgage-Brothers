"use client";

import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import GetInTouch from "../component/GetInTouch";
import CareerApplicationPath from "../component/CareerApplicationPath";
import { CAREER_CONTACT_PARAGRAPHS, CAREER_FORM_CTA } from "@/lib/careerContactCopy";
import { renderGetInTouchText } from "@/lib/renderInlineLinks";

const featureStrip = [
  "Build a Rewarding Mortgage Career with Growth Opportunities",
  "Join Arizona’s Leading Team in Mortgage Lending Success",
  "Competitive Pay, Career Growth, and Impactful Work in Arizona",
];

const jobBlocks = [
  {
    title: "We have Reverse Mortgage Leads",
    text: "Currently our team does not have any Reverse Mortgage loan officer handling our reverse mortgage leads. We are interested in hiring a reverse mortgage specialist who can take our leads and close the loans.",
  },
  {
    title: "Our Company Culture",
    text: "We are not your run of the mill team that has loan officers coming and going with the wind. We are ‘lifers’ who are committed to making a great living for the long haul of our careers. Our excellent reputation with our customers, realtors, and wholesale banks give us so many advantages that other mortgage companies don’t have. Our office is located in Central Phoenix, right at 16th Street and Orangewood.",
  },
  {
    title: "Benefits",
    text: "You’ll have access to all our company benefits, including, medical and dental coverage, and our company 401K plan with a company match.",
  },
  {
    title: "Requirements",
    text: "Seasoned loan officer must have a great reputation, exceptional work ethic, and experience originating reverse mortgage loans.",
  },
];

const whyCards = [
  {
    title: "Career Growth",
    text: "Embark on a dynamic career path with our comprehensive training programs and mentorship opportunities. We provide clear advancement tracks, allowing you to progress from entry-level positions to leadership roles based on your performance and ambition.",
  },
  {
    title: "Supportive Culture",
    text: "Join a collaborative team that values innovation and mutual support. Our open-door policy encourages idea-sharing, while regular team-building events foster strong relationships among colleagues.",
  },
  {
    title: "Competitive Compensation",
    text: "Enjoy a rewarding financial package that recognizes your contributions. We offer competitive base salaries, performance-based bonuses, and a generous commission structure for loan officers, ensuring your hard work directly translates to your earnings.",
  },
  {
    title: "Work-Life Balance",
    text: "Achieve harmony between your professional and personal life with our flexible scheduling options. We understand the importance of family and personal time, offering remote work possibilities and paid time off to help you recharge and stay productive.",
  },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function ReverseMortgageLoanOfficerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />
      <main className="flex-grow">
        <section className="w-full bg-[#08271B] text-white pt-[110px] sm:pt-[130px] pb-12 sm:pb-16 lg:pb-20 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <h1 className="text-white text-[32px] sm:text-[44px] lg:text-[52px] font-bold font-playfair leading-[1.15] mb-4 text-center tracking-tight">
              Reverse Mortgage Loan Officer
            </h1>
            <h2 className="text-[#c8c8b8] text-[16px] sm:text-[19px] lg:text-[22px] font-normal leading-[1.6] mb-8 max-w-2xl text-center">
              Empower Seniors, Transform Lives: Specialize in Reverse Mortgages with Our Expert Team
            </h2>
            <a
              href="#Job-Description"
              className="inline-flex items-center gap-3 bg-[#3fb364] hover:bg-[#349b55] text-white text-[16px] lg:text-[17px] font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              View Job Description
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>
        </section>

        <section className="w-full bg-[#eeeff4] border-b border-[#e0e2e8] py-10 lg:py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureStrip.map((title) => (
              <div key={title} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <CheckIcon />
                </div>
                <h3 className="text-[#333333] text-[16px] font-semibold leading-snug">{title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="Job-Description" className="w-full py-16 lg:py-24 scroll-mt-[90px]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Job Description
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                Our Phoenix Reverse Mortgage Loan officer job opportunity is intended for an experienced
                reverse mortgage loan officer. Experience is required.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
              {jobBlocks.map((block) => (
                <div
                  key={block.title}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm"
                >
                  <h3 className="text-[#08271B] text-[18px] font-bold mb-3 flex items-center gap-2">
                    <CheckIcon />
                    <span>{block.title}</span>
                  </h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed pl-7">{block.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="#career-application-form"
                data-career="true"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Start Your Application
              </a>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#f5f0e8] py-16 lg:py-24 border-y border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Why Work With Us?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                The Mortgage Brothers Team is a leading mortgage lender in Arizona, dedicated to helping
                families achieve their homeownership dreams. Our mission is to simplify the mortgage
                process while providing unparalleled service to our clients and rewarding careers for our
                team members.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {whyCards.map((card) => (
                <div key={card.title} className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-[#08271B] text-[18px] font-bold mb-3 flex items-center gap-2">
                    <CheckIcon />
                    <span>{card.title}</span>
                  </h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed pl-7">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CareerApplicationPath />

        <GetInTouch
          id="contact"
          className="scroll-mt-[90px]"
          theme="light"
          title="Contact Us: Let's Start Your Mortgage Career Journey"
          paragraphs={[...CAREER_CONTACT_PARAGRAPHS]}
          renderParagraph={renderGetInTouchText}
          showDivider
          showPreApproveCta
          ctaHref={CAREER_FORM_CTA.href}
          ctaLabel={CAREER_FORM_CTA.label}
        />
      </main>
      <Footer />
    </div>
  );
}