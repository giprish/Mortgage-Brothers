import type { Metadata } from "next";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Mortgage Brothers",
  description:
    "Privacy Policy for Mortgage Brothers LLC — how we collect, use, and protect your information.",
  alternates: {
    canonical: "/privacy-policy/",
  },
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <div className="prose prose-neutral max-w-none text-[#4e5b4e] text-[15px] leading-[1.75] space-y-5">
            <p>
              Thank you for using our Website. This statement discloses the privacy policy for the Mortgage Brothers LLC&apos;s (&quot;Proprietor&quot;) website. Questions for clarification of this statement or comments may be addressed via the contact information on the Website.
            </p>
            <p>
              We have adopted this privacy policy in order to demonstrate our firm commitment to privacy and to further the relationship between us and our subscribers. This statement of our Privacy Policy makes disclosures concerning our collection of information, including personal information, when you use the Website, and how we use and disclose it to others. By using the Website you accept the practices described in this Privacy Policy.
            </p>
            
            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">Information We Collect</h2>
            <p>
              We collect personal and non-personal information when you provide it to us in the course of using our Website. The personal information that we may collect includes your name, mailing address, phone number, email address, credit card number, and financial information. The non-personal information that we may collect includes your server address, your browser type, the URL of the previous website you visited, your ISP, operating system, the date and time of your visit, pages accessed during your visit, documents downloaded from our Website, and your Internet protocol (IP) Address. Unless this Website asks for specific personal information in order to respond to requests for information or to register uses for particular services, only the non-personal information will be collected when you use this site for statistical purposes and to enable us to improve the navigation functions of our website.
            </p>
            <p>
              In addition, if you communicate with us regarding the Website or any of our services or products we collect any information that you provide to us during the course of our communication.
            </p>
            <p>
              We may use analytic and reporting technologies to record non-personal information, as defined above. Your personal information will only be collected by the staff of Proprietor who have responsibility for responding to such requests or administrating such registrations.
            </p>
            <p>
              However, we may contract with a third party to help us manage, monitor and optimize our Website and measure the effectiveness of our advertising, communications and use of the Website.
            </p>

            <p className="text-[#333333] text-[22px] font-semibold pt-4">SMS Communication &amp; Data Usage Disclosure</p>
            
            <p>
              <strong>SMS Consent</strong><br />
              By providing your phone number to Mortgage Brothers LLC, you consent to receive SMS (text) messages related to your mortgage application, loan processing, appointment reminders, and other relevant updates. Message frequency may vary depending on your transaction or communication preferences.
            </p>
            <p>
              <strong>Opt-Out</strong><br />
              You may opt out of receiving SMS messages at any time by replying &quot;STOP&quot; to any message or by contacting our office directly at 602‑248‑4200. Standard message and data rates may apply.
            </p>
            <p>
              <strong>Personal Information Usage</strong><br />
              No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties
            </p>
            <p>
              <strong>Data Security</strong><br />
              We implement appropriate administrative, technical, and physical safeguards to protect your personal information from unauthorized access, use, or disclosure. These include encrypted communications and secure storage systems.
            </p>
            <p>
              <strong>Access to Privacy Policy</strong><br />
              This privacy policy is available on every page of our website and is accessible through a link in the footer. You can also review it at any time at: <Link href="/privacy-policy/" className="text-[#3fb364] hover:underline">https://azmortgagebrothers.com/privacy-policy/</Link>
            </p>

            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">Our Use of Information for Internal Purpose</h2>
            <p>
              We use your personal information primarily for our own internal purposes, such as providing, maintaining, evaluating, and improving our Website.
            </p>
            <p>
              We use the non-personal information we collect to track the use of the Website and to assist us in providing, maintaining, evaluating, and improving our Website. Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.
            </p>

            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">Disclosure of Personal Information to Third Parties</h2>
            <p>
              We will disclose your personal information to protect or enforce our legal rights and policies, to protect or enforce the legal rights of a third party, or as we in good faith believe we are required to do so by law (such as to comply with a subpoena or court order, for example).
            </p>
            <p>
              We may contract with various third parties who help us provide, maintain and improve the Website. Personal information collected on this web site will only be used for the purposes stated at the time of collection. Your personal information will not be forwarded to any third party except as stated above.
            </p>

            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">Web browser cookies</h2>
            <p>
              Our Site may use &quot;cookies&quot; to enhance User experience. User&apos;s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
            </p>

            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">How we use collected information</h2>
            <p>Mortgage Brothers LLC may collect and use Users personal information for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>To improve customer service</li>
              <li>Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
              <li>To personalize user experience</li>
              <li>We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
              <li>To improve our Site</li>
              <li>We may use feedback you provide to improve our products and services.</li>
              <li>We may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.</li>
              <li>To run a promotion, contest, survey or other Site feature</li>
              <li>To send Users information they agreed to receive about topics we think will be of interest to them.</li>
              <li>To send periodic emails</li>
              <li>If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc.</li>
              <li>If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may contact us via our Site.</li>
            </ul>

            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">How We Protect Your Personal Information</h2>
            <p>
              We consider protecting the security of your personal information as very important. However, this site does not provide facilities to guarantee the secure transmission of information across the Internet. Whilst reasonable efforts are used to provide security, users should be aware that there are inherent risks in the transmission of information across the Internet. When you enter sensitive information such as a credit card number and/or social security number on our registration or order forms, we encrypt that information using secure socket layer technology (sometimes referred to as &quot;SSL&quot;).
            </p>
            <p>
              We follow generally accepted industry standards to protect personal information submitted to us, both during transmission and once we receive it. No method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we do not guarantee absolute security. We are not responsible for the unauthorized acts of others and we assume no liability for any disclosure of information due to errors in transmission, unauthorized third party access (such as through hacking) or other acts of third parties, or acts or omissions beyond our reasonable control.
            </p>

            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">Reviewing and Changing Your Personal Information</h2>
            <p>
              You may obtain a copy of and request that we correct errors in your personal information by contacting us via the contact information on the Website. If you do desire to obtain a copy of your personal information, you will be required to provide proof of your identity. If your personal information changes or if you no longer want to subscribe to or use the Website, you may correct, update, terminate or deactivate your personal information and your account by contacting Proprietor via the contact information at the top of the Website. There is no fee for requesting access to your information; however, we may charge you the reasonable cost of processing your request.
            </p>

            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">Outside Links</h2>
            <p>
              You will be able to access third party websites linked directly from the Website. This Privacy Policy does not apply when you access third party websites. We cannot control how third parties may use personal information you disclose to them, so you should carefully review the privacy policy of any third party website you visit before using it or disclosing your personal information to its provider. Proprietor is not responsible for any content or practices of these sites.
            </p>

            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">Children&apos;s Privacy</h2>
            <p>
              Our services and products are intended for potential home buyers and those looking to refinance. Therefore, it is unlikely that children under the age of 17 will use the Website or purchase the services or products we offer. Accordingly, we will not knowingly collect or use any personal information from children that we know to be under the age of 17. In addition, we will delete any information in our database that we know originates from a child under the age of 17.
            </p>
            <p>
              If you are between the ages of 13 and 17, you, your parent, or your legal guardian may request that we deactivate any of your personal information in our database and/or opt-out from receiving communications from us. If you wish to do so, please contact us via the contact information on Website.
            </p>

            <h2 className="text-[#08271B] text-[20px] font-semibold pt-2">Changes in Privacy Policy</h2>
            <p>
              This Privacy Policy is subject to change from time to time. Proprietor may update this Privacy Policy without notifying you. Proprietor reserves the right to amend, modify, revise, and restate, at any time, this Privacy Policy, without notice. If you continue to use the Website after the amended terms become effective, you are deemed to have agreed to be bound by the amended terms. If you do not agree to the amended terms, then you agree not to use the Website. User&apos;s continued use of the Website constitutes an affirmative agreement by you to abide and be bound by the Privacy Policy and its amended terms.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
