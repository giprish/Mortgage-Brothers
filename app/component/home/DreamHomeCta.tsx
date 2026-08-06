import React from "react";
import Link from "next/link";

const stats = [
  { value: "5,000+", label: "Loans Approved" },
  { value: "22+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "100%", label: "Personalized Service" },
];

const HOME_VIDEO_ID = "YqOa8IipIPU";
const HOME_VIDEO_TITLE = "The Mortgage Brothers in Phoenix Arizona";

const DreamHomeCta = () => {
  return (
   <section className="w-full bg-[#08271B] relative overflow-hidden">
  <div className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#3fb364]/10 blur-[110px]" />
  <div className="pointer-events-none absolute -bottom-24 right-0 w-[380px] h-[380px] rounded-full bg-[#3fb364]/10 blur-[110px]" />

  <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 sm:pt-24 lg:pt-32 pb-14 sm:pb-20 lg:pb-24 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* YouTube video */}
      <div className="order-2 lg:order-1">
        <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
          {/* glow frame */}
          <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-[#3fb364]/30 via-transparent to-transparent blur-md -z-10" />
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${HOME_VIDEO_ID}?rel=0`}
            title={HOME_VIDEO_TITLE}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      {/* Content */}
      <div className="order-1 lg:order-2 flex flex-col h-full justify-center">
        <p className="text-white/90 text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
          Ready When You Are
        </p>

        <h2
          className="font-playfair text-white text-[28px] lg:text-[38px] font-normal leading-[1.15] mb-6"
          
        >
          Your Dream Home in Arizona Is Closer Than You Think
        </h2>

        <p className="text-[#c8c8b8] text-[15.5px] leading-[1.75] mb-10 max-w-lg">
          From the valley of Phoenix, to the mountains of Pinetop and Payson,
          and to the beautiful city of Tucson. The Mortgage Brothers are here
          to simplify your experience.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 hover:border-[#3fb364]/40 transition-colors duration-200"
            >
              <p
                className="font-playfair text-white text-[26px] lg:text-[32px] font-semibold leading-none mb-1.5"
              >
                {stat.value}
              </p>
              <p className="text-white text-[13px] font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/#get-pre-approved"
          className="btn-primary duration-200 shadow-lg shadow-[#3fb364]/20 w-fit"
        >
          Start My Pre-Approval
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
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
