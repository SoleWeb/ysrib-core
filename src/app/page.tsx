import Image from "next/image";
import Navbar from "./navbar/page";
import LandingSection from "./landing-section/page";
import Carousel from "../components/carousel";
import KeyFeatures from "./brands-section/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingSection />
      <Carousel />
      <KeyFeatures />
    </div>
  );
}
