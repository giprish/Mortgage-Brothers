import React from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/company";
import { renderInlineLinks } from "@/lib/renderInlineLinks";

export type GetInTouchProps = {
  /** Visual theme. Dark is the default (loan-program final CTAs). */
  theme?: "dark" | "light";
  /** Section heading. Defaults to the standard experts headline. */
  title?: string;
  /** Supporting copy under the heading. Defaults to standard copy; pass `""` to hide. */
  description?: string;
  /** Multi-paragraph body copy (county Get Started sections). Takes precedence over `description`. */
  paragraphs?: string[];
  /** Short green rule under the heading (matches live county pages). */
  showDivider?: boolean;
  /** Show the green Get Pre-Approved button (image-2 pattern). */
  showPreApproveCta?: boolean;
  /** Pre-approve link target. Defaults to `#get-pre-approved`. */
  ctaHref?: string;
  /** Pre-approve button label. */
  ctaLabel?: string;
  /** Optional paragraph renderer (city pages pass renderGetInTouchText). */
  renderParagraph?: (text: string) => React.ReactNode;
  /** When true, contact cards render before body copy (blog category pages). */
  contactBeforeBody?: boolean;
  /** Optional content between body copy and contact cards (e.g. inline Jotform on blog posts). */
  beforeContact?: React.ReactNode;
  /** Optional content after contact cards (e.g. licensing). */
  afterContact?: React.ReactNode;
  /** Optional section id for in-page anchors (e.g. `#contact`). */
  id?: string;
  /** When false, hides Phone / Address / Contact cards (e.g. blog pages with inline form only). */
  showContactCards?: boolean;
  /** Extra classes on the outer `<section>` (e.g. scroll margin for fixed nav). */
  className?: string;
};

const DEFAULT_TITLE = "Get in Touch with Arizona's Mortgage Experts";
const DEFAULT_DESCRIPTION =
  "We're here to answer your questions and guide you through the loan process. Whether you're ready to apply or just exploring your options, our team of experienced mortgage professionals is standing by to assist you. Reach out today and take the first step towards achieving your homeownership goals.";

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ChatIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
  </svg>
);

const PinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

type ContactItemProps = {
  href: string;
  ariaLabel: string;
  label: string;
  icon: React.ReactNode;
  value: React.ReactNode;
  external?: boolean;
  isLight: boolean;
};

function ContactItem({
  href,
  ariaLabel,
  label,
  icon,
  value,
  external,
  isLight,
}: ContactItemProps) {
  const baseClass = isLight
    ? "flex items-start gap-3 min-w-0 w-full text-left bg-white border border-[#e8e0d0]/70 rounded-xl px-5 py-4 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3fb364] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fcf9f3] min-h-11"
    : "flex items-start gap-3 min-w-0 w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3fb364] focus-visible:ring-offset-2 focus-visible:ring-offset-[#052316] rounded-md min-h-11";

  const iconClass = isLight
    ? "mt-0.5 flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#3fb364] text-white"
    : "mt-1 flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#3fb364] text-white";

  const labelClass = isLight
    ? "text-[13px] text-[#3fb364] uppercase tracking-wider font-bold mb-1"
    : "text-[13px] text-[#b8d4b8] uppercase tracking-wider font-bold mb-1";

  const valueClass = isLight
    ? "text-[#052316] text-[14px] sm:text-[15px] leading-relaxed wrap-break-word"
    : "text-white text-[14px] sm:text-[15px] leading-relaxed wrap-break-word";

  const sharedProps = {
    className: baseClass,
    "aria-label": ariaLabel,
  };

  const content = (
    <>
      <span className={iconClass}>{icon}</span>
      <div className="min-w-0">
        <p className={labelClass}>{label}</p>
        <div className={valueClass}>{value}</div>
      </div>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...sharedProps}
      >
        {content}
      </a>
    );
  }

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...sharedProps}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} {...sharedProps}>
      {content}
    </a>
  );
}

/** Centered contact CTA — phone, contact page, and office address. */
export default function GetInTouch({
  theme = "dark",
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  paragraphs,
  showDivider = false,
  showPreApproveCta = false,
  ctaHref = "#get-pre-approved",
  ctaLabel = "GET PRE-APPROVED →",
  renderParagraph = renderInlineLinks,
  contactBeforeBody = false,
  beforeContact,
  afterContact,
  id,
  showContactCards = true,
  className,
}: GetInTouchProps) {
  const isLight = theme === "light";
  const bodyParagraphs =
    paragraphs && paragraphs.length > 0
      ? paragraphs
      : description
        ? [description]
        : [];

  const sectionClass = isLight
    ? showDivider
      ? "w-full bg-white py-12 sm:py-16 lg:py-20 relative overflow-hidden border-t border-[#e8e0d0]/40"
      : "w-full bg-[#fcf9f3] py-12 sm:py-16 lg:py-20 relative overflow-hidden"
    : "w-full bg-[#052316] text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden";

  const headingClass = isLight
    ? "text-[24px] sm:text-[28px] lg:text-[40px] font-bold font-playfair leading-[1.2] text-[#052316]"
    : "text-[24px] sm:text-[28px] lg:text-[40px] font-bold font-playfair leading-[1.2]";

  const bodyClass = isLight
    ? "text-[#4e5b4e] text-[14px] sm:text-[16px] max-w-2xl mx-auto leading-relaxed"
    : "text-[#c8c8b8] text-[14px] sm:text-[16px] max-w-2xl mx-auto leading-relaxed";

  const ctaClass = isLight
    ? "inline-flex items-center justify-center min-h-11 bg-[#3fb364] hover:bg-[#359854] text-white font-bold text-[15px] sm:text-[16px] px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all shadow-sm"
    : "inline-flex items-center justify-center min-h-11 bg-[#3fb364] hover:bg-[#359854] text-white font-bold text-[15px] sm:text-[16px] px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all shadow-lg";

  const headingBlock = (
    <div className="space-y-4 sm:space-y-5">
      <h2 className={headingClass}>{title}</h2>
      {showDivider ? (
        <div
          className="mx-auto h-0.5 w-12 rounded-full bg-[#3fb364]"
          aria-hidden
        />
      ) : null}
      {!contactBeforeBody && bodyParagraphs.length > 0 ? (
        <div className="space-y-4 max-w-4xl mx-auto">
          {bodyParagraphs.map((paragraph, index) => (
            <p key={index} className={bodyClass}>
              {renderParagraph(paragraph)}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );

  const bodyBlock =
    contactBeforeBody && bodyParagraphs.length > 0 ? (
      <div className="space-y-4 max-w-4xl mx-auto">
        {bodyParagraphs.map((paragraph, index) => (
          <p key={index} className={bodyClass}>
            {renderParagraph(paragraph)}
          </p>
        ))}
      </div>
    ) : null;

  const contactCards = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6 w-full md:items-start">
      <ContactItem
        href={COMPANY.phoneHref}
        ariaLabel={`Call ${COMPANY.phoneDisplay}`}
        label="Phone"
        icon={<PhoneIcon />}
        value={COMPANY.phoneDisplay}
        isLight={isLight}
      />

      <ContactItem
        href={COMPANY.addressMapsUrl}
        ariaLabel={`Open map for ${COMPANY.addressFull}`}
        label="Address"
        icon={<PinIcon />}
        value={
          <>
            {COMPANY.addressLine1}
            <br />
            {COMPANY.addressLine2}
          </>
        }
        external
        isLight={isLight}
      />

      <ContactItem
        href="/contact-us/"
        ariaLabel="Go to Contact Us page"
        label="Contact"
        icon={<ChatIcon />}
        value="Contact Us"
        isLight={isLight}
      />
    </div>
  );

  return (
    <section
      id={id}
      className={[sectionClass, className].filter(Boolean).join(" ")}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 text-center space-y-8">
        {headingBlock}

        {beforeContact}

        {/* Canonical order: Phone → Address → Contact (never reorder for live parity) */}
        {showContactCards ? contactCards : null}

        {bodyBlock}

        {afterContact}

        {showPreApproveCta && (
          <div>
            {ctaHref.startsWith("#") ? (
              <a
                href={ctaHref}
                className={ctaClass}
                {...(ctaHref.includes("contact")
                  ? { "data-contact": "true" }
                  : ctaHref.includes("career-application")
                    ? { "data-career": "true" }
                    : { "data-preapproval": "true" })}
              >
                {ctaLabel}
              </a>
            ) : (
              <Link href={ctaHref} className={ctaClass}>
                {ctaLabel}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
