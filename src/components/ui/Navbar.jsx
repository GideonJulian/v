import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
const Navbar = () => {
  return (
    <div className="w-full p-12">
      <div className="mx-auto flex items-center justify-around">
        <div>
          <img src={logo} />
        </div>
        <ul className="flex items-center gap-6 ">
          <li className="text-[#808EA3]">
            <Link>Home</Link>
          </li>
          <li className="text-[#808EA3]">
            <Link>About Us </Link>
          </li>
          <li className="text-[#808EA3]">
            <Link>Contact Us</Link>
          </li>
        </ul>
        <div className="flex items-center gap-10 ">
          <button className="text-[#808EA3] font-bold text-lg">Login</button>
          <button className="relative px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 text-black font-medium flex items-center gap-2 ">
            Sign Up
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
