import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import LoanPrograms from "./component/LoanPrograms";
import RootedInArizona from "./component/RootedInArizona";
import Brothers from "./component/Brothers";
import Reviews from "./component/Reviews";
import CTA from "./component/CTA";
import PreApprovedForm from "./component/PreApprovedForm";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <LoanPrograms />
      <RootedInArizona />
      <Brothers />
      <Reviews />
      <CTA />
      <PreApprovedForm />
      <Footer />
    </div>
  );
}

