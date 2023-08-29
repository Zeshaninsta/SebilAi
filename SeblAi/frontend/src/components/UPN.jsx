import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import logo from '../images/logo.png'

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img className="h-8 w-8 mr-2" src="/logo.png" alt="Logo" />
          <span className="font-semibold text-lg">Your Logo</span>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="lg:hidden text-white"
          onClick={toggleMobileNav}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileNavOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMobileNavOpen ? 'block' : 'hidden'
          } lg:block lg:flex`}
        >
          <Link
            to="/"
            className="block lg:inline-block px-4 py-2 lg:p-0 text-black hover:bg-gray-600"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block lg:inline-block px-4 py-2 lg:p-0 text-black hover:bg-gray-600"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block lg:inline-block px-4 py-2 lg:p-0 text-black hover:bg-gray-600"
          >
            Contact
          </Link>
          <Link
            to="/faq"
            className="block lg:inline-block px-4 py-2 lg:p-0 text-black hover:bg-gray-600"
          >
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;