import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BreadCrumbs from "../components/BreadCrumbs";
import products from "../data/products";

const PlantDetails = () => {
  const { id } = useParams();
  const plant = products.find((p) => String(p.id) === String(id));
  const [mainImage, setMainImage] = useState(plant ? plant.images[0] : "");

  if (!plant) {
    return (
      <div className="p-6">
        <p className="text-center">Plant not found.</p>
        <div className="text-center mt-4">
          <Link to="/" className="text-primary underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar isblack={true} isfixed={false} />
      <BreadCrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Shop", path: "/shop" },
          { label: plant.title, path: `/plant/${plant.id}` },
        ]}
      />
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              src={mainImage}
              alt={plant.title}
              className="w-full h-auto rounded-md"
            />
            <div className="mt-4 flex gap-3">
              {plant.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(img)}
                  className="w-20 h-20 overflow-hidden rounded-md border"
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

          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{plant.title}</h1>
            <p className="text-xl text-primary font-semibold mb-4">
              {plant.price}
            </p>
            <p className="mb-6 text-neutral-700">{plant.description}</p>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Care</h3>
              <ul className="list-disc list-inside text-neutral-700">
                <li>Bright, indirect light</li>
                <li>Water when top 1–2" of soil is dry</li>
                <li>Moderate humidity</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <button className="bg-primary text-white px-4 py-2 rounded">
                Add to cart
              </button>
              <Link to="/shop" className="px-4 py-2 border rounded">
                Back to shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
