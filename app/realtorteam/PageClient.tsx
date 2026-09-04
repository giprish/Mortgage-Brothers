"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import HeroCtaButtons from "../component/HeroCtaButtons";
import StatsBanner from "../component/StatsBanner";

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

const GALLERY_IMAGES = [
  {
    src: "/realtorteam/arizona-mortgage-office-building.jpg",
    alt: "Arizona Mortgage Brothers’ office building located in a prime area",
  },
  {
    src: "/realtorteam/arizona-mortgage-brokers.jpg",
    alt: "Experienced mortgage brokers in Arizona ready to assist homebuyers",
  },
  {
    src: "/realtorteam/mortgage-brothers-office-design.jpg",
    alt: "Modern office design of the Arizona Mortgage Brothers",
  },
  {
    src: "/realtorteam/mortgage-office-team-arizona.jpg",
    alt: "Professional mortgage team helping Arizona residents with home loans",
  },
];

const STATS = [
  { value: "25 Days", label: "Average Closing Time" },
  { value: "25+ Yrs", label: "Industry Experience" },
  { value: "5.0 ★", label: "Realtor Star Rating" },
  { value: "99%", label: "Communication Satisfaction" },
];

function OfficeGallery() {
  const [index, setIndex] = useState(0);
  const count = GALLERY_IMAGES.length;

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % count);
    }, 7000);
    return () => window.clearInterval(id);
  }, [count]);

  const goPrev = () => setIndex((prev) => (prev - 1 + count) % count);
  const goNext = () => setIndex((prev) => (prev + 1) % count);
  const current = GALLERY_IMAGES[index];

  return (
    <section className="w-full">
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10">
        <div className="relative aspect-[2/1] sm:aspect-[21/9] w-full overflow-hidden rounded-xl">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1152px"
            className="object-cover"
            priority={index === 0}
          />
        </div>
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous"
          className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next"
          className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
        >
          ›
        </button>
        <div className="flex items-center justify-center gap-2 mt-4">
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={img.src}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === index ? "bg-[#3fb364]" : "bg-[#052316]/25 hover:bg-[#052316]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function RealtorTeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero — heights mirror the homepage hero (648 / 519 / 568px) */}
        <section className="relative w-full min-h-[648px] sm:min-h-[519px] lg:min-h-[568px] pt-[65px] sm:pt-[73px] bg-[#052316] text-white text-center overflow-hidden flex items-center">
          {/* Image starts below the fixed navbar so the team's heads keep full headroom.
              Hidden below sm — the narrow crop leaves the team unreadable on phones. */}
          <div className="hidden sm:block absolute inset-x-0 top-[65px] sm:top-[73px] bottom-0 overflow-hidden">
            <Image
              src="/realtorteam/arizona-mortgage-brothers-team.jpg"
              alt="Mortgage Brothers team"
              fill
              quality={100}
              sizes="100vw"
              className="object-cover object-right-top"
            />
          </div>
          <div className="hidden sm:block absolute inset-0 bg-black/40" aria-hidden />
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-14">
            <h1 className="text-white text-[36px] sm:text-[48px] lg:text-[56px] font-semibold leading-[1.12] mb-4 tracking-tight drop-shadow-sm">
              A Mortgage Partner You Can
              <br />
              Depend On
            </h1>
            <p className="text-white/95 text-[15px] sm:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8 drop-shadow-sm">
              Partner with trusted mortgage experts to deliver exceptional service and grow your business together
            </p>
            <HeroCtaButtons
              primaryLabel="Join Our Partner Network"
              primaryHref="/contact-us/"
              secondaryLabel="Contact Our Partnership Team"
              secondaryHref="/contact-us/"
            />
          </div>
        </section>

        {/* Why Partner */}
        <section className="w-full loan-section bg-white border-b border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">WHY PARTNER</p>
              <h2 className="text-[#052316] text-[30px] sm:text-[36px] lg:text-[40px] font-playfair font-normal leading-tight mb-5">
                Why Partner With Mortgage Brothers LLC?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75] mb-4">
                We&apos;ve built our reputation on creating meaningful partnerships that drive success for everyone involved. Our approach combines industry expertise, personalized service, and innovative mortgage solutions that help your business thrive.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                When you partner with Mortgage Brothers LLC, you&apos;re not just gaining a mortgage resource – you&apos;re joining a team committed to your growth and your clients&apos; satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {WHY_PARTNER.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#faf7f0] border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm hover:border-[#3fb364]/40 hover:shadow-md transition-all flex flex-col items-start text-left"
                >
                  <h3 className="text-[#052316] text-[18px] font-bold mb-2.5">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-[1.65]">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="loan-btn-wrap">
              <a
                href="/contact-us/"
                className="inline-flex items-center gap-2 bg-[#052316] hover:bg-[#0a3d26] text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-all shadow-md"
              >
                Join Our Partner Network →
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <StatsBanner stats={STATS} />

        {/* Video — Commitment To Arizona Real Estate Agents */}
        <section className="w-full loan-section bg-[#fcf9f3] border-b border-[#e8e0d0]/50 !pt-2 sm:!pt-4 lg:!pt-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-lg border border-[#e8e0d0]/60 bg-[#052316]">
              <iframe
                src="https://www.youtube.com/embed/d50xIN-Z-vw?rel=0"
                title="Commitment To Arizona Real Estate Agents"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Specialized audiences */}
        <section className="w-full loan-section bg-[#fcf9f3] border-b border-[#e8e0d0]/50 !pt-8 sm:!pt-10 lg:!pt-12">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">WHO WE SERVE</p>
              <h2 className="text-[#052316] text-[30px] sm:text-[36px] lg:text-[40px] font-playfair font-normal leading-tight mb-5">
                Specialized Solutions for Industry Professionals
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                We offer tailored partnership programs designed to meet the unique needs of different real estate professionals. Our specialized approach ensures you receive the exact support, tools, and resources that matter most to your business segment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {AUDIENCES.map((item) => (
                <div key={item.title} className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm hover:border-[#3fb364]/40 hover:shadow-md transition-all text-left">
                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-[1.65]">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="loan-btn-wrap">
              <a
                href="/contact-us/"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-all shadow-md"
              >
                Contact Our Partnership Team →
              </a>
            </div>
          </div>
        </section>

        {/* Live 4-image office gallery — no colored background */}
        <OfficeGallery />

        {/* Four steps */}
        <section className="w-full loan-section bg-white border-b border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">HOW IT WORKS</p>
              <h2 className="text-[#052316] text-[30px] sm:text-[36px] lg:text-[40px] font-playfair font-normal leading-tight mb-5">
                Four Simple Steps to a Powerful Partnership
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                Becoming an Mortgage Brothers LLC partner is straightforward and designed to get you up and running quickly. Our streamlined onboarding process ensures you&apos;ll have all the resources you need to start referring clients and growing your business right away.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {STEPS.map((item) => (
                <div key={item.step} className="relative bg-[#faf7f0] border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 text-left">
                  <div className="text-[#3fb364] text-[28px] font-bold mb-3">{item.step}</div>
                  <h3 className="text-[#052316] text-[17.5px] font-bold mb-2">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-[1.65]">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="loan-btn-wrap">
              <div className="bg-[#052316] rounded-3xl p-6 sm:p-8 lg:p-10 text-center shadow-xl">
                <p className="text-[#c8c8b8] text-[15.5px] lg:text-[16.5px] leading-[1.75] max-w-3xl mx-auto mb-8">
                  Ready to elevate your business? Join hundreds of successful partners who have grown their business with Mortgage Brothers LLC. Our team is ready to answer your questions and help you get started.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="/contact-us/"
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
          </div>
        </section>

        {/* Contact / form */}
        <section id="contact" className="w-full loan-section bg-[#fcf9f3] scroll-mt-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">GET IN TOUCH</p>
            <h2 className="text-[#052316] text-[30px] sm:text-[36px] lg:text-[40px] font-playfair font-normal leading-tight mb-5">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75] mb-8">
              Ready to explore how a partnership with Mortgage Brothers LLC can benefit your business? Reach out below, and one of our partnership specialists will get back to you within one business day.
            </p>
            <a
              href="/contact-us/"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-all shadow-md"
            >
              Contact Us →
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
