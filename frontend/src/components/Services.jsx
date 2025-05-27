import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import servecefrom from "../assets/images/indoor-plants-studio (2).jpg";

const serviceItems = [
  {
    img: "https://themewagon.github.io/alazea/img/core-img/s1.png",
    title: "Plant",
    desc: "In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service its.",
  },
  {
    img: "https://themewagon.github.io/alazea/img/core-img/s2.png",
    title: "Plant Shop",
    desc: "In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service its.",
  },
  {
    img: "https://themewagon.github.io/alazea/img/core-img/s3.png",
    title: "Plant Shop",
    desc: "In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service its.",
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div
      ref={sectionRef}
      className="min-h-screen flex flex-col font-mainfont justify-center items-center"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl mb-6"
      >
        Our services
      </motion.h1>

      {/* Content Box */}
      <div className="md:mx-auto bg-white w-[80%] flex flex-col md:flex-row items-center mt-3 gap-8 md:p-6 rounded-lg ">
        {/* Left: Service Cards */}
        <div className="flex flex-col gap-12 w-full md:w-[50%]">
          {serviceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="flex gap-5"
            >
              <img
                src={item.img}
                alt={item.title}
                className="object-contain w-12 h-12 "
              />
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full md:w-[50%] rounded-md overflow-hidden"
        >
          <img
            src={servecefrom}
            className="w-full h-full object-cover hidden md:block"
            alt="Services"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
