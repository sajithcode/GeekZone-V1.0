import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <h2>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-6 font-medium text-left text-white hover:text-[#4FB777] focus:outline-none focus:ring-2 focus:ring-[#4FB777]/30 rounded-xl transition-all duration-300 group`}
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
            >
              <span className="text-lg md:text-xl font-semibold">
                {item.title}
              </span>
              <svg
                className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                  openIndex === index
                    ? "rotate-180 text-[#4FB777]"
                    : "text-gray-400 group-hover:text-[#4FB777]"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </h2>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-6">
              <div className="pt-2 border-t border-gray-700/50">
                <div className="mt-4 text-gray-300 leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
