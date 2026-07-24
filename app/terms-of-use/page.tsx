import type { Metadata } from "next";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | Mortgage Brothers",
  description:
    "Terms of Use for the Mortgage Brothers LLC website and online mortgage resources.",
};

export default function TermsOfUsePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />
      <main className="flex-grow pt-[110px] lg:pt-[130px] pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="text-[#b89a5a] text-[12px] font-semibold tracking-[0.14em] uppercase mb-3">
            Legal
          </p>
          <h1
            className="text-[#08271B] text-[34px] lg:text-[42px] font-normal mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Terms of Use
          </h1>
          <div className="prose prose-neutral max-w-none text-[#4e5b4e] text-[15px] leading-[1.75] space-y-5">
            <p>
              By accessing the Mortgage Brothers LLC website, you agree to these Terms of Use.
              Content on this site is provided for informational purposes only and does not
              constitute an offer to lend, a commitment to lend, or financial, legal, or tax advice.
            </p>
            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">No Offer to Lend</h2>
            <p>
              Mortgage products, rates, terms, and availability are subject to change without notice
              and vary by borrower qualifications, property, and underwriting guidelines. All loans
              are subject to underwriter approval.
            </p>
            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">Licensing</h2>
            <p>
              Mortgage Brothers LLC — NMLS #1007154 · AZ License #MB0922514. You may verify our
              licenses through the{" "}
              <a
                href="https://www.nmlsconsumeraccess.org/Home.aspx/SubSearch?searchText=1007154"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3fb364] hover:underline"
              >
                NMLS Consumer Access website
              </a>
              .
            </p>
            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">Website Content</h2>
            <p>
              Calculators and estimates on this site are illustrative only. Actual payments, costs,
              and eligibility depend on your specific situation and lender terms.
            </p>
            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">Contact</h2>
            <p>
              For questions, please{" "}
              <Link href="/contact-us/" className="text-[#3fb364] hover:underline">
                contact our team
              </Link>{" "}
              or call{" "}
              <a href="tel:+16025352171" className="text-[#3fb364] hover:underline">
                +1 602 535 2171
              </a>
              .
            </p>
            <p className="text-[13px] text-[#8a9a7a] pt-4">
              Copyright © {new Date().getFullYear()} Mortgage Brothers LLC. All rights reserved.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
