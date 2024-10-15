import React from 'react';
import './ContactSection.css';
import Header from './Header';  // Import the Header component
import Footer from './Footer';  // Import the Footer component

const ContactSection = () => {
  return (
    <>
      <Header /> 
      <section className="contact-section">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <div className="contact-details">
            <div className="address">
              <p><strong>Warehouse No. 1, Sunflag Industrial Park</strong></p>
              <p>Mombasa Road, Opposite Hilton Garden Inn, Nairobi.</p>
              <p>Phone: +254 (0) 722 20 94 74</p>
              <p>Toll-free: 0800 721 498</p>
              <p>Email: <a href="mailto:info@lachlanafrica.com">info@lachlanafrica.com</a></p>
              <p>Monday to Friday, from 9am to 5pm.</p>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?..."
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Map"
            ></iframe>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <div className="form-group checkbox">
              <input type="checkbox" id="privacy-policy" name="privacy-policy" required />
              <label htmlFor="privacy-policy">
                By submitting this form, you agree to our <a href="#privacy-policy">Privacy Policy</a>.
              </label>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>
      <Footer />  
    </>
  );
};

export default ContactSection;
