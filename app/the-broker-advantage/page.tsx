"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const loanSolutions = [
  { label: "Conventional Home Loans", href: "/conventional-home-loans-arizona/" },
  { label: "Private Money Lender", href: "/private-money-lender-arizona/" },
  { label: "FHA Home Loans", href: "/fha-home-loans-arizona/" },
  { label: "FHA Streamline Refinance", href: "/fha-streamline-refinance-arizona/" },
  { label: "First Time Home Buyer", href: "/first-time-home-buyer-arizona-guide/" },
  { label: "Reverse Mortgage", href: "/reverse-mortgage-arizona/" },
  { label: "Reverse Mortgage for a Home Purchase", href: "/reverse-mortgage-home-purchase-arizona/" },
  { label: "Refinancing", href: "/refinancing-arizona/" },
  { label: "Jumbo Loans", href: "/jumbo-loans-arizona/" },
  { label: "VA Loans", href: "/va-loans-arizona/" },
];

const loanPrograms = [
  { label: "Conventional Home Loans", href: "/conventional-home-loans-arizona/" },
  { label: "FHA Home Loans", href: "/fha-home-loans-arizona/" },
  { label: "Conventional vs FHA Loans", href: "/conventional-vs-fha-loans-arizona/" },
  { label: "FHA Streamline Refinance", href: "/fha-streamline-refinance-arizona/" },
  { label: "Reverse Mortgage", href: "/reverse-mortgage-arizona/" },
  { label: "Reverse Mortgage for a Home Purchase", href: "/reverse-mortgage-home-purchase-arizona/" },
  { label: "Private Money Lender", href: "/private-money-lender-arizona/" },
  { label: "VA Loans", href: "/va-loans-arizona/" },
  { label: "Mortgage Refinancing", href: "/refinancing-arizona/" },
  { label: "Jumbo Loans", href: "/jumbo-loans-arizona/" },
  { label: "First-time Home Buyer Guide", href: "/first-time-home-buyer-arizona-guide/" },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function TheBrokerAdvantagePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow pt-[72px]">
        {/* Featured hero — full 16:9 image, no crop (matches live) */}
        <section className="w-full bg-white py-6">
  <div className="max-w-[1400px] mx-auto px-8 sm:px-10 lg:px-12 mt-6">
    <Image
      src="/home/mortgage-broker-vs-banker.jpg"
      alt="Mortgage Broker vs Banker — The Mortgage Brothers Team"
      width={1920}
      height={1080}
      priority
      className="w-full h-auto rounded-lg"
      sizes="(max-width: 1400px) 100vw, 1400px"
    />
  </div>
</section>

        {/* Article + sidebar */}
        <section className="w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-12">
            <article className="min-w-0">
              <h1
                className="text-[#08271B] text-[32px] sm:text-[40px] lg:text-[46px] font-normal leading-tight mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                The Broker Advantage
              </h1>
              <p className="text-[#8a9a7a] text-[14px] mb-8">
                by{" "}
                <Link href="/about-us/" className="text-[#3fb364] hover:underline font-medium">
                  Eddie Knoell
                </Link>{" "}
                | Feb 10, 2025
              </p>

              <div className="space-y-5 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <p>
                  When it comes to life&apos;s important questions, &quot;What&apos;s the difference
                  between a mortgage broker and a mortgage banker?&quot; really can&apos;t compete with
                  &quot;What do you want to be when you grow up?&quot; and &quot;Will you marry me?&quot;
                  Compared to these classics, the question sounds like the set up for a joke, but
                  it&apos;s not—at least, not when you&apos;re trying to figure out the best way to
                  finance a new home. If you are in the market for a new home, understanding the
                  advantages of using a mortgage broker instead of a mortgage banker can make a world
                  of difference.
                </p>
              </div>

              {/* Mid CTA */}
              <div className="my-10 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Unlock Your Broker Advantage Today!
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Contact Arizona Mortgage Brothers to leverage The Broker Advantage for a competitive
                  edge in mortgage solutions.
                </p>
                <Link
                  href="/#get-pre-approved"
                  className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                >
                  Get Started
                </Link>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section>
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Answering the Right Questions
                  </h2>
                  <p className="mb-4">
                    To understand the difference between brokers and bankers, borrowers need to know the
                    answer to a few related questions:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[15.5px]">
                    <li>Who&apos;s the boss?</li>
                    <li>Who can offer the most options?</li>
                    <li>Is there a middle man?</li>
                  </ul>
                </section>

                <section>
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Who&apos;s the Boss?
                  </h2>
                  <p className="mb-4">
                    Savvy brokers and bankers will probably both claim that they work for the client, and
                    to an extent, this is true. Both brokers and banker try to match their clients with a
                    suitable financial product that will enable them to buy a home they can afford. The
                    difference between them is that, because bankers work for a bank, they can only offer
                    their bank&apos;s products.
                  </p>
                  <p>
                    As helpful as bankers may be, they ultimately answer to the bank, not the borrower.
                    If they can&apos;t find a way to make their bank money lending to the borrower, they
                    can&apos;t lend to the borrower. Brokers, on the other hand, are free to shop around
                    on their client&apos;s behalf at multiple wholesale lenders, including credit unions
                    and savings and loan-type lenders.
                  </p>
                </section>

                <section>
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Who can offer the most options?
                  </h2>
                  <p>
                    It follows from the answer above, that brokers can generally present more options to
                    the potential homeowner. Because they are not limited to offering the products of just
                    one bank, brokers are able to find their clients the best deal possible. They
                    don&apos;t get paid unless their client gets a loan. This means they are
                    motivated—and able—to find innovative solutions for buyers in unique circumstances or
                    who fall outside the parameters banks typically adhere to for borrowers.
                  </p>
                </section>

                <section>
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Is there a middleman?
                  </h2>
                  <p>
                    When you work with a banker, you are working directly with a particular bank. In
                    contrast, when you work through a broker, your broker serves as an intermediary
                    between you and the loan provider. At first glance, it might seem like using a broker
                    complicates things unnecessarily—why insert a middleman into the process when you
                    could work directly with a lender? But the banker doesn&apos;t personally approve your
                    loan; they have to pass it on to another department. In other words, they&apos;re a
                    middle man, too.
                  </p>
                </section>

                <section>
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Asking the Right Question
                  </h2>
                  <p className="mb-4">
                    Ultimately, best way to understand the advantage of using a broker over a banker is
                    not by comparing their answers to your questions; it&apos;s by comparing the questions
                    they ask themselves.
                  </p>
                  <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl my-6 space-y-3">
                    <p className="text-[15.5px] text-[#052316]">
                      <strong>The banker asks:</strong> &quot;Can I get this loan approved?&quot; If
                      their bank doesn&apos;t approve your application, there&apos;s nothing more they can
                      do.
                    </p>
                    <p className="text-[15.5px] text-[#052316]">
                      <strong>The mortgage broker asks:</strong> &quot;Where can I get this loan
                      approved?&quot;
                    </p>
                  </div>
                  <p className="mb-4">
                    The difference between these two questions makes all the difference for the borrower.
                    Because brokers work in the buyer&apos;s interests and not the bank&apos;s, a broker
                    who gets a &quot;no&quot; can keep going. He can create a customized solution on the
                    fly and continue shopping around until he gets a &quot;yes&quot;.
                  </p>
                  <p>
                    AZ Mortgage Brothers are proud to be mortgage brokers and have been coming up with
                    innovative mortgage solutions for our clients for years.{" "}
                    <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                      Contact us today
                    </Link>{" "}
                    if you want to experience the broker advantage (and the AZ Mortgage Brothers
                    advantage!) for yourself. You&apos;ll be glad you did!
                  </p>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link href="/blog/" className="text-[#3fb364] font-semibold hover:underline">
                  ← Back to Blog
                </Link>
                <Link
                  href="/arizona-mortgage-insights/"
                  className="text-[#8a9a7a] hover:text-[#3fb364] transition-colors"
                >
                  Arizona Mortgage Insights →
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-[100px] h-fit space-y-6">
              <div className="bg-[#f0f2f5] border-t-4 border-[#3fb364] rounded-b-2xl p-6 text-center shadow-sm">
                <p className="text-[#08271B] text-[11px] font-bold tracking-[0.15em] uppercase mb-1">
                  The Mortgage Brothers Team
                </p>
                <h3 className="text-[#08271B] text-[20px] font-extrabold uppercase tracking-wide leading-snug mt-4 mb-2">
                  Your Dream Home Awaits!
                </h3>
                <p className="text-[#6a7a6a] text-[11px] font-semibold uppercase tracking-wide mb-4">
                  Expert mortgage solutions tailored to your needs
                </p>
                <p className="text-[#3fb364] text-[14px] font-bold uppercase mb-5">
                  Talk to a Broker Today!
                </p>
                <a
                  href="tel:+16025352171"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-semibold px-4 py-3 rounded-full transition-all"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +1 602-535-2171
                </a>
              </div>

              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                <h3 className="text-[#08271B] text-[16px] font-bold mb-4">Loan Programs</h3>
                <ul className="space-y-2.5">
                  {loanPrograms.map((item) => (
                    <li key={item.href + item.label}>
                      <Link
                        href={item.href}
                        className="text-[13.5px] text-[#4e5b4e] hover:text-[#3fb364] transition-colors leading-snug"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* Tailored solutions CTA */}
        <section className="w-full bg-[#08271B] py-14 lg:py-16 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2
              className="text-white text-[28px] lg:text-[34px] font-normal mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tailored Mortgage Solutions
            </h2>
            <p className="text-[#c8c8b8] text-[15.5px] leading-relaxed mb-7">
              Have questions about financing options? Our experts are here to help with personalized
              advice for any mortgage type.
            </p>
            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* Get in touch */}
        <section className="w-full bg-[#f5f0e8] py-16 lg:py-20 border-y border-[#e8e0d0]/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2
              className="text-[#08271B] text-[30px] lg:text-[38px] font-normal leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get in Touch with The Mortgage Brothers
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-8 max-w-2xl mx-auto">
              Ready to take the next step towards your dream home? One of our experienced mortgage
              professionals will get back to you promptly with personalized solutions tailored to your
              unique financial situation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-[14.5px] text-[#08271B]">
              <a href="tel:+16025352171" className="font-semibold hover:text-[#3fb364] transition-colors">
                +1 602-535-2171
              </a>
              <span className="hidden sm:inline text-[#c8c8b8]">|</span>
              <a
                href="https://goo.gl/maps/GVLYa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3fb364] transition-colors text-center"
              >
                1599 East Orangewood Ave Suite 200, Phoenix, AZ 85020
              </a>
            </div>

            <Link
              href="/#get-pre-approved"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all"
            >
              Start my preapproval
            </Link>
          </div>
        </section>

        {/* Explore solutions */}
        <section className="w-full py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2
              className="text-[#08271B] text-[28px] lg:text-[34px] font-normal text-center mb-10"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Explore Our Mortgage Solutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {loanSolutions.map((item) => (
                <Link
                  key={item.href + item.label}
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
