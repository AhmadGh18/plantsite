import React, { useState } from "react";
import Landing from "../components/Landing";
import img2 from "../assets/images/bg.jpg";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Navbar from "../components/Navbar";
const Body = () => {
  return (
    <div
      className="relative h-screen w-full flex   font-mainfont bg-cover  bg-fixed zoom"
      style={{
        backgroundImage: `url(${img2})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      {/* Animated Background */}
      <Navbar />
      <div className="absolute inset-0 flex justify-center items-center   " />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 h-full w-full flex flex-col   justify-center items-center text-white text-center px-4"
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
          <button className="bg-secondorimary cursor-pointer text-white p-3 px-6 text-lg rounded-md shadow-md shadow-gray-900 hover:scale-105 transition">
            Let's Shop
          </button>
          <button className="bg-white text-secondorimary cursor-pointer p-3 px-6 text-lg rounded-md shadow-md shadow-gray-900 hover:scale-105 transition">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Body;
