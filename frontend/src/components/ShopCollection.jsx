import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import candleImg from "../assets/images/candle.png";
import soapImg from "../assets/images/soap.png";

const ShopCollection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const collections = [
    {
      id: 1,
      title: "Candles",
      category: "candles",
      image: candleImg,
      viewAllText: "View All",
    },
    {
      id: 2,
      title: "Natural Soaps",
      category: "soaps",
      image: soapImg,
      viewAllText: "View All",
    },
    {
      id: 3,
      title: "Linen Pillows",
      category: "pillows",
      image: soapImg,
      viewAllText: "View All",
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-light">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="font-serif text-5xl md:text-6xl text-dark font-light tracking-wide mb-6">
          Shop Our Collection
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-highlight via-accent to-highlight mx-auto"></div>
      </motion.div>

      {/* Collection Cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col group"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6 h-72 md:h-80 lg:h-96 shadow-lg hover:shadow-2xl hover:shadow-highlight/20 transition-all duration-500">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="font-serif text-3xl text-dark font-light tracking-wide mb-4 text-center group-hover:text-highlight transition-colors duration-300">
                {collection.title}
              </h3>

              {/* View All Link */}
              <Link
                to={`/shop?category=${collection.category}`}
                className="text-secondary hover:text-highlight font-light text-center text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group/link"
              >
                {collection.viewAllText}
                <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                  ↗
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopCollection;
