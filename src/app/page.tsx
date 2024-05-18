import Image from "next/image";
import Navbar from "./navbar/page";
import LandingSection from "./landing-section/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingSection />
    </div>
  );
}
