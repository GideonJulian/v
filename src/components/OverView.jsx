import React from "react";

const OverView = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div>
          <p className="text-[#8FA2BC]">Balance</p>
          <h1 className="font-bold text-2xl bg-gradient-to-r from-[#7255F7] to-[#BB99FF] text-transparent bg-clip-text">
            1.2456 BTC
          </h1>
          <p className="text-[#8FA2BC] text-lg"> $119,125.34</p>
        </div>
        <div className="mt-4">
          <p className="text-[#8FA2BC]">Network</p>
          <h2 className="">Bitcoin</h2>
        </div>
      </div>
    </div>
  );
};

export default OverView;
