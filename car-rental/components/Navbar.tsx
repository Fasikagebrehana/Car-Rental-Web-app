import React from 'react'
import SearchBar from './searchbar'

const Navbar = () => {
  return (
    // there is a logo, search bar, favourite icon, user profile icon, notification, settings icon
    // in horizontal order
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600">MORENT </div>

      <SearchBar/>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100">❤️</button>
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          🔔
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">⚙️</button>
        <img
          src="/profile.jpg"
          alt="Profile"
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>
    </nav>
  )
}

export default Navbar
