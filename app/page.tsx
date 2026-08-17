import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import HomeStatsBar from "./component/home/HomeStatsBar";
import {
  DeferredBrokersAdvocate,
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
        <DeferredReviews />
        <DeferredBrokersAdvocate />
        <DeferredBrothers />
        <DeferredRecognition />
        <DeferredHomeownershipSteps />
        <DeferredLoanPrograms />
        <DeferredHomeCalculator />
        <DeferredCreditQuizCta />
        <DeferredPreApprovedForm />
        <DeferredHomeFaq />
        <DeferredHomeBlog />
        <DeferredDreamHomeCta />
        <DeferredHomeContact />
      </main>
      <DeferredFooter />
    </div>
  );
}
