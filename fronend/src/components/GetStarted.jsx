import React from "react";

const GetStarted = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-10 px-4">
      <div className="bg-[#080C16] shadow-xl shadow-[#0000000D] border border-[#141E384D] p-6 md:p-10">
        <div className="text-center">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-white text-center">
            Ready to Start Trading?
          </h1>
          <p className="text-[#8FA2BC] mt-3 text-base sm:text-lg max-w-2xl mx-auto">
            Join thousands of traders who have already secured their digital
            future with quantum-powered finance
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 sm:p-10">
          <button className="w-full sm:w-auto px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-purple-400 text-black font-medium flex items-center justify-center gap-2">
            Get Started Free
            <span className="text-lg">→</span>
          </button>
          <button className="w-full sm:w-auto px-6 py-3 text-[#808EA3] font-bold text-base border border-[#7255F7] rounded-md">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
