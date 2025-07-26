import React from "react";
import heroImg from "../../assets/images/heroImg.png";
import ScrollAnimation from "./SCrollAnimation";
import GradientText from "./GradientText";
import ParticlesBackground from "./ParticlesBackground";
import bg from "../../assets/images/bg.png";
import { useNavigate } from "react-router-dom";
const Hero = () => {
   const navigate = useNavigate();
  return (
    <div className="w-full pt-20 pb-14 relative">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-32 mt-14 items-center justify-between px-4">
        <div className="text-center lg:text-left">
          <h1 className="text-[#808EA3] font-bold text-3xl sm:text-4xl md:text-5xl max-w-[500px] leading-tight">
            <span>
              {" "}
              Quantum <GradientText text={"Financial"} />{" "}
            </span>
            Security & Cloud Wallet
          </h1>
          <p className="text-[#808EA3] mt-5 max-w-[500px] mx-auto lg:mx-0 text-base sm:text-lg">
            The safest quantum ledger to backup your digital assets and funds.
            Prepare for global events with military-grade security and
            cutting-edge technology.
          </p>
          <div className="flex flex-row items-center gap-4 sm:gap-5 mt-6 justify-center lg:justify-start">
            <button    onClick={() => navigate("/signup")} className="relative px-6 py-2 cursor-pointer rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 text-black font-medium flex items-center gap-2">
              Sign Up
              <span className="text-lg">→</span>
            </button>
            <button className="relative px-6 py-3 cursor-pointer rounded-lg text-white border border-[#7255F780] bg-[#0D141C] font-medium flex items-center gap-2">
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <img
            src={heroImg}
            alt="Hero"
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[551px]"
          />
        </div>
      </div>
      <div className="mt-10">
        <ScrollAnimation />
      </div>
    </div>
  );
};

export default Hero;
