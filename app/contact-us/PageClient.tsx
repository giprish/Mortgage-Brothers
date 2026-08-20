"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { COMPANY } from "@/lib/company";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1662.6593094747534!2d-112.04951486150385!3d33.545097128830214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b72a8a56e5b8f%3A0x32ff520eb58d08d6!2sMortgage%20Brothers!5e0!3m2!1sen!2sin!4v1757943685115!5m2!1sen!2sin";

const loanSolutions = [
  { label: "Conventional Home Loans", href: "/conventional-home-loans-arizona/" },
  { label: "Conventional vs FHA Loans", href: "/conventional-vs-fha-loans-arizona/" },
  { label: "FHA Home Loans", href: "/fha-home-loans-arizona/" },
  { label: "FHA Streamline Refinance", href: "/fha-streamline-refinance-arizona/" },
  { label: "First Time Home Buyer", href: "/first-time-home-buyer-arizona-guide/" },
  { label: "Reverse Mortgage", href: "/reverse-mortgage-arizona/" },
  { label: "Reverse Mortgage for a Home Purchase", href: "/reverse-mortgage-home-purchase-arizona/" },
  { label: "Refinancing", href: "/refinancing-arizona/" },
  { label: "Jumbo Loans", href: "/jumbo-loans-arizona/" },
  { label: "VA Loans", href: "/va-loans-arizona/" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/azmortgagebrothers/",
    icon: (
      <span className="font-serif font-bold text-[18px]" aria-hidden>
        f
      </span>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/azmortgagebros",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/azmortgagebrothers/",
    icon: (
      <span className="font-sans font-bold text-[14px]" aria-hidden>
        in
      </span>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@TheMortgageBrothersTeam/",
    icon: (
      <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

/** Click-to-load map — avoids Google Maps JS until user intent. */
function OfficeMapEmbed() {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        src={MAP_EMBED_SRC}
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="Mortgage Brothers Office Location"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      className="w-full h-full flex flex-col items-center justify-center gap-3 bg-[#e8efe9] hover:bg-[#dfe8e0] transition-colors cursor-pointer text-[#08271B] px-6"
      aria-label="Load interactive map of Mortgage Brothers office"
    >
      <span className="w-12 h-12 rounded-full bg-[#2d8545] text-white flex items-center justify-center shadow-md" aria-hidden>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </span>
      <span className="text-[15px] font-semibold">View office map</span>
      <span className="text-[13px] text-[#4e5b4e]">1599 E Orangewood Ave, Phoenix, AZ</span>
    </button>
  );
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow">
        <div className="h-[64px] sm:h-[72px] bg-[#08271B]" aria-hidden />
        <section className="w-full bg-brand-green-deep text-white py-10 sm:py-12 lg:py-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
            <div className="absolute -bottom-36 -left-36 w-[min(360px,90vw)] h-[360px] rounded-full border border-white/5 opacity-40" />
            <div className="absolute -top-36 -right-36 w-[min(400px,90vw)] h-[400px] rounded-full border border-white/5 opacity-40" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-4 sm:mb-5 max-w-3xl mx-auto">
              Your Trusted Phoenix Arizona Mortgage Resource
            </h1>
            <p className="text-brand-text-light text-[15px] lg:text-[16px] leading-[1.7] max-w-2xl mx-auto mb-8">
              We&apos;re here to help and we&apos;ll get in touch with you shortly
            </p>
            <button
              type="button"
              data-contact="true"
              className="w-full sm:w-auto btn-primary hover:shadow-brand-green-accent/20 group text-[15px] font-bold px-7 py-3.5 cursor-pointer"
            >
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-0.5 transition-transform duration-200"
                aria-hidden
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </section>

        <section className="w-full bg-white loan-section">
          <div className="max-w-5xl mx-auto text-center">
            <div className="loan-section-heading">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[34px] font-normal leading-tight mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Get in Touch with Mortgage Brothers LLC
              </h2>
            </div>

            <p className="text-[#4e5b4e] text-[15px] lg:text-[16px] leading-[1.7] max-w-3xl mx-auto mb-8">
              Whether you&apos;re buying your first home, refinancing, or exploring a reverse
              mortgage, our team is here to help. We&apos;re licensed Arizona mortgage brokers
              serving Phoenix, Scottsdale, and communities across Maricopa County. Reach out —
              we&apos;ll get back to you the same business day.
            </p>

            <p className="text-[#08271B] text-[14px] lg:text-[15px] font-bold mb-10">
              {COMPANY.legalName} | {COMPANY.azLicenseDisplay} & {COMPANY.nmlsDisplay}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 text-left">
              <div className="bg-[#fcf9f3] rounded-2xl border border-[#e8e0d0]/60 p-5">
                <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                  Contact
                </p>
                <button
                  type="button"
                  data-contact="true"
                  className="text-[#08271B] text-[15px] font-semibold hover:text-[#3fb364] transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </div>

              <div className="bg-[#fcf9f3] rounded-2xl border border-[#e8e0d0]/60 p-5">
                <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                  Address
                </p>
                <a
                  href={COMPANY.addressMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#08271B] text-[14px] font-semibold leading-relaxed hover:text-[#3fb364] transition-colors"
                >
                  1599 East Orangewood Ave Suite 200
                  <br />
                  Phoenix, AZ 85020
                </a>
              </div>

              <div className="bg-[#fcf9f3] rounded-2xl border border-[#e8e0d0]/60 p-5">
                <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                  Office Hours
                </p>
                <p className="text-[#4e5b4e] text-[14px] leading-relaxed">
                  Mon – Fri: 8:00 AM – 5:30 PM
                  <br />
                  Sat – Sun: Closed
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 mb-10">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#3fb364] hover:bg-[#349b55] text-white flex items-center justify-center transition-colors"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <div className="w-full rounded-2xl overflow-hidden border border-[#e8e0d0]/60 shadow-sm mb-10 h-[320px] sm:h-[380px] lg:h-[420px]">
              <OfficeMapEmbed />
            </div>

            <div className="text-center">
              <button
                type="button"
                data-contact="true"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-all shadow-md cursor-pointer"
              >
                Contact Us →
              </button>
            </div>
          </div>
        </section>

        <section className="loan-section w-full bg-[#f5f0e8] border-t border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-[#08271B] text-[28px] lg:text-[34px] font-normal loan-section-heading"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Explore Our Mortgage Solutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {loanSolutions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 bg-white border border-[#e8e0d0]/70 rounded-xl px-5 py-4 text-[#08271B] font-semibold text-[14.5px] hover:border-[#3fb364]/50 hover:text-[#3fb364] transition-all"
                >
                  <CheckIcon />
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
