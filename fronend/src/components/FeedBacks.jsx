import React from "react";
import stars from "../assets/icons/stars.png";
import user from "../assets/icons/user.png";

const FeedBacks = () => {
  return (
    <div className="mt-10 max-w-[1200px] mx-auto px-4 overflow-x-auto">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          What Our Users{" "}
          <span className="bg-gradient-to-r px-1 from-[rgba(114,85,247,1)] to-[rgba(187,153,255,1)] bg-clip-text text-transparent">
            Say
          </span>
          ?
        </h1>
        <p className="text-[#F2F2F2] mt-2 text-sm sm:text-base md:text-lg">
          Join thousands of traders who trust NeuraFlow for their digital asset
          management
        </p>
      </div>

      <div className="flex items-center gap-8 my-8 min-w-full md:overflow-x-visible overflow-x-auto">
        {[
          {
            text: '"The quantum encryption technology here is genuinely revolutionary. I finally feel secure about my digital assets."',
            name: "Dr. Sarah Chen",
            role: "Dr. Sarah Chen",
            stars: stars,
            user: user,
          },
          {
            text: '"The quantum encryption technology here is genuinely revolutionary. I finally feel secure about my digital assets."',
            name: "Dr. Sarah Chen",
            role: "Dr. Sarah Chen",
            stars: stars,
            user: user,
          },
          {
            text: '"The quantum encryption technology here is genuinely revolutionary. I finally feel secure about my digital assets."',
            name: "Dr. Sarah Chen",
            role: "Dr. Sarah Chen",
            stars: stars,
            user: user,
          },
        ].map((items, index) => (
          <div
            key={index}
            className="bg-[#141E384D] p-6 shadow-md rounded-md min-w-[300px] sm:min-w-[320px] md:min-w-[350px]"
          >
            <div>
              <img src={items.stars} className="w-92 mb-3" alt="stars" />
            </div>
            <div>
              <p className="text-[#8FA2BC] text-[16px] py-4 italic">
                {items.text}
              </p>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <img src={items.user} alt="user" className="w-14" />
              <div>
                <h1 className="font-bold text-white text-lg">{items.name}</h1>
                <p className="text-[#8FA2BC]">{items.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedBacks;
