"use client";
import { useState } from "react";

export function SearchForm({ types, setSearchTerm, setSelectedType }) {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setSearchTerm(inputValue);
  };

  return (
    <div className="mb-6">
      <select
        className="p-3 border rounded w-full md:w-1/3 mb-2 bg-white border-[#ddd]"
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="">Select</option>
        {types.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
          </option>
        ))}
      </select>
      <br />
      <div className="flex">
        <input
          type="text"
          className="p-3 borderrounded-l w-full md:w-2/3 bg-white border-[#ddd] outline-none"
          placeholder="Search Pokémon"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="p-3 bg-blue-800 text-white rounded-r hover:bg-blue-900 cursor-pointer"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}