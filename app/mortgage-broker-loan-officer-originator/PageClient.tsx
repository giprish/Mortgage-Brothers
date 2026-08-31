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

const responsibilities = [
  "Primary contact between clients and Loan Originators. Responds to borrower’s general questions regarding policy and procedures.",
  "Submit complete loan applications for each customer file",
  "Your responsibility is to make sure that you have completed the upfront due diligence on every loan to assure that the income, assets, fit underwriting guidelines. Our team of processors will take care of the rest.",
  "Run Automated Underwriting and submitting files to processing team.",
  "Updates customers, real estate agents, and title companies on the loans progress",
  "Comply with Company policy and procedures to ensure all files are complete.",
  "Attend branch/team meetings.",
  "Comply with applicable state and federal compliance guidelines",
];

const commitments = [
  "You’ll be treated like family. You will never be a number. Everyone here will help you achieve your production goals, whether it is navigating the loan operating system, wholesale banks, product guidelines, etc.",
  "Our processing is second to none. We built our processing system from the ground up. Our processors are committed to keeping you focused on originating loans and not tracking down documents. Our processing is committed to closing EVERY file on time (or early), and to deliver exceptional communication to the clients, realtors, title companies, etc.",
];

const qualifications = [
  "Self Motivated",
  "Reliable",
  "Trustworthy",
  "Work with High Integrity",
  "Positive Attitude",
  "Responsive",
  "Proficient with computer navigation, browsing, Microsoft Office (especially Word, Excel, Outlook)",
  "Strong organizational skills and attention to detail",
  "Ability to prioritize and meet deadlines under minimal supervision",
  "Strong verbal and written communication skills",
  "Ability to be trained and work under minimal supervision",
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

export default function MortgageBrokerLoanOfficerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="w-full bg-[#08271B] text-white pt-[110px] sm:pt-[130px] pb-12 sm:pb-16 lg:pb-20 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <h1 className="text-white text-[32px] sm:text-[44px] lg:text-[52px] font-bold font-playfair leading-[1.15] mb-4 text-center tracking-tight">
              Mortgage Broker Loan Officer / Originator
            </h1>
            <h2 className="text-[#c8c8b8] text-[16px] sm:text-[19px] lg:text-[22px] font-normal leading-[1.6] mb-8 max-w-2xl text-center">
              Shape Futures, Build Dreams: Become a Key Player in Arizona&apos;s Mortgage Industry
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

        {/* Feature strip */}
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

        {/* Intro */}
        <section className="w-full bg-white py-12 lg:py-14 border-b border-[#e8e0d0]/50">
          <div className="max-w-3xl mx-auto px-6 space-y-5 text-[#4e5b4e] text-[15.5px] leading-[1.8]">
            <p>
              Before you read any further, this is a 100% commissioned position. You must be an
              experienced (2 years minimum) loan originator with your own book of business in Arizona who
              is looking for a very reputable Mortgage Broker to work for. We are licensed only in the
              great state of Arizona.
            </p>
            <p>
              Work alongside experienced mortgage broker loan officers on the Mortgage Brothers team in
              Phoenix, AZ. We have always been a 100% Mortgage Broker company. We are a small (15
              employees) family-owned business. We believe in the Mortgage Broker business model and love
              the flexibility, low interest rates, and low costs that we give to our clients. We are
              ‘lifers’ in this business who are committed to making a great living for the long haul of
              our careers. Our excellent reputation with our customers, realtors, and wholesale banks give
              us so many advantages that other mortgage companies don’t have. Our office is located in
              Central Phoenix, right at 16th Street and Orangewood.
            </p>
          </div>
        </section>

        {/* Job description */}
        <section id="Job-Description" className="w-full py-16 lg:py-24 scroll-mt-[90px]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2
              className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight text-center mb-12"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Job Description
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm">
                <h3 className="text-[#08271B] text-[18px] font-bold mb-4 flex items-center gap-2">
                  <CheckIcon />
                  <span>Responsibilities</span>
                </h3>
                <ul className="space-y-2.5 pl-7">
                  {responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#4e5b4e] text-[14px] leading-relaxed">
                      <span className="text-[#3fb364] mt-1 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm">
                <h3 className="text-[#08271B] text-[18px] font-bold mb-4 flex items-center gap-2">
                  <CheckIcon />
                  <span>Our Commitment to You</span>
                </h3>
                <ul className="space-y-2.5 pl-7">
                  {commitments.map((item) => (
                    <li key={item.slice(0, 40)} className="flex items-start gap-2 text-[#4e5b4e] text-[14px] leading-relaxed">
                      <span className="text-[#3fb364] mt-1 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm">
                <h3 className="text-[#08271B] text-[18px] font-bold mb-4 flex items-center gap-2">
                  <CheckIcon />
                  <span>Qualifications</span>
                </h3>
                <p className="text-[#4e5b4e] text-[14px] leading-relaxed mb-3 pl-7">
                  You will essentially be your own boss, but the expectation is that you will be:
                </p>
                <ul className="space-y-2.5 pl-7">
                  {qualifications.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#4e5b4e] text-[14px] leading-relaxed">
                      <span className="text-[#3fb364] mt-1 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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

        {/* Why work with us */}
        <section className="w-full bg-[#f5f0e8] py-16 lg:py-24 border-y border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Why Work With Us?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75] mb-4">
                The Mortgage Brothers Team is a leading mortgage lender in Arizona, dedicated to helping
                families achieve their homeownership dreams.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                Our mission is to simplify the mortgage process while providing unparalleled service to
                our clients and rewarding careers for our team members.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {whyCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm"
                >
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