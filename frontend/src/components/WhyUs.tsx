import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLeaf, FaShippingFast, FaSmile } from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf size={40} className="text-green-700" />,
    title: "Eco-Friendly",
    desc: "Our plants are grown organically and delivered with zero plastic packaging.",
  },
  {
    icon: <FaShippingFast size={40} className="text-green-700" />,
    title: "Fast Delivery",
    desc: "Get your favorite plants at your doorstep in less than 48 hours.",
  },
  {
    icon: <FaSmile size={40} className="text-green-700" />,
    title: "Customer Satisfaction",
    desc: "We prioritize your happiness with dedicated support and healthy plants.",
  },
];

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gray-200 font-mainfont">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-xl mx-auto"
        >
          Discover the difference of shopping with Home Paradise. We care for
          plants and customers alike.
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-6 md:px-20">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            className="bg-gray-50 p-6 rounded-xl shadow-md w-full max-w-sm text-center hover:shadow-lg transition"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
