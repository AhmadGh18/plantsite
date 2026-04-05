import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden">
      <Link to={`/plant/${product.id}`} className="block">
        <div className="w-full h-44 md:h-56 bg-gray-50 flex items-center justify-center overflow-hidden">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
          />
        </div>
      </Link>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
        <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-primary font-bold">{product.price}</div>
          <div className="flex gap-2">
            <Link
              to={`/plant/${product.id}`}
              className="text-sm px-3 py-1 border rounded hover:bg-secondgreen/10"
            >
              View
            </Link>
            <button className="bg-primary text-white text-sm px-3 py-1 rounded">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
