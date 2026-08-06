import dynamic from "next/dynamic";
import { Suspense } from "react";

// ── Above-fold (eager) ────────────────────────────────────────────────────────
// These components are visible immediately on page load — import eagerly so
// they are server-rendered and included in the first HTML payload.
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import HomeStatsBar from "./component/home/HomeStatsBar";
import Reviews from "./component/Reviews";

// ── Below-fold (lazy) ─────────────────────────────────────────────────────────
// Everything below the first screen is code-split and loaded only after the
// browser has painted the above-fold content. This dramatically reduces TBT,
// improves FCP, and pushes LCP earlier.
const BrokersAdvocate     = dynamic(() => import("./component/home/BrokersAdvocate"),    { ssr: true });
const Brothers            = dynamic(() => import("./component/Brothers"),                { ssr: true });
const Recognition         = dynamic(() => import("./component/home/Recognition"),        { ssr: true });
const HomeCalculator      = dynamic(() => import("./component/home/HomeCalculator"),     { ssr: true });
const HomeownershipSteps  = dynamic(() => import("./component/home/HomeownershipSteps"), { ssr: true });
const LoanPrograms        = dynamic(() => import("./component/LoanPrograms"),            { ssr: true });
const CreditQuizCta       = dynamic(() => import("./component/home/CreditQuizCta"),      { ssr: true });
const HomeFaq             = dynamic(() => import("./component/home/HomeFaq"),            { ssr: true });
const HomeBlog            = dynamic(() => import("./component/home/HomeBlog"),           { ssr: true });
const DreamHomeCta        = dynamic(() => import("./component/home/DreamHomeCta"),       { ssr: true });
const HomeContact         = dynamic(() => import("./component/home/HomeContact"),        { ssr: true });
const PreApprovedForm     = dynamic(() => import("./component/PreApprovedForm"),         { ssr: true });
const Footer              = dynamic(() => import("./component/Footer"),                  { ssr: true });

// Minimal skeleton shown while a lazy section hydrates on the client
const SectionSkeleton = () => (
  <div className="w-full py-16 bg-transparent" aria-hidden="true" />
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Critical above-fold ── */}
      <Navbar />

      <main id="main-content" className="flex-1 flex flex-col">
        <Hero />
        <HomeStatsBar />
        <Reviews />

        {/* ── Below-fold with Suspense boundaries ── */}
        <Suspense fallback={<SectionSkeleton />}>
          <BrokersAdvocate />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Brothers />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Recognition />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <HomeCalculator />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <HomeownershipSteps />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <LoanPrograms />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <CreditQuizCta />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <HomeFaq />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <HomeBlog />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <DreamHomeCta />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <HomeContact />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <PreApprovedForm />
        </Suspense>
      </main>

      <Suspense fallback={<SectionSkeleton />}>
        <Footer />
      </Suspense>
    </div>
  );
}
