import React from "react";

const GradientText = ({ text }) => {
  return (
    <span className="bg-gradient-to-r text-3xl sm:text-4xl md:text-5xl font-bold from-[rgba(114,85,247,1)] to-[rgba(187,153,255,1)] bg-clip-text text-transparent">
      {text}
    </span>
  );
};

export default GradientText;
