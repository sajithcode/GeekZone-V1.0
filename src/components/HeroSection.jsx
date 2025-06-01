import React, { useEffect, useState } from "react";
import BackGroundImage from "/hero-image.png";
import "./heroSection.css";
import Timer from "./Timer";
import TypewriterEffect from "./TypewriterEffect";

function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <section
        className="bg-white dark:bg-[#161519]"
        style={{
          backgroundImage: `url("/heo-background.png")`,
          backgroundRepeat: "no-repeat",
          WebkitBackgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Hero Content */}
        <div className="hero-content grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mb-5">
          <div
            className={`ml-auto mr-auto mt-5 place-self-center lg:col-span-7 text-center md:text-left transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button
              type="button"
              className={`font-secondary text-green-700 hover:text-white border-2 focus:ring-4 focus:outline-none focus:ring-green-300 font-semibold rounded-3xl text-lg px-4 py-1 text-center me-2 mb-2 dark:border-green-500 dark:text-white transition-all duration-1200 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              2025
            </button>

            <h1
              className={`font-primary max-w-2xl mb-4 text-white text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white tracking-wide mt-2 lg:mt-6 transition-all duration-1200 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              GeekZone <span>V1.0</span>
            </h1>
            <h3
              className={`text-white mb-3 transition-all duration-1200 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <TypewriterEffect />
            </h3>

            <div
              className={`transition-all duration-1200 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <Timer />
            </div>
          </div>

          {/* Floating Image */}
          <div
            className={`w-full flex justify-center items-center mt-5 lg:mt-0 lg:col-span-5 transition-all duration-1500 ease-out ${
              isLoaded
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-8 scale-95"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <img
              className="floating-image w-48 md:w-64 lg:w-80"
              src={BackGroundImage}
              alt="mockup"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between p-4 md:px-[70px] text-white bg-[#1E1E1E]">
          <div className="text-2xl font-bold mb-4 md:mb-0">GeekZone V1.0</div>
          <div className="text-center mb-4 md:mb-0">
            <span>Organized by</span>
            <br />
            <span
              className="text-2xl font-semibold
"
            >
              IEEE SUSL
            </span>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <img width={50} src="/maps-and-flags.png" alt="venue" />
            <div
              className="text-xl font-medium
 ml-2"
            >
              Main Auditorium
            </div>
          </div>
          <div className="flex items-center">
            <img width={50} src="/calendar.png" alt="date" />
            <div
              className="text-xl font-medium
 ml-2"
            >
              26th March 2025
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
