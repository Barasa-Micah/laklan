import React from 'react';
import './InDemandSection.css';

const products = [
  {
    name: 'K-Othrine WG 250',
    price: 'KShs500.00',
    image: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    name: 'Lono Plus',
    price: 'KShs435.00 - KShs27,072.00',
    image: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    name: 'Premise 200SC',
    price: 'KShs1,034.00 - KShs19,019.00',
    image: 'https://via.placeholder.com/150', // Placeholder image
  },
];

const InDemandSection = () => {
  return (
    <section className="in-demand-section">
      <h2>In-demand</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InDemandSection;
