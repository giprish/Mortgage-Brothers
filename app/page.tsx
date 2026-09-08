import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import BrokersAdvocate from "./component/home/BrokersAdvocate";
import HomeStatsBar from "./component/home/HomeStatsBar";
import {
  DeferredBrothers,
  DeferredCreditQuizCta,
  DeferredDreamHomeCta,
  DeferredFooter,
  DeferredHomeBlog,
  DeferredHomeCalculator,
  DeferredHomeContact,
  DeferredHomeFaq,
  DeferredHomeownershipSteps,
  DeferredLoanPrograms,
  DeferredPreApprovedForm,
  DeferredRecognition,
  DeferredReviews,
} from "./component/home/HomeDeferredSections";
import HomeFaqJsonLd from "./component/home/HomeFaqJsonLd";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HomeFaqJsonLd />
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <HomeStatsBar />
        {/* SSR: was LazyWhenVisible — desktop LCP was this section's copy, delayed by client JS */}
        <BrokersAdvocate />
        <DeferredBrothers />
        <DeferredRecognition />
        <DeferredHomeCalculator />
        <DeferredHomeownershipSteps />
        <DeferredLoanPrograms />
        <DeferredCreditQuizCta />
        <DeferredPreApprovedForm />
        <DeferredReviews />
        <DeferredHomeFaq />
        <DeferredHomeBlog />
        <DeferredDreamHomeCta />
        <DeferredHomeContact />
      </main>
      <DeferredFooter />
    </div>
  );
}
