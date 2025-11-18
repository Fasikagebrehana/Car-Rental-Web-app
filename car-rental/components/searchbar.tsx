import React from 'react'
import { FiSearch, FiSliders } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="flex items-center w-[450px] px-4 py-2 bg-gray-100 rounded-full shadow-sm">
        <FiSearch className="text-gray-500 mr-3" size={18} />
        <input
        type="text"
        placeholder="Search something here"
        className="flex-grow bg-transparent outline-none text-gray-700"
      />
      <FiSliders className="text-gray-600 ml-3 cursor-pointer" size={18} />
      
    </div>
  )
}

export default SearchBar
