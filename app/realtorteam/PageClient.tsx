"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import LoanProgramHero from "../component/LoanProgramHero";
import StatsBanner from "../component/StatsBanner";

const CONTACT_JOTFORM_SRC = "https://form.jotform.com/jsform/250026749097159";

function ContactJotformEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = CONTACT_JOTFORM_SRC;
    script.async = true;
    script.defer = true;
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[520px]"
      aria-label="Contact form"
      role="form"
    />
  );
}

const WHY_PARTNER = [
  {
    title: "Fast Loan Closings",
    body: "Our streamlined process ensures quick approvals and on-time closings, helping you maintain client satisfaction and close more deals efficiently.",
  },
  {
    title: "Dedicated Support Team",
    body: "Each partner receives a personal mortgage advisor who understands your business needs and provides responsive, expert assistance.",
  },
  {
    title: "Competitive Loan Programs",
    body: "Access a comprehensive suite of mortgage products with competitive rates designed to meet the diverse needs of your clients.",
  },
  {
    title: "Marketing Resources",
    body: "Benefit from co-branded materials, educational content, and digital tools that help you attract and convert more qualified leads.",
  },
  {
    title: "Technology Integration",
    body: "Our user-friendly platforms connect seamlessly with your systems, creating a smooth workflow and enhancing communication throughout transactions.",
  },
  {
    title: "Ongoing Education",
    body: "Stay ahead with regular updates on market trends, loan program changes, and specialized training to strengthen your client relationships.",
  },
];

const AUDIENCES = [
  {
    title: "Real Estate Agents",
    body: "Enhance your client service with rapid pre-approvals, competitive rates, and on-time closings. Our dedicated agent portal provides real-time loan status updates and marketing materials to help you win more listings.",
  },
  {
    title: "Home Builders",
    body: "Simplify new construction financing with specialized loan programs, extended rate locks, and a dedicated construction lending team. We understand the unique timeline challenges builders face and provide solutions that keep projects moving.",
  },
  {
    title: "Title & Escrow Companies",
    body: "Experience seamless closings with our streamlined documentation process and clear communication channels. Our integration capabilities and closing specialists ensure smooth transactions from contract to completion.",
  },
  {
    title: "Financial Advisors",
    body: "Complement your wealth management services with expert mortgage solutions. Our collaborative approach helps your clients optimize their real estate investments while maintaining their broader financial strategy.",
  },
  {
    title: "Attorneys",
    body: "Partner with mortgage professionals who understand legal complexities in real estate transactions. We provide clear documentation, regulatory compliance expertise, and responsive communication throughout the lending process.",
  },
  {
    title: "Property Managers",
    body: "Offer your property owners and potential buyers valuable mortgage resources. Our investor-friendly loan programs and refinancing options help property managers add value beyond traditional management services.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Initial Consultation",
    body: "Schedule a brief call with our partnership team to discuss your business needs, client base, and how we can best support your growth objectives.",
  },
  {
    step: "02",
    title: "Partnership Agreement",
    body: "Complete our simple partnership registration form and receive your personalized welcome kit with all necessary materials and account credentials.",
  },
  {
    step: "03",
    title: "System Integration",
    body: "Our tech team will help set up any necessary connections between our platforms and your existing systems to ensure seamless communication and referrals.",
  },
  {
    step: "04",
    title: "Launch & Support",
    body: "Begin referring clients immediately with full support from your dedicated mortgage advisor who will provide ongoing training and assistance.",
  },
];

const STATS = [
  { value: "25 Days", label: "Average Closing Time" },
  { value: "22+ Yrs", label: "Industry Experience" },
  { value: "4.9 ★", label: "Realtor Star Rating" },
  { value: "99%", label: "Communication Satisfaction" },
];

const HIGHLIGHTS = [
  "Grow Your Business with Premier Mortgage Partner",
  "Strategic Partnerships for Real Estate Success",
  "Trusted Mortgage Solutions for Industry Professionals",
];

export default function RealtorTeamPage() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        <LoanProgramHero
          title="We Want to be Your Mortgage Team"
          subtitle="Our #1 Priority is giving Realtors® and their buyer clients exceptional service on “Purchase” transactions."
          ctaLabel="Start My Pre-Approval"
          ctaHref="/#get-pre-approved"
          secondaryCtaLabel="Talk to a Broker"
          secondaryCtaHref="tel:+16025352171"
          note=""
        />

        {/* Highlight strip */}
        <section className="w-full bg-[#052316] py-7 border-b border-white/5">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            {HIGHLIGHTS.map((item) => (
              <div key={item} className="flex items-center justify-center md:justify-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#3fb364] flex-shrink-0" />
                <p className="text-white text-[14px] lg:text-[15px] font-medium leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* We Are Brokers Advocating For You */}
        <section className="w-full py-14 lg:py-20 bg-white border-b border-[#e8e0d0]/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-[#052316] text-[30px] sm:text-[36px] lg:text-[40px] font-playfair font-normal leading-tight mb-5">
              We Are Brokers Advocating For You.
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] lg:text-[16.5px] leading-[1.75] mb-8 max-w-2xl mx-auto">
              Because we are brokers we shop your scenario so banks compete for your business! We have
              access to rates and loan programs other banks can&apos;t offer. We are fast and streamlined
              so you can get on with your life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#get-pre-approved"
                data-preapproval="true"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-all shadow-md"
              >
                Start My Pre-Approval →
              </Link>
              <a
                href="tel:+16025352171"
                className="inline-flex items-center gap-2 bg-[#052316] hover:bg-[#0a3d26] text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-all"
              >
                Talk to a Broker →
              </a>
            </div>
          </div>
        </section>

        {/* We are Here to Simplify the Home Loan Process */}
        <section className="w-full py-14 lg:py-20 bg-[#fcf9f3] border-b border-[#e8e0d0]/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-[#052316] text-[30px] sm:text-[36px] lg:text-[40px] font-playfair font-normal leading-tight mb-5">
              We are Here to Simplify the Home Loan Process.
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] lg:text-[16.5px] leading-[1.75] mb-8 max-w-2xl mx-auto">
              Check out our extensive library of video and content aimed at arming you with the right
              knowledge and the most up-to-date information so that you can start home shopping with
              confidence.
            </p>
            <Link
              href="/loan-programs/"
              className="inline-flex items-center gap-2 bg-[#052316] hover:bg-[#0a3d26] text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-all shadow-md"
            >
              VIEW LOAN PROGRAMS →
            </Link>
          </div>
        </section>

        {/* Why Partner */}
        <section className="w-full py-16 lg:py-24 bg-white border-b border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
              <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">WHY PARTNER</p>
              <h2 className="text-[#052316] text-[30px] sm:text-[36px] lg:text-[40px] font-playfair font-normal leading-tight mb-5">
                Why Partner With AZ Mortgage Brothers?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75] mb-4">
                We&apos;ve built our reputation on creating meaningful partnerships that drive success for everyone involved. Our approach combines industry expertise, personalized service, and innovative mortgage solutions that help your business thrive.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                When you partner with AZ Mortgage Brothers, you&apos;re not just gaining a mortgage resource – you&apos;re joining a team committed to your growth and your clients&apos; satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {WHY_PARTNER.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#faf7f0] border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm hover:border-[#3fb364]/40 hover:shadow-md transition-all flex flex-col items-start text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3fb364]/15 text-[#3fb364] flex items-center justify-center mb-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-[#052316] text-[18px] font-bold mb-2.5">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-[1.65]">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#052316] hover:bg-[#0a3d26] text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-all shadow-md"
              >
                Join Our Partner Network →
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <StatsBanner stats={STATS} />

        {/* Specialized audiences */}
        <section className="w-full py-16 lg:py-24 bg-[#fcf9f3] border-b border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
              <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">WHO WE SERVE</p>
              <h2 className="text-[#052316] text-[30px] sm:text-[36px] lg:text-[40px] font-playfair font-normal leading-tight mb-5">
                Specialized Solutions for Industry Professionals
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                We offer tailored partnership programs designed to meet the unique needs of different real estate professionals. Our specialized approach ensures you receive the exact support, tools, and resources that matter most to your business segment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {AUDIENCES.map((item) => (
                <div key={item.title} className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm hover:border-[#3fb364]/40 hover:shadow-md transition-all text-left">
                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-[1.65]">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-all shadow-md"
              >
                Contact Our Partnership Team →
              </a>
            </div>
          </div>
        </section>

        {/* Four steps */}
        <section className="w-full py-16 lg:py-24 bg-white border-b border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
              <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">HOW IT WORKS</p>
              <h2 className="text-[#052316] text-[30px] sm:text-[36px] lg:text-[40px] font-playfair font-normal leading-tight mb-5">
                Four Simple Steps to a Powerful Partnership
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                Becoming an AZ Mortgage Brothers partner is straightforward and designed to get you up and running quickly. Our streamlined onboarding process ensures you&apos;ll have all the resources you need to start referring clients and growing your business right away.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
              {STEPS.map((item) => (
                <div key={item.step} className="relative bg-[#faf7f0] border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 text-left">
                  <div className="text-[#3fb364] text-[28px] font-bold mb-3">{item.step}</div>
                  <h3 className="text-[#052316] text-[17.5px] font-bold mb-2">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-[1.65]">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#052316] rounded-3xl p-8 lg:p-12 text-center shadow-xl">
              <p className="text-[#c8c8b8] text-[15.5px] lg:text-[16.5px] leading-[1.75] max-w-3xl mx-auto mb-8">
                Ready to elevate your business? Join hundreds of successful partners who have grown their business with AZ Mortgage Brothers. Our team is ready to answer your questions and help you get started.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-all shadow-md"
                >
                  Schedule Your Partnership Consultation →
                </a>
                <a
                  href="tel:+16025352171"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-all border border-white/20"
                >
                  Talk to a Broker →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / form */}
        <section id="contact" className="w-full py-16 lg:py-24 bg-[#fcf9f3] scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
              <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">GET IN TOUCH</p>
              <h2 className="text-[#052316] text-[30px] sm:text-[36px] lg:text-[40px] font-playfair font-normal leading-tight mb-5">
                Let&apos;s Build Something Great Together
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75] mb-8">
                Ready to explore how a partnership with AZ Mortgage Brothers can benefit your business? Reach out below, and one of our partnership specialists will get back to you within one business day.
              </p>
              {!showContactForm && (
                <button
                  type="button"
                  onClick={() => setShowContactForm(true)}
                  className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-all shadow-md cursor-pointer"
                >
                  Contact Us →
                </button>
              )}
            </div>

            {showContactForm && (
              <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-[#e8e0d0]/70 p-7 lg:p-9 shadow-sm scroll-mt-28">
                <h3 className="text-[#052316] text-[22px] font-playfair font-normal mb-6">
                  Contact Us
                </h3>
                <ContactJotformEmbed />
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}