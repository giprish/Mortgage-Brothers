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

      <main className="flex-grow pt-[72px]">
        {/* Secure loan application — matches live PreApproveMe embed */}
        <section className="relative w-full min-h-[calc(100vh-72px)] bg-[#e8eaed]">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[#e8eaed]">
              <div className="w-10 h-10 border-3 border-[#3fb364]/25 border-t-[#3fb364] rounded-full animate-spin" />
              <p className="text-[#4e5b4e] text-[14px] font-medium">
                Loading secure loan application…
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
