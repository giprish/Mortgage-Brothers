"use client";

import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const PREAPPROVE_SRC =
  "https://smart1003.preapprovemeapp.com/Start?CompanyID=1345&OfficerID=299300";

export default function LoanApplicationsPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-[#e8eaed]">
      <Navbar />

      <main className="flex-grow pt-[64px] sm:pt-[72px]">
        <section className="w-full min-h-[calc(100vh-72px)] bg-[#e8eaed]">
          <div className="max-w-4xl mx-auto px-6 pt-8 pb-6 text-center">
            <h1 className="text-[#08271B] text-[26px] sm:text-[32px] font-bold mb-2">
              Secure Online Arizona Loan Application
            </h1>
            <h2 className="text-[#08271B] text-[20px] sm:text-[24px] font-semibold mb-4">
              Arizona Home Loan and Mortgage Application
            </h2>
            <p className="text-[#4e5b4e] text-[14.5px] leading-[1.75] mb-4">
              To apply for a mortgage with us please click the button above. This will take you to our
              secure online loan application. Prior to filling out this form, please take a moment to
              review our terms and conditions as well as our privacy policy. You will be asked to create
              a login at the beginning of the application so you can come back and finish it later if
              you don&apos;t have all of the documentation in front of you. Please note this application
              is SSL secured, and as an extra precaution all of your information will be deleted from
              our servers after seven (7) days. So please make sure you finish and submit the application
              prior to the seven (7) day mark or you may have to start over.
            </p>
            <div className="text-[#4e5b4e] text-[13px] leading-relaxed mb-2">
              <p className="font-semibold text-[#08271B]">MORTGAGE BROTHERS LLC</p>
              <p>1599 East Orangewood Ave</p>
              <p>Suite 200 Phoenix, AZ 85020</p>
              <p>Company NMLS# 1007154</p>
              <p>Edward Knoell NMLS #210917 &amp; Thomas Knoell NMLS #1618695</p>
            </div>
          </div>

          <div className="relative w-full">
            {isLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[#e8eaed]/90 pointer-events-none">
                <div className="w-10 h-10 border-3 border-[#3fb364]/25 border-t-[#3fb364] rounded-full animate-spin" />
                <p className="text-[#4e5b4e] text-[14px] font-medium">
                  Loading secure loan applicationâ€¦
                </p>
              </div>
            )}
            <iframe
              src={PREAPPROVE_SRC}
              title="Mortgage Brothers Loan Application"
              className="w-full border-0 block bg-[#e8eaed]"
              style={{ minHeight: "calc(100vh - 72px)", height: "800px" }}
              onLoad={() => setIsLoading(false)}
              allow="clipboard-write; camera; microphone; geolocation"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
