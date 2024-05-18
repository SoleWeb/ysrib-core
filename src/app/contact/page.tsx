'use client'
import { UnderConstruction } from "@/utils/alert/underConstruction";
import { toggle } from "@/utils/functions/toggle";
import { useState } from "react";

const Contact = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="lg:py-20 p-5">
      <UnderConstruction open={open} onOpenChange={setOpen} />
      <div className="border-[1px] lg:w-2/3 mx-auto p-10 rounded-xl">
        <div className="text-4xl font-bold mb-5">
          Start optimising your build today.
        </div>
        <div>
          Curious about how Yasirb can help your production? Get in touch with
          our team to learn more about our platform/packages and how we can help
          you enhance and empower yoyur build.
        </div>

        <button className="bg-blue-500 text-white px-6 py-3 lg:w-1/4 mt-5 rounded-lg" onClick={()=>toggle(setOpen)}>
          Contact Sales
        </button>
      </div>
    </div>
  );
};

export default Contact;
