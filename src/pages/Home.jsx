import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Announce from "../components/Announce";
import Content from "../components/Content";
import TimeLine from "../components/TimeLine";
import Event from "../components/Event";
import EventPhotos from "../components/EventPhotos";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";

function Home() {
  return (
    <>
      <ScrollProgress />
      <NavBar />
      <section id="home" className="pt-20">
        <HeroSection />
        <Announce />
      </section>
      <section id="intro">
        <Content />
        <TimeLine />
      </section>{" "}
      {/* <section id="events">
        <Event />
      </section> */}
      <section id="event-photos">
        <EventPhotos />
      </section>
      <section id="faq">
        <ContactUs />
      </section>
      <Footer />
    </>
  );
}

export default Home;
