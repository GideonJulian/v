import React from "react";
import GradientText from "./ui/GradientText";
import solution1 from "../assets/images/solution1.png";
import solution2 from "../assets/images/solution2.png";

const Oursolution = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      {/* Header */}
      <div className="text-center">
        <h1>
          <span className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Our{" "}
            <GradientText
              text={"Soulution"}
              className="text-3xl sm:text-4xl md:text-5xl"
            />
          </span>
        </h1>
        <p className="text-[#808EA3] text-center mt-2 text-sm sm:text-base">
          Efficient solutions tailored to your financial needs, designed to keep
          you ahead.
        </p>
      </div>

      {/* Solutions */}
      <div className="mt-10">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Card 1 */}
          <div className="bg-[#141E384D] p-5 rounded-lg shadow-md w-full lg:max-w-[592px]">
            <h1 className="text-left font-bold text-white text-xl sm:text-2xl">
              Risk-Free Management
            </h1>
            <p className="mt-2 text-white text-sm sm:text-base">
              Take full control of your investments with our innovative tools
              designed to minimize risk. Execute trades and manage funds across
              major crypto and stock exchanges confidently.
            </p>
            <div>
              <img
                src={solution1}
                className="w-full max-w-[450px] mx-auto mt-6"
                alt="Risk-Free Management"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#141E384D] p-5 rounded-lg shadow-md w-full lg:max-w-[592px]">
            <h1 className="text-left font-bold text-white text-xl sm:text-2xl">
              Secure Backup & Withdrawals
            </h1>
            <p className="mt-2 text-white text-sm sm:text-base">
              Your digital assets are always safe and accessible. With 24/7
              tracking and instant withdrawal features, we ensure your funds are
              available when you need them, with full reserve support.
            </p>
            <div>
              <img
                src={solution2}
                className="w-full max-w-[450px] mx-auto mt-6"
                alt="Secure Backup & Withdrawals"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oursolution;
