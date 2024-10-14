import React from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import './App.css';
import InDemandSection from './components/InDemandSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomeSection />
        <InDemandSection />
      </main>
    </div>
  );
}

export default App;
