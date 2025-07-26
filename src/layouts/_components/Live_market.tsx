import { FiTrendingUp } from "react-icons/fi";

const marketData = [
  {
    albri: "Btc",
    name: "Bitcion",
    price: "$95,280",
    change: "+1.52%",
    volume: "$28.5B",
  },
  {
    name: "Ethereum",
    albri: "ETH",
    price: "$95,280",
    change: "+1.52%",
    volume: "$28.5B",
  },
  {
    name: "XRP",
    albri: "XRP",
    price: "$95,280",
    change: "+1.52%",
    volume: "$28.5B",
  },
  {
    name: "Cardano",
    albri: "ADA",
    price: "$95,280",
    change: "+1.52%",
    volume: "$28.5B",
  },
  {
    name: "Cardano",
    albri: "ADA",
    price: "$95,280",
    change: "+1.52%",
    volume: "$28.5B",
  },
  {
    name: "Cardano",
    albri: "ADA",
    price: "$95,280",
    change: "+1.52%",
    volume: "$28.5B",
  },
];

function Live_market() {
  return (
    <section className="mx-4 md:mx-16 mt-20 rounded-lg">
      <main>
        <h1 className=" text-white text-xl font-bold flex items-center">
          <img src="/purple.svg" alt="" />
          Live Markets
        </h1>
      </main>

      <section className="grid md:grid-cols-2 gap-x-3">
        {marketData.map((item, index) => (
          <article
            key={index}
            className="border rounded-lg px-4 mt-4  py-4 space-y-3 border-[#141E38]">
            <article className="flex items-center gap-x-2">
              <div className="bg-gradient-to-r font-bold from-[rgba(114,85,247,1)] to-[rgba(187,153,255,1)] flex items-center justify-center text-sm rounded-full w-8 h-8">
                {item.albri}
              </div>
              <div className="text-white">{item.name}</div>
            </article>

            <div>
              <p className="text-white text-2xl">{item.price}</p>
            </div>
            <div className="flex items-center text-white justify-between">
              <p>{item.change}</p>
              <p>{item.volume}</p>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}

export default Live_market;
