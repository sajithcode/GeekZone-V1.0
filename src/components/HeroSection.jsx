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
        {" "}
        {/* Hero Content */}
        <div className="hero-content grid max-w-screen-xl px-4 py-8 mx-auto gap-8 xl:gap-12 lg:py-16 lg:grid-cols-12 mb-5">
          <div
            className={`ml-auto mr-auto mt-5 place-self-center lg:col-span-7 text-center lg:text-left transition-all duration-1000 ease-out ${
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
        </div>{" "}
        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8 p-4 sm:p-6 md:px-8 lg:px-16 xl:px-20 text-white bg-[#1E1E1E]">
          <div className="text-xl sm:text-2xl font-bold text-center lg:text-left">
            GeekZone V1.0
          </div>
          <div className="text-center">
            <span className="text-sm sm:text-base">Organized by</span>
            <br />
            <span className="text-lg sm:text-xl lg:text-2xl font-semibold">
              IEEE SUSL
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center">
              <img
                width={40}
                height={40}
                src="/maps-and-flags.png"
                alt="venue"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <div className="text-base sm:text-lg lg:text-xl font-medium ml-2">
                Main Auditorium
              </div>
            </div>
            <div className="flex items-center">
              <img
                width={40}
                height={40}
                src="/calendar.png"
                alt="date"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <div className="text-base sm:text-lg lg:text-xl font-medium ml-2">
                26th March 2025
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
