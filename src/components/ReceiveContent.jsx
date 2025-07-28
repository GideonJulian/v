import React from "react";

const ReceiveContent = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
      {/* QR Code */}
      <div className="mb-4">
        <img src="/qrcode.png" className="w-32 sm:w-40 md:w-44 lg:w-48" alt="QR Code" />
      </div>

      {/* BTC Address Label */}
      <p className="text-[#8FA2BC] py-2 text-center text-sm">Your BTC Address</p>

      {/* BTC Address Box + Copy Icon */}
      <div className="w-full flex flex-row items-center sm:justify-center gap-3 py-3">
        <div className="text-center w-full sm:w-auto bg-[#10182D] break-all rounded-md px-4 py-3">
          bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
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

      {/* Warning Text */}
      <p className="text-[#8FA2BC] py-2 text-center text-sm max-w-md">
        Only send BTC to this address. Sending other assets may result in permanent loss.
      </p>
    </div>
  );
};

export default ReceiveContent;
