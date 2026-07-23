import React from "react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "5,000+", label: "Loans Approved" },
  { value: "70+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "100%", label: "Personalized Service" },
];

const DreamHomeCta = () => {
  return (
    <section className="w-full bg-[#08271B] relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#3fb364]/10 blur-[110px]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <Image
              src="/home/team-meeting.jpg"
              alt="The Mortgage Brothers team meeting with clients"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-[#3fb364] text-[12px] font-semibold tracking-[0.14em] uppercase mb-4">
              Ready When You Are
            </p>
            <h2
              className="text-white text-[30px] lg:text-[40px] font-normal leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your Dream Home in Arizona Is Closer Than You Think
            </h2>
            <p className="text-[#c8c8b8] text-[15.5px] leading-[1.75] mb-10 max-w-lg">
              From the valley of Phoenix, to the mountains of Pinetop and Payson, and to the
              beautiful city of Tucson. The Mortgage Brothers are here to simplify your
              experience.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-[#3fb364] text-[28px] lg:text-[34px] font-semibold leading-none mb-1.5"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[#8a9a7a] text-[13px] font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/#get-pre-approved"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-[#3fb364]/20"
            >
              Start My Pre-Approval
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamHomeCta;
