import React from "react";
import { CheckCircle, ArrowDownRight } from "lucide-react";

const WalletHistory = () => {
  return (
    <div className="flex justify-between items-start bg-[#0B0F1A] p-4 rounded-xl text-white">
      {/* Left section: icon + details */}
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className="pt-1">
          <ArrowDownRight className="w-5 h-5 text-white" />
        </div>

        {/* Text content */}
        <div>
          <div className="flex items-center gap-2 text-sm sm:text-base font-medium">
            Receive BTC
            <CheckCircle className="w-4 h-4 text-white" />
          </div>
          <div className="text-xs text-[#8FA2BC]">
            2 minutes ago
            <span className="ml-2">6 confirmations</span>
          </div>
        </div>
      </div>

      {/* Right section: amount */}
      <div className="text-right">
        <div className="text-sm sm:text-base font-medium text-white">+0.0245</div>
        <div className="text-xs text-[#8FA2BC]">+$2,918.00</div>
      </div>
    </div>
  );
};

export default WalletHistory;
