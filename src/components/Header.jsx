import React from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="left">
          <span><i className="fas fa-phone-alt"></i> Toll-free: 0800 721 498</span>
        </div>
        <div className="right">
          <a href="#login"><i className="fas fa-user"></i> Login / Register</a>
          <a href="#tracking"><i className="fas fa-shipping-fast"></i> Order tracking</a>
          <a href="#catalog"><i className="fas fa-download"></i> Download Product Catalog</a>
        </div>
      </div>
      
      {/* Main Header */}
      <header className="main-header">
        <div className="logo">
          <img src="/path-to-your-logo.png" alt="Lachlan Logo" />
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#newsletter">Newsletter</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-right">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <i className="fas fa-search"></i>
          </div>
          <div className="cart-icon">
            <i className="fas fa-shopping-cart"></i> 
            <span>KShs 0.00</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
