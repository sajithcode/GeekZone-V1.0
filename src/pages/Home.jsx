import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Announce from '../components/Announce'
import Content from '../components/Content'
import TimeLine from '../components/TimeLine'
import Event from '../components/Event'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <div>
        <NavBar />
        <HeroSection />
        <Announce />
        <Content />
        <TimeLine />
        <Event />
        <ContactUs />
        <Footer />
      </div>
    </>
  )
}

export default Home
