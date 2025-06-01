import React, { useState } from "react";

const AccordionItem = ({ item, index, isOpen, onToggle }) => {
  return (
    <div
      className={`bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 translate-y-4 animate-fade-in-up`}
      style={{
        animationDelay: `${index * 150}ms`,
        animationFillMode: "forwards",
      }}
    >
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-6 font-medium text-left text-white hover:text-[#4FB777] focus:outline-none focus:ring-2 focus:ring-[#4FB777]/30 rounded-xl transition-all duration-300 group`}
          onClick={() => onToggle(index)}
          aria-expanded={isOpen}
        >
          <span className="text-lg md:text-xl font-semibold">{item.title}</span>
          <svg
            className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
              isOpen
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
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
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
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          index={index}
          isOpen={openIndex === index}
          onToggle={toggleAccordion}
        />
      ))}
    </div>
  );
};

export default Accordion;
