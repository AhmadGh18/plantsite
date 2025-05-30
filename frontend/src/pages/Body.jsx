import React, { useEffect, useState } from "react";
import img2 from "../assets/images/bg.jpg";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Body = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 0) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return (
    <div className="relative h-screen w-full font-mainfont overflow-hidden">
      {/* Background Zoom Layer */}
      <div
        className={`absolute inset-0 bg-cover   bg-fixed z-[-2] transition-transform duration-1000 ${
          hasScrolled ? "" : "animate-zoom "
        }`}
        style={{
          backgroundImage: `url(${img2})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[-1]" />

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 h-full w-full flex flex-col justify-center items-center text-white text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl md:text-5xl font-bold mb-4"
        >
          Plants are the silent architects of life,
          <br className="hidden md:block" />
          weaving air, shade, and nourishment into the world.
        </motion.h1>

        <motion.h6
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="text-sm md:text-lg mb-6"
        >
          Nature’s quiet power lies in every leaf and stem.
        </motion.h6>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="flex gap-4"
        >
          <button className="bg-secondgreen transition hover:!text-[#014C2E] active:text-[#014C2E] md:active:text-white  cursor-pointer text-white p-3 px-6 md:px-12 text-lg rounded-md shadow-md shadow-gray-900  hover-fill-from-bottom2 ">
            Let's Shop
          </button>
          <button className="bg-white text-secondorimary md:active:bg-secondorimary hover:text-white cursor-pointer  active:text-white md:active:text-white p-3 px-6 md:px-12 md:py-4 text-lg rounded-md shadow-md shadow-gray-900 transition hover-fill-from-bottom">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Body;
