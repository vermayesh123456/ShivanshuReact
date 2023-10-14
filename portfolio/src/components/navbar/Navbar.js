import React from 'react';
import "./navbar.css";
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'
import { Link } from 'react-scroll';

const Navbar = () => {
 

  return (
    <nav className='navbar'>
      <img src={logo} className="brandlogo" alt="Sitelogo" />
      <div className="desktop-menu">
        <Link className='desktop-menu-list-item'>Home</Link>
        <Link className='desktop-menu-list-item'>About</Link>
        <Link className='desktop-menu-list-item'>Portfolio</Link>
        <Link className='desktop-menu-list-item'>Clients</Link>
      </div>
      <button className="desktop-menu-button">
        <img src={contact} alt="" className="desktop-Menu-img" />Contact Me
      </button>
    </nav>
  );
}

export default Navbar;
