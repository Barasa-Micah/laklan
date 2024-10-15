import React from 'react';
import Header from './Header';  // Import Header
import Footer from './Footer';  // Import Footer
import './HomePage.css';

const HomePage = () => {
  const homeSectionData = [
    {
      title: 'Crop Protection',
      description: 'Insect, disease, and weeds are threats to our food supply.',
      image: 'https://via.placeholder.com/450x300',
    },
    {
      title: 'Crop Nutrition',
      description: 'Nutrient management is critical to increase and maintain crop yields.',
      image: 'https://via.placeholder.com/450x300',
    },
    {
      title: 'Seeds',
      description: 'Promoting healthy living through the supply of premium seeds.',
      image: 'https://via.placeholder.com/450x300',
    },
    {
      title: 'Public Health',
      description: 'We promote the welfare of the entire population from diseases.',
      image: 'https://via.placeholder.com/450x300',
    },
  ];

  const productData = [
    {
      name: 'K-Othrine WG 250',
      price: 'KShs500.00',
      image: 'https://via.placeholder.com/150',
      hoverImage: 'https://via.placeholder.com/150/0000FF',
    },
    {
      name: 'Lono Plus',
      price: 'KShs435.00 - KShs27,072.00',
      image: 'https://via.placeholder.com/150',
      hoverImage: 'https://via.placeholder.com/150/008000',
    },
    {
      name: 'Premise 200SC',
      price: 'KShs1,034.00 - KShs19,019.00',
      image: 'https://via.placeholder.com/150',
      hoverImage: 'https://via.placeholder.com/150/FF0000',
    },
  ];

  const articles = [
    {
      title: 'Phytotoxicity Management',
      description: 'Phytotoxicity is a delay of seed germination, inhibition of plant growth...',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Why Multiphos 10:25:0 is better than DAP',
      description: 'Multiphos 10-25-0 + TE is a granular Compound NP fertilizer...',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Understanding Calcium using lettuce as an example',
      description: 'Understanding which factor has created the calcium deficiency...',
      image: 'https://via.placeholder.com/300',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />  {/* Use Header */}
      <div className="homepage">
        {/* Home Section */}
        <section className="home-section">
          <div className="image-grid">
            {homeSectionData.map((item, index) => (
              <div className="image-card" key={index} style={{ backgroundImage: `url(${item.image})` }}>
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* In-Demand Products */}
        <section className="in-demand-section">
          <h2>In-demand</h2>
          <div className="product-grid">
            {productData.map((product, index) => (
              <div className="product-card" key={index}>
                <img src={product.image} alt={product.name} className="product-img" />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Find Locate Section */}
        <section className="find-locate-section">
          <div className="left">
            <img src="https://via.placeholder.com/600x400" alt="Find an Agronomist" />
            <div className="text-overlay">
              <h2>Find an agronomist</h2>
              <p>Take advantage of our highly skilled agronomists located across the county.</p>
            </div>
          </div>
          <div className="right">
            <iframe
              src="https://www.google.com/maps/embed?..."
              width="100%"
              height="500"
              allowFullScreen=""
              title="Locate a distributor"
            ></iframe>
            <div className="text-overlay">
              <h2>Locate a distributor</h2>
              <p>We have distributors of Lachlan products located all across the country.</p>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
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

        {/* Footer */}
        <Footer />  {/* Use Footer */}
        
        {/* Back to top arrow */}
        <div className="back-to-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </div>
      </div>
    </>
  );
};

export default HomePage;
