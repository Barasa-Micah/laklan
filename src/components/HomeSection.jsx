import React from 'react';
import './HomeSection.css';

const HomeSection = () => {
  const data = [
    {
      title: 'Crop Protection',
      description: 'Insect, disease, and weeds are threats to our food supply as they compete with crops for essential nutrients',
      image: 'https://via.placeholder.com/450x300', 
    },
    {
      title: 'Crop Nutrition',
      description: 'Nutrient management is critical to increase and maintain crop yields on a single parcel of agricultural land.',
      image: 'https://via.placeholder.com/450x300', 
    },
    {
      title: 'Seeds',
      description: 'Promoting healthy living through the supply of only premium quality seeds for all forms, big and small across the region',
      image: 'https://via.placeholder.com/450x300', 
    },
    {
      title: 'Public Health',
      description: 'We promote the welfare of the entire population and protect it from the spread of infectious diseases and environmental hazards.',
      image: 'https://via.placeholder.com/450x300',
    },
  ];

  return (
    <section className="home-section">
      <div className="image-grid">
        {data.map((item, index) => (
          <div className="image-card" key={index} style={{ backgroundImage: `url(${item.image})` }}>
            <div className="overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeSection;
