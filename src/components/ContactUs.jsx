import React from 'react'
import './contactUs.css'
import Accordion from "./Accordion";

const items = [
  {
    title: 'What is Flowbite?',
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.
        </p>
      </>
    ),
  },
  {
    title: 'Is there a Figma file available?',
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
        </p>
      </>
    ),
  },
  {
    title: 'What are the differences between Flowbite and Tailwind UI?',
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
        </p>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
        </p>
        <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
        <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
          <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
          <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
        </ul>
      </>
    ),
  },
];


function ContactUs() {
  return (
  <section class="relative overflow-hidden bg-[#1E1E1E] py-20 lg:py-[20px]">

    <h2 class="mb-6 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px] dark:text-white text-center">
      FAQ<span class="text-[#4FB777]">s</span>
    </h2>

    <div class="container mx-auto">
      
      <div class="flex flex-wrap lg:justify-between">

        {/* <div class="w-full px-4 lg:w-1/2 xl:w-6/12 flex items-center justify-center">
          <h6 class="hidden sm:flex items-center justify-center font-semibold uppercase md:justify-center">
            <img src="/contactus.png" alt="Icon" className="mr-3 h-[400px] w-[400px]" />
          </h6>
        </div> */}  

      <div className="p-10 w-full">
        <Accordion items={items} />
      </div>


        </div>
    </div>
  </section>
  )
}

export default ContactUs
