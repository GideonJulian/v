import { Users } from "lucide-react";
import React from "react";

const OverView = () => {
  return (
    <div className="flex flex-col md:flex-row  md:justify-between gap-6 bg-[#0A0A0B] p-4 rounded-lg">
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
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full md:w-auto">
          {/* Send BTC Button */}
          <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#7255F7] to-[#BB99FF] text-white w-full sm:w-48">
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
          <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#05080F] border border-[#0E1425] text-white w-full sm:w-48">
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
        <div className="border border-[#0E1425] p-6">
          <div className="flex gap-3 items-center">
            <Users color="#FFCC4D" />
            <h1 className="font-bold">Referral Link</h1>
          </div>
          <p className="py-4 text-[#8FA2BC] ">
            Share your referral link and earn rewards when friends join
          </p>
         <div className="w-full flex flex-col sm:flex-row items-start sm:items-center sm:justify-center gap-3 py-3">
  <div className="text-center w-full sm:w-auto text-[#8FA2BC] bg-[#10182D] break-all rounded-md px-4 py-3">
    https://app.quantumfinance.com/ref/QF12345ABCD
  </div>
  <button className="p-2 hover:bg-[#1d243a] rounded-md">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
      />
    </svg>
  </button>
</div>

          <p className="py-4 text-[#8FA2BC] ">Earn 5% commission on every trade your referrals make</p>
        </div>
      </div>
    </div>
  );
};

export default OverView;
