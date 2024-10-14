import React from 'react';
import './FindLocateSection.css';

const FindLocateSection = () => {
  return (
    <section className="find-locate-section">
      <div className="left">
        <img
          src="https://via.placeholder.com/600x400" // Placeholder image for the agronomist
          alt="Find an Agronomist"
        />
        <div className="text-overlay">
          <h2>Find an agronomist</h2>
          <p>Take advantage of our highly skilled agronomist located across the county for free farming advice.</p>
        </div>
      </div>
      <div className="right">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.160794177143!2d36.8051122!3d-1.2879595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10c2d472b1db%3A0x12f6228f99c0ae3c!2sNairobi!5e0!3m2!1sen!2ske!4v1697342769719!5m2!1sen!2ske"
          width="100%"  // Full width of the container
          height="500"  // Increased height to 500px
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Locate a distributor"
        ></iframe>
        <div className="text-overlay">
          <h2>Locate a distributor</h2>
          <p>We have distributors of Lachlan products located all across the country.</p>
        </div>
      </div>
    </section>
  );
};

export default FindLocateSection;
