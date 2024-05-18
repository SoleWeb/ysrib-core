import Image from "next/image";
import Navbar from "./navbar/page";
import LandingSection from "./landing-section/page";
import Carousel from "../components/carousel";
import KeyFeatures from "./key-features/page";
import WhyWe from "./why-we/page";
import Pricing from "./pricing/page";
import Contact from "./contact/page";
import Footer from "./footer/page";
import { UnderConstruction } from "@/utils/alert/underConstruction";

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
