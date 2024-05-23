import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      className="flex pt-20 lg:p-10 md:p-4 flex-col bg-primary-foreground"
      style={{paddingTop:'6rem!important',marginTop:'6rem!important'}}
      id="about-us"
    >
      <div className="w-full flex justify-center items-center pb-8 my-4">
        <span
          className="text-6xl bg-gradient-to-l from-yellow-300 to-blue-300 bg-clip-text font-bold text-transparent text-center">
          Why work with us
        </span>
      </div>
      <div className="flex-col lg:flex-row gap-6 lg:px-10 flex items-center">
        <div className="lg:w-2/3 w-full">
          <video className="lg:rounded-xl md:rounded-xl" autoPlay muted loop>
            <source src="/content/videos/vdo.mp4" type="video/mp4" />
          </video>

          <div className="text-2xl mb-8 pt-10 w-full text-center">
            Built for all businesses and communities, Yasrib is the only
            platform you need to grow your business.
          </div>
        </div>

        <div className="flex-col border p-4 rounded-xl lg:w-2/5 w-11/12">
          <div
            className="
            text-4xl 
            flex 
            justify-center 
            text-center
            lg:text-4xl
            bg-gradient-to-r
            from-gray-900
            to-gray-700
            dark:bg-gradient-to-r
            dark:from-slate-400
            dark:to-gray-600
            bg-clip-text
            font-bold
            text-transparent"
          >
            Fully Optimized Packages
          </div>

          <div className="lg:px-4 space-y-6 flex-col items-center justify-center">
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
    </section>
  );
};

export default AboutUs;
