import React from "react";
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { BoltIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left Section */}
        <div className="flex flex-col gap-6">
          {/* Logo and name */}
          <div className="flex items-center gap-2">
            <BoltIcon className="h-6 w-6 text-yellow-400" />
            <span className="text-lg font-bold text-purple-400">QFIsecure</span>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 text-white text-lg">
            <FaTwitter className="cursor-pointer hover:text-purple-400 transition" />
            <FaLinkedinIn className="cursor-pointer hover:text-purple-400 transition" />
            <FaFacebookF className="cursor-pointer hover:text-purple-400 transition" />
            <FaInstagram className="cursor-pointer hover:text-purple-400 transition" />
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#888]">© 2025 QFIsecure. All rights reserved.</p>
        </div>

        {/* Right Section - Nav Links */}
        <div className="flex gap-8 text-sm md:text-base">
          <a href="#" className="hover:text-purple-400 transition">Home</a>
          <a href="#" className="hover:text-purple-400 transition">About</a>
          <a href="#" className="hover:text-purple-400 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
