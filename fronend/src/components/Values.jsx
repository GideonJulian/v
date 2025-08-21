import React from "react";
import { FaShieldAlt, FaBrain, FaUserFriends, FaHeart } from "react-icons/fa";

const CoreValues = () => {
  return (
    <section className="bg-[#0B0E1A] text-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7255F7] to-[#BB99FF]">
            Core Values
          </span>
        </h2>
        <p className="text-[#A0AEC0] mb-12 text-sm md:text-base max-w-2xl mx-auto">
          These principles guide everything we do and shape our commitment to our users
        </p>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#080C16] flex items-center flex-col gap-5 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <div className="text-[#A689FC] mb-4">
              <FaShieldAlt size={28} />
            </div>
            <h4 className="font-semibold text-lg mb-2">Security First</h4>
            <p className="text-[#A0AEC0] text-sm">
              Every feature is built with quantum-level security from the ground up
            </p>
          </div>

          <div className="bg-[#080C16] flex items-center flex-col gap-5 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <div className="text-[#A689FC] mb-4">
              <FaBrain size={28} />
            </div>
            <h4 className="font-semibold text-lg mb-2">Innovation</h4>
            <p className="text-[#A0AEC0] text-sm">
              Pioneering the future of finance with cutting-edge technology
            </p>
          </div>

          <div className="bg-[#080C16] flex items-center flex-col gap-5 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <div className="text-[#A689FC] mb-4">
              <FaUserFriends size={28} />
            </div>
            <h4 className="font-semibold text-lg mb-2">User-Centric</h4>
            <p className="text-[#A0AEC0] text-sm">
              Designed by traders, for traders, with simplicity at its core
            </p>
          </div>

          <div className="bg-[#080C16] flex items-center flex-col gap-5 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <div className="text-[#A689FC] mb-4">
              <FaHeart size={28} />
            </div>
            <h4 className="font-semibold text-lg mb-2">Transparency</h4>
            <p className="text-[#A0AEC0] text-sm">
              Open about our technology, processes, and commitment to users
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
