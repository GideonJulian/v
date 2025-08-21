import React from "react";
import { FaLock, FaRocket, FaChartLine } from "react-icons/fa";

const OurMission = () => {
  return (
    <div className="relative w-full py-20 px-4 md:px-8 bg-[#0B0E1A] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E1A] via-[#181C2F] to-[#2D144A] -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white">
          <button className="px-4 py-1 mb-4 text-sm bg-[#181C2F] text-white rounded-full border border-[#2A2E45] hover:bg-[#232840] transition">
            @ Our Mission
          </button>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Democratizing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7255F7] to-[#BB99FF]">
              Advanced Finance
            </span>
          </h2>

          <p className="text-[#A0AEC0] leading-relaxed mb-8 max-w-[600px]">
            We believe financial technology should be accessible to everyone,
            not just institutions. Our quantum-powered platform combines
            cutting-edge technology with intuitive design to create the future
            of digital finance.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#7255F7] text-white p-3 rounded-full">
                <FaChartLine size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-white">
                  Advanced Trading for All
                </h4>
                <p className="text-[#A0AEC0] text-sm">
                  Professional-grade tools made simple and accessible to retail
                  investors
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#7255F7] text-white p-3 rounded-full">
                <FaLock size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-white">
                  Quantum-Level Security
                </h4>
                <p className="text-[#A0AEC0] text-sm">
                  Military-grade encryption and quantum-resistant security
                  protocols
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#7255F7] text-white p-3 rounded-full">
                <FaRocket size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-white">Innovation First</h4>
                <p className="text-[#A0AEC0] text-sm">
                  Pioneering the next generation of financial infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Stats Card */}
        <div className="flex-1 flex items-center flex-col justify-center bg-[#101322] rounded-xl shadow-md p-8 w-full max-w-[606px]">
          <h3 className="text-white text-xl font-semibold mb-2">
            Platform Performance
          </h3>
          <p className="text-[#A0AEC0] mb-6 text-sm">
            Real-time metrics powering your success
          </p>

          <div className="grid grid-cols-2 gap-x-30 gap-y-10 text-white">
            <div className="text-center">
              <h4 className="text-[#7255F7] text-2xl font-bold">0.01ms</h4>
              <p className="text-sm text-[#A0AEC0] mt-1">Avg Latency</p>
            </div>
            <div className="text-center">
              <h4 className="text-[#7255F7] text-2xl font-bold">1M+</h4>
              <p className="text-sm text-[#A0AEC0] mt-1">TPS Capacity</p>
            </div>
            <div className="text-center">
              <h4 className="text-[#7255F7] text-2xl font-bold">256-bit</h4>
              <p className="text-sm text-[#A0AEC0] mt-1">Encryption</p>
            </div>
            <div className="text-center">
              <h4 className="text-[#7255F7] text-2xl font-bold">24/7</h4>
              <p className="text-sm text-[#A0AEC0] mt-1">Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
