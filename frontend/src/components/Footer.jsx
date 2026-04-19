import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light/60 py-20 md:py-28 border-t border-accent/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 md:gap-20 mb-20">
          {/* Brand Column */}
          <div>
            <h3 className="font-serif text-xl md:text-2xl font-light text-dark mb-5 tracking-wide">
              Home Paradise
            </h3>
            <p className="text-sm text-secondary font-light leading-relaxed">
              Handcrafted home decor inspired by nature to create calm,
              beautiful spaces.
            </p>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-serif text-sm font-light text-dark mb-7 tracking-wide uppercase">
              Shop
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/shop"
                  className="text-sm text-secondary hover:text-highlight transition-all duration-300 font-light relative group"
                >
                  All Products
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-highlight to-accent group-hover:w-full transition-all duration-300 rounded-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=candles"
                  className="text-sm text-secondary hover:text-highlight transition-all duration-300 font-light relative group"
                >
                  Candles
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-highlight to-accent group-hover:w-full transition-all duration-300 rounded-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=soaps"
                  className="text-sm text-secondary hover:text-highlight transition-all duration-300 font-light relative group"
                >
                  Natural Soaps
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-highlight to-accent group-hover:w-full transition-all duration-300 rounded-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=pillows"
                  className="text-sm text-secondary hover:text-highlight transition-all duration-300 font-light relative group"
                >
                  Linen Pillows
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-highlight to-accent group-hover:w-full transition-all duration-300 rounded-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-serif text-sm font-light text-dark mb-7 tracking-wide uppercase">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-secondary hover:text-highlight transition-colors font-light"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-secondary hover:text-highlight transition-colors font-light"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-secondary hover:text-highlight transition-colors font-light"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-secondary hover:text-highlight transition-colors font-light"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-serif text-sm font-light text-dark mb-7 tracking-wide uppercase">
              Support
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-secondary hover:text-highlight transition-colors font-light"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-secondary hover:text-highlight transition-colors font-light"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-secondary hover:text-highlight transition-colors font-light"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-secondary hover:text-highlight transition-colors font-light"
                >
                  Track Order
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/40 my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <p className="text-xs text-secondary font-light tracking-wide">
            © {currentYear} Home Paradise. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex gap-8 flex-wrap justify-center">
            <a
              href="#"
              className="text-xs text-secondary hover:text-highlight transition-colors font-light tracking-wide"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-secondary hover:text-highlight transition-colors font-light tracking-wide"
            >
              Terms of Service
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a
              href="#"
              className="text-secondary hover:text-highlight hover:scale-125 transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-secondary hover:text-highlight hover:scale-125 transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-secondary hover:text-highlight hover:scale-125 transition-all duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-secondary hover:text-highlight hover:scale-125 transition-all duration-300"
              aria-label="Pinterest"
            >
              <FaPinterest size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
