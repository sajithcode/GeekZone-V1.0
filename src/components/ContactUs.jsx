import React from "react";
import "./contactUs.css";
import Accordion from "./Accordion";
import {
  useScrollAnimation,
  fadeInUp,
  fadeInLeft,
} from "../hooks/useScrollAnimation";

const items = [
  {
    title: "What is GeekZone V1.0?",
    content: (
      <>
        {" "}
        <p className="mb-2 text-gray-500 dark:text-gray-400 text-sm sm:text-base">
          GeekZone V1.0 is a premier technology workshop designed to empower
          innovators and tech enthusiasts with hands-on experience in
          cutting-edge digital technologies. Organized by the IEEE Student
          Branch of Sabaragamuwa University of Sri Lanka.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
          This event features interactive sessions and live demonstrations,
          providing attendees with valuable insights, practical skills, and
          networking opportunities in the ever-evolving tech landscape.
        </p>
      </>
    ),
  },
  {
    title: "When and where is GeekZone V1.0?",
    content: (
      <>
        {" "}
        <p className="mb-2 text-gray-500 dark:text-gray-400 text-sm sm:text-base">
          GeekZone V1.0 will be held on March 26th, 2025, at the Main Auditorium
          of Sabaragamuwa University of Sri Lanka.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
          The event starts at 6:00 PM and will feature multiple sessions
          throughout the evening. Make sure to arrive early to secure your spot!
        </p>
      </>
    ),
  },
  {
    title: "Who can attend GeekZone V1.0?",
    content: (
      <>
        {" "}
        <p className="mb-2 text-gray-500 dark:text-gray-400 text-sm sm:text-base">
          GeekZone V1.0 is open to all technology enthusiasts, students,
          professionals, and anyone interested in learning about cutting-edge
          digital technologies and innovations.
        </p>
        <p className="mb-2 text-gray-500 dark:text-gray-400 text-sm sm:text-base">
          Whether you're a beginner or an experienced developer, this event
          offers something valuable for everyone looking to expand their tech
          knowledge and network.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
          Perfect for:
        </p>
        <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400 text-sm sm:text-base">
          <li>University students interested in technology</li>
          <li>Software developers and engineers</li>
          <li>Tech entrepreneurs and innovators</li>
          <li>Anyone curious about the latest tech trends</li>
        </ul>
      </>
    ),
  },
  {
    title: "What will I learn at GeekZone V1.0?",
    content: (
      <>
        {" "}
        <p className="mb-2 text-gray-500 dark:text-gray-400 text-sm sm:text-base">
          GeekZone V1.0 features interactive workshops and demonstrations
          covering various cutting-edge technologies including AI, machine
          learning, web development, mobile app development, and emerging tech
          trends.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
          You'll gain hands-on experience, practical skills, and insights from
          industry experts that will help you excel in the technology field.
        </p>
      </>
    ),
  },
];

function ContactUs() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative overflow-hidden bg-[#1E1E1E] py-16">
      {/* Header Section */}
      <div className="px-4 py-8 mx-auto max-w-7xl font-primary">
        <div
          ref={headerRef}
          className={`text-center mb-12 ${fadeInUp.initial} ${
            headerVisible ? fadeInUp.animate : ""
          } ${fadeInUp.transition}`}
        >
          {" "}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Frequently Asked </span>
            <span className="text-[#4FB777]">Questions</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Find answers to common questions about GeekZone V1.0
          </p>
        </div>
        {/* FAQ Content */}
        <div
          ref={contentRef}
          className={`max-w-4xl mx-auto ${fadeInUp.initial} ${
            contentVisible ? fadeInUp.animate : ""
          } ${fadeInUp.transition} delay-300`}
        >
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
