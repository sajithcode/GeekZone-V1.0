import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse" className="w-full">
      {items.map((item, index) => (
        <div key={index}>
          <h2 id={`accordion-collapse-heading-${index}`}>
            <button
              type="button"
              className={`flex items-center justify-between w-10/12 mx-auto p-5 font-medium rtl:text-right text-green-500 border ${
                index === 0 ? 'rounded-t-xl' : 'border-t-0'
              } rounded-t-xl rounded-b-xl focus:ring-4 focus:ring-[#] dark:focus:ring-green-800 dark:border-green-700 dark:text-gray-400 hover:bg-green-100 dark:hover:bg-green-900 gap-3`}
              data-accordion-target={`#accordion-collapse-body-${index}`}
              aria-expanded={openIndex === index}
              aria-controls={`accordion-collapse-body-${index}`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-base sm:text-lg md:text-xl">{item.title}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 sm:w-4 sm:h-4 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${index}`}
            className={`${openIndex === index ? '' : 'hidden'} w-10/12 mx-auto p-5 dark:border-gray-700 dark:bg-[#1E1E1E]`}
            aria-labelledby={`accordion-collapse-heading-${index}`}
          >
            <div className="p-5 border border-none dark:border-gray-700">
              <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400">
                {item.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;