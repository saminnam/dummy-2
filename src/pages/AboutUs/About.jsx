import React from "react";
import GlobalTitle from "../../components/Global/GlobalTitle";
import Team from "./Team";
import Intro from "./Intro";
import OurClients from "./OurClients";
import CommonCta from "../../components/CommonCta";
import StatusTail from "../../components/StatusTail";
import Testimonials from "../../components/Testimonials/Testimonials";

const About = () => {
  return (
    <>
      <GlobalTitle title={"About Us"} />
      <Intro />
      <OurClients />
      <StatusTail />
      <Team />
      {/* <Testimonials /> */}
      <CommonCta />
    </>
  );
};

export default About;
