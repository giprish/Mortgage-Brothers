import Link from "next/link";

type LoanProgramHeroProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
};

/**
 * Matches Divi `.et_pb_section_0` on azmortgagebrothers.com:
 * multiply-blended green gradient + photo, right-top position,
 * fluid 4vw / 2vw Montserrat type, oversized green CTA.
 */
export default function LoanProgramHero({
  title,
  subtitle,
  imageSrc,
}: LoanProgramHeroProps) {
  return (
    <section
      className="loan-program-hero relative w-full text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(90deg, rgb(52, 69, 37) 0%, rgb(50, 94, 63) 20%, rgba(255, 255, 255, 0) 100%), url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
        minHeight: "clamp(520px, 42vw, 820px)",
        padding: "clamp(72px, 5vw, 96px) 0",
        fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="w-[90%] max-w-[1920px] mx-auto px-2 sm:px-4 pt-[56px] lg:pt-[64px] pb-4 lg:pb-6">
        <h1
          className="text-white font-bold m-0 leading-[1] tracking-normal max-w-[18em]"
          style={{ fontSize: "clamp(28px, 4vw, 77px)" }}
        >
          {title}
        </h1>
        <h2
          className="text-white font-medium m-0 mt-2 mb-5 lg:mb-6 leading-[1.15] max-w-[28em]"
          style={{ fontSize: "clamp(16px, 2vw, 38px)" }}
        >
          {subtitle}
        </h2>
        <Link
          href="/#get-pre-approved"
          className="inline-flex items-center gap-[0.35em] text-[#eeeff4] font-medium no-underline transition-opacity hover:opacity-90"
          style={{
            fontSize: "clamp(15px, 2vw, 38px)",
            backgroundColor: "rgb(75, 128, 10)",
            borderRadius: 22,
            padding: "0.3em 2em 0.3em 0.7em",
            lineHeight: 1.35,
          }}
        >
          Start my preapproval
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className="shrink-0"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </Link>
        <div className="flex items-center gap-2.5 mt-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/home/fast-preapproval.png"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <p className="text-white text-[14px] m-0 font-normal leading-none">
            3 min / no credit impact
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .loan-program-hero {
            background-image: linear-gradient(90deg, rgb(52, 69, 37) 0%, rgb(50, 94, 63) 20%, rgba(255, 255, 255, 0) 100%), url(/home/az-mortgage-brothers-background.jpg) !important;
            background-position: center top !important;
          }
        }
      `}</style>
    </section>
  );
}
