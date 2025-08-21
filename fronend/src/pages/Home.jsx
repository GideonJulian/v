import React from "react";
import Navbar from "../components/ui/Navbar";
import Hero from "../components/ui/Hero";
import ScrollAnimation from "../components/ui/SCrollAnimation";
import Oursolution from "../components/Oursolution";
import Whyus from "../components/Whyus";
import HowitWorks from "../components/HowitWorks";
import FeedBacks from "../components/FeedBacks";
import Stats from "../components/Stats";
import Strategic from "../components/Strategic";
import Faq from "../components/Faq";
import GetStarted from "../components/GetStarted";

const Home = () => {
  return (
    <div className="">
      <div className="w-ful">{/* <Navbar /> */}</div>
      <div>
        <Hero />
      </div>
      <div className="w-full p-4">
        <Oursolution />
      </div>
      <div>
        <Whyus />
      </div>
      <div>
        <HowitWorks />
      </div>
      <div>
        <FeedBacks />
      </div>
      <div>
        <Stats />
      </div>
      <div>
        <Strategic />
      </div>
      <div>
        <Faq />
      </div>
      <div>
        <GetStarted />
      </div>
    </div>
  );
};

export default Home;
