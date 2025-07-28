import React, { useState } from "react";
import SendContent from "../components/SendContent";
import ReceiveContent from "../components/ReceiveContent";
import WalletHistory from "../components/WalleHistory";

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
          <div className="flex bg-[#0b0c15] rounded-lg overflow-hidden mb-6 p-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 text-sm font-semibold capitalize transition-all rounded-sm ${
                  activeTab === tab
                    ? "bg-[#000] text-white"
                    : "bg-[#0b0c15] text-gray-400 hover:bg-purple-700/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div>
            {activeTab === "send" ? (
              <SendContent />
            ) : activeTab === "receive" ? (
              <ReceiveContent />
            ) : activeTab === "history" ? (
              <WalletHistory />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
