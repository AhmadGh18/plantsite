import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import BreadCrumbs from "../components/BreadCrumbs";
import SearchBar from "../components/SearchBar";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = ["All", "Indoor", "Outdoor", "Succulents", "Herbs"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return products.filter((p) => {
      if (selectedCategory !== "All" && p.category !== selectedCategory)
        return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        (p.description || "").toLowerCase().includes(q)
      );
    });
  }, [search, selectedCategory]);

  return (
    <div>
      <Navbar isblack={true} isfixed={false} />
      <BreadCrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Shop", path: "/shop" },
        ]}
      />

      <div className="p-6 max-w-7xl mx-auto font-sans">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="w-full md:w-1/2">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search for your favorite plant..."
            />
          </div>

          <div className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === cat
                    ? "bg-secondprimary text-white shadow"
                    : "bg-secondgreen/10 text-secondprimary hover:bg-secondgreen/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4 text-sm text-neutral-600">
          Showing {filtered.length} results
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.length > 0 ? (
            filtered.map((p) => <ProductCard key={p.id} product={p} />)
          ) : (
            <div className="col-span-full text-center py-12 text-neutral-600">
              No plants match your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
