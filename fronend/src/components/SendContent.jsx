import React, { useState } from "react";

const SendContent = () => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  const isDisabled = address.trim() === "" || amount.trim() === "";

  return (
    <div className="w-full">
      {/* Recipient Address */}
      <div className="relative">
        <label className="text-sm mb-1 block text-[#F8FAFC]">
          Recipient Address
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-3 py-3 outline-none bg-[#05080F] placeholder:text-[#8FA2BC] rounded-md border-[#0E1425] border"
          placeholder="Enter BTC address"
        />
      </div>

      {/* Amount */}
      <div className="relative mt-3">
        <label className="text-sm mb-1 block text-[#F8FAFC]">Amount</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-3 py-3 outline-none bg-[#05080F] placeholder:text-[#8FA2BC] rounded-md border-[#0E1425] border"
          placeholder="0.00"
        />
      </div>

      {/* Balance + Send Button */}
      <div>
        <div className="flex items-center justify-between mt-4">
          <h1 className="text-[#8FA2BC]">Available Balance:</h1>
          <h1>1.2456 BTC</h1>
        </div>

        <button
          disabled={isDisabled}
          className={`flex items-center justify-center gap-3 w-full px-3 py-3 rounded-md mt-4 transition-colors duration-300 text-white ${
            isDisabled
              ? "bg-gradient-to-r from-[#7255F7] to-[#BB99FF] cursor-not-allowed opacity-40"
              : "bg-gradient-to-r from-[#7255F7] to-[#BB99FF]  cursor-pointer"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 -rotate-45"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
          Send BTC
        </button>
      </div>
    </div>
  );
};

export default SendContent;
