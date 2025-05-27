import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Sample product list (replace with real data)
const products = [
  {
    id: 1,
    img: "https://jomostudio.com/cdn/shop/files/Monstera_Deliciosa_10b.jpg?v=1613604601&width=1600",
    title: "Fiddle Leaf Fig",
    price: "$35",
  },
  {
    id: 2,
    img: "https://jomostudio.com/cdn/shop/files/Monstera_Deliciosa_10b.jpg?v=1613604601&width=1600",
    title: "Snake Plant",
    price: "$25",
  },
  {
    id: 3,
    img: "https://jomostudio.com/cdn/shop/files/Monstera_Deliciosa_10b.jpg?v=1613604601&width=1600",
    title: "Peace Lily",
    price: "$30",
  },
  {
    id: 4,
    img: "https://jomostudio.com/cdn/shop/files/Monstera_Deliciosa_10b.jpg?v=1613604601&width=1600",
    title: "Spider Plant",
    price: "$18",
  },
  {
    id: 5,
    img: "https://jomostudio.com/cdn/shop/files/Monstera_Deliciosa_10b.jpg?v=1613604601&width=1600",
    title: "Monstera",
    price: "$40",
  },
  {
    id: 6,
    img: "https://jomostudio.com/cdn/shop/files/Monstera_Deliciosa_10b.jpg?v=1613604601&width=1600",
    title: "Pothos",
    price: "$22",
  },
  {
    id: 7,
    img: "https://jomostudio.com/cdn/shop/files/Monstera_Deliciosa_10b.jpg?v=1613604601&width=1600",
    title: "ZZ Plant",
    price: "$28",
  },
  {
    id: 8,
    img: "https://jomostudio.com/cdn/shop/files/Monstera_Deliciosa_10b.jpg?v=1613604601&width=1600",
    title: "Aloe Vera",
    price: "$20",
  },
  {
    id: 9,
    img: "https://jomostudio.com/cdn/shop/files/Monstera_Deliciosa_10b.jpg?v=1613604601&width=1600",
    title: "Rubber Plant",
    price: "$32",
  },
  {
    id: 10,
    img: "https://jomostudio.com/cdn/shop/files/Monstera_Deliciosa_10b.jpg?v=1613604601&width=1600",
    title: "Calathea",
    price: "$26",
  },
];

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const displayedItems = showAll ? products : products.slice(0, 8);

  return (
    <section ref={ref} className="py-16 bg-white font-mainfont">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        Our Gallery
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:mx-[200px]">
        {displayedItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full md:h-[40vh] object-contain"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-green-700 font-medium">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {!showAll && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
