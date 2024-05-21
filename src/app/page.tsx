import Carousel from "@/components/carousel";
import { Footer, MovingCarousel, Navbar } from "@/components";
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
      {/* <Carousel /> */}
      <div className="mb-10">
        <div className="items-center justify-center flex text-3xl font-bold lg:pb-6 px-8 bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent">
          More than 100+ brands have built their business with Yasrib Software
        </div>
        <MovingCarousel />
      </div>
      <KeyFeatures />
      <WhyWe />
      {/* <Pricing /> */}
      <Contact />
      <Footer />
    </>
  );
}
