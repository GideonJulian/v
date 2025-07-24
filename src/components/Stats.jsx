import React from "react";

const Stats = () => {
  return (
    <div className="mt-10 max-w-[1200px] mx-auto px-4 flex items-center justify-center py-10">
      <div className="w-full p-6 md:p-14 text-white bg-[linear-gradient(90deg,_#0E0E1300_5%,_#10182D80)]">
        <div>
          <h1 className="font-bold text-2xl md:text-3xl text-white mb-8 text-center">
            Some all-star stats
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between text-center gap-8">
          <div>
            <h1 className="font-bold text-white text-3xl md:text-4xl ">
              $95 Million
            </h1>
            <p className="text-center text-sm">Total Crypto Backedup</p>
          </div>
          <div>
            <h1 className="font-bold text-white text-3xl md:text-4xl">
              20k+
            </h1>
            <p className="text-center text-sm">Total Crypto Backedup</p>
          </div>
          <div>
            <h1 className="font-bold text-white text-3xl md:text-4xl">
              $95 Million
            </h1>
            <p className="text-center text-sm">Total Crypto Backedup</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
