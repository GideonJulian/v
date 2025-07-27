import React, { useState } from "react";

const Wallet = () => {
  const [activeTab, setActiveTab] = useState("send");

  const tabs = ["overview", "send", "receive", "history"];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0b0c15] to-[#0e0f1c] text-white font-sans flex justify-center px-4">
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-1">My Wallet</h2>
        <p className="text-sm text-gray-400 mb-6">
          Manage your digital assets with quantum security
        </p>

        <div className="bg-[#121320] rounded-xl p-6 shadow-lg w-full">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4 ">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">
              BTC
            </div>
            <h3 className="font-semibold text-lg">Bitcoin</h3>
          </div>

          {/* Tabs */}
          <div className="flex bg-[#0b0c15] rounded-lg overflow-hidden mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 text-sm font-semibold capitalize transition-all ${
                  activeTab === tab
                    ? "bg-[#000] text-white"
                    : "bg-[#0b0c15] text-gray-400 hover:bg-purple-700/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Balance and Address */}
          <div>
            <p className="text-gray-400 text-sm">Balance</p>
            <h1 className="text-3xl font-bold text-purple-400">1.2456 BTC</h1>
            <p className="text-sm text-gray-400 mb-4">$119,125.34</p>

            <p className="text-sm text-gray-400">Network</p>
            <p className="text-sm mb-4">Bitcoin</p>
          </div>

          {/* Send & Receive Input */}
          {activeTab === "send" || activeTab === "receive" ? (
            <div className="space-y-4 mt-4">
              <div className="flex gap-2 justify-center">
                <button
                  className={`w-1/2 py-2 rounded-lg font-medium ${
                    activeTab === "send" ? "bg-purple-500" : "bg-gray-800"
                  } transition`}
                >
                  Send
                </button>
                <button
                  className={`w-1/2 py-2 rounded-lg font-medium ${
                    activeTab === "receive" ? "bg-purple-500" : "bg-gray-800"
                  } transition`}
                >
                  Receive
                </button>
              </div>

              <div className="flex flex-col items-center">
                <label className="text-sm text-gray-400 mb-1">
                  Wallet Address
                </label>
                <div className="flex bg-gray-800 rounded-lg overflow-hidden w-full max-w-xl">
                  <input
                    readOnly
                    value="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
                    className="flex-1 bg-transparent px-4 py-2 text-sm text-white"
                  />
                  <button className="px-4 hover:bg-purple-600 transition">
                    📋
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-400 mt-4">
              No data for this tab yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
