import React from "react";
import heroImg from "../../assets/images/heroImg.png";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-32 mt-14 items-center justify-between px-4">
        <div className="text-center lg:text-left">
          <h1 className="text-[#808EA3] font-bold text-3xl sm:text-4xl md:text-5xl max-w-[500px] leading-tight">
            Quantum{" "}
            <span className="bg-gradient-to-r from-[rgba(114,85,247,1)] to-[rgba(187,153,255,1)] bg-clip-text text-transparent">
              Financial
            </span>{" "}
            Security & Cloud Wallet
          </h1>
          <p className="text-[#808EA3] mt-5 max-w-[500px] mx-auto lg:mx-0 text-base sm:text-lg">
            The safest quantum ledger to backup your digital assets and funds.
            Prepare for global events with military-grade security and
            cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mt-6 justify-center lg:justify-start">
            <button className="relative px-6 py-3 cursor-pointer rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 text-black font-medium flex items-center gap-2">
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
    </div>
  );
};

export default Hero;
