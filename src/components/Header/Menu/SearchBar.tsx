import React from "react";
import { MdSearch } from "react-icons/md";

const SearchBar = () => {
  return (
    <div className="flex items-center md:border rounded-md md:bg-[#f2f2f2]">
      <input
        className="py-2 px-3 text-gray-700 leading-tight focus:outline-none hidden md:block bg-transparent"
        type="text"
        placeholder="Search..."
      />
      <button className="flex-shrink-0 p-2 bg-transparent">
        <MdSearch size="1.35rem" />
      </button>
    </div>
  );
};

export default SearchBar;
