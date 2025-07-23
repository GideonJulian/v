import React from "react";
import ADA from "../../assets/icons/ada.png";
import BTC from "../../assets/icons/btc.png";
import ETH from "../../assets/icons/eth.png";
import DOGE from "../../assets/icons/doge.png";
import SOL from "../../assets/icons/sol.png";
import XRP from "../../assets/icons/xrp.png";
const ScrollAnimation = () => {
  const cryptos = [
    { symbol: BTC, name: "Bitcoin", price: "$119,124", change: "+1.52%" },
    { symbol: ETH, name: "Ethereum", price: "$3,852.4", change: "+2.50%" },
    { symbol: SOL, name: "Solana", price: "$198.25", change: "+9.27%" },
    { symbol: XRP, name: "XRP", price: "$3.64", change: "+5.36%" },
    { symbol: DOGE, name: "Dogecoin", price: "$0.28145", change: "+2.81%" },
    { symbol: ADA, name: "Cardano", price: "$0.92240", change: "+7.51%" },
  ];

  return (
    <div className="relative overflow-hidden bg-[#0D0F14] py-3">
      <div
        className="flex gap-10 whitespace-nowrap animate-[scroll_20s_linear_infinite]"
        style={{
          animation: "scroll 20s linear infinite",
        }}
      >
        {[...cryptos, ...cryptos].map((crypto, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-white min-w-[200px]"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={crypto.symbol}
                alt={crypto.name}
                className="w-12 h-12 object-contain"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-medium">{crypto.name}</span>
              <div className="flex items-center gap-3">
                <span className="text-gray-400">{crypto.price}</span>
                <span className="text-green-400">{crypto.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Custom keyframes */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default ScrollAnimation;
