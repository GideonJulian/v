import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50  backdrop-blur-sm px-4 py-6 md:px-8 lg:px-12 shadow-md">
        <div className="mx-auto max-w-[1200px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
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

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-0 left-0 right-0 bg-[#080C16] shadow-lg z-40 transform transition-transform duration-300 ease-in-out flex flex-col justify-between ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ height: "60vh" }}>
        {/* Menu Links */}
        <div className="p-6 mt-26 flex flex-col gap-10 text-base">
          <Link
            onClick={() => setMenuOpen(false)}
            to="/"
            className="text-[#808EA3]">
            Home
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            to="/about"
            className="text-[#808EA3]">
            About Us
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            to="/contact"
            className="text-[#808EA3]">
            Contact Us
          </Link>
        </div>

        {/* Buttons at Bottom */}
        <div className="flex items-center justify-between gap-2 p-4">
          <button className="w-70 text-[#808EA3] font-bold text-base border border-[#7255F7] py-3 rounded-md">
            Login
          </button>
          <button className="w-70 py-3 rounded-md bg-gradient-to-r from-purple-600 to-purple-400 text-black font-medium flex items-center justify-center gap-2">
            Sign Up
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>

      {/* Optional backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setMenuOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;
