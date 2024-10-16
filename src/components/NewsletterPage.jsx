import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './NewsletterPage.css';

const NewsletterPage = () => {
  const articles = [
    {
      title: 'Bioxx 5000 – Growing Media & Soil Disinfection',
      description: 'A stabilized Chlorine dioxide that offers efficient control of soil and media-borne infections.',
      image: 'https://via.placeholder.com/400',
    },
    {
      title: 'Onion Runal F1',
      description: 'Tested across major onion growing belts of Kenya, promising high yields.',
      image: 'https://via.placeholder.com/400',
    },
    {
      title: 'Topshot 60 OD: A Relief for Rice Farmers',
      description: 'A solution brought by Lachlan Kenya Limited in collaboration with Corteva Agriscience.',
      image: 'https://via.placeholder.com/400',
    },
    // Additional articles...
  ];

  return (
    <>
      <Header />
      <div className="newsletter-page">
        <h1>News & Articles</h1>
        <div className="article-grid">
          {articles.map((article, index) => (
            <div className="article-card" key={index}>
              <img src={article.image} alt={article.title} className="article-img" />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          ))}
        </div>
        <div className="pagination">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>→</span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsletterPage;
