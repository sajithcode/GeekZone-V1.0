import React from "react";
import "./content.css";

function Content() {
  return (
    <>
      {/* Container for whatIsGeekZone */}
      <div className="whatIsGeekZone">
        <div className="px-4 py-8 mx-auto max-w-7xl font-primary">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Section */}
            <div className="leftSection flex flex-col space-y-6 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                What is <br />
                <span className="text-[#4FB777]">GeekZone?</span>
              </h2>{" "}
              <p className="text-base md:text-lg text-gray-300 leading-relaxed text-justify">
                GeekZone V1.0 is a premier technology workshop designed to
                empower innovators and tech enthusiasts with hands-on experience
                in cutting-edge digital technologies. Organized by the IEEE
                Student Branch of Sabaragamuwa University of Sri Lanka, this
                event features interactive sessions and live demonstrations,
                providing attendees with valuable insights, practical skills,
                and networking opportunities. GeekZone V1.0 aims to foster
                innovation and drive technological advancement, equipping
                participants with the knowledge and expertise to excel in the
                ever-evolving tech landscape.
              </p>
            </div>

            {/* Right Section */}
            <div className="rightSection flex justify-center md:justify-end">
              <img
                src="/Images/Robo.png"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
                alt="GeekZone Robot"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
