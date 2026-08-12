import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import HomeStatsBar from "./component/home/HomeStatsBar";
import {
  DeferredReviews,
  DeferredHomeCalculator,
  DeferredPreApprovedForm,
} from "./component/home/HomeDeferredSections";
import BrokersAdvocate from "./component/home/BrokersAdvocate";
import Brothers from "./component/Brothers";
import Recognition from "./component/home/Recognition";
import HomeownershipSteps from "./component/home/HomeownershipSteps";
import LoanPrograms from "./component/LoanPrograms";
import CreditQuizCta from "./component/home/CreditQuizCta";
import HomeFaq from "./component/home/HomeFaq";
import HomeBlog from "./component/home/HomeBlog";
import DreamHomeCta from "./component/home/DreamHomeCta";
import HomeContact from "./component/home/HomeContact";
import Footer from "./component/Footer";

/**
 * Homepage: static server sections (no next/dynamic wrappers) for SEO + low TBT.
 * Only interactive / heavy islands are client-deferred.
 */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main id="main-content" className="flex-1 flex flex-col">
        <Hero />
        <HomeStatsBar />
        <DeferredReviews />

        <BrokersAdvocate />
        <Brothers />
        <Recognition />
        <DeferredHomeCalculator />
        <HomeownershipSteps />
        <LoanPrograms />
        <CreditQuizCta />
        <HomeFaq />
        <HomeBlog />
        <DreamHomeCta />
        <HomeContact />
        <DeferredPreApprovedForm />
      </main>

      <Footer />
    </div>
  );
}
