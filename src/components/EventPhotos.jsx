import React, { useState } from "react";
import {
  useScrollAnimation,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../hooks/useScrollAnimation";

function EventPhotos() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3 });
  const [galleryRef, galleryVisible] = useScrollAnimation({ threshold: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState("all");

  const photoCategories = [
    { id: "all", label: "All Photos" },
    { id: "workshops", label: "Workshops" },
    { id: "competitions", label: "Competitions" },
    { id: "seminars", label: "Seminars" },
    { id: "networking", label: "Networking" },
  ];

  const eventPhotos = [
    {
      id: 1,
      image: "/image-1.jpg",
      title: "AI Workshop 2024",
      category: "workshops",
      date: "March 2024",
      description: "Hands-on machine learning session with industry experts",
    },
    {
      id: 2,
      image: "/image-2.jpg",
      title: "Web Dev Bootcamp",
      category: "workshops",
      date: "February 2024",
      description: "Modern web development techniques and best practices",
    },
    {
      id: 3,
      image: "/image-3.jpg",
      title: "Mobile App Challenge",
      category: "competitions",
      date: "January 2024",
      description: "Cross-platform mobile development competition",
    },
    {
      id: 4,
      image: "/image-4.jpg",
      title: "Robotics Championship",
      category: "competitions",
      date: "December 2023",
      description: "Annual robotics competition showcasing innovation",
    },
    {
      id: 5,
      image: "/image5.jpg",
      title: "Tech Innovation Summit",
      category: "seminars",
      date: "November 2023",
      description: "Industry leaders sharing insights on emerging technologies",
    },
    {
      id: 6,
      image: "/image7.jpg",
      title: "IEEE Networking Event",
      category: "networking",
      date: "October 2023",
      description: "Professional networking and career development session",
    },
    {
      id: 7,
      image: "/image3.jpg",
      title: "Code Sprint Challenge",
      category: "competitions",
      date: "September 2023",
      description: "48-hour coding marathon with exciting prizes",
    },
    {
      id: 8,
      image: "/image-1.jpg",
      title: "IoT Workshop Series",
      category: "workshops",
      date: "August 2023",
      description: "Building smart devices with IoT technologies",
    },
  ];

  const filteredPhotos =
    selectedCategory === "all"
      ? eventPhotos
      : eventPhotos.filter((photo) => photo.category === selectedCategory);

  return (
    <section
      id="event-photos"
      className="bg-gradient-to-b from-[#18181C] to-[#1a1a1f] py-12 sm:py-16 lg:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 lg:mb-20 ${fadeInUp.initial} ${
            headerVisible ? fadeInUp.animate : ""
          } ${fadeInUp.transition}`}
        >
          <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Event</span>{" "}
            <span className="text-[#4FB777]">Gallery</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12">
            Relive the memorable moments from our past events and see the
            amazing work of our IEEE community.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {photoCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-[#4FB777] text-white shadow-lg scale-105"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-600 hover:border-[#4FB777]/50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div
          ref={galleryRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 ${
            fadeInUp.initial
          } ${galleryVisible ? fadeInUp.animate : ""} ${fadeInUp.transition}`}
        >
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className={`group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-[#4FB777]/50 cursor-pointer ${
                scaleIn.initial
              } ${galleryVisible ? scaleIn.animate : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 lg:h-48 xl:h-56 overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-[#4FB777]/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                  {
                    photoCategories.find((cat) => cat.id === photo.category)
                      ?.label
                  }
                </div>

                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-[#4FB777] text-xs font-medium mb-1">
                    {photo.date}
                  </div>
                  <h3 className="text-white text-sm font-semibold mb-2 leading-tight">
                    {photo.title}
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed line-clamp-2">
                    {photo.description}
                  </p>
                </div>

                {/* View Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                  <div className="bg-[#4FB777] rounded-full p-3 shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4">
                <h4 className="text-white text-sm font-semibold mb-1 leading-tight">
                  {photo.title}
                </h4>
                <p className="text-gray-400 text-xs">{photo.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredPhotos.length > 0 && (
          <div className="text-center mt-12 sm:mt-16">
            <div
              className={`${fadeInUp.initial} ${
                galleryVisible ? fadeInUp.animate : ""
              } ${fadeInUp.transition} delay-500`}
            >
              <button className="inline-flex items-center bg-gradient-to-r from-[#4FB777] to-[#3a8f5f] hover:from-[#3a8f5f] hover:to-[#4FB777] text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                View More Photos
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
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* No Photos Message */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">
              <svg
                className="w-16 h-16 mx-auto mb-4 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              No photos found in this category
            </div>
            <p className="text-gray-500 text-sm">
              Try selecting a different category or check back later for new
              photos.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default EventPhotos;
