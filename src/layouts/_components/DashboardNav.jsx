import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../components/ui/Logo";

const navigator = [
  { name: "Dashboard", link: "/dashboard" },
  { name: "Wallet", link: "/wallet" },
  { name: "Trading", link: "/trading" },
  { name: "Analytics", link: "/analytics" },
];

export function DesktopNav() {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);

  const Toggleme = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setToggle(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      <section className="relative ">
        <nav className="flex items-center justify-between px-3 py-5 md:border-none md:border-transparent lg:px-64 md:px-28 fixed border-b border-[#141E38]   top-0 right-0 left-0  bg-[#080C16CC] z-50">
          <Logo />

          {/* Desktop nav */}
          <ul className="md:flex items-center space-x-6 text-white hidden">
            {navigator.map((item, index) => (
              <li key={index} className="flex items-center gap-2 font-inter">
                <Link
                  to={item.link}
                  className={`cursor-pointer px-2 py-1 rounded text-[16px] font-inter ${
                    location.pathname === item.link
                      ? "bg-gradient-to-r from-[#7255F7] to-[#BB99FF]"
                      : "text-[#8FA2BC] hover:text-gray-300"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="md:block hidden">
            <img src="/profile.svg" alt="logo" />
          </div>

          {/* Mobile menu icon */}
          <div className="md:hidden" onClick={Toggleme}>
            {toggle ? (
              <div
                role="button"
                className={` ${
                  toggle && "bg-[#060a12] px-2 py-1 rounded-[2px]"
                } `}
              >
                <IoMdClose size={20} className="text-white cursor-pointer" />
              </div>
            ) : (
              <div className="hover:bg-[#060a12] px-2 py-1 rounded-[2px]">
                <LuMenu size={20} className="text-white  cursor-pointer" />
              </div>
            )}
          </div>
        </nav>
        {toggle && <MobileNav setToggle={setToggle} />}
      </section>

      {/* MobileNav */}
    </main>
  );
}

function MobileNav({ setToggle }) {
  const location = useLocation();
  return (
    <div className="fixed  top-16 left-0 right-0 z-50   border-b border-[#141E38]  bg-[#080c16]">
      <section className=" py-8">
        <aside>
          <ul className="space-y-4 text-white font-inter border-b border-[#141E38]  px-4 pb-4">
            {navigator.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  onClick={() => setToggle(false)}
                  className={`block px-2 py-1 rounded text-[16px] font-inter ${
                    location.pathname === item.link
                      ? "bg-gradient-to-r from-[#7255F7] to-[#BB99FF]"
                      : "text-[#8FA2BC] hover:text-gray-300"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="pt-6 text-[#8FA2BC] text-[16px] space-y-4 font-inter px-6">
            <li className="hover:text-gray-300 cursor-pointer">
              <Link to={'/profile'}>Profile</Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">Setting</li>
            <li className="text-red-500 cursor-pointer">Log out</li>
          </ul>
        </aside>
      </section>
    </div>
  );
}
