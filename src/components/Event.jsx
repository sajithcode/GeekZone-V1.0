import React from "react";
import {
  useScrollAnimation,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../hooks/useScrollAnimation";

function Event() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3 });
  const [featuredRef, featuredVisible] = useScrollAnimation({ threshold: 0.3 });
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.2 });
  return (
    <section id="events" className="bg-[#18181C]">
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mx-auto max-w-screen-xl font-primary">
        {/* Header Section */}
        <div
          ref={headerRef}
          className={`text-center sm:text-left mb-8 sm:mb-12 ${
            fadeInUp.initial
          } ${headerVisible ? fadeInUp.animate : ""} ${fadeInUp.transition}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
            <span className="text-white">IEEE</span>{" "}
            <span className="text-[#4FB777]">Events</span>
          </h2>
          <p className="text-white text-sm sm:text-base lg:text-lg">
            Take a look at events hosted by IEEE SUSL Branch.
          </p>
        </div>{" "}
        {/* Image Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Featured Image */}
          <div
            ref={featuredRef}
            className={`w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg ${
              scaleIn.initial
            } ${featuredVisible ? scaleIn.animate : ""} ${scaleIn.transition}`}
          >
            <img
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              src="/image5.jpg"
              alt="Featured Event"
              loading="lazy"
            />
          </div>

          {/* Small Images Grid */}
          <div
            ref={gridRef}
            className={`grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 ${
              fadeInRight.initial
            } ${gridVisible ? fadeInRight.animate : ""} ${
              fadeInRight.transition
            } delay-300`}
          >
            {[1, 2, 3, 4].map((num, index) => (
              <div
                key={num}
                className={`w-full h-24 sm:h-32 md:h-40 lg:h-44 rounded-lg overflow-hidden shadow-md ${
                  scaleIn.initial
                } ${
                  gridVisible ? scaleIn.animate : ""
                } transition-all duration-700 ease-out`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <img
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  src={`/image-${num}.jpg`}
                  alt={`Event ${num}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Event;
