import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Announce from "../components/Announce";
import Content from "../components/Content";
import TimeLine from "../components/TimeLine";
import Event from "../components/Event";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div>
        <NavBar />
        <section id="home">
          <HeroSection />
          <Announce />
        </section>
        <section id="intro">
          <Content />
          <TimeLine />
        </section>
        <section id="events">
          <Event />
        </section>
        <section id="faq">
          <ContactUs />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Home;
