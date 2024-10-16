import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';
import ContactSection from './components/ContactSection';
import CareerPage from './components/CareerPage';
import NewsletterPage from './components/NewsletterPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/newsletter" element={<NewsletterPage />} />
        <Route exact path="/careers" element={<CareerPage />} />
        <Route path="/contact" element={<ContactSection />} /> 
      </Routes>
    </Router>
  );
}

export default App;
