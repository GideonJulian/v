import { FiTrendingUp } from "react-icons/fi";
import { FiTrendingDown } from "react-icons/fi";

function RecentActivity() {
  const list = [
    {
      menutrans: "Receive BTC",
      time: "2 min ago",
      price: "+0.0245",
      discount: "+$2,918",
    },
    {
      menutrans: "Send ETH",
      time: "1 hour ago",
      price: "-0.0245",
      discount: "+$2,918",
    },
    {
      menutrans: "Trade SOL",
      time: "2 min ago",
      price: "+0.0245",
      discount: "+$2,918",
    },
    {
      menutrans: "Receive XRP",
      time: "2 min ago",
      price: "+0.0245",
      discount: "+$2,918",
    },
  ];

  return (
    <section className="mx-4 md:mx-16 mt-20">
      <article>
        <div className="flex justify-between items-center">
          <p className="text-white text-xl font-bold">Recent Activity</p>
          <p className="text-white">View All</p>
        </div>

        {list.map((item, index) => (
          <section
            key={index}
            className="flex items-center justify-between text-white mt-8 mb-4">
            <div className="flex flex-col items-center gap-2">
              {/* Conditional rendering for icons */}
              {index === 0 || index === 3 ? (
                <div className="flex items-center gap-x-2 justify-center">
                  <p className="p-2 rounded-full">
                    <FiTrendingDown />
                  </p>
                  <p>{item.menutrans}</p>
                </div>
              ) : index === 1 ? (
                <div className="flex items-center gap-x-2 justify-center">
                  <p className="bg-[#F15B5B] p-2 rounded-full">
                    <FiTrendingUp />
                  </p>
                  <p>{item.menutrans}</p>
                </div>
              ) : index === 2 ? (
                <div className="flex items-center gap-x-2 justify-center">
                  <p className="bg-[#614e1f] p-2 rounded-full">
                    <FiTrendingUp />
                  </p>
                  <p>{item.menutrans}</p>
                </div>
              ) : (
                <p>{item.menutrans}</p>
              )}
              <p className="ml-2 text-sm text-gray-500">{item.time}</p>
            </div>

            <div className="text-right">
              <p className={item.price.startsWith("-") ? "text-red-500" : ""}>
                {item.price}
              </p>
              <p>{item.discount}</p>
            </div>
          </section>
        ))}
      </article>
    </section>
  );
}

export default RecentActivity;
