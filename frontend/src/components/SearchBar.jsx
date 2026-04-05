import React from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-3 py-2 flex items-center gap-3 focus-within:ring-2 focus-within:ring-primary">
        <div className="bg-primary text-white p-2 rounded-full flex items-center justify-center">
          <FaSearch className="w-4 h-4" />
        </div>

        <input
          type="search"
          inputMode="search"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 bg-transparent text-sm placeholder:text-neutral-400 outline-none"
          style={{
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
          }}
        />

        {value ? (
          <button
            onClick={() => onChange("")}
            aria-label="Clear search"
            className="bg-primary/10 text-primary p-2 rounded-full hover:bg-primary/20"
          >
            <FaTimes />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
