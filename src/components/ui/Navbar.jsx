import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/icons/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full px-4 py-6 md:px-8 lg:px-12">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="w-34 md:w-32 lg:w-36" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm md:text-base">
          <li className="text-[#808EA3]">
            <Link>Home</Link>
          </li>
          <li className="text-[#808EA3]">
            <Link>About Us</Link>
          </li>
          <li className="text-[#808EA3]">
            <Link>Contact Us</Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-[#808EA3] font-bold text-lg">Login</button>
          <button className="relative px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 text-black font-medium flex items-center gap-2">
            Sign Up
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XMarkIcon className="h-8 w-8 text-[#808EA3]" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-[#808EA3]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="mt-4 md:hidden">
          <ul className="flex flex-col gap-4 text-base">
            <li className="text-[#808EA3]">
              <Link onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className="text-[#808EA3]">
              <Link onClick={() => setMenuOpen(false)}>About Us</Link>
            </li>
            <li className="text-[#808EA3]">
              <Link onClick={() => setMenuOpen(false)}>Contact Us</Link>
            </li>
            <div className="flex flex-col gap-2 mt-4">
              <button className="text-[#808EA3] font-bold text-lg">Login</button>
              <button className="relative px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 text-black font-medium flex items-center gap-2">
                Sign Up
                <span className="text-lg">→</span>
              </button>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
