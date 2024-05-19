import Carousel from "@/components/carousel";
import { Footer, Navbar } from "@/components";
import {
  Contact,
  KeyFeatures,
  LandingSection,
  Pricing,
  WhyWe,
} from "@/screens/home";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingSection />
      <Carousel />
      <KeyFeatures />
      <WhyWe />
      {/* <Pricing /> */}
      <Contact />
      <Footer />
    </>
  );
}
