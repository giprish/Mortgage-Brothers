"use client";

import React, { useState, useEffect } from "react";

const PreApprovedForm = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes("jotform.com")) return;

      if (
        event.data &&
        (event.data.action === "submission-completed" ||
          event.data === "submission-completed" ||
          (typeof event.data === "string" && event.data.includes("submission-completed")))
      ) {
        window.location.href = "/";
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section
      id="get-pre-approved"
      className="w-full bg-[#fcf9f3] py-16 lg:py-24 border-t border-[#e8e0d0]/40 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#b89a5a] text-[12px] font-semibold tracking-[0.14em] uppercase mb-3">
            SECURE APPLICATION
          </p>
          <h2
            className="text-[#08271B] text-[32px] lg:text-[42px] font-normal leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Start Your Pre-Approval
          </h2>
          <p className="text-[#4e5b4e] text-[15px] lg:text-[16px] leading-[1.7] max-w-xl mx-auto">
            Fill out our quick and secure form below to begin. It takes about three minutes and there is no impact to your credit.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-[#e8e0d0]/50 relative min-h-[600px] md:min-h-[700px]">
          {isLoading && (
            <div className="absolute inset-0 bg-white flex flex-col items-center justify-center z-10 p-6">
              {/* Spinner */}
              <div className="w-12 h-12 border-4 border-[#3fb364]/20 border-t-[#3fb364] rounded-full animate-spin mb-4"></div>
              <p className="text-[#4e5b4e] text-[15px] font-medium animate-pulse">
                Loading secure application form...
              </p>
            </div>
          )}

          <iframe
            id="JotFormIFrame-250065764860157"
            title="Arizona Mortgage Pre-Approval Form"
            src="https://form.jotform.com/250065764860157"
            frameBorder="0"
            scrolling="yes"
            className="w-full min-h-[650px] md:min-h-[750px] border-none"
            onLoad={() => setIsLoading(false)}
            allow="geolocation; microphone; camera; fullscreen"
          />
        </div>
      </div>
    </section>
  );
};

export default PreApprovedForm;
