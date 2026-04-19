import React, { useEffect, useState } from "react";
import logo from "../assets/images/sitelogo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ isblack, isfixed }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full ${
        isfixed ? "sticky" : "relative"
      } top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-light/98 backdrop-blur-lg sticky shadow-md text-dark border-b border-accent/20"
          : "bg-light/30 backdrop-blur-sm text-secondary"
      }`}
    >
      <div className="flex items-center justify-between py-4 px-6 md:px-14 lg:px-20">
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-13 md:h-16 object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-14 text-md font-light items-center ml-auto">
          <a
            href="#"
            className="relative group text-black hover:text-dark transition-colors duration-200 tracking-wide"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-highlight to-accent group-hover:w-full transition-all duration-300 rounded-full"></span>
          </a>
          <a
            href="#"
            className="relative group text-black hover:text-dark transition-colors duration-200 tracking-wide"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-highlight to-accent group-hover:w-full transition-all duration-300 rounded-full"></span>
          </a>
          <Link
            to="/shop"
            className="relative group text-black hover:text-dark transition-colors duration-200 tracking-wide"
          >
            Shop
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-highlight to-accent group-hover:w-full transition-all duration-300 rounded-full"></span>
          </Link>
          <a
            href="#"
            className="relative group text-black hover:text-dark transition-colors duration-200 tracking-wide"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-highlight to-accent group-hover:w-full transition-all duration-300 rounded-full"></span>
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer text-secondary hover:text-dark transition-colors duration-200"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-light/98 backdrop-blur-lg border-b border-accent/20 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[400px] shadow-lg" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-0 py-6 px-6">
          <a
            href="#"
            className="py-3 text-base font-light text-secondary hover:text-dark transition-colors duration-200 tracking-wide w-full text-center hover:bg-accent/5 rounded-md"
          >
            Home
          </a>
          <a
            href="#"
            className="py-3 text-base font-light text-secondary hover:text-dark transition-colors duration-200 tracking-wide w-full text-center hover:bg-accent/5 rounded-md"
          >
            About
          </a>
          <Link
            to="/shop"
            className="py-3 text-base font-light text-secondary hover:text-dark transition-colors duration-200 tracking-wide w-full text-center hover:bg-accent/5 rounded-md"
          >
            Shop
          </Link>
          <a
            href="#"
            className="py-3 text-base font-light text-secondary hover:text-dark transition-colors duration-200 tracking-wide w-full text-center hover:bg-accent/5 rounded-md"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
