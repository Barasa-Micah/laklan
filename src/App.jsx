import React from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import InDemandSection from './components/InDemandSection';
import FindLocateSection from './components/FindLocateSection'; // Import the new section
import NewsletterSection from './components/NewsletterSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <InDemandSection />
      <FindLocateSection /> {/* Include the new section here */}
      <NewsletterSection />
    </div>
  );
}

export default App;
