const GradientText = ({ text, className }) => {
  return (
    <span
      className={`bg-gradient-to-r  font-bold from-[rgba(114,85,247,1)] ${className} to-[rgba(187,153,255,1)] bg-clip-text text-transparent`}>
      {text}
    </span>
  );
};

export default GradientText;
