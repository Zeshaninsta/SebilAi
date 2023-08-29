import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Link as ScrollLink} from 'react-scroll';

import logo from "../images/logo.png";
import { hover } from "@testing-library/user-event/dist/hover";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const isSamePage = location.pathname === '/';
  const linkId = isSamePage ? 'predict' : 'pre';
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="border-b border-b-[#e6ebf4] p-5 nav">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 h-15 mr-4" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex space-x-4">
            <NavLink
              to="/Home"
              className={`relative w-fit text-[#396E8D] block font-semibold after:block after:content-[''] after:absolute after:h-[2px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ${
                location.pathname === "/Home"
                  ? "text-[#396E8D] border-b-2 border-[#396E8D] "
                  : "opacity-50"
              }`}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={`relative w-fit text-[#396E8D] block font-semibold after:block after:content-[''] after:absolute after:h-[2px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ${
                location.pathname === "/about"
                  ? "text-[#396E8D] border-b-2 border-[#396E8D]"
                  : "opacity-50"
              }`}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={`relative w-fit text-[#396E8D] block font-semibold after:block after:content-[''] after:absolute after:h-[2px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ${
                location.pathname === "/contact"
                  ? "text-blue-[#396E8D] border-b-2 border-[#396E8D]"
                  : "opacity-50"
              }`}
            >
              Contact
            </NavLink>
            <NavLink  to="/faq"
              className={`relative w-fit text-[#396E8D] block font-semibold after:block after:content-[''] after:absolute after:h-[2px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ${
                location.pathname === "/faq"
                  ? "text-blue-[#396E8D] border-b-2  border-[#396E8D]"
                  : "opacity-50"
              }`} >
              FAQ
            </NavLink>
          </div>
          <NavLink
              smooth={true}
              duration={500}
              offset={-50}
              to='Home/pre'
              className={"bg-[#396E8D] hover:bg-[#2d5973] px-[10px] py-[5px] text-white rounded-lg font-bold"}
            >
              Predict
            </NavLink>
          <button className="text-[#396E8D] lg:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Add SVG content here */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          className={`lg:hidden mt-4 ${
            menuOpen ? "fixed" : "hidden"
          } transition-transform duration-300 ease-in-out transform ${
            menuOpen && isMobile ? "translate-x-0" : "translate-x-full"
          } z-9999`}
        >
          <div className="block text-[#396E8D] font-semibold mb-2">
            <NavLink
              to="/"
              className={`${location.pathname === "/" ? "text-blue-500" : ""}`}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </div>
          <div className="block text-[#396E8D] font-semibold mb-2">
            <NavLink
              to="/about"
              className={`${
                location.pathname === "/about" ? "text-blue-500" : ""
              }`}
              onClick={closeMenu}
            >
              About
            </NavLink>
          </div>
          <div className="block text-[#396E8D] font-semibold mb-2">
            <NavLink
              to="/contact"
              className={`${
                location.pathname === "/contact" ? "text-blue-500" : ""
              }`}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
            <ScrollLink
              to="/?scrollTo=pred"
              className={`${
                location.pathname === "/predict" ? "text-blue-500" : ""
              }`}
              onClick={closeMenu}
            >
              Predict
            </ScrollLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
