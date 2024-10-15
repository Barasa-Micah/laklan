import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';  // Ensure this is imported gl
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <img src="https://via.placeholder.com/150x50" alt="Lachlan Logo" />
          <div className="social-media-icons">
            <a href="#facebook"><i className="fab fa-facebook"></i></a>
            <a href="#instagram"><i className="fab fa-instagram"></i></a>
            <a href="#twitter"><i className="fab fa-twitter"></i></a>
            <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="footer-section contact-section">
          <h4>Contact Us</h4>
          <p>+254 (0) 722 20 94 74</p>
          <p>Warehouse No. 1, Sunflag Industrial Park, Mombasa Road, Nairobi.</p>
          <p>P.O. Box 49470 – 00100 Nairobi</p>
        </div>
        <div className="footer-section order-section">
          <h4>Order tracking</h4>
          <ul>
            <li><a href="#payment">Payment</a></li>
            <li><a href="#delivery">Delivery</a></li>
            <li><a href="#tracking">Order tracking</a></li>
            <li><a href="#exchanges">Exchanges & returns</a></li>
            <li><a href="#terms">Terms & conditions</a></li>
          </ul>
        </div>
        <div className="footer-section newsletter-section">
          <h4>Newsletter signup</h4>
          <p>Be the first to know about our new arrivals and exclusive offers!</p>
          <button>Sign me up!</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Lachlan Kenya Limited. All rights reserved.</p>
        <a href="#privacy">Privacy Policy</a>
      </div>

      {/* WhatsApp Icon */}
      <a href="https://wa.me/254722750265" className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Back to top arrow */}
      <div className="back-to-top" onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i>
      </div>
    </footer>
  );
};

export default Footer;
