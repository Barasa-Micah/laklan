import React from 'react';
import './NewsletterSection.css';

const articles = [
  {
    title: 'Phytotoxicity Management',
    description: 'Phytotoxicity is defined as a delay of seed germination, inhibition of plant growth or any adverse effect on plants caused...',
    image: 'https://via.placeholder.com/300', // Placeholder image
  },
  {
    title: 'Why Multiphos 10:25:0 is better than DAP',
    description: 'Multiphos 10-25-0 + TE is a granular Compound NP fertilizer containing secondary and microelements for direct application to...',
    image: 'https://via.placeholder.com/300', // Placeholder image
  },
  {
    title: 'Understanding Calcium using lettuce as an example',
    description: 'Understanding which factor has created the calcium deficiency is the key to growers getting better crops and using their inputs...',
    image: 'https://via.placeholder.com/300', // Placeholder image
  },
];

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      <h2>Newsletter</h2>
      <div className="article-grid">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <img src={article.image} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsletterSection;
