import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BreadCrumbs from "../components/BreadCrumbs";
import Footer from "../components/Footer";
import products from "../data/products";

const PlantDetails = () => {
  const { id } = useParams();
  const plant = products.find((p) => String(p.id) === String(id));
  const [mainImage, setMainImage] = useState(plant ? plant.images[0] : "");

  if (!plant) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar isblack={true} isfixed={false} />
        <div className="flex-grow p-6">
          <p className="text-center text-secondary">Product not found.</p>
          <div className="text-center mt-4">
            <Link
              to="/"
              className="text-highlight hover:text-accent font-light underline transition-colors"
            >
              Back to home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isblack={true} isfixed={false} />
      <BreadCrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Shop", path: "/shop" },
          { label: plant.title, path: `/plant/${plant.id}` },
        ]}
      />

      <div className="flex-grow max-w-6xl mx-auto p-6 md:p-12 w-full">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left: Images */}
          <div className="md:w-1/2">
            <div className="overflow-hidden rounded-lg mb-6 bg-light">
              <img
                src={mainImage}
                alt={plant.title}
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {plant.images?.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(img)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-md border-2 transition-all ${
                    mainImage === img
                      ? "border-accent"
                      : "border-accent/20 hover:border-accent/40"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${plant.title}-${i}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="md:w-1/2">
            <h1 className="font-serif text-3xl md:text-4xl text-dark font-light tracking-wide mb-4">
              {plant.title}
            </h1>

            <p className="text-2xl text-highlight font-light mb-6 tracking-wide">
              {plant.price}
            </p>

            <div className="prose prose-sm max-w-none mb-8">
              <p className="text-secondary font-light leading-relaxed">
                {plant.description}
              </p>
            </div>

            {/* Care Instructions */}
            <div className="mb-8 pb-8 border-b border-accent/20">
              <h3 className="font-serif text-lg text-dark font-light tracking-wide mb-4 uppercase">
                Care Instructions
              </h3>
              <ul className="space-y-3 text-secondary font-light">
                <li className="flex gap-3">
                  <span className="text-highlight mt-1">•</span>
                  <span>Bright, indirect light</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-highlight mt-1">•</span>
                  <span>Water when top 1–2" of soil is dry</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-highlight mt-1">•</span>
                  <span>Moderate humidity</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-highlight mt-1">•</span>
                  <span>Keep in temperatures between 60-75°F</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-highlight hover:bg-accent text-dark px-8 py-4 rounded-full transition-all duration-300 font-light text-base tracking-widest uppercase border border-highlight hover:border-accent">
                Add to Cart
              </button>
              <Link
                to="/shop"
                className="flex-1 border-2 border-accent hover:border-highlight text-dark px-8 py-4 rounded-full text-center font-light text-base tracking-widest uppercase transition-all duration-300 hover:bg-light"
              >
                Back to Shop
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlantDetails;
