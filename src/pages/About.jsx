import React from "react";
import Navbar from "../components/ui/Navbar";
import AboutHero from "../components/ui/AboutHero";
import OurMission from "../components/Mission";
import CoreValues from "../components/Values";
import Faq from "../components/Faq";
import FeedBacks from "../components/FeedBacks";
import GetStarted from "../components/GetStarted";

const About = () => {
  return (
    <div>
      <div>
        <AboutHero />
      </div>
      <div>
        <OurMission />
      </div>
      <div>
        <CoreValues />
      </div>
      <div className="py-20">
        <FeedBacks />
      </div>
      <div>
        <Faq />
      </div>
      <div className="py-20">
        <GetStarted />
      </div>
    </div>
  );
};

export default About;
