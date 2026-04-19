import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-light rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-highlight/15 transition-all duration-300 flex flex-col h-full border border-accent/40 hover:border-highlight/60 group">
      <Link
        to={`/plant/${product.id}`}
        className="block flex-grow overflow-hidden"
      >
        <div className="w-full h-56 md:h-64 bg-accent/10 flex items-center justify-center overflow-hidden">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>

      <div className="p-7 flex flex-col flex-grow">
        <h3 className="font-serif text-lg text-dark font-light tracking-wide mb-3 uppercase group-hover:text-highlight transition-colors duration-300">
          {product.title}
        </h3>
        <p className="text-sm text-secondary mb-6 line-clamp-2 font-light leading-relaxed flex-grow">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-6 border-t border-accent/30">
          <div className="text-highlight font-light text-lg tracking-widest">
            {product.price}
          </div>
          <div className="flex gap-3">
            <Link
              to={`/plant/${product.id}`}
              className="text-xs px-5 py-2 border-2 border-accent text-dark rounded-full hover:bg-accent/10 hover:border-highlight transition-all duration-300 font-light tracking-widest uppercase"
            >
              Details
            </Link>
            <button className="text-xs px-5 py-2 bg-highlight text-dark rounded-full hover:bg-accent transition-all duration-300 font-light tracking-widest uppercase border-2 border-highlight hover:border-accent shadow-md hover:shadow-lg">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
