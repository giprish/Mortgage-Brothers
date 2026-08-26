"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { LOAN_OFFICERS } from "@/lib/company";

const bioParagraphs = [
  "Thomas Knoell, Jr. is an owner and Vice President of Mortgage Brothers LLC in Phoenix, Arizona. A third-generation Phoenix native, Tom brings deep family roots in the local market and community to every client relationship.",
  "With over 25 years of experience in real estate and finance — including large-scale complex projects — Tom understands the need for both vision and plan execution to deliver the best product and customer service. He works with a high degree of integrity, ethics, and professionalism.",
  "Tom graduated with a Bachelor of Arts Degree from Franciscan University of Steubenville, Ohio and holds an Arizona Mortgage Loan Originator's license from the Department of Financial Institutions. He is a past member of the Phoenix Men's Art Council, Urban Land Institute and NAIOP, and has served on the Board of Directors for Great Hearts Veritas Prep Academy.",
];

export default function ThomasKnoellAuthorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />
      <div className="h-[64px] sm:h-[72px] bg-[#08271B] w-full shrink-0" aria-hidden />

      <main className="flex-grow">
        <section className="w-full bg-white border-b border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-start">
              <div className="mx-auto lg:mx-0 w-full max-w-[280px]">
                <Image
                  src="/home/thomas-knoell.jpg"
                  alt="Thomas Knoell, co-founder of Mortgage Brothers LLC, trusted mortgage professional"
                  width={500}
                  height={500}
                  loading="lazy"
                  sizes="280px"
                  className="w-full h-auto rounded-2xl shadow-md object-cover bg-[#2a2a2a]"
                />
              </div>

              <div>
                <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase mb-3">
                  Team
                </p>
                <h1
                  className="text-[#08271B] text-[36px] sm:text-[42px] lg:text-[48px] font-normal leading-tight mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Thomas Knoell
                </h1>
                <p className="text-[#4e5b4e] text-[15px] mb-6">
                  {LOAN_OFFICERS.thomas.title} · {LOAN_OFFICERS.thomas.nmlsDisplay} ·{" "}
                  {LOAN_OFFICERS.thomas.azLicenseDisplay}
                </p>

                <div className="space-y-5 text-[#3a4a3a] text-[16px] leading-[1.8]">
                  {bioParagraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="#get-pre-approved"
                    className="inline-flex items-center justify-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                  >
                    Get a Free Mortgage Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-14 lg:py-16 px-6 lg:px-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2
              className="text-[#052316] text-[28px] lg:text-[34px] font-normal mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Learn more about our team
            </h2>
            <p className="text-[#4e5b4e] text-[15px] mb-8 max-w-xl mx-auto">
              Meet the full Mortgage Brothers team and explore Arizona mortgage resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/about-us/"
                className="inline-flex items-center justify-center gap-2 bg-[#2d8545] hover:bg-[#246d39] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                About Us
              </Link>
              <Link
                href="/author/eddie-knoell/"
                className="inline-flex items-center justify-center gap-2 border border-[#e8e0d0] bg-white hover:border-[#3fb364] text-[#052316] text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Meet Eddie Knoell
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
