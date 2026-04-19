import React from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <div className="w-full">
      <div className="bg-light rounded-full border-2 border-accent/30 hover:border-accent/60 shadow-sm px-4 py-3 flex items-center gap-3 focus-within:ring-2 focus-within:ring-highlight/30 focus-within:border-highlight transition-all duration-300">
        <div className="bg-dark text-light p-2.5 rounded-full flex items-center justify-center">
          <FaSearch className="w-4 h-4" />
        </div>

        <input
          type="search"
          inputMode="search"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 bg-transparent text-sm placeholder:text-muted outline-none font-light"
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
            className="bg-dark/10 hover:bg-dark/20 text-dark p-2.5 rounded-full transition-all duration-300"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
