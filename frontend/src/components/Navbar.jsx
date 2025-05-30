import React, { useEffect, useState } from "react";
import logo from "../assets/images/fflogo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400); // Trigger after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-black md:text-white text-black shadow-md"
          : "bg-transparent md:text-white text-black"
      }`}
    >
      {" "}
      <div className="flex items-center justify-between py-4 px-6 md:px-12">
        <img src={logo} alt="Logo" className="h-16 object-contain" />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg font-semibold   items-center !text-black md:!text-white ">
          <a href="#" className="hover:text-primary transition">
            Home
          </a>
          <a href="#" className="hover:text-primary transition">
            About
          </a>
          <a href="#" className="hover:text-primary transition">
            Products
          </a>
          <a href="#" className="hover:text-primary transition">
            Contact
          </a>
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className="text-white" />
          ) : (
            <FaBars className="text-white" />
          )}
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center gap-4  absolute bg-white !justify-center  w-full overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px] py-6" : "max-h-0"
        }`}
      >
        <a
          href="#"
          className="py-2 text-lg font-medium hover:text-primary transition"
        >
          Home
        </a>
        <a
          href="#"
          className="py-2 text-lg font-medium hover:text-primary transition"
        >
          About
        </a>
        <a
          href="#"
          className="py-2 text-lg font-medium hover:text-primary transition"
        >
          Products
        </a>
        <a
          href="#"
          className="py-2 text-lg font-medium hover:text-primary transition"
        >
          Contact
        </a>
        <button className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
