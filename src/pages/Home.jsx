import React from "react";
import Navbar from "../components/ui/Navbar";
import Hero from "../components/ui/Hero";
import ScrollAnimation from "../components/ui/SCrollAnimation";
import Oursolution from "../components/Oursolution";
import Whyus from "../components/Whyus";
import HowitWorks from "../components/HowitWorks";
import FeedBacks from "../components/FeedBacks";

const Home = () => {
  return (
    <div className="">
      <div className="w-ful">
        <Navbar />
      </div>
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
    </div>
  );
};

export default Home;
