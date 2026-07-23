"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function ThankYouPage() {
  const [formLoaded, setFormLoaded] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow pt-[100px] lg:pt-[120px] pb-16">
        {/* Header Hero Section */}
        <section className="w-full bg-[#052316] text-white py-14 lg:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-[350px] h-[350px] rounded-full border border-white/5"></div>
            <div className="absolute -bottom-24 -left-24 w-[350px] h-[350px] rounded-full border border-white/5"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <span className="inline-block bg-[#3fb364]/20 text-[#3fb364] border border-[#3fb364]/30 text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full mb-4">
              APPLICATION RECEIVED
            </span>
            <h1 className="text-white text-[32px] sm:text-[42px] lg:text-[50px] font-playfair font-normal leading-tight mb-4">
              Thank You for Reaching Out!
            </h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-relaxed max-w-2xl mx-auto">
              We have received your information. Please complete any remaining details in the client portal form below so our loan officers can shop the best rate for you.
            </p>
          </div>
        </section>

        {/* JotForm Embed Container */}
        <section className="w-full py-12 px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-4 sm:p-8 border border-[#e8e0d0]/70 shadow-xl relative overflow-hidden">
            {/* Loading Indicator */}
            {!formLoaded && (
              <div className="py-16 text-center flex flex-col items-center justify-center gap-3">
                <div className="w-10 h-10 border-4 border-[#3fb364] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-[#556355] text-[14px] font-medium">Loading form...</p>
              </div>
            )}

            {/* Client JotForm iFrame */}
            <iframe
              id="JotFormIFrame-client"
              title="Arizona Mortgage Client Form"
              onLoad={() => setFormLoaded(true)}
              src="https://form.jotform.com/240000000000000"
              className={`w-full min-h-[600px] border-0 transition-opacity duration-300 ${
                formLoaded ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
              style={{ width: "100%", height: "650px", border: "none" }}
              allow="geolocation; microphone; camera"
            />
          </div>
        </section>

        {/* Bottom CTA / Assistance */}
        <section className="w-full max-w-3xl mx-auto px-6 text-center mt-6">
          <div className="bg-[#f5f0e8] border border-[#e8dcc6] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h3 className="text-[#052316] text-[17px] font-bold">Have immediate questions?</h3>
              <p className="text-[#556355] text-[13.5px]">Speak directly with Tom or Eddie Knoell right now.</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="tel:6025352171"
                className="inline-flex items-center gap-2 bg-[#052316] hover:bg-[#0a3522] text-white font-semibold text-[13.5px] px-5 py-2.5 rounded-full transition-colors"
              >
                📞 (602) 535-2171
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-[#3fb364] hover:text-[#2d9e4f] font-bold text-[13.5px] px-3 py-2.5 transition-colors"
              >
                Back to Home →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
