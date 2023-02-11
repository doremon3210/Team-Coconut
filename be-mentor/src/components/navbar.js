import React from 'react';
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Be Mentor</h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
    
  );
};

export default Navbar;