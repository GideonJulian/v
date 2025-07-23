import React from "react";
import j from "../assets/images/J.png";
import g from "../assets/images/G.png";
import notepad from "../assets/images/notepad.png";
const HowitWorks = () => {
  return (
    <div className="mt-12 max-w-[1200px] mx-auto px-4">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          How it{" "}
          <span className="bg-gradient-to-r from-[rgba(114,85,247,1)] to-[rgba(187,153,255,1)] bg-clip-text text-transparent">
            works
          </span>
          ?
        </h1>
        <p className="text-[#F2F2F2] mt-2 text-sm sm:text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur. Ultrices sollicitudin justo
          massa.
        </p>
      </div>
      <div className="flex items-center gap-10 mt-12">
        {[
          {
            head: "Create An Account",
            text: "Lorem ipsum dolor sit amet consectetur. Mattis ultrices aenean.",
            img: notepad,
          },
          {
            head: "Back up our Assets",
            text: "Lorem ipsum dolor sit amet consectetur. Mattis ultrices aenean.",
            img: j,
          },
          {
            head: "Withdraw",
            text: "Lorem ipsum dolor sit amet consectetur. Mattis ultrices aenean.",
            img: g,
          },
        ].map((items) => (
          <div className="bg-[#141E384D] px-5">
            <img src={items.img} alt="" />
            <div className="text-center mt-5">
                <h1 className="font-bold text-white">{items.head}</h1>
                <p className="py-7 text-white">{items.text} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowitWorks;
