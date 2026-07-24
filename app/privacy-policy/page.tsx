import type { Metadata } from "next";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Mortgage Brothers",
  description:
    "Privacy Policy for Mortgage Brothers LLC — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <div className="prose prose-neutral max-w-none text-[#4e5b4e] text-[15px] leading-[1.75] space-y-5">
            <p>
              Mortgage Brothers LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This
              Privacy Policy describes how we collect, use, and safeguard information when you visit
              azmortgagebrothers.com or contact us about mortgage products and services.
            </p>
            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">Information We Collect</h2>
            <p>
              We may collect information you provide directly — such as your name, email address,
              phone number, and details related to a loan inquiry — as well as limited technical
              data (for example, browser type and pages visited) used to operate and improve our
              website.
            </p>
            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">How We Use Information</h2>
            <p>
              We use your information to respond to inquiries, process pre-approval and loan
              applications, communicate about rates and programs, and comply with applicable law and
              licensing requirements.
            </p>
            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">Sharing</h2>
            <p>
              We may share information with lenders, service providers, and other parties as needed
              to evaluate or originate a loan, or when required by law. We do not sell your personal
              information.
            </p>
            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">Contact</h2>
            <p>
              Questions about this policy can be directed to{" "}
              <Link href="/contact-us/" className="text-[#3fb364] hover:underline">
                our contact page
              </Link>{" "}
              or by calling{" "}
              <a href="tel:+16025352171" className="text-[#3fb364] hover:underline">
                +1 602 535 2171
              </a>
              .
            </p>
            <p className="text-[13px] text-[#8a9a7a] pt-4">
              Last updated: {new Date().getFullYear()}. This page is provided for informational
              purposes and may be updated periodically.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
