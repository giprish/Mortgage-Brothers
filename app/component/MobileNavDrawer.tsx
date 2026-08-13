"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { COMPANY, LOAN_PROGRAM_LINKS } from "@/lib/company";

const CALCULATOR_LINKS = [
  { href: "/basic-mortgage-payment-calculator/", label: "BASIC MORTGAGE PAYMENT" },
  { href: "/mortgage-affordability-calculator/", label: "MORTGAGE AFFORDABILITY" },
  { href: "/refinance-calculator/", label: "REFINANCE CALCULATOR" },
  { href: "/rent-vs-buy-calculator/", label: "RENT VS. BUY CALCULATOR" },
  { href: "/conventional-vs-fha-calculator/", label: "CONVENTIONAL VS. FHA" },
  { href: "/down-payment-calculator/", label: "DOWN PAYMENT CALCULATOR" },
  { href: "/debt-to-income-ratio-calculator/", label: "DEBT-TO-INCOME RATIO" },
  { href: "/extra-payment-mortgage-calculator/", label: "EXTRA PAYMENT MORTGAGE" },
  { href: "/fha-loan-calculator/", label: "FHA LOAN CALCULATOR" },
  { href: "/va-loan-calculator/", label: "VA LOAN CALCULATOR" },
  { href: "/home-purchase-closing-cost-calculator/", label: "HOME LOAN CLOSING COST CALCULATOR" },
] as const;

const AREA_LINKS = [
  { href: "/service-areas/", label: "ALL SERVICE AREAS" },
  { href: "/service-areas/maricopa-county-az/", label: "MARICOPA COUNTY" },
  { href: "/service-areas/pima-county-az/", label: "PIMA COUNTY" },
  { href: "/service-areas/pinal-county-az/", label: "PINAL COUNTY" },
  { href: "/service-areas/yavapai-county-az/", label: "YAVAPAI COUNTY" },
  { href: "/service-areas/coconino-county-az/", label: "COCONINO COUNTY" },
  { href: "/service-areas/navajo-county-az/", label: "NAVAJO COUNTY" },
  { href: "/service-areas/apache-county-az/", label: "APACHE COUNTY" },
  { href: "/service-areas/gila-county-az/", label: "GILA COUNTY" },
  { href: "/service-areas/cochise-county-az/", label: "COCHISE COUNTY" },
  { href: "/service-areas/graham-county-az/", label: "GRAHAM COUNTY" },
  { href: "/service-areas/greenlee-county-az/", label: "GREENLEE COUNTY" },
  { href: "/service-areas/santa-cruz-county-az/", label: "SANTA CRUZ COUNTY" },
  { href: "/service-areas/mohave-county-az/", label: "MOHAVE COUNTY" },
  { href: "/service-areas/la-paz-county-az/", label: "LA PAZ COUNTY" },
  { href: "/service-areas/yuma-county-az/", label: "YUMA COUNTY" },
] as const;

const ABOUT_LINKS = [
  { href: "/about-us/", label: "ABOUT US" },
  { href: "/contact-us/", label: "CONTACT US" },
  { href: "/team/", label: "TEAM & CAREERS" },
  { href: "/job-opportunities/", label: "JOB OPPORTUNITIES" },
] as const;

const RESOURCE_LINKS = [
  { href: "/blog/", label: "BLOG" },
  { href: "/mortgage-basics/", label: "MORTGAGE BASICS" },
  { href: "/videos/", label: "VIDEOS" },
  { href: "/mortgage-basics/conventional-loan-basics/", label: "CONVENTIONAL LOANS" },
  { href: "/client-mortgage-reviews/", label: "REVIEWS" },
  { href: "/faq/", label: "MORTGAGE FAQ" },
] as const;

const LOAN_PROGRAM_MOBILE_LINKS = [
  { href: "/mortgage-loan-programs-arizona/", label: "ALL LOAN PROGRAMS" },
  ...LOAN_PROGRAM_LINKS,
] as const;

const CALCULATOR_MOBILE_LINKS = [
  { href: "/mortgage-calculator-arizona/", label: "ALL CALCULATORS" },
  ...CALCULATOR_LINKS,
] as const;

const itemClass =
  "font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] text-white hover:text-[#3fb364] transition-colors block";

type Submenu = "LOAN PROGRAMS" | "CALCULATORS" | "AREAS WE SERVE" | "ABOUT" | "RESOURCES" | null;

function Chevron() {
  return (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 256 512" aria-hidden>
      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103.5c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 33.5z" />
    </svg>
  );
}

/** Mobile drawer only — loaded on demand so cold page loads stay free of nav JS. */
export default function MobileNavDrawer({ onClose }: { onClose: () => void }) {
  const [submenu, setSubmenu] = useState<Submenu>(null);

  const close = useCallback(() => {
    setSubmenu(null);
    onClose();
  }, [onClose]);

  const sections: { key: Exclude<Submenu, null>; href: string; label: string }[] = [
    { key: "LOAN PROGRAMS", href: "/mortgage-loan-programs-arizona/", label: "LOAN PROGRAMS" },
    { key: "CALCULATORS", href: "/mortgage-calculator-arizona/", label: "CALCULATORS" },
    { key: "AREAS WE SERVE", href: "/service-areas/", label: "AREAS WE SERVE" },
    { key: "ABOUT", href: "/about-us/", label: "ABOUT US" },
    { key: "RESOURCES", href: "/blog/", label: "RESOURCES" },
  ];

  const submenuLinks =
    submenu === "LOAN PROGRAMS"
      ? LOAN_PROGRAM_MOBILE_LINKS
      : submenu === "CALCULATORS"
        ? CALCULATOR_MOBILE_LINKS
        : submenu === "AREAS WE SERVE"
          ? AREA_LINKS
          : submenu === "ABOUT"
            ? ABOUT_LINKS
            : submenu === "RESOURCES"
              ? RESOURCE_LINKS
              : [];

  return (
    <div className="lg:hidden fixed inset-0 z-50 overflow-hidden">
      <div className="fixed inset-0 bg-black/65" onClick={close} aria-hidden />
      <div className="fixed inset-y-0 right-0 w-[82%] max-w-[310px] bg-[#292e34] shadow-2xl flex flex-col z-50">
        {submenu ? (
          <button
            type="button"
            onClick={() => setSubmenu(null)}
            aria-label="Back to main menu"
            className="w-full bg-[#348e38] text-white font-bold text-[14px] px-5 py-3.5 flex items-center gap-2 tracking-wide uppercase"
          >
            ← Back
          </button>
        ) : (
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#3b4148]">
            <a
              href={COMPANY.phoneHref}
              className="border-2 border-white/90 text-white font-bold text-[12px] tracking-wider uppercase px-4 py-1.5 rounded"
            >
              CALL US
            </a>
            <button
              type="button"
              onClick={close}
              className="text-[#3fb364] p-1.5"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
        )}

        <div className="flex-1 overflow-y-auto">
          {!submenu ? (
            <div className="flex flex-col">
              {sections.map((s) => (
                <div
                  key={s.key}
                  className="flex items-center justify-between border-b border-[#3b4148]"
                >
                  <Link
                    prefetch={false}
                    href={s.href}
                    onClick={close}
                    className="flex-1 font-bold text-[13.5px] uppercase tracking-wider px-5 py-4 text-white"
                  >
                    {s.label}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSubmenu(s.key)}
                    className="px-5 py-4 text-[#3fb364]"
                    aria-label={`Open ${s.label} submenu`}
                  >
                    <Chevron />
                  </button>
                </div>
              ))}
              <Link
                prefetch={false}
                href="/contact-us/"
                onClick={close}
                className={`${itemClass} hover:bg-[#343a42]`}
              >
                CONTACT US
              </Link>
              <Link
                prefetch={false}
                href="/realtorteam/"
                onClick={close}
                className={`${itemClass} hover:bg-[#343a42]`}
              >
                REALTORS
              </Link>
            </div>
          ) : (
            <div className="flex flex-col">
              <div className="text-white font-bold text-[13.5px] uppercase tracking-wider px-5 py-4 border-b border-[#3b4148] bg-[#23272c]">
                {submenu}
              </div>
              {submenuLinks.map((item) => (
                <Link
                  prefetch={false}
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className={itemClass}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
