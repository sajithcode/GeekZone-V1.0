import React from 'react'
import './content.css'

function Content() {
  return (
    <>

    <div className="whatIsGeekZone grid bg-end bg-no-repeat bg-cover xl:bg-center md:flex ">

      {/* Left Section */}
      <div className=" leftSection bg-transparent flex flex-col mt-6 mb-6 md:w-3/5 xl:w-3/5 relative space-y-4 order-1 md:order-none lg:mb-8 lg:mt-8">

          <text className="font-primary font-bold topic text-4xl xl:mt-6 self-center xl:text-6xl xl:self-start md:pl-10 xl:pl-20">
            What is <br/> <span className="topic topicHighlighted">GeekZone?</span>
          </text>

          <p className="font-secondary content text-xs text-center md:text-left px-10 md:pl-10 md:pr-0 xl:pl-20">
          GeekZone V1.0 is a premier technology workshop designed to empower innovators and tech enthusiasts with hands-on experience in cutting-edge digital technologies. Organized by the IEEE Student Branch of Sabaragamuwa University of Sri Lanka, this event features interactive sessions and live demonstrations, providing attendees with valuable insights, practical skills, and networking opportunities. GeekZone V1.0 aims to foster innovation and drive technological advancement, equipping participants with the knowledge and expertise to excel in the ever-evolving tech landscape.
          </p>

      </div>

      {/* Right Section */}
      <div className="rightSection bg-transparent w-full mt-6 mb-6 md:w-2/5 xl:w-2/5 hidden md:flex justify-center  md:items-center lg:items-end lg:mb-8 lg:mt-8">
        <img src='/Images/Robo.png' className='sectionImage md:h-70 lg:h-80 xl:h-100 '/>
      </div>
    </div>
      
    </>
  )
}

export default Content
