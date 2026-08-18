import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Link from "next/link";

export const metadata: Metadata = getSeoMetadata("/terms-of-use/");

export default function TermsOfUsePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />
      <main id="main-content" className="flex-grow pt-[110px] lg:pt-[130px] pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="text-[#7a6638] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
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
              Welcome to azmortgagebrothers.com (the &quot;Website&quot;). The Website is owned and operated by Mortgage Brothers LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using this Website, you agree to be bound by the following Terms of Use (&quot;Terms&quot;). If you do not agree with these Terms, please do not use the Website.
            </p>
            
            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">1. Use of the Website</h2>
            <p>
              The content provided on this Website is for informational purposes only and should not be construed as financial, legal, or professional advice.
            </p>
            <p>
              You agree to use the Website in compliance with all applicable laws and regulations.
            </p>
            <p>
              Unauthorized use, reproduction, or distribution of any content on this Website is prohibited.
            </p>
            
            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">2. No Financial Advice</h2>
            <p>
              Mortgage Brothers LLC is a mortgage broker, and the information provided on this Website does not constitute an offer to lend, a loan commitment, or financial advice.
            </p>
            <p>
              Any financial decisions you make should be based on consultation with a qualified professional.
            </p>
            
            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">3. Privacy Policy</h2>
            <p>
              Your use of the Website is also governed by our Privacy Policy, which explains how we collect, use, and protect your information. By using this Website, you agree to the terms of our Privacy Policy.
            </p>
            
            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">4. Third-Party Links</h2>
            <p>
              This Website may contain links to third-party websites. We are not responsible for the content, policies, or practices of those websites.
            </p>
            <p>
              Accessing any third-party websites linked on this Website is at your own risk.
            </p>
            
            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">5. Disclaimer of Warranties</h2>
            <p>
              This Website and its content are provided &quot;as is&quot; without warranties of any kind, express or implied.
            </p>
            <p>
              We do not guarantee that the Website will be available, secure, or free of errors.
            </p>

            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Mortgage Brothers LLC shall not be liable for any damages arising from your use of or inability to use this Website.
            </p>

            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">7. Changes to These Terms</h2>
            <p>
              We reserve the right to update or modify these Terms at any time. Continued use of the Website after any changes constitutes acceptance of the new Terms.
            </p>

            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Arizona, without regard to its conflict of law principles.
            </p>
            <p>
              By using this Website, you acknowledge that you have read, understood, and agreed to these Terms of Use.
            </p>
            <p className="text-[13px] text-[#5a6b52] pt-4">
              Copyright © {new Date().getFullYear()} Mortgage Brothers LLC. All rights reserved.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
