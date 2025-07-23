import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/icons/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#141E384D] backdrop-blur-sm px-4 py-6 md:px-8 lg:px-12 shadow-md">
        <div className="mx-auto max-w-[1200px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="w-28 md:w-32 lg:w-36" />
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6 text-sm md:text-base">
            <li className="text-[#808EA3]">
              <Link to="/">Home</Link>
            </li>
            <li className="text-[#808EA3]">
              <Link to="/about">About Us</Link>
            </li>
            <li className="text-[#808EA3]">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>

          {/* Desktop Buttons */}
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
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#141E38] shadow-lg z-50 transform transition-transform duration-300 ease-in-out flex flex-col justify-between ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Links */}
        <div className="p-6">
          <ul className="flex flex-col gap-6 text-base">
            <li className="text-[#808EA3]">
              <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>
            </li>
            <li className="text-[#808EA3]">
              <Link onClick={() => setMenuOpen(false)} to="/about">About Us</Link>
            </li>
            <li className="text-[#808EA3]">
              <Link onClick={() => setMenuOpen(false)} to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Buttons at Bottom */}
        <div className="p-6 border-t border-[#808EA3]/20">
          <div className="flex flex-col gap-3">
            <button className="text-[#808EA3] font-bold text-lg">Login</button>
            <button className="relative px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 text-black font-medium flex items-center gap-2">
              Sign Up
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Optional backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
