import React from "react";
import stars from "../assets/icons/stars.png";
import user from "../assets/icons/user.png";
const FeedBacks = () => {
  return (
    <div className="mt-10 max-w-[1200px] mx-auto px-4  ">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          What Our Users
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
      <div>
        {[
          {
            text: '"The quantum encryption technology here is genuinely revolutionary. I finally feel secure about my digital assets."',
            name: "Dr. Sarah Chen",
            role: "Dr. Sarah Chen",
            stars: stars,
            user: user,
          },
        ].map((items) => (
          <div className="bg-[#141E384D] p-6 shadow-md rounded-md">
            <div>
                <img src={items.stars} className="w-92  mb-3" />
            </div>
            <div>
                <p className="text-[#8FA2BC] italic w-[318px]">{items.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedBacks;
