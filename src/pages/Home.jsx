import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import AboutUs from "../components/AboutUs/AboutUs";
import WhyChooseUs from "../components/WhyChoosUs/WhyChooseUs";
import Cta from "../components/CallToAction/Cta";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Cta />
      <Testimonials />
    </main>
  );
};

export default Home;
