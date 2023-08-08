import React, { useState } from 'react';
import {SiThemoviedatabase} from 'react-icons/si';
import './NavBarStyles.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <SiThemoviedatabase/>
      </div>
      <div className={`menu ${isOpen ? 'active' : ''}`}>
        {/* <div className="item">Home</div>
        <div className="item">About</div>
        <div className="item">Services</div>
        <div className="item">Contact</div> */}
      </div>
      <div className={`toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
