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
      <div className="px-4 py-8 mx-auto max-w-7xl font-primary">
        {/* Header Section */}
        <div
          ref={headerRef}
          className={`text-center sm:text-left mb-8 ${fadeInUp.initial} ${
            headerVisible ? fadeInUp.animate : ""
          } ${fadeInUp.transition}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            <span className="text-white">IEEE</span>{" "}
            <span className="text-[#4FB777]">Events</span>
          </h2>
          <p className="text-white">
            Take a look at events hosted by IEEE SUSL Branch.
          </p>
        </div>
        {/* Image Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured Image */}
          <div
            ref={featuredRef}
            className={`w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg ${
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
            className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${
              fadeInRight.initial
            } ${gridVisible ? fadeInRight.animate : ""} ${
              fadeInRight.transition
            } delay-300`}
          >
            {[1, 2, 3, 4, 5].map((num, index) => (
              <div
                key={num}
                className={`w-full h-32 md:h-48 rounded-lg overflow-hidden shadow-md ${
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
