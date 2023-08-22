import React, { useState } from 'react';
import logo from '../images/logo.png'

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=" border-b border-b-[#e6ebf4] p-5 nav">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 h-15 mr-4" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex space-x-4">
            <a href="#" className="relative w-fit text-[#396E8D] block after:block after:content-[''] after:absolute after:h-[3px] after:bg-slate-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Home</a>
            <a href="#" className="relative w-fit text-[#396E8D] block after:block after:content-[''] after:absolute after:h-[3px] after:bg-slate-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">About</a>
            <a href="#" className="relative w-fit text-[#396E8D] block after:block after:content-[''] after:absolute after:h-[3px] after:bg-slate-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Contact</a>

           
          </div>
          <button
            className="text-[#396E8D] lg:hidden"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden mt-4">
          <a href="#" className="block text-[#396E8D] mb-2">Home</a>
          <a href="#" className="block text-[#396E8D] mb-2">About</a>
          <a href="#" className="block text-[#396E8D] mb-2">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
