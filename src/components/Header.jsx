import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className="top-bar">
        <div className="left">
          <span><i className="fas fa-phone-alt"></i> Toll-free: 0800 721 498</span>
        </div>
        <div className="right">
          <Link to="/login"><i className="fas fa-user"></i> Login / Register</Link>
          <Link to="/tracking"><i className="fas fa-shipping-fast"></i> Order tracking</Link>
          <Link to="/catalog"><i className="fas fa-download"></i> Download Product Catalog</Link>
        </div>
      </div>

      <header className="main-header">
        <div className="logo">
          <img src="/path-to-your-logo.png" alt="Lachlan Logo" />
        </div>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/newsletter">Newsletter</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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
