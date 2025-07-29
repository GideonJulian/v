import React from "react";

const OverView = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-[#0A0A0B] p-4 rounded-lg">
      {/* Left Section */}
      <div>
        <div>
          <p className="text-[#8FA2BC] text-sm">Balance</p>
          <h1 className="font-bold text-2xl bg-gradient-to-r from-[#7255F7] to-[#BB99FF] text-transparent bg-clip-text">
            1.2456 BTC
          </h1>
          <p className="text-[#8FA2BC] text-lg">$119,125.34</p>
        </div>
        <div className="mt-4">
          <p className="text-[#8FA2BC] text-sm">Network</p>
          <h2 className="text-white text-lg">Bitcoin</h2>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full md:w-auto">
        {/* Send BTC Button */}
        <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#7255F7] to-[#BB99FF] text-white w-full sm:w-48">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 -rotate-45"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
          Send BTC
        </button>

        {/* Receive BTC Button */}
        <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#05080F] border border-[#0E1425] text-white w-full sm:w-48">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          Receive BTC
        </button>
      </div>
    </div>
  );
};

export default OverView;
