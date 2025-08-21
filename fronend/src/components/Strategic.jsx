import React from "react";
import stra1 from "../assets/images/stra1.png";
import stra2 from "../assets/images/stra2.png";
import stra3 from "../assets/images/stra3.png";
import stra4 from "../assets/images/stra4.png";

const Strategic = () => {
  return (
    <div className="mt-10 max-w-[1200px] mx-auto px-4 py-10">
      <div>
        <h1 className="font-bold text-2xl md:text-3xl text-white mb-8 text-center">
          Strategic Partnerships
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-6 md:gap-10">
        <img src={stra4} alt="stra4" className="w-32 md:w-40 lg:w-40" />
        <img src={stra3} alt="stra3" className="w-32 md:w-40 lg:w-40" />
        <img src={stra2} alt="stra2" className="w-32 md:w-40 lg:w-40" />
        <img src={stra1} alt="stra1" className="w-32 md:w-40 lg:w-40" />
      </div>
    </div>
  );
};

export default Strategic;
