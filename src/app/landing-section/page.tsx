"use client";
import { UnderConstruction } from "@/components";
import { toggle } from "@/utils/functions/toggle";
import { useState } from "react";

const LandingSection = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <section className="lg:py-20 py-10 bg-gradient-to-r from gray-00 to-gray-200 spacey-10">
      <div className="container mx-auto text-center">
        <div
          className="text-6xl flex justify-center font-bold lg:px-20 pb-10
            text-gradient
            bg-gradient-to-r
            from-blue-500
            to-green-300
            bg-clip-text
            text-transparent"
        >
          Build a production and start exploring Open-Source
        </div>

        <p
          className="text-lg lg:text-xl md-10
            bg-gradient-to-r
            from-black
            to-gray-400
            bg-clip-text
            text-transparent
            font-bold"
        >
          No matter what you Build, Yasrib Software provides everything to make
          open-source better and easy to Build.
        </p>
        <div className="flex gap-4 justify-center pt-10">
          <button
            className="bg-blue-500 text-white px-10 py-4 rounded-md text-lg font-bold"
            onClick={() => toggle(setOpen)}
          >
            Get Started
          </button>
          <UnderConstruction open={open} onOpenChange={setOpen} />
          <button
            className="bg-gray-600 text-white px-10 py-4 rounded-md text-lg font-bold"
            onClick={() => {
              toggle(setOpen);
            }}
          >
            Learn More
          </button>
        </div>

        <div className="pt-10">
          <video className="rounded-xl" autoPlay muted loop>
            <source src="/content/videos/vdo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
