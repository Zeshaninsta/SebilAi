import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../images/logo.png';

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="border-b border-b-[#e6ebf4] p-5 nav">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 h-15 mr-4" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex space-x-4">
            <Link
              to="/"
              className="relative w-fit text-[#396E8D] block font-semibold after:block after:content-[''] after:absolute after:h-[3px] after:bg-slate-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              activeClassName="text-blue-500" 
            >
              Home
            </Link>
            <Link
              to="/about"
              className="relative w-fit text-[#396E8D] block font-semibold after:block after:content-[''] after:absolute after:h-[3px] after:bg-slate-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              activeClassName="text-blue-500" // Apply active styles for the current route
            >
              About
            </Link>
            <Link
              to="/contact"
              className="relative w-fit text-[#396E8D] block font-semibold after:block after:content-[''] after:absolute after:h-[3px] after:bg-slate-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              activeClassName="text-blue-500" // Apply active styles for the current route
            >
              Contact
            </Link>
          </div>
         
        </div>
      </div>
      
    </nav>
  );
};

export default NavigationBar;
