import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import HomeStatsBar from "./component/home/HomeStatsBar";
import BrokersAdvocate from "./component/home/BrokersAdvocate";
import Brothers from "./component/Brothers";
import Recognition from "./component/home/Recognition";
import HomeCalculator from "./component/home/HomeCalculator";
import HomeownershipSteps from "./component/home/HomeownershipSteps";
import LoanPrograms from "./component/LoanPrograms";
import CreditQuizCta from "./component/home/CreditQuizCta";
import Reviews from "./component/Reviews";
import HomeFaq from "./component/home/HomeFaq";
import HomeBlog from "./component/home/HomeBlog";
import DreamHomeCta from "./component/home/DreamHomeCta";
import HomeContact from "./component/home/HomeContact";
import PreApprovedForm from "./component/PreApprovedForm";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <HomeStatsBar />
      <BrokersAdvocate />
      <Brothers />
      <Recognition />
      <HomeCalculator />
      <HomeownershipSteps />
      <LoanPrograms />
      <CreditQuizCta />
      <Reviews />
      <HomeFaq />
      <HomeBlog />
      <DreamHomeCta />
      <HomeContact />
      <PreApprovedForm />
      <Footer />
    </div>
  );
}
