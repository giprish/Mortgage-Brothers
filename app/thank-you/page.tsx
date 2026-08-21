import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { COMPANY } from "@/lib/company";

const quickLinks = [
  {
    href: "/",
    label: "Return Home",
    external: false,
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.2 11.2 12 3.8l8.8 7.4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.4 10.6V20h13.2v-9.4" />
        <rect x="8.6" y="13.4" width="6.8" height="4.4" rx="0.5" />
        <path strokeLinecap="round" d="M10.2 15.6h3.6" />
      </svg>
    ),
  },
  {
    href: "/mortgage-loan-programs-arizona/",
    label: "Explore Our Services",
    external: false,
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 4h10a1.5 1.5 0 0 1 1.5 1.5v14L12 16.4 5.5 19.5V5.5A1.5 1.5 0 0 1 7 4Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 8.6h4" />
        <circle cx="12" cy="11.8" r="1.35" />
      </svg>
    ),
  },
  {
    href: "/blog/",
    label: "Explore Our Blog",
    external: false,
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.2c0-1.4-1.7-2.5-3.8-2.5H4.6v14.6h3.8c2.1 0 3.6 1 3.6 2.4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.2c0-1.4 1.7-2.5 3.8-2.5h3.6v14.6h-3.8c-2.1 0-3.6 1-3.6 2.4" />
      </svg>
    ),
  },
  {
    href: "/videos/",
    label: "Watch Our Podcasts",
    external: false,
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="8.2" />
        <path d="M10.3 9.2v5.6L15.3 12 10.3 9.2Z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "/contact-us/",
    label: "Submit a Request",
    external: false,
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 6.2h14v9.4H9.4L5 19.2V6.2Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.2v2.4M12 14.2h.01" />
      </svg>
    ),
  },
  {
    href: COMPANY.phoneHref,
    label: "Call Us Now",
    external: true,
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="6" y="4" width="12" height="16" rx="2.4" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.4 9.2c.9.9.9 2.7 0 3.6-.9.9-2.7.9-3.6 0"
        />
        <path strokeLinecap="round" d="M10.4 17.6h3.2" />
      </svg>
    ),
  },
];

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111111]">
      <Navbar />

      <main className="flex-grow">
        <div className="h-[64px] sm:h-[72px] bg-[#08271B]" aria-hidden />
        <section className="bg-[#111111] px-6 sm:px-10 lg:px-12 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-[34px] sm:text-[42px] lg:text-[48px] font-bold leading-[1.15] tracking-tight mb-6">
              Thank you so much for your request
            </h1>
            <div className="space-y-5 text-[16px] sm:text-[17px] leading-relaxed text-white/95">
              <p>We are very excited to help you with your next mortgage.</p>
              <p>
                Our team will get back to you right away. Typically, we can get back to you within minutes if
                it is Monday – Friday, 8:00 am to 5:00 pm.
              </p>
              <p>We look forward to working with you on your home loan.</p>
              <p>
                Please feel free to call us anytime at{" "}
                <a
                  href={COMPANY.phoneHref}
                  className="text-[#7dff9a] font-semibold hover:underline"
                >
                  {COMPANY.phoneDisplay}
                </a>{" "}
                or email us at{" "}
                <a
                  href="mailto:team@azmortgagebrothers.com"
                  className="text-[#7dff9a] font-semibold hover:underline"
                >
                  team@azmortgagebrothers.com
                </a>
              </p>
            </div>
          </div>
        </section>

        <nav aria-label="Next steps" className="bg-[#3d8c45]">
          <ul className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 px-4 sm:px-6 py-8 lg:py-10">
            {quickLinks.map((item) => {
              const className =
                "flex flex-col items-center justify-center gap-3 text-white text-center min-h-[108px] px-2 py-3 rounded-lg hover:bg-white/10 transition-colors";
              const content = (
                <>
                  {item.icon}
                  <span className="text-[13px] sm:text-[14px] font-semibold leading-snug">
                    {item.label}
                  </span>
                </>
              );
              return (
                <li key={item.label}>
                  {item.external ? (
                    <a href={item.href} className={className}>
                      {content}
                    </a>
                  ) : (
                    <Link href={item.href} className={className}>
                      {content}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </main>

      <Footer />
    </div>
  );
}
