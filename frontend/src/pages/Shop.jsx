import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import BreadCrumbs from "../components/BreadCrumbs";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
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
    <div className="flex flex-col min-h-screen">
      <Navbar isblack={true} isfixed={false} />
      <BreadCrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Shop", path: "/shop" },
        ]}
      />

      <div className="flex-grow p-8 md:p-12 max-w-7xl mx-auto w-full bg-light">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">
          <div className="w-full md:w-2/5">
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
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-dark text-light shadow-md"
                    : "bg-accent/20 text-dark hover:bg-accent/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 text-sm text-secondary font-light">
          Showing{" "}
          <span className="font-normal text-dark">{filtered.length}</span>{" "}
          results
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filtered.length > 0 ? (
            filtered.map((p) => <ProductCard key={p.id} product={p} />)
          ) : (
            <div className="col-span-full text-center py-16 text-secondary">
              <p className="text-lg font-light">No plants match your search.</p>
              <p className="text-sm mt-2">
                Try adjusting your filters or search terms.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
