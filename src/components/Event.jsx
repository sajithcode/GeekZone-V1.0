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

  const events = [
    {
      id: 1,
      image: "/image5.jpg",
      title: "Tech Innovation Summit 2024",
      description:
        "Explore cutting-edge technologies and meet industry leaders.",
      date: "Dec 15, 2024",
      featured: true,
    },
    {
      id: 2,
      image: "/image-1.jpg",
      title: "AI Workshop",
      description: "Hands-on machine learning session.",
      date: "Nov 20, 2024",
    },
    {
      id: 3,
      image: "/image-2.jpg",
      title: "Web Dev Bootcamp",
      description: "Modern web development techniques.",
      date: "Oct 18, 2024",
    },
    {
      id: 4,
      image: "/image-3.jpg",
      title: "Mobile App Dev",
      description: "Cross-platform mobile development.",
      date: "Sep 25, 2024",
    },
    {
      id: 5,
      image: "/image-4.jpg",
      title: "Robotics Competition",
      description: "Annual robotics challenge event.",
      date: "Aug 30, 2024",
    },
  ];
  return (
    <section id="events" className="bg-[#18181C] py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 lg:mb-20 ${fadeInUp.initial} ${
            headerVisible ? fadeInUp.animate : ""
          } ${fadeInUp.transition}`}
        >
          <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">IEEE</span>{" "}
            <span className="text-[#4FB777]">Events</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl max-w-2xl mx-auto leading-relaxed">
            Take a look at events hosted by IEEE SUSL Branch and join our
            community of innovators.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Featured Event - Large Card */}
          <div
            ref={featuredRef}
            className={`lg:col-span-8 ${scaleIn.initial} ${
              featuredVisible ? scaleIn.animate : ""
            } ${scaleIn.transition}`}
          >
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-700 hover:border-[#4FB777]/50">
              <div className="relative h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 overflow-hidden">
                <img
                  src={events[0].image}
                  alt={events[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Featured Badge */}
                <div className="absolute top-4 left-4 bg-[#4FB777] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured Event
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="text-[#4FB777] text-sm font-medium mb-2">
                    {events[0].date}
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                    {events[0].title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                    {events[0].description}
                  </p>
                  <button className="inline-flex items-center text-[#4FB777] hover:text-white text-sm font-semibold transition-colors duration-300">
                    Learn More
                    <svg
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Event Cards Grid */}
          <div
            ref={gridRef}
            className={`lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 ${
              fadeInRight.initial
            } ${gridVisible ? fadeInRight.animate : ""} ${
              fadeInRight.transition
            } delay-300`}
          >
            {events.slice(1).map((event, index) => (
              <div
                key={event.id}
                className={`group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-700 hover:border-[#4FB777]/30 ${
                  scaleIn.initial
                } ${gridVisible ? scaleIn.animate : ""}`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                <div className="relative h-32 sm:h-40 lg:h-32 xl:h-40 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="text-[#4FB777] text-xs sm:text-sm font-medium mb-2">
                    {event.date}
                  </div>
                  <h4 className="text-white text-sm sm:text-base lg:text-sm xl:text-base font-semibold mb-2 leading-tight line-clamp-2">
                    {event.title}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-3">
                    {event.description}
                  </p>
                  <div className="flex items-center text-[#4FB777] hover:text-white text-xs sm:text-sm font-medium transition-colors duration-300 cursor-pointer">
                    View Details
                    <svg
                      className="ml-1 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div
            className={`${fadeInUp.initial} ${
              gridVisible ? fadeInUp.animate : ""
            } ${fadeInUp.transition} delay-500`}
          >
            <button className="inline-flex items-center bg-gradient-to-r from-[#4FB777] to-[#3a8f5f] hover:from-[#3a8f5f] hover:to-[#4FB777] text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              View All Events
              <svg
                className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Event;
