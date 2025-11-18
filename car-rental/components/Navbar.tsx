import React from 'react'

const Navbar = () => {
  return (
    // there is a logo, search bar, favourite icon, user profile icon, notification, settings icon
    // in horizontal order
    <nav>
        <li className="logo">Logo</li>
        <li className="search-bar">Search Bar</li>
        <li className="favourite-icon">Favourite Icon</li>
        <li className="user-profile-icon">User Profile Icon</li>
        <li className="notification-icon">Notification Icon</li>
        <li className="settings-icon">Settings Icon</li>
      
    </nav>
  )
}

export default Navbar
