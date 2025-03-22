import React from 'react'
import './content.css'

function Content() {
  return (
    <>

{/* h-screen for whatIsGeekZone */}
    <div className="whatIsGeekZone grid bg-end bg-no-repeat bg-cover xl:bg-center md:flex ">
      {/* h-screen for leftSection */}
      <div className=" leftSection bg-transparent flex flex-col  md:w-5/4 xl:w-1/2  relative   space-y-4 order-1 md:order-none">

<text className="font-primary font-bold topic text-4xl self-center pt-10 pb-1 md:pt-10 md:text-5xl md:pb-5 xl:text-6xl xl:pt-30 xl:self-start md:pl-10 xl:pl-20">
            What is <br/> <span className="topic topicHighlighted">GeekZone?</span>
          </text>

          <p className="font-secondary content text-base text-center md:text-left px-10 md:pl-10 md:pr-0 xl:pl-20">
          GeekZone V1.0 is a premier technology workshop designed to empower innovators and tech enthusiasts with hands-on experience in cutting-edge digital technologies. Organized by the IEEE Student Branch of Sabaragamuwa University of Sri Lanka, this event features interactive sessions and live demonstrations, providing attendees with valuable insights, practical skills, and networking opportunities. GeekZone V1.0 aims to foster innovation and drive technological advancement, equipping participants with the knowledge and expertise to excel in the ever-evolving tech landscape.
          </p>

          <img src='/Images/GZ-logo-1.png' className='logo object-cover size-35 self-center'/>

      </div>

{/* md:h-screen for rightSection bg-yellow-400  */}
      <div className="rightSection  bg-transparent w-full pt-10 pb-10 md:pr-5 xl:pr-10 md:w-1/2   hidden md:flex sm:flex justify-center items-center">
        <img src='/Images/Robo.png' className='sectionImage'/>
      </div>
    </div>
      
    </>
  )
}

export default Content
