import React from 'react';
import './navbar.css';
import logo from './identityphoto/photos/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
      <ul>
        <li>
          <a href = "https://edfoundationac.org/ ">Home<link /></a> 
        </li>
        <li>
          <a href=" https://edfoundationac.org/about-the-education-foundation/">About</a>
        </li>
        <li>
          <a href="https://edfoundationac.org/contact-us/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
