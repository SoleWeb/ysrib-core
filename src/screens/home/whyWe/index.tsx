import Image from "next/image";

const WhyWe = () => {
  return (
    <div className="flex lg:p-10 md:p-4 flex-col lg:flex-row lg:justify-evenly">
      <div className="flex-col lg:flex-row gap-6 lg:px-10 flex  items-center">
        <div className="lg:w-2/3 w-full">
          <video className="rounded-xl" autoPlay muted loop>
            <source src="/content/videos/vdo.mp4" type="video/mp4" />
          </video>

          <div className="text-2xl mb-8 pt-10">
            Built for all businesses and communities, Yasrib is the only
            platform you need to grow your business.
          </div>
        </div>

        <div className="flex-col border p-4 rounded-xl lg:w-2/5 w-full">
          <div
            className="text-4xl flex justify-center text-center
                lg:text-5xl
                bg-gradient-to-l
                from-yellow-300
                to-blue-300
                bg-clip-text
                font-bold
                text-transparent"
          >
            Fully Optimized Packages
          </div>

          <div className="lg:px-10 space-y-6 flex-col items-center justify-center">
            <div className="flex-col">
              <div className="text-lg pt-10 flex items-center gap-5">
                <Image
                  src="/images/icons/icon-distribution-package-3.png"
                  alt="feature-1"
                  width={70}
                  height={70}
                />
                <div className="flex flex-col gap-2">
                  Choose from a variety of packages to get started.
                </div>
              </div>
            </div>

            <div className="flex-col">
              <div className="text-lg flex items-center gap-5">
                <Image
                  src="/images/icons/icon-build.png"
                  alt="feature-1"
                  width={70}
                  height={70}
                />
                <div className="flex flex-col gap-2">
                  Optimize and escalate your build.
                </div>
              </div>
            </div>

            <div className="flex-col">
              <div className="text-lg flex items-center gap-5">
                <Image
                  src="/images/icons/icon-opensource.png"
                  alt="feature-1"
                  width={70}
                  height={70}
                />
                <div>Its Open-Source, Free Of Cost.</div>
              </div>
            </div>

            <div className="flex-col">
              <div className="text-lg flex items-center gap-5">
                <Image
                  src="/images/icons/icon-security.png"
                  alt="feature-1"
                  width={70}
                  height={70}
                />
                <div>
                  Best in class security to protect your data and your
                  customers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWe;
