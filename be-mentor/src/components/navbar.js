import React from 'react';
import './navbar.css';
import logo from './identityphoto/photos/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
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
