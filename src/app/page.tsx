import LandingSection from "./landing-section/page";
import KeyFeatures from "./key-features/page";
import WhyWe from "./why-we/page";
import Pricing from "./pricing/page";
import Contact from "./contact/page";
import Carousel from "@/components/carousel/Carousel";
import { Footer, Navbar } from "@/components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingSection />
      <Carousel />
      <KeyFeatures />
      <WhyWe />
      {/* <Pricing /> */}
      <Contact />
      <Footer />
    </div>
  );
}
