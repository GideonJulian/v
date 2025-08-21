import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import bg from "../../assets/images/bg.png";
import blackstar from "../../assets/icons/blackstar.png";

const AboutHero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { number: 500, unit: "K+", label: "Active Traders" },
    { number: 10, unit: "B+", label: "Volume Traded" },
    { number: 99.99, unit: "%", label: "Uptime" },
    { number: 180, unit: "+", label: "Countries" },
  ];

  return (
    <div className="w-full pt-38 pb-14 relative">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="flex flex-col items-center justify-center max-w-[1200px] mx-auto px-4">
        <div>
          <div className="relative px-6 py-4 cursor-pointer rounded-full bg-gradient-to-r from-purple-600 to-purple-400 text-black font-medium flex items-center justify-center gap-2">
            <img src={blackstar} alt="" />
            <span>About NeuraFlow</span>
          </div>
        </div>
        <div className="mt-3 text-center">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Redefining Digital{" "}
            <span className="from-[rgba(114,85,247,1)] to-[rgba(187,153,255,1)] bg-clip-text text-transparent bg-gradient-to-r">
              Finance
            </span>
          </span>
          <p className="text-center max-w-[842px] py-4 text-[#8FA2BC]">
            We're not just another trading platform. We're pioneering the next
            generation of financial technology with quantum computing, AI, and
            uncompromising security.
          </p>
        </div>

        {/* Stats Section */}
        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full py-10"
        >
          {stats.map((item, idx) => (
            <div key={idx} className="text-center">
              <h1 className="from-[rgba(114,85,247,1)] to-[rgba(187,153,255,1)] bg-clip-text text-transparent bg-gradient-to-r text-3xl md:text-5xl font-bold">
                {inView ? <CountUp end={item.number} duration={2} /> : 0}
                {item.unit}
              </h1>
              <p className="text-[#8FA2BC] mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
