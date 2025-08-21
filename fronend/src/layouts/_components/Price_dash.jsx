import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import GradientText from "../../components/ui/GradientText";
import { FiTrendingUp } from "react-icons/fi";

function Price_dash() {
  const [showPrice, setShowPrice] = useState(true);

  const priceData = [
    {
      icon: "/price_2.svg",
      title: "Total Balance",
      price: "$169,958.00",
      change: "+$4,127.50 (+2.49%)",
    },
  ];

  const list = [
    { name: "Send", icon: "/send.svg" },
    { name: "Receive", icon: "/receive (2).svg" },
    { name: "Buy", icon: "/buy.svg" },
    { name: "Trade", icon: "/trade_me.svg" },
  ];

  return (
    <main className=" mx-4 md:mx-16">
      <section className="md:grid-cols-3 md:grid gap-x-3">
        {priceData.map((item, index) => (
          <article
            key={index}
            className="border mb-2 md:mb-0 border-[#141E38] col-span-2 px-8 py-4 rounded-lg">
            <section className="flex justify-between space-y-4 items-center">
              <div className="text-white flex items-center gap-x-1">
                <img src={item.icon} alt="price icon" />
                <p>{item.title}</p>
              </div>
              <div>
                {showPrice ? (
                  <IoEyeOutline
                    className="text-white cursor-pointer"
                    onClick={() => setShowPrice(false)}
                  />
                ) : (
                  <IoEyeOffOutline
                    className="text-white cursor-pointer"
                    onClick={() => setShowPrice(true)}
                  />
                )}
              </div>
            </section>

            <div>
              {showPrice ? (
                <p className="from-[rgba(114,85,247,1)] to-[rgba(187,153,255,1)] bg-clip-text text-transparent bg-gradient-to-r">
                  <GradientText text={item.price} className="text-[20px]" />
                </p>
              ) : (
                <p className="text-white text-[20px]">******</p>
              )}
              <div>
                <p className="text-white mt-3 gap-x-2 flex items-center">
                  <FiTrendingUp /> {item.change}
                </p>
              </div>
            </div>
          </article>
        ))}

        {/* Quick Actions Section */}
        <article className="border text-white border-[#141E38] px-8 py-4 rounded-lg">
          <p className="mb-4">Quick Actions</p>
          <div className="grid md:grid-cols-4 grid-cols-2 items-center gap-x-2">
            {list.map((action, i) => (
              <div
                key={i}
                className="border text-center rounded-[8px] py-3 border-[#141E38] bg-[#05080F]">
                <div className="flex mb-2 justify-center">
                  <img src={action.icon} alt={`${action.name} logo`} />
                </div>
                <p>{action.name}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}

export default Price_dash;
