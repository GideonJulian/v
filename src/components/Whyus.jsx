import React from "react";
import whyusImg from "../assets/images/whyusImg.png";

const Whyus = () => {
  return (
    <div className="mt-10 max-w-[1200px] mx-auto px-4 overflow-hidden">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-[rgba(114,85,247,1)] to-[rgba(187,153,255,1)] bg-clip-text text-transparent">
            QFIsecure
          </span>
          ?
        </h1>
        <p className="text-[#F2F2F2] mt-2 text-sm sm:text-base md:text-lg">
          Our unique features and solutions deliver the best experience,
          ensuring maximum value for every transaction.
        </p>
      </div>

      <div className="mt-10 flex flex-row flex-wrap items-start gap-10">
        {/* Image Section */}
        <div className="min-w-[280px] max-w-full lg:max-w-[485px] w-full">
          <img
            src={whyusImg}
            alt="Why Choose Us"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Cards Section */}
        <div className="flex flex-col gap-10 min-w-[300px] flex-1">
          <div className="bg-[#141E384D] p-7 shadow-md rounded-lg">
            <h1 className="font-bold text-white text-lg">
              Unmatched Security Standards
            </h1>
            <p className="text-white  font-extralight mt-2">
              We prioritize the safety of your assets with end-to-end
              encryption, cold storage protocols, and industry-leading security
              practices that ensure your funds are always protected.
            </p>
          </div>

          <div className="bg-[#141E384D] p-7 shadow-md rounded-lg">
            <h1 className="font-bold text-white text-lg">
              Real-Time Access & Control
            </h1>
            <p className="text-white  font-extralight mt-2">
              Monitor, earn, and withdraw your assets whenever you want. Our
              platform gives you full visibility and control over your financial
              activities—no delays, no restrictions.
            </p>
          </div>

          <div className="bg-[#141E384D] p-7 shadow-md rounded-lg">
            <h1 className="font-bold text-white text-lg">
              Transparent & Fully Backed Reserves
            </h1>
            <p className="text-white  font-extralight mt-2">
              Monitor, earn, and withdraw your assets whenever you want. Our
              platform gives you full visibility and control over your financial
              activities—no delays, no restrictions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
