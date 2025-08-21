import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      head: "How secure is NeuraFlow?",
      text: "NeuraFlow uses military-grade quantum encryption and multi-layer security protocols to protect your assets. All transactions are secured with advanced cryptographic methods.",
    },
    {
      head: "What makes NeuraFlow different from other trading platforms?",
      text: "Our AI-powered neural networks provide real-time market analysis, predictive insights, and automated trading strategies that adapt to market conditions.",
    },
    {
      head: "Can I start trading with a small amount?",
      text: "Yes! You can start with as little as $10. Our platform is designed for both beginners and professional traders.",
    },
    {
      head: "Are there any hidden fees?",
      text: "No hidden fees. We charge competitive trading fees (0.1% maker, 0.2% taker) with no deposit or withdrawal fees for most cryptocurrencies.",
    },
    {
      head: "How do I get started?",
      text: "Simply create an account, complete our quick verification process, deposit funds, and start trading. Our AI assistant will guide you through the setup.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mt-10 max-w-[1200px] mx-auto px-4">
      <div>
        <h1 className="font-bold text-2xl md:text-3xl text-white mb-4 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-[#8FA2BC] text-center">
          Everything you need to know about NeuraFlow
        </p>
      </div>
      <div className="flex flex-col gap-6 items-center mt-10">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="p-6 md:p-8 bg-[#080C16] border rounded-lg border-[#141E384D] shadow-xl w-full max-w-[782px] cursor-pointer"
            onClick={() => toggleFaq(index)}>
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-white text-lg">{item.head}</h1>
              <span className="text-white text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-3">
                  <p className="text-[#8FA2BC]">{item.text}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
